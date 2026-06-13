import { defineSection } from "../types.js";

/**
 * Comorbidities & co-occurring conditions — which conditions commonly travel
 * with diabetes and the COMPOUNDING considerations when they overlap. This is
 * the grounding for multi-condition reasoning: the cardio-renal-metabolic
 * cluster, mental health, obesity-linked conditions, autoimmune clustering in
 * type 1, and the polypharmacy that results.
 *
 * Educational only. Coordinating overlapping (sometimes conflicting) management
 * across conditions is the job of the care team, including a pharmacist for the
 * medication picture.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with diabetes and why it compounds: the cardiovascular–kidney–metabolic cluster, hypertension and abnormal lipids, obesity-linked conditions, depression and other mental health, autoimmune clustering in type 1, and the resulting polypharmacy.",
  entries: [
    {
      id: "comorbidities-overview",
      title: "Diabetes rarely travels alone",
      summary:
        "Most people with diabetes have one or more other long-term conditions; these interact, so good care treats the whole person rather than glucose in isolation.",
      detail:
        "Diabetes commonly co-occurs with other chronic conditions, and modern guidelines build the assessment of comorbidities into routine diabetes care for that reason. The overlaps matter in two directions: diabetes raises the risk of conditions like heart disease, kidney disease, and depression, and those conditions in turn make diabetes harder to manage and worsen outcomes. They also create compounding and sometimes conflicting management considerations — a treatment that helps one condition may affect another, and several conditions together mean several medications and a heavier self-care load. This is why comprehensive diabetes care looks beyond glucose to blood pressure, lipids, kidney function, weight, mental health, and more, and why coordination across the care team is so important. The entries here map the most common co-occurring conditions and how they interact, as grounding for thinking about more than one condition at once.",
      sources: [
        {
          label: "4. Comprehensive Medical Evaluation and Assessment of Comorbidities (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S59/157568/4-Comprehensive-Medical-Evaluation-and-Assessment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Preventing Diabetes Problems (multiple body systems)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["comorbidity", "overview", "multi-condition"],
    },
    {
      id: "cardio-renal-metabolic-cluster",
      title: "The diabetes–heart–kidney cluster",
      summary:
        "Diabetes, heart disease, and chronic kidney disease form an extremely common, tightly linked cluster; they share drivers and worsen one another, but some treatments help all three at once.",
      detail:
        "Type 2 diabetes, cardiovascular disease, and chronic kidney disease frequently occur together — so often that they are increasingly described as a single cardiovascular–kidney–metabolic syndrome. They share underlying drivers (insulin resistance, high blood pressure, abnormal lipids, inflammation, and blood-vessel damage) and each accelerates the others: diabetes damages the heart and kidneys, kidney disease worsens blood pressure and cardiovascular risk, and heart failure and kidney disease complicate each other. This compounding is why management is coordinated rather than siloed, and it shapes drug choice in a helpful way: SGLT2 inhibitors and GLP-1 receptor agonists are favored precisely because they lower glucose while also reducing cardiovascular events, heart-failure hospitalization, and kidney-disease progression, and blood-pressure drugs like ACE inhibitors/ARBs protect both heart and kidney. The flip side is added complexity — overlapping risks, more medications, and the need to watch kidney function and volume status — so this cluster is the prime example of why multi-condition diabetes care must be integrated.",
      sources: [
        {
          label: "10. Cardiovascular Disease and Risk Management (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S207/157549/10-Cardiovascular-Disease-and-Risk-Management",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Diabetic Kidney Disease (diabetes, kidney, and heart links)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["comorbidity", "cardiovascular", "kidney", "cluster", "multi-condition"],
      evidence: "established",
    },
    {
      id: "hypertension-and-dyslipidemia",
      title: "High blood pressure and abnormal cholesterol",
      summary:
        "Most people with type 2 diabetes also have high blood pressure and/or abnormal lipids; together these multiply cardiovascular and kidney risk, so they are managed alongside glucose.",
      detail:
        "High blood pressure (hypertension) and abnormal cholesterol/triglycerides (dyslipidemia) are so common in type 2 diabetes that they are considered part of the standard picture rather than separate surprises. Each independently raises the risk of heart attack, stroke, and kidney disease, and combined with diabetes they compound that risk substantially — which is why diabetes care targets all of them together (often summarized as the 'ABCs': A1c, Blood pressure, Cholesterol, plus stopping smoking). Management typically includes blood-pressure medicines (commonly ACE inhibitors or ARBs, which also protect the kidneys) and lipid-lowering therapy (commonly statins) for most adults with diabetes in the relevant age and risk groups, alongside lifestyle measures. Treating these companions of diabetes generally does more to prevent heart attacks and strokes than focusing on glucose alone, which is why they are central, not optional, parts of care.",
      sources: [
        {
          label: "10. Cardiovascular Disease and Risk Management (blood pressure and lipids)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S207/157549/10-Cardiovascular-Disease-and-Risk-Management",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Manage Blood Sugar and the ABCs",
          url: "https://www.cdc.gov/diabetes/treatment/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["comorbidity", "hypertension", "cholesterol", "cardiovascular"],
      evidence: "established",
    },
    {
      id: "obesity-and-related-conditions",
      title: "Obesity and its related conditions",
      summary:
        "Excess weight drives type 2 diabetes and travels with conditions like fatty liver disease and sleep apnea; addressing weight can improve several of them at once.",
      detail:
        "Obesity is closely tied to type 2 diabetes through insulin resistance, and it tends to bring a constellation of related conditions: metabolic dysfunction-associated steatotic liver disease (MASLD, formerly non-alcoholic fatty liver disease), obstructive sleep apnea, high blood pressure, abnormal lipids, and osteoarthritis, among others. These overlap and reinforce one another — for example, sleep apnea worsens blood pressure and glucose control, and fatty liver tracks with cardiovascular risk. The encouraging implication is that weight-centered management can improve several conditions together: substantial weight loss (through structured lifestyle programs, GLP-1 and dual GIP/GLP-1 medications, or metabolic surgery) improves glucose, blood pressure, lipids, fatty liver, and sleep apnea, and can push type 2 diabetes toward remission. Because of this shared root, evaluating and addressing weight is a high-leverage part of diabetes care, coordinated with screening for the conditions that accompany it.",
      sources: [
        {
          label: "4. Comprehensive Medical Evaluation and Assessment of Comorbidities (obesity-related conditions)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S59/157568/4-Comprehensive-Medical-Evaluation-and-Assessment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "8. Obesity and Weight Management (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/issue/48/Supplement_1",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["comorbidity", "obesity", "fatty-liver", "sleep-apnea", "weight"],
      evidence: "established",
    },
    {
      id: "depression-and-mental-health-comorbidity",
      title: "Depression and mental health",
      summary:
        "Depression, anxiety, and diabetes distress are markedly more common with diabetes and worsen self-care and outcomes; the relationship runs both ways, so mental health is part of diabetes care.",
      detail:
        "Mental health conditions co-occur with diabetes far more often than with the general population, and the link is bidirectional: living with a demanding chronic illness raises the risk of depression, anxiety, and diabetes distress, and depression in turn makes the daily work of diabetes — monitoring, medication, food, activity — harder to sustain, which worsens glucose control and complication risk. This is a clear example of compounding: untreated depression undermines management of the physical condition, and poor glucose control can deepen low mood. Eating disorders, including unsafe insulin restriction, are an additional serious risk. Because of these interactions, guidelines recommend periodic screening for depression, anxiety, and diabetes distress and integrating mental health support into diabetes care. Treating the mental health side — through counseling, peer support, diabetes education, and, where appropriate, medication — often improves both wellbeing and physical outcomes, which is why it belongs in the core of multi-condition care, not the margins.",
      sources: [
        {
          label: "5. Facilitating Positive Health Behaviors and Well-being (psychosocial care)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/5-Facilitating-Positive-Health-Behaviors-and-Well",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Preventing Diabetes Problems (depression and diabetes)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["comorbidity", "depression", "mental-health", "diabetes-distress", "multi-condition"],
      evidence: "established",
    },
    {
      id: "autoimmune-and-other-co-occurring",
      title: "Autoimmune clustering (type 1) and other co-occurring conditions",
      summary:
        "Type 1 diabetes clusters with other autoimmune conditions (thyroid disease, celiac), and diabetes overall is linked to higher risks of dementia, gum disease, and more.",
      detail:
        "Beyond the cardiometabolic and mental-health overlaps, diabetes co-occurs with several other conditions. In type 1 (an autoimmune disease), other autoimmune conditions cluster — most commonly autoimmune thyroid disease and celiac disease, but also others — so periodic screening for thyroid problems (and celiac when indicated) is part of type 1 care. Across diabetes types, associations include periodontal (gum) disease, which has a two-way relationship with glucose control; obstructive sleep apnea; an increased risk of cognitive decline and dementia; certain cancers; hearing loss; fatty liver disease; and sexual dysfunction. Frailty and multiple conditions become especially important in older adults, where goals are individualized and avoiding hypoglycemia takes priority. The practical point is that diabetes care includes looking for the specific conditions that tend to accompany it — screening guided by the diabetes type and the individual — so they can be caught and managed alongside the diabetes rather than in isolation.",
      sources: [
        {
          label: "4. Comprehensive Medical Evaluation and Assessment of Comorbidities (associated conditions and screening)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S59/157568/4-Comprehensive-Medical-Evaluation-and-Assessment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Preventing Diabetes Problems (gum disease, dementia, and more)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["comorbidity", "autoimmune", "thyroid", "celiac", "type-1", "multi-condition"],
      evidence: "established",
    },
    {
      id: "polypharmacy-and-compounding-care",
      title: "Polypharmacy and coordinating multiple conditions",
      summary:
        "Several conditions mean several medications, raising interaction, side-effect, and adherence burdens; coordinated review — including by a pharmacist — keeps the combined plan coherent and safe.",
      detail:
        "Because diabetes so often comes with heart disease, kidney disease, high blood pressure, abnormal lipids, depression, and other conditions, many people end up taking numerous medications — a situation called polypharmacy. Each drug may be individually appropriate, but together they raise the risk of interactions (see the Key Drug Interactions section), cumulative side effects, and a self-care burden that can hurt adherence. Several conditions can also pull in different directions, where the ideal treatment for one must be balanced against its effect on another, and goals may need individualizing — for example, relaxing glucose targets in frail older adults to avoid dangerous lows. Managing this well relies on coordination: a care team that sees the whole picture, periodic medication review and reconciliation (a role pharmacists are especially suited to), deprescribing what is no longer needed, and simplifying regimens where possible. The combined plan — not any single condition's 'ideal' in isolation — is what good multi-condition care optimizes, always with professional oversight.",
      sources: [
        {
          label: "4. Comprehensive Medical Evaluation and Assessment of Comorbidities (medication review, older adults)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S59/157568/4-Comprehensive-Medical-Evaluation-and-Assessment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "9. Pharmacologic Approaches to Glycemic Treatment (simplifying regimens)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S181/157569/9-Pharmacologic-Approaches-to-Glycemic-Treatment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["comorbidity", "polypharmacy", "coordination", "pharmacist", "multi-condition"],
      caution:
        "When several conditions and medicines stack up, ask for a medication review with the care team or pharmacist — coordinating the whole plan is safer than optimizing one condition alone.",
    },
  ],
});
