import { defineSection } from "../types.js";

/**
 * CAUSE — how PTSD develops: trauma exposure as the trigger, the neurobiology of
 * the threat-response system (amygdala, hippocampus, prefrontal cortex, HPA
 * axis, and the fight-flight-freeze response), and the risk and resilience
 * factors that shape who develops it.
 *
 * Described clinically and gently, with no graphic trauma detail. Educational —
 * not a substitute for trauma-informed professional care.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes, Risk & the Stress Response",
  description:
    "Why PTSD develops: trauma exposure as the trigger, the neurobiology of the body's threat-response system (amygdala, hippocampus, HPA axis, fight-flight-freeze), and the risk and resilience factors that influence who is affected.",
  entries: [
    {
      id: "trauma-exposure-trigger",
      title: "Trauma exposure: the trigger for PTSD",
      summary:
        "PTSD begins with exposure to a traumatic event — directly experiencing, witnessing, learning of, or being repeatedly exposed to serious threat, danger, or harm.",
      detail:
        "PTSD is unusual among mental health conditions in that it has a defined external starting point: exposure to a traumatic event. Trauma can take several forms — directly experiencing a frightening or life-threatening event, witnessing it happen to someone else, learning that it happened to a close loved one, or repeated exposure to the aftermath of trauma (as first responders and some workers experience). Common examples include serious accidents, physical or sexual assault, combat, disasters, sudden loss, and childhood abuse or neglect. PTSD is a response to the event, not a sign of weakness, and the same event can affect two people very differently. Crucially, most people exposed to trauma do not develop PTSD — recovery is the more common path — but for some the threat-response system stays switched on long after the danger has passed. This entry stays deliberately general and avoids graphic detail; the focus is on understanding, gently, how the condition begins.",
      sources: [
        {
          label: "PTSD Basics — what causes PTSD",
          url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["cause", "trauma", "trigger"],
    },
    {
      id: "fight-flight-freeze",
      title: "The fight-flight-freeze response",
      summary:
        "The body's survival response — fight, flight, or freeze — is normal and protective during danger; in PTSD it can stay activated or be re-triggered when there is no real threat.",
      detail:
        "When a person faces danger, the body launches an automatic survival response, often called 'fight, flight, or freeze.' Stress hormones surge, the heart races, breathing quickens, senses sharpen, and the body prepares to defend itself, escape, or — when neither is possible — shut down and freeze. This response is fast, automatic, and protective; it is the nervous system doing exactly what it evolved to do in a crisis. In PTSD, this same survival system seems to remain on high alert or to switch on again later, in situations that are not actually dangerous. That is why reminders of the trauma can produce a full-body alarm — pounding heart, panic, the urge to flee or freeze — even when a person knows, rationally, that they are safe. Understanding that these reactions come from a protective system, rather than from being 'broken,' can be both accurate and reassuring, and it is the basis for therapies that help the system learn it is safe again.",
      sources: [
        {
          label: "Understanding the stress response",
          url: "https://www.health.harvard.edu/staying-healthy/understanding-the-stress-response",
          publisher: "Harvard Health Publishing (Harvard Medical School)",
        },
        {
          label: "Coping With Traumatic Events",
          url: "https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["cause", "stress-response", "fight-flight-freeze", "physiology"],
    },
    {
      id: "neurobiology-brain-circuits",
      title: "Neurobiology: amygdala, hippocampus, and prefrontal cortex",
      summary:
        "Research links PTSD to changes in brain regions that detect threat (amygdala), place memories in context (hippocampus), and regulate fear (prefrontal cortex).",
      detail:
        "Brain-imaging and other research points to a set of interacting regions that help explain PTSD's symptoms. The amygdala acts as the brain's smoke detector, scanning for threat and triggering the alarm response; in PTSD it tends to be overactive, which fits the heightened fear and reactivity people describe. The prefrontal cortex normally helps calm or 'put the brakes on' the amygdala and apply context and reasoning; in PTSD its regulating influence appears reduced, so the alarm is harder to switch off. The hippocampus helps file memories with a sense of time and place — this happened then, and it is over now; when its functioning is disrupted, traumatic memories can feel less anchored in the past and more like they are happening now, which may contribute to flashbacks and intrusive memories. These are patterns seen across groups, not a brain scan that diagnoses any individual, and they are not permanent damage — the brain remains capable of change, which is why therapy can help the system recalibrate.",
      sources: [
        {
          label: "Post-Traumatic Stress Disorder — the brain and PTSD",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
        {
          label: "How Does PTSD Affect the Brain?",
          url: "https://www.ptsd.va.gov/understand/what/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["cause", "neurobiology", "amygdala", "hippocampus", "brain"],
    },
    {
      id: "hpa-axis-stress-hormones",
      title: "The HPA axis and stress hormones",
      summary:
        "PTSD is associated with changes in the body's hormonal stress system (the HPA axis) that regulates cortisol and the adrenaline-driven alarm response.",
      detail:
        "Beyond brain circuits, PTSD involves the body's hormonal stress system, known as the hypothalamic-pituitary-adrenal (HPA) axis. In a threat, this axis coordinates the release of stress hormones — including cortisol — while the related sympathetic nervous system releases adrenaline (epinephrine) and noradrenaline, producing the racing heart, sweating, and hyper-alertness of the alarm response. Research in PTSD has found alterations in how this system regulates itself, including differences in cortisol patterns and a stress response that can be more easily and strongly triggered. The noradrenergic ('fight-or-flight') system being overactive is one reason for the hyperarousal, exaggerated startle, and sleep disruption many people experience, and it helps explain why a medication that dampens this system (prazosin) has been studied for trauma-related nightmares and sleep. These biological findings reinforce that PTSD is a real, physiological condition affecting the whole stress system — not simply a matter of attitude or willpower.",
      sources: [
        {
          label: "Post-Traumatic Stress Disorder (PTSD) — biology of stress",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
        {
          label: "Understanding the stress response (HPA axis and stress hormones)",
          url: "https://www.health.harvard.edu/staying-healthy/understanding-the-stress-response",
          publisher: "Harvard Health Publishing (Harvard Medical School)",
        },
      ],
      tags: ["cause", "hpa-axis", "cortisol", "noradrenaline", "physiology"],
    },
    {
      id: "risk-factors",
      title: "Risk factors: what raises the chance of PTSD",
      summary:
        "Risk reflects features of the trauma (intensity, injury, duration), the person's history, and factors during and after the event — many outside anyone's control.",
      detail:
        "Whether someone develops PTSD after trauma depends on many interacting factors, most of which are not under a person's control and none of which imply fault. Features of the event matter: more intense, prolonged, or repeated trauma, being physically injured, and trauma involving direct threat to life tend to carry higher risk. Personal factors include a history of earlier trauma (especially in childhood), previous mental health conditions such as depression or anxiety, and a family history of mental health problems. What happens during the event — for example, intense fear, helplessness, or dissociation — and especially what happens afterward also matter: high ongoing stress, additional losses, and a lack of support raise risk. Understanding risk factors is useful for recognizing who may need extra support, but they describe probabilities across groups, not certainties for any individual — and importantly, developing PTSD is never a sign that a person did something wrong or 'should have coped better.'",
      sources: [
        {
          label: "PTSD Basics — who is at risk",
          url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — risk factors",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["cause", "risk-factors"],
      caution:
        "Risk factors describe groups, not individuals, and do not explain why any one person developed PTSD. Developing PTSD is never a personal failing.",
    },
    {
      id: "resilience-protective-factors",
      title: "Resilience and protective factors",
      summary:
        "Social support, healthy coping, and a sense of safety after trauma are linked to lower PTSD risk and better recovery; resilience can be strengthened.",
      detail:
        "Just as some factors raise risk, others appear to protect against PTSD or support recovery — and several can be nurtured. The strongest and most consistent is social support: feeling connected to and supported by trusted people after a traumatic event is linked to lower PTSD risk. Other protective factors include having ways to cope with and make sense of difficult experiences, feeling able to respond effectively during a crisis, reaching out for help when needed, and re-establishing safety and routine afterward. Resilience does not mean being unaffected by trauma or 'getting over it' quickly; it describes the capacity to adapt and recover over time, which is common. Importantly, a lack of these factors does not doom anyone to PTSD, and their presence does not guarantee immunity — but they highlight constructive directions, such as strengthening support networks and accessing help early, that genuinely matter for recovery. Treatment itself builds many of these capacities.",
      sources: [
        {
          label: "PTSD Basics — what helps lower risk (social support)",
          url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Coping With Traumatic Events — what helps",
          url: "https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["cause", "resilience", "protective-factors", "social-support"],
    },
  ],
});
