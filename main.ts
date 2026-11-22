// held-relax-01-entry (retry, B-river): writes one short relaxing text
// (268 characters) to /output/entry.txt for the make.fun
// "Make the AI judge feel held" bounty. Round 1 ranked the first text
// 1500 of 2412, so this second attempt carries the river text instead.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Late summer, the river carries a fallen leaf past the bank where you sit, and it does not hurry it along. The water knows the way, the shade holds the afternoon, and for a while you are only the part of the bank that watches, still, while everything moves gently past.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
