import { defineSection } from "../types.js";

/**
 * EXPERIMENTAL & EMERGING — investigational and frontier approaches for PTSD,
 * reported with honest evidence and regulatory-status labels: MDMA-assisted
 * therapy (in trials; NOT FDA-approved — a 2024 Complete Response Letter),
 * stellate ganglion block, ketamine, neuromodulation (TMS), and a caution about
 * unproven clinics.
 *
 * Honest about what is and isn't established. Educational — investigational
 * approaches belong in regulated clinical trials, not commercial clinics.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Approaches",
  description:
    "Frontier directions in PTSD — MDMA-assisted therapy (investigational, not FDA-approved), stellate ganglion block, ketamine, and brain stimulation (TMS) — reported with honest evidence levels and regulatory status, plus a caution about unproven clinics.",
  entries: [
    {
      id: "experimental-overview",
      title: "How to read 'emerging' PTSD treatments",
      summary:
        "Several novel approaches are being studied for PTSD; understanding what 'investigational' means — and that established first-line treatments already work — helps weigh the news realistically.",
      detail:
        "PTSD research is active, and headlines regularly announce promising new treatments — but it helps to read such news with a clear sense of what stage each approach is at. 'Investigational' means a treatment is still being tested in clinical trials and is not approved or proven; 'emerging' or 'preliminary' means early results are encouraging but not yet established. This matters because excitement can outrun evidence, and because effective, well-established first-line treatments for PTSD already exist (trauma-focused therapies and certain medications). Emerging approaches are most appropriately accessed through regulated clinical trials, which provide oversight, informed consent, and safety monitoring — not through commercial clinics selling unproven 'cures.' The entries here describe several frontier directions with honest labels about their evidence and regulatory status. For anyone considering an experimental option, the right step is to discuss it with a trusted clinician and to verify that it is part of a properly approved trial. Promising is not the same as proven, and proven treatments remain the foundation of care.",
      sources: [
        {
          label: "Understanding PTSD Treatment (evidence-based care)",
          url: "https://www.ptsd.va.gov/understand_tx/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "ClinicalTrials.gov — about clinical trials and how to find them",
          url: "https://clinicaltrials.gov/",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
      ],
      tags: ["experimental", "overview", "evidence", "clinical-trials"],
      caution:
        "Emerging treatments are best accessed only through regulated clinical trials. Discuss any experimental option with a trusted clinician first.",
    },
    {
      id: "mdma-assisted-therapy",
      title: "MDMA-assisted therapy (investigational; not FDA-approved)",
      summary:
        "MDMA-assisted therapy has shown encouraging results in trials but is NOT an approved treatment; in 2024 the FDA declined to approve it and asked for more study.",
      detail:
        "MDMA-assisted therapy pairs the drug MDMA, given in a small number of supervised sessions, with structured psychotherapy, on the theory that MDMA may help people engage with traumatic memories with less overwhelming fear. Phase 3 clinical trials reported meaningful reductions in PTSD symptoms, generating considerable attention. However — and this is essential — it is not an approved treatment. In August 2024 the U.S. Food and Drug Administration declined to approve MDMA-assisted therapy for PTSD, issuing a Complete Response Letter that requested an additional phase 3 study; the decision followed concerns about trial data and conduct. The therapy therefore remains investigational, available only through clinical trials and not as a marketed treatment, and MDMA itself remains a controlled substance with real risks (including effects on heart rate and blood pressure, and potential for misuse). The honest summary is that this is a genuinely studied, promising-but-unproven approach whose regulatory future is uncertain. Anyone interested should look only to legitimate, regulated trials and discuss it with their clinician — not seek MDMA outside a research setting.",
      sources: [
        {
          label: "FDA Issues Complete Response Letter for MDMA-Assisted Therapy for PTSD (Aug 2024)",
          url: "https://www.ajmc.com/view/mdma-assisted-therapy-receives-a-complete-response-letter-from-the-fda",
          publisher: "The American Journal of Managed Care (AJMC)",
          year: 2024,
        },
        {
          label: "MDMA-Assisted Therapy for PTSD (study record)",
          url: "https://clinicaltrials.gov/study/NCT03537014",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
      ],
      tags: ["experimental", "mdma", "psychedelic-assisted-therapy", "investigational"],
      evidence: "investigational",
      caution:
        "MDMA-assisted therapy is NOT FDA-approved (the FDA declined approval in 2024). MDMA is a controlled substance with real risks; do not seek it outside a regulated clinical trial.",
    },
    {
      id: "stellate-ganglion-block",
      title: "Stellate ganglion block (SGB)",
      summary:
        "Stellate ganglion block, an anesthetic injection in the neck, is being studied for PTSD symptoms with mixed trial results; it is not an established treatment.",
      detail:
        "Stellate ganglion block (SGB) is a procedure in which a local anesthetic is injected near a cluster of nerves in the neck (the stellate ganglion) that is part of the 'fight-or-flight' sympathetic nervous system. The idea is that temporarily blocking these nerves might calm the overactive stress response in PTSD. It has been studied as a possible adjunct, sometimes alongside standard treatment, with mixed results: some randomized trials found reductions in PTSD symptoms while others found no significant difference from a sham procedure, and evidence-based guidelines have generally concluded there is not yet enough evidence to recommend it routinely. SGB is a medical procedure with its own (usually low) risks and is performed by trained clinicians, typically in research or specialized settings. The fair characterization is an emerging, still-uncertain option rather than an established treatment — potentially helpful for some, but not proven, and not a replacement for first-line trauma-focused therapy or medication. Anyone considering it should discuss the current evidence and risks with a knowledgeable clinician, ideally in the context of ongoing research.",
      sources: [
        {
          label: "Evidence Brief: Effectiveness of Stellate Ganglion Block for Treatment of PTSD",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK442253/",
          publisher: "VA Evidence Synthesis Program (NCBI Bookshelf)",
        },
        {
          label: "Study of Stellate Ganglion Block to Treat PTSD Symptoms",
          url: "https://clinicaltrials.gov/study/NCT03077919",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
      ],
      tags: ["experimental", "stellate-ganglion-block", "sgb", "procedure"],
      evidence: "mixed",
      caution:
        "Stellate ganglion block is not an established PTSD treatment and evidence is mixed. Consider it only with a knowledgeable clinician, ideally within research.",
    },
    {
      id: "ketamine",
      title: "Ketamine",
      summary:
        "Ketamine is being studied for PTSD (and is used for some depression); evidence in PTSD is early and inconsistent, and it is not an established PTSD treatment.",
      detail:
        "Ketamine is an anesthetic that, at lower doses, has rapid effects on mood and has drawn interest for several mental health conditions; a related form (esketamine) is FDA-approved for certain treatment-resistant depression, but not for PTSD. For PTSD specifically, ketamine has been studied in small trials with inconsistent results — some suggesting short-term symptom reduction, others less clearly — so it remains investigational and is not an established or guideline-recommended PTSD treatment. Ketamine has meaningful considerations: effects on blood pressure and heart rate, dissociative experiences during treatment (which can be complicated in trauma survivors), a potential for misuse, and uncertain durability of benefit, all of which is why it is given under medical supervision. There has also been growth in clinics offering ketamine broadly, sometimes ahead of solid evidence for specific uses, which warrants caution. The honest picture is an area of active but early research for PTSD. Anyone considering it should weigh the limited PTSD-specific evidence and the risks with a qualified clinician, rather than assuming proven benefit.",
      sources: [
        {
          label: "Ketamine for PTSD (study record)",
          url: "https://clinicaltrials.gov/study/NCT02727998",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
        {
          label: "Esketamine — what it is approved for (Spravato information)",
          url: "https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2019/211243Orig1s000ltr.pdf",
          publisher: "U.S. Food and Drug Administration",
          year: 2019,
        },
      ],
      tags: ["experimental", "ketamine", "investigational"],
      evidence: "preliminary",
      caution:
        "Ketamine is not an established or FDA-approved PTSD treatment; PTSD evidence is early. It has real risks and should only be used under qualified medical supervision.",
    },
    {
      id: "neuromodulation-tms",
      title: "Brain stimulation (TMS and related neuromodulation)",
      summary:
        "Transcranial magnetic stimulation and related brain-stimulation methods are being studied for PTSD; evidence is emerging and they are not yet a standard PTSD treatment.",
      detail:
        "Neuromodulation approaches aim to influence brain activity directly. Transcranial magnetic stimulation (TMS) uses magnetic pulses through the scalp to stimulate targeted brain regions; it is FDA-cleared for certain depression and is being actively studied for PTSD, often targeting the prefrontal cortex involved in regulating fear. Results in PTSD are emerging and somewhat promising but not yet definitive, and TMS is not an established, first-line PTSD treatment on its own — though it may help co-occurring depression and is being explored in combination with therapy. Other investigational methods include transcranial direct current stimulation and various research techniques. These approaches are generally well tolerated, performed in clinical settings, and have specific contraindications a clinician screens for. The reasonable summary is an evolving area with real potential, especially for people with co-occurring depression, but one where PTSD-specific evidence is still developing. As with other emerging options, accessing it through experienced providers or research, and keeping established treatments as the foundation, is the sensible approach.",
      sources: [
        {
          label: "Repetitive TMS for PTSD (study record)",
          url: "https://clinicaltrials.gov/study/NCT01806168",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
        {
          label: "Post-Traumatic Stress Disorder (PTSD) — research and emerging treatments",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["experimental", "tms", "neuromodulation", "brain-stimulation"],
      evidence: "emerging",
    },
    {
      id: "unproven-clinics-caution",
      title: "Caution: unproven clinics and 'miracle' treatments",
      summary:
        "Clinics marketing unproven or unregulated 'cures' for PTSD — including some psychedelic, ketamine, or stem-cell offerings outside trials — can be costly and unsafe; legitimate care comes through approved treatments or regulated trials.",
      detail:
        "Alongside genuine research has come a rise in clinics marketing unproven treatments for PTSD — sometimes psychedelics, ketamine infusions, 'stem cell' products, or other interventions offered outside regulated clinical trials and ahead of solid evidence for PTSD. These can be expensive, are not held to the oversight and informed-consent standards of approved trials, and may carry real safety risks, particularly for trauma survivors who can be vulnerable to dissociation or destabilization. The presence of a real, well-conducted trial somewhere does not mean a commercial clinic offering a similar-sounding service is safe or effective. Legitimate options are either treatments approved by regulators for PTSD (the established therapies and medications) or participation in a properly registered, ethically overseen clinical trial (searchable on ClinicalTrials.gov). A healthy skepticism toward any 'breakthrough' or 'cure' that requires large out-of-pocket payment outside a trial is warranted. Anyone drawn to an experimental option should discuss it first with their own clinician and verify its regulatory and research status — protecting both their safety and their resources.",
      sources: [
        {
          label: "ClinicalTrials.gov (verify legitimate, registered trials)",
          url: "https://clinicaltrials.gov/",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
        {
          label: "6 Tip-offs to Rip-offs: Don't Fall for Health Fraud Scams",
          url: "https://www.fda.gov/consumers/consumer-updates/6-tip-offs-rip-offs-dont-fall-health-fraud-scams",
          publisher: "U.S. Food and Drug Administration",
        },
      ],
      tags: ["experimental", "safety", "unproven", "caution"],
      evidence: "no-convincing-evidence",
      caution:
        "Be wary of clinics selling unproven PTSD 'cures' outside regulated trials. Verify any experimental treatment's research status and discuss it with your clinician first.",
    },
  ],
});
