import { defineSection } from "../types.js";

/**
 * PATIENT CARE — the ongoing self-care and monitoring that prevents
 * complications and supports daily life: foot care, eye and kidney and nerve
 * monitoring, cardiovascular risk management, sick-day rules, driving, and
 * mental health / diabetes distress.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Patient Care & Self-Management",
  description:
    "Day-to-day care that protects long-term health: foot care, eye/kidney/nerve screening, cardiovascular risk management, sick-day rules, driving safety, and looking after mental health.",
  entries: [
    {
      id: "foot-care",
      title: "Foot care",
      summary:
        "Diabetes can damage nerves and circulation in the feet, so daily checks, good footwear, and prompt attention to any sore can prevent serious problems including amputation.",
      detail:
        "Foot problems are common and potentially serious in diabetes because nerve damage (neuropathy) can blunt the ability to feel injury, and poor circulation slows healing — so a small blister, cut, or pressure sore can progress to an ulcer or infection before it is noticed. Daily self-care greatly reduces this risk: check the feet every day (including the soles, using a mirror or a helper if needed) for cuts, blisters, redness, swelling, or nail problems; wash and dry them carefully, especially between the toes; moisturize dry skin but not between the toes; never go barefoot; wear well-fitting shoes and check inside them before putting them on; and keep toenails trimmed safely. A foot examination by a clinician at least yearly (more often if there is neuropathy or prior ulcers) is recommended, and any non-healing sore, spreading redness, or new numbness should be reported promptly.",
      sources: [
        {
          label: "Diabetes & Foot Problems",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/foot-problems",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["foot-care", "complications", "self-management"],
      caution:
        "A non-healing foot sore, spreading redness, or new numbness needs prompt medical attention — foot infections can escalate quickly in diabetes.",
    },
    {
      id: "eye-screening",
      title: "Eye and retinopathy screening",
      summary:
        "Diabetic eye disease often has no early symptoms, so regular dilated eye exams are essential to catch and treat retinopathy before vision is lost.",
      detail:
        "Diabetes can damage the small blood vessels of the retina (diabetic retinopathy) and cause macular edema, glaucoma, and cataracts. Early retinopathy usually causes no symptoms, and by the time vision changes appear, damage may be advanced — yet it is a leading, and largely preventable, cause of blindness. The key is regular screening: a dilated eye examination (or approved retinal imaging) on a schedule set by the eye/care team, typically starting at diagnosis for type 2, within a few years of onset for type 1, and during pregnancy. Detected early, retinopathy can be treated (laser, injections of anti-VEGF medication, or surgery) to preserve sight. Keeping blood glucose, blood pressure, and cholesterol in target ranges substantially lowers the risk and slows progression. Sudden vision changes, floaters, or vision loss warrant urgent eye review.",
      sources: [
        {
          label: "Diabetic Eye Disease",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-eye-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["eye", "retinopathy", "screening", "complications"],
    },
    {
      id: "kidney-monitoring",
      title: "Kidney monitoring",
      summary:
        "Diabetes is the leading cause of kidney disease; yearly urine and blood tests catch it early, when treatment can slow or prevent progression.",
      detail:
        "Diabetic kidney disease develops when high glucose (often alongside high blood pressure) damages the kidneys' filtering units over years. It is the leading cause of kidney failure, yet it is silent in its early stages, which makes monitoring vital. Recommended tests are a urine check for albumin (the urine albumin-to-creatinine ratio, which detects small amounts of protein leaking into urine) and a blood test for kidney function (estimated GFR), typically at least yearly. Catching kidney disease early allows protective treatment: tight blood pressure and glucose control, and medications that protect the kidneys — ACE inhibitors or ARBs, SGLT2 inhibitors, and certain others — that can slow progression and reduce cardiovascular risk. Avoiding kidney-stressing factors (such as some pain medicines and dehydration during illness) also helps.",
      sources: [
        {
          label: "Diabetic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["kidney", "nephropathy", "screening", "complications"],
    },
    {
      id: "neuropathy-monitoring",
      title: "Nerve damage (neuropathy) monitoring",
      summary:
        "Diabetic neuropathy can affect the feet, digestion, heart rate, and more; regular checks and good glucose control help detect and limit it.",
      detail:
        "High glucose over time can damage nerves throughout the body. The most common form, peripheral neuropathy, affects the feet and legs (and later hands), causing numbness, tingling, burning, or pain, and raising the risk of unnoticed foot injuries. Autonomic neuropathy affects nerves controlling internal functions, leading to problems such as digestive issues (including delayed stomach emptying, or gastroparesis), bladder problems, sexual dysfunction, abnormal sweating, and blunted heart-rate and blood-pressure responses — the latter can also mask the warning signs of hypoglycemia. Monitoring includes regular foot sensation checks and reporting new symptoms. Management focuses on keeping glucose, blood pressure, and lipids in range to slow progression, foot protection, and treating symptoms (for example, specific medications for neuropathic pain). Early attention can prevent complications like foot ulcers and falls.",
      sources: [
        {
          label: "What Is Diabetic Neuropathy?",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/what-is-diabetic-neuropathy",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["neuropathy", "nerve-damage", "screening", "complications"],
    },
    {
      id: "cardiovascular-risk-management",
      title: "Heart and blood-vessel risk management",
      summary:
        "Diabetes raises the risk of heart attack and stroke, so care targets not just glucose but also blood pressure, cholesterol, and smoking.",
      detail:
        "Cardiovascular disease — heart attack, stroke, and peripheral artery disease — is the leading cause of death in diabetes, because high glucose accelerates damage to blood vessels. Good diabetes care therefore looks well beyond glucose to the whole cardiovascular risk picture, sometimes summarized as the 'ABCs': A1c (glucose), Blood pressure, Cholesterol, and Stopping smoking. Managing blood pressure (often with ACE inhibitors or ARBs), lowering LDL cholesterol (commonly with statins), not smoking, staying active, and eating well all substantially reduce heart and stroke risk. For people with established cardiovascular or kidney disease, certain glucose medications (GLP-1 receptor agonists and SGLT2 inhibitors) are chosen specifically because they reduce cardiovascular events and heart-failure hospitalization. Aspirin is used in some, but only when the care team judges the benefit outweighs bleeding risk.",
      sources: [
        {
          label: "Preventing Diabetes Problems (heart disease and stroke)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Manage Blood Sugar and risk factors (ABCs)",
          url: "https://www.cdc.gov/diabetes/treatment/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["cardiovascular", "blood-pressure", "cholesterol", "complications"],
    },
    {
      id: "sick-day-rules",
      title: "Sick-day rules",
      summary:
        "Illness raises blood sugar and the risk of DKA/HHS; sick-day plans usually mean keep taking diabetes medication, check glucose (and ketones) more often, stay hydrated, and know when to call.",
      detail:
        "Being unwell — even with a cold, flu, or stomach bug — stresses the body, raises glucose, and increases the risk of a hyperglycemic emergency, so people with diabetes benefit from a 'sick-day' plan agreed in advance with their care team. General principles: keep taking insulin and most diabetes medicines, even if eating less (do not simply stop insulin in type 1 — stopping it is a common cause of DKA); check blood glucose more often, and check ketones if glucose is high or you have type 1; drink plenty of fluids to prevent dehydration; try to keep taking in some carbohydrate. Certain medicines (such as SGLT2 inhibitors and sometimes metformin) may be paused during acute illness on medical advice. Seek urgent help for persistent vomiting, inability to keep fluids down, moderate-to-large ketones, very high or hard-to-control glucose, or signs of DKA/HHS. Having a written plan and emergency contacts ready makes sick days safer.",
      sources: [
        {
          label: "Managing Sick Days",
          url: "https://www.cdc.gov/diabetes/living-with/managing-sick-days.html",
          publisher: "CDC",
        },
      ],
      tags: ["sick-day", "self-management", "safety"],
      caution:
        "Sick-day plans are individualized. In type 1, do not stop insulin during illness; confirm any medication pauses (e.g. SGLT2 inhibitors) with the care team, and seek urgent help for ketones or persistent vomiting.",
    },
    {
      id: "driving-safety",
      title: "Driving and hypoglycemia safety",
      summary:
        "For people on insulin or sulfonylureas, low blood sugar can impair driving; checking glucose before and during longer drives and carrying carbohydrate keeps driving safe.",
      detail:
        "Driving is generally safe for people with well-managed diabetes, but hypoglycemia is a real hazard because it can impair concentration, judgment, and reaction time. The main precautions apply to those on insulin or other medications that can cause lows: check glucose before driving and at intervals on longer journeys, don't drive if glucose is low or you feel hypo symptoms (treat first, then wait until recovered), keep fast-acting carbohydrate and a meter/CGM within reach, and never start a long drive on a falling or borderline glucose. People with hypoglycemia unawareness, recent severe lows, or significant eye complications may have specific restrictions, and many jurisdictions have licensing rules for drivers with diabetes. Discussing driving safety with the care team — and knowing local regulations — helps people keep driving while protecting themselves and others.",
      sources: [
        {
          label: "6. Glycemic Goals and Hypoglycemia (hypoglycemia and driving)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S128/157561/6-Glycemic-Goals-and-Hypoglycemia-Standards-of",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Low blood sugar (hypoglycaemia) — driving",
          url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["driving", "hypoglycemia", "safety"],
    },
    {
      id: "mental-health-diabetes-distress",
      title: "Mental health and diabetes distress",
      summary:
        "The relentless demands of diabetes commonly affect mood; 'diabetes distress,' depression, and anxiety are real, treatable, and part of good diabetes care.",
      detail:
        "Diabetes asks for constant attention — monitoring, dosing, food decisions, and worry about complications — and that load takes an emotional toll. 'Diabetes distress' (feeling overwhelmed, frustrated, or burned out by diabetes) is very common and distinct from clinical depression, though the two can overlap; depression and anxiety also occur more often in people with diabetes and can worsen self-care and glucose control. Eating disorders, including unsafe insulin restriction, are a particular risk and need specialized help. These are recognized, treatable parts of diabetes care, not personal failings: guidelines recommend periodic screening for distress, depression, and anxiety, and connecting people with counseling, peer support, diabetes education, and mental health treatment when needed. Addressing the emotional side often improves both wellbeing and glucose outcomes.",
      sources: [
        {
          label: "5. Facilitating Positive Health Behaviors and Well-being (psychosocial care)",
          url: "https://diabetesjournals.org/care/issue/48/Supplement_1",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Managing Diabetes (mental health and coping)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["mental-health", "diabetes-distress", "depression", "self-management"],
    },
  ],
});
