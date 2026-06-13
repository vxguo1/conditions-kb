import { defineSection } from "../types.js";

/**
 * THERAPY & LIFESTYLE — the non-drug, active backbone of chronic-pain care:
 * physical therapy and graded exercise/activity, pacing, sleep, weight and diet,
 * and the foundational role of self-management. (Psychological therapies have
 * their own dedicated section.)
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Therapy & Lifestyle",
  description:
    "The active, non-drug backbone of pain care: physical therapy and graded exercise, pacing and activity management, sleep, weight and diet, and why staying active (not resting) is central to managing most chronic pain.",
  entries: [
    {
      id: "exercise-and-movement",
      title: "Exercise and staying active",
      summary:
        "Regular, appropriately graded exercise is one of the best-supported treatments for most chronic pain; staying active generally helps more than rest, even though it can feel counterintuitive.",
      detail:
        "Exercise and movement are cornerstones of chronic-pain management and among the most consistently supported approaches across many pain conditions. This runs counter to the natural instinct to rest, but prolonged rest tends to make most chronic pain worse over time — muscles weaken, joints stiffen, fitness declines, mood drops, and the nervous system can become more sensitive. Appropriate activity does the opposite: it strengthens and conditions the body, improves mood and sleep, and can actually turn down pain sensitivity. The key is a gradual, individualized approach rather than overdoing it, often starting gently and building up. Many kinds of activity help — walking, swimming, cycling, strengthening, stretching, and movement practices like yoga or tai chi — and the 'best' exercise is largely the one a person will stick with and enjoy. A brief flare after starting new activity is common and usually not harmful. A physical therapist or care team can tailor a program to the person's condition and goals, which makes it safer and more effective than going it alone.",
      sources: [
        {
          label: "Non-Drug Pain Management (exercise and physical activity)",
          url: "https://medlineplus.gov/nondrugpainmanagement.html",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Chronic Pain (exercise as core management)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["therapy", "exercise", "activity", "lifestyle"],
    },
    {
      id: "physical-therapy",
      title: "Physical therapy and graded activity",
      summary:
        "Physical therapists guide tailored exercise, movement, and graded-activity programs that rebuild strength and confidence and gradually expand what a person can do despite pain.",
      detail:
        "Physical therapy (physiotherapy) is a frontline, non-drug treatment for many chronic-pain conditions. Rather than passive treatments alone, modern physical therapy emphasizes active rehabilitation: an individualized program of stretching, strengthening, aerobic conditioning, and movement retraining, often combined with education about pain and how to move with confidence. A particularly important principle is graded activity (or graded exposure) — gradually and systematically increasing activity in manageable steps, working to a plan rather than to pain, so the body and nervous system adapt and the person rebuilds capacity without repeated boom-and-bust flares. Therapists also address fear of movement, which commonly develops with persistent pain and can lead to avoidance that worsens disability. Hands-on techniques, posture and ergonomic advice, and aids may complement the active work. Because programs are tailored to the diagnosis, goals, and starting fitness, a physical therapist can make activity safer and more effective. The overall aim is function — getting back to valued activities — with pain reduction often following improved movement.",
      sources: [
        {
          label: "Pain Management & Rehabilitation (physical therapy and rehab)",
          url: "https://my.clevelandclinic.org/departments/rehabilitation/services/chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Non-Drug Pain Management (physical therapy)",
          url: "https://medlineplus.gov/nondrugpainmanagement.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["therapy", "physical-therapy", "graded-activity", "rehabilitation"],
    },
    {
      id: "pacing-and-activity-management",
      title: "Pacing and activity management",
      summary:
        "Pacing means spreading activity steadily rather than overdoing it on good days and crashing afterward, helping people accomplish more with fewer severe flares over time.",
      detail:
        "A common pattern in chronic pain is 'boom and bust': on better days a person does a great deal, triggers a flare, then rests for days to recover, and the cycle repeats — leaving overall activity low and unpredictable. Pacing is a self-management skill that breaks this cycle by spreading activity more evenly. In practice it means planning and prioritizing tasks, breaking big jobs into smaller chunks with rest or change-of-task built in, alternating demanding and lighter activities, and gradually increasing activity in a steady, sustainable way rather than reacting to how the pain feels moment to moment. Done well, pacing helps people do more reliably and with fewer big flares, and it works hand in hand with graded activity from physical therapy. It is not about doing less for its own sake; it is about doing things in a smarter, more consistent pattern so that progress accumulates. Many people learn pacing through pain-management programs, physical or occupational therapists, or pain psychology, and it is a skill that improves with practice.",
      sources: [
        {
          label: "Chronic Pain and Complementary Health Approaches (self-management and pacing)",
          url: "https://www.nccih.nih.gov/health/chronic-pain-and-complementary-health-approaches-usefulness-and-safety",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Chronic Pain (self-management strategies)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["therapy", "pacing", "self-management", "lifestyle"],
    },
    {
      id: "sleep-and-pain",
      title: "Sleep and chronic pain",
      summary:
        "Pain and sleep are tightly linked: poor sleep amplifies pain and pain disrupts sleep, so improving sleep is an important and often underused part of pain management.",
      detail:
        "Sleep and pain have a strong two-way relationship. Pain makes it harder to fall and stay asleep, and poor or insufficient sleep in turn lowers the pain threshold and worsens pain the next day, along with mood, concentration, and the ability to cope — a cycle that can entrench both problems. Because of this, improving sleep is a genuine pain-management strategy, not just a comfort measure. Helpful approaches focus first on sleep habits ('sleep hygiene'): a consistent sleep and wake time, a wind-down routine, a cool dark quiet bedroom, limiting screens, caffeine, alcohol, and large meals near bedtime, and getting daytime activity and light. For persistent insomnia, cognitive behavioral therapy for insomnia (CBT-I) is an effective, non-drug treatment. Treating sleep disorders that often accompany pain, such as obstructive sleep apnea, also matters. Some pain medicines affect sleep (and some sleep medicines interact dangerously with opioids), so changes are coordinated with the care team. Prioritizing sleep frequently improves not only rest but the pain itself.",
      sources: [
        {
          label: "Chronic Pain (sleep and pain relationship)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Non-Drug Pain Management (sleep and lifestyle)",
          url: "https://medlineplus.gov/nondrugpainmanagement.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["therapy", "sleep", "insomnia", "lifestyle"],
    },
    {
      id: "weight-diet-and-pain",
      title: "Weight, diet, and general health",
      summary:
        "For some conditions, losing excess weight reduces load on painful joints, and an overall healthy, anti-inflammatory-style diet supports general health; nutrition is a supportive piece, not a cure.",
      detail:
        "General health habits influence chronic pain in several ways. For weight-bearing joint pain such as knee and hip osteoarthritis and some back pain, carrying excess weight increases mechanical load and is associated with more pain, so for people who are overweight, gradual weight loss can meaningfully reduce joint pain and improve function — often best achieved by combining dietary change with the exercise that is already central to pain care. Beyond joint loading, excess body fat is linked to low-grade inflammation that may influence pain more broadly. There is no single proven 'pain diet,' but an overall healthy eating pattern — plenty of vegetables, fruits, whole grains, and healthy fats, with less ultra-processed food, added sugar, and excess alcohol — supports general health, mood, sleep, and the conditions that often accompany pain (such as diabetes and heart disease). Some people explore anti-inflammatory eating patterns; evidence for specific diets in pain is limited and mixed. Nutrition is best seen as a supportive part of the bigger plan rather than a stand-alone treatment, and significant dietary changes are worth discussing with the care team, especially alongside other conditions.",
      sources: [
        {
          label: "Nutritional Approaches for Musculoskeletal Pain: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/nutritional-approaches-for-musculoskeletal-pain-and-inflammation-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Chronic Pain (weight, diet, and lifestyle factors)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["therapy", "weight", "diet", "nutrition", "lifestyle"],
    },
  ],
});
