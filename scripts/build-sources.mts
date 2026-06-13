/**
 * build-sources.mts — generate the consolidated bibliography (SOURCES.md).
 *
 * One shared builder for the whole multi-condition repo. It aggregates EVERY
 * source referenced anywhere in the knowledge base, grouped FIRST by disease and
 * then by section. Within a disease, each unique source URL is listed once,
 * under the first section (in reading order) that references it.
 *
 * SOURCES.md is a committed artifact. After editing any kb module, regenerate it
 * (`npm run build:sources`); `npm run validate` will fail if SOURCES.md is out
 * of sync with the KB, so nothing can be silently dropped.
 *
 * Run with:  npm run build:sources   (i.e. tsx scripts/build-sources.mts)
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { diseases } from "../kb/index.js";
import type { Source } from "../kb/types.js";

interface BibEntry extends Source {
  sectionId: string;
  sectionTitle: string;
}

function escapeMd(text: string): string {
  // Neutralize the few characters that would break list/link rendering.
  // URLs are emitted bare (inside <>) so they don't need escaping.
  return text.replace(/([|])/g, "\\$1");
}

const lines: string[] = [];
lines.push("# Consolidated Bibliography");
lines.push("");
lines.push(
  "> **Auto-generated — do not edit by hand.** Regenerate with `npm run build:sources`.",
);
lines.push(
  "> `npm run validate` checks that this file stays in sync with every `sources[]` entry in the knowledge base, so no citation is ever silently dropped.",
);
lines.push("");
lines.push(
  "This is the complete list of every source referenced anywhere in `kb/`, grouped by condition and then by section. Within each condition, each unique source appears once, under the first section that cites it. It is an educational reference list; see the repository README for the medical disclaimer. URLs reflect each publisher's site when this was compiled and may change over time.",
);
lines.push("");

// Repo-wide unique URL count (a source shared across diseases counts once here).
const globalUrls = new Set<string>();
for (const disease of diseases) {
  for (const section of disease.sections) {
    for (const entry of section.entries) {
      for (const src of entry.sources) globalUrls.add(src.url);
    }
  }
}
lines.push(`**Conditions:** ${diseases.length}`);
lines.push("");
lines.push(`**Total unique source URLs (repo-wide):** ${globalUrls.size}`);
lines.push("");

const perDiseaseCounts: Array<{ name: string; count: number }> = [];

for (const disease of diseases) {
  // De-duplicate by URL WITHIN this disease, recording the first section.
  const byUrl = new Map<string, BibEntry>();
  for (const section of disease.sections) {
    for (const entry of section.entries) {
      for (const src of entry.sources) {
        if (!byUrl.has(src.url)) {
          byUrl.set(src.url, {
            ...src,
            sectionId: section.id,
            sectionTitle: section.title,
          });
        }
      }
    }
  }
  const all = [...byUrl.values()];
  perDiseaseCounts.push({ name: disease.name, count: all.length });

  const grouped = disease.sections
    .map((section) => ({
      section,
      items: all
        .filter((s) => s.sectionId === section.id)
        .sort(
          (a, b) =>
            a.publisher.localeCompare(b.publisher) ||
            a.label.localeCompare(b.label),
        ),
    }))
    .filter((g) => g.items.length > 0);

  lines.push(`---`);
  lines.push("");
  lines.push(`# ${escapeMd(disease.name)}`);
  lines.push("");
  lines.push(`**Unique sources for this condition:** ${all.length}`);
  lines.push("");
  lines.push("### Sources per section");
  lines.push("");
  for (const g of grouped) {
    lines.push(`- **${escapeMd(g.section.title)}** — ${g.items.length}`);
  }
  lines.push("");

  for (const g of grouped) {
    lines.push(`## ${escapeMd(g.section.title)}`);
    lines.push("");
    for (const s of g.items) {
      const year = s.year ? ` (${s.year})` : " (n.d.)";
      lines.push(
        `- **${escapeMd(s.label)}** — ${escapeMd(s.publisher)}${year}. <${s.url}>`,
      );
    }
    lines.push("");
  }
}

const outPath = fileURLToPath(new URL("../SOURCES.md", import.meta.url));
writeFileSync(outPath, lines.join("\n"), "utf8");

console.log(
  `Wrote SOURCES.md — ${globalUrls.size} unique URLs across ${diseases.length} condition(s).`,
);
for (const d of perDiseaseCounts) {
  console.log(`  ${d.name.padEnd(28)} ${String(d.count).padStart(3)} unique sources`);
}
