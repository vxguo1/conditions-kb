import { defineSection } from "../types.js";

/**
 * CAUSE — what is currently understood about why bipolar disorder develops:
 * strong genetic/heritable contribution, differences in brain structure and
 * chemistry (neurobiology), and the triggers (stress, sleep loss, substances)
 * that can set off episodes in a susceptible person. Framed to reduce blame and
 * stigma — bipolar disorder is no one's fault.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes & Risk Factors",
  description:
    "What is and isn't known about why bipolar disorder develops: a strong genetic/heritable basis, differences in brain biology, and the life triggers (stress, sleep disruption, substances) that can precipitate episodes in a vulnerable person.",
  entries: [
    {
      id: "no-single-cause",
      title: "There is no single cause — and it is no one's fault",
      summary:
        "Bipolar disorder arises from a combination of genetic and biological vulnerability interacting with environmental triggers; it is not caused by personal weakness, bad parenting, or anything a person did.",
      detail:
        "Researchers do not yet know exactly what causes bipolar disorder, but the consensus is that it results from several factors working together rather than any one thing. A genetic, biological predisposition appears to set the stage, and life circumstances — particularly stress, sleep disruption, and substance use — can interact with that vulnerability to trigger the onset of the illness or individual mood episodes. This is similar to how many other medical conditions develop from a mix of inherited risk and environment. It is important, and supported by the science, that bipolar disorder is not caused by a person's character, willpower, upbringing, or choices, and not by anything a parent did. Understanding it as a medical condition with biological roots helps replace blame and shame with the more accurate and compassionate view that it is an illness that can be treated and managed.",
      sources: [
        {
          label: "Bipolar Disorder — risk factors and causes",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — causes",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["cause", "overview", "stigma"],
    },
    {
      id: "genetics-heritability",
      title: "Genetics and high heritability",
      summary:
        "Bipolar disorder runs strongly in families and is among the most heritable psychiatric conditions, but no single gene causes it — many genes each add a small amount of risk.",
      detail:
        "Genetics is the single strongest known contributor to bipolar disorder. The condition clusters in families: having a first-degree relative (a parent or sibling) with bipolar disorder substantially raises a person's risk compared with the general population, and twin studies indicate high heritability, meaning much of the variation in who develops it is explained by inherited factors. However, there is no single 'bipolar gene.' Instead, many common gene variations each contribute a small amount of risk, and these combine with one another and with environmental factors. This is why most children of a parent with bipolar disorder do not develop it, and why the condition can appear in someone with no known family history. Knowing about a family history can help people and clinicians stay alert to early signs, but genes describe probability across populations rather than destiny for any individual.",
      sources: [
        {
          label: "Bipolar disorder — genetics and inheritance",
          url: "https://medlineplus.gov/genetics/condition/bipolar-disorder/",
          publisher: "MedlinePlus Genetics (NIH / U.S. National Library of Medicine)",
        },
        {
          label: "Bipolar Disorder — risk factors (family history)",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["cause", "genetics", "heritability", "family-history"],
      caution:
        "Family history raises risk but does not determine outcome — most relatives of people with bipolar disorder never develop it.",
    },
    {
      id: "neurobiology",
      title: "Brain biology and chemistry",
      summary:
        "Bipolar disorder involves differences in brain circuits and neurotransmitter signaling that affect how mood is regulated; these are biological, not a matter of attitude or effort.",
      detail:
        "Although the full picture is still being worked out, research using brain imaging and other methods shows that bipolar disorder involves measurable differences in the brain. These include differences in the structure and activity of brain regions and circuits that regulate mood, emotion, and reward, and in the signaling of chemical messengers (neurotransmitters) that brain cells use to communicate. In other words, the mood instability of bipolar disorder reflects differences in how mood-regulating brain systems function — a biological basis comparable to how other organs can work differently in other illnesses. This understanding underpins why medications that act on brain chemistry can help stabilize mood, and it reinforces that bipolar disorder is a genuine medical condition rather than a failure of willpower. Researchers continue to study these brain differences in the hope of better, more targeted treatments.",
      sources: [
        {
          label: "Bipolar Disorder — brain structure and function in research",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — causes (biological factors)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["cause", "neurobiology", "brain"],
    },
    {
      id: "triggers-stress-sleep",
      title: "Triggers: stress, sleep loss, and life events",
      summary:
        "In a person who is biologically susceptible, major stress, disrupted sleep, and significant life changes can trigger the first episode or later relapses.",
      detail:
        "While the underlying vulnerability is largely biological, specific triggers can set off episodes in someone who is predisposed. Among the most important and best-recognized is sleep disruption: losing sleep or having an irregular schedule can precipitate mania or hypomania, which is one reason protecting regular sleep is a cornerstone of staying well. Major life stress — including both painful events (loss, conflict, trauma) and, sometimes, intensely positive or goal-driven events — can also trigger episodes, as can major changes to daily routine, shift work, jet lag, and seasonal changes. Recognizing personal triggers is empowering rather than alarming: it lets people and their care teams build routines and plans that reduce relapse risk. Importantly, the presence of a trigger does not mean a person 'brought on' their illness; triggers act on an underlying biological susceptibility that the person did not choose.",
      sources: [
        {
          label: "Bipolar Disorder — what can trigger episodes",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — triggers and causes",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["cause", "triggers", "sleep", "stress"],
    },
    {
      id: "substances-and-medication-triggers",
      title: "Substances and some medications as triggers",
      summary:
        "Alcohol and recreational drugs can trigger or worsen episodes, and certain medications — notably antidepressants taken without a mood stabilizer — can sometimes flip mood into mania.",
      detail:
        "Substances are a notable, and often modifiable, contributor to mood instability in bipolar disorder. Alcohol and recreational drugs (including stimulants and cannabis) can trigger episodes, deepen depression, destabilize mood, and interfere with treatment, which is a major reason reducing or avoiding them is part of staying well. Some prescribed medications can also affect mood: antidepressants, particularly when taken without a mood stabilizer, can in some people trigger a switch into mania or hypomania or accelerate rapid cycling — an important reason bipolar disorder must be distinguished from unipolar depression before antidepressants are used. Corticosteroids (such as prednisone) and certain other drugs can also occasionally provoke manic-type symptoms. None of this means a person is at fault; it means these are factors a care team weighs carefully. Decisions about any medication that might affect mood belong with the prescriber, and supplements and recreational substances should always be disclosed.",
      sources: [
        {
          label: "Bipolar disorder — substance use and triggers",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
        {
          label: "Bipolar Disorder — substance use and co-occurring factors",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["cause", "substances", "alcohol", "antidepressant-induced-mania"],
      caution:
        "Antidepressant-induced mania is a recognized risk; never start, stop, or change an antidepressant on your own — these decisions belong with the prescriber.",
    },
    {
      id: "age-of-onset",
      title: "When and how it typically begins",
      summary:
        "Bipolar disorder usually first appears in the late teens to mid-twenties, though it can begin in childhood or later; early symptoms are often subtle and easy to miss.",
      detail:
        "Bipolar disorder most often emerges in late adolescence or early adulthood, with the average onset in the late teens to early twenties, although it can begin in childhood or, less commonly, later in adult life. The first clear episode is frequently a depression, which is one reason the underlying bipolar nature can go unrecognized for years. Early or warning signs can be subtle — changes in sleep, energy, mood, irritability, or functioning — and in young people the picture can look different and overlap with other conditions, so careful assessment by a specialist is important. Because the condition often starts when people are establishing education, work, and relationships, early recognition and treatment can make a real difference to long-term wellbeing. Onset is not something a person controls; understanding the typical pattern simply helps families and clinicians notice and respond sooner.",
      sources: [
        {
          label: "Bipolar Disorder — age of onset and course",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — when it starts",
          url: "https://medlineplus.gov/bipolardisorder.html",
          publisher: "MedlinePlus (NIH / U.S. National Library of Medicine)",
        },
      ],
      tags: ["cause", "onset", "age"],
    },
  ],
});
