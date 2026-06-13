import { defineSection } from "../types.js";

/**
 * EXPERIMENTAL & EMERGING — frontier directions in RA: preventing RA in at-risk
 * people, precision/personalized therapy choice, tapering toward drug-free
 * remission, newer cellular and targeted approaches, and research into RA's
 * causes. Evidence levels are labeled honestly, with a caution about unproven
 * "cure" clinics.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Directions",
  description:
    "Frontier research in RA — preventing it in at-risk people, personalizing treatment choice, tapering toward drug-free remission, newer cellular and targeted approaches, and uncovering RA's causes — reported with honest evidence levels and a caution about unproven clinics.",
  entries: [
    {
      id: "preventing-ra-at-risk",
      title: "Preventing RA in at-risk people",
      summary:
        "Because RA-related antibodies can appear years before symptoms, researchers are testing whether early treatment of high-risk people can prevent or delay the disease — an investigational idea, not standard care.",
      detail:
        "One of the most exciting frontiers in RA is the possibility of preventing the disease before joints are ever damaged. Because autoantibodies like anti-CCP can be present years before symptoms, it is possible to identify people at high risk — for example, those with these antibodies plus joint aches — and ask whether a short course of treatment can stop RA from developing. Clinical trials have tested existing RA medicines in such at-risk groups to see if they can prevent or delay the onset of clinical RA, an approach that builds on the same logic as the 'window of opportunity.' Some studies have shown encouraging signals that progression can be delayed, while questions remain about who benefits, for how long, and at what risk. This is investigational: preventing RA is an active research area, not an established or routinely available treatment, and identifying and treating people before they have the disease raises its own considerations. Anyone found to be at risk should be guided by specialists and, where appropriate, research studies — not by unproven interventions.",
      sources: [
        {
          label: "Accelerating Medicines Partnership RA/SLE Program (research into RA mechanisms)",
          url: "https://www.niams.nih.gov/grants-funding/funded-research/accelerating-medicines/RA-SLE",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Rheumatoid Arthritis (Arthritis Foundation RA research priorities)",
          url: "https://www.arthritis.org/science/focus/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["experimental", "prevention", "at-risk", "research"],
      evidence: "investigational",
      caution:
        "Preventing RA in at-risk people is investigational, not established care. At-risk individuals should be guided by specialists and legitimate research studies.",
    },
    {
      id: "precision-personalized-therapy",
      title: "Precision medicine: matching the right drug to the person",
      summary:
        "Researchers are seeking biomarkers and molecular signatures to predict which RA drug will work best for a given person, aiming to replace today's trial-and-error sequencing.",
      detail:
        "A major limitation of current RA care is that, although many effective drugs exist, there is no reliable way to know in advance which one will work best for a particular person — so treatment often proceeds by trial and error, switching if a drug does not control the disease. Precision-medicine research aims to change this by finding biomarkers (in blood, genes, or the inflamed joint tissue) and molecular 'signatures' that predict response to specific drug classes, so the most likely-to-help medicine can be chosen first. Large collaborative efforts have been analyzing the cells and molecules in inflamed RA joints in unprecedented detail to identify such patterns and new drug targets. This is an active and promising area, but it is still largely in research: predictive tests are not yet routine, and matching drug to patient remains mostly clinical judgment for now. The hope is that, over time, this work will make RA treatment faster, more effective, and less hit-or-miss.",
      sources: [
        {
          label: "Accelerating Medicines Partnership RA/SLE Program (deep analysis of RA tissue)",
          url: "https://www.niams.nih.gov/grants-funding/funded-research/accelerating-medicines/RA-SLE",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Rheumatoid Arthritis (research toward better-targeted treatment)",
          url: "https://www.arthritis.org/science/focus/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["experimental", "precision-medicine", "biomarkers", "research"],
      evidence: "emerging",
    },
    {
      id: "tapering-drug-free-remission",
      title: "Tapering toward drug-free remission",
      summary:
        "For people in sustained remission, research is exploring whether medicines can be carefully reduced or even stopped, and how to predict who can do so without the disease flaring back.",
      detail:
        "As more people reach sustained remission on modern treatment, a natural question follows: can the medicines be reduced, or even stopped, without the disease returning? Research and current guidance suggest that, for people who have maintained remission or low disease activity for a sustained period, it can be reasonable to carefully taper treatment — stepping doses down gradually under close monitoring — with the possibility of reaching 'drug-free remission' in some. Studies indicate a meaningful minority can stop medication and stay in remission, but relapse is common and hard to predict, so tapering is done cautiously and is usually reversible if the disease flares. Active research is trying to identify who can safely taper and how best to do it (for example, using ultrasound or biomarkers to confirm there is no hidden inflammation before reducing drugs). The key point is that tapering is a shared, monitored decision with the rheumatologist, balancing the appeal of fewer medicines against the risk of losing hard-won control — not something to attempt by simply stopping treatment.",
      sources: [
        {
          label: "Clinical Practice Guidelines (ACR — treat-to-target and tapering principles)",
          url: "https://rheumatology.org/clinical-practice-guidelines",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (remission and treatment over time)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["experimental", "tapering", "remission", "research"],
      evidence: "emerging",
      caution:
        "Never stop or reduce RA medicines on your own. Tapering toward drug-free remission is done only under close monitoring with the rheumatologist, because relapse is common.",
    },
    {
      id: "new-targets-and-cellular-therapies",
      title: "New drug targets and cellular therapies",
      summary:
        "Beyond today's biologics and JAK inhibitors, researchers are pursuing new molecular targets and experimental cell-based therapies for hard-to-treat RA — early-stage work, not approved treatment.",
      detail:
        "The mapping of RA's inflammatory machinery continues to generate new potential treatments. Researchers are investigating additional molecular targets and signaling pathways beyond the established TNF, IL-6, T-cell, B-cell, and JAK approaches, including novel small molecules and biologics aimed especially at 'refractory' RA that does not respond to current drugs. There is also early experimental interest in cell-based strategies — for example, approaches that reset or retrain parts of the immune system — and in therapies adapted from other fields. These directions are at varying, mostly early, stages of research: some are in laboratory or early clinical study and none should be assumed to be available or proven. Funders and research networks have specifically prioritized understanding treatment-resistant RA, since a subset of people do not achieve good control with existing options. For now, these remain investigational; people with hard-to-treat RA are best served by working with specialists and, where suitable, considering participation in legitimate clinical trials.",
      sources: [
        {
          label: "Arthritis Foundation Invests in Refractory Rheumatoid Arthritis Research",
          url: "https://www.arthritis.org/news/press-releases-and-statements/arthritis-foundation-funds-refractory-ra-research",
          publisher: "Arthritis Foundation",
        },
        {
          label: "Rheumatoid Arthritis — research on RA mechanisms and treatments",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["experimental", "new-targets", "cellular-therapy", "refractory-ra", "research"],
      evidence: "investigational",
    },
    {
      id: "understanding-causes-microbiome",
      title: "Understanding RA's causes: genes, environment, and the microbiome",
      summary:
        "Research into why RA develops — gene–environment interactions, where citrullination begins, and the role of the gut and mouth microbiome — could eventually enable earlier intervention and prevention.",
      detail:
        "Much RA research is aimed not at a new drug but at the more fundamental question of why the disease develops in the first place, since better answers could lead to prevention and earlier, more precise treatment. Scientists are studying how susceptibility genes (such as the HLA 'shared epitope') interact with environmental exposures like smoking; where and how the citrullination of proteins and the earliest autoantibody responses begin (with interest in sites such as the lungs, gums, and gut); and whether the makeup of the microbiome — the communities of microbes in the gut and mouth — influences risk or disease activity. These lines of inquiry are scientifically promising but still developing, and they have not yet produced microbiome-based treatments or definitive preventive strategies. They matter because they could explain the pre-clinical phase of RA and reveal new ways to interrupt the disease early. For now, the established, actionable takeaway from causation research remains that not smoking lowers risk and improves outcomes; microbiome-based 'cures' marketed to patients are not supported by evidence.",
      sources: [
        {
          label: "Rheumatoid Arthritis — Symptoms, Causes, & Risk Factors (causes under study)",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Accelerating Medicines Partnership RA/SLE Program (mechanisms of disease)",
          url: "https://www.niams.nih.gov/grants-funding/funded-research/accelerating-medicines/RA-SLE",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["experimental", "causation", "microbiome", "genetics", "research"],
      evidence: "emerging",
      caution:
        "Microbiome-based or 'root cause' RA cures marketed directly to patients are not supported by current evidence. Be wary of clinics promising cures outside legitimate research.",
    },
  ],
});
