import { defineSection } from "../types.js";

/**
 * THERAPY & LIFESTYLE — non-drug management that meaningfully affects lupus:
 * sun/UV protection (photosensitivity), pacing and rest for fatigue, smoking
 * cessation, exercise, a heart-healthy diet, and stress management. Educational;
 * complements medical treatment rather than replacing it.
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Therapy & Lifestyle",
  description:
    "Non-drug measures that help manage lupus and reduce flares: ultraviolet/sun protection, rest and pacing for fatigue, stopping smoking, regular exercise, a heart-healthy diet, and stress management — alongside, not instead of, medical treatment.",
  entries: [
    {
      id: "sun-uv-protection",
      title: "Sun and UV protection",
      summary:
        "Most people with lupus are sensitive to ultraviolet light, which can trigger rashes and even systemic flares; consistent sun protection is one of the most important self-care steps.",
      detail:
        "Photosensitivity — heightened sensitivity to ultraviolet (UV) light — affects a large majority of people with lupus, and UV exposure can do more than cause a rash: it can provoke whole-body flares with joint pain, fatigue, and fever. The mechanism relates to UV damaging skin cells that are then cleared slowly in lupus, helping drive the immune response. Practical protection is therefore a cornerstone of self-management: using a broad-spectrum sunscreen with a high SPF (lupus experts often suggest SPF 30 or higher, and higher still is better), reapplying it, wearing protective clothing, wide-brimmed hats, and UV-blocking sunglasses, seeking shade, and being mindful that UV comes from reflected light and even some indoor fluorescent lighting. Notably, some lupus medicines can themselves increase sun sensitivity. Because UV is such a common, modifiable trigger, building sun protection into daily routine — not just on sunny beach days — is strongly emphasized in lupus care.",
      sources: [
        {
          label: "UV Exposure: What You Need to Know",
          url: "https://www.lupus.org/resources/uv-exposure-what-you-need-to-know",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Tips for Managing Sensitivity to Light",
          url: "https://www.lupus.org/resources/tips-for-managing-sensitivity-to-light",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["lifestyle", "uv-protection", "photosensitivity", "sun", "flare-prevention"],
      evidence: "established",
    },
    {
      id: "rest-pacing-fatigue",
      title: "Rest and pacing for fatigue",
      summary:
        "Fatigue is one of the most common and disabling lupus symptoms; balancing activity with rest, prioritizing tasks, and protecting sleep help people manage limited energy.",
      detail:
        "Fatigue is among the most common symptoms of lupus and one of the most challenging, often out of proportion to how a person looks and not simply relieved by sleep. While its causes are complex (disease activity, anemia, poor sleep, depression, and medications can all contribute, and treatable causes should be checked), day-to-day strategies help many people. 'Pacing' means spreading activity through the day and week, alternating effort with rest, and avoiding the boom-and-bust cycle of overdoing it on good days and crashing afterward. Prioritizing the tasks that matter most, planning demanding activities for higher-energy times, and protecting good sleep habits all help. Gentle, regular physical activity — counterintuitively — tends to reduce fatigue over time rather than worsen it. Because fatigue can also signal a flare or a treatable problem like anemia or thyroid disease, persistent or worsening fatigue is worth raising with the care team rather than simply enduring.",
      sources: [
        {
          label: "Ten Tips For Thriving with Lupus",
          url: "https://rheumatology.org/patient-blog/ten-tips-for-thriving-with-lupus",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Dos and Don'ts for Living Well with Lupus",
          url: "https://www.lupus.org/resources/dos-and-donts-for-living-well-with-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["lifestyle", "fatigue", "pacing", "rest", "self-management"],
    },
    {
      id: "smoking-cessation",
      title: "Stopping smoking",
      summary:
        "Smoking can worsen lupus, may reduce how well hydroxychloroquine works, and adds to the already-raised heart and blood-vessel risks of lupus, so quitting is strongly encouraged.",
      detail:
        "Smoking is particularly harmful in lupus for several overlapping reasons. It is linked to more active disease and worse skin involvement, and evidence suggests it may reduce the effectiveness of hydroxychloroquine, the cornerstone medicine. On top of that, lupus already substantially raises the risk of cardiovascular disease, and smoking compounds that risk by damaging blood vessels — a serious concern given that heart and blood-vessel disease is a leading cause of harm in lupus. Smoking also impairs the immune and healing systems in ways that matter for a condition managed with immune-affecting drugs. For all these reasons, stopping smoking is one of the highest-value lifestyle changes a person with lupus can make, and care teams can offer support, counseling, and, where appropriate, medications to help. Avoiding secondhand smoke is sensible too. Quitting benefits both the lupus itself and the long-term cardiovascular outlook.",
      sources: [
        {
          label: "Dos and Don'ts for Living Well with Lupus (smoking)",
          url: "https://www.lupus.org/resources/dos-and-donts-for-living-well-with-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Impact of Lupus on Heart Health",
          url: "https://www.lupus.org/resources/impact-of-lupus-on-heart-health",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["lifestyle", "smoking-cessation", "cardiovascular", "flare-prevention"],
      evidence: "supported",
    },
    {
      id: "exercise-activity",
      title: "Exercise and staying active",
      summary:
        "Regular, moderate exercise helps with fatigue, joint stiffness, mood, bone and heart health in lupus; activity is adjusted around flares and individual ability.",
      detail:
        "Although fatigue and joint pain can make exercise feel daunting, regular moderate physical activity is beneficial for most people with lupus. It can reduce fatigue, ease joint stiffness and maintain range of motion, support a healthy weight, strengthen bones (important given steroid-related bone loss), lift mood, and improve cardiovascular fitness — which matters because lupus raises heart-disease risk. Low-impact activities such as walking, swimming, water exercise, cycling, and stretching are often well tolerated and gentle on the joints. The key is to start gradually, listen to the body, and adjust intensity during flares, when rest and lighter activity may be appropriate; activity can then be rebuilt as the flare settles. Because the right type and amount of exercise depends on which organs are involved and a person's overall health, it is sensible to tailor an exercise plan with the care team or a physiotherapist, especially if there is heart, lung, or significant joint involvement.",
      sources: [
        {
          label: "Ten Tips For Thriving with Lupus (exercise)",
          url: "https://rheumatology.org/patient-blog/ten-tips-for-thriving-with-lupus",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Living With Lupus: Health Information Basics",
          url: "https://www.niams.nih.gov/community-outreach-initiative/understanding-joint-health/living-with-lupus",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["lifestyle", "exercise", "activity", "bone-health", "self-management"],
      evidence: "supported",
    },
    {
      id: "heart-healthy-diet",
      title: "A heart-healthy, balanced diet",
      summary:
        "No special 'lupus diet' is proven, but a balanced, heart-healthy diet supports cardiovascular health, weight, and bones — all especially relevant in lupus.",
      detail:
        "There is no proven specific 'lupus diet' that treats the disease, but eating well supports several areas that matter a great deal in lupus. A balanced, heart-healthy pattern — rich in fruits, vegetables, whole grains, and lean proteins, and lower in saturated fat, salt, and ultra-processed foods — helps counter the elevated cardiovascular risk that accompanies lupus and supports healthy blood pressure and cholesterol. Managing weight reduces strain on joints and helps with blood pressure and diabetes risk, particularly important for people on steroids, which can drive weight gain and raise blood sugar. Adequate calcium and vitamin D support bone health, again relevant with steroid use. Limiting alcohol and salt can help, and people with kidney involvement may need specific dietary adjustments guided by their team. General nutrition advice is helpful, but anyone considering major dietary changes or supplements should review them with their care team, since some supplements can interact with lupus or its medicines.",
      sources: [
        {
          label: "Lupus — lifestyle and home remedies (diet)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790",
          publisher: "Mayo Clinic",
        },
        {
          label: "Dos and Don'ts for Living Well with Lupus (nutrition)",
          url: "https://www.lupus.org/resources/dos-and-donts-for-living-well-with-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["lifestyle", "diet", "nutrition", "cardiovascular", "bone-health"],
    },
    {
      id: "stress-management",
      title: "Stress management and emotional wellbeing",
      summary:
        "Stress is a commonly reported flare trigger and lupus takes an emotional toll; stress-reduction techniques and emotional support are part of comprehensive self-care.",
      detail:
        "Many people with lupus identify physical or emotional stress as something that precedes or worsens flares, and living with an unpredictable chronic illness is itself a significant source of stress, anxiety, and low mood. While stress is not the cause of lupus, managing it is a reasonable and supportive part of care. Techniques that help include relaxation and breathing exercises, mindfulness or meditation, gentle activity, maintaining good sleep, setting realistic expectations, and pacing to avoid overload. Equally important is emotional support — from family and friends, peer support groups and communities of others with lupus, and mental health professionals when needed; depression and anxiety are common in lupus and are treatable. Because mind and body interact in chronic illness, addressing emotional wellbeing can improve both quality of life and the capacity to keep up with the daily work of managing lupus. Care teams can connect people with counseling and support resources.",
      sources: [
        {
          label: "Understanding Lupus Environmental Triggers (stress)",
          url: "https://www.lupus.org/resources/understanding-lupus-environmental-triggers",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus Self-Management: Take Back Control",
          url: "https://rheumatology.org/patient-blog/lupus-self-management-take-back-control",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["lifestyle", "stress", "mental-health", "wellbeing", "self-management"],
    },
  ],
});
