import { defineSection } from "../types.js";

/**
 * PATIENT CARE & SELF-MANAGEMENT — the practical work of living with lupus:
 * partnering with the care team and regular monitoring, taking medicines
 * consistently, tracking symptoms and flare plans, infection prevention and
 * vaccines, mental-health care, and building support. Educational and
 * empowering; coordinated with the care team.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Patient Care & Self-Management",
  description:
    "The day-to-day work of living well with lupus: working with the care team and keeping up monitoring, taking medicines consistently, tracking symptoms with a flare plan, preventing infection and staying current on vaccines, caring for mental health, and building support.",
  entries: [
    {
      id: "care-team-and-monitoring",
      title: "Your care team and regular monitoring",
      summary:
        "Lupus care is led by a rheumatologist with other specialists as needed, and regular check-ups with blood and urine tests catch flares and organ problems early, even when you feel well.",
      detail:
        "Lupus is usually managed by a rheumatologist — a specialist in autoimmune and joint diseases — who coordinates care and brings in other specialists as needed, such as a nephrologist for kidney involvement, a dermatologist for skin disease, or a cardiologist, depending on which organs are affected. A central part of care is regular monitoring: periodic blood and urine tests track disease activity (for example anti-dsDNA and complement levels), screen for kidney involvement, and watch for medication side effects, while blood pressure, cholesterol, and bone health are followed because lupus and steroids affect them. These visits matter even when a person feels well, because some serious problems — notably early kidney involvement — can be silent. Keeping appointments, completing the recommended lab work, and bringing questions and an up-to-date symptom and medication list to visits all help the team catch problems early and adjust treatment before flares become severe.",
      sources: [
        {
          label: "Systemic Lupus Erythematosus (Lupus): Diagnosis, Treatment, and Steps to Take",
          url: "https://www.niams.nih.gov/health-topics/lupus/diagnosis-treatment-and-steps-to-take",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Lupus Self-Management: Guide for Newly Diagnosed Patients",
          url: "https://rheumatology.org/patient-blog/what-a-newly-diagnosed-patient-with-lupus-needs-to-know-about-self-management",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["self-management", "care-team", "monitoring", "rheumatology"],
    },
    {
      id: "medication-adherence",
      title: "Taking medicines consistently",
      summary:
        "Taking lupus medicines as prescribed — especially hydroxychloroquine every day — is one of the most effective ways to prevent flares; stopping or skipping doses raises flare and damage risk.",
      detail:
        "Consistency with medication is one of the strongest tools for keeping lupus under control, yet adherence is often difficult, and studies suggest only about half of people take hydroxychloroquine as prescribed. Because hydroxychloroquine works gradually and protects against flares, organ damage, and clots over time, skipping it or stopping it is linked to a higher risk of flares — even when a person feels fine. The same logic applies to maintenance immunosuppressants. Practical habits help: building doses into a daily routine, using pill organizers or phone reminders, refilling prescriptions before running out, and addressing barriers honestly with the team — whether cost, side effects, or simply forgetting. If side effects are a problem, the answer is to discuss them with the clinician or pharmacist rather than quietly stopping, since alternatives or adjustments are often possible. Steroids in particular should never be stopped abruptly. Open conversations about what is and isn't working keep the treatment plan realistic and effective.",
      sources: [
        {
          label: "Only Half of People with Lupus Adhere to Hydroxychloroquine Therapy",
          url: "https://www.lupus.org/news/only-half-of-people-with-lupus-adhere-to-hydroxychloroquine-plaquenil-therapy",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Reducing or Stopping Hydroxychloroquine Linked to Higher Flare Risk",
          url: "https://www.lupus.org/news/reducing-or-stopping-hydroxychloroquine-treatment-associated-with-increased-lupus-flare-risk",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["self-management", "adherence", "medication", "hydroxychloroquine"],
      caution:
        "Don't stop or change lupus medicines on your own — talk to the care team about side effects or barriers; stopping can trigger flares, and steroids must be tapered.",
    },
    {
      id: "tracking-symptoms-flare-plan",
      title: "Tracking symptoms and having a flare plan",
      summary:
        "Keeping a record of symptoms and triggers helps spot flares early, and agreeing a flare plan with the care team means you know what to watch for and whom to call.",
      detail:
        "Because lupus is unpredictable and varies day to day, learning one's own patterns is valuable. Many people keep a simple log — of symptoms, fatigue levels, rashes, joint pain, and possible triggers like sun exposure, stress, or missed sleep — which can reveal what tends to precede a flare and provides useful information at appointments. Just as important is having a written 'flare plan' worked out with the care team: which warning signs mean 'call the clinic,' which mean 'seek urgent care,' how to reach the team after hours, and what early steps may be advised. This turns a frightening, ambiguous situation into a set of clear actions and helps a person advocate for timely care. Recognizing a flare early often means it can be treated before it becomes severe or threatens an organ. Tracking and planning are forms of partnership with the care team rather than self-treatment, and they make the whole system more responsive.",
      sources: [
        {
          label: "The Expert Series: Managing and Preventing Flares",
          url: "https://www.lupus.org/resources/the-expert-series-managing-and-preventing-flares",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "When to Call the Doctor",
          url: "https://www.lupus.org/resources/when-to-call-the-doctor",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["self-management", "flare-plan", "symptom-tracking", "monitoring"],
    },
    {
      id: "infection-prevention-vaccines",
      title: "Preventing infection and staying current on vaccines",
      summary:
        "Because lupus and its treatments raise infection risk, everyday prevention and recommended (non-live) vaccines are important; live vaccines may need to be avoided on immunosuppression.",
      detail:
        "Infection is a major risk in lupus, driven both by the disease and by immune-suppressing treatments, so prevention is a core part of self-care. Everyday measures — hand hygiene, dental care, food safety, prompt attention to wounds, and avoiding close contact with people who are sick — all help. Vaccines are especially important: people with lupus are generally encouraged to stay up to date on recommended immunizations such as influenza and pneumococcal vaccines, ideally timed and coordinated with the care team. A key caution is that 'live' vaccines may need to be avoided in people on significant immunosuppression (for example higher-dose steroids, several immunosuppressants, or biologics), because a weakened immune system may not handle them safely; non-live vaccines are generally preferred and safe. The right vaccine plan depends on a person's specific medicines and disease, so vaccination decisions — including timing around treatment — are made with the care team rather than improvised.",
      sources: [
        {
          label: "Lupus and Vaccines",
          url: "https://www.lupus.org/resources/lupus-and-vaccines",
          publisher: "Lupus Foundation of America",
        },
        {
          label: "Protecting Yourself from Infections",
          url: "https://www.lupus.org/resources/protecting-yourself-from-infections",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["self-management", "infection-prevention", "vaccines", "immunosuppression"],
      caution:
        "Live vaccines may be unsafe on immunosuppressive treatment — check with the care team before any vaccination, and don't assume a vaccine is fine without asking.",
    },
    {
      id: "mental-health-care",
      title: "Caring for mental health",
      summary:
        "Depression, anxiety, and 'brain fog' are common with lupus; recognizing them as part of the illness and seeking support and treatment improves wellbeing and self-management.",
      detail:
        "The emotional and cognitive side of lupus is real and common. Depression and anxiety occur more often in people with lupus than in the general population, arising both from the stress of a chronic, unpredictable illness and, in some cases, from the disease's effects on the body and brain. Many people also describe 'lupus fog' — problems with memory, concentration, and clear thinking — which can be distressing and is increasingly recognized. Treating mental health is not a luxury: low mood and anxiety make the daily work of managing lupus harder, while support and treatment can improve both quality of life and the ability to stay on top of care. Helpful steps include talking openly with the care team (some mood symptoms can relate to disease activity or medications and should be evaluated), counseling or therapy, peer support and lupus communities, and, when appropriate, medication. Reaching out for help is a strength, and care teams can connect people with mental-health and support resources.",
      sources: [
        {
          label: "Lupus Self-Management: Take Back Control (emotional health)",
          url: "https://rheumatology.org/patient-blog/lupus-self-management-take-back-control",
          publisher: "American College of Rheumatology",
        },
        {
          label: "Cognitive symptoms in systemic lupus erythematosus (SLE)",
          url: "https://www.cuh.nhs.uk/patient-information/cognitive-symptoms-in-systemic-lupus-erythematosus-sle/",
          publisher: "NHS (Cambridge University Hospitals)",
        },
      ],
      tags: ["self-management", "mental-health", "depression", "brain-fog"],
    },
    {
      id: "support-and-self-advocacy",
      title: "Building support and self-advocacy",
      summary:
        "Education, peer support, and learning to communicate clearly with the care team help people navigate lupus, especially an 'invisible' illness others may not understand.",
      detail:
        "Living with lupus is easier with knowledge and support. Learning about the condition from reputable sources helps a person understand their tests and treatments, ask better questions, and make informed decisions together with the care team — a partnership often described as shared decision-making. Peer support matters too: connecting with others who have lupus, through support groups or online communities, reduces isolation and provides practical tips, which is valuable for a condition that is often 'invisible' to others because symptoms like fatigue and pain aren't outwardly obvious. Self-advocacy skills — keeping organized records, preparing for appointments, being honest about symptoms and barriers, and speaking up when something isn't right — help ensure care fits a person's real life. Family and friends benefit from learning about lupus so they can offer informed support. Many find that becoming an active, informed participant in their own care improves both outcomes and confidence in handling an unpredictable disease.",
      sources: [
        {
          label: "Living With Lupus: Health Information Basics for You and Your Family",
          url: "https://www.niams.nih.gov/community-outreach-initiative/understanding-joint-health/living-with-lupus",
          publisher: "NIH / NIAMS",
        },
        {
          label: "Programs and Services",
          url: "https://www.lupus.org/care-support/programs-and-services",
          publisher: "Lupus Foundation of America",
        },
      ],
      tags: ["self-management", "support", "self-advocacy", "education"],
    },
  ],
});
