import { defineSection } from "../types.js";

/**
 * Key drug interactions — educational coverage of what matters most when kidneys
 * are impaired: renal dosing (drugs cleared by the kidneys can accumulate),
 * nephrotoxins to be aware of (NSAIDs, iodinated contrast, aminoglycosides and
 * some other antibiotics, certain herbal products), the potassium-raising
 * combinations (ACE/ARB + finerenone + salt substitutes), and metformin/SGLT2
 * cautions in CKD.
 *
 * This is EDUCATIONAL background to help people ask good questions. It is NOT an
 * authoritative interaction check and never a definitive "safe/unsafe" ruling —
 * a pharmacist or clinician should review every actual medication and supplement
 * combination for an individual with kidney disease.
 */
export const drugInteractions = defineSection({
  id: "drug-interactions",
  title: "Key Drug Interactions",
  description:
    "Educational overview of medication concerns in CKD — renal dosing, nephrotoxins to be aware of (NSAIDs, contrast dye, certain antibiotics, some herbals), potassium-raising combinations, and metformin/SGLT2 cautions. Always have a pharmacist or clinician check actual medicines.",
  entries: [
    {
      id: "interactions-how-to-think-ckd",
      title: "How to think about medicines with kidney disease",
      summary:
        "When kidneys are impaired, two things matter: many drugs need dose adjustment, and some can further harm the kidneys; the safe move is one full medication list checked by a pharmacist — not self-judging 'safe' or 'unsafe.'",
      detail:
        "Kidney disease changes the medication picture in two key ways. First, the kidneys clear many drugs from the body, so reduced kidney function can let some medicines build up to harmful levels unless the dose is adjusted or the drug avoided — this is 'renal dosing.' Second, certain medicines and substances can directly worsen kidney function (nephrotoxins) or raise potassium dangerously. The entries here explain the best-known concerns so a person can recognize and ask about them, but they are not a substitute for an authoritative check: whether a given medicine or combination is a problem depends on the individual's kidney function, other conditions, and the rest of their regimen — exactly the judgment a pharmacist or prescriber is trained to make. Habits that genuinely reduce risk: keep one up-to-date list of every prescription, over-the-counter product, vitamin, and herbal supplement; mention you have kidney disease (and your latest eGFR) with every new medicine and before any scan or procedure; and use one pharmacy so interactions and renal dosing are screened. Never treat any entry here as a definitive ruling.",
      sources: [
        {
          label: "Safe Medicine Use with Chronic Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/safe-medicine-use-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Which Drugs Are Harmful to Your Kidneys?",
          url: "https://www.kidney.org/kidney-topics/which-drugs-are-harmful-to-your-kidneys",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["drug-interactions", "overview", "renal-dosing", "pharmacist", "safety"],
      caution:
        "Educational only — not an interaction or dosing check. Have a pharmacist or clinician review your actual medicines and supplements against your kidney function; this is never a definitive safe/unsafe ruling.",
    },
    {
      id: "nsaids-nephrotoxicity",
      title: "NSAID pain relievers",
      summary:
        "NSAIDs like ibuprofen and naproxen reduce blood flow to the kidneys and can worsen kidney function, especially with regular use or alongside ACE inhibitors/ARBs and diuretics.",
      detail:
        "Nonsteroidal anti-inflammatory drugs (NSAIDs) — including common over-the-counter pain relievers such as ibuprofen and naproxen — are among the medications people with CKD most need to be careful with. NSAIDs reduce blood flow to the kidneys, which can acutely worsen kidney function, and regular or high-dose use over time has been linked to kidney damage. The risk is higher in people who already have reduced kidney function, heart disease, or high blood pressure, and it is compounded when NSAIDs are combined with ACE inhibitors or ARBs and a diuretic (sometimes called the 'triple whammy'), a combination particularly associated with acute kidney injury. Because NSAIDs are sold without a prescription and are easy to reach for, this is a frequently missed risk. People with CKD are often advised to limit or avoid NSAIDs and to ask about alternative pain relief — but which painkillers are appropriate for an individual is a question for the clinician or pharmacist, not a self-decision.",
      sources: [
        {
          label: "Pain Medications for CKD: Risks, Safety, and Alternatives",
          url: "https://www.kidney.org/kidney-topics/pain-medicines-and-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Which Drugs Are Harmful to Your Kidneys? (NSAIDs)",
          url: "https://www.kidney.org/kidney-topics/which-drugs-are-harmful-to-your-kidneys",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["drug-interactions", "nsaids", "nephrotoxin", "ace-inhibitor", "diuretic", "safety"],
      evidence: "established",
      caution:
        "NSAIDs can worsen kidney function, especially with an ACE inhibitor/ARB plus a diuretic. Ask a clinician or pharmacist about safer pain relief before using them.",
    },
    {
      id: "iodinated-contrast",
      title: "Iodinated contrast dye (for scans)",
      summary:
        "The iodine-based contrast dye used in some CT scans and angiograms can occasionally worsen kidney function; precautions are taken in people with reduced eGFR, so always mention your kidney disease before a scan.",
      detail:
        "Some imaging tests — certain CT scans, angiograms, and catheter procedures — use an iodine-based contrast dye to make blood vessels and tissues visible. In people with reduced kidney function, this contrast can occasionally cause a temporary worsening of kidney function (contrast-associated acute kidney injury), though for most people with mild CKD the risk is low and is weighed against the value of the scan. To reduce risk, clinicians take precautions in higher-risk people, such as ensuring good hydration, using the smallest necessary amount of contrast, and sometimes adjusting or pausing certain medicines around the scan (for example metformin or diuretics). A separate, rare concern with gadolinium contrast (used in some MRIs) exists in severe kidney impairment. The practical takeaway for a person with CKD is simple but important: always tell the team ordering and performing any scan that you have kidney disease and, if known, your eGFR, so they can decide on contrast and precautions — these are clinical decisions, not ones to make alone.",
      sources: [
        {
          label: "Five Surprising Ways You Could Be Damaging Your Kidneys (contrast dye)",
          url: "https://www.kidney.org/kidney-topics/five-surprising-ways-you-could-be-damaging-your-kidneys",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Contrast Dye and the Kidneys",
          url: "https://www.kidney.org/kidney-topics/contrast-dye-and-kidneys",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["drug-interactions", "contrast", "imaging", "nephrotoxin", "metformin", "safety"],
      evidence: "established",
      caution:
        "Always tell the team you have kidney disease before any scan with contrast dye, so they can take precautions and decide about medicines like metformin — don't assume it's fine or pause medicines yourself.",
    },
    {
      id: "nephrotoxic-antibiotics",
      title: "Antibiotics and other drugs needing renal dosing",
      summary:
        "Some antibiotics (such as aminoglycosides) can be directly toxic to the kidneys, and many antibiotics and other drugs need their dose adjusted for kidney function to avoid harmful buildup.",
      detail:
        "Antibiotics illustrate both medication risks in CKD. A few are directly nephrotoxic — aminoglycoside antibiotics (such as gentamicin and tobramycin) are well known for being able to damage the kidneys, so they are used carefully, with monitoring, in people with reduced kidney function. More broadly, many antibiotics — and many other medicines, including some antivirals, certain diabetes and heart drugs, and others — are cleared by the kidneys and need their dose or frequency adjusted (or need avoiding) when kidney function is reduced, because the normal dose could accumulate to toxic levels. This is why the prescriber and pharmacist check kidney function (eGFR) when choosing and dosing medicines, and why mentioning your CKD at every new prescription is so important — a dose that is right for normal kidneys can be too much for impaired ones. Other agents to be aware of include some bowel-prep products and certain proton-pump inhibitors with long-term use. The specifics of which drugs and what doses are appropriate are determined by the clinical team using kidney function, not by the patient.",
      sources: [
        {
          label: "Which Drugs Are Harmful to Your Kidneys? (antibiotics and others)",
          url: "https://www.kidney.org/kidney-topics/which-drugs-are-harmful-to-your-kidneys",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Safe Medicine Use with Chronic Kidney Disease",
          url: "https://www.kidney.org/kidney-topics/safe-medicine-use-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["drug-interactions", "antibiotics", "aminoglycosides", "renal-dosing", "nephrotoxin", "safety"],
      evidence: "established",
      caution:
        "Many antibiotics and other drugs need dose adjustment for kidney function — tell every prescriber and pharmacist you have CKD so the dose can be checked.",
    },
    {
      id: "potassium-raising-combinations",
      title: "Medicines and products that raise potassium",
      summary:
        "Several kidney-protective drugs (ACE inhibitors, ARBs, finerenone) and some others raise blood potassium, and combined with potassium-based salt substitutes or supplements this can become dangerous.",
      detail:
        "Because high potassium is a special hazard in CKD, it is worth knowing which medicines and products can raise it. Several of the most kidney-and-heart-protective drugs — ACE inhibitors, ARBs, and the newer agent finerenone — can increase blood potassium, which is why potassium is monitored when they are started or increased, and occasionally limits their dose. Other potassium-raising medicines include potassium-sparing diuretics (such as spironolactone) and potassium supplements themselves. A frequently overlooked source is potassium-based salt substitutes (often marketed as 'low-sodium' or 'lite' salt), which can deliver a large potassium load and have caused dangerous hyperkalemia in people with CKD. Combining several potassium-raising factors — the protective drugs, supplements, salt substitutes, and a high-potassium diet — multiplies the risk. This does not mean the beneficial drugs should be avoided; it means potassium is watched and managed so they can be used safely. Any decision about these medicines, supplements, or salt substitutes belongs with the care team and pharmacist.",
      sources: [
        {
          label: "High Potassium (Hyperkalemia): Causes, Symptoms, and Treatment",
          url: "https://www.kidney.org/kidney-topics/hyperkalemia-high-potassium",
          publisher: "National Kidney Foundation",
        },
        {
          label: "ACE Inhibitors and ARBs (potassium monitoring)",
          url: "https://www.kidney.org/kidney-topics/ace-inhibitors-and-arbs",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["drug-interactions", "potassium", "ace-inhibitor", "arb", "finerenone", "salt-substitute", "safety"],
      evidence: "established",
      caution:
        "Potassium-based salt substitutes and supplements can be dangerous in CKD, especially alongside ACE inhibitors, ARBs, or finerenone — check with the care team before using them.",
    },
    {
      id: "metformin-sglt2-renal-cautions",
      title: "Metformin, SGLT2 inhibitors, and 'sick-day' cautions",
      summary:
        "Some diabetes medicines have kidney-related cautions — metformin needs dose limits or holding in reduced function and around contrast, and SGLT2 inhibitors are paused during illness and surgery.",
      detail:
        "Two widely used diabetes medicines that also feature in kidney care carry specific renal cautions. Metformin is cleared by the kidneys, so it is dose-limited or avoided when kidney function is significantly reduced, and is commonly paused around iodinated-contrast scans, major surgery, and acute illnesses with dehydration, to lower the rare risk of a serious condition called lactic acidosis; it is restarted once kidney function is confirmed stable. SGLT2 inhibitors, though kidney-protective and a mainstay of CKD treatment, are typically paused during significant acute illness and before planned surgery because of a rare risk of (sometimes euglycemic) ketoacidosis, and they can add to dehydration alongside diuretics. More generally, many people with CKD are given 'sick-day' guidance about which medicines may need temporary holding during illnesses with vomiting, diarrhea, or poor intake — often including ACE inhibitors/ARBs, diuretics, metformin, SGLT2 inhibitors, and NSAIDs — to protect the kidneys. Crucially, exactly which medicines to hold, and when to restart them, are decisions to confirm with the clinician or pharmacist, never to guess.",
      sources: [
        {
          label: "Safe Medicine Use with Chronic Kidney Disease (sick-day and diabetes medicines)",
          url: "https://www.kidney.org/kidney-topics/safe-medicine-use-chronic-kidney-disease",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Metformin — cautions, kidney function and procedures",
          url: "https://www.nhs.uk/medicines/metformin/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "metformin", "sglt2", "sick-day", "contrast", "safety"],
      evidence: "established",
      caution:
        "Don't pause or restart medicines like metformin or SGLT2 inhibitors on your own for illness, scans, or surgery — confirm sick-day guidance with your clinician or pharmacist.",
    },
  ],
});
