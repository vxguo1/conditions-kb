/**
 * Diabetes — disease index.
 *
 * Bundles every section module for diabetes into a single `Disease` object that
 * the top-level registry (`kb/index.ts`) imports. Sections are listed in a
 * sensible reading order spanning the four coverage pillars (cause, treatment,
 * therapy, patient care) plus diagnosis, complications, experimental, and
 * complementary.
 *
 * EDUCATIONAL SYNTHESIS — not medical advice. Covers type 1, type 2,
 * gestational, and the less-common monogenic/LADA forms.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteComplications } from "./acute-complications.js";
import { medications } from "./medications.js";
import { devicesTechnology } from "./devices-technology.js";
import { drugInteractions } from "./drug-interactions.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { patientCare } from "./patient-care.js";
import { chronicComplications } from "./chronic-complications.js";
import { comorbidities } from "./comorbidities.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const diabetes = defineDisease({
  id: "diabetes",
  name: "Diabetes Mellitus",
  description:
    "A group of conditions marked by high blood glucose from impaired insulin production, insulin resistance, or both — spanning type 1, type 2, gestational, and the less-common monogenic and LADA forms.",
  sections: [
    overview,
    cause,
    diagnosis,
    acuteComplications,
    medications,
    devicesTechnology,
    drugInteractions,
    therapiesLifestyle,
    patientCare,
    chronicComplications,
    comorbidities,
    experimental,
    complementary,
  ],
});
