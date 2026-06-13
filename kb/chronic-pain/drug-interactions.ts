import { defineSection } from "../types.js";

/**
 * Key drug interactions — educational coverage of the interactions that matter
 * most for common chronic-pain medicines: the dangerous additive sedation of
 * opioids with benzodiazepines/CNS depressants/alcohol/gabapentinoids,
 * serotonin syndrome from combining serotonergic drugs (duloxetine, tramadol,
 * and others), NSAID cautions (GI/renal/cardiac and the "triple whammy"), and
 * acetaminophen + alcohol/liver.
 *
 * This is EDUCATIONAL background to help people ask good questions. It is NOT an
 * authoritative interaction check and never a definitive "safe/unsafe" ruling —
 * a pharmacist or clinician should review every actual medication and supplement
 * combination for an individual.
 */
export const drugInteractions = defineSection({
  id: "drug-interactions",
  title: "Key Drug Interactions",
  description:
    "Educational overview of the interactions that matter most for common pain medicines — opioids plus sedatives/alcohol/gabapentinoids (respiratory depression), serotonin syndrome from combined serotonergic drugs (duloxetine, tramadol), NSAID GI/renal/cardiac cautions, and acetaminophen and the liver. Always have a pharmacist or clinician check actual combinations.",
  entries: [
    {
      id: "interactions-how-to-think",
      title: "How to think about pain drug interactions",
      summary:
        "Pain regimens often involve several interacting medicines; the safe move is to keep one complete med-and-supplement list and have a pharmacist or clinician check it — not to self-judge 'safe' or 'unsafe.'",
      detail:
        "People managing chronic pain often take several medicines — sometimes an opioid, a nerve-pain drug, an anti-inflammatory, a sleep or anxiety medicine, and supplements — and many of these interact. Some combinations add up dangerously (especially anything that slows breathing on top of opioids), some raise the risk of serotonin syndrome, and some compound stomach, kidney, or liver risks. The entries here explain the best-known interactions so a person can recognize and ask about them, but they are not a substitute for an authoritative check. Whether a given combination is a problem for a particular person depends on their other conditions, kidney and liver function, doses, and timing — exactly the judgment a pharmacist or prescriber is trained to make. Practical habits that genuinely reduce risk: keep one up-to-date list of every prescription, over-the-counter product, vitamin, and herbal supplement; show it at every appointment and to the pharmacist with each new prescription; use one pharmacy where possible so interactions are screened automatically; and specifically ask 'does this interact with my pain medicines?' before starting anything new — including alcohol. Never treat any entry here as a definitive ruling.",
      sources: [
        {
          label: "2022 CDC Clinical Practice Guideline (assessing and reducing medication risks)",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
        {
          label: "Pain relievers (different pain medicines and their cautions)",
          url: "https://medlineplus.gov/painrelievers.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["drug-interactions", "overview", "safety", "pharmacist"],
      caution:
        "Educational only — not an interaction check. Have a pharmacist or clinician review your actual medications and supplements; this is never a definitive safe/unsafe ruling.",
    },
    {
      id: "opioids-benzodiazepines-cns-depressants",
      title: "Opioids + benzodiazepines and other CNS depressants",
      summary:
        "Opioids combined with benzodiazepines, alcohol, sleep aids, muscle relaxants, or sedating antihistamines add up to dangerously slowed breathing and a high overdose risk — the single most important pain-medicine interaction to know.",
      detail:
        "The most dangerous interaction in chronic-pain treatment is opioids combined with other central-nervous-system depressants. Benzodiazepines (diazepam, alprazolam, lorazepam, and others, used for anxiety or sleep), alcohol, 'Z-drug' sleep medicines, sedating muscle relaxants, and sedating antihistamines all suppress breathing, and their effects stack with opioids to cause profound respiratory depression that can be fatal. The opioid–benzodiazepine combination in particular contributes to a large share of opioid-overdose deaths, which is why the CDC guideline advises avoiding co-prescribing them whenever possible and why prescribers and pharmacists scrutinize these combinations. This does not mean a person taking both has done anything wrong, but it is a high-risk situation that calls for review — and, where the combination must continue, for extra caution and access to naloxone. Critically, several of these drugs (especially benzodiazepines and some others) cannot be stopped abruptly without risk, so changes must be made by the prescriber, never alone. Anyone on opioids should disclose all sedatives, sleep aids, and alcohol use so the combined risk can be managed.",
      sources: [
        {
          label: "2022 CDC Clinical Practice Guideline (avoid opioids with benzodiazepines)",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
        {
          label: "Opioids (combined CNS-depressant overdose risk)",
          url: "https://nida.nih.gov/research-topics/opioids",
          publisher: "NIH / NIDA",
        },
      ],
      tags: ["drug-interactions", "opioid", "benzodiazepines", "alcohol", "respiratory-depression", "safety"],
      evidence: "established",
      caution:
        "This combination can stop breathing. Do not start, stop, or change these drugs on your own — review urgently with a prescriber or pharmacist, and ask about naloxone.",
    },
    {
      id: "gabapentinoids-plus-opioids",
      title: "Gabapentinoids (gabapentin, pregabalin) + opioids",
      summary:
        "Gabapentin and pregabalin, common nerve-pain medicines, can add to the sedation and breathing suppression of opioids, raising overdose risk — a combination that warrants caution and monitoring.",
      detail:
        "Gabapentin and pregabalin (the 'gabapentinoids') are widely used for neuropathic pain and are often prescribed alongside opioids, but the combination deserves caution. On their own these drugs can cause drowsiness and dizziness; combined with opioids, they can add to sedation and, importantly, to respiratory depression, and research has linked the co-use of gabapentinoids and opioids to an increased risk of opioid-related overdose death compared with opioids alone. Regulators have issued warnings about the risk of serious breathing problems when gabapentinoids are taken with opioids or other CNS depressants, particularly in older adults and people with reduced lung function. This does not make the combination forbidden — it is sometimes clinically appropriate as part of reducing opioid doses — but it is a reason for careful dosing, monitoring for excess sedation, and awareness of the additive overdose risk, including ensuring naloxone is available where relevant. As always, the balance is a decision for the prescriber, and neither drug should be started, stopped, or changed without medical guidance, since gabapentinoids can also cause withdrawal if stopped suddenly.",
      sources: [
        {
          label: "Gabapentinoids and opioids (serious breathing problems warning)",
          url: "https://www.nhs.uk/medicines/pregabalin/",
          publisher: "NHS (UK)",
        },
        {
          label: "2022 CDC Clinical Practice Guideline (combining opioids with other CNS depressants)",
          url: "https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance/index.html",
          publisher: "CDC",
          year: 2022,
        },
      ],
      tags: ["drug-interactions", "gabapentinoids", "gabapentin", "pregabalin", "opioid", "safety"],
      evidence: "established",
      caution:
        "Gabapentin/pregabalin can add to opioid sedation and breathing suppression. Don't combine, change, or stop them on your own — confirm the plan with the prescriber.",
    },
    {
      id: "serotonin-syndrome",
      title: "Serotonin syndrome from combined serotonergic drugs",
      summary:
        "Pain medicines like duloxetine and tramadol raise serotonin, and combining them with each other or with antidepressants, triptans, or certain other drugs can rarely cause serotonin syndrome — a potentially serious reaction.",
      detail:
        "Several pain-related medicines increase serotonin activity, and combining them can, uncommonly, cause serotonin syndrome — a reaction ranging from mild to life-threatening. Culprits in pain care include the SNRI duloxetine, tramadol, and tapentadol, which can interact with each other and with SSRIs/SNRI antidepressants, tricyclics, migraine 'triptans,' the supplement St. John's wort, certain other opioids (such as fentanyl and methadone), some anti-nausea drugs, and MAO inhibitors. Symptoms can develop within hours of a new or increased serotonergic drug and include agitation or confusion, a fast heart rate, high blood pressure, dilated pupils, twitching or muscle rigidity, heavy sweating, shivering, diarrhea, and, in severe cases, high fever — a medical emergency. Because so many pain and mood medicines act on serotonin, this is a real-world interaction worth knowing, especially as tramadol is sometimes assumed to be a 'mild' painkiller. The risk is manageable: prescribers and pharmacists check for serotonergic combinations and watch dosing. Anyone starting a new medicine who develops these symptoms should seek urgent medical advice, and all serotonergic drugs and supplements should be on the medication list.",
      sources: [
        {
          label: "Serotonin syndrome (causes, drug combinations, and symptoms)",
          url: "https://medlineplus.gov/ency/article/007272.htm",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Tramadol (serotonin syndrome and interaction cautions)",
          url: "https://www.nhs.uk/medicines/tramadol/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "serotonin-syndrome", "duloxetine", "tramadol", "antidepressants", "safety"],
      evidence: "established",
      caution:
        "Tell your pharmacist about every serotonergic medicine and supplement (including St. John's wort). Seek urgent care for agitation, fever, twitching, or a racing heart after a new serotonergic drug.",
    },
    {
      id: "nsaid-cautions",
      title: "NSAID interactions: stomach, kidneys, heart, and the 'triple whammy'",
      summary:
        "NSAIDs interact with blood thinners (bleeding), blood-pressure and kidney drugs, and other NSAIDs; the combination of an NSAID with a diuretic and an ACE inhibitor/ARB (the 'triple whammy') can harm the kidneys.",
      detail:
        "NSAIDs (ibuprofen, naproxen, diclofenac, and others) are effective for inflammatory pain but interact with several common medicines. They raise bleeding risk when combined with anticoagulants and antiplatelet drugs (such as warfarin, direct oral anticoagulants, and aspirin) and add to stomach-ulcer risk, especially with steroids or in people with prior ulcers. They can blunt the effect of blood-pressure medicines and, importantly, stress the kidneys — a particular concern in the so-called 'triple whammy,' where an NSAID is combined with a diuretic ('water pill') and an ACE inhibitor or ARB, a trio that can cause acute kidney injury, especially during dehydration or illness. NSAIDs can also interact with lithium, methotrexate, and some diabetes medicines, and taking two NSAIDs together multiplies risk without added benefit. Older adults and people with heart, kidney, or liver disease are most vulnerable. None of this makes NSAIDs off-limits, but it is why even over-the-counter use should be checked against the person's other medicines and conditions. A pharmacist can quickly flag these combinations and suggest safer options or protective measures.",
      sources: [
        {
          label: "NSAIDs (interactions and cautions)",
          url: "https://www.nhs.uk/medicines/nsaids/",
          publisher: "NHS (UK)",
        },
        {
          label: "Pain relievers (NSAID cautions and interactions)",
          url: "https://medlineplus.gov/painrelievers.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["drug-interactions", "nsaids", "kidney", "bleeding", "blood-pressure", "safety"],
      evidence: "established",
      caution:
        "Even OTC NSAIDs interact with blood thinners and blood-pressure/kidney drugs. Check with a pharmacist before regular use, especially with heart, kidney, or liver conditions.",
    },
    {
      id: "acetaminophen-and-liver",
      title: "Acetaminophen, alcohol, and the liver",
      summary:
        "Acetaminophen is safe within limits but can cause serious liver damage if the daily maximum is exceeded — a risk increased by hidden acetaminophen in combination products and by regular heavy alcohol use.",
      detail:
        "Acetaminophen (paracetamol) is one of the most widely used pain relievers and is generally safe at recommended amounts, but exceeding the daily limit can cause severe, sometimes fatal, liver injury. A key real-world hazard is accidental double-dosing: acetaminophen is hidden in many combination products — cold and flu remedies, some prescription opioid–acetaminophen painkillers, and sleep aids — so a person can unknowingly take it from several sources at once and exceed the safe total. Regular heavy alcohol use increases the liver's vulnerability, and people with liver disease may need a lower limit. This makes acetaminophen an 'interaction' worth understanding even though it is sold over the counter: the interaction is with other acetaminophen-containing products and with alcohol. The protective steps are to read labels for acetaminophen (or paracetamol) content, avoid taking multiple products that contain it, stay within the recommended daily maximum, and check with a pharmacist if combining medicines or if liver disease or significant alcohol use is a factor. Suspected acetaminophen overdose is a medical emergency even if the person feels well, because liver damage can be delayed.",
      sources: [
        {
          label: "Acetaminophen (safe use, combination products, and liver risk)",
          url: "https://medlineplus.gov/druginfo/meds/a681004.html",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Pain relievers (acetaminophen and the liver)",
          url: "https://medlineplus.gov/painrelievers.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["drug-interactions", "acetaminophen", "alcohol", "liver", "safety"],
      evidence: "established",
      caution:
        "Check labels for acetaminophen/paracetamol in combination products to avoid accidental overdose. Suspected overdose is an emergency even if the person feels fine.",
    },
    {
      id: "otc-and-supplement-interactions",
      title: "Over-the-counter products and supplements",
      summary:
        "OTC remedies and supplements interact too — St. John's wort adds serotonin and alters drug levels, kava and valerian add sedation, and 'natural' pain products can be adulterated; tell the pharmacist about everything.",
      detail:
        "Interactions are not limited to prescriptions. The herbal antidepressant St. John's wort both adds to serotonin (raising serotonin-syndrome risk with duloxetine, tramadol, and others) and speeds the breakdown of many medicines, lowering their levels. Sedating supplements such as valerian, kava, and high-dose melatonin can add to the drowsiness of opioids, gabapentinoids, and sleep aids, while kava has been linked to liver harm. Some supplements affect bleeding (for example, high-dose fish oil, ginkgo, garlic), which matters alongside NSAIDs or blood thinners. A particular hazard is that some 'natural' pain or arthritis products have been found adulterated with hidden pharmaceuticals — including NSAIDs, steroids, or sedatives — creating unexpected interactions and risks. Because supplements and OTC medicines are easy to start without a prescription screen, they are exactly where interactions get missed. The same rule applies as for prescriptions: keep them on the medication list, and run anything new past a pharmacist who can check it against the full regimen and the person's conditions before it is started.",
      sources: [
        {
          label: "Chronic Pain and Complementary Health Approaches (supplement safety and interactions)",
          url: "https://www.nccih.nih.gov/health/chronic-pain-and-complementary-health-approaches-usefulness-and-safety",
          publisher: "NIH / NCCIH",
        },
        {
          label: "St. John's Wort and Depression: In Depth (drug interactions)",
          url: "https://www.nccih.nih.gov/health/st-johns-wort-and-depression-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["drug-interactions", "otc", "supplements", "st-johns-wort", "safety"],
      evidence: "established",
      caution:
        "'Natural' does not mean interaction-free — some products are even adulterated with hidden drugs. Tell your pharmacist about every supplement and OTC product.",
    },
  ],
});
