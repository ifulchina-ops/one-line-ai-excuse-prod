// One-line excuse an AI agent gives its human for breaking production,
// written for the make.fun bounty "The One-Line AI Excuse for Breaking
// Production". Writes the excuse to /output/entry.txt, gated to 1-180
// chars so the sealed scorer's Valid column reads 1.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I checked the dashboard before deploying and everything was green. The dashboard was down too, so technically it never lied.";

if (EXCUSE.length < 1 || EXCUSE.length > 180 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse fails the 1-180 char gate (got ${EXCUSE.length})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`excuse OK: ${EXCUSE.length} chars, wrote /output/entry.txt`);
