import { defineSection } from "../types.js";

/**
 * Diagnosis & tests — ECG, blood tests (troponin, BNP, lipids), imaging (echo,
 * stress testing, CT/angiography) used to detect and characterize heart disease.
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Diagnosis & Tests",
  description:
    "How heart disease is diagnosed: ECG and rhythm monitoring, blood tests (troponin, BNP/NT-proBNP, cholesterol), echocardiography, stress testing, and coronary imaging/angiography.",
  entries: [
    {
      id: "ecg-and-monitoring",
      title: "ECG and heart-rhythm monitoring",
      summary:
        "An electrocardiogram (ECG/EKG) records the heart's electrical activity; longer or wearable monitors catch intermittent arrhythmias like atrial fibrillation.",
      detail:
        "The electrocardiogram (ECG or EKG) is a quick, painless recording of the heart's electrical signals and a cornerstone test: it can show a current or past heart attack, signs of strain, and rhythm problems. Because arrhythmias come and go, a single ECG may miss them, so longer monitoring is used — a Holter monitor worn for a day or more, event monitors worn for weeks, or implantable and consumer wearable devices — to capture intermittent rhythms such as atrial fibrillation. ECG findings guide urgent decisions (for example, in a suspected heart attack) and routine ones (such as detecting AFib so stroke-prevention can begin).",
      sources: [
        { label: "Arrhythmias — diagnosis", url: "https://www.nhlbi.nih.gov/health/arrhythmias", publisher: "NIH / NHLBI" },
        { label: "Atrial fibrillation — diagnosis", url: "https://www.nhs.uk/conditions/atrial-fibrillation/", publisher: "NHS (UK)" },
      ],
      tags: ["ecg", "diagnosis", "monitoring"],
    },
    {
      id: "blood-tests-cardiac",
      title: "Cardiac blood tests (troponin, BNP, lipids)",
      summary:
        "Troponin detects heart-muscle injury (heart attack), BNP/NT-proBNP helps diagnose heart failure, and a lipid panel measures cholesterol to gauge risk.",
      detail:
        "Several blood tests are central to heart care. Troponin is a protein released when heart muscle is damaged; a rise is key to diagnosing a heart attack and is interpreted alongside symptoms and the ECG. BNP and NT-proBNP are released when the heart is stretched and strained, helping to diagnose and gauge the severity of heart failure and to sort out causes of breathlessness. A lipid panel measures total, LDL ('bad'), and HDL ('good') cholesterol and triglycerides, which estimate cardiovascular risk and guide cholesterol-lowering treatment. Other tests (blood glucose/HbA1c, kidney function, electrolytes) round out the picture, since diabetes and kidney disease strongly affect heart risk and treatment.",
      sources: [
        { label: "Heart attack — diagnosis", url: "https://www.mayoclinic.org/diseases-conditions/heart-attack/symptoms-causes/syc-20373106", publisher: "Mayo Clinic" },
        { label: "What Is Heart Failure? — diagnosis", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
      ],
      tags: ["troponin", "bnp", "cholesterol", "diagnosis"],
    },
    {
      id: "imaging-and-angiography",
      title: "Echocardiography, stress testing, and angiography",
      summary:
        "An echocardiogram images the heart's structure and pumping; stress tests check how the heart copes with exertion; CT and coronary angiography look directly at the arteries.",
      detail:
        "Imaging shows how the heart is built and working. An echocardiogram (ultrasound) reveals the heart's structure, valve function, and ejection fraction — essential for diagnosing heart failure and valve disease. Stress testing (on a treadmill or with medication, sometimes combined with imaging) assesses how the heart performs under demand and can reveal coronary artery disease. To look at the coronary arteries directly, CT coronary angiography (a non-invasive scan, often with a coronary calcium score) or invasive coronary angiography (a catheter and dye, the definitive test) are used; the latter also allows treatment with a stent in the same procedure. The choice of test depends on the suspected problem, urgency, and individual factors.",
      sources: [
        { label: "Coronary heart disease — tests (NHS)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
        { label: "Coronary artery disease — diagnosis", url: "https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613", publisher: "Mayo Clinic" },
      ],
      tags: ["echocardiogram", "stress-test", "angiography", "diagnosis"],
    },
    {
      id: "blood-pressure-measurement",
      title: "Measuring blood pressure and diagnosing hypertension",
      summary:
        "Blood pressure is reported as two numbers (systolic over diastolic); because it varies and is usually symptomless, diagnosis relies on repeated, properly taken readings, often including readings outside the clinic.",
      detail:
        "Blood pressure is measured as systolic (the higher number, pressure when the heart beats) over diastolic (the lower number, pressure between beats), in millimeters of mercury. Because a single reading can be misleading — it rises with stress, activity, and the 'white-coat' effect of being in a clinic — hypertension is diagnosed from several readings over time, and increasingly with out-of-office measurement such as home monitoring or 24-hour ambulatory monitoring. Correct technique matters: resting quietly, supported arm at heart level, correct cuff size, and averaging readings. Thresholds differ slightly between guidelines, but persistently elevated numbers define hypertension. Because high blood pressure usually causes no symptoms, this measurement-based detection is the only reliable way to find it, which is why routine checks are recommended even when a person feels well.",
      sources: [
        { label: "About High Blood Pressure (measurement and diagnosis)", url: "https://www.cdc.gov/high-blood-pressure/about/index.html", publisher: "CDC" },
        { label: "The Facts About High Blood Pressure (readings)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
      ],
      tags: ["blood-pressure", "hypertension", "diagnosis", "monitoring"],
    },
    {
      id: "cholesterol-testing-and-risk",
      title: "Cholesterol testing and risk estimation",
      summary:
        "A lipid panel measures LDL, HDL, and triglycerides; clinicians combine these with age, blood pressure, smoking, and diabetes in a risk estimate that guides whether and how aggressively to treat.",
      detail:
        "A lipid panel — usually total, LDL, and HDL cholesterol and triglycerides — is a routine blood test used both to detect lipid problems and to estimate overall cardiovascular risk. Rather than treating a single number, clinicians enter several factors (age, sex, blood pressure, smoking, diabetes, and cholesterol) into a risk calculator that estimates the chance of a heart attack or stroke over the coming years, which helps decide whether lifestyle changes alone or added medication such as a statin is appropriate. In selected people, extra tests refine the estimate: a coronary artery calcium (CAC) score from a CT scan detects calcified plaque and can reclassify risk, and lipoprotein(a) — an inherited risk factor — may be measured once. Interpreting all of this together, rather than reacting to one value, is what makes risk assessment useful and personalized.",
      sources: [
        { label: "About Cholesterol (testing)", url: "https://www.cdc.gov/cholesterol/about/index.html", publisher: "CDC" },
        { label: "Coronary heart disease — diagnosis (NHS)", url: "https://www.nhs.uk/conditions/coronary-heart-disease/", publisher: "NHS (UK)" },
      ],
      tags: ["cholesterol", "lipid-panel", "risk-assessment", "diagnosis"],
    },
    {
      id: "diagnosing-heart-attack",
      title: "Diagnosing a heart attack",
      summary:
        "A suspected heart attack is assessed urgently with an ECG and repeated troponin blood tests alongside the symptoms, because rapid diagnosis allows artery-opening treatment within hours.",
      detail:
        "When a heart attack is suspected, diagnosis happens fast and in parallel with treatment, because opening a blocked artery quickly saves heart muscle. The two key tests are the ECG, which can show the pattern of an active heart attack and helps decide whether emergency artery-opening is needed, and troponin, a blood marker of heart-muscle injury that is measured and often repeated a few hours later to detect a rise. These are interpreted together with the symptoms and the person's risk. Not every heart attack shows the most dramatic ECG pattern, so the combination matters, and milder or atypical presentations — more common in women, older adults, and people with diabetes — are taken seriously. Once diagnosed, coronary angiography typically locates the blockage and often allows immediate treatment with a stent.",
      sources: [
        { label: "Heart attack — diagnosis", url: "https://www.mayoclinic.org/diseases-conditions/heart-attack/symptoms-causes/syc-20373106", publisher: "Mayo Clinic" },
        { label: "Warning Signs of a Heart Attack", url: "https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack", publisher: "American Heart Association" },
      ],
      tags: ["heart-attack", "troponin", "ecg", "diagnosis"],
    },
  ],
});
