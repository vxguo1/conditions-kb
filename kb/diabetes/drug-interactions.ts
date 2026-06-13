import { defineSection } from "../types.js";

/**
 * Key drug interactions — educational coverage of the interactions that matter
 * most for common diabetes medications: things that compound hypoglycemia
 * (alcohol, beta-blockers, some antibiotics), volume/renal issues (SGLT2 +
 * diuretics, metformin + contrast/kidney injury), and drugs that raise glucose.
 *
 * This is EDUCATIONAL background to help people ask good questions. It is NOT an
 * authoritative interaction check and never a definitive "safe/unsafe" ruling —
 * a pharmacist or clinician should review every actual medication and supplement
 * combination for an individual.
 */
export const drugInteractions = defineSection({
  id: "drug-interactions",
  title: "Key Drug Interactions",
  description:
    "Educational overview of interactions that matter for common diabetes medicines — compounded hypoglycemia (alcohol, beta-blockers, certain antibiotics), SGLT2 + diuretic and metformin + contrast/renal cautions, and drugs that raise glucose. Always have a pharmacist or clinician check actual combinations.",
  entries: [
    {
      id: "interactions-how-to-think",
      title: "How to think about diabetes drug interactions",
      summary:
        "Interactions are common with diabetes medicines, but whether one matters depends on the person; the safe move is to keep one full med-and-supplement list and have a pharmacist or clinician check it — not to self-judge 'safe' or 'unsafe.'",
      detail:
        "People with diabetes often take several medicines, and many interact with diabetes drugs — some raising the risk of low blood sugar, some reducing glucose control, some affecting the kidneys or hydration. The entries here explain the best-known interactions so a person can recognize them and ask about them, but they are not a substitute for an authoritative check. Whether a given combination is a problem depends on the individual's kidney function, other conditions, doses, and timing — which is exactly the judgment a pharmacist or prescriber is trained to make. Practical habits that genuinely reduce risk: keep one up-to-date list of every prescription, over-the-counter product, vitamin, and herbal supplement; show it at every appointment and to the pharmacist with each new prescription; use one pharmacy where possible so interactions are screened automatically; and ask specifically 'does this interact with my diabetes medicines?' before starting anything new. Never treat any entry here as a definitive ruling.",
      sources: [
        {
          label: "9. Pharmacologic Approaches to Glycemic Treatment (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S181/157569/9-Pharmacologic-Approaches-to-Glycemic-Treatment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Diabetes and Dietary Supplements (interactions caution)",
          url: "https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["drug-interactions", "overview", "safety", "pharmacist"],
      caution:
        "Educational only — not an interaction check. Have a pharmacist or clinician review your actual medications and supplements; this is never a definitive safe/unsafe ruling.",
    },
    {
      id: "hypoglycemia-potentiating-drugs",
      title: "Things that compound hypoglycemia",
      summary:
        "With insulin or sulfonylureas, alcohol, other glucose-lowering agents, and certain antibiotics can deepen lows; combining glucose-lowering drugs multiplies the risk.",
      detail:
        "The drugs most likely to cause hypoglycemia are insulin and the insulin-stimulating sulfonylureas/meglitinides, and several things can compound their effect. Alcohol is a major one: it suppresses the liver's release of glucose and can cause delayed lows hours later, including overnight, with warning signs easily mistaken for intoxication. Combining glucose-lowering agents (for example adding insulin to a sulfonylurea, or stacking multiple agents) raises hypoglycemia risk and often calls for dose review. Some medications potentiate sulfonylureas or otherwise lower glucose — examples discussed in the literature include certain antibiotics (such as fluoroquinolones and sulfamethoxazole-trimethoprim) and some others — which is why a new prescription is a good moment for an interaction check. Reduced food intake, kidney impairment (which prolongs some drugs), and increased activity add to the effect. The takeaway is awareness and monitoring, with any dose adjustments made by the prescriber.",
      sources: [
        {
          label: "6. Glycemic Goals and Hypoglycemia (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S128/157561/6-Glycemic-Goals-and-Hypoglycemia-Standards-of",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Low blood sugar (hypoglycaemia) — alcohol and causes",
          url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "hypoglycemia", "alcohol", "antibiotics", "safety"],
      evidence: "established",
      caution:
        "Do not adjust insulin or sulfonylurea doses yourself for alcohol or a new medicine — ask the prescriber or pharmacist. Lows from alcohol can be delayed and severe.",
    },
    {
      id: "beta-blockers-masking-hypoglycemia",
      title: "Beta-blockers can mask hypoglycemia warning signs",
      summary:
        "Beta-blockers (often prescribed for heart disease or blood pressure) can blunt the adrenaline-driven warning symptoms of a low — like shakiness and a racing heart — so a low may be felt less clearly.",
      detail:
        "Many of the early warning symptoms of hypoglycemia — trembling, palpitations, anxiety — are produced by the surge of adrenaline the body releases as glucose falls. Beta-blockers, commonly used for high blood pressure, angina, heart failure, and after a heart attack, blunt these adrenergic symptoms, so a person on a beta-blocker may notice a low later or less clearly (sweating, which is driven differently, often still occurs). Non-selective beta-blockers can also slightly impair the body's glucose-recovery response. This does not mean beta-blockers are 'unsafe' with diabetes — they are important, life-saving drugs for many people with the heart disease that so often accompanies diabetes — but it is a reason for extra vigilance: relying more on glucose monitoring (especially CGM) rather than symptoms, and being aware that hypoglycemia unawareness may be more likely. The benefit-versus-risk balance and any monitoring plan are decisions for the care team.",
      sources: [
        {
          label: "6. Glycemic Goals and Hypoglycemia (hypoglycemia symptoms and awareness)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S128/157561/6-Glycemic-Goals-and-Hypoglycemia-Standards-of",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "10. Cardiovascular Disease and Risk Management (beta-blocker use in diabetes)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S207/157549/10-Cardiovascular-Disease-and-Risk-Management",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["drug-interactions", "beta-blockers", "hypoglycemia", "cardiovascular", "safety"],
      evidence: "established",
      caution:
        "Don't stop a beta-blocker on your own — they treat serious heart conditions. If you take one, discuss hypoglycemia monitoring with your care team.",
    },
    {
      id: "metformin-renal-contrast",
      title: "Metformin: kidney function, dehydration, and contrast dye",
      summary:
        "Metformin is cleared by the kidneys, so it is paused around imaging with contrast dye, serious illness, dehydration, or surgery to lower the rare risk of lactic acidosis.",
      detail:
        "Metformin is removed from the body by the kidneys, so situations that suddenly reduce kidney function can let it accumulate and, rarely, contribute to a serious condition called lactic acidosis. For that reason metformin is commonly paused around events that stress the kidneys: imaging procedures that use iodinated contrast dye (such as some CT scans and angiograms), major surgery, and acute illnesses with dehydration, vomiting, or diarrhea — and it is generally avoided or dose-limited when kidney function is significantly reduced. It is usually restarted once kidney function is confirmed stable. People taking metformin are often advised to hold it during 'sick days' with significant dehydration and to mention they take it before any scan or procedure. These are standard precautions, not a sign metformin is dangerous — it has an excellent long-term safety record — but the timing of holding and restarting should be confirmed with the clinician, pharmacist, or the team doing the procedure.",
      sources: [
        {
          label: "Metformin — cautions, kidney function and procedures",
          url: "https://www.nhs.uk/medicines/metformin/",
          publisher: "NHS (UK)",
        },
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (metformin and kidneys)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["drug-interactions", "metformin", "kidney", "contrast", "sick-day", "safety"],
      evidence: "established",
      caution:
        "Tell the team before any scan with contrast or surgery that you take metformin, and confirm when to stop and restart it — don't guess.",
    },
    {
      id: "sglt2-diuretics-volume-dka",
      title: "SGLT2 inhibitors: diuretics, dehydration, and DKA risk",
      summary:
        "SGLT2 inhibitors increase urination, so combined with diuretics or illness they can cause dehydration and low blood pressure; they are also paused around surgery and illness because of a rare ketoacidosis risk.",
      detail:
        "SGLT2 inhibitors work by making the kidneys excrete glucose in the urine, which also increases water loss. Combined with diuretics ('water pills'), or during illness with poor fluid intake, this can lead to dehydration, low blood pressure, dizziness on standing, and kidney stress, so clinicians sometimes review diuretic doses when starting them and advise attention to hydration. Separately, SGLT2 inhibitors carry a rare but serious risk of diabetic ketoacidosis that can occur even with near-normal glucose ('euglycemic DKA'), particularly during fasting, dehydration, acute illness, very low-carbohydrate intake, surgery, or sharp insulin reductions. For that reason they are typically paused before planned surgery and during significant acute illness, and ketones should be checked if a person feels unwell even when glucose is not high. These cautions make the medicine safer to use, not unsafe — but the specifics of when to hold and restart, and how they fit with diuretics, belong with the prescriber and pharmacist.",
      sources: [
        {
          label: "9. Pharmacologic Approaches to Glycemic Treatment (SGLT2 inhibitor cautions)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S181/157569/9-Pharmacologic-Approaches-to-Glycemic-Treatment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Diabetic ketoacidosis — causes (including medication-related)",
          url: "https://www.mayoclinic.org/diseases-conditions/diabetic-ketoacidosis/symptoms-causes/syc-20371551",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["drug-interactions", "sglt2", "diuretics", "dka", "dehydration", "safety"],
      evidence: "established",
      caution:
        "Feeling unwell on an SGLT2 inhibitor — even with normal glucose — warrants checking ketones and seeking advice; confirm with the team when to pause it for illness or surgery.",
    },
    {
      id: "drugs-that-raise-glucose",
      title: "Medications that can raise blood glucose",
      summary:
        "Some commonly used drugs — especially steroids, and also certain antipsychotics, some diuretics, and others — can raise blood glucose and may temporarily need closer monitoring or treatment changes.",
      detail:
        "Several widely used medications can push blood glucose up, sometimes substantially. Glucocorticoids (steroids such as prednisone, whether as tablets, injections, or sometimes inhaled/topical at high doses) are the classic example and can cause marked, often predictable rises, especially later in the day. Other agents associated with higher glucose include some antipsychotics (notably olanzapine and clozapine), thiazide diuretics (usually modestly), certain immunosuppressants, some HIV medicines, and others. This does not mean these drugs are off-limits in diabetes — they may be essential — but starting them is a reason to monitor glucose more closely and, sometimes, to temporarily intensify diabetes treatment, with the changes planned and then reversed by the care team as the other medicine is adjusted or stopped. Knowing that a new drug can raise glucose helps a person watch for it and report unexpected highs rather than assuming their diabetes has simply worsened.",
      sources: [
        {
          label: "4. Comprehensive Medical Evaluation and Assessment of Comorbidities (medications affecting glucose)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S59/157568/4-Comprehensive-Medical-Evaluation-and-Assessment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Hyperglycemia in diabetes — contributing factors",
          url: "https://www.mayoclinic.org/diseases-conditions/hyperglycemia/symptoms-causes/syc-20373631",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["drug-interactions", "steroids", "hyperglycemia", "monitoring", "safety"],
      evidence: "established",
    },
    {
      id: "otc-and-supplement-interactions",
      title: "Over-the-counter products and supplements",
      summary:
        "OTC remedies and supplements can interact too — some 'blood sugar' supplements add to glucose-lowering (hypoglycemia risk), NSAIDs can stress the kidneys alongside diabetes drugs, and some cold remedies affect glucose.",
      detail:
        "Interactions are not limited to prescriptions. Dietary supplements marketed for blood sugar (such as berberine or alpha-lipoic acid) can add to the glucose-lowering effect of diabetes medicines and raise the risk of hypoglycemia, and some have their own drug interactions — yet they are often taken without telling the care team. Common over-the-counter medicines matter too: nonsteroidal anti-inflammatory drugs (NSAIDs like ibuprofen) can stress the kidneys, a particular concern alongside SGLT2 inhibitors, metformin, and blood-pressure drugs (ACE inhibitors/ARBs) used in diabetes. Some cold and flu products contain sugars or decongestants that can nudge glucose up, and certain remedies interact with other medicines a person takes. Because supplements and OTC products are easy to start without a prescription screen, they are exactly where interactions get missed — so the same rule applies: list them, and run anything new past a pharmacist who can check it against the full regimen.",
      sources: [
        {
          label: "Diabetes and Dietary Supplements (interactions and hypoglycemia risk)",
          url: "https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements",
          publisher: "NIH / NCCIH",
        },
        {
          label: "4. Comprehensive Medical Evaluation and Assessment of Comorbidities (medication reconciliation)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S59/157568/4-Comprehensive-Medical-Evaluation-and-Assessment",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["drug-interactions", "otc", "supplements", "nsaids", "kidney", "safety"],
      evidence: "established",
      caution:
        "'Natural' supplements and everyday OTC medicines can still interact — check with a pharmacist before adding them to diabetes treatment.",
    },
  ],
});
