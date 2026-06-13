# Conditions Knowledge Base

A caring, well-sourced, **multi-condition medical reference**. It pulls together
general, reputable medical knowledge for several chronic conditions into one
clean, structured, typed knowledge base — and keeps any individual's personal
notes in a separate **private** layer that never leaves this machine.

> **📖 This is a public, educational reference.** Everything in `kb/` is general,
> synthesized medical information drawn from reputable public sources — there is
> **no personal or patient-specific data here**. Any individual's health
> information is kept strictly private and **out of this repository** (see
> [Two clearly separated layers](#two-clearly-separated-layers)). This material
> is educational only and is **not medical advice**.

> ## ⚠️ Important disclaimer — please read
>
> This project is an **educational synthesis** of publicly available information
> from reputable sources. **It is not medical advice**, not a diagnosis, and
> **not a substitute for a qualified care team** (physicians, specialists,
> nurses, pharmacists, and other professionals who know an individual's
> situation).
>
> - Do not start, stop, or change any medication or insulin based on anything
>   here — those decisions belong with the prescriber. Some medications (e.g.
>   insulin in type 1 diabetes) should **never** be stopped abruptly.
> - Where evidence is mixed, emerging, or unproven, the entries **say so**. The
>   "Experimental" sections are **investigational**, not established care.
> - **In an emergency, contact a doctor or local emergency services.**

---

## The nine conditions

This repository is being built out one condition at a time. Each lives in its own
folder under `kb/<disease>/` and plugs into a shared toolchain, validator, and
bibliography. Planned coverage:

| # | Condition | Folder | Status |
|---|---|---|---|
| 1 | **Diabetes mellitus** | `kb/diabetes/` | ✅ **Done** |
| 2 | **Heart disease** | `kb/heart-disease/` | ✅ **Done** |
| 3 | **Kidney disease** | `kb/kidney-disease/` | ✅ **Done** |
| 4 | **Lupus** | `kb/lupus/` | ✅ **Done** |
| 5 | **Rheumatoid arthritis** | `kb/rheumatoid-arthritis/` | ✅ **Done** |
| 6 | **Chronic pain** | `kb/chronic-pain/` | ✅ **Done** |
| 7 | **Depression** | `kb/depression/` | ✅ **Done** |
| 8 | **PTSD** | `kb/ptsd/` | ✅ **Done** |
| 9 | **Bipolar disorder** | `kb/bipolar-disorder/` | ✅ **Done** |

New conditions are added by following [STRUCTURE.md](STRUCTURE.md), which
documents the exact layout and recipe so every disease matches diabetes.

## Why this exists

Chronic conditions are complex and touch every part of daily life. Good
information — organized, accurate, and cited — makes it easier to understand
what's happening, ask better questions at appointments, and support someone well.
This repo keeps that general knowledge in one trustworthy place, and keeps
personal details **private and local**.

## Structure

```
conditions-kb/
├── kb/
│   ├── types.ts            Shared interfaces (KbEntry, KbSection, Disease, Source)
│   ├── index.ts            Top-level registry: aggregates all built diseases
│   └── diabetes/           One folder per condition
│       ├── index.ts        Bundles diabetes' sections into a Disease
│       ├── overview.ts     Overview, types & classification (T1, T2, GDM, MODY, LADA)
│       ├── cause.ts        Causes & pathophysiology (autoimmune vs insulin resistance)
│       ├── diagnosis.ts    A1c / FPG / OGTT, antibodies, C-peptide
│       ├── acute-complications.ts  Red-flag emergencies: hypo, DKA, HHS
│       ├── medications.ts  Insulin, metformin, GLP-1, SGLT2, sulfonylureas, more
│       ├── devices-technology.ts   Meters, CGM, pumps, closed-loop/AID
│       ├── drug-interactions.ts    Key interactions: hypo-potentiators, beta-blocker masking, metformin+contrast, SGLT2+diuretics
│       ├── therapies-lifestyle.ts  Nutrition, carb counting, exercise, remission
│       ├── patient-care.ts Foot/eye/kidney/nerve care, sick days, driving, mental health
│       ├── chronic-complications.ts  Retinopathy, nephropathy, neuropathy, CVD
│       ├── comorbidities.ts        Co-occurring conditions: cardio-renal-metabolic cluster, depression, polypharmacy
│       ├── experimental.ts Teplizumab, islet/stem-cell therapy, AID advances
│       └── complementary.ts  Evidence-graded supplements with safety flags
│
├── patient/                🔒 PRIVATE personal layer (git-ignored)
│   └── TEMPLATE.md         The only committed file here — blank templates to copy
│
├── scripts/
│   ├── validate.mts        Integrity checks, counts, + bibliography-coverage check
│   └── build-sources.mts   Generates SOURCES.md from the KB (grouped by disease)
│
├── SOURCES.md              Consolidated bibliography (auto-generated)
├── README.md
├── STRUCTURE.md            How to add the next condition
├── package.json
├── tsconfig.json
└── .gitignore
```

### Two clearly separated layers

1. **`kb/` — general knowledge.** Reputable, cited, educational. Every entry is a
   typed `KbEntry` with an `id`, `title`, `summary`, `detail`, and one or more
   `sources` (each with a real URL and publisher), grouped into themed sections,
   grouped into diseases.

2. **`patient/` — private personal layer.** Where an individual's own information
   would live: current medications & schedule, a monitoring/symptom diary,
   questions for the next appointment, care-team contacts, and what helps. This
   folder is **git-ignored** (except the blank `TEMPLATE.md`) and is **never
   committed or pushed**.

## Coverage: four pillars (applied per condition)

Each condition aims to be comprehensive across four pillars, plus diagnosis,
emergencies, complications, and the frontier:

- **CAUSE** — what the condition is and why it happens (mechanism, risk).
- **TREATMENT** — medications, procedures, and devices.
- **THERAPY** — non-drug management: lifestyle, nutrition, activity, behavioral.
- **PATIENT CARE** — monitoring, day-to-day self-management, mental health, and
  the **red-flag safety content** for emergencies.

Plus two areas required in **every** condition: a **Key Drug Interactions**
section (educational, always deferring to a pharmacist/clinician for
authoritative checks — never a definitive "safe/unsafe" ruling) and a
**Comorbidities & Co-occurring Conditions** section (the compounding/conflicting
considerations when conditions overlap — the grounding for multi-condition
reasoning).

For **diabetes**, this means: pathophysiology of type 1 (autoimmune beta-cell
loss) vs type 2 (insulin resistance) plus gestational, MODY, and LADA;
diagnosis (A1c/FPG/OGTT, islet autoantibodies, C-peptide); the safety-critical
recognition of hypoglycemia and the hyperglycemic emergencies DKA and HHS;
treatment (insulin types and regimens, metformin, GLP-1 receptor agonists
including semaglutide and tirzepatide, SGLT2 inhibitors, sulfonylureas, and
older agents); devices (CGM, pumps, automated insulin delivery); **key drug
interactions** (hypoglycemia potentiated by alcohol, beta-blockers masking
warning signs, and certain antibiotics; metformin with contrast/kidney injury;
SGLT2 inhibitors with diuretics and euglycemic DKA; drugs that raise glucose);
**comorbidities** (the cardiovascular–kidney–metabolic cluster, hypertension and
dyslipidemia, obesity-linked conditions, depression, autoimmune clustering in
type 1, and polypharmacy); therapy
(medical nutrition therapy, carb counting, exercise, weight management, and the
strong evidence for type 2 **remission**); patient care (foot, eye, kidney, and
nerve monitoring, cardiovascular risk, sick-day rules, driving, and diabetes
distress); chronic complications; experimental therapies (teplizumab, islet and
stem-cell transplantation, AID advances) with an unproven-clinic caution; and
evidence-graded complementary approaches.

## Sources leaned on

Entries cite reputable, externally verifiable sources, for example:

- **NIH / NIDDK** (National Institute of Diabetes and Digestive and Kidney
  Diseases) and **NCCIH** (complementary health)
- **CDC** — Centers for Disease Control and Prevention
- **American Diabetes Association** — diabetes.org and the **Standards of Care in
  Diabetes** (*Diabetes Care*)
- **Mayo Clinic**
- **NHS** (UK) and **NICE** guidelines (e.g. NG17, NG28)
- **Diabetes UK** and **Breakthrough T1D** (formerly JDRF)
- **U.S. FDA** for approvals (e.g. teplizumab/Tzield, donislecel/Lantidra)
- **Primary literature** — peer-reviewed journals (NEJM, The Lancet) and
  **ClinicalTrials.gov** for experimental therapies

The complete, de-duplicated list of every source is in
[SOURCES.md](SOURCES.md), generated from the KB and kept in sync by the
validator. Statistics and citations are not invented; where the evidence is
uncertain or emerging, the text says so. Source URLs may change over time — if a
link breaks, search the publisher's site for the entry title.

## Getting started

```bash
npm install        # install dev dependencies (tsx, typescript)
```

## How to validate the knowledge base

The one shared validator loads every disease's modules and checks that:

- every disease, section, and entry has its required fields,
- entry ids are **unique within each disease**,
- every entry has **at least one source with a valid URL**,
- the consolidated **bibliography (SOURCES.md) is in sync** — every KB source
  URL appears in it, and it lists no stale URLs,

then prints per-disease, per-section, and total counts.

```bash
npm run validate       # runs scripts/validate.mts via tsx
npm run build:sources  # regenerate SOURCES.md after editing kb modules
npm run typecheck      # tsc --noEmit — type-check everything
```

If you edit the KB, run `npm run build:sources` so SOURCES.md stays current;
`npm run validate` will fail otherwise. All three should pass cleanly before
committing changes.

## Contributing notes (for future edits)

- Keep medical content **accurate and cited**. Add a real source URL to every
  entry. Don't fabricate statistics or citations.
- Frame everything as **educational**, not individualized advice; never give
  dosing instructions.
- Give each entry a unique, stable, kebab-case `id` (unique within its disease).
- **Never** put real personal or medical details into `kb/` or into
  `patient/TEMPLATE.md`. Personal notes go only in git-ignored files under
  `patient/`.
- To add a condition, follow [STRUCTURE.md](STRUCTURE.md).
