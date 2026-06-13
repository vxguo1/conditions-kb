/**
 * Multi-condition knowledge base — top-level registry.
 *
 * Each condition lives in `kb/<disease>/` and exports a `Disease` from its own
 * `index.ts`. This file aggregates every built disease into the `diseases`
 * array. The shared validator and the SOURCES.md builder read from here, so
 * adding a new condition is a two-line change: import it, then list it below.
 *
 * EDUCATIONAL SYNTHESIS — not medical advice. See README.md.
 *
 * ---------------------------------------------------------------------------
 * Planned conditions (see README.md / STRUCTURE.md):
 *   diabetes ✅ built
 *   heart-disease, kidney-disease, lupus, rheumatoid-arthritis, chronic-pain,
 *   depression, ptsd, bipolar-disorder — pending
 * As each is built, create kb/<disease>/ and add it to the registry below.
 * ---------------------------------------------------------------------------
 */
import type { Disease, KbSection, KbEntry } from "./types.js";

import { diabetes } from "./diabetes/index.js";
import { heartDisease } from "./heart-disease/index.js";
import { kidneyDisease } from "./kidney-disease/index.js";
import { lupus } from "./lupus/index.js";
import { rheumatoidArthritis } from "./rheumatoid-arthritis/index.js";
import { chronicPain } from "./chronic-pain/index.js";
import { depression } from "./depression/index.js";
import { ptsd } from "./ptsd/index.js";
import { bipolarDisorder } from "./bipolar-disorder/index.js";

/** Every built condition, in a sensible reading order. */
export const diseases: Disease[] = [
  diabetes,
  heartDisease,
  kidneyDisease,
  lupus,
  rheumatoidArthritis,
  chronicPain,
  depression,
  ptsd,
  bipolarDisorder,
];

/** Look up a disease by id. */
export function getDisease(id: string): Disease | undefined {
  return diseases.find((d) => d.id === id);
}

/** Every section across all diseases, flattened (each tagged with its disease). */
export function allSections(): Array<{ disease: Disease; section: KbSection }> {
  return diseases.flatMap((disease) =>
    disease.sections.map((section) => ({ disease, section })),
  );
}

/** Every entry across all diseases, flattened (each tagged with its disease). */
export function allEntries(): Array<{ disease: Disease; entry: KbEntry }> {
  return diseases.flatMap((disease) =>
    disease.sections.flatMap((section) =>
      section.entries.map((entry) => ({ disease, entry })),
    ),
  );
}

export type { Disease, KbSection, KbEntry, Source } from "./types.js";
