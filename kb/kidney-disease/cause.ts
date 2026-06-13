import { defineSection } from "../types.js";

/**
 * Causes & pathophysiology — why kidneys are damaged: the dominant drivers
 * (diabetes and high blood pressure), glomerular diseases, inherited disease
 * (polycystic kidney disease), obstruction/reflux, and the common final pathway
 * of scarring (fibrosis). Plus who is at higher risk.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes & Pathophysiology",
  description:
    "Why kidneys become damaged — diabetes and high blood pressure as the leading causes, plus glomerular diseases, inherited conditions like polycystic kidney disease, obstruction, and the shared scarring pathway — and the main risk factors.",
  entries: [
    {
      id: "diabetes-leading-cause",
      title: "Diabetes: the leading cause",
      summary:
        "Diabetes is the most common cause of CKD; persistently high blood glucose damages the tiny filtering vessels of the kidney over years.",
      detail:
        "Diabetes is the single most common cause of chronic kidney disease, accounting for a large share of cases and of kidney failure. Over years, high blood glucose damages the kidney's millions of tiny filtering units (glomeruli) and the small blood vessels that supply them, a process called diabetic kidney disease or diabetic nephropathy. One of the earliest signs is albumin leaking into the urine, often before the eGFR falls, which is why people with diabetes are screened yearly with a urine ACR test as well as a blood eGFR. The good news is that this damage can be slowed substantially: tight-enough blood glucose control, blood-pressure control, and specific kidney-protective medicines (such as ACE inhibitors or ARBs, SGLT2 inhibitors, and finerenone) can meaningfully delay progression. Because diabetes, kidney disease, and heart disease are so tightly linked, protecting the kidneys in diabetes also protects the heart.",
      sources: [
        {
          label: "Diabetic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Causes of Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/causes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["cause", "diabetes", "diabetic-kidney-disease", "pathophysiology"],
      evidence: "established",
    },
    {
      id: "high-blood-pressure-cause",
      title: "High blood pressure: the second leading cause",
      summary:
        "High blood pressure both causes and results from kidney disease, creating a damaging cycle; it is the second most common cause of CKD after diabetes.",
      detail:
        "High blood pressure (hypertension) is the second most common cause of chronic kidney disease, and it has a uniquely two-way relationship with the kidneys. Sustained high pressure damages and narrows the blood vessels in the kidneys, reducing their ability to filter; at the same time, damaged kidneys handle fluid and pressure-regulating hormones poorly, which raises blood pressure further — a self-reinforcing cycle that accelerates decline if not interrupted. Because of this, controlling blood pressure is one of the most powerful ways to slow CKD, and certain blood-pressure medicines (ACE inhibitors and ARBs) are favored because they protect the kidneys beyond their pressure-lowering effect, especially when albuminuria is present. Like early CKD, high blood pressure often causes no symptoms, so it can be quietly damaging the kidneys for years, which is why regular blood-pressure checks matter. Managing blood pressure protects not only the kidneys but also the heart and brain.",
      sources: [
        {
          label: "High Blood Pressure & Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/high-blood-pressure",
          publisher: "NIH / NIDDK",
        },
        {
          label: "High Blood Pressure and Chronic Kidney Disease",
          url: "https://www.kidney.org/high-blood-pressure-and-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["cause", "hypertension", "blood-pressure", "pathophysiology"],
      evidence: "established",
    },
    {
      id: "glomerular-diseases",
      title: "Glomerular diseases (glomerulonephritis)",
      summary:
        "Diseases that inflame or scar the kidney's filters — the glomeruli — are an important cause of CKD, often signaled by blood or large amounts of protein in the urine.",
      detail:
        "The glomeruli are the kidney's microscopic filters, and a group of conditions called glomerular diseases (including various forms of glomerulonephritis) damage them directly. Some are caused by the immune system attacking the kidney (such as IgA nephropathy, lupus nephritis, and membranous nephropathy), some result from inflammation of small blood vessels (vasculitis), and others are linked to infections or other diseases. These conditions often announce themselves with blood in the urine, large amounts of protein in the urine (sometimes causing swelling, known as nephrotic syndrome), or a rising blood pressure and creatinine, and diagnosis frequently requires a kidney biopsy. Treatment depends on the specific disease and can include medicines that calm the immune system. Glomerular diseases are a leading cause of kidney failure in younger adults and an important reason that blood and protein in the urine should always be evaluated rather than ignored.",
      sources: [
        {
          label: "Glomerular Diseases",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/glomerular-diseases",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Glomerulonephritis (GN)",
          url: "https://www.kidney.org/kidney-topics/glomerulonephritis",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["cause", "glomerular", "glomerulonephritis", "pathophysiology"],
    },
    {
      id: "polycystic-kidney-disease",
      title: "Polycystic kidney disease and inherited causes",
      summary:
        "Polycystic kidney disease (PKD) is the most common inherited cause of kidney failure, in which fluid-filled cysts grow and gradually replace working kidney tissue.",
      detail:
        "Some kidney disease is inherited, and polycystic kidney disease (PKD) is the most common genetic cause of kidney failure. In the usual adult form (autosomal dominant PKD), a gene change causes many fluid-filled cysts to form and slowly enlarge in both kidneys over decades, expanding the kidneys and progressively crowding out and damaging healthy tissue, often leading to high blood pressure and, in many people, eventual kidney failure in mid-adulthood. Because it runs in families, a parent with PKD has a 50% chance of passing it to each child, and relatives may benefit from awareness and monitoring. Other inherited kidney diseases exist too, such as Alport syndrome. While inherited diseases cannot be prevented, controlling blood pressure and, for ADPKD, a specific medication (tolvaptan) in selected people can slow progression, and knowing the diagnosis helps with planning and family screening. A kidney specialist guides management of these conditions.",
      sources: [
        {
          label: "Polycystic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/polycystic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Polycystic Kidney Disease (PKD)",
          url: "https://www.kidney.org/kidney-topics/polycystic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["cause", "polycystic-kidney-disease", "inherited", "genetics"],
    },
    {
      id: "obstruction-and-other-causes",
      title: "Obstruction, reflux, and other causes",
      summary:
        "Blockages to urine flow (such as an enlarged prostate, stones, or reflux), repeated infections, and certain medications or toxins can also damage the kidneys over time.",
      detail:
        "Beyond the major causes, several other problems can lead to chronic kidney disease. Anything that blocks the flow of urine and lets pressure build back up into the kidneys — an enlarged prostate, kidney stones, tumors, or congenital narrowings — can cause damage over time if not relieved; in children and some adults, urine flowing backward toward the kidneys (vesicoureteral reflux) and recurrent infections can scar the kidneys. Long-term use of certain medications and exposure to some toxins can injure the kidneys as well, including overuse of NSAID pain relievers, some herbal products, and certain other drugs. Less common causes include autoimmune diseases, recurrent kidney infections, and damage left behind after a severe episode of acute kidney injury, which can fail to fully recover. Identifying the specific cause matters because some are reversible (relieving an obstruction) and others guide targeted treatment, so an unexplained drop in kidney function is always worth investigating.",
      sources: [
        {
          label: "Causes of Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/causes",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Causes of Chronic Kidney Disease (CKD)",
          url: "https://www.kidney.org/kidney-topics/chronic-kidney-disease-ckd",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["cause", "obstruction", "reflux", "nephrotoxins", "pathophysiology"],
    },
    {
      id: "risk-factors",
      title: "Who is at higher risk",
      summary:
        "Diabetes, high blood pressure, heart disease, a family history of kidney failure, older age, obesity, and certain ethnic backgrounds all raise the risk of CKD.",
      detail:
        "CKD does not strike at random — several factors raise a person's risk and identify who benefits most from testing. The biggest are diabetes and high blood pressure, which together cause most CKD. Other important risk factors include cardiovascular (heart) disease, a family history of kidney failure, older age, obesity, and a history of acute kidney injury. Risk is also higher in several populations, including Black/African American, Hispanic/Latino, Native American, and Asian American people, reflecting a mix of higher rates of diabetes and hypertension and other factors. Smoking and frequent use of NSAID pain relievers add risk too. Because early CKD is silent, people with these risk factors are the ones for whom simple blood (eGFR) and urine (ACR) testing is especially worthwhile, since catching CKD early opens the door to treatments that slow it. Risk factors describe probability across populations, not certainty for any one person.",
      sources: [
        {
          label: "Chronic Kidney Disease (CKD) — risk factors",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Chronic Kidney Disease Basics",
          url: "https://www.cdc.gov/kidney-disease/about/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["cause", "risk-factors", "prevention"],
      caution:
        "Risk factors describe populations, not individuals — having them does not mean CKD is certain, and lacking them does not rule it out.",
    },
  ],
});
