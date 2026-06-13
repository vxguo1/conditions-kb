import { defineSection } from "../types.js";

/**
 * Overview & classification — what chronic kidney disease (CKD) is, how common
 * it is, the two measurements that define and track it (eGFR and albuminuria /
 * ACR), and the spectrum from early, silent CKD to kidney failure requiring
 * dialysis or transplant. Layperson-accessible.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview & Classification",
  description:
    "What chronic kidney disease is, how common and often silent it is, the two key measures (eGFR and albuminuria/ACR), and the range from early CKD to kidney failure (end-stage kidney disease).",
  entries: [
    {
      id: "what-is-ckd",
      title: "What chronic kidney disease is",
      summary:
        "Chronic kidney disease (CKD) means the kidneys are damaged or filtering less well than they should, and the problem has persisted for at least three months.",
      detail:
        "The kidneys are two fist-sized organs that filter waste and extra fluid from the blood into urine, balance minerals and acids, control blood pressure, and make hormones that support red blood cells and bone health. Chronic kidney disease means this filtering ability is reduced, or there is evidence of kidney damage (such as protein leaking into the urine), and the abnormality has lasted at least three months — the 'chronic' part distinguishing it from a sudden, often reversible drop called acute kidney injury. CKD is usually progressive and, in its early stages, causes few or no symptoms, which is why it is often called a 'silent' disease and frequently goes undiagnosed. It is defined and tracked by two numbers: an estimate of how fast the kidneys filter (eGFR) and how much protein (albumin) leaks into the urine (the albumin-to-creatinine ratio, or ACR). Catching CKD early matters because steps taken before symptoms appear can slow it down and protect the heart as well as the kidneys.",
      sources: [
        {
          label: "Chronic Kidney Disease (CKD)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd",
          publisher: "NIH / NIDDK",
        },
        {
          label: "What Is Chronic Kidney Disease?",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/what-is-chronic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["basics", "definition"],
    },
    {
      id: "how-common-and-silent",
      title: "How common — and how often undiagnosed — CKD is",
      summary:
        "CKD affects more than 1 in 7 U.S. adults, and most people who have it do not know, because early CKD usually causes no symptoms.",
      detail:
        "Chronic kidney disease is far more common than most people realize: it affects more than one in seven U.S. adults — roughly 35 million people — according to national surveillance data. Strikingly, the large majority of people with CKD are unaware they have it, because the early stages typically produce no noticeable symptoms; problems like fatigue, swelling, or changes in urination often appear only once the disease is advanced. This combination of high prevalence and silence is why testing matters for people at higher risk — particularly those with diabetes, high blood pressure, heart disease, obesity, a family history of kidney failure, or who are older. Because CKD also sharply raises the risk of heart attack, stroke, and early death, finding it early is valuable not only for the kidneys but for overall health. Simple blood and urine tests can detect it long before symptoms begin.",
      sources: [
        {
          label: "Kidney Disease Statistics for the United States",
          url: "https://www.niddk.nih.gov/health-information/health-statistics/kidney-disease",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Chronic Kidney Disease in the United States",
          url: "https://www.cdc.gov/kidney-disease/php/data-research/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["epidemiology", "screening", "silent"],
    },
    {
      id: "egfr-and-acr-two-measures",
      title: "The two key measures: eGFR and albuminuria (ACR)",
      summary:
        "CKD is defined and staged by two numbers — eGFR, which estimates filtering speed, and the urine albumin-to-creatinine ratio (ACR), which measures protein leaking into the urine.",
      detail:
        "Two measurements anchor everything in CKD. The first is the estimated glomerular filtration rate (eGFR), a calculation from a blood creatinine level (plus age and sex) that estimates how many milliliters of blood the kidneys filter per minute; a normal value is around 90 or above, and a value persistently below 60 suggests reduced kidney function. The second is albuminuria, usually reported as the urine albumin-to-creatinine ratio (ACR), which measures how much of a protein called albumin is leaking into the urine — healthy kidneys keep albumin in the blood, so its appearance in urine is an early sign of kidney damage, often before eGFR falls. These two measures are complementary: eGFR shows how well the kidneys are filtering, while ACR shows whether the filters are damaged and leaking, and a person can have abnormal albuminuria with a still-normal eGFR. Together they define whether CKD is present, how advanced it is, and how fast it is likely to progress, which is why modern staging uses both.",
      sources: [
        {
          label: "Estimated GFR (eGFR)",
          url: "https://www.kidney.org/kidney-topics/estimated-glomerular-filtration-rate-egfr",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Chronic Kidney Disease Tests & Diagnosis",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["egfr", "albuminuria", "acr", "measurement"],
    },
    {
      id: "what-kidneys-do",
      title: "What healthy kidneys do (and what fails in CKD)",
      summary:
        "Beyond filtering waste, the kidneys balance fluid and minerals, control blood pressure, keep blood from getting too acidic, and make hormones for red blood cells and bone — so CKD affects far more than waste removal.",
      detail:
        "Understanding CKD's wide-ranging effects starts with appreciating everything healthy kidneys do. They filter waste products (such as urea and creatinine) and excess fluid from the blood; balance electrolytes like sodium, potassium, and phosphorus; regulate the body's acid-base balance; help control blood pressure through fluid balance and hormones; activate vitamin D to keep bones healthy; and produce erythropoietin, a hormone that signals the bone marrow to make red blood cells. As CKD advances and these functions decline, the consequences spread well beyond waste buildup: blood pressure tends to rise, potassium and phosphorus can climb to dangerous levels, the blood can become too acidic, bones can weaken (CKD–mineral and bone disorder), and anemia can develop from too little erythropoietin. This explains why CKD care addresses blood pressure, minerals, bone, and blood counts — not just filtration — and why complications can appear before kidney failure itself.",
      sources: [
        {
          label: "Your Kidneys & How They Work",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work",
          publisher: "NIH / NIDDK",
        },
        {
          label: "How Your Kidneys Work",
          url: "https://www.kidney.org/kidney-topics/kidney-function",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["physiology", "kidney-function", "basics"],
    },
    {
      id: "ckd-to-kidney-failure-spectrum",
      title: "From early CKD to kidney failure",
      summary:
        "CKD spans a wide range — from mild, symptomless disease that may never progress far, to kidney failure (end-stage kidney disease) that requires dialysis or a transplant to sustain life.",
      detail:
        "Chronic kidney disease is a spectrum, not a single state. Many people have mild CKD that progresses slowly or not at all, especially when blood pressure, blood sugar, and albuminuria are well managed, and they may live a normal lifespan without ever reaching kidney failure. At the other end, CKD can advance to kidney failure — also called end-stage kidney disease (ESKD) or stage G5 — in which the kidneys can no longer filter enough to keep a person well, and treatment with dialysis or a kidney transplant becomes necessary to survive. Whether and how fast someone moves along this spectrum depends on the underlying cause, the degree of albuminuria, blood pressure and glucose control, and other factors, and it varies widely between individuals. Importantly, progression is not inevitable: modern treatments can slow or even halt decline for many people, which is why early diagnosis and consistent management are so valuable. The goal of CKD care is to keep people as far from kidney failure as possible for as long as possible.",
      sources: [
        {
          label: "Kidney Failure (ESRD) — Symptoms, Stages & Treatment",
          url: "https://www.kidney.org/kidney-topics/kidney-failure",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Managing Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["progression", "kidney-failure", "esrd", "spectrum"],
    },
  ],
});
