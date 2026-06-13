import { defineSection } from "../types.js";

/**
 * DIAGNOSIS — how PTSD is recognized: the DSM-5 framework and its four symptom
 * clusters (intrusion, avoidance, negative changes in cognition and mood, and
 * arousal/reactivity), the duration and impact requirements, and the screening
 * tools (such as the PC-PTSD-5) used as a first step.
 *
 * Symptoms are described gently and clinically, with no graphic trauma detail.
 * Educational — diagnosis belongs with a qualified professional.
 */
export const diagnosis = defineSection({
  id: "diagnosis",
  title: "Diagnosis & Symptom Clusters",
  description:
    "How PTSD is recognized: the DSM-5 framework, the four symptom clusters (intrusion, avoidance, negative changes in thinking and mood, and changes in arousal and reactivity), duration and impact, and screening tools like the PC-PTSD-5.",
  entries: [
    {
      id: "how-ptsd-is-diagnosed",
      title: "How PTSD is diagnosed",
      summary:
        "A qualified professional diagnoses PTSD through a careful clinical interview using established criteria, considering symptoms, their duration (over a month), and their impact on daily life.",
      detail:
        "PTSD is diagnosed by a qualified mental health or medical professional, typically through a careful, compassionate clinical interview rather than any single test or scan. In the United States the framework most often used is the DSM-5 (the American Psychiatric Association's diagnostic manual), which requires exposure to a traumatic event plus a characteristic set of symptoms across four groups, lasting more than a month, causing significant distress or difficulty functioning, and not better explained by substances or another condition. Clinicians may use structured interviews and questionnaires to support the assessment and to track symptoms over time. The aim is not to label a person but to understand their experience well enough to offer the right support and effective treatment. A thorough evaluation also looks for common companions of PTSD — such as depression, anxiety, substance use, and sleep problems — so that care addresses the whole picture. This section is educational; only a professional can make or rule out a diagnosis.",
      sources: [
        {
          label: "Post-traumatic stress disorder (PTSD) — diagnosis",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/diagnosis-treatment/drc-20355973",
          publisher: "Mayo Clinic",
        },
        {
          label: "PTSD — how is PTSD measured / DSM-5",
          url: "https://www.ptsd.va.gov/understand/what/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["diagnosis", "dsm-5", "assessment"],
      caution:
        "Only a qualified professional can diagnose PTSD. This is educational information, not a self-diagnosis checklist.",
    },
    {
      id: "cluster-intrusion",
      title: "Symptom cluster 1: intrusion (re-experiencing)",
      summary:
        "Intrusion symptoms are unwanted re-experiencing of the trauma — distressing memories, nightmares, or flashbacks that can feel as if the event is happening again.",
      detail:
        "The first DSM-5 symptom group is intrusion, sometimes called re-experiencing. This is the trauma 'coming back' uninvited: distressing memories that push their way in, upsetting dreams or nightmares, and flashbacks in which a person feels, to varying degrees, as if the event is happening again in the present. Intrusion also includes intense emotional distress and strong physical reactions — a racing heart, sweating, panic — when something brings the trauma to mind. These experiences are not a sign that someone is 'going backward' or losing control; they reflect the way traumatic memories can stay vivid and poorly filed in the past, so reminders trigger the body's alarm. For many people, this cluster is the most frightening and exhausting part of PTSD. The good news is that intrusion symptoms tend to respond well to trauma-focused therapies, which help the memory become something a person can hold without being overwhelmed by it.",
      sources: [
        {
          label: "PTSD Basics — re-experiencing symptoms",
          url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — intrusive memories",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["diagnosis", "intrusion", "flashbacks", "symptom-cluster"],
    },
    {
      id: "cluster-avoidance",
      title: "Symptom cluster 2: avoidance",
      summary:
        "Avoidance means steering clear of reminders of the trauma — people, places, activities, thoughts, or feelings that bring it to mind.",
      detail:
        "The second symptom group is avoidance: an understandable effort to stay away from anything that reawakens the trauma. This can mean avoiding external reminders — certain places, people, activities, conversations, or situations connected to the event — and also avoiding internal reminders, such as trying hard not to think or talk about what happened or to feel the emotions attached to it. Avoidance often makes complete sense in the short term, because reminders are painful; the difficulty is that, over time, it can shrink a person's life, keep the fear from ever settling, and stop the natural processing that helps a memory lose its grip. Someone may stop driving, withdraw from loved ones, or give up activities they once enjoyed. Recognizing avoidance is important because it is so common and because gently, safely reducing it — at the person's own pace, often with a therapist's support — is a central part of recovery.",
      sources: [
        {
          label: "PTSD Basics — avoidance symptoms",
          url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — avoidance",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["diagnosis", "avoidance", "symptom-cluster"],
    },
    {
      id: "cluster-negative-cognitions-mood",
      title: "Symptom cluster 3: negative changes in thinking and mood",
      summary:
        "This cluster includes persistent negative beliefs, guilt or shame, feeling detached or numb, loss of interest, and difficulty experiencing positive emotions.",
      detail:
        "The third symptom group covers negative changes in thoughts and mood that begin or worsen after the trauma. People may hold persistent negative beliefs about themselves, others, or the world ('I can't trust anyone,' 'the world is completely dangerous,' 'it was my fault'), experience strong and undeserved guilt or shame, and have trouble remembering parts of the event. Emotionally, there can be a lasting low or fearful mood, loss of interest in activities that once mattered, feeling cut off or distant from other people, and difficulty feeling positive emotions such as love, joy, or closeness — sometimes described as numbness. These shifts can be confusing and isolating, and they are easy to mistake for a personality change or for depression (which often co-occurs). It helps to know that they are recognized features of PTSD, not character flaws, and that therapies such as Cognitive Processing Therapy specifically target the stuck, painful beliefs that trauma can leave behind.",
      sources: [
        {
          label: "PTSD Basics — negative changes in thoughts and feelings",
          url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — negative changes in thinking and mood",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["diagnosis", "negative-cognitions", "mood", "symptom-cluster"],
    },
    {
      id: "cluster-arousal-reactivity",
      title: "Symptom cluster 4: changes in arousal and reactivity (hyperarousal)",
      summary:
        "Hyperarousal symptoms include feeling on edge, easily startled, irritable, having trouble sleeping or concentrating, and being constantly watchful for danger.",
      detail:
        "The fourth symptom group is changes in arousal and reactivity, often called hyperarousal — the sense of being keyed up and on guard. This includes being easily startled (jumping at sudden noises), feeling tense or 'on edge' much of the time, and staying constantly watchful for danger (hypervigilance), as if the threat could return at any moment. It also includes irritability or angry outbursts that feel out of proportion, difficulty concentrating, trouble falling or staying asleep, and sometimes reckless or self-destructive behavior. These symptoms reflect a nervous system stuck in alarm mode, and they are physically and emotionally draining, often spilling over into work, relationships, and sleep. Recognizing hyperarousal as part of PTSD — rather than as someone simply being 'angry,' 'difficult,' or 'unable to relax' — opens the door to approaches that help calm the system, including grounding skills, sleep support, therapy, and, for some people, medication.",
      sources: [
        {
          label: "PTSD Basics — arousal and reactivity symptoms",
          url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — changes in physical and emotional reactions",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["diagnosis", "hyperarousal", "arousal", "symptom-cluster"],
    },
    {
      id: "screening-pc-ptsd-5",
      title: "Screening tools (PC-PTSD-5) and what they do",
      summary:
        "Short screens like the PC-PTSD-5 are quick questionnaires that flag people who may have PTSD; a positive screen prompts a full evaluation but is not itself a diagnosis.",
      detail:
        "Because PTSD is common and treatable but often missed, brief screening questionnaires are widely used as a first step, especially in primary care. The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5) is a five-item yes/no screen, preceded by a question about whether a person has experienced a traumatic event; it asks, for the past month, about things like nightmares, avoidance, being on guard, feeling numb or detached, and guilt or self-blame. A score at or above a set cut-point (commonly three positive answers) suggests probable PTSD and signals that a fuller assessment is warranted. It is important to understand what a screen is and is not: it is a quick filter to identify who may benefit from further evaluation, not a diagnosis. Other tools, such as the longer PCL-5 checklist, are used to assess symptoms in more depth and to monitor change during treatment. Screens can be a low-pressure way to start a conversation, but interpreting them and making a diagnosis is a job for a professional.",
      sources: [
        {
          label: "Primary Care PTSD Screen for DSM-5 (PC-PTSD-5)",
          url: "https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Primary Care PTSD Screen for DSM-5",
          url: "https://istss.org/clinical-resources/adult-trauma-assessments/primary-care-ptsd-screen-for-dsm-5/",
          publisher: "International Society for Traumatic Stress Studies (ISTSS)",
        },
      ],
      tags: ["diagnosis", "screening", "pc-ptsd-5", "pcl-5"],
      caution:
        "A positive screen is not a diagnosis. It indicates a need for full evaluation by a qualified professional.",
    },
  ],
});
