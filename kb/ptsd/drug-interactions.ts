import { defineSection } from "../types.js";

/**
 * KEY DRUG INTERACTIONS — educational coverage of the interactions that matter
 * most for common PTSD medicines: serotonergic combinations and serotonin
 * syndrome (SSRIs/SNRIs), prazosin combined with blood-pressure-lowering drugs
 * and PDE5 inhibitors (hypotension/fainting), benzodiazepine cautions, and
 * alcohol/substance interactions.
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
    "Educational overview of interactions that matter for common PTSD medicines — serotonergic combinations and serotonin syndrome, prazosin with blood-pressure or erectile-dysfunction drugs (low blood pressure/fainting), benzodiazepine cautions, and alcohol/substances. Always have a pharmacist or clinician check actual combinations.",
  entries: [
    {
      id: "interactions-how-to-think",
      title: "How to think about PTSD drug interactions",
      summary:
        "Whether an interaction matters depends on the person; the safe move is to keep one full medication-and-supplement list and have a pharmacist or clinician check it — not to self-judge 'safe' or 'unsafe.'",
      detail:
        "People being treated for PTSD may take antidepressants, sleep or blood-pressure medicines like prazosin, and sometimes other psychiatric or medical drugs — and several of these can interact. The entries here explain the best-known interactions so a person can recognize and ask about them, but they are not a substitute for an authoritative check. Whether a given combination is a problem depends on the individual's other medications, doses, health conditions, and timing — exactly the judgment a pharmacist or prescriber is trained to make. Practical habits that genuinely reduce risk: keep one up-to-date list of every prescription, over-the-counter product, vitamin, and herbal supplement; show it at every appointment and to the pharmacist with each new prescription; use one pharmacy where possible so interactions are screened automatically; and ask specifically 'does this interact with my PTSD medicines?' before starting anything new — including supplements and remedies bought without a prescription. Never treat any entry here as a definitive ruling for your situation.",
      sources: [
        {
          label: "Clinician's Guide to Medications for PTSD (using medications safely)",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Mixing Medications and Dietary Supplements Can Endanger Your Health",
          url: "https://www.fda.gov/consumers/consumer-updates/mixing-medications-and-dietary-supplements-can-endanger-your-health",
          publisher: "U.S. Food and Drug Administration",
        },
      ],
      tags: ["drug-interactions", "overview", "safety", "pharmacist"],
      caution:
        "Educational only — not an interaction check. Have a pharmacist or clinician review your actual medications and supplements; this is never a definitive safe/unsafe ruling.",
    },
    {
      id: "serotonin-syndrome",
      title: "Serotonergic combinations and serotonin syndrome",
      summary:
        "Combining serotonin-raising drugs (SSRIs/SNRIs with other antidepressants, certain migraine or pain medicines, some supplements) can rarely cause serotonin syndrome, a potentially serious reaction.",
      detail:
        "The mainstay PTSD medications — SSRIs like sertraline and paroxetine and the SNRI venlafaxine — raise levels of the brain chemical serotonin. Rarely, combining them with other medicines or substances that also raise serotonin can lead to too much serotonin activity, a condition called serotonin syndrome. Examples of things that add serotonin include other antidepressants, certain migraine medicines (triptans), some pain medicines (such as tramadol), the supplement St. John's wort, certain anti-nausea drugs, and others; the risk is higher when starting or increasing a dose or combining multiple serotonergic agents. Warning signs can include agitation or restlessness, confusion, a fast heartbeat, high blood pressure, dilated pupils, muscle twitching or rigidity, heavy sweating, shivering, diarrhea, and (in severe cases) high fever — symptoms that warrant urgent medical attention. This is not a reason to fear antidepressants, which are safely used by millions, but a reason to make sure every prescriber and the pharmacist know all the medicines and supplements being taken so the combination can be checked. Anyone who suspects serotonin syndrome should seek prompt medical care.",
      sources: [
        {
          label: "Serotonin syndrome — MedlinePlus Medical Encyclopedia",
          url: "https://medlineplus.gov/ency/article/007272.htm",
          publisher: "MedlinePlus (U.S. National Library of Medicine)",
        },
        {
          label: "Selective serotonin reuptake inhibitors (SSRIs) — side effects and interactions",
          url: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/medicines-and-psychiatry/ssri-antidepressants/side-effects/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["drug-interactions", "serotonin-syndrome", "ssri", "snri", "safety"],
      evidence: "established",
      caution:
        "Tell every prescriber and your pharmacist about all medicines and supplements. Symptoms like agitation, fast heartbeat, sweating, muscle twitching, or fever after starting/combining serotonergic drugs need urgent medical care.",
    },
    {
      id: "prazosin-blood-pressure",
      title: "Prazosin with blood-pressure-lowering drugs",
      summary:
        "Prazosin lowers blood pressure, so combining it with other blood-pressure medicines or anything that drops blood pressure can cause dizziness, fainting, or falls — especially when starting or increasing the dose.",
      detail:
        "Prazosin, sometimes used for trauma-related nightmares and sleep, works by relaxing blood vessels, which lowers blood pressure. When it is combined with other medicines that lower blood pressure — such as antihypertensives, certain other prostate or blood-pressure drugs in the same class, or even alcohol — the effects can add up and cause blood pressure to fall too far, leading to dizziness, lightheadedness, fainting, or falls. This is most likely with the very first dose (the 'first-dose effect'), when the dose is increased, when standing up quickly, after exercise, in hot weather, or when dehydrated. Older adults are especially vulnerable to falls from this. The usual precautions — starting low, often taking the first dose at bedtime, and rising slowly from lying or sitting — are why prazosin should be started and adjusted only by a prescriber. None of this makes prazosin 'unsafe'; it is a reason to have the full medication list reviewed and to report dizziness or fainting. A pharmacist or clinician can check how prazosin fits with everything else a person takes.",
      sources: [
        {
          label: "Prazosin — MedlinePlus Drug Information (precautions and interactions)",
          url: "https://medlineplus.gov/druginfo/meds/a682245.html",
          publisher: "MedlinePlus (U.S. National Library of Medicine)",
        },
        {
          label: "Clinician's Guide to Medications for PTSD (prazosin cautions)",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["drug-interactions", "prazosin", "blood-pressure", "hypotension", "falls", "safety"],
      evidence: "established",
      caution:
        "If you take prazosin, report dizziness or fainting and rise slowly. Don't add or change blood-pressure-affecting medicines without your prescriber or pharmacist checking.",
    },
    {
      id: "prazosin-pde5-inhibitors",
      title: "Prazosin with erectile-dysfunction drugs (PDE5 inhibitors)",
      summary:
        "Combining prazosin with erectile-dysfunction medicines like sildenafil, tadalafil, or vardenafil can cause a dangerous drop in blood pressure; this combination needs medical guidance.",
      detail:
        "A specific interaction worth knowing is between prazosin (an alpha-blocker) and the erectile-dysfunction medicines known as PDE5 inhibitors — sildenafil (Viagra), tadalafil (Cialis), vardenafil (Levitra), and avanafil. Both lower blood pressure, and together they can cause it to drop too far, leading to dizziness, fainting, or, rarely, dangerous hypotension. Drug information sources note that this combination requires caution and medical guidance, including attention to timing and dose, and in some cases it is avoided. Because erectile-dysfunction medicines are sometimes obtained separately (including online) without the prescriber who manages the prazosin knowing, this is a classic example of an interaction that gets missed. The educational point is simple: anyone taking prazosin should not start a PDE5 inhibitor (or vice versa) without a prescriber or pharmacist confirming it is appropriate and advising on how to do it safely. This is not a definitive 'never' for every person, but it is a combination that genuinely needs professional review rather than self-management.",
      sources: [
        {
          label: "Prazosin — MedlinePlus Drug Information (interactions, including ED medicines)",
          url: "https://medlineplus.gov/druginfo/meds/a682245.html",
          publisher: "MedlinePlus (U.S. National Library of Medicine)",
        },
        {
          label: "Sildenafil — MedlinePlus Drug Information (blood-pressure interactions)",
          url: "https://medlineplus.gov/druginfo/meds/a699015.html",
          publisher: "MedlinePlus (U.S. National Library of Medicine)",
        },
      ],
      tags: ["drug-interactions", "prazosin", "pde5", "sildenafil", "hypotension", "safety"],
      evidence: "established",
      caution:
        "Do not combine prazosin with erectile-dysfunction medicines (sildenafil, tadalafil, vardenafil, avanafil) without your prescriber or pharmacist's guidance — the blood-pressure drop can be dangerous.",
    },
    {
      id: "benzodiazepine-cautions",
      title: "Benzodiazepine cautions in PTSD",
      summary:
        "Benzodiazepines are generally not recommended for PTSD and carry interaction risks — especially dangerous combined with alcohol or opioids, which can suppress breathing.",
      detail:
        "Benzodiazepines (medicines sometimes used short-term for anxiety or sleep) are generally not recommended for PTSD, and beyond that they carry important interaction cautions. Combined with other central-nervous-system depressants — especially alcohol or opioid pain medicines — they can cause excessive sedation and, dangerously, slowed or stopped breathing; the FDA has issued strong warnings about combining benzodiazepines with opioids. Because PTSD so often co-occurs with substance use and chronic pain (which may involve opioids), these combinations are a particular concern. Benzodiazepines can also worsen the dependence and rebound problems that make them poorly suited to PTSD in the first place. None of this means a person currently prescribed one should stop suddenly — abrupt discontinuation can itself be dangerous and must be managed by a prescriber. The takeaway is to be sure every prescriber and the pharmacist know about a benzodiazepine if one is taken, to never combine it with alcohol or extra sedatives, and to discuss any concerns or a possible taper with the care team. A pharmacist can review the full picture.",
      sources: [
        {
          label: "FDA Drug Safety Communication: benzodiazepines and opioids (serious risks)",
          url: "https://www.fda.gov/drugs/food-and-drug-administration-overdose-prevention-framework/new-safety-measures-announced-opioid-analgesics-prescription-opioid-cough-products-and",
          publisher: "U.S. Food and Drug Administration",
        },
        {
          label: "Clinician's Guide to Medications for PTSD (benzodiazepines not recommended)",
          url: "https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["drug-interactions", "benzodiazepines", "opioids", "alcohol", "safety"],
      evidence: "established",
      caution:
        "Never combine a benzodiazepine with alcohol or opioids without explicit medical guidance — it can dangerously suppress breathing. Don't stop a benzodiazepine abruptly; ask the prescriber.",
    },
    {
      id: "alcohol-and-substance-interactions",
      title: "Alcohol and substance interactions",
      summary:
        "Alcohol and recreational drugs can interact with PTSD medicines — adding sedation, worsening side effects and mood, and reducing treatment benefit — beyond their direct effects on PTSD.",
      detail:
        "Alcohol and recreational or non-prescribed drugs deserve their own note because they are common, easy to overlook, and interact with PTSD medicines in addition to worsening PTSD itself. Alcohol can add to the sedating effects of many psychiatric medicines, increase side effects, worsen mood and sleep, and (with prazosin) deepen blood-pressure drops; combined with benzodiazepines or opioids it can be life-threatening. Some antidepressants and other medicines specifically advise caution or avoidance with alcohol. Cannabis and other substances can also interact with medications and affect mood, sleep, and symptoms, and using substances to cope tends to undermine the benefits of treatment. Because people may not think to mention alcohol or non-prescribed substances, and may feel hesitant to, it is worth knowing that an honest, judgment-free conversation with the prescriber or pharmacist allows the safest plan to be made. The recurring theme of this section applies here too: list everything — including alcohol and any substances — so a professional can check the real combination, rather than guessing alone.",
      sources: [
        {
          label: "Antidepressants — cautions and interactions (including alcohol)",
          url: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/medicines-and-psychiatry/antidepressants/considerations/",
          publisher: "NHS (UK)",
        },
        {
          label: "PTSD and Problems with Alcohol Use",
          url: "https://www.ptsd.va.gov/understand/related/problem_alcohol_use.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["drug-interactions", "alcohol", "substance-use", "sedation", "safety"],
      evidence: "established",
      caution:
        "Tell your prescriber and pharmacist honestly about alcohol and any substances — combined with PTSD medicines they can be unsafe. This is for safety, not judgment.",
    },
  ],
});
