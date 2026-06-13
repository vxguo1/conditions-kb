import { defineSection } from "../types.js";

/**
 * ACUTE EMERGENCIES — the red-flag safety content. Recognizing and responding
 * to hypoglycemia (including severe lows), and the hyperglycemic emergencies
 * DKA and HHS. This section is about WHEN something is an emergency.
 *
 * This is educational recognition information, NOT a treatment protocol. Anyone
 * who may be having a diabetes emergency needs urgent medical help.
 */
export const acuteComplications = defineSection({
  id: "acute-emergencies",
  title: "Acute Emergencies (Red Flags)",
  description:
    "Recognizing diabetes emergencies: low blood sugar (hypoglycemia) including severe lows, and the high-glucose crises DKA and HHS — what they look like and when to get urgent help.",
  entries: [
    {
      id: "hypoglycemia-recognition",
      title: "Hypoglycemia (low blood sugar) — recognizing it",
      summary:
        "Low blood sugar (commonly below 70 mg/dL) can cause shakiness, sweating, hunger, confusion, and irritability, and needs prompt treatment with fast-acting carbohydrate.",
      detail:
        "Hypoglycemia means blood glucose has dropped too low — often defined as below 70 mg/dL (3.9 mmol/L), with more serious effects below 54 mg/dL. It is most common in people taking insulin or insulin-stimulating pills (sulfonylureas), and can be triggered by too much medication, skipped or delayed meals, extra activity, or alcohol. Early warning signs include shakiness, sweating, a fast heartbeat, hunger, anxiety, tingling lips, dizziness, and difficulty concentrating; as it worsens, confusion, slurred speech, irritability, and clumsiness appear. The usual self-treatment is the '15-15 rule': take about 15 grams of fast-acting carbohydrate (glucose tablets, juice, regular soda), wait 15 minutes, recheck, and repeat if still low. Some people, especially with long-standing diabetes, lose their early warning symptoms ('hypoglycemia unawareness'), which is dangerous and should be discussed with their care team.",
      sources: [
        {
          label: "Low blood sugar (hypoglycaemia)",
          url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/",
          publisher: "NHS (UK)",
        },
        {
          label: "6. Glycemic Goals and Hypoglycemia (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S128/157561/6-Glycemic-Goals-and-Hypoglycemia-Standards-of",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["hypoglycemia", "red-flag", "safety"],
      caution:
        "Educational only. Treatment thresholds and steps should be set with the care team; never adjust insulin or other medication doses on your own.",
    },
    {
      id: "severe-hypoglycemia-emergency",
      title: "Severe hypoglycemia — a medical emergency",
      summary:
        "If someone with diabetes becomes unable to swallow, has a seizure, or loses consciousness from low blood sugar, it is an emergency: give glucagon if available and call emergency services.",
      detail:
        "Severe hypoglycemia is a low blood sugar that a person cannot treat themselves because they are too confused, drowsy, having a seizure, or unconscious. This is a life-threatening emergency. Do NOT put food or drink into the mouth of someone who cannot safely swallow, because of choking risk. Instead, give emergency glucagon if it is available and you are trained — it comes as an injection or a nasal spray and raises blood sugar by prompting the liver to release glucose — and call emergency services (911 in the U.S.) right away. Place an unconscious person on their side. People at risk of severe lows (and those around them) are advised to have a glucagon kit and know how to use it. After any severe low, the episode should be reviewed with the care team to prevent a repeat.",
      sources: [
        {
          label: "Low blood sugar (hypoglycaemia) — when it's serious",
          url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/",
          publisher: "NHS (UK)",
        },
        {
          label: "6. Glycemic Goals and Hypoglycemia (glucagon, severe hypoglycemia)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S128/157561/6-Glycemic-Goals-and-Hypoglycemia-Standards-of",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["hypoglycemia", "emergency", "glucagon", "red-flag"],
      caution:
        "If someone is unconscious, having a seizure, or cannot swallow, treat it as an emergency — call emergency services. Do not give food/drink by mouth to someone who can't safely swallow.",
    },
    {
      id: "hyperglycemia-recognition",
      title: "Hyperglycemia (high blood sugar) — recognizing it",
      summary:
        "High blood sugar causes thirst, frequent urination, fatigue, and blurred vision; if it climbs and ketones or severe symptoms appear, it can become an emergency.",
      detail:
        "Hyperglycemia is blood glucose that is too high. Common causes include too little insulin or medication, illness or infection, stress, steroids, and eating more carbohydrate than the medication covers. Typical symptoms are increased thirst, frequent urination, tiredness, blurred vision, and headaches; these may build over hours to days. Mild, occasional highs are managed by following the care team's plan (hydration, taking medication as prescribed, checking glucose, and looking for a cause). The danger is when hyperglycemia progresses to a crisis — diabetic ketoacidosis (DKA) or the hyperosmolar hyperglycemic state (HHS) — signaled by very high readings, ketones, nausea/vomiting, abdominal pain, rapid breathing, drowsiness, or confusion. Those warning signs mean urgent medical care is needed.",
      sources: [
        {
          label: "Hyperglycemia in diabetes — symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/hyperglycemia/symptoms-causes/syc-20373631",
          publisher: "Mayo Clinic",
        },
        {
          label: "Manage Blood Sugar (high blood sugar)",
          url: "https://www.cdc.gov/diabetes/treatment/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["hyperglycemia", "red-flag", "safety"],
    },
    {
      id: "dka",
      title: "Diabetic ketoacidosis (DKA) — emergency",
      summary:
        "DKA is a life-threatening buildup of blood acids (ketones) from severe insulin lack, most often in type 1; fruity breath, vomiting, belly pain, and fast breathing are warning signs.",
      detail:
        "Diabetic ketoacidosis develops when there is not enough insulin for the body to use glucose, so it burns fat instead and produces acidic ketones that build up in the blood. It is most common in type 1 diabetes (and can be the first sign of it) but can occur in type 2 under severe stress; it can also be triggered by missed insulin, infection, or illness, and certain medications (SGLT2 inhibitors) can cause DKA even when glucose is only mildly elevated. Warning signs include high blood sugar and high urine/blood ketones, intense thirst and urination, nausea and vomiting, abdominal pain, weakness, a fruity smell on the breath, rapid deep breathing, and confusion — symptoms can come on within 24 hours. DKA is a medical emergency requiring hospital treatment with fluids, insulin, and electrolytes; untreated, it can be fatal. Anyone with these signs should seek emergency care immediately.",
      sources: [
        {
          label: "Diabetic ketoacidosis — symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/diabetic-ketoacidosis/symptoms-causes/syc-20371551",
          publisher: "Mayo Clinic",
        },
        {
          label: "Diabetic ketoacidosis",
          url: "https://www.nhs.uk/conditions/diabetic-ketoacidosis/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["dka", "ketoacidosis", "emergency", "red-flag", "type-1"],
      caution:
        "DKA is a medical emergency. Suspected DKA — high glucose with ketones, vomiting, abdominal pain, or fast breathing — needs emergency care, not home management.",
    },
    {
      id: "hhs",
      title: "Hyperosmolar hyperglycemic state (HHS) — emergency",
      summary:
        "HHS is a dangerous emergency of extremely high blood sugar with severe dehydration, mainly in type 2 diabetes, often without significant ketones.",
      detail:
        "The hyperosmolar hyperglycemic state (HHS) is a serious hyperglycemic emergency seen mostly in type 2 diabetes, often in older adults and frequently triggered by infection, other illness, or missed medication. Blood glucose rises to very high levels (commonly above 600 mg/dL), causing heavy urination that leads to profound dehydration and concentrated ('hyperosmolar') blood. Unlike DKA, there is usually enough insulin to prevent major ketone buildup, so significant acidosis is typically absent — but HHS is at least as dangerous. Symptoms develop over days and include extreme thirst, very frequent urination (then reduced urination as dehydration worsens), weakness, dry mouth, fever, confusion, drowsiness, and eventually loss of consciousness. HHS is a medical emergency requiring hospital treatment with intravenous fluids, insulin, and electrolyte correction; prompt care is essential.",
      sources: [
        {
          label: "6. Glycemic Goals and Hypoglycemia — hyperglycemic crises (DKA and HHS)",
          url: "https://diabetesjournals.org/care/article/48/Supplement_1/S128/157561/6-Glycemic-Goals-and-Hypoglycemia-Standards-of",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Diabetic coma — symptoms and causes (HHS, DKA, severe hypoglycemia)",
          url: "https://www.mayoclinic.org/diseases-conditions/diabetic-coma/symptoms-causes/syc-20371475",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["hhs", "hyperglycemia", "emergency", "red-flag", "type-2"],
      caution:
        "HHS is a medical emergency. Very high glucose with confusion, drowsiness, or severe dehydration needs emergency care immediately.",
    },
    {
      id: "when-to-seek-emergency-care",
      title: "When a diabetes situation is an emergency",
      summary:
        "Loss of consciousness, seizure, confusion, persistent vomiting, ketones with high glucose, fast/labored breathing, or inability to keep fluids down all warrant emergency care.",
      detail:
        "Some diabetes situations need emergency help rather than home management. Call emergency services or go to the ER for: loss of consciousness or a seizure; severe confusion or drowsiness; a low blood sugar that doesn't recover after repeated fast-acting carbohydrate (or where the person can't safely swallow); high blood sugar with moderate-to-large ketones; persistent vomiting or inability to keep fluids down; severe abdominal pain; rapid, deep, or labored breathing; or signs of serious infection in someone with diabetes. During illness, the risk of DKA and HHS rises, which is why having sick-day guidance from the care team matters. When in doubt about whether something is an emergency, it is safer to seek urgent advice — diabetes crises can worsen quickly but respond well to prompt treatment.",
      sources: [
        {
          label: "Diabetic ketoacidosis — when to see a doctor / emergency",
          url: "https://www.mayoclinic.org/diseases-conditions/diabetic-ketoacidosis/symptoms-causes/syc-20371551",
          publisher: "Mayo Clinic",
        },
        {
          label: "Managing Sick Days (when to get emergency care)",
          url: "https://www.cdc.gov/diabetes/living-with/managing-sick-days.html",
          publisher: "CDC",
        },
      ],
      tags: ["emergency", "red-flag", "safety", "when-to-seek-help"],
      caution:
        "This is general guidance, not a substitute for emergency services. In a suspected emergency, call your local emergency number.",
    },
  ],
});
