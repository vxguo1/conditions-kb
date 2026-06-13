import { defineSection } from "../types.js";

/**
 * THERAPY & lifestyle — cardiac rehabilitation and the lifestyle foundations
 * (diet, activity, smoking cessation, weight, alcohol, stress/sleep) that both
 * prevent and treat heart disease.
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Therapy & Lifestyle",
  description:
    "Non-drug management that prevents and treats heart disease: cardiac rehabilitation, heart-healthy eating, physical activity, stopping smoking, weight, alcohol, and stress/sleep.",
  entries: [
    {
      id: "cardiac-rehabilitation",
      title: "Cardiac rehabilitation",
      summary:
        "Cardiac rehab is a structured, supervised program of exercise, education, and risk-factor support after a heart event; it improves outcomes and quality of life and reduces readmissions.",
      detail:
        "Cardiac rehabilitation is a medically supervised program offered after a heart attack, heart surgery, stent, or with heart failure. It combines monitored exercise training, education about medicines and risk factors, dietary and smoking support, and emotional/psychological help. The evidence is strong: cardiac rehab improves fitness and quality of life, lowers the risk of further events and hospital readmission, and supports a confident return to daily activities. Despite this, it is underused — many eligible people are never referred or don't complete it. Asking about cardiac rehab after a heart event, and prioritizing attendance, is one of the most effective things a person can do for recovery.",
      sources: [
        { label: "Coronary heart disease — recovery and rehabilitation (NHS)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
        { label: "Heart attack — cardiac rehabilitation", url: "https://www.nhs.uk/conditions/heart-attack/", publisher: "NHS (UK)" },
      ],
      tags: ["cardiac-rehab", "recovery", "exercise"],
      evidence: "established",
    },
    {
      id: "heart-healthy-eating",
      title: "Heart-healthy eating",
      summary:
        "Diets rich in vegetables, fruit, whole grains, legumes, nuts, fish, and healthy oils — and lower in salt, saturated fat, and ultra-processed foods — lower blood pressure and cardiovascular risk.",
      detail:
        "Eating pattern is a powerful lever for heart health. Approaches with the best evidence — Mediterranean-style eating and the DASH diet for blood pressure — share common features: plenty of vegetables, fruit, whole grains, beans/legumes, nuts, and fish; healthy fats such as olive oil; and limited salt, saturated and trans fats, red and processed meats, sugary drinks, and ultra-processed foods. Reducing salt particularly helps blood pressure. These patterns improve cholesterol, blood pressure, weight, and blood sugar together, lowering the risk of heart attack, heart failure, and stroke. The goal is a sustainable, enjoyable way of eating rather than a short-term diet, ideally tailored with a dietitian when other conditions (like diabetes or kidney disease) are involved.",
      sources: [
        { label: "About Heart Disease — prevention (healthy eating)", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
        { label: "Coronary heart disease — prevention (diet)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
      ],
      tags: ["diet", "dash", "mediterranean", "lifestyle", "prevention"],
      evidence: "established",
    },
    {
      id: "activity-smoking-weight",
      title: "Activity, stopping smoking, weight, alcohol, and stress",
      summary:
        "Regular activity, stopping smoking, a healthy weight, limiting alcohol, and managing stress and sleep each independently lower cardiovascular risk — and stopping smoking is among the most powerful.",
      detail:
        "Several everyday factors strongly shape heart risk. Regular physical activity (commonly about 150 minutes a week of moderate activity, plus strength work) lowers blood pressure, improves cholesterol and weight, and benefits the heart directly. Stopping smoking is one of the single most effective steps — risk begins falling within weeks and continues for years — and support and medication greatly improve success. Reaching and keeping a healthy weight improves blood pressure, lipids, and blood sugar. Limiting alcohol, managing chronic stress, and getting adequate, good-quality sleep (and treating sleep apnea) all contribute. These measures prevent first heart events and, importantly, also improve outcomes in people who already have heart disease, working alongside medication.",
      sources: [
        { label: "About Heart Disease — prevention", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
        { label: "Heart disease — lifestyle and prevention", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
      ],
      tags: ["exercise", "smoking-cessation", "weight", "alcohol", "lifestyle"],
      evidence: "established",
    },
    {
      id: "physical-activity-for-the-heart",
      title: "Physical activity for the heart",
      summary:
        "Regular activity lowers blood pressure, improves cholesterol, weight, and blood sugar, and benefits the heart directly; common guidance is about 150 minutes a week of moderate activity plus muscle-strengthening, built up gradually.",
      detail:
        "Physical activity is one of the most broadly beneficial things for cardiovascular health, acting on many risk factors at once: it lowers blood pressure, improves cholesterol and blood sugar, helps with weight, reduces stress, and conditions the heart and blood vessels directly. General guidance for adults is around 150 minutes a week of moderate-intensity aerobic activity (such as brisk walking) or 75 minutes of vigorous activity, plus muscle-strengthening on two days — but any movement counts and benefits start well below the targets, so the best approach is to build up gradually from wherever a person is. For people with established heart disease or after a cardiac event, activity is still valuable but should follow the guidance of the care team or a cardiac-rehabilitation program, which can tailor a safe, progressive plan. Reducing prolonged sitting matters too. The key message is that being more active, consistently, protects the heart across the whole range of fitness.",
      sources: [
        { label: "About Heart Disease — prevention (physical activity)", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
        { label: "What Is Coronary Heart Disease? (physical activity)", url: "https://www.nhlbi.nih.gov/health/coronary-heart-disease", publisher: "NIH / NHLBI" },
      ],
      tags: ["exercise", "physical-activity", "lifestyle", "prevention"],
      evidence: "established",
    },
    {
      id: "quitting-smoking",
      title: "Stopping smoking",
      summary:
        "Stopping smoking is among the single most powerful steps for the heart; risk begins to fall within weeks and keeps falling for years, and combining support with medication greatly improves success.",
      detail:
        "Smoking damages blood vessels, lowers protective HDL cholesterol, raises blood pressure and clotting tendency, and accelerates atherosclerosis, so stopping delivers large and relatively rapid cardiovascular benefits — risk of a heart attack starts to drop within weeks to months and continues to decline over years, eventually approaching that of a non-smoker. The benefit applies even to people who already have heart disease or who have smoked for decades, making it never too late. Quitting is hard because nicotine is addictive, but success rates rise substantially when behavioral support is combined with proven aids such as nicotine-replacement therapy or prescription medicines, all best arranged with a clinician or a stop-smoking service. Avoiding secondhand smoke matters too. Because the payoff is so large, addressing smoking is often the highest-impact single change in a heart-care plan.",
      sources: [
        { label: "Coronary heart disease — prevention (stopping smoking, NHS)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
        { label: "About Heart Disease — prevention (tobacco)", url: "https://www.cdc.gov/heart-disease/about/index.html", publisher: "CDC" },
      ],
      tags: ["smoking-cessation", "lifestyle", "prevention"],
      evidence: "established",
    },
    {
      id: "salt-alcohol-sleep-stress",
      title: "Salt, alcohol, sleep, and stress",
      summary:
        "Cutting excess salt helps blood pressure, keeping alcohol within low limits protects the heart and rhythm, and good sleep and stress management (including treating sleep apnea) support cardiovascular health.",
      detail:
        "Several everyday habits beyond diet and exercise shape heart health. Reducing salt (sodium) lowers blood pressure, and much of it is hidden in processed and restaurant foods rather than the salt shaker. Alcohol in excess raises blood pressure, can trigger atrial fibrillation (sometimes called 'holiday heart'), and adds calories; guidance favors low limits or none, and there is no need to start drinking for the heart. Sleep is increasingly recognized as cardiovascular-relevant: too little or poor-quality sleep is linked to higher blood pressure and risk, and obstructive sleep apnea — common and often undiagnosed — worsens blood pressure, heart failure, and arrhythmias, so recognizing and treating it helps. Chronic stress contributes through behavior and physiology, and stress-reduction approaches can support, though not replace, the core measures. Together these refinements add to the foundation of diet, activity, and not smoking.",
      sources: [
        { label: "The Facts About High Blood Pressure (salt, alcohol, lifestyle)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
        { label: "Heart disease — prevention (lifestyle)", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
      ],
      tags: ["salt", "alcohol", "sleep", "stress", "sleep-apnea", "lifestyle"],
      evidence: "established",
    },
  ],
});
