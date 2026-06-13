import { defineSection } from "../types.js";

/**
 * TREATMENTS — the medical/procedural side of multimodal pain care: non-opioid
 * analgesics (acetaminophen, NSAIDs), neuropathic agents (gabapentinoids,
 * duloxetine/SNRIs, tricyclics), topicals, opioids (role, risks, tolerance,
 * tapering — educational), interventional procedures, and neuromodulation.
 *
 * Educational only — never dosing or a "safe/unsafe" ruling. Medication and
 * procedure decisions belong with the care team.
 */
export const treatments = defineSection({
  id: "treatments",
  title: "Medical & Procedural Treatments",
  description:
    "The medication and procedure side of multimodal pain care: acetaminophen and NSAIDs, neuropathic agents (gabapentinoids, duloxetine/SNRIs, tricyclics), topicals, the role and risks of opioids and tapering, interventional procedures, and neuromodulation — all educational, with decisions deferred to the care team.",
  entries: [
    {
      id: "multimodal-approach",
      title: "Multimodal, mechanism-matched treatment",
      summary:
        "Modern pain care combines several treatments matched to the pain's mechanism rather than relying on one drug, because no single medicine controls chronic pain well and combinations let each play a smaller, safer role.",
      detail:
        "A core principle of chronic-pain treatment is to be multimodal: to combine several approaches — different classes of medicine plus non-drug therapies — rather than leaning on any one. There are two reasons. First, no single medication reliably abolishes chronic pain; on average, people get only partial relief from any one treatment, so combining approaches that work in different ways tends to help more than escalating a single drug. Second, using several treatments at lower intensity can reduce the side effects and risks of pushing any one (especially opioids) to high doses. The choice of medicines is matched to the pain mechanism — anti-inflammatories for inflammatory nociceptive pain, nerve-targeting drugs for neuropathic and nociplastic pain — and combined with physical therapy, exercise, and psychological approaches. Realistic goals matter: success is usually meaningful improvement in pain and, crucially, function and quality of life, not a pain score of zero. The specific combination is individualized by the care team, weighing what works, side effects, other conditions, and the person's goals.",
      sources: [
        {
          label: "Chronic Pain (multimodal treatment approach)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "Chronic Pain: Treatment & Management",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["treatment", "multimodal", "overview"],
    },
    {
      id: "acetaminophen-nsaids",
      title: "Acetaminophen and NSAIDs (non-opioid analgesics)",
      summary:
        "Acetaminophen (paracetamol) and NSAIDs like ibuprofen are common first-line painkillers, especially for nociceptive pain; they are not risk-free and have important limits, so use is guided by the care team.",
      detail:
        "Non-opioid analgesics are often the first medicines tried for many kinds of pain. Acetaminophen (paracetamol) reduces pain and fever and is generally well tolerated, but exceeding the recommended daily amount — easy to do because it is hidden in many combination products — can cause serious liver damage, and the margin is narrower for people with liver disease or significant alcohol use. Nonsteroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen, naproxen, and diclofenac reduce inflammation as well as pain, making them useful for arthritis and other inflammatory nociceptive pain, but they carry risks including stomach ulcers and bleeding, kidney injury, raised blood pressure, fluid retention, and cardiovascular effects — risks that rise with higher doses, longer use, older age, and certain conditions. For neuropathic and nociplastic pain these drugs often help little. Because of these trade-offs, even 'over-the-counter' painkillers should be used at the lowest effective dose for the shortest time needed, and anyone with kidney, heart, liver, or stomach conditions, or taking other medicines, should check suitability with a pharmacist or clinician.",
      sources: [
        {
          label: "Pain relievers (acetaminophen and NSAIDs — uses and cautions)",
          url: "https://medlineplus.gov/painrelievers.html",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "NSAIDs (risks and cautions)",
          url: "https://www.nhs.uk/medicines/nsaids/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "acetaminophen", "nsaids", "non-opioid", "nociceptive"],
      caution:
        "Even OTC painkillers carry real risks (liver, stomach, kidney, heart). Educational only — confirm what is suitable for you and at what dose with a pharmacist or clinician.",
    },
    {
      id: "neuropathic-medications",
      title: "Medicines for neuropathic and nociplastic pain",
      summary:
        "Certain antidepressants (duloxetine, tricyclics) and anti-seizure drugs (gabapentin, pregabalin) are first-line for nerve-related and central pain — they calm overactive nerve signaling rather than acting as ordinary painkillers.",
      detail:
        "Neuropathic pain (from nerve damage) and nociplastic pain (from altered central processing, as in fibromyalgia) usually respond poorly to ordinary painkillers, so different medicines are used that quiet overactive or oversensitive nerve signaling. First-line options commonly include certain antidepressants — duloxetine (an SNRI) and tricyclics such as amitriptyline and nortriptyline — and the anti-seizure 'gabapentinoids' gabapentin and pregabalin. These are not being used to treat depression or epilepsy here; they work on pain pathways directly, which is why they help even in people who are not depressed. They are typically started low and increased gradually, can take days to weeks to show benefit, and have side effects (drowsiness, dizziness, dry mouth, weight changes, and others) that influence the choice. Gabapentinoids in particular can add to the sedating, breathing-slowing effects of opioids and other depressants, an interaction the prescriber weighs carefully. As with all pain medicines, the right agent, dose, and combination are individualized by the care team, and benefits are judged against side effects and effect on function.",
      sources: [
        {
          label: "Peripheral Neuropathy (medicines for neuropathic pain)",
          url: "https://www.nhs.uk/conditions/peripheral-neuropathy/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Fibromyalgia (medications for central pain)",
          url: "https://www.niams.nih.gov/health-topics/fibromyalgia",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["treatment", "neuropathic", "gabapentinoids", "duloxetine", "tricyclics"],
      caution:
        "These medicines are started low and adjusted by a clinician; gabapentin/pregabalin can add to opioid and sedative effects. Educational only — not dosing advice.",
    },
    {
      id: "topical-treatments",
      title: "Topical treatments",
      summary:
        "Creams, gels, and patches — such as topical NSAIDs, lidocaine, and capsaicin — deliver pain relief to a localized area with less whole-body exposure, useful for some joint and neuropathic pain.",
      detail:
        "Topical treatments are applied to the skin over a painful area and can provide relief with lower levels of drug reaching the rest of the body, which often means fewer systemic side effects. Topical NSAID gels (for example diclofenac gel) can help localized nociceptive pain such as knee or hand osteoarthritis and are sometimes preferred over oral NSAIDs in older adults or those with stomach, kidney, or heart concerns. For localized neuropathic pain, lidocaine patches or gels (which numb the area) and capsaicin (derived from chili peppers, which works by depleting a pain-signaling chemical) are options; capsaicin can cause burning when first applied. Counter-irritant rubs containing menthol or similar ingredients are widely sold for temporary relief. Topicals are not free of effects — they can still be absorbed, cause skin reactions, or interact, and they are not suitable on broken skin — so they remain part of a plan guided by the care team. Their appeal is targeted relief, and they fit naturally into a multimodal approach alongside oral medicines and non-drug therapies.",
      sources: [
        {
          label: "Pain relievers (topical options)",
          url: "https://medlineplus.gov/painrelievers.html",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Peripheral Neuropathy (topical capsaicin and lidocaine)",
          url: "https://www.nhs.uk/conditions/peripheral-neuropathy/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "topical", "lidocaine", "capsaicin", "nsaids"],
    },
    {
      id: "opioids-role-and-risks",
      title: "Opioids: limited role, real risks",
      summary:
        "Opioids can help some pain but are not first-line for most chronic pain because benefits are often modest and risks — tolerance, dependence, overdose, and side effects — are serious; the CDC guideline urges caution and shared decisions.",
      detail:
        "Opioids (such as morphine, oxycodone, hydrocodone, tramadol, fentanyl, and buprenorphine) are powerful pain relievers with an important role in certain situations — acute severe pain, cancer pain, and end-of-life care — but for most chronic non-cancer pain they are not first-line. The CDC's 2022 guideline emphasizes maximizing non-opioid and non-drug treatments first, and, when opioids are considered, starting at the lowest effective dose, setting realistic goals, and regularly weighing benefits against harms. The reasons for caution are substantial: over time the body develops tolerance (needing more for the same effect) and physical dependence (withdrawal if stopped abruptly), and a minority develop opioid use disorder; opioids also cause constipation, drowsiness, hormonal effects, and — most dangerously — slowed breathing that can be fatal in overdose, a risk that rises sharply with higher doses and with other sedatives. For many people the long-term pain benefit is modest while the risks accumulate. None of this means opioids are never appropriate, but it explains why they are used selectively, monitored closely, paired with naloxone for those at risk, and reviewed regularly — all decisions made with the prescriber.",
      sources: [
        {
          label: "2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
        {
          label: "Prescription Opioids DrugFacts (benefits, tolerance, dependence, risks)",
          url: "https://nida.nih.gov/publications/drugfacts/prescription-opioids",
          publisher: "NIH / NIDA",
        },
      ],
      tags: ["treatment", "opioid", "risks", "tolerance", "dependence", "safety"],
      caution:
        "Opioid decisions, including whether they fit your situation, belong with the prescriber. Never adjust opioid doses yourself; combining them with sedatives or alcohol can be fatal. Educational only.",
    },
    {
      id: "opioid-tapering",
      title: "Opioid tapering — done gradually and collaboratively",
      summary:
        "If opioids are reduced or stopped, it should be done slowly and with support to avoid withdrawal and harm; abrupt, forced discontinuation is discouraged and can be dangerous.",
      detail:
        "Sometimes opioids are reduced or stopped — because benefits are limited, side effects or risks outweigh gains, or the person wishes to come off them. How this is done matters a great deal. The body adapts to regular opioids, so stopping suddenly can cause a very unpleasant withdrawal syndrome (aches, sweating, nausea, agitation, insomnia) and, importantly, can be unsafe: rapid or forced tapering has been linked to worse pain, distress, and even crises including overdose if a person seeks relief elsewhere. For these reasons, guidance from the CDC and others stresses that any taper should generally be slow, individualized, voluntary where possible, and supported — with the pace adjusted to how the person responds, attention to mood and function, and treatment of withdrawal symptoms. Other parts of the pain plan (non-opioid medicines, physical and psychological therapies) are strengthened alongside. The key educational points are that tapering is a collaborative process planned with the prescriber, that it is not a punishment, and that nobody should abruptly stop prescribed opioids on their own. Anyone struggling with opioids — including signs of dependence or use disorder — should be offered help, not abandoned.",
      sources: [
        {
          label: "2022 CDC Clinical Practice Guideline (tapering and discontinuation cautions)",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
        {
          label: "Prescription Opioids DrugFacts (dependence, withdrawal, and stopping safely)",
          url: "https://nida.nih.gov/publications/drugfacts/prescription-opioids",
          publisher: "NIH / NIDA",
        },
      ],
      tags: ["treatment", "opioid", "tapering", "withdrawal", "safety"],
      caution:
        "Never stop prescribed opioids abruptly on your own — tapering should be slow and supervised. Educational only; the plan and pace belong with the prescriber.",
    },
    {
      id: "interventional-procedures",
      title: "Interventional procedures: injections and nerve blocks",
      summary:
        "Targeted procedures — steroid injections, nerve blocks, and radiofrequency treatments — can ease pain from specific sources for some people, usually as part of a broader plan rather than a stand-alone cure.",
      detail:
        "When pain comes from an identifiable structure, interventional procedures can sometimes provide relief, typically as one part of a multimodal plan. Common examples include epidural steroid injections for nerve-root pain such as sciatica; joint and bursa injections of steroid and local anesthetic for arthritis-related pain; nerve blocks that interrupt a specific nerve's signals; trigger-point injections for certain muscle pain; and radiofrequency ablation, which uses heat to disable a small nerve carrying pain signals (often used for some spinal facet-joint pain). Benefits vary widely between conditions and individuals — some procedures offer temporary relief that allows progress with rehabilitation, while evidence for lasting benefit is mixed for several indications. Procedures carry their own small risks (bleeding, infection, nerve irritation, and effects of steroids) and are generally chosen when the pain source is reasonably clear and conservative measures have not been enough. They work best when paired with physical therapy and the rest of the plan rather than treated as a one-time fix. Whether a procedure is appropriate is a decision for a pain specialist based on the individual's diagnosis.",
      sources: [
        {
          label: "Pain Management (interventional procedures, injections, nerve blocks)",
          url: "https://my.clevelandclinic.org/health/treatments/21514-pain-management",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Chronic Pain (interventional treatment options)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["treatment", "injections", "nerve-block", "radiofrequency", "interventional"],
    },
    {
      id: "neuromodulation",
      title: "Neuromodulation: spinal cord stimulation and TENS",
      summary:
        "Neuromodulation uses electrical signals to alter pain transmission — from simple skin-surface TENS units to implanted spinal cord stimulators — and can help selected people with certain hard-to-treat pain.",
      detail:
        "Neuromodulation treats pain by delivering electrical signals that change how pain is transmitted or perceived. At the simplest level, transcutaneous electrical nerve stimulation (TENS) applies a mild current through pads on the skin; it is low-risk and helps some people, though the evidence for lasting benefit is modest and mixed. More advanced is spinal cord stimulation, in which a small device is implanted to send electrical pulses to the spinal cord; it is used for selected people with certain chronic pain conditions — such as persistent pain after back surgery or some neuropathic pain syndromes — usually after a trial period to gauge whether it helps before permanent implantation. Related techniques target peripheral nerves or other sites. These approaches do not cure the underlying problem; they aim to reduce pain enough to improve function, and they are reserved for carefully selected patients after other treatments, given the cost, the surgery involved, and variable results. As with interventional procedures, suitability is determined by a specialist, and neuromodulation fits within — rather than replacing — a comprehensive pain plan.",
      sources: [
        {
          label: "Peripheral Neuropathy (nerve and spinal cord stimulation)",
          url: "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy",
          publisher: "NIH / NINDS",
        },
        {
          label: "Pain Management (neuromodulation and TENS)",
          url: "https://my.clevelandclinic.org/health/treatments/21514-pain-management",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["treatment", "neuromodulation", "spinal-cord-stimulation", "tens"],
    },
  ],
});
