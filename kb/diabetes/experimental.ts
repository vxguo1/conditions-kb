import { defineSection } from "../types.js";

/**
 * Experimental & emerging — investigational and recently approved frontier
 * therapies: teplizumab for delaying type 1, islet transplantation, stem-cell-
 * derived islets, and advances toward fuller automation and a cure. Evidence
 * levels are labeled honestly, with a clear warning about unproven "stem cell"
 * clinics.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Therapies",
  description:
    "Frontier directions in diabetes — disease-modifying immunotherapy for type 1, islet and stem-cell transplantation, and advances toward fuller automation — reported with honest evidence levels and a caution about unproven clinics.",
  entries: [
    {
      id: "teplizumab-t1d-prevention",
      title: "Teplizumab (Tzield) — delaying type 1 diabetes",
      summary:
        "Teplizumab is the first drug shown to delay the onset of clinical type 1 diabetes in high-risk people, approved in the U.S. in 2022.",
      detail:
        "Teplizumab (brand name Tzield) is an anti-CD3 monoclonal antibody that modulates the immune attack on beta cells. In a randomized trial in relatives at high risk of type 1 diabetes (with islet autoantibodies and abnormal glucose tolerance — 'stage 2' disease), a single 14-day course delayed the median onset of clinical (stage 3) type 1 diabetes by about two years versus placebo, and longer follow-up showed a durable effect. On that basis the FDA approved teplizumab in November 2022 to delay stage 3 type 1 diabetes in adults and children aged 8 and older with stage 2 disease — the first disease-modifying therapy for type 1. It does not prevent diabetes permanently, is given by intravenous infusion, requires monitoring for side effects (such as low white-cell counts and infusion reactions), and depends on identifying at-risk people through autoantibody screening. It marks a shift toward intervening before the disease becomes clinical.",
      sources: [
        {
          label:
            "An Anti-CD3 Antibody, Teplizumab, in Relatives at Risk for Type 1 Diabetes",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1902226",
          publisher: "New England Journal of Medicine",
          year: 2019,
        },
        {
          label: "FDA Approves First Drug That Can Delay Onset of Type 1 Diabetes",
          url: "https://www.fda.gov/drugs/drug-trials-snapshots/drug-trials-snapshots-tzield",
          publisher: "U.S. Food and Drug Administration",
          year: 2022,
        },
      ],
      tags: ["teplizumab", "type-1", "immunotherapy", "prevention"],
      evidence: "established",
    },
    {
      id: "islet-transplantation",
      title: "Islet transplantation (donislecel / Lantidra)",
      summary:
        "Transplanting insulin-producing islet cells from donor pancreases can free some people with type 1 from insulin, but requires lifelong immunosuppression and donor tissue is scarce.",
      detail:
        "Islet transplantation infuses insulin-producing islet cells, isolated from deceased-donor pancreases, into the recipient's liver, where they can engraft and secrete insulin. In 2023 the FDA approved the first such cellular therapy, donislecel (Lantidra), for adults with type 1 diabetes who have severe, recurrent hypoglycemia and impaired awareness despite intensive management — the situation where the risk of dangerous lows justifies the approach. Some recipients achieve insulin independence, sometimes for years. The major limitations are that it requires lifelong immunosuppressive drugs (with their own risks), donor tissue is in very short supply, and results vary, so it is reserved for selected patients rather than being a general cure. Islet transplantation nonetheless proves the principle — replacing beta cells can restore glucose control — that newer stem-cell approaches aim to scale up.",
      sources: [
        {
          label: "FDA Approves First Cellular Therapy to Treat Patients with Type 1 Diabetes",
          url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-cellular-therapy-treat-patients-type-1-diabetes",
          publisher: "U.S. Food and Drug Administration",
          year: 2023,
        },
        {
          label: "LANTIDRA (donislecel) product information",
          url: "https://www.fda.gov/vaccines-blood-biologics/lantidra",
          publisher: "U.S. Food and Drug Administration",
        },
      ],
      tags: ["islet-transplant", "type-1", "cell-therapy", "lantidra"],
      evidence: "established",
    },
    {
      id: "stem-cell-islets",
      title: "Stem-cell-derived islet therapy (e.g. VX-880 / zimislecel)",
      summary:
        "Islet cells grown from stem cells aim to overcome the donor shortage; early-trial results show some people achieving insulin independence, but this remains investigational.",
      detail:
        "A leading research frontier is making insulin-producing islet cells from stem cells, which could provide an essentially unlimited supply and overcome the donor-tissue bottleneck of conventional islet transplantation. The most advanced example, VX-880 (zimislecel), infuses fully differentiated, stem-cell-derived islet cells; early clinical-trial reports describe participants restoring insulin production and some achieving insulin independence, a striking proof of concept. Important caveats remain: current approaches still require immunosuppression to prevent rejection, trials are small and ongoing, long-term safety and durability are not yet established, and the therapy is not approved or available outside research. Parallel efforts aim to protect transplanted cells from the immune system (encapsulation, gene editing) so that immunosuppression might eventually be avoided. This is genuinely promising but firmly investigational.",
      sources: [
        {
          label:
            "Safety, Tolerability, and Efficacy Study of VX-880 in Participants With Type 1 Diabetes (NCT04786262)",
          url: "https://clinicaltrials.gov/study/NCT04786262",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
      ],
      tags: ["stem-cell", "vx-880", "zimislecel", "type-1", "cure-research"],
      evidence: "investigational",
      caution:
        "Stem-cell islet therapy is investigational and available only through regulated clinical trials — not from commercial 'stem cell' clinics.",
    },
    {
      id: "automated-delivery-advances",
      title: "Advances toward fuller automation",
      summary:
        "Research is pushing automated insulin delivery toward less user input — fully closed loops, dual-hormone systems, and faster insulins — narrowing the gap to an artificial pancreas.",
      detail:
        "Today's automated insulin delivery (AID) systems are 'hybrid' closed loops that still need users to announce meals. Active research aims to reduce that burden: fully closed-loop systems that handle meals automatically; 'dual-hormone' systems that deliver both insulin and glucagon to better prevent lows; faster-acting insulins and improved algorithms (including adaptive and machine-learning control) that respond more quickly; and simpler, smaller devices. Studies of more automated and bionic systems show further gains in time in range and reduced management effort. These advances make daily life with insulin-treated diabetes safer and easier and are steadily approaching the long-sought 'artificial pancreas,' though they manage rather than cure diabetes. Much of this work is moving from trials into approved devices.",
      sources: [
        {
          label: "Automated Insulin Delivery Systems and Insulin Pumps (advances)",
          url: "https://www.breakthrought1d.org/daily-management/t1d-technology/aid-insulin-pumps/",
          publisher: "Breakthrough T1D (formerly JDRF)",
        },
      ],
      tags: ["aid", "closed-loop", "artificial-pancreas", "research"],
      evidence: "emerging",
    },
    {
      id: "unproven-stem-cell-clinics",
      title: "Caution: unproven 'stem cell' and 'cure' clinics",
      summary:
        "Clinics marketing stem-cell 'cures' for diabetes outside regulated trials are not supported by evidence, can be expensive, and may be unsafe — legitimate cell therapies come through approved trials or licensed products.",
      detail:
        "The genuine progress in cell and immune therapy has been accompanied by a troubling rise in clinics — often marketed online and abroad — selling 'stem cell' treatments that claim to cure type 1 or type 2 diabetes. These offerings are generally not supported by credible evidence, are not approved by regulators, can cost large sums, and carry real safety risks, including infections, tumors, and serious harm from unregulated procedures. Legitimate cell therapies are either licensed products (like donislecel for specific patients) or available only through regulated clinical trials registered on databases such as ClinicalTrials.gov, with oversight and informed consent. Anyone considering an experimental therapy should discuss it with their own diabetes specialist and verify it is part of a properly approved trial. Skepticism toward any 'miracle cure' that asks for payment outside a trial is well warranted.",
      sources: [
        {
          label: "FDA Approves First Cellular Therapy to Treat Patients with Type 1 Diabetes (context on approved vs unapproved)",
          url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-cellular-therapy-treat-patients-type-1-diabetes",
          publisher: "U.S. Food and Drug Administration",
          year: 2023,
        },
      ],
      tags: ["safety", "unproven", "stem-cell", "caution"],
      evidence: "no-convincing-evidence",
      caution:
        "Be wary of clinics selling stem-cell 'cures' for diabetes outside approved clinical trials — discuss any experimental therapy with your diabetes specialist first.",
    },
  ],
});
