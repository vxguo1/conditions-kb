import { defineSection } from "../types.js";

/**
 * Nutrition & the CKD diet — the kidney-friendly eating principles that change
 * as CKD advances: sodium, potassium, phosphorus, protein, and fluid, plus the
 * central role of a renal dietitian. Educational; specific limits are
 * individualized and set by the care team / dietitian, not self-prescribed.
 */
export const nutrition = defineSection({
  id: "nutrition",
  title: "Nutrition & the CKD Diet",
  description:
    "Kidney-friendly eating that shifts as CKD advances — managing sodium, potassium, phosphorus, protein, and fluid — and the central role of a renal dietitian. Educational; specific targets are individualized by the care team.",
  entries: [
    {
      id: "ckd-diet-overview",
      title: "Why diet matters and how it changes by stage",
      summary:
        "Diet is a powerful tool in CKD because the kidneys handle what we eat and drink; early on the focus is heart-healthy eating, with more specific limits on minerals and protein as CKD advances.",
      detail:
        "Because the kidneys process much of what we eat and drink — removing waste, balancing minerals, and handling fluid — diet is one of the most important tools for living well with CKD and easing the kidneys' workload. In the early stages (1 and 2), the emphasis is usually on a generally heart-healthy diet: lower salt, plenty of vegetables and fruit, less processed food, and good blood-pressure and blood-sugar control, without many specific restrictions. As CKD advances (stages 3 to 5), the kidneys handle certain nutrients less well, so eating plans often become more tailored — managing sodium, potassium, phosphorus, protein, and sometimes fluid to specific targets. Crucially, these targets are individualized: the right amount of potassium or protein for one person can be wrong for another, and over-restricting can cause malnutrition. That is why CKD nutrition is best guided by a kidney dietitian working with the care team, using a person's lab results and overall health, rather than generic internet 'kidney diets.'",
      sources: [
        {
          label: "Healthy Eating for Adults with Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Kidney-Friendly Eating Plan",
          url: "https://www.kidneyfund.org/living-kidney-disease/healthy-eating-activity/kidney-friendly-eating-plan",
          publisher: "American Kidney Fund",
        },
      ],
      tags: ["nutrition", "diet", "overview", "staging"],
      caution:
        "Dietary targets in CKD are individualized — do not self-impose strict limits. Over-restricting can cause malnutrition; work with a kidney dietitian.",
    },
    {
      id: "sodium-salt",
      title: "Sodium (salt)",
      summary:
        "Limiting sodium helps control blood pressure and fluid buildup, which protects the kidneys and heart; most of the salt we eat comes from processed and restaurant foods, not the shaker.",
      detail:
        "Sodium, the main part of salt, drives up blood pressure and causes the body to hold onto fluid — both of which strain the kidneys and the heart — so reducing sodium is one of the most broadly recommended steps in CKD, often with a target of under about 2,300 mg per day (and sometimes lower, as advised). A key insight is that most dietary sodium does not come from the salt shaker but from packaged, processed, canned, and restaurant foods — deli meats, canned soups, snack foods, sauces, and fast food. Practical, dietitian-endorsed strategies include cooking more at home, choosing fresh or frozen over canned, rinsing canned foods, reading Nutrition Facts labels for sodium, and flavoring food with herbs and spices instead of salt. A caution: many 'salt substitutes' are high in potassium, which can be dangerous in CKD, so they should not be used without checking with the care team. Lowering sodium supports the blood-pressure control that is central to slowing CKD.",
      sources: [
        {
          label: "Healthy Eating for Adults with Chronic Kidney Disease (sodium)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Sodium and Your CKD Diet",
          url: "https://www.kidney.org/kidney-topics/sodium-and-your-ckd-diet-how-to-spice-your-cooking",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["nutrition", "sodium", "salt", "blood-pressure"],
      caution:
        "Many salt substitutes are high in potassium, which can be hazardous in CKD — check with the care team before using them.",
    },
    {
      id: "potassium",
      title: "Potassium",
      summary:
        "As CKD advances, the kidneys may not remove potassium well, so blood levels can rise dangerously; some people need to limit high-potassium foods, but the right amount is individualized.",
      detail:
        "Potassium is essential for nerves and muscles, including the heartbeat, and is normally balanced by the kidneys. In more advanced CKD, the kidneys may not clear potassium effectively, allowing blood levels to climb — and high potassium (hyperkalemia) can cause dangerous heart-rhythm problems, often with no warning symptoms. For people whose blood potassium runs high, the care team may advise limiting high-potassium foods (such as bananas, oranges, potatoes, tomatoes, and many beans), choosing lower-potassium alternatives, and using cooking techniques that reduce potassium in some vegetables. Importantly, this is not a blanket rule for everyone with CKD: many people, especially in earlier stages, do not need to restrict potassium, and unnecessary restriction means missing out on healthy produce. Certain medicines (including some used to protect the kidneys) and salt substitutes can also raise potassium. Because the right potassium target depends on blood levels, medicines, and stage, it should be set with a dietitian and clinician, guided by regular blood tests — not self-imposed.",
      sources: [
        {
          label: "Potassium in Your CKD Diet",
          url: "https://www.kidney.org/kidney-topics/potassium-your-ckd-diet",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Healthy Eating for Adults with Chronic Kidney Disease (potassium)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["nutrition", "potassium", "hyperkalemia", "diet"],
      caution:
        "Potassium limits are individualized and based on blood tests — not everyone with CKD needs to restrict it. High potassium can be dangerous; manage it with the care team.",
    },
    {
      id: "phosphorus",
      title: "Phosphorus",
      summary:
        "Damaged kidneys remove phosphorus less well, and high levels harm bones and blood vessels; limiting added phosphorus — especially in processed foods — is a key part of the advanced-CKD diet.",
      detail:
        "Phosphorus is a mineral that works with calcium and vitamin D to keep bones healthy, but as CKD advances the kidneys remove it less effectively, so blood phosphorus can rise. Over time, high phosphorus contributes to the bone and blood-vessel problems of CKD–mineral and bone disorder, weakening bones and promoting calcium deposits in arteries. Managing it focuses especially on added (inorganic) phosphorus, which is found in many processed foods, fast foods, colas, and some packaged products and is absorbed very efficiently — checking ingredient labels for additives containing 'PHOS' (such as phosphoric acid and various phosphates) is a practical strategy. Naturally occurring phosphorus in protein foods like dairy, meat, and beans is absorbed less completely, so guidance balances limiting it against maintaining adequate nutrition. Some people also need phosphate-binder medicines taken with meals to reduce how much phosphorus is absorbed. Phosphorus targets, dietary changes, and any binders are managed by the care team and dietitian using blood results.",
      sources: [
        {
          label: "Phosphorus and Your CKD Diet",
          url: "https://www.kidney.org/kidney-topics/phosphorus-and-your-ckd-diet",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Healthy Eating for Adults with Chronic Kidney Disease (phosphorus)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["nutrition", "phosphorus", "bone-health", "ckd-mbd", "diet"],
    },
    {
      id: "protein",
      title: "Protein",
      summary:
        "Protein needs in CKD are a balancing act — too much can stress the kidneys, but too little risks malnutrition, and needs change markedly once a person starts dialysis.",
      detail:
        "Protein is essential for muscle, healing, and immune function, but it also produces waste that the kidneys must clear, so protein intake in CKD is a careful balance rather than simply 'less is better.' In CKD before dialysis, very high protein intake can add to the kidneys' workload, and a moderate, often somewhat reduced protein intake may be advised for some people to ease that burden — but cutting protein too far risks malnutrition and muscle loss, which carry their own serious harms. The balance flips with dialysis: dialysis removes protein and increases needs, so people on dialysis are usually advised to eat more protein, not less. Because of these competing concerns and the differences by stage and treatment, protein is an area where individualized guidance from a renal dietitian is especially important, using a person's stage, nutrition status, and labs. The goal is enough good-quality protein to stay nourished without unnecessarily overworking the kidneys — a target only a professional can set well.",
      sources: [
        {
          label: "Nutrition and Kidney Disease, Stages 1–5 (Not on Dialysis)",
          url: "https://www.kidney.org/kidney-topics/nutrition-and-kidney-disease-stages-1-5-not-dialysis",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Eating & Nutrition for Hemodialysis (protein needs)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis/eating-nutrition",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["nutrition", "protein", "dialysis", "malnutrition", "diet"],
      caution:
        "Protein needs differ a lot by stage and especially with dialysis — do not cut protein on your own, as too little causes malnutrition. A renal dietitian should set the target.",
    },
    {
      id: "fluid-and-dietitian",
      title: "Fluid management and the renal dietitian",
      summary:
        "Some people with advanced CKD or on dialysis need to limit fluids to avoid overload; a renal dietitian individualizes the whole plan so it protects the kidneys without causing malnutrition.",
      detail:
        "Fluid is the final piece of the CKD diet. Many people with earlier CKD do not need to restrict fluids and should stay well hydrated, but those with advanced CKD or kidney failure — especially on dialysis — may need to limit how much they drink, because failing kidneys cannot remove excess fluid, which can cause swelling, high blood pressure, and dangerous fluid in the lungs. Fluid limits are often tied to urine output and tracked using daily weight between dialysis sessions. Because every element of CKD nutrition — sodium, potassium, phosphorus, protein, and fluid — must be balanced against each other and against the risk of malnutrition, and because targets shift with stage, lab results, and treatment, the renal (kidney) dietitian is central to CKD care. They translate the person's numbers and life into a realistic, individualized plan, adjust it over time, and help avoid the twin pitfalls of overload and undernutrition. Anyone with CKD benefits from a referral to a kidney dietitian rather than relying on generic diet advice.",
      sources: [
        {
          label: "Eating Right with Kidney Failure (fluids)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/eating-right",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Fluid Overload in a Dialysis Patient",
          url: "https://www.kidney.org/kidney-topics/fluid-overload-dialysis-patient",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["nutrition", "fluid", "dietitian", "dialysis", "diet"],
    },
  ],
});
