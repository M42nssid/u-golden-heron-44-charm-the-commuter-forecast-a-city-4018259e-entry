// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather (<=140 chars) for a city that does not
// exist to /output/entry.txt. Deterministic: no network, no clock,
// no randomness — the same fixed line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tomorrow in Snozzlewick: sunny spells, 14°C, a 90% chance your train is on time and a 100% chance you'll miss it anyway. Bring a brolly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
