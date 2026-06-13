import { defineSection } from "../types.js";

/**
 * Acute emergencies & red flags — the safety section. The situations in kidney
 * disease that need urgent or emergency care: dangerously high potassium
 * (hyperkalemia), fluid overload / pulmonary edema, severe uremic symptoms,
 * sudden drops in kidney function (AKI), and dialysis-access emergencies.
 * Educational — when something needs urgent attention, get medical help now.
 */
export const acuteEmergencies = defineSection({
  id: "acute-emergencies",
  title: "Acute Emergencies & Red Flags",
  description:
    "When kidney disease needs urgent or emergency care — dangerously high potassium (hyperkalemia), fluid overload and pulmonary edema, severe uremic symptoms, sudden kidney-function drops (AKI), and dialysis-access problems. Educational; seek medical help promptly for these.",
  entries: [
    {
      id: "emergencies-overview",
      title: "When kidney disease becomes an emergency",
      summary:
        "Most CKD is managed calmly over time, but certain situations — chest pain, severe breathlessness, confusion, an irregular heartbeat, or near-absent urine — need urgent care now, not at the next appointment.",
      detail:
        "Chronic kidney disease is usually a slow, manageable condition, but because the kidneys control fluid, minerals, and waste, certain acute problems can become genuine emergencies. The general rule is that anything affecting breathing, the heart, or consciousness deserves urgent evaluation: severe shortness of breath, chest pain, fainting, a markedly irregular or slow heartbeat, new confusion, seizures, or producing very little or no urine all warrant emergency care (call emergency services or go to an emergency department). Less dramatic but still important warning signs — rapidly worsening swelling, persistent vomiting, an inability to keep fluids down, or feeling profoundly unwell — should prompt prompt contact with the care team. People with advanced CKD or on dialysis are at higher risk for these events, and knowing the red flags in advance helps avoid dangerous delays. The entries below describe the specific emergencies; none of this replaces an in-person assessment, and when in doubt about an urgent symptom, it is safer to seek help.",
      sources: [
        {
          label: "Recognizing Kidney Disease Symptoms: Warning Signs",
          url: "https://www.kidney.org/kidney-topics/signs-and-symptoms-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Managing Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["emergency", "red-flags", "overview", "safety"],
      caution:
        "This is educational, not a triage tool. For chest pain, severe breathlessness, fainting, confusion, or a very irregular heartbeat, seek emergency care immediately.",
    },
    {
      id: "hyperkalemia-high-potassium",
      title: "Dangerously high potassium (hyperkalemia)",
      summary:
        "Damaged kidneys can let potassium build up in the blood; severe hyperkalemia can cause life-threatening heart rhythm problems and is a medical emergency, even though it often causes no symptoms until late.",
      detail:
        "Potassium is a mineral that keeps the heart and muscles working, and the kidneys are the body's main route for removing excess. In CKD — especially advanced CKD, and sometimes worsened by certain medicines or a high-potassium diet — potassium can rise to dangerous levels, a condition called hyperkalemia. What makes it especially dangerous is that it often causes no symptoms until potassium is very high, when it can trigger muscle weakness, numbness or tingling, nausea, and most seriously a slow, irregular, or stopped heartbeat. Sudden or severe hyperkalemia is life-threatening and needs emergency treatment, which is why people with CKD have their potassium monitored with blood tests and may be advised about potassium in their diet and medications. Warning signs that warrant urgent care include muscle weakness that is severe or spreading, palpitations or a very irregular or slow pulse, and shortness of breath. Treatment of hyperkalemia, and any changes to potassium in diet or medicines, must be directed by the care team.",
      sources: [
        {
          label: "High Potassium (Hyperkalemia): Causes, Symptoms, and Treatment",
          url: "https://www.kidney.org/kidney-topics/hyperkalemia-high-potassium",
          publisher: "National Kidney Foundation",
        },
        {
          label: "High Potassium (Hyperkalemia): Causes, Prevention and Treatment",
          url: "https://www.kidneyfund.org/living-kidney-disease/health-problems-caused-kidney-disease/high-potassium-hyperkalemia-causes-prevention-and-treatment",
          publisher: "American Kidney Fund",
        },
      ],
      tags: ["emergency", "hyperkalemia", "potassium", "heart-rhythm", "safety"],
      evidence: "established",
      caution:
        "Severe hyperkalemia is a medical emergency. Weakness, palpitations, an irregular or slow heartbeat, or breathlessness in someone with kidney disease needs urgent care.",
    },
    {
      id: "fluid-overload-pulmonary-edema",
      title: "Fluid overload and pulmonary edema",
      summary:
        "Failing kidneys may not remove enough fluid, which can flood the lungs (pulmonary edema) and cause severe breathlessness — an emergency, especially in advanced CKD or between dialysis sessions.",
      detail:
        "When the kidneys cannot remove enough salt and water, fluid builds up in the body — first often as swelling in the legs, ankles, or face, and as high blood pressure, but in more severe cases backing up into the lungs. This 'pulmonary edema' causes shortness of breath that can become severe, especially when lying flat or at night, sometimes with a cough, frothy sputum, or a feeling of suffocating, and it is a medical emergency requiring immediate care. Fluid overload is a particular risk in advanced CKD and for people on dialysis who gain too much fluid between sessions, which is why fluid and salt limits and tracking weight are emphasized in their care. Warning signs to act on include rapidly worsening swelling, sudden weight gain, and especially worsening breathlessness or difficulty breathing lying down. Severe breathing difficulty warrants emergency services; lesser but worsening swelling or breathlessness warrants prompt contact with the care team, who manage fluid removal through medication or dialysis.",
      sources: [
        {
          label: "Fluid Overload in a Dialysis Patient",
          url: "https://www.kidney.org/kidney-topics/fluid-overload-dialysis-patient",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Pulmonary edema — symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/pulmonary-edema/symptoms-causes/syc-20377009",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["emergency", "fluid-overload", "pulmonary-edema", "breathlessness", "safety"],
      evidence: "established",
      caution:
        "Severe or rapidly worsening breathlessness — especially when lying down — can signal fluid in the lungs and needs emergency care.",
    },
    {
      id: "uremic-emergencies",
      title: "Severe uremia (uremic emergencies)",
      summary:
        "When kidney failure lets waste products build up to high levels, 'uremia' can cause severe nausea, confusion, and in extreme cases seizures, pericarditis, or coma — signaling that urgent treatment, often dialysis, is needed.",
      detail:
        "Uremia refers to the buildup of waste products in the blood when the kidneys fail, and while milder symptoms (fatigue, poor appetite, nausea, itching, trouble concentrating) develop gradually, severe uremia is a serious situation. As toxins accumulate, a person may develop persistent vomiting, marked confusion or drowsiness, hiccups, and in extreme, untreated cases seizures, inflammation of the sac around the heart (uremic pericarditis), bleeding tendencies, or coma. These severe uremic symptoms are warning signs that kidney function has fallen critically low and that urgent treatment — frequently the initiation of dialysis — is needed, and they are part of how clinicians decide when dialysis must begin. New or worsening confusion, persistent vomiting with inability to keep fluids down, or chest pain in someone with advanced kidney disease should prompt urgent medical assessment. People approaching kidney failure are monitored closely precisely so that treatment can start before uremia becomes dangerous.",
      sources: [
        {
          label: "Kidney Failure (ESRD) — Symptoms, Stages & Treatment",
          url: "https://www.kidney.org/kidney-topics/kidney-failure",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Choosing a Treatment for Kidney Failure",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/choosing-treatment",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["emergency", "uremia", "kidney-failure", "dialysis", "safety"],
      caution:
        "New confusion, persistent vomiting, or chest pain in advanced kidney disease needs urgent medical assessment — these can signal severe uremia.",
    },
    {
      id: "acute-on-chronic-aki",
      title: "Sudden drops in kidney function (acute kidney injury)",
      summary:
        "On top of CKD, kidney function can drop suddenly — from dehydration, infection, certain medicines, or contrast dye — sometimes producing little urine; this 'acute-on-chronic' injury needs prompt evaluation.",
      detail:
        "People with chronic kidney disease are more vulnerable to acute kidney injury (AKI), a sudden worsening of kidney function over hours to days, sometimes called 'acute-on-chronic' kidney injury. Common triggers include dehydration (from vomiting, diarrhea, or poor fluid intake, often during illness), serious infections, low blood pressure, certain medications (such as NSAID pain relievers and some others), and iodinated contrast dye used in some scans. Signs can include producing much less urine than usual, rapidly worsening swelling, increasing fatigue or confusion, and nausea — though sometimes it is detected only on blood tests. AKI is a medical situation that needs prompt evaluation because the cause may be reversible if addressed quickly, and because it can tip advanced CKD toward needing urgent dialysis. During illnesses that cause dehydration, people with CKD are often advised about 'sick-day' guidance, including which medicines may need to be paused — but those decisions belong with the clinician or pharmacist, not guesswork.",
      sources: [
        {
          label: "Acute Kidney Injury (AKI)",
          url: "https://www.kidney.org/kidney-topics/acute-kidney-injury-aki",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Acute Kidney Injury (AKI) — about",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["emergency", "acute-kidney-injury", "aki", "sick-day", "safety"],
      caution:
        "Producing very little urine, or rapidly worsening swelling, confusion, or nausea, can signal acute kidney injury and needs prompt medical attention.",
    },
    {
      id: "dialysis-access-emergencies",
      title: "Dialysis access emergencies",
      summary:
        "For people on hemodialysis, problems with the access (fistula, graft, or catheter) — heavy bleeding, signs of infection, or a clotted access — are urgent and can be dangerous.",
      detail:
        "People on hemodialysis rely on a vascular access — usually a surgically created fistula or graft in the arm, or a central venous catheter — and problems with it are among the urgent situations specific to dialysis. Heavy or persistent bleeding from an access site is an emergency: firm pressure should be applied and emergency help sought, because blood loss can be rapid. Signs of infection — redness, warmth, swelling, pus, or fever, especially around a catheter — also need prompt attention, since access infections can spread to the bloodstream and become life-threatening. A loss of the normal 'thrill' (the buzzing vibration felt over a fistula or graft) can mean the access has clotted and needs urgent evaluation to save it. Dialysis units teach people how to care for and check their access daily for exactly these reasons. Any of these access problems should be reported to the dialysis unit or, when severe (heavy bleeding, high fever, feeling very unwell), treated as an emergency.",
      sources: [
        {
          label: "Hemodialysis Access (vascular access)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Hemodialysis",
          url: "https://www.kidney.org/kidney-topics/hemodialysis",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["emergency", "dialysis", "vascular-access", "infection", "bleeding", "safety"],
      caution:
        "Heavy bleeding from a dialysis access is an emergency — apply firm pressure and get help. Fever or redness around an access, or a lost 'thrill,' needs urgent contact with the dialysis unit.",
    },
  ],
});
