import { defineSection } from "../types.js";

/**
 * TREATMENT — medications and procedures across the major heart conditions:
 * statins, antiplatelets, anticoagulants, blood-pressure drugs, the core
 * heart-failure medicines, rhythm control, and procedures (PCI/stents, CABG,
 * devices, ablation, valve repair). Educational; not dosing guidance.
 */
export const treatments = defineSection({
  id: "treatments",
  title: "Treatments — Medications & Procedures",
  description:
    "How heart disease is treated: statins, antiplatelets and anticoagulants, blood-pressure medicines, the four pillars of heart-failure therapy, rhythm control, and procedures (stents, bypass, devices, ablation, valve repair).",
  entries: [
    {
      id: "statins-lipid-lowering",
      title: "Statins and other cholesterol-lowering therapy",
      summary:
        "Statins lower LDL cholesterol and reduce heart attacks and strokes; other options (ezetimibe, PCSK9 inhibitors) add further lowering when needed.",
      detail:
        "Lowering LDL ('bad') cholesterol is one of the most evidence-backed ways to prevent heart attacks and strokes, and statins are the mainstay — they reduce cholesterol production in the liver and have large trial evidence for cutting cardiovascular events in people with, or at high risk of, heart disease. Most people tolerate them well; muscle aches are the common complaint, and liver and muscle effects are monitored. When statins aren't enough or aren't tolerated, additional drugs — ezetimibe (reduces absorption) and PCSK9 inhibitors or inclisiran (injectables that markedly lower LDL) — can be added. Lipid treatment works alongside, not instead of, a heart-healthy diet, activity, and not smoking. Specific choices and targets are individualized.",
      sources: [
        { label: "Statins — uses and how they work (NHS)", url: "https://www.nhs.uk/conditions/statins/", publisher: "NHS (UK)" },
        { label: "Simvastatin — MedlinePlus Drug Information", url: "https://medlineplus.gov/druginfo/meds/a692030.html", publisher: "NIH / MedlinePlus" },
      ],
      tags: ["statins", "cholesterol", "treatment", "prevention"],
      evidence: "established",
      caution: "Educational only — statin choice, dosing, and monitoring are decisions for the prescriber.",
    },
    {
      id: "antiplatelets-anticoagulants",
      title: "Antiplatelets and anticoagulants",
      summary:
        "Antiplatelets (e.g. aspirin, clopidogrel) reduce clots in arteries after heart attacks/stents; anticoagulants (warfarin, DOACs) prevent stroke in AFib and treat other clots — both raise bleeding risk.",
      detail:
        "Blood-thinning drugs come in two families with different jobs. Antiplatelets — aspirin, clopidogrel, ticagrelor, prasugrel — make platelets less sticky and are used to prevent artery clots, for example after a heart attack or coronary stent (often two together for a period, 'dual antiplatelet therapy'). Anticoagulants — warfarin and the direct oral anticoagulants (DOACs) such as apixaban, rivaroxaban, edoxaban, and dabigatran — slow the clotting cascade and are used mainly to prevent stroke in atrial fibrillation and to treat or prevent venous clots. All of these reduce clotting at the cost of increased bleeding risk, so the decision balances clot prevention against bleeding, and combinations need particular care. Warfarin requires regular blood-level (INR) monitoring and has many interactions; DOACs need dose attention in kidney disease.",
      sources: [
        { label: "Anticoagulant medicines (NHS)", url: "https://www.nhs.uk/conditions/anticoagulants/", publisher: "NHS (UK)" },
        { label: "Atrial fibrillation — treatment (stroke prevention)", url: "https://www.nhs.uk/conditions/atrial-fibrillation/", publisher: "NHS (UK)" },
      ],
      tags: ["antiplatelet", "anticoagulant", "aspirin", "warfarin", "doac", "treatment"],
      evidence: "established",
      caution:
        "Blood thinners raise bleeding risk and interact with many drugs — never start, stop, or combine them without the prescriber, and report unusual bleeding.",
    },
    {
      id: "blood-pressure-medicines",
      title: "Blood-pressure and anti-anginal medicines",
      summary:
        "Several drug classes — ACE inhibitors/ARBs, calcium-channel blockers, diuretics, and beta-blockers — lower blood pressure and treat angina, often in combination.",
      detail:
        "Controlling blood pressure is one of the highest-value treatments in heart disease, and several classes are used, often together: ACE inhibitors and ARBs (which also protect the heart and kidneys), calcium-channel blockers, thiazide-type diuretics, and beta-blockers. The choice depends on the person's other conditions (for example ACE inhibitors/ARBs are favored in diabetes and kidney disease). For angina, beta-blockers, calcium-channel blockers, and nitrates reduce the heart's workload or widen vessels to relieve and prevent chest pain. Many people need more than one medicine to reach target blood pressure, and the combination is tailored over time. As always, lifestyle measures amplify the benefit of the drugs.",
      sources: [
        { label: "The Facts About High Blood Pressure (treatment context)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
        { label: "Coronary heart disease — treatment (NHS)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
      ],
      tags: ["blood-pressure", "ace-inhibitor", "beta-blocker", "angina", "treatment"],
      evidence: "established",
    },
    {
      id: "heart-failure-medicines",
      title: "Heart-failure medicines (the 'four pillars')",
      summary:
        "Modern HFrEF treatment combines four drug groups — ARNI/ACE-inhibitor/ARB, beta-blockers, MRAs, and SGLT2 inhibitors — that together improve symptoms, reduce hospitalizations, and prolong life.",
      detail:
        "For heart failure with reduced ejection fraction (HFrEF), trials established a combination now called the 'four pillars': an ACE inhibitor/ARB or the newer ARNI (sacubitril-valsartan); a beta-blocker; a mineralocorticoid receptor antagonist (MRA, such as spironolactone or eplerenone); and an SGLT2 inhibitor (originally diabetes drugs, now proven to help heart failure regardless of diabetes). Used together and titrated over time, they reduce symptoms, hospital admissions, and deaths. Diuretics relieve fluid overload and breathlessness but are added for symptom control rather than as one of the survival pillars. Heart failure with preserved ejection fraction (HFpEF) has fewer proven drugs, though SGLT2 inhibitors now help here too. Treatment is individualized and adjusted by the care team, often a heart-failure specialist.",
      sources: [
        { label: "What Is Heart Failure? — treatment", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
        { label: "Heart failure — treatment", url: "https://www.mayoclinic.org/diseases-conditions/heart-failure/symptoms-causes/syc-20373142", publisher: "Mayo Clinic" },
      ],
      tags: ["heart-failure", "arni", "sglt2", "mra", "treatment"],
      evidence: "established",
    },
    {
      id: "procedures-and-devices",
      title: "Procedures and devices",
      summary:
        "Beyond medicine, options include opening arteries (angioplasty/stents) or bypass surgery, ablation and pacemakers/ICDs for rhythm, and repair or replacement of diseased valves.",
      detail:
        "Many heart conditions are treated with procedures. For blocked coronary arteries, percutaneous coronary intervention (PCI) uses a catheter to open the artery and place a stent — often urgently during a heart attack — while coronary artery bypass grafting (CABG) surgically reroutes blood around blockages for more extensive disease. For arrhythmias, catheter ablation can correct rhythms like AFib or SVT, pacemakers treat slow rhythms, and implantable cardioverter-defibrillators (ICDs) protect people at risk of dangerous fast rhythms; some heart-failure patients benefit from cardiac resynchronization therapy. Diseased valves can be repaired or replaced surgically or, increasingly, through less-invasive catheter techniques such as TAVR (transcatheter aortic valve replacement). The right option depends on the specific problem, severity, and the person's overall health, decided with the cardiology team.",
      sources: [
        { label: "Coronary heart disease — procedures (NHS)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
        { label: "What Are Heart Valve Diseases? — treatment", url: "https://www.nhlbi.nih.gov/health/heart-valve-diseases", publisher: "NIH / NHLBI" },
      ],
      tags: ["pci", "stent", "cabg", "ablation", "valve", "devices", "treatment"],
    },
    {
      id: "afib-rate-rhythm-control",
      title: "Treating atrial fibrillation: rate and rhythm control",
      summary:
        "AFib care has two parts that work together: preventing stroke (usually with anticoagulation) and managing the rhythm itself — either controlling the heart rate or restoring/maintaining normal rhythm with drugs, cardioversion, or ablation.",
      detail:
        "Managing atrial fibrillation involves two distinct goals. The first and most important for many people is preventing stroke, since blood can clot in the fibrillating atrium — this is where anticoagulants come in, with the decision based on a person's stroke-risk profile. The second goal is dealing with the rhythm and symptoms, and here there are two broad strategies: 'rate control,' which uses medicines (such as beta-blockers or certain calcium-channel blockers, sometimes digoxin) to keep the heart rate from running too fast while leaving the rhythm irregular; and 'rhythm control,' which aims to restore and maintain a normal rhythm using anti-arrhythmic drugs, a controlled electrical shock (cardioversion), or catheter ablation. Which approach fits depends on symptoms, how long AFib has been present, age, and other heart conditions, and the two goals are not mutually exclusive — stroke prevention continues regardless of which rhythm strategy is chosen. The plan is individualized with the cardiology team.",
      sources: [
        { label: "Atrial fibrillation — treatment (NHS)", url: "https://www.nhs.uk/conditions/atrial-fibrillation/", publisher: "NHS (UK)" },
        { label: "Atrial fibrillation — diagnosis & treatment", url: "https://www.mayoclinic.org/diseases-conditions/atrial-fibrillation/symptoms-causes/syc-20350624", publisher: "Mayo Clinic" },
      ],
      tags: ["atrial-fibrillation", "rate-control", "rhythm-control", "anticoagulation", "treatment"],
    },
  ],
});
