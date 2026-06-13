import { defineSection } from "../types.js";

/**
 * Complementary & integrative — supplements and integrative approaches people
 * ask about with kidney disease, graded by evidence and flagged for the
 * kidney-specific safety issues: many herbals can harm the kidneys or interact
 * with medicines, "high in minerals" products can deliver dangerous potassium
 * and phosphorus, and product contamination/mislabeling is a real risk.
 * Anchored to NCCIH and the National Kidney Foundation.
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded look at supplements and integrative approaches in kidney disease, with the kidney-specific safety flags — herbal toxicity and interactions, dangerous potassium/phosphorus loads, and contamination/mislabeling. Educational only.",
  entries: [
    {
      id: "complementary-overview-ckd",
      title: "How to think about supplements with kidney disease",
      summary:
        "No supplement is proven to treat CKD, and the kidneys make supplements riskier than usual — some are directly toxic, deliver dangerous minerals, or interact with medicines — so always tell the care team what you take.",
      detail:
        "Supplements deserve special caution in kidney disease for reasons that go beyond the usual 'natural doesn't mean safe.' No dietary supplement is proven to treat or reverse CKD, and several factors make them riskier when the kidneys are impaired: some herbal products are directly toxic to the kidneys; many 'mineral-rich,' 'electrolyte,' or 'superfood' products carry high potassium or phosphorus loads that can be dangerous in CKD; reduced kidney function can let some supplement ingredients accumulate; and supplements can interact with the blood-pressure, kidney, and other medicines people with CKD rely on. On top of this, supplement quality and labeling are loosely regulated, so products can contain more, less, or different ingredients than the label states, and some have been found contaminated or adulterated. The single most important step is to tell every member of the care team — and the pharmacist — about any supplement before and during use, so it can be checked. Supplements should never replace proven CKD treatment, and many are best avoided altogether.",
      sources: [
        {
          label: "Herbal Supplements and Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/herbal-supplements-and-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Using Dietary Supplements Wisely",
          url: "https://www.nccih.nih.gov/health/using-dietary-supplements-wisely",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "supplements", "safety", "overview"],
      evidence: "no-convincing-evidence",
      caution:
        "Supplements are not a substitute for proven CKD treatment, and several are hazardous with kidney disease. Tell your care team and pharmacist about anything you take before using it.",
    },
    {
      id: "herbal-supplements-kidney-harm",
      title: "Herbal supplements that can harm the kidneys",
      summary:
        "Some herbal products can directly damage the kidneys or worsen CKD, and 'cleanses' or kidney 'detox' products are not proven; people with CKD are often advised to avoid herbal supplements unless cleared by their team.",
      detail:
        "Certain herbal supplements can be directly harmful to the kidneys, which is why people with CKD are frequently advised to avoid herbal products unless their care team has confirmed a specific one is acceptable. History offers a stark warning: some herbal products (for example those containing aristolochic acid) have caused severe, irreversible kidney damage, and various other herbs can stress the kidneys, raise blood pressure, or interact with medicines. Popular 'kidney cleanse,' 'detox,' or 'kidney support' products are not proven to help and may contain ingredients that are unsafe in CKD. The risk is compounded because herbal products are loosely regulated and can be contaminated or mislabeled. Importantly, a supplement that is fine for someone with healthy kidneys can be dangerous for someone with CKD, both because impaired kidneys handle ingredients differently and because of mineral and interaction issues. The safest approach is to treat herbal supplements as something to clear with the kidney care team and pharmacist first — not to try based on marketing claims.",
      sources: [
        {
          label: "Herbal Supplements and Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/herbal-supplements-and-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Dietary and Herbal Supplements",
          url: "https://www.nccih.nih.gov/health/dietary-and-herbal-supplements",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "herbal", "nephrotoxin", "safety"],
      evidence: "no-convincing-evidence",
      caution:
        "Some herbal supplements can cause serious, even irreversible, kidney damage. People with CKD are often advised to avoid herbal products unless specifically cleared by their care team.",
    },
    {
      id: "potassium-phosphorus-in-supplements",
      title: "Hidden potassium and phosphorus in supplements",
      summary:
        "Many supplements marketed as 'mineral-rich,' 'electrolyte,' or 'green/superfood' powders contain high potassium or phosphorus, which can be dangerous for people with CKD who need to limit those minerals.",
      detail:
        "A specific and often-overlooked danger of supplements in CKD is their mineral content. Products promoted as 'electrolyte support,' 'high in minerals,' or 'superfood' and 'greens' powders can carry substantial amounts of potassium or phosphorus — exactly the minerals that people with more advanced CKD may need to limit because their kidneys cannot clear them well. In someone with reduced kidney function, a high-potassium supplement can contribute to dangerous hyperkalemia (with risk of serious heart-rhythm problems), and added phosphorus worsens the bone-mineral problems of CKD. Because supplement labels do not always make mineral content obvious, these loads can be 'hidden.' This is why people with CKD should scrutinize any supplement (and 'health drink' or protein/greens powder) for potassium and phosphorus and, ideally, run it past their renal dietitian or care team before use. Salt substitutes raise the same concern, since many are potassium-based. When in doubt, the care team or pharmacist can help judge whether a product's mineral content is safe given the person's kidney function and labs.",
      sources: [
        {
          label: "Herbal Supplements and Kidney Disease (potassium and phosphorus content)",
          url: "https://www.kidney.org/kidney-topics/herbal-supplements-and-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Potassium in Your CKD Diet",
          url: "https://www.kidney.org/kidney-topics/potassium-your-ckd-diet",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["complementary", "potassium", "phosphorus", "supplements", "safety"],
      evidence: "established",
      caution:
        "'Mineral-rich,' electrolyte, or greens/superfood supplements can deliver dangerous potassium or phosphorus in CKD — check the content with your care team or dietitian first.",
    },
    {
      id: "vitamins-in-ckd",
      title: "Vitamins in CKD: which can help, which can harm",
      summary:
        "People with CKD sometimes need specific vitamins (often renal-formulated), but over-the-counter multivitamins can contain too much of some nutrients; vitamin needs are individualized and set by the care team.",
      detail:
        "Vitamins are a nuanced area in kidney disease. On one hand, CKD — especially with dietary restrictions or on dialysis — can lead to deficiencies of certain water-soluble vitamins (such as some B vitamins and, in some, vitamin C), and special 'renal' vitamin formulations are sometimes prescribed to address this safely. People with CKD may also need specific management of vitamin D, which the kidneys normally activate. On the other hand, ordinary over-the-counter multivitamins and high-dose single vitamins can be problematic: some contain amounts of fat-soluble vitamins (like vitamin A) that can build up to harmful levels when kidneys are impaired, or extra minerals (including potassium or phosphorus) that should be limited, and high-dose vitamin C can pose its own risks in CKD. The practical message is that vitamin needs in CKD are individualized and not a matter of grabbing a standard multivitamin — whether a person needs supplemental vitamins, and which kind, should be decided with the care team and renal dietitian based on their stage, diet, and lab results.",
      sources: [
        {
          label: "Vitamins and Chronic Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/vitamins-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Healthy Eating for Adults with Chronic Kidney Disease (vitamins)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["complementary", "vitamins", "vitamin-d", "supplements"],
      evidence: "mixed",
      caution:
        "Don't take standard over-the-counter multivitamins or high-dose vitamins in CKD without checking — some can accumulate to harmful levels or add unwanted minerals. Vitamin needs are individualized.",
    },
    {
      id: "cranberry-turmeric-and-popular-products",
      title: "Cranberry, turmeric, and other popular products",
      summary:
        "Popular products like cranberry and turmeric are commonly asked about; evidence for kidney benefit is weak, and they carry interaction or mineral cautions, so they should be reviewed with the care team.",
      detail:
        "Several widely used products come up often in kidney disease. Cranberry (juice or supplements) is popular for urinary tract health, but evidence that it prevents urinary infections is limited and mixed, it is not a treatment for kidney disease, and cranberry can interact with the blood thinner warfarin while juices may carry sugar or oxalate considerations. Turmeric/curcumin is marketed for inflammation, but solid evidence for kidney benefit is lacking, it can interact with blood thinners and other drugs, high doses may not be well tolerated, and as a plant product it carries some potassium. Other commonly promoted items — various 'kidney support' blends, high-dose antioxidants, and assorted herbs — generally have weak or no evidence for CKD and the same regulatory and safety caveats. None of these should be relied on to treat kidney disease or substituted for proven care. The reasonable approach is the same throughout this section: discuss any such product with the care team and pharmacist, who can weigh the (usually limited) evidence against the interaction and mineral risks for that individual.",
      sources: [
        {
          label: "Dietary and Herbal Supplements (evidence and interactions)",
          url: "https://www.nccih.nih.gov/health/dietary-and-herbal-supplements",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Herbal Supplements and Kidney Disease (popular products and cautions)",
          url: "https://www.kidney.org/kidney-topics/herbal-supplements-and-kidney-disease",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["complementary", "cranberry", "turmeric", "supplements", "interactions"],
      evidence: "mixed",
      caution:
        "Popular supplements like cranberry and turmeric have weak kidney evidence and real interaction/mineral cautions — review them with your care team and pharmacist before use.",
    },
  ],
});
