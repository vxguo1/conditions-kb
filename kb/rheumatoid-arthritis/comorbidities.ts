import { defineSection } from "../types.js";

/**
 * Comorbidities & co-occurring conditions — which conditions commonly travel
 * with RA and the COMPOUNDING / conflicting considerations when they overlap.
 * Grounding for multi-condition reasoning: accelerated cardiovascular disease
 * (the leading comorbidity), interstitial lung disease, osteoporosis,
 * depression, infection risk, Sjögren/Felty overlap, and polypharmacy.
 *
 * Educational only. Coordinating overlapping (sometimes conflicting) management
 * across conditions is the job of the care team, including a pharmacist for the
 * medication picture.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with RA and why it compounds: accelerated cardiovascular disease (the leading comorbidity), interstitial lung disease, osteoporosis, depression, heightened infection risk, the Sjögren's/Felty overlap, and the resulting polypharmacy.",
  entries: [
    {
      id: "comorbidities-overview",
      title: "RA rarely affects only the joints",
      summary:
        "Because RA is a systemic inflammatory disease, it commonly co-occurs with heart, lung, bone, and mood conditions; these interact, so good care looks beyond the joints to the whole person.",
      detail:
        "Rheumatoid arthritis is a systemic disease, and the same body-wide inflammation that damages joints also raises the risk of several other conditions — meaning RA rarely travels alone. The overlaps matter in two directions: RA increases the risk of conditions like cardiovascular disease, lung disease, osteoporosis, and depression, and those conditions in turn make RA harder to live with and worsen outcomes. They also create compounding and sometimes conflicting management considerations — a drug that helps one problem may affect another, and several conditions together mean more medicines and a heavier self-care load. This is why comprehensive RA care looks beyond joint counts to heart risk, lung health, bone density, mental health, and infection prevention, and why coordination across the care team matters. The entries here map the most common co-occurring conditions and how they interact, as grounding for thinking about more than one condition at once.",
      sources: [
        {
          label: "Rheumatoid arthritis — effects beyond the joints",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis (effects on other body systems)",
          url: "https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["comorbidity", "overview", "multi-condition"],
    },
    {
      id: "cardiovascular-disease-comorbidity",
      title: "Cardiovascular disease — the leading comorbidity",
      summary:
        "Accelerated heart and blood-vessel disease is the leading comorbidity of RA, driven by chronic inflammation on top of traditional risk factors; managing both RA and heart risk is essential.",
      detail:
        "The single most important comorbidity of RA is cardiovascular disease. People with RA have a markedly higher risk of heart attack — research describes roughly a 50% higher risk than the general population — and about double the risk of heart failure, along with more peripheral vascular disease. The driver is chronic systemic inflammation, which accelerates atherosclerosis (the furring-up of arteries), compounding traditional risk factors such as high blood pressure, abnormal cholesterol, smoking, and inactivity that are also common in RA. This is a prime example of compounding: the inflammation that harms joints also harms arteries. It is also why management must be integrated — controlling RA inflammation effectively is itself heart-protective, and care includes actively managing blood pressure and cholesterol, supporting smoking cessation, and encouraging activity and healthy weight. Some RA drug choices interact with this risk too (for example, JAK inhibitors and NSAIDs carry cardiovascular considerations). Because the excess risk is large and partly silent, cardiovascular prevention is treated as a core, not optional, part of RA care.",
      sources: [
        {
          label: "Discovery's Edge: The rheumatoid arthritis and heart disease connection",
          url: "https://newsnetwork.mayoclinic.org/discussion/discoverys-edge-the-rheumatoid-arthritis-and-heart-disease-connection/",
          publisher: "Mayo Clinic News Network",
        },
        {
          label: "Rheumatoid arthritis — complications (heart and blood vessels)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "cardiovascular", "heart", "inflammation", "multi-condition"],
      evidence: "established",
    },
    {
      id: "interstitial-lung-disease-comorbidity",
      title: "Interstitial lung disease and other lung conditions",
      summary:
        "Lung involvement — especially scarring (interstitial lung disease) — co-occurs with RA and is a leading cause of RA-related death; smoking and severe disease raise the risk.",
      detail:
        "Lung disease is among the most serious conditions that co-occur with RA. Interstitial lung disease (ILD) — inflammation and scarring of the lung tissue — is the most consequential, causing breathlessness and cough and ranking as a leading cause of illness and death in RA. Risk is higher in people who smoke, have more severe or seropositive disease, and (for ILD specifically) in men. RA also predisposes to inflammation of the lung lining and to airway problems, and people with RA face a higher risk of respiratory infections, partly because of immunosuppressive treatment. The overlap creates real management tension: lung involvement can influence the choice of RA medicines (some drugs are weighed differently when significant lung disease is present), and it demands coordination between rheumatology and respiratory specialists. Because lung disease can progress quietly, new or worsening breathlessness or a persistent cough is taken seriously. Not smoking is especially protective. This co-occurrence is a key reason RA care extends well beyond the joints.",
      sources: [
        {
          label: "Consumer Health: How rheumatoid arthritis can affect your lungs",
          url: "https://newsnetwork.mayoclinic.org/discussion/consumer-health-how-rheumatoid-arthritis-can-affect-your-lungs/",
          publisher: "Mayo Clinic News Network",
        },
        {
          label: "Rheumatoid arthritis — complications (lungs)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "interstitial-lung-disease", "lungs", "smoking", "multi-condition"],
      evidence: "established",
    },
    {
      id: "osteoporosis-comorbidity",
      title: "Osteoporosis and fracture risk",
      summary:
        "RA raises osteoporosis risk through inflammation, reduced activity, and steroid use; the overlap means bone protection and steroid-sparing strategies are built into RA care.",
      detail:
        "Osteoporosis — weak, fracture-prone bones — commonly accompanies RA, and the relationship is a clear example of compounding causes. RA's chronic inflammation itself promotes bone loss; pain and joint damage can reduce the weight-bearing activity that keeps bones strong; and corticosteroids, often used to control RA, accelerate bone thinning, especially with prolonged use. The combined effect is a higher risk of fractures, including of the spine and hip, which can seriously threaten independence. This overlap shapes management: it is a reason to keep steroids to the lowest effective dose for the shortest time (a steroid-sparing goal that also benefits the joints), to control inflammation well, and to attend to bone health through weight-bearing exercise, adequate calcium and vitamin D, not smoking, and limiting alcohol. People at higher risk — particularly those on longer-term steroids — may have bone-density scanning and specific bone-protecting treatment. Coordinating RA control with bone protection is a routine part of comprehensive care.",
      sources: [
        {
          label: "Rheumatoid arthritis — complications (osteoporosis)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis (bone health)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["comorbidity", "osteoporosis", "bone-health", "steroids", "fracture"],
      evidence: "established",
    },
    {
      id: "depression-mental-health-comorbidity",
      title: "Depression, anxiety, and mental health",
      summary:
        "Depression and anxiety are markedly more common with RA, relate to inflammation and chronic pain, and worsen pain perception, self-care, and outcomes — so mental health is part of RA care.",
      detail:
        "Depression and anxiety co-occur with RA far more often than in the general population — the prevalence of depression in RA is several times higher than the roughly 6% seen in the general population — and the relationship is bidirectional. Living with chronic, unpredictable pain and disability raises the risk of low mood and anxiety, while depression and anxiety can lower the pain threshold and amplify symptoms; there is also evidence that the inflammation driving RA may affect the brain and mood directly. The compounding is practical as well as biological: people with RA and depression tend to have more functional limitation, are less likely to keep to their treatment, and have higher odds of other health problems. Because of these interactions, mental health is treated as part of RA care, not a separate matter — screening for depression and anxiety, connecting people with self-management and peer-support programs, and offering counseling or medication where appropriate. Treating the mental-health side often improves both wellbeing and physical outcomes, which is why it belongs at the core of multi-condition RA care.",
      sources: [
        {
          label: "Arthritis and Mental Health (depression and rheumatoid arthritis)",
          url: "https://www.arthritis.org/living-with-arthritis/comorbidities/depression-and-arthritis/depression-rheumatoid-arthritis.php",
          publisher: "Arthritis Foundation",
        },
        {
          label: "Managing Mental Health with Rheumatic Disease",
          url: "https://rheumatology.org/patient-blog/managing-mental-health-with-rheumatic-disease",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["comorbidity", "depression", "anxiety", "mental-health", "multi-condition"],
      evidence: "established",
    },
    {
      id: "infection-risk-comorbidity",
      title: "Heightened infection risk",
      summary:
        "RA and its immune-suppressing treatments raise the risk of infections, which both threaten health directly and complicate treatment decisions — making prevention a shared priority.",
      detail:
        "A higher susceptibility to infection is an important co-occurring problem in RA, arising from two sources: the disease itself somewhat impairs immune regulation, and most effective treatments (DMARDs like methotrexate, biologics, JAK inhibitors, and steroids) deliberately suppress the immune system. The result is more frequent and sometimes more serious infections, and the possibility that dormant infections such as tuberculosis or hepatitis can reactivate — which is why screening before starting these drugs is standard. This overlap shapes management at every turn: it drives the emphasis on vaccination, the need to pause certain medicines during significant infections, careful screening before treatment, and prompt attention to fever or feeling unwell. It can also pull treatment decisions in different directions, since controlling RA well may require immunosuppression that raises infection risk, a balance individualized to each person. Infection prevention — vaccines, screening, and knowing the warning signs — is therefore woven through RA care rather than being an afterthought.",
      sources: [
        {
          label: "Vaccinations in Patients with Rheumatic & Musculoskeletal Disease (infection risk)",
          url: "https://rheumatology.org/vaccinations-guideline",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — Treatment (treatments and infection risk)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["comorbidity", "infection", "immunosuppression", "vaccination", "multi-condition"],
      evidence: "established",
    },
    {
      id: "sjogren-felty-autoimmune-overlap",
      title: "Sjögren's, Felty syndrome, and autoimmune overlap",
      summary:
        "RA can overlap with other autoimmune conditions — most commonly secondary Sjögren's syndrome (dry eyes and mouth) and, rarely, Felty syndrome — reflecting a shared autoimmune tendency.",
      detail:
        "As an autoimmune disease, RA tends to keep company with other autoimmune and immune-related conditions. The most common overlap is secondary Sjögren's syndrome, in which the immune system also attacks the glands that make tears and saliva, causing dry eyes and a dry mouth (with downstream issues such as dental decay and eye irritation); it is managed alongside the RA with measures like lubricating drops and dental care. Rarely, long-standing severe RA leads to Felty syndrome — the combination of RA with an enlarged spleen and a low white-blood-cell count — which further raises infection risk. RA is also somewhat more likely to coexist with autoimmune thyroid disease and other autoimmune conditions, and chronic inflammation contributes to a higher risk of certain blood cancers such as lymphoma. These overlaps mean RA care sometimes involves screening for and managing related conditions, and they reinforce that RA sits within a broader autoimmune picture. Coordinating these overlapping conditions, and the medicines they require, is part of the care team's role.",
      sources: [
        {
          label: "Rheumatoid arthritis — complications (dry eyes and mouth / Sjögren's, blood, other effects)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (overlap conditions)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["comorbidity", "sjogrens", "felty-syndrome", "autoimmune", "multi-condition"],
      evidence: "established",
    },
    {
      id: "polypharmacy-coordination",
      title: "Polypharmacy and coordinating multiple conditions",
      summary:
        "RA plus its common comorbidities means several medicines at once, raising interaction and side-effect burdens; coordinated review — including by a pharmacist — keeps the combined plan coherent and safe.",
      detail:
        "Because RA so often comes with cardiovascular disease, lung disease, osteoporosis, depression, and infection risk, many people end up taking numerous medicines — RA drugs plus treatments for the heart, bones, mood, and more — a situation called polypharmacy. Each drug may be individually appropriate, but together they raise the risk of interactions (see the Key Drug Interactions section), cumulative side effects, and a self-care burden that can hurt adherence. The conditions can also pull in different directions: controlling RA may need immunosuppression that raises infection risk; steroids that ease a flare can worsen bone density and blood sugar; NSAIDs for pain carry heart, kidney, and stomach cautions especially relevant given RA's cardiovascular risk. Managing this well relies on coordination — a care team that sees the whole picture, periodic medication review and reconciliation (a role pharmacists are well suited to), deprescribing what is no longer needed, and simplifying regimens where possible. The combined plan, not any single condition's ideal in isolation, is what good multi-condition care optimizes, always with professional oversight.",
      sources: [
        {
          label: "Living with Rheumatoid Arthritis (coordinating care and medicines)",
          url: "https://rheumatology.org/living-with-rheumatoid-arthritis",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid Arthritis: In Depth (tell all your providers about everything you take)",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["comorbidity", "polypharmacy", "coordination", "pharmacist", "multi-condition"],
      caution:
        "When several conditions and medicines stack up, ask for a medication review with the care team or pharmacist — coordinating the whole plan is safer than optimizing one condition alone.",
    },
  ],
});
