import { defineSection } from "../types.js";

/**
 * TREATMENT (devices) — the technology of diabetes care: blood glucose meters,
 * continuous glucose monitors (CGM), insulin pumps, and automated insulin
 * delivery (closed-loop / artificial pancreas) systems.
 */
export const devicesTechnology = defineSection({
  id: "devices-technology",
  title: "Devices & Technology",
  description:
    "The tools of modern diabetes management: fingerstick meters, continuous glucose monitors (CGM), insulin pumps, and automated insulin delivery (closed-loop) systems.",
  entries: [
    {
      id: "blood-glucose-meters",
      title: "Blood glucose meters (fingerstick testing)",
      summary:
        "A glucose meter reads a drop of blood from a fingertip, giving a snapshot of blood sugar at that moment — still a core tool and a backup to CGM.",
      detail:
        "A blood glucose meter measures glucose in a small drop of blood, usually from a fingertip prick onto a test strip. It gives an accurate single-point reading and remains fundamental: it guides mealtime and correction decisions for many people, confirms suspected highs or lows, and serves as a backup when a CGM reading doesn't match how someone feels. Typical target ranges many adults aim for are about 80–130 mg/dL before meals and under 180 mg/dL about two hours after starting a meal, though individual targets vary. How often to check depends on the treatment: people on intensive insulin may test several times a day (or rely mainly on CGM), while those on lower-risk medications test less. Technique, strip storage, and meter calibration all affect accuracy.",
      sources: [
        {
          label: "Manage Blood Sugar (checking blood sugar)",
          url: "https://www.cdc.gov/diabetes/treatment/index.html",
          publisher: "CDC",
        },
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (monitoring)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["monitoring", "glucose-meter", "self-monitoring"],
    },
    {
      id: "continuous-glucose-monitoring",
      title: "Continuous glucose monitoring (CGM)",
      summary:
        "A CGM uses a tiny under-skin sensor to read glucose every few minutes, showing trends, direction arrows, and alerts for highs and lows.",
      detail:
        "A continuous glucose monitor (CGM) measures glucose in the fluid just under the skin via a small sensor worn for days to weeks, sending readings every few minutes to a phone, receiver, or pump. Beyond single numbers, CGM shows the direction and speed of glucose change and can alert the user before a dangerous high or low — especially valuable for people on insulin and those with hypoglycemia unawareness. CGM data also produce 'time in range' (the percentage of time glucose stays within target), an increasingly used measure alongside A1c. Some systems are 'real-time' with continuous alerts; others are 'intermittently scanned' (the user scans the sensor). CGM has been shown to improve glucose control and reduce hypoglycemia, and it is the backbone of automated insulin delivery systems.",
      sources: [
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (CGM, artificial pancreas)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Automated Insulin Delivery Systems and Insulin Pumps (CGM role)",
          url: "https://www.breakthrought1d.org/daily-management/t1d-technology/aid-insulin-pumps/",
          publisher: "Breakthrough T1D (formerly JDRF)",
        },
      ],
      tags: ["cgm", "monitoring", "time-in-range"],
      evidence: "established",
    },
    {
      id: "insulin-pumps",
      title: "Insulin pumps",
      summary:
        "An insulin pump delivers rapid-acting insulin continuously through a small under-skin cannula, replacing multiple daily injections with adjustable basal rates and mealtime boluses.",
      detail:
        "An insulin pump is a small device that delivers rapid-acting insulin through a thin tube and cannula inserted under the skin (or via a tubeless 'patch' pump worn on the body). Instead of separate long- and rapid-acting injections, the pump provides a steady, programmable 'basal' trickle of insulin throughout the day plus user-requested 'bolus' doses for meals and corrections. Pumps allow fine, flexible adjustments — different basal rates at different times, temporary rates for exercise or illness — and can integrate with CGM. They require training and active engagement: site changes every few days, carbohydrate counting, and troubleshooting, since an interruption in delivery can lead to rapid glucose rise and ketosis. Pumps are used mainly in type 1 diabetes and in some insulin-treated type 2.",
      sources: [
        {
          label: "Automated Insulin Delivery Systems and Insulin Pumps",
          url: "https://www.breakthrought1d.org/daily-management/t1d-technology/aid-insulin-pumps/",
          publisher: "Breakthrough T1D (formerly JDRF)",
        },
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (insulin pumps)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["insulin-pump", "treatment", "type-1"],
    },
    {
      id: "automated-insulin-delivery",
      title: "Automated insulin delivery (closed-loop / artificial pancreas)",
      summary:
        "AID systems link a CGM, an insulin pump, and an algorithm so insulin is adjusted automatically — improving time in range and reducing lows, though they still need user input for meals.",
      detail:
        "Automated insulin delivery (AID) — also called closed-loop or 'artificial pancreas' systems — combines three parts: a continuous glucose monitor, an insulin pump, and a control algorithm that automatically adjusts insulin delivery based on real-time and predicted glucose. Most approved systems are 'hybrid' closed loops: they automate background insulin and corrections but still ask the user to announce meals and bolus for carbohydrates. Clinical studies show AID systems improve time in range and reduce hypoglycemia compared with pump-plus-CGM without automation, and they ease the relentless mental load of diabetes. Several FDA-cleared systems exist, and the field is moving toward fuller automation and simpler meal handling. AID is a major advance but not a cure — it still depends on working hardware, accurate sensors, and an engaged user.",
      sources: [
        {
          label: "Automated Insulin Delivery Systems and Insulin Pumps",
          url: "https://www.breakthrought1d.org/daily-management/t1d-technology/aid-insulin-pumps/",
          publisher: "Breakthrough T1D (formerly JDRF)",
        },
        {
          label: "Insulin, Medicines, & Other Diabetes Treatments (artificial pancreas systems)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["aid", "closed-loop", "artificial-pancreas", "type-1"],
      evidence: "established",
    },
  ],
});
