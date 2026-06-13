import { defineSection } from "../types.js";

/**
 * OVERVIEW — what chronic pain is and how it is framed today. Chronic pain is
 * pain that persists or recurs for more than three months; modern understanding
 * treats it as a condition in its own right, shaped by biological, psychological,
 * and social factors (the biopsychosocial model), not merely a symptom of
 * ongoing tissue damage.
 */
export const overview = defineSection({
  id: "overview",
  title: "Overview & Classification",
  description:
    "What chronic pain is — pain lasting more than three months — how it differs from acute pain, the biopsychosocial model, and how clinicians classify it by mechanism (nociceptive, neuropathic, nociplastic) and as primary vs. secondary pain.",
  entries: [
    {
      id: "what-is-chronic-pain",
      title: "What chronic pain is",
      summary:
        "Chronic pain is pain that lasts or recurs for more than three months; it is very common and, unlike short-lived acute pain, often persists after any original injury has healed.",
      detail:
        "Acute pain is the body's normal alarm system — a short-lived warning that something is wrong, such as a burn, cut, or fracture, which usually fades as the injury heals. Pain that continues for longer than about three months is called chronic pain, and it is one of the most common reasons adults seek medical care. A U.S. study found that roughly one in five adults lives with chronic pain, making it a major public-health problem. The defining feature is duration: chronic pain may linger long after an injury has healed, accompany an ongoing condition such as arthritis, or appear without any clear injury at all. Crucially, chronic pain is increasingly understood not just as a symptom but as a health condition in its own right, because the nervous system itself can change in ways that keep pain switched on. That shift in thinking matters, because it explains why 'find the damage and fix it' often does not work for long-standing pain and why management focuses on improving function and quality of life.",
      sources: [
        {
          label: "Pain (chronic pain overview)",
          url: "https://www.ninds.nih.gov/health-information/disorders/pain",
          publisher: "NIH / NINDS",
        },
        {
          label: "Chronic Pain: What It Is, Symptoms, Treatment & Management",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["overview", "definition", "chronic-pain"],
    },
    {
      id: "biopsychosocial-model",
      title: "The biopsychosocial model of pain",
      summary:
        "Pain is produced by the brain and shaped by biological, psychological, and social factors together — not by tissue damage alone — which is why effective care addresses more than the painful body part.",
      detail:
        "Modern pain science views pain through a biopsychosocial lens: the experience of pain emerges from the interaction of biological factors (nerves, tissues, inflammation, nervous-system sensitivity), psychological factors (mood, stress, fear, attention, beliefs about pain), and social factors (relationships, work, sleep, finances, past experiences). This is not a claim that pain is 'imaginable' or 'not real' — pain is always real — but a recognition that the same injury can hurt very differently in different people and circumstances because the brain constructs the experience from many inputs. The model explains common observations: why anxiety and poor sleep amplify pain, why low mood and isolation make it harder to cope, and why two people with identical scans can have very different pain. It is also the foundation of effective treatment, because it points to multiple levers — physical, psychological, and social — rather than a single pill or procedure. Care that ignores the psychological and social dimensions tends to underperform, which is why pain specialists work across all three.",
      sources: [
        {
          label: "Chronic Pain (biopsychosocial approach)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
        {
          label: "Chronic Pain: What It Is, Symptoms, Treatment & Management",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["overview", "biopsychosocial", "model"],
    },
    {
      id: "pain-mechanism-types",
      title: "Three mechanisms: nociceptive, neuropathic, nociplastic",
      summary:
        "Clinicians group pain by its underlying mechanism — nociceptive (tissue damage), neuropathic (nerve damage), and nociplastic (altered pain processing) — because the type guides which treatments are likely to help.",
      detail:
        "The International Association for the Study of Pain (IASP) describes three broad mechanisms that help make sense of chronic pain. Nociceptive pain arises from actual or threatened damage to non-nerve tissue and a normally functioning nervous system — for example arthritis, a sprain, or post-surgical pain; it often feels aching or throbbing. Neuropathic pain is caused by a lesion or disease of the nerves themselves (the somatosensory nervous system) — examples include diabetic nerve pain, sciatica, and post-shingles pain — and tends to feel burning, shooting, or electric, sometimes with numbness. Nociplastic pain, a term IASP adopted in 2017, arises from altered processing of pain signals despite no clear tissue or nerve damage; fibromyalgia is the classic example. These categories are not mutually exclusive — many people have 'mixed' pain with more than one mechanism — but they matter because treatment differs: for instance, anti-inflammatory drugs target nociceptive pain, certain antidepressants and anti-seizure drugs target neuropathic and nociplastic pain, and the nervous-system-focused approaches matter most for nociplastic pain.",
      sources: [
        {
          label: "IASP Terminology (nociceptive, neuropathic, nociplastic definitions)",
          url: "https://www.iasp-pain.org/resources/terminology/",
          publisher: "International Association for the Study of Pain (IASP)",
        },
        {
          label: "Types of Pain (mechanistic classification)",
          url: "https://pain.ucsf.edu/understanding-pain-pain-basics/types-pain",
          publisher: "UCSF Pain Management",
        },
      ],
      tags: ["overview", "nociceptive", "neuropathic", "nociplastic", "classification"],
    },
    {
      id: "primary-vs-secondary-pain",
      title: "Chronic primary vs. chronic secondary pain",
      summary:
        "The WHO classification (ICD-11) splits chronic pain into 'primary' pain that is a condition in itself and 'secondary' pain that is a symptom of another disease — a distinction that shapes the treatment focus.",
      detail:
        "The World Health Organization's ICD-11 disease classification formally recognizes chronic pain and divides it into two groups. Chronic primary pain is pain that is best understood as a health condition in its own right — it cannot be fully explained by another diagnosis and is associated with significant distress or disability; fibromyalgia, chronic primary low back pain, and chronic primary headache fall here. Chronic secondary pain is pain that occurs as a symptom of an underlying condition, such as chronic cancer-related pain, pain from osteoarthritis, post-surgical or post-traumatic pain, and chronic neuropathic pain. The distinction is practical: for secondary pain, treating the underlying disease may help the pain, whereas for primary pain, the pain itself is the target of treatment. Either way, modern care recognizes that long-standing pain involves changes in the nervous system, so management often blends approaches aimed at the body, the nerves, and the brain's pain-processing systems rather than searching endlessly for a single fixable cause.",
      sources: [
        {
          label: "ICD-11 Pain Classification Resources (chronic primary vs. secondary pain)",
          url: "https://www.iasp-pain.org/resources/icd-11-pain-classification-resources/",
          publisher: "International Association for the Study of Pain (IASP)",
        },
        {
          label: "Chronic Pain (classification overview)",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK553030/",
          publisher: "StatPearls / NIH National Library of Medicine",
        },
      ],
      tags: ["overview", "classification", "icd-11", "primary-pain", "secondary-pain"],
    },
    {
      id: "common-chronic-pain-conditions",
      title: "Common chronic pain conditions",
      summary:
        "Chronic pain shows up in many forms — chronic low back pain, osteoarthritis and joint pain, neuropathy, fibromyalgia, headaches and migraine, and more — which is why it is described as a family of conditions rather than one disease.",
      detail:
        "Chronic pain is the main symptom of a wide range of injuries, infections, and diseases, so it appears in many guises. Among the most common are chronic low back pain (one of the leading causes of disability worldwide), osteoarthritis and other joint pain, neck pain, and widespread pain conditions like fibromyalgia. Neuropathic conditions — diabetic peripheral neuropathy, sciatica, post-herpetic neuralgia after shingles, and complex regional pain syndrome — form another large group. Headache disorders, especially migraine and chronic tension-type headache, are extremely common, as is chronic pelvic pain, cancer-related pain, and pain from autoimmune and inflammatory diseases. Many people have more than one painful condition at once. Because the conditions differ so much in cause and in which treatments help, accurate description of the pain — where it is, what it feels like, what makes it better or worse, and how it affects daily life — is an important first step. The shared thread across all of them is persistence beyond three months and an impact on function and wellbeing that the care plan aims to address.",
      sources: [
        {
          label: "Chronic Pain (common types of chronic pain)",
          url: "https://my.clevelandclinic.org/health/diseases/4798-chronic-pain",
          publisher: "Cleveland Clinic",
        },
        {
          label: "Chronic Pain (MedlinePlus topic)",
          url: "https://medlineplus.gov/chronicpain.html",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["overview", "low-back-pain", "fibromyalgia", "neuropathy", "arthritis", "conditions"],
    },
  ],
});
