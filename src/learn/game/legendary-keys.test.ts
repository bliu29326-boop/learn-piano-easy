import { readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { songKey } from "../../input/history";
import { REWORKED_VERSIONS, versionFileName } from "../../library/moved-songs";
import { readMidi } from "../../midi/smf-read";
import { songFromMidi } from "../../midi/song";
import { expect, test } from "../../testing";
import { FORMER_LEGENDARY_KEYS, LEGENDARY_KEYS } from "./legendary-keys";

const ours = resolve(import.meta.dir, "..", "..", "..", "public", "songs", "ours");

test("every_legendary_version_has_its_song_key", async () => {
  const rows: string[] = [];
  for (const slug of readdirSync(ours).sort()) {
    const file = Bun.file(join(ours, slug, versionFileName(slug, "legendary")));
    if (!(await file.exists())) continue;
    const key = songKey(songFromMidi(readMidi(new Uint8Array(await file.arrayBuffer()))));
    rows.push(`  ["${slug}", "${key}"],`);
  }
  const written = [...LEGENDARY_KEYS].map(([slug, key]) => `  ["${slug}", "${key}"],`);
  expect(rows.length).toBeGreaterThan(0);
  // On a failure, the expected side is the list to paste into `legendary-keys.ts`.
  expect(written.join("\n")).toBe(rows.join("\n"));
});

test("every_reworked_legendary_version_keeps_its_former_key", () => {
  const reworked = REWORKED_VERSIONS.filter((version) => version.endsWith("/legendary")).map((version) => version.split("/")[0]!);
  expect([...FORMER_LEGENDARY_KEYS.keys()].sort()).toEqual(reworked.sort());
  for (const [slug, key] of FORMER_LEGENDARY_KEYS) expect({ slug, same: LEGENDARY_KEYS.get(slug) === key }).toEqual({ slug, same: false });
});
