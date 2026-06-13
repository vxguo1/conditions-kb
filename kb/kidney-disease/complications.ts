import { defineSection } from "../types.js";

/**
 * Complications — the downstream effects of failing kidney function: anemia of
 * CKD (low erythropoietin), CKD–mineral and bone disorder, cardiovascular
 * disease (the leading cause of death), metabolic acidosis, high potassium, and
 * fluid/blood-pressure problems. Educational.
 */
export const complications = defineSection({
  id: "complications",
  title: "Complications of CKD",
  description:
    "The downstream effects of declining kidney function — anemia of CKD, mineral and bone disorder (CKD-MBD), cardiovascular disease (the leading cause of death in CKD), metabolic acidosis, high potassium, and fluid/blood-pressure problems.",
  entries: [
    {
      id: "anemia-of-ckd",
      title: "Anemia of CKD",
      summary:
        "As kidneys fail, they make less erythropoietin, the hormone that drives red-blood-cell production, so anemia develops — causing fatigue and breathlessness — and is treatable.",
      detail:
        "Healthy kidneys make a hormone called erythropoietin (EPO) that signals the bone marrow to produce red blood cells. As CKD advances, EPO production falls, and — often compounded by iron deficiency and inflammation — anemia (a low red-blood-cell count) develops, becoming more common as kidney function declines and affecting nearly everyone with kidney failure. Because red blood cells carry oxygen, anemia causes symptoms such as fatigue, weakness, shortness of breath, paleness, dizziness, and trouble concentrating, and it can worsen heart strain. The good news is that anemia of CKD is treatable: management typically starts by checking and correcting iron levels (with oral or intravenous iron), and may include erythropoiesis-stimulating agents (lab-made versions of EPO) or, more recently, oral medicines called HIF-PH inhibitors, with the goal of easing symptoms without overcorrecting. Because both too-low and too-high red-cell levels carry risks, anemia treatment is carefully monitored and individualized by the care team, guided by regular blood tests.",
      sources: [
        {
          label: "Anemia in Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/anemia",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Anemia and Chronic Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/anemia-and-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["complication", "anemia", "erythropoietin", "fatigue"],
      evidence: "established",
    },
    {
      id: "ckd-mineral-bone-disorder",
      title: "CKD–mineral and bone disorder (CKD-MBD)",
      summary:
        "Failing kidneys disturb the balance of calcium, phosphorus, vitamin D, and parathyroid hormone, weakening bones and promoting calcium buildup in blood vessels — a silent process that develops over years.",
      detail:
        "The kidneys help regulate calcium and phosphorus and activate vitamin D, and they respond to parathyroid hormone (PTH), so as they fail this whole system gets out of balance — a condition called CKD–mineral and bone disorder (CKD-MBD). Typically phosphorus rises (because the kidneys cannot excrete it), active vitamin D falls, blood calcium can drop, and the parathyroid glands respond by pumping out more PTH, which pulls calcium from the bones. Over years this weakens and deforms bones (raising fracture risk) and, just as importantly, drives calcium deposits into blood vessels and the heart, contributing to the cardiovascular disease that is the leading killer in CKD. CKD-MBD usually causes no symptoms until advanced, so it is detected through blood tests for phosphorus, calcium, PTH, and vitamin D, and is managed with dietary phosphorus control, phosphate-binder medicines, vitamin D and related treatments, and (in some) drugs that lower PTH — all individualized and monitored by the care team. Its link to both bones and the heart is why it is taken seriously even when silent.",
      sources: [
        {
          label: "Mineral and Bone Disorder (CKD-MBD)",
          url: "https://www.kidney.org/kidney-topics/mineral-and-bone-disorder-ckd-mbd",
          publisher: "National Kidney Foundation",
        },
        {
          label: "KDIGO Clinical Practice Guideline for CKD-MBD",
          url: "https://kdigo.org/guidelines/ckd-mbd/",
          publisher: "KDIGO",
        },
      ],
      tags: ["complication", "ckd-mbd", "bone", "phosphorus", "parathyroid", "vascular-calcification"],
      evidence: "established",
    },
    {
      id: "cardiovascular-disease-ckd",
      title: "Cardiovascular disease (the leading cause of death)",
      summary:
        "CKD greatly increases the risk of heart attack, stroke, and heart failure, and cardiovascular disease — not kidney failure itself — is the most common cause of death in people with CKD.",
      detail:
        "One of the most important facts about CKD is that its biggest danger is often to the heart, not the kidneys: people with CKD are far more likely to die from cardiovascular disease — heart attack, stroke, heart failure — than to reach kidney failure, and CKD is recognized as a powerful independent risk factor for cardiovascular events. The reasons are intertwined: CKD shares causes with heart disease (diabetes, high blood pressure), and it adds its own harms, including high blood pressure, fluid overload, anemia, mineral-bone disorder with vascular calcification, inflammation, and abnormal lipids. This is why CKD care is, to a large degree, heart-protective care: controlling blood pressure, using kidney-and-heart-protective medicines (ACE inhibitors/ARBs, SGLT2 inhibitors, finerenone), managing cholesterol (often with a statin), not smoking, and staying active all aim at this overarching risk. Understanding the heart-kidney link reframes CKD management — slowing kidney decline and protecting the heart are two sides of the same effort, pursued together by the care team.",
      sources: [
        {
          label: "Heart Disease & Chronic Kidney Disease (CKD)",
          url: "https://www.kidney.org/kidney-topics/heart-and-kidney-connection",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Chronic Kidney Disease, Diabetes, and Heart Disease",
          url: "https://www.cdc.gov/kidney-disease/risk-factors/link-between-diabetes-and-heart-disease.html",
          publisher: "CDC",
        },
      ],
      tags: ["complication", "cardiovascular", "heart-disease", "mortality"],
      evidence: "established",
    },
    {
      id: "metabolic-acidosis",
      title: "Metabolic acidosis",
      summary:
        "Failing kidneys may not remove enough acid from the body, making the blood too acidic; over time this can speed kidney decline and harm bone and muscle, and it is treatable.",
      detail:
        "Part of the kidneys' job is to remove acid that the body produces and to maintain the blood's acid-base balance. In CKD, the kidneys may not keep up, allowing acid to accumulate — a condition called metabolic acidosis, often detected as a low bicarbonate level on blood tests. While mild acidosis may cause no obvious symptoms, over time it can contribute to faster loss of kidney function, loss of muscle mass, bone problems, and worsening of other CKD complications. Because it is usually silent, it is found through routine blood testing rather than symptoms. Treatment, when needed, may include dietary adjustments (sometimes more fruits and vegetables, balanced against potassium considerations) and oral alkali therapy such as sodium bicarbonate to bring the bicarbonate level back toward normal, which may help protect the kidneys and bones. The decision to treat and how to do so is guided by the care team based on blood results, balancing acidosis against sodium and potassium.",
      sources: [
        {
          label: "Metabolic Acidosis",
          url: "https://www.kidney.org/kidney-topics/metabolic-acidosis",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Managing Chronic Kidney Disease (complications)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["complication", "metabolic-acidosis", "bicarbonate"],
    },
    {
      id: "high-potassium-complication",
      title: "High potassium (chronic hyperkalemia)",
      summary:
        "Beyond acute emergencies, persistently high potassium is an ongoing complication of advanced CKD that constrains diet and some kidney-protective medicines, and is managed with monitoring and treatment.",
      detail:
        "High blood potassium (hyperkalemia) is covered as an emergency elsewhere, but it is also a chronic management challenge in CKD. As kidney function declines, the kidneys clear potassium less effectively, so levels tend to run higher, and this is compounded by some of the very medicines that protect the kidneys and heart — ACE inhibitors, ARBs, and finerenone can each raise potassium. The result is a balancing act: these beneficial drugs sometimes cannot be used at full dose, or require extra monitoring, because of potassium. Chronic hyperkalemia is managed through regular blood-potassium checks, dietary guidance (limiting high-potassium foods when needed, and avoiding potassium-based salt substitutes), reviewing contributing medications, and, in some people, potassium-binder medicines that help the body remove potassium and can allow the kidney-protective drugs to be continued. Because potassium control affects both safety and access to important treatments, it is actively managed by the care team rather than left to chance, and any dietary or medication changes for potassium should go through them.",
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
      tags: ["complication", "hyperkalemia", "potassium", "medications"],
    },
    {
      id: "fluid-and-blood-pressure-complications",
      title: "Fluid retention and worsening blood pressure",
      summary:
        "As kidneys lose the ability to balance salt and water, fluid retention and rising blood pressure become common complications that strain the heart and, in turn, the kidneys.",
      detail:
        "Among the kidneys' core jobs is balancing salt and water and helping regulate blood pressure, so as CKD advances these functions falter, producing two linked complications. Fluid retention shows up as swelling (in the legs, ankles, or around the eyes), weight gain, and — when severe — fluid backing up into the lungs and causing breathlessness; it is more pronounced in advanced CKD and kidney failure. At the same time, blood pressure tends to rise, both because the kidneys handle fluid poorly and because of disturbed pressure-regulating hormones, and high blood pressure then further damages the kidneys and heart in a vicious cycle. Managing these involves limiting dietary sodium, sometimes restricting fluids in advanced disease, diuretic ('water pill') medicines to help remove excess fluid, blood-pressure medicines, and — in kidney failure — dialysis to remove fluid. Tracking weight and blood pressure helps catch problems early. These complications underline why sodium, fluid, and blood-pressure management are so central to CKD care, all coordinated with the care team.",
      sources: [
        {
          label: "Fluid Overload in a Dialysis Patient",
          url: "https://www.kidney.org/kidney-topics/fluid-overload-dialysis-patient",
          publisher: "National Kidney Foundation",
        },
        {
          label: "High Blood Pressure & Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/high-blood-pressure",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["complication", "fluid-retention", "blood-pressure", "edema"],
    },
  ],
});
