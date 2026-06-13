import { defineSection } from "../types.js";

/**
 * Experimental & emerging — frontier directions in kidney disease, reported with
 * honest evidence labels: pig-kidney xenotransplantation (early human cases),
 * the implantable/wearable bioartificial kidney, HIF-PH inhibitors for anemia
 * (recently approved, narrow use), regenerative/cell approaches, and precision-
 * medicine research — plus a clear caution about unproven "stem cell" clinics.
 */
export const experimental = defineSection({
  id: "experimental",
  title: "Experimental & Emerging Therapies",
  description:
    "Frontier directions in kidney disease — pig-kidney xenotransplantation, the bioartificial/wearable kidney, HIF-PH inhibitors for anemia, regenerative approaches, and precision-medicine research — reported with honest evidence levels and a caution about unproven clinics.",
  entries: [
    {
      id: "xenotransplantation-pig-kidney",
      title: "Pig-kidney xenotransplantation",
      summary:
        "Gene-edited pig kidneys are being transplanted into humans in early experimental cases and first clinical trials, aiming to ease the severe donor-organ shortage — but this is very early and not standard care.",
      detail:
        "One of the most closely watched frontiers is xenotransplantation: transplanting kidneys from genetically modified pigs into people, to address the chronic shortage of human donor organs. Using pigs with gene edits intended to reduce immune rejection, surgical teams in the U.S. performed the first transplants of gene-edited pig kidneys into living recipients in 2024, and the FDA has since cleared the first formal clinical trials to study the approach more rigorously. Early cases have shown both promise and the field's immaturity — some recipients survived for weeks to months, and outcomes have been mixed, with rejection and complications remaining major challenges. This is genuinely groundbreaking but firmly experimental: it is not an available or proven treatment, long-term safety and durability are unknown, and the risk of transmitting animal viruses is carefully studied. Xenotransplantation could one day expand options for kidney failure, but for now it exists only within tightly regulated research.",
      sources: [
        {
          label: "FDA Greenlights First Clinical Trials for Genetically Modified Pig Kidney Transplants in Humans",
          url: "https://www.kidneyfund.org/article/fda-greenlights-first-clinical-trials-genetically-modified-pig-kidney-transplants-humans",
          publisher: "American Kidney Fund",
        },
        {
          label: "First Gene-Edited Pig Kidney Transplant Clinical Trial Begins at NYU Langone Health",
          url: "https://nyulangone.org/news/first-gene-edited-pig-kidney-transplant-clinical-trial-begins-nyu-langone-health",
          publisher: "NYU Langone Health",
        },
      ],
      tags: ["experimental", "xenotransplantation", "transplant", "research"],
      evidence: "investigational",
      caution:
        "Xenotransplantation is experimental and available only in regulated research — it is not an approved or proven treatment.",
    },
    {
      id: "bioartificial-wearable-kidney",
      title: "The bioartificial and wearable artificial kidney",
      summary:
        "Researchers are developing an implantable bioartificial kidney and wearable dialysis devices that could one day filter blood continuously without a machine or immunosuppression — still preclinical or early-stage.",
      detail:
        "Another major research direction aims to replace or improve on conventional dialysis with new devices. The Kidney Project, a national effort, is developing an implantable bioartificial kidney — roughly the size of a coffee cup — that combines a blood filter with living kidney cells to perform some functions of a real kidney continuously, with the hope of freeing people from dialysis schedules and, because of its design, potentially without the immunosuppression a transplant requires. Its components have worked together in animal-scale prototypes, and developers are building toward human trials, but it is not yet tested in people and timelines remain uncertain. In parallel, wearable and more portable dialysis devices are being explored to make treatment more continuous and less disruptive than current machines. These technologies are exciting and could transform kidney-failure care, but they are at the preclinical or early-development stage — promising directions, not available treatments. Progress depends on further engineering, testing, and funding.",
      sources: [
        {
          label: "The Kidney Project (implantable bioartificial kidney)",
          url: "https://pharm.ucsf.edu/kidney",
          publisher: "UCSF School of Pharmacy",
        },
        {
          label: "Emerging Innovations in Kidney Disease Research",
          url: "https://www.kidneyfund.org/article/emerging-innovations-kidney-disease-research-kidney-project-xenotransplantation-and-kidney-precision",
          publisher: "American Kidney Fund",
        },
      ],
      tags: ["experimental", "bioartificial-kidney", "wearable", "dialysis", "research"],
      evidence: "investigational",
      caution:
        "The bioartificial and wearable kidney are in development and not yet available or proven in people.",
    },
    {
      id: "hif-ph-inhibitors-anemia",
      title: "HIF-PH inhibitors for anemia (e.g. daprodustat)",
      summary:
        "A newer class of oral medicines for anemia of CKD stabilizes the body's oxygen-sensing pathway to boost red-cell production; in the U.S. one (daprodustat) is approved, but only for adults on dialysis.",
      detail:
        "A newer approach to the anemia of CKD uses oral drugs called HIF-prolyl hydroxylase inhibitors (HIF-PH inhibitors), which work by stabilizing hypoxia-inducible factor — the body's natural oxygen-sensing system — prompting more erythropoietin and improving iron use to raise red-blood-cell counts. Their appeal is that they are taken by mouth, unlike the injected erythropoiesis-stimulating agents long used for CKD anemia. In the U.S., daprodustat (Jesduvroq) was approved by the FDA in 2023 — the first oral agent for CKD anemia in decades — but with a notably narrow indication: only for adults who have been on dialysis for at least four months, and not for people with CKD who are not on dialysis. This cautious scope reflects ongoing attention to the class's safety, including cardiovascular considerations, and regulatory decisions have differed between countries. HIF-PH inhibitors represent a real but still-evolving addition to anemia care, and whether one is appropriate is a decision for the care team.",
      sources: [
        {
          label: "Jesduvroq (daprodustat) Approved by US FDA for Anemia of CKD in Adults on Dialysis",
          url: "https://us.gsk.com/en-us/media/press-releases/jesduvroq-daprodustat-approved-by-us-fda-for-anemia-of-chronic-kidney-disease-in-adults-on-dialysis/",
          publisher: "GSK",
          year: 2023,
        },
        {
          label: "Anemia in Chronic Kidney Disease",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/anemia",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["experimental", "anemia", "hif-ph-inhibitor", "daprodustat", "medication"],
      evidence: "emerging",
    },
    {
      id: "regenerative-and-cell-approaches",
      title: "Regenerative medicine and cell-based research",
      summary:
        "Scientists are exploring cell therapies, lab-grown kidney tissue (organoids), and ways to slow scarring, aiming to repair or regenerate kidney function — but these remain laboratory and early research.",
      detail:
        "A broad research field seeks to repair, regenerate, or replace kidney tissue rather than just slow decline. Approaches under study include cell-based therapies intended to reduce inflammation and scarring or support kidney repair, growing miniature kidney structures called organoids from stem cells to study disease and test drugs (and, far in the future, perhaps to build replacement tissue), and drugs aimed at the fibrosis (scarring) that drives CKD progression. Some early-stage cell therapies are being tested in clinical trials for specific kidney diseases. These efforts are scientifically promising and could eventually change what is possible, but the great majority remain in the laboratory or in early human studies, and none has become an established treatment that reverses chronic kidney damage. Realistic framing matters here: regenerating a damaged kidney is a hard problem, progress is incremental, and today's proven care still centers on slowing progression and replacing function with dialysis or transplant. Any participation in this research is through legitimate, regulated clinical trials.",
      sources: [
        {
          label: "Kidney Disease Research (NIDDK research area)",
          url: "https://www.niddk.nih.gov/about-niddk/research-areas/kidney-disease",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Emerging Innovations in Kidney Disease Research",
          url: "https://www.kidneyfund.org/article/emerging-innovations-kidney-disease-research-kidney-project-xenotransplantation-and-kidney-precision",
          publisher: "American Kidney Fund",
        },
      ],
      tags: ["experimental", "regenerative", "cell-therapy", "organoids", "research"],
      evidence: "preliminary",
    },
    {
      id: "precision-medicine-kpmp",
      title: "Precision medicine and the Kidney Precision Medicine Project",
      summary:
        "Large research efforts are mapping kidney disease at the molecular and cellular level to define subtypes and find new targets, aiming to move toward more individualized treatment in the future.",
      detail:
        "Much of CKD is still classified broadly (for example 'diabetic kidney disease'), but research increasingly suggests it is many different diseases at the molecular level, which may respond to different treatments. The Kidney Precision Medicine Project (KPMP), funded by the NIH/NIDDK, is a major effort to study kidney tissue from people with CKD and acute kidney injury in detail — mapping the cells and molecular changes involved — to define disease subtypes, identify new treatment targets, and ultimately enable more precise, individualized care. This kind of precision-medicine research is foundational rather than an immediate therapy: it builds the understanding from which future treatments and better-targeted use of existing ones can come. It reflects a broader shift in kidney medicine toward understanding the biology of each person's disease rather than treating CKD as one uniform condition. For now its impact is on research and the development pipeline, with benefits to patients expected to unfold over years as discoveries translate into new options.",
      sources: [
        {
          label: "Kidney Precision Medicine Project (KPMP) — FAQ",
          url: "https://www.niddk.nih.gov/research-funding/research-programs/kidney-precision-medicine-project-kpmp/faq",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Kidney Precision Medicine Project",
          url: "https://www.kpmp.org/",
          publisher: "Kidney Precision Medicine Project (NIDDK-funded)",
        },
      ],
      tags: ["experimental", "precision-medicine", "kpmp", "research"],
      evidence: "emerging",
    },
    {
      id: "unproven-stem-cell-clinics-caution",
      title: "A caution about unproven 'stem cell' clinics",
      summary:
        "Some clinics market unapproved 'stem cell' or 'regenerative' treatments for kidney disease; these are not proven, are not FDA-approved for kidney disease, and can be unsafe as well as costly.",
      detail:
        "Because regenerative medicine sounds promising, a marketplace of clinics has emerged offering unapproved 'stem cell,' 'exosome,' or 'regenerative' treatments for serious conditions, including kidney failure — and these warrant real caution. The FDA has repeatedly warned that, aside from certain blood and immune-system uses, stem cell products are not approved to treat most diseases, and it has taken enforcement action against companies marketing such products (including for kidney failure) with unsubstantiated claims. These offerings are typically expensive, not covered by insurance, unproven, and can carry genuine safety risks (such as infection or other harms), while giving false hope and potentially delaying effective care. Legitimate experimental cell therapies are studied through regulated clinical trials, usually at no cost to participants and with oversight — a very different thing from a clinic selling a 'treatment.' Anyone considering such an option should discuss it with their kidney care team and be deeply skeptical of clinics that charge for unproven therapies or promise cures.",
      sources: [
        {
          label: "FDA Warns About Stem Cell Therapies (consumer information)",
          url: "https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes",
          publisher: "U.S. Food and Drug Administration",
        },
        {
          label: "Important Patient and Consumer Information About Regenerative Medicine Therapies",
          url: "https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/important-patient-and-consumer-information-about-regenerative-medicine-therapies",
          publisher: "U.S. Food and Drug Administration",
        },
      ],
      tags: ["experimental", "stem-cell", "unproven", "safety", "caution"],
      evidence: "no-convincing-evidence",
      caution:
        "Clinics selling unapproved 'stem cell' or 'regenerative' treatments for kidney disease are not offering proven care — discuss any such option with your kidney team and be very skeptical of paid 'cures.'",
    },
  ],
});
