import { defineSection } from "../types.js";

/**
 * TREATMENTS — the main medical treatments for depression: the classes of
 * antidepressants (SSRIs, SNRIs, atypicals like bupropion and mirtazapine,
 * TCAs, MAOIs), how they're used, and newer rapid-acting options (esketamine,
 * brexanolone/zuranolone). Brain-stimulation treatments have their own section.
 *
 * Educational only — NO dosing, no "safe/unsafe" rulings. Treatment choices,
 * including starting, changing, or stopping any medication, belong with the
 * prescriber and care team.
 */
export const treatments = defineSection({
  id: "treatments",
  title: "Treatments (Medications & Procedures)",
  description:
    "How depression is treated medically: the antidepressant classes (SSRIs, SNRIs, atypicals, TCAs, MAOIs), how they're used and monitored, and newer rapid-acting options. Educational only — choices about any medication belong with the prescriber.",
  entries: [
    {
      id: "treatment-overview",
      title: "How depression treatment works overall",
      summary:
        "Most depression is treated with psychotherapy, medication, or both; it can take several weeks to feel the full benefit of a medication, and finding the right approach sometimes takes more than one try.",
      detail:
        "Depression is highly treatable, and most people improve with treatment. The main approaches are psychotherapy ('talk therapy'), antidepressant medication, or a combination, with the choice guided by the severity of symptoms, the person's preferences and history, and the clinician's assessment. For mild depression, therapy and lifestyle measures may be enough; for moderate to severe depression, a combination of therapy and medication is often recommended. A few realities help set expectations: antidepressants typically take several weeks to reach full effect, so patience and follow-up matter; the first medication tried does not always work, and switching or combining treatments is common and not a sign of failure; and treatment is usually continued for a period after feeling better to reduce the risk of relapse. Decisions about starting, changing, combining, or stopping any treatment belong with the prescriber — stopping antidepressants suddenly can cause discontinuation symptoms and should be done gradually under guidance. This section is educational background, not advice for any individual.",
      sources: [
        {
          label: "Depression — treatment overview",
          url: "https://www.nimh.nih.gov/health/publications/depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — treatment",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "overview", "antidepressants", "mental-health"],
      caution:
        "Educational only — not advice. Never start, change, or stop a medication on your own; stopping antidepressants abruptly can cause withdrawal-like symptoms. Work with your prescriber.",
    },
    {
      id: "ssris",
      title: "SSRIs (selective serotonin reuptake inhibitors)",
      summary:
        "SSRIs are usually the first-choice antidepressant class because they are generally effective and well tolerated; they act on serotonin signaling and take a few weeks to work fully.",
      detail:
        "Selective serotonin reuptake inhibitors (SSRIs) are commonly the first medication class tried for depression because they tend to be effective and have a more manageable side-effect profile than older drugs. Examples include fluoxetine, sertraline, citalopram, escitalopram, and paroxetine. They work by increasing the availability of serotonin, a chemical messenger involved in mood regulation, though the full picture of how they help is more complex than 'raising serotonin.' Benefits usually build over several weeks rather than immediately. Possible side effects can include nausea, sleep changes, headache, and sexual side effects, many of which ease over time; a prescriber weighs these against the benefits for each person. As with all antidepressants in the US, SSRIs carry a boxed warning about a possible increased risk of suicidal thoughts or behavior in children, adolescents, and young adults, especially early in treatment, which is why close monitoring at the start is important. Specific drug choice, dosing, and monitoring are decisions for the prescriber.",
      sources: [
        {
          label: "Mental Health Medications — antidepressants (SSRIs)",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — SSRIs",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "ssri", "antidepressants", "mental-health"],
      evidence: "established",
      caution:
        "Boxed warning: antidepressants may increase suicidal thoughts/behavior in people under 25, especially early on — close monitoring matters. Dosing belongs with the prescriber.",
    },
    {
      id: "snris",
      title: "SNRIs (serotonin-norepinephrine reuptake inhibitors)",
      summary:
        "SNRIs act on both serotonin and norepinephrine and are another common option, sometimes used when SSRIs haven't worked or when certain symptoms (like chronic pain) are present.",
      detail:
        "Serotonin-norepinephrine reuptake inhibitors (SNRIs) are a class of antidepressants that increase the availability of two chemical messengers, serotonin and norepinephrine. Examples include venlafaxine, desvenlafaxine, and duloxetine. They are a common alternative or next step, sometimes chosen when an SSRI has not worked well enough, and some (such as duloxetine) are also used for certain chronic pain conditions, which can be relevant when pain and depression co-occur. Like SSRIs, they take weeks to reach full effect and can cause side effects such as nausea, sleep or blood-pressure changes, and sexual side effects; stopping them abruptly can cause discontinuation symptoms, so changes are made gradually with the prescriber. They carry the same boxed warning about suicidal thoughts and behavior in younger people early in treatment. Because they affect serotonin, they are also relevant to serotonin-syndrome cautions when combined with other serotonergic drugs (covered in the drug-interactions section). The right choice and management are individualized by the prescriber.",
      sources: [
        {
          label: "Mental Health Medications — antidepressants (SNRIs)",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — SNRIs",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "snri", "antidepressants", "chronic-pain", "mental-health"],
      evidence: "established",
    },
    {
      id: "atypical-antidepressants",
      title: "Atypical antidepressants (bupropion, mirtazapine, others)",
      summary:
        "Several antidepressants don't fit the SSRI/SNRI categories — for example bupropion and mirtazapine — and are chosen for their particular effects on energy, sleep, appetite, or side-effect profile.",
      detail:
        "A group of 'atypical' antidepressants work through different mechanisms and are valued for tailoring treatment to a person's symptoms and tolerability. Bupropion acts on dopamine and norepinephrine, tends not to cause sexual side effects or weight gain, can be activating (sometimes helpful for low energy), and is also used to help with smoking cessation; it is generally avoided in people with seizure or certain eating-disorder histories. Mirtazapine affects serotonin and norepinephrine differently and is often sedating and appetite-stimulating, which can help when insomnia and poor appetite are prominent. Others, such as trazodone (frequently used in low doses for sleep) and vortioxetine, add further options. These differences let a prescriber match a medicine to the individual — for example choosing a more activating or more calming option, or avoiding sexual side effects. As with all antidepressants, effects take time, side effects vary, the boxed warning about suicidal thoughts in younger people applies, and selection and dosing are the prescriber's decisions.",
      sources: [
        {
          label: "Mental Health Medications — antidepressants (atypical agents)",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — other antidepressants (mirtazapine, vortioxetine)",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "bupropion", "mirtazapine", "atypical", "antidepressants", "mental-health"],
      evidence: "established",
    },
    {
      id: "tcas-and-maois",
      title: "Older antidepressants: TCAs and MAOIs",
      summary:
        "Tricyclic antidepressants (TCAs) and monoamine oxidase inhibitors (MAOIs) are older, effective classes used less often now because of side effects and important dietary/drug restrictions, but still valuable in some cases.",
      detail:
        "Tricyclic antidepressants (TCAs, such as amitriptyline, nortriptyline, and imipramine) and monoamine oxidase inhibitors (MAOIs, such as phenelzine, tranylcypromine, and isocarboxazid) were among the first antidepressants and remain effective. They are generally not first-line today because they tend to cause more side effects and carry particular risks. TCAs can cause drowsiness, dry mouth, constipation, and effects on the heart, and can be dangerous in overdose, so they are prescribed and monitored carefully; low-dose TCAs are also used for some chronic pain. MAOIs are powerful but require strict precautions: they interact dangerously with many other medications (risking serotonin syndrome) and with foods high in tyramine (such as aged cheeses and cured meats), which can cause a hypertensive crisis — so they involve specific dietary restrictions and careful medication review. Because of these complexities, TCAs and especially MAOIs are usually reserved for situations where other treatments have not worked, and they require close specialist guidance. These details are educational; the prescriber manages any such treatment.",
      sources: [
        {
          label: "Mental Health Medications — tricyclics and MAOIs",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Depression in adults — tricyclic antidepressants",
          url: "https://www.nhs.uk/mental-health/conditions/depression-in-adults/treatment/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["treatment", "tca", "maoi", "antidepressants", "interactions", "mental-health"],
      evidence: "established",
      caution:
        "MAOIs require strict food and drug precautions (tyramine, serotonin syndrome). Never combine antidepressants or adjust them yourself — these are specialist-managed.",
    },
    {
      id: "esketamine-rapid-acting",
      title: "Esketamine and other rapid-acting options",
      summary:
        "Esketamine (a nasal spray) and intravenous ketamine can rapidly reduce severe depression in treatment-resistant cases; because of safety considerations, esketamine is given in monitored clinical settings.",
      detail:
        "For depression that has not responded to standard antidepressants, newer rapid-acting treatments have expanded the options. Esketamine, a nasal spray related to the anesthetic ketamine, is FDA-approved for treatment-resistant depression (and for depressive symptoms with suicidal thoughts in certain situations); it can improve symptoms within hours to days rather than weeks. Because it can cause sedation, dissociation, and increases in blood pressure, and has potential for misuse, it is administered in a certified healthcare setting under monitoring through a special safety program, not taken at home. Intravenous ketamine is used in some clinics off-label for similar purposes. These treatments are typically combined with an oral antidepressant and ongoing care rather than used in isolation, and their longer-term role is still being defined. They are reserved for specific situations and delivered under specialist supervision. As always, eligibility, benefits, and risks for any individual are decisions for the treating clinician — this is educational information, not a recommendation.",
      sources: [
        {
          label: "Mental Health Medications — esketamine and treatment-resistant depression",
          url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
          publisher: "NIH / NIMH",
        },
        {
          label: "Treatment-resistant depression — esketamine and other options",
          url: "https://www.mayoclinic.org/diseases-conditions/depression/in-depth/treatment-resistant-depression/art-20044324",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "esketamine", "ketamine", "treatment-resistant", "mental-health"],
      evidence: "established",
      caution:
        "Esketamine is given only in monitored clinical settings under a safety program. It is not a home or self-administered treatment.",
    },
    {
      id: "postpartum-specific-medications",
      title: "Medications for postpartum depression",
      summary:
        "Specific medications have been developed for postpartum depression — brexanolone (an IV infusion) and zuranolone (an oral pill) — alongside standard antidepressants and therapy.",
      detail:
        "Postpartum depression can be treated with the same approaches as other depression — therapy and standard antidepressants — and additionally has medications developed specifically for it. Brexanolone, given as an intravenous infusion in a monitored hospital setting over about 60 hours, was the first medication FDA-approved specifically for postpartum depression and can act relatively quickly. More recently, zuranolone, an oral pill taken for a short two-week course, was approved for postpartum depression, offering a more convenient option. These medicines act on a different system (the GABA-A receptor, via neuroactive steroids) than typical antidepressants. Choice among these and standard treatments depends on severity, breastfeeding considerations, monitoring needs, and individual circumstances, and is made with the care team. Treating postpartum depression matters for both parent and child, and effective, increasingly tailored options exist — another reason that reaching out for help in the perinatal period is so worthwhile. This is educational; suitability and dosing are determined by the clinician.",
      sources: [
        {
          label: "Perinatal Depression — treatment (including brexanolone)",
          url: "https://www.nimh.nih.gov/health/publications/perinatal-depression",
          publisher: "NIH / NIMH",
        },
        {
          label: "FDA Approves First Oral Treatment for Postpartum Depression (zuranolone)",
          url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-oral-treatment-postpartum-depression",
          publisher: "U.S. Food and Drug Administration",
          year: 2023,
        },
      ],
      tags: ["treatment", "postpartum", "brexanolone", "zuranolone", "perinatal", "mental-health"],
      evidence: "established",
      caution:
        "Educational only. Postpartum treatment choices — including breastfeeding considerations — are made with the care team.",
    },
  ],
});
