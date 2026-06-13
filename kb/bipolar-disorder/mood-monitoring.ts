import { defineSection } from "../types.js";

/**
 * MOOD MONITORING & SELF-AWARENESS — the practical, day-to-day tracking skills
 * that help people with bipolar disorder catch episodes early and stay well:
 * mood charting, recognizing personal early warning signs, tracking sleep, and
 * using apps or journals — always in partnership with the care team.
 *
 * EDUCATIONAL self-management content — a complement to, not a replacement for,
 * professional care.
 */
export const moodMonitoring = defineSection({
  id: "mood-monitoring",
  title: "Mood Monitoring & Early Warning Signs",
  description:
    "Self-tracking skills that help catch episodes early: mood charting, identifying personal early warning signs and triggers, tracking sleep, and using journals or apps — used alongside professional care.",
  entries: [
    {
      id: "why-monitor-mood",
      title: "Why tracking mood helps",
      summary:
        "Because bipolar episodes often build gradually and can be hard to see from the inside, regularly tracking mood, sleep, and energy helps spot changes early — when small adjustments can prevent a full episode.",
      detail:
        "Mood episodes in bipolar disorder frequently develop over days or weeks rather than all at once, and the early stages — especially of mania — can be hard to recognize from within, since rising energy may simply feel good or normal. Regular self-monitoring counters this by creating an objective record over time, making it easier to notice when sleep is shrinking, energy or irritability is climbing, or mood is sliding down. Catching these shifts early is valuable because early action — contacting the care team, adjusting routines, protecting sleep — can sometimes head off a full episode or lessen its severity. Monitoring also helps people and clinicians see patterns and triggers, evaluate whether treatment is working, and feel a greater sense of agency over the condition. It is a tool for partnership with the care team, not self-treatment: the information gathered guides conversations and decisions made together with professionals.",
      sources: [
        {
          label: "Bipolar Disorder — tracking moods and recognizing changes",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Wellness tools and mood tracking",
          url: "https://www.dbsalliance.org/education/bipolar-disorder/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
      ],
      tags: ["self-management", "mood-tracking", "monitoring"],
    },
    {
      id: "mood-charting",
      title: "Mood charting",
      summary:
        "A mood chart is a simple daily record of mood, energy, sleep, and sometimes medication and life events, used to reveal patterns and share clear information with the care team.",
      detail:
        "Mood charting (or mood tracking) is the practice of recording, usually each day, key indicators such as mood level (from low to high), energy, hours and quality of sleep, anxiety or irritability, and often medications taken and notable events. Over weeks and months this builds a picture that no single appointment can capture, helping reveal early warning signs, triggers (like disrupted sleep or stress), seasonal patterns, and how mood responds to treatment changes. Charts can be kept on paper, in a notebook, or with apps, and many patient organizations and care teams provide ready-made templates. Bringing a mood chart to appointments gives the clinician concrete, longitudinal information rather than relying on memory, which can improve decisions. The aim is not to obsess over every fluctuation but to maintain a sustainable, consistent record; even a quick daily rating is useful. As a self-management tool, mood charting works best when reviewed together with the care team.",
      sources: [
        {
          label: "Mood tracking and wellness tools",
          url: "https://www.dbsalliance.org/education/bipolar-disorder/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
        {
          label: "Bipolar Disorder — self-monitoring as part of care",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["self-management", "mood-charting", "monitoring"],
    },
    {
      id: "recognizing-warning-signs",
      title: "Recognizing your personal early warning signs",
      summary:
        "Most people have a recognizable set of early signs that an episode is starting; identifying your own — and what to do about them — is a powerful relapse-prevention skill.",
      detail:
        "Early warning signs are the individual, often subtle changes that tend to precede a person's mood episodes, and they differ from person to person. Common early signs of mania or hypomania include sleeping less without feeling tired, feeling unusually energetic, talkative, or irritable, racing thoughts, starting many projects, increased spending or risk-taking, and feeling 'better than well.' Early signs of depression can include sleeping more or less, low energy, withdrawing from people, losing interest, increased self-criticism, and trouble concentrating. Learning to recognize one's own warning signs — sometimes by reviewing past episodes with the care team or trusted family — allows for early action, such as contacting the care team, prioritizing sleep and routine, reducing stress and stimulation, and putting a pre-agreed plan into motion. Writing these signs down (and sharing them with supporters who may spot them first) turns vague worry into a concrete, empowering plan. This is a core relapse-prevention skill that complements medication and therapy.",
      sources: [
        {
          label: "Bipolar Disorder — recognizing early warning signs",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — spotting triggers and warning signs",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["self-management", "early-warning-signs", "relapse-prevention"],
      caution:
        "If warning signs include thoughts of suicide or self-harm, treat it as urgent — call or text 988 (or 911 if in danger). See Acute Emergencies.",
    },
    {
      id: "tracking-sleep",
      title: "Tracking sleep as an early signal",
      summary:
        "Sleep change is one of the most reliable early indicators in bipolar disorder — reduced sleep can both signal and trigger mania — so keeping an eye on sleep is especially valuable.",
      detail:
        "Sleep deserves special attention in monitoring because it has a uniquely close relationship with bipolar mood states. A reduced need for sleep is a hallmark early sign of emerging mania or hypomania, and at the same time, losing sleep can itself trigger a manic episode, creating a potentially escalating cycle. Conversely, sleeping much more than usual can accompany depression. Because of this two-way link, a noticeable change in sleep — particularly needing or getting less sleep while feeling energized — is often one of the first and most actionable warning signs, and many people make sleep a central item on their mood chart. If sleep starts to slip, it is a cue to protect routines, reduce stimulation, and contact the care team promptly rather than waiting. Sleep problems should be discussed with professionals rather than self-medicated, since some remedies can affect mood, but watching sleep closely is one of the highest-value monitoring habits in bipolar disorder.",
      sources: [
        {
          label: "Bipolar Disorder — sleep changes and mood episodes",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Bipolar disorder — sleep and warning signs",
          url: "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["self-management", "sleep", "early-warning-signs", "monitoring"],
    },
    {
      id: "apps-journals-tools",
      title: "Apps, journals, and other tools",
      summary:
        "Mood-tracking apps, journals, and printable charts make monitoring easier, but they are aids to care — not diagnostic tools — and the information is most useful when shared with the care team.",
      detail:
        "A range of tools can make self-monitoring more convenient and sustainable, from simple paper journals and printable mood charts to smartphone apps that log mood, sleep, energy, and medications and can generate summaries to share at appointments. Some people prefer a quick daily app rating; others find journaling adds helpful context about triggers and feelings. The best tool is the one a person will actually use consistently. A few cautions apply: apps and trackers are aids for self-awareness and communication, not substitutes for professional assessment, and none can diagnose bipolar disorder or replace clinical judgment; privacy and data practices vary between apps and are worth checking; and tracking should support wellbeing, not become a source of anxiety. Used sensibly and reviewed together with the care team, these tools can strengthen the partnership between a person and their clinicians and support earlier, better-informed decisions.",
      sources: [
        {
          label: "Wellness tools for tracking mood",
          url: "https://www.dbsalliance.org/education/bipolar-disorder/",
          publisher: "Depression and Bipolar Support Alliance (DBSA)",
        },
        {
          label: "Bipolar Disorder — tools to support self-management",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["self-management", "apps", "journaling", "tools"],
      caution:
        "Apps and trackers support care but cannot diagnose or treat bipolar disorder. Check an app's privacy practices, and review what you track with your care team.",
    },
  ],
});
