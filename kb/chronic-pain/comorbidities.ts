import { defineSection } from "../types.js";

/**
 * Comorbidities & co-occurring conditions — which conditions commonly travel
 * with chronic pain and the COMPOUNDING considerations when they overlap. This
 * is the grounding for multi-condition reasoning: the bidirectional pain–mood–
 * sleep triad, substance use disorder, and physical conditions that both cause
 * and result from chronic pain, plus the resulting polypharmacy.
 *
 * Educational only. Coordinating overlapping (sometimes conflicting) management
 * across conditions is the job of the care team, including a pharmacist for the
 * medication picture.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with chronic pain and why it compounds: depression and anxiety, insomnia and sleep disorders, substance use disorder, the bidirectional pain–mood–sleep relationship, overlapping physical conditions, and the resulting polypharmacy.",
  entries: [
    {
      id: "comorbidities-overview",
      title: "Chronic pain rarely travels alone",
      summary:
        "Chronic pain commonly co-occurs with depression, anxiety, sleep problems, and other conditions that interact with it, so good care treats the whole person rather than the painful part in isolation.",
      detail:
        "Chronic pain seldom exists by itself. It frequently co-occurs with mental-health conditions (especially depression and anxiety), sleep disorders, substance use problems, and a range of physical conditions, and these overlaps are not coincidental — they share biology and they feed one another. The interactions run in both directions: chronic pain raises the risk of depression, insomnia, and other conditions, and those conditions in turn intensify pain and make it harder to manage. This compounding, and sometimes conflicting management considerations, is why comprehensive pain care looks beyond the pain to screen for and treat what accompanies it, and why coordination across the care team matters so much. Treating an accompanying condition — lifting depression, restoring sleep, addressing a substance use disorder — often improves the pain itself, while ignoring it undermines pain treatment. The entries here map the conditions that most commonly travel with chronic pain and how they interact, as grounding for thinking about more than one condition at once.",
      sources: [
        {
          label: "Chronic Pain (co-occurring conditions and whole-person care)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "Chronic Pain (associated conditions)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["comorbidity", "overview", "multi-condition"],
    },
    {
      id: "depression-and-anxiety",
      title: "Depression and anxiety",
      summary:
        "Depression and anxiety are much more common in people with chronic pain and worsen it; because the relationship is two-way, treating mood and pain together works better than treating either alone.",
      detail:
        "Depression and anxiety are among the most common companions of chronic pain, occurring far more often than in the general population. The link is bidirectional and biological: persistent pain, lost activities, poor sleep, and uncertainty drive low mood and worry, while depression and anxiety amplify pain perception, sap motivation for self-care, and make coping harder — so the conditions reinforce one another in a cycle. This compounding has direct treatment implications. Some medicines used for pain (notably the SNRI duloxetine and tricyclic antidepressants) can help both neuropathic/nociplastic pain and mood, an example of one treatment serving two conditions, though serotonergic combinations must be checked for interactions. Psychological therapies such as CBT and ACT likewise benefit pain and mood together. Because untreated depression and anxiety worsen pain outcomes and, in severe cases, carry a risk of self-harm, screening for and treating them is a core part of pain care rather than an optional add-on. Coordinating mental-health and pain treatment — ideally in an integrated way — typically improves both.",
      sources: [
        {
          label: "Chronic Pain (depression and anxiety as comorbidities)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "Chronic Pain (mental-health comorbidity)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["comorbidity", "depression", "anxiety", "mental-health", "multi-condition"],
      evidence: "established",
    },
    {
      id: "insomnia-and-sleep-disorders",
      title: "Insomnia and sleep disorders",
      summary:
        "Sleep problems and chronic pain are tightly intertwined, each worsening the other; treating insomnia or a sleep disorder is therefore part of treating the pain, not a separate issue.",
      detail:
        "Sleep disorders, especially insomnia, are extremely common in chronic pain and form one side of a tightly linked triad with pain and mood. Pain disrupts sleep, and poor sleep lowers the pain threshold and worsens mood the next day, so the three problems compound and can entrench one another. Obstructive sleep apnea also co-occurs with chronic pain and is particularly important to identify in anyone taking opioids or sedatives, because these drugs further suppress breathing during sleep and raise overdose risk in people with sleep-disordered breathing. The compounding nature of the pain–sleep relationship means that addressing sleep is a genuine pain treatment: cognitive behavioral therapy for insomnia (CBT-I) is effective and avoids medication interactions, sleep-disorder treatment helps, and good sleep habits support both pain and mood. Caution is needed with sleep medicines, since several (benzodiazepines, Z-drugs, sedating antihistamines) add dangerously to opioid sedation. Because of these interlocking effects and safety considerations, sleep is assessed and managed as an integral part of multi-condition pain care.",
      sources: [
        {
          label: "Mind and Body Practices for Sleep Disorders: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/psychological-and-physical-approaches-for-sleep-disorders-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Chronic Pain (sleep disturbance and pain)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["comorbidity", "insomnia", "sleep-apnea", "sleep", "multi-condition"],
      evidence: "established",
    },
    {
      id: "pain-mood-sleep-triad",
      title: "The bidirectional pain–mood–sleep relationship",
      summary:
        "Pain, mood, and sleep form a three-way loop in which each worsens the others; recognizing the loop is key, because improving any one of them tends to help the rest.",
      detail:
        "A central concept in chronic-pain care is the bidirectional, three-way relationship between pain, mood, and sleep. Pain disturbs sleep and lowers mood; poor sleep heightens pain sensitivity and worsens mood; and depression or anxiety amplify pain and degrade sleep. Each pairing runs in both directions, so the three can spiral downward together — but this also means there are several entry points for improvement, because gains in one area tend to ripple to the others. Treating depression can improve sleep and reduce pain; restoring sleep can lift mood and ease pain; reducing pain can improve both sleep and mood. This is why effective care rarely targets pain in isolation and instead addresses the whole triad, often with overlapping treatments: exercise, CBT or ACT, sleep interventions, and, where appropriate, medicines that help more than one problem. Understanding the loop also helps people make sense of bad stretches — a poor night or a low mood can flare the pain — and reframes managing sleep and mood as powerful, legitimate pain-management strategies rather than side concerns.",
      sources: [
        {
          label: "Chronic Pain (interplay of pain, mood, and sleep)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["comorbidity", "pain-mood-sleep", "bidirectional", "multi-condition"],
      evidence: "established",
    },
    {
      id: "substance-use-disorder",
      title: "Substance use disorder",
      summary:
        "Chronic pain and substance use disorders (including opioid and alcohol use disorder) can co-occur and complicate each other; this calls for careful, compassionate, coordinated care — not denial of pain treatment or of addiction help.",
      detail:
        "Substance use disorders, including opioid and alcohol use disorder, can co-occur with chronic pain, and each complicates the other. Long-term opioid treatment can, in a minority of people, lead to opioid use disorder, and people with a history of substance use disorder are at higher risk of harm from opioids — which is why guidelines emphasize assessing this risk, favoring non-opioid treatments, and offering naloxone, rather than simply avoiding or withholding pain care. Alcohol is its own concern: it worsens sleep and mood, interacts dangerously with opioids and sedatives, and stresses the liver alongside acetaminophen. The compounding works both ways — untreated pain can drive substance use as people seek relief, and substance use worsens pain, mood, and function. The key principles are coordination and compassion: pain and substance use disorder are both real medical conditions that deserve treatment, effective treatments for opioid use disorder exist, and people who are struggling need support and access to care, not blame or abandonment. Managing this overlap well requires the care team, often including addiction-medicine expertise, to balance pain relief with safety.",
      sources: [
        {
          label: "2022 CDC Clinical Practice Guideline (substance use disorder and opioid risk)",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
        {
          label: "Prescription Opioids DrugFacts (opioid use disorder and treatment)",
          url: "https://nida.nih.gov/publications/drugfacts/prescription-opioids",
          publisher: "NIH / NIDA",
        },
      ],
      tags: ["comorbidity", "substance-use-disorder", "opioid", "alcohol", "multi-condition", "safety"],
      evidence: "established",
      caution:
        "Substance use disorder is a treatable medical condition. If you are struggling with opioids or alcohol alongside pain, ask your care team for help — effective treatment exists.",
    },
    {
      id: "physical-comorbidities-and-polypharmacy",
      title: "Overlapping physical conditions and polypharmacy",
      summary:
        "Conditions like arthritis, diabetes, and heart and kidney disease both cause and complicate chronic pain, and managing several conditions means many medicines — raising interaction risks that need coordinated review.",
      detail:
        "Chronic pain overlaps with many physical conditions, in both directions. Some directly cause pain — osteoarthritis and inflammatory arthritis, diabetes (through neuropathy), and others — so treating the underlying disease is part of pain care. Others share risk factors or complicate treatment: heart, kidney, liver, and stomach conditions all narrow the safe options for common pain medicines (NSAIDs strain the kidneys and heart and can cause ulcers; acetaminophen stresses the liver; many drugs are cleared by the kidneys), and obesity both worsens joint pain and accompanies several of these conditions. The result is often polypharmacy — several conditions meaning several medicines — which raises the risk of drug interactions (see the Key Drug Interactions section), cumulative side effects, and a heavy self-care burden. Different conditions can also pull treatment in different directions, where the best choice for the pain must be balanced against its effect on another organ or disease. Managing this well depends on coordination: a care team that sees the whole picture, periodic medication review and reconciliation (a role pharmacists are especially suited to), and simplifying regimens where possible. The combined plan — not any single condition's ideal in isolation — is what good multi-condition care optimizes.",
      sources: [
        {
          label: "Chronic Pain (overlapping conditions and treatment constraints)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "NSAIDs (cautions with heart, kidney, stomach, and other conditions)",
          url: "https://www.nhs.uk/medicines/nsaids/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["comorbidity", "polypharmacy", "arthritis", "kidney", "coordination", "multi-condition"],
      caution:
        "When several conditions and medicines stack up, ask for a medication review with the care team or pharmacist — coordinating the whole plan is safer than optimizing one condition alone.",
    },
  ],
});
