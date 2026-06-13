import { defineSection } from "../types.js";

/**
 * COMPLEMENTARY & INTEGRATIVE — supplements and integrative approaches people
 * ask about for lupus, graded by evidence and flagged for safety. A key
 * lupus-specific danger gets its own entry: supplements that STIMULATE the
 * immune system (echinacea, spirulina, alfalfa) can worsen autoimmune disease.
 * Anchored to NCCIH and Lupus Foundation guidance; never a replacement for
 * proven treatment.
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded look at supplements and integrative approaches people ask about for lupus (vitamin D, omega-3s, turmeric, mind-body practices), with a critical safety flag: immune-stimulating supplements such as echinacea can worsen autoimmune disease. Educational only.",
  entries: [
    {
      id: "complementary-overview",
      title: "How to think about supplements and integrative care for lupus",
      summary:
        "No supplement is proven to treat lupus, and some can be harmful in autoimmune disease; the safest rule is never to replace prescribed treatment and to tell the care team about anything you take.",
      detail:
        "Complementary approaches attract interest in lupus, but the evidence behind supplements is generally weak, and lupus carries a specific danger that makes caution especially important: some products that 'boost' the immune system can worsen an already-overactive immune system. The U.S. National Center for Complementary and Integrative Health (NCCIH) stresses several principles that apply well here — do not replace medical treatment with an unproven product; 'natural' does not mean safe; supplements can interact with medications and affect organs; product quality and labeling vary; and there are special cautions in pregnancy and before surgery. In lupus specifically, the most important step is to tell every member of the care team about any supplement, both because some can stimulate the immune system or interfere with immunosuppressant drugs, and because others can add unexpected effects. Integrative practices that help with stress, sleep, and wellbeing may be reasonable adjuncts, but they support — never replace — proven lupus treatment, and should be discussed with the care team first.",
      sources: [
        {
          label: "Using Dietary Supplements Wisely",
          url: "https://www.nccih.nih.gov/health/using-dietary-supplements-wisely",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Lupus Nutrition FAQs",
          url: "https://www.lupus.org/resources/lupus-nutrition-faqs",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["complementary", "supplements", "safety", "overview"],
      evidence: "no-convincing-evidence",
      caution:
        "Supplements are not a substitute for prescribed lupus treatment, and some can worsen autoimmune disease — tell your care team about anything you take before starting it.",
    },
    {
      id: "immune-stimulating-supplements-flag",
      title: "Safety flag: immune-stimulating supplements to be cautious about",
      summary:
        "Supplements marketed to 'boost immunity' — such as echinacea, spirulina, and alfalfa — may stimulate the immune system and can worsen lupus or trigger flares, so they are generally cautioned against.",
      detail:
        "This is the single most important supplement-safety point in lupus: products promoted to strengthen or 'boost' the immune system can be counterproductive, because lupus results from an immune system that is already overactive. Echinacea is the classic example — it has a nonspecific immune-stimulating effect, and sources caution that it can worsen autoimmune diseases including lupus and may even contribute to flares or low white-cell counts; in some countries echinacea products carry labels advising against use by people with autoimmune conditions. Other supplements raised as concerns in lupus include spirulina (a blue-green algae) and alfalfa, which have been associated with immune stimulation and, in alfalfa's case, with lupus-like reactions. Beyond stimulating the immune system, such products could theoretically work against the immunosuppressant medicines used to control lupus. Because of these risks, immune-'boosting' supplements are generally something to avoid or at minimum clear with the care team first — a reminder that in autoimmune disease, more immune activity is not what you want.",
      sources: [
        {
          label: "Lupus Nutrition FAQs (supplements and immune stimulation)",
          url: "https://www.lupus.org/resources/lupus-nutrition-faqs",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Echinacea: Usefulness and Safety (autoimmune caution)",
          url: "https://www.nccih.nih.gov/health/echinacea",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "echinacea", "spirulina", "alfalfa", "immune-stimulation", "safety"],
      evidence: "no-convincing-evidence",
      caution:
        "Immune-'boosting' supplements such as echinacea, spirulina, and alfalfa may worsen lupus or trigger flares — discuss with the care team and generally avoid them in autoimmune disease.",
    },
    {
      id: "vitamin-d",
      title: "Vitamin D",
      summary:
        "Many people with lupus have low vitamin D (partly from avoiding the sun), and correcting a deficiency is reasonable for bone and general health, though vitamin D is not a proven lupus treatment.",
      detail:
        "Vitamin D is the supplement most often discussed for lupus, for understandable reasons. People with lupus are commonly low in vitamin D, partly because the sun protection that is so important for lupus also reduces the skin's vitamin D production, and partly because of the disease and some medications. Vitamin D matters for bone health — important given the bone loss linked to steroids — and there is scientific interest in its role in immune function. Correcting a documented vitamin D deficiency is generally considered reasonable and is often recommended for bone and overall health, and lupus guidance frequently mentions maintaining adequate vitamin D. However, vitamin D supplementation has not been proven to treat lupus or reliably reduce disease activity, so it should be seen as supporting general and bone health rather than as a lupus therapy. The right approach — whether to test levels and how much to take — is individualized, because too much vitamin D can be harmful, so it is best guided by the care team rather than self-dosed.",
      sources: [
        {
          label: "Lupus Nutrition FAQs (vitamin D)",
          url: "https://www.lupus.org/resources/lupus-nutrition-faqs",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Vitamins and Minerals",
          url: "https://www.nccih.nih.gov/health/vitamins-and-minerals",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "vitamin-d", "bone-health", "supplements"],
      evidence: "mixed",
      caution:
        "Vitamin D supports bone and general health and a deficiency is worth correcting, but it is not a lupus treatment — dose and testing should be guided by the care team.",
    },
    {
      id: "omega-3-fish-oil",
      title: "Omega-3 fatty acids (fish oil)",
      summary:
        "Omega-3s have anti-inflammatory properties and modestly help some inflammatory joint symptoms and cardiovascular risk markers, but evidence specific to lupus is limited and they are an adjunct at best.",
      detail:
        "Omega-3 fatty acids (found in fish oil) are commonly considered in lupus because of their anti-inflammatory properties and because cardiovascular health matters so much in this disease. The strongest supporting evidence is in rheumatoid arthritis, where reviews suggest omega-3s may modestly ease joint symptoms; some small studies have looked at fish oil in lupus, but the lupus-specific evidence is limited and not strong enough to call it an established treatment. Omega-3s may benefit some cardiovascular risk markers, which is relevant given lupus's elevated heart risk, though they are not a substitute for managing blood pressure, cholesterol, and other risk factors. Unlike immune-stimulating supplements, omega-3s are not generally flagged as worsening autoimmunity, but they can affect bleeding and may interact with blood thinners — relevant for people with antiphospholipid syndrome on anticoagulants. Overall, omega-3s may be a reasonable adjunct for some people, best discussed with the care team, but they complement rather than replace lupus treatment.",
      sources: [
        {
          label: "Omega-3 Supplements: What You Need To Know",
          url: "https://www.nccih.nih.gov/health/omega3-supplements-what-you-need-to-know",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Lupus Nutrition FAQs (omega-3s)",
          url: "https://www.lupus.org/resources/lupus-nutrition-faqs",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["complementary", "omega-3", "fish-oil", "anti-inflammatory", "supplements"],
      evidence: "mixed",
      caution:
        "Omega-3s can affect bleeding and may interact with blood thinners — important with antiphospholipid syndrome; discuss with the care team before use.",
    },
    {
      id: "turmeric-curcumin",
      title: "Turmeric / curcumin",
      summary:
        "Turmeric (curcumin) is popular for its anti-inflammatory reputation, but solid evidence for treating lupus is lacking, and concentrated supplements carry liver and interaction concerns.",
      detail:
        "Turmeric, and its active component curcumin, is widely promoted as a natural anti-inflammatory and is often asked about for autoimmune conditions like lupus. According to NCCIH, despite extensive study for conditions such as arthritis, fatty liver disease, and high cholesterol, the evidence is not strong enough to conclude that turmeric or curcumin is beneficial for any specific health purpose, and there is no good evidence that it treats lupus. There are also safety considerations: highly absorbable ('bioavailable') curcumin formulations have been linked to liver harm in some cases, curcumin can affect bleeding and may interact with blood thinners (relevant in antiphospholipid syndrome), and supplement products vary in content and sometimes contain added ingredients. Turmeric used as a spice in food is generally fine, but concentrated supplements are a different matter. As an unproven therapy with real interaction and liver concerns, turmeric/curcumin supplements should not replace lupus treatment and should be reviewed with the care team before use.",
      sources: [
        {
          label: "Turmeric: Usefulness and Safety",
          url: "https://www.nccih.nih.gov/health/turmeric",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Lupus Nutrition FAQs (herbal supplements)",
          url: "https://www.lupus.org/resources/lupus-nutrition-faqs",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["complementary", "turmeric", "curcumin", "supplements", "anti-inflammatory"],
      evidence: "preliminary",
      caution:
        "Concentrated curcumin supplements have been linked to liver harm and can affect bleeding — not proven for lupus; review with the care team, especially if on blood thinners.",
    },
    {
      id: "mind-body-practices",
      title: "Mind–body practices (relaxation, mindfulness, gentle movement)",
      summary:
        "Mind–body approaches like meditation, relaxation, and gentle yoga or tai chi won't treat lupus, but they may help with stress, sleep, pain, and wellbeing as safe adjuncts to medical care.",
      detail:
        "Beyond supplements, integrative mind–body practices are a generally safer category that many people with lupus find helpful for coping. Approaches such as mindfulness meditation, breathing and relaxation techniques, and gentle movement practices like yoga or tai chi will not treat the underlying autoimmune disease or replace medication, but they may help with the stress, anxiety, pain, fatigue, and sleep difficulties that often accompany lupus — and since stress is a commonly reported flare trigger, stress reduction is a sensible supportive goal. These practices have a favorable safety profile compared with supplements, though physical practices should be adapted to a person's joints, energy, and any organ involvement, ideally with guidance, and pushed gently rather than to exhaustion. The reasonable framing is integrative: mind–body practices as adjuncts that support quality of life and self-management alongside, not instead of, proven lupus treatment. As with anything new, it is worth mentioning planned practices to the care team, especially if there is significant joint, heart, or lung involvement.",
      sources: [
        {
          label: "Lupus Self-Management: Take Back Control (stress and wellbeing)",
          url: "https://rheumatology.org/patient-blog/lupus-self-management-take-back-control",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Using Dietary Supplements Wisely (integrative care principles)",
          url: "https://www.nccih.nih.gov/health/using-dietary-supplements-wisely",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "mind-body", "meditation", "yoga", "stress", "wellbeing"],
      evidence: "mixed",
    },
  ],
});
