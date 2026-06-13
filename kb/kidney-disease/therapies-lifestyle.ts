import { defineSection } from "../types.js";

/**
 * Therapies & lifestyle — the non-drug levers that slow CKD and protect the
 * heart: physical activity, not smoking, healthy weight, controlling blood
 * pressure and blood sugar through lifestyle, limiting alcohol, and protecting
 * the kidneys from avoidable injury (NSAIDs, dehydration). Educational.
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Therapies & Lifestyle",
  description:
    "Non-drug ways to slow CKD and protect the heart — physical activity, not smoking, healthy weight, lifestyle support for blood pressure and glucose, sensible alcohol limits, and avoiding kidney injury. Educational.",
  entries: [
    {
      id: "lifestyle-overview",
      title: "How lifestyle slows kidney disease",
      summary:
        "Lifestyle changes work largely by controlling the forces that damage kidneys — high blood pressure and blood sugar — and by lowering the cardiovascular risk that is the biggest threat in CKD.",
      detail:
        "Lifestyle measures are not a sideshow in CKD; they act on the same drivers that medicines target. Because high blood pressure and high blood glucose are the leading causes of kidney damage, anything that helps control them — physical activity, a heart-healthy and lower-sodium diet, a healthy weight, not smoking, and limiting alcohol — directly helps protect the kidneys. Just as importantly, the most common cause of death in people with CKD is cardiovascular disease, so lifestyle changes that protect the heart are protecting life expectancy, not just kidney numbers. These habits also improve energy, mood, and overall wellbeing, which matters for living well with a long-term condition. Lifestyle works best alongside, not instead of, the kidney-protective medicines and regular monitoring, as part of an integrated plan. The specifics — how much exercise, what dietary targets — should be tailored to the individual with the care team, especially in advanced CKD or on dialysis.",
      sources: [
        {
          label: "Preventing Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/prevention",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Managing Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["lifestyle", "overview", "prevention", "cardiovascular"],
    },
    {
      id: "physical-activity",
      title: "Physical activity and exercise",
      summary:
        "Regular physical activity helps control blood pressure, blood sugar, and weight, supports heart health and mood, and is encouraged in CKD — tailored to the person's ability.",
      detail:
        "Being physically active is one of the most broadly beneficial things a person with CKD can do. Regular activity helps lower blood pressure, improve blood-sugar control, manage weight, strengthen the heart, and lift mood and energy — addressing several of the forces that drive both kidney decline and cardiovascular risk. General guidance encourages most adults to aim for regular moderate activity (such as brisk walking) across the week, plus some strengthening, but the right amount and type depend on the individual, and people with CKD — especially those with heart disease, on dialysis, or who have been inactive — should check with their care team before starting and may benefit from a gradual, supervised approach. Even modest movement helps, and activity can be built up over time. For people on dialysis, some centers support exercise even during treatment. The goal is consistent, sustainable activity matched to ability, which supports both kidney and overall health.",
      sources: [
        {
          label: "Exercise and Chronic Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/exercise-and-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Managing Chronic Kidney Disease (physical activity)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["lifestyle", "exercise", "physical-activity", "cardiovascular"],
    },
    {
      id: "smoking-cessation",
      title: "Stopping smoking",
      summary:
        "Smoking damages blood vessels throughout the body, speeds the progression of kidney disease, and adds heavily to cardiovascular risk; quitting is one of the most protective steps in CKD.",
      detail:
        "Smoking is especially harmful in kidney disease. It damages and narrows blood vessels everywhere — including the small vessels that the kidneys depend on — raises blood pressure, and is linked to faster progression of CKD and a higher risk of kidney failure, as well as greatly increasing the risk of the heart attacks and strokes that are the leading cause of death in CKD. Quitting smoking therefore protects both the kidneys and the heart, and the benefits begin soon after stopping and grow over time. Because nicotine is addictive, quitting is hard, but support works: counseling, quitlines, and approved stop-smoking medications substantially improve success, and a care team can help build a plan and choose options that are appropriate for someone with CKD. Avoiding secondhand smoke and vaping is sensible too. For anyone with kidney disease who smokes, stopping is among the highest-impact changes they can make.",
      sources: [
        {
          label: "Smoking and Kidney Health",
          url: "https://www.kidney.org/kidney-topics/smoking-and-kidney-health",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Preventing Chronic Kidney Disease (quit smoking)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/prevention",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["lifestyle", "smoking", "cardiovascular", "progression"],
      evidence: "established",
    },
    {
      id: "weight-and-healthy-diet",
      title: "Healthy weight and heart-healthy eating",
      summary:
        "Reaching or keeping a healthy weight and following a heart-healthy, lower-sodium eating pattern help control blood pressure, blood sugar, and cholesterol — protecting both kidneys and heart.",
      detail:
        "Excess weight contributes to high blood pressure, type 2 diabetes, and other drivers of kidney damage, so reaching and maintaining a healthier weight can ease the strain on the kidneys and lower cardiovascular risk. This is achieved through a sustainable combination of eating patterns and activity rather than crash dieting. A heart-healthy diet — rich in vegetables, fruit (within any potassium guidance), whole grains, and lean proteins, and low in sodium, added sugars, and heavily processed foods — supports blood pressure, blood sugar, and cholesterol control all at once, which is exactly what CKD care aims for. As CKD advances, this general healthy-eating pattern is layered with the more specific mineral and protein guidance covered in the nutrition section, ideally with a renal dietitian so the plan stays balanced and avoids malnutrition. Weight and diet changes work best when realistic and gradual, and any significant change in advanced CKD should be coordinated with the care team.",
      sources: [
        {
          label: "Preventing Chronic Kidney Disease (healthy weight and diet)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/prevention",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Kidney-Friendly Eating Plan",
          url: "https://www.kidneyfund.org/living-kidney-disease/healthy-eating-activity/kidney-friendly-eating-plan",
          publisher: "American Kidney Fund",
        },
      ],
      tags: ["lifestyle", "weight", "diet", "blood-pressure", "heart-healthy"],
    },
    {
      id: "alcohol-and-otc-cautions",
      title: "Alcohol limits and avoiding kidney injury",
      summary:
        "Keeping alcohol within recommended limits, staying hydrated during illness, and avoiding routine NSAID painkillers help protect the kidneys from added, avoidable damage.",
      detail:
        "Beyond the big lifestyle levers, some everyday habits directly help protect the kidneys from avoidable harm. Heavy alcohol use raises blood pressure and can harm the kidneys and overall health, so keeping alcohol within generally recommended limits (and discussing what is appropriate, given other conditions and medicines) is sensible. Two practical cautions matter especially: first, frequent or high-dose use of NSAID pain relievers (such as ibuprofen and naproxen) can reduce blood flow to the kidneys and worsen kidney function, so people with CKD are often advised to limit or avoid them and to ask about safer pain-relief options. Second, dehydration — from illness with vomiting or diarrhea, or simply not drinking enough — can acutely worsen kidney function, so staying adequately hydrated and following 'sick-day' guidance is protective. These are educational points: which painkillers are appropriate, and any sick-day medication adjustments, should be confirmed with a clinician or pharmacist rather than guessed.",
      sources: [
        {
          label: "Pain Medications for CKD: Risks, Safety, and Alternatives",
          url: "https://www.kidney.org/kidney-topics/pain-medicines-and-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Preventing Chronic Kidney Disease (protecting the kidneys)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/prevention",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["lifestyle", "alcohol", "nsaids", "hydration", "kidney-protection"],
      caution:
        "Routine NSAID use can worsen kidney function — ask a clinician or pharmacist about safer pain relief rather than self-treating.",
    },
  ],
});
