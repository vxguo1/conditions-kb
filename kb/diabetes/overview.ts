import { defineSection } from "../types.js";

/**
 * Overview, types & classification — what diabetes is and the major forms
 * (type 1, type 2, gestational, prediabetes, and the less-common monogenic and
 * LADA types). Kept layperson-accessible.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview, Types & Classification",
  description:
    "What diabetes is, how the main types differ (type 1, type 2, gestational, prediabetes, MODY, LADA), and the scale of the condition.",
  entries: [
    {
      id: "what-is-diabetes",
      title: "What diabetes is",
      summary:
        "Diabetes is a group of conditions in which blood glucose (blood sugar) runs too high because the body makes too little insulin, cannot use it well, or both.",
      detail:
        "Diabetes mellitus is a chronic condition defined by raised blood glucose. After we eat, carbohydrate is broken down into glucose, which enters the bloodstream; the hormone insulin, made by beta cells in the pancreas, lets glucose move into cells for energy. In diabetes this system fails — either the pancreas makes little or no insulin, the body's cells respond poorly to insulin (insulin resistance), or both — so glucose builds up in the blood. Persistently high glucose, over years, damages blood vessels and nerves and drives the long-term complications of diabetes. The main types differ in cause, but all share elevated glucose as the core problem.",
      sources: [
        {
          label: "What Is Diabetes?",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Diabetes Basics",
          url: "https://www.cdc.gov/diabetes/about/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["basics", "definition"],
    },
    {
      id: "type-1-diabetes",
      title: "Type 1 diabetes",
      summary:
        "Type 1 is an autoimmune disease in which the immune system destroys the insulin-making beta cells, so the body makes essentially no insulin and lifelong insulin treatment is required.",
      detail:
        "Type 1 diabetes (T1D) accounts for roughly 5–10% of diabetes. It is an autoimmune condition: the immune system mistakenly attacks and destroys the pancreatic beta cells that make insulin. As insulin production fails, glucose can no longer enter cells, and without replacement insulin the body breaks down fat for fuel, producing acid ketones that can cause a life-threatening emergency (diabetic ketoacidosis). T1D often appears in childhood or adolescence but can begin at any age. It is not caused by diet or lifestyle and cannot currently be prevented or cured; everyone with T1D needs insulin, delivered by injection or pump, to live.",
      sources: [
        {
          label: "Type 1 diabetes — Symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/type-1-diabetes/symptoms-causes/syc-20353011",
          publisher: "Mayo Clinic",
        },
        {
          label: "Understanding Type 1 Diabetes",
          url: "https://diabetes.org/about-diabetes/type-1",
          publisher: "American Diabetes Association",
        },
      ],
      tags: ["type-1", "autoimmune"],
    },
    {
      id: "type-2-diabetes",
      title: "Type 2 diabetes",
      summary:
        "Type 2 is the most common form: the body becomes resistant to insulin and the pancreas can't keep up, so glucose rises. It is strongly linked to genetics, weight, and lifestyle.",
      detail:
        "Type 2 diabetes (T2D) makes up about 90–95% of cases. It develops when the body's cells respond poorly to insulin (insulin resistance) and, over time, the pancreas can no longer produce enough insulin to overcome that resistance. Risk rises with age, family history, excess weight (especially around the abdomen), physical inactivity, and certain ethnic backgrounds. T2D often develops gradually and can be present for years with few symptoms, so many people are diagnosed late or after a complication appears. Unlike type 1, type 2 can often be improved — and sometimes pushed into remission — through weight loss, dietary change, and activity, alongside medication when needed.",
      sources: [
        {
          label: "Type 2 diabetes — Symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193",
          publisher: "Mayo Clinic",
        },
        {
          label: "Understanding Type 2 Diabetes",
          url: "https://diabetes.org/about-diabetes/type-2",
          publisher: "American Diabetes Association",
        },
      ],
      tags: ["type-2", "insulin-resistance"],
    },
    {
      id: "prediabetes",
      title: "Prediabetes",
      summary:
        "Prediabetes means blood glucose is higher than normal but not yet in the diabetes range — a strong warning sign, and often reversible.",
      detail:
        "In prediabetes, blood glucose is elevated but below the threshold for type 2 diabetes (for example, an A1c of 5.7–6.4%, a fasting glucose of 100–125 mg/dL, or an OGTT 2-hour value of 140–199 mg/dL). It usually has no symptoms, yet it substantially raises the risk of progressing to type 2 diabetes and of cardiovascular disease. The important message is that prediabetes is often reversible: structured lifestyle programs emphasizing modest weight loss and increased physical activity (and, in some people, metformin) can significantly cut the chance of developing diabetes. Identifying prediabetes is a key opportunity for prevention.",
      sources: [
        {
          label: "Diabetes Tests & Diagnosis (prediabetes ranges)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Diabetes Basics — prediabetes",
          url: "https://www.cdc.gov/diabetes/about/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["prediabetes", "prevention"],
    },
    {
      id: "gestational-diabetes",
      title: "Gestational diabetes",
      summary:
        "Gestational diabetes is high blood glucose first recognized in pregnancy; it usually resolves after birth but raises later type 2 risk for the parent.",
      detail:
        "Gestational diabetes mellitus (GDM) develops during pregnancy, typically in the second or third trimester, when pregnancy hormones increase insulin resistance and the pancreas can't keep up. It usually causes no obvious symptoms and is found through routine screening (often an oral glucose tolerance test). Well-managed GDM — through monitoring, nutrition, activity, and insulin or other medication when needed — protects both parent and baby; poorly controlled GDM raises risks such as a large baby, delivery complications, and neonatal low blood sugar. Glucose usually returns to normal after delivery, but a history of GDM markedly increases the lifetime risk of type 2 diabetes, so follow-up testing is recommended.",
      sources: [
        {
          label: "Gestational Diabetes",
          url: "https://diabetes.org/about-diabetes/gestational-diabetes",
          publisher: "American Diabetes Association",
        },
        {
          label: "Symptoms & Causes of Diabetes (gestational)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/symptoms-causes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["gestational", "pregnancy"],
    },
    {
      id: "monogenic-mody-ndm",
      title: "Monogenic diabetes (MODY and neonatal)",
      summary:
        "A small share of diabetes comes from a single inherited gene change — including MODY in young adults and neonatal diabetes in infants — and some forms respond to specific treatments.",
      detail:
        "Monogenic diabetes results from a mutation in a single gene and accounts for roughly 1–4% of diabetes in the U.S. The two main groups are maturity-onset diabetes of the young (MODY), which usually appears in adolescence or early adulthood, and neonatal diabetes mellitus, which appears in infants under about 6–12 months. More than 40 subtypes are known; mutations in the HNF1A and GCK genes are among the most common. Monogenic diabetes is frequently misdiagnosed as type 1 or type 2. Getting the genetic diagnosis right matters because treatment can differ sharply — for example, certain MODY and neonatal forms are well controlled with oral sulfonylureas rather than insulin, and GCK-MODY often needs no treatment at all.",
      sources: [
        {
          label: "Monogenic Diabetes (Neonatal Diabetes Mellitus & MODY)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/monogenic-neonatal-mellitus-mody",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["monogenic", "mody", "neonatal", "genetics"],
    },
    {
      id: "lada",
      title: "LADA (latent autoimmune diabetes in adults)",
      summary:
        "LADA is a slowly developing form of type 1 autoimmune diabetes that appears in adulthood and is often mistaken at first for type 2.",
      detail:
        "Latent autoimmune diabetes in adults (LADA) is sometimes called 'type 1.5' diabetes. Like type 1, it is autoimmune — the immune system gradually destroys beta cells, and islet autoantibodies (such as GAD antibodies) are usually present — but it develops slowly in adults, who may not need insulin for months or years after diagnosis. Because it looks like type 2 at first, LADA is often initially misclassified. Recognizing it matters because insulin is typically needed sooner than in type 2, and the management approach differs. Clinicians may suspect LADA in an adult with 'type 2' who is not overweight, has other autoimmune conditions, or responds poorly to oral medications; antibody and C-peptide testing help clarify the diagnosis.",
      sources: [
        {
          label: "Latent autoimmune diabetes in adults (LADA): What is it?",
          url: "https://www.mayoclinic.org/diseases-conditions/type-1-diabetes/expert-answers/lada-diabetes/faq-20057880",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["lada", "autoimmune", "type-1.5"],
    },
    {
      id: "epidemiology-burden",
      title: "How common diabetes is",
      summary:
        "Diabetes is one of the most common chronic diseases worldwide, affecting hundreds of millions of people, with type 2 accounting for the large majority.",
      detail:
        "Diabetes is a major and growing global health problem. Hundreds of millions of adults live with it worldwide, and a large fraction — especially with type 2 — are undiagnosed. In the United States, more than one in ten people have diabetes and roughly a third of adults have prediabetes. Type 2 makes up about 90–95% of cases; type 1 about 5–10%; the remainder are gestational, monogenic, and other forms. Prevalence is rising with aging populations, urbanization, and increasing obesity. Diabetes is a leading cause of blindness, kidney failure, lower-limb amputation, heart attack, and stroke, which is why prevention, early diagnosis, and good ongoing care matter so much.",
      sources: [
        {
          label: "Diabetes Basics — statistics and overview",
          url: "https://www.cdc.gov/diabetes/about/index.html",
          publisher: "CDC",
        },
        {
          label: "What Is Diabetes? — scope",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["epidemiology", "burden"],
    },
  ],
});
