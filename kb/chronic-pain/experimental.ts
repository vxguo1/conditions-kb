import { defineSection } from "../types.js";

/**
 * Experimental & emerging — frontier directions in pain treatment, reported with
 * honest evidence labels: new non-opioid analgesics (e.g. the Nav1.8 blocker
 * suzetrigine), the large NIH HEAL research effort, advanced neuromodulation,
 * regenerative/biologic injections (PRP, stem cells) with a caution about
 * unproven clinics, and virtual-reality and digital therapeutics.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Therapies",
  description:
    "Frontier directions in pain treatment — new non-opioid analgesics, the NIH HEAL research initiative, advanced neuromodulation, regenerative/biologic injections, and digital and virtual-reality therapeutics — reported with honest evidence levels and a caution about unproven clinics.",
  entries: [
    {
      id: "novel-non-opioid-analgesics",
      title: "New non-opioid painkillers (e.g., Nav1.8 blockers)",
      summary:
        "A major research goal is effective painkillers without opioid risks; in 2025 the U.S. FDA approved suzetrigine, a first-in-class non-opioid that blocks a pain-signaling sodium channel, for short-term acute pain.",
      detail:
        "One of the most active frontiers in pain medicine is the search for analgesics that relieve pain without the addiction and overdose risks of opioids. A landmark example is suzetrigine (brand name Journavx), which the U.S. FDA approved in early 2025 — the first new class of pain medicine in decades. It works by blocking a sodium channel called Nav1.8 that helps transmit pain signals in peripheral nerves, before they reach the brain, so unlike opioids it is not expected to be addictive. Its initial approval is for moderate-to-severe acute (short-term) pain in adults; its role in chronic pain is still being studied and is not established. Other non-opioid mechanisms — including additional sodium-channel blockers, nerve growth factor (NGF) inhibitors, and novel targets — are in various stages of research, with mixed results so far (some NGF inhibitors, for instance, showed pain benefit but raised joint-safety concerns in trials). The honest picture is encouraging but early: a genuinely new approved non-opioid is a real advance, but proving lasting benefit and safety across chronic-pain conditions takes time, and most candidates remain investigational.",
      sources: [
        {
          label: "FDA Approves Novel Non-Opioid Treatment for Moderate to Severe Acute Pain (suzetrigine)",
          url: "https://www.fda.gov/news-events/press-announcements/fda-approves-novel-non-opioid-treatment-moderate-severe-acute-pain",
          publisher: "U.S. Food and Drug Administration",
          year: 2025,
        },
        {
          label: "NIH HEAL Initiative (developing new non-addictive pain treatments)",
          url: "https://heal.nih.gov/",
          publisher: "NIH HEAL Initiative",
        },
      ],
      tags: ["experimental", "non-opioid", "suzetrigine", "nav1.8", "emerging"],
      evidence: "emerging",
      caution:
        "Newly approved and investigational drugs have limited long-term and chronic-pain data. Whether any new option fits a person's situation is a decision for the care team.",
    },
    {
      id: "nih-heal-initiative",
      title: "The NIH HEAL Initiative",
      summary:
        "HEAL is a large U.S. National Institutes of Health research effort to find better, non-addictive ways to treat pain and to address the opioid crisis, funding hundreds of projects across the pain field.",
      detail:
        "The NIH Helping to End Addiction Long-term (HEAL) Initiative is a major, sustained federal research program launched to tackle two linked problems: the need for more effective, non-addictive pain treatments and the opioid and overdose crisis. It funds a broad portfolio — from basic science on how pain becomes chronic, to discovery of new non-opioid drug targets, to clinical trials of devices, behavioral therapies, and care models, to better approaches for preventing and treating opioid use disorder. The initiative reflects a recognition that progress requires work across many fronts at once, and it is one reason several of the emerging approaches in this section exist. For people living with pain, HEAL is not a treatment but context: it signals serious, well-funded effort to expand the options beyond opioids and to understand chronic pain more deeply. As with all research, results emerge gradually and not every funded avenue will succeed, but the scale of the effort is a realistic source of hope for better tools over time. Reputable updates on its progress are published by NIH.",
      sources: [
        {
          label: "NIH HEAL Initiative (overview and goals)",
          url: "https://heal.nih.gov/",
          publisher: "NIH HEAL Initiative",
        },
        {
          label: "NIH HEAL Initiative: A Promising Path Forward for Pain Research",
          url: "https://www.ninds.nih.gov/news-events/directors-messages/all-directors-messages/nih-heal-initiativer-promising-path-forward-pain-research",
          publisher: "NIH / NINDS",
        },
      ],
      tags: ["experimental", "research", "nih-heal", "non-opioid"],
      evidence: "emerging",
    },
    {
      id: "advanced-neuromodulation-research",
      title: "Advanced neuromodulation research",
      summary:
        "Researchers are refining spinal cord and peripheral nerve stimulation and exploring brain-targeted approaches; some are established for selected cases while newer methods remain investigational.",
      detail:
        "Neuromodulation — using electrical or magnetic signals to alter pain processing — is an active research area building on established tools like spinal cord stimulation. Newer directions include refined stimulation patterns (such as high-frequency or 'closed-loop' systems that adjust stimulation in real time), dorsal root ganglion stimulation for focal pain, and peripheral nerve stimulation for specific nerves. Non-invasive brain-targeted approaches, such as repetitive transcranial magnetic stimulation (rTMS) and transcranial direct current stimulation (tDCS), are being studied for certain chronic-pain conditions, with mixed and generally preliminary evidence. NINDS notes that less-damaging stimulation techniques have largely replaced older nerve-destroying surgeries for many situations. The honest status varies by method: spinal cord stimulation is an established option for carefully selected people, while many of the newer or brain-targeted techniques remain investigational, with benefits that are uncertain or modest and that need confirmation in larger trials. These approaches are specialized, do not cure the underlying problem, and are pursued within expert pain centers as part of a broader plan rather than as stand-alone fixes.",
      sources: [
        {
          label: "Peripheral Neuropathy (nerve and spinal cord stimulation)",
          url: "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy",
          publisher: "NIH / NINDS",
        },
        {
          label: "Pain (research on stimulation and pain pathways)",
          url: "https://www.ninds.nih.gov/health-information/disorders/pain",
          publisher: "NIH / NINDS",
        },
      ],
      tags: ["experimental", "neuromodulation", "rtms", "spinal-cord-stimulation", "investigational"],
      evidence: "mixed",
    },
    {
      id: "regenerative-biologic-injections",
      title: "Regenerative and biologic injections (PRP, stem cells)",
      summary:
        "Platelet-rich plasma and 'stem cell' injections are heavily marketed for joint and back pain, but evidence is limited and inconsistent, and unproven, costly stem-cell clinics are a documented safety and fraud concern.",
      detail:
        "Regenerative injections — platelet-rich plasma (PRP) and various cell-based ('stem cell') therapies — are widely promoted for osteoarthritis, tendon problems, and back pain, but the evidence does not yet support them as proven treatments. For PRP, study results are mixed and inconsistent across conditions, and it is generally considered investigational. For stem-cell-based injections, rigorous evidence of benefit for most pain conditions is lacking, and regulators have raised serious concerns: the FDA has warned that many products marketed directly to patients are unapproved and that unproven stem-cell 'clinics' have caused harm, including serious infections and injuries, while charging large out-of-pocket sums for unvalidated procedures. This is a clear case where honest labeling matters: legitimate research into regenerative approaches continues, but the marketing has run far ahead of the science. People considering these treatments should be skeptical of clinics promising cures, ask whether the therapy is FDA-approved or offered within a registered clinical trial, and discuss it with their own care team before paying for or undergoing any such procedure.",
      sources: [
        {
          label: "FDA Warns About Stem Cell Therapies (unproven products and clinics)",
          url: "https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes",
          publisher: "U.S. Food and Drug Administration",
        },
        {
          label: "Stem Cell-Based Products (regulatory status and safety)",
          url: "https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/regenerative-medicine-advanced-therapy-designation",
          publisher: "U.S. Food and Drug Administration",
        },
      ],
      tags: ["experimental", "prp", "stem-cells", "regenerative", "investigational", "safety"],
      evidence: "investigational",
      caution:
        "Be cautious of clinics selling 'stem cell' cures for pain — many are unproven, costly, and have caused harm. Ask whether a therapy is FDA-approved or part of a registered trial, and consult your care team.",
    },
    {
      id: "vr-and-digital-therapeutics",
      title: "Virtual reality and digital therapeutics",
      summary:
        "Virtual-reality programs and app-based digital therapeutics for pain are an emerging area, with one VR system FDA-authorized for chronic low back pain; evidence is still developing.",
      detail:
        "Digital tools are an emerging frontier in pain management. Virtual reality (VR) can immerse a person in calming or engaging environments and deliver guided relaxation, education, and behavioral skills; in 2021 the FDA authorized a prescription VR system (EaseVRx, later RelieVRx) as an adjunct treatment for chronic low back pain in adults, based on a trial showing reduced pain compared with a control program. App-based 'digital therapeutics' deliver CBT, ACT, pain education, and self-management coaching through a phone or computer, expanding access to evidence-based psychological approaches that are otherwise hard to obtain. The honest evidence picture is early and developing: some programs show promising results and one VR product has regulatory authorization, but the field is new, products vary widely in quality and evidence, and long-term benefits are still being established. These tools are generally low-risk and best viewed as adjuncts that extend proven approaches (especially pain psychology and self-management) rather than replacements for comprehensive care. As with any treatment, it is worth discussing whether a particular digital tool is evidence-based and appropriate with the care team.",
      sources: [
        {
          label: "FDA De Novo decision summary for EaseVRx (DEN210014) — VR for chronic low back pain",
          url: "https://www.accessdata.fda.gov/cdrh_docs/pdf21/DEN210014.pdf",
          publisher: "U.S. Food and Drug Administration",
          year: 2021,
        },
        {
          label: "NIH HEAL Initiative (digital and behavioral pain research)",
          url: "https://heal.nih.gov/",
          publisher: "NIH HEAL Initiative",
        },
      ],
      tags: ["experimental", "virtual-reality", "digital-therapeutics", "emerging"],
      evidence: "emerging",
    },
  ],
});
