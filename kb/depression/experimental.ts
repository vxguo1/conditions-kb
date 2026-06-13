import { defineSection } from "../types.js";

/**
 * Experimental & emerging — investigational and recently emerging directions for
 * depression: psychedelic-assisted therapy (psilocybin) in trials, novel
 * rapid-acting agents, neuroactive-steroid and other mechanisms, and where care
 * is heading. Evidence levels are labeled honestly, with a clear caution about
 * unregulated clinics and self-experimentation.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Therapies",
  description:
    "Frontier directions for depression — psychedelic-assisted therapy in trials, novel rapid-acting agents, and other emerging approaches — reported with honest evidence levels and clear cautions about unregulated use. Educational only.",
  entries: [
    {
      id: "experimental-overview",
      title: "How to read 'emerging' depression treatments",
      summary:
        "Several promising new approaches to depression are being studied, but 'promising in trials' is not the same as proven or approved; honest evidence labels and professional oversight matter, and self-experimentation can be dangerous.",
      detail:
        "Research into new depression treatments is active and genuinely hopeful, but it is important to read emerging approaches with a clear eye. A treatment that shows promise in early studies is not the same as one proven safe and effective and approved for general use; many promising ideas do not pan out, and even those that work may carry risks or require specific settings. The honest evidence labels in this section ('emerging,' 'investigational,' and so on) are meant to convey where each approach actually stands. Two cautions apply throughout: investigational treatments belong in regulated clinical trials with oversight and informed consent, not in unregulated clinics making big promises; and several of these approaches (such as psychedelics or ketamine) can be harmful or dangerous if used outside medical supervision, so self-experimentation is strongly discouraged. For someone struggling now, the established treatments covered elsewhere are where help reliably lies; emerging options are worth knowing about and discussing with a specialist, especially for treatment-resistant depression, but with realistic expectations. This is educational information, not a recommendation to pursue any specific experimental treatment.",
      sources: [
        {
          label: "Mental Health Medications — research and emerging treatments context",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Psychedelic and Dissociative Drugs as Therapeutics (research stage and cautions)",
          url: "https://nida.nih.gov/research-topics/psychedelic-dissociative-drugs",
          publisher: "NIH / NIDA",
        },
      ],
      tags: ["experimental", "overview", "safety", "mental-health"],
      evidence: "emerging",
      caution:
        "Investigational treatments belong in regulated trials, not unregulated clinics, and several can be dangerous used on one's own. Discuss any experimental option with a specialist.",
    },
    {
      id: "psilocybin-assisted-therapy",
      title: "Psychedelic-assisted therapy (psilocybin)",
      summary:
        "Psilocybin combined with psychological support is being studied for depression, including treatment-resistant depression, with encouraging early-trial results; it remains investigational and is not an approved or at-home treatment.",
      detail:
        "One of the most discussed research frontiers is psychedelic-assisted therapy, in which a psychedelic such as psilocybin (the active compound in 'magic mushrooms') is given in carefully controlled sessions alongside psychological preparation and support. Several randomized trials, including in major-depressive and treatment-resistant depression, have reported rapid and sometimes substantial reductions in depressive symptoms, which has generated significant interest and 'breakthrough therapy' research designations. However, important caveats apply: trials are still relatively small and ongoing, longer-term effectiveness and safety are not fully established, the therapy depends on a controlled setting with trained support (not the drug alone), and psilocybin is not an FDA-approved depression treatment and remains a controlled substance. Risks include challenging psychological experiences and the danger of unsupervised use, and it is generally not appropriate for people with certain conditions (such as a personal or family history of psychosis or bipolar disorder). This is a genuinely promising but firmly investigational area — available, if at all, only through regulated clinical trials, not commercial or do-it-yourself use. Educational only.",
      sources: [
        {
          label: "Effects of Psilocybin-Assisted Therapy on Major Depressive Disorder: A Randomized Clinical Trial",
          url: "https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2772630",
          publisher: "JAMA Psychiatry",
          year: 2021,
        },
        {
          label: "Single-Dose Psilocybin for a Treatment-Resistant Episode of Major Depression",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206443",
          publisher: "New England Journal of Medicine",
          year: 2022,
        },
      ],
      tags: ["experimental", "psilocybin", "psychedelic", "treatment-resistant", "mental-health"],
      evidence: "investigational",
      caution:
        "Psilocybin therapy is investigational and available only through regulated trials — not at-home or recreational use, which can be dangerous and is unsafe for some conditions.",
    },
    {
      id: "novel-rapid-acting-agents",
      title: "Novel rapid-acting and mechanism-based agents",
      summary:
        "Researchers are developing antidepressants that act faster or through new mechanisms — building on ketamine/esketamine and neuroactive steroids — aiming to help more people, including those with treatment-resistant depression.",
      detail:
        "Traditional antidepressants take weeks to work and don't help everyone, so a major research goal is faster-acting medicines and new mechanisms. The success of ketamine and esketamine (which act on the glutamate/NMDA system and can work within hours) and of neuroactive-steroid drugs for postpartum depression (brexanolone and zuranolone, acting on GABA-A receptors) has opened several avenues. Researchers are studying additional rapid-acting agents, new formulations and combinations, drugs targeting different brain systems (including glutamate, inflammation, and the opioid and other systems), and ways to predict which person will respond to which treatment ('precision' approaches). Some of these are in clinical trials; others are earlier-stage. The honest status is mixed and evolving: a few mechanisms have already produced approved treatments, while many candidates remain investigational and may not ultimately succeed. For people with treatment-resistant depression, this pipeline is a real source of hope and a reason to stay engaged with specialist care, where newly approved options and trials can be discussed. This is educational background, not a recommendation of any specific investigational agent.",
      sources: [
        {
          label: "Mental Health Medications — newer agents and ongoing research",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "FDA Approves First Oral Treatment for Postpartum Depression (neuroactive steroid, zuranolone)",
          url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-oral-treatment-postpartum-depression",
          publisher: "U.S. Food and Drug Administration",
          year: 2023,
        },
      ],
      tags: ["experimental", "rapid-acting", "ketamine", "neuroactive-steroids", "research", "mental-health"],
      evidence: "emerging",
    },
    {
      id: "emerging-neuromodulation-and-digital",
      title: "Emerging neuromodulation and digital approaches",
      summary:
        "Newer brain-stimulation protocols and digital tools — such as accelerated and more targeted TMS, and digital therapeutics — are being studied to make effective care faster, more personalized, and more accessible.",
      detail:
        "Beyond medications, research is advancing both how brain stimulation is delivered and how technology can extend care. On the neuromodulation side, accelerated and more precisely targeted forms of transcranial magnetic stimulation aim to produce faster responses (sometimes within days) and to tailor stimulation to an individual's brain circuits, and researchers are exploring ways to reach deeper brain regions non-invasively. On the digital side, smartphone apps, online CBT and guided self-help programs, and emerging 'digital therapeutics' are being studied to improve access to evidence-based support, monitor symptoms, and personalize care — important given how many people cannot easily reach traditional services. These approaches range from already-available (such as established online CBT programs) to early and investigational (such as some novel devices and apps), and quality varies widely, so it matters to favor approaches with real evidence and, where relevant, regulatory clearance. The broad direction is toward faster, more personalized, and more accessible care. This is educational information; what is appropriate and proven for an individual is best discussed with a clinician.",
      sources: [
        {
          label: "Brain Stimulation Therapies (advances and ongoing research)",
          url: "https://www.nimh.nih.gov/health/topics/brain-stimulation-therapies/brain-stimulation-therapies",
          publisher: "NIH / NIMH",
        },
        {
          label: "Technology and the Future of Mental Health Treatment",
          url: "https://www.nimh.nih.gov/health/topics/technology-and-the-future-of-mental-health-treatment",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["experimental", "tms", "digital-therapeutics", "research", "mental-health"],
      evidence: "emerging",
    },
    {
      id: "caution-unproven-clinics",
      title: "Caution: unregulated clinics and 'miracle' treatments",
      summary:
        "Be wary of clinics or products promising fast 'cures' for depression — including unsupervised ketamine or psychedelic services — outside regulated, evidence-based settings; legitimate experimental care comes through approved trials and specialists.",
      detail:
        "The genuine excitement around new depression treatments has been accompanied by a rise in clinics and products marketing fast 'cures' — sometimes offering ketamine, psychedelics, supplements, or devices outside well-regulated, evidence-based settings and at significant cost. Some such offerings lack adequate oversight, screening, or follow-up, which matters because treatments like ketamine and psychedelics carry real risks and are not appropriate for everyone, and because depression itself can make people vulnerable to hope-driven, expensive promises. The safeguards to look for are the same ones that define legitimate care: appropriate medical evaluation and screening, delivery by qualified professionals in monitored settings, honesty about evidence and risks, integration with ongoing mental-health care, and — for truly experimental treatments — participation through a regulated clinical trial (registered on databases such as ClinicalTrials.gov) with informed consent and oversight. Anyone considering an experimental or alternative therapy is encouraged to discuss it with their own clinician first and to be skeptical of any 'miracle cure' marketed outside these protections. This is educational, protective information, not medical advice about any specific provider.",
      sources: [
        {
          label: "Psychedelic and Dissociative Drugs as Therapeutics (research-setting cautions)",
          url: "https://nida.nih.gov/research-topics/psychedelic-dissociative-drugs",
          publisher: "NIH / NIDA",
        },
        {
          label: "ClinicalTrials.gov — how to find legitimate, regulated studies",
          url: "https://clinicaltrials.gov/",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
      ],
      tags: ["experimental", "safety", "unproven", "caution", "mental-health"],
      evidence: "no-convincing-evidence",
      caution:
        "Be skeptical of clinics or products promising quick 'cures' outside regulated, monitored care. Discuss any experimental option with your own clinician first.",
    },
  ],
});
