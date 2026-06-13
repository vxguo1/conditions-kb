/**
 * validate.mts — load every disease's kb modules and check integrity.
 *
 * This is the ONE shared validator for the whole multi-condition repo. It runs
 * the same checks for every disease in the registry (`kb/index.ts`).
 *
 * Checks performed:
 *   1. Every disease has id / name / description and at least one section.
 *   2. Disease ids are unique across the repo.
 *   3. Every section has id / title / description and at least one entry;
 *      section ids are unique WITHIN their disease.
 *   4. Every entry has non-empty id / title / summary / detail.
 *   5. Entry ids are unique WITHIN their disease (different diseases may reuse a
 *      generic id like "overview" without colliding).
 *   6. Every entry has >= 1 source, and every source has a label, publisher,
 *      and a syntactically valid http(s) URL.
 *
 * It ALSO checks the consolidated bibliography (SOURCES.md): every source URL
 * used anywhere in the KB must appear there, and SOURCES.md must not list any
 * URL that is no longer in the KB. This guarantees no citation is silently
 * dropped. Regenerate SOURCES.md with `npm run build:sources` if this fails.
 *
 * On success it prints per-disease / per-section / total counts and exits 0.
 * On any failure it prints all problems and exits 1.
 *
 * Run with:  npm run validate   (i.e. tsx scripts/validate.mts)
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { diseases } from "../kb/index.js";
import type { Source } from "../kb/types.js";

const problems: string[] = [];

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidHttpUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

// --- 2: unique disease ids -------------------------------------------------
const seenDiseaseIds = new Map<string, number>();
for (const disease of diseases) {
  if (isNonEmptyString(disease.id)) {
    seenDiseaseIds.set(disease.id, (seenDiseaseIds.get(disease.id) ?? 0) + 1);
  }
}
for (const [id, count] of seenDiseaseIds) {
  if (count > 1) problems.push(`duplicate disease id "${id}" (${count}x)`);
}

// --- per-disease checks ----------------------------------------------------
const kbUrls = new Set<string>();

for (const disease of diseases) {
  const dWhere = `disease "${disease.id ?? "<missing id>"}"`;
  if (!isNonEmptyString(disease.id)) problems.push(`${dWhere}: missing/empty id`);
  if (!isNonEmptyString(disease.name))
    problems.push(`${dWhere}: missing/empty name`);
  if (!isNonEmptyString(disease.description))
    problems.push(`${dWhere}: missing/empty description`);
  if (!Array.isArray(disease.sections) || disease.sections.length === 0) {
    problems.push(`${dWhere}: has no sections`);
    continue;
  }

  // 1 & 3: section-level checks + unique section ids WITHIN this disease.
  const seenSectionIds = new Map<string, number>();
  for (const section of disease.sections) {
    const where = `${dWhere} › section "${section.id ?? "<missing id>"}"`;
    if (!isNonEmptyString(section.id)) problems.push(`${where}: missing/empty id`);
    if (!isNonEmptyString(section.title))
      problems.push(`${where}: missing/empty title`);
    if (!isNonEmptyString(section.description))
      problems.push(`${where}: missing/empty description`);
    if (!Array.isArray(section.entries) || section.entries.length === 0)
      problems.push(`${where}: has no entries`);

    if (isNonEmptyString(section.id)) {
      seenSectionIds.set(section.id, (seenSectionIds.get(section.id) ?? 0) + 1);
    }
  }
  for (const [id, count] of seenSectionIds) {
    if (count > 1)
      problems.push(`${dWhere}: duplicate section id "${id}" (${count}x)`);
  }

  // 4, 5 & 6: entry-level checks + unique entry ids WITHIN this disease.
  const seenEntryIds = new Map<string, number>();
  for (const section of disease.sections) {
    for (const entry of section.entries) {
      const where = `${dWhere} › entry "${entry.id ?? "<missing id>"}"`;
      if (!isNonEmptyString(entry.id)) problems.push(`${where}: missing/empty id`);
      if (!isNonEmptyString(entry.title))
        problems.push(`${where}: missing/empty title`);
      if (!isNonEmptyString(entry.summary))
        problems.push(`${where}: missing/empty summary`);
      if (!isNonEmptyString(entry.detail))
        problems.push(`${where}: missing/empty detail`);

      if (isNonEmptyString(entry.id)) {
        seenEntryIds.set(entry.id, (seenEntryIds.get(entry.id) ?? 0) + 1);
      }

      // Sources: at least one, each well-formed with a valid URL.
      if (!Array.isArray(entry.sources) || entry.sources.length === 0) {
        problems.push(`${where}: has no sources (need >= 1 with a URL)`);
      } else {
        let hasValidUrl = false;
        entry.sources.forEach((src: Source, i: number) => {
          const sWhere = `${where} source[${i}]`;
          if (!isNonEmptyString(src.label))
            problems.push(`${sWhere}: missing/empty label`);
          if (!isNonEmptyString(src.publisher))
            problems.push(`${sWhere}: missing/empty publisher`);
          if (!isNonEmptyString(src.url)) {
            problems.push(`${sWhere}: missing/empty url`);
          } else if (!isValidHttpUrl(src.url)) {
            problems.push(`${sWhere}: invalid http(s) url "${src.url}"`);
          } else {
            hasValidUrl = true;
            kbUrls.add(src.url);
          }
        });
        if (!hasValidUrl)
          problems.push(`${where}: has sources but none with a valid URL`);
      }
    }
  }
  for (const [id, count] of seenEntryIds) {
    if (count > 1)
      problems.push(`${dWhere}: duplicate entry id "${id}" (${count}x)`);
  }
}

// --- consolidated bibliography (SOURCES.md) coverage -----------------------
// Every URL used in the KB must appear in SOURCES.md, and vice-versa.
let bibliographyOk = false;
const sourcesPath = fileURLToPath(new URL("../SOURCES.md", import.meta.url));
let sourcesText = "";
try {
  sourcesText = readFileSync(sourcesPath, "utf8");
} catch {
  problems.push(
    "SOURCES.md not found — run `npm run build:sources` to generate the bibliography",
  );
}

if (sourcesText) {
  // Extract every http(s) URL from the bibliography. URLs are emitted inside
  // angle brackets (<url>), so match on those delimiters — this preserves URLs
  // that themselves contain parentheses (e.g. some journal DOIs).
  const bibUrls = new Set<string>();
  for (const m of sourcesText.matchAll(/<(https?:\/\/[^\s<>]+)>/g)) {
    bibUrls.add(m[1].trim());
  }

  const missingFromBib = [...kbUrls].filter((u) => !bibUrls.has(u));
  const staleInBib = [...bibUrls].filter((u) => !kbUrls.has(u));

  for (const u of missingFromBib) {
    problems.push(
      `SOURCES.md is missing a KB source URL (run build:sources): ${u}`,
    );
  }
  for (const u of staleInBib) {
    problems.push(
      `SOURCES.md lists a URL no longer in the KB (run build:sources): ${u}`,
    );
  }
  bibliographyOk = missingFromBib.length === 0 && staleInBib.length === 0;
}

// --- report ----------------------------------------------------------------
const line = "─".repeat(64);
console.log(line);
console.log("Conditions KB — validation");
console.log(line);

let grandEntries = 0;
let grandSources = 0;
let grandSections = 0;
for (const disease of diseases) {
  let dEntries = 0;
  let dSources = 0;
  console.log(`\n${disease.name}  (id: ${disease.id})`);
  for (const section of disease.sections) {
    const count = section.entries.length;
    dEntries += count;
    dSources += section.entries.reduce(
      (n, e) => n + (e.sources?.length ?? 0),
      0,
    );
    console.log(
      `  ${section.id.padEnd(24)} ${String(count).padStart(3)} entries  — ${section.title}`,
    );
  }
  console.log(
    `  ${"·".repeat(24)} ${String(dEntries).padStart(3)} entries in ${disease.sections.length} sections, ${dSources} source refs`,
  );
  grandEntries += dEntries;
  grandSources += dSources;
  grandSections += disease.sections.length;
}

console.log(`\n${line}`);
console.log(`  Diseases:        ${diseases.length}`);
console.log(`  Sections:        ${grandSections}`);
console.log(`  Entries:         ${grandEntries}`);
console.log(`  Source refs:     ${grandSources}`);
console.log(`  Unique sources:  ${kbUrls.size}`);
console.log(
  `  Bibliography:    ${bibliographyOk ? "in sync with SOURCES.md" : "OUT OF SYNC — run npm run build:sources"}`,
);
console.log(line);

if (problems.length > 0) {
  console.error(`\n❌ Validation FAILED with ${problems.length} problem(s):\n`);
  for (const p of problems) console.error(`  • ${p}`);
  console.error("");
  process.exit(1);
}

console.log("✅ All entries valid: unique ids per disease, required fields");
console.log("   present, and every entry has at least one sourced URL.");
process.exit(0);
