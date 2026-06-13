import { defineSection } from "../types.js";

/**
 * PATIENT CARE & SELF-MANAGEMENT — the ongoing work of living well with RA:
 * monitoring and regular reviews, vaccinations and infection prevention,
 * mental health, pregnancy and family planning, building a care team, and
 * recognizing/coping with flares. Educational.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Patient Care & Self-Management",
  description:
    "The ongoing work of living well with RA — regular monitoring and reviews, blood-test safety checks, vaccinations and infection prevention, mental health, pregnancy planning, the care team, and managing flares.",
  entries: [
    {
      id: "monitoring-and-reviews",
      title: "Regular monitoring and reviews",
      summary:
        "RA care depends on ongoing reviews to measure disease activity and on blood tests to watch for medication side effects — staying engaged with monitoring keeps treatment on target and safe.",
      detail:
        "Because RA fluctuates and its treatments need oversight, regular monitoring is a core part of care. At reviews, the team assesses disease activity — counting swollen and tender joints, checking inflammation markers, and asking how the person is functioning — to judge whether the treat-to-target goal is being met and whether therapy needs adjusting. Separately, many RA medicines (such as methotrexate, leflunomide, sulfasalazine, and others) require periodic blood tests to watch for effects on the liver, kidneys, and blood counts, so that any problem is caught early and the dose changed before harm occurs. People on hydroxychloroquine have periodic eye checks, and those on biologics or JAK inhibitors are monitored for infections. Keeping these appointments and blood tests — even when feeling well — is part of staying safe and well controlled, because both uncontrolled inflammation and unmonitored side effects can cause harm quietly. The schedule is set by the care team and tailored to the medicines used.",
      sources: [
        {
          label: "Rheumatoid arthritis — Treatment (monitoring on DMARDs)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Living with Rheumatoid Arthritis (ongoing care)",
          url: "https://rheumatology.org/living-with-rheumatoid-arthritis",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["patient-care", "monitoring", "blood-tests", "reviews"],
    },
    {
      id: "vaccinations-infection-prevention",
      title: "Vaccinations and infection prevention",
      summary:
        "Because RA and its treatments raise infection risk, staying up to date on recommended vaccines is important; some live vaccines need special timing or avoidance on immunosuppressants.",
      detail:
        "Infections are a particular concern in RA, both because the disease itself somewhat raises risk and because many treatments suppress the immune system. For that reason, keeping recommended vaccinations up to date is an important protective step, and rheumatology guidelines specifically address vaccination for people with rheumatic diseases. Commonly emphasized vaccines include the seasonal flu vaccine, pneumococcal (pneumonia) vaccines, the shingles vaccine (especially relevant given the higher shingles risk with JAK inhibitors), and COVID-19 vaccination. An important nuance is that 'live' vaccines (such as some shingles, MMR, and yellow fever vaccines) can occasionally cause illness in people whose immune systems are suppressed, so their use requires careful timing around immunosuppressive medicines or may be avoided — a decision made with the care team. Ideally, vaccination status is reviewed before starting immunosuppressants. Beyond vaccines, sensible infection precautions and prompt attention to signs of infection (as covered in the red-flags section) are part of self-management.",
      sources: [
        {
          label: "Vaccinations in Patients with Rheumatic & Musculoskeletal Disease",
          url: "https://rheumatology.org/vaccinations-guideline",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — Treatment (infection risk and prevention)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["patient-care", "vaccinations", "infection-prevention", "live-vaccines"],
      caution:
        "Live vaccines may need to be avoided or carefully timed around immunosuppressants — discuss vaccination plans with the care team, ideally before starting these medicines.",
    },
    {
      id: "mental-health-and-emotional",
      title: "Mental health and emotional wellbeing",
      summary:
        "Depression and anxiety are common with RA and can worsen pain, fatigue, and self-care; addressing emotional health is part of managing the disease, not separate from it.",
      detail:
        "Living with a painful, unpredictable, lifelong condition takes an emotional toll, and depression and anxiety are notably more common in people with RA than in the general population. The relationship runs both ways: low mood and anxiety can amplify the perception of pain, deepen fatigue, and make the daily work of managing RA — medications, appointments, exercise — harder to sustain, while uncontrolled disease and pain can worsen mood. This makes mental health a genuine part of RA care rather than a side issue. Helpful steps include staying socially connected, pacing and managing fatigue, keeping active within limits, joining peer-support or patient communities, and seeking professional help — counseling, cognitive behavioral therapy, or, where appropriate, medication — when low mood or anxiety persists. Raising emotional struggles with the care team is encouraged, because treating them often improves not only wellbeing but also physical symptoms and the ability to stick with treatment. No one should feel they must cope alone.",
      sources: [
        {
          label: "Living with Rheumatoid Arthritis (emotional wellbeing and support)",
          url: "https://rheumatology.org/living-with-rheumatoid-arthritis",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — living with RA (mental wellbeing)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["patient-care", "mental-health", "depression", "anxiety", "support"],
    },
    {
      id: "pregnancy-family-planning",
      title: "Pregnancy and family planning",
      summary:
        "RA and pregnancy can coexist well with planning, but some RA medicines (notably methotrexate and leflunomide) must be stopped before conception, so family planning should be discussed early.",
      detail:
        "Many people with RA have healthy pregnancies, and for some, disease activity actually improves during pregnancy, though it can flare afterward. Planning ahead is important because medication choice matters greatly: some commonly used RA drugs are unsafe in pregnancy and must be stopped beforehand. Methotrexate in particular can cause miscarriage and birth defects and must be discontinued well before trying to conceive (the care team advises on timing), and leflunomide also requires stopping and, in some cases, a specific washout procedure. Other medicines may be considered compatible with pregnancy and are sometimes continued to keep the disease controlled, because active RA itself can affect pregnancy. The key message is that anyone with RA who might become pregnant — or whose partner takes these medicines, since some affect that too — should discuss family planning with the rheumatologist before conceiving, so the treatment plan can be adjusted safely in advance rather than reactively. Contraception is part of this conversation while taking medicines that must be avoided in pregnancy.",
      sources: [
        {
          label: "Methotrexate (must be stopped before pregnancy)",
          url: "https://rheumatology.org/patients/methotrexate-rheumatrex-trexall-otrexup-rasuvo",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — living with RA (pregnancy)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["patient-care", "pregnancy", "family-planning", "methotrexate", "medication-safety"],
      caution:
        "Several RA medicines (including methotrexate and leflunomide) must be stopped before pregnancy — plan family planning with the rheumatologist in advance; never stop or change medicines without guidance.",
    },
    {
      id: "building-care-team",
      title: "Building and working with the care team",
      summary:
        "RA care works best as a partnership across a multidisciplinary team — rheumatologist, nurses, primary care, therapists, pharmacist — with the person at the center as an informed self-manager.",
      detail:
        "RA is best managed by a coordinated, multidisciplinary team rather than any single clinician. The rheumatologist leads the diagnosis and medication strategy; specialist nurses often provide education, monitoring, and a point of contact for flares; primary care supports general health, vaccinations, and cardiovascular risk; physical and occupational therapists help with function and joint protection; a pharmacist reviews medicines and interactions; and others (podiatrists for foot involvement, mental health professionals, surgeons) contribute as needed. At the center is the person themselves, whose informed self-management — understanding the condition, taking medicines as agreed, monitoring symptoms, attending reviews, and knowing when to seek help — strongly influences outcomes. Practical habits help: keeping an up-to-date medication list, preparing questions for appointments, tracking symptoms and flares, and knowing how to reach the team between visits. Many people also benefit from reputable patient organizations for education and peer support. Good RA care is a long-term partnership, and being an active participant in it is one of the most valuable things a person can do.",
      sources: [
        {
          label: "Living with Rheumatoid Arthritis (the care team and self-management)",
          url: "https://rheumatology.org/living-with-rheumatoid-arthritis",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Information for Rheumatoid Arthritis Patients",
          url: "https://www.arthritis.org/rheumatoid-arthritis-patient-education",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["patient-care", "care-team", "self-management", "multidisciplinary"],
    },
    {
      id: "recognizing-managing-flares",
      title: "Recognizing and managing flares",
      summary:
        "Knowing the signs of a flare — worsening joint pain, swelling, stiffness, and fatigue — and having an agreed plan helps people respond early and know when to contact the team.",
      detail:
        "A flare is a period when RA becomes more active — typically more joint pain, swelling, and prolonged stiffness, often with increased fatigue and sometimes feeling generally unwell. Flares can follow triggers like infection, stress, overexertion, or missing medication, but often occur without a clear cause. Recognizing a flare early lets a person respond: resting affected joints (with gentle support such as splints), using heat or cold for comfort, pacing activities, and using agreed symptom-relief measures, while trying to keep gently mobile overall. It is important to have a plan agreed in advance with the care team for what to do during a flare and, crucially, when to make contact — for example, if a flare is severe, prolonged, involves a single dramatically worse joint (which could signal infection rather than a flare), or comes with fever. Repeated or persistent flares may mean the underlying treatment needs reviewing to better reach the target, so they are worth reporting rather than simply enduring.",
      sources: [
        {
          label: "Understanding Rheumatoid Arthritis Flares",
          url: "https://www.arthritis.org/diseases/more-about/understanding-rheumatoid-arthritis-flares",
          publisher: "Arthritis Foundation",
        },
        {
          label: "Living with Rheumatoid Arthritis (managing flares)",
          url: "https://rheumatology.org/living-with-rheumatoid-arthritis",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["patient-care", "flares", "self-management", "action-plan"],
      caution:
        "A single joint that becomes dramatically worse, or a flare with fever, may signal infection rather than RA activity and needs urgent assessment.",
    },
  ],
});
