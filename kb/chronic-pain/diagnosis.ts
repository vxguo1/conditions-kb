import { defineSection } from "../types.js";

/**
 * DIAGNOSIS & ASSESSMENT — there is no blood test or scan that measures pain;
 * assessment rests on the person's own report, history, exam, function, and
 * targeted tests to find treatable causes and rule out danger. Also covers pain
 * scales, functional assessment, screening for mood and risk, and the limits of
 * imaging.
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Diagnosis & Assessment",
  description:
    "How chronic pain is assessed when no test can measure it: history and exam, self-report pain scales, functional impact, screening for mood and opioid risk, why imaging often misleads, and identifying the pain type to guide treatment.",
  entries: [
    {
      id: "no-objective-test",
      title: "There is no test that measures pain",
      summary:
        "Pain is a personal experience with no blood test or scan that can measure it, so assessment relies mainly on what the person reports, supported by history, examination, and targeted tests.",
      detail:
        "Unlike blood pressure or blood sugar, pain cannot be measured by any laboratory test or scan — it is a subjective experience known only to the person feeling it. This is a defining challenge of pain care: the most reliable information is the person's own description of their pain. A good assessment therefore centers on a careful history (where the pain is, what it feels like, when it started, what makes it better or worse, how it changes through the day) and its impact on sleep, mood, work, and daily activities, combined with a physical examination and, when needed, targeted tests. Investigations such as blood tests or imaging are used not to 'see' the pain but to look for treatable underlying causes and to rule out serious conditions. Because the person's report is central, being believed and taken seriously is itself part of good care — and dismissing pain because tests are normal is a known pitfall, since many real pain conditions, including neuropathic and nociplastic pain, leave no visible mark on standard tests.",
      sources: [
        {
          label: "Chronic Pain (diagnosis relies on history and self-report)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Pain (assessment of chronic pain)",
          url: "https://www.ninds.nih.gov/health-information/disorders/pain",
          publisher: "NIH / NINDS",
        },
      ],
      tags: ["diagnosis", "assessment", "self-report"],
    },
    {
      id: "pain-history-and-exam",
      title: "The pain history and physical exam",
      summary:
        "A structured history and exam — covering the pain's location, quality, timing, triggers, and impact, plus a focused physical examination — is the foundation of figuring out what kind of pain it is and what may help.",
      detail:
        "Assessment usually begins with a detailed pain history. Clinicians ask about the site and spread of pain, its character (aching, burning, shooting, throbbing), severity, timing and pattern, what aggravates and eases it, associated symptoms (numbness, weakness, stiffness), and — importantly — how it affects sleep, mood, relationships, work, and the activities the person values. Past treatments and their effects, other medical conditions, and current medications (including any opioids, sedatives, and supplements) are reviewed. A focused physical examination follows, checking the painful area, range of movement, strength, reflexes, and sensation, and looking for signs that point to a specific cause or to neuropathic features. The goal is not only to label the pain but to understand its mechanism and its effect on the person's life, since both shape the plan. This thorough, person-centered evaluation often reveals more than any scan, and it is the basis for the shared, realistic goals that effective chronic-pain care is built around.",
      sources: [
        {
          label: "Chronic Pain (clinical evaluation and history)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "Chronic Pain: What It Is, Symptoms, Treatment & Management",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["diagnosis", "history", "examination", "assessment"],
    },
    {
      id: "pain-scales-and-function",
      title: "Pain scales and measuring function",
      summary:
        "Tools like the 0–10 pain scale and questionnaires help track pain over time, but measuring how pain affects function — sleep, activity, and daily life — is often more useful than the number alone.",
      detail:
        "Because pain cannot be measured directly, clinicians use rating tools to capture and track it. The simplest is a numeric rating scale (0 = no pain, 10 = worst imaginable pain); visual analog scales and faces scales serve similar purposes, and the latter help children or people who find numbers hard. More detailed questionnaires assess the quality of pain, its interference with daily life, and features suggesting neuropathic pain. Increasingly, the emphasis is on function and quality of life rather than the pain score alone: how well a person sleeps, moves, works, and does what matters to them is often a better guide to whether treatment is helping, since a realistic goal in chronic pain is usually a meaningful reduction in suffering and improvement in function rather than zero pain. Tracking these measures over time — sometimes in a pain diary — helps the person and care team see patterns, evaluate treatments honestly, and adjust the plan. The numbers are tools for conversation and tracking, not a competition or a test to pass.",
      sources: [
        {
          label: "Chronic Pain (pain scales and functional assessment)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "Pain (measuring and tracking pain)",
          url: "https://medlineplus.gov/pain.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["diagnosis", "pain-scale", "function", "assessment"],
    },
    {
      id: "identifying-pain-type",
      title: "Identifying the pain type to guide treatment",
      summary:
        "Part of assessment is working out whether pain is mainly nociceptive, neuropathic, or nociplastic — and often a mix — because the type strongly shapes which medicines and therapies are likely to help.",
      detail:
        "A key job of assessment is to characterize the pain mechanism, because nociceptive, neuropathic, and nociplastic pain respond to different treatments. Burning, shooting, electric, or tingling pain with numbness suggests a neuropathic component, and screening questionnaires plus the exam help identify it. Aching, throbbing pain tied to a joint, muscle, or inflamed tissue suggests nociceptive pain. Widespread pain with heightened sensitivity, fatigue, poor sleep, and normal tests suggests nociplastic pain such as fibromyalgia. In practice, many people have 'mixed' pain — for example chronic low back pain can combine nociceptive, neuropathic, and nociplastic elements — so clinicians weigh the dominant features rather than forcing a single label. Getting this right matters: anti-inflammatories help inflammatory nociceptive pain but little for neuropathic or nociplastic pain, whereas drugs like duloxetine, gabapentin, or pregabalin and nervous-system-focused therapies are central for the latter. Matching treatment to mechanism is one of the most useful things a careful assessment delivers.",
      sources: [
        {
          label: "IASP Terminology (mechanistic descriptors of pain)",
          url: "https://www.iasp-pain.org/resources/terminology/",
          publisher: "International Association for the Study of Pain (IASP)",
        },
        {
          label: "Types of Pain (matching type to treatment)",
          url: "https://pain.ucsf.edu/understanding-pain-pain-basics/types-pain",
          publisher: "UCSF Pain Management",
        },
      ],
      tags: ["diagnosis", "pain-type", "neuropathic", "nociplastic", "assessment"],
    },
    {
      id: "imaging-limits",
      title: "Why scans can mislead in chronic pain",
      summary:
        "Imaging like X-rays and MRIs often shows 'abnormalities' that are common in pain-free people and may not be the cause of pain, so routine scans are usually not recommended for ordinary back and joint pain.",
      detail:
        "It is natural to want a scan to 'find the cause' of chronic pain, but imaging frequently misleads. Studies show that findings often labeled abnormal — disc bulges, degeneration, arthritis changes — are extremely common in people with no pain at all, and their prevalence rises with age. As a result, a scan may reveal something that is not actually the source of the pain, leading to unnecessary worry, more tests, or even procedures that do not help. For these reasons, guidelines generally advise against routine imaging for common low back pain and similar conditions in the absence of red-flag features (such as signs of serious nerve compression, infection, fracture, or cancer). Imaging has an important role when the history and exam raise specific concerns or when results would change management. Understanding this helps explain why a clinician may not order a scan even when pain is severe — not because the pain is doubted, but because the scan is unlikely to help and can sometimes cause harm. Decisions about imaging belong with the care team based on the individual picture.",
      sources: [
        {
          label: "Low back pain - chronic (when imaging is and isn't needed)",
          url: "https://medlineplus.gov/ency/article/007422.htm",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Chronic Pain (limitations of imaging)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["diagnosis", "imaging", "low-back-pain", "assessment"],
    },
    {
      id: "screening-mood-and-risk",
      title: "Screening for mood, sleep, and medication risk",
      summary:
        "Good assessment screens for depression, anxiety, and sleep problems that travel with pain, and — before considering opioids — assesses the person's risk of harm from them, as recommended by national guidance.",
      detail:
        "Because chronic pain so often coexists with depression, anxiety, and sleep disturbance — each of which worsens pain and is treatable — comprehensive assessment screens for these and for the impact of pain on mental health. Identifying and addressing them is part of effective pain care, not an add-on. Assessment also weighs the safety of treatments. The CDC's clinical practice guideline emphasizes that before starting or continuing opioids, clinicians should evaluate the balance of benefits and risks for the individual, discuss realistic goals, and assess factors that raise the risk of harm — such as a history of substance use disorder, mental health conditions, sleep apnea, older age, and concurrent use of benzodiazepines or other sedatives. Strategies like checking prescription drug monitoring programs, offering naloxone to those at higher overdose risk, and arranging follow-up are recommended. This is not about denying treatment but about tailoring it safely. All of these assessments feed into a shared, individualized plan made with the care team, never a one-size-fits-all rule.",
      sources: [
        {
          label: "2022 CDC Clinical Practice Guideline (assessing risk and benefits before opioids)",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
        {
          label: "Chronic Pain (screening for depression, anxiety, and sleep)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["diagnosis", "screening", "depression", "opioid-risk", "safety"],
    },
  ],
});
