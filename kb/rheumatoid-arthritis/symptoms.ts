import { defineSection } from "../types.js";

/**
 * SYMPTOMS — a closer look at what RA feels like day to day: the joint
 * symptoms (pain, swelling, prolonged morning stiffness), the whole-body
 * symptoms (fatigue, low-grade fever, weight loss), early warning signs, and
 * how symptoms vary and fluctuate. Complements the overview's pattern entry.
 */
export const symptoms = defineSection({
  id: "symptoms",
  title: "Signs & Symptoms",
  description:
    "What RA feels like — joint pain, swelling, and prolonged morning stiffness; whole-body symptoms like fatigue and low-grade fever; early warning signs; and how symptoms fluctuate and which joints are typically affected.",
  entries: [
    {
      id: "joint-symptoms",
      title: "Joint symptoms: pain, swelling, warmth, and tenderness",
      summary:
        "The core joint symptoms of RA are pain, swelling, warmth, and tenderness from inflammation of the joint lining — often in several joints at once and frequently symmetric.",
      detail:
        "The most recognizable symptoms of RA come from inflammation of the joint lining. Affected joints typically feel painful and tender, look or feel swollen (sometimes described as 'boggy' or puffy), and may be warm to the touch — reflecting active inflammation rather than mechanical wear. RA usually involves several joints at once and often does so symmetrically, affecting matching joints on both sides of the body. The small joints of the hands (the knuckles and the middle finger joints) and the wrists and feet are commonly involved early, with larger joints sometimes affected later. The swelling and pain can reduce grip strength and make fine tasks — buttoning a shirt, opening a jar — harder. Because these symptoms can come and go and resemble other joint problems, it is the overall pattern (multiple small joints, symmetry, and inflammation) rather than any single sore joint that points toward RA and should prompt assessment.",
      sources: [
        {
          label: "Rheumatoid arthritis — Symptoms",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis (symptoms)",
          url: "https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["symptoms", "joint-pain", "swelling", "stiffness"],
    },
    {
      id: "morning-stiffness",
      title: "Prolonged morning stiffness",
      summary:
        "Stiffness that is worst in the morning or after rest and lasts longer than about 30 to 60 minutes is a hallmark of inflammatory arthritis like RA, unlike the brief stiffness of wear-and-tear arthritis.",
      detail:
        "One of the most telling symptoms of RA is the character of its stiffness. Inflammatory stiffness is typically worst first thing in the morning or after a period of rest and characteristically lasts a long time — often more than 30 to 60 minutes — before easing as the person moves and the day goes on. This 'gelling' after inactivity contrasts with the stiffness of osteoarthritis, which is usually brief (often under half an hour) and tends to worsen with use through the day. Prolonged morning stiffness is one of the features that helps distinguish inflammatory arthritis from mechanical joint problems and is part of what clinicians ask about and what the classification criteria weigh. Because it reflects active inflammation, the duration of morning stiffness can also serve as a rough barometer of how well the disease is controlled — lengthening stiffness may signal a flare or undertreatment worth reporting to the care team.",
      sources: [
        {
          label: "Rheumatoid arthritis — Symptoms (morning stiffness)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Diagnosis, and Treatment (stiffness)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["symptoms", "morning-stiffness", "inflammatory", "differential"],
    },
    {
      id: "systemic-symptoms",
      title: "Whole-body symptoms: fatigue, low fever, weight loss",
      summary:
        "Because RA is systemic, it often causes body-wide symptoms — notably fatigue, but also low-grade fever, loss of appetite, and weight loss — that can appear alongside or even before joint symptoms.",
      detail:
        "RA is not only a joint disease; the body-wide inflammation produces systemic symptoms that affect how a person feels overall. Fatigue is among the most common and impactful — a deep tiredness that is more than ordinary weariness and can be as disabling as joint pain. People may also experience a low-grade fever, a general feeling of being unwell (malaise), loss of appetite, and unintended weight loss, especially when the disease is active. These whole-body symptoms can sometimes appear before, or alongside, obvious joint problems, which is part of why early RA can be mistaken for other illnesses. Recognizing that fatigue and feeling unwell are genuine features of RA — not signs of weakness or unrelated problems — helps people raise them with their care team, where they can be addressed by controlling inflammation and by strategies for energy and wellbeing. Persistent or new systemic symptoms also deserve evaluation to rule out infection or other causes.",
      sources: [
        {
          label: "Rheumatoid arthritis — Symptoms (fatigue, fever, weight loss)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid arthritis — symptoms (tiredness and feeling unwell)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["symptoms", "fatigue", "fever", "weight-loss", "systemic"],
    },
    {
      id: "which-joints-affected",
      title: "Which joints RA tends to affect",
      summary:
        "RA most often starts in the small joints of the hands, wrists, and feet, frequently sparing the very end finger joints, and can later involve knees, elbows, shoulders, ankles, and the neck.",
      detail:
        "RA has characteristic patterns of which joints it involves. It commonly begins in the small joints — the knuckles (the joints where the fingers meet the hand) and the middle joints of the fingers, the wrists, and the small joints of the feet and toes — and it often spares the very end joints of the fingers (those nearest the nails), which are more typically affected by osteoarthritis. As the disease progresses it can involve larger joints such as the knees, ankles, elbows, shoulders, and hips, and it can affect the upper (cervical) spine in the neck, though it generally spares the lower back. The jaw and other joints can be involved too. Involvement is frequently symmetric — the same joints on both sides. Knowing the typical distribution helps both in recognizing RA and in distinguishing it from other forms of arthritis, and it guides examination and imaging. Any joint that becomes singularly and dramatically worse, especially with fever, should prompt urgent assessment for possible infection rather than being assumed to be ordinary RA.",
      sources: [
        {
          label: "Rheumatoid Arthritis (joints commonly affected)",
          url: "https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
          publisher: "CDC",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (which joints)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["symptoms", "joints", "hands", "feet", "distribution"],
    },
    {
      id: "early-warning-signs",
      title: "Early warning signs and when to seek assessment",
      summary:
        "Persistent joint swelling, prolonged morning stiffness, and several tender small joints — especially with fatigue — are early warning signs that warrant prompt assessment, given how much early treatment helps.",
      detail:
        "Catching RA early matters a great deal, so it helps to know the warning signs that should prompt assessment rather than 'waiting it out.' Suggestive early features include joint pain and swelling that persists for several weeks, prolonged morning stiffness lasting more than about half an hour, tenderness or swelling in several small joints (especially the hands, wrists, and feet), symmetry between the two sides of the body, and accompanying fatigue or a general feeling of being unwell. Symptoms may begin gradually and can fluctuate, which sometimes leads people to delay seeking help. Because joint damage can begin early and is largely irreversible, and because early disease-modifying treatment substantially improves outcomes, guidelines encourage prompt referral to a rheumatologist for suspected inflammatory arthritis. The practical message is that persistent, inflammatory-type joint symptoms — particularly multiple swollen small joints with prolonged morning stiffness — deserve timely medical evaluation, not a long period of self-management.",
      sources: [
        {
          label: "Rheumatoid arthritis (when to get medical advice)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
        {
          label: "Rheumatoid arthritis — Symptoms (when to see a doctor)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["symptoms", "early-warning", "referral", "when-to-seek-care"],
      caution:
        "Persistent swelling in several small joints with prolonged morning stiffness warrants prompt assessment — early RA treatment meaningfully improves long-term outcomes.",
    },
  ],
});
