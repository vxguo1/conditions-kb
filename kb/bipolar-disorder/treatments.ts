import { defineSection } from "../types.js";

/**
 * TREATMENTS — medications and procedures used to treat bipolar disorder: mood
 * stabilizers (lithium, valproate, lamotrigine, carbamazepine), atypical
 * antipsychotics, the cautious and limited role of antidepressants, and ECT for
 * severe or treatment-resistant illness.
 *
 * EDUCATIONAL only. No dosing is given, and all decisions about starting,
 * stopping, or changing medication belong with the prescriber and care team.
 */
export const treatments = defineSection({
  id: "treatments",
  title: "Treatments (Medications & Procedures)",
  description:
    "Educational overview of bipolar treatment: mood stabilizers (lithium, valproate, lamotrigine, carbamazepine), atypical antipsychotics, the cautious role of antidepressants, and ECT for severe cases. No dosing — treatment decisions belong with the care team.",
  entries: [
    {
      id: "treatment-overview",
      title: "How bipolar disorder is treated",
      summary:
        "Bipolar disorder is usually managed long-term with a combination of medication (especially mood stabilizers) and psychotherapy, tailored to the person; consistency and a strong relationship with the care team are central to staying well.",
      detail:
        "Bipolar disorder cannot currently be cured, but it is very treatable, and most people can achieve meaningful stability with the right plan. Treatment is usually ongoing and combines medication with psychotherapy and lifestyle supports. Medications — particularly mood stabilizers, and often atypical antipsychotics — are the foundation for controlling acute episodes and preventing relapse, while talk therapy helps people understand the illness, recognize warning signs, manage stress, protect routines, and stick with treatment. Plans are individualized: the best medication or combination differs from person to person and may need adjusting over time, and finding the right fit can take patience. A consistent, trusting relationship with a psychiatrist and care team is one of the strongest predictors of doing well, because it supports the steady, long-term management the condition requires. Stopping treatment when feeling well is a common cause of relapse, so changes should always be made with the prescriber rather than alone.",
      sources: [
        {
          label: "Bipolar Disorder — treatment overview",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — diagnosis and treatment",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "overview"],
      caution:
        "Educational only — no dosing or individualized advice. Never start, stop, or change any medication without your prescriber.",
    },
    {
      id: "lithium",
      title: "Lithium",
      summary:
        "Lithium is a long-established, highly effective mood stabilizer that treats and prevents episodes and is notable for reducing suicide risk; because it has a narrow safe range, it requires regular blood-level and organ monitoring.",
      detail:
        "Lithium is one of the oldest and most effective treatments for bipolar disorder, used to treat acute mania and, especially, to prevent both manic and depressive relapses over the long term. It is also distinctive among mood treatments for evidence that it can lower the risk of suicide. Its main practical challenge is a narrow therapeutic index: the helpful blood level is close to the level that causes toxicity, so people on lithium have regular blood tests to keep the level in range and to monitor kidney and thyroid function, both of which lithium can affect over time. Levels can be pushed too high by dehydration, low salt intake, vomiting or diarrhea, hot weather, and certain medications (see the Drug Interactions and Acute Emergencies sections). Common, usually manageable side effects include increased thirst and urination, fine hand tremor, and weight changes. None of this makes lithium 'dangerous' — it is a cornerstone treatment for many people — but it does mean it must be taken consistently and monitored, with all adjustments made by the prescriber.",
      sources: [
        {
          label: "Lithium — a medicine for bipolar disorder and mania",
          url: "https://www.nhs.uk/medicines/lithium/",
          publisher: "NHS (UK)",
        },
        {
          label: "Bipolar disorder — medications (mood stabilizers including lithium)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "lithium", "mood-stabilizer", "monitoring"],
      evidence: "established",
      caution:
        "Lithium needs regular blood-level, kidney, and thyroid monitoring. Stay hydrated, keep salt intake steady, and never change the dose yourself — see Acute Emergencies for toxicity signs.",
    },
    {
      id: "valproate",
      title: "Valproate (valproic acid / divalproex)",
      summary:
        "Valproate is a mood stabilizer used especially for mania and mixed episodes; it is effective but carries important cautions, above all a high risk of birth defects, so it is generally avoided in people who could become pregnant.",
      detail:
        "Valproate (also called valproic acid, sodium valproate, or divalproex) is an anticonvulsant that works as a mood stabilizer, used particularly to treat manic and mixed episodes and to help prevent relapse. It can be effective and is sometimes chosen when rapid control of mania is needed. However, it carries significant cautions. Most importantly, valproate is highly teratogenic: taken during pregnancy it markedly raises the risk of serious birth defects and of problems with a child's development and learning, so it is generally not prescribed to anyone who is or could become pregnant unless there is no suitable alternative and strict pregnancy-prevention measures are in place. Other considerations include effects on the liver and pancreas, blood counts, weight gain, and the need for monitoring. It also interacts with other medicines (notably lamotrigine — see Drug Interactions). Whether valproate is appropriate, and what monitoring and contraception precautions apply, are decisions for the prescriber based on the individual.",
      sources: [
        {
          label: "Sodium valproate — pregnancy, birth defects, and cautions",
          url: "https://www.nhs.uk/medicines/sodium-valproate/pregnancy-breastfeeding-and-fertility-while-taking-sodium-valproate/",
          publisher: "NHS (UK)",
        },
        {
          label: "Valproate — reproductive risks (regulatory guidance)",
          url: "https://www.gov.uk/guidance/valproate-reproductive-risks",
          publisher: "UK MHRA / GOV.UK",
        },
      ],
      tags: ["treatment", "valproate", "mood-stabilizer", "pregnancy", "teratogenicity"],
      evidence: "established",
      caution:
        "Valproate can cause serious birth defects and developmental problems and is generally avoided in anyone who could become pregnant. Discuss contraception and risks with the prescriber.",
    },
    {
      id: "lamotrigine",
      title: "Lamotrigine",
      summary:
        "Lamotrigine is a mood stabilizer used mainly to prevent the depressive episodes of bipolar disorder; it must be started slowly because of a rare but serious risk of severe skin reactions.",
      detail:
        "Lamotrigine is an anticonvulsant used in bipolar disorder primarily to help prevent depressive episodes, the part of the illness that often causes the most suffering; it is generally less effective for treating acute mania. A defining feature of lamotrigine is that it must be started at a low dose and increased very gradually, because rapid increases raise the risk of a rare but potentially life-threatening skin reaction (such as Stevens-Johnson syndrome). Most rashes from lamotrigine are mild, but because a serious rash cannot be reliably told apart early on, any rash — especially in the first weeks of treatment or with mouth sores, blistering, or fever — should be reported urgently and may mean stopping the drug. The risk of serious rash is increased when lamotrigine is combined with valproate, which is why dosing is adjusted in that situation (see Drug Interactions). Lamotrigine is generally well tolerated otherwise, but the slow start and rash vigilance are essential, and all dosing belongs with the prescriber.",
      sources: [
        {
          label: "Lamotrigine — medicine for epilepsy and bipolar disorder (rash warning)",
          url: "https://www.nhs.uk/medicines/lamotrigine/",
          publisher: "NHS (UK)",
        },
        {
          label: "Bipolar disorder — medications (lamotrigine for maintenance)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "lamotrigine", "mood-stabilizer", "rash", "bipolar-depression"],
      evidence: "established",
      caution:
        "Report any rash on lamotrigine urgently, especially early in treatment — it can rarely signal a severe skin reaction. Never speed up the dose increase on your own.",
    },
    {
      id: "carbamazepine",
      title: "Carbamazepine",
      summary:
        "Carbamazepine is another anticonvulsant mood stabilizer used for bipolar disorder; it is effective for some people but is a strong liver-enzyme inducer that interacts with many other medications.",
      detail:
        "Carbamazepine is an anticonvulsant that can serve as a mood stabilizer in bipolar disorder, used in mania and for relapse prevention, sometimes when other options have not worked. A key practical feature is that carbamazepine is a potent inducer of liver enzymes (it speeds up the metabolism of many drugs), so it can lower the blood levels and effectiveness of numerous other medications — including hormonal contraceptives, some other psychiatric drugs, and many more — which makes interaction checks especially important (see Drug Interactions). It can also affect blood counts, sodium levels, and the liver, requiring monitoring, and like valproate it carries pregnancy-related risks. There is also a genetically increased risk of serious skin reactions in some populations, for which testing is sometimes recommended before starting. Whether carbamazepine is suitable, and how to manage its many interactions and monitoring needs, are decisions for the prescriber and pharmacist working together.",
      sources: [
        {
          label: "Bipolar disorder — medications (carbamazepine)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
        {
          label: "Carbamazepine — medicine information and cautions",
          url: "https://www.nhs.uk/medicines/carbamazepine/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "carbamazepine", "mood-stabilizer", "enzyme-inducer", "interactions"],
      evidence: "established",
      caution:
        "Carbamazepine interacts with many medicines (including some contraceptives) and needs monitoring — have a pharmacist review the full medication list.",
    },
    {
      id: "atypical-antipsychotics",
      title: "Atypical antipsychotics",
      summary:
        "Second-generation (atypical) antipsychotics such as quetiapine, lurasidone, aripiprazole, and others are widely used to treat mania, some forms of bipolar depression, and to prevent relapse — often alongside a mood stabilizer.",
      detail:
        "Atypical (second-generation) antipsychotics have become a mainstay of bipolar treatment and are used for more than psychosis. Several — including quetiapine, lurasidone, aripiprazole, olanzapine, risperidone, cariprazine, and others — are used to control acute mania, and some are specifically effective for bipolar depression (for example, quetiapine and lurasidone), while certain ones help prevent relapse during maintenance. They may be used alone or, commonly, combined with a mood stabilizer like lithium or valproate. Side-effect profiles differ by drug and matter for choice: some can cause significant weight gain and metabolic effects (such as higher blood sugar and cholesterol, relevant to long-term heart health — see Comorbidities), some cause sedation, and others can cause restlessness or movement effects, so metabolic and other monitoring is part of care. Because the right agent depends on the person's symptoms, other conditions, and tolerability, selection and any changes are made by the prescriber, weighing benefits against side effects.",
      sources: [
        {
          label: "Bipolar disorder — medications (antipsychotics)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder — medications used in treatment",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["treatment", "antipsychotics", "quetiapine", "lurasidone", "aripiprazole", "metabolic"],
      evidence: "established",
      caution:
        "Some antipsychotics cause weight gain and metabolic changes that need monitoring. The choice between agents and any changes belong with the prescriber.",
    },
    {
      id: "antidepressants-cautious-role",
      title: "The cautious, limited role of antidepressants",
      summary:
        "Antidepressants are used carefully and selectively in bipolar disorder because, especially without a mood stabilizer, they can trigger mania or worsen mood cycling; they are not a first-line treatment for bipolar depression on their own.",
      detail:
        "Antidepressants play a more limited and cautious role in bipolar disorder than in unipolar depression. The central concern is that, particularly when taken without a mood stabilizer, antidepressants can in some people trigger a switch into mania or hypomania or accelerate rapid cycling, which is one reason distinguishing bipolar from unipolar depression before treatment is so important. As a result, guidelines generally do not recommend antidepressants alone as a first-line treatment for bipolar depression; when they are used, it is typically alongside a mood stabilizer or antipsychotic and with careful monitoring, and many bipolar depressions are treated with mood stabilizers or specific antipsychotics instead. Whether an antidepressant is appropriate for a given person — and which one, for how long, and with what protective medication — is a nuanced decision that belongs entirely with the prescriber. People taking these medicines should watch for and report signs of a mood switch (such as decreasing need for sleep, racing thoughts, or escalating energy) and should never start or stop an antidepressant on their own.",
      sources: [
        {
          label: "Bipolar disorder — medications (antidepressants and mood switching)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder — treatment considerations",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["treatment", "antidepressants", "antidepressant-induced-mania", "caution"],
      evidence: "established",
      caution:
        "Antidepressants can trigger mania in bipolar disorder, especially without a mood stabilizer. Never start or stop one on your own — report any signs of a mood switch to the prescriber.",
    },
    {
      id: "ect",
      title: "Electroconvulsive therapy (ECT)",
      summary:
        "ECT is a safe, effective procedure done under anesthesia that can rapidly help severe mania, severe bipolar depression, or treatment-resistant episodes — particularly when there is high suicide risk or medications haven't worked.",
      detail:
        "Electroconvulsive therapy (ECT) is a medical procedure in which, under general anesthesia and with a muscle relaxant, a brief, controlled electrical stimulus induces a short seizure in the brain. Despite an outdated reputation, modern ECT is a safe and often highly effective treatment, and it is one of the most effective options for severe depression and severe mania, as well as for episodes that have not responded to medication or where a fast response is needed — for example, with very high suicide risk, life-threatening agitation, psychosis, or inability to eat and drink. It is usually given as a course of several sessions. The most common side effects are temporary confusion right after treatment and some memory difficulties, which are generally short-lived, and it is performed by a specialized team with monitoring. ECT is not a first step for most people, but it is an important option for severe or treatment-resistant bipolar illness, and the decision to use it is made carefully with the person (or, when needed, their representative) and the psychiatric team.",
      sources: [
        {
          label: "ECT (Electroconvulsive Therapy) — what it is and uses",
          url: "https://my.clevelandclinic.org/health/treatments/9302-ect-electroconvulsive-therapy",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Bipolar disorder — treatment (ECT for severe episodes)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "ect", "procedure", "treatment-resistant", "severe"],
      evidence: "established",
    },
  ],
});
