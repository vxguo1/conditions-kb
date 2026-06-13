import { defineSection } from "../types.js";

/**
 * Overview & types of cardiovascular disease — "heart disease" is an umbrella:
 * coronary artery disease, heart failure, arrhythmias (e.g. AFib), valvular
 * disease, and the central role of hypertension. Layperson-accessible.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview & Types of Heart Disease",
  description:
    "What 'heart disease' covers: coronary artery disease, heart failure (HFrEF/HFpEF), arrhythmias including atrial fibrillation, valvular disease, hypertension, and how they relate.",
  entries: [
    {
      id: "what-is-heart-disease",
      title: "What 'heart disease' means",
      summary:
        "Heart disease is an umbrella term for several conditions affecting the heart and blood vessels; coronary artery disease is the most common and the leading cause of death worldwide.",
      detail:
        "'Heart disease' (cardiovascular disease) is not one condition but a family of disorders of the heart and blood vessels. The most common is coronary artery disease (narrowed heart arteries), which can cause angina and heart attacks. Others include heart failure (the heart pumps less effectively), arrhythmias (abnormal heart rhythms such as atrial fibrillation), heart valve disease, and diseases of the heart muscle (cardiomyopathies) and the vessels themselves. High blood pressure underlies and accelerates much of it. Cardiovascular disease is the leading cause of death globally, but much of it is preventable and treatable, and many people live long, full lives with well-managed heart conditions.",
      sources: [
        { label: "About Heart Disease", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
        { label: "Heart disease — Symptoms and causes", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
      ],
      tags: ["basics", "definition"],
    },
    {
      id: "coronary-artery-disease",
      title: "Coronary artery disease (CAD)",
      summary:
        "CAD is narrowing of the heart's arteries by fatty plaque (atherosclerosis), which can cause angina (chest pain) and, if an artery blocks, a heart attack.",
      detail:
        "Coronary artery disease develops when the arteries supplying the heart muscle become narrowed and hardened by a build-up of cholesterol-rich plaque (atherosclerosis). Reduced blood flow can cause angina — chest pain or pressure, often on exertion. If a plaque ruptures and a clot suddenly blocks an artery, the heart muscle downstream is starved of oxygen and a heart attack (myocardial infarction) occurs, which is an emergency. CAD is the most common form of heart disease and the main cause of heart attacks and of many cases of heart failure. It is strongly linked to modifiable risk factors, so prevention and treatment can substantially change its course.",
      sources: [
        { label: "What Is Coronary Heart Disease?", url: "https://www.nhlbi.nih.gov/health/coronary-heart-disease", publisher: "NIH / NHLBI" },
        { label: "Coronary artery disease — Symptoms and causes", url: "https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613", publisher: "Mayo Clinic" },
      ],
      tags: ["cad", "atherosclerosis", "angina"],
    },
    {
      id: "heart-failure-types",
      title: "Heart failure (HFrEF and HFpEF)",
      summary:
        "Heart failure means the heart can't pump or fill well enough for the body's needs; it is classified by ejection fraction into reduced (HFrEF) and preserved (HFpEF) types, which are managed differently.",
      detail:
        "Heart failure does not mean the heart has stopped — it means it cannot pump enough blood, or fill properly, to meet the body's needs, causing breathlessness, fatigue, and fluid build-up (swollen legs, congestion). A key distinction is the ejection fraction (the share of blood pumped out with each beat): heart failure with reduced ejection fraction (HFrEF) involves a weakened pump, while heart failure with preserved ejection fraction (HFpEF) involves a stiff heart that doesn't relax/fill well despite a 'normal' ejection fraction. The distinction matters because the medicines proven to help differ between them. Common causes include coronary artery disease, prior heart attack, high blood pressure, and valve or rhythm problems. It is usually chronic and progressive but can often be managed for years.",
      sources: [
        { label: "What Is Heart Failure?", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
        { label: "Heart failure — Symptoms and causes", url: "https://www.mayoclinic.org/diseases-conditions/heart-failure/symptoms-causes/syc-20373142", publisher: "Mayo Clinic" },
      ],
      tags: ["heart-failure", "hfref", "hfpef"],
    },
    {
      id: "arrhythmias-afib",
      title: "Arrhythmias and atrial fibrillation",
      summary:
        "Arrhythmias are abnormal heart rhythms; atrial fibrillation (AFib) — an irregular, often rapid rhythm — is the most common and raises stroke risk, which is why blood thinners are often used.",
      detail:
        "An arrhythmia is a problem with the rate or rhythm of the heartbeat — too fast, too slow, or irregular. Atrial fibrillation (AFib) is the most common sustained arrhythmia: the upper chambers quiver chaotically, producing an irregular and often rapid pulse, palpitations, breathlessness, or fatigue (sometimes none at all). AFib's biggest danger is that blood can pool and clot in the heart, then travel to the brain and cause a stroke, so stroke-prevention with anticoagulants is a central part of management for many people. Other arrhythmias range from harmless extra beats to dangerous fast rhythms; some slow rhythms need a pacemaker. Treatment aims to control the rate or rhythm and to reduce stroke and other risks.",
      sources: [
        { label: "Arrhythmias — What Is an Arrhythmia?", url: "https://www.nhlbi.nih.gov/health/arrhythmias", publisher: "NIH / NHLBI" },
        { label: "Atrial fibrillation — Symptoms and causes", url: "https://www.mayoclinic.org/diseases-conditions/atrial-fibrillation/symptoms-causes/syc-20350624", publisher: "Mayo Clinic" },
      ],
      tags: ["arrhythmia", "atrial-fibrillation", "stroke"],
    },
    {
      id: "valvular-and-hypertension",
      title: "Valve disease and high blood pressure",
      summary:
        "Heart valves can become narrowed or leaky, straining the heart; high blood pressure is a powerful, often silent driver of heart attack, heart failure, and stroke.",
      detail:
        "The heart's four valves keep blood moving in one direction; valve disease occurs when a valve narrows (stenosis) or leaks (regurgitation), making the heart work harder and, over time, contributing to heart failure and arrhythmias — common examples include aortic stenosis and mitral regurgitation, which may need repair or replacement. Separately, high blood pressure (hypertension) is one of the most important and modifiable cardiovascular risks: it usually causes no symptoms (the 'silent killer') yet damages arteries and the heart, raising the risk of heart attack, heart failure, stroke, and kidney disease. Because it is silent, hypertension is found through measurement, and treating it is among the highest-value steps in preventing heart disease.",
      sources: [
        { label: "What Are Heart Valve Diseases?", url: "https://www.nhlbi.nih.gov/health/heart-valve-diseases", publisher: "NIH / NHLBI" },
        { label: "The Facts About High Blood Pressure", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
      ],
      tags: ["valve-disease", "hypertension"],
    },
    {
      id: "angina-stable-unstable",
      title: "Angina — stable and unstable",
      summary:
        "Angina is chest discomfort from a heart not getting enough blood; stable angina is predictable with exertion, while unstable angina is new, worsening, or at rest and is a medical emergency.",
      detail:
        "Angina is the symptom — usually chest pressure, tightness, or pain, sometimes spreading to the arm, neck, or jaw — that occurs when heart muscle does not get enough oxygen-rich blood, most often because of coronary artery disease. Stable angina follows a predictable pattern: it comes on with exertion or stress, lasts a few minutes, and eases with rest or nitrate medicine. Unstable angina is different and dangerous: it is new, more frequent, more severe, comes on with less exertion or at rest, or no longer settles as before — a sign that a plaque may be unstable and a heart attack could be near. Unstable angina is part of 'acute coronary syndrome' and should be treated as an emergency. Distinguishing the two matters because stable angina is managed with medicines and risk-factor control, while a sudden change in pattern needs urgent assessment.",
      sources: [
        { label: "What Is Coronary Heart Disease? (angina)", url: "https://www.nhlbi.nih.gov/health/coronary-heart-disease", publisher: "NIH / NHLBI" },
        { label: "Coronary artery disease — symptoms (angina)", url: "https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613", publisher: "Mayo Clinic" },
      ],
      tags: ["angina", "cad", "acute-coronary-syndrome", "chest-pain"],
      caution:
        "New, worsening, or rest angina is a warning sign of a possible heart attack — seek urgent care; this is description, not a reason to wait.",
    },
    {
      id: "cardiomyopathy-and-other-types",
      title: "Cardiomyopathy and other forms",
      summary:
        "Beyond the common types, diseases of the heart muscle (cardiomyopathies), congenital heart defects, and disease of arteries elsewhere in the body round out the cardiovascular picture.",
      detail:
        "Heart disease also includes conditions of the heart muscle itself, called cardiomyopathies — the muscle can become enlarged and weak (dilated), abnormally thick (hypertrophic, sometimes inherited and a cause of sudden cardiac death in young people), or stiff (restrictive). Cardiomyopathies are an important cause of heart failure and arrhythmias and can run in families. Congenital heart disease — structural differences present from birth — is the most common type of birth defect, and many people now live into adulthood with it and need lifelong specialist follow-up. The same atherosclerosis that narrows heart arteries also affects arteries elsewhere: peripheral artery disease in the legs and carotid disease in the neck share risk factors with coronary disease and often coexist. Recognizing this breadth explains why 'heart disease' care sometimes involves genetics, the whole vascular system, and conditions carried since birth.",
      sources: [
        { label: "What Is Heart Failure? (cardiomyopathy as a cause)", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
        { label: "Heart disease — types", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
      ],
      tags: ["cardiomyopathy", "congenital", "peripheral-artery-disease", "types"],
    },
  ],
});
