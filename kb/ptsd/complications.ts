import { defineSection } from "../types.js";

/**
 * COMPLICATIONS — the longer-term consequences and impacts that untreated or
 * severe PTSD can have: effects on mental health (depression, suicide risk),
 * physical health (cardiovascular, chronic pain, sleep), functioning and
 * relationships, and the impact on substance use. Framed to emphasize that these
 * are reasons to seek treatment, and that risks improve with care — not to alarm.
 *
 * Educational. Not a substitute for professional assessment.
 */
export const complications = defineSection({
  id: "complications",
  title: "Complications & Long-Term Impact",
  description:
    "The longer-term consequences PTSD can have when untreated or severe — on mental health, physical health, daily functioning, and relationships — framed as reasons that treatment matters, with the reassurance that these risks improve with care.",
  entries: [
    {
      id: "complications-overview",
      title: "Why untreated PTSD matters — and improves with care",
      summary:
        "Left unaddressed, PTSD can affect mental and physical health and daily life over time; the point of naming these impacts is that effective treatment reduces them.",
      detail:
        "PTSD that goes unrecognized or untreated can ripple outward over time, affecting mood, physical health, relationships, work, and overall quality of life. Understanding these potential impacts is not meant to frighten anyone — it is meant to underline why seeking help is worthwhile and why PTSD deserves to be taken as seriously as any other health condition. The encouraging counterpoint is that PTSD is treatable, and effective treatment can reduce these downstream effects: improving symptoms, lifting co-occurring depression, and supporting better physical health, sleep, relationships, and functioning. Many of the 'complications' below are also reasons treatment is recommended and reasons not to wait. It is also worth remembering that having PTSD does not doom a person to all of these outcomes; they describe possibilities and group-level risks, and individual paths vary widely, especially with support and care. The overarching message is hopeful: addressing PTSD helps the whole person, not just the core symptoms.",
      sources: [
        {
          label: "Post-traumatic stress disorder (PTSD) — complications",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
        {
          label: "Post-Traumatic Stress Disorder (PTSD) — why treatment matters",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["complications", "overview", "hope"],
    },
    {
      id: "mental-health-depression-suicide",
      title: "Impact on mental health and suicide risk",
      summary:
        "PTSD raises the risk of depression, anxiety, and suicidal thoughts; recognizing this underscores the importance of crisis safety and timely treatment.",
      detail:
        "One of the most important impacts of PTSD is on broader mental health. PTSD frequently co-occurs with depression and anxiety, and the combination can deepen hopelessness, low mood, and distress. As a group, people with PTSD also have an elevated risk of suicidal thoughts and behaviors — particularly when PTSD is accompanied by depression or substance use — which is exactly why this knowledge base places crisis safety first and encourages taking thoughts of self-harm seriously. None of this is inevitable, and these risks are reasons to seek care rather than to despair: effective treatment of PTSD, and of co-occurring depression or substance use, reduces suffering and lowers risk. If thoughts of suicide or self-harm are present, immediate support is available through the 988 Suicide & Crisis Lifeline (call or text 988) or 911, and they should be shared with a clinician. Recognizing PTSD's mental health impact is the first step toward addressing it, and addressing it genuinely helps.",
      sources: [
        {
          label: "Post-Traumatic Stress Disorder (PTSD) — co-occurring conditions",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
        {
          label: "988 Suicide & Crisis Lifeline",
          url: "https://988lifeline.org/",
          publisher: "988 Suicide & Crisis Lifeline (SAMHSA / Vibrant Emotional Health)",
        },
      ],
      tags: ["complications", "depression", "suicide", "mental-health", "safety"],
      caution:
        "If you are having thoughts of suicide or self-harm, contact 988 (call or text) or 911 now, and tell your care team. These risks improve with treatment.",
    },
    {
      id: "physical-health-impact",
      title: "Impact on physical health",
      summary:
        "Chronic PTSD is associated with higher risks of conditions like heart disease, chronic pain, and other physical health problems, partly through long-term stress on the body.",
      detail:
        "PTSD is not only a 'mental' condition — sustained activation of the stress system appears to affect the body too. Research links chronic PTSD with higher rates of several physical health problems, including cardiovascular disease (such as heart attack and stroke), chronic pain, gastrointestinal problems, and a generally higher burden of physical illness; PTSD has also been associated with increased risk of conditions like type 2 diabetes. The likely mechanisms include long-term stress-hormone and nervous-system activation, disrupted sleep, and behaviors that can accompany PTSD such as smoking, heavy drinking, or inactivity. This mind-body connection is another reason PTSD deserves attention and treatment, and another reason that supportive lifestyle measures (sleep, activity, limiting alcohol) and regular medical care matter alongside mental health treatment. As with other impacts, these are population-level associations, not certainties for any individual, and good overall care — addressing both the PTSD and physical health — supports the whole person. People with PTSD benefit from staying connected to primary medical care as well as mental health care.",
      sources: [
        {
          label: "Trauma, PTSD, and Physical Health",
          url: "https://www.ptsd.va.gov/professional/treat/cooccurring/ptsd_physical_health.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — complications (overall health)",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["complications", "physical-health", "cardiovascular", "chronic-pain"],
    },
    {
      id: "functioning-relationships-impact",
      title: "Impact on daily functioning and relationships",
      summary:
        "PTSD can strain work, school, finances, and close relationships through symptoms like avoidance, irritability, and withdrawal; treatment and support help restore functioning.",
      detail:
        "Over time, PTSD's symptoms can take a toll on daily functioning and relationships. Difficulty concentrating, sleep loss, irritability, and avoidance can affect performance and attendance at work or school and, in some cases, financial stability. In close relationships, emotional numbness, withdrawal, hypervigilance, and irritability can create distance or conflict, leaving both the person with PTSD and their loved ones feeling hurt or disconnected — even though these behaviors stem from the condition rather than a lack of care. Social withdrawal can shrink a person's world and reinforce isolation. Naming these effects matters because they are common and often unspoken, and because they respond to help: as treatment reduces symptoms, many people regain functioning, reconnect with others, and rebuild routines and roles that PTSD had eroded. Couples or family support, workplace accommodations, and peer connection can all assist. These impacts are reasons to seek and stay in care, and they are not a verdict on a person's future — improvement is common and recovery realistic.",
      sources: [
        {
          label: "How does PTSD affect families?",
          url: "https://www.ptsd.va.gov/family/effect_families.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — effects on life",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["complications", "functioning", "relationships", "work"],
    },
    {
      id: "substance-use-complication",
      title: "Substance use as a complication",
      summary:
        "Turning to alcohol or drugs to cope is a common complication of PTSD that tends to worsen symptoms and outcomes; integrated treatment addresses both together.",
      detail:
        "A particularly common and consequential complication of PTSD is the development of problems with alcohol or other drugs. Using substances to numb pain, manage intrusive memories, or force sleep is understandable, but over time it tends to worsen PTSD symptoms, depression, and sleep, raise safety risks, and make treatment harder — and PTSD and substance use disorders reinforce each other when they co-occur, which they often do. Because this pattern is so frequent, it is treated not as a moral failing but as a recognized, treatable complication: integrated approaches that address PTSD and substance use together are effective, and improvement in one often helps the other. Anyone caught in this cycle can seek help without shame, and free, confidential support is available (for example, SAMHSA's national helpline at 1-800-662-HELP). Recognizing substance use as a complication of PTSD — rather than a separate failing — opens the door to the right kind of help. This is covered further in the lifestyle and comorbidities sections.",
      sources: [
        {
          label: "Substance Use and PTSD",
          url: "https://www.ptsd.va.gov/understand/related/substance_misuse.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "SAMHSA National Helpline (free, confidential support)",
          url: "https://www.samhsa.gov/find-help/helplines/national-helpline",
          publisher: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
        },
      ],
      tags: ["complications", "substance-use", "self-medication", "comorbidity"],
      caution:
        "Substance use problems with PTSD are common and treatable. Help is available without judgment — talk to your care team or call SAMHSA's helpline (1-800-662-4357).",
    },
  ],
});
