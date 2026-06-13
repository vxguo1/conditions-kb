/**
 * Depression — disease index.
 *
 * Bundles every section module for depression into a single `Disease` object
 * that the top-level registry (`kb/index.ts`) imports. Sections are listed in a
 * sensible reading order spanning the core coverage pillars (cause, treatment,
 * therapy/lifestyle, patient care) plus overview, diagnosis, crisis safety,
 * brain stimulation, psychotherapy, complications, drug interactions,
 * comorbidities, experimental, and complementary.
 *
 * EDUCATIONAL SYNTHESIS — supportive, educational information and NOT a
 * substitute for professional mental-health care or a crisis service. Covers
 * major depressive disorder, persistent depressive disorder (dysthymia),
 * perinatal/postpartum, seasonal, and treatment-resistant forms.
 *
 * If you or someone else may be in danger or thinking of self-harm: in the US,
 * call or text 988 (Suicide & Crisis Lifeline), chat at 988lifeline.org, or call
 * 911 — available 24/7.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteEmergencies } from "./acute-emergencies.js";
import { treatments } from "./treatments.js";
import { brainStimulation } from "./brain-stimulation.js";
import { psychotherapy } from "./psychotherapy.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { patientCare } from "./patient-care.js";
import { complications } from "./complications.js";
import { drugInteractions } from "./drug-interactions.js";
import { comorbidities } from "./comorbidities.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const depression = defineDisease({
  id: "depression",
  name: "Depression (Major Depressive Disorder)",
  description:
    "A common, treatable mood disorder marked by persistent low mood and/or loss of interest with other symptoms that affect how a person feels, thinks, and functions — spanning major depressive disorder, persistent depressive disorder (dysthymia), perinatal/postpartum, seasonal, and treatment-resistant forms. Supportive, educational information — not a substitute for professional mental-health care.",
  sections: [
    overview,
    cause,
    diagnosis,
    acuteEmergencies,
    treatments,
    brainStimulation,
    psychotherapy,
    therapiesLifestyle,
    patientCare,
    complications,
    drugInteractions,
    comorbidities,
    experimental,
    complementary,
  ],
});
