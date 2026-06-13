import { defineSection } from "../types.js";

/**
 * PATIENT CARE & SELF-MANAGEMENT — the ongoing, practical work of living well
 * with bipolar disorder: sticking with treatment, building a support network and
 * a crisis plan, looking after physical health and medication monitoring,
 * involving trusted others, and reducing stigma and self-blame.
 *
 * EDUCATIONAL and supportive — not a therapist, and not a substitute for
 * professional mental-health care.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Patient Care & Self-Management",
  description:
    "Living well day to day: staying engaged with treatment, building support and a crisis plan, monitoring physical health and medications, involving trusted people, and confronting stigma with self-compassion.",
  entries: [
    {
      id: "staying-with-treatment",
      title: "Staying engaged with treatment",
      summary:
        "Bipolar disorder usually needs ongoing treatment even when a person feels well; continuing medication and care between episodes is one of the strongest protections against relapse.",
      detail:
        "Because bipolar disorder is a long-term condition, treatment typically continues even during stable, symptom-free periods — much as with other chronic medical conditions. A very common cause of relapse is stopping medication when feeling well, sometimes because the person misses the energy of highs, dislikes side effects, or believes they no longer need it. These feelings are understandable and worth discussing openly with the care team, who can adjust the plan, address side effects, or simplify the regimen, rather than the person stopping on their own — which can lead to a sudden return of symptoms and, with some medications, withdrawal effects. Practical aids to consistency include routines and reminders, pill organizers, linking doses to daily habits, and keeping regular appointments and lab monitoring. Staying engaged is not about willpower alone; it is about partnership with the care team and the supports that make ongoing treatment sustainable. If adherence is hard, that itself is a reason to reach out, not a failure.",
      sources: [
        {
          label: "Bipolar Disorder — sticking with treatment",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — living with it",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["self-management", "adherence", "relapse-prevention"],
      caution:
        "Never stop or change medication on your own — some need careful tapering. Talk to your prescriber about any concerns or side effects.",
    },
    {
      id: "crisis-and-relapse-plan",
      title: "Making a crisis and relapse-prevention plan",
      summary:
        "Writing a plan in advance — listing personal warning signs, helpful steps, key contacts, and crisis numbers like 988 — helps you and your supporters act early and safely when symptoms return.",
      detail:
        "A written, agreed-upon plan made while well is one of the most practical tools for managing bipolar disorder. Such a plan typically lists a person's individual early warning signs of mania and depression, the steps and coping strategies that help, current medications, the people and professionals to contact, and what the person wants to happen if they become very unwell (sometimes called an advance plan or, in some places, a formal advance directive). Crucially, it should include crisis resources — in the U.S., the 988 Suicide & Crisis Lifeline (call or text 988) and 911 — and identify trusted family or friends who can help recognize warning signs and take agreed actions, such as contacting the care team or helping limit risky behavior or access to means during a crisis. Sharing the plan with those supporters and the care team in advance means everyone knows what to do, which reduces panic and helps catch episodes early, when they are easier to manage. Care teams and organizations like DBSA offer templates to build one.",
      sources: [
        {
          label: "Bipolar Disorder — wellness tools and crisis resources",
          url: "https://www.dbsalliance.org/education/bipolar-disorder/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["self-management", "crisis-plan", "relapse-prevention", "safety", "988"],
      caution:
        "Keep crisis numbers handy: in the U.S., call or text 988, or call 911 in an emergency. Share your plan with trusted people before a crisis.",
    },
    {
      id: "support-network",
      title: "Building a support network and peer support",
      summary:
        "Connection with trusted people, peer support groups, and patient organizations reduces isolation, provides practical help, and is associated with better outcomes.",
      detail:
        "Living with bipolar disorder is easier with support, and building a network of people who understand is a meaningful part of self-management. Trusted family and friends can offer practical help, notice early warning signs, and provide encouragement to stay with treatment. Beyond personal relationships, peer support — connecting with others who have bipolar disorder — can reduce the isolation and stigma the condition can bring, offer hope and lived-experience wisdom, and provide a place to share coping strategies. Organizations such as the Depression and Bipolar Support Alliance (DBSA) and NAMI run in-person and online support groups, educational programs, and helplines, many of them free. Support does not replace professional treatment, but it complements it, and feeling less alone is itself protective. People are encouraged to let trusted others in, to seek out peer communities that feel safe and constructive, and to remember that reaching for connection is a strength.",
      sources: [
        {
          label: "Support and peer groups (DBSA)",
          url: "https://www.dbsalliance.org/support/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
        {
          label: "Bipolar and Related Disorders — support and resources",
          url: "https://www.nami.org/mental-health-diagnosis/bipolar-and-related-disorders/",
          publisher: "NAMI (National Alliance on Mental Illness)",
        },
      ],
      tags: ["self-management", "support", "peer-support", "community"],
    },
    {
      id: "physical-health-and-monitoring",
      title: "Physical health and medication monitoring",
      summary:
        "Looking after physical health and keeping up with the blood tests and check-ups that some bipolar medications require protects both wellbeing and safety.",
      detail:
        "Caring for physical health is an important part of managing bipolar disorder, for two reasons. First, several medications require ongoing monitoring: lithium needs regular blood-level, kidney, and thyroid checks; valproate and carbamazepine need blood-count, liver, and other monitoring; and many antipsychotics call for tracking weight, blood sugar, and cholesterol because of their metabolic effects. Keeping these appointments is part of using the medicines safely. Second, people with bipolar disorder have higher rates of conditions like cardiovascular and metabolic disease (see Comorbidities), so general health measures — a balanced diet, regular activity, not smoking, and routine medical care — matter for long-term health and life expectancy. Coordinating between mental-health and primary-care providers helps ensure nothing falls through the cracks. Self-management here means partnering with the care team: attending monitoring visits, reporting side effects and physical symptoms, and treating physical and mental health as connected rather than separate.",
      sources: [
        {
          label: "Lithium — monitoring and looking after your health",
          url: "https://www.nhs.uk/medicines/lithium/",
          publisher: "NHS (UK)",
        },
        {
          label: "Bipolar Disorder — coordinated care and physical health",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["self-management", "monitoring", "physical-health", "metabolic"],
    },
    {
      id: "involving-trusted-people",
      title: "Involving trusted family and friends",
      summary:
        "With the person's consent, involving trusted loved ones helps catch episodes early — others often notice the start of mania before the person does — and shares the load of managing the illness.",
      detail:
        "Bipolar disorder has a feature that makes involving others especially valuable: during the early stages of mania or hypomania, the person may feel good and not recognize that they are becoming unwell, while family or close friends often notice the change first (less sleep, faster speech, bigger plans, irritability). Giving trusted people permission, in advance and while well, to gently raise concerns and to take agreed steps — like prompting a call to the care team — can help catch episodes early, when they are easier to manage. Loved ones can also offer practical and emotional support during depression, when reaching out is hard. This works best when roles and wishes are discussed ahead of time and respect the person's autonomy, so help feels supportive rather than controlling. Family education (including family-focused therapy) can make these conversations more effective. Caregivers carry a real load too and deserve their own support, including resources from organizations like NAMI.",
      sources: [
        {
          label: "Bipolar Disorder — involving family and recognizing warning signs",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar and Related Disorders — support for families",
          url: "https://www.nami.org/mental-health-diagnosis/bipolar-and-related-disorders/",
          publisher: "NAMI (National Alliance on Mental Illness)",
        },
      ],
      tags: ["self-management", "family", "caregiver", "early-warning-signs"],
    },
    {
      id: "stigma-and-self-compassion",
      title: "Stigma, self-compassion, and hope",
      summary:
        "Bipolar disorder is a medical condition, not a character flaw; challenging stigma and treating oneself with compassion supports recovery, and many people live full, meaningful lives.",
      detail:
        "Stigma — both from others and internalized as self-blame — is one of the harder parts of living with bipolar disorder, and it can discourage people from seeking help or staying in treatment. It helps to hold onto the accurate, evidence-based view that bipolar disorder is a medical condition with biological roots, not a moral failing, a weakness, or something the person chose, and that having it says nothing about their worth or character. Self-compassion — responding to one's own struggles with the kindness one would offer a friend — supports recovery and resilience, as does separating the illness from one's identity. It is also true and worth emphasizing that the outlook is genuinely hopeful: with treatment and support, many people with bipolar disorder achieve long-term stability and live full, productive, meaningful lives, including in their careers and relationships. Connecting with others who share the experience, and with organizations that fight stigma, can replace shame with understanding and solidarity.",
      sources: [
        {
          label: "Understanding Bipolar Disorder — challenging stigma",
          url: "https://www.nami.org/Blogs/NAMI-Blog/August-2022/Understanding-Bipolar-Disorder",
          publisher: "NAMI (National Alliance on Mental Illness)",
        },
        {
          label: "Bipolar Disorder — living well and hope",
          url: "https://www.dbsalliance.org/education/bipolar-disorder/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
      ],
      tags: ["self-management", "stigma", "self-compassion", "recovery", "hope"],
    },
  ],
});
