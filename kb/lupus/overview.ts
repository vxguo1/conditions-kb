import { defineSection } from "../types.js";

/**
 * OVERVIEW — what lupus is and its main forms. Defines systemic lupus
 * erythematosus (SLE) as a chronic autoimmune disease that can affect many
 * organs, introduces the relapsing–remitting (flare) pattern, and maps the
 * subtypes: SLE, cutaneous (skin-limited) lupus, drug-induced lupus, and
 * neonatal lupus. Educational orientation for the rest of the disease.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview & Classification",
  description:
    "What lupus is: a chronic autoimmune disease that can affect many body systems, its flare-and-remission course, who it affects, and the main forms — systemic (SLE), cutaneous, drug-induced, and neonatal lupus.",
  entries: [
    {
      id: "what-is-lupus",
      title: "What lupus is",
      summary:
        "Lupus is a chronic autoimmune disease in which the immune system attacks the body's own tissues, causing inflammation that can affect the skin, joints, kidneys, blood, heart, lungs, and brain.",
      detail:
        "Lupus is a long-term (chronic) autoimmune disease: the immune system, which normally defends the body against infection, mistakenly attacks healthy tissues, causing inflammation and sometimes lasting damage. Because the immune system circulates everywhere, lupus can affect many different parts of the body — skin, joints, kidneys, blood cells, heart, lungs, and the nervous system — which is why it is described as a 'systemic' disease and why two people with lupus can look very different. Systemic lupus erythematosus (SLE) is the most common and usually the most serious form. Lupus is not contagious and is not a form of cancer, and it cannot be caught from or given to another person. Its severity ranges from mild to life-threatening, but with modern treatment many people manage it well and live full lives. Because its features overlap with many other conditions, lupus has historically been called a 'great imitator,' which is part of why it can be hard to recognize.",
      sources: [
        {
          label: "Lupus Symptoms, Causes, & Risk Factors",
          url: "https://www.niams.nih.gov/health-topics/lupus",
          publisher: "NIH / NIAMS",
        },
        {
          label: "What is lupus?",
          url: "https://www.lupus.org/resources/what-is-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["overview", "definition", "autoimmune"],
    },
    {
      id: "sle-systemic-lupus",
      title: "Systemic lupus erythematosus (SLE)",
      summary:
        "SLE is the most common type of lupus; it is the systemic form that can involve multiple organs and ranges from mild joint and skin disease to severe organ-threatening illness.",
      detail:
        "Systemic lupus erythematosus (SLE) is what most people mean when they say 'lupus.' It is the systemic form, meaning it can affect virtually any organ — most commonly the skin and joints, but also the kidneys (lupus nephritis), blood cells, the lining around the heart and lungs, blood vessels, and the brain and nerves. The illness is highly individual: some people have mainly fatigue, joint pain, and rashes, while others develop serious internal-organ involvement. SLE typically follows a relapsing–remitting course of flares and quieter periods (see 'The flare-and-remission pattern'). The goals of care are to control disease activity, prevent organ damage, and preserve quality of life. Because the disease and its organ involvement vary so much, management is individualized and usually led by a rheumatologist working with other specialists as needed.",
      sources: [
        {
          label: "What is systemic lupus erythematosus (SLE)?",
          url: "https://www.lupus.org/resources/what-is-systemic-lupus-erythematosus-sle",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus",
          url: "https://rheumatology.org/patients/lupus",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["overview", "sle", "systemic"],
    },
    {
      id: "flare-remission-pattern",
      title: "The flare-and-remission pattern",
      summary:
        "Lupus typically alternates between flares — times when symptoms worsen — and remission, when the disease is quiet; this unpredictable rhythm shapes day-to-day life and treatment.",
      detail:
        "A defining feature of lupus is that it tends to come and go rather than stay constant. A 'flare' (or flare-up) is a period when the disease becomes more active and symptoms worsen — for example, increasing joint pain, a spreading rash, fatigue, or new internal-organ involvement. Flares are followed by quieter stretches called remission, when symptoms ease or disappear. Flares can be mild or serious and are often unpredictable, though many people learn that certain triggers — ultraviolet light, infection, stress, or stopping medication — make them more likely. Because flares can signal that organs are under attack, recognizing and reporting changes promptly is an important part of self-management. Ongoing 'maintenance' treatment between flares (especially staying on hydroxychloroquine) is aimed at keeping the disease quiet and reducing how often flares happen.",
      sources: [
        {
          label: "What is a lupus flare?",
          url: "https://www.lupus.org/resources/what-is-a-flare",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus",
          url: "https://www.nhs.uk/conditions/lupus/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["overview", "flare", "remission", "course"],
    },
    {
      id: "who-gets-lupus",
      title: "Who develops lupus",
      summary:
        "Lupus is far more common in women, especially during the childbearing years, and disproportionately affects Black, Hispanic, Asian, and Indigenous people — though anyone, including men and children, can develop it.",
      detail:
        "Lupus affects women far more often than men — roughly nine in ten people with lupus are women — and most often begins between about ages 15 and 45, the childbearing years, although it can start in childhood or later in life. In the United States, lupus is more common and often more severe among Black or African American, Hispanic/Latino, Asian, and American Indian/Alaska Native people than among White people, and it can appear at younger ages in these groups. The reasons for these patterns are not fully understood and likely involve a mix of genetic, hormonal, and social/environmental factors. Estimates suggest over 200,000 people in the U.S. live with SLE. These statistics describe populations, not individuals — they explain who is at higher risk overall but not why any one person develops lupus.",
      sources: [
        {
          label: "Lupus Basics",
          url: "https://www.cdc.gov/lupus/about/index.html",
          publisher: "CDC",
        },
        {
          label: "Lupus Symptoms, Causes, & Risk Factors",
          url: "https://www.niams.nih.gov/health-topics/lupus",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["overview", "epidemiology", "risk-factors", "demographics"],
      caution:
        "Risk statistics describe groups, not individuals — being in a lower-risk group does not rule out lupus, and lupus does affect men and children.",
    },
    {
      id: "cutaneous-lupus",
      title: "Cutaneous (skin) lupus",
      summary:
        "Cutaneous lupus erythematosus affects mainly the skin and can occur on its own or with SLE; common forms include the discoid (scarring) and subacute types, and many forms are triggered by sunlight.",
      detail:
        "Cutaneous lupus erythematosus (CLE) is lupus that primarily affects the skin. It can exist on its own (skin-limited disease) or occur alongside systemic lupus. Several patterns exist: acute cutaneous lupus includes the classic 'butterfly' (malar) rash across the cheeks and nose, often seen during SLE flares; discoid lupus erythematosus causes round, scaly, sometimes scarring patches that can lead to permanent skin changes and hair loss; and subacute cutaneous lupus causes non-scarring ring-shaped or scaly red lesions, typically in sun-exposed areas. Most forms of cutaneous lupus are strongly photosensitive, meaning ultraviolet light from the sun or some indoor lighting can trigger or worsen them. A proportion of people with skin-limited lupus go on to develop systemic features, so dermatology and rheumatology often work together. Sun protection is a cornerstone of managing all skin forms.",
      sources: [
        {
          label: "Lupus — types and overview",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
        {
          label: "What is lupus? (types of lupus)",
          url: "https://www.lupus.org/resources/what-is-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["overview", "cutaneous", "skin", "discoid", "photosensitivity"],
    },
    {
      id: "drug-induced-and-neonatal-lupus",
      title: "Drug-induced and neonatal lupus",
      summary:
        "Drug-induced lupus is a lupus-like illness triggered by certain medications that usually resolves after the drug is stopped; neonatal lupus is a rare condition in newborns caused by the mother's antibodies.",
      detail:
        "Two distinct, less common forms round out the lupus family. Drug-induced lupus is a lupus-like reaction set off by certain prescription medicines — most classically hydralazine (for blood pressure), procainamide (for heart rhythm), and isoniazid (for tuberculosis), among others. Its symptoms resemble systemic lupus (such as joint pain, fever, and serositis) but are usually milder, rarely affect the kidneys or brain, and typically subside over weeks to months once the responsible drug is stopped under medical guidance. Neonatal lupus is not true lupus: it is a rare condition in a newborn caused by certain maternal autoantibodies (anti-SSA/Ro and anti-SSB/La) crossing the placenta. Affected babies may have a temporary rash, liver changes, or low blood counts that resolve within about six months, but the most serious problem is congenital heart block, a slow heartbeat that can be permanent. Recognizing these forms matters because their causes and outlook differ from SLE.",
      sources: [
        {
          label: "What is drug-induced lupus?",
          url: "https://www.lupus.org/resources/about-drug-induced-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "What is neonatal lupus?",
          url: "https://www.lupus.org/resources/about-neonatal-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["overview", "drug-induced-lupus", "neonatal-lupus", "subtypes"],
    },
  ],
});
