import { defineSection } from "../types.js";

/**
 * KEY DRUG INTERACTIONS — educational coverage of the interactions that matter
 * most for common lupus medicines: immunosuppression plus infection risk and the
 * live-vaccine caution, hydroxychloroquine considerations (including retinal
 * monitoring), steroid interactions, NSAID/kidney cautions, and drugs that can
 * trigger or worsen lupus.
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
    "Educational overview of interactions that matter for common lupus medicines — immunosuppression and infection/live-vaccine cautions, hydroxychloroquine and eye monitoring, steroid interactions, NSAID/kidney cautions, and drugs that can trigger or worsen lupus. Always have a pharmacist or clinician check actual combinations.",
  entries: [
    {
      id: "interactions-how-to-think",
      title: "How to think about lupus drug interactions",
      summary:
        "People with lupus often take several medicines that can interact; the safe approach is to keep one complete med-and-supplement list and have a pharmacist or clinician check it — not to self-judge 'safe' or 'unsafe.'",
      detail:
        "Many people with lupus take a combination of medicines — hydroxychloroquine, steroids, immunosuppressants, biologics, blood-pressure drugs, blood thinners, and others — and several interact in ways that matter. Some combinations compound infection risk, some affect the kidneys, some change how another drug works, and a few medicines can even trigger or worsen lupus. The entries here explain the best-known interactions so a person can recognize and ask about them, but they are not a substitute for an authoritative check. Whether a given combination is a problem depends on the individual's kidney function, other conditions, doses, and timing — exactly the judgment a pharmacist or prescriber is trained to make. Genuinely protective habits: keep one up-to-date list of every prescription, over-the-counter product, vitamin, and herbal supplement; show it at every appointment and to the pharmacist with each new prescription; use one pharmacy where possible so interactions are screened automatically; and specifically ask 'does this interact with my lupus medicines?' before starting anything new. Never treat any entry here as a definitive ruling.",
      sources: [
        {
          label: "Medications Used to Treat Lupus",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Using Dietary Supplements Wisely (interactions)",
          url: "https://www.nccih.nih.gov/health/using-dietary-supplements-wisely",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["drug-interactions", "overview", "safety", "pharmacist"],
      caution:
        "Educational only — not an interaction check. Have a pharmacist or clinician review your actual medications and supplements; this is never a definitive safe/unsafe ruling.",
    },
    {
      id: "immunosuppression-infection-vaccines",
      title: "Stacking immune-suppressing drugs: infection and live-vaccine cautions",
      summary:
        "Combining immune-suppressing lupus drugs deepens the suppression of the immune system, raising infection risk and making live vaccines potentially unsafe; vaccination is timed and chosen with the care team.",
      detail:
        "Lupus is often treated with more than one immune-affecting medicine — for example a steroid plus an immunosuppressant, or a biologic added on top — and these effects can add together, suppressing the immune system more deeply than any one drug alone. The most important consequence is a higher risk of infection, including reactivation of dormant infections, which is why screening (for example for tuberculosis or hepatitis B before certain drugs) and infection vigilance are part of care. A specific interaction-style caution concerns vaccines: 'live attenuated' vaccines contain weakened live organisms and can be unsafe for someone whose immune system is suppressed (for instance on higher-dose steroids, several immunosuppressants, or biologics), so they are generally avoided in that situation, while non-live vaccines are preferred and encouraged. Because the right choice and timing depend on exactly which drugs a person takes and at what doses, vaccination — and any change to immune-suppressing therapy — is planned with the care team rather than decided alone.",
      sources: [
        {
          label: "Vaccinations and Biologics: What You Need to Know",
          url: "https://www.lupus.org/resources/vaccinations-and-biologics-what-you-need-to-know",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Protecting Yourself from Infections",
          url: "https://www.lupus.org/resources/protecting-yourself-from-infections",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["drug-interactions", "immunosuppression", "infection", "vaccines", "safety"],
      evidence: "established",
      caution:
        "Live vaccines may be unsafe while on immune-suppressing lupus drugs — never assume; confirm vaccine choice and timing with the care team.",
    },
    {
      id: "hydroxychloroquine-considerations",
      title: "Hydroxychloroquine: eye monitoring and combination cautions",
      summary:
        "Hydroxychloroquine is generally safe but has a small long-term risk of retinal changes (prompting eye monitoring), and combining it with other QT-affecting or retina-affecting drugs warrants a clinician's review.",
      detail:
        "Hydroxychloroquine has an excellent overall safety record, but a few considerations are worth understanding. The best known is a small, dose- and duration-related risk of damage to the retina at the back of the eye; this is why people on long-term hydroxychloroquine have baseline and periodic eye examinations to detect early changes before they affect vision. From an interaction standpoint, hydroxychloroquine can affect the heart's electrical rhythm (the 'QT interval'), so caution is advised when it is combined with other medicines that do the same; it can also interact with certain drugs (for example affecting blood sugar in people on diabetes medicines, among others). Combining it with another medication that also affects the retina or vision is similarly something a clinician would want to review. None of this makes hydroxychloroquine 'unsafe' — its benefits in lupus are large — but it does mean new medicines should be checked against it, and the recommended eye monitoring should be kept up. As always, a pharmacist or clinician should confirm any specific combination.",
      sources: [
        {
          label: "Hydroxychloroquine (Plaquenil): Benefits, Side Effects and Dosing",
          url: "https://www.lupus.org/resources/drug-spotlight-on-hydroxychloroquine",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus — treatment (hydroxychloroquine and monitoring)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["drug-interactions", "hydroxychloroquine", "retina", "qt", "monitoring", "safety"],
      evidence: "established",
      caution:
        "Keep up recommended eye exams on hydroxychloroquine, and have a clinician check new medicines that affect heart rhythm or vision before combining them.",
    },
    {
      id: "steroid-interactions",
      title: "Corticosteroid interactions and combined effects",
      summary:
        "Steroids interact with several common drugs — NSAIDs (stomach bleeding), drugs that raise blood sugar, and some that change steroid levels — and certain medicines alter how steroids are processed, so combinations need review.",
      detail:
        "Corticosteroids such as prednisone interact with a number of commonly used medicines in ways that matter. Combined with NSAIDs (like ibuprofen), steroids raise the risk of stomach irritation, ulcers, and gastrointestinal bleeding. Steroids raise blood sugar, so they can work against diabetes medicines and may require monitoring or temporary treatment adjustment. Steroids can lower potassium, which interacts with other potassium-affecting drugs and some heart medicines. Certain medications also change how the body processes steroids — some (for example particular antifungals or antibiotics) can raise steroid levels and side effects, while others (such as some seizure medicines) can lower them and reduce their effect. Live vaccines are again a concern at higher steroid doses. Because steroids are also tapered rather than stopped suddenly, and their interactions depend on dose and duration, any new medicine should be reviewed against current steroid therapy by a pharmacist or clinician rather than judged independently.",
      sources: [
        {
          label: "Medications Used to Treat Lupus (corticosteroids)",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus — treatment (corticosteroids and cautions)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["drug-interactions", "steroids", "nsaids", "blood-sugar", "safety"],
      evidence: "established",
      caution:
        "Combining steroids with NSAIDs raises bleeding risk, and several drugs change steroid levels — have a pharmacist check new medicines against your steroid dose.",
    },
    {
      id: "nsaid-kidney-cautions",
      title: "NSAIDs, kidneys, and blood-pressure/clotting drugs",
      summary:
        "NSAIDs can stress the kidneys and raise blood pressure — a particular concern in lupus — and they interact with blood-pressure medicines and blood thinners, so their use is best cleared with the care team.",
      detail:
        "Nonsteroidal anti-inflammatory drugs (NSAIDs) are often used for lupus joint and serositis pain, but they carry interaction cautions that are amplified in lupus. NSAIDs can reduce blood flow to the kidneys, which is risky when lupus may already affect kidney function, and the risk increases when NSAIDs are combined with other kidney-stressing or kidney-protective drugs commonly used in lupus, such as ACE inhibitors or ARBs and diuretics (sometimes called a harmful 'triple whammy'). NSAIDs can also raise blood pressure, working against blood-pressure treatment, and they affect platelets, adding to bleeding risk when combined with blood thinners — relevant for people with antiphospholipid syndrome who take anticoagulants. They can also irritate the stomach, a risk compounded by steroids. None of this means NSAIDs can never be used, but in lupus their use — especially regular use — is best discussed with the care team, who can weigh kidney function, blood pressure, and other medicines.",
      sources: [
        {
          label: "Medications Used to Treat Lupus (NSAIDs)",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus Nephritis (protecting kidney function)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/lupus-nephritis",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["drug-interactions", "nsaids", "kidney", "blood-pressure", "anticoagulant", "safety"],
      evidence: "established",
      caution:
        "In lupus, regular NSAID use can stress the kidneys and interact with blood-pressure and blood-thinning drugs — clear it with the care team, especially with kidney involvement.",
    },
    {
      id: "drugs-that-can-trigger-or-worsen-lupus",
      title: "Medicines that can trigger or worsen lupus",
      summary:
        "Some drugs can cause drug-induced lupus or aggravate existing lupus or its photosensitivity; knowing this helps a person flag a new medicine for review rather than self-diagnose.",
      detail:
        "A distinctive interaction concern in lupus is that certain medicines can provoke the disease. Drug-induced lupus is a lupus-like reaction triggered by particular drugs — classically hydralazine (for blood pressure), procainamide (for heart rhythm), and isoniazid (for tuberculosis), with a number of others implicated — and it usually improves after the responsible medicine is stopped under medical guidance. Separately, some medications can increase photosensitivity (sun sensitivity), which matters because UV exposure can flare lupus; examples that can heighten sun sensitivity include certain antibiotics, some blood-pressure drugs, and others. And because people with lupus may also be cautioned about specific agents based on their individual disease, a new prescription is always a good moment to ask whether it could affect lupus. The practical point is not to avoid needed medicines out of fear, but to recognize that some drugs interact with the disease itself, so any new or worsening lupus-like symptoms after starting a medicine should be reported to the prescriber rather than acted on alone.",
      sources: [
        {
          label: "Medications That Can Cause Drug-Induced Lupus",
          url: "https://www.lupus.org/resources/medications-that-can-cause-drug-induced-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "UV Exposure: What You Need to Know (photosensitizing medicines)",
          url: "https://www.lupus.org/resources/uv-exposure-what-you-need-to-know",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["drug-interactions", "drug-induced-lupus", "photosensitivity", "safety"],
      evidence: "established",
      caution:
        "Don't stop a suspected trigger drug on your own — report new lupus-like or sun-sensitivity symptoms after starting a medicine to the prescriber for review.",
    },
  ],
});
