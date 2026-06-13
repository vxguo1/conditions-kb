import { defineSection } from "../types.js";

/**
 * THERAPY & LIFESTYLE — the non-drug pillars that complement medication:
 * physical and occupational therapy, exercise, joint protection, smoking
 * cessation (which both worsens RA and blunts treatment), diet, rest/fatigue
 * management, and weight. Educational; complements, never replaces, DMARDs.
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Therapy & Lifestyle",
  description:
    "Non-drug management that complements RA medication — exercise, physical and occupational therapy, joint protection, smoking cessation, diet, weight, and managing fatigue. These support but do not replace disease-modifying treatment.",
  entries: [
    {
      id: "exercise-and-movement",
      title: "Exercise and staying active",
      summary:
        "Regular, appropriate exercise reduces RA pain and stiffness, builds strength to protect joints, fights fatigue, and supports heart health — staying active is part of treatment, not a risk to joints.",
      detail:
        "It is a common fear that exercise will 'wear out' arthritic joints, but for RA the opposite is true: appropriate, regular physical activity is one of the most beneficial non-drug measures. Movement reduces joint pain and stiffness, strengthens the muscles that support and protect joints, maintains range of motion, lifts mood, combats the profound fatigue of RA, and helps counter the elevated cardiovascular risk that comes with the disease. A balanced program usually blends gentle range-of-motion and flexibility work, muscle-strengthening exercise, and low-impact aerobic activity such as walking, cycling, or swimming (water exercise is especially easy on joints). The key is pacing — building up gradually, working around flares (reducing intensity but trying to keep moving), and choosing low-impact options. A physical therapist can tailor a program to a person's joints and abilities. Exercise complements medication rather than replacing it, and the right plan is best designed with the care team, especially when joints are actively inflamed or damaged.",
      sources: [
        {
          label: "Self-Care for Arthritis: Five Ways to Manage Your Symptoms (physical activity)",
          url: "https://www.cdc.gov/arthritis/caring/index.html",
          publisher: "CDC",
        },
        {
          label: "Rheumatoid arthritis — living with RA (exercise)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "exercise", "physical-activity", "fatigue"],
      evidence: "established",
    },
    {
      id: "physical-occupational-therapy",
      title: "Physical and occupational therapy",
      summary:
        "Physical therapists help with movement, strength, and pain; occupational therapists teach joint protection and provide aids and splints to make daily tasks easier on the joints.",
      detail:
        "Two kinds of therapist play complementary roles in RA. A physical therapist (physiotherapist) assesses how joints move and the strength around them, designs a safe exercise and stretching program, advises on pacing and on using heat or cold for symptom relief, and helps maintain or regain function. An occupational therapist focuses on everyday activities — work, self-care, hobbies — teaching joint-protection techniques (using larger or stronger joints for tasks, spreading load, avoiding sustained tight grips), recommending assistive devices (jar openers, built-up handles, ergonomic tools), and providing splints to rest and support inflamed joints such as the wrists. Together they help people stay independent and reduce strain on vulnerable joints. These supportive therapies are a standard part of comprehensive RA care alongside medication, and a referral can usually be arranged through the rheumatology team or primary care.",
      sources: [
        {
          label: "Rheumatoid arthritis — Treatment (physiotherapy and occupational therapy)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Rheumatoid arthritis — supportive therapies",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/diagnosis-treatment/drc-20353653",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["lifestyle", "physical-therapy", "occupational-therapy", "joint-protection", "splints"],
      evidence: "established",
    },
    {
      id: "joint-protection-rest",
      title: "Joint protection and balancing rest with activity",
      summary:
        "Protecting joints through good technique, assistive tools, and pacing — balancing activity with rest, especially during flares — helps limit strain and conserve energy.",
      detail:
        "Joint protection is a set of practical habits that reduce stress on vulnerable joints during daily life. Core principles include using the strongest or largest joint suited to a task (for example carrying a bag on the forearm rather than gripping with the fingers), avoiding prolonged tight grips and awkward positions, distributing load across several joints, and using assistive devices and gadgets that reduce force. Equally important is pacing: alternating activity with rest, breaking demanding tasks into smaller chunks, and respecting the body's signals. During a flare, affected joints may need more rest and gentle support (such as a splint), while between flares staying active is encouraged — the aim is to rest inflamed joints without becoming inactive overall, since too much rest leads to stiffness and weakness. An occupational therapist can personalize these strategies. Used consistently, joint protection helps people stay functional and comfortable and may reduce strain on joints already affected by RA.",
      sources: [
        {
          label: "Self-Care for Arthritis: Five Ways to Manage Your Symptoms (protect joints, pacing)",
          url: "https://www.cdc.gov/arthritis/caring/index.html",
          publisher: "CDC",
        },
        {
          label: "Living with Rheumatoid Arthritis (daily management)",
          url: "https://rheumatology.org/living-with-rheumatoid-arthritis",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["lifestyle", "joint-protection", "pacing", "rest", "flares"],
      evidence: "established",
    },
    {
      id: "smoking-cessation",
      title: "Stopping smoking",
      summary:
        "Smoking both raises the risk of developing RA and makes it worse — more severe disease, more complications, and poorer response to medicines — so quitting is a high-impact lifestyle change.",
      detail:
        "Among all lifestyle measures in RA, stopping smoking stands out because smoking is not just a general health hazard but a specific driver of the disease. Smoking increases the risk of developing RA (especially the anti-CCP-positive form) and, once RA is present, is linked to more severe joint disease, a higher chance of lung and other extra-joint complications, faster cardiovascular risk, and a poorer response to key medicines including methotrexate and TNF inhibitors. This means quitting can both improve how someone feels and help their treatment work better. Stopping is hard, but support makes it more achievable — behavioral support, structured quit programs, and approved stop-smoking aids — and the care team can help arrange these. For people with RA, smoking cessation is one of the few self-directed actions that influences the underlying disease, not just the symptoms, which is why it is consistently emphasized.",
      sources: [
        {
          label: "Rheumatoid Arthritis (smoking worsens RA)",
          url: "https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
          publisher: "CDC",
        },
        {
          label: "Rheumatoid Arthritis — Symptoms, Causes, & Risk Factors (smoking)",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["lifestyle", "smoking-cessation", "prevention", "modifiable-risk"],
      evidence: "established",
    },
    {
      id: "diet-and-weight",
      title: "Diet, weight, and healthy eating",
      summary:
        "No diet cures RA, but a balanced, anti-inflammatory-style eating pattern and a healthy weight support overall health, ease load on joints, and lower cardiovascular risk.",
      detail:
        "There is no special 'RA diet' that cures or replaces medication, and claims for dramatic dietary cures should be treated with caution. That said, healthy eating supports RA care in several ways. Carrying excess weight adds mechanical load to joints (especially knees and hips), is associated with more active disease and poorer treatment response, and adds to cardiovascular risk, so reaching and keeping a healthy weight is worthwhile. A balanced, Mediterranean-style pattern — rich in vegetables, fruit, whole grains, legumes, fish, and healthy oils, and lower in processed and red meats and added sugar — is broadly recommended for general and heart health and may modestly help some people's symptoms, though the evidence for symptom benefit is limited. Oily fish provides omega-3 fatty acids, which have some evidence for easing RA symptoms (covered in the complementary section). The practical message is to eat well for whole-body health and weight, address the heightened heart risk that comes with RA, and discuss any major dietary changes or supplements with the care team rather than expecting diet to substitute for treatment.",
      sources: [
        {
          label: "Rheumatoid arthritis — living with RA (diet and healthy weight)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
        {
          label: "Rheumatoid Arthritis: In Depth (diet and complementary approaches)",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["lifestyle", "diet", "weight", "nutrition", "cardiovascular"],
      evidence: "mixed",
    },
    {
      id: "managing-fatigue-and-sleep",
      title: "Managing fatigue and sleep",
      summary:
        "Fatigue is one of the most common and disabling parts of RA; pacing activity, prioritizing sleep, staying active, and treating inflammation and low mood all help manage it.",
      detail:
        "Fatigue — a deep, sometimes overwhelming tiredness — is one of the most common and underappreciated features of RA, and for many people it is as limiting as joint pain. It has several roots: the inflammation of active disease, poor sleep (often disrupted by pain), anemia that can accompany chronic inflammation, low mood, and the sheer effort of living with a chronic illness. Because of these multiple causes, managing fatigue takes a combined approach: controlling the underlying inflammation with effective treatment is foundational, while pacing activities to match energy, prioritizing good sleep habits, keeping up gentle regular exercise (which counterintuitively reduces fatigue), and addressing depression or anxiety all contribute. Identifying and treating contributors like anemia or an underactive thyroid also helps. Acknowledging fatigue as a real part of the disease — rather than a personal failing — and raising it with the care team opens the door to strategies and support, including occupational therapy advice on energy conservation.",
      sources: [
        {
          label: "Living with Rheumatoid Arthritis (fatigue and self-management)",
          url: "https://rheumatology.org/living-with-rheumatoid-arthritis",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — symptoms (fatigue)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "fatigue", "sleep", "self-management"],
      evidence: "established",
    },
  ],
});
