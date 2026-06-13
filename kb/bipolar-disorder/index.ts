/**
 * Bipolar Disorder — disease index.
 *
 * Bundles every section module for bipolar disorder into a single `Disease`
 * object that the top-level registry (`kb/index.ts`) imports. Sections are
 * listed in a sensible reading order spanning the core coverage pillars (cause,
 * treatment, therapy, patient care) plus diagnosis, the safety-critical acute
 * emergencies, mood monitoring, complications, drug interactions, comorbidities,
 * experimental, and complementary.
 *
 * SUPPORTIVE, EDUCATIONAL SYNTHESIS — not a therapist and not a substitute for
 * professional mental-health care. Covers bipolar I, bipolar II, cyclothymia,
 * mixed features, and rapid cycling. If you or someone you know is in crisis, in
 * the U.S. call or text 988 (Suicide & Crisis Lifeline) or 911.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteEmergencies } from "./acute-emergencies.js";
import { treatments } from "./treatments.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { patientCare } from "./patient-care.js";
import { moodMonitoring } from "./mood-monitoring.js";
import { complications } from "./complications.js";
import { drugInteractions } from "./drug-interactions.js";
import { comorbidities } from "./comorbidities.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const bipolarDisorder = defineDisease({
  id: "bipolar-disorder",
  name: "Bipolar Disorder",
  description:
    "A treatable, brain-based mood condition marked by episodes of mania or hypomania and, usually, depression — spanning bipolar I, bipolar II, and cyclothymia, with features such as mixed states and rapid cycling. Educational and supportive, not a substitute for professional mental-health care.",
  sections: [
    overview,
    cause,
    diagnosis,
    acuteEmergencies,
    treatments,
    therapiesLifestyle,
    patientCare,
    moodMonitoring,
    complications,
    drugInteractions,
    comorbidities,
    experimental,
    complementary,
  ],
});
