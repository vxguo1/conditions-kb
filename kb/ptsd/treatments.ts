import { defineSection } from "../types.js";

/**
 * TREATMENTS — the medical/medication side of PTSD care: that trauma-focused
 * psychotherapy is first-line, the FDA-approved SSRIs (sertraline, paroxetine),
 * SNRIs (venlafaxine), prazosin for trauma-related nightmares and sleep, and
 * what to know about starting, monitoring, and combining treatments.
 *
 * Educational only — never dosing or individualized advice. Treatment decisions
 * belong with the prescriber and care team.
 */
export const treatments = defineSection({
  id: "treatments",
  title: "Treatments: Medications & Medical Care",
  description:
    "The medical side of PTSD treatment: trauma-focused therapy as first-line, the FDA-approved SSRIs (sertraline, paroxetine) and SNRI venlafaxine, prazosin for trauma-related nightmares, and how starting and monitoring medication works. Educational — decisions belong with the prescriber.",
  entries: [
    {
      id: "treatment-overview",
      title: "How PTSD is treated: the big picture",
      summary:
        "PTSD is treatable; trauma-focused psychotherapies are first-line, certain medications help, and many people improve substantially with the right care, often a combination.",
      detail:
        "PTSD is a treatable condition, and effective options exist — a message worth holding onto. Leading guidelines, including the VA/DoD Clinical Practice Guideline, recommend trauma-focused psychotherapies (such as Prolonged Exposure, Cognitive Processing Therapy, and EMDR) as the first-line treatment, because they have the strongest evidence for lasting improvement. Medications, particularly certain antidepressants, are also effective and are a good option for people who prefer them, who cannot access trauma-focused therapy, or who need additional support; sometimes therapy and medication are combined. Treatment is individualized: the 'best' approach depends on a person's symptoms, preferences, other health conditions, and what is available, and it is chosen together with a clinician through shared decision-making. Recovery is rarely instantaneous, and some trial and adjustment is normal, but many people experience meaningful relief. The sections that follow describe the main medications; the separate therapy sections cover the psychotherapies in more depth. None of this is individualized advice — a prescriber and care team tailor the actual plan.",
      sources: [
        {
          label: "PTSD Treatment Basics",
          url: "https://www.ptsd.va.gov/understand_tx/tx_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — treatment",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/diagnosis-treatment/drc-20355973",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "overview", "first-line"],
      caution:
        "Educational only. The right treatment plan is individualized and chosen with a qualified clinician.",
    },
    {
      id: "ssris-sertraline-paroxetine",
      title: "SSRIs: sertraline and paroxetine (FDA-approved)",
      summary:
        "Two SSRIs — sertraline and paroxetine — are FDA-approved for PTSD and are among the best-supported medications, helping reduce symptoms across the symptom clusters.",
      detail:
        "Selective serotonin reuptake inhibitors (SSRIs) are antidepressant medications that are also among the best-studied treatments for PTSD. Two of them — sertraline and paroxetine — are specifically approved by the U.S. Food and Drug Administration for PTSD, and guidelines consider SSRIs as a group to have strong evidence for reducing PTSD symptoms across the clusters (intrusion, avoidance, negative mood, and hyperarousal). They are thought to work by gradually adjusting brain chemistry involved in mood and the stress response, and they typically take several weeks to reach their full effect, so patience early on is important. Like all medications they can have side effects (such as nausea, sleep changes, or sexual side effects), which are discussed and monitored by the prescriber, and they should not be stopped abruptly. SSRIs can be used on their own or alongside therapy. Because the right medication, whether to use one at all, dosing, and monitoring are individualized medical decisions, they belong entirely with the prescriber — this entry is educational background only.",
      sources: [
        {
          label: "Clinician's Guide to Medications for PTSD",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Medications for PTSD",
          url: "https://www.ptsd.va.gov/understand_tx/meds_for_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["treatment", "medication", "ssri", "sertraline", "paroxetine"],
      evidence: "established",
      caution:
        "No dosing here — only a prescriber should start, adjust, or stop these medicines. Do not stop an antidepressant abruptly; talk to your clinician.",
    },
    {
      id: "snri-venlafaxine",
      title: "SNRI: venlafaxine",
      summary:
        "Venlafaxine, an SNRI antidepressant, is also recommended in guidelines as an effective medication option for PTSD, though it is not FDA-labeled specifically for PTSD.",
      detail:
        "Venlafaxine is a serotonin-norepinephrine reuptake inhibitor (SNRI), a class of antidepressant that acts on two brain chemical systems. Although it is not FDA-approved specifically for PTSD, strong clinical-trial evidence supports its effectiveness, and the VA/DoD Clinical Practice Guideline recommends it alongside the SSRIs sertraline, paroxetine, and fluoxetine as a medication with good evidence for PTSD. Like SSRIs, it generally takes some weeks to work, can cause side effects (which may include nausea, raised blood pressure at higher doses, sleep changes, and others), should be monitored by the prescriber, and must not be stopped suddenly because of withdrawal effects. The fact that a medication is used 'off-label' (not specifically FDA-labeled for the condition) does not mean it is unproven — venlafaxine is a guideline-recommended choice — but which medication suits a given person depends on their symptoms, other conditions, and preferences. As always, this is general information; the choice and management of any medication rest with the prescriber.",
      sources: [
        {
          label: "Clinician's Guide to Medications for PTSD (recommended medications)",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Medications for PTSD",
          url: "https://www.ptsd.va.gov/understand_tx/meds_for_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["treatment", "medication", "snri", "venlafaxine"],
      evidence: "established",
      caution:
        "Off-label does not mean unproven, but only a prescriber should decide on and manage venlafaxine; do not stop it abruptly.",
    },
    {
      id: "prazosin-nightmares-sleep",
      title: "Prazosin for trauma-related nightmares and sleep",
      summary:
        "Prazosin, a blood-pressure medicine that dampens the adrenaline system, has been used for trauma-related nightmares and sleep disturbance, though recent evidence is mixed and it helps some people more than others.",
      detail:
        "Prazosin is an older medication that lowers blood pressure by blocking the action of noradrenaline (the 'fight-or-flight' chemical) at certain receptors. Because the noradrenergic system is overactive in PTSD and seems linked to nightmares and disrupted sleep, prazosin has been used specifically to target trauma-related nightmares and sleep disturbance rather than the full disorder. The evidence is genuinely mixed: several trials, including in veterans, found it reduced nightmares and improved sleep, but a large multi-site VA trial found no difference from placebo, leading the VA/DoD guideline to conclude there is insufficient evidence to recommend it routinely for nightmares. In practice it still helps some individuals, so it may be tried as part of shared decision-making, with the understanding that responses vary. Because prazosin lowers blood pressure, it can cause dizziness or fainting, especially when starting or increasing the dose, and it interacts with other blood-pressure-lowering drugs and with erectile-dysfunction medications (covered in the drug-interactions section). Whether to try it, and how, is a decision for the prescriber.",
      sources: [
        {
          label: "Clinician's Guide to Medications for PTSD (prazosin; evidence and use)",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Prazosin — MedlinePlus Drug Information",
          url: "https://medlineplus.gov/druginfo/meds/a682245.html",
          publisher: "MedlinePlus (U.S. National Library of Medicine)",
        },
      ],
      tags: ["treatment", "medication", "prazosin", "nightmares", "sleep"],
      evidence: "mixed",
      caution:
        "Prazosin lowers blood pressure and can cause dizziness or fainting, especially at the start; it has important interactions. Use only as directed by a prescriber.",
    },
    {
      id: "medications-cautions-benzodiazepines",
      title: "Medications generally not recommended (benzodiazepines)",
      summary:
        "Benzodiazepines (such as for anxiety or sleep) are generally not recommended for PTSD; guidelines advise against them because they don't treat core symptoms and carry risks.",
      detail:
        "Not every medication that calms anxiety is helpful for PTSD, and one important example is the benzodiazepine class (medicines sometimes used short-term for anxiety or sleep). The VA/DoD Clinical Practice Guideline recommends against using benzodiazepines for PTSD: evidence indicates they do not treat the core symptoms of PTSD, may interfere with the benefits of trauma-focused therapy, and carry risks including sedation, dependence, problems in combination with alcohol or opioids, and potential worsening of some symptoms — concerns that are heightened given how often PTSD co-occurs with substance use. This does not mean these medicines are never used for any reason in any person, but it does mean they are not a recommended PTSD treatment and are approached with caution. People already taking such a medication should not stop it abruptly, as that can be dangerous, and any change should be guided by the prescriber. Knowing what is and isn't recommended can help a person have an informed conversation with their care team.",
      sources: [
        {
          label: "Clinician's Guide to Medications for PTSD (benzodiazepines not recommended)",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "VA/DoD Clinical Practice Guideline for PTSD (medication recommendations)",
          url: "https://www.healthquality.va.gov/guidelines/mh/ptsd/",
          publisher: "U.S. Department of Veterans Affairs / Department of Defense",
        },
      ],
      tags: ["treatment", "medication", "benzodiazepines", "safety", "caution"],
      evidence: "established",
      caution:
        "Never stop a benzodiazepine abruptly — that can be dangerous. Any change should be planned with the prescriber.",
    },
    {
      id: "starting-and-monitoring-medication",
      title: "Starting, monitoring, and combining treatments",
      summary:
        "Medications take weeks to work, need monitoring and sometimes adjustment, shouldn't be stopped suddenly, and can be combined with therapy; close communication with the prescriber is key.",
      detail:
        "Getting the most from PTSD medication involves some practical understanding. Antidepressants usually take several weeks (often four to eight) to reach full effect, so early patience and staying in touch with the prescriber matter; if one medication doesn't help enough or causes troublesome side effects, others can be tried. Doses are typically started low and adjusted, and finding the right fit can take time. These medicines should not be stopped abruptly, because that can cause withdrawal-like effects and symptom return — any plan to stop should be done gradually under guidance. Medication can be used together with trauma-focused therapy, and many people benefit from a combined approach. It also helps to keep one up-to-date list of all medications and supplements and to report new symptoms, side effects, or thoughts of self-harm promptly. None of this replaces individualized medical care: the prescriber decides what to start, how to monitor, and when to change, and they should be the first call with any concern about a PTSD medication.",
      sources: [
        {
          label: "Medications for PTSD (what to expect, monitoring)",
          url: "https://www.ptsd.va.gov/understand_tx/meds_for_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — medications and treatment",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/diagnosis-treatment/drc-20355973",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "medication", "monitoring", "adherence"],
      caution:
        "Report new or worsening thoughts of self-harm to your prescriber right away (or contact 988/911). Do not start or stop medicines without professional guidance.",
    },
  ],
});
