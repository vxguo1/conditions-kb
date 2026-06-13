import { defineSection } from "../types.js";

/**
 * Chronic complications — the long-term conditions that high glucose can cause
 * over years, divided into microvascular (small-vessel: eyes, kidneys, nerves)
 * and macrovascular (large-vessel: heart, brain, limbs) disease. The
 * complementary self-care and screening practices live in patient-care.ts.
 */
export const chronicComplications = defineSection({
  id: "chronic-complications",
  title: "Chronic Complications",
  description:
    "The long-term complications of diabetes: microvascular disease (retinopathy, nephropathy, neuropathy), macrovascular disease (heart attack, stroke, peripheral artery disease), and why glucose control prevents them.",
  entries: [
    {
      id: "why-complications-happen",
      title: "Why long-term complications develop",
      summary:
        "Years of high glucose damage blood vessels large and small; this underlies most diabetes complications and is why long-term control matters.",
      detail:
        "Most chronic complications of diabetes stem from damage to blood vessels caused by prolonged high glucose, often compounded by high blood pressure and abnormal cholesterol. The damage is grouped into two categories. 'Microvascular' disease affects the smallest vessels and causes the classic diabetes complications of the eyes (retinopathy), kidneys (nephropathy), and nerves (neuropathy). 'Macrovascular' disease affects large arteries, accelerating atherosclerosis and raising the risk of heart attack, stroke, and peripheral artery disease. Landmark studies established that keeping glucose closer to normal substantially lowers the risk of microvascular complications, and that managing blood pressure, cholesterol, and smoking is essential to reduce macrovascular risk. The encouraging message is that complications are not inevitable — good, sustained management greatly reduces them.",
      sources: [
        {
          label: "Preventing Diabetes Problems",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Diabetes Basics — complications",
          url: "https://www.cdc.gov/diabetes/about/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["complications", "microvascular", "macrovascular", "overview"],
    },
    {
      id: "diabetic-retinopathy",
      title: "Diabetic retinopathy and eye disease",
      summary:
        "Damage to the retina's blood vessels is a leading cause of blindness in adults, but is preventable and treatable when caught early through screening.",
      detail:
        "Diabetic retinopathy is damage to the blood vessels of the light-sensing retina. Early ('non-proliferative') retinopathy may cause vessels to leak or close; advanced ('proliferative') retinopathy involves fragile new vessels that can bleed and lead to retinal detachment. Diabetic macular edema — fluid in the central retina — can blur vision at any stage. Diabetes also raises the risk of cataracts and glaucoma. Because early disease is symptomless, regular dilated eye exams are the key to catching it before vision is threatened. Treatments — laser photocoagulation, anti-VEGF injections, and surgery — are effective at preserving sight when started in time, and tight control of glucose, blood pressure, and lipids slows progression. Diabetic eye disease remains a leading cause of preventable blindness in working-age adults, which is what makes screening so important.",
      sources: [
        {
          label: "Diabetic Eye Disease",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-eye-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["retinopathy", "eye", "microvascular", "complications"],
    },
    {
      id: "diabetic-nephropathy",
      title: "Diabetic kidney disease (nephropathy)",
      summary:
        "Diabetes is the leading cause of kidney failure; damage builds silently over years but can be slowed with early detection and protective treatment.",
      detail:
        "Diabetic kidney disease results from damage to the kidneys' tiny filtering vessels. It progresses silently: the first detectable sign is usually small amounts of the protein albumin in the urine, followed over years by a declining filtration rate (eGFR) and, in some, progression to kidney failure requiring dialysis or transplant. Diabetes is the single leading cause of kidney failure. Risk is amplified by high blood pressure, so the two are managed together. Early detection through yearly urine albumin and eGFR testing allows protective treatment — blood pressure and glucose control, plus medications (ACE inhibitors or ARBs, SGLT2 inhibitors, and newer agents) shown to slow decline and also reduce cardiovascular risk. As with other complications, the trajectory is far better when kidney disease is found and treated early rather than late.",
      sources: [
        {
          label: "Diabetic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["nephropathy", "kidney", "microvascular", "complications"],
    },
    {
      id: "diabetic-neuropathy-complication",
      title: "Diabetic neuropathy (nerve damage)",
      summary:
        "Nerve damage from diabetes can cause foot numbness and pain, digestive and bladder problems, and blunted warning signs of low blood sugar.",
      detail:
        "Neuropathy — nerve damage — is among the most common diabetes complications, affecting up to roughly half of people with diabetes over time. Peripheral neuropathy typically begins in the feet with numbness, tingling, burning, or pain and is a major contributor to foot ulcers and amputations because injuries go unfelt. Autonomic neuropathy disrupts the nerves that run internal organs, producing problems such as gastroparesis (delayed stomach emptying), constipation or diarrhea, bladder dysfunction, erectile dysfunction, abnormal sweating, dizziness on standing, and reduced awareness of hypoglycemia. Focal neuropathies can affect single nerves (for example causing carpal tunnel syndrome or sudden eye-muscle palsies). There is no cure for established nerve damage, so prevention through glucose, blood-pressure, and lipid control is central; symptoms such as neuropathic pain can be treated, and foot protection prevents downstream injury.",
      sources: [
        {
          label: "What Is Diabetic Neuropathy?",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/what-is-diabetic-neuropathy",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["neuropathy", "nerve-damage", "microvascular", "complications"],
    },
    {
      id: "cardiovascular-disease-complication",
      title: "Cardiovascular and large-vessel disease",
      summary:
        "Diabetes roughly doubles the risk of heart attack and stroke and is the leading cause of death in people with diabetes.",
      detail:
        "Macrovascular complications affect the large arteries, where diabetes accelerates atherosclerosis (the buildup of fatty plaque). This raises the risk of coronary heart disease and heart attack, stroke and transient ischemic attack, and peripheral artery disease (reduced blood flow to the legs, which contributes to foot complications and slow wound healing). Cardiovascular disease is the leading cause of death in people with diabetes, and the excess risk is driven by the combination of high glucose with high blood pressure, abnormal cholesterol, and smoking. Reducing it requires a whole-risk approach — glucose, blood pressure, and lipid control, not smoking, activity, and healthy eating — and, for many, statins and specific glucose-lowering drugs (GLP-1 receptor agonists and SGLT2 inhibitors) proven to cut cardiovascular events. Heart-protective care is as central to diabetes management as glucose itself.",
      sources: [
        {
          label: "Preventing Diabetes Problems (heart disease and stroke)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Diabetes Basics — heart disease and stroke risk",
          url: "https://www.cdc.gov/diabetes/about/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["cardiovascular", "macrovascular", "heart", "stroke", "complications"],
    },
    {
      id: "other-complications",
      title: "Other complications and associations",
      summary:
        "Diabetes is also linked to higher risks of infection, skin and gum problems, hearing loss, fatty liver disease, dementia, and sexual dysfunction.",
      detail:
        "Beyond the classic eye, kidney, nerve, and cardiovascular complications, diabetes is associated with a range of other problems. High glucose impairs immune defenses, raising the risk and severity of infections (skin, urinary, gum, and others) and slowing wound healing. Skin conditions and gum (periodontal) disease are more common. Diabetes is linked to non-alcoholic/metabolic fatty liver disease, certain cancers, obstructive sleep apnea, hearing loss, and an increased risk of cognitive decline and dementia. Sexual dysfunction — including erectile dysfunction and, in women, reduced sexual function — is common, often related to vascular and nerve damage. Depression and diabetes distress (covered under patient care) are also more frequent. Many of these risks are reduced by the same fundamentals: good glucose, blood-pressure, and lipid control, not smoking, vaccinations, and regular preventive care including dental and skin attention.",
      sources: [
        {
          label: "Preventing Diabetes Problems (infections, skin, gums, and more)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["complications", "infection", "associations"],
    },
  ],
});
