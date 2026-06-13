import { defineSection } from "../types.js";

/**
 * CAUSE — pathophysiology and risk. How lupus arises from immune dysregulation:
 * loss of self-tolerance, autoantibodies and immune complexes, the type I
 * interferon signature, and the genetic, hormonal, and environmental factors
 * (including UV light and certain drugs) that combine to set it off.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes & Pathophysiology",
  description:
    "Why lupus happens: loss of immune self-tolerance, autoantibodies and immune complexes, the type I interferon pathway, and the genetic, hormonal, and environmental triggers (UV light, infections, some drugs) that combine to cause it.",
  entries: [
    {
      id: "immune-dysregulation-self-tolerance",
      title: "Loss of immune self-tolerance",
      summary:
        "Lupus develops when the immune system loses the ability to ignore the body's own tissues, so it begins attacking healthy cells as if they were threats.",
      detail:
        "The immune system is normally trained to distinguish 'self' from 'non-self' so it attacks germs but tolerates the body's own cells — a property called self-tolerance. In lupus, this tolerance breaks down, and the immune system starts treating normal components of the body (especially material from the nucleus of cells, like DNA) as foreign. A contributing problem is that dying cells are not cleared away efficiently, leaving cellular debris around longer; the immune system encounters this debris and mounts a response against it. Both the antibody-producing (B-cell) and the directing (T-cell) arms of the immune system are involved, and the result is sustained, misdirected inflammation. This fundamental loss of tolerance is why lupus is autoimmune and why treatments aim to calm or modulate an overactive immune system rather than to fight an outside infection.",
      sources: [
        {
          label: "Lupus — causes and the immune system",
          url: "https://www.niams.nih.gov/health-topics/lupus",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Lupus — causes",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["pathophysiology", "autoimmune", "self-tolerance"],
    },
    {
      id: "autoantibodies-immune-complexes",
      title: "Autoantibodies and immune complexes",
      summary:
        "In lupus the immune system makes antibodies against the body's own components; these autoantibodies can clump with their targets into immune complexes that lodge in tissues and drive inflammation.",
      detail:
        "A hallmark of lupus is the production of autoantibodies — antibodies aimed at the body's own molecules rather than at germs. The most characteristic targets are inside the cell nucleus, which is why most people with lupus have a positive antinuclear antibody (ANA) test; more specific examples include antibodies against double-stranded DNA (anti-dsDNA) and the Smith antigen (anti-Sm). These autoantibodies can bind their targets to form 'immune complexes,' tiny clumps that circulate in the blood and can deposit in tissues such as the kidneys, skin, joints, and blood-vessel walls. Once deposited, they activate the complement system and recruit inflammatory cells, causing the tissue damage seen in lupus — for example, in lupus nephritis, immune complexes lodging in the kidney's filters drive inflammation there. This mechanism explains why blood tests for these antibodies, and for complement levels, help with diagnosis and with tracking how active the disease is.",
      sources: [
        {
          label: "Glossary of Lupus Blood Tests (autoantibodies)",
          url: "https://www.lupus.org/resources/glossary-of-lupus-blood-tests",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Systemic lupus erythematosus (genetics and autoantibodies)",
          url: "https://medlineplus.gov/genetics/condition/systemic-lupus-erythematosus/",
          publisher: "MedlinePlus / NIH",
        },
      ],
      tags: ["pathophysiology", "autoantibodies", "immune-complexes", "complement"],
    },
    {
      id: "type-i-interferon",
      title: "The type I interferon pathway",
      summary:
        "Many people with lupus have an overactive type I interferon system — a set of immune signaling proteins — and this 'interferon signature' is now a target for newer treatments.",
      detail:
        "Type I interferons are immune-signaling proteins the body normally uses to fight viruses. In a large share of people with lupus, this system is persistently switched on, producing what researchers call a type I interferon 'signature' in the blood. The overactive interferon response is thought to amplify the autoimmune process — promoting autoantibody production, activating immune cells, and sustaining inflammation — which helps explain the chronic, smoldering nature of the disease. This insight has been directly translated into therapy: anifrolumab, a biologic approved for lupus, works by blocking the type I interferon receptor, reducing this signaling. Understanding the interferon pathway has reshaped how scientists view lupus and is one reason the disease is increasingly seen as having distinct molecular drivers that may eventually allow more targeted, personalized treatment.",
      sources: [
        {
          label: "SAPHNELO (anifrolumab) — type I interferon receptor mechanism",
          url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/761123s000lbl.pdf",
          publisher: "U.S. Food and Drug Administration",
          year: 2021,
        },
        {
          label: "The Future Directions of Lupus Research",
          url: "https://www.niams.nih.gov/about/future-directions-lupus-research",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["pathophysiology", "interferon", "mechanism", "treatment-target"],
    },
    {
      id: "genetic-risk",
      title: "Genetic susceptibility",
      summary:
        "Lupus is not inherited in a simple way, but genes raise susceptibility; having a close relative with lupus or another autoimmune disease modestly increases risk.",
      detail:
        "Genetics clearly contribute to lupus, but it is not passed down in a simple, single-gene way. Instead, many genes — most involved in how the immune system works and how cellular debris is cleared — each add a small amount of risk, and lupus tends to cluster in families and to be more common when a relative has another autoimmune disease. Most people who develop lupus, however, have no affected family member, and inheriting susceptibility genes is not enough on its own to cause the disease. The current understanding is that genetic susceptibility sets the stage, and one or more environmental triggers are usually needed to actually set lupus off. Rare single-gene forms exist and are studied because they illuminate the biology, but they account for a very small fraction of cases. This genetic background also helps explain why lupus is more common in certain populations.",
      sources: [
        {
          label: "Systemic lupus erythematosus — genetics",
          url: "https://medlineplus.gov/genetics/condition/systemic-lupus-erythematosus/",
          publisher: "MedlinePlus / NIH",
        },
        {
          label: "Lupus — risk factors",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["pathophysiology", "genetics", "family-history", "risk-factors"],
      caution:
        "Having a relative with lupus raises risk only modestly; lupus is not directly inherited and most people with it have no family history.",
    },
    {
      id: "hormonal-and-sex-factors",
      title: "Hormonal and sex-related factors",
      summary:
        "Lupus overwhelmingly affects women in their reproductive years, suggesting sex hormones such as estrogen influence the disease, though the full explanation is still being worked out.",
      detail:
        "The striking fact that about nine in ten people with lupus are women, with onset concentrated in the reproductive years, strongly suggests that sex and hormones shape the disease. Estrogen is thought to influence immune activity in ways that may promote autoimmunity, and disease activity can change around hormonal events such as pregnancy. However, the relationship is complex and incompletely understood — sex differences in the immune system (including effects of the second X chromosome) likely matter too, and lupus is not simply 'caused' by hormones. The practical relevance is real: because of these influences, decisions about hormonal contraception, hormone therapy, and pregnancy timing are made carefully and individually with the care team, especially in people with certain antibodies or active disease. Importantly, men and post-menopausal people can and do develop lupus, so a hormonal contribution does not mean the disease is limited to younger women.",
      sources: [
        {
          label: "Lupus — who is affected and hormonal factors",
          url: "https://www.niams.nih.gov/health-topics/lupus",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Lupus and Women's Reproductive Health",
          url: "https://www.lupus.org/resources/womens-health-and-reproductive-issues-with-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["pathophysiology", "hormones", "estrogen", "sex-differences"],
    },
    {
      id: "environmental-triggers",
      title: "Environmental triggers",
      summary:
        "In genetically susceptible people, triggers such as ultraviolet light, certain infections, stress, smoking, and some medications can help set off lupus or provoke flares.",
      detail:
        "Lupus is generally understood as arising when environmental triggers act on a genetically and hormonally susceptible person. Ultraviolet (UV) light from the sun is one of the best-established triggers: it can both help initiate disease and provoke flares, especially skin disease, which is why sun protection is so emphasized. Certain infections (the Epstein–Barr virus has been studied), physical or emotional stress, and smoking are also linked to onset or worsening of lupus. Some medications can trigger the distinct drug-induced form. No single environmental cause has been proven to be 'the' cause, and importantly, nothing a person did wrong causes lupus. Recognizing common triggers is useful because avoiding the modifiable ones — particularly UV exposure and smoking — is part of reducing flares, though triggers vary from person to person and not every flare has an identifiable cause.",
      sources: [
        {
          label: "Understanding Lupus Environmental Triggers",
          url: "https://www.lupus.org/resources/understanding-lupus-environmental-triggers",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus — causes and triggers",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["pathophysiology", "triggers", "uv-light", "smoking", "infection"],
    },
  ],
});
