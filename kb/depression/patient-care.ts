import { defineSection } from "../types.js";

/**
 * PATIENT CARE & SELF-MANAGEMENT — living with depression and supporting
 * recovery over time: sticking with and monitoring treatment, recognizing
 * relapse, building a support network and crisis plan, managing day to day with
 * self-compassion, supporting a loved one, and addressing stigma.
 *
 * Supportive and practical, with crisis-safety threaded through. Educational —
 * not a substitute for a clinician or a crisis service.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Living With Depression & Self-Management",
  description:
    "Day-to-day living and recovery: staying with and monitoring treatment, recognizing relapse, building support and a crisis plan, self-compassion, supporting a loved one, and tackling stigma — woven through with crisis safety. Supportive and educational.",
  entries: [
    {
      id: "sticking-with-treatment",
      title: "Staying with and monitoring treatment",
      summary:
        "Recovery often takes time and follow-up; taking treatment as agreed, keeping appointments, tracking symptoms, and communicating openly with the care team make treatment more effective — and stopping abruptly carries risks.",
      detail:
        "Depression treatment usually works best as an ongoing process rather than a one-time fix. Because antidepressants take weeks to reach full effect and therapy builds over sessions, persistence and follow-up matter, and it is common to need adjustments along the way. Helpful self-management includes taking medication as prescribed, attending therapy and follow-up appointments, and honestly reporting how things are going — including side effects, what is and isn't helping, and any worsening or new thoughts of self-harm. Tracking mood and symptoms (even simply, or with a questionnaire like the PHQ-9 used in care) can help spot patterns and measure progress. A key safety point: antidepressants should not be stopped suddenly, even when feeling better, because abrupt discontinuation can cause withdrawal-like symptoms and raise relapse risk; any change is made gradually with the prescriber. Treatment is often continued for a period after recovery to prevent relapse. This is educational information to support partnership with the care team, not specific medical advice.",
      sources: [
        {
          label: "Mental Health Medications — taking and not stopping medication abruptly",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression — getting and staying in treatment",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["patient-care", "treatment-adherence", "monitoring", "mental-health"],
      caution:
        "Don't stop antidepressants abruptly — taper only with your prescriber. Report any worsening mood or thoughts of self-harm right away.",
    },
    {
      id: "recognizing-relapse",
      title: "Recognizing and preventing relapse",
      summary:
        "Depression can recur, so learning one's early warning signs and having a plan to act on them — including continued treatment when advised — helps catch a return of symptoms early.",
      detail:
        "Because depression often recurs, an important part of long-term self-management is staying alert to early signs of relapse and acting on them. Warning signs are individual but commonly include the return of low mood, loss of interest, sleep or appetite changes, withdrawal, irritability, fatigue, increasing negative thinking, or slipping self-care. Catching these early — and reaching out to the care team rather than waiting — can allow quicker intervention and sometimes prevent a full episode. Relapse-prevention strategies include continuing treatment for the recommended period (or longer for recurrent depression), maintaining helpful routines and supports, using skills learned in therapy (approaches like mindfulness-based cognitive therapy specifically target relapse prevention), and having a written plan of what to do and whom to contact if symptoms return. A relapse is not a personal failure; it is a feature of the illness, and knowing the signs turns it into something that can be met early and managed. This is educational guidance to develop with the care team, not a substitute for their advice.",
      sources: [
        {
          label: "Depression — recurrence and continuing care",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — coping and support",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/diagnosis-treatment/drc-20356013",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["patient-care", "relapse-prevention", "mental-health"],
    },
    {
      id: "support-network-and-crisis-plan",
      title: "Building a support network and crisis plan",
      summary:
        "Having trusted people to lean on and a written crisis plan — including warning signs, coping steps, and contacts like 988 — means support is ready before it's urgently needed.",
      detail:
        "Recovery is easier with support in place, and it helps to set this up while feeling relatively stable rather than waiting for a crisis. A support network can include trusted friends or family, a therapist and prescriber, peer-support or community groups, and patient-advocacy organizations. A written crisis or safety plan — ideally developed with a clinician — captures personal warning signs, coping strategies that help, supportive people to contact, professional and crisis-line contacts (such as the 988 Suicide & Crisis Lifeline: call or text 988 in the US), and steps to make the environment safer (for example reducing access to means) during high-risk periods. Sharing the plan with a trusted person can help them know how to support effectively. Knowing in advance what to do, and that help is available 24/7, can make the hardest moments more survivable. Reaching out is a sign of strength, and using crisis resources is exactly what they exist for. This is supportive, educational information; a clinician can help build a plan suited to the individual.",
      sources: [
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
        {
          label: "5 Action Steps to Help Someone Having Thoughts of Suicide (safety planning)",
          url: "https://www.nimh.nih.gov/health/publications/5-action-steps-to-help-someone-having-thoughts-of-suicide",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["patient-care", "support-network", "crisis-plan", "988", "mental-health"],
      caution:
        "If you're in crisis, don't wait for the plan — call or text 988 (US) or call 911. A crisis plan is built with a professional and complements, not replaces, urgent help.",
    },
    {
      id: "daily-coping-self-compassion",
      title: "Day-to-day coping and self-compassion",
      summary:
        "Managing depression day to day means setting small, realistic goals, breaking tasks down, being patient and kind with oneself, and resisting the self-blame that depression encourages.",
      detail:
        "Living with depression day to day is often about small, gentle steps rather than dramatic change. Practical coping strategies that mental-health organizations commonly suggest include breaking large tasks into smaller ones and doing what you can; setting realistic, modest goals and not expecting too much too soon; trying to spend time with others and confide in someone trusted; postponing big decisions until feeling better; and engaging in gentle activity or things that used to bring enjoyment, even if motivation is low. Perhaps most important is self-compassion: depression amplifies self-criticism, guilt, and the sense of being a burden or a failure, and learning to treat oneself with the kindness one would offer a friend is both more humane and more helpful than self-blame. Progress is rarely linear, and bad days do not erase progress. Negative, hopeless thoughts are symptoms of the illness rather than truths, and they tend to ease as treatment takes effect. These are supportive, educational suggestions to use flexibly — not demands, and not a replacement for professional care.",
      sources: [
        {
          label: "Depression — if you have depression: tips for coping",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["patient-care", "coping", "self-compassion", "mental-health"],
      caution:
        "Hopeless or self-critical thoughts are symptoms, not facts. If they include thoughts of self-harm, reach out now — call or text 988 (US) or call 911.",
    },
    {
      id: "supporting-a-loved-one",
      title: "Supporting a loved one with depression",
      summary:
        "Loved ones can help by listening without judgment, offering patient support, encouraging treatment, taking any talk of self-harm seriously, and caring for their own wellbeing too.",
      detail:
        "If someone you care about has depression, your support can make a real difference, even when it feels like you can't fix things. Helpful approaches include offering a listening ear without judging, minimizing, or rushing to solutions; being patient, since recovery takes time and depression can make a person withdraw or seem irritable; gently encouraging them to seek and stay with treatment, and offering practical help (such as with appointments or daily tasks); inviting them to activities without pressuring; and reminding them — without platitudes — that depression is treatable and that they matter. Take any mention of suicide or self-harm seriously and help them connect to support such as 988 or emergency services if needed. Avoid blame or telling them to 'snap out of it,' which can deepen shame. Crucially, supporting someone with depression can be draining, so caring for your own mental health, setting sustainable boundaries, and seeking your own support are not selfish but necessary. Caregiver and family resources exist for exactly this. This is educational guidance, not a substitute for professional help for either of you.",
      sources: [
        {
          label: "5 Action Steps to Help Someone Having Thoughts of Suicide",
          url: "https://www.nimh.nih.gov/health/publications/5-action-steps-to-help-someone-having-thoughts-of-suicide",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — supporting a loved one",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/diagnosis-treatment/drc-20356013",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["patient-care", "supporting-others", "caregivers", "mental-health"],
      caution:
        "If a loved one may be at risk of self-harm, take it seriously and help them reach 988 or 911. Look after your own wellbeing too — you can't pour from an empty cup.",
    },
    {
      id: "stigma-and-asking-for-help",
      title: "Stigma, shame, and asking for help",
      summary:
        "Stigma and shame keep many people from seeking help, but depression is a common medical illness — not a weakness or a character flaw — and reaching out is a courageous, effective step.",
      detail:
        "One of the biggest barriers to recovery is not the illness itself but the stigma and shame around it. Many people delay or avoid seeking help because they fear being judged, seen as weak, or labeled — or because depression convinces them they are undeserving or that nothing will help. It is worth stating plainly: depression is a common, real medical condition arising from biology and circumstances, not a personal failing, a lack of willpower, or something to be ashamed of, and it is highly treatable. Seeking help is an act of strength and self-care, not weakness. Mental-health professionals are experienced and non-judgmental, and talking openly — including about difficult thoughts — leads to better care, not censure. Public understanding of mental health has grown, and many people live full lives in recovery from depression. Reducing the silence around depression, in oneself and in communities, helps more people get help sooner. This supportive, educational message is meant to lower the barrier to reaching out; professional care remains the route to individualized help.",
      sources: [
        {
          label: "Depression — it's a real illness and help is available",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Find Help and Treatment for Mental Health, Drug, Alcohol Issues",
          url: "https://www.samhsa.gov/find-help",
          publisher: "SAMHSA",
        },
      ],
      tags: ["patient-care", "stigma", "help-seeking", "mental-health"],
    },
  ],
});
