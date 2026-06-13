import { defineSection } from "../types.js";

/**
 * THERAPY & LIFESTYLE — the non-drug pillars that, alongside medication, help
 * people stay well: protecting sleep and a stable circadian routine, the
 * evidence-based psychotherapies for bipolar disorder (CBT, IPSRT,
 * family-focused therapy, psychoeducation), exercise and stress management, and
 * reducing alcohol and substances.
 *
 * EDUCATIONAL only. These complement, never replace, professional treatment.
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Therapy & Lifestyle",
  description:
    "Non-drug supports that, with medication, help maintain stability: sleep and circadian-rhythm regularity, evidence-based psychotherapies (CBT, IPSRT, family-focused therapy), exercise and stress management, and reducing alcohol and substances.",
  entries: [
    {
      id: "sleep-and-circadian-stability",
      title: "Sleep and circadian-rhythm stability",
      summary:
        "Regular sleep and a steady daily routine are among the most powerful tools for staying well, because sleep loss and disrupted rhythms can trigger episodes — especially mania.",
      detail:
        "For many people with bipolar disorder, protecting sleep and keeping a regular daily rhythm is one of the single most effective ways to stay stable. The reason is biological: disruption of sleep and the body's daily (circadian) cycle can trigger mood episodes, and a sudden loss of sleep is a well-recognized precipitant of mania. Helpful habits include going to bed and waking at consistent times (even on weekends), getting daytime light and limiting bright light and screens at night, eating and exercising on a fairly regular schedule, and being cautious with anything that disrupts sleep, such as travel across time zones, shift work, or stimulants. Because changes in sleep are also an early warning sign of an episode, tracking sleep can help catch trouble early. Sleep problems should be discussed with the care team rather than self-treated, since some sleep aids and habits can themselves affect mood, but in general, guarding sleep and routine is a cornerstone of long-term wellness.",
      sources: [
        {
          label: "Bipolar Disorder — self-care and managing routines",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — living with (sleep and routine)",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "sleep", "circadian-rhythm", "self-management"],
    },
    {
      id: "psychoeducation",
      title: "Psychoeducation",
      summary:
        "Learning about bipolar disorder — its symptoms, triggers, warning signs, and treatment — helps people and families recognize episodes early and stay engaged with care, and is itself an evidence-based part of treatment.",
      detail:
        "Psychoeducation means structured learning about the condition: what bipolar disorder is, how it tends to behave, what personal triggers and early warning signs look like, why ongoing treatment matters, and how to respond when symptoms start to shift. It is not just helpful background — it is an evidence-based component of bipolar treatment, because people who understand their illness are better able to spot the early signs of an episode, stick with medication and routines, and act before a small change becomes a full relapse. Psychoeducation can happen one-on-one, in groups, or with family members, and is often woven into the structured psychotherapies for bipolar disorder. Involving trusted family or friends so they can help recognize warning signs is especially valuable, since others sometimes notice the onset of mania before the person does. Reputable organizations and care teams provide psychoeducation resources, and engaging with them is one of the most empowering steps a person can take.",
      sources: [
        {
          label: "Different Types of Therapy for Bipolar Disorder (incl. psychoeducation)",
          url: "https://www.nami.org/bipolar-and-related-disorders/different-types-of-therapy-for-bipolar-disorder/",
          publisher: "NAMI (National Alliance on Mental Illness)",
        },
        {
          label: "Bipolar Disorder — understanding and managing the illness",
          url: "https://www.dbsalliance.org/education/bipolar-disorder/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
      ],
      tags: ["therapy", "psychoeducation", "self-management", "family"],
      evidence: "supported",
    },
    {
      id: "cbt",
      title: "Cognitive behavioral therapy (CBT)",
      summary:
        "CBT helps people identify and change unhelpful thinking and behavior patterns, manage stress, and build coping skills, and is commonly used alongside medication for bipolar disorder.",
      detail:
        "Cognitive behavioral therapy (CBT) is a structured, practical talk therapy focused on the links between thoughts, feelings, and behaviors. In bipolar disorder it is used alongside medication to help people recognize and adjust unhelpful thinking patterns, develop coping strategies for stress and difficult emotions, identify and respond to early warning signs of episodes, improve problem-solving, and support consistent self-care and treatment adherence. CBT does not replace mood-stabilizing medication, but as an add-on it can help reduce relapse risk and improve day-to-day functioning and quality of life. Sessions are typically time-limited and goal-oriented, often including 'homework' to practice skills between meetings. CBT for bipolar disorder is best delivered by a therapist experienced with the condition, and it is one of several evidence-based psychotherapies that the major mental-health organizations recognize as helpful components of a complete treatment plan.",
      sources: [
        {
          label: "Different Types of Therapy for Bipolar Disorder (CBT)",
          url: "https://www.nami.org/bipolar-and-related-disorders/different-types-of-therapy-for-bipolar-disorder/",
          publisher: "NAMI (National Alliance on Mental Illness)",
        },
        {
          label: "Psychotherapies — overview of talk therapy approaches",
          url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["therapy", "cbt", "psychotherapy"],
      evidence: "supported",
    },
    {
      id: "ipsrt",
      title: "Interpersonal and social rhythm therapy (IPSRT)",
      summary:
        "IPSRT helps people stabilize daily routines and sleep-wake cycles while addressing relationship issues, directly targeting the rhythm disruptions that can trigger bipolar episodes.",
      detail:
        "Interpersonal and social rhythm therapy (IPSRT) is a psychotherapy developed specifically for bipolar disorder. It combines two ideas: that stabilizing daily 'social rhythms' (regular times for sleeping, waking, eating, and activity) helps protect against episodes by keeping the body's circadian clock steady, and that interpersonal stresses — conflict, role changes, loss — can destabilize those rhythms and mood. In IPSRT, a person often tracks daily routines and sleep-wake patterns and works with a therapist to make them more regular, while also addressing relationship and life-transition difficulties that can throw routines off. Because rhythm disruption is so closely tied to bipolar episodes, this approach targets a core mechanism of the illness, and research supports its use as an add-on to medication. IPSRT is delivered by trained therapists and complements, rather than replaces, mood-stabilizing treatment.",
      sources: [
        {
          label: "Different Types of Therapy for Bipolar Disorder (IPSRT)",
          url: "https://www.nami.org/bipolar-and-related-disorders/different-types-of-therapy-for-bipolar-disorder/",
          publisher: "NAMI (National Alliance on Mental Illness)",
        },
        {
          label: "Therapy options for mood disorders",
          url: "https://www.dbsalliance.org/wellness/treatment-options/therapy/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
      ],
      tags: ["therapy", "ipsrt", "circadian-rhythm", "psychotherapy"],
      evidence: "supported",
    },
    {
      id: "family-focused-therapy",
      title: "Family-focused therapy",
      summary:
        "Family-focused therapy educates the person and their family together and improves communication and problem-solving, helping the whole household support recovery and catch warning signs early.",
      detail:
        "Family-focused therapy (FFT) recognizes that bipolar disorder affects, and is affected by, the people closest to a person. It brings the individual together with family members or partners to learn about the illness as a group (psychoeducation), strengthen communication, and build shared problem-solving and coping skills. The goals include reducing conflict and high-stress family dynamics that can contribute to relapse, helping loved ones recognize early warning signs and respond supportively, and reinforcing consistent treatment and routines. Because family and friends often notice the early signs of mania before the person does, equipping them to respond constructively is valuable, and a calmer, better-informed home environment supports stability. FFT is an evidence-based add-on to medication and is delivered by trained therapists; it does not assign blame to families but instead enlists them as partners in care.",
      sources: [
        {
          label: "Different Types of Therapy for Bipolar Disorder (family-focused therapy)",
          url: "https://www.nami.org/bipolar-and-related-disorders/different-types-of-therapy-for-bipolar-disorder/",
          publisher: "NAMI (National Alliance on Mental Illness)",
        },
        {
          label: "Bipolar Disorder — psychotherapy as part of treatment",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["therapy", "family-focused-therapy", "psychotherapy", "family", "caregiver"],
      evidence: "supported",
    },
    {
      id: "exercise-and-stress-management",
      title: "Exercise, stress management, and structure",
      summary:
        "Regular physical activity, stress-reduction practices, and a structured daily routine support mood stability and overall health and complement medication and therapy.",
      detail:
        "Beyond sleep and formal therapy, several everyday practices support stability. Regular physical activity benefits mood, sleep, weight, and cardiovascular health — the last especially important given the metabolic effects of some bipolar medications (see Comorbidities) — though it is wise to keep exercise within a steady routine rather than in extreme bursts. Stress-management practices such as relaxation techniques, mindfulness, and maintaining supportive relationships help buffer against the stress that can trigger episodes. A predictable daily structure — consistent meals, activity, and downtime — reinforces the rhythm stability that protects mood. Avoiding overcommitment and learning to pace goals can also help, since periods of intense, goal-driven activity can sometimes precede a high. None of these replace medication and therapy, but together they form a foundation of wellness that people can build with support from their care team, and small, sustainable changes tend to work better than dramatic ones.",
      sources: [
        {
          label: "Bipolar Disorder — self-care and lifestyle",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — living with and self-help",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "exercise", "stress-management", "routine"],
    },
    {
      id: "reducing-alcohol-and-substances",
      title: "Reducing alcohol and other substances",
      summary:
        "Limiting or avoiding alcohol and recreational drugs supports stability, because they can trigger or worsen episodes, deepen depression, interfere with medication, and raise risks.",
      detail:
        "Alcohol and recreational drugs are a common and modifiable source of mood instability in bipolar disorder. They can trigger or worsen both manic and depressive episodes, deepen depression and hopelessness, interfere with how mood-stabilizing medications work, disrupt sleep, and increase impulsivity and risk — including the risk of self-harm. Substance use disorders also co-occur with bipolar disorder more often than in the general population (see Comorbidities), and the two conditions can feed each other. Reducing or avoiding alcohol and drugs is therefore an important part of staying well, even though it can be genuinely difficult, especially when substances are being used to cope with symptoms. Help is available and effective: care teams can offer non-judgmental support, integrated treatment for co-occurring conditions, and connections to resources. This is framed as support, not blame — addressing substance use is a health issue, and asking for help with it is a constructive step.",
      sources: [
        {
          label: "Bipolar disorder — alcohol, drugs, and staying well",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
        {
          label: "An Introduction to Bipolar Disorder and Co-Occurring Substance Use Disorders",
          url: "https://library.samhsa.gov/product/advisory-introduction-bipolar-disorder-and-co-occurring-substance-use-disorders/sma16-4960",
          publisher: "SAMHSA",
        },
      ],
      tags: ["lifestyle", "alcohol", "substances", "self-management"],
      caution:
        "Don't stop drinking heavily without medical advice if you are physically dependent — abrupt withdrawal can be dangerous. Ask your care team for support.",
    },
  ],
});
