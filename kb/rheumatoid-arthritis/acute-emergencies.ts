import { defineSection } from "../types.js";

/**
 * ACUTE EMERGENCIES / RED FLAGS — the safety section. When joint or systemic
 * symptoms in someone with RA (or on RA immunosuppression) need urgent care:
 * septic (infected) joint, serious infection on immunosuppressants, vasculitis,
 * cervical spine instability, and other warning signs.
 */
export const acuteEmergencies = defineSection({
  id: "acute-emergencies",
  title: "Acute Emergencies & Red Flags",
  description:
    "When RA symptoms or its treatment need urgent attention — a possible joint infection (septic arthritis), serious infection while on immunosuppressants, vasculitis, cervical spine instability, and other warning signs that warrant prompt medical care.",
  entries: [
    {
      id: "red-flags-overview",
      title: "When RA symptoms become an emergency",
      summary:
        "Most RA flares are managed routinely, but certain signs — a single hot, intensely painful joint, fever while on immunosuppressants, or sudden neurological or breathing changes — call for urgent care.",
      detail:
        "Living with RA usually means managing fluctuating symptoms through scheduled care, but some situations need prompt or emergency attention rather than waiting for the next appointment. The most important are signs of a joint infection (a single joint that becomes rapidly hot, swollen, and severely painful, often with fever), signs of a serious infection in someone taking immune-suppressing RA medicines (fever, chills, or feeling very unwell), and any sudden severe symptom such as new shortness of breath, chest pain, vision change, or new weakness, numbness, or problems with balance. Because RA treatments dampen the immune system and because RA itself can affect organs, symptoms that might be minor in someone else can be more serious here. The guiding principle is that anything sudden, severe, or accompanied by fever deserves urgent evaluation. The entries below describe the specific red flags; none replaces calling the care team or emergency services when something feels seriously wrong.",
      sources: [
        {
          label: "Septic arthritis (urgent joint infection — when to get help)",
          url: "https://www.nhs.uk/conditions/septic-arthritis/",
          publisher: "NHS (UK)",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (when to seek care)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["acute", "red-flags", "emergency", "overview", "safety"],
      caution:
        "Educational only. If you have a sudden, severe symptom — a hot intensely painful joint, fever on immunosuppressants, chest pain, breathlessness, or new neurological symptoms — seek urgent medical care.",
    },
    {
      id: "septic-arthritis",
      title: "Septic (infected) joint — a medical emergency",
      summary:
        "A single joint that quickly becomes hot, very painful, and swollen, often with fever, may be infected (septic arthritis); this is an emergency because infection can destroy a joint fast.",
      detail:
        "Septic arthritis is infection within a joint, and it is a medical emergency. The classic picture is a single joint that becomes severely painful, hot, red, and swollen over hours to a couple of days, usually with difficulty moving it and often with fever and feeling generally unwell. It needs urgent treatment because bacteria can damage the cartilage and bone within days, leading to lasting joint destruction or spreading infection. People with RA are at particular risk for two reasons: the disease and several of its treatments suppress the immune system, and an already-inflamed joint can be harder to recognize as newly infected. A key warning sign is that one joint becomes dramatically worse and out of proportion to the person's usual RA, especially with fever. Septic arthritis cannot be reliably distinguished from a flare without urgent assessment — typically by sampling fluid from the joint — so a hot, intensely painful single joint should be treated as an emergency until infection is excluded.",
      sources: [
        {
          label: "Septic arthritis (symptoms, urgency)",
          url: "https://www.nhs.uk/conditions/septic-arthritis/",
          publisher: "NHS (UK)",
        },
        {
          label: "Bone and joint infections — symptoms and causes",
          url: "https://www.mayoclinic.org/diseases-conditions/bone-and-joint-infections/symptoms-causes/syc-20350755",
          publisher: "Mayo Clinic",
        },
      ],
      tags: ["acute", "septic-arthritis", "infection", "emergency", "red-flags"],
      evidence: "established",
      caution:
        "A single joint that becomes rapidly hot, intensely painful, and swollen — especially with fever — needs same-day emergency assessment to rule out infection. Do not assume it is 'just a flare.'",
    },
    {
      id: "serious-infection-on-immunosuppression",
      title: "Serious infection while on immune-suppressing medicines",
      summary:
        "DMARDs, biologics, JAK inhibitors, and steroids raise infection risk and can blunt warning signs, so fever or feeling very unwell on these drugs warrants prompt medical advice.",
      detail:
        "Most medicines used to control RA — including methotrexate and other DMARDs, biologics, JAK inhibitors, and corticosteroids — work by dampening the immune system, which raises the risk of infections and can make them more serious or harder to spot. Because of this, a fever, persistent cough, breathlessness, burning when urinating, spreading skin redness, or simply feeling unusually unwell should be taken seriously and reported promptly rather than waited out. Some infections that the immune system normally keeps in check, such as tuberculosis or certain viral infections (including shingles, which is more common with JAK inhibitors), can reactivate or become severe on these drugs — which is why screening before starting them and vaccination are emphasized. People on immunosuppressants are often advised in advance about when to pause their medicine during an infection; that decision belongs with the care team. The practical rule is that signs of infection deserve a lower threshold for seeking advice when you are on RA immunosuppression.",
      sources: [
        {
          label: "Rheumatoid arthritis — Treatment (DMARDs, biologicals and infection risk)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/",
          publisher: "NHS (UK)",
        },
        {
          label: "Vaccinations in Patients with Rheumatic & Musculoskeletal Disease (infection risk and prevention)",
          url: "https://rheumatology.org/vaccinations-guideline",
          publisher: "American College of Rheumatology",
        },
      ],
      tags: ["acute", "infection", "immunosuppression", "biologics", "jak-inhibitors", "red-flags"],
      evidence: "established",
      caution:
        "If you develop a fever or feel seriously unwell while taking RA immunosuppressants, seek medical advice promptly and ask whether to pause the medicine — do not decide alone.",
    },
    {
      id: "rheumatoid-vasculitis",
      title: "Rheumatoid vasculitis",
      summary:
        "In severe, long-standing RA, inflammation can affect blood vessels (vasculitis), causing skin ulcers, nail-fold spots, numbness, or other organ symptoms that need urgent specialist care.",
      detail:
        "Rheumatoid vasculitis is an uncommon but serious complication in which RA inflammation involves the walls of small and medium blood vessels, reducing blood flow to tissues. It is most often seen in people with long-standing, severe, seropositive RA. Signs can include small painful skin ulcers or sores (often on the legs), dark spots near the fingernails or fingertips, new numbness or tingling from nerve involvement, and, less commonly, symptoms from involvement of internal organs. Because vasculitis can damage nerves, skin, and organs, it is treated as a serious development that needs prompt rheumatology assessment and usually more intensive immune-suppressing treatment. New skin ulcers that will not heal, sudden numbness or weakness, or unexplained new symptoms in someone with severe RA should be reported promptly rather than attributed to the usual disease. With today's earlier and more effective RA treatment, severe vasculitis has become less common, but it remains an important red flag.",
      sources: [
        {
          label: "Rheumatoid arthritis — effects beyond the joints (skin, blood vessels)",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis (extra-articular and severe disease)",
          url: "https://www.arthritis.org/diseases/rheumatoid-arthritis",
          publisher: "Arthritis Foundation",
        },
      ],
      tags: ["acute", "vasculitis", "extra-articular", "red-flags", "severe-ra"],
      evidence: "established",
    },
    {
      id: "cervical-spine-instability",
      title: "Cervical spine (neck) instability",
      summary:
        "Long-standing RA can loosen the joints at the top of the neck; warning signs like new neck pain with arm/leg tingling, weakness, or balance problems need prompt evaluation.",
      detail:
        "In people with long-standing or poorly controlled RA, the inflammation can affect the joints and ligaments at the top of the cervical spine (the neck), particularly the joint between the first two vertebrae. This can lead to instability, where the bones shift more than they should, potentially putting pressure on the spinal cord. Most people with neck involvement have only pain and stiffness, but warning signs of cord compression are important to recognize: new or worsening neck pain radiating to the back of the head, tingling, numbness, or weakness in the arms or legs, clumsiness of the hands, problems with walking or balance, or changes in bladder or bowel control. These symptoms warrant prompt medical evaluation. This is also why people with established RA are sometimes assessed before operations that involve positioning the neck, such as some surgeries requiring general anesthesia, so the airway team can take precautions. Better disease control with modern treatment has made severe cervical spine involvement less common.",
      sources: [
        {
          label: "Rheumatoid arthritis — joints affected and complications",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid Arthritis: Symptoms, Stages & Treatment (neck and complications)",
          url: "https://my.clevelandclinic.org/health/diseases/4924-rheumatoid-arthritis",
          publisher: "Cleveland Clinic",
        },
      ],
      tags: ["acute", "cervical-spine", "neurological", "red-flags", "severe-ra"],
      evidence: "established",
      caution:
        "New neck pain with arm or leg tingling, weakness, hand clumsiness, or balance or bladder changes needs prompt medical assessment.",
    },
    {
      id: "other-urgent-symptoms",
      title: "Chest, breathing, and eye red flags",
      summary:
        "Sudden breathlessness or chest pain, a painful red eye, or coughing up blood are warning signs that RA-related heart, lung, or eye complications may need urgent care.",
      detail:
        "Because RA is a systemic disease, some emergencies involve organs rather than joints. Sudden shortness of breath, chest pain, or coughing up blood can reflect heart or lung complications — people with RA have a higher risk of heart attack and of lung problems such as inflammation around the heart or lungs, scarring of the lung tissue, or blood clots — and these symptoms warrant emergency assessment. A painful, red eye with light sensitivity or change in vision can indicate inflammation of the eye (such as scleritis or uveitis), which is more common in RA and can threaten sight if not treated promptly by an eye specialist. Severe, unrelenting headache, sudden severe abdominal pain, or signs of a serious allergic reaction after a biologic infusion (such as swelling, difficulty breathing, or a widespread rash) are also urgent. The unifying theme is that RA's reach beyond the joints means new, severe symptoms in the chest, breathing, eyes, or elsewhere should not be dismissed and may need emergency care.",
      sources: [
        {
          label: "Rheumatoid arthritis — effects on the heart, lungs, and eyes",
          url: "https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648",
          publisher: "Mayo Clinic",
        },
        {
          label: "Rheumatoid arthritis (complications affecting other parts of the body)",
          url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/",
          publisher: "NHS (UK)",
        },
      ],
      tags: ["acute", "cardiac", "lung", "eye", "red-flags"],
      caution:
        "Sudden breathlessness, chest pain, coughing up blood, or a painful red eye with vision change are emergencies — seek urgent care.",
    },
  ],
});
