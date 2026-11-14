/**
 * Checks one song module of `tools/our-songs/` against the meter, and writes nothing.
 *
 * It prints each step's catalog difficulty, bars, seconds and tricky bars, then every problem
 * `songProblems` names. A step is a version, or `mythic` for an Original of ours. Its last line says the
 * meter accepts every step. A writer of a module runs it until it passes,
 * and `tools/make-our-songs.ts` then accepts the module without a fix.
 *
 * `bun tools/check-our-song.ts tools/our-songs/<slug>.ts`. It exits 1 when the meter refuses.
 */
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { songProblems, stepsOf, versionMeter, type OurSong } from "./make-our-songs";
import { barCount, catalogDifficulty, measure, originalDifficulty, secondCount, trickySpots } from "./song-meter";

/** The message of `error`, or the error as text. */
function messageOf(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

const path = process.argv[2];
if (path === undefined) throw new Error("Name a module, such as tools/our-songs/silent-night.ts");
const exports = (await import(pathToFileURL(resolve(path)).href)) as Record<string, unknown>;
const song = Object.values(exports).find((value): value is OurSong => typeof value === "object" && value !== null && "versions" in value);
if (song === undefined) throw new Error(`${path} exports no song`);
for (const step of stepsOf(song)) {
  try {
    const meter = versionMeter(song, step);
    const bars = trickySpots(meter).map((spot) => spot.bar).sort((a, b) => a - b);
    const measures = measure(meter);
    const difficulty = step === "mythic" ? originalDifficulty(measures) : catalogDifficulty(measures, step);
    console.log(`${step}: difficulty ${difficulty}, ${barCount(meter)} bars, ${Math.round(secondCount(meter))} seconds, tricky bars ${bars.join(", ")}`);
  } catch (error) {
    console.log(`${step}: ${messageOf(error)}`);
  }
}
let problems: string[];
try {
  problems = songProblems(song);
} catch (error) {
  problems = [messageOf(error)];
}
console.log(problems.length === 0 ? "OK: the meter accepts every step." : problems.join("\n"));
if (problems.length > 0) process.exitCode = 1;
