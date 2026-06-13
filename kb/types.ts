/**
 * Shared types for the multi-condition knowledge base.
 *
 * This repository holds general, educational knowledge for several chronic
 * conditions. Each condition lives in its own folder under `kb/<disease>/` and
 * exports a `Disease` (see `defineDisease`). Every piece of knowledge is a typed
 * `KbEntry`; entries are grouped into `KbSection`s; sections belong to a
 * `Disease`.
 *
 * The shared validator (`scripts/validate.mts`) relies on these shapes: within
 * each disease every entry must have a unique `id`, non-empty required text
 * fields, and at least one `source` with a real URL.
 *
 * This is EDUCATIONAL reference material, not individualized medical advice.
 */

/** A citation to a reputable, externally verifiable source. */
export interface Source {
  /** Human-readable label / title, e.g. "Standards of Care in Diabetes — 2025". */
  label: string;
  /** Real, resolvable URL to the source page. */
  url: string;
  /**
   * Organization / publisher / journal, used for at-a-glance provenance.
   * Helps the reader weigh how authoritative a claim is.
   */
  publisher: string;
  /**
   * Publication year, where applicable. Omitted for living/undated pages
   * (e.g. a foundation overview page that is continually updated).
   */
  year?: number;
}

/**
 * Evidence strength label. Used throughout, and especially important for the
 * therapy, experimental, and complementary-medicine sections where being honest
 * about how strong the evidence is matters as much as the facts.
 */
export type EvidenceLevel =
  | "established" // broadly accepted; in major guidelines / standard care
  | "supported" // good controlled evidence; commonly recommended
  | "mixed" // studied but inconsistent / context-dependent
  | "emerging" // early but encouraging; not yet established
  | "preliminary" // small / pilot / single-study; needs confirmation
  | "investigational" // in trials; NOT an approved or established treatment
  | "failed" // tested in a rigorous trial and did NOT work (or was halted)
  | "no-convincing-evidence" // claims exist but good evidence does not support them
  | "historical"; // important past work, no longer the live approach

/** A single, self-contained unit of knowledge. */
export interface KbEntry {
  /** Unique, stable, kebab-case id (unique WITHIN its disease). */
  id: string;
  /** Short title. */
  title: string;
  /** One- or two-sentence plain-language takeaway. */
  summary: string;
  /** Fuller explanation. Layperson-accessible; clinically careful. */
  detail: string;
  /** At least one reputable source. */
  sources: Source[];
  /** Optional free-text tags for grouping / search. */
  tags?: string[];
  /** Optional evidence label (most relevant for therapies & research). */
  evidence?: EvidenceLevel;
  /**
   * Optional caution surfaced to the reader, e.g. "educational only — dosing
   * decisions belong with the care team".
   */
  caution?: string;
}

/** A themed group of entries within one disease. */
export interface KbSection {
  /** Stable, kebab-case id (unique within its disease). */
  id: string;
  /** Section title. */
  title: string;
  /** What this section covers, in one or two sentences. */
  description: string;
  /** The entries in this section. */
  entries: KbEntry[];
}

/** One condition: a named bundle of sections. */
export interface Disease {
  /** Stable, kebab-case id, e.g. "diabetes" (unique across the repo). */
  id: string;
  /** Display name, e.g. "Diabetes Mellitus". */
  name: string;
  /** What this condition is, in one or two sentences. */
  description: string;
  /** The themed sections that make up this disease's knowledge base. */
  sections: KbSection[];
}

/** Convenience helper so section modules read cleanly and stay type-checked. */
export function defineSection(section: KbSection): KbSection {
  return section;
}

/** Convenience helper so each disease's index reads cleanly and type-checks. */
export function defineDisease(disease: Disease): Disease {
  return disease;
}
