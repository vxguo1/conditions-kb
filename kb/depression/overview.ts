import { defineSection } from "../types.js";

/**
 * Overview, types & classification — what depression is and the major forms
 * (major depressive disorder, persistent depressive disorder/dysthymia,
 * perinatal/postpartum, seasonal, and treatment-resistant). Kept
 * layperson-accessible and compassionate.
 *
 * This is supportive, educational information — NOT a therapist, and NOT a
 * substitute for professional mental-health care.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview, Types & Classification",
  description:
    "What depression is, how the main forms differ (major depressive disorder, persistent depressive disorder/dysthymia, perinatal, seasonal, treatment-resistant), and how common it is — framed as supportive, educational information, not a substitute for care.",
  entries: [
    {
      id: "what-is-depression",
      title: "What depression is",
      summary:
        "Depression (major depressive disorder) is a common, treatable medical illness that affects how a person feels, thinks, sleeps, eats, and functions — not a personal weakness or something a person can simply 'snap out of.'",
      detail:
        "Depression — also called major depressive disorder or clinical depression — is a common but serious mood disorder that causes persistent symptoms affecting how a person feels, thinks, and handles daily activities such as sleeping, eating, working, and relating to others. It is an illness that can affect anyone, regardless of age, background, income, or culture, and it is not a sign of weakness, a character flaw, or something a person chose. To meet the description of depression, low mood or loss of interest is generally present most of the day, nearly every day, for at least two weeks, along with other symptoms. Crucially, depression is treatable: most people improve with therapy, medication, or a combination, and reaching out for help is a sign of strength, not failure. This section explains the condition and its forms so the experience feels less confusing and isolating. None of this is a diagnosis — only a qualified professional can assess an individual.",
      sources: [
        {
          label: "Depression",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression",
          url: "https://medlineplus.gov/depression.html",
          publisher: "MedlinePlus (NIH / NLM)",
        },
      ],
      tags: ["basics", "definition", "mental-health"],
      caution:
        "Supportive, educational information only — not a therapist or a substitute for professional mental-health care. If you are struggling, a clinician can help.",
    },
    {
      id: "major-depressive-disorder",
      title: "Major depressive disorder (MDD)",
      summary:
        "MDD involves episodes of low mood or loss of interest plus other symptoms lasting at least two weeks; it ranges from mild to severe and tends to recur, but responds well to treatment.",
      detail:
        "Major depressive disorder is the form most people mean by 'depression.' It is defined by one or more depressive episodes — periods of at least two weeks with a depressed mood and/or a marked loss of interest or pleasure, together with symptoms such as changes in sleep, appetite, or energy, difficulty concentrating, feelings of worthlessness or guilt, and sometimes thoughts of death or suicide. Episodes vary in severity from mild to severe and can interfere with work, relationships, and self-care. MDD often recurs: someone who has had one episode has a higher chance of another, which is why ongoing support and relapse prevention matter. The encouraging reality is that MDD is among the most treatable mental-health conditions, with most people improving through psychotherapy, medication, or both. Severity and the right treatment are matters for a professional assessment, not self-diagnosis.",
      sources: [
        {
          label: "Depression — signs, symptoms, and types",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["mdd", "major-depression", "mental-health"],
    },
    {
      id: "persistent-depressive-disorder",
      title: "Persistent depressive disorder (dysthymia)",
      summary:
        "Persistent depressive disorder is a longer-lasting, often lower-intensity depression that continues for two years or more; its long duration, rather than severity, is what defines it.",
      detail:
        "Persistent depressive disorder (PDD), formerly called dysthymia, is a chronic form of depression in which a low or down mood lasts for an extended period — generally two years or more in adults (one year in children and adolescents). The symptoms may be less intense than in a severe major-depressive episode, but their long duration is the defining feature, and they can quietly erode energy, self-esteem, concentration, sleep, and appetite over years. Because it can feel like 'just how I am,' PDD is often unrecognized and untreated, even though it can be just as disabling over time. People with PDD can also have episodes of major depression layered on top (sometimes called 'double depression'). Like other forms of depression, PDD is treatable with psychotherapy, medication, or both, and recognizing it as an illness rather than a personality trait is often the first step toward feeling better.",
      sources: [
        {
          label: "Depression (persistent depressive disorder)",
          url: "https://medlineplus.gov/depression.html",
          publisher: "MedlinePlus (NIH / NLM)",
        },
        {
          label: "Persistent depressive disorder (dysthymia) — overview",
          url: "https://www.mayoclinic.org/diseases-conditions/persistent-depressive-disorder/symptoms-causes/syc-20350929",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["dysthymia", "persistent-depressive-disorder", "chronic", "mental-health"],
    },
    {
      id: "perinatal-postpartum-depression",
      title: "Perinatal and postpartum depression",
      summary:
        "Perinatal depression is depression during pregnancy or after birth; it is more than the short-lived 'baby blues' and is a common, treatable medical condition — not a reflection of being a bad parent.",
      detail:
        "Perinatal depression is depression that occurs during pregnancy (prenatal) or in the weeks and months after delivery (postpartum). It is distinct from the 'baby blues' — the mild, short-lived mood changes, tearfulness, and worry many new parents feel in the first two weeks after birth, which usually pass on their own. When sadness, anxiety, exhaustion, hopelessness, or difficulty bonding with or caring for the baby are severe or last longer than about two weeks, this may be perinatal depression, which affects a substantial share of pregnant and postpartum people. It arises from a mix of hormonal, physical, emotional, and social changes, and it is a medical condition — not a sign of weakness or of being an inadequate parent. It is very treatable with therapy, support, and sometimes medication (including options developed specifically for postpartum depression), and getting help protects both parent and child. Any thoughts of harming oneself or the baby are an emergency warranting immediate help.",
      sources: [
        {
          label: "Perinatal Depression",
          url: "https://www.nimh.nih.gov/health/publications/perinatal-depression",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["perinatal", "postpartum", "pregnancy", "mental-health"],
      caution:
        "Educational only. Thoughts of harming yourself or your baby need immediate help — call or text 988 (US) or call 911. A clinician can assess and support recovery.",
    },
    {
      id: "seasonal-affective-disorder",
      title: "Seasonal pattern (seasonal affective disorder)",
      summary:
        "Seasonal affective disorder (SAD) is depression that follows a seasonal pattern, most often beginning in late fall or winter and easing in spring; reduced daylight is thought to play a role.",
      detail:
        "Seasonal affective disorder (SAD) describes depression that comes and goes in a seasonal pattern, recognized in diagnosis as major depression 'with a seasonal pattern.' The most common form begins in the late fall and winter months and lifts in spring and summer, and is associated with the shorter days and reduced sunlight of winter, which may disrupt the body's internal clock, serotonin, and melatonin. Symptoms can include low energy, oversleeping, craving carbohydrates and weight gain, social withdrawal ('hibernating'), and the broader symptoms of depression. A less common summer-pattern SAD also exists. SAD is not just 'winter blues' — it is a form of depression that can significantly affect functioning, and it is treatable. Approaches include light therapy (using a light box), psychotherapy, antidepressant medication, and attention to daylight exposure; the right plan depends on the person and is chosen with a clinician.",
      sources: [
        {
          label: "Seasonal Affective Disorder",
          url: "https://www.nimh.nih.gov/health/publications/seasonal-affective-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["seasonal", "sad", "light-therapy", "mental-health"],
    },
    {
      id: "treatment-resistant-depression",
      title: "Treatment-resistant depression",
      summary:
        "When depression does not improve enough after adequate trials of standard treatments, it is described as treatment-resistant — a signal to reassess and try different approaches, not a dead end.",
      detail:
        "Treatment-resistant depression is a term used when a person's depression has not responded adequately after trying standard treatments at a reasonable dose and duration — often defined as an insufficient response to two or more different antidepressant trials. It does not mean the depression is untreatable or that the person has failed; it means the approach needs rethinking. Reassessment looks at whether the diagnosis is complete (for example screening for bipolar disorder or for medical contributors), whether doses and durations were adequate, whether other conditions like anxiety, substance use, or thyroid problems are interfering, and whether the person has been able to take treatment as intended. Next steps may include switching or combining medications, adding psychotherapy, or moving to options such as esketamine or brain-stimulation treatments (TMS or ECT). Many people who did not respond to the first approaches do get better with a different one, which is why persistence and specialist input matter.",
      sources: [
        {
          label: "Mental Health Medications (when treatments don't work; next steps)",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Treatment-resistant depression — overview",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/in-depth/treatment-resistant-depression/art-20044324",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment-resistant", "mdd", "mental-health"],
    },
    {
      id: "epidemiology-burden",
      title: "How common depression is",
      summary:
        "Depression is one of the most common mental-health conditions worldwide, affecting hundreds of millions of people; it can occur at any age and is a leading cause of disability — and it is treatable.",
      detail:
        "Depression is among the most common health conditions in the world. The World Health Organization estimates that hundreds of millions of people live with depression globally, and it is a leading cause of disability. In the United States, tens of millions of adults experience a major depressive episode in a given year, and it affects people of every age, gender, and background, though rates differ across groups. Many people who could benefit from treatment do not receive it, often because of stigma, lack of access, or not recognizing the illness. Understanding how common depression is can help counter the isolating belief that one is alone or uniquely broken — it is a widespread medical condition, and effective help exists. The aim of awareness is not to minimize anyone's experience but to underline that depression is real, common, and treatable.",
      sources: [
        {
          label: "Major Depression — statistics",
          url: "https://www.nimh.nih.gov/health/statistics/major-depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depressive disorder (depression) — fact sheet",
          url: "https://www.who.int/news-room/fact-sheets/detail/depression",
          publisher: "World Health Organization",
        },
      ],
      tags: ["epidemiology", "burden", "mental-health"],
    },
  ],
});
