/**
 * Rheumatoid Arthritis — disease index.
 *
 * Bundles every section module for rheumatoid arthritis (RA) into a single
 * `Disease` object that the top-level registry (`kb/index.ts`) imports.
 * Sections are listed in a sensible reading order spanning the coverage pillars
 * (cause, treatment, therapy, patient care) plus diagnosis, red-flag safety,
 * complications, the required drug-interactions and comorbidities sections, and
 * experimental and complementary material.
 *
 * EDUCATIONAL SYNTHESIS — not medical advice. RA is a chronic, systemic
 * autoimmune inflammatory arthritis; treatment and interaction decisions belong
 * with the person's care team and pharmacist.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { symptoms } from "./symptoms.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteEmergencies } from "./acute-emergencies.js";
import { treatments } from "./treatments.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { patientCare } from "./patient-care.js";
import { complications } from "./complications.js";
import { drugInteractions } from "./drug-interactions.js";
import { comorbidities } from "./comorbidities.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const rheumatoidArthritis = defineDisease({
  id: "rheumatoid-arthritis",
  name: "Rheumatoid Arthritis",
  description:
    "A chronic, systemic autoimmune disease in which the immune system attacks the lining of the joints, causing symmetric inflammatory polyarthritis that can damage joints and affect organs beyond them — managed with disease-modifying drugs and best treated early.",
  sections: [
    overview,
    symptoms,
    cause,
    diagnosis,
    acuteEmergencies,
    treatments,
    therapiesLifestyle,
    patientCare,
    complications,
    drugInteractions,
    comorbidities,
    experimental,
    complementary,
  ],
});
