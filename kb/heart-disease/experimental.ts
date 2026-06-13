import { defineSection } from "../types.js";

/**
 * Experimental & emerging — advancing cardiovascular therapies: potent
 * LDL-lowering (PCSK9/inclisiran), transcatheter valve advances, device and
 * regenerative research, and AI/wearables — with honest evidence labels and a
 * caution about unproven cell-therapy clinics.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Therapies",
  description:
    "Frontier cardiovascular directions: powerful new lipid-lowering agents, transcatheter valve and device advances, regenerative research, and wearables/AI for detection — with honest evidence labels and an unproven-clinic caution.",
  entries: [
    {
      id: "novel-lipid-lowering",
      title: "Newer lipid-lowering therapies (PCSK9 inhibitors, inclisiran)",
      summary:
        "PCSK9-inhibitor injections and the twice-yearly RNA therapy inclisiran lower LDL cholesterol far beyond statins and are now used for high-risk people; other agents are in development.",
      detail:
        "A wave of newer cholesterol therapies has moved from trials into practice. PCSK9 inhibitors (evolocumab, alirocumab) are injectable antibodies that lower LDL dramatically and reduce cardiovascular events, used for people at high risk who need more than statins. Inclisiran is a small-interfering-RNA therapy given roughly twice yearly that also lowers LDL substantially. Bempedoic acid offers another non-statin option, and further targets (such as therapies aimed at lipoprotein(a), an inherited risk factor with no approved specific treatment yet) are in late-stage trials. These reflect a shift toward more powerful, longer-acting LDL lowering for high-risk patients. They supplement rather than replace statins and lifestyle, and access and cost vary; eligibility is decided with a specialist.",
      sources: [
        { label: "What Is Coronary Heart Disease? (treatment landscape)", url: "https://www.nhlbi.nih.gov/health/coronary-heart-disease", publisher: "NIH / NHLBI" },
        { label: "Statins and cholesterol treatment context (NHS)", url: "https://www.nhs.uk/conditions/statins/", publisher: "NHS (UK)" },
      ],
      tags: ["pcsk9", "inclisiran", "cholesterol", "emerging"],
      evidence: "established",
    },
    {
      id: "transcatheter-and-device-advances",
      title: "Transcatheter valve and device advances",
      summary:
        "Less-invasive catheter techniques (e.g. TAVR, transcatheter mitral repair) and newer devices and pumps are expanding options for valve disease and advanced heart failure.",
      detail:
        "Structural heart disease is being transformed by catheter-based procedures that avoid open-heart surgery. Transcatheter aortic valve replacement (TAVR/TAVI) is now standard for many people with severe aortic stenosis, including some at lower surgical risk, and transcatheter approaches to the mitral and tricuspid valves are advancing. For advanced heart failure, left ventricular assist devices (mechanical pumps) and refinements in transplantation extend and improve life, and newer implantable monitors help detect decompensation early. Leadless pacemakers and improved defibrillators continue the trend toward smaller, less-invasive devices. These advances widen who can be treated and how gently, though each has specific risks and candidacy criteria decided by the heart team.",
      sources: [
        { label: "What Are Heart Valve Diseases? (treatment, including transcatheter)", url: "https://www.nhlbi.nih.gov/health/heart-valve-diseases", publisher: "NIH / NHLBI" },
        { label: "What Is Heart Failure? (advanced therapies)", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
      ],
      tags: ["tavr", "devices", "lvad", "emerging"],
      evidence: "established",
    },
    {
      id: "regenerative-and-ai",
      title: "Regenerative research, AI, and wearables",
      summary:
        "Research into heart-muscle regeneration and gene therapy is early-stage, while AI and consumer wearables are already improving detection of arrhythmias like AFib.",
      detail:
        "Two frontiers are worth distinguishing by maturity. Regenerative approaches — stem-cell therapies and gene therapies aiming to repair or protect heart muscle — remain largely experimental; despite years of study, cell therapies have not yet produced a proven, broadly available treatment for heart failure, and they belong in regulated trials rather than commercial clinics. In contrast, artificial intelligence and wearable technology are already practical: smartwatches and patch monitors detect atrial fibrillation and other rhythm problems, and AI tools assist in reading ECGs and images, improving early detection. The honest summary is that regeneration is promising but unproven, while digital detection is here and growing — and any 'stem cell cure' for heart disease sold outside a trial should be treated with strong skepticism.",
      sources: [
        { label: "Arrhythmias — detection and monitoring", url: "https://www.nhlbi.nih.gov/health/arrhythmias", publisher: "NIH / NHLBI" },
        { label: "What Is Heart Failure? (research directions)", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
      ],
      tags: ["regenerative", "gene-therapy", "ai", "wearables", "investigational"],
      evidence: "investigational",
      caution:
        "Stem-cell or gene therapies for heart disease are investigational — available only through regulated trials, not commercial 'cure' clinics.",
    },
    {
      id: "glp1-cardiometabolic",
      title: "GLP-1 receptor agonists for cardiovascular benefit",
      summary:
        "Originally diabetes and weight medicines, GLP-1 receptor agonists have shown reductions in cardiovascular events and are increasingly part of the heart-protection toolkit for selected people, blurring the line between metabolic and heart care.",
      detail:
        "GLP-1 receptor agonists (such as semaglutide and others) began as treatments for type 2 diabetes and obesity, but cardiovascular outcome trials have shown they can reduce heart attacks, strokes, and cardiovascular deaths in people with diabetes and established cardiovascular disease, and emerging evidence supports heart benefits in people with obesity even without diabetes. This has moved them from purely 'metabolic' drugs toward a place in cardiovascular risk reduction, much as SGLT2 inhibitors crossed over into heart-failure and kidney care. They work partly through weight loss and improved metabolic factors, and possibly through additional vascular effects under study. They are not a substitute for the established foundations (blood pressure and cholesterol control, not smoking), and eligibility, cost, and side effects (mainly gastrointestinal) are individual considerations decided with a clinician. This represents a broader shift toward treating heart, weight, kidney, and glucose as one connected system.",
      sources: [
        { label: "10. Cardiovascular Disease and Risk Management (Standards of Care 2025)", url: "https://diabetesjournals.org/care/article/48/Supplement_1/S207/157549/10-Cardiovascular-Disease-and-Risk-Management", publisher: "American Diabetes Association — Diabetes Care", year: 2025 },
        { label: "Heart disease — prevention and treatment context", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
      ],
      tags: ["glp-1", "cardiometabolic", "weight", "emerging", "multi-condition"],
      evidence: "emerging",
    },
    {
      id: "lipoprotein-a-and-inflammation-targets",
      title: "New targets: lipoprotein(a) and inflammation",
      summary:
        "Researchers are testing therapies aimed at lipoprotein(a) — an inherited risk factor with no specific approved treatment yet — and at the inflammation that drives atherosclerosis, both still proving themselves in trials.",
      detail:
        "Two research frontiers go beyond lowering LDL cholesterol. Lipoprotein(a), or Lp(a), is a particle whose level is largely inherited and which independently raises cardiovascular risk; until now there has been no approved therapy that specifically lowers it, but several agents (including RNA-based drugs) are in late-stage trials to find out whether reducing Lp(a) reduces events — an important unanswered question. Separately, the recognition that inflammation helps drive atherosclerosis has prompted trials of anti-inflammatory approaches: some have shown promise (for example low-dose colchicine has been studied for reducing cardiovascular events), while others have clarified which inflammatory pathways matter. These directions are genuinely promising but still being validated, and they are intended to add to — not replace — the proven basics of lipid, blood-pressure, and lifestyle management. People interested in them are best served by asking a cardiologist what is established versus still investigational.",
      sources: [
        { label: "What Is Coronary Heart Disease? (risk factors and research)", url: "https://www.nhlbi.nih.gov/health/coronary-heart-disease", publisher: "NIH / NHLBI" },
        { label: "About Cholesterol (lipoprotein(a) and risk)", url: "https://www.cdc.gov/cholesterol/about/index.html", publisher: "CDC" },
      ],
      tags: ["lipoprotein-a", "inflammation", "colchicine", "investigational"],
      evidence: "investigational",
      caution:
        "Lp(a)-targeted and anti-inflammatory cardiovascular therapies are still being validated in trials — discuss what is proven versus investigational with a cardiologist.",
    },
  ],
});
