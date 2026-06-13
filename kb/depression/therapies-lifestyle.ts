import { defineSection } from "../types.js";

/**
 * THERAPY & LIFESTYLE — non-drug, self-management supports that help recovery
 * and resilience alongside (not instead of) treatment: physical activity, sleep,
 * routine and structure, social connection, nutrition and reducing alcohol, and
 * stress-reduction practices like mindfulness.
 *
 * Framed gently for people who may have very little energy. Educational and
 * supportive — a complement to professional care, never a replacement, and never
 * a suggestion that someone can simply 'lifestyle' their way out of depression.
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Lifestyle & Self-Care Supports",
  description:
    "Non-drug supports that aid recovery alongside treatment — physical activity, sleep, routine, social connection, nutrition and reducing alcohol, and stress-reduction. Gentle, educational, and complementary to professional care — not a replacement for it.",
  entries: [
    {
      id: "lifestyle-overview",
      title: "How lifestyle supports fit in (gently)",
      summary:
        "Healthy routines can genuinely help mood and resilience, but they work best alongside treatment, not instead of it — and when depression saps energy, the kindest approach is small, realistic steps, not pressure.",
      detail:
        "Daily habits — activity, sleep, connection, nutrition, and stress management — can meaningfully support recovery from depression and reduce the risk of relapse. At the same time, it is important to be honest and compassionate about two things. First, lifestyle measures are a complement to treatment, not a substitute: telling someone with significant depression to 'just exercise and think positive' can be harmful and dismissive, and these supports work best alongside therapy and/or medication when those are needed. Second, depression itself drains the very energy and motivation these habits require, so the goal is not to add pressure or another way to 'fail.' The kinder, more effective approach is small, realistic steps — a short walk, a regular bedtime, one social contact — building gradually and without self-judgment, and counting any step as a win. Self-compassion is itself protective. The entries that follow describe specific supports with that gentle framing in mind, as tools to draw on, not demands to meet.",
      sources: [
        {
          label: "Depression — self-care and lifestyle (alongside treatment)",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — self-help",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "self-care", "mental-health"],
      caution:
        "Lifestyle measures support treatment but don't replace it. If symptoms are significant, please also seek professional help — you can't simply will away depression.",
    },
    {
      id: "physical-activity",
      title: "Physical activity and exercise",
      summary:
        "Regular physical activity has good evidence for improving mood and easing depression; even modest, gentle movement can help, and the trick is starting small rather than aiming for intensity.",
      detail:
        "Physical activity is one of the better-supported lifestyle measures for depression. Exercise appears to reduce depressive symptoms and anxiety and to support overall wellbeing, likely through a mix of biological effects (such as changes in brain chemistry and stress hormones), better sleep, a sense of accomplishment, and opportunities for routine and social contact. The encouraging part is that the benefit does not require intense workouts: regular, moderate activity — like brisk walking, cycling, swimming, or gardening — can help, and any movement is better than none. For someone with depression, low energy and motivation are real obstacles, so the practical strategy is to start very small (a few minutes, a short walk), choose something enjoyable or sociable, and build gradually, treating consistency as more important than intensity. Activity can be a useful complement to therapy and medication rather than a replacement, and for some people structured exercise is recommended as part of the plan. Anyone with health conditions should check with a clinician about suitable activity; this is general educational information.",
      sources: [
        {
          label: "Depression and anxiety: Exercise eases symptoms",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/in-depth/depression-and-exercise/art-20046495",
          publisher: "Mayo Clinic",
        },
        {
          label: "Depression in adults — exercise and self-help",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "exercise", "physical-activity", "mental-health"],
      evidence: "supported",
    },
    {
      id: "sleep-hygiene",
      title: "Sleep and routine",
      summary:
        "Sleep and depression strongly affect each other; supporting healthy sleep through a consistent routine and good sleep habits can improve mood, while persistent sleep problems deserve attention in treatment.",
      detail:
        "Sleep and depression are closely linked in both directions: depression commonly disrupts sleep (causing insomnia or oversleeping), and poor sleep can worsen mood, energy, and concentration, creating a difficult cycle. Supporting healthy sleep is therefore a valuable part of self-care. Helpful habits ('sleep hygiene') include keeping a consistent sleep and wake time, even on weekends; building a calming wind-down routine; limiting screens, caffeine, alcohol, and heavy meals before bed; keeping the bedroom dark, quiet, and comfortable; getting daylight and activity during the day; and avoiding long or late naps. A regular daily routine more broadly — structured meals, activity, and rest — can provide stabilizing rhythm when depression makes days feel shapeless. That said, sleep problems in depression can be stubborn and are not always fixed by habits alone; persistent insomnia or hypersomnia is worth raising with the care team, as addressing it can be an important part of treatment, and some treatments are chosen partly for their effect on sleep. This is educational guidance, not a treatment plan.",
      sources: [
        {
          label: "Depression — sleep and daily routine in self-care",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — looking after yourself (sleep, routine)",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "sleep", "routine", "mental-health"],
      evidence: "supported",
    },
    {
      id: "social-connection",
      title: "Social connection and support",
      summary:
        "Depression often pulls people toward isolation, which deepens it; maintaining even small amounts of social connection and support is protective and a recognized part of recovery.",
      detail:
        "Human connection is a powerful protective factor for mental health, and isolation is both a symptom of depression and something that worsens it. Depression frequently makes people withdraw — from friends, family, and activities — which can intensify loneliness and low mood in a self-reinforcing loop. Counteracting this, even gently, helps: staying in some contact with supportive people, accepting help, reducing isolation, and, where possible, sharing what one is going through with someone trusted. This does not require being social when one feels least able; small, manageable contacts (a brief message, a short visit, sitting with someone) count, and they can be built up gradually. Support groups and peer support — including those offered by mental-health organizations — let people connect with others who understand, which can reduce shame and isolation. For people supporting someone with depression, simply being present, patient, and non-judgmental is valuable. Connection complements professional treatment rather than replacing it. This is educational information about a recognized support, offered without pressure to anyone for whom socializing currently feels impossible.",
      sources: [
        {
          label: "Depression — staying connected and seeking support",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — support groups",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/support-groups/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "social-connection", "support", "mental-health"],
      evidence: "supported",
    },
    {
      id: "nutrition-and-alcohol",
      title: "Nutrition and reducing alcohol",
      summary:
        "A balanced diet supports overall and brain health, and reducing alcohol matters because — despite feeling like relief — alcohol is a depressant that tends to worsen mood, sleep, and depression over time.",
      detail:
        "What we eat and drink interacts with mood and energy. A generally balanced, nourishing diet supports overall health and provides steadier energy, and depression can disrupt eating (too little or too much), so gentle attention to regular, adequate meals can help — without turning food into another source of pressure or guilt. Alcohol deserves particular attention: although it can feel like temporary relief, alcohol is a central nervous system depressant that tends to worsen mood, disrupt sleep, reduce the effectiveness of treatment, and increase the risk of harm, especially when used to cope with depression. Cutting back or avoiding alcohol is one of the more impactful changes for many people, and the same caution applies to other substances. For people who find their use of alcohol or drugs hard to control, that itself is worth raising with a clinician, as substance use and depression often need to be addressed together. None of this is about perfect eating or rigid rules; it is general, educational guidance that supports treatment rather than substituting for it. Specific dietary or alcohol questions are best discussed with the care team.",
      sources: [
        {
          label: "Depression — alcohol, substances, and self-care",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — alcohol and looking after yourself",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["lifestyle", "nutrition", "alcohol", "substances", "mental-health"],
    },
    {
      id: "mindfulness-stress-reduction",
      title: "Stress reduction and mindfulness",
      summary:
        "Stress-management and mindfulness practices can help some people manage the rumination and tension that accompany depression and reduce relapse risk, especially when learned in a structured way.",
      detail:
        "Practices that reduce stress and cultivate present-moment awareness can be a helpful support for depression. Mindfulness — paying attention to the present moment with openness and without harsh judgment — and related practices like meditation, breathing exercises, and relaxation techniques can help some people step back from the rumination (repetitive negative thinking) that fuels depression and manage stress and tension. Structured programs such as mindfulness-based cognitive therapy combine these skills with therapeutic techniques and have particular evidence for reducing relapse in people with recurrent depression. Benefits are generally modest and vary between individuals, and mindfulness is best seen as one tool among many rather than a cure; for a minority of people, certain intensive practices can occasionally feel distressing, so a gentle, well-guided approach is wise. Many people learn these skills through classes, therapists, reputable apps, or guided programs. As with other lifestyle supports, stress reduction complements professional treatment rather than replacing it. This is educational information; what suits an individual is best explored with guidance.",
      sources: [
        {
          label: "Meditation and Mindfulness: Effectiveness and Safety",
          url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Depression and Complementary Health Approaches: What the Science Says (mindfulness)",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["lifestyle", "mindfulness", "stress-reduction", "meditation", "mental-health"],
      evidence: "mixed",
    },
  ],
});
