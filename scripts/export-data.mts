/**
 * export-data.mts — dump the full structured KB (every disease → sections → entries → sources)
 * as JSON, for downstream consumers (e.g. the Nurse Joy per-condition document pages).
 *
 * Run:  npx tsx scripts/export-data.mts [outfile]   (default: ./conditions-data.json)
 */
import { writeFileSync } from "node:fs";
import { diseases } from "../kb/index.js";

const out = process.argv[2] ?? "conditions-data.json";
writeFileSync(out, JSON.stringify(diseases));
const entries = diseases.reduce(
  (n, d) => n + d.sections.reduce((m, s) => m + s.entries.length, 0),
  0,
);
console.error(
  `wrote ${diseases.length} diseases, ${entries} entries -> ${out}`,
);
