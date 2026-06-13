/**
 * Chronic Pain — disease index.
 *
 * Bundles every section module for chronic pain into a single `Disease` object
 * that the top-level registry (`kb/index.ts`) imports. Sections are listed in a
 * sensible reading order spanning the core coverage pillars (cause, treatment,
 * therapy, patient care) plus diagnosis, red-flag safety, psychological care,
 * complications, key drug interactions, comorbidities, experimental, and
 * complementary.
 *
 * EDUCATIONAL SYNTHESIS — not medical advice. Covers chronic pain (pain lasting
 * more than three months) across nociceptive, neuropathic, and nociplastic
 * mechanisms and common conditions such as low back pain, neuropathy,
 * fibromyalgia, and arthritis pain. Treatment, dosing, opioid, and interaction
 * decisions belong with the person's care team and pharmacist.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteEmergencies } from "./acute-emergencies.js";
import { treatments } from "./treatments.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { psychologicalTherapies } from "./psychological-therapies.js";
import { patientCare } from "./patient-care.js";
import { complications } from "./complications.js";
import { drugInteractions } from "./drug-interactions.js";
import { comorbidities } from "./comorbidities.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const chronicPain = defineDisease({
  id: "chronic-pain",
  name: "Chronic Pain",
  description:
    "Pain that persists or recurs for more than three months — understood today through a biopsychosocial lens and classified by mechanism (nociceptive, neuropathic, and nociplastic/central sensitization) — spanning common conditions such as chronic low back pain, neuropathy, fibromyalgia, and arthritis pain.",
  sections: [
    overview,
    cause,
    diagnosis,
    acuteEmergencies,
    treatments,
    therapiesLifestyle,
    psychologicalTherapies,
    patientCare,
    complications,
    drugInteractions,
    comorbidities,
    experimental,
    complementary,
  ],
});
