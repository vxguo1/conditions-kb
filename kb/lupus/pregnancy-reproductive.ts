import { defineSection } from "../types.js";

/**
 * PREGNANCY & REPRODUCTIVE HEALTH — a lupus-specific section, since lupus mostly
 * affects people in their reproductive years. Covers preconception planning,
 * medication safety in pregnancy, higher-risk pregnancy and monitoring, the
 * antibody risks (anti-SSA/Ro and neonatal lupus; antiphospholipid antibodies),
 * and contraception considerations. Educational; all decisions individualized
 * with the care team.
 */
export const pregnancyReproductive = defineSection({
  id: "pregnancy-reproductive",
  title: "Pregnancy & Reproductive Health",
  description:
    "Because lupus mainly affects people in their childbearing years: preconception planning, which medicines are and aren't compatible with pregnancy, why lupus pregnancies are higher-risk and closely monitored, antibody-related risks (neonatal lupus, antiphospholipid syndrome), and contraception considerations.",
  entries: [
    {
      id: "preconception-planning",
      title: "Planning ahead for pregnancy",
      summary:
        "Planning a pregnancy several months in advance with the care team — ideally when lupus is well controlled — gives the best chance of a healthy pregnancy and time to adjust medicines safely.",
      detail:
        "For people with lupus who may want to become pregnant, planning ahead is one of the most important steps. Guidance generally encourages discussing pregnancy plans with the care team well before trying to conceive — often several months ahead — for two main reasons. First, pregnancies started when lupus has been quiet and well controlled tend to go far better than those begun during active disease, so timing conception during a stable period lowers the risk of flares and complications. Second, some lupus medicines are unsafe in pregnancy and need to be switched, in advance, to alternatives that control the disease while being compatible with pregnancy — a change that takes time to make safely. Preconception planning also allows testing for specific antibodies that affect pregnancy and assembling the right team. Importantly, most people with well-managed lupus can have successful pregnancies; the key is that pregnancy is planned and supervised rather than approached without preparation.",
      sources: [
        {
          label: "Lupus and Pregnancy (planning a pregnancy)",
          url: "https://www.lupus.org/resources/planning-a-pregnancy-when-you-have-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus and Women's Reproductive Health",
          url: "https://www.lupus.org/resources/womens-health-and-reproductive-issues-with-lupus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["pregnancy", "preconception", "planning", "reproductive-health"],
      caution:
        "Pregnancy planning in lupus is individualized — discuss timing and medicines with the care team months before trying to conceive, and don't stop or change medicines on your own.",
    },
    {
      id: "medications-in-pregnancy",
      title: "Medicines and pregnancy compatibility",
      summary:
        "Some lupus medicines (like hydroxychloroquine) are generally continued in pregnancy, while others (like methotrexate, mycophenolate, and cyclophosphamide) can cause birth defects and must be stopped and replaced beforehand.",
      detail:
        "Medication safety is central to lupus pregnancies. Some treatments are considered compatible with pregnancy and are often continued — notably hydroxychloroquine, which is generally maintained because stopping it raises flare risk and it supports a healthier pregnancy. Other medicines, however, can cause serious harm to a developing baby and must be stopped and switched to safer alternatives before conception: methotrexate and mycophenolate are known to cause birth defects and miscarriage, and cyclophosphamide is also avoided in pregnancy. Certain other drugs, such as azathioprine and some steroids, may be used during pregnancy when needed, under specialist guidance. Because these decisions are nuanced and the timing of any switch matters, they are made individually with the rheumatology team — never by stopping or starting medicines independently. The overarching aim is to keep lupus controlled (active disease is itself dangerous in pregnancy) while using only medicines compatible with pregnancy, which is exactly why advance planning is emphasized.",
      sources: [
        {
          label: "Lupus and Pregnancy (medications)",
          url: "https://www.lupus.org/resources/planning-a-pregnancy-when-you-have-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Lupus — pregnancy and medications",
          url: "https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["pregnancy", "medications", "safety", "reproductive-health"],
      caution:
        "Methotrexate, mycophenolate, and cyclophosphamide can seriously harm a pregnancy and are stopped beforehand; never adjust lupus medicines for pregnancy without the care team.",
    },
    {
      id: "higher-risk-pregnancy-monitoring",
      title: "Why lupus pregnancies are higher-risk and closely monitored",
      summary:
        "Lupus raises the risk of flares, high blood pressure/preeclampsia, growth problems, preterm birth, and miscarriage, so pregnancies are co-managed by a rheumatologist and a high-risk obstetric team.",
      detail:
        "Pregnancy in lupus is considered higher-risk and so is monitored closely, though outcomes are good for most when care is well organized. Potential complications include lupus flares (which can occur during pregnancy or after delivery), high blood pressure and preeclampsia (a serious pregnancy condition that overlaps with and can be hard to distinguish from a lupus or kidney flare), restricted fetal growth, preterm birth, and pregnancy loss; the risks are higher with active disease, kidney involvement, or certain antibodies. Because of this, lupus pregnancies are typically co-managed by a rheumatologist alongside a maternal-fetal medicine (high-risk obstetrics) specialist, with more frequent visits, blood-pressure and urine checks, blood tests, and ultrasounds to watch both the pregnancy and disease activity. Delivery is often planned at a hospital equipped for higher-risk births. This intensive monitoring exists precisely so problems are caught and managed early, which is a large part of why most well-planned, well-supervised lupus pregnancies succeed.",
      sources: [
        {
          label: "Lupus and Pregnancy (risks and monitoring)",
          url: "https://www.lupus.org/resources/planning-a-pregnancy-when-you-have-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Pregnancy Planning and Management Intervention for Women with SLE",
          url: "https://www.lupus.org/news/pregnancy-planning-and-management-intervention-for-women-with-systemic-lupus-erythematosus",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["pregnancy", "high-risk", "preeclampsia", "monitoring", "reproductive-health"],
    },
    {
      id: "antibody-related-pregnancy-risks",
      title: "Antibody-related risks: neonatal lupus and antiphospholipid syndrome",
      summary:
        "Specific antibodies carry specific pregnancy risks — anti-SSA/Ro and anti-SSB/La can cause neonatal lupus including congenital heart block, and antiphospholipid antibodies raise clotting and miscarriage risk — so antibody testing guides care.",
      detail:
        "Two antibody patterns are particularly important in lupus pregnancy, which is why testing for them is part of planning. First, anti-SSA/Ro and anti-SSB/La antibodies can cross the placenta and cause neonatal lupus — usually a temporary rash, liver, or blood-count change in the newborn that resolves within months, but in a small number of cases a permanent slow heartbeat called congenital heart block. When these antibodies are present, the pregnancy is monitored with fetal heart assessments, and management strategies (such as continuing hydroxychloroquine) may help reduce risk. Second, antiphospholipid antibodies — and antiphospholipid syndrome — raise the risk of blood clots and recurrent miscarriage, and when present, specific treatments to reduce clotting risk during pregnancy are managed by the specialist team. Because the right monitoring and treatment depend on which antibodies a person carries, antibody testing is done before or early in pregnancy so care can be tailored. These risks are managed, not necessarily prohibitive, but they require expert co-management.",
      sources: [
        {
          label: "What is neonatal lupus?",
          url: "https://www.lupus.org/resources/about-neonatal-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Antiphospholipid Syndrome",
          url: "https://rheumatology.org/patients/antiphospholipid-syndrome",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["pregnancy", "neonatal-lupus", "antiphospholipid", "antibodies", "reproductive-health"],
      caution:
        "Antibody-related pregnancy risks are managed by a specialist team — testing and monitoring decisions should be made with rheumatology and high-risk obstetric care.",
    },
    {
      id: "contraception-considerations",
      title: "Contraception and family-planning considerations",
      summary:
        "Reliable contraception matters because timing pregnancy for stable disease is important and some lupus drugs harm a fetus; the choice of method is individualized, especially with clotting-risk antibodies.",
      detail:
        "Contraception is an important part of lupus care because it allows pregnancies to be timed for when the disease is well controlled and avoids conception while taking medicines that could harm a fetus. The choice of contraceptive method is individualized and made with the care team, because some considerations are lupus-specific. In particular, estrogen-containing methods can increase the risk of blood clots, which is a serious concern for people who have antiphospholipid antibodies or a history of clots, so these antibodies are taken into account when choosing a method; progestin-only options and intrauterine devices are often considered, depending on the situation. Disease activity and other health factors also influence the decision. The key educational point is that effective, appropriate contraception supports both safety and good pregnancy outcomes by keeping family planning intentional — and that the right method depends on a person's specific antibody profile and history, which is why it is decided together with the care team rather than assumed.",
      sources: [
        {
          label: "Lupus and Women's Reproductive Health (contraception)",
          url: "https://www.lupus.org/resources/womens-health-and-reproductive-issues-with-lupus",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Antiphospholipid Syndrome (clotting and estrogen)",
          url: "https://rheumatology.org/patients/antiphospholipid-syndrome",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["pregnancy", "contraception", "family-planning", "antiphospholipid", "reproductive-health"],
      caution:
        "Estrogen-containing contraception can raise clot risk, especially with antiphospholipid antibodies — the method should be chosen with the care team based on your individual profile.",
    },
  ],
});
