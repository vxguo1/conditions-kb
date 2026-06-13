import { defineSection } from "../types.js";

/**
 * DIAGNOSIS — how depression is recognized and assessed: the core symptom
 * picture (DSM-5 criteria described conceptually), screening tools like the
 * PHQ-9, the importance of ruling out medical contributors, and the key safety
 * step of screening for bipolar disorder BEFORE starting an antidepressant.
 *
 * Educational only — describing how professionals assess depression, not a
 * self-diagnosis tool.
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Recognizing & Diagnosing Depression",
  description:
    "How depression is identified: the core symptoms (DSM-5 criteria, described conceptually), screening tools such as the PHQ-9, ruling out medical contributors, and the safety-critical step of screening for bipolar disorder before starting an antidepressant.",
  entries: [
    {
      id: "core-symptoms-dsm5",
      title: "The core symptoms of depression",
      summary:
        "A depressive episode is generally marked by low mood and/or loss of interest most of the day, nearly every day, for at least two weeks, plus other symptoms that cause real distress or difficulty functioning.",
      detail:
        "Clinicians recognize depression by a recognizable cluster of symptoms present together over time. The diagnostic framework most widely used (the DSM-5) describes a major depressive episode as a period of at least two weeks in which a person has a depressed mood and/or a marked loss of interest or pleasure (anhedonia) most of the day, nearly every day, along with several additional symptoms: significant changes in appetite or weight, sleeping too much or too little, feeling slowed down or restless, fatigue or low energy, feelings of worthlessness or excessive guilt, trouble concentrating or deciding, and recurrent thoughts of death or suicide. These symptoms must cause meaningful distress or interfere with daily life and not be better explained by another cause. Not everyone has every symptom, and the picture varies. Importantly, this is how professionals organize an assessment — it is described here for understanding, not so that anyone can diagnose themselves or someone else. Persistent thoughts of death or suicide always warrant urgent professional help.",
      sources: [
        {
          label: "Depression — signs and symptoms",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — symptoms",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["diagnosis", "symptoms", "dsm-5", "mental-health"],
      caution:
        "This describes how clinicians assess depression — it is not a self-diagnosis checklist. Thoughts of death or suicide need urgent help: call or text 988 (US) or call 911.",
    },
    {
      id: "how-diagnosis-is-made",
      title: "How a diagnosis is made",
      summary:
        "Diagnosis comes from a clinical evaluation — a conversation about symptoms, history, and functioning — sometimes with questionnaires and tests to rule out other causes, not from a single lab test.",
      detail:
        "There is no blood test or brain scan that diagnoses depression. Instead, a clinician makes the assessment through a careful evaluation: talking with the person about their mood, thoughts, sleep, appetite, energy, concentration, and daily functioning; how long symptoms have lasted and how much they interfere with life; personal and family history; substance use; and any thoughts of self-harm. They may use a standardized questionnaire (such as the PHQ-9) to help measure symptoms and track them over time, and may order tests (for example thyroid function or other bloodwork) to check for medical contributors. The clinician also considers whether the picture fits depression specifically or another condition — for example bipolar disorder, an anxiety disorder, grief, or a medical illness. A trusting, honest conversation is the heart of the process. People sometimes worry about being judged, but clinicians are there to help, and being candid about symptoms — including difficult thoughts — leads to better care.",
      sources: [
        {
          label: "Depression — getting help and what to expect",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — diagnosis",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["diagnosis", "evaluation", "mental-health"],
    },
    {
      id: "phq9-screening",
      title: "The PHQ-9 and depression screening",
      summary:
        "The PHQ-9 is a short, widely used questionnaire that helps screen for and measure the severity of depression; it supports a clinical assessment but is not by itself a diagnosis.",
      detail:
        "The Patient Health Questionnaire-9 (PHQ-9) is one of the most commonly used depression screening tools. It asks about nine symptoms drawn from the diagnostic criteria for depression — covering mood, interest, sleep, energy, appetite, concentration, self-worth, movement, and thoughts of self-harm — over the past two weeks, each rated by how often it occurred. The total score gives a measure of symptom severity (often grouped into minimal, mild, moderate, moderately severe, and severe ranges) and is used both to flag possible depression and to track whether treatment is helping over time. A short two-item version (PHQ-2) is sometimes used for initial screening. Importantly, a questionnaire score is a starting point, not a diagnosis: a clinician interprets it alongside the full evaluation. The PHQ-9 also specifically asks about thoughts of being better off dead or of self-harm, and any such response should prompt a direct safety conversation and, if there is immediate risk, urgent help.",
      sources: [
        {
          label: "Patient Health Questionnaire (PHQ-9 & PHQ-2)",
          url: "https://www.apa.org/pi/about/publications/caregivers/practice-settings/assessment/tools/patient-health",
          publisher: "American Psychological Association",
        },
        {
          label: "Instrument: Patient Health Questionnaire-9 (PHQ-9)",
          url: "https://cde.nida.nih.gov/instrument/f226b1a0-897c-de2a-e040-bb89ad4338b9",
          publisher: "NIH / NIDA (Common Data Elements)",
        },
      ],
      tags: ["diagnosis", "phq-9", "screening", "mental-health"],
      caution:
        "A screening score is not a diagnosis. If a questionnaire raises thoughts of self-harm, talk to someone now — call or text 988 (US) or call 911 in an emergency.",
    },
    {
      id: "ruling-out-medical-causes",
      title: "Ruling out medical and other causes",
      summary:
        "Part of a good evaluation is checking that another condition — such as a thyroid problem, vitamin deficiency, medication effect, or substance use — is not causing or mimicking depression.",
      detail:
        "Because several physical conditions and substances can cause or mimic depression, a careful assessment includes considering and, where appropriate, testing for them. Thyroid disorders (especially an underactive thyroid), anemia, vitamin deficiencies (such as B12 or vitamin D), chronic illnesses, certain medications, and alcohol or drug use can all produce depression-like symptoms or worsen true depression. Identifying such a contributor matters because treating it can be part of the solution — for example, correcting a thyroid problem — and because it shapes the overall plan. A clinician decides which tests, if any, are warranted based on the person's symptoms, history, and risk factors; routine extensive testing is not always needed. This step also helps distinguish depression from normal grief and from other mental-health conditions. The point for a person to understand is simply that 'looking at the whole picture' — body and mind — is a normal and helpful part of being assessed, not a sign that their distress is being dismissed.",
      sources: [
        {
          label: "Understanding the Link Between Chronic Illness and Depression",
          url: "https://www.nimh.nih.gov/health/publications/chronic-illness-mental-health",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — diagnosis",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/diagnosis-treatment/drc-20356013",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["diagnosis", "medical-causes", "thyroid", "mental-health"],
    },
    {
      id: "bipolar-screening-before-antidepressants",
      title: "Screening for bipolar disorder before antidepressants",
      summary:
        "Before starting an antidepressant, it is important to screen for a history of mania or hypomania, because antidepressants given alone can trigger a manic episode in someone with bipolar disorder — a key safety step.",
      detail:
        "A crucial safety step in evaluating depression is checking for any history of mania or hypomania — periods of abnormally elevated or irritable mood, increased energy, reduced need for sleep, racing thoughts, or risky behavior — because these point to bipolar disorder rather than (or in addition to) unipolar depression. This matters because antidepressants are generally not used on their own for bipolar depression: given without a mood stabilizer, they can trigger a manic episode or rapid cycling. People with bipolar disorder often first seek help during a depressive phase and may not recognize past 'highs' as a problem, so subtle signs can be missed and the depression mistaken for ordinary major depression. For that reason, careful questioning (sometimes aided by screening questionnaires) about past elevated-mood periods, and asking about family history of bipolar disorder, is part of a thorough assessment before prescribing. This is one of the clearest examples of why depression treatment belongs with a clinician who can weigh the full history — not with self-medication. Anyone who notices unusual highs, especially after starting an antidepressant, should report it promptly.",
      sources: [
        {
          label: "Bipolar Disorder — antidepressants can trigger mania; mood stabilizers",
          url: "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Mental Health Medications (antidepressants and bipolar caution)",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["diagnosis", "bipolar", "safety", "antidepressants", "mental-health"],
      evidence: "established",
      caution:
        "Screening for bipolar disorder before antidepressants is a safety step. Report any history of 'highs,' or any new high/agitated state after starting an antidepressant, to the prescriber promptly.",
    },
    {
      id: "when-to-seek-help-early",
      title: "When to reach out for an assessment",
      summary:
        "If low mood or loss of interest lasts more than two weeks, interferes with daily life, or comes with hopelessness or thoughts of self-harm, it is worth reaching out for help — sooner is better.",
      detail:
        "It can be hard to know when sadness or stress has crossed into depression that deserves attention. Helpful signals include: low mood or loss of interest that persists most days for more than about two weeks; symptoms that interfere with work, relationships, sleep, or self-care; feeling hopeless, worthless, or unusually irritable; turning to alcohol or drugs to cope; or any thoughts of death, self-harm, or that others would be better off without you. Reaching out early — to a primary care provider, a mental-health professional, or a trusted support line — tends to lead to better outcomes, and a first conversation does not commit anyone to a particular treatment. Asking for help is a sign of strength, and clinicians are used to these conversations and will not judge. If thoughts of suicide or self-harm are present, that is not something to wait on: support is available right now, including the 988 Suicide & Crisis Lifeline in the US (call or text 988). The earlier depression is recognized, the more options there usually are.",
      sources: [
        {
          label: "Depression — when and how to get help",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["diagnosis", "when-to-seek-help", "mental-health"],
      caution:
        "If you have thoughts of suicide or self-harm, get help now — call or text 988 (US) or call 911. You do not have to wait until things get worse.",
    },
  ],
});
