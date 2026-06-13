import { defineSection } from "../types.js";

/**
 * Complementary & integrative — evidence-graded look at supplements people ask
 * about for the heart (omega-3, CoQ10, red yeast rice), with safety flags
 * (especially bleeding interactions and never replacing proven treatment).
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded view of supplements marketed for heart health (omega-3s, CoQ10, red yeast rice and others), with interaction and bleeding safety flags. Educational only.",
  entries: [
    {
      id: "complementary-overview",
      title: "How to think about heart supplements",
      summary:
        "No supplement replaces proven heart treatment; some interact dangerously with blood thinners, and 'natural' is not the same as safe — always tell the care team what you take.",
      detail:
        "Many products are marketed for heart health, but the evidence behind most is weak, and none substitutes for proven treatment (blood-pressure and cholesterol control, blood thinners where indicated, and lifestyle). The most important safety point in heart disease is interactions: several popular supplements — fish oil in high doses, garlic, ginkgo, vitamin E, and others — can add to the bleeding risk of antiplatelets and anticoagulants, and some affect blood pressure or interact with heart drugs. Product quality and labeling also vary, and some 'heart health' blends have been found adulterated. The consistent guidance is to prioritize evidence-based care, treat supplements as drugs that can interact, and review anything you take (or consider) with a pharmacist or clinician — especially if you are on a blood thinner.",
      sources: [
        { label: "Omega-3 Supplements: What You Need To Know", url: "https://www.nccih.nih.gov/health/omega3-supplements-in-depth", publisher: "NIH / NCCIH" },
        { label: "Warfarin — MedlinePlus (supplement interactions)", url: "https://medlineplus.gov/druginfo/meds/a682277.html", publisher: "NIH / MedlinePlus" },
      ],
      tags: ["complementary", "supplements", "safety", "overview"],
      evidence: "no-convincing-evidence",
      caution:
        "Supplements don't replace heart treatment and several increase bleeding risk with blood thinners — review anything you take with a pharmacist.",
    },
    {
      id: "omega-3",
      title: "Omega-3 (fish oil)",
      summary:
        "Omega-3s reliably lower triglycerides and may modestly help some people with heart disease or high triglycerides, but routine supplements show limited benefit and high doses can add bleeding risk.",
      detail:
        "Omega-3 fatty acids (EPA and DHA) are among the better-studied heart supplements. The evidence is mixed: large reviews suggest a modest reduction in coronary events for some people, and omega-3s clearly lower triglycerides (by roughly 15%), but routine supplementation has not shown broad benefit for preventing heart disease in well-nourished people, and effects on stroke are minimal. Eating fish appears more beneficial than supplements, possibly due to other nutrients. A prescription high-dose purified form is used for specific situations under medical care. Safety notes: high doses can increase bleeding risk (relevant with blood thinners) and may slightly raise the risk of atrial fibrillation in some studies. Omega-3s are best considered, if at all, with the care team rather than self-prescribed as heart protection.",
      sources: [
        { label: "Omega-3 Supplements: What You Need To Know", url: "https://www.nccih.nih.gov/health/omega3-supplements-in-depth", publisher: "NIH / NCCIH" },
      ],
      tags: ["complementary", "omega-3", "fish-oil", "triglycerides"],
      evidence: "mixed",
      caution: "High-dose omega-3 can add to bleeding risk on blood thinners and may raise AFib risk in some people — discuss with the care team.",
    },
    {
      id: "coq10-and-red-yeast-rice",
      title: "CoQ10, red yeast rice, and others",
      summary:
        "CoQ10's heart-failure evidence is inconclusive and it can interact with warfarin; red yeast rice contains a statin-like compound with the same risks and inconsistent quality, so it is not a safe DIY statin.",
      detail:
        "Coenzyme Q10 is often promoted for heart failure and statin-related muscle pain, but the evidence is inconclusive for both, and it can interact with warfarin (and theoretically blood-pressure drugs) — so it is not an established treatment. Red yeast rice deserves particular caution: it naturally contains monacolin K, which is chemically the same as the statin lovastatin, so it can lower cholesterol but carries the same risks (muscle and liver effects, drug interactions) without the dosing consistency and quality control of a prescribed statin — products vary widely in active content and some have contained a kidney-toxic contaminant. Using red yeast rice as a 'natural' statin substitute is therefore not safer and bypasses medical monitoring. Other remedies (garlic, hawthorn, vitamin E) have weak or inconsistent evidence and their own interaction concerns. As always, proven therapy plus a pharmacist check beats self-treatment.",
      sources: [
        { label: "Coenzyme Q10", url: "https://www.nccih.nih.gov/health/coenzyme-q10", publisher: "NIH / NCCIH" },
        { label: "Statins — interactions and muscle effects (context for red yeast rice)", url: "https://www.nhs.uk/conditions/statins/", publisher: "NHS (UK)" },
      ],
      tags: ["complementary", "coq10", "red-yeast-rice", "supplements", "safety"],
      evidence: "mixed",
      caution:
        "Red yeast rice acts like an unregulated statin (same risks, variable quality); CoQ10 can interact with warfarin — neither replaces prescribed treatment.",
    },
    {
      id: "mind-body-stress-reduction",
      title: "Mind–body practices and stress reduction",
      summary:
        "Meditation, mindfulness, yoga, and tai chi can modestly help blood pressure and stress and are generally safe, making them reasonable additions to — never replacements for — proven heart care.",
      detail:
        "Because chronic stress and poor sleep contribute to cardiovascular risk, mind–body practices have genuine appeal, and the evidence is cautiously supportive for some. Meditation and mindfulness programs can produce small reductions in blood pressure and help with stress, anxiety, and sleep; the American Heart Association has noted meditation may be a reasonable adjunct for cardiovascular risk reduction, while stressing the modest size of the effect. Movement-based practices such as yoga and tai chi combine gentle activity, breathing, and relaxation and can improve blood pressure, stress, and wellbeing, with the bonus of being low-impact and widely accessible. These approaches are generally safe for most people (with sensible adaptation for physical limitations), but they work best alongside the proven foundations — blood-pressure and cholesterol control, activity, not smoking, and prescribed medicines — rather than instead of them. As an addition that may help stress and modestly support blood pressure, they are a low-risk option worth discussing with the care team.",
      sources: [
        { label: "Meditation and Mindfulness: Effectiveness and Safety", url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know", publisher: "NIH / NCCIH" },
        { label: "The Facts About High Blood Pressure (stress and lifestyle)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
      ],
      tags: ["complementary", "mind-body", "meditation", "yoga", "stress", "blood-pressure"],
      evidence: "mixed",
    },
    {
      id: "supplements-for-blood-pressure",
      title: "Supplements marketed for blood pressure",
      summary:
        "Potassium (from food), magnesium, CoQ10, garlic, and others are promoted for blood pressure, but effects are generally small or inconsistent and some carry risks — dietary patterns and proven treatment do far more.",
      detail:
        "Many supplements are sold for 'healthy blood pressure,' but the evidence is generally weak or inconsistent, and they are no match for the measures that clearly work. Potassium is a real player, but it is best obtained from a potassium-rich diet (fruits, vegetables, legumes) rather than supplements — and importantly, supplemental potassium and potassium-based salt substitutes can be dangerous for people with kidney disease or on certain heart medicines (ACE inhibitors, ARBs, MRAs), so they need medical advice. Magnesium, CoQ10, garlic, and various 'blends' show at most small or uncertain blood-pressure effects in studies, with variable product quality and possible interactions (for example CoQ10 with warfarin, garlic with blood thinners). The dependable approach is the DASH-style eating pattern, reducing salt, activity, weight, limiting alcohol, and prescribed medicines when needed. Supplements, if considered at all, should be reviewed with a pharmacist or clinician, especially alongside heart or kidney conditions.",
      sources: [
        { label: "Coenzyme Q10 (evidence and interactions)", url: "https://www.nccih.nih.gov/health/coenzyme-q10", publisher: "NIH / NCCIH" },
        { label: "The Facts About High Blood Pressure (what lowers it)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
      ],
      tags: ["complementary", "supplements", "blood-pressure", "potassium", "magnesium", "safety"],
      evidence: "no-convincing-evidence",
      caution:
        "Potassium supplements and salt substitutes can be hazardous with kidney disease or ACE inhibitors/ARBs/MRAs — get advice first; supplements don't replace proven blood-pressure care.",
    },
  ],
});
