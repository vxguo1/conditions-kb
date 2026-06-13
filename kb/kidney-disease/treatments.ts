import { defineSection } from "../types.js";

/**
 * Treatments — medications and the modern "four pillars" of slowing CKD: ACE
 * inhibitors / ARBs, SGLT2 inhibitors, finerenone (nonsteroidal MRA), and
 * GLP-1 receptor agonists, plus blood-pressure and underlying-cause control.
 * The big shift here is that several drugs now protect the kidney AND the heart.
 * Educational — never dosing advice; the regimen is the care team's call.
 */
export const treatments = defineSection({
  id: "treatments",
  title: "Treatments & Medications",
  description:
    "How CKD progression is slowed — controlling the cause and blood pressure, and the modern kidney-protective medicines (ACE inhibitors/ARBs, SGLT2 inhibitors, finerenone, and GLP-1 receptor agonists). Educational; the regimen and any changes belong with the care team.",
  entries: [
    {
      id: "treatment-goals-overview",
      title: "The goals: slow progression and protect the heart",
      summary:
        "CKD treatment aims to slow the loss of kidney function and reduce cardiovascular risk by controlling the cause, lowering blood pressure, reducing albuminuria, and using kidney-protective medicines.",
      detail:
        "There is no cure that restores damaged kidneys, so CKD treatment focuses on two linked goals: slowing the decline of kidney function and lowering the high risk of heart attack, stroke, and heart failure that accompanies CKD. The strategy combines treating the underlying cause (most often diabetes and high blood pressure), controlling blood pressure to target, reducing albuminuria (the protein leak that both signals and drives damage), and using medicines now proven to protect the kidneys. A major shift in recent years is that several of these medicines protect the heart as well as the kidney, so modern care often layers them as a set of complementary 'pillars.' Lifestyle measures, careful attention to avoiding kidney injury, and management of complications (anemia, bone-mineral problems, high potassium) round out the plan. Treatment is highly individualized — depending on the cause, stage, other conditions, and the person's preferences — and every medicine and dose decision belongs with the care team.",
      sources: [
        {
          label: "Managing Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Medicines with Kidney-Protective Factors",
          url: "https://www.kidney.org/subject/medicines-kidney-protective-factors",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["treatment", "overview", "goals", "kidney-protection"],
    },
    {
      id: "ace-inhibitors-arbs",
      title: "ACE inhibitors and ARBs",
      summary:
        "ACE inhibitors and ARBs lower blood pressure and reduce protein in the urine, protecting the kidneys beyond their pressure-lowering effect — a cornerstone of CKD treatment, especially with albuminuria.",
      detail:
        "ACE inhibitors (such as lisinopril) and ARBs (such as losartan) are blood-pressure medicines that have a special role in kidney disease: by relaxing the blood vessels and reducing pressure within the kidney's filters, they lower the amount of albumin leaking into the urine and slow the progression of CKD beyond what their blood-pressure effect alone would predict. For this reason they are a cornerstone of treatment for people with CKD and albuminuria, particularly in diabetic kidney disease, and they protect the heart as well. A few practical points are managed by the care team: starting or increasing the dose can cause a small, expected rise in creatinine and a rise in potassium, so blood tests are checked after changes; the two classes are generally not combined; and these drugs are usually paused during illnesses with dehydration and avoided in pregnancy. They are typically titrated to the highest tolerated dose. Because of the potassium and kidney-function monitoring involved, dosing and adjustments are always the prescriber's decision.",
      sources: [
        {
          label: "ACE Inhibitors and ARBs",
          url: "https://www.kidney.org/kidney-topics/ace-inhibitors-and-arbs",
          publisher: "National Kidney Foundation",
        },
        {
          label: "High Blood Pressure & Kidney Disease (medicines)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/high-blood-pressure",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["treatment", "ace-inhibitor", "arb", "albuminuria", "blood-pressure"],
      evidence: "established",
    },
    {
      id: "sglt2-inhibitors-ckd",
      title: "SGLT2 inhibitors",
      summary:
        "SGLT2 inhibitors, first developed for diabetes, are now proven to slow CKD progression and reduce heart failure and death — even in people without diabetes — and are a major advance in kidney care.",
      detail:
        "SGLT2 inhibitors (such as dapagliflozin and empagliflozin) were first used to lower blood sugar in type 2 diabetes by making the kidneys excrete glucose in the urine, but large trials revealed a powerful additional benefit: they substantially slow the progression of chronic kidney disease and reduce hospitalizations for heart failure and cardiovascular death. In 2021 dapagliflozin became the first SGLT2 inhibitor approved by the FDA for CKD in people at risk of progression with or without type 2 diabetes — a landmark, since it extended the benefit to non-diabetic kidney disease. These medicines are now recommended for many people with CKD and albuminuria, often added on top of an ACE inhibitor or ARB, and can be used down to fairly low levels of kidney function. Side effects to be aware of include genital yeast infections and, rarely, a serious condition called ketoacidosis, and they are typically paused during acute illness and around surgery. As always, whether and how to use them is decided by the care team.",
      sources: [
        {
          label: "FARXIGA approved in the US for the treatment of chronic kidney disease",
          url: "https://www.astrazeneca.com/media-centre/press-releases/2021/farxiga-approved-in-the-us-for-ckd.html",
          publisher: "AstraZeneca",
          year: 2021,
        },
        {
          label: "New Medications for Type 2 Diabetes and Kidney Disease: SGLT2 Inhibitors, Finerenone, and GLP-1 RA",
          url: "https://www.kidney.org/news-stories/game-changing-medications-kidney-disease-and-type-2-diabetes",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["treatment", "sglt2", "kidney-protection", "heart-failure"],
      evidence: "established",
    },
    {
      id: "finerenone",
      title: "Finerenone (a nonsteroidal MRA)",
      summary:
        "Finerenone is a newer kidney-protective medicine for CKD with type 2 diabetes that lowers albuminuria and reduces kidney and heart complications; it requires potassium monitoring.",
      detail:
        "Finerenone (brand name Kerendia) is a nonsteroidal mineralocorticoid receptor antagonist (MRA), a newer class of medicine that targets a hormone pathway driving inflammation and scarring in the kidney and heart. In large trials (FIDELIO-DKD and FIGARO-DKD) in people with chronic kidney disease associated with type 2 diabetes, finerenone reduced albuminuria and lowered the risk of CKD progression, kidney failure, cardiovascular death, non-fatal heart attack, and heart-failure hospitalization, and on that basis the FDA approved it in 2021. It is often used alongside an ACE inhibitor or ARB and an SGLT2 inhibitor as part of a layered, kidney-and-heart-protective approach. Because it can raise blood potassium, potassium levels are checked before starting and during treatment, and it has certain drug interactions, so its use is carefully managed. Whether finerenone is appropriate, and all monitoring and dosing, are decisions for the care team.",
      sources: [
        {
          label: "FDA Approves Drug to Reduce Risk of Serious Kidney and Heart Complications in CKD with Type 2 Diabetes",
          url: "https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-drug-reduce-risk-serious-kidney-and-heart-complications-adults-chronic-kidney-disease",
          publisher: "U.S. Food and Drug Administration",
          year: 2021,
        },
        {
          label: "New Medications for Type 2 Diabetes and Kidney Disease (finerenone)",
          url: "https://www.kidney.org/news-stories/game-changing-medications-kidney-disease-and-type-2-diabetes",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["treatment", "finerenone", "mra", "kidney-protection", "potassium"],
      evidence: "established",
      caution:
        "Finerenone can raise blood potassium and has drug interactions; potassium monitoring and all dosing decisions belong with the prescriber.",
    },
    {
      id: "glp1-receptor-agonists-ckd",
      title: "GLP-1 receptor agonists",
      summary:
        "GLP-1 receptor agonists, used for diabetes and weight, have shown kidney and cardiovascular benefits and are an emerging part of the CKD treatment story for people with type 2 diabetes.",
      detail:
        "GLP-1 receptor agonists (such as semaglutide and dulaglutide) are injectable (and, for some, oral) medicines used for type 2 diabetes and weight management, and they have become part of the kidney-protective picture. A large trial of semaglutide in people with type 2 diabetes and chronic kidney disease (FLOW) found it reduced the risk of major kidney events and kidney-related and cardiovascular death, adding to earlier evidence that this class lowers cardiovascular risk and albuminuria. As a result, GLP-1 receptor agonists are increasingly considered for people with CKD and type 2 diabetes, especially where there is also a need to improve glucose control, reduce weight, or lower cardiovascular risk, often alongside SGLT2 inhibitors and the other pillars. Common side effects are gastrointestinal (nausea, especially early on). Their role in CKD continues to expand, and whether they fit a given person's plan — and at what dose — is determined by the care team.",
      sources: [
        {
          label: "New Medications for Type 2 Diabetes and Kidney Disease: SGLT2 Inhibitors, Finerenone, and GLP-1 RA",
          url: "https://www.kidney.org/news-stories/game-changing-medications-kidney-disease-and-type-2-diabetes",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Semaglutide and Kidney Outcomes in Type 2 Diabetes and CKD (FLOW trial)",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2403347",
          publisher: "New England Journal of Medicine",
          year: 2024,
        },
      ],
      tags: ["treatment", "glp1", "kidney-protection", "diabetes"],
      evidence: "emerging",
    },
    {
      id: "blood-pressure-and-cause-control",
      title: "Blood pressure control and treating the cause",
      summary:
        "Lowering blood pressure to an individualized target and tightly managing the underlying cause — especially diabetes — are foundational to slowing CKD, on top of the kidney-protective medicines.",
      detail:
        "Underneath the newer medicines, two foundations remain central to CKD care. The first is blood-pressure control: because high blood pressure both causes and accelerates kidney damage, getting it to an individualized target (often lower than for people without CKD, especially with albuminuria) is one of the most effective ways to slow decline and protect the heart and brain. This usually combines lifestyle measures with medication, frequently built around an ACE inhibitor or ARB. The second is treating the underlying cause — most importantly managing blood glucose in diabetes, but also addressing glomerular diseases, relieving obstruction, or treating other specific causes when present. Controlling cholesterol (commonly with a statin) and stopping smoking further reduce the cardiovascular risk that is the leading threat to people with CKD. These foundations work together with the kidney-protective drug 'pillars,' and the exact targets and medicines are tailored by the care team to each person's overall situation.",
      sources: [
        {
          label: "Managing Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
        {
          label: "High Blood Pressure and Chronic Kidney Disease",
          url: "https://www.kidney.org/high-blood-pressure-and-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["treatment", "blood-pressure", "diabetes", "cause-control"],
      evidence: "established",
    },
  ],
});
