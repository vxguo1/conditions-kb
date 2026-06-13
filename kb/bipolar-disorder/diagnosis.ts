import { defineSection } from "../types.js";

/**
 * DIAGNOSIS — how bipolar disorder is identified: the mood-episode criteria, the
 * central diagnostic challenge that it is frequently mistaken for unipolar
 * depression, and why detecting any past hypomania or mania is the linchpin of
 * an accurate diagnosis. Educational; diagnosis is a clinician's job.
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Diagnosis & Why It's Often Missed",
  description:
    "How bipolar disorder is diagnosed through mood-episode criteria, why it is so often misdiagnosed as ordinary depression, and why uncovering any past hypomania or mania is the key to getting the diagnosis right.",
  entries: [
    {
      id: "how-its-diagnosed",
      title: "How bipolar disorder is diagnosed",
      summary:
        "There is no blood test or scan for bipolar disorder; diagnosis comes from a careful clinical assessment of mood episodes, symptoms, history, and their effect on functioning, made by a mental-health professional.",
      detail:
        "Bipolar disorder is diagnosed clinically — there is currently no laboratory test, brain scan, or genetic test that can confirm it. Instead, a doctor or mental-health professional makes the diagnosis by taking a detailed history of a person's moods, energy, sleep, thinking, and behavior over time, and how these have affected work, relationships, and daily life. They look for the pattern of distinct mood episodes (mania or hypomania, and depression) defined in diagnostic criteria, and they consider the timeline, family history, and any role of substances. A physical exam and lab tests may be done to rule out other conditions (such as thyroid disease) that can mimic mood symptoms. Information from family members can be valuable, because some symptoms — especially highs — are easier for others to notice. Because the assessment depends on recognizing patterns that unfold over time, accurate diagnosis can take a while, and it should be made by a qualified professional, not self-diagnosed from a checklist.",
      sources: [
        {
          label: "Bipolar disorder — diagnosis and treatment",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar disorder — getting a diagnosis",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["diagnosis", "assessment", "overview"],
      caution:
        "Educational only — this is not a diagnostic tool. Only a qualified mental-health professional can diagnose bipolar disorder.",
    },
    {
      id: "mood-episode-criteria",
      title: "The mood-episode criteria",
      summary:
        "Diagnosis hinges on identifying defined mood episodes — manic, hypomanic, and major depressive — each with specific symptoms, a minimum duration, and a clear change from the person's usual self.",
      detail:
        "The building blocks of a bipolar diagnosis are 'mood episodes,' each defined by a cluster of symptoms lasting a minimum time and representing a clear change from how the person usually is. A manic episode is at least one week (or any length if hospitalization is needed) of elevated, expansive, or irritable mood plus increased energy, along with several symptoms such as reduced need for sleep, grandiosity, racing thoughts, rapid speech, distractibility, and risky behavior, causing significant impairment. A hypomanic episode has similar symptoms for at least four days but without the severe impairment, hospitalization, or psychosis of mania. A major depressive episode is at least two weeks of low mood or loss of interest with additional symptoms like changes in sleep and appetite, fatigue, guilt, poor concentration, and thoughts of death. Which episodes a person has had determines the specific diagnosis — for example, bipolar I (at least one manic episode) versus bipolar II (hypomania plus depression). This framework comes from standardized criteria that clinicians apply with judgment.",
      sources: [
        {
          label: "Bipolar Disorder — signs, symptoms, and episode types",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — symptoms of manic, hypomanic, and depressive episodes",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["diagnosis", "criteria", "mood-episodes"],
    },
    {
      id: "misdiagnosed-as-depression",
      title: "Why it's often misdiagnosed as depression",
      summary:
        "People with bipolar disorder usually seek help during depression and may not recognize or report past highs, so the condition is frequently and sometimes for years mistaken for unipolar depression.",
      detail:
        "One of the most important facts about bipolar disorder is how often it is initially misdiagnosed as unipolar (major) depression. The reasons are understandable: depressive episodes are usually more frequent, longer, and more distressing than highs, so depression is typically what drives people to seek help; hypomania can feel good or productive and may not be seen as a problem worth mentioning; and a single appointment captures only a snapshot in time. As a result, studies have found that many people with bipolar disorder wait years from first symptoms to correct diagnosis, often being treated for depression alone in the meantime. This delay matters because the treatment of bipolar depression differs from that of unipolar depression — in particular, antidepressants given without a mood stabilizer can sometimes worsen the course. Recognizing this pattern is not about second-guessing clinicians but about understanding why a thorough history, including the question of past highs, is so essential.",
      sources: [
        {
          label: "Bipolar disorder — challenges in diagnosis (similar to other conditions)",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
        {
          label: "Bipolar Disorder (distinguishing from depression)",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["diagnosis", "misdiagnosis", "depression", "delay"],
    },
    {
      id: "detecting-past-hypomania",
      title: "Why detecting past hypomania or mania is the key",
      summary:
        "Because a single past hypomanic or manic episode changes the diagnosis and the treatment, clinicians specifically ask about times of unusually high energy, reduced sleep, or impulsive behavior — and input from family helps.",
      detail:
        "The decisive question in distinguishing bipolar disorder from unipolar depression is whether a person has ever had a hypomanic or manic episode. Even one such episode in the past shifts the diagnosis to the bipolar spectrum and changes the treatment approach. This is why thoughtful clinicians ask not only about depression but specifically about periods of feeling unusually 'up,' wired, or irritable; needing much less sleep yet not feeling tired; talking or thinking faster than usual; taking on lots of projects; or acting more impulsively than normal (with money, sex, driving, or decisions). People often don't connect these past periods to their depression, or remember them as simply 'good' or 'energetic' times, so screening tools and, with permission, accounts from family or close friends can be very helpful. Being open and complete about any such history — even episodes that felt positive — is one of the most useful things a person can do to help get the diagnosis, and therefore the treatment, right.",
      sources: [
        {
          label: "Bipolar disorder — diagnosis (assessing for highs)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder — recognizing manic and hypomanic symptoms",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["diagnosis", "hypomania", "history", "family-input"],
    },
    {
      id: "conditions-that-mimic-or-co-occur",
      title: "Conditions that mimic or co-occur",
      summary:
        "Several conditions can resemble or accompany bipolar disorder — including unipolar depression, anxiety, ADHD, borderline personality disorder, thyroid disease, and substance effects — which is why careful assessment matters.",
      detail:
        "Part of the diagnostic challenge is that bipolar disorder can look like, or occur alongside, several other conditions. Unipolar depression, anxiety disorders, attention-deficit/hyperactivity disorder (ADHD), and borderline personality disorder can share features such as mood instability, restlessness, impulsivity, or trouble concentrating, and distinguishing them requires attention to the pattern and duration of symptoms over time. Medical conditions like thyroid disorders can produce mood and energy changes that mimic bipolar episodes, which is why physical evaluation is part of a workup. The effects of alcohol and other substances can also imitate or mask mood episodes. Adding to the complexity, some of these conditions genuinely co-occur with bipolar disorder rather than just resembling it. A careful, often longitudinal assessment by a mental-health professional — sometimes revised as more information emerges — is how these possibilities are sorted out, and it is a reason diagnosis is best left to professionals rather than self-assessment.",
      sources: [
        {
          label: "Bipolar disorder — diagnosis (ruling out other conditions)",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder — co-occurring conditions",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["diagnosis", "differential", "comorbidity", "thyroid", "adhd"],
    },
  ],
});
