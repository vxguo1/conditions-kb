/**
 * Heart disease (cardiovascular disease) — disease index.
 *
 * Bundles every section module into a single `Disease` for the top-level
 * registry. Covers CAD, heart failure (HFrEF/HFpEF), arrhythmias/AFib, valvular
 * disease and hypertension across the four pillars plus diagnosis, emergencies,
 * the required drug-interactions and comorbidities areas, experimental, and
 * complementary.
 *
 * EDUCATIONAL SYNTHESIS — not medical advice.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteEmergencies } from "./acute-emergencies.js";
import { treatments } from "./treatments.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { patientCare } from "./patient-care.js";
import { drugInteractions } from "./drug-interactions.js";
import { comorbidities } from "./comorbidities.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const heartDisease = defineDisease({
  id: "heart-disease",
  name: "Heart Disease (Cardiovascular Disease)",
  description:
    "An umbrella of conditions affecting the heart and blood vessels — coronary artery disease, heart failure (reduced and preserved ejection fraction), arrhythmias including atrial fibrillation, valvular disease, and hypertension.",
  sections: [
    overview,
    cause,
    diagnosis,
    acuteEmergencies,
    treatments,
    therapiesLifestyle,
    patientCare,
    drugInteractions,
    comorbidities,
    experimental,
    complementary,
  ],
});
