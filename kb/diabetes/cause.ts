import { defineSection } from "../types.js";

/**
 * CAUSE — pathophysiology and risk. How insulin normally works, and the two
 * fundamentally different engines of diabetes: autoimmune beta-cell loss (type
 * 1) versus insulin resistance with relative insulin deficiency (type 2), plus
 * genetic and environmental risk.
 */
export const cause = defineSection({
  id: "cause",
  title: "Causes & Pathophysiology",
  description:
    "Why blood glucose rises: normal insulin physiology, autoimmune beta-cell destruction in type 1, insulin resistance in type 2, and the genetic and environmental risk factors behind each.",
  entries: [
    {
      id: "insulin-glucose-physiology",
      title: "How insulin and glucose normally work",
      summary:
        "Insulin is the key that lets glucose into cells; it also tells the liver when to store versus release glucose, keeping blood sugar in a narrow range.",
      detail:
        "Blood glucose is normally held within a tight range by insulin and its counter-hormone glucagon. When you eat, glucose rises and the pancreatic beta cells release insulin, which acts like a key: it lets glucose move from the blood into muscle and fat cells for energy and signals the liver to store glucose as glycogen and stop making new glucose. Between meals, insulin falls and glucagon rises, prompting the liver to release stored glucose so the brain and body keep a steady supply. Diabetes is, at root, a breakdown of this regulation — too little insulin, poor response to insulin, or both — and understanding the normal loop makes the different diabetes types and their treatments easier to follow.",
      sources: [
        {
          label: "What Is Diabetes? — insulin and glucose",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["physiology", "insulin", "glucose"],
    },
    {
      id: "t1d-autoimmune-beta-cell-loss",
      title: "Type 1: autoimmune beta-cell destruction",
      summary:
        "In type 1, the immune system attacks the insulin-producing beta cells, leading to near-total insulin deficiency over months to years.",
      detail:
        "Type 1 diabetes is driven by an autoimmune process in which T cells of the immune system target and progressively destroy the insulin-producing beta cells in the pancreatic islets. This is thought to begin when a genetic susceptibility (strongly linked to certain HLA immune genes) combines with one or more environmental triggers that are not fully understood. The destruction unfolds over months to years; islet autoantibodies can often be detected in the blood well before symptoms appear, defining a presymptomatic phase. By the time symptoms emerge, most beta-cell capacity is already lost, so the body can no longer make enough insulin. The result is absolute insulin deficiency, which is why insulin replacement is essential and why type 1 is not caused by diet or weight.",
      sources: [
        {
          label: "Type 1 diabetes — causes",
          url: "https://www.mayoclinic.org/diseases-conditions/type-1-diabetes/symptoms-causes/syc-20353011",
          publisher: "Mayo Clinic",
        },
        {
          label: "Symptoms & Causes of Diabetes",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/symptoms-causes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["type-1", "autoimmune", "pathophysiology"],
    },
    {
      id: "t2d-insulin-resistance",
      title: "Type 2: insulin resistance and beta-cell decline",
      summary:
        "Type 2 begins with cells responding poorly to insulin; the pancreas compensates by making more, until it can no longer keep up and glucose rises.",
      detail:
        "Type 2 diabetes develops from two problems working together. First is insulin resistance: muscle, fat, and liver cells respond less effectively to insulin, so more is needed to move glucose out of the blood. For a while the beta cells compensate by pumping out extra insulin, and glucose stays normal. Over time, however, the beta cells become unable to sustain that overproduction — a relative insulin deficiency — and blood glucose climbs into the diabetes range. Excess body fat, particularly visceral (abdominal) fat and fat in the liver, is closely tied to insulin resistance, which helps explain why weight loss can dramatically improve type 2 and sometimes induce remission. Because the beta cells still make some insulin, type 2 usually does not cause ketoacidosis in everyday circumstances, though it can during severe illness.",
      sources: [
        {
          label: "Type 2 diabetes — causes",
          url: "https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193",
          publisher: "Mayo Clinic",
        },
        {
          label: "Symptoms & Causes of Diabetes",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/symptoms-causes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["type-2", "insulin-resistance", "pathophysiology"],
    },
    {
      id: "t1d-genetics-triggers",
      title: "Type 1 risk: genes and triggers",
      summary:
        "Type 1 risk is partly genetic (especially HLA genes) but most people who develop it have no family history; environmental triggers are still being studied.",
      detail:
        "Type 1 diabetes arises from a combination of genetic susceptibility and environmental factors. The strongest genetic contribution comes from HLA genes that shape immune responses, with other genes adding smaller effects. Having a close relative with type 1 modestly increases risk, but most people who develop it have no affected family member, and inheriting susceptibility genes is not enough on its own. Researchers are investigating environmental triggers — certain viral infections have been studied, for example — but no single cause has been confirmed, and importantly, type 1 is not caused by eating sugar, diet, or anything a person or parent did. Screening for islet autoantibodies in relatives can identify people in the early, presymptomatic stages of the disease.",
      sources: [
        {
          label: "Type 1 diabetes — risk factors",
          url: "https://www.mayoclinic.org/diseases-conditions/type-1-diabetes/symptoms-causes/syc-20353011",
          publisher: "Mayo Clinic",
        },
        {
          label: "Understanding Type 1 Diabetes — risk",
          url: "https://diabetes.org/about-diabetes/type-1",
          publisher: "American Diabetes Association",
        },
      ],
      tags: ["type-1", "genetics", "risk-factors"],
      caution:
        "Risk factors describe populations, not individuals — they do not explain why one specific person developed type 1.",
    },
    {
      id: "t2d-risk-factors",
      title: "Type 2 risk factors",
      summary:
        "Type 2 risk reflects a mix of genetics, age, family history, excess weight, inactivity, and ethnicity — some modifiable, some not.",
      detail:
        "Type 2 diabetes results from interacting risk factors. Non-modifiable factors include older age, a family history of type 2, and ethnicity (people of South Asian, African, African-Caribbean, Hispanic/Latino, Native American, and several other backgrounds are at higher risk). Modifiable factors include excess body weight — especially abdominal fat — physical inactivity, and elements of diet. Other associations include a history of gestational diabetes, polycystic ovary syndrome, high blood pressure, and abnormal cholesterol. The strong link to modifiable factors is the basis of prevention: in high-risk people, structured lifestyle change with modest weight loss and increased activity substantially lowers the chance of progressing from prediabetes to type 2 diabetes. Risk factors describe probability across populations, not certainty for any individual.",
      sources: [
        {
          label: "Type 2 diabetes — risk factors",
          url: "https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193",
          publisher: "Mayo Clinic",
        },
        {
          label: "Type 2 diabetes — causes and risk (NHS)",
          url: "https://www.nhs.uk/conditions/type-2-diabetes/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["type-2", "risk-factors", "prevention"],
    },
    {
      id: "gestational-pathophysiology",
      title: "Why gestational diabetes happens",
      summary:
        "Hormones from the placenta increase insulin resistance in pregnancy; when the pancreas can't keep up, gestational diabetes develops.",
      detail:
        "During pregnancy, the placenta produces hormones that help the baby grow but also make the pregnant person's tissues more resistant to insulin — a normal adaptation that tends to peak in the second and third trimesters. To maintain normal glucose, the pancreas must produce substantially more insulin. Gestational diabetes develops when beta-cell output can't rise enough to overcome this added resistance, so glucose climbs. Risk is higher with excess weight before pregnancy, older age, a family history of type 2 diabetes, prior gestational diabetes, and certain ethnic backgrounds. Because the underlying tendency toward insulin resistance often persists, people who have had gestational diabetes carry a markedly higher long-term risk of type 2 diabetes and benefit from ongoing screening.",
      sources: [
        {
          label: "Gestational Diabetes — causes",
          url: "https://diabetes.org/about-diabetes/gestational-diabetes",
          publisher: "American Diabetes Association",
        },
        {
          label: "Symptoms & Causes of Diabetes (gestational)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/symptoms-causes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["gestational", "pregnancy", "pathophysiology"],
    },
  ],
});
