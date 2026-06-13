import { defineSection } from "../types.js";

/**
 * Experimental & emerging — research-stage and recently emerging directions in
 * bipolar treatment, reported with HONEST evidence labels: ketamine research for
 * bipolar depression (investigational/emerging), brain-stimulation approaches
 * (TMS), and the broader hunt for better treatments and biomarkers, plus a clear
 * caution about unproven clinics and "miracle" treatments.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Approaches",
  description:
    "Frontier directions in bipolar disorder — ketamine research for bipolar depression, brain-stimulation approaches, and the search for better treatments and biomarkers — reported with honest evidence levels and a caution about unproven, for-profit clinics.",
  entries: [
    {
      id: "experimental-overview",
      title: "How to think about emerging treatments",
      summary:
        "Research is actively seeking better bipolar treatments, but 'emerging' is not the same as 'proven'; honest evidence labels matter, and new approaches should be approached through regulated trials and one's own care team.",
      detail:
        "There is genuine, encouraging research aimed at better treatments for bipolar disorder — faster-acting options for depression, more targeted medications, brain-stimulation methods, and tools to predict who will respond to what. It is important to approach this area with both hope and realism. 'Emerging' or 'investigational' means a treatment is still being studied and is not yet established or proven for general use, and early results — even striking ones — can fade or fail to hold up in larger, more rigorous trials. The honest evidence labels in this section reflect that. Legitimate experimental treatments are accessed through regulated clinical trials (registered on databases such as ClinicalTrials.gov) with oversight and informed consent, or as approved therapies for specific indications. Anyone interested in an emerging option should discuss it with their own psychiatrist, who can advise whether it fits their situation and whether a reputable trial is available — and should be wary of anything marketed as a guaranteed or 'miracle' cure.",
      sources: [
        {
          label: "Bipolar Disorder — research and finding clinical trials",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "ClinicalTrials.gov — registry of regulated clinical studies",
          url: "https://clinicaltrials.gov/",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
      ],
      tags: ["experimental", "overview", "research"],
      evidence: "emerging",
      caution:
        "'Emerging' is not 'proven.' Discuss any experimental option with your own psychiatrist and access it only through a regulated trial or approved indication.",
    },
    {
      id: "ketamine-bipolar-depression",
      title: "Ketamine for bipolar depression (research)",
      summary:
        "Studies show ketamine can rapidly reduce depression symptoms in bipolar disorder within hours, but its use specifically for bipolar depression remains investigational and is studied carefully because of risks.",
      detail:
        "Ketamine has attracted intense research interest because, unlike standard antidepressants that take weeks, it can reduce depression symptoms within hours. NIMH researchers reported that a single intravenous dose produced rapid, marked improvement in depression in people with treatment-resistant bipolar depression (in studies where ketamine was added to a mood stabilizer such as lithium or valproate), though the effect tended to be short-lived, lasting on the order of about a week. This is a genuinely important line of research, but several caveats are essential: its use specifically for bipolar depression is investigational rather than an established, approved treatment; the durability, optimal dosing, and long-term safety are still being studied; ketamine carries risks including dissociation, blood-pressure effects, and potential for misuse; and there are theoretical concerns about provoking mania that require careful monitoring. (A related medication, esketamine nasal spray, is FDA-approved for treatment-resistant unipolar major depression, not for bipolar disorder.) Ketamine for bipolar depression should only be considered within proper medical and, ideally, research settings, guided by a specialist.",
      sources: [
        {
          label: "Cracking the Ketamine Code (NIMH ketamine research)",
          url: "https://www.nimh.nih.gov/news/science-updates/2023/cracking-the-ketamine-code",
          publisher: "NIH / NIMH",
        },
        {
          label: "Experimental medication lifts depression symptoms in bipolar disorder within an hour",
          url: "https://www.nimh.nih.gov/news/science-updates/2010/experimental-medication-lifts-depression-symptoms-in-bipolar-disorder-within-an-hour",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["experimental", "ketamine", "bipolar-depression", "research"],
      evidence: "investigational",
      caution:
        "Ketamine for bipolar depression is investigational, can cause dissociation and other risks, and could theoretically trigger mania. Consider it only under specialist supervision, ideally within a regulated trial.",
    },
    {
      id: "brain-stimulation-tms",
      title: "Brain-stimulation approaches (TMS and others)",
      summary:
        "Transcranial magnetic stimulation (TMS) is an established, noninvasive treatment for unipolar depression and is being studied in bipolar depression, where its role is still emerging.",
      detail:
        "Brain-stimulation therapies use magnetic or electrical fields to alter brain activity. Repetitive transcranial magnetic stimulation (rTMS) — a noninvasive method using a magnetic coil placed against the scalp — is FDA-approved and well established for major (unipolar) depression and is generally safe and well tolerated, with side effects such as scalp discomfort and headache and a rare risk of seizure. Its use specifically for bipolar depression is an area of active research rather than established practice, so it is best regarded as emerging for that indication, and any use in bipolar disorder requires care because of the theoretical possibility of triggering mania. (ECT, by contrast, is an established brain-based treatment for severe bipolar episodes — see Treatments.) Newer and accelerated stimulation protocols and other approaches are being studied. As with other emerging options, whether a brain-stimulation therapy is appropriate for a particular person with bipolar disorder is a specialist decision, and access to investigational protocols should be through regulated settings.",
      sources: [
        {
          label: "Brain Stimulation Therapies (TMS and others)",
          url: "https://www.nimh.nih.gov/health/topics/brain-stimulation-therapies/brain-stimulation-therapies",
          publisher: "NIH / NIMH",
        },
        {
          label: "Evaluation of rTMS in the Treatment of Mood Disorders (clinical study)",
          url: "https://clinicaltrials.gov/study/NCT00001545",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
      ],
      tags: ["experimental", "tms", "brain-stimulation", "research"],
      evidence: "emerging",
      caution:
        "TMS is established for unipolar depression but still emerging for bipolar depression, where it could theoretically affect mood stability. Any use should be specialist-guided.",
    },
    {
      id: "novel-agents-and-biomarkers",
      title: "Novel agents, biomarkers, and personalized treatment",
      summary:
        "Researchers are developing new medications and looking for biological and genetic markers to predict treatment response, aiming to make bipolar treatment faster and more individualized — promising but not yet routine.",
      detail:
        "A broad research effort aims to improve bipolar treatment in several ways: developing new medications with different mechanisms and fewer side effects; finding faster-acting treatments for the depressive phase that is so often disabling; and identifying biological, genetic, brain-imaging, or other markers that could predict which person will respond to which treatment, so care could be personalized rather than found by trial and error. NIMH and academic researchers are studying the genetics and brain biology of bipolar disorder toward these goals. This work is genuinely promising and is the source of future advances, but it is largely still in the research phase: predictive biomarkers and most novel agents are not yet part of routine care, and findings need confirmation before they change practice. For people living with bipolar disorder now, the practical implication is that participating in well-regulated research (where suitable and desired) can contribute to progress, while day-to-day care continues to rest on the established, effective treatments available today.",
      sources: [
        {
          label: "Bipolar Disorder — ongoing research directions",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — genetics research",
          url: "https://medlineplus.gov/genetics/condition/bipolar-disorder/",
          publisher: "MedlinePlus Genetics (NIH / U.S. National Library of Medicine)",
        },
      ],
      tags: ["experimental", "biomarkers", "personalized", "research"],
      evidence: "emerging",
    },
    {
      id: "unproven-clinics-caution",
      title: "Caution: unproven clinics and 'miracle' treatments",
      summary:
        "Be wary of clinics or products marketing guaranteed 'cures' or unregulated treatments for bipolar disorder; legitimate experimental therapies come through approved trials or as approved treatments, not as expensive, unproven promises.",
      detail:
        "Alongside real scientific progress, there are clinics and products that market unregulated or exaggerated treatments for bipolar disorder — sometimes high-priced infusions, supplements, devices, or 'cures' promised outside the evidence base and proper oversight. These can be costly, may be ineffective or unsafe, and can be especially harmful if they lead someone to stop proven treatment. Helpful warning signs include guarantees of a cure, claims that a single treatment fixes a complex lifelong condition, pressure to pay large sums out of pocket, dismissal of mainstream medicine, and treatments offered outside any registered, regulated trial. Legitimate experimental options are available either as approved treatments for specific indications or through clinical trials registered on databases like ClinicalTrials.gov, with informed consent and oversight, and they are best pursued in consultation with one's own psychiatrist. Healthy skepticism toward any 'miracle' offer — and a conversation with a trusted clinician before trying anything new — protects both health and finances.",
      sources: [
        {
          label: "ClinicalTrials.gov — how legitimate trials are registered and regulated",
          url: "https://clinicaltrials.gov/",
          publisher: "ClinicalTrials.gov (U.S. National Library of Medicine)",
        },
        {
          label: "Bipolar Disorder — finding reputable care and trials",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["experimental", "safety", "unproven", "caution"],
      evidence: "no-convincing-evidence",
      caution:
        "Be skeptical of 'miracle cures' or unregulated treatments for bipolar disorder. Discuss any experimental therapy with your own psychiatrist, and never stop proven treatment for an unproven one.",
    },
  ],
});
