import { defineSection } from "../types.js";

/**
 * Comorbidities & co-occurring conditions — what commonly travels with
 * depression and the COMPOUNDING considerations when conditions overlap. This is
 * the grounding for multi-condition reasoning: anxiety disorders, substance use,
 * chronic physical illness (diabetes, heart disease, chronic pain) with their
 * bidirectional links, sleep disorders, and bipolar disorder.
 *
 * Educational only. Coordinating overlapping (sometimes conflicting) management
 * across conditions is the job of the care team, including a pharmacist for the
 * medication picture.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with depression and why it compounds: anxiety disorders, substance use, chronic physical illness (diabetes, heart disease, chronic pain) with bidirectional links, sleep disorders, and the bipolar distinction. Educational; coordinating overlapping care is the care team's job.",
  entries: [
    {
      id: "comorbidities-overview",
      title: "Depression rarely travels alone",
      summary:
        "Depression frequently co-occurs with other mental and physical conditions; these interact in both directions, so good care looks at the whole person rather than depression in isolation.",
      detail:
        "Depression commonly occurs alongside other conditions — both other mental-health conditions (such as anxiety disorders and substance use) and physical illnesses (such as diabetes, heart disease, and chronic pain). These overlaps matter in two directions: depression raises the risk of, or worsens, many other conditions, and those conditions in turn make depression more likely or harder to treat. They also create compounding and sometimes conflicting management considerations — a treatment that helps one condition may affect another, several conditions mean more medications and a heavier self-care load, and one untreated condition can undermine treatment of the rest. This is why thoughtful care looks beyond depression alone to the person's full mental and physical health, and why coordination across the care team — including a pharmacist for the medication picture — is so important. The entries here map the most common co-occurring conditions and how they interact, as grounding for thinking about more than one condition at once. This is educational; coordinating overlapping care is the role of the care team.",
      sources: [
        {
          label: "Understanding the Link Between Chronic Illness and Depression",
          url: "https://www.nimh.nih.gov/health/publications/chronic-illness-mental-health",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression — co-occurring conditions",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["comorbidity", "overview", "multi-condition", "mental-health"],
    },
    {
      id: "anxiety-disorders",
      title: "Anxiety disorders",
      summary:
        "Anxiety disorders are among the most common companions of depression; they share features and risk factors, often occur together, and the combination can be more disabling — but both respond to overlapping treatments.",
      detail:
        "Anxiety disorders — including generalized anxiety, panic disorder, social anxiety, and others — are among the conditions that most frequently co-occur with depression, and many people experience both at once. The two share overlapping symptoms (such as sleep problems, difficulty concentrating, irritability, and restlessness), risk factors, and underlying biology, and each can contribute to the other: chronic anxiety can wear a person down into depression, and depression can heighten worry and fear. When depression and anxiety occur together, symptoms can be more severe, more persistent, and more disabling than either alone. The hopeful side is that the treatments overlap substantially: several antidepressants (such as SSRIs and SNRIs) treat both depression and anxiety disorders, and therapies like CBT are effective for both, so addressing them together is often feasible. Because the combination affects treatment choice and intensity, recognizing co-occurring anxiety is part of a good assessment. This is educational information; how to treat overlapping depression and anxiety is determined by the care team for the individual.",
      sources: [
        {
          label: "Depression — anxiety as a co-occurring condition",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Anxiety Disorders — relationship with depression",
          url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["comorbidity", "anxiety", "multi-condition", "mental-health"],
      evidence: "established",
    },
    {
      id: "substance-use-disorders",
      title: "Substance use disorders",
      summary:
        "Depression and substance use disorders frequently co-occur and worsen each other; integrated treatment that addresses both together tends to work better than treating one in isolation.",
      detail:
        "Depression and substance use disorders (involving alcohol or other drugs) co-occur very commonly, and the relationship is bidirectional and self-reinforcing. People may use substances to cope with or numb depression, which can lead to a substance use disorder; substance use can also cause or deepen depression and interfere with its treatment. This overlap is a clear example of compounding: each condition makes the other harder to manage, and treating only one while ignoring the other often falls short. For this reason, integrated or coordinated treatment that addresses depression and substance use together — rather than sequentially or in separate silos — is generally recommended and more effective. This requires honesty about substance use with the care team, which can be hard given stigma, but clinicians approach it as a health issue to treat, not a moral failing to judge. Specialized resources, including SAMHSA's helpline and treatment locator, can help connect people to integrated care. This is educational information; the right combined approach for an individual is determined with professionals.",
      sources: [
        {
          label: "Find Help and Treatment (co-occurring mental health and substance use)",
          url: "https://www.samhsa.gov/find-help",
          publisher: "SAMHSA",
        },
        {
          label: "Depression — substance use as a co-occurring condition",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["comorbidity", "substance-use", "co-occurring", "multi-condition", "mental-health"],
      evidence: "established",
      caution:
        "Substance use alongside depression is common and treatable. Being honest with your care team allows both to be treated together; SAMHSA's helpline can help find care.",
    },
    {
      id: "chronic-physical-illness",
      title: "Chronic physical illness (diabetes, heart disease, chronic pain)",
      summary:
        "Depression and chronic physical conditions like diabetes, heart disease, and chronic pain are strongly and bidirectionally linked, each worsening the other; treating depression can improve management of the physical illness too.",
      detail:
        "Depression and chronic physical illnesses have a powerful two-way relationship. Living with a serious or long-term condition — such as diabetes, heart disease, chronic pain, cancer, stroke, or others — raises the risk of depression, and depression in turn worsens the course and outcomes of these conditions. The mechanisms include biological links (for example shared inflammatory pathways) and practical ones: depression saps the energy, motivation, and concentration needed for the demanding self-care these illnesses require (medications, monitoring, diet, activity, appointments), so glucose control, heart-health behaviors, or pain coping can slip. The relationship is especially well documented for diabetes, heart disease, and chronic pain, where depression is both more common and consequential. The encouraging implication is that treating depression can improve not only mood but also the management and outcomes of the physical condition, which is why integrated mind-body care is increasingly emphasized and why screening for depression is recommended in many chronic illnesses. Coordinating the overlapping treatments — and watching for interactions among the medicines involved — is the care team's job. This is educational grounding for multi-condition care, not individualized advice.",
      sources: [
        {
          label: "Understanding the Link Between Chronic Illness and Depression",
          url: "https://www.nimh.nih.gov/health/publications/chronic-illness-mental-health",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — links with other illnesses",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "diabetes", "heart-disease", "chronic-pain", "multi-condition", "mental-health"],
      evidence: "established",
    },
    {
      id: "sleep-disorders",
      title: "Sleep disorders",
      summary:
        "Sleep problems and depression are tightly intertwined; insomnia and conditions like sleep apnea both contribute to and result from depression, and addressing sleep is often an important part of treatment.",
      detail:
        "Sleep disorders and depression are closely connected in both directions. Insomnia is both a common symptom of depression and an independent risk factor for developing or relapsing into it, and persistent sleep disturbance can undermine recovery. Other sleep disorders, such as obstructive sleep apnea, are also associated with depression: untreated sleep apnea can cause fatigue and low mood that mimic or worsen depression, and treating it can improve both sleep and mood. Because of these links, attention to sleep is often an important part of depression care — through sleep-supporting habits, treating an underlying sleep disorder, and sometimes choosing treatments with an eye to their effect on sleep. Conversely, simply treating depression can improve sleep as symptoms lift. This bidirectional relationship is a good example of why a co-occurring condition deserves attention rather than being dismissed as 'just' part of the depression; sometimes a separate sleep disorder needs its own evaluation. This is educational information, and decisions about evaluating or treating sleep problems belong with the care team.",
      sources: [
        {
          label: "Depression — sleep problems as a related concern",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — sleep and symptoms",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "sleep-disorders", "insomnia", "sleep-apnea", "multi-condition", "mental-health"],
    },
    {
      id: "bipolar-and-other-mental-health",
      title: "Bipolar disorder and other mental-health conditions",
      summary:
        "Depressive episodes also occur in bipolar disorder, which must be distinguished from unipolar depression because treatment differs; depression also co-occurs with conditions like PTSD, eating disorders, and others.",
      detail:
        "Several other mental-health conditions intersect with depression. Most important for treatment is bipolar disorder, in which depressive episodes alternate with periods of mania or hypomania: a depressive episode in bipolar disorder can look just like unipolar major depression, but treatment differs (mood stabilizers are central, and antidepressants alone can trigger mania), so distinguishing the two is a key safety step covered in the diagnosis and drug-interactions sections. Depression also co-occurs with conditions such as post-traumatic stress disorder (PTSD), obsessive-compulsive disorder, eating disorders, ADHD, and personality disorders, among others. When depression accompanies another mental-health condition, each can complicate the other's course and treatment, and the overall plan must account for both — for example treating trauma alongside depression, or recognizing that an eating disorder needs its own specialized care. The practical message is that 'depression' is not always the whole story, and a thorough assessment considers what else may be present, because it changes what helps. This is educational information; sorting out co-occurring conditions and tailoring treatment is the work of the care team.",
      sources: [
        {
          label: "Bipolar Disorder — depressive episodes and distinguishing from depression",
          url: "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression — co-occurring mental health conditions",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["comorbidity", "bipolar", "ptsd", "eating-disorders", "multi-condition", "mental-health"],
      caution:
        "Distinguishing bipolar from unipolar depression matters because treatment differs — report any history of 'highs' to your clinician. Coordinating co-occurring conditions is the care team's job.",
    },
  ],
});
