import { defineSection } from "../types.js";

/**
 * OVERVIEW — what PTSD is and how the trauma- and stressor-related conditions
 * relate: post-traumatic stress disorder itself, the proposed "complex PTSD"
 * pattern after prolonged trauma, and acute stress disorder in the first month.
 * Gentle, validating, layperson-accessible framing.
 *
 * This is supportive, EDUCATIONAL information — not therapy and not a substitute
 * for professional, trauma-informed care.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview: What PTSD Is",
  description:
    "What post-traumatic stress disorder is, how it differs from a normal stress reaction, and how related conditions fit in — complex PTSD after prolonged trauma and acute stress disorder in the first month. Educational, validating, and non-judgmental.",
  entries: [
    {
      id: "what-is-ptsd",
      title: "What PTSD is",
      summary:
        "PTSD is a recognized mental health condition that can develop after experiencing or witnessing a frightening or life-threatening event, when distressing symptoms last more than a month and interfere with daily life.",
      detail:
        "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after a person goes through, witnesses, or learns about a deeply frightening, dangerous, or life-threatening event. After such an event it is normal and expected to feel shaken, on edge, or to have upsetting memories; for most people these reactions ease over the following weeks. PTSD is diagnosed when these reactions persist beyond about a month, are distressing, and get in the way of everyday life, relationships, or work. It is understood as an injury to the body's natural stress and threat-response system, not a sign of weakness or a character flaw, and anyone can develop it at any age. PTSD is common and treatable, and effective trauma-focused therapies and medications exist. This knowledge base is meant as gentle, educational background — a starting point for understanding, not a replacement for a trauma-informed clinician.",
      sources: [
        {
          label: "PTSD Basics",
          url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-Traumatic Stress Disorder (PTSD)",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["basics", "definition", "overview"],
      caution:
        "This is supportive educational information, not therapy or diagnosis. If symptoms are affecting your life, a trauma-informed mental health professional can help.",
    },
    {
      id: "normal-stress-vs-ptsd",
      title: "Normal stress reactions versus PTSD",
      summary:
        "Stress reactions after trauma are common and usually fade within weeks; PTSD is when symptoms persist, stay intense, and disrupt daily functioning.",
      detail:
        "Having a strong reaction after a traumatic event is the rule, not the exception. In the days and weeks afterward many people feel jumpy, have trouble sleeping, replay the event in their minds, feel numb, or want to avoid reminders — these are natural responses to an abnormal experience, and for most people they gradually settle as the nervous system recovers. PTSD is the term used when those reactions do not fade on their own: when, more than a month later, the symptoms remain intense, frequent, or distressing enough to interfere with relationships, work, sleep, or sense of safety. Understanding this distinction can be reassuring — early distress does not mean someone is destined to have PTSD — while also signaling when it is worth reaching out for support. There is no 'right' timeline for healing, and seeking help early is a strength, not a failure to cope.",
      sources: [
        {
          label: "Coping With Traumatic Events",
          url: "https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events",
          publisher: "NIH / National Institute of Mental Health",
        },
        {
          label: "What Is PTSD?",
          url: "https://www.ptsd.va.gov/understand/what/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["overview", "stress-reaction", "recovery"],
    },
    {
      id: "acute-stress-disorder",
      title: "Acute stress disorder (the first month)",
      summary:
        "Acute stress disorder describes PTSD-like symptoms that appear in the first days to a month after trauma; many people recover, while some go on to develop PTSD.",
      detail:
        "Acute stress disorder (ASD) is a diagnosis used for trauma-related symptoms that appear soon after an event — typically within the first three days to one month. The symptoms overlap closely with PTSD: intrusive memories, avoidance, changes in mood and thinking, heightened arousal, and often dissociation (feeling detached, dazed, or as though things are unreal). ASD recognizes that severe distress in the immediate aftermath of trauma is real and may need support, while leaving room for the natural recovery that many people experience in the weeks that follow. Some people with ASD recover fully; others go on to meet criteria for PTSD if symptoms persist past a month. Early, gentle support — feeling safe, connecting with trusted people, and access to professional help when needed — is the focus during this period, and trauma-focused cognitive behavioral approaches can help when distress is severe.",
      sources: [
        {
          label: "Acute Stress Disorder (ASD)",
          url: "https://my.clevelandclinic.org/health/diseases/24755-acute-stress-disorder",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Acute Stress Disorder",
          url: "https://www.merckmanuals.com/home/mental-health-disorders/anxiety-and-stressor-related-disorders/acute-stress-disorder",
          publisher: "Merck Manual — Consumer Version",
        },
      ],
      tags: ["acute-stress-disorder", "overview", "early"],
    },
    {
      id: "complex-ptsd",
      title: "Complex PTSD (C-PTSD)",
      summary:
        "Complex PTSD describes a pattern that can follow prolonged or repeated trauma, adding difficulties with emotions, self-worth, and relationships on top of core PTSD symptoms.",
      detail:
        "Complex PTSD (C-PTSD) is a related pattern that can develop after trauma that is prolonged, repeated, or occurs in situations a person could not easily escape — for example ongoing abuse, neglect in childhood, captivity, or sustained exposure to danger. Alongside the core PTSD symptoms, complex PTSD adds three areas of difficulty: trouble regulating emotions (intense or overwhelming feelings, or feeling shut down); a deeply negative self-concept (persistent shame, guilt, or feelings of worthlessness linked to the trauma); and difficulties in relationships (feeling distant from others or finding closeness hard). It is formally recognized in the World Health Organization's ICD-11 classification as a distinct condition; the American DSM-5 instead captures much of this within PTSD. Naming complex PTSD can be validating for people whose experiences felt larger than the standard description, and it is treatable — therapy is the main approach, often phased to build safety and coping skills before processing the trauma itself.",
      sources: [
        {
          label: "Complex PTSD",
          url: "https://www.ptsd.va.gov/understand/what/complex_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Complex PTSD (CPTSD)",
          url: "https://my.clevelandclinic.org/health/diseases/24881-cptsd-complex-ptsd",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["complex-ptsd", "overview", "c-ptsd"],
      caution:
        "Complex PTSD is treatable. A trauma-informed clinician can tailor care; this entry is educational background, not a self-diagnosis tool.",
    },
    {
      id: "who-is-affected",
      title: "Who is affected, and that recovery is possible",
      summary:
        "PTSD is common and can affect anyone exposed to trauma; most people who experience trauma do not develop it, and for those who do, effective treatments make recovery realistic.",
      detail:
        "Trauma is extremely common over a lifetime, and PTSD can affect people of any age, gender, background, or culture — not only military veterans, though it is well recognized in that group. Importantly, most people who experience a traumatic event do not go on to develop PTSD, and among those who do, it is a treatable condition rather than a permanent state. National health agencies estimate that a meaningful minority of people will experience PTSD at some point, with rates higher among those exposed to combat, assault, disasters, or repeated trauma, and somewhat higher in women than men. Effective, well-studied trauma-focused therapies and medications help many people recover or substantially improve. The two messages that matter most are that PTSD is not a personal failing, and that reaching out for trauma-informed care offers a genuine path forward.",
      sources: [
        {
          label: "Post-Traumatic Stress Disorder (PTSD)",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
        {
          label: "How Common Is PTSD in Adults?",
          url: "https://www.ptsd.va.gov/understand/common/common_adults.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["overview", "epidemiology", "recovery", "hope"],
    },
  ],
});
