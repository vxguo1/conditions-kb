import { defineSection } from "../types.js";

/**
 * Complementary & integrative — supplements and integrative approaches people
 * ask about for bipolar disorder, graded by evidence and flagged for safety.
 * Two safety themes are emphasized: nothing here replaces proven treatment, and
 * several popular options (especially St John's wort) can trigger mania or
 * interact with medications. Anchored to NCCIH evidence reviews.
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded look at supplements and integrative approaches asked about for bipolar disorder (omega-3s, St John's wort, SAMe, light therapy, others), with strong safety flags — several can trigger mania or interact with medicines, and none replaces proven treatment.",
  entries: [
    {
      id: "complementary-overview",
      title: "How to think about complementary approaches for bipolar disorder",
      summary:
        "No supplement or complementary approach is a proven treatment for bipolar disorder, several can be harmful (including triggering mania or interacting with medications), and none should replace prescribed care — always tell the care team what you use.",
      detail:
        "People with bipolar disorder are often interested in 'natural' or complementary options, but it is essential to approach them carefully. No dietary supplement or complementary approach has been established as a treatment for bipolar disorder, and some carry real risks — most importantly, certain products can trigger mania or hypomania, worsen mood instability, or interact with mood-stabilizing medications. The U.S. National Center for Complementary and Integrative Health (NCCIH) emphasizes general principles that apply strongly here: do not replace proven treatment with an unproven product; 'natural' does not mean safe; supplements can interact with medicines and affect mental and physical health; product quality and labeling vary; and there are special cautions in pregnancy and around other conditions. The single most important step is to tell every member of the care team about anything being taken or considered, because in bipolar disorder the stakes of an interaction or a manic switch are high. Complementary approaches, if used at all, should be a possible adjunct chosen with medical input — never a substitute for treatment.",
      sources: [
        {
          label: "Depression and Complementary Health Approaches: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Bipolar Disorder — complementary approaches and talking to your team",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["complementary", "supplements", "safety", "overview"],
      evidence: "no-convincing-evidence",
      caution:
        "No supplement is a proven bipolar treatment, and some can trigger mania or interact with medicines. Never replace prescribed treatment, and tell your care team about anything you use.",
    },
    {
      id: "st-johns-wort",
      title: "St John's wort — can trigger mania (caution)",
      summary:
        "St John's wort is marketed for low mood but in bipolar disorder it can trigger a switch into mania or psychosis and interacts dangerously with many medications, so it should not be used without medical guidance.",
      detail:
        "St John's wort (Hypericum perforatum) is a herbal product widely sold for depression, but it is one of the most important cautions in this section for people with bipolar disorder. Like prescription antidepressants, it can in some people with bipolar disorder trigger a switch into mania or hypomania, and there are case reports of it worsening psychotic symptoms — risks that are higher without a mood stabilizer on board. On top of this, St John's wort has an unusually high potential for drug interactions: it is a strong inducer of drug-metabolizing systems and can reduce the effectiveness of many medications (including hormonal contraceptives and various others) and, when combined with drugs that affect serotonin, can cause serious serotonin-related side effects. For all these reasons, people with bipolar disorder should not take St John's wort without first talking to their doctor, and should stop and seek advice if mood symptoms worsen. It is not a safe self-treatment for the depressive phase of bipolar disorder.",
      sources: [
        {
          label: "St. John's Wort and Depression: In Depth (mania risk and interactions)",
          url: "https://www.nccih.nih.gov/health/st-johns-wort-and-depression-in-depth",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Herb–Drug Interactions: What the Science Says (St John's wort)",
          url: "https://www.nccih.nih.gov/health/providers/digest/herb-drug-interactions-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "st-johns-wort", "mania", "interactions", "safety"],
      evidence: "no-convincing-evidence",
      caution:
        "St John's wort can trigger mania and interferes with many medicines (including contraceptives and antidepressants). Do not use it for bipolar disorder without talking to your doctor.",
    },
    {
      id: "omega-3",
      title: "Omega-3 fatty acids (fish oil)",
      summary:
        "Omega-3s have been studied as an add-on for mood, with modest and mixed evidence; they are generally low-risk and may benefit heart health, but they are not a proven bipolar treatment and should not replace medication.",
      detail:
        "Omega-3 fatty acids (EPA and DHA, found in fatty fish and fish-oil supplements) are among the more studied supplements for mood disorders, partly because populations eating more fish have shown lower rates of depression. Some research has explored omega-3s as an add-on in mood disorders including bipolar depression, but the overall evidence is modest, mixed, and not strong enough to establish them as an effective treatment; NCCIH notes the benefits of omega-3 supplements for brain and mood conditions remain unclear. On the safety side, omega-3s are generally well tolerated, can benefit some cardiovascular risk markers (relevant given the cardiometabolic risks in bipolar disorder), and at usual doses carry low risk, though high doses can affect bleeding and they should be discussed if a person takes blood thinners. The reasonable summary is that omega-3s may be considered only as a possible adjunct, with medical input, and never as a replacement for mood-stabilizing treatment — and that a balanced diet including fish is a sensible baseline regardless.",
      sources: [
        {
          label: "Omega-3 Supplements: What You Need To Know",
          url: "https://www.nccih.nih.gov/health/omega3-supplements-what-you-need-to-know",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Depression and Complementary Health Approaches (omega-3s)",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "omega-3", "fish-oil", "supplements"],
      evidence: "mixed",
      caution:
        "Omega-3s are a possible adjunct at best, not a proven bipolar treatment. Discuss with your care team, especially if you take blood thinners, and don't use them in place of medication.",
    },
    {
      id: "same",
      title: "SAMe (S-adenosylmethionine) — caution",
      summary:
        "SAMe is a supplement studied for depression, but like antidepressants it can trigger mania or hypomania in people with bipolar disorder, so it is not advised without medical supervision.",
      detail:
        "SAMe (S-adenosyl-L-methionine) is a compound the body makes naturally and that is also sold as a supplement and studied for depression and some other conditions. For bipolar disorder, the key concern mirrors that of antidepressants and St John's wort: SAMe has been reported to trigger a switch into mania or hypomania in some people with bipolar disorder, so it is not a safe self-treatment for the depressive phase. The evidence for SAMe in depression generally is limited and not conclusive, and it can also interact with serotonergic medications. Because of the mania-switch risk and interaction potential, anyone with bipolar disorder should not start SAMe on their own and should only consider it, if at all, under the supervision of their care team. As with other supplements, it should never replace prescribed mood-stabilizing treatment, and any worsening or destabilization of mood after starting it is a reason to stop and seek medical advice promptly.",
      sources: [
        {
          label: "Depression and Complementary Health Approaches (SAMe and mania risk)",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "same", "mania", "supplements", "safety"],
      evidence: "mixed",
      caution:
        "SAMe can trigger mania in bipolar disorder and interacts with serotonergic medicines. Do not start it without medical supervision.",
    },
    {
      id: "light-therapy",
      title: "Light therapy",
      summary:
        "Bright-light therapy is used for seasonal and some other depressions and is being studied in bipolar depression, but in bipolar disorder it can sometimes trigger or worsen mania, so it should be used only with medical guidance.",
      detail:
        "Light therapy — timed exposure to bright artificial light — is an established approach for seasonal affective disorder and is studied for other forms of depression, and there is research interest in its use for the depressive phase of bipolar disorder, sometimes with specific protocols (such as midday dosing) intended to reduce risk. However, in bipolar disorder light therapy is not simply a harmless option: because it affects the circadian system that is so closely tied to bipolar mood states, it can in some people trigger or worsen manic or mixed symptoms, particularly if used without a mood stabilizer or with poorly chosen timing. For this reason, light therapy in bipolar disorder should be approached as a medical treatment to be used under the guidance of a clinician who can set the protocol and monitor for mood switching, rather than something to self-administer. Used carefully and with supervision it may have a role for some people's bipolar depression, but the same circadian sensitivity that can make it helpful is also why caution is warranted.",
      sources: [
        {
          label: "Depression and Complementary Health Approaches (light therapy)",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Bipolar Disorder — circadian rhythms and mood",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["complementary", "light-therapy", "circadian", "safety"],
      evidence: "mixed",
      caution:
        "Light therapy can trigger or worsen mania in bipolar disorder. Use it only under a clinician's guidance, with attention to timing and mood monitoring.",
    },
    {
      id: "mind-body-and-other-supplements",
      title: "Mind-body practices and other supplements",
      summary:
        "Practices like mindfulness, yoga, and exercise can support general wellbeing and stress reduction as adjuncts, while many other 'mood' supplements lack good evidence and can carry interaction or quality risks.",
      detail:
        "Some integrative, mind-body practices can be reasonable adjuncts to standard treatment for general wellbeing: mindfulness meditation, yoga, relaxation techniques, and regular exercise can help with stress, sleep, and overall health, which supports stability — though they are complements to, not replacements for, medication and therapy, and intense or sleep-disrupting routines should be approached thoughtfully given bipolar disorder's sensitivity to rhythm. Beyond these, a wide range of other supplements is marketed for mood (for example various 'mood support' blends, certain vitamins and minerals, and herbal products), but most have weak or no good evidence for bipolar disorder, and some carry interaction risks, variable product quality, or the potential to affect mood; products have also at times been found to contain undisclosed ingredients. The consistent, evidence-based message is to prioritize proven treatment, treat any supplement or practice as something to discuss with the care team for safety and interactions, and be especially alert to anything that could disrupt sleep or trigger a mood switch.",
      sources: [
        {
          label: "Depression and Complementary Health Approaches (mind-body and supplements)",
          url: "https://www.nccih.nih.gov/health/providers/digest/depression-and-complementary-health-approaches-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Bipolar Disorder — lifestyle, stress, and self-care",
          url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
          publisher: "NIH / NIMH",
        },
      ],
      tags: ["complementary", "mindfulness", "yoga", "exercise", "supplements"],
      evidence: "mixed",
      caution:
        "Mind-body practices are adjuncts, not replacements for treatment. Many 'mood' supplements lack good evidence and can interact or affect mood — review anything you consider with your care team.",
    },
  ],
});
