import { defineSection } from "../types.js";

/**
 * Key drug interactions — educational coverage of the interactions that matter
 * most for depression medicines: serotonin syndrome from combining serotonergic
 * drugs (SSRIs/SNRIs + triptans, tramadol, MAOIs, linezolid, St John's wort),
 * MAOI dietary (tyramine) and drug interactions (hypertensive crisis), increased
 * bleeding risk with NSAIDs/anticoagulants, antidepressants triggering mania in
 * bipolar disorder, and discontinuation effects.
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
    "Educational overview of interactions that matter for depression medicines — serotonin syndrome from combining serotonergic drugs, MAOI food/drug restrictions, increased bleeding risk with NSAIDs/anticoagulants, the bipolar-mania caution, and discontinuation effects. Always have a pharmacist or clinician check actual combinations.",
  entries: [
    {
      id: "interactions-how-to-think",
      title: "How to think about antidepressant drug interactions",
      summary:
        "Antidepressants can interact with other medicines, supplements, and substances in important ways; the safe approach is to keep one full med-and-supplement list and have a pharmacist or clinician check it — not to self-judge 'safe' or 'unsafe.'",
      detail:
        "Medications for depression can interact with other prescriptions, over-the-counter products, herbal supplements, and substances like alcohol, sometimes in serious ways. The entries here explain the best-known interactions so a person can recognize and ask about them, but they are not a substitute for an authoritative check by a professional. Whether a given combination is a problem depends on the specific drugs, doses, the person's other conditions, and timing — exactly the judgment a pharmacist or prescriber is trained to make. Practical habits that genuinely reduce risk: keep one up-to-date list of every prescription, OTC product, vitamin, and herbal or 'natural' supplement; show it at every appointment and to the pharmacist with each new prescription; use one pharmacy where possible so interactions are screened automatically; and specifically ask 'does this interact with my antidepressant?' before starting anything new, including supplements. Never treat any entry here as a definitive ruling, and never start or stop a medication based on it. This is educational information to support good questions, not personalized advice.",
      sources: [
        {
          label: "Mental Health Medications — interactions and talking to your provider/pharmacist",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Serotonin syndrome — drug combinations to be aware of",
          url: "https://www.mayoclinic.org/diseases-conditions/serotonin-syndrome/symptoms-causes/syc-20354758",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["drug-interactions", "overview", "safety", "pharmacist", "mental-health"],
      caution:
        "Educational only — not an interaction check. Have a pharmacist or clinician review your actual medications and supplements; this is never a definitive safe/unsafe ruling.",
    },
    {
      id: "serotonin-syndrome",
      title: "Serotonin syndrome from combining serotonergic drugs",
      summary:
        "Combining medicines that raise serotonin — such as SSRIs/SNRIs with triptans, tramadol, MAOIs, linezolid, or St John's wort — can cause serotonin syndrome, a potentially serious reaction; this is a key reason to have combinations checked.",
      detail:
        "Serotonin syndrome is a potentially serious reaction caused by too much serotonin activity, most often when two or more serotonin-raising drugs are combined or a dose is increased. Many depression treatments raise serotonin (SSRIs, SNRIs, some others), and combining them with other serotonergic agents increases the risk. Examples of drugs that can add to serotonin include migraine 'triptans,' the pain medicine tramadol, MAOIs (a particularly dangerous combination with other serotonergic drugs), the antibiotic linezolid, the antinausea drug metoclopramide, certain other antidepressants, and the herbal product St John's wort. Symptoms range from mild (shivering, diarrhea, restlessness, sweating, fast heartbeat) to severe (high fever, muscle rigidity, marked confusion, seizures) and, when severe, can be life-threatening and require emergency care. The point is not that these drugs can never be used together — sometimes they are, carefully — but that such combinations need professional oversight and that new symptoms after a change deserve prompt attention. This is exactly why every new medicine or supplement should be checked against current antidepressants by a pharmacist or prescriber. Educational only — not a personalized assessment.",
      sources: [
        {
          label: "Serotonin syndrome — symptoms, causes, and drug combinations",
          url: "https://www.mayoclinic.org/diseases-conditions/serotonin-syndrome/symptoms-causes/syc-20354758",
          publisher: "Mayo Clinic",
        },
        {
          label: "St. John's Wort and Depression (serotonin syndrome risk with antidepressants)",
          url: "https://www.nccih.nih.gov/health/st-johns-wort-and-depression-in-depth",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["drug-interactions", "serotonin-syndrome", "ssri", "snri", "triptans", "tramadol", "safety"],
      evidence: "established",
      caution:
        "Severe serotonin syndrome is a medical emergency (high fever, rigidity, confusion, seizures) — call 911. Always have new medicines or supplements checked against your antidepressant.",
    },
    {
      id: "maoi-interactions-tyramine",
      title: "MAOIs: food (tyramine) and drug interactions",
      summary:
        "MAOI antidepressants require avoiding foods high in tyramine (such as aged cheeses and cured meats) and many medications, because these combinations can cause a dangerous spike in blood pressure or serotonin syndrome.",
      detail:
        "Monoamine oxidase inhibitors (MAOIs) — older but still-used antidepressants such as phenelzine, tranylcypromine, and isocarboxazid — have especially important interactions. Because MAOIs block an enzyme that breaks down tyramine (a substance in certain foods), eating tyramine-rich foods while taking them can cause a sudden, dangerous rise in blood pressure called a hypertensive crisis. For that reason, MAOIs come with specific dietary restrictions — commonly including aged cheeses, cured or fermented meats, some fermented soy products, certain draft beers, and others — that the prescriber and pharmacist explain in detail. MAOIs also interact dangerously with many medications, including other antidepressants, certain pain medicines, decongestants and stimulants, and serotonergic drugs (risking serotonin syndrome), and they require washout periods when switching to or from other antidepressants. These precautions are why MAOIs are usually reserved for situations where other treatments haven't worked and are managed with careful specialist guidance. Anyone on an MAOI should follow their team's specific dietary and medication instructions and check every new product, food concern, or symptom (such as a severe headache) with them. Educational only — the prescriber and pharmacist provide the authoritative list.",
      sources: [
        {
          label: "Mental Health Medications — MAOIs and dietary/drug restrictions",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Serotonin syndrome — MAOIs and combinations",
          url: "https://www.mayoclinic.org/diseases-conditions/serotonin-syndrome/symptoms-causes/syc-20354758",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["drug-interactions", "maoi", "tyramine", "hypertensive-crisis", "diet", "safety"],
      evidence: "established",
      caution:
        "On an MAOI, follow your team's specific food and medication rules exactly, and report a sudden severe headache urgently. Never combine an MAOI with other antidepressants on your own.",
    },
    {
      id: "bleeding-risk-nsaids-anticoagulants",
      title: "Bleeding risk with NSAIDs and anticoagulants",
      summary:
        "SSRIs and SNRIs can modestly increase bleeding risk, and this is greater when combined with NSAIDs (like ibuprofen), aspirin, or blood thinners — a reason to check before adding common pain relievers.",
      detail:
        "Because serotonin plays a role in how platelets help blood clot, SSRIs and SNRIs can modestly increase the tendency to bleed. On their own this is usually a small effect, but the risk rises when these antidepressants are combined with other drugs that affect bleeding — such as nonsteroidal anti-inflammatory drugs (NSAIDs like ibuprofen and naproxen), aspirin, and anticoagulant or antiplatelet 'blood thinners' — and the effect on the stomach lining can add up, increasing the chance of gastrointestinal bleeding in particular. This does not mean these combinations are forbidden; many people use them with appropriate care, and sometimes a clinician adds stomach protection or chooses a different pain reliever (such as, in some cases, acetaminophen/paracetamol). It does mean that adding an over-the-counter NSAID or starting a blood thinner while on an SSRI or SNRI is worth checking with a pharmacist or prescriber, and that signs of bleeding (such as black or bloody stools, unusual bruising, or blood when vomiting) deserve prompt attention. This is educational information; individualized decisions belong with the care team and pharmacist.",
      sources: [
        {
          label: "Mental Health Medications — antidepressant side effects and interactions",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — SSRIs and other medicines (bleeding caution)",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "bleeding", "nsaids", "anticoagulants", "ssri", "snri", "safety"],
      evidence: "established",
      caution:
        "Check with a pharmacist before adding NSAIDs, aspirin, or blood thinners to an SSRI/SNRI. Signs of bleeding (black/bloody stools, unusual bruising) warrant prompt medical attention.",
    },
    {
      id: "antidepressants-triggering-mania",
      title: "Antidepressants and the risk of triggering mania",
      summary:
        "In people with bipolar disorder, an antidepressant taken without a mood stabilizer can trigger a manic episode or rapid cycling — which is why screening for bipolarity before starting an antidepressant is so important.",
      detail:
        "A critical interaction is not between two drugs but between an antidepressant and an individual's underlying condition: in people with bipolar disorder, antidepressants used alone (without a mood stabilizer) can trigger a manic or hypomanic episode or rapid cycling between highs and lows. Because people with bipolar disorder often first seek help during a depressive phase, and past 'highs' can be subtle or unrecognized, depression can be mistaken for ordinary (unipolar) major depression and treated with an antidepressant that then destabilizes mood. This is the practical reason that screening for a history of mania/hypomania and for bipolar family history before starting an antidepressant is a key safety step (see the diagnosis section). For someone already on an antidepressant, signs of a possible switch into mania — markedly reduced need for sleep, racing thoughts, unusual energy or irritability, grandiosity, or risky behavior — should be reported to the prescriber promptly, as the treatment approach may need to change. None of this is a reason to fear antidepressants in unipolar depression, where they are valuable; it is a reason the right diagnosis and professional oversight matter. Educational only — not a substitute for clinical assessment.",
      sources: [
        {
          label: "Bipolar Disorder — antidepressants can trigger mania; need for mood stabilizers",
          url: "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
        {
          label: "Mental Health Medications — antidepressants and bipolar caution",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["drug-interactions", "bipolar", "mania", "antidepressants", "safety", "mental-health"],
      evidence: "established",
      caution:
        "If a high or agitated state, racing thoughts, or sharply reduced need for sleep appears after starting an antidepressant, contact the prescriber promptly — this can signal a switch into mania.",
    },
    {
      id: "discontinuation-and-alcohol",
      title: "Stopping antidepressants and alcohol/substance interactions",
      summary:
        "Stopping antidepressants abruptly can cause discontinuation symptoms, so doses are tapered with the prescriber; alcohol and other substances can also interact with antidepressants and worsen depression.",
      detail:
        "Two further interaction-related cautions are worth knowing. First, antidepressants are generally not stopped suddenly: doing so can cause 'discontinuation syndrome' — symptoms such as flu-like feelings, dizziness, irritability, sleep disturbance, and electric-shock sensations — that, while usually not dangerous, can be uncomfortable, and stopping prematurely also raises relapse risk. For these reasons, coming off an antidepressant is done gradually under the prescriber's guidance, not abruptly or on one's own. Second, alcohol and recreational drugs interact with antidepressants and with depression itself: alcohol can worsen mood and sleep, may increase side effects or sedation with some antidepressants, and can reduce the benefit of treatment, while other substances carry their own risks and interactions. People are commonly advised to be cautious with or avoid alcohol while treating depression, and to be honest with their clinician about any substance use so it can be considered safely. As with all the entries here, specifics depend on the individual and the exact medicines, and a pharmacist or prescriber is the right source for personalized guidance. Educational only.",
      sources: [
        {
          label: "Mental Health Medications — do not stop abruptly; discontinuation effects",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — coming off antidepressants and alcohol",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "discontinuation", "tapering", "alcohol", "safety", "mental-health"],
      evidence: "established",
      caution:
        "Never stop an antidepressant abruptly — taper only with your prescriber. Discuss any alcohol or substance use with your clinician so interactions can be managed safely.",
    },
  ],
});
