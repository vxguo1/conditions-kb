import { defineSection } from "../types.js";

/**
 * ACUTE EMERGENCIES — flare red flags and organ-threatening situations that
 * warrant urgent care: severe lupus nephritis, dangerous cytopenias, CNS lupus,
 * serositis/cardiopulmonary involvement, blood clots, and serious infection on
 * immunosuppression. Safety content: when to seek urgent help. Educational, not
 * a substitute for emergency assessment.
 */
export const acuteEmergencies = defineSection({
  id: "acute-emergencies",
  title: "Flares & Acute Emergencies",
  description:
    "Recognizing serious lupus flares and organ-threatening emergencies — severe kidney, blood, brain, heart, and lung involvement, blood clots, and infection on immunosuppression — and when to seek urgent medical care.",
  entries: [
    {
      id: "when-to-seek-urgent-care",
      title: "When a flare needs urgent attention",
      summary:
        "Most flares are handled with the care team, but certain warning signs — chest pain, severe headache, confusion, breathlessness, major swelling, or signs of serious infection — need prompt or emergency medical care.",
      detail:
        "Many lupus flares are managed through scheduled contact with the rheumatology team, but some changes signal that an organ may be under serious attack and should not wait. General warning signs that warrant urgent or emergency evaluation include chest pain or trouble breathing, a severe or sudden headache, new confusion, seizures, weakness or numbness on one side, fainting, coughing up blood, major new swelling of the legs or around the eyes, a high fever, or any sudden severe symptom. Because lupus and its treatments can blunt the body's usual responses, a person should err on the side of seeking help rather than waiting to see if symptoms pass. Having an agreed 'flare plan' with the care team — what to watch for and whom to call — helps a person act quickly. The entries that follow describe the specific organ emergencies behind these warning signs.",
      sources: [
        {
          label: "When to Call the Doctor",
          url: "https://www.lupus.org/resources/when-to-call-the-doctor",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "The Expert Series: Managing and Preventing Flares",
          url: "https://www.lupus.org/resources/the-expert-series-managing-and-preventing-flares",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["emergency", "red-flags", "flare", "safety"],
      caution:
        "This is educational guidance, not triage for an individual. If you have severe or sudden symptoms, seek emergency care or call your local emergency number rather than waiting.",
    },
    {
      id: "lupus-nephritis-emergency",
      title: "Lupus nephritis (kidney inflammation)",
      summary:
        "Lupus attacking the kidneys is one of the most serious complications; warning signs include foamy or bloody urine and swelling of the legs or face, and untreated it can lead to kidney failure.",
      detail:
        "Lupus nephritis — inflammation of the kidneys' filters caused by lupus — is among the most consequential forms of organ involvement, affecting a substantial share of people with SLE. It is dangerous partly because it can be silent early on, which is why routine urine and blood monitoring matters. Warning signs to report promptly include foamy urine (from protein leaking), blood in the urine, swelling (edema) of the legs, ankles, or around the eyes, weight gain from fluid, and rising blood pressure. If not treated, lupus nephritis can progress to chronic kidney disease or kidney failure requiring dialysis or transplant. Diagnosis is confirmed and graded with urine tests, blood tests, and often a kidney biopsy, and treatment typically uses immunosuppressive medicines to control the inflammation. Because outcomes are much better when it is caught and treated early, new or worsening urinary or swelling symptoms should be reported quickly rather than watched.",
      sources: [
        {
          label: "Lupus Nephritis",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/lupus-nephritis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "New ACR Guideline: Screen, Treat, and Manage Lupus Nephritis",
          url: "https://rheumatology.org/press-releases/new-acr-guideline-summary-provides-guidance-to-screen-treat-and-manage-lupus-nephritis",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["emergency", "lupus-nephritis", "kidney", "red-flags"],
      caution:
        "New leg or facial swelling, foamy or bloody urine, or a sharp rise in blood pressure should be reported to the care team promptly.",
    },
    {
      id: "severe-cytopenias",
      title: "Severe drops in blood cells (cytopenias)",
      summary:
        "Lupus can sharply lower red cells, white cells, or platelets; very low counts can cause dangerous anemia, infection risk, or bleeding and may need urgent treatment.",
      detail:
        "Lupus frequently affects the blood, and when reductions in blood cells become severe they can constitute an emergency. Severe anemia (low red blood cells) can cause marked fatigue, breathlessness, and a racing heart; in some cases lupus triggers rapid immune destruction of red cells (autoimmune hemolytic anemia). Very low white blood cells raise the risk of serious infection. Very low platelets (severe thrombocytopenia) impair clotting and can cause easy bruising, tiny red skin spots (petechiae), nosebleeds, or, rarely, dangerous internal bleeding. Symptoms that warrant urgent assessment include unusual or spreading bruising, bleeding that won't stop, blood in urine or stool, severe fatigue with breathlessness, or signs of infection with a very low count. These problems are detected through routine blood counts, which is one reason regular monitoring is part of lupus care, and severe cases are treated promptly under specialist guidance.",
      sources: [
        {
          label: "Lupus Symptoms (blood involvement)",
          url: "https://www.lupus.org/resources/common-symptoms-of-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus — complications (blood and blood vessels)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["emergency", "cytopenia", "anemia", "thrombocytopenia", "red-flags"],
      caution:
        "Unexplained heavy bruising, bleeding that won't stop, or pinpoint red skin spots can reflect very low platelets and need prompt medical attention.",
    },
    {
      id: "cns-lupus",
      title: "Central nervous system (CNS) lupus",
      summary:
        "Lupus can affect the brain and nerves, causing severe headaches, confusion, seizures, strokes, or psychosis; these neuropsychiatric emergencies require urgent evaluation.",
      detail:
        "Lupus can involve the central nervous system, producing what is called neuropsychiatric lupus. Manifestations range from headaches and difficulty concentrating to serious events such as seizures, stroke, severe confusion or memory loss, psychosis (loss of contact with reality), and inflammation of the brain or its lining. A sudden severe headache, new confusion, a seizure, slurred speech, weakness or numbness on one side of the body, or sudden vision changes can indicate a neurological emergency and warrant immediate care, in part because some of these symptoms can also reflect a stroke — to which lupus raises the risk. Distinguishing lupus-driven brain involvement from infection, medication effects, or clotting (as in antiphospholipid syndrome) requires urgent specialist assessment and imaging. Because the brain is involved, the person experiencing symptoms may not recognize the problem, so family and caregivers should also know these warning signs.",
      sources: [
        {
          label: "Lupus — complications (brain and nervous system)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
        {
          label: "Cognitive symptoms in systemic lupus erythematosus (SLE)",
          url: "https://www.cuh.nhs.uk/patient-information/cognitive-symptoms-in-systemic-lupus-erythematosus-sle/",
          publisher: "NHS (Cambridge University Hospitals)",
        },
      ],
      tags: ["emergency", "cns-lupus", "neuropsychiatric", "stroke", "red-flags"],
      caution:
        "Sudden severe headache, confusion, seizure, weakness on one side, or speech/vision changes are emergencies — seek immediate care.",
    },
    {
      id: "serositis-cardiopulmonary",
      title: "Serositis and heart/lung involvement",
      summary:
        "Inflammation of the linings around the heart and lungs (pericarditis, pleurisy) causes sharp chest pain and breathlessness; severe cases, and inflammation of the heart muscle or lungs, can be emergencies.",
      detail:
        "Lupus commonly inflames the membranes lining the lungs (pleura) and the heart (pericardium), a problem called serositis. Pleurisy causes sharp chest pain that worsens with breathing or coughing, while pericarditis causes chest pain that may change with position. Although serositis is often treatable, it can mimic — and sometimes coexist with — more dangerous problems: a large pericardial effusion can compress the heart, myocarditis (inflammation of the heart muscle) can impair pumping, and lupus can affect the lungs directly, including a rare but life-threatening bleeding into the lungs. Because chest pain and breathlessness can also signal a heart attack or a blood clot in the lung — both of which lupus makes more likely — any significant chest pain or trouble breathing should be evaluated urgently rather than assumed to be 'just' pleurisy. The care team distinguishes these causes with examination, imaging, and tests.",
      sources: [
        {
          label: "Impact of Lupus on Heart Health",
          url: "https://www.lupus.org/resources/impact-of-lupus-on-heart-health",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus — complications (heart and lungs)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["emergency", "serositis", "pericarditis", "pleurisy", "chest-pain"],
      caution:
        "Significant chest pain or shortness of breath needs urgent evaluation — it can reflect heart, lung, or clot problems, not only pleurisy.",
    },
    {
      id: "infection-on-immunosuppression",
      title: "Serious infection while immunosuppressed",
      summary:
        "Lupus and its immune-suppressing treatments raise the risk of severe infection; fever or signs of infection in someone on these medicines should be taken seriously and assessed urgently.",
      detail:
        "Infection is a leading cause of serious illness in lupus, both because the disease itself disrupts immune function and because many treatments deliberately suppress the immune system. As a result, an infection that might be minor in someone else can become severe quickly, and the usual warning signs can be blunted by steroids or other drugs. A fever, shaking chills, a productive cough, burning urination, a spreading area of skin redness, or simply feeling rapidly and severely unwell should prompt urgent medical advice for a person on immunosuppressive lupus treatment — sometimes it can be hard to tell a serious infection from a lupus flare, and a clinician needs to sort that out because the treatments are opposite (more immune suppression for a flare, but anti-infectives and sometimes less suppression for an infection). People on these medicines are usually advised to seek care early for possible infection, to stay up to date on recommended vaccines, and to know the specific signs their team wants reported.",
      sources: [
        {
          label: "Protecting Yourself from Infections",
          url: "https://www.lupus.org/resources/protecting-yourself-from-infections",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus and Vaccines",
          url: "https://www.lupus.org/resources/lupus-and-vaccines",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["emergency", "infection", "immunosuppression", "fever", "red-flags"],
      caution:
        "If you take immune-suppressing lupus medicines, treat fever or signs of infection as urgent and contact your care team — infection can become serious fast.",
    },
  ],
});
