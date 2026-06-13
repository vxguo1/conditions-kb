import { defineSection } from "../types.js";

/**
 * Diagnosis & monitoring tests — the blood tests that diagnose diabetes (A1c,
 * fasting glucose, OGTT, random glucose) with their thresholds, plus the tests
 * that distinguish the types (islet autoantibodies, C-peptide).
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Diagnosis & Monitoring Tests",
  description:
    "How diabetes and prediabetes are diagnosed — A1c, fasting glucose, OGTT, and random glucose with their cutoffs — and the antibody and C-peptide tests used to tell type 1 from type 2.",
  entries: [
    {
      id: "a1c-test",
      title: "The A1c test",
      summary:
        "A1c reflects average blood glucose over about 2–3 months; 6.5% or higher (on two tests) indicates diabetes, and 5.7–6.4% indicates prediabetes.",
      detail:
        "Hemoglobin A1c (HbA1c) measures the percentage of hemoglobin in red blood cells that has glucose attached, giving an average of blood glucose over the prior roughly 2–3 months. It needs no fasting and is widely used both to diagnose and to monitor diabetes. Diagnostic thresholds: A1c below 5.7% is normal, 5.7–6.4% is prediabetes, and 6.5% or higher indicates diabetes (a diagnosis is generally confirmed with a repeat or a second test type). A1c can be misleading in some situations — pregnancy, recent blood loss or transfusion, certain anemias, and some hemoglobin variants — where glucose-based tests are preferred. Once diagnosed, A1c is also the main long-term control metric, with individualized targets (commonly around 7% for many adults, but higher or lower depending on the person).",
      sources: [
        {
          label: "Diabetes Tests & Diagnosis",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "2. Diagnosis and Classification of Diabetes (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S27/157566/2-Diagnosis-and-Classification-of-Diabetes",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["diagnosis", "a1c", "monitoring"],
    },
    {
      id: "fasting-glucose-ogtt",
      title: "Fasting glucose, OGTT, and random glucose",
      summary:
        "Diabetes can also be diagnosed by fasting glucose ≥126 mg/dL, a 2-hour OGTT value ≥200 mg/dL, or a random glucose ≥200 mg/dL with classic symptoms.",
      detail:
        "Besides A1c, three glucose-based tests diagnose diabetes. The fasting plasma glucose (FPG) is measured after at least 8 hours without eating: below 100 mg/dL is normal, 100–125 mg/dL is prediabetes, and 126 mg/dL or higher indicates diabetes. The oral glucose tolerance test (OGTT) measures glucose 2 hours after drinking a standard 75 g glucose solution: below 140 is normal, 140–199 is prediabetes, and 200 mg/dL or higher indicates diabetes; the OGTT is also the standard for gestational diabetes screening. A random (any-time) plasma glucose of 200 mg/dL or higher, together with classic symptoms such as excessive thirst, frequent urination, and unexplained weight loss, also makes the diagnosis. Apart from an unequivocally high random glucose with symptoms, results are normally confirmed with a repeat test.",
      sources: [
        {
          label: "Diabetes Tests & Diagnosis (FPG, OGTT, random)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "2. Diagnosis and Classification of Diabetes (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S27/157566/2-Diagnosis-and-Classification-of-Diabetes",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["diagnosis", "fasting-glucose", "ogtt"],
    },
    {
      id: "islet-autoantibodies",
      title: "Islet autoantibodies",
      summary:
        "Autoantibodies against beta-cell proteins (such as GAD, IA-2, ZnT8, and insulin) mark the autoimmune diabetes of type 1 and LADA.",
      detail:
        "Islet autoantibodies are immune proteins directed against components of the insulin-producing beta cells, and their presence signals an autoimmune cause. The main ones tested are GAD65 (glutamic acid decarboxylase), IA-2, zinc transporter 8 (ZnT8), and insulin autoantibodies. They are typically present in type 1 diabetes and in LADA, and absent in type 2 and most monogenic diabetes, so antibody testing helps classify the diabetes type — especially in adults where type 1/LADA can be mistaken for type 2, or in children with atypical features. Autoantibodies can also be detected before symptoms begin: having two or more is now used to define early-stage type 1 diabetes in at-risk individuals, which underpins screening programs and the use of prevention therapy.",
      sources: [
        {
          label: "2. Diagnosis and Classification of Diabetes (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S27/157566/2-Diagnosis-and-Classification-of-Diabetes",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["diagnosis", "autoantibodies", "type-1", "classification"],
    },
    {
      id: "c-peptide",
      title: "C-peptide — measuring your own insulin",
      summary:
        "C-peptide is released alongside insulin, so it estimates how much insulin a person still makes — low in type 1, often normal or high in type 2.",
      detail:
        "When beta cells make insulin, they release it together with a fragment called C-peptide in equal amounts. Because injected insulin contains no C-peptide, measuring C-peptide gives a picture of how much insulin the body itself is still producing. Levels tend to be low or undetectable in established type 1 diabetes (little endogenous insulin), and normal or high in type 2 (where the problem is insulin resistance, at least early on). C-peptide can therefore help classify uncertain cases — for example, distinguishing long-standing type 1 from type 2, evaluating possible LADA, or clarifying monogenic diabetes — and is interpreted alongside the clinical picture and autoantibody results rather than on its own.",
      sources: [
        {
          label: "2. Diagnosis and Classification of Diabetes (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S27/157566/2-Diagnosis-and-Classification-of-Diabetes",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["diagnosis", "c-peptide", "classification"],
    },
    {
      id: "classifying-the-type",
      title: "Telling the types apart",
      summary:
        "Classification combines the clinical picture with antibody and C-peptide testing; getting it right changes treatment, especially for type 1, LADA, and monogenic diabetes.",
      detail:
        "Correctly classifying diabetes guides treatment, but it is not always obvious from glucose numbers alone. Clinicians weigh the clinical picture (age at onset, body weight, speed of onset, family history, presence of ketoacidosis, response to oral medication) together with islet autoantibodies and, when needed, C-peptide and genetic testing. Misclassification is common — adults with type 1 or LADA are sometimes labeled type 2 and undertreated, while young people with monogenic diabetes may be mislabeled type 1 and given unnecessary insulin. The stakes are practical: type 1 and LADA need insulin (sooner in LADA than its 'type 2' appearance suggests), certain monogenic forms respond to sulfonylureas or need no treatment, and type 2 has the widest menu of options. When the type is unclear, specialist evaluation and antibody/C-peptide testing are warranted.",
      sources: [
        {
          label: "2. Diagnosis and Classification of Diabetes (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S27/157566/2-Diagnosis-and-Classification-of-Diabetes",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Diabetes Tests & Diagnosis",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["diagnosis", "classification"],
      caution:
        "When the diabetes type is uncertain or treatment isn't working as expected, ask the care team about antibody, C-peptide, or genetic testing — classification is a clinical decision.",
    },
  ],
});
