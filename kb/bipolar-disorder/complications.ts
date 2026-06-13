import { defineSection } from "../types.js";

/**
 * COMPLICATIONS — the longer-term consequences and risks associated with bipolar
 * disorder when it is undertreated or untreated: the serious risk of suicide,
 * effects on relationships/work/finances, physical-health and life-expectancy
 * impacts, and possible cognitive effects — paired throughout with the message
 * that treatment substantially reduces these risks.
 *
 * EDUCATIONAL and hopeful in framing: these are risks to be reduced through
 * care, not inevitabilities.
 */
export const complications = defineSection({
  id: "complications",
  title: "Complications & Long-Term Risks",
  description:
    "Longer-term risks linked to undertreated bipolar disorder — suicide, effects on relationships, work and finances, physical-health and life-expectancy impacts, and cognitive effects — alongside the evidence that treatment substantially lowers these risks.",
  entries: [
    {
      id: "suicide-risk",
      title: "Suicide risk",
      summary:
        "Bipolar disorder carries a significantly increased risk of suicide, especially during depressive and mixed episodes; recognizing this risk and seeking help early and in crisis saves lives.",
      detail:
        "The most serious risk associated with bipolar disorder is suicide. Rates of suicidal thoughts, attempts, and deaths are substantially higher than in the general population, with risk greatest during depressive and mixed episodes, when low mood may be combined with enough energy or agitation to act. This is precisely why the safety content in this knowledge base is emphasized so strongly, and why early recognition, ongoing treatment, and a crisis plan matter so much. The encouraging counterpart is that this risk can be reduced: effective treatment lowers it, some treatments (notably lithium and ECT) are associated with reduced suicide risk specifically, and crisis support is available and effective. Anyone with thoughts of suicide should reach out immediately — in the U.S., the 988 Suicide & Crisis Lifeline (call or text 988) is available 24/7, and 911 in an emergency. Suicidal thoughts are a treatable symptom, not a permanent state, and help works (see Acute Emergencies).",
      sources: [
        {
          label: "Bipolar Disorder — suicide risk and getting help",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["complications", "suicide", "red-flag", "safety", "988"],
      caution:
        "If you or someone you know is having thoughts of suicide, get help now: call or text 988, or call 911 in an emergency. This risk is reducible with treatment and support.",
    },
    {
      id: "impact-on-life",
      title: "Effects on relationships, work, and finances",
      summary:
        "Untreated episodes can strain relationships, disrupt education and work, and cause financial harm — for example through impulsive spending during mania — but these consequences are reduced by treatment and early action.",
      detail:
        "When bipolar disorder is untreated or undertreated, mood episodes can take a real toll on daily life. Manic and hypomanic episodes can lead to conflict, impulsive decisions, risky behavior, and consequences such as overspending or debt, damaged relationships, and problems at work or school; depressive episodes can cause withdrawal, missed work, and difficulty meeting responsibilities. Over time, repeated episodes can disrupt careers, education, and important relationships. These are some of the reasons early diagnosis and consistent treatment matter, since reducing the frequency and severity of episodes protects the parts of life that matter most. It also helps to build practical safeguards while well — for example, arrangements that limit access to large sums or major decisions during a high — as part of a relapse plan made with the care team and trusted others. With effective management, many people maintain stable relationships, careers, and finances, and consequences that did occur during an episode can often be addressed and recovered from with support.",
      sources: [
        {
          label: "Bipolar disorder — complications and impact on life",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar disorder — effects on daily life",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["complications", "relationships", "work", "finances", "functioning"],
    },
    {
      id: "physical-health-and-life-expectancy",
      title: "Physical health and life expectancy",
      summary:
        "People with bipolar disorder have higher rates of physical illness, especially cardiovascular and metabolic disease, contributing to a reduced average life expectancy — a gap that better physical care can help close.",
      detail:
        "Bipolar disorder is associated with poorer physical health on average and a shortened life expectancy compared with the general population. Much of this gap is driven by physical illness — particularly cardiovascular and metabolic conditions such as heart disease, high blood pressure, diabetes, and obesity — rather than by the psychiatric condition alone, and contributing factors include the metabolic side effects of some medications, higher rates of smoking and substance use, the effects of depression on activity and self-care, and sometimes less access to or engagement with physical health care. Suicide also contributes to the higher mortality. The important and hopeful message is that much of this is modifiable: attention to physical health — monitoring and managing weight, blood sugar, cholesterol, and blood pressure; not smoking; staying active; and coordinated care between mental-health and primary-care providers — can meaningfully improve outcomes. Treating bipolar disorder as a whole-person condition, in which physical and mental health are managed together, is key to narrowing this gap.",
      sources: [
        {
          label: "An Introduction to Bipolar Disorder and Co-Occurring Substance Use Disorders (health risks)",
          url: "https://library.samhsa.gov/product/advisory-introduction-bipolar-disorder-and-co-occurring-substance-use-disorders/sma16-4960",
          publisher: "SAMHSA",
        },
        {
          label: "Bipolar disorder — physical health considerations",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["complications", "physical-health", "cardiometabolic", "life-expectancy"],
    },
    {
      id: "cognitive-effects",
      title: "Possible cognitive effects",
      summary:
        "Some people with bipolar disorder notice difficulties with memory, attention, or thinking speed, which can persist between episodes; these vary widely and can often be helped by good overall management.",
      detail:
        "Beyond mood, some people with bipolar disorder experience difficulties with cognition — such as memory, attention, concentration, and processing speed — that can be present not only during episodes but, for some, to a milder degree between them. These effects vary a great deal from person to person; many people have no significant or lasting cognitive difficulties, while others find these challenges affect work or daily tasks. Contributors can include the episodes themselves (untreated mania and depression are hard on the brain, another reason to prevent them), sleep problems, co-occurring conditions, and sometimes medication side effects, which is why any concern is worth discussing with the care team rather than assumed to be permanent. Strategies that help overall stability — consistent treatment, protecting sleep, managing stress, staying active and engaged — also tend to support cognition, and reducing the number and severity of episodes is itself protective. Cognitive changes are a recognized but variable part of the condition, not an inevitable decline.",
      sources: [
        {
          label: "Bipolar Disorder — effects on thinking and functioning",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — symptoms and effects on cognition",
          url: "https://medlineplus.gov/bipolardisorder.html",
          publisher: "MedlinePlus (NIH / U.S. National Library of Medicine)",
        },
      ],
      tags: ["complications", "cognition", "memory", "functioning"],
    },
    {
      id: "treatment-reduces-risk",
      title: "Treatment substantially reduces these risks",
      summary:
        "The complications of bipolar disorder are largely risks of the untreated illness; consistent treatment, early intervention, and self-management greatly reduce them, and most people with good care live full lives.",
      detail:
        "It is essential to frame the complications above accurately: they are largely the risks of untreated or undertreated bipolar disorder, not a fixed destiny. Consistent, individualized treatment — medication, therapy, and lifestyle supports — reduces the frequency and severity of episodes and, with them, the associated harms to safety, relationships, work, and health. Early diagnosis and intervention improve the long-term course, some treatments specifically lower suicide risk, and attention to physical health narrows the life-expectancy gap. Self-management skills like mood monitoring, recognizing warning signs, and having a crisis plan add further protection. The overall picture is genuinely hopeful: while bipolar disorder is a serious, lifelong condition, the great majority of people who engage with care achieve meaningful stability and live full, productive, and connected lives. Understanding the risks is useful precisely because it motivates the steps — staying in treatment and acting early — that prevent them.",
      sources: [
        {
          label: "Bipolar Disorder — treatment and outlook",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar Disorder — living well with treatment",
          url: "https://www.dbsalliance.org/education/bipolar-disorder/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
      ],
      tags: ["complications", "prognosis", "hope", "treatment"],
    },
  ],
});
