import { defineSection } from "../types.js";

/**
 * DIAGNOSIS — how lupus is identified. There is no single test; diagnosis
 * combines symptoms, physical findings, and a panel of blood tests (ANA,
 * anti-dsDNA, anti-Sm, complement C3/C4) interpreted together, often using
 * classification criteria (EULAR/ACR). Covers why diagnosis is hard and the
 * meaning of the key tests.
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Diagnosis & Testing",
  description:
    "How lupus is diagnosed: no single test exists, so clinicians combine symptoms and physical findings with blood tests — ANA, anti-dsDNA, anti-Smith, and complement (C3/C4) — and use classification criteria such as the EULAR/ACR system.",
  entries: [
    {
      id: "no-single-test",
      title: "Why there is no single test for lupus",
      summary:
        "Lupus is diagnosed by piecing together symptoms, examination findings, and several blood and urine tests over time — no one test confirms or rules it out.",
      detail:
        "Lupus is notoriously difficult to diagnose because its symptoms overlap with many other conditions and no single test settles the question. Instead, a clinician — usually a rheumatologist — builds the diagnosis from the overall picture: the pattern of symptoms (such as joint pain, characteristic rashes, fatigue, mouth ulcers, hair loss, or kidney problems), a physical examination, the person's history, and a panel of laboratory tests on blood and urine. Because lupus evolves and flares over time, the picture may only become clear over months, and sometimes a firm diagnosis takes a while to reach. No blood test alone proves lupus, and a positive antibody test in isolation does not mean a person has it. This is why diagnosis rests on clinical judgment that weighs all the evidence together, rather than on any one result.",
      sources: [
        {
          label: "Lupus — diagnosis",
          url: "https://www.nhs.uk/conditions/lupus/",
          publisher: "NHS (UK)",
        },
        {
          label: "Lupus Basics (diagnosis)",
          url: "https://www.cdc.gov/lupus/about/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["diagnosis", "clinical", "overview"],
    },
    {
      id: "ana-test",
      title: "The antinuclear antibody (ANA) test",
      summary:
        "Almost everyone with active lupus has a positive ANA test, making it a sensitive screen — but many people with a positive ANA do not have lupus, so it cannot diagnose the disease by itself.",
      detail:
        "The antinuclear antibody (ANA) test detects antibodies directed against material in the cell nucleus and is the usual first-line blood test when lupus is suspected. It is very sensitive: the large majority of people with active SLE test positive, so a negative ANA makes lupus much less likely. However, a positive ANA is common and far from specific — it appears in many healthy people and in other autoimmune and non-autoimmune conditions — so on its own it does not diagnose lupus. For that reason a positive ANA is a starting point that prompts more specific testing and careful clinical correlation, not a conclusion. The result is often reported with a 'titer' (how dilute the blood can be and still test positive) and a pattern; these add some information but still must be interpreted alongside symptoms and other antibodies.",
      sources: [
        {
          label: "The Antinuclear Antibody (ANA) Test",
          url: "https://www.lupus.org/resources/the-antinuclear-antibody-ana-test",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "ANA (Antinuclear Antibody) Test",
          url: "https://medlineplus.gov/lab-tests/ana-antinuclear-antibody-test/",
          publisher: "MedlinePlus / NIH",
        },
      ],
      tags: ["diagnosis", "ana", "blood-test", "screening"],
      caution:
        "A positive ANA is common and does not by itself mean a person has lupus; it must be interpreted with symptoms and more specific tests.",
    },
    {
      id: "specific-autoantibodies",
      title: "More specific antibodies: anti-dsDNA and anti-Smith",
      summary:
        "Antibodies to double-stranded DNA (anti-dsDNA) and to the Smith antigen (anti-Sm) are much more specific to lupus than ANA; when present they strongly support the diagnosis.",
      detail:
        "When the ANA is positive, clinicians often order more specific antibody tests to clarify whether lupus is the cause. Two of the most useful are anti–double-stranded DNA (anti-dsDNA) and anti-Smith (anti-Sm). These are far more specific to lupus than the ANA — meaning they are uncommon in other conditions — so a positive result lends strong support to the diagnosis. About half of people with lupus have anti-dsDNA, and its level can rise and fall with disease activity, so it is sometimes used to help monitor the disease, particularly kidney involvement. Anti-Sm is less common but highly specific when present. Because these antibodies are specific but not universally present, a negative result does not rule lupus out; their value is in 'ruling in' the disease and helping to characterize it. Other antibodies (such as anti-SSA/Ro, anti-SSB/La, and antiphospholipid antibodies) are also checked because they carry implications for skin disease, pregnancy, and clotting risk.",
      sources: [
        {
          label: "Glossary of Lupus Blood Tests (anti-dsDNA, anti-Sm)",
          url: "https://www.lupus.org/resources/glossary-of-lupus-blood-tests",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lab Tests for Lupus",
          url: "https://www.lupus.org/resources/lab-tests-for-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["diagnosis", "anti-dsdna", "anti-smith", "autoantibodies"],
    },
    {
      id: "complement-c3-c4",
      title: "Complement levels (C3 and C4)",
      summary:
        "Complement proteins, especially C3 and C4, are often consumed and fall when lupus is active; low levels can signal a flare or active organ inflammation.",
      detail:
        "Complement is a group of blood proteins that help the immune system fight infection. In active lupus, the formation of immune complexes 'uses up' complement, so blood levels of C3 and C4 often drop when the disease is flaring — particularly with active kidney involvement. For this reason, clinicians measure C3 and C4 both to support the diagnosis and to help track disease activity over time: falling complement together with rising anti-dsDNA can be an early warning of increased activity, while improving levels can reflect response to treatment. Complement levels are one piece of a larger monitoring picture and are interpreted alongside symptoms, urine tests, and other blood work rather than in isolation. Some people have inherited complement deficiencies that themselves raise lupus risk, which is one of the ways the complement system connects to the disease's biology.",
      sources: [
        {
          label: "Glossary of Lupus Blood Tests (complement)",
          url: "https://www.lupus.org/resources/glossary-of-lupus-blood-tests",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Comparison of Tests for SLE Diagnosis and Disease Monitoring",
          url: "https://www.lupus.org/news/comparison-of-tests-for-systemic-lupus-erythematosus-diagnosis-and-disease-monitoring",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["diagnosis", "complement", "c3", "c4", "monitoring"],
    },
    {
      id: "classification-criteria",
      title: "Classification criteria (EULAR/ACR)",
      summary:
        "Standardized criteria from EULAR and the ACR list clinical and lab features that, scored together, help classify lupus — mainly for research consistency, but they also guide clinical thinking.",
      detail:
        "To bring consistency to who is counted as having lupus, professional bodies have published classification criteria — most recently the 2019 EULAR/ACR criteria, building on earlier American College of Rheumatology systems. These criteria require a positive ANA as an entry point and then assign weighted points to a list of clinical and laboratory features (such as kidney involvement, specific rashes, arthritis, blood-count abnormalities, fever, and particular antibodies), with a threshold score indicating that a case can be 'classified' as SLE. It is important to understand that these are primarily research tools, designed so that studies enroll comparable patients; they are not a substitute for a doctor's diagnosis, and a person can have lupus without ticking every box or, conversely, can meet criteria for another reason. Still, the criteria reflect the core features of lupus and so usefully frame the clinical assessment.",
      sources: [
        {
          label: "Lupus — diagnosis and assessment",
          url: "https://rheumatology.org/patients/lupus",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Lupus Basics (overview of features)",
          url: "https://www.cdc.gov/lupus/about/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["diagnosis", "classification-criteria", "eular", "acr"],
      caution:
        "Classification criteria are research tools for consistency, not a personal diagnosis — only the care team can diagnose lupus in an individual.",
    },
    {
      id: "monitoring-organ-involvement",
      title: "Tests for organ involvement and monitoring",
      summary:
        "Beyond antibodies, urine tests, blood counts, kidney and organ tests, and sometimes biopsies are used to find which organs lupus is affecting and to follow the disease over time.",
      detail:
        "Because lupus can attack different organs, diagnosis and ongoing care rely on tests that look for organ involvement, not just antibodies. Urine tests (for protein and blood cells) and blood kidney-function tests screen for lupus nephritis, often the most consequential complication; a kidney biopsy may be done to confirm and grade kidney inflammation when it is suspected, because the biopsy result guides treatment. Complete blood counts reveal lupus-related anemia, low white cells, or low platelets. Inflammatory markers, liver tests, and imaging or heart and lung tests are added when symptoms point to those areas. These same tests are repeated over time to monitor disease activity and catch flares or new organ involvement early. The mix of tests is tailored to the individual's symptoms, which is why people with lupus often have regular lab work even when feeling relatively well.",
      sources: [
        {
          label: "The Expert Series: Lupus Lab Tests and Blood Work",
          url: "https://www.lupus.org/resources/the-expert-series-lupus-lab-tests-and-blood-work",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus nephritis (diagnosis and biopsy)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/lupus-nephritis",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["diagnosis", "monitoring", "kidney", "biopsy", "blood-count"],
    },
  ],
});
