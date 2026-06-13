import { defineSection } from "../types.js";

/**
 * PATIENT CARE & SELF-MANAGEMENT — living day to day with chronic pain: setting
 * realistic function-focused goals, self-management and tracking, flare
 * planning, mental health and emotional wellbeing, work and relationships, and
 * safe medication storage. The person is the central member of their own care
 * team.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Patient Care & Self-Management",
  description:
    "Living with chronic pain day to day: realistic function-focused goals, self-management and tracking, planning for flares, protecting mental health, work and relationships, and safe storage and handling of medicines.",
  entries: [
    {
      id: "realistic-goals",
      title: "Setting realistic, function-focused goals",
      summary:
        "Because complete pain relief is often not achievable, effective care aims at meaningful improvements in function, activity, and quality of life — goals that are motivating and within reach.",
      detail:
        "For many people, chronic pain cannot be made to disappear, and chasing a pain score of zero can lead to frustration, escalating treatments, and disappointment. Modern pain care therefore reframes success around function and quality of life: being able to sleep better, walk further, return to work or hobbies, play with grandchildren, or simply do more of what matters. These goals are concrete, measurable, and motivating, and pursuing them often reduces pain as a by-product because activity, mood, and sleep all improve. Setting goals collaboratively with the care team — specific, realistic, and personally meaningful — gives direction to the plan and a fairer way to judge whether treatments are helping than the pain number alone. It also shifts the focus from a passive search for a cure to an active process the person leads. Accepting that the aim is to live well alongside pain, rather than to eliminate it, is not giving up; for most people it is the path that actually improves both pain and life.",
      sources: [
        {
          label: "Chronic Pain (goals of treatment and quality of life)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Chronic Pain (function-focused management)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["patient-care", "goals", "function", "self-management"],
    },
    {
      id: "self-management-and-tracking",
      title: "Self-management and the person's central role",
      summary:
        "People with chronic pain are the most important members of their own care team; learning self-management skills and tracking patterns helps them take an active, informed role.",
      detail:
        "Chronic pain is managed day to day mostly by the person living with it, so self-management skills are central to good outcomes. These include understanding the condition, using pacing and graded activity, practicing relaxation or mindfulness, keeping up exercise and sleep routines, taking medicines as agreed, and knowing how to handle flares. Many people benefit from tracking — a simple diary or app noting pain levels, activity, sleep, mood, triggers, and what helps — which reveals patterns, supports better conversations with clinicians, and shows progress that day-to-day fluctuations can hide. Structured self-management or pain-education programs, sometimes led by peers, teach these skills and consistently improve confidence and coping. The shift from being a passive recipient of treatment to an active, informed partner is itself therapeutic, because a sense of control and self-efficacy is linked to better pain outcomes. None of this means going it alone; it means working in partnership with the care team, who provide expertise, treatment, and support while the person leads the daily work.",
      sources: [
        {
          label: "9 Things You Should Know About Chronic Pain and Complementary Health Approaches",
          url: "https://www.nccih.nih.gov/health/tips/things-you-should-know-about-chronic-pain-and-complementary-health-approaches",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Chronic Pain (self-management)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["patient-care", "self-management", "tracking", "self-efficacy"],
    },
    {
      id: "flare-planning",
      title: "Planning for flares",
      summary:
        "Pain flares — temporary worsening — are a normal part of chronic pain; having a planned, calm response reduces their impact and helps avoid the boom-and-bust and fear cycles that make pain worse.",
      detail:
        "Even with good management, chronic pain often comes with flares — periods when pain temporarily worsens, sometimes for an obvious reason (overdoing it, stress, poor sleep, illness, weather) and sometimes for no clear reason. Flares are distressing but usually temporary and not a sign that damage is occurring or that all progress is lost. Having a flare plan agreed with the care team helps: it might include gentle continuation of movement within limits (rather than complete rest), relaxation and breathing techniques, using agreed coping strategies and any short-term measures the care team has advised, reducing nonessential demands, and reminding oneself that the flare will pass. Reacting to every flare with fear, prolonged rest, or escalating medication can deepen the boom-and-bust cycle and increase disability over time, whereas a calm, practiced response limits the disruption. Tracking flares can also reveal triggers to manage. Knowing in advance how to respond turns flares from frightening setbacks into manageable bumps, preserving momentum toward the person's goals.",
      sources: [
        {
          label: "Chronic Pain (managing flares and self-management)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Non-Drug Pain Management (coping strategies)",
          url: "https://medlineplus.gov/nondrugpainmanagement.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["patient-care", "flare", "coping", "self-management"],
    },
    {
      id: "mental-health-and-wellbeing",
      title: "Protecting mental and emotional wellbeing",
      summary:
        "Living with persistent pain takes an emotional toll; attending to mood, stress, and social connection is part of pain care, and reaching out for mental-health support is a strength, not a weakness.",
      detail:
        "Chronic pain affects far more than the body. It can wear down mood, fuel anxiety and frustration, disturb sleep, strain relationships, and lead to isolation as activities and social contact shrink — and these effects loop back to worsen the pain itself. Recognizing this, good care treats emotional wellbeing as part of pain management, not a separate issue. Helpful steps include staying connected to people, keeping up valued activities in adapted forms, managing stress, maintaining routines, and seeking support early when mood or anxiety becomes a struggle. Depression and anxiety are common with chronic pain and are very treatable; getting help for them often improves pain and function as well. Peer support — connecting with others who understand — can reduce isolation and offer practical wisdom. There should be no shame in seeking counseling, joining a support group, or asking the care team about mental-health resources; doing so is a constructive, proactive part of managing a hard condition. If feelings of hopelessness or thoughts of self-harm arise, it is important to reach out for help urgently.",
      sources: [
        {
          label: "Chronic Pain (emotional impact and mental health)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Chronic Pain (psychosocial impact)",
          url: "https://medlineplus.gov/chronicpain.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["patient-care", "mental-health", "wellbeing", "support"],
      caution:
        "If you have thoughts of self-harm or feel unable to cope, seek help urgently — contact a crisis line, your care team, or emergency services.",
    },
    {
      id: "work-relationships-daily-life",
      title: "Work, relationships, and daily life",
      summary:
        "Adapting work, home tasks, and relationships — through pacing, adjustments, communication, and support — helps people stay engaged in life, which itself supports better pain outcomes.",
      detail:
        "Chronic pain reaches into work, family, and everyday tasks, but with adjustments many people stay meaningfully engaged — and staying engaged generally helps pain rather than harming it. At work, reasonable adjustments (modified duties, flexible hours, ergonomic changes, breaks for movement) can make staying in or returning to work possible, which benefits finances, identity, and wellbeing; prolonged time off, by contrast, can worsen outcomes. At home, planning and pacing tasks, using aids, and sharing the load help. Relationships can be strained when pain is invisible and others struggle to understand; honest communication about needs and limits, and including loved ones in understanding the condition, can ease this. Loved ones can support best by encouraging activity and independence rather than over-protecting, which (though well-meant) can reinforce disability. Occupational therapists, employers' support schemes, and pain-management programs offer practical help. The recurring theme is adaptation rather than withdrawal: finding modified ways to keep doing what matters protects both quality of life and, indirectly, the pain itself.",
      sources: [
        {
          label: "Chronic Pain (impact on daily life and work)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Chronic Pain (living with chronic pain resources)",
          url: "https://medlineplus.gov/chronicpain.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["patient-care", "work", "relationships", "daily-life"],
    },
    {
      id: "safe-medication-handling",
      title: "Storing and handling pain medicines safely",
      summary:
        "Storing opioids and other pain medicines securely, never sharing them, and safely disposing of unused supplies protects against accidental harm, misuse, and overdose in the home.",
      detail:
        "Safe handling of pain medicines is an important and often overlooked part of self-care, especially with opioids and sedatives. Medicines should be stored securely — ideally locked away — and out of reach of children, teens, visitors, and anyone at risk, because accidental ingestion (particularly by children) and misuse of medicines kept in the home are real dangers; even a single opioid dose can be life-threatening to a child. Pain medicines should never be shared with others, since a dose safe for one person can seriously harm or kill another, and the prescriber tailors them to the individual. Unused or expired opioids should be disposed of promptly and safely, for example through drug take-back programs or pharmacy disposal options, rather than left in a cabinet where they can be misused or cause accidental poisoning. For those prescribed opioids, keeping naloxone available and ensuring household members know how to use it adds a vital safety layer. A pharmacist can advise on secure storage, safe disposal in your area, and naloxone, making the home environment safer for everyone in it.",
      sources: [
        {
          label: "Prescription Opioids DrugFacts (safe use, storage, and disposal)",
          url: "https://nida.nih.gov/publications/drugfacts/prescription-opioids",
          publisher: "NIH / NIDA",
        },
        {
          label: "Preventing Opioid Overdose (storage, disposal, and naloxone)",
          url: "https://www.cdc.gov/overdose-prevention/prevention/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["patient-care", "medication-safety", "opioid", "storage", "naloxone", "safety"],
      caution:
        "Store opioids and sedatives locked and away from children; never share them; dispose of unused supplies safely. A pharmacist can advise on disposal and naloxone.",
    },
  ],
});
