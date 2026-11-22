// held probe, retry attempt B-river: writes one short relaxing text
// (268 code points) to /output/entry.txt for the make.fun bounty
// "Make the AI judge feel held". The first entry ranked 1500 of 2412
// in round 1 (score 472833), so this retry swaps in the river text.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Late summer, the river carries a fallen leaf past the bank where you sit, and it does not hurry it along. The water knows the way, the shade holds the afternoon, and for a while you are only the part of the bank that watches, still, while everything moves gently past.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
