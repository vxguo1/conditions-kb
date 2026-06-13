import { defineSection } from "../types.js";

/**
 * Key drug interactions — educational coverage of the interactions that matter
 * most for common bipolar medications. LITHIUM interactions are central:
 * NSAIDs, ACE inhibitors/ARBs, thiazide and loop diuretics, and
 * dehydration/low sodium can all raise lithium toward TOXICITY. Also:
 * lamotrigine + valproate (rash risk), lamotrigine + hormonal contraceptives,
 * carbamazepine enzyme induction, and antidepressant-induced mania.
 *
 * This is EDUCATIONAL background to help people ask good questions. It is NOT an
 * authoritative interaction check and never a definitive "safe/unsafe" ruling —
 * a pharmacist or clinician must review every actual medication and supplement
 * combination for an individual.
 */
export const drugInteractions = defineSection({
  id: "drug-interactions",
  title: "Key Drug Interactions",
  description:
    "Educational overview of interactions that matter for bipolar medicines — above all the many drugs and conditions that raise lithium toward toxicity (NSAIDs, ACE inhibitors/ARBs, diuretics, dehydration, low salt), plus lamotrigine + valproate rash risk, lamotrigine + contraceptives, carbamazepine enzyme induction, and antidepressant-induced mania. Always have a pharmacist or clinician check actual combinations.",
  entries: [
    {
      id: "interactions-how-to-think",
      title: "How to think about bipolar drug interactions",
      summary:
        "Bipolar medications have important, sometimes serious interactions; the safe approach is to keep one complete med-and-supplement list and have a pharmacist or clinician check it — not to self-judge 'safe' or 'unsafe.'",
      detail:
        "Several medications used in bipolar disorder have clinically important interactions — lithium in particular can be pushed toward toxic levels by common drugs and everyday situations, and others (valproate, lamotrigine, carbamazepine) interact with each other, with contraceptives, and with many other medicines. The entries here explain the best-known interactions so a person can recognize and ask about them, but they are not a substitute for an authoritative check. Whether a given combination is a problem depends on the individual's kidney function, hydration, doses, other conditions, and timing — exactly the judgment a pharmacist or prescriber is trained to make. Habits that genuinely reduce risk: keep one current list of every prescription, over-the-counter product, vitamin, supplement, and recreational substance; show it at every appointment and to the pharmacist with each new prescription; use one pharmacy where possible so interactions are screened automatically; and specifically ask 'does this interact with my bipolar medicines?' before starting anything new — including over-the-counter painkillers. Never treat any entry here as a definitive ruling.",
      sources: [
        {
          label: "Lithium — taking it with other medicines and supplements",
          url: "https://www.nhs.uk/medicines/lithium/",
          publisher: "NHS (UK)",
        },
        {
          label: "Herb–Drug Interactions: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/herb-drug-interactions-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["drug-interactions", "overview", "safety", "pharmacist"],
      caution:
        "Educational only — not an interaction check. Have a pharmacist or clinician review your actual medications and supplements; this is never a definitive safe/unsafe ruling.",
    },
    {
      id: "lithium-nsaids",
      title: "Lithium and NSAIDs (ibuprofen, naproxen)",
      summary:
        "Common anti-inflammatory painkillers (NSAIDs) can raise lithium levels by reducing how much the kidneys clear, pushing levels toward the toxic range — a major reason to check before using them.",
      detail:
        "Nonsteroidal anti-inflammatory drugs (NSAIDs) — such as ibuprofen, naproxen, and others, including many over-the-counter pain and cold remedies — are one of the most important interactions for people on lithium. NSAIDs reduce blood flow and lithium handling in the kidneys, which decreases how much lithium the body excretes and can raise blood lithium levels, sometimes substantially, toward the toxic range. Because NSAIDs are sold without a prescription, this interaction is easy to trigger unknowingly. People on lithium are generally advised to be cautious with NSAIDs and to ask their pharmacist or prescriber before using them; an alternative pain reliever may be suggested, or, if an NSAID is necessary, closer monitoring of lithium levels may be needed. This does not mean every dose is dangerous, but it is exactly the kind of decision that should be checked rather than assumed. Anyone who develops signs of lithium toxicity (see Acute Emergencies) after starting a painkiller should seek prompt advice.",
      sources: [
        {
          label: "Lithium — taking it with other medicines (including ibuprofen/NSAIDs)",
          url: "https://www.nhs.uk/medicines/lithium/",
          publisher: "NHS (UK)",
        },
        {
          label: "Lithium — side effects and signs of high levels",
          url: "https://www.nhs.uk/medicines/lithium/side-effects-of-lithium/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "lithium", "nsaids", "toxicity", "otc", "safety"],
      evidence: "established",
      caution:
        "Ask a pharmacist before taking ibuprofen, naproxen, or other NSAIDs (including in cold remedies) while on lithium — they can raise lithium toward toxic levels.",
    },
    {
      id: "lithium-blood-pressure-drugs",
      title: "Lithium and blood-pressure medicines (ACE inhibitors, ARBs, diuretics)",
      summary:
        "ACE inhibitors, ARBs, and diuretics (thiazide and loop 'water pills') can raise lithium levels and increase toxicity risk; combinations like these need careful monitoring by the care team.",
      detail:
        "Several common blood-pressure and heart medications interact with lithium by affecting how the kidneys handle it. ACE inhibitors (such as lisinopril, ramipril) and ARBs (such as losartan) can reduce lithium clearance and raise its level, sometimes with a delayed effect over weeks, so levels are watched closely when these are started or changed. Thiazide diuretics (such as hydrochlorothiazide) are well known to raise lithium levels by increasing how much the kidneys reabsorb it, and loop diuretics (such as furosemide) and other 'water pills' can also alter lithium levels and hydration. Because these drugs are widely used for high blood pressure and heart failure — conditions that can co-occur with bipolar disorder — these combinations are common and are managed, not necessarily avoided, through careful monitoring and dose adjustment by the prescriber. The key point is that starting, stopping, or changing any blood-pressure medicine while on lithium is a reason for a level check, and these decisions belong with the care team and pharmacist.",
      sources: [
        {
          label: "Lithium — interactions with other medicines (incl. diuretics and blood-pressure drugs)",
          url: "https://www.nhs.uk/medicines/lithium/",
          publisher: "NHS (UK)",
        },
        {
          label: "Lithium — side effects and high-level warning signs",
          url: "https://www.nhs.uk/medicines/lithium/side-effects-of-lithium/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "lithium", "ace-inhibitors", "arbs", "diuretics", "toxicity", "safety"],
      evidence: "established",
      caution:
        "Don't start, stop, or change blood-pressure pills or diuretics on your own while taking lithium — these can change lithium levels and need monitoring.",
    },
    {
      id: "lithium-dehydration-sodium",
      title: "Lithium, dehydration, and salt (sodium) balance",
      summary:
        "Anything that dehydrates you or lowers your salt intake — vomiting, diarrhea, heavy sweating, hot weather, or a sudden low-sodium diet — can raise lithium levels toward toxicity.",
      detail:
        "Lithium handling by the kidneys is tightly linked to the body's fluid and sodium (salt) balance, so non-drug factors can be just as important as medications. When a person becomes dehydrated or low on sodium, the kidneys hold on to more lithium, raising its blood level — potentially into the toxic range. Common triggers include vomiting and diarrhea (for example from a stomach bug), fever and heavy sweating, hot weather or intense exercise, reduced fluid intake, and sudden changes in salt intake, including starting a strict low-salt diet. For this reason, people on lithium are generally advised to drink fluids consistently, keep their salt intake roughly steady rather than making sudden changes, and be especially careful during illness, heat, or strenuous activity, seeking advice if they cannot keep fluids down. These are standard 'sick-day' and hot-weather precautions for lithium, and the specifics — including when to check a level or hold a dose — should be set with the prescriber, never guessed at.",
      sources: [
        {
          label: "Lithium — staying hydrated, salt, and when levels can rise",
          url: "https://www.nhs.uk/medicines/lithium/",
          publisher: "NHS (UK)",
        },
        {
          label: "Lithium — common questions (diet, fluids, and salt)",
          url: "https://www.nhs.uk/medicines/lithium/common-questions-about-lithium/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "lithium", "dehydration", "sodium", "sick-day", "toxicity", "safety"],
      evidence: "established",
      caution:
        "On lithium, dehydration or a sudden drop in salt intake can raise levels toward toxicity. Keep fluids and salt steady, take extra care when ill or in heat, and ask your team about sick-day rules.",
    },
    {
      id: "lamotrigine-valproate",
      title: "Lamotrigine and valproate — increased rash risk",
      summary:
        "Valproate raises blood levels of lamotrigine and increases the risk of serious skin reactions, so when the two are combined, lamotrigine is started even lower and increased even more slowly.",
      detail:
        "Lamotrigine and valproate are both used in bipolar disorder and are sometimes prescribed together, but they have an important interaction: valproate slows the breakdown of lamotrigine, roughly doubling its blood level. Because lamotrigine's risk of a serious skin reaction (such as Stevens-Johnson syndrome) is linked to high levels and to fast dose increases, combining it with valproate raises that risk, so prescribers use a markedly lower starting dose and slower increase of lamotrigine when valproate is on board. This is a clear example of why these medicines must be dosed by a specialist and why any new rash — particularly in the first weeks, or with fever, blistering, or mouth or eye involvement — should be reported urgently and may mean stopping lamotrigine. People should never adjust the dose or timing of either drug themselves, and any change to one when taking the other is a reason for careful prescriber oversight. The combination can be used safely, but only with the right dosing precautions.",
      sources: [
        {
          label: "Lamotrigine — serious rash and interaction with valproate",
          url: "https://www.nhs.uk/medicines/lamotrigine/",
          publisher: "NHS (UK)",
        },
        {
          label: "Stevens-Johnson syndrome / toxic epidermal necrolysis (severe skin reaction)",
          url: "https://medlineplus.gov/genetics/condition/stevens-johnson-syndrome-toxic-epidermal-necrolysis/",
          publisher: "MedlinePlus Genetics (NIH / U.S. National Library of Medicine)",
        },
      ],
      tags: ["drug-interactions", "lamotrigine", "valproate", "rash", "stevens-johnson", "safety"],
      evidence: "established",
      caution:
        "Combining lamotrigine and valproate raises the risk of a serious rash; dosing must be set by the prescriber. Report any rash urgently and never speed up dose changes yourself.",
    },
    {
      id: "lamotrigine-contraceptives",
      title: "Lamotrigine and hormonal contraceptives",
      summary:
        "Estrogen-containing contraceptives can lower lamotrigine levels (and stopping them can raise levels), so starting or stopping hormonal birth control may require a lamotrigine dose review.",
      detail:
        "There is a two-way interaction between lamotrigine and combined (estrogen-containing) hormonal contraceptives, such as 'the pill.' Estrogen speeds up the breakdown of lamotrigine, which can lower its blood level and potentially reduce its mood-stabilizing effect; conversely, stopping the contraceptive — or during the hormone-free 'pill-free' week — lamotrigine levels can rise. Because of this, starting, stopping, or changing a hormonal contraceptive while on lamotrigine may call for a review and possible adjustment of the lamotrigine dose by the prescriber, and the pattern of use matters. This interaction is easy to overlook because contraception and psychiatric care are often handled by different clinicians, which is exactly why keeping one complete medication list and flagging any change to all providers is so valuable. Anyone on lamotrigine considering a change in contraception should raise it with their prescriber and pharmacist rather than assuming it is fine.",
      sources: [
        {
          label: "Lamotrigine — taking it with hormonal contraceptives",
          url: "https://www.nhs.uk/medicines/lamotrigine/common-questions-about-lamotrigine/",
          publisher: "NHS (UK)",
        },
        {
          label: "Lamotrigine — medicine information and interactions",
          url: "https://www.nhs.uk/medicines/lamotrigine/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "lamotrigine", "contraceptives", "hormonal", "safety"],
      evidence: "established",
      caution:
        "Starting or stopping estrogen-containing birth control can change lamotrigine levels — tell both your prescriber and pharmacist before any change.",
    },
    {
      id: "carbamazepine-enzyme-induction",
      title: "Carbamazepine and enzyme-induction interactions",
      summary:
        "Carbamazepine speeds up the liver's breakdown of many drugs, which can lower their levels and effectiveness — including hormonal contraceptives and several other medicines, and even its own level over time.",
      detail:
        "Carbamazepine is a potent inducer of liver enzymes, meaning it makes the body break down many medications faster, which can lower their blood levels and reduce how well they work. The list of affected drugs is long and includes hormonal contraceptives (so it can reduce the reliability of the pill and some other hormonal methods, an important point for pregnancy prevention), some other psychiatric and anticonvulsant medicines, certain blood thinners, some heart and HIV medications, and many others; it can even speed up its own metabolism, so levels may drift over time. It can also interact with drugs that raise its own level, increasing side effects. Because of this broad and clinically significant interaction profile, anyone taking carbamazepine needs a thorough interaction review whenever any medication is added or stopped, and reliable contraception may require non-hormonal or adjusted methods. This is a prime example of why a pharmacist's medication review is so valuable, and why no new medicine should be started without checking it against carbamazepine.",
      sources: [
        {
          label: "Carbamazepine — interactions with other medicines and contraceptives",
          url: "https://www.nhs.uk/medicines/carbamazepine/",
          publisher: "NHS (UK)",
        },
        {
          label: "Bipolar disorder — carbamazepine and drug interactions",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["drug-interactions", "carbamazepine", "enzyme-inducer", "contraceptives", "safety"],
      evidence: "established",
      caution:
        "Carbamazepine can make many medicines (including some contraceptives) less effective — have a pharmacist review the full list and discuss reliable contraception.",
    },
    {
      id: "antidepressant-induced-mania-interaction",
      title: "Antidepressants and the risk of triggering mania",
      summary:
        "In bipolar disorder, antidepressants — especially without a mood stabilizer — can sometimes flip mood into mania or hypomania or speed up cycling, so they are used cautiously and under close supervision.",
      detail:
        "An interaction that is specific to mood rather than blood levels is the risk that antidepressants can destabilize bipolar disorder. In some people, antidepressants — particularly when taken without a protective mood stabilizer — can trigger a switch into mania or hypomania, worsen mixed states, or accelerate rapid cycling. This is one of the most important reasons to distinguish bipolar from unipolar depression before treating, and why antidepressants are generally not used alone as a first-line treatment for bipolar depression (see Treatments). When an antidepressant is used in bipolar disorder, it is typically combined with a mood stabilizer or antipsychotic and monitored closely, and the decision is individualized by the prescriber. People should report early signs of a mood switch — decreasing need for sleep, racing thoughts, rising energy or irritability — and should never start, stop, or change an antidepressant on their own. This is educational background; the specifics of antidepressant use in bipolar disorder belong entirely with the prescriber and, for interaction questions, the pharmacist.",
      sources: [
        {
          label: "Bipolar disorder — antidepressants and mood switching",
          url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/diagnosis-treatment/drc-20355961",
          publisher: "Mayo Clinic",
        },
        {
          label: "Bipolar Disorder — treatment and medication considerations",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["drug-interactions", "antidepressants", "antidepressant-induced-mania", "safety"],
      evidence: "established",
      caution:
        "Antidepressants can trigger mania in bipolar disorder, especially without a mood stabilizer. Never start or change one on your own — report any signs of a mood switch to the prescriber.",
    },
  ],
});
