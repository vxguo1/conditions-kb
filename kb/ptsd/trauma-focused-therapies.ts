import { defineSection } from "../types.js";

/**
 * TRAUMA-FOCUSED PSYCHOTHERAPIES — the first-line treatments for PTSD, given
 * their own section because they are central: Prolonged Exposure (PE),
 * Cognitive Processing Therapy (CPT), Eye Movement Desensitization and
 * Reprocessing (EMDR), and trauma-focused CBT, plus what "trauma-focused" means
 * and what to expect.
 *
 * Described gently and without graphic detail. Educational — these therapies are
 * delivered by trained professionals.
 */
export const traumaFocusedTherapies = defineSection({
  id: "trauma-focused-therapies",
  title: "Trauma-Focused Psychotherapies (First-Line)",
  description:
    "The first-line treatments for PTSD: Prolonged Exposure (PE), Cognitive Processing Therapy (CPT), EMDR, and trauma-focused CBT — what they are, how they help, and what to expect. Educational; these are delivered by trained clinicians.",
  entries: [
    {
      id: "what-is-trauma-focused-therapy",
      title: "What 'trauma-focused' therapy means",
      summary:
        "Trauma-focused therapies directly help a person process the traumatic memory and the beliefs and reactions around it, and they are the most effective, recommended treatments for PTSD.",
      detail:
        "Trauma-focused psychotherapies are talk therapies that work directly with the traumatic experience — the memory, the meaning a person has made of it, and the reactions it triggers — rather than only the general symptoms. Major guidelines, including the VA/DoD Clinical Practice Guideline, recommend them as the first-line treatment for PTSD because they have the strongest evidence for lasting recovery, often outperforming medication for durability of benefit. The best-supported approaches include Prolonged Exposure (PE), Cognitive Processing Therapy (CPT), and Eye Movement Desensitization and Reprocessing (EMDR). They are time-limited (commonly around 8 to 15 sessions), structured, and done collaboratively with a trained therapist who paces the work to keep it tolerable. It is normal to feel apprehensive about approaching painful material; good trauma-focused therapy builds safety and skills and moves at a manageable pace, and many people find the distress eases as the memory is processed. These therapies are delivered by trained professionals — this section is educational background to help someone understand the options.",
      sources: [
        {
          label: "PTSD Treatment Basics (trauma-focused psychotherapies recommended)",
          url: "https://www.ptsd.va.gov/understand_tx/tx_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Talk Therapy for PTSD",
          url: "https://www.ptsd.va.gov/understand_tx/talk_therapy.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["therapy", "trauma-focused", "first-line", "psychotherapy"],
      evidence: "established",
    },
    {
      id: "prolonged-exposure",
      title: "Prolonged Exposure (PE)",
      summary:
        "Prolonged Exposure helps a person gradually and safely approach trauma-related memories, feelings, and situations they have been avoiding, so the distress lessens over time.",
      detail:
        "Prolonged Exposure (PE) is a trauma-focused therapy built on the understanding that avoidance, while natural, keeps fear alive. With a trained therapist, and always at a pace the person can manage, PE gently and gradually helps someone approach what they have been avoiding — both the memory of the trauma (by recounting it in a safe setting and learning to tolerate the feelings it brings) and safe real-world situations, places, or activities that have been avoided because they are reminders. The idea is that, with repeated, supported approach, the memory and the reminders lose their power to overwhelm, and the nervous system learns that the present is safe. PE also includes education about trauma reactions and breathing skills. It is one of the most strongly evidence-based treatments for PTSD. Approaching painful material can feel daunting, which is why the therapist structures it carefully and collaboratively; many people find that the temporary discomfort gives way to meaningful, lasting relief.",
      sources: [
        {
          label: "Prolonged Exposure (PE) for PTSD",
          url: "https://www.ptsd.va.gov/understand_tx/prolonged_exposure.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Talk Therapy for PTSD (Prolonged Exposure)",
          url: "https://www.ptsd.va.gov/understand_tx/talk_therapy.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["therapy", "prolonged-exposure", "pe", "exposure", "first-line"],
      evidence: "established",
    },
    {
      id: "cognitive-processing-therapy",
      title: "Cognitive Processing Therapy (CPT)",
      summary:
        "CPT helps a person identify and gently shift the unhelpful, stuck beliefs that trauma can create — about safety, trust, blame, and self-worth — to reduce their grip.",
      detail:
        "Cognitive Processing Therapy (CPT) focuses on the thoughts and beliefs that trauma can leave behind. After a traumatic event, people often develop 'stuck points' — painful, rigid conclusions such as 'it was my fault,' 'I can't trust anyone,' or 'the world is entirely dangerous' — that keep distress alive and shape how they see themselves and the world. In CPT, a trained therapist helps the person examine these beliefs, notice where they may be inaccurate or unbalanced, and gently develop more accurate and helpful ways of thinking, often using writing exercises and structured worksheets. It does not ask anyone to pretend the trauma was acceptable or to 'think positively'; rather, it helps untangle the unhelpful conclusions that trauma can impose. CPT is among the most strongly recommended treatments for PTSD and works particularly well for the guilt, shame, and negative-belief side of the condition. Like other trauma-focused therapies, it is time-limited, structured, and collaborative, and it is delivered by a trained clinician.",
      sources: [
        {
          label: "Cognitive Processing Therapy (CPT) for PTSD",
          url: "https://www.ptsd.va.gov/understand_tx/cognitive_processing.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Talk Therapy for PTSD (Cognitive Processing Therapy)",
          url: "https://www.ptsd.va.gov/understand_tx/talk_therapy.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["therapy", "cpt", "cognitive", "beliefs", "first-line"],
      evidence: "established",
    },
    {
      id: "emdr",
      title: "Eye Movement Desensitization and Reprocessing (EMDR)",
      summary:
        "EMDR helps a person process a traumatic memory while engaging in guided back-and-forth eye movements or other bilateral stimulation, reducing the memory's distressing charge.",
      detail:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a trauma-focused therapy in which a person brings a traumatic memory to mind while following a back-and-forth stimulus — typically the therapist's finger moving side to side, a light bar, or alternating taps or tones. Over a series of sessions, this guided process is thought to help the brain reprocess the memory so that it becomes less vivid, less emotionally overwhelming, and more clearly located in the past, while the person also works toward more adaptive beliefs about themselves. Unlike Prolonged Exposure, EMDR does not require detailed retelling of the event or homework between sessions, which some people find more approachable. It is recommended by the VA/DoD guideline and recognized internationally as an effective PTSD treatment, with evidence comparable to trauma-focused cognitive behavioral therapies. EMDR should be delivered by a clinician specifically trained in it. As with all these approaches, the right fit depends on the person, and the choice is made together with a professional.",
      sources: [
        {
          label: "Eye Movement Desensitization and Reprocessing (EMDR) for PTSD",
          url: "https://www.ptsd.va.gov/understand_tx/emdr.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Talk Therapy for PTSD (EMDR)",
          url: "https://www.ptsd.va.gov/understand_tx/talk_therapy.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["therapy", "emdr", "reprocessing", "first-line"],
      evidence: "established",
    },
    {
      id: "trauma-focused-cbt",
      title: "Trauma-focused CBT and related approaches",
      summary:
        "Trauma-focused cognitive behavioral therapy is an umbrella of evidence-based approaches (including a well-established version for children and teens) that address trauma-related thoughts, feelings, and behaviors.",
      detail:
        "Trauma-focused cognitive behavioral therapy (TF-CBT) is a broad family of evidence-based talk therapies that help people change the unhelpful thoughts, feelings, and behaviors connected to trauma; Prolonged Exposure and Cognitive Processing Therapy are specific, well-studied members of this family for adults. A distinct, strongly evidence-based program called Trauma-Focused CBT was developed specifically for children and adolescents (and their caregivers), combining trauma-sensitive skills, gradual processing of the trauma, and parental involvement, and it is a leading treatment for young people with PTSD. Other related approaches a clinician may use include cognitive therapy for PTSD and, for some, Written Exposure Therapy, a brief structured writing-based treatment. The common thread is that they directly engage the trauma and its effects, are structured and time-limited, and have good supporting evidence. Which approach fits best depends on the person's age, symptoms, and preferences, and is decided with a trained professional; this entry simply maps the landscape so the options feel less mysterious.",
      sources: [
        {
          label: "Overview of Psychotherapy for PTSD (trauma-focused CBTs)",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/overview_therapy.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Helping Children and Adolescents Cope With Traumatic Events",
          url: "https://www.nimh.nih.gov/health/publications/helping-children-and-adolescents-cope-with-disasters-and-other-traumatic-events",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["therapy", "tf-cbt", "cbt", "children", "first-line"],
      evidence: "established",
    },
    {
      id: "what-to-expect-finding-therapist",
      title: "What to expect and finding a therapist",
      summary:
        "Trauma-focused therapy is structured, time-limited, and collaborative; finding a trained, trauma-informed therapist and a good fit matters, and it is okay to ask questions before starting.",
      detail:
        "Knowing what therapy involves can make starting feel less intimidating. Trauma-focused therapies are usually time-limited (often roughly 8 to 15 weekly sessions), structured, and collaborative — the therapist explains the approach, sets goals with the person, and paces the work so it stays manageable. Some temporary increase in distress can occur as difficult material is approached, but a skilled therapist builds safety and coping skills and adjusts the pace; therapy should never feel like being forced through something overwhelming. Finding the right therapist matters: it helps to look for someone trained in an evidence-based, trauma-focused method, and to ask about their approach, experience, and what sessions will be like. Feeling a sense of trust and fit with the therapist is itself important to outcomes, and it is reasonable to try another provider if the fit isn't right. Resources such as the National Center for PTSD's treatment decision aid and provider directories from professional organizations can help. Reaching out — even just to ask questions — is a meaningful first step.",
      sources: [
        {
          label: "Understanding PTSD Treatment (what to expect; finding care)",
          url: "https://www.ptsd.va.gov/understand_tx/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Psychotherapies (finding evidence-based therapy)",
          url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["therapy", "what-to-expect", "finding-help", "trauma-informed"],
    },
  ],
});
