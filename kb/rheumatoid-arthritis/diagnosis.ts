import { defineSection } from "../types.js";

/**
 * DIAGNOSIS — how RA is identified: there is no single test, so diagnosis
 * combines the clinical pattern, blood markers (RF, anti-CCP, ESR/CRP),
 * imaging, the ACR/EULAR classification criteria, and the all-important early
 * referral within the "window of opportunity."
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Diagnosis & Early Referral",
  description:
    "How RA is diagnosed — the clinical pattern, blood tests (rheumatoid factor, anti-CCP, ESR/CRP), imaging, the ACR/EULAR classification criteria — and why early referral within the 'window of opportunity' matters so much.",
  entries: [
    {
      id: "no-single-test",
      title: "There is no single test for RA",
      summary:
        "RA is diagnosed by a rheumatologist piecing together the joint pattern, symptoms, examination, blood markers, and imaging — not by one definitive test.",
      detail:
        "One of the most important things to understand about RA is that no single test confirms or rules it out. Diagnosis is a clinical judgment, ideally made by a rheumatologist, that weighs several strands of evidence together: which joints are involved and whether the pattern is symmetric and small-joint; how long symptoms and morning stiffness have lasted; physical examination findings of swollen, tender joints; blood tests for autoantibodies (rheumatoid factor and anti-CCP) and inflammation (ESR and CRP); and imaging to look for early changes. Because RA can be tricky to diagnose — symptoms come and go and can mimic other conditions — getting the right diagnosis can take time and sometimes follow-up over weeks. This is also why blood tests are interpreted in context: a positive rheumatoid factor does not by itself mean a person has RA, and a negative one does not exclude it. The combined picture, assessed by a specialist, is what matters.",
      sources: [
        {
          label: "Rheumatoid arthritis — Diagnosis and treatment",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/diagnosis-treatment/drc-20353653",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Diagnosis, and Treatment (diagnosis)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["diagnosis", "overview", "rheumatologist"],
    },
    {
      id: "rf-and-anti-ccp",
      title: "Rheumatoid factor and anti-CCP antibodies",
      summary:
        "Blood tests for rheumatoid factor (RF) and anti-CCP antibodies help confirm RA; anti-CCP is the more specific of the two and predicts a more aggressive course.",
      detail:
        "Two antibody blood tests are central to diagnosing RA. Rheumatoid factor (RF) is positive in many people with RA, but it is not specific — it can also be raised in other autoimmune and infectious conditions and in some healthy older people — so a positive RF supports but does not prove RA. Anti-cyclic citrullinated peptide antibody (anti-CCP, or ACPA) is much more specific: it is found in most people with RA and almost never in people without it, so a positive anti-CCP strongly supports the diagnosis. The two tests are often done together because using both gives a more accurate picture than either alone. Beyond diagnosis, these antibodies carry prognostic weight: people who are positive for RF and especially anti-CCP tend to have more erosive joint disease and more organ involvement. Still, a meaningful minority of people with RA are 'seronegative' (both tests negative), so normal antibody results do not exclude the disease when the clinical picture fits.",
      sources: [
        {
          label: "CCP Antibody Test (use, specificity, interpretation)",
          url: "https://medlineplus.gov/lab-tests/ccp-antibody-test/",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Rheumatoid Factor (RF) Test",
          url: "https://medlineplus.gov/lab-tests/rheumatoid-factor-rf-test/",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["diagnosis", "rheumatoid-factor", "anti-ccp", "blood-tests"],
    },
    {
      id: "inflammatory-markers-esr-crp",
      title: "Inflammation markers: ESR and CRP",
      summary:
        "ESR and CRP are blood tests that measure inflammation; they help support the diagnosis and, importantly, track how active the disease is over time.",
      detail:
        "Two general markers of inflammation are commonly used in RA: the erythrocyte sedimentation rate (ESR, or 'sed rate') and C-reactive protein (CRP). Both rise when there is inflammation in the body and tend to be elevated when RA is active, helping to support the diagnosis and to gauge how much inflammation is present. They are not specific to RA — many infections and other inflammatory conditions also raise them — so they are interpreted alongside the joint pattern and antibody tests rather than on their own. Their greater value is in follow-up: because they reflect ongoing inflammation, ESR and CRP are repeated over time to monitor disease activity and to judge whether treatment is controlling the inflammation, and they feed into the composite scores rheumatologists use to measure how a person is doing. A normal ESR and CRP do not completely rule out active RA, but persistently high levels usually signal disease that needs better control.",
      sources: [
        {
          label: "Rheumatoid arthritis — Diagnosis (blood tests including ESR and CRP)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/diagnosis-treatment/drc-20353653",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid arthritis: MedlinePlus Medical Encyclopedia (tests)",
          url: "https://medlineplus.gov/ency/article/000431.htm",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["diagnosis", "esr", "crp", "inflammation", "monitoring"],
    },
    {
      id: "imaging-in-ra",
      title: "Imaging: X-rays, ultrasound, and MRI",
      summary:
        "Imaging supports diagnosis and tracks damage — X-rays show erosions and joint-space loss, while ultrasound and MRI can detect inflammation and early changes sooner.",
      detail:
        "Imaging plays two roles in RA: helping with diagnosis and monitoring damage over time. Plain X-rays are widely used; early on they may look normal, but over time they can reveal the characteristic joint-space narrowing and bony 'erosions' of RA and provide a baseline against which to measure progression. Because X-rays may miss early disease, ultrasound and MRI are increasingly used: both can detect synovitis (active inflammation of the joint lining) and erosions earlier and more sensitively than X-rays, with ultrasound also able to show increased blood flow in inflamed joints. MRI is particularly sensitive for early inflammation and bone changes. Imaging findings are interpreted together with the clinical and laboratory picture — they help confirm inflammatory joint disease, distinguish RA from other conditions, and assess whether damage is occurring despite treatment, which can prompt a change in therapy.",
      sources: [
        {
          label: "Rheumatoid arthritis — Diagnosis (imaging tests)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/diagnosis-treatment/drc-20353653",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (imaging)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["diagnosis", "imaging", "x-ray", "ultrasound", "mri"],
    },
    {
      id: "acr-eular-classification",
      title: "ACR/EULAR classification criteria",
      summary:
        "Formal ACR/EULAR criteria score the number and type of joints involved, antibody status, inflammation markers, and symptom duration to help classify RA, especially early.",
      detail:
        "To bring consistency to diagnosis and research, the American College of Rheumatology (ACR) and the European Alliance of Associations for Rheumatology (EULAR) developed classification criteria for RA. These criteria assign points across four domains: the number and size of joints involved (with more, and smaller, joints scoring higher); the results of antibody tests (rheumatoid factor and anti-CCP, with high levels scoring more); inflammation markers (ESR and CRP); and how long symptoms have lasted (six weeks or more scoring higher). A total at or above a defined threshold classifies a person as having RA. These criteria were designed to identify RA earlier than older criteria did, supporting prompt treatment. It is worth knowing that classification criteria were created mainly to standardize who counts as having RA in studies; in the clinic a rheumatologist's overall judgment can diagnose RA even when the criteria are not fully met, so the criteria support rather than replace clinical assessment.",
      sources: [
        {
          label: "Clinical Practice Guidelines (ACR — classification and management resources)",
          url: "https://rheumatology.org/clinical-practice-guidelines",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Diagnosis, and Treatment (diagnosis criteria)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["diagnosis", "classification", "acr-eular", "criteria"],
    },
    {
      id: "early-referral-window",
      title: "Early referral and the 'window of opportunity'",
      summary:
        "Treating RA early — ideally within months of onset — leads to better long-term outcomes, so prompt referral to a rheumatologist for suspected RA is critical.",
      detail:
        "Perhaps the single most consequential idea in modern RA care is that early diagnosis and treatment change the course of the disease. Joint damage from RA tends to occur fastest in the first months to years, and much of it is irreversible, so there is thought to be a 'window of opportunity' early in the disease when controlling inflammation prevents the most harm and gives the best chance of remission. For this reason, guidelines emphasize prompt referral of anyone with suspected inflammatory arthritis — persistent joint swelling, prolonged morning stiffness, or several inflamed small joints — to a rheumatologist without waiting to see if it resolves. Starting disease-modifying treatment early, rather than delaying it, is associated with less joint destruction, better function, and a higher chance of low disease activity. The practical message for anyone with new, persistent, inflammatory-type joint symptoms is that seeking specialist assessment quickly is not an overreaction; with RA, time genuinely matters.",
      sources: [
        {
          label: "Rheumatoid arthritis (early diagnosis and treatment improve outcomes)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
        {
          label: "Rheumatoid arthritis — Diagnosis and treatment (importance of early diagnosis)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/diagnosis-treatment/drc-20353653",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["diagnosis", "early-referral", "window-of-opportunity", "rheumatologist"],
    },
  ],
});
