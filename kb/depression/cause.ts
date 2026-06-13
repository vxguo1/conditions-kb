import { defineSection } from "../types.js";

/**
 * CAUSE — the biopsychosocial model. Depression does not have a single cause; it
 * arises from interacting biological, psychological, and social factors:
 * neurobiology and brain circuits, genetics and family history, stress and
 * adverse experiences, and medical/physical contributors.
 *
 * Framed compassionately: depression is a medical condition, not a personal
 * failing or a choice. Educational only — not a diagnosis.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes & Contributing Factors",
  description:
    "Why depression happens — the biopsychosocial picture: brain chemistry and circuits, genetics and family history, stress and adverse life experiences, and medical contributors. Depression is a real illness, not a weakness or a choice.",
  entries: [
    {
      id: "biopsychosocial-model",
      title: "Depression has many interacting causes",
      summary:
        "Depression usually results from a combination of biological, psychological, and social factors rather than any single cause; this is why it is no one's fault and why help can come from several directions.",
      detail:
        "Researchers generally understand depression through a 'biopsychosocial' model: it arises from a complex interaction of biological factors (brain chemistry and circuits, genetics, hormones, physical illness), psychological factors (thinking patterns, coping styles, self-esteem, past trauma), and social factors (stress, loss, isolation, adversity, relationships, and circumstances). No single one of these explains depression on its own, and the mix differs from person to person, which is part of why it can be hard to point to one 'reason.' This understanding matters for two reasons. First, it underlines that depression is a genuine medical condition that emerges from real biology and circumstances — not a weakness, a choice, or something a person brought on themselves. Second, because several factors contribute, help can come from several directions at once: therapy, medication, lifestyle change, and social support each address different parts of the picture. Understanding causes is educational; it does not diagnose any individual.",
      sources: [
        {
          label: "Depression — causes and risk factors",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depressive disorder (depression) — contributing factors",
          url: "https://www.who.int/news-room/fact-sheets/detail/depression",
          publisher: "World Health Organization",
        },
      ],
      tags: ["causes", "biopsychosocial", "mental-health"],
      caution:
        "Causes describe patterns across people, not blame for any individual. Depression is not a personal failing. This is educational, not a diagnosis.",
    },
    {
      id: "neurobiology-brain-circuits",
      title: "Brain chemistry and circuits",
      summary:
        "Depression involves differences in brain circuits and chemical messengers that regulate mood, stress, and reward; the old 'just a chemical imbalance' slogan is an oversimplification of a more complex biology.",
      detail:
        "Depression is associated with changes in how certain brain networks function — particularly circuits involved in mood, motivation, reward, stress response, and self-reflection — and with the chemical messengers (neurotransmitters such as serotonin, norepinephrine, and dopamine) that brain cells use to communicate. For years depression was described simply as a 'chemical imbalance,' but scientists now see that as an oversimplification: the biology involves the interaction of multiple neurotransmitter systems, brain circuit activity, stress hormones, inflammation, and the brain's capacity to form new connections (neuroplasticity). Antidepressants act on these systems, which is part of why they can help, but they are not 'topping up' a single missing chemical. The key takeaway for a person is that there are real, measurable biological dimensions to depression — it is rooted in how the brain and body are working — which is one reason it is a treatable medical illness rather than a matter of willpower. The precise mechanisms are still being researched.",
      sources: [
        {
          label: "Depression — biology and the brain",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — causes",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["neurobiology", "brain", "serotonin", "causes"],
    },
    {
      id: "genetics-family-history",
      title: "Genetics and family history",
      summary:
        "Depression tends to run in families and has a partly genetic basis, but genes are only one influence — many people with depression have no family history, and having relatives with it does not make it inevitable.",
      detail:
        "Family and twin studies show that depression has a heritable component: having a first-degree relative (parent, sibling, or child) with depression raises a person's own risk, and genetics is estimated to account for a meaningful share of vulnerability. However, no single 'depression gene' exists; instead, many genes each contribute a small amount, and they shape susceptibility rather than destiny. Genetics interacts with environment — for example, inherited vulnerability may matter most in the face of significant stress or adversity. Importantly, plenty of people develop depression with no known family history, and plenty of people with affected relatives never develop it. Knowing that depression can run in families can be useful for awareness and early recognition, but it does not mean a person is doomed to it or that they 'caused' it. The genetics is a contributing factor among several, and it does not change the fact that depression is treatable.",
      sources: [
        {
          label: "Depression — risk factors (family history)",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — risk factors",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["genetics", "family-history", "risk-factors", "causes"],
    },
    {
      id: "stress-trauma-adversity",
      title: "Stress, loss, trauma, and adversity",
      summary:
        "Stressful life events, loss, trauma (especially in childhood), and ongoing hardship can trigger or contribute to depression, particularly in people who are already vulnerable.",
      detail:
        "Life circumstances play a major role in depression. Stressful or painful events — bereavement, relationship breakdown, job loss, financial strain, serious illness, discrimination, loneliness, and other hardships — can trigger a depressive episode, especially in someone who is already biologically or psychologically vulnerable. Adverse experiences in childhood, such as abuse, neglect, or significant instability, are linked to a higher risk of depression later in life, in part through lasting effects on the stress-response system. Chronic, ongoing stress can be as important as a single dramatic event. This does not mean depression is 'just' a reaction to circumstances that a person should be able to manage — the same event affects different people very differently, and depression often persists even after circumstances improve, which is one way it differs from ordinary sadness. Recognizing the role of stress and trauma helps make sense of the experience and points toward supports like therapy, problem-solving, and addressing the underlying stressors where possible.",
      sources: [
        {
          label: "Depressive disorder (depression) — adverse life events",
          url: "https://www.who.int/news-room/fact-sheets/detail/depression",
          publisher: "World Health Organization",
        },
        {
          label: "Depression — stressful events as a contributing factor",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["stress", "trauma", "adversity", "causes"],
      caution:
        "Depression is not simply a failure to cope with hard circumstances. If life events feel overwhelming, support from a clinician or counselor can help.",
    },
    {
      id: "medical-and-physical-contributors",
      title: "Medical conditions, hormones, and substances",
      summary:
        "Physical illnesses, hormonal changes, certain medications, and alcohol or drug use can cause or worsen depression — which is why ruling out medical contributors is part of a good evaluation.",
      detail:
        "Depression can be caused or worsened by physical and chemical factors, not only psychological ones. Medical conditions such as thyroid disorders, vitamin deficiencies, chronic pain, heart disease, stroke, diabetes, and certain neurological conditions are associated with depression, and some can produce depression-like symptoms directly. Hormonal changes — for example around childbirth (perinatal depression), the menstrual cycle, or menopause — can contribute. Some medications list depressed mood as a possible side effect, and alcohol or other substance use can both worsen depression and be used in an attempt to cope, creating a harmful cycle. Because of these links, a thorough evaluation for depression often includes checking for medical contributors (such as thyroid function) so that a treatable physical cause is not missed and so treatment fits the whole picture. None of this is something to self-diagnose; it is a reason that depression is best assessed by a clinician who can consider the body as well as the mind.",
      sources: [
        {
          label: "Understanding the Link Between Chronic Illness and Depression",
          url: "https://www.nimh.nih.gov/health/publications/chronic-illness-mental-health",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — causes and risk factors",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["medical-causes", "hormones", "substances", "thyroid", "causes"],
    },
    {
      id: "who-is-at-higher-risk",
      title: "Who is at higher risk",
      summary:
        "Anyone can develop depression, but risk is higher with a personal or family history, major stress or trauma, chronic illness, substance use, certain life stages, and limited social support.",
      detail:
        "Depression can affect anyone, but certain factors raise the likelihood. These include a previous episode of depression or other mental-health conditions; a family history of depression; significant or chronic stress, loss, or trauma; serious or long-term physical illness and chronic pain; alcohol or drug use; and major life transitions or stages (such as adolescence, the perinatal period, and later life). Social factors matter too: isolation, loneliness, discrimination, poverty, and lack of supportive relationships all increase risk, while strong social connection is protective. Some risk factors are not changeable, but recognizing them supports earlier awareness and prevention. As with any condition, risk factors describe probability across groups, not certainty for an individual — having several does not guarantee depression, and having none does not rule it out. The practical value of knowing them is to lower the barrier to seeking help early, when treatment tends to work best.",
      sources: [
        {
          label: "Depression — who is at risk",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — causes",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["risk-factors", "prevention", "causes"],
    },
  ],
});
