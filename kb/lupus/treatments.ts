import { defineSection } from "../types.js";

/**
 * TREATMENTS — the medications used to control lupus: hydroxychloroquine (the
 * cornerstone), corticosteroids, immunosuppressants (mycophenolate,
 * azathioprine, methotrexate, cyclophosphamide), and biologics (belimumab,
 * anifrolumab) plus rituximab. Educational overview of how each class is used
 * and why; treatment choices and dosing belong to the care team.
 */
export const treatments = defineSection({
  id: "treatments",
  title: "Treatments & Medications",
  description:
    "How lupus is treated with medicines: hydroxychloroquine as the foundation, corticosteroids for flares, immunosuppressants (mycophenolate, azathioprine, methotrexate, cyclophosphamide), and biologics (belimumab, anifrolumab) and rituximab for more active or resistant disease.",
  entries: [
    {
      id: "treatment-goals",
      title: "Goals of lupus treatment",
      summary:
        "Treatment aims to calm the overactive immune system, control symptoms, prevent flares and organ damage, and reduce long-term harm from both the disease and its medicines.",
      detail:
        "Lupus has no cure, but treatment can control it well, and the overall aims are consistent: reduce inflammation and disease activity, relieve symptoms, prevent flares, protect organs from damage, and preserve quality of life — while minimizing the side effects of treatment itself. Because lupus varies so much, treatment is individualized to which organs are involved and how active the disease is, ranging from a foundation of hydroxychloroquine with sun protection in milder disease to potent immunosuppression for serious organ involvement. A recurring theme in modern care is using the lowest effective dose of corticosteroids and 'steroid-sparing' medicines to avoid the long-term harms of steroids. Treatment is usually overseen by a rheumatologist, with other specialists (such as nephrologists for kidney disease) involved as needed, and plans are adjusted over time as the disease changes. All specific drug choices, doses, and changes belong with the care team.",
      sources: [
        {
          label: "Lupus — diagnosis and treatment",
          url: "https://www.niams.nih.gov/health-topics/lupus/diagnosis-treatment-and-steps-to-take",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Medications Used to Treat Lupus",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["treatment", "goals", "overview"],
      caution:
        "Educational overview only — which medicines to use, at what dose, and for how long are decisions for the care team.",
    },
    {
      id: "hydroxychloroquine",
      title: "Hydroxychloroquine (Plaquenil) — the cornerstone",
      summary:
        "Hydroxychloroquine, an antimalarial drug, is the foundation of lupus care; most people take it long term because it reduces flares, protects organs, and improves survival, with generally mild side effects.",
      detail:
        "Hydroxychloroquine (brand name Plaquenil) is an antimalarial medicine that has become the cornerstone of lupus treatment, and guidelines recommend that most people with lupus take it long term unless there is a specific reason not to. It works by dampening the overactive immune response — reducing autoantibody-driven inflammation — and has wide-ranging benefits: fewer and milder flares, protection against organ damage, possible reduction in blood clots, and improved long-term survival. It usually takes one to three months to reach full effect, so it is taken steadily rather than only during flares, and stopping it is associated with a higher risk of flares. Side effects are generally mild (such as stomach upset). One important long-term consideration is a small risk of damage to the retina at the back of the eye, which is why people on hydroxychloroquine have periodic eye examinations to catch any early changes. Its strong benefit-to-risk balance is why it anchors lupus therapy.",
      sources: [
        {
          label: "Hydroxychloroquine (Plaquenil): Benefits, Side Effects and Dosing",
          url: "https://www.lupus.org/resources/drug-spotlight-on-hydroxychloroquine",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Reducing or Stopping Hydroxychloroquine Linked to Higher Flare Risk",
          url: "https://www.lupus.org/news/reducing-or-stopping-hydroxychloroquine-treatment-associated-with-increased-lupus-flare-risk",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["treatment", "hydroxychloroquine", "antimalarial", "cornerstone"],
      evidence: "established",
      caution:
        "People on hydroxychloroquine need periodic eye (retinal) check-ups; don't start, stop, or change the dose without the care team.",
    },
    {
      id: "corticosteroids",
      title: "Corticosteroids (e.g., prednisone)",
      summary:
        "Steroids quickly reduce inflammation and are widely used for flares and serious disease, but their long-term side effects mean the goal is the lowest dose for the shortest time needed.",
      detail:
        "Corticosteroids such as prednisone are powerful anti-inflammatory drugs that work quickly, making them valuable for controlling flares and serious organ involvement; for life-threatening disease, high doses (sometimes intravenous) may be used to bring inflammation under control rapidly. Their drawback is a long list of side effects with prolonged use — weight gain, raised blood sugar and blood pressure, bone thinning (osteoporosis), increased infection risk, cataracts, mood changes, and others — so a central principle of modern lupus care is to use the lowest effective dose for the shortest necessary time and to taper carefully. Steroids are generally not stopped abruptly because the body needs time to resume its own production. To limit steroid exposure, clinicians often add 'steroid-sparing' immunosuppressants or biologics so the steroid dose can be reduced. The balance between rapid control and long-term harm is managed individually by the care team.",
      sources: [
        {
          label: "Medications Used to Treat Lupus (steroids)",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus — treatment (corticosteroids)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "corticosteroids", "prednisone", "flare"],
      evidence: "established",
      caution:
        "Don't stop steroids suddenly — they are tapered under medical guidance — and report side effects rather than self-adjusting the dose.",
    },
    {
      id: "immunosuppressants",
      title: "Immunosuppressants (mycophenolate, azathioprine, methotrexate, cyclophosphamide)",
      summary:
        "These medicines suppress the overactive immune system to treat more serious lupus and reduce steroid use; the choice depends on which organs are involved and the individual's situation.",
      detail:
        "When lupus is more active or affects major organs — especially the kidneys — clinicians add immunosuppressant medicines that calm the immune attack and allow steroid doses to be lowered. Several are commonly used and chosen by the situation: mycophenolate (mycophenolate mofetil) and cyclophosphamide are mainstays for lupus nephritis and other severe involvement; azathioprine is often used for ongoing maintenance and is among the options considered compatible with pregnancy; and methotrexate can help with joint and skin disease. These drugs require monitoring because they can lower blood counts, affect the liver, and increase infection risk, and several — notably methotrexate, mycophenolate, and cyclophosphamide — can harm a pregnancy and must be planned around conception with the care team. The aim is to control disease while managing these risks, so regular blood tests and clear communication about pregnancy plans and infections are part of treatment. The specific agent, dose, and monitoring schedule are set individually.",
      sources: [
        {
          label: "Medications Used to Treat Lupus (immunosuppressives)",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus Nephritis (treatment)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/lupus-nephritis",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["treatment", "immunosuppressants", "mycophenolate", "azathioprine", "cyclophosphamide", "methotrexate"],
      evidence: "established",
      caution:
        "These drugs need regular blood monitoring and careful pregnancy planning; several can harm a fetus, so discuss contraception and conception with the care team.",
    },
    {
      id: "biologics-belimumab-anifrolumab",
      title: "Biologics: belimumab and anifrolumab",
      summary:
        "Belimumab and anifrolumab are targeted biologic drugs approved for lupus; they act on specific parts of the immune system and are used alongside standard treatment for active disease.",
      detail:
        "Biologics are precision drugs aimed at specific immune targets, and two are approved specifically for lupus. Belimumab (Benlysta) blocks a protein (BLyS/BAFF) that helps autoantibody-producing B cells survive; it was the first drug approved for lupus in decades (2011) and is used for active SLE — including approved use in lupus nephritis and in children — added on top of standard therapy. Anifrolumab (Saphnelo), approved in 2021, blocks the type I interferon receptor, targeting the interferon pathway that is overactive in many people with lupus, and is used for moderate-to-severe SLE alongside standard care. Both are given by infusion or injection, are typically added when standard treatment is not controlling the disease, and carry an increased infection risk that requires attention to vaccination and monitoring. They represent a shift toward targeting the specific immune mechanisms driving lupus, and whether and which to use is decided individually by the rheumatology team.",
      sources: [
        {
          label: "BENLYSTA (belimumab) prescribing information",
          url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/761043s021lbl.pdf",
          publisher: "U.S. Food and Drug Administration",
          year: 2022,
        },
        {
          label: "SAPHNELO (anifrolumab-fnia) prescribing information",
          url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/761123s000lbl.pdf",
          publisher: "U.S. Food and Drug Administration",
          year: 2021,
        },
      ],
      tags: ["treatment", "biologics", "belimumab", "anifrolumab", "interferon"],
      evidence: "established",
    },
    {
      id: "rituximab",
      title: "Rituximab (B-cell depletion)",
      summary:
        "Rituximab removes B cells from the immune system and is used 'off-label' for some difficult lupus cases, including when standard treatments have not worked, under specialist guidance.",
      detail:
        "Rituximab is a biologic that depletes B cells — the immune cells that make antibodies — by targeting a protein (CD20) on their surface. Although large formal trials in general lupus did not clearly meet their goals, rituximab is used in practice for selected, difficult cases, such as severe or refractory disease and certain types of lupus nephritis or blood involvement that have not responded to standard treatment; in some health systems it is provided through specific pathways for refractory SLE. Because this use is largely 'off-label' (outside the formally approved indications) and based on clinical experience and specialist judgment, it is reserved for situations where the potential benefit justifies it. Like other B-cell-directed and immunosuppressive therapies, it increases infection risk and requires screening (for example for hepatitis B) and monitoring. Decisions to use rituximab are made by specialists weighing the individual's disease severity and prior treatments.",
      sources: [
        {
          label: "Rituximab for refractory Systemic Lupus Erythematosus (SLE)",
          url: "https://www.england.nhs.uk/publication/rituximab-for-refractory-systemic-lupus-erythematosus-sle-in-adults-and-post-pubescent-children/",
          publisher: "NHS England",
        },
        {
          label: "Medications Used to Treat Lupus (biologics)",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["treatment", "rituximab", "b-cell", "refractory", "off-label"],
      evidence: "mixed",
      caution:
        "Rituximab in lupus is often used off-label for resistant disease; its use, risks, and required screening are decided by specialists.",
    },
    {
      id: "nsaids-and-symptom-relief",
      title: "NSAIDs and symptom relief",
      summary:
        "Nonsteroidal anti-inflammatory drugs can ease lupus joint pain and serositis, but they carry stomach, kidney, blood-pressure, and heart cautions that matter especially in lupus.",
      detail:
        "Nonsteroidal anti-inflammatory drugs (NSAIDs, such as ibuprofen and naproxen) are used to relieve common lupus symptoms like joint pain, muscle aches, and the chest pain of pleurisy or pericarditis. They can be helpful, but they are not without risk, and several of their cautions are particularly relevant in lupus: NSAIDs can stress the kidneys, which is a concern when lupus may already affect kidney function; they can raise blood pressure and affect the heart; they can irritate the stomach and cause bleeding; and some people with lupus are unusually sensitive to them. For these reasons NSAID use is guided by the care team, especially for anyone with kidney involvement, high blood pressure, or who takes other medicines that affect the kidneys or clotting. NSAIDs treat symptoms rather than the underlying disease, so they complement, rather than replace, disease-controlling treatment like hydroxychloroquine.",
      sources: [
        {
          label: "Medications Used to Treat Lupus (NSAIDs)",
          url: "https://www.lupus.org/resources/medications-used-to-treat-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus — treatment (NSAIDs)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["treatment", "nsaids", "pain", "symptom-relief"],
      evidence: "established",
      caution:
        "NSAIDs can stress the kidneys and raise blood pressure — important in lupus; check with the care team before regular use, especially with kidney involvement.",
    },
  ],
});
