import { defineSection } from "../types.js";

/**
 * ACUTE EMERGENCIES — the red-flag content: heart attack (chest pain = call
 * emergency services), cardiac arrest, stroke (FAST), and acute decompensated
 * heart failure. Recognition, not treatment protocol.
 */
export const acuteEmergencies = defineSection({
  id: "acute-emergencies",
  title: "Acute Emergencies (Red Flags)",
  description:
    "Recognizing cardiovascular emergencies: heart attack (chest pain — call 911/999), cardiac arrest, stroke (FAST), and acute heart failure — and acting fast.",
  entries: [
    {
      id: "heart-attack-emergency",
      title: "Heart attack — call emergency services immediately",
      summary:
        "Chest pain or pressure — often with pain spreading to the arm/jaw, shortness of breath, sweating, or nausea — may be a heart attack; call 911 (or 999) right away, don't wait or drive yourself.",
      detail:
        "A heart attack happens when blood flow to part of the heart is suddenly blocked, and minutes matter — faster treatment saves heart muscle and lives. Classic warning signs are chest discomfort (pressure, squeezing, tightness, or pain) lasting more than a few minutes or coming and going, often with pain spreading to one or both arms, the back, neck, jaw, or stomach, shortness of breath, cold sweat, nausea, or lightheadedness. Symptoms can be milder or atypical — more common in women, older adults, and people with diabetes (who may have little chest pain). The action is the same: call emergency services (911 in the US, 999 in the UK) immediately; do not delay to 'see if it passes' and do not drive yourself. While waiting, follow dispatcher advice; aspirin may be advised if not allergic. Quick care can mean an artery-opening stent within hours.",
      sources: [
        { label: "Warning Signs of a Heart Attack", url: "https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack", publisher: "American Heart Association" },
        { label: "Heart attack — call 999", url: "https://www.nhs.uk/conditions/heart-attack/", publisher: "NHS (UK)" },
      ],
      tags: ["heart-attack", "emergency", "red-flag", "chest-pain"],
      caution:
        "Chest pain that could be a heart attack is an emergency — call 911/999 now. This is recognition guidance, not a reason to wait or self-treat.",
    },
    {
      id: "cardiac-arrest",
      title: "Cardiac arrest — CPR and a defibrillator",
      summary:
        "In cardiac arrest the heart stops pumping and the person collapses, unresponsive and not breathing normally; call emergency services, start CPR, and use an AED immediately.",
      detail:
        "Cardiac arrest is different from a heart attack: the heart's electrical system fails and it stops pumping, so the person suddenly collapses, is unresponsive, and is not breathing normally (or only gasping). It is immediately life-threatening and survival depends on bystander action within minutes. The steps are to call emergency services right away, start hands-only CPR (push hard and fast in the center of the chest), and use an automated external defibrillator (AED) as soon as one is available — AEDs are designed for untrained users and give spoken instructions. A heart attack can trigger cardiac arrest, but so can arrhythmias and other causes. Knowing CPR and where AEDs are located genuinely saves lives.",
      sources: [
        { label: "Arrhythmias and sudden cardiac arrest", url: "https://www.nhlbi.nih.gov/health/arrhythmias", publisher: "NIH / NHLBI" },
        { label: "Heart attack vs cardiac arrest", url: "https://www.heart.org/en/health-topics/heart-attack", publisher: "American Heart Association" },
      ],
      tags: ["cardiac-arrest", "cpr", "aed", "emergency", "red-flag"],
      caution:
        "An unresponsive person who isn't breathing normally needs emergency services, CPR, and an AED immediately — every minute counts.",
    },
    {
      id: "stroke-fast",
      title: "Stroke — FAST warning signs",
      summary:
        "Stroke (a risk especially with atrial fibrillation) is an emergency: Face drooping, Arm weakness, Speech difficulty — Time to call 911/999.",
      detail:
        "Stroke is closely tied to heart disease — atrial fibrillation in particular raises stroke risk — and it is a 'brain attack' where every minute of delay costs brain tissue. The FAST mnemonic captures the urgent signs: Face drooping (one side), Arm weakness (one side), Speech difficulty (slurred or garbled), Time to call emergency services. Other sudden signs include numbness or weakness on one side, confusion, trouble seeing, severe headache, or loss of balance. As with a heart attack, the action is to call 911/999 immediately and note the time symptoms started, because clot-busting and clot-removal treatments are highly time-sensitive. Anyone with AFib or other stroke risk factors — and those around them — benefits from knowing FAST.",
      sources: [
        { label: "Atrial fibrillation and stroke risk", url: "https://www.nhs.uk/conditions/atrial-fibrillation/", publisher: "NHS (UK)" },
        { label: "Atrial fibrillation — complications (stroke)", url: "https://www.mayoclinic.org/diseases-conditions/atrial-fibrillation/symptoms-causes/syc-20350624", publisher: "Mayo Clinic" },
      ],
      tags: ["stroke", "fast", "atrial-fibrillation", "emergency", "red-flag"],
      caution:
        "Sudden face droop, arm weakness, or speech trouble = call 911/999 immediately and note the time symptoms began.",
    },
    {
      id: "acute-heart-failure",
      title: "Acute worsening of heart failure",
      summary:
        "Rapid breathlessness (especially lying flat), fast weight gain from fluid, or severe swelling can signal dangerous heart-failure decompensation needing urgent care.",
      detail:
        "People with heart failure can deteriorate when fluid backs up faster than the heart can cope. Warning signs of acute decompensation include worsening breathlessness (notably when lying flat or waking gasping at night), a rapid weight gain over a few days from fluid retention, increasing swelling of the legs or abdomen, and reduced ability to do usual activities. Severe, sudden breathlessness with a feeling of drowning (pulmonary edema), chest pain, fainting, or a very rapid or irregular heartbeat is an emergency requiring 911/999. Daily weight monitoring and an agreed action plan help catch worsening early, when adjusting treatment (by the care team) can prevent a hospital admission. Sudden severe symptoms, though, warrant emergency care rather than waiting.",
      sources: [
        { label: "What Is Heart Failure? — warning signs", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
        { label: "Heart failure — when to get help (NHS)", url: "https://www.nhs.uk/conditions/heart-failure/", publisher: "NHS (UK)" },
      ],
      tags: ["heart-failure", "decompensation", "emergency", "red-flag"],
      caution:
        "Sudden severe breathlessness, chest pain, or fainting in heart failure is an emergency — call 911/999.",
    },
    {
      id: "major-bleeding-on-blood-thinners",
      title: "Major bleeding on blood thinners",
      summary:
        "Anticoagulants and antiplatelets save lives but raise bleeding risk; signs of serious bleeding — black or bloody stools, vomiting blood, coughing blood, a severe sudden headache, or bleeding that won't stop — need urgent medical care.",
      detail:
        "People take antiplatelets and anticoagulants to prevent dangerous clots, but the trade-off is a higher risk of bleeding, and major bleeding is a medical emergency. Warning signs include black, tarry, or bloody stools; vomiting blood or material that looks like coffee grounds; coughing up blood; pink, red, or brown urine; a severe or sudden headache, weakness, or trouble speaking (which could signal bleeding in the brain); or any bleeding — including from a cut or nosebleed — that will not stop. A serious fall or head injury while on a blood thinner also warrants prompt assessment even if the person feels fine. The safe response is to seek emergency care (911/999) for severe bleeding or any suspected brain bleed, rather than waiting; for lesser but persistent bleeding, contact the care team or anticoagulation clinic promptly. This does not mean stopping the medicine on one's own — that carries its own clot risk — but getting urgent help so professionals can manage it.",
      sources: [
        { label: "Anticoagulant medicines — risks and when to get help (NHS)", url: "https://www.nhs.uk/conditions/anticoagulants/", publisher: "NHS (UK)" },
        { label: "Warfarin — MedlinePlus (bleeding warning signs)", url: "https://medlineplus.gov/druginfo/meds/a682277.html", publisher: "NIH / MedlinePlus" },
      ],
      tags: ["bleeding", "anticoagulant", "antiplatelet", "emergency", "red-flag"],
      caution:
        "Severe bleeding or a suspected brain bleed (sudden severe headache, weakness, trouble speaking) on a blood thinner is an emergency — call 911/999. Don't stop the medicine on your own.",
    },
  ],
});
