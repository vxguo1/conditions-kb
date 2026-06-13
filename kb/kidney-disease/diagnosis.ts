import { defineSection } from "../types.js";

/**
 * Diagnosis & testing — how CKD is found and confirmed: the blood eGFR test
 * (creatinine, with the newer race-free equations and cystatin C), the urine
 * ACR test, the importance of repeating tests to confirm chronicity, plus
 * imaging and biopsy where needed.
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Diagnosis & Testing",
  description:
    "How CKD is detected and confirmed — the blood eGFR test (creatinine, race-free equations, cystatin C), the urine albumin (ACR) test, confirming the problem is chronic, and when imaging or a biopsy is used.",
  entries: [
    {
      id: "blood-test-egfr",
      title: "The blood test: creatinine and eGFR",
      summary:
        "A simple blood test measures creatinine, a waste product, and uses it (with age and sex) to estimate the glomerular filtration rate (eGFR) — the main number for kidney function.",
      detail:
        "The cornerstone blood test for kidney function measures creatinine, a waste product from normal muscle metabolism that healthy kidneys clear from the blood. Because creatinine alone varies with body size and muscle mass, laboratories use it in an equation along with age and sex to calculate the estimated glomerular filtration rate (eGFR), which approximates how many milliliters of blood the kidneys filter each minute. A normal eGFR is roughly 90 or above; a value persistently below 60 suggests reduced kidney function and, if it lasts three months or more, points to CKD. A single low eGFR is not enough to diagnose CKD — temporary factors like dehydration can lower it — so it is repeated to confirm the finding is chronic. The eGFR is also used to stage CKD, guide medication dosing, and time referrals and planning, which makes it one of the most useful single numbers in kidney care.",
      sources: [
        {
          label: "Chronic Kidney Disease Tests & Diagnosis",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Estimated GFR (eGFR)",
          url: "https://www.kidney.org/kidney-topics/estimated-glomerular-filtration-rate-egfr",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["diagnosis", "egfr", "creatinine", "blood-test"],
    },
    {
      id: "urine-test-acr",
      title: "The urine test: albumin-to-creatinine ratio (ACR)",
      summary:
        "A urine test checks for albumin, a protein that leaks through damaged kidney filters; the albumin-to-creatinine ratio (ACR) is an early, sensitive sign of kidney damage.",
      detail:
        "The second essential CKD test looks at the urine for albumin, a blood protein that healthy kidneys keep out of the urine. When the kidney's filters are damaged, albumin starts to leak through, so finding it in the urine is one of the earliest signs of kidney disease — often appearing before the eGFR drops. The result is reported as the urine albumin-to-creatinine ratio (ACR), which adjusts for how concentrated the urine sample is. An ACR under 30 mg/g is considered normal to mildly increased, 30–300 is moderately increased, and above 300 is severely increased. Because a single sample can be affected by exercise, fever, infection, or other temporary factors, an abnormal ACR is typically confirmed with repeat testing. The ACR is valuable not only for diagnosing CKD but also for predicting how fast it may progress and for tracking whether treatment is reducing the leakage, which is itself a kidney-protective goal.",
      sources: [
        {
          label: "Albuminuria: Albumin in the Urine",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis/albuminuria-albumin-urine",
          publisher: "NIH / NIDDK",
        },
        {
          label: "ACR (Albumin-to-Creatinine Ratio)",
          url: "https://www.kidney.org/kidney-topics/urine-albumin-creatinine-ratio-uacr",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["diagnosis", "albuminuria", "acr", "urine-test"],
    },
    {
      id: "race-free-egfr-and-cystatin-c",
      title: "Newer eGFR equations: race-free and cystatin C",
      summary:
        "U.S. labs have moved to a race-free eGFR equation, and a second blood marker called cystatin C can refine the estimate when a more accurate number is needed.",
      detail:
        "How eGFR is calculated has evolved. Older creatinine-based equations included a race coefficient that adjusted results for Black patients; recognizing that race is a social rather than biological variable and that the adjustment could delay care, U.S. professional organizations recommended in 2021 moving to a new race-free creatinine equation (CKD-EPI 2021), which laboratories have broadly adopted. In addition, a different blood marker called cystatin C can be measured and combined with creatinine to produce a more accurate eGFR; this is especially useful when the creatinine-based estimate may be misleading — for example in people with unusually high or low muscle mass — or when confirming a borderline result before making important decisions. These refinements aim to make the eGFR fairer and more accurate across diverse patients. The specifics of which equation and markers to use are handled by the laboratory and care team.",
      sources: [
        {
          label: "Try the New eGFR Calculator (race-free 2021 equation)",
          url: "https://www.kidney.org/news-stories/what-new-egfr-calculation-means-your-kidney-disease-diagnosis-and-treatment",
          publisher: "National Kidney Foundation",
        },
        {
          label: "eGFR Calculator (CKD-EPI 2021, creatinine and cystatin C)",
          url: "https://www.kidney.org/professionals/gfr_calculator",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["diagnosis", "egfr", "cystatin-c", "race-free", "equations"],
    },
    {
      id: "confirming-chronicity",
      title: "Confirming the problem is chronic, not acute",
      summary:
        "CKD requires the abnormality to persist for at least three months; a single bad result may be temporary acute kidney injury, so tests are repeated before diagnosing CKD.",
      detail:
        "A key step in diagnosing CKD is establishing that the kidney problem is chronic — lasting at least three months — rather than a sudden, potentially reversible drop called acute kidney injury (AKI). A single abnormal eGFR or ACR can have temporary causes: dehydration, a urinary infection, certain medications, contrast dye, or a passing illness can all transiently worsen the numbers. For that reason, an abnormal result is repeated over time, and a diagnosis of CKD is made when reduced filtering or kidney-damage markers are confirmed to persist. Distinguishing AKI from CKD matters because their causes, urgency, and treatment differ: AKI often needs prompt attention to a specific trigger and may recover, while CKD is managed over the long term to slow progression. People who have had an episode of AKI are also at higher future risk of CKD and benefit from follow-up testing. This is why kidney results are interpreted as a trend, not a single snapshot.",
      sources: [
        {
          label: "Chronic Kidney Disease Tests & Diagnosis",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Acute Kidney Injury (AKI)",
          url: "https://www.kidney.org/kidney-topics/acute-kidney-injury-aki",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["diagnosis", "chronicity", "acute-kidney-injury", "monitoring"],
    },
    {
      id: "imaging-and-biopsy",
      title: "Imaging and kidney biopsy",
      summary:
        "Ultrasound and other imaging can show kidney size, blockages, or cysts; a kidney biopsy is sometimes needed to identify the exact cause when blood tests are not enough.",
      detail:
        "While blood and urine tests detect and stage CKD, imaging and biopsy help identify its cause when that is unclear or when a specific treatable disease is suspected. Ultrasound is the most common first imaging test — it is painless and radiation-free and can reveal the kidneys' size and shape, obstruction or blockage to urine flow, kidney stones, and cysts such as those of polycystic kidney disease. Other imaging (CT or MRI) may be used in particular situations, with care taken about contrast dye in people with reduced kidney function. When the cause remains uncertain or a glomerular or immune kidney disease is suspected — often signaled by significant protein or blood in the urine — a kidney biopsy may be performed, in which a tiny sample of kidney tissue is taken with a needle and examined under a microscope to pinpoint the disease and guide treatment. The decision to biopsy weighs the value of a precise diagnosis against the small risks of the procedure and is made by the nephrology team.",
      sources: [
        {
          label: "Kidney Biopsy — Procedure, Side Effects, Recovery",
          url: "https://www.kidney.org/kidney-topics/kidney-biopsy",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Tests for Kidney Disease (imaging and biopsy)",
          url: "https://www.kidneyfund.org/all-about-kidneys/tests-kidney-disease",
          publisher: "American Kidney Fund",
        },
      ],
      tags: ["diagnosis", "imaging", "ultrasound", "biopsy"],
    },
  ],
});
