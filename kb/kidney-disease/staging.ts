import { defineSection } from "../types.js";

/**
 * Staging — how CKD is classified using the KDIGO framework: the five GFR
 * categories (G1–G5) and the three albuminuria categories (A1–A3), why both
 * dimensions are used together ("heat map" risk), and what the stages mean in
 * practice. Educational; staging guides monitoring and treatment intensity, not
 * a verdict on outcome.
 */
export const staging = defineSection({
  id: "staging",
  title: "CKD Stages (G1–G5 and A1–A3)",
  description:
    "How CKD is classified — the five GFR categories (G1–G5) crossed with the three albuminuria categories (A1–A3) under the KDIGO framework — and what the stages mean for monitoring and risk.",
  entries: [
    {
      id: "gfr-categories-g1-g5",
      title: "The GFR stages: G1 to G5",
      summary:
        "CKD is divided into five GFR categories, from G1 (normal filtering with kidney damage) down to G5 (kidney failure, eGFR under 15).",
      detail:
        "The most familiar part of CKD staging is the GFR category, which ranges from G1 to G5 based on the estimated glomerular filtration rate. G1 means an eGFR of 90 or above (normal or high filtering) but with some marker of kidney damage, such as albuminuria; G2 is 60–89 (mildly reduced) again with a damage marker; G3a is 45–59 and G3b is 30–44 (mild-to-moderate and moderate-to-severe reduction); G4 is 15–29 (severely reduced); and G5 is below 15, which is kidney failure. An important nuance is that a mildly reduced eGFR alone (G1 or G2 numbers) is not labeled CKD unless there is also evidence of kidney damage, because filtering can dip modestly with normal aging. The stages matter because they guide how often kidney function is checked, when to involve a kidney specialist (nephrologist), and when to begin planning for possible dialysis or transplant. They describe current function, not a fixed destiny — many people remain stable for years.",
      sources: [
        {
          label: "Estimated Glomerular Filtration Rate (eGFR) and Kidney Disease Stages",
          url: "https://www.kidney.org/kidney-failure-risk-factor-estimated-glomerular-filtration-rate-egfr",
          publisher: "National Kidney Foundation",
        },
        {
          label: "What Is Chronic Kidney Disease?",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/what-is-chronic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["staging", "gfr", "g1-g5"],
    },
    {
      id: "albuminuria-categories-a1-a3",
      title: "The albuminuria stages: A1 to A3",
      summary:
        "Alongside GFR, CKD is graded by how much albumin leaks into the urine — A1 (normal to mildly increased), A2 (moderately increased), and A3 (severely increased).",
      detail:
        "The second dimension of CKD staging is albuminuria, measured by the urine albumin-to-creatinine ratio (ACR) and divided into three categories. A1 means an ACR under 30 mg/g (normal to mildly increased); A2 means 30–300 mg/g (moderately increased, historically called 'microalbuminuria'); and A3 means above 300 mg/g (severely increased, historically 'macroalbuminuria'). More albumin in the urine signals more kidney damage and predicts faster progression and higher cardiovascular risk — often independently of the eGFR. This is why a person can have a normal eGFR but still have meaningful CKD if albuminuria is present, and why reducing albuminuria (for example with certain blood-pressure and diabetes medicines) is a key treatment goal in its own right. Because a single urine sample can be affected by exercise, infection, or other factors, an abnormal result is usually confirmed on repeat testing before it is acted on.",
      sources: [
        {
          label: "Albuminuria: Albumin in the Urine",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis/albuminuria-albumin-urine",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Urine Albumin-to-Creatinine Ratio (uACR)",
          url: "https://www.kidney.org/kidney-topics/urine-albumin-creatinine-ratio-uacr",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["staging", "albuminuria", "acr", "a1-a3"],
    },
    {
      id: "kdigo-heat-map-combined-risk",
      title: "Why both numbers are used together (the KDIGO 'heat map')",
      summary:
        "Modern staging combines GFR and albuminuria into a single risk grid — the KDIGO 'heat map' — because the two together predict outcomes far better than either alone.",
      detail:
        "International KDIGO guidelines stage CKD using both the GFR category and the albuminuria category together, displayed as a color-coded grid often called the 'heat map.' The grid runs from green (lowest risk) through yellow and orange to red (highest risk), with risk rising as eGFR falls and as albuminuria increases. Combining the two matters because they capture different things — how well the kidneys filter and how damaged the filters are — and together they predict progression to kidney failure, cardiovascular events, and death much better than GFR alone. In practice, this means two people with the same eGFR can be in very different risk zones depending on their albuminuria, and the heat map helps the care team decide how aggressively to treat blood pressure, when to start kidney-protective medicines, how often to monitor, and when to refer to a nephrologist. The framework is a tool for tailoring care intensity, not a label that fixes a person's future.",
      sources: [
        {
          label: "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD",
          url: "https://kdigo.org/guidelines/ckd-evaluation-and-management/",
          publisher: "KDIGO",
          year: 2024,
        },
        {
          label: "Identify & Evaluate Patients with Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/kidney-disease/identify-manage-patients/evaluate-ckd",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["staging", "kdigo", "risk", "heat-map"],
      evidence: "established",
    },
    {
      id: "stage-g5-kidney-failure",
      title: "Stage G5: kidney failure (end-stage kidney disease)",
      summary:
        "G5 means an eGFR below 15 — the kidneys can no longer filter enough on their own, and dialysis or transplant is usually needed, though the timing is individualized.",
      detail:
        "Stage G5 CKD, an eGFR below 15, represents kidney failure, also called end-stage kidney disease (ESKD) or end-stage renal disease. At this level the kidneys can no longer remove enough waste and fluid to keep a person healthy, and symptoms of advanced disease — fatigue, nausea, poor appetite, swelling, itching, and difficulty concentrating — become more likely. Most people at this stage will need kidney replacement therapy (dialysis or a transplant) to survive, although the exact timing of starting dialysis is based on symptoms, laboratory trends, and the individual rather than the eGFR number alone, and some carefully selected people choose conservative (non-dialysis) management focused on comfort. Crucially, the months before reaching G5 are when planning happens: choosing a treatment path, preparing dialysis access or pursuing a pre-emptive transplant, and getting education and support. Reaching advanced CKD is not a sudden emergency for most people but a transition that, when planned for in advance, can be navigated far more smoothly.",
      sources: [
        {
          label: "Kidney Failure (ESRD) — Symptoms, Stages & Treatment",
          url: "https://www.kidney.org/kidney-topics/kidney-failure",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Choosing a Treatment for Kidney Failure",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/choosing-treatment",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["staging", "g5", "kidney-failure", "esrd"],
    },
    {
      id: "progression-and-monitoring-by-stage",
      title: "How staging guides monitoring and referral",
      summary:
        "The stage determines how often kidney function is checked and when a nephrologist gets involved — earlier and more often as eGFR falls and albuminuria rises.",
      detail:
        "CKD staging is practical because it sets the rhythm of monitoring and the threshold for specialist involvement. In early, low-risk CKD (good eGFR, minimal albuminuria), kidney function may be checked roughly once a year, with the focus on controlling blood pressure and any diabetes and avoiding kidney injury. As the stage worsens — lower eGFR, higher albuminuria, or a rapidly falling trend — testing becomes more frequent, kidney-protective medicines are prioritized, and referral to a nephrologist is recommended (commonly around eGFR below 30, with significant albuminuria, rapid decline, or other red flags). Tracking the trend over time often matters more than any single value, because a steadily falling eGFR signals active disease that needs attention. Staging also triggers timely preparation for kidney failure when appropriate, so that decisions about dialysis or transplant are made calmly and in advance. The specific monitoring schedule for any individual is set by their care team based on their full risk picture.",
      sources: [
        {
          label: "Managing Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
        {
          label: "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD",
          url: "https://kdigo.org/guidelines/ckd-evaluation-and-management/",
          publisher: "KDIGO",
          year: 2024,
        },
      ],
      tags: ["staging", "monitoring", "referral", "nephrologist"],
    },
  ],
});
