import { defineSection } from "../types.js";

/**
 * PATIENT CARE & SELF-MANAGEMENT — living well alongside PTSD over time: getting
 * and staying in care, building a support system and safety plan, daily-life and
 * relationship considerations, supporting a loved one with PTSD, and trauma-
 * informed care. Practical, validating, and hopeful.
 *
 * Educational. Care planning belongs with the person's professional team.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Patient Care & Self-Management",
  description:
    "Living well with PTSD over time: getting and staying in care, building support and a safety plan, daily life and relationships, supporting a loved one, and what trauma-informed care means. Practical and validating; care planning belongs with a professional team.",
  entries: [
    {
      id: "getting-and-staying-in-care",
      title: "Getting and staying in care",
      summary:
        "Reaching out for help is the key first step; staying engaged with treatment, even through ups and downs, gives the best chance of recovery.",
      detail:
        "The single most important step in PTSD care is reaching out — to a primary care provider, a mental health professional, a veterans' service, or a trusted clinic — because PTSD is treatable but rarely resolves entirely on its own when it has taken hold. Getting started can feel hard, especially when avoidance is itself a symptom, so it can help to begin small: a screening conversation, a single appointment, or a call to a helpline. Once in care, staying engaged matters: trauma-focused therapy and medication both take some time to work, and there are often ups and downs along the way, so continuing through the harder stretches (while keeping the care team informed) gives the best chance of lasting improvement. It is also reasonable to advocate for yourself — to ask about evidence-based, trauma-focused treatments, to seek a different provider if the fit isn't right, and to bring up side effects or concerns. Recovery is realistic, and persistence pays off; this is educational encouragement, and a professional team guides the actual plan.",
      sources: [
        {
          label: "Understanding PTSD Treatment (getting help)",
          url: "https://www.ptsd.va.gov/understand_tx/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-Traumatic Stress Disorder (PTSD) — finding help",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["patient-care", "treatment-engagement", "self-advocacy", "hope"],
    },
    {
      id: "building-support-safety-plan",
      title: "Building a support system and a safety plan",
      summary:
        "A network of trusted people and, where relevant, a written safety plan made with a clinician are practical anchors that help during hard moments.",
      detail:
        "Two practical supports help many people living with PTSD. The first is a support system: identifying a handful of trusted people — friends, family, a peer or support group, a faith or community connection — who can be there to listen, check in, or simply be present, and letting them know how they can help. Connection counters the isolation PTSD can drive and is genuinely protective. The second, especially relevant if a person ever experiences thoughts of self-harm, is a safety plan: a brief, personalized written plan, ideally made with a clinician or crisis counselor, that lists one's personal warning signs, coping steps that help, distractions and reasons for living, people and professional contacts to reach (including the 988 Suicide & Crisis Lifeline), and steps to make the environment safer during high-risk times. Having these worked out in advance means that in a hard moment a person isn't starting from scratch. Both supports complement professional treatment; a safety plan in particular is best developed with professional guidance rather than alone.",
      sources: [
        {
          label: "Self-Help and Coping (building support)",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "5 Action Steps to Help Someone Having Thoughts of Suicide",
          url: "https://www.nimh.nih.gov/health/publications/5-action-steps-to-help-someone-having-thoughts-of-suicide",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["patient-care", "support-system", "safety-plan", "988"],
      caution:
        "A safety plan is best made with professional support. If you are in crisis, contact 988 (call or text) or 911 now.",
    },
    {
      id: "daily-life-work-relationships",
      title: "Daily life, work, and relationships",
      summary:
        "PTSD can affect work, relationships, and daily functioning; structure, communication, accommodations, and self-care help, and improvement is common with treatment.",
      detail:
        "PTSD doesn't stay neatly in one part of life — it can affect sleep, concentration, mood, and trust, which in turn touch work, relationships, and everyday tasks. Recognizing this can reduce self-blame and point toward practical adjustments. Keeping some routine and structure supports stability; breaking tasks into small steps helps when concentration or motivation is low; and planning around known triggers (for example, anniversaries or stressful settings) reduces surprises. In relationships, PTSD can show up as irritability, withdrawal, or difficulty being close; honest communication, learning together about PTSD, and sometimes couples or family support can ease strain, and loved ones doing their own self-care matters too. At work or school, some people benefit from accommodations or a gradual return after a difficult period. None of this means a person is broken or that the situation is permanent — many people see real improvement in functioning as treatment takes hold. A care team can help connect someone with relevant supports and resources tailored to their situation.",
      sources: [
        {
          label: "Post-traumatic stress disorder (PTSD) — coping and support",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/diagnosis-treatment/drc-20355973",
          publisher: "Mayo Clinic",
        },
        {
          label: "Self-Help and Coping (daily life and relationships)",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["patient-care", "daily-life", "work", "relationships"],
    },
    {
      id: "supporting-a-loved-one",
      title: "Supporting a loved one with PTSD",
      summary:
        "Family and friends can help by learning about PTSD, listening without pressure or judgment, encouraging treatment, and caring for their own wellbeing too.",
      detail:
        "If someone you care about has PTSD, your support can make a real difference — and there are concrete, gentle ways to offer it. Learning about PTSD helps you understand that symptoms like irritability, withdrawal, or jumpiness are part of the condition, not personal rejection. Listening without judgment or pressure — being available without forcing someone to talk about the trauma before they are ready — communicates safety and care. You can gently encourage professional treatment and offer practical help (a ride to an appointment, help finding a therapist) while respecting that the person leads their own recovery. It also helps to be patient with setbacks, to avoid taking symptoms personally, and to know the warning signs of crisis and how to reach 988 or 911 if safety is a concern. Crucially, supporting someone with PTSD can be demanding, so caring for your own mental health — through your own support, breaks, and limits — is not selfish but necessary; resources exist specifically for family members. A loved one's support complements, but cannot replace, professional care.",
      sources: [
        {
          label: "Helping a Family Member Who Has PTSD",
          url: "https://www.ptsd.va.gov/family/how_family_member.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Mayo Clinic Q and A: How to support someone with PTSD",
          url: "https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-q-and-a-how-to-diagnose-and-support-someone-with-post-traumatic-stress-disorder/",
          publisher: "Mayo Clinic News Network",
        },
      ],
      tags: ["patient-care", "family", "caregivers", "support"],
      caution:
        "If a loved one may be in danger of self-harm, contact 988 (call or text) or 911. Caring for your own wellbeing while supporting someone is important too.",
    },
    {
      id: "trauma-informed-care",
      title: "Trauma-informed care and self-advocacy",
      summary:
        "Trauma-informed care means services that recognize trauma's impact and prioritize safety, choice, and trust; knowing this helps people seek and ask for respectful care.",
      detail:
        "'Trauma-informed care' describes an approach in which providers and services recognize how common trauma is and how it affects people, and deliberately work to avoid re-traumatizing them — emphasizing physical and emotional safety, trustworthiness, choice, collaboration, and respect for each person's pace and autonomy. For someone with PTSD, this can mean a clinician who explains what to expect, asks permission before discussing difficult material, gives a sense of control over the process, and responds to distress with care rather than pressure. Understanding this concept can help a person recognize good care and advocate for it: it is reasonable to ask whether a provider has experience with trauma, to set limits on what you discuss and when, and to seek a different provider if you don't feel safe or respected. Self-advocacy also includes asking about evidence-based, trauma-focused treatments and bringing a trusted person to appointments if that helps. Trauma-informed principles are increasingly built into mental health, medical, and community services. This is educational background; a person's own care team puts these principles into practice.",
      sources: [
        {
          label: "SAMHSA's Concept of Trauma and Guidance for a Trauma-Informed Approach",
          url: "https://store.samhsa.gov/product/samhsas-concept-trauma-and-guidance-trauma-informed-approach/sma14-4884",
          publisher: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
        },
        {
          label: "Understanding PTSD Treatment (working with your provider)",
          url: "https://www.ptsd.va.gov/understand_tx/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["patient-care", "trauma-informed-care", "self-advocacy"],
    },
  ],
});
