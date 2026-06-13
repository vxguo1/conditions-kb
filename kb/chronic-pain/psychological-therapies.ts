import { defineSection } from "../types.js";

/**
 * PSYCHOLOGICAL THERAPIES & PAIN PSYCHOLOGY — the brain-and-behavior side of
 * pain care: why psychological treatment helps real physical pain, CBT, ACT,
 * mindfulness-based approaches, biofeedback/relaxation, and pain-neuroscience
 * education. These are mainstream, evidence-based treatments, not a suggestion
 * that pain is imaginary.
 */
export const psychologicalTherapies = defineSection({
  id: "psychological-therapies",
  title: "Psychological Therapies & Pain Psychology",
  description:
    "Evidence-based psychological treatments for real physical pain: why they work, cognitive behavioral therapy (CBT), acceptance and commitment therapy (ACT), mindfulness-based approaches, relaxation and biofeedback, and pain-neuroscience education.",
  entries: [
    {
      id: "why-psychology-helps-pain",
      title: "Why psychological therapy helps physical pain",
      summary:
        "Psychological therapies work on the same nervous-system circuits that produce pain, so they can genuinely reduce pain and disability — this is not a claim that the pain is imaginary or 'in your head.'",
      detail:
        "One of the most misunderstood parts of pain care is the role of psychology. Because pain is produced by the brain and shaped by attention, emotion, stress, and beliefs, treatments that change these factors act directly on the systems that generate pain — which is why they can reduce both pain and its impact. This is a biological effect, not a suggestion that the pain is fake or 'all in the head': the pain is entirely real, and psychological therapy is a legitimate, mainstream treatment for it, much as physical therapy treats the body. These approaches help people respond to pain in ways that reduce suffering and disability — turning down the stress and fear that amplify pain, breaking unhelpful cycles, restoring activity and sleep, and improving mood. They are often most powerful as part of a multidisciplinary plan alongside exercise and medical treatment. Referral to a pain psychologist or a pain-management program is a sign of comprehensive care, not a hint that a clinician thinks the pain is imagined.",
      sources: [
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Chronic Pain (psychological treatment in a whole-person approach)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["psychological", "pain-psychology", "overview"],
    },
    {
      id: "cbt-for-pain",
      title: "Cognitive behavioral therapy (CBT) for pain",
      summary:
        "CBT for pain helps people change unhelpful thoughts and behaviors around pain, build coping skills, and stay active; it has good evidence for improving pain, mood, and function.",
      detail:
        "Cognitive behavioral therapy is among the best-studied psychological treatments for chronic pain. It is a practical, skills-based therapy that helps people notice and change unhelpful thought patterns (such as catastrophizing — 'this pain means something terrible and will never improve') and behaviors (such as avoiding activity out of fear), which can otherwise amplify pain and disability. Through CBT, people learn coping strategies: pacing activity, relaxation, problem-solving, challenging fearful thoughts, improving sleep, and gradually returning to valued activities. The goal is not to talk the pain away but to reduce its grip on daily life and lower the distress that feeds it. Reviews find CBT can produce modest but meaningful improvements in pain, mood, and function that often persist after therapy ends, and it is recommended across many pain conditions. It is typically delivered over a series of sessions by a trained therapist, individually or in groups, and increasingly through digital programs. CBT works best as part of a broader, active pain-management plan rather than in isolation.",
      sources: [
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says (CBT)",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Non-Drug Pain Management (psychological therapies)",
          url: "https://medlineplus.gov/nondrugpainmanagement.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["psychological", "cbt", "coping", "evidence"],
      evidence: "supported",
    },
    {
      id: "act-for-pain",
      title: "Acceptance and commitment therapy (ACT)",
      summary:
        "ACT helps people pursue a meaningful life alongside pain by reducing the struggle against it and focusing on valued activities, rather than making pain reduction the only goal.",
      detail:
        "Acceptance and commitment therapy is a form of cognitive behavioral therapy increasingly used for chronic pain, with a distinctive emphasis. Rather than focusing mainly on reducing or controlling pain, ACT helps people change their relationship to pain — accepting the presence of difficult sensations and feelings without being ruled by them, and committing energy to the activities and goals that matter to them ('values-based living'). Core skills include mindfulness, 'defusion' (stepping back from unhelpful thoughts so they hold less power), and identifying what one wants life to be about despite pain. The rationale is that fighting hard against pain, or putting life on hold until it disappears, can deepen suffering and shrink a person's world; ACT aims to expand life again. Evidence supports ACT for improving function, mood, and quality of life in chronic pain, with effects comparable to traditional CBT for many outcomes. Like CBT, it is delivered by trained therapists and works as part of a comprehensive plan; it is especially helpful when complete pain relief is not realistic and the goal is living well alongside persistent pain.",
      sources: [
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says (psychological therapies)",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Chronic Pain (acceptance-based and behavioral approaches)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["psychological", "act", "acceptance", "values"],
      evidence: "supported",
    },
    {
      id: "mindfulness-based-approaches",
      title: "Mindfulness-based stress reduction and meditation",
      summary:
        "Mindfulness meditation trains nonjudgmental attention to present-moment experience and has moderate evidence for reducing chronic-pain intensity and improving coping and quality of life.",
      detail:
        "Mindfulness-based approaches, including mindfulness-based stress reduction (MBSR) and mindfulness meditation, teach people to pay attention to the present moment — including pain sensations — with openness and without judgment, rather than reacting with fear or resistance. This can change how the brain processes pain and reduce the stress and emotional reactivity that amplify it. NCCIH-reviewed research indicates that mindfulness meditation programs can modestly reduce chronic-pain intensity and improve depression symptoms and quality of life for some people, and that the practice is generally safe. It is used across conditions including chronic low back pain, fibromyalgia, and headache, often within structured 8-week programs and increasingly via apps and online courses. Mindfulness is a skill that builds with regular practice, and benefits tend to grow with consistency. It is not a cure and works best alongside exercise, medical treatment, and other psychological tools, but it is a low-risk, accessible option that gives many people a greater sense of control over their pain experience.",
      sources: [
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says (mindfulness/meditation)",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Meditation and Mindfulness: Effectiveness and Safety",
          url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["psychological", "mindfulness", "meditation", "mbsr"],
      evidence: "supported",
    },
    {
      id: "relaxation-and-biofeedback",
      title: "Relaxation training and biofeedback",
      summary:
        "Relaxation techniques and biofeedback help people reduce the muscle tension and stress response that worsen pain, and can be useful for tension headache, migraine, and other conditions.",
      detail:
        "Relaxation training and biofeedback target the physical stress response that often accompanies and amplifies chronic pain. Relaxation techniques — such as deep diaphragmatic breathing, progressive muscle relaxation, and guided imagery — help calm the nervous system, ease muscle tension, and reduce the anxiety that feeds pain; they are simple, low-risk, and can be practiced anywhere once learned. Biofeedback adds electronic sensors that show real-time information about body functions like muscle tension, heart rate, or skin temperature, helping a person learn to consciously influence them — for example, relaxing tense muscles or slowing their breathing. NCCIH notes that relaxation and biofeedback have evidence for certain conditions, particularly tension-type headache and migraine, and they can be useful components of a broader plan for other pain too. These methods give people an active coping skill and a sense of agency over their body's responses. They are usually taught by a therapist or through structured programs and, like other mind-body tools, work best with regular practice and as part of multimodal care.",
      sources: [
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says (relaxation, biofeedback)",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Non-Drug Pain Management (relaxation and biofeedback)",
          url: "https://medlineplus.gov/nondrugpainmanagement.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["psychological", "relaxation", "biofeedback", "headache"],
      evidence: "mixed",
    },
    {
      id: "pain-neuroscience-education",
      title: "Understanding pain (pain-neuroscience education)",
      summary:
        "Learning how pain actually works — that hurt does not always equal harm and that the nervous system can amplify pain — can itself reduce fear and disability and support recovery.",
      detail:
        "A growing part of modern pain care is helping people understand how pain really works, sometimes called pain-neuroscience education. The central messages are that pain is produced by the brain as a protective output, that 'hurt does not always equal harm' (especially in persistent pain where tissues have healed), and that the nervous system can become oversensitized so that it amplifies signals. Understanding this can be therapeutic in itself: it reduces the fear, catastrophizing, and avoidance that worsen pain and disability, and it makes the rationale for active treatments — gradually resuming movement, pacing, addressing sleep and stress — make sense, which improves engagement and outcomes. This education does not replace other treatments; it sets the stage for them by reframing pain from a sign of ongoing damage to be feared into a changeable, modifiable experience that a person can influence. It is delivered by clinicians, physical therapists, psychologists, and pain programs, and reputable patient resources reinforce the same ideas. Knowing that the pain system can be retrained gives many people both reassurance and a reason for hope.",
      sources: [
        {
          label: "Pain (the science of pain and chronic pain)",
          url: "https://www.ninds.nih.gov/health-information/disorders/pain",
          publisher: "NIH / NINDS",
        },
        {
          label: "9 Things You Should Know About Chronic Pain and Complementary Health Approaches",
          url: "https://www.nccih.nih.gov/health/tips/things-you-should-know-about-chronic-pain-and-complementary-health-approaches",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["psychological", "education", "pain-neuroscience", "self-management"],
    },
  ],
});
