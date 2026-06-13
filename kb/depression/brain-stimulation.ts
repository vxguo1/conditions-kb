import { defineSection } from "../types.js";

/**
 * BRAIN-STIMULATION TREATMENTS — established neuromodulation options for
 * depression, especially when medications and therapy have not been enough:
 * transcranial magnetic stimulation (TMS), electroconvulsive therapy (ECT),
 * and a brief note on newer/less-common approaches. Honest about what they are,
 * who they're for, and their effects and side effects.
 *
 * Educational only — eligibility and decisions belong with the specialist team.
 */
export const brainStimulation = defineSection({
  id: "brain-stimulation",
  title: "Brain-Stimulation Treatments",
  description:
    "Neuromodulation options for depression, mainly when other treatments haven't worked: transcranial magnetic stimulation (TMS) and electroconvulsive therapy (ECT), what they involve, who they help, and their effects and side effects. Educational only.",
  entries: [
    {
      id: "brain-stimulation-overview",
      title: "What brain-stimulation treatments are",
      summary:
        "Brain-stimulation therapies use electrical or magnetic energy to influence brain activity involved in mood; they are generally used for more severe or treatment-resistant depression when medications and therapy haven't been enough.",
      detail:
        "Brain-stimulation (neuromodulation) therapies treat depression by using electrical currents or magnetic fields to change the activity of brain circuits involved in mood. They are typically considered when depression is severe or has not responded adequately to medications and psychotherapy, rather than as a first step. The best-established options are transcranial magnetic stimulation (TMS) and electroconvulsive therapy (ECT); research continues on others. These treatments can be highly effective for the right person, including some who have struggled for a long time, which makes them an important part of the overall picture of options — a reminder that 'nothing has worked' rarely means nothing can. They are delivered by specialist teams with appropriate evaluation and monitoring. The descriptions here are educational, to demystify what these treatments involve; whether any of them is appropriate for an individual is a decision made with a psychiatrist or specialized clinician after careful assessment.",
      sources: [
        {
          label: "Brain Stimulation Therapies — overview",
          url: "https://www.nimh.nih.gov/health/topics/brain-stimulation-therapies/brain-stimulation-therapies",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["brain-stimulation", "neuromodulation", "treatment", "mental-health"],
    },
    {
      id: "tms",
      title: "Transcranial magnetic stimulation (TMS)",
      summary:
        "TMS uses focused magnetic pulses to stimulate mood-related areas of the brain; it is non-invasive, done in an office over several weeks without anesthesia, and is used for depression that hasn't responded to medication.",
      detail:
        "Transcranial magnetic stimulation (TMS), often called repetitive TMS (rTMS), uses an electromagnetic coil placed against the scalp to deliver focused magnetic pulses to a region of the brain involved in mood regulation (commonly the left prefrontal cortex). It is non-invasive and does not require anesthesia: a person stays awake, and a typical course involves daily sessions over several weeks, after which many can resume normal activities the same day. TMS is FDA-cleared for depression that has not responded to medication, and accelerated protocols delivering more sessions in a shorter time are also in use. Side effects are usually mild, such as scalp discomfort or headache during or after sessions; a rare risk of seizure means people are screened beforehand. Because it avoids the systemic side effects of medication and the memory effects of ECT, TMS is an appealing option for many with treatment-resistant depression. Suitability, the specific protocol, and monitoring are determined by the treating clinician; this is educational information only.",
      sources: [
        {
          label: "Brain Stimulation Therapies — transcranial magnetic stimulation",
          url: "https://www.nimh.nih.gov/health/topics/brain-stimulation-therapies/brain-stimulation-therapies",
          publisher: "NIH / NIMH",
        },
        {
          label: "Treatment-resistant depression — rTMS",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/in-depth/treatment-resistant-depression/art-20044324",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["brain-stimulation", "tms", "rtms", "treatment-resistant", "mental-health"],
      evidence: "established",
    },
    {
      id: "ect",
      title: "Electroconvulsive therapy (ECT)",
      summary:
        "ECT delivers a brief electrical stimulus under general anesthesia to induce a controlled seizure; it is one of the most effective treatments for severe or treatment-resistant depression, with memory effects as its main drawback.",
      detail:
        "Electroconvulsive therapy (ECT) is a procedure, done under general anesthesia, in which a carefully controlled electrical stimulus briefly induces a seizure in the brain. Despite its frightening reputation from the past, modern ECT is a safe, refined, and humane medical procedure performed with anesthesia and muscle relaxants, and it is among the most effective treatments available for severe depression — particularly when symptoms are life-threatening, include psychosis, or have not responded to other treatments, or when a fast response is needed. It is usually given as a series of treatments over several weeks. The most notable side effect is memory difficulty, especially around the time of treatment, which is often temporary, though some memory gaps can persist; techniques and electrode placements have been refined to reduce this. ECT can be genuinely life-saving for people in severe crisis. The decision to use it involves a careful discussion of benefits and risks and informed consent, made with a specialist team; this entry is educational background, not a recommendation.",
      sources: [
        {
          label: "Brain Stimulation Therapies — electroconvulsive therapy",
          url: "https://www.nimh.nih.gov/health/topics/brain-stimulation-therapies/brain-stimulation-therapies",
          publisher: "NIH / NIMH",
        },
        {
          label: "Electroconvulsive therapy (ECT) — overview",
          url: "https://www.mayoclinic.org/tests-procedures/electroconvulsive-therapy/about/pac-20393894",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["brain-stimulation", "ect", "severe-depression", "treatment-resistant", "mental-health"],
      evidence: "established",
    },
    {
      id: "other-neuromodulation",
      title: "Other neuromodulation approaches",
      summary:
        "Additional brain-stimulation methods — such as vagus nerve stimulation and, in research, deep brain stimulation — exist for difficult cases, with varying evidence and availability.",
      detail:
        "Beyond TMS and ECT, several other neuromodulation approaches are used or studied for depression that has been hard to treat. Vagus nerve stimulation (VNS) uses an implanted device to send regular signals to the brain via the vagus nerve and is approved for certain cases of long-term, treatment-resistant depression, though its benefit tends to build slowly over months. Magnetic seizure therapy and other variations of stimulation are also being explored. Deep brain stimulation (DBS), which involves surgically implanted electrodes, is investigational for depression and studied only in research settings for very severe, otherwise unresponsive illness. These approaches differ widely in how established they are, how invasive they are, and how available they are, and they are reserved for specific, often specialist-managed situations. The honest summary is that the field offers a growing range of options for difficult depression, some established and some still experimental, and any of them should be considered only with expert evaluation. This is educational information, not advice.",
      sources: [
        {
          label: "Brain Stimulation Therapies — VNS, DBS, and other approaches",
          url: "https://www.nimh.nih.gov/health/topics/brain-stimulation-therapies/brain-stimulation-therapies",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["brain-stimulation", "vns", "dbs", "neuromodulation", "mental-health"],
      evidence: "emerging",
    },
  ],
});
