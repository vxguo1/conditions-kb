import { defineSection } from "../types.js";

/**
 * CAUSE — atherosclerosis as the central mechanism, plus the risk factors
 * (modifiable and non-modifiable) that drive cardiovascular disease.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes & Risk Factors",
  description:
    "Why heart disease develops: atherosclerosis, the modifiable risks (blood pressure, cholesterol, smoking, diabetes, weight, inactivity) and non-modifiable risks (age, sex, family history).",
  entries: [
    {
      id: "atherosclerosis",
      title: "Atherosclerosis — the core process",
      summary:
        "Most heart disease starts with atherosclerosis: cholesterol-rich plaque builds up in artery walls, narrowing them and, if a plaque ruptures, triggering clots that cause heart attacks and strokes.",
      detail:
        "Atherosclerosis is the slow build-up of plaque — cholesterol, fats, inflammatory cells, and calcium — within the walls of arteries. Over years it narrows and stiffens arteries, reducing blood flow (causing angina when the heart muscle is affected). The acute danger comes when a plaque ruptures: the body forms a clot at the site, which can suddenly block the artery and cause a heart attack (in heart arteries) or stroke (in brain arteries). Atherosclerosis underlies coronary artery disease, much of stroke, and peripheral artery disease, and it is driven by the risk factors covered below. Understanding it explains why lowering cholesterol, blood pressure, and inflammation, and not smoking, are so central to prevention.",
      sources: [
        { label: "What Is Coronary Heart Disease? (atherosclerosis)", url: "https://www.nhlbi.nih.gov/health/coronary-heart-disease", publisher: "NIH / NHLBI" },
        { label: "Coronary artery disease — causes", url: "https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613", publisher: "Mayo Clinic" },
      ],
      tags: ["atherosclerosis", "pathophysiology"],
    },
    {
      id: "modifiable-risk-factors",
      title: "Modifiable risk factors",
      summary:
        "High blood pressure, high LDL cholesterol, smoking, diabetes, excess weight, physical inactivity, poor diet, and excess alcohol all raise cardiovascular risk — and all can be improved.",
      detail:
        "Most cardiovascular risk comes from factors that can be changed. The biggest are high blood pressure, high LDL ('bad') cholesterol, and smoking; diabetes is a major one (people with diabetes have markedly higher heart-disease risk). Excess weight — especially around the abdomen — physical inactivity, diets high in salt, saturated fat, and ultra-processed foods, excess alcohol, and chronic stress and poor sleep also contribute. These factors often cluster and multiply one another. The encouraging implication is leverage: treating blood pressure and cholesterol, stopping smoking, managing diabetes and weight, and being active substantially lower the risk of heart attack, heart failure, and stroke, even in people who already have heart disease.",
      sources: [
        { label: "About Heart Disease — risk factors", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
        { label: "Coronary heart disease — causes and risks (NHS)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
      ],
      tags: ["risk-factors", "prevention", "modifiable"],
    },
    {
      id: "non-modifiable-risk-factors",
      title: "Non-modifiable risk factors",
      summary:
        "Older age, male sex (and post-menopausal women), family history of early heart disease, and certain ethnic backgrounds raise risk — they can't be changed but they sharpen the case for managing the rest.",
      detail:
        "Some cardiovascular risks cannot be changed. Risk rises with age. Men develop heart disease earlier on average than women, though women's risk rises after menopause and heart disease is a leading cause of death in women too (and can present with less 'typical' symptoms). A family history of premature heart disease (a parent or sibling affected young) raises risk, reflecting inherited factors. Certain ethnic backgrounds carry higher risk of heart disease or its drivers (such as high blood pressure or diabetes). Inherited conditions like familial hypercholesterolaemia cause very high cholesterol from a young age. These factors can't be altered, but knowing them raises the priority of controlling the modifiable risks and of appropriate screening.",
      sources: [
        { label: "Heart disease — risk factors", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
        { label: "About Heart Disease — who is at risk", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
      ],
      tags: ["risk-factors", "age", "genetics"],
      caution:
        "Risk factors describe populations, not individuals — they raise probability, not certainty, for any one person.",
    },
    {
      id: "cholesterol-and-lipids",
      title: "Cholesterol and blood lipids",
      summary:
        "LDL ('bad') cholesterol drives the plaque of atherosclerosis, HDL ('good') cholesterol and triglycerides add to the picture, and lowering LDL is one of the most proven ways to prevent heart attacks and strokes.",
      detail:
        "Cholesterol is a waxy fat the body needs, carried in the blood by particles. Low-density lipoprotein (LDL) cholesterol is the main culprit in heart disease: it deposits in artery walls and feeds the plaque of atherosclerosis, so higher LDL means higher risk. High-density lipoprotein (HDL) helps carry cholesterol away and is generally protective, while high triglycerides (another blood fat, tied to diet, alcohol, and diabetes) add further risk. An inherited condition, familial hypercholesterolaemia, causes very high LDL from birth and early heart disease. Because LDL is causal, lowering it — through diet, activity, and medicines such as statins when needed — reliably reduces heart attacks and strokes, which is why a lipid panel is a routine part of cardiovascular risk assessment. The numbers are interpreted alongside the rest of a person's risk, not in isolation.",
      sources: [
        { label: "About Cholesterol", url: "https://www.cdc.gov/cholesterol/about/index.html", publisher: "CDC" },
        { label: "What Is Coronary Heart Disease? (cholesterol)", url: "https://www.nhlbi.nih.gov/health/coronary-heart-disease", publisher: "NIH / NHLBI" },
      ],
      tags: ["cholesterol", "ldl", "lipids", "risk-factors"],
    },
    {
      id: "how-high-blood-pressure-harms",
      title: "How high blood pressure harms the heart",
      summary:
        "Persistently high blood pressure damages and stiffens arteries, thickens and strains the heart muscle, and accelerates atherosclerosis — raising the risk of heart attack, heart failure, and stroke, usually without symptoms.",
      detail:
        "Blood pressure is the force of blood against artery walls; when it stays too high, the constant extra force does cumulative damage. It injures and stiffens artery linings, accelerating the atherosclerosis that narrows them, and it makes the heart work harder, causing the muscle of the main pumping chamber to thicken and, over time, to weaken or stiffen — a path to heart failure (especially the preserved-ejection-fraction type). High blood pressure is also a leading cause of stroke and of kidney damage, and it interacts with the other risk factors to multiply danger. Crucially, it usually causes no symptoms until harm is done, which is why it is called a 'silent' risk and is found by measurement rather than by feel. This silent, cumulative mechanism is why detecting and treating high blood pressure is among the most valuable steps in preventing heart disease.",
      sources: [
        { label: "High Blood Pressure — What Is High Blood Pressure?", url: "https://www.nhlbi.nih.gov/health/high-blood-pressure", publisher: "NIH / NHLBI" },
        { label: "The Facts About High Blood Pressure", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
      ],
      tags: ["hypertension", "pathophysiology", "risk-factors"],
    },
    {
      id: "diabetes-and-cardiovascular-risk",
      title: "Diabetes as a cardiovascular driver",
      summary:
        "Diabetes substantially raises the risk of heart disease and stroke, damaging blood vessels over time; managing glucose, blood pressure, and cholesterol together is central to protecting the heart.",
      detail:
        "Diabetes is one of the most important drivers of cardiovascular disease — adults with diabetes are considerably more likely to develop and die from heart disease and stroke than those without it. Persistently high blood glucose damages blood vessels and nerves, accelerates atherosclerosis, and commonly travels with high blood pressure, abnormal lipids (high triglycerides, low HDL), and excess weight, so the risks compound. Heart disease can also be 'silent' in diabetes because nerve damage can blunt chest-pain warning signs. The implication is that protecting the heart is a core part of diabetes care: alongside glucose control, managing blood pressure and cholesterol and not smoking matter greatly, and some glucose-lowering medicines (SGLT2 inhibitors, certain GLP-1 receptor agonists) are now chosen partly for their proven heart and kidney benefits. This tight link is why diabetes, heart, and kidney care are increasingly managed together.",
      sources: [
        { label: "About Heart Disease (diabetes as a risk factor)", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
        { label: "10. Cardiovascular Disease and Risk Management (Standards of Care 2025)", url: "https://diabetesjournals.org/care/article/48/Supplement_1/S207/157549/10-Cardiovascular-Disease-and-Risk-Management", publisher: "American Diabetes Association — Diabetes Care", year: 2025 },
      ],
      tags: ["diabetes", "risk-factors", "multi-condition"],
    },
  ],
});
