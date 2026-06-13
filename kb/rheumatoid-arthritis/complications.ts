import { defineSection } from "../types.js";

/**
 * COMPLICATIONS — the long-term consequences of RA, both in the joints (damage,
 * deformity, disability) and beyond them (the systemic/extra-articular effects:
 * lungs, heart, eyes, nodules, blood, bones, nerves). Many are reduced by early,
 * effective treatment. Distinct from the comorbidities section.
 */
export const complications = defineSection({
  id: "complications",
  title: "Complications of RA",
  description:
    "The long-term consequences of RA — joint damage, deformity and disability, plus the systemic 'extra-articular' effects on the lungs, heart, eyes, skin, blood, bones, and nerves. Many are reduced by early, effective treatment.",
  entries: [
    {
      id: "joint-damage-deformity",
      title: "Joint damage, deformity, and disability",
      summary:
        "Untreated or poorly controlled inflammation erodes cartilage and bone, leading to lasting joint damage, characteristic deformities, and loss of function — the harm that early treatment aims to prevent.",
      detail:
        "The most direct complication of RA is permanent joint damage. Sustained inflammation of the joint lining erodes cartilage and bone and stretches or damages the surrounding tendons and ligaments, so that over time joints can lose their normal shape and alignment. In the hands this can produce recognizable deformities, and damaged joints may become unstable, stiff, or fixed, reducing grip, dexterity, and mobility and ultimately the ability to do everyday and work tasks. Much of this damage is irreversible once it occurs, which is precisely why modern care emphasizes controlling inflammation early, before erosions develop — the 'window of opportunity.' With today's treat-to-target approach and disease-modifying drugs, severe deformity and disability have become far less common than in earlier eras, and many people maintain good function. Where damage has already occurred, therapy, assistive devices, and sometimes surgery (such as joint replacement) can restore comfort and function.",
      sources: [
        {
          label: "Rheumatoid arthritis — complications (joint damage)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis (joint damage and deformity)",
          url: "https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
          publisher: "CDC",
        },
      ],
      tags: ["complications", "joint-damage", "deformity", "disability"],
      evidence: "established",
    },
    {
      id: "lung-complications",
      title: "Lung complications",
      summary:
        "RA can affect the lungs — scarring of lung tissue (interstitial lung disease), inflammation of the lining, and nodules — and lung disease is a leading cause of RA-related illness and death.",
      detail:
        "The lungs are among the most important organs affected by RA. The most serious lung complication is interstitial lung disease (ILD), in which inflammation leads to scarring of the lung tissue, causing progressive breathlessness, a persistent dry cough, and fatigue; RA-associated ILD is a leading contributor to illness and death in RA and is more likely in people who smoke, have more severe or seropositive disease, and (for ILD) in men. RA can also cause inflammation of the lining around the lungs (pleurisy, sometimes with fluid), rheumatoid nodules in the lungs, and airway problems. Because lung involvement can develop quietly, new or worsening breathlessness or a persistent cough should be reported, as it may prompt breathing tests and imaging. Treatment depends on the type and severity and is coordinated between rheumatology and lung specialists. Not smoking is especially important for protecting the lungs in RA. Lung complications are a key reason RA is treated as a whole-body disease, not only a joint disease.",
      sources: [
        {
          label: "Rheumatoid arthritis — complications (lungs)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Consumer Health: How rheumatoid arthritis can affect your lungs",
          url: "https://newsnetwork.mayoclinic.org/discussion/consumer-health-how-rheumatoid-arthritis-can-affect-your-lungs/",
          publisher: "Mayo Clinic News Network",
        },
      ],
      tags: ["complications", "lungs", "interstitial-lung-disease", "extra-articular"],
      evidence: "established",
      caution:
        "New or worsening breathlessness or a persistent dry cough in someone with RA should be reported promptly — it may indicate lung involvement.",
    },
    {
      id: "cardiovascular-complications",
      title: "Heart and blood-vessel complications",
      summary:
        "Chronic inflammation makes RA a cardiovascular risk factor: heart attacks, heart failure, and inflammation around the heart are more common, so heart-risk reduction is part of RA care.",
      detail:
        "RA carries a substantially increased risk of cardiovascular disease — including heart attack and heart failure — driven largely by the chronic, body-wide inflammation that also accelerates the furring-up of arteries (atherosclerosis), on top of traditional risk factors like high blood pressure and abnormal cholesterol. People with RA have a meaningfully higher risk of heart attack than people without it, and the risk of heart failure is increased as well. RA can also directly inflame the membrane around the heart (pericarditis). Because much of this excess risk comes from inflammation, controlling RA effectively is itself heart-protective, and care includes attention to traditional risk factors: managing blood pressure and cholesterol, not smoking, staying active, and maintaining a healthy weight. This elevated cardiovascular risk is so central that it is also covered as the leading comorbidity of RA in the comorbidities section. Recognizing and reducing heart risk is a core, sometimes underappreciated, part of comprehensive RA care.",
      sources: [
        {
          label: "Rheumatoid arthritis — complications (heart and blood vessels)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Discovery's Edge: The rheumatoid arthritis and heart disease connection",
          url: "https://newsnetwork.mayoclinic.org/discussion/discoverys-edge-the-rheumatoid-arthritis-and-heart-disease-connection/",
          publisher: "Mayo Clinic News Network",
        },
      ],
      tags: ["complications", "cardiovascular", "heart", "inflammation", "extra-articular"],
      evidence: "established",
    },
    {
      id: "eye-and-sjogren",
      title: "Eye complications and dryness",
      summary:
        "RA can cause dry eyes and mouth (often from associated Sjögren's syndrome) and, less often, painful inflammation of the eye (scleritis or uveitis) that can threaten vision.",
      detail:
        "RA affects the eyes in a few ways. Most common is dryness of the eyes and mouth, frequently due to secondary Sjögren's syndrome — an autoimmune condition that often accompanies RA and reduces tear and saliva production, causing gritty, dry eyes and a dry mouth (with knock-on risks like dental decay). While usually more bothersome than dangerous, dryness benefits from treatment such as lubricating drops and dental care. Less commonly, RA causes inflammation within the eye itself: scleritis (inflammation of the white of the eye) or episcleritis, and occasionally uveitis. Scleritis in particular can be painful and, if untreated, can threaten vision, so a painful red eye, light sensitivity, or change in vision warrants prompt assessment by an eye specialist. Because of these risks, eye symptoms in RA should not be ignored, and some people have periodic eye checks (also relevant for monitoring certain RA medicines such as hydroxychloroquine).",
      sources: [
        {
          label: "Rheumatoid arthritis — complications (eyes, dry eyes and mouth, Sjögren's)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis (effects on the eyes)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["complications", "eyes", "sjogrens", "dryness", "extra-articular"],
      evidence: "established",
    },
    {
      id: "nodules-skin-blood",
      title: "Rheumatoid nodules, skin, and blood changes",
      summary:
        "Firm lumps under the skin (rheumatoid nodules), skin changes, anemia of chronic disease, and (rarely) Felty syndrome with low white cells are among RA's other systemic effects.",
      detail:
        "RA produces several other systemic effects. Rheumatoid nodules — firm lumps under the skin — develop in some people, typically over pressure points such as the elbows, forearms, or hands; they are usually painless and harmless but can occasionally become sore, get in the way, or form in internal organs like the lungs. Chronic inflammation commonly causes 'anemia of chronic disease,' a mild-to-moderate anemia that can add to fatigue and tends to improve when the RA is well controlled. Rarely, long-standing severe RA leads to Felty syndrome, the combination of RA with an enlarged spleen and a low white-blood-cell count, which increases infection risk. RA is also associated with a somewhat higher risk of certain blood cancers such as lymphoma, partly linked to the degree of inflammation. Many of these manifestations have become less common with earlier, more effective treatment. They reinforce that RA is a systemic disease, and they are monitored through the regular blood tests and reviews that are part of RA care.",
      sources: [
        {
          label: "Rheumatoid arthritis — complications (nodules, anemia, other effects)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (nodules and systemic effects)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["complications", "nodules", "anemia", "felty-syndrome", "extra-articular"],
      evidence: "established",
    },
    {
      id: "osteoporosis-and-bone",
      title: "Bone thinning (osteoporosis)",
      summary:
        "RA raises the risk of osteoporosis and fractures through inflammation, reduced activity, and steroid use, so protecting bone health is an important part of long-term care.",
      detail:
        "People with RA are at increased risk of osteoporosis — thinning, weaker bones that fracture more easily. Several factors combine to cause this: the chronic inflammation of RA itself promotes bone loss; pain and joint damage can reduce physical activity, and weight-bearing exercise normally helps maintain bone; and corticosteroids, sometimes used to control RA, accelerate bone loss, especially with prolonged use. The result is a higher chance of fractures, including of the spine and hip, which can seriously affect independence. Protecting bone health is therefore part of comprehensive RA care: controlling inflammation, keeping steroids to the lowest effective dose for the shortest time, staying active with weight-bearing and strengthening exercise, ensuring adequate calcium and vitamin D, not smoking, and limiting alcohol. People at higher risk — particularly those on longer-term steroids — may have bone-density scanning and, where appropriate, specific bone-protecting treatment. These measures are individualized with the care team.",
      sources: [
        {
          label: "Rheumatoid arthritis — complications (osteoporosis)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis (bone health and complications)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["complications", "osteoporosis", "bone-health", "fracture", "steroids"],
      evidence: "established",
    },
  ],
});
