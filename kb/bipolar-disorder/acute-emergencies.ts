import { defineSection } from "../types.js";

/**
 * ACUTE EMERGENCIES (RED FLAGS) — the safety-critical section. It LEADS with
 * suicide/self-harm safety and the 988 Suicide & Crisis Lifeline, then covers
 * severe manic episodes, psychosis, and dangerous behavior as psychiatric
 * emergencies, and lithium toxicity as a medical emergency.
 *
 * This is supportive, EDUCATIONAL recognition information — NOT a therapist, NOT
 * a crisis service, and NOT a substitute for professional mental-health care.
 * Anyone in crisis needs immediate human help.
 */
export const acuteEmergencies = defineSection({
  id: "acute-emergencies",
  title: "Acute Emergencies (Red Flags)",
  description:
    "When a bipolar situation is an emergency. Leads with suicide and self-harm safety and the 988 Suicide & Crisis Lifeline, then covers severe mania, psychosis, and dangerous behavior as psychiatric emergencies, and lithium toxicity as a medical emergency.",
  entries: [
    {
      id: "suicide-self-harm-crisis",
      title: "Thoughts of suicide or self-harm — get help now",
      summary:
        "If you or someone you know is thinking about suicide or self-harm, reach out immediately: in the U.S. call or text 988 (the Suicide & Crisis Lifeline) or chat at 988lifeline.org, available 24/7; call 911 or go to the nearest emergency room if there is immediate danger.",
      detail:
        "Bipolar disorder carries a higher risk of suicidal thoughts and behavior, especially during depressive and mixed episodes, so knowing what to do in a crisis is the most important safety information here. If you are having thoughts of suicide or self-harm, or you are worried about someone who is, help is available right now. In the United States, the 988 Suicide & Crisis Lifeline offers free, confidential support 24 hours a day, 7 days a week — call or text 988, or chat online at 988lifeline.org — and you do not have to be suicidal to reach out; distress, overwhelm, or worry about a loved one are all valid reasons to call. If there is immediate danger to life, call 911 or go to the nearest emergency room. Warning signs to take seriously include talking about wanting to die or be gone, feeling hopeless or trapped, looking for means, withdrawing, giving away possessions, or sudden calm after deep despair. Take any mention of suicide seriously, stay with the person if you safely can, help remove access to means, and connect them to professional help. You are not alone, and reaching out is a sign of strength, not weakness.",
      sources: [
        {
          label: "988 Suicide & Crisis Lifeline (call or text 988; chat online)",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://www.samhsa.gov/mental-health/988",
          publisher: "SAMHSA (U.S. Substance Abuse and Mental Health Services Administration)",
        },
        {
          label: "Suicide Prevention — warning signs and how to help",
          url: "https://www.nimh.nih.gov/health/topics/suicide-prevention",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["red-flag", "suicide", "crisis", "safety", "988"],
      caution:
        "If you or someone else is in immediate danger, call 911. For support any time, call or text 988 or chat at 988lifeline.org. This page is educational and is not a crisis service.",
    },
    {
      id: "supporting-someone-in-crisis",
      title: "Helping someone who may be suicidal",
      summary:
        "If you're worried someone is suicidal, ask directly, listen without judgment, help keep them safe by limiting access to means, stay connected, and help them reach professional help or 988 — don't leave them alone in immediate danger.",
      detail:
        "If you are concerned that someone with bipolar disorder may be suicidal, you can make a real difference, and asking about suicide does not plant the idea — it opens the door to help. Evidence-informed steps include: ask directly and calmly whether they are thinking about suicide; be there and listen without judging or rushing to fix; help keep them safe by reducing access to lethal means such as firearms and stockpiled medications; help them connect to ongoing support, including the 988 Suicide & Crisis Lifeline (call or text 988) and their care team; and follow up to stay connected afterward. If the person is in immediate danger or has begun to harm themselves, call 911 or get them to an emergency room, and stay with them if it is safe to do so. Supporting someone in crisis is hard, and helpers deserve support too — 988 can help you, the concerned friend or family member, as well. This is general educational guidance, not a substitute for professional crisis intervention.",
      sources: [
        {
          label: "Suicide Prevention — 5 action steps to help someone",
          url: "https://www.nimh.nih.gov/health/topics/suicide-prevention",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline — help for yourself or others",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["red-flag", "suicide", "crisis", "caregiver", "safety", "988"],
      caution:
        "If someone is in immediate danger, call 911. You can call or text 988 for guidance on helping a loved one, too.",
    },
    {
      id: "severe-manic-episode",
      title: "Severe manic episode — a psychiatric emergency",
      summary:
        "A severe manic episode — extreme agitation, going days without sleep, reckless or dangerous behavior, or inability to function — needs urgent psychiatric help; call the care team, a crisis line, or emergency services.",
      detail:
        "A full manic episode can become a psychiatric emergency. Warning signs that someone needs urgent help include going for days with very little or no sleep while remaining energized, severe agitation or aggression, rapidly escalating risky behavior (such as reckless spending, driving, or sexual behavior), grandiose beliefs leading to dangerous decisions, an inability to care for basic needs, or losing touch with reality (see the psychosis entry). In these situations the person may not recognize they are unwell, which makes the role of family and friends important. Urgent help can be reached by contacting the person's psychiatrist or care team, calling a crisis line such as the 988 Suicide & Crisis Lifeline (call or text 988), or, if there is danger to the person or others, calling 911 or going to an emergency room. Severe mania is treatable, often requiring prompt medication adjustment and sometimes a brief hospital stay to keep the person safe while the episode is brought under control. Acting early can prevent serious harm.",
      sources: [
        {
          label: "Bipolar disorder — when to seek emergency help (severe symptoms)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder — severe symptoms and getting help",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["red-flag", "mania", "emergency", "psychiatric-emergency", "safety"],
      caution:
        "If a person in a manic episode is a danger to themselves or others, call 911. For urgent support, contact the care team or call/text 988.",
    },
    {
      id: "psychosis-emergency",
      title: "Psychosis (losing touch with reality) — urgent help needed",
      summary:
        "Hallucinations, delusions, paranoia, or severe confusion can occur in severe mania or depression and are a reason to seek urgent psychiatric care; the person may not realize they are unwell.",
      detail:
        "Psychosis means losing contact with reality and can occur during severe manic or, less commonly, severe depressive episodes in bipolar disorder. Signs include hallucinations (seeing, hearing, or sensing things that are not there), delusions (fixed false beliefs, such as grandiose convictions of special powers or paranoid beliefs that others intend harm), severe paranoia, disorganized or incoherent thinking and speech, and profound confusion. Psychosis is frightening for the person and those around them, and a key feature is that the person often cannot tell that their perceptions or beliefs are not real, so they may not seek help on their own. This is a reason for urgent psychiatric evaluation: contact the care team or a crisis line (call or text 988), or call 911 or go to an emergency room if there is danger. Psychosis in bipolar disorder is treatable, frequently with medication and sometimes hospitalization, and getting help promptly improves safety and recovery. It is a medical symptom of the illness, not a moral failing or a sign the person is 'dangerous.'",
      sources: [
        {
          label: "Bipolar Disorder — psychosis during episodes",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — symptoms including psychosis",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["red-flag", "psychosis", "emergency", "safety"],
      caution:
        "Psychosis warrants urgent psychiatric care. If there is danger, call 911; otherwise contact the care team or call/text 988.",
    },
    {
      id: "lithium-toxicity",
      title: "Lithium toxicity — a medical emergency",
      summary:
        "Lithium has a narrow safe range, and levels can climb into a toxic, dangerous range; early signs include worsening tremor, nausea, vomiting, diarrhea, drowsiness, confusion, and unsteadiness — these need urgent medical attention.",
      detail:
        "Lithium is a highly effective mood stabilizer, but it has a narrow therapeutic index, meaning the difference between a helpful level and a harmful one is small. Lithium toxicity is a medical emergency. Early warning signs include a coarse or worsening hand tremor, nausea, vomiting, diarrhea, increased thirst and urination, drowsiness, muscle weakness, and unsteadiness; as toxicity worsens it can cause slurred speech, confusion, blurred vision, ringing in the ears, jerky movements, seizures, irregular heartbeat, and loss of consciousness. Levels can rise for several reasons — dehydration, a low-salt diet, vomiting or diarrhea, hot weather with heavy sweating, kidney problems, taking too much, or interactions with certain medicines (see the Drug Interactions section). Anyone taking lithium who develops these symptoms should seek urgent medical advice or emergency care and not simply 'wait it out,' and people on lithium are usually advised to stay well hydrated, keep salt intake steady, and have their blood levels and kidney and thyroid function checked regularly. If severe toxicity is suspected, call emergency services.",
      sources: [
        {
          label: "Lithium — toxicity, warning signs, and what to do",
          url: "https://www.nhs.uk/medicines/lithium/",
          publisher: "NHS (UK)",
        },
        {
          label: "Lithium — side effects and signs of high levels",
          url: "https://www.nhs.uk/medicines/lithium/side-effects-of-lithium/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["red-flag", "lithium", "toxicity", "emergency", "medical-emergency", "safety"],
      caution:
        "Suspected lithium toxicity is a medical emergency — seek urgent care. Do not stop or change lithium on your own; ask the prescriber. Stay hydrated and keep salt intake steady.",
    },
    {
      id: "when-to-seek-emergency-care",
      title: "When a bipolar situation is an emergency",
      summary:
        "Suicidal thoughts or actions, danger to self or others, psychosis, days without sleep with escalating mania, severe medication reactions, or signs of lithium toxicity all warrant urgent or emergency help.",
      detail:
        "Some situations in bipolar disorder need urgent professional help rather than waiting for the next appointment. Seek emergency care (911 in the U.S.) or urgent help right away for: any suicidal thoughts with a plan or intent, or any act of self-harm; a person being a danger to themselves or others; psychosis (hallucinations, delusions, severe confusion); a severe manic episode with days of sleeplessness and escalating dangerous behavior; or signs of a serious medication problem, including suspected lithium toxicity or a spreading rash on lamotrigine (which can rarely signal a severe skin reaction). For distress that is not immediately life-threatening but feels like more than you can handle, the 988 Suicide & Crisis Lifeline (call or text 988) and your care team are there to help, and many areas have mobile crisis teams. When in doubt about whether something is an emergency, it is always safer to reach out — crises in bipolar disorder are treatable and respond well to prompt help. This is general guidance and does not replace emergency services or professional judgment.",
      sources: [
        {
          label: "Bipolar Disorder — when and how to get help",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["red-flag", "emergency", "when-to-seek-help", "safety", "988"],
      caution:
        "In a suspected emergency, call 911 or your local emergency number. For 24/7 support, call or text 988 or chat at 988lifeline.org.",
    },
  ],
});
