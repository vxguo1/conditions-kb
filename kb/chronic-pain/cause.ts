import { defineSection } from "../types.js";

/**
 * CAUSE & MECHANISMS — how acute pain becomes chronic, the three pain
 * mechanisms in more depth, central sensitization, and the psychological and
 * social contributors. Chronic pain is driven less by ongoing tissue damage
 * than by changes in how the nervous system processes pain signals.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes & Mechanisms",
  description:
    "How pain becomes chronic: the normal pain pathway, the transition from acute to chronic pain, nociceptive vs. neuropathic mechanisms, central sensitization / nociplastic pain, and the psychological and social factors that amplify or ease pain.",
  entries: [
    {
      id: "normal-pain-pathway",
      title: "How pain normally works",
      summary:
        "Pain normally starts when sensors detect harm and send signals up the spinal cord to the brain, which decides how much pain to produce — a protective system that usually quiets down as injuries heal.",
      detail:
        "Normally, specialized nerve endings called nociceptors detect potentially harmful stimuli — heat, pressure, chemicals from injury — and send electrical signals through peripheral nerves to the spinal cord, where they are relayed up to the brain. The brain then integrates these signals with context, memory, and emotion and produces the experience of pain, which motivates us to protect the injured area while it heals. This is a protective, adaptive system: acute pain is useful. In most cases, as tissue heals the signals quiet and the pain resolves. Chronic pain represents a breakdown of this normal arc — the alarm keeps sounding after the danger has passed, or the system becomes oversensitive so that ordinary signals are amplified into pain. Understanding that the brain actively produces pain (rather than passively receiving it from the body) helps explain why pain can persist without ongoing damage and why treatments aimed at the nervous system and the brain — not just the tissues — can help.",
      sources: [
        {
          label: "Pain (how the nervous system processes pain)",
          url: "https://www.ninds.nih.gov/health-information/disorders/pain",
          publisher: "NIH / NINDS",
        },
        {
          label: "Chronic Pain (pain pathways and pathophysiology)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["cause", "physiology", "nociceptors", "pain-pathway"],
    },
    {
      id: "acute-to-chronic-transition",
      title: "How acute pain becomes chronic",
      summary:
        "Sometimes pain outlasts healing because the nervous system 'learns' the pain — a transition influenced by injury severity, genetics, mood, stress, sleep, and other factors, not just the original wound.",
      detail:
        "A central puzzle of chronic pain is why, in some people, pain persists long after the original injury has healed. Research points to changes along the whole pain system: peripheral nerves and the spinal cord can become more excitable, and the brain's pain-processing and emotional circuits can reorganize so that pain becomes self-sustaining — a kind of learned response. Many factors influence whether this transition happens, including the severity and type of the initial injury, genetics, and powerful psychosocial contributors such as depression, anxiety, high stress, poor sleep, fear of movement, and certain beliefs about pain. This is why the same surgery or injury leaves one person pain-free and another with lasting pain. The practical importance is twofold: it underlines that long-standing pain is a real, biologically grounded process (not 'all in the head'), and it identifies modifiable factors — sleep, mood, activity, stress — that can be addressed to reduce the risk of pain becoming entrenched or to help unwind it once it has.",
      sources: [
        {
          label: "Pain (transition from acute to chronic pain research)",
          url: "https://www.ninds.nih.gov/health-information/disorders/pain",
          publisher: "NIH / NINDS",
        },
        {
          label: "Chronic Pain (chronification and risk factors)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["cause", "chronification", "risk-factors", "transition"],
    },
    {
      id: "nociceptive-mechanism",
      title: "Nociceptive pain (tissue-based pain)",
      summary:
        "Nociceptive pain comes from actual or threatened damage to body tissues with healthy nerves — like arthritis or an injury — and often responds to anti-inflammatory and tissue-directed treatments.",
      detail:
        "Nociceptive pain is the most familiar kind: it arises from activation of nociceptors by actual or threatened damage to non-nerve tissue, with a normally functioning nervous system. Inflammation, mechanical stress, and chemical irritants in the tissues drive it. Chronic examples include osteoarthritis, rheumatoid and other inflammatory arthritis, chronic back and neck pain from joints and muscles, and pain from ongoing tissue conditions. It is often described as aching, throbbing, gnawing, or sharp, and it usually localizes to the affected area. Because the problem is rooted in tissues and inflammation, nociceptive pain tends to respond, at least in part, to treatments that target those processes — anti-inflammatory medicines, physical therapy, weight management for load-bearing joints, and sometimes injections or surgery for a specific structural cause. Many chronic pain conditions, however, are 'mixed,' combining a nociceptive driver with neuropathic or nociplastic features, which is why careful assessment of what the pain feels like and how it behaves guides treatment.",
      sources: [
        {
          label: "IASP Terminology (nociceptive pain definition)",
          url: "https://www.iasp-pain.org/resources/terminology/",
          publisher: "International Association for the Study of Pain (IASP)",
        },
        {
          label: "Types of Pain (nociceptive pain)",
          url: "https://pain.ucsf.edu/understanding-pain-pain-basics/types-pain",
          publisher: "UCSF Pain Management",
        },
      ],
      tags: ["cause", "nociceptive", "inflammation", "arthritis", "mechanism"],
    },
    {
      id: "neuropathic-mechanism",
      title: "Neuropathic pain (nerve-based pain)",
      summary:
        "Neuropathic pain is caused by damage or disease of the nerves themselves and often feels burning, shooting, or electric, sometimes with numbness or tingling; it needs different medicines than tissue pain.",
      detail:
        "Neuropathic pain results from a lesion or disease of the somatosensory nervous system — the nerves, spinal cord, or brain pathways that carry sensation — rather than from tissue injury. Damaged nerves can fire abnormally and spontaneously, and the system can amplify or distort signals, producing characteristic sensations: burning, shooting, stabbing, or electric-shock pain, often with tingling, pins-and-needles, numbness, or a heightened, painful response to light touch (allodynia). Common causes include diabetic peripheral neuropathy, nerve compression such as sciatica, post-herpetic neuralgia after shingles, nerve injury from trauma or surgery, multiple sclerosis, and stroke (central pain). Because the mechanism is different from tissue pain, ordinary painkillers and anti-inflammatories often help little; instead, certain antidepressants (such as duloxetine and tricyclics) and anti-seizure medicines (gabapentin, pregabalin) are first-line because they calm overactive nerve signaling. Recognizing neuropathic features matters precisely because it changes which treatments are likely to work.",
      sources: [
        {
          label: "Peripheral Neuropathy (neuropathic pain causes and features)",
          url: "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy",
          publisher: "NIH / NINDS",
        },
        {
          label: "Peripheral neuralgia / nerve pain (symptoms and causes)",
          url: "https://www.nhs.uk/conditions/peripheral-neuropathy/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["cause", "neuropathic", "nerve-pain", "neuropathy", "mechanism"],
    },
    {
      id: "central-sensitization-nociplastic",
      title: "Central sensitization and nociplastic pain",
      summary:
        "In nociplastic pain the nervous system itself becomes oversensitive — turning up the volume on pain signals — so pain is widespread and real even without tissue or nerve damage; fibromyalgia is the classic example.",
      detail:
        "Nociplastic pain arises from altered processing of pain in the nervous system despite no clear evidence of tissue damage or nerve injury. A key underlying process is central sensitization: neurons in the spinal cord and brain become hyperexcitable, so the pain system's 'volume' is turned up. The result is pain that is amplified, more widespread than any single injury would explain, and often accompanied by heightened sensitivity to touch, sound, light, or temperature, along with fatigue, poor sleep, and difficulty concentrating. Fibromyalgia is the prototypical nociplastic pain condition, and central sensitization is also thought to contribute to conditions such as irritable bowel syndrome, chronic tension headache, and some long-standing back pain. Importantly, this pain is entirely real even though scans and blood tests are typically normal — the problem is in pain processing, not a visible lesion. Because the driver is the nervous system rather than the tissues, management leans on exercise, sleep, stress reduction, pain psychology, and medicines that act on nerve signaling rather than anti-inflammatories or surgery.",
      sources: [
        {
          label: "IASP Terminology (nociplastic pain definition)",
          url: "https://www.iasp-pain.org/resources/terminology/",
          publisher: "International Association for the Study of Pain (IASP)",
        },
        {
          label: "Fibromyalgia (central sensitization and symptoms)",
          url: "https://www.niams.nih.gov/health-topics/fibromyalgia",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["cause", "nociplastic", "central-sensitization", "fibromyalgia", "mechanism"],
    },
    {
      id: "psychosocial-contributors",
      title: "Why mood, stress, and sleep change pain",
      summary:
        "Stress, anxiety, depression, and poor sleep genuinely amplify pain by acting on the same nervous-system circuits that process it — which is why they are treatment targets, not signs that pain is imaginary.",
      detail:
        "Psychological and social factors are not separate from pain biology — they act directly on the nervous system that produces pain. Stress, anxiety, fear of movement, low mood, and poor sleep all turn up pain sensitivity and reduce the body's natural pain-dampening systems, while attention to pain and catastrophic thinking ('this will never get better') can intensify and prolong it. The relationship is two-way: pain disturbs sleep and mood, and disturbed sleep and mood worsen pain, creating self-reinforcing cycles. Social context matters too — work stress, isolation, financial strain, and past trauma all influence how much pain a person experiences and how well they cope. None of this means the pain is 'in your head' or not real; it means the brain and body are one system, and the psychological and social inputs are genuine biological levers. This is the rationale for treatments like cognitive behavioral therapy, sleep improvement, stress reduction, and graded return to activity, which work by changing the same circuits that generate pain.",
      sources: [
        {
          label: "Chronic Pain (psychological and social contributors)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Mind and Body Approaches for Chronic Pain: What the Science Says",
          url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-chronic-pain-science",
          publisher: "NIH / NCCIH",
        },
      ],
      tags: ["cause", "psychological", "stress", "sleep", "biopsychosocial"],
    },
  ],
});
