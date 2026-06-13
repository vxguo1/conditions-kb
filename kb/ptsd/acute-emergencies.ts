import { defineSection } from "../types.js";

/**
 * ACUTE EMERGENCIES (RED FLAGS) — the crisis-safety content. This section LEADS
 * with suicide and self-harm safety and the 988 Suicide & Crisis Lifeline,
 * because for a mental-health condition this is the most important information in
 * the entire knowledge base. It also covers staying safe during a flashback or
 * dissociation, and when to seek urgent care.
 *
 * Framed gently and without graphic detail. This is educational crisis-awareness
 * information — NOT a crisis service and NOT a substitute for emergency help. In
 * an emergency, contact 988 or 911 (US) or local emergency services.
 */
export const acuteEmergencies = defineSection({
  id: "acute-emergencies",
  title: "Crisis Safety & Acute Emergencies (Red Flags)",
  description:
    "The most important safety information: what to do if you or someone else may be in danger of suicide or self-harm (988 Suicide & Crisis Lifeline / 911), staying safe during flashbacks and dissociation, and when to seek urgent help. Educational crisis-awareness — not a crisis service.",
  entries: [
    {
      id: "suicide-crisis-988",
      title: "If you are in crisis or thinking of harming yourself — get help now",
      summary:
        "If you or someone else is in danger or thinking about suicide or self-harm, contact the 988 Suicide & Crisis Lifeline (call or text 988, or chat at 988lifeline.org) or call 911 — free, confidential, and available 24/7.",
      detail:
        "Your safety matters most, and help is available right now. If you are in immediate danger, are thinking about suicide, or are thinking about harming yourself — or you are worried about someone else who is — you do not have to handle it alone. In the United States you can reach the 988 Suicide & Crisis Lifeline 24 hours a day, 7 days a week: call or text 988, or chat online at 988lifeline.org. The Lifeline is free, confidential, and staffed by trained, compassionate counselors. Veterans and service members can reach the Veterans Crisis Line by calling 988 and then pressing 1, by texting 838255, or by chatting online. If there is an immediate, life-threatening emergency — for example, someone has taken action to harm themselves — call 911 or go to the nearest emergency room. Reaching out is a sign of strength, not weakness, and these services exist precisely so that no one has to face a crisis by themselves.",
      sources: [
        {
          label: "988 Suicide & Crisis Lifeline (call or text 988; chat online)",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline (SAMHSA / Vibrant Emotional Health)",
        },
        {
          label: "Veterans & Service Members — Veterans Crisis Line (call 988 then press 1)",
          url: "https://988lifeline.org/help-yourself/veterans-service-members/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["crisis", "suicide", "self-harm", "988", "red-flag", "emergency", "safety"],
      caution:
        "This is educational information, not a crisis service. If you or someone else may be in danger, contact 988 (call or text) or 911 right now — do not wait.",
    },
    {
      id: "warning-signs-suicide",
      title: "Warning signs that someone may be in crisis",
      summary:
        "Talking about wanting to die, feeling hopeless or trapped, withdrawing, giving things away, increased substance use, or sudden mood changes can be warning signs that warrant reaching out for help.",
      detail:
        "Knowing the warning signs of a suicide crisis can help you act early — for yourself or someone you care about. Signs that warrant taking seriously and reaching out for help include talking about wanting to die, to disappear, or being a burden to others; expressing feelings of hopelessness, unbearable emotional pain, or being trapped with no way out; looking for ways to harm oneself; withdrawing from friends, family, or activities; giving away possessions or saying goodbye; increasing use of alcohol or drugs; extreme mood swings; sleeping too much or too little; and acting anxious, agitated, or reckless. The risk is higher when someone has access to means of self-harm. These signs do not mean a crisis is certain, but they are reasons to connect — gently and without judgment — and to seek support. You can call or text 988 to talk through a situation, even if you are unsure whether it is an emergency. Asking someone directly whether they are thinking about suicide does not put the idea in their head; it can open the door to help.",
      sources: [
        {
          label: "Warning Signs and Risk Factors (how to help)",
          url: "https://988lifeline.org/help-someone-else/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
        {
          label: "Warning Signs of Suicide",
          url: "https://www.nimh.nih.gov/health/topics/suicide-prevention",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["crisis", "suicide", "warning-signs", "red-flag", "safety"],
      caution:
        "If you notice these signs in yourself or someone else, reach out now — call or text 988, or call 911 if there is immediate danger.",
    },
    {
      id: "ptsd-suicide-risk-awareness",
      title: "Why crisis safety matters in PTSD",
      summary:
        "PTSD, especially alongside depression or substance use, can raise the risk of suicidal thoughts; knowing this — without alarm — underscores why safety planning and support are important.",
      detail:
        "PTSD can be accompanied by intense emotional pain, hopelessness, sleeplessness, and co-occurring depression or substance use, and research shows that, as a group, people with PTSD have a higher risk of suicidal thoughts than the general population. Sharing this is not meant to frighten anyone or to suggest that suicidal thoughts are inevitable — they are not — but to explain why crisis safety is given such emphasis here and why it is worth taking thoughts of self-harm seriously and seeking support early. Suicidal thoughts are a signal of overwhelming distress, not a character flaw or a permanent state, and they very often ease with help, treatment, and time. A 'safety plan' — created with a clinician, a crisis line, or trusted others — typically includes recognizing personal warning signs, coping steps, people and services to contact (including 988), and reducing access to means of harm during high-risk times. Effective PTSD treatment, and treating co-occurring depression or substance use, also reduces this risk. If thoughts of suicide are present, reaching out to 988 or a professional is the right next step.",
      sources: [
        {
          label: "PTSD and suicide / safety (Self-Help and Coping)",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Suicide Prevention",
          url: "https://www.nimh.nih.gov/health/topics/suicide-prevention",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["crisis", "suicide", "ptsd", "safety-plan", "red-flag"],
      caution:
        "If you are having thoughts of suicide or self-harm, contact 988 (call or text) or 911 now, and tell your care team. A safety plan is best made with professional support.",
    },
    {
      id: "flashback-grounding-safety",
      title: "Staying safe during a flashback",
      summary:
        "A flashback can feel like the trauma is happening again; grounding — reconnecting with the present using the senses — can help, and persistent or unsafe flashbacks warrant professional support.",
      detail:
        "A flashback is a vivid re-experiencing of a traumatic memory that can make it feel, briefly, as though the event is happening again in the present. Flashbacks are frightening but are a recognized PTSD symptom, not a sign of 'losing one's mind,' and they pass. A widely taught coping skill is grounding: using the senses to reconnect with the here-and-now and remind the body that the present moment is safe — for example, noticing several things you can see, hear, and touch right now, feeling your feet on the floor, holding something cold or textured, or saying aloud where you are and today's date. Reminding yourself 'this is a memory; it is not happening now; I am safe' can help. It also helps to plan ahead with a therapist for what to do during a flashback. If flashbacks are frequent, severe, or lead to a person feeling unsafe or unable to tell present from past for an extended time, that is a reason to seek professional help — and if there is any risk of harm to oneself or others, to contact 988 or 911. Grounding is a supportive tool, not a replacement for trauma-focused care.",
      sources: [
        {
          label: "Self-Help and Coping (grounding and coping with symptoms)",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Coping with Traumatic Stress Reactions",
          url: "https://www.ptsd.va.gov/gethelp/coping_stress_reactions.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["flashback", "grounding", "dissociation", "safety", "coping"],
    },
    {
      id: "dissociation-safety",
      title: "Dissociation: when you feel detached or unreal",
      summary:
        "Dissociation — feeling detached from yourself, your surroundings, or your emotions — can be part of PTSD; grounding helps in the moment, and severe or frequent episodes deserve professional attention.",
      detail:
        "Dissociation describes a feeling of disconnection — from one's own body or sense of self (depersonalization), from one's surroundings as if they are dreamlike or unreal (derealization), or from emotions or memory (feeling numb or 'blank,' or losing track of time). It is a way the mind tries to protect itself from overwhelming experiences, and it can occur in PTSD, particularly when something triggers the trauma. While it can be unsettling, dissociation in this context is a recognized response, not a sign of danger to others. In the moment, the same grounding strategies that help with flashbacks can help reconnect with the present: engaging the senses, feeling physical contact with a chair or the floor, naming the current time and place, and slow breathing. If dissociation is frequent, prolonged, leaves a person unable to function or stay safe, or is accompanied by thoughts of self-harm, professional help is important — and in any situation involving immediate risk of harm, contact 988 or 911. A trauma-informed clinician can help with both understanding dissociation and building skills to manage it.",
      sources: [
        {
          label: "Coping with Traumatic Stress Reactions (dissociation and coping)",
          url: "https://www.ptsd.va.gov/gethelp/coping_stress_reactions.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — symptoms",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["dissociation", "grounding", "safety", "coping"],
    },
    {
      id: "when-to-seek-urgent-care",
      title: "When to seek urgent or emergency help",
      summary:
        "Seek urgent help for thoughts of suicide or harming others, being unable to stay safe, severe distress that won't ease, or a mental health crisis — through 988, 911, or an emergency room.",
      detail:
        "Most PTSD care happens over time with a therapist and care team, but some situations call for urgent or emergency help. Reach out right away — to 988 (call or text), 911, or the nearest emergency room — if you or someone else: is thinking about suicide or self-harm, or about harming someone else; has a plan or has taken steps toward self-harm; feels unable to stay safe; is in such severe distress, panic, or despair that it cannot be calmed; is so dissociated or out of touch with reality that safety is at risk; or shows a sudden, severe change in behavior or thinking. Heavy alcohol or drug use during a crisis raises the risk and is another reason to seek help. When in doubt about whether a situation is an emergency, it is always okay — and wise — to call or text 988 to talk it through; you do not need to be certain it is an emergency to reach out. These services are confidential, judgment-free, and available 24/7, and using them early can prevent a crisis from deepening.",
      sources: [
        {
          label: "Get Help — 988 Suicide & Crisis Lifeline (when and how to reach out)",
          url: "https://988lifeline.org/get-help/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — when to see a doctor / get emergency help",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["emergency", "crisis", "when-to-seek-help", "red-flag", "safety", "988"],
      caution:
        "This is general guidance, not a substitute for emergency services. In a suspected emergency, contact 988 (call or text) or 911 immediately.",
    },
  ],
});
