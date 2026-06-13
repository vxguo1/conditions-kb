import { defineSection } from "../types.js";

/**
 * Comorbidities & co-occurring conditions — which conditions commonly travel
 * with bipolar disorder and the COMPOUNDING / CONFLICTING considerations when
 * they overlap. This is the grounding for multi-condition reasoning: anxiety
 * disorders, substance use disorder, ADHD, cardiometabolic disease (worsened by
 * some medications), and thyroid problems (especially with lithium).
 *
 * Educational only. Coordinating overlapping, sometimes conflicting management
 * across conditions is the job of the care team, including a pharmacist for the
 * medication picture.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with bipolar disorder and why it compounds care: anxiety disorders, substance use disorder, ADHD, cardiometabolic disease (worsened by some medications), and thyroid problems (especially with lithium). Educational grounding for multi-condition reasoning.",
  entries: [
    {
      id: "comorbidities-overview",
      title: "Bipolar disorder rarely travels alone",
      summary:
        "Most people with bipolar disorder have at least one other mental or physical condition; these interact, complicate treatment, and make whole-person, coordinated care essential.",
      detail:
        "Co-occurring conditions are the rule rather than the exception in bipolar disorder: a large majority of people have at least one other psychiatric or physical condition over their lifetime. These overlaps matter in two directions — the other condition can worsen mood stability and complicate treatment, and bipolar disorder can worsen the other condition — and they often create compounding or conflicting management considerations. For example, a medication that helps one problem may affect another, several conditions together mean more medications and interactions, and symptoms can blur (anxiety, ADHD, and substance effects can all resemble or mask mood episodes). This is why good bipolar care looks beyond mood to anxiety, substance use, attention, and physical health, and why coordination across a care team — psychiatry, primary care, and a pharmacist for the medication picture — is so important. The entries here map the most common co-occurring conditions and how they interact, as grounding for thinking carefully about more than one condition at once.",
      sources: [
        {
          label: "Bipolar Disorder — co-occurring conditions",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "An Introduction to Bipolar Disorder and Co-Occurring Substance Use Disorders",
          url: "https://library.samhsa.gov/product/advisory-introduction-bipolar-disorder-and-co-occurring-substance-use-disorders/sma16-4960",
          publisher: "SAMHSA",
        },
      ],
      tags: ["comorbidity", "overview", "multi-condition"],
    },
    {
      id: "anxiety-disorders",
      title: "Anxiety disorders",
      summary:
        "Anxiety disorders are among the most common companions of bipolar disorder; they can worsen the course, complicate treatment, and overlap with mood symptoms, so they are assessed and managed alongside it.",
      detail:
        "Anxiety disorders — including generalized anxiety, panic disorder, social anxiety, and others — co-occur very commonly with bipolar disorder. Their presence is associated with a more difficult course: more severe symptoms, greater impairment, poorer response to some treatments, and higher suicide risk, so identifying and addressing anxiety is an important part of comprehensive care. Anxiety also creates management complexity. Symptoms can overlap with mixed states or agitation, making the picture harder to read, and some treatments commonly used for anxiety in the general population — notably antidepressants — must be used cautiously in bipolar disorder because of the risk of triggering mania (see Treatments and Drug Interactions). As a result, anxiety in bipolar disorder is often addressed through psychotherapy (such as CBT), mood-stabilizing treatment that also helps anxiety, and careful, individualized medication choices rather than reflexively adding an antidepressant. Coordinating this balance is a clear example of conflicting considerations that the care team must weigh together.",
      sources: [
        {
          label: "Bipolar Disorder — anxiety and other co-occurring disorders",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — related conditions including anxiety",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "anxiety", "multi-condition"],
    },
    {
      id: "substance-use-disorder",
      title: "Substance use disorder",
      summary:
        "Alcohol and drug use disorders co-occur with bipolar disorder far more often than in the general population; each worsens the other, and integrated treatment of both together works best.",
      detail:
        "Substance use disorders are strikingly common in bipolar disorder, occurring far more often than in the general population, and the relationship is bidirectional and reinforcing. Alcohol and drugs can trigger and worsen mood episodes, deepen depression, increase impulsivity and suicide risk, and interfere with medication, while the distress of bipolar symptoms can drive people to use substances to cope. This overlap complicates diagnosis (substance effects can mimic or mask mood episodes), treatment (interactions and adherence challenges), and safety. Because of how tightly the two conditions interact, the recommended approach is integrated treatment that addresses both bipolar disorder and the substance use disorder together, rather than treating them separately or sequentially. This is offered in a supportive, non-judgmental way: substance use disorder is a treatable medical condition, not a moral failing, and effective help exists. SAMHSA and care teams provide resources, and asking for help with substance use is a constructive, courageous step.",
      sources: [
        {
          label: "An Introduction to Bipolar Disorder and Co-Occurring Substance Use Disorders",
          url: "https://library.samhsa.gov/product/advisory-introduction-bipolar-disorder-and-co-occurring-substance-use-disorders/sma16-4960",
          publisher: "SAMHSA",
        },
        {
          label: "Bipolar Disorder — substance use as a co-occurring condition",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["comorbidity", "substance-use", "alcohol", "multi-condition"],
      caution:
        "If physically dependent on alcohol or other substances, don't stop abruptly without medical advice — withdrawal can be dangerous. Integrated treatment is available and effective.",
    },
    {
      id: "adhd",
      title: "Attention-deficit/hyperactivity disorder (ADHD)",
      summary:
        "ADHD co-occurs with bipolar disorder more often than expected and shares features like distractibility and impulsivity, which complicates diagnosis; stimulant treatment requires extra care because of mania risk.",
      detail:
        "Attention-deficit/hyperactivity disorder (ADHD) co-occurs with bipolar disorder more frequently than would be expected by chance, especially in people whose bipolar disorder began early. The two conditions share several features — distractibility, restlessness, impulsivity, rapid speech, and difficulty concentrating — which makes them easy to confuse and important to distinguish: a key difference is that bipolar symptoms come in distinct episodes that represent a change from the person's baseline, while ADHD is a more constant, lifelong pattern. When both genuinely co-occur, treatment requires care because the stimulant medications commonly used for ADHD can, in some people with bipolar disorder, worsen mood instability or contribute to mania, so they are used cautiously and usually only when mood is stabilized first, under close supervision. This is another example of conflicting management considerations, where treating one condition must be balanced against its effect on the other — exactly the kind of judgment that belongs with a specialist who can see the whole picture.",
      sources: [
        {
          label: "Bipolar Disorder — co-occurring ADHD",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — distinguishing from and co-occurring with other conditions",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "adhd", "multi-condition"],
      caution:
        "Stimulants for ADHD can affect mood in bipolar disorder — any such treatment must be supervised by the prescriber and is usually started only once mood is stable.",
    },
    {
      id: "cardiometabolic-disease",
      title: "Cardiometabolic disease and medication effects",
      summary:
        "People with bipolar disorder have higher rates of obesity, diabetes, and heart disease — driven partly by the metabolic side effects of some medications — so monitoring weight, blood sugar, and cholesterol is part of care.",
      detail:
        "Cardiovascular and metabolic conditions — obesity, type 2 diabetes, high blood pressure, and abnormal cholesterol — occur more often in people with bipolar disorder and contribute substantially to the reduced average life expectancy seen with the condition (see Complications). Several factors drive this, and one of the most directly relevant is medication: several effective bipolar treatments, particularly some atypical antipsychotics (and to varying degrees others), can cause weight gain and worsen blood sugar and lipids. This creates a genuine balancing act — the medication may be very helpful for mood, yet carries metabolic risk — which is managed, not ignored, through regular monitoring of weight, blood pressure, blood sugar, and cholesterol; lifestyle support; choosing agents with the person's metabolic risk in mind; and coordinating with primary care. The goal is to protect both mental and physical health together. This compounding of psychiatric and physical risk is a central reason bipolar care must be whole-person and coordinated, and why no one should stop a beneficial medication on their own over metabolic concerns — the trade-offs are managed with the care team.",
      sources: [
        {
          label: "Bipolar Disorder — physical health and medication side effects",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — medication side effects including metabolic effects",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "cardiometabolic", "diabetes", "obesity", "metabolic", "multi-condition"],
      evidence: "established",
    },
    {
      id: "thyroid-and-lithium",
      title: "Thyroid problems (especially with lithium)",
      summary:
        "Thyroid disorders both can mimic or worsen mood symptoms and can be caused by long-term lithium, which is why thyroid function is checked before and during lithium treatment.",
      detail:
        "The thyroid has a special place in bipolar care for two reasons. First, thyroid disorders can mimic or contribute to mood and energy symptoms — an underactive thyroid can resemble or deepen depression, and thyroid problems are linked to rapid cycling — so thyroid function is part of the assessment of mood symptoms. Second, lithium, one of the most important bipolar medications, can affect the thyroid over time, most commonly causing an underactive thyroid (hypothyroidism), and can also affect the kidneys and parathyroid/calcium balance. This is why people taking lithium have their thyroid (and kidney) function checked before starting and at regular intervals during treatment, and why new symptoms like fatigue, weight gain, or cold intolerance should be mentioned. Importantly, lithium-related hypothyroidism is usually straightforward to detect and treat (often with thyroid hormone replacement) and is generally not a reason to stop a well-working mood stabilizer — it is managed alongside it. This interplay between a treatment and a co-occurring condition is a clear example of why monitoring and coordinated care matter.",
      sources: [
        {
          label: "Lithium — effects on thyroid and kidneys, and monitoring",
          url: "https://www.nhs.uk/medicines/lithium/side-effects-of-lithium/",
          publisher: "NHS (UK)",
        },
        {
          label: "Bipolar disorder — thyroid and rapid cycling considerations",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "thyroid", "lithium", "monitoring", "multi-condition"],
      evidence: "established",
      caution:
        "Thyroid and kidney monitoring is part of lithium treatment. Report new fatigue, weight, or temperature-sensitivity symptoms, but don't stop lithium on your own.",
    },
    {
      id: "coordinating-multiple-conditions",
      title: "Coordinating care across multiple conditions",
      summary:
        "Several co-occurring conditions mean several treatments that can interact or conflict; coordinated review — including by a pharmacist — keeps the combined plan coherent, safe, and centered on the whole person.",
      detail:
        "Because bipolar disorder so often comes with anxiety, substance use, ADHD, and cardiometabolic and thyroid conditions, many people end up managing several treatments at once, and these can interact, conflict, or compound side effects. The ideal treatment for one condition must sometimes be balanced against its effect on another — antidepressants and stimulants that could destabilize mood, antipsychotics that help mood but raise metabolic risk, lithium that treats mood but affects the thyroid and interacts with common medicines (see Drug Interactions). Managing this well depends on coordination: a care team that sees the whole picture, regular medication review and reconciliation (a role pharmacists are especially suited to), monitoring that catches problems early, and shared decisions that weigh the combined plan rather than optimizing any single condition in isolation. For the person, the most useful habits are keeping one complete, current list of all conditions, medications, and supplements; making sure each provider knows about the others; and asking for a coordinated review when things feel complicated. The combined plan — built with professional oversight — is what good multi-condition care optimizes.",
      sources: [
        {
          label: "Bipolar Disorder — coordinated, comprehensive care",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Lithium — coordinating medicines and monitoring",
          url: "https://www.nhs.uk/medicines/lithium/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["comorbidity", "coordination", "polypharmacy", "pharmacist", "multi-condition"],
      caution:
        "When several conditions and medicines stack up, ask for a coordinated medication review with the care team or pharmacist — optimizing the whole plan is safer than treating one condition alone.",
    },
  ],
});
