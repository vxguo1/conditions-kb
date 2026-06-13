import { defineSection } from "../types.js";

/**
 * COMPLICATIONS — the broader consequences of depression when it is severe,
 * prolonged, or untreated: effects on physical health, functioning and
 * relationships, substance use, suicide risk (the most serious), and effects on
 * recurrence — while emphasizing that treatment reduces these risks.
 *
 * Handled carefully and non-frighteningly: the message is that depression is
 * serious AND treatable, and getting help changes the trajectory. Educational.
 */
export const complications = defineSection({
  id: "complications",
  title: "Complications & Long-Term Impact",
  description:
    "What can happen when depression is severe, prolonged, or untreated — effects on physical health, daily functioning and relationships, substance use, and the most serious risk, suicide — alongside the central point that treatment reduces these risks. Educational and supportive.",
  entries: [
    {
      id: "why-treatment-matters",
      title: "Why getting help changes the picture",
      summary:
        "Untreated depression can have serious consequences, but the central message is hopeful: depression is treatable, and getting help substantially reduces these risks and improves outcomes.",
      detail:
        "It is important to understand the potential consequences of depression — not to frighten anyone, but because they underscore why depression deserves to be taken seriously and treated, and because the most powerful fact in this section is that effective treatment greatly reduces these risks. Depression that is severe, long-lasting, or untreated can affect physical health, work and relationships, and safety, and at its most serious it carries a risk of suicide. None of this is inevitable: most people with depression improve with treatment, and getting help — therapy, medication, support, and crisis resources when needed — changes the trajectory. If you recognize yourself or someone else in the entries that follow, please read them as a reason to reach out, not as a verdict. Help is available, including right now through the 988 Suicide & Crisis Lifeline (call or text 988 in the US). Depression is serious and treatable at the same time, and seeking care is the single most effective step toward a better outcome.",
      sources: [
        {
          label: "Depression — it is treatable and help reduces risk",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["complications", "overview", "hope", "mental-health"],
      caution:
        "If any of this resonates, treat it as a reason to reach out — not a verdict. In crisis, call or text 988 (US) or call 911.",
    },
    {
      id: "suicide-risk",
      title: "Suicide risk — the most serious complication",
      summary:
        "Depression is a major risk factor for suicide, which is why recognizing warning signs and getting help is so important; this risk can be reduced with treatment and support, and help is available 24/7.",
      detail:
        "The most serious complication of depression is the risk of suicide, and naming it directly — with care — matters because awareness and timely help save lives. Depression is one of the leading risk factors for suicidal thoughts and behavior, particularly when it is severe, untreated, accompanied by hopelessness, or combined with factors like substance use or access to lethal means. This is precisely why this knowledge base places crisis safety first: warning signs (such as talking about wanting to die, hopelessness, withdrawal, or seeking means) deserve to be taken seriously, and reaching out — for oneself or someone else — is the right response. Crucially, this risk is not fixed: treatment, support, safety planning, reducing access to means, and crisis resources all reduce it, and most people who experience suicidal thoughts do not go on to act on them, especially when they get support. Help is available right now: in the US, the 988 Suicide & Crisis Lifeline (call or text 988) is free, confidential, and available 24/7, and 911 is for immediate danger. If this is present for you, please reach out — you are not alone, and these feelings can pass with support.",
      sources: [
        {
          label: "Warning Signs of Suicide",
          url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide",
          publisher: "NIH / NIMH",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline",
        },
      ],
      tags: ["complications", "suicide-risk", "crisis", "red-flag", "mental-health"],
      caution:
        "If you are thinking about suicide or self-harm, please reach out now — call or text 988 (US) or call 911. Support is available 24/7, and you deserve it.",
    },
    {
      id: "physical-health-impact",
      title: "Effects on physical health",
      summary:
        "Untreated or chronic depression is linked to worse physical health — including heart disease and worse outcomes in other chronic illnesses — through both biological effects and harder self-care.",
      detail:
        "Depression does not only affect the mind; it has real effects on physical health. It is associated with an increased risk of, and worse outcomes from, several physical conditions — notably heart disease, where depression is recognized as a risk factor — and it can worsen the course of chronic illnesses such as diabetes, chronic pain, and others. The links run through several pathways: biological effects of depression (such as on stress hormones, inflammation, and the body's systems), and the practical reality that depression saps the energy and motivation needed for self-care, healthy eating, activity, sleep, and managing medications and appointments. Depression can also bring physical symptoms directly, including fatigue, changes in appetite and weight, sleep disturbance, and unexplained aches or pains. The encouraging side is that treating depression can improve both mental and physical health and help people better manage co-existing conditions, which is one reason mental and physical care are increasingly integrated. This is educational information about the mind-body connection, not a diagnosis of any individual's health.",
      sources: [
        {
          label: "Understanding the Link Between Chronic Illness and Depression",
          url: "https://www.nimh.nih.gov/health/publications/chronic-illness-mental-health",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression (major depressive disorder) — complications",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["complications", "physical-health", "heart-disease", "chronic-illness", "mental-health"],
    },
    {
      id: "functioning-and-relationships",
      title: "Effects on functioning, work, and relationships",
      summary:
        "Depression can impair concentration, energy, and motivation, affecting work, studies, finances, and relationships; it is a leading cause of disability — but these impacts often improve with treatment.",
      detail:
        "Depression can significantly affect a person's ability to function and their relationships. Symptoms like fatigue, poor concentration, indecision, loss of interest, irritability, and low motivation can interfere with work or school performance, productivity, and the capacity to keep up with responsibilities, sometimes leading to absence, financial strain, or job or academic difficulties. Globally, depression is a leading cause of disability for exactly these reasons. It can also strain relationships: withdrawal, irritability, and difficulty engaging may be misread by others, and depression can make it hard to maintain social and family connections, while isolation in turn deepens the depression. These impacts can be painful and can feed self-blame, but they are consequences of an illness, not character flaws. Importantly, they often improve substantially with treatment as symptoms lift, and supports such as workplace accommodations, couples or family therapy, and rebuilding connection gradually can help. This is educational information meant to validate these experiences and point toward help, not to define anyone's future.",
      sources: [
        {
          label: "Depressive disorder (depression) — impact and disability",
          url: "https://www.who.int/news-room/fact-sheets/detail/depression",
          publisher: "World Health Organization",
        },
        {
          label: "Depression (major depressive disorder) — complications",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["complications", "functioning", "work", "relationships", "mental-health"],
    },
    {
      id: "substance-use-and-self-medication",
      title: "Substance use and self-medication",
      summary:
        "Some people use alcohol or drugs to cope with depression, which tends to worsen it over time and can lead to substance use disorders; the two often need to be treated together.",
      detail:
        "A common and understandable response to the pain of depression is to try to numb or escape it with alcohol or other substances. While this may bring brief relief, it tends to backfire: alcohol is a depressant that worsens mood and sleep over time, substances can interfere with treatment, and repeated use to cope can develop into a substance use disorder, creating a second serious problem layered on the first. Depression and substance use disorders frequently co-occur and influence each other in both directions, which is why they are often best addressed together rather than one at a time. This is not a matter of weak willpower; it reflects how distress and these substances interact, and it deserves compassion and treatment rather than judgment. Effective, integrated help exists, and addressing substance use can be an important part of recovering from depression. Anyone who finds their use of alcohol or drugs hard to control is encouraged to raise it with a clinician. This is educational information; resources like SAMHSA's helpline can help connect people to care.",
      sources: [
        {
          label: "Depression and substance use — co-occurring conditions",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Find Help and Treatment (mental health and substance use)",
          url: "https://www.samhsa.gov/find-help",
          publisher: "SAMHSA",
        },
      ],
      tags: ["complications", "substance-use", "self-medication", "co-occurring", "mental-health"],
      caution:
        "Using alcohol or drugs to cope is common and treatable — not a moral failing. A clinician can help address depression and substance use together.",
    },
  ],
});
