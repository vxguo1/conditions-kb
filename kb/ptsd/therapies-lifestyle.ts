import { defineSection } from "../types.js";

/**
 * THERAPIES & LIFESTYLE — the non-trauma-focused, supportive habits that help
 * people living with PTSD: sleep, exercise, social connection and support,
 * limiting alcohol as a coping tool, routine and structure, and non-trauma-
 * focused therapies that round out care. These support — but do not replace —
 * evidence-based treatment.
 *
 * Educational and gentle. Not individualized advice.
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Lifestyle & Supportive Therapies",
  description:
    "Everyday habits and supportive approaches that help people living with PTSD: sleep, physical activity, social connection, limiting alcohol as a coping tool, routine, and non-trauma-focused therapies. These support, but don't replace, evidence-based treatment.",
  entries: [
    {
      id: "lifestyle-overview",
      title: "How lifestyle fits alongside treatment",
      summary:
        "Healthy routines — sleep, activity, connection, and steady self-care — can ease PTSD symptoms and support recovery, working best alongside (not instead of) evidence-based treatment.",
      detail:
        "Day-to-day habits won't, on their own, resolve PTSD, but they can meaningfully reduce distress, support the nervous system, and make evidence-based treatment more effective — so they are a genuine part of recovery rather than an afterthought. The basics that help most people's mental health tend to help with PTSD too: protecting sleep, moving the body, staying connected to supportive people, eating reasonably, and keeping some structure to the day. These approaches are within a person's own hands, which can be empowering when trauma has left someone feeling out of control. At the same time, they are not a substitute for trauma-focused therapy or, where appropriate, medication; the most reliable path combines professional treatment with supportive self-care. It also helps to be gentle with oneself: building these habits while living with PTSD is hard, progress is rarely linear, and small, sustainable steps count. The entries here describe supportive options, not prescriptions.",
      sources: [
        {
          label: "Self-Help and Coping",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Lifestyle and home remedies for PTSD",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/diagnosis-treatment/drc-20355973",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["lifestyle", "self-care", "overview"],
    },
    {
      id: "sleep",
      title: "Sleep and rest",
      summary:
        "Sleep is often disrupted in PTSD by nightmares and hyperarousal; steady sleep habits help, and persistent sleep problems are worth raising with a clinician.",
      detail:
        "Sleep trouble is one of the most common and wearing parts of PTSD — nightmares, difficulty falling or staying asleep, and a nervous system that stays on guard at night can all interfere with rest, and poor sleep in turn worsens mood, concentration, and other symptoms. Supportive sleep habits ('sleep hygiene') can help: keeping a consistent sleep and wake schedule, making the bedroom calm, dark, and safe-feeling, limiting screens, caffeine, and (importantly) alcohol before bed, and winding down with a relaxing routine. Because alcohol fragments sleep and can worsen nightmares, using it to get to sleep tends to backfire. When nightmares or insomnia persist, effective help exists — including Cognitive Behavioral Therapy for Insomnia (CBT-I), nightmare-focused approaches such as Imagery Rehearsal Therapy, and, for some, treatment of the underlying PTSD. Persistent sleep problems are worth raising with a clinician rather than simply enduring, because improving sleep often improves daytime symptoms too. This is general guidance; a care team can tailor a sleep plan.",
      sources: [
        {
          label: "Sleep and PTSD (sleep problems and what helps)",
          url: "https://www.ptsd.va.gov/understand/related/sleep_problems.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Self-Help and Coping (sleep)",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["lifestyle", "sleep", "nightmares", "insomnia"],
    },
    {
      id: "exercise-physical-activity",
      title: "Physical activity and movement",
      summary:
        "Regular physical activity can reduce stress, improve mood and sleep, and help discharge the tension of hyperarousal; gentle, enjoyable movement counts.",
      detail:
        "Regular physical activity is one of the more reliably helpful self-care strategies in PTSD. Movement can lower stress, lift mood, improve sleep, and provide a healthy outlet for the physical tension and restlessness that come with hyperarousal, as well as a sense of agency and routine. It does not require intense workouts: walking, stretching, cycling, swimming, gardening, dancing, or movement-based practices like yoga or tai chi all count, and choosing something enjoyable makes it easier to sustain. Activity outdoors or with supportive others can add benefits of nature and connection. For some people, certain activities or settings can be reminders of trauma, so it helps to start gently and notice what feels safe. As with any change, those with other health conditions should check with a clinician about what is appropriate for them. The aim is steady, manageable movement that supports wellbeing — not punishing exercise — added alongside, not instead of, professional treatment.",
      sources: [
        {
          label: "Self-Help and Coping (physical activity and healthy habits)",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Lifestyle and home remedies (self-care for PTSD)",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/diagnosis-treatment/drc-20355973",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["lifestyle", "exercise", "physical-activity", "movement"],
    },
    {
      id: "social-support-connection",
      title: "Social support and connection",
      summary:
        "Connection with trusted people is one of the strongest protective factors in PTSD; staying connected, even in small ways, supports recovery, while isolation tends to worsen symptoms.",
      detail:
        "Social support is among the most consistently protective factors in PTSD — feeling connected to and supported by trusted people is linked to better recovery, while withdrawal and isolation, which PTSD can drive through avoidance and numbness, tend to deepen distress. Staying connected doesn't require big gestures: small, regular contact with family, friends, a support group, a faith or community group, or a peer who understands can all help a person feel less alone. Peer support and group programs, including those for veterans and other trauma survivors, can be especially validating because they connect people with others who 'get it.' It is common to feel a pull to isolate, or to worry about being a burden, and gently pushing back against that pull — reaching out even when it feels hard — is itself part of healing. Loved ones can help by listening without judgment and learning about PTSD. Connection complements professional treatment; it does not replace it, and support people are not a substitute for a clinician in a crisis.",
      sources: [
        {
          label: "Self-Help and Coping (social support and connection)",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Coping With Traumatic Events (connecting with others)",
          url: "https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["lifestyle", "social-support", "connection", "peer-support"],
    },
    {
      id: "alcohol-and-substances",
      title: "Alcohol and substances as a coping tool",
      summary:
        "Using alcohol or drugs to cope with PTSD is common and understandable but tends to worsen symptoms, sleep, and mood over time and raises safety risks; support is available.",
      detail:
        "Many people with PTSD turn to alcohol or other substances to numb pain, quiet intrusive memories, or get to sleep — an understandable attempt at relief sometimes called 'self-medication.' The difficulty is that, over time, this tends to backfire: alcohol and many drugs worsen sleep and nightmares, deepen depression and anxiety, blunt the benefits of treatment, and can interact dangerously with medications. PTSD and substance use disorders also frequently co-occur and feed each other, and substance use during a low moment can raise the risk of self-harm. None of this is a moral judgment — it reflects how these substances act on a stressed nervous system. The encouraging news is that integrated treatment addressing both PTSD and substance use together is effective, and reducing reliance on alcohol or drugs often improves PTSD symptoms. Anyone struggling with this can seek help without shame; resources such as SAMHSA's national helpline (1-800-662-HELP) offer free, confidential support and referrals. A care team can help find the right approach.",
      sources: [
        {
          label: "SAMHSA National Helpline (free, confidential treatment referral)",
          url: "https://www.samhsa.gov/find-help/helplines/national-helpline",
          publisher: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
        },
        {
          label: "PTSD and Problems with Alcohol Use",
          url: "https://www.ptsd.va.gov/understand/related/problem_alcohol_use.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["lifestyle", "alcohol", "substance-use", "self-medication", "safety"],
      caution:
        "If alcohol or drug use is hard to control, that is common with PTSD and help is available without judgment — talk to your care team or call SAMHSA's helpline (1-800-662-4357).",
    },
    {
      id: "routine-stress-management",
      title: "Routine, stress management, and non-trauma-focused therapies",
      summary:
        "Predictable routines, relaxation and stress-management skills, and non-trauma-focused therapies (like stress inoculation or present-centered therapy) can support stability and coping.",
      detail:
        "Beyond the headline habits, a few other supports help many people with PTSD. Keeping some routine and structure to the day — regular meals, sleep, and activities — can restore a comforting sense of predictability when trauma has shaken a person's sense of safety. Stress-management and relaxation skills, such as paced breathing, progressive muscle relaxation, and mindfulness, can turn down the body's alarm and are useful tools to have ready (these overlap with the grounding and coping skills covered elsewhere). There are also non-trauma-focused therapies that a clinician might offer, particularly when someone is not ready for or does not want trauma-focused work, including Stress Inoculation Training (which builds coping skills) and Present-Centered Therapy (which focuses on current problems and functioning); these are recognized options with supporting evidence, even if trauma-focused therapies are first-line. The right mix depends on the individual and is chosen with a professional. These approaches build stability and resilience alongside — not in place of — the core treatments.",
      sources: [
        {
          label: "Overview of Psychotherapy for PTSD (non-trauma-focused options)",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/overview_therapy.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Self-Help and Coping (routine and stress management)",
          url: "https://www.ptsd.va.gov/gethelp/selfhelp_coping.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["lifestyle", "routine", "stress-management", "relaxation", "non-trauma-focused"],
    },
  ],
});
