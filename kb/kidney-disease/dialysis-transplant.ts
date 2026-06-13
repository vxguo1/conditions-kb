import { defineSection } from "../types.js";

/**
 * Dialysis & transplant — kidney replacement therapy for kidney failure: how
 * hemodialysis and peritoneal dialysis work, kidney transplant (living and
 * deceased donor) and why it's a treatment not a cure, conservative
 * (non-dialysis) management, and the importance of planning access ahead of
 * time. Educational.
 */
export const dialysisTransplant = defineSection({
  id: "dialysis-transplant",
  title: "Dialysis & Transplant",
  description:
    "Kidney replacement therapy for kidney failure — how hemodialysis and peritoneal dialysis work, kidney transplant (living and deceased donor), conservative non-dialysis care, and why planning ahead matters.",
  entries: [
    {
      id: "kidney-replacement-overview",
      title: "When the kidneys fail: the treatment options",
      summary:
        "When CKD reaches kidney failure, the main options are hemodialysis, peritoneal dialysis, a kidney transplant, or — for some — conservative care focused on comfort; the choice is personal and planned in advance.",
      detail:
        "When chronic kidney disease progresses to kidney failure (end-stage kidney disease), the kidneys can no longer keep a person well on their own, and a decision about kidney replacement therapy becomes necessary. There are several paths: hemodialysis (filtering the blood through a machine), peritoneal dialysis (using the lining of the abdomen to filter), and kidney transplantation (receiving a healthy donor kidney). For some people — particularly older adults with other serious illnesses — a fourth option, conservative or supportive (non-dialysis) management focused on symptoms and quality of life, is a valid and deliberate choice. None of these is automatically 'best'; the right path depends on a person's health, lifestyle, values, and preferences, and many people are candidates for more than one. Because preparing for any of them takes time (creating dialysis access, evaluating for transplant), these conversations ideally happen well before kidney failure arrives, so that the transition is planned rather than rushed. Education and support from the kidney care team are central to making an informed choice.",
      sources: [
        {
          label: "Choosing a Treatment for Kidney Failure",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/choosing-treatment",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Choosing a Treatment for Kidney Failure",
          url: "https://www.kidney.org/kidney-topics/choosing-treatment-kidney-failure",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["dialysis", "transplant", "kidney-failure", "overview"],
    },
    {
      id: "hemodialysis",
      title: "Hemodialysis",
      summary:
        "Hemodialysis filters the blood through a machine and artificial kidney, usually about three times a week in a center or at home, and needs a vascular access prepared in advance.",
      detail:
        "Hemodialysis cleans the blood outside the body: blood is pumped through a machine and a filter (a dialyzer, or 'artificial kidney') that removes waste products and extra fluid, then returned to the body. It is most commonly done at a dialysis center about three times a week, with each session typically lasting around four hours, though home hemodialysis — sometimes more frequent or done overnight — is an option for suitable people and can offer more flexibility. Hemodialysis requires a reliable vascular access, ideally an arteriovenous fistula (a surgically joined artery and vein in the arm) created weeks to months ahead so it can mature, because a fistula generally works best and has fewer complications than a graft or a catheter. Between sessions, fluid and certain minerals build up, so people on hemodialysis follow fluid and dietary guidance and track their weight. It is an effective, life-sustaining treatment, and the schedule and approach are tailored with the dialysis team.",
      sources: [
        {
          label: "Hemodialysis",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Hemodialysis",
          url: "https://www.kidney.org/kidney-topics/hemodialysis",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["dialysis", "hemodialysis", "vascular-access", "kidney-failure"],
    },
    {
      id: "peritoneal-dialysis",
      title: "Peritoneal dialysis",
      summary:
        "Peritoneal dialysis uses the lining of the abdomen as a natural filter, with cleansing fluid exchanged through a catheter; it is usually done at home, daily, by the person themselves.",
      detail:
        "Peritoneal dialysis (PD) uses the body's own peritoneum — the membrane lining the abdomen — as a filter. A soft catheter is placed in the abdomen, and a sterile cleansing fluid (dialysate) is run in, left to dwell while waste and extra fluid pass into it across the membrane, then drained out and replaced — a cycle called an exchange. PD is usually done at home and managed by the person or a caregiver, in one of two main forms: continuous ambulatory PD, with several manual exchanges spread through the day, or automated PD, in which a machine performs exchanges overnight while the person sleeps. Its advantages include independence, a flexible schedule, and avoiding needles for blood access; its considerations include the daily routine, the need for a clean technique to avoid peritonitis (infection of the abdominal lining), and keeping supplies at home. PD and hemodialysis are broadly comparable in effectiveness for many people, so the choice often comes down to lifestyle and medical factors decided with the care team.",
      sources: [
        {
          label: "Peritoneal Dialysis",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/peritoneal-dialysis",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Peritoneal Dialysis: CAPD and APD",
          url: "https://www.kidney.org/kidney-topics/peritoneal-dialysis",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["dialysis", "peritoneal-dialysis", "home-dialysis", "kidney-failure"],
    },
    {
      id: "kidney-transplant",
      title: "Kidney transplant",
      summary:
        "A transplant places a healthy donor kidney into the body and often offers the best quality and length of life for suitable people, but it is a treatment — not a cure — and requires lifelong anti-rejection medicine.",
      detail:
        "A kidney transplant is an operation that places a healthy kidney from a donor into a person with kidney failure; the new kidney takes over the work of filtering, often allowing a fuller, more flexible life than dialysis and, for suitable candidates, better long-term survival. Donor kidneys come either from a living donor (often a relative or friend, but also non-directed donors) or from a deceased donor, and a single donated kidney is enough to do the job. Importantly, a transplant is a treatment, not a cure: the recipient still has chronic kidney disease, must take immunosuppressant (anti-rejection) medicines for as long as the kidney works to prevent the immune system from attacking it, and these medicines carry their own risks (such as higher infection and certain cancer risks). Not everyone is a candidate, evaluation is thorough, and waiting times for a deceased-donor kidney can be long, which is why a 'pre-emptive' transplant before starting dialysis — when possible, often via a living donor — is encouraged. The transplant team guides every step.",
      sources: [
        {
          label: "Kidney Transplant",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/kidney-transplant",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Kidney Transplant",
          url: "https://www.kidney.org/kidney-topics/kidney-transplant",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["transplant", "kidney-transplant", "living-donor", "immunosuppression"],
    },
    {
      id: "conservative-management",
      title: "Conservative (non-dialysis) management",
      summary:
        "For some people — often older adults with other serious illnesses — choosing not to start dialysis and instead focusing on symptoms and quality of life is a valid, deliberate option.",
      detail:
        "Dialysis is life-sustaining, but it is not the right choice for everyone, and conservative management (also called supportive or non-dialysis care, or active medical management without dialysis) is a recognized, deliberate option. It focuses on controlling symptoms — such as nausea, itching, breathlessness, and fluid buildup — with medicines and diet, slowing decline where possible, and prioritizing quality of life and comfort, often with input from palliative care. This path is considered most often for older adults or people with multiple serious illnesses or frailty, for whom dialysis might add burden (frequent treatments, hospitalizations) without necessarily adding good-quality time, and studies suggest the survival difference can be small in such groups. Choosing conservative care is a personal, value-driven decision made together with the care team and family, and it is not 'giving up' — it is a different, legitimate way of managing kidney failure centered on what matters most to the individual. People can also revisit the decision as circumstances change.",
      sources: [
        {
          label: "Choosing a Treatment for Kidney Failure (conservative management)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/choosing-treatment",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Kidney Failure (ESRD) — treatment choices including conservative care",
          url: "https://www.kidney.org/kidney-topics/kidney-failure",
          publisher: "National Kidney Foundation",
        },
      ],
      tags: ["conservative-management", "palliative", "kidney-failure", "quality-of-life"],
    },
    {
      id: "planning-access-ahead",
      title: "Why planning ahead matters",
      summary:
        "Preparing for kidney failure early — choosing a path, creating dialysis access, or pursuing a pre-emptive transplant — leads to smoother, safer transitions and better outcomes than starting in a crisis.",
      detail:
        "One of the most consequential lessons in advanced CKD is that preparation matters. A hemodialysis fistula needs to be created weeks to months before it is used so it can mature; a peritoneal dialysis catheter needs placing and healing time; and transplant evaluation and finding a living donor take time as well. People who reach kidney failure without a plan often have to start hemodialysis urgently through a temporary catheter, which carries higher risks of infection and complications than a planned start with a mature fistula or a pre-emptive transplant. For this reason, nephrology teams begin these conversations and preparations well before kidney failure — commonly when CKD is advanced but not yet at the failure stage — covering education on the options, evaluation for transplant, and creating access for the chosen modality. Planning also lets a person choose the path that best fits their life rather than defaulting into whatever is fastest in a crisis. The timing of preparation is guided by the care team based on how the kidney function is trending.",
      sources: [
        {
          label: "Kidney Failure (ESRD) — Symptoms, Stages & Treatment",
          url: "https://www.kidney.org/kidney-topics/kidney-failure",
          publisher: "National Kidney Foundation",
        },
        {
          label: "Hemodialysis Access (planning vascular access)",
          url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["dialysis", "transplant", "planning", "vascular-access", "kidney-failure"],
    },
  ],
});
