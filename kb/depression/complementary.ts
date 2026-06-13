import { defineSection } from "../types.js";

/**
 * Complementary & integrative — supplements and integrative approaches people
 * ask about for depression, graded by evidence and flagged for safety. The
 * standout safety issue is St John's wort, which has serious drug interactions
 * (including serotonin syndrome with antidepressants). Also covers omega-3,
 * SAMe, light therapy (for seasonal depression), and mind-body practices.
 * Anchored to NCCIH's evidence reviews.
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded look at approaches people ask about for depression — St John's wort (with strong interaction warnings), omega-3s, SAMe, light therapy for seasonal depression, and mindfulness — with safety flags. Educational only; never a replacement for proven treatment.",
  entries: [
    {
      id: "complementary-overview",
      title: "How to think about complementary approaches for depression",
      summary:
        "Some complementary approaches have modest evidence for depression, but none should replace proven treatment, 'natural' does not mean safe, and several can interact dangerously with medications — so always tell the care team.",
      detail:
        "People understandably look for additional or 'natural' ways to help depression, and a few complementary approaches have some supporting evidence. But the National Center for Complementary and Integrative Health (NCCIH) emphasizes several principles that apply throughout this section: complementary approaches should not replace proven treatments like therapy and medication, especially for moderate to severe depression or when there is any risk of self-harm; 'natural' does not mean safe or free of side effects; some products (notably St John's wort) interact dangerously with medications, including antidepressants; product quality, purity, and dosing vary and are not tightly regulated; and there are special cautions in pregnancy, breastfeeding, and before surgery. The single most important step is to tell every member of the care team about anything being taken, because interactions and effects on mood and other conditions can be serious. Complementary approaches may, at most, be considered as an adjunct alongside professional care and with medical input — never as a substitute, and never as a reason to delay getting help. This is educational, evidence-graded information, not advice for any individual.",
      sources: [
        {
          label: "Depression and Complementary Health Approaches: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "supplements", "safety", "overview", "mental-health"],
      evidence: "mixed",
      caution:
        "Complementary approaches are not a substitute for proven treatment. Tell your care team about anything you take — some interact dangerously with antidepressants. Don't delay getting help.",
    },
    {
      id: "st-johns-wort",
      title: "St. John's wort — strong interaction warning",
      summary:
        "St. John's wort has some evidence for mild depression but carries serious, well-documented drug interactions — including serotonin syndrome when combined with antidepressants — and can weaken many essential medications.",
      detail:
        "St. John's wort is an herbal product with a long history of use for low mood, and some studies suggest it may help mild depression; however, the evidence is inconsistent, it is not recommended for moderate or severe depression, and — most importantly — it carries serious safety concerns that make it one of the riskiest supplements to combine with medications. St. John's wort can dangerously interact with many drugs: it can cause potentially life-threatening serotonin syndrome when combined with antidepressants (such as SSRIs and SNRIs) and other serotonergic medicines, and because it strongly induces drug-metabolizing enzymes, it can reduce the effectiveness of many essential medications — including some antidepressants, birth control pills, blood thinners (warfarin), certain heart and HIV medicines, immunosuppressants, and others — sometimes with serious consequences. For these reasons, it should never be combined with an antidepressant or other medicines without professional guidance, and anyone considering it must discuss it with their clinician and pharmacist first. It is not a safe 'natural alternative' to prescribed antidepressants. This is educational information, with a strong safety flag, not a recommendation.",
      sources: [
        {
          label: "St. John's Wort and Depression: In Depth",
          url: "https://www.nccih.nih.gov/health/st-johns-wort-and-depression-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "st-johns-wort", "interactions", "serotonin-syndrome", "safety", "mental-health"],
      evidence: "mixed",
      caution:
        "St. John's wort has serious drug interactions — including serotonin syndrome with antidepressants — and weakens many vital medicines. Never combine it with other medications without your clinician and pharmacist.",
    },
    {
      id: "omega-3-fatty-acids",
      title: "Omega-3 fatty acids (fish oil)",
      summary:
        "Omega-3 supplements have been studied as an add-on for depression with mixed, inconclusive results; they are generally well tolerated but are not an established treatment on their own.",
      detail:
        "Omega-3 fatty acids (found in fish oil) have been investigated for depression because of their role in brain health, and there is interest in them especially as an add-on to standard treatment. The evidence, however, is mixed and not conclusive: some studies suggest a small benefit (particularly for formulations higher in EPA, and as an adjunct rather than a standalone treatment), while larger reviews find little or no clear effect on preventing or treating depression overall. Omega-3 supplements are generally well tolerated, with side effects such as a fishy aftertaste, mild digestive upset, and at high doses a possible effect on bleeding, which is relevant for people on blood thinners. They are not an established substitute for proven depression treatments. If considered at all, it should be as a possible adjunct discussed with the care team, who can weigh the limited evidence and any interactions for the individual. This is educational, evidence-graded information; it is not a recommendation to start a supplement, and depression that needs treatment needs proven care.",
      sources: [
        {
          label: "Depression and Complementary Health Approaches (omega-3s)",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Omega-3 Supplements: What You Need To Know",
          url: "https://www.nccih.nih.gov/health/omega3-supplements-what-you-need-to-know",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "omega-3", "fish-oil", "supplements", "mental-health"],
      evidence: "mixed",
    },
    {
      id: "same",
      title: "SAMe (S-adenosylmethionine)",
      summary:
        "SAMe is a supplement studied for depression with limited and inconsistent evidence; it can interact with antidepressants (serotonin syndrome risk) and may trigger mania in people with bipolar disorder.",
      detail:
        "SAMe (S-adenosyl-L-methionine) is a compound the body makes naturally that is also sold as a supplement and has been studied for depression. The evidence is limited and inconsistent: some research suggests it may have antidepressant effects, including as an add-on, but NCCIH notes the current scientific evidence does not firmly establish its usefulness for treating depression, and study quality is variable. Safety considerations are important: SAMe may interact with antidepressants and other serotonergic drugs, raising the risk of serotonin syndrome, and it may trigger mania or hypomania in people with bipolar disorder, so it is not appropriate to add casually for someone whose mood disorder has not been fully assessed. Product quality and dosing also vary. Because of the limited evidence and real interaction risks, SAMe should only be considered, if at all, with the knowledge and input of the care team, not self-started alongside other treatments. It is not a proven replacement for established depression treatment. This is educational information with safety flags, not a recommendation.",
      sources: [
        {
          label: "Depression and Complementary Health Approaches (SAMe and safety)",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "same", "supplements", "interactions", "bipolar", "safety", "mental-health"],
      evidence: "mixed",
      caution:
        "SAMe can interact with antidepressants (serotonin syndrome) and may trigger mania in bipolar disorder. Only consider it with your care team's input — never self-start it alongside other treatment.",
    },
    {
      id: "light-therapy-seasonal",
      title: "Light therapy for seasonal depression",
      summary:
        "Light therapy (using a light box) is a standard, evidence-based treatment for winter-pattern seasonal affective disorder and is also studied as an add-on for non-seasonal depression; it has cautions, including for bipolar disorder and eye conditions.",
      detail:
        "Light therapy is the best-established complementary-style treatment in this section, and for winter-pattern seasonal affective disorder (SAD) it is considered a standard, evidence-based option rather than fringe. It typically involves sitting near a bright light box (commonly around 10,000 lux) for a set period each day, usually in the morning during the darker months, to help reset the body's internal clock. It is also studied, with more mixed evidence, as an add-on for some non-seasonal depression. Light therapy is generally well tolerated, but it has real cautions: possible side effects include eyestrain, headache, and nausea; it can occasionally trigger mania or agitation in people with bipolar disorder; and people with certain eye conditions or who take light-sensitizing medications should get medical advice first. Because devices vary and timing and use affect results, light therapy is best set up with guidance from a clinician rather than guessed at. It complements, and does not necessarily replace, other treatments for seasonal depression. This is educational, evidence-graded information; suitability and use are determined with the care team.",
      sources: [
        {
          label: "Seasonal Affective Disorder (light therapy and cautions)",
          url: "https://www.nccih.nih.gov/health/seasonal-affective-disorder",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Seasonal Affective Disorder — light therapy",
          url: "https://www.nimh.nih.gov/health/publications/seasonal-affective-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["complementary", "light-therapy", "seasonal", "sad", "mental-health"],
      evidence: "supported",
      caution:
        "Light therapy can trigger mania in bipolar disorder and isn't suitable with some eye conditions or light-sensitizing medicines. Set it up with a clinician rather than guessing.",
    },
    {
      id: "mindfulness-and-other-mind-body",
      title: "Mindfulness, yoga, and other mind-body practices",
      summary:
        "Mind-body practices like mindfulness meditation and yoga can help some people with depression, often as an adjunct; evidence varies, and they are generally safe but should accompany, not replace, professional care.",
      detail:
        "Mind-body approaches — including mindfulness meditation, yoga, tai chi, and relaxation practices — are commonly used for depression and overall wellbeing. The evidence is moderate and varies: mindfulness-based programs can help reduce depressive symptoms and, in structured forms like mindfulness-based cognitive therapy, help prevent relapse in recurrent depression, and practices like yoga may help some people, often as an adjunct to standard treatment. These practices are generally safe for most people, though they are not risk-free — for example, certain intensive meditation practices can occasionally worsen symptoms in some individuals, and physical practices should be adapted to a person's abilities. They are best viewed as supportive tools that complement therapy and medication rather than substitutes, particularly for more severe depression. Many people access them through classes, therapists, reputable apps, or guided programs. As with the other approaches here, it is worth mentioning their use to the care team, and not letting them delay or replace proven treatment when that is needed. This is educational, evidence-graded information, not individualized advice.",
      sources: [
        {
          label: "Depression and Complementary Health Approaches (mindfulness, yoga, mind-body)",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Meditation and Mindfulness: Effectiveness and Safety",
          url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "mindfulness", "yoga", "mind-body", "mental-health"],
      evidence: "mixed",
    },
  ],
});
