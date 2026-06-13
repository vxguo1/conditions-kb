import { defineSection } from "../types.js";

/**
 * TREATMENT — medications & insulin. Insulin types and regimens, and the major
 * non-insulin drug classes (metformin, GLP-1 receptor agonists, SGLT2
 * inhibitors, sulfonylureas, DPP-4 inhibitors, and older agents).
 *
 * Educational overview only. This is NOT dosing guidance; medication choices and
 * doses belong with the prescriber.
 */
export const medications = defineSection({
  id: "medications",
  title: "Medications & Insulin",
  description:
    "How diabetes is treated with medicine: insulin types and regimens, and the main non-insulin classes — metformin, GLP-1 receptor agonists, SGLT2 inhibitors, sulfonylureas, DPP-4 inhibitors, and older drugs.",
  entries: [
    {
      id: "insulin-types",
      title: "Types of insulin",
      summary:
        "Insulins differ by how fast they act and how long they last — rapid, short, intermediate, and long/ultra-long acting — and are combined to mimic the body's natural pattern.",
      detail:
        "Insulin is essential in type 1 diabetes and used in type 2 when other treatments aren't enough. Insulins are grouped by their action profile. Rapid-acting (e.g. lispro, aspart, glulisine) start working in minutes and are taken at meals to cover food; short-acting 'regular' insulin works a little slower. Intermediate-acting (NPH) lasts roughly half a day. Long-acting and ultra-long-acting 'basal' insulins (e.g. glargine, detemir, degludec) give a steady background level for up to a day or more. Many people use a 'basal-bolus' approach combining a long-acting insulin with mealtime rapid-acting insulin; premixed insulins combine two types in one injection. Insulin is delivered by syringe, pen, or pump. The choice and timing are individualized — and because insulin lowers blood sugar, balancing it against food and activity is what prevents both highs and dangerous lows.",
      sources: [
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Type 1 diabetes — insulin (NHS)",
          url: "https://www.nhs.uk/conditions/type-1-diabetes/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["insulin", "treatment", "type-1"],
      caution:
        "Educational overview only — insulin types, doses, and timing are individualized by the prescriber. Never change insulin on your own, and never stop insulin in type 1.",
    },
    {
      id: "insulin-regimens",
      title: "Insulin regimens and dosing concepts",
      summary:
        "Common approaches include basal-bolus (background plus mealtime insulin) and pump therapy; dosing aims to match insulin to food, activity, and glucose patterns.",
      detail:
        "An insulin regimen is the plan for how and when insulin is taken. The most flexible is basal-bolus (multiple daily injections): a once- or twice-daily long-acting basal insulin for background needs, plus rapid-acting bolus insulin at each meal, often calculated from carbohydrate intake and current glucose using an insulin-to-carb ratio and correction factor. Insulin pumps deliver rapid-acting insulin continuously as an adjustable basal rate with mealtime boluses. Simpler regimens (e.g. premixed insulin twice daily) trade flexibility for fewer injections and may suit some people with type 2. Good regimens are built around the person's routine, glucose data, and goals, and are adjusted over time. The core skill — learning how food, activity, illness, and stress move glucose — is taught through diabetes education and supported by the care team.",
      sources: [
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Type 1 diabetes in adults: management (NG17)",
          url: "https://www.nice.org.uk/guidance/ng17",
          publisher: "NICE (UK)",
        },
      ],
      tags: ["insulin", "regimens", "dosing"],
      caution:
        "Dosing concepts are educational. Insulin-to-carb ratios, correction factors, and pump settings are set and changed only with the care team.",
    },
    {
      id: "metformin",
      title: "Metformin",
      summary:
        "Metformin is the usual first-line pill for type 2 diabetes: it lowers glucose mainly by reducing the liver's glucose output and rarely causes lows on its own.",
      detail:
        "Metformin (a biguanide) is the most widely used and usually first-choice oral medication for type 2 diabetes. It works chiefly by reducing the amount of glucose the liver releases and improving the body's sensitivity to insulin. It does not stimulate insulin release, so by itself it carries a low risk of hypoglycemia, and it is weight-neutral or modestly weight-reducing. The most common side effects are gastrointestinal (nausea, diarrhea), often eased by taking it with food, starting low, or using an extended-release form. Metformin is generally avoided or dose-adjusted in significant kidney impairment and is paused around certain procedures or serious illness. Decades of use give it a strong safety and cost profile, and it is often continued alongside newer agents.",
      sources: [
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (metformin)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Type 2 diabetes in adults: management (NG28)",
          url: "https://www.nice.org.uk/guidance/ng28",
          publisher: "NICE (UK)",
        },
      ],
      tags: ["metformin", "type-2", "oral", "first-line"],
    },
    {
      id: "glp1-receptor-agonists",
      title: "GLP-1 receptor agonists (incl. semaglutide, tirzepatide)",
      summary:
        "GLP-1 receptor agonists lower glucose, curb appetite, and cause weight loss; some also reduce cardiovascular and kidney risk. Tirzepatide adds a second hormone (GIP) for even greater effect.",
      detail:
        "GLP-1 receptor agonists mimic the gut hormone GLP-1: they boost insulin release when glucose is high, suppress glucagon, slow stomach emptying, and reduce appetite — lowering blood sugar with little hypoglycemia risk and producing meaningful weight loss. Examples include semaglutide, dulaglutide, and liraglutide, given by injection (semaglutide also in a tablet form). Several have proven cardiovascular benefit, and some reduce progression of kidney disease, so they are favored in people with, or at high risk of, heart or kidney disease. Tirzepatide is a related 'dual agonist' that activates both GIP and GLP-1 receptors; in head-to-head trials it produced greater A1c and weight reduction than semaglutide. Common side effects are gastrointestinal (nausea, vomiting, diarrhea), usually dose-related and easing over time. These drugs are mainly for type 2 diabetes (and obesity), not a replacement for insulin in type 1.",
      sources: [
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (GLP-1)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Tirzepatide versus Semaglutide Once Weekly in Type 2 Diabetes (SURPASS-2)",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519",
          publisher: "New England Journal of Medicine",
          year: 2021,
        },
      ],
      tags: ["glp-1", "semaglutide", "tirzepatide", "type-2", "weight"],
      evidence: "established",
    },
    {
      id: "sglt2-inhibitors",
      title: "SGLT2 inhibitors",
      summary:
        "SGLT2 inhibitors make the kidneys excrete excess glucose in urine; beyond lowering blood sugar they protect the heart and kidneys, but carry specific risks like genital infections and rare DKA.",
      detail:
        "SGLT2 inhibitors (e.g. empagliflozin, dapagliflozin, canagliflozin) block a kidney transporter that reabsorbs glucose, so excess glucose is passed out in the urine. They lower glucose with low hypoglycemia risk and cause modest weight and blood-pressure reduction. Major trials show they reduce hospitalization for heart failure and slow the progression of chronic kidney disease — benefits so significant that some are now used for heart failure and kidney disease even in people without diabetes. Risks to know about include genital yeast and urinary infections, dehydration, and a rare but serious form of diabetic ketoacidosis that can occur with near-normal glucose ('euglycemic DKA'), which is why they are typically paused during serious illness, fasting, or around surgery. They are mainly used in type 2 diabetes.",
      sources: [
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (SGLT2)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Type 2 diabetes in adults: management (NG28)",
          url: "https://www.nice.org.uk/guidance/ng28",
          publisher: "NICE (UK)",
        },
      ],
      tags: ["sglt2", "type-2", "heart-failure", "kidney"],
      evidence: "established",
      caution:
        "SGLT2 inhibitors can cause ketoacidosis even with only mildly raised glucose; sudden illness, vomiting, or ketones while taking one warrants urgent medical advice.",
    },
    {
      id: "sulfonylureas-meglitinides",
      title: "Sulfonylureas and meglitinides",
      summary:
        "These older pills push the pancreas to release more insulin; they are effective and inexpensive but can cause low blood sugar and modest weight gain.",
      detail:
        "Sulfonylureas (e.g. glipizide, gliclazide, glimepiride) and the shorter-acting meglitinides (e.g. repaglinide) lower glucose by stimulating the beta cells to secrete more insulin regardless of the current glucose level. Because they raise insulin directly, they are among the oral agents most likely to cause hypoglycemia — a particular concern in older adults, those with irregular meals, or kidney impairment — and they tend to cause slight weight gain. They remain useful where cost or access matters and work quickly, but newer classes (GLP-1 agonists, SGLT2 inhibitors) are often preferred when heart/kidney protection or weight loss is a priority. Notably, certain monogenic (MODY/neonatal) diabetes subtypes respond especially well to sulfonylureas, sometimes allowing people to stop insulin.",
      sources: [
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (sulfonylureas)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Type 2 diabetes in adults: management (NG28)",
          url: "https://www.nice.org.uk/guidance/ng28",
          publisher: "NICE (UK)",
        },
      ],
      tags: ["sulfonylureas", "meglitinides", "type-2", "oral"],
      caution:
        "Sulfonylureas and meglitinides can cause hypoglycemia — recognizing and treating lows matters, and dose changes belong with the prescriber.",
    },
    {
      id: "dpp4-tzd-older-agents",
      title: "DPP-4 inhibitors, thiazolidinediones, and other agents",
      summary:
        "Other type 2 options include DPP-4 inhibitors (mild, weight-neutral, low-hypo risk), pioglitazone (improves insulin sensitivity), and older drugs like acarbose.",
      detail:
        "Several additional classes round out type 2 treatment. DPP-4 inhibitors (e.g. sitagliptin, linagliptin) raise the body's own incretin hormones modestly; they are weight-neutral, well tolerated, and carry low hypoglycemia risk, but their glucose-lowering and outcome benefits are smaller than GLP-1 agonists or SGLT2 inhibitors (and they aren't combined with GLP-1 agonists). Thiazolidinediones (pioglitazone) improve insulin sensitivity and durably lower glucose but can cause fluid retention, weight gain, and increased fracture risk, limiting use. Alpha-glucosidase inhibitors (acarbose) slow carbohydrate absorption in the gut, blunting post-meal spikes, at the cost of flatulence. Amylin analogs (pramlintide) are an injectable mealtime add-on used by some people with insulin-treated diabetes. The 'right' combination is chosen for each person based on glucose targets, weight, heart/kidney status, hypoglycemia risk, side effects, and cost.",
      sources: [
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (other classes)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Type 2 diabetes in adults: management (NG28)",
          url: "https://www.nice.org.uk/guidance/ng28",
          publisher: "NICE (UK)",
        },
      ],
      tags: ["dpp-4", "thiazolidinedione", "acarbose", "type-2"],
    },
  ],
});
