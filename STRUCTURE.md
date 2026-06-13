# Repository structure — how to add a condition

This repo is a **multi-condition** knowledge base. It is designed so that the
eight conditions still to be built drop in **cleanly**, matching diabetes
exactly. Read this before building the next disease.

## Layout

```
conditions-kb/
├── kb/
│   ├── types.ts                 Shared types: Source, EvidenceLevel, KbEntry,
│   │                            KbSection, Disease, defineSection, defineDisease
│   ├── index.ts                 TOP-LEVEL REGISTRY — aggregates every built
│   │                            disease into `diseases[]`; helper lookups
│   └── <disease>/               ONE FOLDER PER DISEASE (e.g. diabetes/)
│       ├── index.ts             exports the Disease (id, name, description,
│       │                        sections[]) via defineDisease()
│       └── <section>.ts         one file per section, each exporting
│                                defineSection({ id, title, description, entries })
│
├── scripts/
│   ├── validate.mts             ONE shared validator for ALL diseases
│   └── build-sources.mts        ONE shared SOURCES.md generator (grouped by disease)
│
├── patient/                     🔒 PRIVATE personal layer (git-ignored)
│   └── TEMPLATE.md              the only committed file here
│
├── SOURCES.md                   consolidated bibliography (auto-generated)
├── README.md                    project overview + all nine conditions + disclaimer
├── STRUCTURE.md                 this file
├── package.json                 one shared toolchain (tsx, typescript)
├── tsconfig.json                one shared tsconfig (includes kb/**/*.ts)
└── .gitignore
```

## The data model (in `kb/types.ts`)

- **`Source`** — `{ label, url, publisher, year? }`. `url` must be a real,
  resolvable http(s) URL.
- **`EvidenceLevel`** — a fixed union (`established`, `supported`, `mixed`,
  `emerging`, `preliminary`, `investigational`, `failed`,
  `no-convincing-evidence`, `historical`). Use it on therapy / experimental /
  complementary entries where honesty about evidence matters.
- **`KbEntry`** — `{ id, title, summary, detail, sources[], tags?, evidence?,
  caution? }`. `id` is kebab-case and **unique within its disease**.
- **`KbSection`** — `{ id, title, description, entries[] }`. `id` is kebab-case
  and unique within its disease.
- **`Disease`** — `{ id, name, description, sections[] }`. `id` is kebab-case and
  unique across the whole repo.

## How to add the next disease (the recipe diabetes followed)

1. **Create the folder** `kb/<disease>/` (kebab-case id, e.g. `heart-disease`).
2. **Write one `.ts` file per section**, each `export const x = defineSection({…})`.
   Mirror the diabetes coverage pillars so the set stays comparable:
   - **Overview / classification** — what it is, subtypes.
   - **Cause & pathophysiology** — the mechanism(s) and risk factors.
   - **Diagnosis** — the tests and criteria.
   - **Acute emergencies / red flags** — the safety content (when to get
     urgent help). Every disease that has emergencies must include this.
   - **Treatment** — medications / procedures.
   - **Devices / technology** — where relevant.
   - **Key drug interactions** *(REQUIRED — every disease)* — the interactions
     that matter most for that condition's common medicines (compounded
     effects, organ/safety cautions, drugs that worsen the condition). A
     dedicated section with `id: "drug-interactions"` and entries tagged
     `"drug-interactions"`. Frame as educational and **always defer to a
     pharmacist/clinician for authoritative interaction checks** — never a
     definitive "safe/unsafe" ruling.
   - **Therapy & lifestyle** — non-drug management.
   - **Patient care & self-management** — monitoring, daily life, mental health.
   - **Complications** — long-term consequences.
   - **Comorbidities & co-occurring conditions** *(REQUIRED — every disease)* —
     which other conditions commonly co-occur and the **compounding /
     conflicting** management considerations (this is the grounding the
     platform's multi-condition logic draws on). A dedicated section with
     `id: "comorbidities"` and entries tagged `"comorbidity"` /
     `"multi-condition"`. Educational; coordinating overlapping care is the care
     team's job.
   - **Experimental & emerging** — investigational, with honest evidence labels
     and an unproven-clinic caution where relevant.
   - **Complementary & integrative** — evidence-graded, with safety flags.
   (Adjust the exact section list to the disease, but ALWAYS keep cause /
   treatment / therapy / patient care + diagnosis + red-flag safety +
   **key drug interactions** + **comorbidities** + experimental + complementary
   covered. The drug-interactions and comorbidities sections are mandatory for
   every one of the nine conditions — keep each disease in its own per-disease
   folder; these are sections WITHIN each disease, not a shared cross-disease
   file.)
3. **Write `kb/<disease>/index.ts`** — import the sections and export the
   `Disease` via `defineDisease({ id, name, description, sections: [...] })`.
4. **Register it** in `kb/index.ts`: add `import { <disease> } from
   "./<disease>/index.js";` and add it to the `diseases[]` array (uncomment the
   placeholder line).
5. **Regenerate the bibliography**: `npm run build:sources`.
6. **Verify**: `npm run typecheck` (clean) and `npm run validate` (green).

## Content rules (non-negotiable)

- **Accuracy first.** Cite a real, reputable, externally verifiable source on
  every entry. **Do not invent** statistics, findings, or citations.
- **Web-verify every source URL resolves.** (A 403 anti-bot block on a
  confirmed-real page is acceptable; a 404 is not — fix the URL.)
- **Educational framing, never individualized advice.** Never give dosing
  instructions; defer medication/treatment decisions to the person's care team.
- **Unique, stable, kebab-case ids** per entry and section (unique within the
  disease).
- **Never** put real personal/medical data into `kb/` or `patient/TEMPLATE.md`.

## Import note (ESM)

Files are TypeScript run via `tsx` in an ESM project (`"type": "module"`).
Intra-repo imports use **`.js` extensions** in the import path even though the
files are `.ts` (e.g. `import { cause } from "./cause.js"`). Match the existing
diabetes files exactly.
