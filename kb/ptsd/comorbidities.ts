import { defineSection } from "../types.js";

/**
 * COMORBIDITIES & CO-OCCURRING CONDITIONS — what commonly travels with PTSD and
 * the COMPOUNDING management considerations when conditions overlap. This is the
 * grounding for multi-condition reasoning: depression, substance use disorder
 * (very common), other anxiety disorders, chronic pain, sleep disorders, and
 * traumatic brain injury (TBI).
 *
 * Educational only. Coordinating overlapping, sometimes conflicting, care across
 * conditions is the job of the care team, including a pharmacist for medications.
 */
export const comorbidities = defineSection({
  id: "comorbidities",
  title: "Comorbidities & Co-occurring Conditions",
  description:
    "What commonly co-occurs with PTSD and why it compounds: depression, substance use disorder (very common), other anxiety disorders, chronic pain, sleep disorders and nightmares, and traumatic brain injury (TBI). Educational; coordinating overlapping care is the care team's job.",
  entries: [
    {
      id: "comorbidities-overview",
      title: "PTSD rarely travels alone",
      summary:
        "Most people with PTSD have at least one other condition; these interact, so good care treats the whole person and coordinates overlapping treatments.",
      detail:
        "PTSD very commonly co-occurs with other mental and physical health conditions — in fact, having another condition alongside PTSD is more the rule than the exception. The overlaps matter in two directions: PTSD can raise the risk of conditions like depression and substance use, and those conditions in turn make PTSD harder to manage and can worsen outcomes, including raising safety risk. They also create compounding and sometimes conflicting considerations — a treatment that helps one condition may affect another, and several conditions together mean a heavier treatment and self-care load. This is why thorough PTSD care assesses for common companions and coordinates treatment rather than addressing PTSD in isolation. Encouragingly, treating PTSD often improves co-occurring conditions too, and integrated approaches exist for the most frequent pairings. The entries here map the conditions that most often accompany PTSD and how they interact, as grounding for thinking about more than one condition at once. Coordinating overlapping care, including the medication picture, is the role of the care team and pharmacist.",
      sources: [
        {
          label: "Related Problems (co-occurring conditions with PTSD)",
          url: "https://www.ptsd.va.gov/understand/related/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-Traumatic Stress Disorder (PTSD) — co-occurring conditions",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["comorbidity", "overview", "multi-condition"],
    },
    {
      id: "depression-comorbidity",
      title: "Depression",
      summary:
        "Depression is one of the most common companions of PTSD; the two amplify each other and together raise suicide risk, so they are assessed and treated together.",
      detail:
        "Depression is among the most frequent conditions to co-occur with PTSD, and the two are closely intertwined. PTSD symptoms — sleep loss, hopeless thoughts, numbness, guilt, and withdrawal — overlap with and can fuel depression, and depression in turn can deepen PTSD's burden and sap the motivation needed for treatment and self-care. Importantly, the combination of PTSD and depression is associated with greater distress and a higher risk of suicidal thoughts than either alone, which is why crisis safety is emphasized and why clinicians routinely assess for both. The compounding works both ways for treatment, too — sometimes helpfully: the SSRIs and SNRI used for PTSD are also antidepressants, so one medication may address both, and trauma-focused therapy often lifts co-occurring depressive symptoms as PTSD improves. Coordinated care that keeps both conditions in view — rather than treating one and missing the other — gives the best results. If low mood is severe or accompanied by thoughts of self-harm, that is a reason to reach out promptly, including to 988 or a clinician.",
      sources: [
        {
          label: "Post-Traumatic Stress Disorder (PTSD) — depression and PTSD",
          url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
          publisher: "NIH / National Institute of Mental Health",
        },
        {
          label: "Depression, Trauma, and PTSD",
          url: "https://www.ptsd.va.gov/understand/related/depression_trauma.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["comorbidity", "depression", "mental-health", "suicide", "multi-condition"],
      evidence: "established",
      caution:
        "PTSD with depression can raise suicide risk. If thoughts of self-harm are present, contact 988 (call or text) or 911, and tell the care team.",
    },
    {
      id: "substance-use-disorder-comorbidity",
      title: "Substance use disorder (very common)",
      summary:
        "Substance use disorders co-occur with PTSD very often, each worsening the other; integrated treatment that addresses both together is the recommended approach.",
      detail:
        "Substance use disorders are among the most common conditions to accompany PTSD — a large share of people with PTSD also struggle with alcohol or drug use, often beginning as an attempt to cope with symptoms ('self-medication'). The two conditions reinforce each other: substances may briefly dull distress but worsen sleep, mood, and PTSD symptoms over time, while ongoing PTSD drives continued use; the pair is also associated with worse treatment outcomes and higher safety risk. This compounding has direct management implications. Some medicines used for sleep or anxiety (notably benzodiazepines) are particularly problematic when substance use is present, and alcohol or drugs can interact dangerously with prescribed medications. The good news is that integrated treatment — addressing PTSD and substance use together rather than insisting one be 'fixed' first — is effective and recommended, and improvement in one frequently helps the other. Seeking help for substance use is not a failure but part of treating PTSD; free, confidential support is available through SAMHSA's helpline (1-800-662-HELP), and a care team can coordinate integrated care.",
      sources: [
        {
          label: "Substance Use and PTSD",
          url: "https://www.ptsd.va.gov/understand/related/substance_misuse.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "SAMHSA National Helpline (free, confidential treatment referral)",
          url: "https://www.samhsa.gov/find-help/helplines/national-helpline",
          publisher: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
        },
      ],
      tags: ["comorbidity", "substance-use", "self-medication", "multi-condition"],
      evidence: "established",
      caution:
        "Integrated treatment for PTSD and substance use is effective. Help is available without judgment — call SAMHSA's helpline (1-800-662-4357) or talk to your care team.",
    },
    {
      id: "anxiety-disorders-comorbidity",
      title: "Other anxiety disorders",
      summary:
        "Anxiety disorders such as panic disorder, generalized anxiety, and social anxiety often co-occur with PTSD, overlapping in symptoms and benefiting from coordinated treatment.",
      detail:
        "PTSD frequently co-occurs with other anxiety-related conditions, including panic disorder, generalized anxiety disorder, social anxiety, and obsessive-compulsive disorder. There is natural overlap — hyperarousal, avoidance, and a heightened sense of threat appear across these conditions — which can make the picture complex and is one reason careful assessment matters. The compounding is mostly additive: more anxiety overall, more avoidance, and a greater toll on daily functioning, which can make it harder to engage with work, relationships, or treatment. Helpfully, the treatments overlap too: cognitive behavioral approaches and the SSRIs/SNRIs used for PTSD are also mainstays for anxiety disorders, so a coordinated plan can often address several at once, and skills like grounding and paced breathing help across the board. A clinician can sort out which conditions are present and tailor treatment accordingly, rather than treating PTSD as if it stood alone. As always, this is educational background; the care team coordinates the actual plan.",
      sources: [
        {
          label: "Related Problems (anxiety and PTSD)",
          url: "https://www.ptsd.va.gov/understand/related/index.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Anxiety Disorders",
          url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
          publisher: "NIH / National Institute of Mental Health",
        },
      ],
      tags: ["comorbidity", "anxiety", "panic", "multi-condition"],
      evidence: "established",
    },
    {
      id: "chronic-pain-comorbidity",
      title: "Chronic pain",
      summary:
        "Chronic pain and PTSD often co-occur and amplify each other; this overlap matters especially because pain treatment may involve opioids, which interact with some PTSD-related medicines.",
      detail:
        "Chronic pain and PTSD commonly occur together and tend to worsen one another — pain can act as a constant stressor and trauma reminder, while PTSD's arousal and sleep disruption can heighten the experience of pain, a cycle sometimes described as mutual maintenance. This overlap carries practical, safety-relevant implications. Pain management sometimes involves opioid medicines, and opioids combined with benzodiazepines (or alcohol) can dangerously suppress breathing, which is one reason benzodiazepines are discouraged in PTSD and why the full medication list must be coordinated. Sleep problems, depression, and substance use can all enter the picture too, compounding the complexity. The encouraging side is that integrated, non-drug-centered approaches — including trauma-focused therapy, cognitive behavioral therapy for pain, paced activity, physical therapy, and good sleep care — can help both conditions, and treating PTSD can reduce the burden of pain. Coordinating pain care with mental health care, with a pharmacist watching the combined medication picture, is the safest path. This is educational information, not a treatment plan.",
      sources: [
        {
          label: "Trauma, PTSD, and Physical Health (including chronic pain)",
          url: "https://www.ptsd.va.gov/professional/treat/cooccurring/ptsd_physical_health.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "FDA Drug Safety Communication: benzodiazepines and opioids (serious risks)",
          url: "https://www.fda.gov/drugs/food-and-drug-administration-overdose-prevention-framework/new-safety-measures-announced-opioid-analgesics-prescription-opioid-cough-products-and",
          publisher: "U.S. Food and Drug Administration",
        },
      ],
      tags: ["comorbidity", "chronic-pain", "opioids", "multi-condition", "safety"],
      evidence: "established",
    },
    {
      id: "sleep-disorders-comorbidity",
      title: "Sleep disorders and nightmares",
      summary:
        "Sleep problems — insomnia, nightmares, and conditions like sleep apnea — are extremely common with PTSD and both worsen and are worsened by it; treating sleep often helps overall.",
      detail:
        "Disrupted sleep is so common in PTSD that it is almost universal — insomnia and trauma-related nightmares are themselves PTSD symptoms, and poor sleep then worsens mood, concentration, irritability, and the ability to cope, creating a vicious cycle. Beyond insomnia and nightmares, other sleep disorders such as obstructive sleep apnea also co-occur with PTSD more often than average, and untreated sleep apnea can blunt the benefit of PTSD treatment, so screening for it can matter. The compounding cuts both ways, which is also an opportunity: targeting sleep directly can improve PTSD and daytime functioning. Effective options include Cognitive Behavioral Therapy for Insomnia (CBT-I), nightmare-focused approaches such as Imagery Rehearsal Therapy, treating any sleep apnea, and sometimes medication (such as prazosin for some people's nightmares, with the cautions noted elsewhere). Using alcohol to sleep, though common, backfires by fragmenting sleep and worsening nightmares. Raising persistent sleep problems with a clinician — rather than enduring them — is worthwhile, because improving sleep tends to lift the whole picture.",
      sources: [
        {
          label: "Sleep Problems and PTSD",
          url: "https://www.ptsd.va.gov/understand/related/sleep_problems.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Post-traumatic stress disorder (PTSD) — sleep and symptoms",
          url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["comorbidity", "sleep", "insomnia", "nightmares", "sleep-apnea", "multi-condition"],
      evidence: "established",
    },
    {
      id: "tbi-comorbidity",
      title: "Traumatic brain injury (TBI)",
      summary:
        "PTSD and traumatic brain injury often co-occur (especially after combat or accidents), with overlapping symptoms that complicate diagnosis; careful, coordinated assessment helps untangle them.",
      detail:
        "Traumatic brain injury (TBI) — an injury to the brain from a blow, jolt, or blast — frequently co-occurs with PTSD, particularly because the same events that cause trauma (combat blasts, vehicle crashes, assaults, falls) can injure the brain. This overlap is clinically important because PTSD and the lingering effects of mild TBI (concussion) share many symptoms: trouble concentrating and remembering, irritability, sleep problems, headaches, sensitivity to light or noise, and mood changes. That symptom overlap can make it hard to tell which condition is causing what, which is why coordinated, specialized assessment is valuable. The compounding can make recovery feel slower and more complicated, and it may shape treatment — for example, accommodating cognitive difficulties when doing therapy. The reassuring points are that many mild-TBI symptoms improve over time, that PTSD remains treatable even alongside TBI, and that addressing both in a coordinated way (often through programs experienced with both) gives the best outcomes. This is educational background; sorting out PTSD and TBI is a job for clinicians familiar with both.",
      sources: [
        {
          label: "PTSD and Traumatic Brain Injury (TBI)",
          url: "https://www.ptsd.va.gov/understand/related/tbi_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Traumatic Brain Injury (TBI) — overview",
          url: "https://www.ninds.nih.gov/health-information/disorders/traumatic-brain-injury-tbi",
          publisher: "NIH / National Institute of Neurological Disorders and Stroke (NINDS)",
        },
      ],
      tags: ["comorbidity", "tbi", "brain-injury", "multi-condition"],
      evidence: "established",
    },
  ],
});
