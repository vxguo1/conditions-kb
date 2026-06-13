import { defineSection } from "../types.js";

/**
 * OVERVIEW — what rheumatoid arthritis is, who it affects, and how it differs
 * from the much more common "wear-and-tear" osteoarthritis. RA is a chronic,
 * systemic autoimmune disease whose hallmark is symmetric inflammatory
 * polyarthritis, but which can also affect organs beyond the joints.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview & Classification",
  description:
    "What rheumatoid arthritis is — a chronic, systemic autoimmune inflammatory arthritis — who it affects, how it typically presents, and how it differs from osteoarthritis and other forms of arthritis.",
  entries: [
    {
      id: "what-is-ra",
      title: "What rheumatoid arthritis is",
      summary:
        "Rheumatoid arthritis is a chronic autoimmune disease in which the immune system attacks the lining of the joints, causing inflammation, pain, swelling, and — if untreated — joint damage.",
      detail:
        "Rheumatoid arthritis (RA) is a long-term autoimmune and inflammatory disease: the immune system, which normally defends the body, mistakenly attacks healthy tissue — above all the synovium, the thin membrane lining the joints. This drives painful swelling (inflammation), stiffness, and warmth in the affected joints, and over time the sustained inflammation can erode cartilage and bone and damage the joint permanently. RA most commonly affects the small joints of the hands, wrists, and feet, but it can involve the knees, elbows, shoulders, ankles, and others. Because the underlying problem is a body-wide immune process rather than local wear, RA is a 'systemic' disease that can also cause fatigue, low-grade fever, and effects on organs such as the lungs, heart, eyes, and blood vessels. There is no cure, but modern treatment can control the inflammation, relieve symptoms, and prevent much of the long-term damage, especially when started early.",
      sources: [
        {
          label: "Rheumatoid Arthritis — Symptoms, Causes, & Risk Factors",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Rheumatoid Arthritis (Basics)",
          url: "https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["overview", "autoimmune", "definition"],
    },
    {
      id: "symmetric-polyarthritis-pattern",
      title: "The classic pattern: symmetric, small-joint, inflammatory",
      summary:
        "RA characteristically affects many joints at once, often the same joints on both sides of the body, with prolonged morning stiffness that eases as the day goes on.",
      detail:
        "A few features give RA its recognizable signature. It is typically a polyarthritis (many joints involved, often more than four) and tends to be symmetric — if a knuckle or wrist on one hand is affected, the matching joint on the other hand often is too. It favors the small joints of the hands (especially the knuckles and the middle finger joints) and feet early on, frequently sparing the very end joints of the fingers. The stiffness of RA is an inflammatory stiffness: it is usually worst in the morning or after rest and characteristically lasts longer than 30 to 60 minutes, easing with movement as the day goes on — the opposite of the brief stiffness of osteoarthritis. Affected joints are often visibly swollen, warm, and tender, reflecting active inflammation rather than mechanical wear. Recognizing this pattern matters because it helps distinguish RA from other joint problems and prompts the early referral that improves outcomes.",
      sources: [
        {
          label: "Rheumatoid arthritis — Symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Diagnosis, and Treatment",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["overview", "symptoms", "pattern", "symmetry"],
    },
    {
      id: "ra-vs-osteoarthritis",
      title: "RA versus osteoarthritis",
      summary:
        "Osteoarthritis is mechanical 'wear-and-tear' damage to cartilage; RA is an autoimmune disease driving inflammation — they differ in cause, pattern, timing of stiffness, and treatment.",
      detail:
        "RA and osteoarthritis (OA) are both called 'arthritis' but are fundamentally different conditions. OA is the common 'wear-and-tear' arthritis: cartilage gradually breaks down with age and use, typically in weight-bearing or heavily used joints (knees, hips, the base of the thumb, and the end joints of the fingers), and its stiffness is usually brief (often under 30 minutes) and worsens with activity over the day. RA, by contrast, is a systemic autoimmune disease: the immune system inflames the joint lining, it often strikes symmetrically and in the small joints of the hands and feet, the morning stiffness is prolonged, and it can be accompanied by fatigue and whole-body features. OA does not cause the high inflammatory blood markers, autoantibodies, or organ involvement seen in RA. The distinction is not academic — OA is managed mainly with exercise, weight management, and pain relief, whereas RA requires disease-modifying drugs that target the immune process to prevent joint destruction.",
      sources: [
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Rheumatoid Arthritis — Symptoms, Causes, & Risk Factors",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["overview", "osteoarthritis", "differential", "comparison"],
    },
    {
      id: "who-gets-ra",
      title: "Who gets RA",
      summary:
        "RA can occur at any age but most often begins in middle age, and it affects women roughly two to three times as often as men.",
      detail:
        "Rheumatoid arthritis can develop at any age, but it most commonly begins in middle adulthood, with onset often between the ages of 30 and 60; the CDC notes that prevalence is highest among adults in their 50s. It is substantially more common in women than men — roughly two to three times as many women are affected — which is thought to reflect hormonal and genetic influences that are still being studied. A family history of RA raises the odds somewhat, and smoking is an important modifiable risk factor that both increases the chance of developing RA and tends to make it more severe. RA occurs worldwide and across populations. These are population-level patterns, not predictions for any one person: many people with RA have no family history, and the disease can appear in men, in younger adults, and even in children (where the related condition is called juvenile idiopathic arthritis).",
      sources: [
        {
          label: "Rheumatoid Arthritis (risk factors and who is affected)",
          url: "https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
          publisher: "CDC",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Diagnosis, and Treatment (who gets RA)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["overview", "epidemiology", "risk-factors"],
    },
    {
      id: "seropositive-vs-seronegative",
      title: "Seropositive versus seronegative RA",
      summary:
        "RA is often classified by whether characteristic antibodies (rheumatoid factor and anti-CCP) are present in the blood; 'seropositive' RA tends to be more severe.",
      detail:
        "Doctors often describe RA as 'seropositive' or 'seronegative' based on blood tests for two antibodies: rheumatoid factor (RF) and anti-cyclic citrullinated peptide (anti-CCP, also called ACPA). Most people with RA are seropositive — they have one or both antibodies — and seropositive disease is generally associated with a higher likelihood of joint erosions, more extra-joint (organ) involvement, and a more aggressive course. A minority have seronegative RA, in which both antibodies are absent despite clear inflammatory arthritis; this can make diagnosis harder and sometimes overlaps with other conditions. The distinction influences how a rheumatologist weighs the diagnosis and anticipates the course, but it does not change the core treatment goal of controlling inflammation early. Importantly, antibody status is only one piece of the picture — diagnosis rests on the overall pattern of joints, symptoms, examination, blood markers, and imaging, not a single test.",
      sources: [
        {
          label: "CCP Antibody Test (seropositivity and RA)",
          url: "https://medlineplus.gov/lab-tests/ccp-antibody-test/",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (seropositive/seronegative)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["overview", "classification", "seropositive", "antibodies"],
    },
    {
      id: "course-flares-remission",
      title: "Course of the disease: flares and remission",
      summary:
        "RA is typically a lifelong condition that fluctuates, with 'flares' of worse symptoms and quieter periods; modern treatment aims for sustained low disease activity or remission.",
      detail:
        "Rheumatoid arthritis usually follows a fluctuating, long-term course. Periods when symptoms intensify — more pain, swelling, stiffness, and fatigue — are called flares, and they can be triggered by things like infection, stress, or stopping medication, though often no clear trigger is found. Between flares, the disease may be quieter, and with effective treatment many people reach 'low disease activity' or even clinical remission, where inflammation is controlled and symptoms are minimal. Because untreated inflammation causes cumulative, irreversible joint damage, the modern strategy is to treat early and aggressively toward a defined target (remission or low disease activity) and to adjust treatment until that target is reached and maintained — an approach known as 'treat-to-target.' RA is generally not curable, and most people need ongoing treatment and monitoring even when they feel well, because stopping or under-treating can let inflammation return and cause damage. The encouraging reality is that, treated well, many people with RA today lead full, active lives.",
      sources: [
        {
          label: "Understanding Rheumatoid Arthritis Flares",
          url: "https://www.arthritis.org/diseases/more-about/understanding-rheumatoid-arthritis-flares",
          publisher: "Arthritis Foundation",
        },
        {
          label: "Rheumatoid arthritis (overview and outlook)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["overview", "flares", "remission", "course"],
    },
  ],
});
