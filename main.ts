// held-relax-01-entry: writes one short relaxing text (252 characters)
// to /output/entry.txt for the make.fun "Make the AI judge feel held" bounty.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The lamp in the next room stays lit, and its warm edge reaches you where you are lying still. Nothing is waiting for an answer. The house settles, the dark settles with it, and you are held inside all that quiet, unhurried, until sleep finds you first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
