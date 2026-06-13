import { defineSection } from "../types.js";

/**
 * COMORBIDITIES & co-occurring conditions — what commonly travels with lupus and
 * the COMPOUNDING considerations when conditions overlap: lupus nephritis,
 * antiphospholipid syndrome (clotting), accelerated cardiovascular disease,
 * steroid-related osteoporosis, depression and fatigue, infection risk, and
 * other autoimmune diseases (Sjögren's, thyroid). Grounding for multi-condition
 * reasoning.
 *
 * Educational only. Coordinating overlapping (sometimes conflicting) management
 * across conditions is the job of the care team, including a pharmacist for the
 * medication picture.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with lupus and why it compounds: lupus nephritis, antiphospholipid syndrome (clotting), accelerated cardiovascular disease, steroid-related osteoporosis, depression and fatigue, infection risk, and overlapping autoimmune diseases (Sjögren's, thyroid).",
  entries: [
    {
      id: "comorbidities-overview",
      title: "Lupus rarely travels alone",
      summary:
        "Lupus commonly brings or co-occurs with other conditions — kidney disease, clotting, heart disease, bone loss, depression, infections, and other autoimmune diseases — that interact and must be managed together.",
      detail:
        "Because lupus is a systemic autoimmune disease, it tends to come with a cluster of related conditions rather than existing in isolation. Some are direct consequences of the disease (such as lupus nephritis), some are driven by chronic inflammation (such as accelerated cardiovascular disease), some arise from treatment (such as steroid-related bone loss and infection risk), and some reflect the autoimmune tendency clustering with other autoimmune diseases. These overlaps matter in two directions: lupus worsens the risk of these conditions, and the conditions in turn complicate lupus management — and treatments for one can affect another. This is why comprehensive lupus care looks beyond disease activity to the kidneys, heart, bones, blood clotting, mental health, and more, and why coordination across the care team is essential. The entries here map the most common co-occurring conditions and how they compound, as grounding for thinking about more than one condition at once.",
      sources: [
        {
          label: "Lupus — complications and associated conditions",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
        {
          label: "Systemic Lupus Erythematosus (Lupus): Diagnosis, Treatment, and Steps to Take",
          url: "https://www.niams.nih.gov/health-topics/lupus/diagnosis-treatment-and-steps-to-take",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["comorbidity", "overview", "multi-condition"],
    },
    {
      id: "lupus-nephritis-comorbidity",
      title: "Lupus nephritis (kidney disease)",
      summary:
        "Kidney involvement is one of the most common and serious companions of lupus; it compounds care because it raises blood pressure and cardiovascular risk and restricts which medicines can be used safely.",
      detail:
        "Lupus nephritis — kidney inflammation from lupus — affects a large share of people with SLE and is one of the most important co-occurring conditions because of how it compounds everything else. Reduced kidney function drives up blood pressure and adds to cardiovascular risk, and it changes the medication picture: drugs cleared by the kidneys may need adjustment, NSAIDs become riskier, and kidney-protective blood-pressure medicines (ACE inhibitors or ARBs) are often added. Treatment of active nephritis requires immunosuppression, which in turn raises infection risk and intersects with pregnancy planning (some agents are unsafe in pregnancy). Diet may need adjusting for kidney health, and bone and mineral problems can follow advanced kidney disease. This web of interactions is why a nephrologist usually joins the care team for significant kidney involvement, and why managing lupus nephritis means coordinating glucose, blood pressure, medications, and lupus activity together rather than treating the kidney in isolation.",
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
      tags: ["comorbidity", "lupus-nephritis", "kidney", "multi-condition"],
      evidence: "established",
    },
    {
      id: "antiphospholipid-syndrome",
      title: "Antiphospholipid syndrome (APS) and clotting",
      summary:
        "A substantial minority of people with lupus carry antiphospholipid antibodies that can cause dangerous blood clots and pregnancy loss; this clotting tendency adds a major layer to management.",
      detail:
        "Antiphospholipid syndrome (APS) is one of the most consequential conditions to co-occur with lupus. Antiphospholipid antibodies — present in a meaningful proportion of people with SLE — can promote abnormal blood clotting, and when they cause clots or pregnancy complications the condition is called APS (often 'secondary' APS when it accompanies lupus). It raises the risk of deep-vein and arterial clots, stroke, and recurrent miscarriage, and it profoundly shapes care: people with clotting events typically need long-term blood thinners (anticoagulants), which then interact with NSAIDs and other drugs and require careful monitoring, and it transforms pregnancy into a higher-risk situation needing specialist co-management. APS also intersects with the already-elevated cardiovascular and stroke risk of lupus. This is a clear example of compounding conditions: lupus plus APS is more dangerous and more complex than either alone, which is why testing for these antibodies is part of lupus assessment and why clotting risk is actively managed by the care team.",
      sources: [
        {
          label: "Antiphospholipid Syndrome",
          url: "https://rheumatology.org/patients/antiphospholipid-syndrome",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Antiphospholipid Antibody Syndrome",
          url: "https://www.nhlbi.nih.gov/health-topics/antiphospholipid-antibody-syndrome",
          publisher: "NIH / NHLBI",
        },
      ],
      tags: ["comorbidity", "antiphospholipid", "clotting", "stroke", "multi-condition"],
      evidence: "established",
      caution:
        "Antiphospholipid syndrome means anticoagulation and pregnancy decisions are individualized and specialist-led; new clot symptoms need urgent care.",
    },
    {
      id: "cardiovascular-disease-comorbidity",
      title: "Accelerated cardiovascular disease",
      summary:
        "Heart and blood-vessel disease occurs earlier and more often in lupus and is a leading cause of harm; it compounds with kidney disease, steroids, and clotting risk, so it is managed proactively.",
      detail:
        "Cardiovascular disease is both a complication and a major co-occurring condition in lupus, and it is one of the leading causes of serious illness and death in the disease. Chronic inflammation accelerates atherosclerosis, so heart attacks and strokes occur earlier and more often than expected, and standard risk calculators may underestimate the danger. Crucially, it compounds with other lupus-related conditions: kidney disease raises blood pressure and cardiovascular risk, antiphospholipid antibodies add clotting and stroke risk, and long-term steroids worsen blood pressure, blood sugar, and lipids. Managing this overlap means treating blood pressure and cholesterol assertively, supporting not smoking and staying active, minimizing steroid exposure, and valuing hydroxychloroquine for its protective effects — all coordinated with lupus control. Because the cardiovascular threat is high and partly silent, it is addressed proactively throughout life rather than only after a problem appears, illustrating why lupus care must integrate several conditions at once.",
      sources: [
        {
          label: "Impact of Lupus on Heart Health",
          url: "https://www.lupus.org/resources/impact-of-lupus-on-heart-health",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Heart Health Management in People with Lupus",
          url: "https://www.lupus.org/news/heart-health-management-in-people-with-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["comorbidity", "cardiovascular", "atherosclerosis", "multi-condition"],
      evidence: "established",
    },
    {
      id: "osteoporosis-from-steroids",
      title: "Osteoporosis and bone loss (often steroid-related)",
      summary:
        "Long-term steroids and chronic inflammation thin the bones, so osteoporosis and fracture risk commonly accompany lupus and are managed with monitoring, calcium and vitamin D, and sometimes bone medicines.",
      detail:
        "Bone loss is a common companion of lupus, driven especially by long-term corticosteroid use but also by chronic inflammation, reduced activity during flares, and sometimes limited sun exposure (affecting vitamin D). Glucocorticoid-induced osteoporosis can begin within the first months of steroid treatment and raises the risk of fractures, including in the spine. This is a clear treatment-driven comorbidity, and it is managed proactively: clinicians monitor bone health, ensure adequate calcium and vitamin D, encourage weight-bearing exercise and not smoking, use the lowest effective steroid dose, and add bone-protective medicines (such as bisphosphonates) when the risk is high. The overlap with other lupus issues matters too — for example, kidney disease can affect bone and mineral balance, and some bone treatments interact with kidney function. Because bone loss is often silent until a fracture occurs, it is screened for and prevented rather than waited upon, particularly in anyone on prolonged steroids.",
      sources: [
        {
          label: "Glucocorticoid-Induced Osteoporosis",
          url: "https://rheumatology.org/patients/glucocorticoid-induced-osteoporosis",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Medications Used to Treat Lupus (steroid side effects)",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["comorbidity", "osteoporosis", "bone-health", "steroids", "multi-condition"],
      evidence: "established",
    },
    {
      id: "depression-fatigue-comorbidity",
      title: "Depression, anxiety, and chronic fatigue",
      summary:
        "Mood disorders and disabling fatigue are markedly more common in lupus and interact with disease management; treating them improves both wellbeing and the ability to manage the illness.",
      detail:
        "Depression, anxiety, and chronic fatigue occur far more often in people with lupus than in the general population, and they are genuine parts of the illness rather than side issues. They can stem from the stress of a chronic, unpredictable disease, from inflammation and the disease's effects on the brain, from medications such as steroids, and from disrupted sleep and pain. The relationship compounds: low mood and exhaustion make it harder to keep up with medications, monitoring, activity, and sun protection, which can worsen disease control, while poorly controlled disease can deepen fatigue and distress. Fatigue in particular is one of the most common and limiting lupus symptoms and can have treatable contributors (anemia, thyroid problems, depression, poor sleep) worth investigating. Because of these interactions, mental-health screening and support are part of comprehensive lupus care, and treating depression, anxiety, and the causes of fatigue can improve both quality of life and physical outcomes — making this a key piece of multi-condition management.",
      sources: [
        {
          label: "Lupus Self-Management: Take Back Control (emotional health and fatigue)",
          url: "https://rheumatology.org/patient-blog/lupus-self-management-take-back-control",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Lupus Symptoms (fatigue)",
          url: "https://www.lupus.org/resources/common-symptoms-of-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["comorbidity", "depression", "anxiety", "fatigue", "mental-health", "multi-condition"],
    },
    {
      id: "other-autoimmune-and-infection-risk",
      title: "Overlapping autoimmune diseases and infection risk",
      summary:
        "Lupus often clusters with other autoimmune conditions like Sjögren's syndrome and thyroid disease, and the disease plus its treatments leave people more vulnerable to infections.",
      detail:
        "Because lupus reflects a broad autoimmune tendency, it frequently overlaps with other autoimmune conditions. Sjögren's syndrome (causing dry eyes and mouth) and autoimmune thyroid disease are among the most common companions, and features of conditions like rheumatoid arthritis can overlap as well; sometimes several coexist in what is loosely called overlap or 'mixed' connective tissue disease. Recognizing these overlaps matters because they add their own symptoms and management needs. Alongside autoimmune clustering, infection susceptibility is a critical co-occurring concern: both lupus itself and the immune-suppressing treatments used to control it leave people more vulnerable to infections, which are a leading cause of serious illness in lupus. Managing this means vaccination (favoring non-live vaccines on immunosuppression), prompt attention to possible infections, and balancing immune suppression against infection risk. Together, these overlapping autoimmune and infectious dimensions show why lupus care is rarely about one condition alone and why coordinated, whole-person management is the norm.",
      sources: [
        {
          label: "Lupus — overlap conditions and associated autoimmune disease",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
        {
          label: "Protecting Yourself from Infections",
          url: "https://www.lupus.org/resources/protecting-yourself-from-infections",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["comorbidity", "autoimmune", "sjogrens", "thyroid", "infection", "multi-condition"],
    },
  ],
});
