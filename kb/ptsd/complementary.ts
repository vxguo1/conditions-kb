import { defineSection } from "../types.js";

/**
 * COMPLEMENTARY & INTEGRATIVE — mind-body and integrative approaches people ask
 * about for PTSD, graded by evidence and flagged for safety, with the cardinal
 * rule that they complement, never replace, evidence-based treatment. Anchored
 * to NCCIH and the VA National Center for PTSD evidence reviews: mindfulness/
 * meditation, yoga, acupuncture, and a note on supplements.
 *
 * Evidence-graded and honest. Educational only.
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded look at mind-body and integrative approaches people ask about for PTSD — mindfulness and meditation, yoga, acupuncture, and supplements — with safety flags and the rule that they complement, not replace, evidence-based treatment. Educational only.",
  entries: [
    {
      id: "complementary-overview",
      title: "How to think about complementary approaches for PTSD",
      summary:
        "Some mind-body approaches may help PTSD symptoms as a complement to treatment, but evidence is generally limited; they should add to, not replace, evidence-based care, and be discussed with the care team.",
      detail:
        "Many people with PTSD are interested in complementary and integrative approaches — practices like meditation, yoga, or acupuncture used alongside conventional care. The honest evidence picture is that some of these, especially mind-body practices, show promise for easing certain symptoms (such as stress and hyperarousal), but the research is generally limited in quality and quantity, and none is established as a stand-alone PTSD treatment. The U.S. National Center for Complementary and Integrative Health (NCCIH) and the VA's National Center for PTSD both frame these as possible complements that may support wellbeing and coping, not replacements for trauma-focused therapy or medication. Key principles: complement rather than replace proven treatment; remember that 'natural' does not automatically mean safe or effective; be aware that some practices (or supplements) can have risks or interactions; and tell the care team about anything you try. Notably, for trauma survivors, certain inward-focused or body-based practices can occasionally stir up difficult memories, so a trauma-informed approach matters. Used thoughtfully and as an addition to real treatment, some of these may be worthwhile.",
      sources: [
        {
          label: "Complementary and Integrative Health (CIH) and PTSD",
          url: "https://www.ptsd.va.gov/understand_tx/cih_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "Mind and Body Approaches for Health Problems in Military Personnel and Veterans",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-health-problems-in-military-personnel-and-veterans",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "overview", "safety", "mind-body"],
      evidence: "mixed",
      caution:
        "Complementary approaches are not a substitute for evidence-based PTSD treatment. Tell your care team about anything you try, and choose trauma-informed practitioners.",
    },
    {
      id: "mindfulness-meditation",
      title: "Mindfulness and meditation",
      summary:
        "Mindfulness-based approaches, such as Mindfulness-Based Stress Reduction, have some supporting evidence for easing PTSD symptoms and stress and are among the better-studied complementary options.",
      detail:
        "Mindfulness and meditation involve training attention on the present moment with an attitude of acceptance, which can help calm the body's stress response. For PTSD, these are among the better-studied complementary approaches: research suggests mindfulness and meditation may help reduce PTSD symptoms and stress for some people, and Mindfulness-Based Stress Reduction (MBSR) — an eight-week structured program — is the one complementary practice highlighted in the VA/DoD PTSD guideline as a possible option, while still being secondary to first-line trauma-focused treatments. Mindfulness can be a useful everyday coping and stress-management tool and overlaps with the grounding and relaxation skills covered elsewhere. A trauma-relevant caution: for some trauma survivors, sitting quietly and turning attention inward can initially bring up distressing thoughts or sensations, so it can help to start with shorter, guided, or movement-based versions, to keep eyes open if needed, and ideally to learn from a trauma-informed teacher. Overall, mindfulness is a reasonable, generally low-risk complement to PTSD treatment for many people — supportive of, not a substitute for, the core care.",
      sources: [
        {
          label: "Meditation and Mindfulness: Effectiveness and Safety",
          url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Complementary and Integrative Health (CIH) and PTSD (mindfulness/MBSR)",
          url: "https://www.ptsd.va.gov/understand_tx/cih_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["complementary", "mindfulness", "meditation", "mbsr"],
      evidence: "supported",
    },
    {
      id: "yoga-movement",
      title: "Yoga and movement-based practices",
      summary:
        "Yoga and other movement-based mind-body practices may help reduce PTSD-related stress and hyperarousal for some people; evidence is promising but limited, and trauma-sensitive instruction is preferable.",
      detail:
        "Yoga combines gentle movement, breathing, and attention, and movement-based practices like tai chi and qigong work similarly; these are among the mind-body approaches most studied for PTSD. Evidence suggests yoga may help reduce stress, hyperarousal, and some PTSD symptoms for certain people, and 'trauma-sensitive' or 'trauma-informed' yoga has been developed specifically with trauma survivors in mind — emphasizing choice, predictability, and physical and emotional safety. The research, while encouraging, is still limited in size and rigor, so yoga is best viewed as a supportive complement that may aid coping and wellbeing rather than a proven stand-alone treatment. The practical, body-based, present-focused nature of yoga overlaps with grounding skills, which may be part of why it helps. A trauma-relevant note: because certain postures, touch-based adjustments, or closing the eyes can be triggering for some survivors, choosing trauma-informed classes or instructors, going at one's own pace, and feeling free to modify or opt out are all reasonable. Yoga is generally safe for most people; those with physical health conditions should check what is appropriate with a clinician.",
      sources: [
        {
          label: "Complementary and Integrative Health (CIH) and PTSD (yoga and movement)",
          url: "https://www.ptsd.va.gov/understand_tx/cih_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
        {
          label: "8 Things To Know About Mind and Body Approaches for Military Personnel and Veterans",
          url: "https://www.nccih.nih.gov/health/tips/things-to-know-about-mind-and-body-approaches-for-health-problems-facing-military-personnel-and-veterans",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "yoga", "movement", "tai-chi", "trauma-sensitive"],
      evidence: "mixed",
    },
    {
      id: "acupuncture",
      title: "Acupuncture",
      summary:
        "Acupuncture has been studied for PTSD with some promising but inconclusive results; it may be considered as a complement for some symptoms, with attention to a qualified, licensed practitioner.",
      detail:
        "Acupuncture, a practice rooted in traditional Chinese medicine that involves inserting thin needles at specific points on the body, has been studied as a complementary approach for PTSD, sometimes to help with hyperarousal, sleep, or general stress. Some studies and reviews report encouraging effects, but the overall evidence base is limited and not conclusive, so acupuncture is best regarded as a possible complement that may help some people rather than an established PTSD treatment; it is among the integrative options offered within some VA PTSD programs. Safety considerations are generally favorable when acupuncture is performed by a qualified, licensed practitioner using sterile, single-use needles; risks (such as soreness, minor bleeding, or, rarely, infection or injury from improper technique) are mostly tied to unqualified providers, so choosing a licensed professional matters. As with all complementary approaches, acupuncture should add to — not replace — evidence-based PTSD care, and a person should let both their acupuncturist and their PTSD care team know about each other's involvement. This is educational information to inform a conversation, not a recommendation for any individual.",
      sources: [
        {
          label: "Acupuncture: Effectiveness and Safety",
          url: "https://www.nccih.nih.gov/health/acupuncture-effectiveness-and-safety",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Complementary and Integrative Health (CIH) and PTSD (acupuncture)",
          url: "https://www.ptsd.va.gov/understand_tx/cih_ptsd.asp",
          publisher: "U.S. Department of Veterans Affairs — National Center for PTSD",
        },
      ],
      tags: ["complementary", "acupuncture", "integrative"],
      evidence: "mixed",
      caution:
        "Choose a qualified, licensed acupuncturist using sterile, single-use needles. Acupuncture complements, but does not replace, evidence-based PTSD treatment.",
    },
    {
      id: "supplements-and-cautions",
      title: "Supplements and 'natural' products — cautions",
      summary:
        "No dietary supplement is proven to treat PTSD; some carry real interaction and safety risks (for example St. John's wort with antidepressants), so any supplement should be reviewed with the care team.",
      detail:
        "Dietary supplements and herbal products are often marketed for stress, mood, or sleep, but none is established as a treatment for PTSD, and 'natural' does not mean safe or free of interactions. A particularly important example for people with PTSD is St. John's wort, an herbal product taken for mood: it can interact dangerously with antidepressants (raising the risk of serotonin syndrome) and reduces the effectiveness of many medications by speeding their breakdown — so it should not be combined with PTSD medicines without professional guidance. Other supplements promoted for sleep or anxiety (such as melatonin, valerian, or kava) have limited evidence for PTSD and their own safety considerations — kava, for instance, has been linked to liver injury. Product quality and labeling also vary, and some products have been found adulterated. Because supplements are easy to start without a prescription screen, they are exactly where interactions get missed. The consistent, safety-first message is to prioritize proven treatment, treat supplements as medicines that can interact, and review anything before starting it with a pharmacist or clinician who knows the full regimen.",
      sources: [
        {
          label: "St. John's Wort and Depression: In Depth (interactions caution)",
          url: "https://www.nccih.nih.gov/health/st-johns-wort-and-depression-in-depth",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Using Dietary Supplements Wisely (safety and interactions)",
          url: "https://www.nccih.nih.gov/health/using-dietary-supplements-wisely",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "supplements", "st-johns-wort", "interactions", "safety"],
      evidence: "no-convincing-evidence",
      caution:
        "No supplement is proven for PTSD, and some (like St. John's wort) interact dangerously with antidepressants. Review any supplement with a pharmacist or clinician before use.",
    },
  ],
});
