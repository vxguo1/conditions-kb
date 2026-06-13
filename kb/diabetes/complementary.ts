import { defineSection } from "../types.js";

/**
 * Complementary & integrative — dietary supplements and integrative approaches
 * people ask about for diabetes, graded by evidence and flagged for safety
 * (drug interactions, hypoglycemia risk, and the cardinal rule never to replace
 * proven treatment). Anchored to NCCIH's evidence reviews.
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded look at supplements commonly marketed for diabetes (cinnamon, berberine, chromium, alpha-lipoic acid, magnesium, and others), with interaction and hypoglycemia safety flags. Educational only.",
  entries: [
    {
      id: "complementary-overview",
      title: "How to think about supplements for diabetes",
      summary:
        "No dietary supplement is proven to treat diabetes; some have weak evidence at best, and none should replace prescribed treatment — always tell the care team what you take.",
      detail:
        "Many supplements are marketed for blood sugar, but the evidence behind them is generally weak, inconsistent, or absent, and none is a substitute for proven diabetes treatment. The U.S. National Center for Complementary and Integrative Health (NCCIH) emphasizes a few principles: do not replace medical treatment with an unproven product; be aware that 'natural' does not mean safe or free of side effects; supplements can interact with medications and affect blood glucose, blood pressure, or kidney/liver function; product quality and labeling vary; and there are special cautions in pregnancy and before surgery. The single most important step is to tell every member of the care team about any supplement, because some can add to the glucose-lowering effect of diabetes medicines and cause hypoglycemia, while others can interfere with treatment. Supplements may be considered only as a possible adjunct, never a replacement, and with medical input.",
      sources: [
        {
          label: "Diabetes and Dietary Supplements: What You Need To Know",
          url: "https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "supplements", "safety", "overview"],
      evidence: "no-convincing-evidence",
      caution:
        "Supplements are not a substitute for prescribed diabetes treatment. Tell your care team about anything you take — some can cause hypoglycemia or interact with medicines.",
    },
    {
      id: "cinnamon",
      title: "Cinnamon",
      summary:
        "Despite popular claims, research on cinnamon for blood sugar is inconsistent and does not show a reliable benefit; large amounts of cassia cinnamon may also harm the liver.",
      detail:
        "Cinnamon is one of the most popular supplements promoted for blood sugar, but the evidence does not support a dependable effect: clinical studies have been small and mixed, and reviews conclude cinnamon has not been shown to reliably improve glucose control or A1c. There is also a safety consideration — cassia cinnamon (the common, cheaper type) contains coumarin, which in large or prolonged doses may be harmful to the liver, particularly for people with liver problems or on certain medications. Cinnamon as a spice in food is fine for flavor, but it should not be relied on as a treatment, and high-dose supplements are not recommended as a way to manage diabetes. As always, anyone taking it should mention it to their care team.",
      sources: [
        {
          label: "Diabetes and Dietary Supplements (cinnamon)",
          url: "https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["cinnamon", "supplements", "complementary"],
      evidence: "no-convincing-evidence",
      caution:
        "High-dose cassia cinnamon supplements can stress the liver; cinnamon is not a proven diabetes treatment.",
    },
    {
      id: "berberine",
      title: "Berberine",
      summary:
        "Berberine is a plant compound with some studies suggesting a glucose-lowering effect, but evidence quality is limited and it has notable drug interactions and side effects.",
      detail:
        "Berberine, a compound found in plants such as goldenseal and barberry, has attracted attention because some small trials suggest it can lower blood glucose, possibly through effects on the same pathways as metformin. However, the evidence base is limited by small, lower-quality studies, and berberine is not an established or approved treatment. Importantly, it is not benign: it commonly causes gastrointestinal side effects, and it interacts with many medications by inhibiting drug-metabolizing enzymes (it can raise levels of various drugs), and may add to the glucose-lowering effect of diabetes medicines, increasing hypoglycemia risk. It should be avoided in pregnancy and breastfeeding. Because of these interactions and safety questions, berberine should only be considered, if at all, in consultation with the care team — not self-started as a replacement for prescribed treatment.",
      sources: [
        {
          label: "Diabetes and Dietary Supplements (herbal supplements / berberine)",
          url: "https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["berberine", "supplements", "complementary", "interactions"],
      evidence: "preliminary",
      caution:
        "Berberine has significant drug interactions and can add to glucose-lowering medicines (hypoglycemia risk); avoid in pregnancy. Discuss with the care team before use.",
    },
    {
      id: "chromium",
      title: "Chromium",
      summary:
        "Chromium supplements have been studied for blood sugar with inconsistent results; there is no strong evidence of benefit for people who are not chromium-deficient.",
      detail:
        "Chromium is a trace mineral involved in carbohydrate metabolism, and chromium picolinate is widely sold for blood sugar. Research results are inconsistent: some studies suggest small effects on glucose and others show none, and overall the evidence does not establish a meaningful benefit for managing diabetes, especially in people who are not deficient (deficiency is rare with a normal diet). High doses have been associated with side effects and, rarely, kidney problems. NCCIH's assessment is that the evidence is weak and chromium should not be relied upon to treat diabetes. As with other supplements, it should be discussed with the care team and never substituted for proven treatment.",
      sources: [
        {
          label: "Diabetes and Dietary Supplements (chromium)",
          url: "https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["chromium", "supplements", "complementary"],
      evidence: "mixed",
    },
    {
      id: "alpha-lipoic-acid",
      title: "Alpha-lipoic acid",
      summary:
        "Alpha-lipoic acid is studied mainly for diabetic neuropathy symptoms rather than blood sugar; evidence is limited and it can interact with diabetes medicines.",
      detail:
        "Alpha-lipoic acid (ALA) is an antioxidant that has been studied most for symptoms of diabetic peripheral neuropathy (such as pain, burning, and numbness), where some trials — particularly with intravenous forms — suggest possible symptom relief, though oral evidence is weaker and overall results are not conclusive. It is not an established treatment for diabetes itself or a reliable way to lower blood glucose. Safety points: ALA may lower blood glucose, so combined with diabetes medication it could contribute to hypoglycemia, and it may interact with thyroid medication and others. Because the evidence is limited and there are interaction considerations, ALA should only be used with medical input, as a possible adjunct for neuropathy symptoms rather than a glucose treatment, and never as a replacement for prescribed care.",
      sources: [
        {
          label: "Diabetes and Dietary Supplements (alpha-lipoic acid)",
          url: "https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["alpha-lipoic-acid", "neuropathy", "supplements", "complementary"],
      evidence: "mixed",
      caution:
        "Alpha-lipoic acid may lower blood glucose and interact with thyroid and other medicines — use only with care-team input.",
    },
    {
      id: "magnesium-and-other-supplements",
      title: "Magnesium, omega-3s, vitamin D, and others",
      summary:
        "Correcting a true magnesium deficiency matters, but routine supplements — magnesium, omega-3s, vitamin D — have not been shown to prevent or treat diabetes in well-nourished people.",
      detail:
        "Several other supplements are commonly discussed. Low magnesium is associated with poorer glucose control, and correcting a documented deficiency is reasonable, but routine magnesium supplementation has not been shown to treat diabetes in people who are not deficient. Omega-3 fatty acids (fish oil) benefit some cardiovascular risk markers but have not been shown to improve blood glucose control or prevent diabetes. Vitamin D supplementation, despite interest, has not been shown to prevent type 2 diabetes in people who are not deficient. Other remedies (bitter melon, fenugreek, ginseng, and many 'blood sugar support' blends) have only weak or preliminary evidence and variable, sometimes unsafe, product quality — some blends have even been found adulterated with hidden pharmaceuticals. The consistent message is to prioritize proven treatment and a healthy diet, address genuine deficiencies, and review any supplement with the care team for interactions and hypoglycemia risk.",
      sources: [
        {
          label: "Diabetes and Dietary Supplements (magnesium, omega-3s, vitamin D, others)",
          url: "https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["magnesium", "omega-3", "vitamin-d", "supplements", "complementary"],
      evidence: "no-convincing-evidence",
      caution:
        "Some 'blood sugar support' products have been found adulterated with hidden drugs. Prioritize proven treatment and review supplements with the care team.",
    },
  ],
});
