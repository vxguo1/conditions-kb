import { defineSection } from "../types.js";

/**
 * Key drug interactions — educational coverage of the interactions that matter
 * most for common RA medicines: methotrexate's interactions (NSAIDs,
 * trimethoprim/sulfamethoxazole, alcohol and hepatotoxicity, certain
 * antibiotics) and the folic-acid concept; biologics/JAK + serious-infection
 * risk and live-vaccine caution; NSAID + steroid GI risk; and the general
 * principle of reviewing combinations with a pharmacist or clinician.
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
    "Educational overview of interactions that matter for common RA medicines — methotrexate cautions (NSAIDs, trimethoprim/sulfamethoxazole, alcohol and the liver) and folic acid, biologic/JAK infection risk and live-vaccine timing, and NSAID-plus-steroid stomach risk. Always have a pharmacist or clinician check actual combinations.",
  entries: [
    {
      id: "interactions-how-to-think",
      title: "How to think about RA drug interactions",
      summary:
        "People with RA often take several medicines that can interact; the safe approach is to keep one full med-and-supplement list and have a pharmacist or clinician check it — not to self-judge 'safe' or 'unsafe.'",
      detail:
        "RA treatment often involves several medicines — a DMARD such as methotrexate, sometimes a biologic or JAK inhibitor, perhaps a short course of steroids, and pain relievers — and these can interact with one another and with drugs taken for other conditions. The entries here explain the best-known interactions so a person can recognize and ask about them, but they are not a substitute for an authoritative check. Whether a particular combination is a problem depends on the individual's kidney and liver function, other conditions, doses, and timing — exactly the judgment a pharmacist or prescriber is trained to make. Habits that genuinely reduce risk: keep one up-to-date list of every prescription, over-the-counter product, vitamin, and herbal supplement; show it at every appointment and to the pharmacist with each new prescription; use one pharmacy where possible so interactions are screened automatically; and ask specifically 'does this interact with my RA medicines?' before starting anything new. Never treat any entry here as a definitive ruling.",
      sources: [
        {
          label: "Methotrexate (interactions and the importance of telling your team)",
          url: "https://rheumatology.org/patients/methotrexate-rheumatrex-trexall-otrexup-rasuvo",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid Arthritis: In Depth (tell your providers about everything you take)",
          url: "https://www.nccih.nih.gov/health/rheumatoid-arthritis-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["drug-interactions", "overview", "safety", "pharmacist"],
      caution:
        "Educational only — not an interaction check. Have a pharmacist or clinician review your actual medications and supplements; this is never a definitive safe/unsafe ruling.",
    },
    {
      id: "methotrexate-alcohol-liver",
      title: "Methotrexate and alcohol: liver risk",
      summary:
        "Both methotrexate and alcohol can stress the liver, and together the risk of liver damage rises, which is why alcohol is limited while taking methotrexate and liver blood tests are monitored.",
      detail:
        "Methotrexate is processed in a way that can affect the liver, and one of the most important safety considerations is its combination with alcohol. Because alcohol also stresses the liver, drinking while on methotrexate can significantly increase the risk of liver damage, so people taking it are advised to limit alcohol — the exact limit, including whether to avoid it entirely, is set individually by the care team. This is also why regular blood tests check liver function (and blood counts) throughout treatment, so any early sign of a problem can be caught and the dose adjusted. The combined liver risk is a clear example of how two things that are each tolerable alone can matter together. Anyone on methotrexate who is unsure about alcohol, or who takes other medicines or supplements that affect the liver, should ask the prescriber or pharmacist rather than guessing — and should keep up with the scheduled monitoring blood tests.",
      sources: [
        {
          label: "Methotrexate (alcohol and liver-damage risk)",
          url: "https://rheumatology.org/patients/methotrexate-rheumatrex-trexall-otrexup-rasuvo",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — Treatment (methotrexate monitoring)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "methotrexate", "alcohol", "liver", "safety"],
      evidence: "established",
      caution:
        "Alcohol plus methotrexate raises the risk of liver damage. The safe amount (if any) is individual — ask your care team, and keep up with monitoring blood tests.",
    },
    {
      id: "methotrexate-antibiotics-nsaids",
      title: "Methotrexate with certain antibiotics and high-dose NSAIDs",
      summary:
        "Some drugs — notably trimethoprim/sulfamethoxazole and, at high or sustained doses, NSAIDs — can raise methotrexate levels or add to its effects on blood counts, so combinations need professional review.",
      detail:
        "Methotrexate interacts with several other medicines in ways worth knowing about. The antibiotic combination trimethoprim/sulfamethoxazole (co-trimoxazole) is a particularly important one: it shares effects on folate and can add to methotrexate's suppression of blood counts, an interaction clinicians specifically watch for, so it is generally avoided or used only with care in people on methotrexate. Nonsteroidal anti-inflammatory drugs (NSAIDs, such as ibuprofen or naproxen) are commonly used for arthritis pain and are often taken alongside the low weekly methotrexate doses used in RA, but because both are handled by the kidneys, high or sustained NSAID use — or reduced kidney function — can raise methotrexate levels, which is one reason kidney function is monitored and why this pairing should be overseen rather than self-managed. Certain other antibiotics and medicines can interact too. The unifying point is that a new antibiotic or regular painkiller is exactly the kind of addition to run past the prescriber or pharmacist, who can check it against the methotrexate and the person's kidney function.",
      sources: [
        {
          label: "Methotrexate (drug interactions to discuss with your provider)",
          url: "https://rheumatology.org/patients/methotrexate-rheumatrex-trexall-otrexup-rasuvo",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis: MedlinePlus Medical Encyclopedia (medicines and monitoring)",
          url: "https://medlineplus.gov/ency/article/000431.htm",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["drug-interactions", "methotrexate", "antibiotics", "nsaids", "kidney", "safety"],
      evidence: "established",
      caution:
        "Tell your prescriber or pharmacist you take methotrexate before starting any antibiotic or regular painkiller — some combinations need to be avoided or monitored.",
    },
    {
      id: "folic-acid-with-methotrexate",
      title: "Folic acid alongside methotrexate",
      summary:
        "Methotrexate interferes with folate, so a folic acid (folate) supplement is commonly prescribed with it to reduce side effects — an example of a deliberate, protective drug pairing.",
      detail:
        "Methotrexate works partly by interfering with folate (a B vitamin) pathways, and this contributes to some of its side effects, such as mouth sores, nausea, and effects on blood counts. To counter this, clinicians commonly prescribe a folic acid (or folate) supplement to be taken alongside methotrexate, which reduces these side effects without undermining methotrexate's benefit for RA. This is a useful illustration that not all drug interactions are harmful — some are intentional and protective. The timing of folic acid relative to the weekly methotrexate dose, and the exact form and amount, are set by the care team. People taking methotrexate should follow the folic acid regimen as prescribed and should not start or stop folate-containing supplements on their own, since the interaction is being used deliberately; over-the-counter multivitamins and 'B-complex' products contain folate too, which is another reason to keep the team informed of everything taken.",
      sources: [
        {
          label: "Methotrexate (folic acid supplementation to reduce side effects)",
          url: "https://rheumatology.org/patients/methotrexate-rheumatrex-trexall-otrexup-rasuvo",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Rheumatoid arthritis — Treatment (methotrexate and folic acid)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "methotrexate", "folic-acid", "side-effects"],
      evidence: "established",
    },
    {
      id: "biologics-jak-infection-stacking",
      title: "Stacking immunosuppressants: combined infection risk",
      summary:
        "Combining immune-suppressing RA drugs — or adding one to steroids — increases the risk of serious infection, so combinations are chosen and monitored carefully by the care team.",
      detail:
        "Many RA medicines suppress the immune system, and combining them compounds the infection risk. Biologics and JAK inhibitors are often used together with methotrexate (which can improve effectiveness), and steroids may be added during flares — each layer adds immunosuppression and, with it, a greater chance of serious infections. For this reason, some combinations are used cautiously or avoided: for example, using two biologics together, or a biologic with a JAK inhibitor, generally raises infection risk without enough added benefit and is not recommended. Before starting biologics or JAK inhibitors, people are screened for infections such as tuberculosis and hepatitis that could flare under immunosuppression. JAK inhibitors carry a particular risk of shingles. The practical implications: report signs of infection promptly, keep vaccinations current (see below), and let the team manage which immune-suppressing drugs are combined. This is educational background — decisions about combining these medicines, and pausing them during infection, belong with the rheumatology team.",
      sources: [
        {
          label: "Rheumatoid arthritis — Treatment (biologicals, JAK inhibitors, infection risk)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Treatments (biologic and targeted synthetic DMARDs)",
          url: "https://rheumatology.org/patients/treatments",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["drug-interactions", "biologics", "jak-inhibitors", "immunosuppression", "infection", "safety"],
      evidence: "established",
      caution:
        "Combining immune-suppressing RA drugs increases infection risk. Which drugs are combined, and when to pause them for infection, are decisions for the care team.",
    },
    {
      id: "live-vaccines-on-immunosuppressants",
      title: "Live vaccines while on immunosuppressants",
      summary:
        "Live (weakened) vaccines can occasionally cause illness in people whose immune system is suppressed by RA drugs, so their timing and use require care — a drug-and-vaccine interaction to plan around.",
      detail:
        "An important interaction in RA is between immune-suppressing medicines and 'live' vaccines — those made from a weakened but living form of a germ (examples include some shingles, measles-mumps-rubella, varicella, and yellow fever vaccines). In a person whose immune system is suppressed by biologics, JAK inhibitors, higher-dose steroids, or some DMARDs, a live vaccine can occasionally cause the very infection it is meant to prevent, so live vaccines may need to be avoided or carefully timed around these medicines. Ideally, needed live vaccines are given before starting immunosuppressive treatment, with a suitable interval beforehand. Non-live vaccines (such as the inactivated flu vaccine, most COVID-19 vaccines, pneumococcal vaccines, and the recombinant shingles vaccine) are generally safe and recommended, though immunosuppression can reduce how well they work, and the timing of certain medicines around vaccination is sometimes adjusted to improve the response. The specifics — which vaccines, and when — are individualized using rheumatology vaccination guidance and the care team's advice; this is a planned-around interaction, not a reason to skip recommended vaccines.",
      sources: [
        {
          label: "Vaccinations in Patients with Rheumatic & Musculoskeletal Disease (live vaccines and immunosuppression)",
          url: "https://rheumatology.org/vaccinations-guideline",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Vaccine Guidelines for Individuals with Rheumatic and Musculoskeletal Diseases",
          url: "https://rheumatology.org/patient-blog/vaccine-guidelines-for-individuals-with-rheumatic-and-musculoskeletal-diseases",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["drug-interactions", "live-vaccines", "immunosuppression", "vaccination", "safety"],
      evidence: "established",
      caution:
        "Live vaccines may be unsafe while on RA immunosuppressants and need careful timing — never get a live vaccine without checking with the care team first.",
    },
    {
      id: "nsaids-steroids-gi-risk",
      title: "NSAIDs plus steroids: stomach and bleeding risk",
      summary:
        "Taking NSAIDs together with corticosteroids raises the risk of stomach ulcers and gastrointestinal bleeding, a combination that may call for stomach-protecting measures.",
      detail:
        "NSAIDs (such as ibuprofen and naproxen) and corticosteroids (such as prednisone) are both sometimes used in RA — NSAIDs for pain and inflammation, steroids to bridge flares — but combining them raises the risk of stomach ulcers and gastrointestinal bleeding above either alone. NSAIDs can irritate the stomach lining and impair its protective mechanisms, and adding a steroid increases the ulcer and bleeding risk further; the risk is higher in older adults, those with a history of ulcers, and those also taking blood thinners. Because of this, clinicians may limit using the two together, use the lowest effective doses for the shortest time, or add a stomach-protecting medicine (such as a proton pump inhibitor) when the combination is needed. NSAIDs also have their own cautions around the kidneys, blood pressure, and heart, which matter given RA's elevated cardiovascular risk. Warning signs of a GI bleed — black or tarry stools, vomiting blood, or severe stomach pain — are urgent. As always, how to use these drugs together is a decision for the prescriber or pharmacist, not for self-management.",
      sources: [
        {
          label: "Rheumatoid arthritis — Treatment (NSAIDs and pain relief)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Rheumatoid arthritis — Diagnosis and treatment (NSAIDs and steroids)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/diagnosis-treatment/drc-20353653",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["drug-interactions", "nsaids", "steroids", "gastrointestinal", "bleeding", "safety"],
      evidence: "established",
      caution:
        "Black or tarry stools, vomiting blood, or severe stomach pain while on NSAIDs and/or steroids are emergencies. Combining these drugs should be overseen by a clinician or pharmacist.",
    },
  ],
});
