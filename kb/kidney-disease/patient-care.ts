import { defineSection } from "../types.js";

/**
 * Patient care & self-management — the day-to-day work of living with CKD:
 * tracking labs and knowing your numbers, taking medicines and managing
 * polypharmacy, monitoring blood pressure at home, vaccinations and infection
 * prevention, mental health, and building a care team. Educational.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Patient Care & Self-Management",
  description:
    "Living day-to-day with CKD — knowing your eGFR and ACR numbers, managing medicines, home blood-pressure monitoring, vaccines and infection prevention, mental health, and building a care team. Educational.",
  entries: [
    {
      id: "know-your-numbers",
      title: "Knowing and tracking your numbers",
      summary:
        "Understanding your eGFR, urine albumin (ACR), blood pressure, and (if relevant) blood sugar — and watching their trends over time — helps you and your team manage CKD actively.",
      detail:
        "Living well with CKD is easier when a person understands and follows their key numbers. The two kidney measures are eGFR (how well the kidneys filter) and urine ACR (how much albumin is leaking), and tracking how these trend over time is often more informative than any single reading — a stable eGFR is reassuring, while a steadily falling one signals active disease that needs attention. Alongside these, blood pressure and, for people with diabetes, blood-sugar control (such as A1c) are central, because they drive both kidney and heart outcomes. Other labs the team watches include potassium, phosphorus, calcium, parathyroid hormone, bicarbonate, and hemoglobin, which reflect the complications of CKD. Many people find it helpful to keep a simple record of their results, ask what each number means and what the target is, and bring questions to appointments. Being an informed partner in care supports better decisions, though interpreting the full picture remains the care team's role.",
      sources: [
        {
          label: "Managing Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Know Your Kidney Numbers: Two Simple Tests (eGFR and uACR)",
          url: "https://www.kidney.org/kidney-topics/know-your-kidney-numbers-two-simple-tests",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["self-management", "monitoring", "egfr", "acr", "numbers"],
    },
    {
      id: "managing-medications",
      title: "Managing medications safely",
      summary:
        "CKD often means several medicines plus the need to dose-adjust or avoid some drugs by kidney function; keeping one current medication list and using a pharmacist keeps the regimen safe.",
      detail:
        "Medication management is a big part of CKD self-care for two reasons: people with CKD often take several medicines (for blood pressure, the kidneys, diabetes, cholesterol, and complications like anemia or bone disease), and many drugs are handled by the kidneys, so doses may need adjusting — or the drug avoided — as kidney function changes. This makes a few habits genuinely protective: keep one up-to-date list of every prescription, over-the-counter product, vitamin, and supplement; show it at every appointment and to the pharmacist with each new medicine; use one pharmacy where possible so interactions and renal dosing are screened; and always mention you have kidney disease (and your latest eGFR if known) when starting anything new, including at a new doctor or before a scan. Taking medicines as prescribed and not stopping or changing doses on your own are important, since several CKD medicines need careful titration and monitoring. The pharmacist is an underused ally for keeping a complex regimen safe.",
      sources: [
        {
          label: "Managing Chronic Kidney Disease (medicines)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Which Drugs Are Harmful to Your Kidneys?",
          url: "https://www.kidney.org/kidney-topics/which-drugs-are-harmful-to-your-kidneys",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["self-management", "medications", "pharmacist", "renal-dosing"],
      caution:
        "Doses of many medicines depend on kidney function — don't start, stop, or change medicines (including OTC products) on your own; check with a clinician or pharmacist.",
    },
    {
      id: "home-blood-pressure",
      title: "Home blood-pressure monitoring",
      summary:
        "Because blood pressure both drives and reflects kidney disease, checking it at home with a validated monitor helps the care team manage it to target between visits.",
      detail:
        "Blood pressure sits at the center of CKD care — high pressure damages the kidneys, and CKD raises blood pressure — so keeping it well controlled is one of the most effective ways to slow decline and protect the heart. Home monitoring is valuable because it captures blood pressure in everyday life, away from the 'white-coat' effect of clinics, and gives the care team more data to adjust treatment between visits. Using a validated upper-arm cuff, following correct technique (resting first, feet flat, arm supported at heart level, several readings), and recording the results to share at appointments all improve usefulness. The right blood-pressure target is individualized — often lower for people with CKD and albuminuria — and is set by the care team, who also adjust medicines based on the readings and on kidney function and potassium tests. Home monitoring empowers a person to take part in their care, but it complements rather than replaces professional management of the numbers and medications.",
      sources: [
        {
          label: "High Blood Pressure & Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/high-blood-pressure",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Monitoring Your Blood Pressure at Home",
          url: "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home",
          publisher: "American Heart Association",
        },
      ],
      tags: ["self-management", "blood-pressure", "home-monitoring"],
    },
    {
      id: "vaccines-and-infection-prevention",
      title: "Vaccines and preventing infection",
      summary:
        "CKD raises the risk and severity of some infections, so recommended vaccinations (including hepatitis B for those heading toward dialysis) and everyday infection prevention are important parts of care.",
      detail:
        "People with CKD, and especially those with advanced disease or on dialysis or after a transplant, can be more vulnerable to infections and to their complications, partly because kidney disease and its treatments can weaken immune defenses. Staying current with recommended vaccinations is therefore an important, often-overlooked part of CKD care: this typically includes influenza, COVID-19, and pneumococcal (pneumonia) vaccines, and hepatitis B vaccination is specifically recommended for people approaching dialysis (since the dialysis setting carries exposure risk and protection is best established in advance). Transplant recipients have particular vaccine timing considerations because of their anti-rejection medicines. Beyond vaccines, everyday measures — hand hygiene, careful care of any dialysis access or catheter, prompt attention to possible infections, and good foot and skin care in those with diabetes — reduce risk. The specific vaccines and timing appropriate for an individual are guided by the care team based on their stage and treatment.",
      sources: [
        {
          label: "Vaccines for Adults with Chronic Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/vaccines-for-adults-with-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Vaccines and Kidney Disease",
          url: "https://www.kidneyfund.org/resource/vaccines-and-kidney-disease",
          publisher: "American Kidney Fund",
        },
      ],
      tags: ["self-management", "vaccines", "infection-prevention", "dialysis"],
    },
    {
      id: "mental-health-and-coping",
      title: "Mental health and coping",
      summary:
        "Depression, anxiety, and stress are common with CKD — especially as it advances or with dialysis — and they affect self-care, so emotional support is a legitimate, important part of care.",
      detail:
        "Living with a progressive chronic illness, facing decisions about dialysis or transplant, and managing a demanding daily routine all take an emotional toll, and depression and anxiety are notably more common in people with CKD than in the general population — particularly in advanced CKD and among those on dialysis. This matters not only for wellbeing but because low mood and stress can undermine the day-to-day self-care that CKD requires, creating a cycle that worsens both. Recognizing that these feelings are common and treatable is the first step. Help can come in many forms: talking with the care team (who can screen for and treat depression and anxiety), counseling or therapy, peer support and patient communities, dialysis-unit social workers, and support for caregivers, who also carry a load. Some treatments are adjusted for kidney function, so any medication for mood is coordinated with the team. Attending to mental health is not optional or secondary — it is part of comprehensive kidney care and supports better physical outcomes.",
      sources: [
        {
          label: "Managing Your Emotions While Living with Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/managing-your-emotions-while-living-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Managing Chronic Kidney Disease (emotional health)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["self-management", "mental-health", "depression", "coping", "support"],
    },
    {
      id: "building-care-team",
      title: "Building your care team",
      summary:
        "CKD care often involves a primary clinician, a nephrologist, a dietitian, a pharmacist, and others; knowing who does what and when to involve a specialist helps coordinate care.",
      detail:
        "Because CKD touches so many parts of health, it is usually managed by a team rather than a single doctor, and understanding the team helps a person get the right care at the right time. A primary care clinician often coordinates overall health and early CKD, while a nephrologist (kidney specialist) is typically involved as CKD advances — commonly when eGFR falls below about 30, when there is significant albuminuria, rapid decline, difficult-to-control blood pressure, or an uncertain cause — to guide kidney-specific treatment and prepare for kidney failure if needed. A renal dietitian individualizes nutrition, a pharmacist helps keep the medication list safe and correctly dosed for kidney function, and dialysis nurses, social workers, and transplant teams join when relevant. Knowing who to contact for what, asking questions, and bringing an up-to-date medication and results list to visits all help the team work together. Good coordination — with the person at the center — is what makes complex, multi-faceted CKD care coherent and effective.",
      sources: [
        {
          label: "Managing Chronic Kidney Disease (your health care team)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Your Kidney Care Team",
          url: "https://www.kidney.org/kidney-topics/health-care-team",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["self-management", "care-team", "nephrologist", "coordination"],
    },
  ],
});
