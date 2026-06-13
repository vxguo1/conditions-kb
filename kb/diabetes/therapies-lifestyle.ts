import { defineSection } from "../types.js";

/**
 * THERAPY — lifestyle and behavioral foundations of diabetes care: medical
 * nutrition therapy, carbohydrate counting, physical activity, weight
 * management, the strong evidence for type 2 remission, and diabetes
 * self-management education.
 */
export const therapiesLifestyle = defineSection({
  id: "therapies-lifestyle",
  title: "Therapy & Lifestyle",
  description:
    "The lifestyle foundations of diabetes management: nutrition, carbohydrate counting, exercise, weight management, the evidence for putting type 2 diabetes into remission, and structured self-management education.",
  entries: [
    {
      id: "medical-nutrition-therapy",
      title: "Medical nutrition therapy",
      summary:
        "There is no single 'diabetes diet'; evidence supports several eating patterns, individualized with a dietitian, that emphasize whole foods and manage carbohydrate quality and quantity.",
      detail:
        "Nutrition is central to managing every type of diabetes, but research shows no one diet fits everyone. Several eating patterns can work — Mediterranean-style, lower-carbohydrate, plant-based, and others — when they are individualized to a person's preferences, culture, goals, and other health conditions. Shared principles include favoring non-starchy vegetables, whole grains, legumes, fruit, nuts, and lean proteins; limiting refined carbohydrate, sugary drinks, and ultra-processed foods; and paying attention to both the amount and type of carbohydrate, since carbohydrate has the largest direct effect on blood glucose. Working with a registered dietitian for medical nutrition therapy improves outcomes and is recommended as part of standard care. For people on mealtime insulin, matching insulin to carbohydrate intake (carb counting) is a key skill.",
      sources: [
        {
          label: "Diabetes Diet, Eating, & Physical Activity",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/diet-eating-physical-activity",
          publisher: "NIH / NIDDK",
        },
        {
          label: "5. Facilitating Positive Health Behaviors and Well-being (nutrition)",
          url: "https://diabetesjournals.org/care/issue/48/Supplement_1",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
      ],
      tags: ["nutrition", "diet", "lifestyle"],
      evidence: "established",
    },
    {
      id: "carbohydrate-counting",
      title: "Carbohydrate counting",
      summary:
        "Carb counting estimates the carbohydrate in meals so mealtime insulin can be matched to food — a core skill for insulin users, especially in type 1.",
      detail:
        "Because carbohydrate raises blood glucose more than protein or fat, estimating the carbohydrate content of meals helps people on mealtime insulin dose accurately. In its fuller form, carb counting pairs a meal's grams of carbohydrate with an individualized insulin-to-carbohydrate ratio to calculate the bolus, often combined with a correction dose based on current glucose. It allows flexible eating rather than fixed meals. Even without insulin, being aware of carbohydrate portions helps manage post-meal glucose. Carb counting is usually taught by a diabetes educator or dietitian and refined using glucose data over time. Like all dosing skills, the ratios and correction factors are set with the care team, and CGM trends help fine-tune how well meals are being covered.",
      sources: [
        {
          label: "Carbohydrate Counting & Diabetes",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/healthy-living-with-diabetes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["carb-counting", "nutrition", "insulin"],
      caution:
        "Insulin-to-carb ratios and correction doses are individualized and set with the care team — this is educational background, not a dosing instruction.",
    },
    {
      id: "physical-activity",
      title: "Physical activity and exercise",
      summary:
        "Regular activity improves insulin sensitivity and glucose control, supports weight and heart health; insulin users need to plan for exercise-related lows.",
      detail:
        "Physical activity is a cornerstone of diabetes care. Exercise makes muscles take up glucose and improves insulin sensitivity for hours afterward, lowering blood glucose and supporting weight, blood pressure, cholesterol, mood, and cardiovascular health. General guidance for many adults is about 150 minutes a week of moderate aerobic activity spread across the week, plus muscle-strengthening on two or more days, and reducing prolonged sitting — adjusted to ability and other health conditions. For people on insulin or sulfonylureas, activity can cause hypoglycemia during or even many hours later, so planning matters: checking glucose, adjusting food or (with the care team) medication, and carrying fast-acting carbohydrate. In some situations — very high glucose with ketones, or certain eye or foot complications — specific precautions apply, which is why an individualized plan is best.",
      sources: [
        {
          label: "Diabetes Diet, Eating, & Physical Activity",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/diet-eating-physical-activity",
          publisher: "NIH / NIDDK",
        },
        {
          label: "Manage Blood Sugar (physical activity)",
          url: "https://www.cdc.gov/diabetes/treatment/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["exercise", "physical-activity", "lifestyle"],
      evidence: "established",
    },
    {
      id: "weight-management",
      title: "Weight management in type 2 diabetes",
      summary:
        "For people with type 2 and excess weight, losing weight improves glucose control and cardiovascular risk; larger sustained losses can be transformative.",
      detail:
        "Because excess body fat — especially in the liver and abdomen — drives the insulin resistance behind type 2 diabetes, weight management is one of the most powerful levers in its care. Even modest weight loss (around 5%) improves blood glucose, blood pressure, and cholesterol, and larger sustained losses bring proportionally greater benefit, including the possibility of remission. Approaches include structured lifestyle programs (nutrition plus activity), and increasingly the GLP-1 and dual GIP/GLP-1 medications that produce substantial weight loss. Metabolic (bariatric) surgery can lead to major, durable weight loss and high rates of diabetes remission in eligible people with obesity. Weight management is framed not as willpower but as treatment of the underlying biology, individualized and supported by the care team.",
      sources: [
        {
          label: "8. Obesity and Weight Management (Standards of Care 2025)",
          url: "https://diabetesjournals.org/care/issue/48/Supplement_1",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Type 2 diabetes — managing weight (NHS)",
          url: "https://www.nhs.uk/conditions/type-2-diabetes/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["weight", "type-2", "lifestyle"],
      evidence: "established",
    },
    {
      id: "type-2-remission",
      title: "Type 2 diabetes remission",
      summary:
        "Strong evidence shows substantial weight loss can put type 2 diabetes into remission — normal blood glucose without glucose-lowering medication — for many people, especially earlier in the disease.",
      detail:
        "Remission of type 2 diabetes means A1c stays below the diabetes threshold (generally under 6.5%) for at least three months without glucose-lowering medication. It is now well supported by evidence. The landmark DiRECT trial used a structured low-calorie diet to achieve weight loss in primary care: nearly half of participants were in remission at one year, with remission strongly tied to the amount of weight lost (around nine in ten of those losing 15 kg or more), and a meaningful share sustained it at two and five years. Remission is most achievable earlier in the disease and with greater, sustained weight loss, achieved through intensive diet programs, sometimes medication, or metabolic surgery. It is not a permanent cure — diabetes can return, especially if weight is regained — so ongoing monitoring continues. Remission is realistic for many but not everyone, and is pursued with the care team.",
      sources: [
        {
          label:
            "Primary care-led weight management for remission of type 2 diabetes (DiRECT)",
          url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)33102-1/fulltext",
          publisher: "The Lancet",
          year: 2018,
        },
        {
          label: "What is type 2 diabetes remission?",
          url: "https://www.diabetes.org.uk/about-diabetes/type-2-diabetes/remission/what-is-type-2-diabetes-remission",
          publisher: "Diabetes UK",
        },
      ],
      tags: ["remission", "type-2", "weight", "diet"],
      evidence: "supported",
    },
    {
      id: "diabetes-self-management-education",
      title: "Diabetes self-management education and support (DSMES)",
      summary:
        "Structured education programs teach the skills of daily diabetes management and are linked to better glucose control, fewer complications, and improved wellbeing.",
      detail:
        "Diabetes is largely self-managed day to day, so learning the skills is itself a treatment. Diabetes self-management education and support (DSMES) — delivered by diabetes educators, nurses, dietitians, and pharmacists — covers monitoring, medication and insulin use, nutrition, activity, problem-solving for highs and lows, sick-day rules, foot and eye care, and coping. Evidence links structured education to better glucose control, lower risk of complications, and improved quality of life and confidence. Key moments to seek (or revisit) education include at diagnosis, when not meeting goals, when complications or life changes arise, and when transitioning care. Programs are tailored to the diabetes type and the person's circumstances, and ongoing support — not just a one-time class — produces the best results.",
      sources: [
        {
          label: "5. Facilitating Positive Health Behaviors and Well-being (DSMES)",
          url: "https://diabetesjournals.org/care/issue/48/Supplement_1",
          publisher: "American Diabetes Association — Diabetes Care",
          year: 2025,
        },
        {
          label: "Managing Diabetes (education and self-care)",
          url: "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes",
          publisher: "NIH / NIDDK",
        },
      ],
      tags: ["education", "dsmes", "self-management"],
      evidence: "established",
    },
  ],
});
