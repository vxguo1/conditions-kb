import { defineSection } from "../types.js";

/**
 * Key drug interactions (REQUIRED area) — the interactions that matter most for
 * cardiovascular medicines: warfarin/DOAC bleeding and food/drug interactions,
 * statin interactions (CYP3A4, grapefruit, fibrates), antiplatelet + anticoag
 * bleeding, and NSAIDs worsening blood pressure/heart failure.
 *
 * Educational only — never a definitive safe/unsafe ruling. A pharmacist or
 * clinician should check every actual combination.
 */
export const drugInteractions = defineSection({
  id: "drug-interactions",
  title: "Key Drug Interactions",
  description:
    "Educational overview of high-stakes interactions for heart medicines — warfarin/DOAC bleeding and interactions, statin (CYP3A4/grapefruit/fibrate) interactions, combined antithrombotic bleeding, and NSAIDs vs blood pressure and heart failure. Always have a pharmacist or clinician check actual combinations.",
  entries: [
    {
      id: "interactions-how-to-think",
      title: "How to think about heart drug interactions",
      summary:
        "Cardiac medicines — especially blood thinners — interact with many drugs, foods, and supplements; the safe move is one med list checked by a pharmacist, not self-judging 'safe' or 'unsafe.'",
      detail:
        "Heart disease often means several medicines at once, and some — particularly anticoagulants and antiplatelets — have serious, well-documented interactions. The entries here flag the best-known ones so a person can recognize and ask about them, but they are not an authoritative interaction check. Whether a combination matters depends on the individual's other drugs, kidney and liver function, and doses — exactly the judgment a pharmacist or prescriber makes. Practical habits that genuinely reduce risk: keep one current list of every prescription, over-the-counter product, vitamin, and supplement; use one pharmacy so interactions are screened; show the list at every appointment and before any new medicine or procedure; and ask 'does this interact with my heart medicines or blood thinner?' before starting anything. Never treat any entry here as a final ruling.",
      sources: [
        { label: "Anticoagulant medicines — other medicines and interactions (NHS)", url: "https://www.nhs.uk/conditions/anticoagulants/", publisher: "NHS (UK)" },
        { label: "Warfarin — MedlinePlus Drug Information", url: "https://medlineplus.gov/druginfo/meds/a682277.html", publisher: "NIH / MedlinePlus" },
      ],
      tags: ["drug-interactions", "overview", "pharmacist", "safety"],
      caution:
        "Educational only — not an interaction check. Have a pharmacist or clinician review your actual medicines and supplements; never a definitive safe/unsafe ruling.",
    },
    {
      id: "warfarin-interactions",
      title: "Warfarin: food, drug, and supplement interactions",
      summary:
        "Warfarin has a narrow safety margin and interacts with many medicines (antibiotics, NSAIDs, amiodarone), foods rich in vitamin K, alcohol, and supplements — which is why INR is monitored.",
      detail:
        "Warfarin is highly effective but has a narrow therapeutic range and an unusually large number of interactions, which is why its effect is tracked with regular INR blood tests. Many medicines change warfarin's effect: some antibiotics, antifungals, amiodarone, and others can increase bleeding risk, while certain drugs reduce its effect and raise clot risk. It also interacts with diet — vitamin K-rich foods (leafy greens) affect it, so consistency matters more than avoidance — and with alcohol and many supplements (for example ginkgo, garlic, St John's wort, and others). Even over-the-counter pain relievers matter: NSAIDs and aspirin add bleeding risk. The practical rules are to keep diet and routine consistent, never start or stop anything (including supplements) without telling the anticoagulation clinic or pharmacist, and report unusual bleeding or bruising. DOACs have fewer food interactions but still interact with some drugs and need dose care in kidney disease.",
      sources: [
        { label: "Warfarin — MedlinePlus Drug Information (interactions)", url: "https://medlineplus.gov/druginfo/meds/a682277.html", publisher: "NIH / MedlinePlus" },
        { label: "Anticoagulant medicines — considerations (NHS)", url: "https://www.nhs.uk/conditions/anticoagulants/", publisher: "NHS (UK)" },
      ],
      tags: ["drug-interactions", "warfarin", "anticoagulant", "vitamin-k", "bleeding", "safety"],
      evidence: "established",
      caution:
        "Never add or stop a medicine, supplement, or major diet change on warfarin without checking with the anticoagulation clinic or pharmacist; report unusual bleeding.",
    },
    {
      id: "statin-interactions",
      title: "Statin interactions (CYP3A4, grapefruit, fibrates)",
      summary:
        "Some statins interact with drugs that block their breakdown (certain antibiotics/antifungals, some heart and HIV drugs) and with grapefruit and fibrates, raising the risk of muscle side effects.",
      detail:
        "Several statins (notably simvastatin and atorvastatin) are broken down by the liver enzyme CYP3A4, so drugs that inhibit it can raise statin levels and the risk of muscle problems (myopathy, rarely the serious rhabdomyolysis). Examples include some antibiotics (clarithromycin, erythromycin), antifungals, certain calcium-channel blockers (diltiazem, verapamil), some HIV/hepatitis C drugs, and large amounts of grapefruit or grapefruit juice. Combining a statin with a fibrate (especially gemfibrozil) or, in some cases, niacin also increases muscle risk. This rarely means statins can't be used — often a different statin or dose avoids the problem — but it is a reason these combinations are checked. Unexplained muscle pain, weakness, or dark urine on a statin should be reported promptly.",
      sources: [
        { label: "Statins — interactions (NHS)", url: "https://www.nhs.uk/conditions/statins/", publisher: "NHS (UK)" },
        { label: "Simvastatin — MedlinePlus Drug Information (interactions)", url: "https://medlineplus.gov/druginfo/meds/a692030.html", publisher: "NIH / MedlinePlus" },
      ],
      tags: ["drug-interactions", "statins", "grapefruit", "muscle", "safety"],
      evidence: "established",
      caution:
        "Report unexplained muscle pain, weakness, or dark urine on a statin; check new medicines and grapefruit intake with a pharmacist.",
    },
    {
      id: "combined-antithrombotic-bleeding",
      title: "Stacking blood thinners and adding NSAIDs",
      summary:
        "Combining antiplatelets and anticoagulants — or adding NSAIDs or aspirin — multiplies bleeding risk; these combinations are sometimes necessary but need deliberate management.",
      detail:
        "Each blood thinner raises bleeding risk, and combining them multiplies it. People may legitimately need combinations for a time — for example dual antiplatelet therapy after a stent, or an anticoagulant plus antiplatelet after certain procedures — but these 'stacked' regimens carry higher bleeding risk and are deliberately time-limited and monitored, sometimes with a stomach-protecting drug added. A common avoidable hazard is adding over-the-counter NSAIDs (ibuprofen, naproxen) or aspirin to a blood thinner, which further increases gastrointestinal bleeding risk; paracetamol/acetaminophen is often preferred for pain in people on anticoagulants, but even that should be confirmed. The key message is that any change to the antithrombotic picture — including OTC pain relievers — belongs with the prescriber or pharmacist, and signs of bleeding (black stools, prolonged bleeding, severe headache) need prompt attention.",
      sources: [
        { label: "Anticoagulant medicines — bleeding risk and other medicines (NHS)", url: "https://www.nhs.uk/conditions/anticoagulants/", publisher: "NHS (UK)" },
        { label: "Warfarin — MedlinePlus (NSAID/aspirin interaction)", url: "https://medlineplus.gov/druginfo/meds/a682277.html", publisher: "NIH / MedlinePlus" },
      ],
      tags: ["drug-interactions", "antiplatelet", "anticoagulant", "nsaids", "bleeding", "safety"],
      evidence: "established",
      caution:
        "Avoid adding NSAIDs/aspirin to a blood thinner without medical advice, and seek care for signs of serious bleeding (black stools, severe headache, prolonged bleeding).",
    },
    {
      id: "nsaids-bp-heart-failure",
      title: "NSAIDs, blood pressure, and heart failure",
      summary:
        "Common anti-inflammatory painkillers (NSAIDs) can raise blood pressure, cause fluid retention, and worsen heart failure and kidney function — a frequent, avoidable problem.",
      detail:
        "Nonsteroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen, naproxen, and diclofenac are widely used for pain, but they have important cardiovascular downsides. They cause the body to retain salt and water and can raise blood pressure, blunt the effect of several blood-pressure medicines (including ACE inhibitors, ARBs, and diuretics), and worsen heart failure by promoting fluid overload. They can also reduce kidney blood flow, a particular concern when combined with ACE inhibitors/ARBs and diuretics (sometimes called a risky 'triple whammy'). For these reasons NSAIDs are used cautiously, or avoided, in people with heart failure, high blood pressure, or kidney disease, and alternatives are preferred for pain. Because NSAIDs are sold over the counter, this is an easy interaction to miss — so it is worth checking with a pharmacist before regular use.",
      sources: [
        { label: "Heart failure — things to avoid (NHS)", url: "https://www.nhs.uk/conditions/heart-failure/", publisher: "NHS (UK)" },
        { label: "The Facts About High Blood Pressure (factors that raise BP)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
      ],
      tags: ["drug-interactions", "nsaids", "blood-pressure", "heart-failure", "kidney", "safety"],
      evidence: "established",
      caution:
        "If you have heart failure, high blood pressure, or kidney disease, check with a pharmacist before using over-the-counter NSAIDs.",
    },
    {
      id: "digoxin-amiodarone-narrow-margin",
      title: "Narrow-margin drugs: digoxin and amiodarone",
      summary:
        "Digoxin has a small gap between a helpful and a toxic level and many drugs raise it; amiodarone interacts widely (including raising digoxin and warfarin levels), so both need careful monitoring.",
      detail:
        "Some heart-rhythm and rate medicines have a narrow margin between benefit and harm, making interactions especially important. Digoxin, used in some people for heart failure or to slow the rate in atrial fibrillation, has a small therapeutic window — too much causes toxicity (nausea, visual changes, dangerous rhythms) — and several drugs (including amiodarone, verapamil, and some others) plus declining kidney function or low potassium can push its level up, which is why blood levels and kidney function are watched. Amiodarone itself is a potent anti-arrhythmic with an unusually broad interaction profile: it raises levels of digoxin and warfarin (increasing bleeding risk), interacts with several statins (muscle risk), and can affect the thyroid, lungs, and liver, so people on it are monitored closely. The practical point is that starting or stopping any medicine — or even some supplements — while on digoxin or amiodarone deserves a deliberate pharmacist or prescriber check, and new symptoms should be reported promptly.",
      sources: [
        { label: "Digoxin — MedlinePlus Drug Information (interactions)", url: "https://medlineplus.gov/druginfo/meds/a682301.html", publisher: "NIH / MedlinePlus" },
        { label: "Warfarin — MedlinePlus (amiodarone interaction)", url: "https://medlineplus.gov/druginfo/meds/a682277.html", publisher: "NIH / MedlinePlus" },
      ],
      tags: ["drug-interactions", "digoxin", "amiodarone", "monitoring", "safety"],
      evidence: "established",
      caution:
        "Digoxin and amiodarone have narrow safety margins and many interactions — don't change other medicines or supplements without a pharmacist/prescriber check, and report new symptoms.",
    },
    {
      id: "potassium-raising-combinations",
      title: "Heart drugs, potassium, and hyperkalemia",
      summary:
        "Several heart-protective medicines (ACE inhibitors, ARBs, MRAs like spironolactone) can raise blood potassium; combining them, or adding potassium supplements or salt substitutes, can push it to dangerous levels.",
      detail:
        "Some of the most valuable heart and blood-pressure medicines — ACE inhibitors, angiotensin-receptor blockers (ARBs), and mineralocorticoid receptor antagonists (MRAs) such as spironolactone or eplerenone, which are pillars of heart-failure care — tend to raise blood potassium. Usually this is managed with periodic blood tests, but the level can climb too high (hyperkalemia) when these drugs are combined, when kidney function declines, or when extra potassium is added from supplements, certain 'low-sodium' salt substitutes (often potassium-based), or some other medicines. Severe hyperkalemia is dangerous because it can cause life-threatening heart-rhythm problems, often with few warning signs. This does not mean these medicines are unsafe — their benefits are large — but it explains why blood potassium and kidney function are monitored, why salt substitutes deserve a mention to the care team, and why new potassium supplements should not be started without advice. Periodic blood tests are how this is kept safe.",
      sources: [
        { label: "What Is Heart Failure? (medicines and monitoring)", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
        { label: "Heart failure — treatment and monitoring", url: "https://www.mayoclinic.org/diseases-conditions/heart-failure/symptoms-causes/syc-20373142", publisher: "Mayo Clinic" },
      ],
      tags: ["drug-interactions", "potassium", "hyperkalemia", "ace-inhibitor", "mra", "kidney", "safety"],
      evidence: "established",
      caution:
        "Don't add potassium supplements or potassium-based salt substitutes on ACE inhibitors, ARBs, or MRAs without checking — blood potassium and kidney function need monitoring.",
    },
  ],
});
