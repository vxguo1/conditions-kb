/**
 * PTSD — disease index.
 *
 * Bundles every section module for post-traumatic stress disorder into a single
 * `Disease` object that the top-level registry (`kb/index.ts`) imports. Sections
 * are ordered for a sensible reading flow, spanning the core coverage pillars
 * (cause, treatment, therapy, patient care) plus overview, diagnosis, the
 * crisis-safety red-flag section, trauma-focused psychotherapies, coping skills,
 * complications, the required drug-interactions and comorbidities sections, and
 * experimental and complementary.
 *
 * EDUCATIONAL SYNTHESIS — this is supportive, educational information. It is NOT
 * a therapist and NOT a substitute for professional, trauma-informed care. If
 * you or someone else may be in danger or thinking about suicide or self-harm,
 * contact the 988 Suicide & Crisis Lifeline (call or text 988; chat at
 * 988lifeline.org; Veterans Crisis Line: press 1) or 911, 24/7.
 */
import { defineDisease } from "../types.js";

import { overview } from "./overview.js";
import { cause } from "./cause.js";
import { diagnosis } from "./diagnosis.js";
import { acuteEmergencies } from "./acute-emergencies.js";
import { treatments } from "./treatments.js";
import { traumaFocusedTherapies } from "./trauma-focused-therapies.js";
import { therapiesLifestyle } from "./therapies-lifestyle.js";
import { copingSkills } from "./coping-skills.js";
import { patientCare } from "./patient-care.js";
import { complications } from "./complications.js";
import { drugInteractions } from "./drug-interactions.js";
import { comorbidities } from "./comorbidities.js";
import { experimental } from "./experimental.js";
import { complementary } from "./complementary.js";

export const ptsd = defineDisease({
  id: "ptsd",
  name: "Post-Traumatic Stress Disorder (PTSD)",
  description:
    "A mental health condition that can develop after experiencing or witnessing a traumatic event, marked by four symptom clusters — intrusion, avoidance, negative changes in thinking and mood, and changes in arousal and reactivity — and including related patterns such as complex PTSD and acute stress disorder. PTSD is common and treatable. This is supportive, educational information, not a substitute for professional, trauma-informed care.",
  sections: [
    overview,
    cause,
    diagnosis,
    acuteEmergencies,
    treatments,
    traumaFocusedTherapies,
    therapiesLifestyle,
    copingSkills,
    patientCare,
    complications,
    drugInteractions,
    comorbidities,
    experimental,
    complementary,
  ],
});
