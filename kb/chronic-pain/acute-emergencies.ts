import { defineSection } from "../types.js";

/**
 * ACUTE EMERGENCIES (RED FLAGS) — the safety content. When chronic pain (or its
 * treatment) signals something dangerous: opioid overdose / respiratory
 * depression and naloxone; the danger of combining opioids with benzodiazepines,
 * alcohol, or other CNS depressants; cauda equina syndrome and other spinal
 * red flags; and other warning signs that warrant urgent care.
 *
 * This is educational recognition information, NOT a treatment protocol. Anyone
 * who may be having an emergency needs urgent medical help (call emergency
 * services).
 */
export const acuteEmergencies = defineSection({
  id: "acute-emergencies",
  title: "Acute Emergencies (Red Flags)",
  description:
    "Recognizing emergencies in chronic pain and its treatment: opioid overdose and naloxone, the danger of opioids combined with benzodiazepines / alcohol / other sedatives, cauda equina syndrome and spinal red flags, and other warning signs that mean get urgent help now.",
  entries: [
    {
      id: "opioid-overdose-recognition",
      title: "Opioid overdose — recognizing it",
      summary:
        "An opioid overdose slows or stops breathing; signs include pinpoint pupils, unresponsiveness, and slow, shallow, or stopped breathing — it is a life-threatening emergency requiring 911 and naloxone.",
      detail:
        "Anyone taking prescription opioids — and those around them — should know the signs of an opioid overdose, because it is a leading cause of preventable death. In an overdose, opioids suppress the brain's drive to breathe. The classic signs are very small, 'pinpoint' pupils; unresponsiveness or inability to wake the person; and slow, shallow, irregular, or stopped breathing, sometimes with gurgling or snoring-like (gasping) sounds. The skin may turn pale, bluish, or gray, especially the lips and fingertips, and the body may go limp. An overdose is a medical emergency: call 911 (or local emergency services) immediately, give naloxone if it is available, try to keep the person breathing, and stay with them. Overdose risk is higher with higher opioid doses, after a period of reduced tolerance (such as following detox, hospitalization, or a missed-then-doubled dose), and — critically — when opioids are combined with other substances that slow breathing, such as benzodiazepines, alcohol, or sleep medicines.",
      sources: [
        {
          label: "Naloxone DrugFacts (recognizing opioid overdose)",
          url: "https://nida.nih.gov/publications/drugfacts/naloxone",
          publisher: "NIH / NIDA",
        },
        {
          label: "Reverse Opioid Overdose to Prevent Death (signs of overdose)",
          url: "https://www.cdc.gov/overdose-prevention/reversing-overdose/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["red-flag", "opioid", "overdose", "emergency", "safety"],
      caution:
        "If you suspect an opioid overdose, call emergency services immediately and give naloxone if available — do not wait to be sure. This is educational recognition information, not a treatment protocol.",
    },
    {
      id: "naloxone-awareness",
      title: "Naloxone — the opioid-overdose reversal medicine",
      summary:
        "Naloxone (e.g., Narcan nasal spray) rapidly reverses an opioid overdose and is available over the counter in the U.S.; people on opioids and their households are encouraged to keep it on hand and learn to use it.",
      detail:
        "Naloxone is a medicine that can rapidly reverse an opioid overdose by knocking opioids off their receptors and restoring breathing. It comes as an easy-to-use nasal spray (generic naloxone, Narcan, Kloxxado) and as an injection; the nasal spray is designed for bystanders without medical training and, in the U.S., is available over the counter. Public-health bodies recommend that people prescribed opioids — and their family members or housemates — keep naloxone available and know how to use it, much like keeping a fire extinguisher. Important points: naloxone only works on opioids, it is safe to give even if you are not certain opioids are involved, and it wears off in roughly 30–90 minutes — which can be shorter than the opioid's effect, so a person can slip back into overdose. For that reason you must always call 911, give a second dose if breathing does not improve, and keep the person under observation until help arrives. Naloxone does not replace emergency care; it buys time. Ask a pharmacist or clinician how to obtain and use it.",
      sources: [
        {
          label: "Naloxone DrugFacts (what naloxone is and how to use it)",
          url: "https://nida.nih.gov/publications/drugfacts/naloxone",
          publisher: "NIH / NIDA",
        },
        {
          label: "Reverse Opioid Overdose to Prevent Death (using naloxone)",
          url: "https://www.cdc.gov/overdose-prevention/reversing-overdose/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["red-flag", "naloxone", "opioid", "overdose", "safety"],
      caution:
        "Always call emergency services even after giving naloxone — its effect can wear off before the opioid does, and a person can re-overdose. Educational only.",
    },
    {
      id: "opioids-plus-cns-depressants",
      title: "Opioids + benzodiazepines, alcohol, or other sedatives — a deadly combination",
      summary:
        "Combining opioids with benzodiazepines, alcohol, sleep aids, or other central-nervous-system depressants sharply raises the risk of slowed breathing, overdose, and death — a leading cause of opioid-related deaths.",
      detail:
        "One of the most important safety messages in chronic pain care is that opioids combined with other substances that depress the central nervous system are far more dangerous than opioids alone. Benzodiazepines (such as diazepam, alprazolam, lorazepam — often prescribed for anxiety or sleep), alcohol, the 'Z-drug' sleep medicines, gabapentinoids at high doses, muscle relaxants, and sedating antihistamines all slow breathing, and their effects stack with opioids to cause profound respiratory depression. The combination of opioids and benzodiazepines in particular is involved in a large share of opioid-overdose deaths, which is why the CDC guideline advises clinicians to avoid prescribing them together whenever possible. This does not mean a person currently taking both has done something wrong, but it is a high-risk situation that should be reviewed with the prescriber and pharmacist — never altered abruptly on one's own, since stopping some of these drugs suddenly is itself dangerous. Anyone taking opioids should tell every clinician about all sedatives, sleep aids, and alcohol use so the combined risk can be managed and naloxone offered.",
      sources: [
        {
          label: "2022 CDC Clinical Practice Guideline (avoiding opioids with benzodiazepines)",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
        {
          label: "Benzodiazepines and Opioids (combined overdose risk)",
          url: "https://nida.nih.gov/research-topics/opioids",
          publisher: "NIH / NIDA",
        },
      ],
      tags: ["red-flag", "opioid", "benzodiazepines", "alcohol", "respiratory-depression", "safety"],
      caution:
        "Combining opioids with benzodiazepines, alcohol, or other sedatives can stop breathing. Do not start, stop, or change these on your own — review the combination urgently with a prescriber or pharmacist.",
    },
    {
      id: "cauda-equina-syndrome",
      title: "Cauda equina syndrome — a spinal emergency",
      summary:
        "New loss of bladder or bowel control, numbness around the genitals or buttocks ('saddle' numbness), or severe leg weakness with back pain can signal cauda equina syndrome — go to the emergency department immediately.",
      detail:
        "Cauda equina syndrome is a rare but serious emergency in which the bundle of nerves at the base of the spinal cord is compressed, and it must be recognized fast because delay can cause permanent loss of bladder, bowel, and sexual function and leg weakness. Warning signs, often appearing alongside back or leg pain, include: difficulty passing urine or new loss of bladder or bowel control (incontinence or retention); numbness or altered sensation around the genitals, buttocks, or inner thighs and the area that would contact a saddle ('saddle anesthesia'), sometimes noticed when wiping after using the toilet; numbness or weakness in one or both legs; and reduced sexual sensation. If two or more of these develop or change rapidly, this is a medical emergency — go to the emergency department (A&E) right away rather than waiting for a routine appointment, because early surgery to relieve the pressure offers the best chance of avoiding lasting damage. People living with chronic back pain should know these specific red flags so they can act quickly if the picture suddenly changes.",
      sources: [
        {
          label: "Cauda Equina Syndrome: What It Is, Symptoms & Treatment",
          url: "https://my.clevelandclinic.org/health/diseases/22132-cauda-equina-syndrome",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Low back pain - chronic (red-flag symptoms)",
          url: "https://medlineplus.gov/ency/article/007422.htm",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["red-flag", "cauda-equina", "back-pain", "emergency", "safety"],
      caution:
        "Saddle numbness, new loss of bladder/bowel control, or new leg weakness with back pain is an emergency — go to the emergency department immediately. Educational only.",
    },
    {
      id: "back-pain-other-red-flags",
      title: "Other back-pain red flags needing urgent assessment",
      summary:
        "Back pain with fever, unexplained weight loss, a history of cancer, recent serious injury, or that is worst at night or with new severe weakness warrants prompt medical assessment to rule out infection, fracture, or cancer.",
      detail:
        "Most back pain is not dangerous, but certain features ('red flags') suggest a serious underlying cause and warrant prompt medical assessment rather than watchful waiting. These include: pain following significant trauma (such as a fall or crash), which can mean fracture; fever, chills, or a recent infection or injection, which can signal a spinal infection; a history of cancer, unexplained weight loss, or night pain that wakes the person, which can indicate cancer spreading to the spine; progressive or severe weakness, numbness, or pins-and-needles in the legs, which can signal serious nerve compression; pain in someone with osteoporosis or on long-term steroids, which raises fracture risk; and being very young or older when back pain first appears. New problems with walking, balance, or coordination are also concerning. These features do not by themselves mean something serious is present, but they change the urgency, so the person should contact a clinician promptly (or seek emergency care for severe or rapidly worsening symptoms). Knowing the red flags helps distinguish the common, non-dangerous back pain from the rare situations that need quick action.",
      sources: [
        {
          label: "Low back pain - chronic (red flags and when to seek care)",
          url: "https://medlineplus.gov/ency/article/007422.htm",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Back pain (when to get urgent help)",
          url: "https://www.nhs.uk/conditions/back-pain/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["red-flag", "back-pain", "infection", "fracture", "cancer", "safety"],
      caution:
        "These red flags warrant prompt medical assessment; severe or rapidly worsening weakness, numbness, or loss of bladder/bowel control needs emergency care. Educational only.",
    },
    {
      id: "when-to-seek-urgent-care",
      title: "When new or changing pain warrants urgent care",
      summary:
        "Sudden severe pain, pain with chest symptoms, signs of infection, neurological changes, or a major change in a long-standing pain pattern can signal a new problem and should not be assumed to be 'just the usual pain.'",
      detail:
        "Living with chronic pain can make it tempting to attribute every new symptom to the existing condition, but some changes warrant urgent evaluation. Seek emergency care for sudden, severe, or 'worst-ever' pain; chest pain or pain spreading to the arm, jaw, or back with breathlessness, sweating, or nausea (possible heart attack); the 'thunderclap' worst-ever headache (possible bleeding in the brain); a sudden severe headache with stiff neck, fever, confusion, or rash; signs of infection such as fever with a hot, swollen, red joint or area; new weakness, numbness, difficulty speaking, or facial drooping (possible stroke); or signs of an opioid overdose. More generally, a marked, unexplained change in a familiar pain pattern, new neurological symptoms, or pain accompanied by systemic features (fever, weight loss, night sweats) should prompt contact with a clinician rather than being dismissed. The guiding principle is that chronic pain does not make a person immune to new, acute problems — and when in doubt about a sudden or severe change, it is safer to seek urgent advice or emergency care.",
      sources: [
        {
          label: "Pain (when to seek medical care)",
          url: "https://medlineplus.gov/pain.html",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Chronic Pain (when to contact a healthcare provider)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["red-flag", "urgent-care", "emergency", "safety"],
      caution:
        "When in doubt about sudden, severe, or rapidly changing symptoms, seek urgent or emergency care — chronic pain does not rule out a new, serious problem. Educational only.",
    },
  ],
});
