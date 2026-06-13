/**
 * Kidney disease (chronic kidney disease) — disease index.
 *
 * Bundles every section module for chronic kidney disease (CKD) into a single
 * `Disease` object that the top-level registry (`kb/index.ts`) imports. Sections
 * are listed in a sensible reading order spanning the core coverage pillars
 * (cause, treatment, therapy, patient care) plus overview/staging, diagnosis,
 * red-flag safety, dialysis/transplant, nutrition, complications, key drug
 * interactions, comorbidities, experimental, and complementary.
 *
 * EDUCATIONAL SYNTHESIS — not medical advice. Covers CKD stages G1–G5 and
 * albuminuria categories A1–A3, the eGFR/ACR measures, dialysis and transplant,
 * the modern kidney-and-heart-protective treatments, and the cardiovascular–
 * kidney–metabolic comorbidity story.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { staging } from "./staging.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteEmergencies } from "./acute-emergencies.js";
import { treatments } from "./treatments.js";
import { dialysisTransplant } from "./dialysis-transplant.js";
import { nutrition } from "./nutrition.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { patientCare } from "./patient-care.js";
import { complications } from "./complications.js";
import { drugInteractions } from "./drug-interactions.js";
import { comorbidities } from "./comorbidities.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const kidneyDisease = defineDisease({
  id: "kidney-disease",
  name: "Chronic Kidney Disease",
  description:
    "A long-term condition in which the kidneys are damaged or filter less well than they should — defined and tracked by eGFR and albuminuria (ACR), staged G1–G5 — spanning early, often silent disease through kidney failure treated with dialysis or transplant.",
  sections: [
    overview,
    staging,
    cause,
    diagnosis,
    acuteEmergencies,
    treatments,
    dialysisTransplant,
    nutrition,
    therapiesLifestyle,
    patientCare,
    complications,
    drugInteractions,
    comorbidities,
    experimental,
    complementary,
  ],
});
