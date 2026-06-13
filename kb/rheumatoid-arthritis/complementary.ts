import { defineSection } from "../types.js";

/**
 * Complementary & integrative — supplements and integrative approaches people
 * ask about for RA, graded by evidence and flagged for safety (the cardinal
 * rule never to replace proven DMARD treatment). Omega-3 fish oil has the most
 * supportive evidence; others are weaker or carry real risks (thunder god vine).
 * Anchored to NCCIH's evidence reviews.
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded look at approaches people ask about for RA — omega-3 fish oil (the best-supported), other supplements, mind-body practices, and risky herbs like thunder god vine — with safety flags. These may complement but never replace proven treatment.",
  entries: [
    {
      id: "complementary-overview",
      title: "How to think about complementary approaches for RA",
      summary:
        "Some complementary approaches may modestly ease RA symptoms, but none modifies the disease or replaces DMARDs; the key rule is to tell the care team about anything you use.",
      detail:
        "Many people with RA are interested in complementary and integrative approaches, and a few have some supporting evidence for easing symptoms — but it is essential to understand their place. The U.S. National Center for Complementary and Integrative Health (NCCIH) emphasizes that complementary approaches should be used in addition to, never instead of, the proven medical treatment (especially disease-modifying drugs) that controls inflammation and prevents joint damage. 'Natural' does not mean safe: supplements can have side effects, vary in quality, and interact with medicines — for example, some affect bleeding or the liver. NCCIH's core advice is to keep the care team informed of everything you take or do, not to delay or replace effective treatment, and to be cautious about products promising dramatic results. The entries here grade the most-asked-about approaches by evidence and flag safety concerns, so people can weigh them and discuss them with their team rather than rely on them.",
      sources: [
        {
          label: "6 Things To Know About Complementary Health Approaches for Rheumatoid Arthritis",
          url: "https://www.nccih.nih.gov/health/tips/6-things-to-know-about-complementary-health-approaches-for-rheumatoid-arthritis",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Rheumatoid Arthritis: In Depth",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "overview", "safety", "supplements"],
      evidence: "mixed",
      caution:
        "Complementary approaches are an add-on, never a replacement for proven RA treatment. Tell your care team about anything you use — some interact with medicines.",
    },
    {
      id: "omega-3-fish-oil",
      title: "Omega-3 fish oil",
      summary:
        "Omega-3 fatty acids from fish oil have the most evidence among RA supplements — they may modestly ease tender joints and morning stiffness — but do not stop joint damage or replace DMARDs.",
      detail:
        "Among supplements studied for RA, omega-3 fatty acids from fish oil have the most supportive evidence. According to NCCIH, fish oil supplements may help relieve tender joints and morning stiffness in people with RA and may reduce the need for pain medicine, though the benefits are modest. Importantly, omega-3s ease symptoms only — they do not prevent ongoing joint damage or change the underlying course of the disease, so they are an adjunct to, not a substitute for, disease-modifying treatment. On safety, omega-3 supplements usually cause only mild side effects if any, but they can extend bleeding time, so caution is advised for people taking anticoagulants ('blood thinners') or NSAIDs, and the care team should be told. Oily fish in the diet is also a good source. For someone interested in fish oil, the reasonable framing is a possible modest symptom aid, used alongside prescribed treatment and after checking with the care team about dose and bleeding-related interactions.",
      sources: [
        {
          label: "6 Things To Know About Complementary Health Approaches for Rheumatoid Arthritis (omega-3s)",
          url: "https://www.nccih.nih.gov/health/tips/6-things-to-know-about-complementary-health-approaches-for-rheumatoid-arthritis",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Rheumatoid Arthritis: In Depth (omega-3 fatty acids)",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "omega-3", "fish-oil", "supplements"],
      evidence: "supported",
      caution:
        "Fish oil can lengthen bleeding time — use caution if you take blood thinners or NSAIDs, and check with your care team. It eases symptoms only; it does not prevent joint damage.",
    },
    {
      id: "gla-plant-oils",
      title: "Gamma-linolenic acid (GLA) and plant oils",
      summary:
        "Some plant-oil sources of gamma-linolenic acid (such as evening primrose, borage, or blackcurrant oil) have limited evidence for easing RA symptoms, with safety cautions for certain oils.",
      detail:
        "Gamma-linolenic acid (GLA) is an omega-6 fatty acid found in the oils of plants such as evening primrose, borage, and blackcurrant seed, and it has been studied as an anti-inflammatory aid in RA. NCCIH notes there is some evidence that supplements containing GLA may help relieve some RA symptoms, but the evidence is limited and less robust than for fish oil. Safety considerations matter: borage seed oil and some other sources can contain compounds (pyrrolizidine alkaloids) that may harm the liver, so product source and quality are important, and these oils can affect bleeding and interact with medicines. As with all supplements, GLA products are not a replacement for proven RA treatment and should be discussed with the care team, particularly regarding interactions and the choice of a reputable product. The reasonable view is that GLA is a possible, modest, and uncertain symptom aid rather than an established treatment.",
      sources: [
        {
          label: "6 Things To Know About Complementary Health Approaches for Rheumatoid Arthritis (GLA)",
          url: "https://www.nccih.nih.gov/health/tips/6-things-to-know-about-complementary-health-approaches-for-rheumatoid-arthritis",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Rheumatoid Arthritis: In Depth (gamma-linolenic acid and plant oils)",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "gla", "evening-primrose", "borage", "supplements"],
      evidence: "preliminary",
      caution:
        "Some GLA oils (e.g., borage) may contain liver-harming compounds and can affect bleeding — choose reputable products and check with the care team.",
    },
    {
      id: "thunder-god-vine",
      title: "Thunder god vine",
      summary:
        "Thunder god vine, a Chinese herbal remedy, has shown benefit for RA symptoms in some studies but carries serious safety risks and can be poisonous if improperly prepared — caution is essential.",
      detail:
        "Thunder god vine (Tripterygium wilfordii) is an herb from traditional Chinese medicine that has been studied for RA. NCCIH notes that the few higher-quality studies suggest it may improve some RA symptoms — in some trials performing at least as well as a conventional drug — which makes it unusual among herbal remedies in showing real signals of benefit. However, the safety concerns are serious and limiting: thunder god vine can cause significant side effects including decreases in bone density and male infertility, and, critically, it can be extremely poisonous if the extract is not prepared properly (the wrong parts of the plant are toxic). Product quality and preparation are therefore major risks, and it can interact with other medicines. Because of this risk profile, thunder god vine is not a casual supplement; it should not be self-started, and anyone considering it must involve their care team. It illustrates that 'some evidence of benefit' does not equal 'safe,' and that potency and toxicity can go together.",
      sources: [
        {
          label: "Thunder God Vine: Usefulness and Safety",
          url: "https://www.nccih.nih.gov/health/thunder-god-vine",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Rheumatoid Arthritis: In Depth (thunder god vine)",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "thunder-god-vine", "herbal", "safety"],
      evidence: "mixed",
      caution:
        "Thunder god vine can be extremely poisonous if improperly prepared and may cause bone loss and infertility. Do not self-start it; involve the care team.",
    },
    {
      id: "mind-body-approaches",
      title: "Mind-body approaches: tai chi, yoga, mindfulness, and relaxation",
      summary:
        "Mind-body practices like tai chi, gentle yoga, mindfulness, and relaxation may help with pain coping, stress, mood, and function, and are generally safe when adapted to the person's joints.",
      detail:
        "Mind-body and movement-based practices are a generally safe category of complementary approaches that can support wellbeing in RA, even though they do not treat the underlying disease. Practices such as tai chi, gentle or adapted yoga, mindfulness meditation, and relaxation techniques may help people cope with chronic pain, reduce stress and anxiety, improve mood and sleep, and — for the movement-based ones — maintain flexibility, balance, and function. The evidence varies by practice and outcome and is often modest, but the safety profile is favorable when activities are gentle, properly taught, and adapted to avoid straining inflamed or damaged joints. These approaches dovetail with the broader emphasis on exercise, fatigue management, and mental health in RA care. As with any new activity, it is wise to start gently, choose instructors familiar with arthritis where possible, modify poses or movements that stress vulnerable joints, and let the care team know — particularly if joints are actively inflamed. Mind-body practices complement medical treatment and self-management; they are not a substitute for disease-modifying therapy.",
      sources: [
        {
          label: "Rheumatoid Arthritis: In Depth (mind and body practices)",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
        {
          label: "6 Things To Know About Complementary Health Approaches for Rheumatoid Arthritis (mind-body)",
          url: "https://www.nccih.nih.gov/health/tips/6-things-to-know-about-complementary-health-approaches-for-rheumatoid-arthritis",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "mind-body", "tai-chi", "yoga", "mindfulness"],
      evidence: "mixed",
    },
    {
      id: "other-supplements-turmeric",
      title: "Turmeric/curcumin and other popular supplements",
      summary:
        "Supplements like turmeric/curcumin are widely marketed for arthritis, but evidence for RA is limited and inconsistent; quality varies and some can interact with medicines.",
      detail:
        "Beyond fish oil, GLA, and thunder god vine, many other supplements are marketed for arthritis — turmeric/curcumin being among the most popular, along with various 'joint support' blends. For RA specifically, the evidence for most of these is limited, preliminary, or inconsistent, and they have not been shown to control the underlying disease or replace proven treatment; turmeric/curcumin has been studied for inflammatory conditions with mixed and not definitive results. Safety is not guaranteed: supplements can interact with medicines (for example, some may affect bleeding or the liver, which matters alongside RA drugs), quality and labeling vary between products, and some 'natural' arthritis products have been found adulterated with hidden pharmaceuticals. NCCIH's consistent guidance applies: do not rely on these in place of effective treatment, be cautious of strong marketing claims, and tell the care team about anything taken so interactions and risks can be checked. The reasonable stance is healthy skepticism, prioritizing proven treatment, and shared decisions with the care team about any supplement.",
      sources: [
        {
          label: "Rheumatoid Arthritis: In Depth (dietary supplements and cautions)",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
        {
          label: "6 Things To Know About Complementary Health Approaches for Rheumatoid Arthritis (supplements caution)",
          url: "https://www.nccih.nih.gov/health/tips/6-things-to-know-about-complementary-health-approaches-for-rheumatoid-arthritis",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "turmeric", "curcumin", "supplements", "safety"],
      evidence: "no-convincing-evidence",
      caution:
        "Some 'natural' arthritis products have been found adulterated with hidden drugs, and supplements can interact with RA medicines. Prioritize proven treatment and check with the care team.",
    },
  ],
});
