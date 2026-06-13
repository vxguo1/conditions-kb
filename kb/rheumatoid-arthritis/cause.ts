import { defineSection } from "../types.js";

/**
 * CAUSE — pathophysiology and risk. How a normal immune system goes wrong in
 * RA: loss of self-tolerance, citrullination and autoantibodies (RF, anti-CCP),
 * synovitis and pannus, the cytokine drivers (TNF, IL-6), and the genetic and
 * environmental risk factors — above all smoking.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes & Pathophysiology",
  description:
    "Why RA happens: loss of immune self-tolerance, citrullination and the autoantibodies (rheumatoid factor, anti-CCP), inflammatory synovitis and pannus, the key cytokines, and the genetic and environmental risk factors — especially smoking.",
  entries: [
    {
      id: "autoimmune-loss-of-tolerance",
      title: "An autoimmune disease: the immune system attacks the joints",
      summary:
        "In RA the immune system loses its ability to tell 'self' from 'foreign' and mounts a sustained attack on the body's own joint tissue, driving chronic inflammation.",
      detail:
        "The immune system normally distinguishes the body's own tissues from invaders and leaves 'self' alone — a property called self-tolerance. In rheumatoid arthritis this tolerance breaks down, and immune cells and antibodies begin targeting the body's own tissues, particularly the synovium that lines the joints. The exact spark is not fully known, but it is understood to involve a susceptible immune system (shaped by certain genes) meeting environmental triggers, after which a self-sustaining inflammatory loop takes hold. Unlike a passing infection, this autoimmune process does not resolve on its own; the inflammation persists and, untreated, becomes chronic and destructive. Understanding RA as an immune disease — not a wear, diet, or injury problem — explains why its treatments target the immune system rather than just relieving pain, and why it can affect organs beyond the joints.",
      sources: [
        {
          label: "Rheumatoid Arthritis — Symptoms, Causes, & Risk Factors",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Rheumatoid arthritis — causes (autoimmune mechanism)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["cause", "autoimmune", "pathophysiology"],
    },
    {
      id: "synovitis-and-pannus",
      title: "Synovitis and pannus: how joints get damaged",
      summary:
        "Inflammation thickens the joint lining into invasive tissue ('pannus') that releases enzymes and erodes the cartilage and bone, producing the lasting damage of RA.",
      detail:
        "The joint damage of RA happens through a fairly specific sequence. Inflammation causes the normally thin synovial lining to swell and proliferate, filling with immune cells and becoming thickened and overgrown — a state called synovitis. This inflamed tissue can grow into an aggressive, invasive front known as pannus, which spreads over and into the cartilage and bone at the joint margins. The pannus and the inflammatory cells within it release enzymes and signaling molecules that break down cartilage and stimulate cells that resorb bone, producing the characteristic 'erosions' seen on X-rays and, over time, joint deformity and loss of function. Persistent inflammation also damages tendons and ligaments around the joint, contributing to the misalignments seen in advanced disease. Because this destructive process is driven by ongoing inflammation, controlling the inflammation early — before pannus has eroded the joint — is the key to preventing irreversible damage.",
      sources: [
        {
          label: "Rheumatoid Arthritis (synovium and joint damage)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (how RA damages joints)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["cause", "synovitis", "pannus", "joint-damage", "pathophysiology"],
    },
    {
      id: "citrullination-autoantibodies",
      title: "Citrullination and autoantibodies (RF and anti-CCP)",
      summary:
        "RA is marked by autoantibodies — rheumatoid factor and anti-CCP — and the latter targets 'citrullinated' proteins, a chemically altered form of the body's own proteins.",
      detail:
        "Two autoantibodies are central to understanding RA. Rheumatoid factor (RF) is an antibody directed against part of the person's own other antibodies; it is found in many people with RA but is not specific to RA (it appears in some other conditions and in some healthy people). Anti-cyclic citrullinated peptide antibodies (anti-CCP, or ACPA) are more specific to RA and are rarely seen in people without it. Anti-CCP antibodies target proteins that have undergone 'citrullination' — a normal chemical modification in which the amino acid arginine is converted to citrulline. In people genetically predisposed to RA, the immune system mistakenly treats these citrullinated proteins as foreign and produces antibodies against them. Strikingly, these antibodies can be present in the blood years before joint symptoms appear, marking a pre-clinical phase of the disease. Their presence helps confirm the diagnosis, predicts a more erosive course, and is part of the formal classification criteria for RA.",
      sources: [
        {
          label: "CCP Antibody Test (citrullinated peptide antibodies)",
          url: "https://medlineplus.gov/lab-tests/ccp-antibody-test/",
          publisher: "NIH / MedlinePlus",
        },
        {
          label: "Rheumatoid Factor (RF) Test",
          url: "https://medlineplus.gov/lab-tests/rheumatoid-factor-rf-test/",
          publisher: "NIH / MedlinePlus",
        },
      ],
      tags: ["cause", "autoantibodies", "anti-ccp", "rheumatoid-factor", "citrullination"],
    },
    {
      id: "cytokines-tnf-il6",
      title: "The inflammatory drivers: TNF, IL-6, and immune cells",
      summary:
        "Signaling molecules called cytokines — especially TNF and IL-6 — and immune cells such as T cells and B cells sustain the inflammation of RA, and are the targets of modern drugs.",
      detail:
        "The chronic inflammation of RA is orchestrated by immune cells and the chemical messengers they release, called cytokines. T cells, B cells (which make the autoantibodies), and other immune cells accumulate in the inflamed synovium and produce pro-inflammatory cytokines — among them tumor necrosis factor (TNF) and interleukin-6 (IL-6) — which amplify the inflammation, recruit more immune cells, and drive the cartilage- and bone-damaging processes. This understanding directly shaped modern treatment: biologic drugs were designed to block specific players in this cascade, such as TNF inhibitors (which neutralize TNF), IL-6 inhibitors, drugs that interfere with T-cell activation (abatacept), and drugs that deplete B cells (rituximab), while JAK inhibitors block the intracellular signaling many of these cytokines use. In other words, mapping the inflammatory machinery of RA turned the disease from one managed only by symptom relief into one treatable by targeting the immune process itself.",
      sources: [
        {
          label: "Rheumatoid Arthritis (immune cells and cytokines in RA)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
        {
          label: "Rheumatoid Arthritis — research on RA mechanisms",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["cause", "cytokines", "tnf", "il-6", "pathophysiology"],
    },
    {
      id: "genetic-risk",
      title: "Genetic risk: the 'shared epitope' and family history",
      summary:
        "RA is partly genetic — certain HLA immune genes (the 'shared epitope') raise risk — but genes alone are not enough and most people with RA have no clear family pattern.",
      detail:
        "Genetics contributes to RA risk but does not determine it. The strongest genetic links are to certain variants of the HLA genes, which help the immune system recognize what is 'self' versus foreign; a group of these variants sharing a similar sequence is called the 'shared epitope,' and carrying it raises the risk of RA, particularly the anti-CCP-positive form. Many other genes add smaller contributions. Having a first-degree relative with RA increases one's own risk modestly, but inheritance is not straightforward: most people who develop RA have no affected close relative, and many people with susceptibility genes never develop the disease. This is because genes set the stage but environmental factors — most notably smoking — are usually needed to trigger the disease in a susceptible person. The practical takeaway is that genetic risk describes probability across populations and cannot, on its own, explain why a particular individual developed RA.",
      sources: [
        {
          label: "Rheumatoid Arthritis — Symptoms, Causes, & Risk Factors (genetics, family history)",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Rheumatoid arthritis — risk factors",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["cause", "genetics", "hla", "shared-epitope", "risk-factors"],
      caution:
        "Risk factors describe populations, not individuals — genes alone do not explain why one specific person developed RA.",
    },
    {
      id: "environmental-triggers-smoking",
      title: "Environmental triggers — smoking above all",
      summary:
        "Smoking is the best-established environmental risk factor for RA: it raises the risk of developing the disease, worsens its severity, and reduces how well treatment works.",
      detail:
        "On top of genetic susceptibility, environmental exposures help trigger RA, and smoking is by far the most firmly established. Cigarette smoking increases the risk of developing RA — especially the anti-CCP-positive form and especially in people who carry the genetic shared epitope, an example of genes and environment interacting. Smoking is thought to promote citrullination of proteins in the lungs, contributing to the autoantibody response. Beyond causing the disease, smoking makes established RA worse: it is associated with more severe joint disease, more lung and other complications, and a poorer response to several RA medications, including methotrexate and TNF inhibitors. Other environmental factors under study include certain occupational dust exposures (such as silica), gum disease, and the makeup of the gut and oral microbiome, but none is as well established as smoking. Because smoking is modifiable, stopping is one of the few things shown to lower RA risk and to improve outcomes once RA is present.",
      sources: [
        {
          label: "Rheumatoid Arthritis (smoking as a risk factor)",
          url: "https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
          publisher: "CDC",
        },
        {
          label: "Rheumatoid Arthritis — Symptoms, Causes, & Risk Factors (smoking, environment)",
          url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["cause", "smoking", "environment", "risk-factors", "prevention"],
    },
  ],
});
