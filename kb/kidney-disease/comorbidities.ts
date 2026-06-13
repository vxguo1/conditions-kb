import { defineSection } from "../types.js";

/**
 * Comorbidities & co-occurring conditions — what travels with CKD and the
 * COMPOUNDING considerations. The dominant story is the cardiovascular–kidney–
 * metabolic cluster (diabetes + hypertension + heart disease), plus gout,
 * mental health, and the polypharmacy that results. This is the grounding for
 * multi-condition reasoning.
 *
 * Educational only. Coordinating overlapping (sometimes conflicting) management
 * across conditions is the job of the care team, including a pharmacist for the
 * medication picture.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with CKD and why it compounds — the cardiovascular–kidney–metabolic cluster (diabetes, high blood pressure, heart disease), gout, mental health conditions, and the resulting polypharmacy. The grounding for multi-condition reasoning.",
  entries: [
    {
      id: "comorbidities-overview-ckd",
      title: "CKD rarely travels alone",
      summary:
        "Most people with CKD have other chronic conditions — above all diabetes, high blood pressure, and heart disease — which both cause CKD and are worsened by it, so care must treat the whole person.",
      detail:
        "Chronic kidney disease seldom occurs in isolation. Its leading causes — diabetes and high blood pressure — are themselves chronic conditions that persist alongside the CKD they create, and CKD in turn worsens them and drives new problems, especially heart disease. The overlaps run in both directions and compound each other: the same processes that damage kidneys damage the heart and blood vessels, and failing kidneys raise blood pressure, disturb minerals, and add cardiovascular risk. This is why good CKD care looks well beyond the kidneys to blood pressure, blood sugar, the heart, lipids, weight, mental health, and more, and why coordination across the care team matters so much. The conditions also create compounding and sometimes conflicting management considerations — a treatment ideal for one condition must be weighed against its effect on another, and several conditions together mean many medicines. The entries here map the most common co-occurring conditions and how they interact, as grounding for thinking about more than one condition at once.",
      sources: [
        {
          label: "Chronic Kidney Disease (CKD) — risk factors and related conditions",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Chronic Kidney Disease, Diabetes, and Heart Disease",
          url: "https://www.cdc.gov/kidney-disease/risk-factors/link-between-diabetes-and-heart-disease.html",
          publisher: "CDC",
        },
      ],
      tags: ["comorbidity", "overview", "multi-condition"],
    },
    {
      id: "cardiovascular-kidney-metabolic-cluster",
      title: "The cardiovascular–kidney–metabolic cluster",
      summary:
        "Diabetes, high blood pressure, heart disease, and CKD form a tightly linked cluster that shares drivers and worsens one another — but several modern treatments protect kidney and heart together.",
      detail:
        "CKD is at the center of what is increasingly described as cardiovascular–kidney–metabolic (CKM) syndrome: the tight clustering of excess weight and metabolic problems, type 2 diabetes, high blood pressure, heart disease, and kidney disease. These conditions share underlying drivers (insulin resistance, high blood pressure, abnormal lipids, inflammation, and blood-vessel damage) and each accelerates the others — diabetes and hypertension damage the kidneys and heart, CKD raises blood pressure and cardiovascular risk, and heart failure and kidney disease worsen each other (the 'cardiorenal' link). This compounding is why management is integrated rather than siloed, and it shapes treatment in a helpful way: SGLT2 inhibitors, finerenone, GLP-1 receptor agonists, and ACE inhibitors/ARBs are favored precisely because they protect the kidney and the heart at once. The flip side is complexity — overlapping risks, many medications, and the need to monitor kidney function, potassium, and volume — which makes this cluster the prime example of why multi-condition CKD care must be coordinated as a whole.",
      sources: [
        {
          label: "Cardiovascular-Kidney-Metabolic (CKM) Health",
          url: "https://www.heart.org/en/health-topics/cardiovascular-kidney-metabolic-syndrome",
          publisher: "American Heart Association",
        },
        {
          label: "Diabetic Kidney Disease (diabetes, kidney, and heart links)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["comorbidity", "cardiovascular", "diabetes", "hypertension", "cluster", "multi-condition"],
      evidence: "established",
    },
    {
      id: "diabetes-and-ckd",
      title: "Diabetes and CKD together",
      summary:
        "Diabetes is the leading cause of CKD, and the two together demand coordinated control of blood sugar, blood pressure, and kidney-protective medicines, with special attention to drugs cleared by the kidney.",
      detail:
        "Diabetes and CKD are deeply entwined: diabetes is the single biggest cause of kidney disease, and having both substantially raises the risk of kidney failure and cardiovascular events. Managing them together is more than the sum of the parts. Glucose control helps protect the kidneys, but as kidney function declines some diabetes medicines need dose adjustment or avoidance (for example metformin), and the risk of low blood sugar can rise because the kidneys clear insulin and some drugs more slowly — so targets are sometimes relaxed to avoid dangerous lows. At the same time, several diabetes medicines (SGLT2 inhibitors, GLP-1 receptor agonists) and the diabetes-CKD drug finerenone are chosen specifically for their kidney and heart protection. Blood-pressure control (often with an ACE inhibitor or ARB) and yearly urine ACR testing are core to diabetic kidney care. The result is a regimen that must satisfy diabetes, kidney, and heart goals simultaneously — a balancing act best handled by a coordinated care team rather than treating each condition in isolation.",
      sources: [
        {
          label: "Diabetic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Diabetes and Kidney Disease (Stages 1–4)",
          url: "https://www.kidney.org/kidney-topics/diabetes-and-kidney-disease-stages-1-4",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["comorbidity", "diabetes", "multi-condition", "renal-dosing"],
      evidence: "established",
    },
    {
      id: "hypertension-and-heart-disease",
      title: "High blood pressure and heart disease",
      summary:
        "High blood pressure both causes and results from CKD, and heart disease is the leading cause of death in CKD; managing them is inseparable from managing the kidneys.",
      detail:
        "High blood pressure and heart disease are the comorbidities most tightly bound to CKD. Hypertension has a two-way relationship with the kidneys — it damages them, and damaged kidneys raise blood pressure — so controlling it (often with an ACE inhibitor or ARB) is simultaneously kidney-protective and heart-protective. Heart disease, meanwhile, is the most common cause of death in people with CKD, fueled by shared risk factors plus CKD-specific harms like fluid overload, anemia, and vascular calcification from mineral-bone disorder. Heart failure and CKD are especially interdependent (the 'cardiorenal syndrome'), where treating one carefully affects the other — for instance, diuretics to relieve fluid must be balanced against kidney function and electrolytes. Because of all this, CKD care devotes major attention to blood pressure, cholesterol (commonly a statin), and cardiovascular risk, and several CKD medicines were adopted precisely for their cardiovascular benefit. Coordinating kidney and heart care — rather than optimizing one at the other's expense — is central, and it is the care team's job.",
      sources: [
        {
          label: "Heart Disease & Chronic Kidney Disease (CKD)",
          url: "https://www.kidney.org/kidney-topics/heart-and-kidney-connection",
          publisher: "National Kidney Foundation",
        },
        {
          label: "High Blood Pressure & Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/high-blood-pressure",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["comorbidity", "hypertension", "heart-disease", "cardiorenal", "multi-condition"],
      evidence: "established",
    },
    {
      id: "gout-and-other-co-occurring",
      title: "Gout, mental health, and other co-occurring conditions",
      summary:
        "CKD also commonly travels with gout (the kidneys handle uric acid), depression and anxiety, sleep problems, and anemia and bone disease — several of which both affect and are affected by kidney function.",
      detail:
        "Beyond the central cardiometabolic cluster, several other conditions accompany CKD. Gout is notably more common because the kidneys normally clear uric acid, so reduced function lets it accumulate; gout management is complicated by CKD because some gout medicines need dose adjustment and NSAIDs (often used for flares) can harm the kidneys, requiring careful choices. Mental health conditions — depression, anxiety, and the stress of a progressive illness — are more frequent in CKD and can undermine self-care, so they are an important comorbidity rather than a side issue. Sleep problems (including sleep apnea, itself linked to high blood pressure and heart risk) are common too. CKD's own complications — anemia and mineral-bone disorder — function as co-occurring conditions that need their own monitoring and treatment. Many people with CKD therefore live with several interacting conditions at once, which is the reality that multi-condition care must address: screening for them, and managing them in a coordinated way that respects how each affects the kidneys and the others.",
      sources: [
        {
          label: "Quick Facts: Gout and Chronic Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/quick-facts-gout-and-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Managing Your Emotions While Living with Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/managing-your-emotions-while-living-kidney-disease",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["comorbidity", "gout", "mental-health", "sleep-apnea", "multi-condition"],
    },
    {
      id: "polypharmacy-and-coordination-ckd",
      title: "Polypharmacy and coordinating multiple conditions",
      summary:
        "Several conditions mean several medicines — many needing renal dosing — which raises interaction and side-effect risks; coordinated review, including by a pharmacist, keeps the combined plan safe.",
      detail:
        "Because CKD so often comes with diabetes, high blood pressure, heart disease, gout, anemia, bone-mineral disorder, and more, many people with CKD end up taking numerous medicines — polypharmacy. Each may be individually appropriate, but together they raise the risk of interactions and cumulative side effects, and the kidney dimension adds a twist: many drugs need dose adjustment for kidney function, and some must be avoided, so the combined regimen must be both internally compatible and correctly dosed for the person's eGFR. Conditions can also pull in different directions — the ideal treatment for one may stress the kidneys or raise potassium — so goals are individualized, sometimes relaxing targets (for example to avoid hypoglycemia in frail older adults). Managing this well relies on coordination: a care team that sees the whole picture, periodic medication review and reconciliation (a role pharmacists are especially suited to), renal dose checks, deprescribing what is no longer needed, and simplifying where possible. The combined plan — not any single condition's ideal in isolation — is what good multi-condition CKD care optimizes, always with professional oversight.",
      sources: [
        {
          label: "Safe Medicine Use with Chronic Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/safe-medicine-use-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Managing Chronic Kidney Disease (working with your care team)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["comorbidity", "polypharmacy", "coordination", "pharmacist", "renal-dosing", "multi-condition"],
      caution:
        "When several conditions and medicines stack up in CKD, ask for a medication review with the care team or pharmacist — coordinating the whole plan, with renal dosing, is safer than optimizing one condition alone.",
    },
  ],
});
