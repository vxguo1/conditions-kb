import { defineSection } from "../types.js";

/**
 * PATIENT CARE & self-management — monitoring blood pressure and (in heart
 * failure) daily weights, medication adherence, an action plan, and mental
 * health after a cardiac event.
 */
export const patientCare = defineSection({
  id: "patient-care",
  title: "Patient Care & Self-Management",
  description:
    "Day-to-day living with heart disease: home blood-pressure and weight monitoring, medication adherence, recognizing warning signs, and caring for mental health after a cardiac event.",
  entries: [
    {
      id: "home-monitoring",
      title: "Home monitoring (blood pressure and weight)",
      summary:
        "Home blood-pressure checks help manage hypertension, and daily weights help people with heart failure catch fluid build-up early — both with a plan agreed with the care team.",
      detail:
        "Self-monitoring turns heart care into a daily, manageable routine. For high blood pressure, validated home monitors give a fuller picture than occasional clinic readings, help track whether treatment is working, and engage the person in their care; technique (rest, correct cuff, averaging readings) matters, and results are reviewed with the clinician. For heart failure, weighing daily at the same time can reveal fluid retention before symptoms worsen — a rapid gain (for example, a few pounds over a couple of days) is a cue to follow the agreed action plan or contact the care team. Keeping a simple log of readings, symptoms, and medicines to bring to appointments makes adjustments safer and more informed.",
      sources: [
        { label: "Heart failure — monitoring and self-care (NHS)", url: "https://www.nhs.uk/conditions/heart-failure/", publisher: "NHS (UK)" },
        { label: "The Facts About High Blood Pressure (monitoring)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
      ],
      tags: ["monitoring", "blood-pressure", "heart-failure", "self-management"],
    },
    {
      id: "medication-adherence",
      title: "Taking medicines consistently",
      summary:
        "Heart medicines work only when taken as prescribed; consistent use of statins, blood thinners, and blood-pressure and heart-failure drugs prevents events — stopping suddenly can be dangerous.",
      detail:
        "Cardiovascular drugs largely prevent future events rather than relieve day-to-day symptoms, so it can be tempting to skip them — but consistency is what delivers the benefit. Statins, antiplatelets/anticoagulants, and blood-pressure and heart-failure medicines reduce heart attacks, strokes, and hospitalizations only when taken regularly. Some are dangerous to stop abruptly: suddenly stopping a beta-blocker, an antiplatelet after a recent stent, or an anticoagulant in AFib can trigger serious events. Strategies that help include using a pill organizer or app, linking doses to daily routines, using one pharmacy, and discussing side effects (rather than silently stopping). Any change should go through the prescriber, who can adjust or substitute rather than leave a gap.",
      sources: [
        { label: "Anticoagulant medicines — taking them safely (NHS)", url: "https://www.nhs.uk/conditions/anticoagulants/", publisher: "NHS (UK)" },
        { label: "Statins — taking them and stopping (NHS)", url: "https://www.nhs.uk/conditions/statins/", publisher: "NHS (UK)" },
      ],
      tags: ["adherence", "medication", "self-management", "safety"],
      caution:
        "Don't stop heart medicines on your own — several are hazardous to stop abruptly. Raise side effects with the prescriber instead.",
    },
    {
      id: "mental-health-after-cardiac-event",
      title: "Mental health after a cardiac event",
      summary:
        "Depression and anxiety are common after a heart attack, heart failure diagnosis, or surgery; they affect recovery and self-care and are treatable — part of good cardiac care.",
      detail:
        "A heart attack, new heart-failure diagnosis, or heart surgery is a major life event, and depression and anxiety are common afterward — and they matter medically, because they are linked to poorer recovery, lower participation in rehab, and worse outcomes. Feelings of fear about another event, low mood, loss of confidence, and anxiety are understandable and should not be dismissed. Cardiac rehabilitation includes psychological support, and effective help is available — counseling and talking therapies, support groups, and, when appropriate, medication (chosen with attention to heart interactions). Addressing mental health improves both wellbeing and physical recovery, so it belongs in the conversation with the care team rather than being suffered silently.",
      sources: [
        { label: "Heart attack — recovery and emotional effects (NHS)", url: "https://www.nhs.uk/conditions/heart-attack/", publisher: "NHS (UK)" },
        { label: "Heart failure — living with (wellbeing)", url: "https://www.nhs.uk/conditions/heart-failure/", publisher: "NHS (UK)" },
      ],
      tags: ["mental-health", "depression", "recovery", "self-management"],
    },
    {
      id: "know-your-numbers",
      title: "Knowing your numbers and keeping up with follow-up",
      summary:
        "Blood pressure, cholesterol, blood sugar, and weight are the 'numbers' that track heart risk; knowing your targets and keeping regular follow-up appointments lets treatment be adjusted before problems grow.",
      detail:
        "Much of heart care is managing a few key measures over time, so it helps to know your own numbers and what they should be: blood pressure, cholesterol (especially LDL), blood sugar or HbA1c if you have or are at risk of diabetes, and weight. These are individualized — targets differ depending on whether you already have heart disease, diabetes, or kidney disease — so they are worth discussing and writing down with the care team rather than comparing to a single 'normal.' Regular follow-up appointments and blood tests let the team see whether treatment is working and adjust medicines, and they are also the time to review all your medications and any side effects. Keeping a simple record of readings, results, and questions to bring along makes visits more useful. This steady, numbers-based follow-up is how risk is lowered gradually and safely.",
      sources: [
        { label: "The Facts About High Blood Pressure (knowing your numbers)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure", publisher: "American Heart Association" },
        { label: "About Cholesterol (targets and monitoring)", url: "https://www.cdc.gov/cholesterol/about/index.html", publisher: "CDC" },
      ],
      tags: ["monitoring", "follow-up", "targets", "self-management"],
    },
    {
      id: "living-with-heart-failure-daily",
      title: "Living with heart failure day to day",
      summary:
        "Daily life with heart failure centers on weighing yourself, watching salt and fluid, taking medicines consistently, pacing activity, and using an action plan to catch worsening early.",
      detail:
        "Heart failure is a long-term condition that is often manageable for years with consistent self-care. Daily weighing at the same time helps catch fluid build-up early, since a rapid gain of a few pounds over a couple of days can signal worsening before breathlessness does — a cue to follow the agreed action plan or call the team. Limiting salt (which makes the body hold fluid) and following any fluid advice from the care team helps control symptoms, and taking the heart-failure medicines consistently is what delivers their survival benefit. Staying as active as advised — often through cardiac rehabilitation — keeps strength and confidence up, while pacing avoids overexertion. Getting recommended vaccinations (flu, pneumonia, COVID-19) reduces infections that can trigger flare-ups. An agreed plan for what to do as symptoms change turns a frightening condition into a set of manageable daily routines.",
      sources: [
        { label: "Heart failure — living with and self-care (NHS)", url: "https://www.nhs.uk/conditions/heart-failure/", publisher: "NHS (UK)" },
        { label: "What Is Heart Failure? (self-management)", url: "https://www.nhlbi.nih.gov/health/heart-failure", publisher: "NIH / NHLBI" },
      ],
      tags: ["heart-failure", "self-management", "salt", "daily-living"],
    },
    {
      id: "return-to-activity-after-event",
      title: "Returning to work, activity, sex, and travel",
      summary:
        "After a heart attack or cardiac procedure, most people gradually return to work, driving, exercise, sex, and travel on a timeline guided by their recovery and care team — cardiac rehab helps rebuild confidence.",
      detail:
        "A common worry after a heart attack or heart surgery is what is safe to do again, and for most people the answer is a gradual, guided return to a full life. Returning to work, driving (which may have specific waiting periods depending on the event and local rules), exercise, sexual activity, and travel typically resumes over weeks, on a timeline shaped by the person's recovery, type of event or procedure, and the care team's advice. Cardiac rehabilitation is especially valuable here: it rebuilds fitness and, just as importantly, confidence, and gives a safe setting to test what the heart can do. Sexual activity is generally safe once a person can manage moderate exertion comfortably, and concerns (including medication effects) are worth raising rather than avoiding. Air travel is usually fine after stable recovery, with sensible precautions. The recurring theme is to ask the care team about specifics rather than guess, and to progress steadily.",
      sources: [
        { label: "Heart attack — recovery and getting back to normal (NHS)", url: "https://www.nhs.uk/conditions/heart-attack/", publisher: "NHS (UK)" },
        { label: "Heart disease — living with and recovery", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118", publisher: "Mayo Clinic" },
      ],
      tags: ["recovery", "return-to-work", "activity", "travel", "self-management"],
    },
  ],
});
