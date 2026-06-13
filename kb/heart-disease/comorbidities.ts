import { defineSection } from "../types.js";

/**
 * Comorbidities & co-occurring conditions (REQUIRED area) — the conditions that
 * cluster with heart disease and their compounding management: the
 * cardiovascular–kidney–metabolic (diabetes + heart + kidney) cluster,
 * hypertension, AFib and stroke, depression, and lung disease/sleep apnea.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with heart disease and why it compounds: the diabetes–heart–kidney (cardiovascular–kidney–metabolic) cluster, high blood pressure, atrial fibrillation and stroke, depression, and COPD/sleep apnea.",
  entries: [
    {
      id: "cardio-renal-metabolic-cluster",
      title: "The heart–kidney–diabetes cluster",
      summary:
        "Heart disease, chronic kidney disease, and type 2 diabetes form a tightly linked, very common cluster; they share drivers and worsen one another, but several treatments help across all three.",
      detail:
        "Heart disease rarely occurs in isolation from kidney disease and diabetes — together they form what is increasingly called cardiovascular–kidney–metabolic syndrome. They share underlying drivers (high blood pressure, insulin resistance, abnormal lipids, inflammation, and vascular damage), and each accelerates the others: diabetes damages heart and kidneys, kidney disease drives up blood pressure and cardiovascular risk, and heart failure and kidney disease compound each other (the 'cardiorenal' interaction). This is the prime example of compounding management, but it also creates shared solutions: SGLT2 inhibitors and certain GLP-1 receptor agonists reduce cardiovascular events, heart-failure hospitalizations, and kidney-disease progression at once, and ACE inhibitors/ARBs protect both heart and kidney. The trade-off is complexity — overlapping risks, more medicines, and the need to watch kidney function, potassium, and fluid status — which is why this cluster needs coordinated, whole-person care rather than treating one organ at a time.",
      sources: [
        { label: "10. Cardiovascular Disease and Risk Management (Standards of Care 2025)", url: "https://diabetesjournals.org/care/article/48/Supplement_1/S207/157549/10-Cardiovascular-Disease-and-Risk-Management", publisher: "American Diabetes Association — Diabetes Care", year: 2025 },
        { label: "About Heart Disease — diabetes and other conditions", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
      ],
      tags: ["comorbidity", "diabetes", "kidney", "cluster", "multi-condition"],
      evidence: "established",
    },
    {
      id: "hypertension-comorbidity",
      title: "High blood pressure",
      summary:
        "Hypertension is both a cause and a frequent companion of heart disease, multiplying the risk of heart attack, heart failure, and stroke; controlling it is foundational.",
      detail:
        "High blood pressure is so intertwined with heart disease that it is hard to separate cause from comorbidity: it drives atherosclerosis, thickens and stiffens the heart (contributing to heart failure, especially HFpEF), and is a leading cause of stroke and kidney disease. Most people with established heart disease also have, or are at high risk of, hypertension. Because it is usually symptomless, it is found by measurement and managed for the long term. Treating blood pressure — through both lifestyle and medication — is among the highest-value actions in cardiovascular care, and it interacts with the other cluster conditions (diabetes, kidney disease), which is why targets and drug choices are individualized to the whole picture rather than to blood pressure alone.",
      sources: [
        { label: "The Facts About High Blood Pressure", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
        { label: "Coronary heart disease — risk factors (NHS)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
      ],
      tags: ["comorbidity", "hypertension", "stroke"],
    },
    {
      id: "afib-and-stroke",
      title: "Atrial fibrillation and stroke",
      summary:
        "AFib commonly accompanies other heart disease and sharply raises stroke risk, so it adds anticoagulation (and its bleeding considerations) to an already complex regimen.",
      detail:
        "Atrial fibrillation frequently co-occurs with coronary disease, heart failure, valve disease, and hypertension, and it both worsens and is worsened by them — for example, heart failure and AFib each make the other harder to manage. AFib's defining added risk is stroke, because blood can clot in the fibrillating atrium and travel to the brain; this is why anticoagulation is central for many people with AFib. The compounding consideration is that adding an anticoagulant to a regimen that may already include antiplatelets (after a stent) raises bleeding risk and requires careful balancing, and rate/rhythm-control drugs interact with other cardiac medicines. Managing AFib well therefore means weighing stroke prevention against bleeding and coordinating it with the person's other heart conditions.",
      sources: [
        { label: "Atrial fibrillation — complications and treatment (NHS)", url: "https://www.nhs.uk/conditions/atrial-fibrillation/", publisher: "NHS (UK)" },
        { label: "Atrial fibrillation — Symptoms and causes", url: "https://www.mayoclinic.org/diseases-conditions/atrial-fibrillation/symptoms-causes/syc-20350624", publisher: "Mayo Clinic" },
      ],
      tags: ["comorbidity", "atrial-fibrillation", "stroke", "anticoagulation"],
    },
    {
      id: "depression-and-lung-comorbidity",
      title: "Depression, COPD, and sleep apnea",
      summary:
        "Depression is common after heart events and worsens outcomes; lung disease and obstructive sleep apnea frequently co-occur and complicate breathlessness and rhythm control.",
      detail:
        "Beyond the cardiometabolic cluster, heart disease commonly travels with mental-health and lung conditions. Depression and anxiety are markedly more common after a heart attack or with heart failure, and they worsen self-care, rehab participation, and outcomes — a bidirectional link that makes mental-health support part of cardiac care. Chronic lung diseases such as COPD often share a cause with heart disease (smoking) and overlap in symptoms like breathlessness, which can make diagnosis and treatment trickier (and some inhalers and heart drugs need balancing). Obstructive sleep apnea is very common in people with hypertension, heart failure, and atrial fibrillation, where it worsens blood pressure and rhythm control; recognizing and treating it can improve cardiovascular management. These overlaps reinforce that heart care works best when it looks beyond the heart.",
      sources: [
        { label: "Heart failure — related conditions and wellbeing (NHS)", url: "https://www.nhs.uk/conditions/heart-failure/", publisher: "NHS (UK)" },
        { label: "Heart disease — related conditions", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
      ],
      tags: ["comorbidity", "depression", "copd", "sleep-apnea", "multi-condition"],
    },
    {
      id: "obesity-metabolic-syndrome",
      title: "Obesity and metabolic syndrome",
      summary:
        "Excess weight — especially abdominal — and metabolic syndrome (a cluster of high blood pressure, high blood sugar, abnormal lipids, and central obesity) commonly accompany heart disease and amplify its risks.",
      detail:
        "Obesity frequently coexists with heart disease and worsens nearly every cardiovascular risk factor: it raises blood pressure, drives insulin resistance and type 2 diabetes, worsens lipids, promotes inflammation, and contributes to sleep apnea and heart failure (particularly the preserved-ejection-fraction type). When several of these cluster together — central (abdominal) obesity, high blood pressure, high blood sugar, high triglycerides, and low HDL — the pattern is called metabolic syndrome, which markedly increases the risk of heart disease, stroke, and diabetes. The conditions reinforce one another, so addressing weight tends to improve the whole cluster at once. Modest, sustained weight loss through eating patterns and activity improves blood pressure, lipids, and blood sugar, and newer medicines (including GLP-1 receptor agonists) are changing what is achievable; the point is that weight is not a cosmetic side issue but a lever that moves multiple cardiovascular risks together, best addressed as part of whole-person care.",
      sources: [
        { label: "About Heart Disease (overweight and related risks)", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
        { label: "10. Cardiovascular Disease and Risk Management (Standards of Care 2025)", url: "https://diabetesjournals.org/care/article/48/Supplement_1/S207/157549/10-Cardiovascular-Disease-and-Risk-Management", publisher: "American Diabetes Association — Diabetes Care", year: 2025 },
      ],
      tags: ["comorbidity", "obesity", "metabolic-syndrome", "diabetes", "multi-condition"],
    },
    {
      id: "peripheral-artery-disease-comorbidity",
      title: "Peripheral and other vascular disease",
      summary:
        "The atherosclerosis behind heart disease also affects arteries in the legs (peripheral artery disease) and neck (carotid disease); having one means higher risk in the others, so they are managed together.",
      detail:
        "Atherosclerosis is a whole-body process, so people with coronary heart disease often have narrowed arteries elsewhere, and vice versa. Peripheral artery disease (PAD) — fatty build-up restricting blood flow to the legs — classically causes cramping leg pain on walking that eases with rest (intermittent claudication), and in severe cases threatens the limb; importantly, having PAD signals high risk of heart attack and stroke even when the heart feels fine. Carotid artery disease (narrowing of the neck arteries) similarly raises stroke risk. Because these share the same causes, they share the same protective treatment: controlling blood pressure, cholesterol (statins), and diabetes, stopping smoking (especially important in PAD), antiplatelet therapy where appropriate, and supervised exercise for claudication. Recognizing one vascular condition is therefore a prompt to assess and protect the rest of the vascular tree, which is why these are managed as connected, not separate, problems.",
      sources: [
        { label: "Peripheral arterial disease (PAD) (NHS)", url: "https://www.nhs.uk/conditions/peripheral-arterial-disease-pad/", publisher: "NHS (UK)" },
        { label: "Heart disease — related vascular conditions", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
      ],
      tags: ["comorbidity", "peripheral-artery-disease", "carotid", "atherosclerosis", "multi-condition"],
    },
  ],
});
