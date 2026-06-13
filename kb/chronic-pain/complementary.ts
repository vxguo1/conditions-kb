import { defineSection } from "../types.js";

/**
 * Complementary & integrative — the mind-body and manual approaches people ask
 * about for chronic pain, graded by evidence per NCCIH and flagged for safety.
 * Several have genuinely encouraging evidence for certain conditions (acupuncture,
 * mindfulness, yoga, tai chi, massage, spinal manipulation), unlike the
 * supplement-heavy picture in some other conditions. Anchored to NCCIH reviews.
 */
export const complementary = defineSection({
  id: "complementary",
  title: "Complementary & Integrative Approaches",
  description:
    "Evidence-graded look at complementary approaches commonly used for chronic pain — acupuncture, mindfulness/meditation, yoga, tai chi, massage, and spinal manipulation — with NCCIH evidence levels and safety flags. Educational only; these complement rather than replace medical care.",
  entries: [
    {
      id: "complementary-overview",
      title: "How to think about complementary approaches for pain",
      summary:
        "Unlike many conditions, several mind-body and manual approaches have encouraging evidence for chronic pain; they work best alongside — not instead of — medical care, and should be discussed with the care team.",
      detail:
        "Complementary and integrative approaches have a more encouraging evidence base in chronic pain than in many other conditions: NCCIH's reviews find that several mind-body and physical approaches — including acupuncture, mindfulness/meditation, yoga, tai chi, massage, and spinal manipulation — can offer modest but real benefits for certain pain conditions, fitting naturally into the multimodal model of pain care. A few principles guide their use. They are best seen as complements that extend an active, comprehensive plan, not replacements for medical evaluation and treatment, and they should never delay assessment of a potentially serious problem. 'Natural' does not mean risk-free: manual therapies have some risks, herbal supplements can interact with medicines, and quality and training vary. Evidence differs by approach and by condition, so what helps low-back pain may not help neuropathy. The consistent advice is to discuss any complementary approach with the care team, choose qualified practitioners, and judge each on its evidence and safety for the specific situation. Used wisely, these approaches can add helpful tools — especially for self-management and the mind-body side of pain — within a coordinated plan.",
      sources: [
        {
          label: "Complementary Health Approaches for Chronic Pain: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/complementary-health-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
        {
          label: "9 Things You Should Know About Chronic Pain and Complementary Health Approaches",
          url: "https://www.nccih.nih.gov/health/tips/things-you-should-know-about-chronic-pain-and-complementary-health-approaches",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "overview", "safety"],
      evidence: "mixed",
      caution:
        "Complementary approaches complement, not replace, medical care, and should not delay evaluation of serious symptoms. Tell your care team what you use, and choose qualified practitioners.",
    },
    {
      id: "acupuncture",
      title: "Acupuncture",
      summary:
        "Acupuncture has some of the better evidence among complementary approaches for several chronic pain conditions, including low-back, neck, and knee-osteoarthritis pain and headache, with a generally good safety record from trained practitioners.",
      detail:
        "Acupuncture involves stimulating specific body points, usually with thin needles. It is among the more studied complementary approaches for pain, and NCCIH summarizes the research as suggesting that acupuncture may help with several often-chronic pains — including low-back and neck pain, osteoarthritis/knee pain, and carpal tunnel syndrome — and may reduce the frequency of tension headaches and help prevent migraines. The evidence is mixed in important ways: some trials find 'real' and simulated ('sham') acupuncture similarly effective, suggesting part of the benefit may be a placebo or contextual effect, but for several pain conditions the overall body of evidence is encouraging enough that acupuncture is offered as a reasonable option to try. It is generally safe when performed by a qualified, licensed practitioner using sterile single-use needles; serious side effects are rare, while soreness and minor bleeding or bruising can occur. As with all these approaches, acupuncture is best used within a broader plan and should not replace evaluation of a serious problem. Checking a practitioner's training and licensing, and telling the care team, are sensible steps.",
      sources: [
        {
          label: "Acupuncture: Effectiveness and Safety",
          url: "https://www.nccih.nih.gov/health/acupuncture-effectiveness-and-safety",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Complementary Health Approaches for Chronic Pain: What the Science Says (acupuncture)",
          url: "https://www.nccih.nih.gov/health/providers/digest/complementary-health-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "acupuncture", "low-back-pain", "headache"],
      evidence: "supported",
    },
    {
      id: "mindfulness-meditation-complementary",
      title: "Mindfulness and meditation",
      summary:
        "Mindfulness meditation has moderate evidence for modestly reducing chronic-pain intensity and improving coping and mood, is low-risk, and is widely accessible — making it one of the better-supported mind-body options.",
      detail:
        "Mindfulness meditation and mindfulness-based stress reduction (MBSR) train nonjudgmental, present-moment awareness, including of pain, in a way that can change pain processing and reduce the stress and emotional reactivity that amplify pain. NCCIH-reviewed evidence indicates that mindfulness-based programs can produce modest reductions in chronic-pain intensity and improvements in depression symptoms and quality of life for some people, across conditions such as chronic low-back pain, fibromyalgia, and headache. While the size of the benefit varies and the research is still maturing, mindfulness stands out as low-risk, increasingly accessible (through classes, programs, and apps), and aligned with the broader emphasis on self-management and the mind-body side of pain. It overlaps with the psychological-therapies section because the same skills appear there; the point of including it here is that meditation is also a self-directed practice many people adopt on their own. Benefits build with regular practice, and it works best as part of a comprehensive plan. A small minority of people experience unpleasant effects, so those with significant mental-health conditions may want guidance from a qualified instructor or clinician.",
      sources: [
        {
          label: "Meditation and Mindfulness: Effectiveness and Safety",
          url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says (meditation)",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "mindfulness", "meditation", "mind-body"],
      evidence: "supported",
    },
    {
      id: "yoga",
      title: "Yoga",
      summary:
        "Yoga combines movement, breathing, and relaxation and has a reasonable amount of evidence for chronic low-back pain and smaller amounts for neck pain, headache, and knee osteoarthritis; it is generally safe with sensible precautions.",
      detail:
        "Yoga blends physical postures, breathing techniques, and meditation, making it a natural fit for chronic pain because it works on the body and the mind-body stress response at once. NCCIH notes that a substantial body of research on low-back pain suggests yoga may provide benefit, with smaller amounts of evidence indicating it may help neck pain, headaches, and knee osteoarthritis pain, as well as supporting sleep, mood, balance, and stress management — all relevant to living with pain. The benefits are generally modest and comparable to other forms of exercise, which is consistent with the central role of movement in pain care. Yoga is generally safe for most people when practiced appropriately, but injuries can happen, so working with a qualified instructor, choosing a style and intensity suited to one's condition, modifying poses as needed, and avoiding pushing into pain reduce the risk. People with specific conditions (such as certain spine problems, glaucoma, or pregnancy) should check with their care team about precautions. As an enjoyable, sustainable form of activity that many people will stick with, yoga can be a valuable part of a multimodal plan.",
      sources: [
        {
          label: "Yoga: Effectiveness and Safety",
          url: "https://www.nccih.nih.gov/health/yoga-what-you-need-to-know",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Complementary Health Approaches for Chronic Pain: What the Science Says (yoga)",
          url: "https://www.nccih.nih.gov/health/providers/digest/complementary-health-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "yoga", "low-back-pain", "movement"],
      evidence: "supported",
    },
    {
      id: "tai-chi",
      title: "Tai chi and qigong",
      summary:
        "Tai chi — gentle, flowing movement with breathing and focus — has encouraging evidence for fibromyalgia and osteoarthritis pain and for improving balance, and is low-impact and well suited to many people including older adults.",
      detail:
        "Tai chi and the related practice qigong combine slow, flowing movements with controlled breathing and focused attention, offering a gentle, low-impact form of exercise with a mind-body component. NCCIH summarizes encouraging evidence that tai chi may help relieve symptoms of fibromyalgia and may improve pain and physical function in osteoarthritis (including of the knee), and there is good evidence that tai chi reduces the risk of falls in older adults — valuable because pain, deconditioning, and some medicines raise fall risk. Its gentle, adaptable nature makes it accessible to many people who find more vigorous exercise difficult, including older adults and those with significant limitations, which helps people stay active — a core goal of pain management. Tai chi and qigong appear safe, with serious injury unlikely, though minor aches can occur, especially when starting. Because instruction is not formally regulated, choosing an experienced instructor and starting gently are wise. As a sustainable, enjoyable practice that builds strength, balance, and calm, tai chi fits well within a comprehensive, movement-centered approach to chronic pain.",
      sources: [
        {
          label: "Tai Chi and Qi Gong: In Depth",
          url: "https://www.nccih.nih.gov/health/tai-chi-and-qi-gong-in-depth",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says (tai chi, fibromyalgia)",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "tai-chi", "qigong", "fibromyalgia", "osteoarthritis"],
      evidence: "supported",
    },
    {
      id: "massage-therapy",
      title: "Massage therapy",
      summary:
        "Massage may give short-term relief for some pain (such as knee osteoarthritis and low-back and neck pain) and can ease stress and anxiety; benefits are often temporary and the evidence is modest, but risks are low.",
      detail:
        "Massage therapy involves manipulating the body's soft tissues and is widely used for pain and relaxation. NCCIH's assessment is that massage may help relieve several kinds of pain, but in most cases the evidence is not strong and the relief tends to be short-term; for example, several studies of massage for knee osteoarthritis found short-term pain relief, and it may help low-back and neck pain and ease anxiety and depression in conditions like fibromyalgia. So massage is reasonably viewed as a helpful adjunct that can provide temporary comfort, reduce muscle tension, and support relaxation and wellbeing, rather than a stand-alone cure. It appears to have few risks when performed by a trained practitioner, though people with certain health conditions (such as bleeding disorders, blood clots, or some skin or bone conditions) and pregnant people should check with their care team first and may need to avoid certain techniques or areas. Choosing a qualified, licensed massage therapist and communicating about comfort and any medical conditions helps keep it safe. As part of a multimodal plan, massage can contribute to the relaxation and self-care side of managing chronic pain.",
      sources: [
        {
          label: "Massage Therapy: What You Need To Know",
          url: "https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Complementary Health Approaches for Chronic Pain: What the Science Says (massage)",
          url: "https://www.nccih.nih.gov/health/providers/digest/complementary-health-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "massage", "low-back-pain", "osteoarthritis"],
      evidence: "mixed",
    },
    {
      id: "spinal-manipulation",
      title: "Spinal manipulation (chiropractic and osteopathic)",
      summary:
        "Spinal manipulation can modestly help some low-back and neck pain with effects similar to other conservative treatments; mild soreness is common, and rare serious risks (especially with neck manipulation) mean choosing a qualified practitioner matters.",
      detail:
        "Spinal manipulation — a controlled thrust applied to a spinal joint, performed by chiropractors, osteopathic physicians, and some physical therapists — is commonly used for back and neck pain. NCCIH notes moderate-quality evidence that spinal manipulation can produce modest improvements in pain and function for low-back pain, with benefits broadly similar to other conservative treatments such as exercise or NSAIDs; evidence for neck pain and certain headaches is more limited. Mild, temporary side effects like local soreness or a short-term increase in pain are common after treatment. Serious complications are rare, but neck (cervical) manipulation has been associated, very uncommonly, with serious events including stroke from injury to arteries in the neck, which is why discussing risks and choosing a qualified, licensed practitioner is important — particularly before any forceful neck manipulation. People with certain conditions (such as osteoporosis, inflammatory arthritis affecting the spine, or signs of nerve compression) should avoid manipulation or seek medical clearance first. Within a broader plan, and with appropriate caution, spinal manipulation is one reasonable option some people find helpful for mechanical back pain.",
      sources: [
        {
          label: "Spinal Manipulation: What You Need To Know",
          url: "https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know",
          publisher: "NIH / NCCIH",
        },
        {
          label: "Low-Back Pain and Complementary Health Approaches: What You Need To Know",
          url: "https://www.nccih.nih.gov/health/low-back-pain-and-complementary-health-approaches-what-you-need-to-know",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["complementary", "spinal-manipulation", "chiropractic", "low-back-pain", "safety"],
      evidence: "mixed",
      caution:
        "Discuss risks before spinal manipulation, especially of the neck (rare but serious events have occurred), and avoid it with conditions like osteoporosis or nerve-compression signs without medical clearance.",
    },
  ],
});
