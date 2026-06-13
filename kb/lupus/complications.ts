import { defineSection } from "../types.js";

/**
 * COMPLICATIONS — the longer-term consequences lupus can cause across organ
 * systems: kidney disease, accelerated cardiovascular disease, lung and heart
 * involvement, brain/nervous-system effects, blood problems, and the
 * consequences of long-term treatment. Educational; emphasizes that monitoring
 * and treatment reduce these risks.
 */
export const complications = defineSection({
  id: "complications",
  title: "Complications",
  description:
    "The longer-term organ damage lupus can cause if not controlled — kidney disease, accelerated heart and blood-vessel disease, lung and heart involvement, nervous-system effects, blood abnormalities, and harms from long-term treatment — and why monitoring reduces these risks.",
  entries: [
    {
      id: "kidney-damage-complication",
      title: "Kidney damage (chronic lupus nephritis)",
      summary:
        "Repeated or poorly controlled kidney inflammation can scar the kidneys over time, leading to chronic kidney disease and, in some cases, kidney failure.",
      detail:
        "The kidneys are among the organs most seriously affected by lupus. When lupus nephritis is active and not well controlled, ongoing inflammation can gradually scar the kidney's filtering units, reducing kidney function over months and years. In some people this progresses to chronic kidney disease and, in the most severe cases, to kidney failure requiring dialysis or transplantation. The risk is why kidney involvement is screened for at diagnosis and monitored throughout the disease with urine and blood tests, and why active nephritis is treated promptly and intensively — early, effective treatment substantially improves the long-term outlook for the kidneys. Controlling blood pressure and using kidney-protective medicines are part of preserving kidney function. The encouraging message is that lupus nephritis is far more treatable when caught early, which is precisely why routine monitoring matters even when a person feels well.",
      sources: [
        {
          label: "Lupus Nephritis (long-term kidney outcomes)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/lupus-nephritis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Lupus — complications (kidneys)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["complication", "kidney", "lupus-nephritis", "chronic-kidney-disease"],
    },
    {
      id: "cardiovascular-disease-complication",
      title: "Accelerated cardiovascular disease",
      summary:
        "Lupus markedly raises the long-term risk of heart attack, stroke, and blood-vessel disease, partly through chronic inflammation, so heart health is a major focus of care.",
      detail:
        "One of the most important long-term consequences of lupus is accelerated cardiovascular disease. People with lupus have a substantially higher risk of heart attack, stroke, and other blood-vessel disease than the general population — often at younger ages — because chronic inflammation, in addition to traditional risk factors like high blood pressure and cholesterol, damages artery walls and speeds up atherosclerosis (fatty buildup). Some lupus-related antibodies and certain treatments (such as long-term steroids) add to the risk. Strikingly, standard cardiovascular risk calculators may underestimate the danger in lupus, so clinicians pay particular attention to heart health. This is why managing blood pressure, cholesterol, weight, and especially not smoking, and staying active, are emphasized so strongly, and why hydroxychloroquine — which may help reduce clots and other risks — is valued. Cardiovascular disease is a leading cause of serious illness and death in lupus, making its prevention a central, lifelong part of care.",
      sources: [
        {
          label: "Impact of Lupus on Heart Health",
          url: "https://www.lupus.org/resources/impact-of-lupus-on-heart-health",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Cardiovascular Disease Incidence and Disparities in People with Lupus",
          url: "https://www.lupus.org/news/cardiovascular-disease-incidence-and-disparities-in-people-with-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["complication", "cardiovascular", "heart-attack", "stroke", "atherosclerosis"],
      evidence: "established",
    },
    {
      id: "lung-and-heart-involvement",
      title: "Lung and heart involvement",
      summary:
        "Beyond blood-vessel disease, lupus can inflame the linings and tissues of the lungs and heart, sometimes causing lasting problems with breathing or heart function.",
      detail:
        "Lupus can directly affect the lungs and heart in ways that may have lasting effects. In the lungs, beyond the common inflammation of the lining (pleurisy), lupus can sometimes cause inflammation of lung tissue, scarring (interstitial lung disease), or raised pressure in the lung arteries (pulmonary hypertension), which can cause breathlessness. In the heart, besides pericarditis (inflammation of the heart's lining), lupus can affect the heart muscle (myocarditis) and, over time, the valves and the coronary arteries. These complications vary widely in frequency and severity and may be subtle or serious. Because symptoms like breathlessness, chest pain, or reduced exercise tolerance can reflect these problems — or the cardiovascular and clotting complications lupus also causes — they are evaluated rather than dismissed. Monitoring and treating active disease, and addressing cardiovascular risk factors, help protect the heart and lungs over the long term.",
      sources: [
        {
          label: "Lupus — complications (lungs and heart)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
        {
          label: "Lupus and heart health FAQ",
          url: "https://www.lupus.org/resources/lupus-and-heart-health-faq",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["complication", "lungs", "heart", "pulmonary-hypertension"],
    },
    {
      id: "nervous-system-complication",
      title: "Nervous-system and cognitive effects",
      summary:
        "Lupus can affect the brain and nerves over time, contributing to memory and concentration problems ('lupus fog'), mood disorders, headaches, neuropathy, and raised stroke risk.",
      detail:
        "The nervous system can be affected by lupus both acutely and over the longer term. Many people experience cognitive difficulties — trouble with memory, concentration, and clear thinking, often called 'lupus fog' — which can fluctuate and affect daily functioning. Lupus is also associated with headaches, mood disorders such as depression and anxiety, and, in some people, damage to peripheral nerves (neuropathy) causing numbness, tingling, or weakness. More serious events like seizures, psychosis, or stroke can occur, and lupus raises the long-term risk of stroke, partly through its cardiovascular and clotting effects. Sorting out whether nervous-system symptoms come from lupus activity, medication effects, mood, clotting, or another cause can be challenging and is done by the care team. Managing disease activity, cardiovascular and clotting risk, and mental health all contribute to protecting the nervous system, and persistent cognitive or neurological symptoms are worth raising rather than enduring silently.",
      sources: [
        {
          label: "Cognitive symptoms in systemic lupus erythematosus (SLE)",
          url: "https://www.cuh.nhs.uk/patient-information/cognitive-symptoms-in-systemic-lupus-erythematosus-sle/",
          publisher: "NHS (Cambridge University Hospitals)",
        },
        {
          label: "Lupus — complications (brain and nervous system)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["complication", "nervous-system", "cognitive", "lupus-fog", "neuropathy"],
    },
    {
      id: "blood-and-clotting-complication",
      title: "Blood problems and clotting",
      summary:
        "Lupus can lower blood counts and, when antiphospholipid antibodies are present, raise the risk of dangerous blood clots and pregnancy complications.",
      detail:
        "Lupus frequently affects the blood. It can cause anemia (low red cells), low white cells, and low platelets, which range from mild and only detected on testing to severe and requiring treatment. A particularly important blood-related complication is a tendency to form clots, driven by antiphospholipid antibodies, which are present in a meaningful proportion of people with lupus. When these antibodies cause clotting and related problems, the condition is called antiphospholipid syndrome (APS), which raises the risk of deep-vein and arterial clots, stroke, and recurrent pregnancy loss. Because of this, lupus care includes testing for these antibodies and, when clotting risk is significant, strategies to reduce it (managed by the care team). The combination of blood-count abnormalities and clotting risk is one reason regular blood monitoring is part of lupus care, and why new symptoms suggesting a clot — such as leg swelling and pain, sudden breathlessness, or stroke-like symptoms — need urgent attention.",
      sources: [
        {
          label: "Antiphospholipid Syndrome",
          url: "https://rheumatology.org/patients/antiphospholipid-syndrome",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Lupus — complications (blood and blood vessels)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["complication", "blood", "clotting", "antiphospholipid", "cytopenia"],
    },
    {
      id: "treatment-related-complications",
      title: "Complications from long-term treatment",
      summary:
        "The medicines that control lupus can themselves cause harm over time — notably steroid-related bone loss, diabetes, and infection — which is why care aims to use the least medication needed.",
      detail:
        "Some long-term consequences of lupus come not from the disease but from the treatments needed to control it, and managing this trade-off is a constant theme in lupus care. Long-term corticosteroids are the clearest example: they can cause bone thinning and fractures (osteoporosis), high blood sugar or diabetes, high blood pressure, weight gain, cataracts, increased infection risk, and avascular necrosis (bone-tissue death, often in the hip). Immunosuppressants and biologics increase infection risk and require monitoring for effects on blood counts, the liver, and other systems, and some affect fertility or pregnancy. Even hydroxychloroquine, though generally very safe, carries a small long-term risk of retinal changes that prompts eye monitoring. This is exactly why modern lupus care emphasizes using the lowest effective steroid dose, adding steroid-sparing medicines, protecting bone health, and monitoring closely — to control the disease while minimizing harm from its treatment. Reporting side effects helps the team strike that balance.",
      sources: [
        {
          label: "Glucocorticoid-Induced Osteoporosis",
          url: "https://rheumatology.org/patients/glucocorticoid-induced-osteoporosis",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Medications Used to Treat Lupus (side effects)",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["complication", "treatment-related", "steroids", "osteoporosis", "infection"],
      caution:
        "Long-term steroid effects (bone loss, diabetes, infection) are managed by using the lowest needed dose and protective measures — discuss bone health and side effects with the care team.",
    },
  ],
});
