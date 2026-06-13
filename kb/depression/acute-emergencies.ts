import { defineSection } from "../types.js";

/**
 * ACUTE EMERGENCIES — the red-flag safety content, leading with suicide and
 * self-harm safety. This section's first job is to make sure anyone in danger
 * knows how to get help RIGHT NOW: 988 Suicide & Crisis Lifeline (call/text 988;
 * chat at 988lifeline.org) or 911 / local emergency services, 24/7.
 *
 * Compassionate, non-judgmental, non-graphic. Educational recognition and
 * support information — NOT a therapist, NOT a crisis service, and NOT a
 * substitute for professional or emergency care.
 */
export const acuteEmergencies = defineSection({
  id: "acute-emergencies",
  title: "Crisis & Safety (Red Flags)",
  description:
    "Suicide and self-harm safety first: how to get help right now (988 Suicide & Crisis Lifeline — call or text 988, chat at 988lifeline.org — or 911), warning signs, supporting someone in crisis, and other mental-health emergencies. Supportive information, not a substitute for professional or emergency care.",
  entries: [
    {
      id: "if-you-are-in-crisis-988",
      title: "If you are in danger or thinking of harming yourself — get help now",
      summary:
        "If you are in danger or thinking about harming yourself, you are not alone and help is available 24/7: in the US, call or text 988 (Suicide & Crisis Lifeline) or chat at 988lifeline.org; call 911 or go to an emergency room if there is immediate danger.",
      detail:
        "If you are thinking about suicide or harming yourself, please reach out right now — these feelings can be survived, and support is available immediately, day or night. In the United States, you can call or text 988 to reach the 988 Suicide & Crisis Lifeline, or chat online at 988lifeline.org; the service is free, confidential, and available 24/7, with Spanish and interpreter services. If you or someone else is in immediate danger — for example there is a plan, the means to act, or an act in progress — call 911 or go to the nearest emergency room. You don't have to be certain you're 'in crisis enough' to reach out; the Lifeline is for anyone struggling, including emotional distress, overwhelming thoughts, or worry about someone else. Reaching out is an act of courage, not weakness, and counselors are there to listen without judgment and help you through the moment. This knowledge base is educational and is not a crisis service — please use the contacts above to talk to a trained person now.",
      sources: [
        {
          label: "988 Suicide & Crisis Lifeline (call or text 988; chat online)",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://www.samhsa.gov/mental-health/988",
          publisher: "SAMHSA",
        },
      ],
      tags: ["crisis", "suicide-prevention", "988", "emergency", "red-flag"],
      caution:
        "This is not a crisis service. If you may harm yourself or are in danger, contact 988 (call or text, US) or 911 / local emergency services right now. You deserve support.",
    },
    {
      id: "warning-signs-of-suicide",
      title: "Warning signs that someone may be at risk",
      summary:
        "Talking about wanting to die or being a burden, withdrawing, giving away possessions, extreme mood changes, increased substance use, or seeking means to harm oneself are warning signs that deserve immediate attention.",
      detail:
        "Certain signs can indicate that a person may be at risk of suicide and that support is urgently needed. These include talking about wanting to die, feeling hopeless, having no reason to live, being a burden to others, or feeling trapped or in unbearable pain; looking for ways to harm oneself, such as searching for or acquiring means; withdrawing from friends, family, and activities; giving away prized possessions or saying goodbye; sleeping too little or too much; increased use of alcohol or drugs; extreme mood swings; and acting anxious, agitated, or reckless. A sudden sense of calm after a period of deep depression can sometimes also be a warning sign. Not everyone shows clear signs, and these signs do not always mean someone is suicidal — but they are reasons to take the person seriously, ask directly and caringly, and help them connect to support. Risk is highest when someone has a plan or access to means. If you notice these signs in yourself or someone else, reaching out to 988 or emergency services is appropriate.",
      sources: [
        {
          label: "Warning Signs of Suicide",
          url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline — how it helps",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["crisis", "suicide-prevention", "warning-signs", "red-flag"],
      caution:
        "If someone shows these signs, take it seriously. Ask directly and kindly, stay with them if you can, and help them contact 988 or 911. This is educational, not a substitute for professional help.",
    },
    {
      id: "asking-about-suicide-safely",
      title: "Asking about suicide does not plant the idea",
      summary:
        "Research shows that asking someone directly and caringly about suicidal thoughts does not increase risk — it can open the door to relief and help; the key is to listen without judgment and connect them to support.",
      detail:
        "A common fear is that asking someone whether they are thinking about suicide might 'put the idea in their head.' Evidence does not support this; asking directly and compassionately about suicidal thoughts does not increase risk, and can instead bring relief, reduce isolation, and open a path to help. If you are worried about someone, you can ask plainly and kindly — for example, 'Are you thinking about suicide?' — and then listen without judging, arguing, or minimizing. Steps that help include being present and taking them seriously, helping reduce access to means (such as firearms or large quantities of medication) where possible, connecting them to support like the 988 Lifeline or a mental-health professional, and staying with them or staying in contact through the immediate crisis. You don't need to have the perfect words or to 'fix' it; caring presence and helping them reach trained support matters most. If there is immediate danger, call 911. Supporting someone in crisis can be heavy — supporters deserve support too.",
      sources: [
        {
          label: "5 Action Steps to Help Someone Having Thoughts of Suicide",
          url: "https://www.nimh.nih.gov/health/publications/5-action-steps-to-help-someone-having-thoughts-of-suicide",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline — for yourself or someone you're worried about",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["crisis", "suicide-prevention", "supporting-others", "red-flag"],
      caution:
        "Helping someone in crisis is not a substitute for professional care. Connect them to 988 or 911, and look after your own wellbeing too.",
    },
    {
      id: "supporting-someone-in-crisis",
      title: "How to support someone in crisis",
      summary:
        "Stay calm and present, listen without judgment, take them seriously, help limit access to means, and help them connect to 988 or emergency services — and look after yourself as a supporter.",
      detail:
        "When someone you care about is in a mental-health crisis, your steady, non-judgmental presence can make a real difference. Helpful actions include: listening openly without rushing to advice, judgment, or 'silver linings'; acknowledging their pain and that it is real; taking any mention of suicide or self-harm seriously; asking directly and calmly whether they are thinking of harming themselves; helping reduce immediate access to lethal means where you safely can; and helping them connect to professional support — for example calling or texting 988 together, contacting their clinician, or calling 911 if there is immediate danger. Try not to leave a person at imminent risk alone, and avoid promising secrecy when safety is at stake. Afterward, follow-up contact — a check-in call or message — matters and can be protective. Supporting someone through crisis is emotionally demanding, so it is important for supporters to seek their own support, set sustainable limits, and remember that they are not responsible for being the person's sole lifeline. The Lifeline can also help people who are worried about someone else.",
      sources: [
        {
          label: "5 Action Steps to Help Someone Having Thoughts of Suicide",
          url: "https://www.nimh.nih.gov/health/publications/5-action-steps-to-help-someone-having-thoughts-of-suicide",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://www.samhsa.gov/mental-health/988",
          publisher: "SAMHSA",
        },
      ],
      tags: ["crisis", "supporting-others", "suicide-prevention", "red-flag"],
      caution:
        "If there is immediate danger, call 911. You are not expected to be a professional or someone's only support — connecting them to 988 and care, and protecting your own wellbeing, is the goal.",
    },
    {
      id: "self-harm-and-safety-planning",
      title: "Self-harm, urges, and safety planning",
      summary:
        "Urges to self-harm or thoughts of suicide can be intense but are usually temporary; a safety plan made with a clinician — coping steps, supports, and crisis contacts — can help a person get through the worst moments.",
      detail:
        "Many people with depression experience urges toward self-harm or waves of suicidal thinking, and it can help to know that these feelings, however overwhelming, are usually temporary and can pass — getting through the immediate moment is the goal. A 'safety plan' is a practical, written tool, ideally made together with a clinician or via crisis support, that lists a person's personal warning signs, coping strategies that help (such as grounding techniques, distraction, or comforting activities), people and places that provide support, professional and crisis contacts (like 988), and steps to make the environment safer by reducing access to means. Having such a plan ready before a crisis means a person does not have to figure out what to do in the hardest moment. For someone struggling with self-harm, compassionate professional support — rather than shame or judgment — is what helps; self-harm is a sign of deep distress that deserves care. Anyone with these experiences is encouraged to talk with a mental-health professional, and to use crisis lines when urges are strong.",
      sources: [
        {
          label: "988 Suicide & Crisis Lifeline (support and safety planning resources)",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
        {
          label: "5 Action Steps to Help Someone Having Thoughts of Suicide",
          url: "https://www.nimh.nih.gov/health/publications/5-action-steps-to-help-someone-having-thoughts-of-suicide",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["crisis", "self-harm", "safety-plan", "suicide-prevention", "red-flag"],
      caution:
        "If urges feel unmanageable, reach out now — call or text 988 (US) or call 911. A safety plan is made with a professional and does not replace urgent help in a crisis.",
    },
    {
      id: "other-mental-health-emergencies",
      title: "Other situations that need urgent care",
      summary:
        "Beyond suicidal crisis, urgent help is warranted for inability to care for oneself, psychotic symptoms, severe agitation, a possible manic episode, or signs of serotonin syndrome from medications.",
      detail:
        "Some depression-related situations, beyond active suicidal crisis, also warrant urgent professional care. These include being unable to care for oneself or carry out basic needs (eating, drinking, staying safe); experiencing psychotic symptoms such as hallucinations or strong false beliefs, which can occur in severe depression; severe agitation or distress that feels uncontrollable; signs of a manic or hypomanic episode (for example after starting an antidepressant) such as dramatically reduced need for sleep, racing thoughts, or risky behavior, which should be reported promptly; and possible serotonin syndrome — a rare but serious reaction to serotonergic medications causing agitation, confusion, rapid heart rate, high temperature, muscle rigidity, shivering, or twitching, which is a medical emergency. For any of these, contacting the person's mental-health or medical team urgently, calling a crisis line, or seeking emergency care (911) is appropriate. When in doubt about whether a situation is an emergency, it is safer to seek urgent advice — these situations can escalate but generally respond well to prompt help.",
      sources: [
        {
          label: "Serotonin syndrome — symptoms and when it's an emergency",
          url: "https://www.mayoclinic.org/diseases-conditions/serotonin-syndrome/symptoms-causes/syc-20354758",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder — recognizing mania",
          url: "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["crisis", "emergency", "psychosis", "mania", "serotonin-syndrome", "red-flag"],
      caution:
        "These can be emergencies. If someone cannot stay safe or has signs of serotonin syndrome, mania, or psychosis, seek urgent care — call 911 or contact the care team immediately.",
    },
  ],
});
