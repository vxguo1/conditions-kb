import { defineSection } from "../types.js";

/**
 * COMPLICATIONS — the wider consequences of chronic pain and of some of its
 * treatments: the toll on mental health and sleep, physical deconditioning,
 * disability and lost work, social isolation, and treatment-related harms
 * (opioid dependence, medication side effects). These are partly preventable,
 * which is why comprehensive care addresses them early.
 */
export const complications = defineSection({
  id: "complications",
  title: "Complications & Long-Term Impact",
  description:
    "The wider toll of chronic pain and its treatment: mental-health and sleep consequences, physical deconditioning, disability and lost work, social isolation, and treatment-related harms such as opioid dependence and medication side effects.",
  entries: [
    {
      id: "mental-health-consequences",
      title: "Mental-health consequences",
      summary:
        "Persistent pain substantially raises the risk of depression, anxiety, and — in some — thoughts of self-harm; these are complications to watch for and treat, not signs of weakness.",
      detail:
        "Among the most significant consequences of chronic pain are its effects on mental health. Living with ongoing pain, disrupted sleep, lost activities, and uncertainty markedly raises the risk of depression and anxiety, which are far more common in people with chronic pain than in the general population. This is a two-way street — pain worsens mood and low mood worsens pain — so the two can spiral together if not addressed. In more severe cases, chronic pain and accompanying depression can lead to hopelessness and thoughts of self-harm or suicide, a recognized and serious risk that warrants attention. None of this reflects weakness; it is a predictable consequence of a hard, persistent condition and the nervous-system links between pain and mood. The practical message is that monitoring and treating mental health is an integral part of pain care, that effective help exists, and that anyone experiencing severe low mood, hopelessness, or thoughts of self-harm should reach out urgently to their care team, a crisis line, or emergency services.",
      sources: [
        {
          label: "Chronic Pain (depression, anxiety, and mental-health impact)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Chronic Pain (psychological consequences)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["complication", "depression", "anxiety", "mental-health", "safety"],
      caution:
        "If chronic pain leads to hopelessness or thoughts of self-harm, seek help urgently — contact a crisis line, your care team, or emergency services.",
    },
    {
      id: "sleep-and-fatigue",
      title: "Sleep disruption and fatigue",
      summary:
        "Chronic pain commonly wrecks sleep, and the resulting fatigue worsens pain, mood, and concentration — a cycle that becomes a complication in its own right.",
      detail:
        "Disturbed sleep is one of the most common and burdensome consequences of chronic pain. Pain makes it hard to fall asleep, causes frequent waking, and reduces deep, restorative sleep, while some pain conditions (and some medicines) further fragment it. The result is daytime fatigue, low energy, and difficulty concentrating — sometimes called 'brain fog' — that affect work, mood, relationships, and the ability to follow a pain-management plan. Crucially, poor sleep also turns up pain sensitivity, so the sleep problem feeds back into the pain, creating a self-reinforcing cycle that can become a major complication. Because of this, sleep problems are not just an unfortunate side effect to endure; they are a target for treatment, addressed through sleep habits, cognitive behavioral therapy for insomnia, treating sleep disorders like sleep apnea, and managing pain at night. Breaking the pain-sleep cycle frequently improves not only rest and energy but the pain and mood as well, which is why sleep is given real attention in comprehensive pain care.",
      sources: [
        {
          label: "Chronic Pain (sleep disturbance and fatigue)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Mind and Body Practices for Sleep Disorders: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/psychological-and-physical-approaches-for-sleep-disorders-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complication", "sleep", "fatigue", "insomnia"],
    },
    {
      id: "deconditioning-and-disability",
      title: "Physical deconditioning and disability",
      summary:
        "Avoiding activity because of pain leads to weaker muscles, stiffer joints, and lost fitness, which increases pain and disability over time — a largely preventable downward spiral.",
      detail:
        "A common and damaging consequence of chronic pain is physical deconditioning. When pain leads a person to avoid movement and rest excessively — an understandable response — muscles weaken, joints stiffen, balance and cardiovascular fitness decline, and weight may increase. This deconditioning makes activity harder and more painful, which encourages more avoidance, producing a downward spiral of rising disability. Fear of movement (kinesiophobia) and the belief that hurting means harming reinforce the cycle. Chronic pain is, indeed, one of the leading causes of long-term disability and activity limitation worldwide, with chronic low back pain a major contributor. The encouraging flip side is that much of this is preventable and even reversible: graded activity, exercise, and physical therapy rebuild strength and capacity, and pain education that 'hurt does not equal harm' helps overcome the fear driving avoidance. Recognizing deconditioning as a complication — rather than an inevitable part of the pain — reframes staying active as protective, and is a central reason movement sits at the heart of pain management.",
      sources: [
        {
          label: "Chronic Pain (deconditioning, disability, and activity)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "Pain (chronic pain and disability)",
          url: "https://www.ninds.nih.gov/health-information/disorders/pain",
          publisher: "NIH / NINDS",
        },
      ],
      tags: ["complication", "deconditioning", "disability", "kinesiophobia"],
    },
    {
      id: "social-and-economic-impact",
      title: "Social isolation, work, and economic impact",
      summary:
        "Chronic pain can shrink social life, harm relationships, and reduce or end work, with real financial consequences — impacts that worsen wellbeing and pain and deserve support and adaptation.",
      detail:
        "Beyond the body, chronic pain takes a heavy social and economic toll. As pain limits activities, people may withdraw from hobbies, social events, and relationships, leading to isolation and loneliness that worsen mood and, in turn, pain. Relationships with partners, family, and friends can become strained, especially when the pain is invisible and hard for others to understand, and roles within a household may shift. Work is often affected: chronic pain is a leading reason for reduced productivity, absence, and job loss, which brings financial stress that adds another layer of difficulty. These social and economic impacts are not peripheral — they are part of the burden of the condition and feed back into the biopsychosocial cycle that sustains pain. They are also reasons that comprehensive care looks beyond the clinic: occupational support and workplace adjustments, help maintaining social connection, peer support, and addressing financial and practical stressors all matter. Treating chronic pain well means helping a person keep, or rebuild, a connected and meaningful life, not just lowering a pain score.",
      sources: [
        {
          label: "Chronic Pain (impact on work, relationships, and society)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Chronic Pain (social and functional impact)",
          url: "https://medlineplus.gov/chronicpain.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["complication", "isolation", "work", "economic"],
    },
    {
      id: "opioid-related-harms",
      title: "Opioid dependence, use disorder, and overdose",
      summary:
        "Long-term opioid use can lead to tolerance, physical dependence, and in some people opioid use disorder, plus a serious risk of overdose — treatment-related harms that careful prescribing and monitoring aim to prevent.",
      detail:
        "Some of the most serious complications in chronic pain arise not from the pain itself but from its treatment, particularly long-term opioid use. Over time the body develops tolerance (needing more for the same effect) and physical dependence (withdrawal symptoms if the drug is stopped abruptly), which are expected pharmacological effects rather than addiction. In a minority of people, however, use progresses to opioid use disorder — compulsive use despite harm — which is a treatable medical condition, not a moral failing. The gravest risk is overdose: opioids can fatally slow breathing, especially at higher doses, after a loss of tolerance, or when combined with benzodiazepines, alcohol, or other sedatives. Other long-term effects include persistent constipation, hormonal changes, increased fall risk, and, paradoxically, heightened pain sensitivity in some people (opioid-induced hyperalgesia). These harms are why opioids are used cautiously and monitored, why naloxone is offered to those at risk, and why anyone struggling with opioids deserves support and access to effective treatment for opioid use disorder rather than blame.",
      sources: [
        {
          label: "Prescription Opioids DrugFacts (tolerance, dependence, use disorder, overdose)",
          url: "https://nida.nih.gov/publications/drugfacts/prescription-opioids",
          publisher: "NIH / NIDA",
        },
        {
          label: "2022 CDC Clinical Practice Guideline (harms of long-term opioid use)",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
      ],
      tags: ["complication", "opioid", "dependence", "use-disorder", "overdose", "safety"],
      caution:
        "Opioid dependence and use disorder are treatable medical conditions, not failings. If you are struggling with opioids, ask your care team about help — effective treatment exists.",
    },
    {
      id: "medication-side-effects",
      title: "Side effects of other pain medicines",
      summary:
        "Non-opioid pain medicines also carry cumulative risks — NSAIDs can harm the stomach, kidneys, and heart, and nerve-pain drugs can cause sedation and other effects — which long-term use makes more relevant.",
      detail:
        "Opioids are not the only pain treatments with potential long-term harms; other medicines carry their own cumulative risks that matter with ongoing use. Regular NSAIDs (such as ibuprofen, naproxen, diclofenac) can cause stomach ulcers and bleeding, kidney injury, fluid retention, raised blood pressure, and cardiovascular effects, with risk rising over time and in older people or those with kidney, heart, or stomach conditions. Acetaminophen is generally safer but can damage the liver if the daily limit is exceeded, a danger compounded by hidden acetaminophen in combination products and by heavy alcohol use. The nerve-pain medicines — gabapentin, pregabalin, duloxetine, and tricyclics — can cause drowsiness, dizziness, weight changes, dry mouth, and other effects, and gabapentinoids can dangerously add to the sedation and breathing suppression of opioids and other depressants. These risks do not mean the medicines should be avoided, but they explain why long-term pain treatment is reviewed periodically, why the lowest effective doses are favored, and why a pharmacist or clinician should oversee the combined regimen, especially when several medicines and conditions overlap.",
      sources: [
        {
          label: "NSAIDs (long-term risks and cautions)",
          url: "https://www.nhs.uk/medicines/nsaids/",
          publisher: "NHS (UK)",
        },
        {
          label: "Pain relievers (risks of common pain medicines)",
          url: "https://medlineplus.gov/painrelievers.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["complication", "nsaids", "acetaminophen", "side-effects", "safety"],
      caution:
        "Long-term pain medicines need periodic review. Educational only — discuss the risks and benefits of your regimen with a pharmacist or clinician.",
    },
  ],
});
