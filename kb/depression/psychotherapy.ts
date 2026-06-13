import { defineSection } from "../types.js";

/**
 * PSYCHOTHERAPY — the main evidence-based talk therapies for depression: how
 * therapy helps, cognitive behavioral therapy (CBT), behavioral activation,
 * interpersonal therapy (IPT), and other approaches, plus how to find help.
 *
 * Compassionate and educational. Describing therapy types is NOT delivering
 * therapy; this knowledge base is not a therapist or a substitute for care.
 */
export const psychotherapy = defineSection({
  id: "psychotherapy",
  title: "Psychotherapy (Talk Therapy)",
  description:
    "Evidence-based talk therapies for depression — how therapy helps, cognitive behavioral therapy (CBT), behavioral activation, interpersonal therapy (IPT), and other approaches — plus how to access care. Educational; not a substitute for working with a therapist.",
  entries: [
    {
      id: "how-therapy-helps",
      title: "How psychotherapy helps depression",
      summary:
        "Psychotherapy is a proven treatment for depression that helps people understand and change unhelpful thoughts and behaviors, process difficulties, build coping skills, and feel less alone — alone or alongside medication.",
      detail:
        "Psychotherapy, or 'talk therapy,' is an effective, evidence-based treatment for depression that can be used on its own for milder depression or combined with medication for moderate to severe depression. Working with a trained professional, a person can come to understand what contributes to their depression, learn to recognize and shift unhelpful thinking and behavior patterns, develop coping and problem-solving skills, work through painful experiences and relationships, and set realistic goals — all within a confidential, non-judgmental relationship that itself reduces isolation. Several specific approaches have good evidence for depression, and many therapists blend techniques to fit the person. Therapy is collaborative and takes some time and effort, and the fit between person and therapist matters; it is reasonable to seek a different therapist if the relationship is not working. The goal is not just symptom relief but durable skills and understanding that can reduce the risk of relapse. This section describes therapy approaches for understanding; it is not therapy itself, and connecting with a qualified professional is the way to benefit from it.",
      sources: [
        {
          label: "Psychotherapies — overview",
          url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression — psychotherapy",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["psychotherapy", "therapy", "treatment", "mental-health"],
      caution:
        "This explains therapy types for understanding — it is not therapy and not a substitute for working with a qualified professional.",
    },
    {
      id: "cbt",
      title: "Cognitive behavioral therapy (CBT)",
      summary:
        "CBT is one of the most studied therapies for depression; it helps people notice and question inaccurate or unhelpful thought patterns and change self-defeating behaviors, with practical skills to use day to day.",
      detail:
        "Cognitive behavioral therapy (CBT) is among the best-researched and most widely used psychotherapies for depression. It is based on the idea that thoughts, feelings, and behaviors are connected, and that depression is maintained by patterns of inaccurate or unhelpful thinking and by withdrawal from rewarding activities. In CBT, a person learns to become aware of automatic negative thoughts, examine and question them rather than accepting them as fact, understand how those thoughts affect emotions and behavior, and gradually change self-defeating behavior patterns. It is typically structured, goal-oriented, and time-limited, often involving 'homework' to practice skills between sessions, and it equips people with tools they can keep using after therapy ends. CBT can be delivered in person, in groups, or through guided online programs, which broadens access. Its strong evidence base and practical, skill-building nature make it a common first-choice therapy. As with all therapy, the right approach for an individual is best determined with a professional; this is educational background.",
      sources: [
        {
          label: "Psychotherapies — cognitive behavioral therapy",
          url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["psychotherapy", "cbt", "treatment", "mental-health"],
      evidence: "established",
    },
    {
      id: "behavioral-activation",
      title: "Behavioral activation",
      summary:
        "Behavioral activation helps counter the withdrawal and inactivity of depression by gradually and deliberately re-engaging with meaningful, rewarding, or routine activities, which can lift mood over time.",
      detail:
        "Behavioral activation is a focused, evidence-based approach — used within CBT or on its own — that targets a core feature of depression: the tendency to withdraw from activities, which reduces opportunities for reward and reinforcement and deepens low mood in a downward spiral. Rather than waiting to 'feel like it,' a person works with their therapist to schedule and gradually increase engagement in activities that are meaningful, pleasurable, or simply part of a healthy routine, starting small and building up, and noticing the effect on mood. Over time, re-engaging with valued activities tends to improve mood and motivation, reversing the spiral. Behavioral activation is practical, can be relatively straightforward to learn, and has good evidence for depression, including in less complex or guided-self-help formats. It pairs naturally with the lifestyle measures (activity, routine, connection) discussed elsewhere. As an approach, it is most effective when guided by a trained professional who can tailor it; this entry is educational, to convey the idea that gentle, structured re-engagement is a recognized therapeutic strategy, not just generic advice to 'stay busy.'",
      sources: [
        {
          label: "Psychotherapies — behavioral approaches",
          url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — talking therapies and self-help",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["psychotherapy", "behavioral-activation", "treatment", "mental-health"],
      evidence: "established",
    },
    {
      id: "ipt",
      title: "Interpersonal therapy (IPT)",
      summary:
        "Interpersonal therapy focuses on how relationships and life transitions affect mood, helping people improve communication, navigate role changes, and address grief or conflict that contribute to depression.",
      detail:
        "Interpersonal therapy (IPT) is a structured, time-limited psychotherapy with good evidence for depression that centers on the connections between mood and a person's relationships and social roles. It works from the observation that depression often arises in the context of interpersonal difficulties — grief and loss, disputes and conflicts, major role transitions (such as a new job, becoming a parent, divorce, or retirement), and social isolation — and that improving these areas can relieve depression. In IPT, the person and therapist identify the interpersonal issues most tied to the current episode and work on practical strategies: improving communication, building or strengthening support, working through grief, and adapting to change. IPT is often used for depression, including perinatal depression, and can be delivered individually or in groups. Like other therapies, it is collaborative and tailored to the individual by a trained professional. This description is educational, to illustrate that addressing relationships and life transitions is a recognized, effective route to recovery, not a lesser alternative to other therapies.",
      sources: [
        {
          label: "Psychotherapies — interpersonal therapy",
          url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["psychotherapy", "ipt", "interpersonal", "treatment", "mental-health"],
      evidence: "established",
    },
    {
      id: "other-therapies",
      title: "Other therapy approaches",
      summary:
        "Additional evidence-informed approaches — including mindfulness-based cognitive therapy, problem-solving therapy, psychodynamic therapy, and acceptance and commitment therapy — can help depression, often tailored to the person.",
      detail:
        "Beyond CBT, behavioral activation, and IPT, several other psychotherapy approaches can help with depression, and therapists often integrate elements of more than one. Mindfulness-based cognitive therapy (MBCT) combines mindfulness practices with cognitive techniques and has particular evidence for helping prevent relapse in people with recurrent depression. Problem-solving therapy teaches a structured method for tackling life problems that feel overwhelming. Acceptance and commitment therapy (ACT) focuses on accepting difficult thoughts and feelings while committing to valued actions. Psychodynamic therapy explores how past experiences and unconscious patterns shape current feelings and relationships. Supportive counseling, group therapy, and family or couples therapy also have roles depending on the situation. The 'best' therapy is less about a single superior method and more about a good match between the approach, the therapist, and the individual's needs and preferences. A mental-health professional can help identify a suitable approach; this overview is educational, to show the breadth of legitimate options available.",
      sources: [
        {
          label: "Psychotherapies — types of psychotherapy",
          url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["psychotherapy", "mbct", "act", "psychodynamic", "treatment", "mental-health"],
      evidence: "supported",
    },
    {
      id: "finding-therapy-and-access",
      title: "Finding therapy and getting access",
      summary:
        "Therapy can be reached through a primary care provider, insurance directories, community mental-health services, or self-referral where available; cost and access barriers are real, but lower-cost and online options exist.",
      detail:
        "Connecting with therapy can feel daunting, but several routes exist. A primary care provider can assess depression and refer to mental-health services. Insurance plans typically have directories of covered therapists, and many areas have community mental-health centers, university clinics, and sliding-scale or low-cost services for those without coverage. In some health systems, people can self-refer directly to talk-therapy services without going through a doctor first. Telehealth and reputable online therapy and guided self-help programs have expanded access, including for people in rural areas or with limited time. When choosing a therapist, it is reasonable to consider their training, the approach they use, and — importantly — whether the person feels comfortable and understood, since the working relationship strongly affects outcomes; it is okay to try someone else if the fit is poor. Cost, waitlists, and availability can be genuine barriers, and it can take persistence; primary care providers, helplines, and patient-advocacy organizations can help navigate options. This is educational guidance, not a referral or endorsement of any specific service.",
      sources: [
        {
          label: "Psychotherapies — finding a therapist and what to consider",
          url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
          publisher: "NIH / NIMH",
        },
        {
          label: "How to Find Mental Health Help (SAMHSA / FindTreatment)",
          url: "https://www.samhsa.gov/find-help",
          publisher: "SAMHSA",
        },
      ],
      tags: ["psychotherapy", "access", "finding-help", "mental-health"],
    },
  ],
});
