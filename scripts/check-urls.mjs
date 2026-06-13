// One-off URL checker (not part of the toolchain). Reads SOURCES.md, extracts
// every unique URL, and reports HTTP status. Flags 404/410 and DNS failures as
// real problems; 403/429/timeouts are treated as acceptable anti-bot blocks.
import { readFileSync } from "node:fs";

const md = readFileSync(new URL("../SOURCES.md", import.meta.url), "utf8");
const urls = [...new Set([...md.matchAll(/<((?:https?):\/\/[^>]+)>/g)].map((m) => m[1]))];
console.log(`Checking ${urls.length} unique URLs...`);

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

async function check(url) {
  for (const method of ["HEAD", "GET"]) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 15000);
      const res = await fetch(url, {
        method,
        redirect: "follow",
        signal: ctrl.signal,
        headers: { "User-Agent": UA, Accept: "text/html,*/*" },
      });
      clearTimeout(t);
      if (method === "HEAD" && (res.status === 405 || res.status === 403 || res.status === 501))
        continue; // retry with GET
      return { url, status: res.status };
    } catch (e) {
      if (method === "GET") return { url, status: 0, err: e.cause?.code || e.name || String(e) };
    }
  }
  return { url, status: 0, err: "unknown" };
}

const results = [];
const CONC = 12;
let i = 0;
async function worker() {
  while (i < urls.length) {
    const idx = i++;
    results.push(await check(urls[idx]));
  }
}
await Promise.all(Array.from({ length: CONC }, worker));

const bad = results.filter((r) => r.status === 404 || r.status === 410);
const dns = results.filter((r) => r.status === 0 && /ENOTFOUND|EAI_AGAIN|ERR_NAME/i.test(r.err || ""));
const other0 = results.filter((r) => r.status === 0 && !dns.includes(r));
const blocked = results.filter((r) => [401, 403, 429].includes(r.status));
const ok = results.filter((r) => r.status >= 200 && r.status < 400);

console.log(`\nOK (2xx/3xx): ${ok.length}`);
console.log(`Anti-bot (401/403/429): ${blocked.length}`);
console.log(`Timeout/other network (status 0, not DNS): ${other0.length}`);
console.log(`\n=== REAL PROBLEMS ===`);
console.log(`404/410 NOT FOUND (${bad.length}):`);
bad.forEach((r) => console.log(`  ${r.status}  ${r.url}`));
console.log(`DNS failures (${dns.length}):`);
dns.forEach((r) => console.log(`  ${r.err}  ${r.url}`));
console.log(`\nStatus 0 (timeout/reset — review, usually anti-bot not 404):`);
other0.forEach((r) => console.log(`  ${r.err}  ${r.url}`));
