import { defineSection } from "../types.js";

/**
 * Overview, types & classification — what bipolar disorder is and the main forms
 * (bipolar I, bipolar II, cyclothymia), plus the cross-cutting features that
 * shape how it presents: mixed features and rapid cycling. Written to be
 * layperson-accessible, compassionate, and non-stigmatizing.
 *
 * This is supportive, EDUCATIONAL information — not a therapist and not a
 * substitute for professional mental-health care.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview, Types & Classification",
  description:
    "What bipolar disorder is and how the main forms differ — bipolar I (mania), bipolar II (hypomania plus depression), and cyclothymia — along with mixed features and rapid cycling. Educational, non-stigmatizing background.",
  entries: [
    {
      id: "what-is-bipolar-disorder",
      title: "What bipolar disorder is",
      summary:
        "Bipolar disorder is a treatable brain-based mood condition marked by episodes of unusually high or irritable mood and energy (mania or hypomania) and, often, episodes of depression — shifts that go well beyond ordinary ups and downs.",
      detail:
        "Bipolar disorder is a long-term mental-health condition that causes pronounced changes in mood, energy, activity, thinking, and the ability to carry out everyday tasks. It is defined by distinct 'mood episodes': periods of abnormally elevated, expansive, or irritable mood with increased energy (called mania or, in a milder form, hypomania), and usually also periods of depression. These episodes are far more intense and sustained than the normal highs and lows everyone experiences, and they represent a clear change from a person's usual self. Between episodes many people feel and function well, sometimes for long stretches. Bipolar disorder is common, affecting roughly 2.8% of U.S. adults in a given year, typically begins in the late teens or early twenties, and is a medical condition — not a character flaw, a result of weakness, or something a person chose. With the right combination of treatment and support, most people manage it well and live full lives.",
      sources: [
        {
          label: "Bipolar Disorder — overview",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar Disorder — statistics (U.S. prevalence)",
          url: "https://www.nimh.nih.gov/health/statistics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["basics", "definition", "overview"],
      caution:
        "Educational only — not a diagnosis. A diagnosis of bipolar disorder can only be made by a qualified mental-health professional.",
    },
    {
      id: "mania-and-hypomania",
      title: "Mania and hypomania",
      summary:
        "Mania is a sustained period of elevated or irritable mood with high energy that causes serious problems; hypomania is a milder version that is noticeable to others but less disruptive.",
      detail:
        "A manic episode is a period — lasting at least a week (or any duration if hospitalization is needed) — of abnormally elevated, expansive, or irritable mood together with markedly increased energy or activity. Common features include feeling euphoric or 'on top of the world' or unusually irritable, racing thoughts and rapid speech, needing much less sleep without feeling tired, grandiose self-confidence, distractibility, and impulsive or risky behavior such as overspending, reckless driving, or risky sexual or business decisions. Severe mania can include psychosis (losing touch with reality) and typically impairs work, relationships, and safety. Hypomania has the same kinds of symptoms but is milder, lasts at least four days, and does not cause the severe impairment, hospitalization, or psychosis of full mania — though others usually notice the change. Hypomania can feel productive or pleasant, which is one reason it is easy to overlook or not report, yet recognizing it is essential to an accurate diagnosis.",
      sources: [
        {
          label: "Bipolar disorder — symptoms (manic and hypomanic episodes)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder — signs and symptoms",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["mania", "hypomania", "symptoms"],
    },
    {
      id: "bipolar-depression",
      title: "Bipolar depression",
      summary:
        "Most of the burden of bipolar disorder comes from depressive episodes — low mood, loss of interest, fatigue, and hopelessness — which often dominate the course of the illness.",
      detail:
        "A depressive episode in bipolar disorder looks much like major depression: at least two weeks of persistently low mood or loss of interest and pleasure, often with fatigue, changes in sleep and appetite, difficulty concentrating, feelings of worthlessness or guilt, slowed thinking or movement, and sometimes thoughts of death or suicide. For many people with bipolar disorder, depressive episodes are more frequent, longer-lasting, and more disabling than the highs, and they account for much of the suffering and functional difficulty the condition causes. People often seek help during depression rather than during a high, which is part of why bipolar disorder is so frequently first mistaken for ordinary (unipolar) depression. Because the treatment of bipolar depression differs in important ways from the treatment of unipolar depression, distinguishing the two matters a great deal — and a careful history of any past highs is what makes that distinction possible.",
      sources: [
        {
          label: "Bipolar disorder — symptoms (depressive episode)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder (depressive episodes)",
          url: "https://medlineplus.gov/bipolardisorder.html",
          publisher: "MedlinePlus (NIH / U.S. National Library of Medicine)",
        },
      ],
      tags: ["depression", "bipolar-depression", "symptoms"],
      caution:
        "If depression brings thoughts of suicide or self-harm, this is urgent — see the Acute Emergencies section and contact the 988 Suicide & Crisis Lifeline (call or text 988) or 911.",
    },
    {
      id: "bipolar-i",
      title: "Bipolar I disorder",
      summary:
        "Bipolar I is defined by at least one full manic episode; depressive and hypomanic episodes usually occur as well, but a single manic episode is enough for the diagnosis.",
      detail:
        "Bipolar I disorder is diagnosed when a person has had at least one full manic episode — a week or more of elevated or irritable mood with high energy that causes serious impairment, or that required hospitalization, or that included psychosis. Most people with bipolar I also experience depressive episodes and may have hypomanic and mixed episodes, but the defining feature is the presence of true mania. Because manic episodes can involve dangerous behavior, psychosis, or the need for hospital care, bipolar I is at the more severe end of the bipolar spectrum, though its course varies widely from person to person. It affects all genders roughly equally and usually emerges in late adolescence or early adulthood. With consistent treatment — typically medication plus therapy and lifestyle supports — episodes can be reduced in frequency and severity, and many people achieve long periods of stability.",
      sources: [
        {
          label: "Bipolar Disorder — types (Bipolar I)",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — types and overview",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["bipolar-i", "mania", "classification"],
    },
    {
      id: "bipolar-ii",
      title: "Bipolar II disorder",
      summary:
        "Bipolar II involves at least one hypomanic episode and at least one major depressive episode, but never a full manic episode — and it is not simply a 'milder' illness.",
      detail:
        "Bipolar II disorder is diagnosed when a person has had at least one hypomanic episode and at least one major depressive episode, but has never had a full manic episode. It is sometimes wrongly described as a 'lighter' form of bipolar disorder, but that is misleading: because the depressive episodes in bipolar II are often frequent, prolonged, and severe, the overall burden — including the risk of suicide — can be substantial. The hypomanic episodes may feel energizing or even pleasant and are easy to overlook or not mention to a clinician, so bipolar II is especially likely to be misdiagnosed as recurrent unipolar depression. Identifying the past hypomania is what reveals the true picture and points toward bipolar-appropriate treatment. Like other forms, bipolar II is highly treatable, and recognizing it accurately is the first step toward effective care.",
      sources: [
        {
          label: "Bipolar Disorder — types (Bipolar II)",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — types (Bipolar II)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["bipolar-ii", "hypomania", "classification"],
    },
    {
      id: "cyclothymia",
      title: "Cyclothymia (cyclothymic disorder)",
      summary:
        "Cyclothymia is a chronic, milder form of bipolar disorder with frequent swings between hypomanic-like and mild depressive symptoms that don't fully meet criteria for full episodes.",
      detail:
        "Cyclothymic disorder, or cyclothymia, is a chronic mood condition on the bipolar spectrum in which a person has many periods of hypomanic-type symptoms and many periods of mild depressive symptoms over an extended time (at least two years in adults, one year in children and teens), without the symptom-free stretches lasting very long. The mood changes are real and persistent but do not reach the full intensity or duration required to count as a manic, hypomanic, or major depressive episode. Because the swings are milder, people with cyclothymia often do not realize they have a treatable condition and may go years without help, yet the ongoing instability can affect relationships, work, and quality of life, and a portion of people with cyclothymia later develop bipolar I or II disorder. Talk therapy and, sometimes, medication can help, and recognizing the pattern is the key first step.",
      sources: [
        {
          label: "Cyclothymia (cyclothymic disorder) — symptoms and treatment",
          url: "https://my.clevelandclinic.org/health/diseases/17788-cyclothymia",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Cyclothymia (cyclothymic disorder) — symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/cyclothymia/symptoms-causes/syc-20371275",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["cyclothymia", "classification", "spectrum"],
    },
    {
      id: "mixed-features-rapid-cycling",
      title: "Mixed features and rapid cycling",
      summary:
        "Mixed features mean manic and depressive symptoms occur at the same time; rapid cycling means four or more mood episodes in a year — both make the illness harder to manage and need specialist care.",
      detail:
        "Bipolar disorder does not always present as neat, separate highs and lows. 'Mixed features' describes an episode in which symptoms of both poles occur together — for example, feeling deeply depressed and hopeless while also being agitated, sped-up, and unable to sleep. Mixed states can be especially distressing and are associated with a higher risk of suicide, partly because low mood is combined with the energy to act. 'Rapid cycling' is defined as having four or more mood episodes (manic, hypomanic, or depressive) within a single year; it can occur in bipolar I or II, is more common in women, and may be worsened by some factors including certain antidepressants and thyroid problems. Both patterns tend to make the condition harder to treat and are important reasons to work closely with a psychiatrist, who can tailor treatment accordingly. Recognizing these patterns is descriptive, not a cause for alarm — they simply signal that specialist, individualized care matters even more.",
      sources: [
        {
          label: "Bipolar disorder — symptoms (mixed features) and patterns",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar disorder — overview (episode patterns)",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["mixed-features", "rapid-cycling", "classification"],
      caution:
        "Mixed states carry a heightened suicide risk. If you or someone you know is in danger, contact the 988 Suicide & Crisis Lifeline (call or text 988) or 911 right away.",
    },
  ],
});
