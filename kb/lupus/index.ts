/**
 * Lupus (Systemic Lupus Erythematosus) — disease index.
 *
 * Bundles every section module for lupus into a single `Disease` object that the
 * top-level registry (`kb/index.ts`) imports. Sections are listed in a sensible
 * reading order spanning the core coverage pillars (cause, treatment, therapy,
 * patient care) plus diagnosis, flare/red-flag safety, complications, the
 * mandatory drug-interactions and comorbidities sections, a lupus-specific
 * pregnancy/reproductive section, and the experimental and complementary
 * sections.
 *
 * EDUCATIONAL SYNTHESIS — not medical advice. Covers SLE plus the cutaneous,
 * drug-induced, and neonatal forms, and the autoantibody/interferon biology,
 * multi-criteria diagnosis, and organ-threatening complications that define it.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteEmergencies } from "./acute-emergencies.js";
import { treatments } from "./treatments.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { patientCare } from "./patient-care.js";
import { complications } from "./complications.js";
import { drugInteractions } from "./drug-interactions.js";
import { comorbidities } from "./comorbidities.js";
import { pregnancyReproductive } from "./pregnancy-reproductive.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const lupus = defineDisease({
  id: "lupus",
  name: "Lupus (Systemic Lupus Erythematosus)",
  description:
    "A chronic autoimmune disease in which the immune system attacks the body's own tissues, causing inflammation that can affect the skin, joints, kidneys, blood, heart, lungs, and brain — spanning systemic (SLE), cutaneous, drug-induced, and neonatal forms, and marked by an unpredictable flare-and-remission course.",
  sections: [
    overview,
    cause,
    diagnosis,
    acuteEmergencies,
    treatments,
    therapiesLifestyle,
    patientCare,
    complications,
    drugInteractions,
    comorbidities,
    pregnancyReproductive,
    experimental,
    complementary,
  ],
});
