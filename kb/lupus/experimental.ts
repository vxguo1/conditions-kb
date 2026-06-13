import { defineSection } from "../types.js";

/**
 * EXPERIMENTAL & EMERGING — frontier directions in lupus, labeled honestly:
 * CAR-T cell therapy (investigational, striking early results but small/
 * uncontrolled), newer biologics and recently approved targeted drugs, the move
 * toward precision/biomarker-guided treatment, and a clear caution about
 * unproven stem-cell clinics.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Therapies",
  description:
    "Frontier directions in lupus — CAR-T cell therapy, newer and recently approved targeted drugs, and biomarker-guided 'precision' treatment — reported with honest evidence levels and a caution about unproven stem-cell clinics.",
  entries: [
    {
      id: "experimental-overview",
      title: "How to read 'breakthrough' lupus news",
      summary:
        "Lupus research is advancing quickly, but many headline results come from small, early studies; understanding evidence levels helps separate genuinely established treatments from promising-but-unproven ones.",
      detail:
        "Lupus is in an unusually active period of research, with new targeted drugs approved in recent years and dramatic early results from cell therapies generating excitement. That progress is real, but interpreting it requires care: a finding from a small, uncontrolled case series is not the same as a treatment proven in large randomized trials, and history in lupus includes promising approaches that did not hold up under rigorous testing. The entries here label where each emerging approach stands — from investigational (in trials, not approved) to established — so the difference is clear. The practical takeaways are that genuinely established treatments (like hydroxychloroquine and the approved biologics) remain the foundation, that access to truly experimental therapies generally comes through legitimate clinical trials, and that any therapy marketed as a miracle cure outside that framework deserves skepticism. Discussing emerging options, including trial eligibility, with the rheumatology team is the safe way to engage with the frontier.",
      sources: [
        {
          label: "The Future Directions of Lupus Research",
          url: "https://www.niams.nih.gov/about/future-directions-lupus-research",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Action Plan for Lupus Research at the NIAMS",
          url: "https://www.niams.nih.gov/about/working-groups/lupus-federal/action-plan",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["experimental", "overview", "evidence"],
      evidence: "emerging",
    },
    {
      id: "car-t-cell-therapy",
      title: "CAR-T cell therapy for lupus",
      summary:
        "CAR-T therapy — re-engineering a person's T cells to wipe out the B cells driving lupus — has produced striking early remissions in severe disease, but evidence is still from small, uncontrolled studies.",
      detail:
        "One of the most talked-about frontiers is CAR-T cell therapy, originally developed for blood cancers and now being tested in severe, treatment-resistant lupus. The approach takes a person's own T cells, genetically engineers them to target CD19 (a marker on B cells), and reinfuses them to deeply deplete the B cells that produce lupus autoantibodies. Early case series in refractory SLE have reported remarkable results — including drug-free remissions lasting many months and big drops in autoantibodies — which has generated enormous interest in the possibility of a profound, possibly durable response. However, these findings come from small, uncontrolled studies in a small number of patients, so the long-term durability, who benefits most, and the full safety profile are not yet established; CAR-T also carries known risks such as cytokine release syndrome and infection, and regulators have flagged a need to watch for secondary cancers with CAR-T broadly. It is genuinely promising but investigational, available chiefly through clinical trials, and not yet a standard lupus treatment.",
      sources: [
        {
          label: "Anti-CD19 CAR T cell therapy for refractory systemic lupus erythematosus",
          url: "https://www.nature.com/articles/s41591-022-02017-5",
          publisher: "Nature Medicine",
          year: 2022,
        },
        {
          label: "CAR-T Cell Therapy Leads to Long-Term Remission in Lupus",
          url: "https://rheumatology.org/press-releases/car-t-cell-therapy-leads-to-long-term-remission-in-lupus-while-maintaining-vaccine-response",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["experimental", "car-t", "cell-therapy", "b-cell", "refractory"],
      evidence: "investigational",
      caution:
        "CAR-T for lupus is experimental and studied mainly in severe, refractory disease through clinical trials — it is not an approved or standard treatment, and it carries serious risks.",
    },
    {
      id: "newer-targeted-biologics",
      title: "Newer and recently approved targeted drugs",
      summary:
        "The lupus toolbox is expanding with recently approved targeted drugs — such as anifrolumab (interferon pathway) and voclosporin for lupus nephritis — and more biologics are in trials.",
      detail:
        "After decades with few new lupus drugs, the past several years have brought several targeted therapies, reflecting a better understanding of the disease's biology. Anifrolumab, approved in 2021, blocks the type I interferon receptor — directly targeting the overactive interferon pathway central to many people's lupus — and is used for moderate-to-severe SLE. Voclosporin, a calcineurin inhibitor, was approved specifically for lupus nephritis as an addition to standard therapy, expanding kidney-disease options. Belimumab's approvals have also broadened, including for lupus nephritis. Beyond these approved agents, many additional biologics and small molecules aimed at B cells, signaling pathways, and the interferon system are in clinical trials. These are no longer purely 'experimental' once approved, but they are recent enough that real-world experience is still accumulating, and which (if any) suits a given person is an individualized decision. The trend is toward more, and more targeted, options — a meaningful shift for a disease long managed with broad immunosuppression.",
      sources: [
        {
          label: "SAPHNELO (anifrolumab-fnia) prescribing information",
          url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/761123s000lbl.pdf",
          publisher: "U.S. Food and Drug Administration",
          year: 2021,
        },
        {
          label: "Lupus — treatment (newer medications including voclosporin)",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["experimental", "biologics", "anifrolumab", "voclosporin", "targeted-therapy"],
      evidence: "established",
    },
    {
      id: "precision-medicine-biomarkers",
      title: "Toward precision (biomarker-guided) treatment",
      summary:
        "Researchers are working to match treatments to a person's specific lupus biology — such as their interferon signature or molecular subgroup — rather than treating all lupus the same way.",
      detail:
        "Because lupus varies so much from person to person, a major research direction is precision medicine: using biological markers to predict who will respond to which treatment, instead of the current largely trial-and-error approach. The type I interferon signature is a leading example — it helps explain why interferon-blocking drugs like anifrolumab help some people — and scientists are exploring panels of autoantibodies and other molecular features to define lupus subgroups with different prognoses and treatment needs. Some studies have used long-term antibody data and artificial intelligence to identify distinct lupus subtypes, hinting at a future where treatment is matched to a person's molecular profile and disease activity is tracked with better biomarkers. This work is still developing and not yet a routine way to choose therapy, but it reflects a shift in thinking — viewing 'lupus' as several related diseases rather than one — that could eventually make treatment more effective and less reliant on broad immunosuppression. For now it mainly informs research and the rationale behind targeted drugs.",
      sources: [
        {
          label: "Researchers Identify Four Lupus Subgroups Using Long-term Autoantibody Data and AI",
          url: "https://www.lupus.org/news/researchers-identify-four-lupus-subgroups-associated-with-lupus-outcomes-using-longterm",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "The Future Directions of Lupus Research",
          url: "https://www.niams.nih.gov/about/future-directions-lupus-research",
          publisher: "NIH / NIAMS",
        },
      ],
      tags: ["experimental", "precision-medicine", "biomarkers", "interferon", "subtypes"],
      evidence: "emerging",
    },
    {
      id: "stem-cell-transplant-research",
      title: "Stem-cell (bone-marrow) transplantation research",
      summary:
        "Resetting the immune system with hematopoietic stem-cell transplantation has been studied for the most severe, refractory lupus, but it carries serious risks and is reserved for rare, carefully selected cases.",
      detail:
        "Distinct from the unproven offerings of commercial 'stem cell clinics,' legitimate research has explored hematopoietic stem-cell transplantation (HSCT) — using high-intensity treatment to wipe out and then rebuild the immune system from blood-forming stem cells — for very severe, treatment-resistant lupus. The concept is to 'reset' the misbehaving immune system, and some studies have reported durable remissions. However, HSCT is intensive and carries serious risks, including life-threatening complications, so in lupus it has been confined to research and to rare, carefully selected patients with severe disease that has failed other treatments, at specialized centers. It is not a routine or widely used lupus therapy. Its scientific interest lies partly in showing that profoundly resetting immune cells can change the disease — a principle that newer, less drastic cell therapies like CAR-T aim to achieve more safely. Anyone considering such approaches should do so only within established research programs, not through clinics marketing unproven products.",
      sources: [
        {
          label: "Action Plan for Lupus Research at the NIAMS",
          url: "https://www.niams.nih.gov/about/working-groups/lupus-federal/action-plan",
          publisher: "NIH / NIAMS",
        },
        {
          label: "CAR-T cells for treating systemic lupus erythematosus: a promising emerging therapy",
          url: "https://www.sciencedirect.com/science/article/pii/S1297319X24000137",
          publisher: "Joint Bone Spine (Elsevier)",
          year: 2024,
        },
      ],
      tags: ["experimental", "stem-cell-transplant", "hsct", "refractory"],
      evidence: "investigational",
      caution:
        "Stem-cell transplantation for lupus is high-risk and research-only for rare severe cases — it is not a routine treatment.",
    },
    {
      id: "unproven-stem-cell-clinics",
      title: "Caution: unproven 'stem cell' clinics",
      summary:
        "Some clinics market unapproved 'stem cell' or cell therapies for lupus outside legitimate trials; these can be ineffective, costly, and dangerous, and regulators have warned against them.",
      detail:
        "As cell therapies generate headlines, some clinics market unproven 'stem cell' or other cell-based treatments directly to people with lupus and other chronic diseases, often at high cost and outside the protections of a legitimate clinical trial. These offerings have not been shown to be safe or effective for lupus, may bypass required testing and oversight, and can cause real harm — including serious infections, other complications, and financial loss — while delaying proven treatment. Warning signs include promises of a cure, large out-of-pocket fees, treatments offered for many unrelated conditions, and claims that no trial or oversight is needed. Legitimate experimental therapies are studied through regulated clinical trials, usually at no cost for the investigational treatment, with informed consent and monitoring. The safe path to accessing genuine cutting-edge therapy is through the rheumatology team and registered clinical trials, not through clinics selling unapproved products. Skepticism toward 'miracle' marketing protects both health and savings.",
      sources: [
        {
          label: "Consumer Alert on Regenerative Medicine Products (stem cells)",
          url: "https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes",
          publisher: "U.S. Food and Drug Administration",
        },
        {
          label: "Ethical Issues: Unproven Stem Cell Products",
          url: "https://patienteducation.asgct.org/understanding-cell-gene-therapy/ethical-issues-unproven-stem-cell-products",
          publisher: "American Society of Gene & Cell Therapy",
        },
      ],
      tags: ["experimental", "stem-cell-clinics", "safety", "caution"],
      evidence: "no-convincing-evidence",
      caution:
        "Unproven 'stem cell' treatments sold for lupus outside registered trials can be ineffective and dangerous — access experimental therapy only through legitimate clinical trials and your care team.",
    },
  ],
});
