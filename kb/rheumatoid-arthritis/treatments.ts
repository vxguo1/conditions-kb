import { defineSection } from "../types.js";

/**
 * TREATMENTS — the medications and the strategy behind them: the treat-to-target
 * philosophy; conventional DMARDs with methotrexate as the anchor; biologics
 * (TNF inhibitors, abatacept, rituximab, IL-6 inhibitors); JAK inhibitors;
 * short-term steroids; and the role of pain relief and surgery. Educational —
 * all medication decisions belong to the care team.
 */
export const treatments = defineSection({
  id: "treatments",
  title: "Treatments — Medications & Procedures",
  description:
    "How RA is treated — the treat-to-target strategy, conventional DMARDs (methotrexate as the anchor, plus hydroxychloroquine, sulfasalazine, leflunomide), biologics, JAK inhibitors, short-term steroids, and the role of surgery. Educational; treatment decisions belong with the care team.",
  entries: [
    {
      id: "treat-to-target",
      title: "Treat-to-target: aiming for remission",
      summary:
        "Modern RA care follows a 'treat-to-target' strategy: set a goal of remission or low disease activity, measure progress regularly, and adjust treatment until the goal is reached and held.",
      detail:
        "The guiding strategy in modern RA care is 'treat-to-target.' Rather than simply easing symptoms, the care team sets an explicit goal — ideally clinical remission, or at least low disease activity — then measures disease activity at regular visits using standardized scores (counting swollen and tender joints and incorporating inflammation markers and the person's own assessment) and steps treatment up or changes it until the target is reached, then maintains it. This approach grew from evidence that tightly controlling inflammation early prevents joint damage and improves long-term function far more than a slower, symptom-only approach. In practice it means starting disease-modifying treatment promptly after diagnosis, reviewing whether it is working within weeks to a few months, and not settling for partial control if a better target is achievable. The specific target and how aggressively to pursue it are individualized with the rheumatologist, balancing benefits against side effects and a person's other conditions and preferences.",
      sources: [
        {
          label: "Clinical Practice Guidelines — 2021 Guideline for the Treatment of RA (treat-to-target)",
          url: "https://rheumatology.org/clinical-practice-guidelines",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Treatments for Rheumatoid Arthritis (goals of treatment)",
          url: "https://www.arthritis.org/health-wellness/treatment/treatment-plan/disease-management/treatments-for-rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["treatment", "treat-to-target", "strategy", "remission"],
    },
    {
      id: "methotrexate-anchor",
      title: "Methotrexate: the anchor DMARD",
      summary:
        "Methotrexate is usually the first disease-modifying drug for RA; it reduces inflammation and slows joint damage, and is often combined with a folic acid supplement to limit side effects.",
      detail:
        "Methotrexate is the cornerstone — the 'anchor' — of RA treatment and is usually the first disease-modifying antirheumatic drug (DMARD) prescribed. Unlike simple painkillers, it acts on the underlying immune process to reduce pain and swelling and, crucially, to slow or prevent joint damage and long-term disability. It is typically taken once a week (as tablets or a self-given injection), not daily, and a folic acid (folate) supplement is commonly prescribed alongside it to reduce side effects such as mouth sores, nausea, and low blood counts. Because methotrexate can affect the liver and blood counts, people on it have regular blood-test monitoring. It is often used alone first and, if needed, combined with other DMARDs or with a biologic. It must be stopped well before pregnancy because it can harm a developing baby, and alcohol is limited because the combination raises the risk of liver damage. Methotrexate is effective and well established, but dose, monitoring, and how it fits with other medicines are decisions for the care team.",
      sources: [
        {
          label: "Methotrexate (Rheumatrex, Trexall, Otrexup, Rasuvo)",
          url: "https://rheumatology.org/patients/methotrexate-rheumatrex-trexall-otrexup-rasuvo",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — Treatment (methotrexate as first DMARD)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "methotrexate", "dmard", "anchor"],
      evidence: "established",
      caution:
        "Educational only — dosing, monitoring, and folic acid are decided by the care team. Methotrexate must be stopped before pregnancy and is combined cautiously with alcohol.",
    },
    {
      id: "other-conventional-dmards",
      title: "Other conventional DMARDs: hydroxychloroquine, sulfasalazine, leflunomide",
      summary:
        "Besides methotrexate, conventional DMARDs include hydroxychloroquine, sulfasalazine, and leflunomide; they may be used alone, in combination, or when methotrexate is unsuitable.",
      detail:
        "Methotrexate is the most-used conventional synthetic DMARD, but several others are important parts of the toolkit. Hydroxychloroquine (originally an antimalarial) is a milder DMARD often used for early or less aggressive RA or as part of combination therapy; it requires periodic eye checks because, rarely, long-term use can affect the retina. Sulfasalazine is another option used alone or in combinations and needs blood-count monitoring. Leflunomide works similarly to methotrexate in some respects, is taken daily, requires liver and blood monitoring, and — like methotrexate — must be avoided in pregnancy. These conventional DMARDs are sometimes combined with each other (so-called 'triple therapy' pairs methotrexate, sulfasalazine, and hydroxychloroquine) to gain more control without immediately moving to biologics. Each has its own monitoring needs and cautions, and the choice among them depends on disease severity, other health conditions, and the person's circumstances — decisions made with the rheumatologist rather than self-selected.",
      sources: [
        {
          label: "Treatments (patient information on DMARDs)",
          url: "https://rheumatology.org/patients/treatments",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — Treatment (DMARDs)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "dmard", "hydroxychloroquine", "sulfasalazine", "leflunomide"],
      evidence: "established",
    },
    {
      id: "biologics-tnf-and-beyond",
      title: "Biologic DMARDs: TNF inhibitors, abatacept, rituximab, IL-6 inhibitors",
      summary:
        "Biologics are precision-engineered drugs that block specific parts of the immune system — TNF, IL-6, T-cell activation, or B cells — used when conventional DMARDs do not control RA.",
      detail:
        "Biologic DMARDs are protein-based drugs, given by injection or infusion, that target specific molecules or cells in the inflammatory cascade. They are typically added when conventional DMARDs (often methotrexate) have not achieved the target. The main groups are: TNF inhibitors (such as etanercept, adalimumab, and infliximab), which neutralize the cytokine TNF and are often the first biologic tried; IL-6 inhibitors (such as tocilizumab), which block interleukin-6 signaling; abatacept, which interferes with the activation of T cells; and rituximab, which depletes B cells (the cells that make autoantibodies). Biologics are often more effective combined with methotrexate. Because they suppress important immune defenses, they raise the risk of infections, require screening for tuberculosis and hepatitis before starting, and call for attention to vaccination and infection warning signs. Biosimilars — highly similar, lower-cost versions of original biologics — are now widely used. Which biologic to use, and when, is individualized by the rheumatologist based on the person's disease, other conditions, and response.",
      sources: [
        {
          label: "Treatments (biologic agents)",
          url: "https://rheumatology.org/patients/treatments",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — Treatment (biological treatments)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "biologics", "tnf-inhibitor", "il-6", "rituximab", "abatacept"],
      evidence: "established",
      caution:
        "Biologics suppress the immune system — screening before starting, vaccination planning, and prompt attention to infections are important and are managed by the care team.",
    },
    {
      id: "jak-inhibitors",
      title: "JAK inhibitors (targeted synthetic DMARDs)",
      summary:
        "JAK inhibitors are oral targeted drugs that block intracellular inflammation signals; they are an option when other DMARDs fall short, but carry specific safety considerations.",
      detail:
        "Janus kinase (JAK) inhibitors — such as tofacitinib, baricitinib, and upadacitinib — are a newer class of 'targeted synthetic' DMARDs. Unlike biologics, they are small molecules taken as tablets, and they work inside cells by blocking the JAK enzymes that relay signals from many inflammatory cytokines. They are generally used for moderate to severe RA when conventional DMARDs (and sometimes biologics) have not worked well enough or are unsuitable. JAK inhibitors can be very effective, but they carry particular safety considerations: an increased risk of serious infections (including shingles), and — based on a major safety study — signals of higher risk of blood clots, certain cardiovascular events, and some cancers in some higher-risk groups, which has shaped guidance on who should use them and after which other options. Because of this, the decision to use a JAK inhibitor weighs a person's age, smoking history, and heart and clot risk, and involves monitoring. As with all RA drugs, this balance is assessed individually with the rheumatologist.",
      sources: [
        {
          label: "Rheumatoid arthritis — Treatment (JAK inhibitors)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Treatments (targeted synthetic DMARDs / JAK inhibitors)",
          url: "https://rheumatology.org/patients/treatments",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["treatment", "jak-inhibitors", "targeted-synthetic-dmard", "safety"],
      evidence: "established",
      caution:
        "JAK inhibitors carry infection, clot, cardiovascular, and cancer-risk considerations that depend on individual risk factors — suitability and monitoring are decided with the care team.",
    },
    {
      id: "steroids-short-term",
      title: "Corticosteroids: short-term bridge, not long-term plan",
      summary:
        "Steroids quickly calm inflammation and are useful to bridge flares or while DMARDs take effect, but are generally used at the lowest dose for the shortest time because of side effects.",
      detail:
        "Corticosteroids (such as prednisone or prednisolone, given as tablets, joint injections, or short infusions) are powerful, fast-acting anti-inflammatories. In RA they are mainly used as a short-term bridge: to settle a flare, to control symptoms in the weeks while a slower DMARD takes effect, or to inject a single badly inflamed joint. They are not a disease-modifying solution on their own and, importantly, long-term steroid use carries significant risks — including bone thinning (osteoporosis), weight gain, high blood sugar, high blood pressure, cataracts, and increased infection risk — which is why guidelines favor using the lowest effective dose for the shortest necessary time and tapering off rather than staying on them indefinitely. Steroids should never be stopped abruptly after prolonged use, because the body needs time to resume its own production. Whether, when, and how to use and taper steroids is an individualized decision made with the care team, balanced against the DMARD plan.",
      sources: [
        {
          label: "Rheumatoid arthritis — Treatment (steroids / corticosteroids)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Rheumatoid arthritis — Diagnosis and treatment (steroid use)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/diagnosis-treatment/drc-20353653",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "steroids", "corticosteroids", "short-term", "safety"],
      evidence: "established",
      caution:
        "Do not stop long-term steroids abruptly. Dose and tapering are managed by the care team to limit side effects.",
    },
    {
      id: "surgery-and-procedures",
      title: "Surgery and procedures",
      summary:
        "When joints are badly damaged despite treatment, surgery — most often joint replacement — can relieve pain and restore function; it is a last resort as medication has reduced the need.",
      detail:
        "With effective early medication, far fewer people with RA now need surgery than in the past, but procedures still have a role when joints are severely damaged or function is badly impaired despite treatment. The most common and successful is joint replacement (arthroplasty), particularly of the hips and knees, which can dramatically relieve pain and restore mobility. Other procedures include surgery to repair ruptured tendons, to fuse a joint (arthrodesis) for stability and pain relief where replacement is not suitable (for example in the wrist or ankle), to remove inflamed joint lining (synovectomy) in selected cases, and to relieve nerve compression such as carpal tunnel syndrome. Local corticosteroid injections into a single troublesome joint are a minor procedure used to settle stubborn inflammation. Surgery is generally considered a later step after medical treatment, weighed against its risks; the timing and choice are decisions made together by the person, rheumatologist, and surgeon.",
      sources: [
        {
          label: "Rheumatoid arthritis — Treatment (supportive treatments and surgery)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Rheumatoid arthritis — Diagnosis and treatment (surgery options)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/diagnosis-treatment/drc-20353653",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "surgery", "joint-replacement", "procedures"],
      evidence: "established",
    },
  ],
});
