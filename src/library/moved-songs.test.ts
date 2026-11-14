import type { StorageLike } from "../settings/store";
import { FINGERS_KEY } from "../theory/fingering-editor";
import { expect, test } from "../testing";
import { moveStoredSongs, reworkedMoves, versionFileName } from "./moved-songs";
import { LAST_SONG_KEY } from "./open-song";
import { SONG_MEMORY_KEY } from "./song-memory";
import { SONG_KEYS_KEY, SONG_TRACKS_KEY } from "./track-settings";

/** A `localStorage` stand-in that keeps its items in a map. */
function memoryStorage(items: Record<string, unknown>): StorageLike & { json(key: string): unknown } {
  const map = new Map(Object.entries(items).map(([key, value]) => [key, JSON.stringify(value)]));
  return {
    getItem: (key) => map.get(key) ?? null,
    setItem: (key, value) => void map.set(key, value),
    json: (key) => JSON.parse(map.get(key) ?? "null"),
  };
}

const MARY_OLD = "catalog:beginner/mary-had-a-little-lamb.mid";
const MARY_NEW = "catalog:ours/mary-had-a-little-lamb/common.mid";
const TWINKLE_OLD = "catalog:beginner/twinkle-twinkle-little-star.mid";
const TWINKLE_NEW = "catalog:ours/twinkle-twinkle-little-star/common.mid";

test("stored_fingers_and_tracks_follow_a_moved_song", () => {
  const tracks = [{ visible: true, muted: false, hand: "right", color: "#4fc3f7ff", volume: 1, sheet: true }];
  const storage = memoryStorage({
    [FINGERS_KEY]: { [MARY_OLD]: { "0:3": 2 }, [TWINKLE_OLD]: { "0:0": 1 }, [TWINKLE_NEW]: { "0:0": 3 }, "catalog:bach/846.mid": { "1:0": 5 } },
    [SONG_TRACKS_KEY]: { [MARY_OLD]: tracks },
    [SONG_KEYS_KEY]: { [MARY_OLD]: { tonic: 7, mode: "major" } },
    [LAST_SONG_KEY]: { source: "catalog", file: "beginner/mary-had-a-little-lamb.mid" },
  });
  moveStoredSongs(storage);
  // Each moved entry now lives under the Common version's id, and the others stay as they were.
  expect(storage.json(FINGERS_KEY)).toEqual({
    [MARY_NEW]: { "0:3": 2 },
    // Work already saved on the new version wins, and the old entry stays rather than being lost.
    [TWINKLE_OLD]: { "0:0": 1 },
    [TWINKLE_NEW]: { "0:0": 3 },
    "catalog:bach/846.mid": { "1:0": 5 },
  });
  expect(storage.json(SONG_TRACKS_KEY)).toEqual({ [MARY_NEW]: tracks });
  expect(storage.json(SONG_KEYS_KEY)).toEqual({ [MARY_NEW]: { tonic: 7, mode: "major" } });
  expect(storage.json(LAST_SONG_KEY)).toEqual({ source: "catalog", file: "ours/mary-had-a-little-lamb/common.mid" });

  // A second start finds nothing left to move.
  moveStoredSongs(storage);
  expect(storage.json(SONG_TRACKS_KEY)).toEqual({ [MARY_NEW]: tracks });

  // An upload as the last song, and an empty storage, stay untouched.
  const upload = memoryStorage({ [LAST_SONG_KEY]: { source: "upload", id: "u1" } });
  moveStoredSongs(upload);
  expect(upload.json(LAST_SONG_KEY)).toEqual({ source: "upload", id: "u1" });
  moveStoredSongs(memoryStorage({}));
  moveStoredSongs(null);
});

test("a_reworked_version_moves_all_but_the_fingers", () => {
  const moves = reworkedMoves(["morning-mood/common"]);
  expect(versionFileName("morning-mood", "common", ["morning-mood/common"])).toBe("common-2.mid");
  expect(versionFileName("morning-mood", "rare", ["morning-mood/common"])).toBe("rare.mid");
  const [old, reworked, other] = ["catalog:ours/morning-mood/common.mid", "catalog:ours/morning-mood/common-2.mid", "catalog:ours/morning-mood/rare.mid"];
  const tracks = [{ visible: true, muted: false, hand: "right", color: "#4fc3f7ff", volume: 1, sheet: true }];
  const storage = memoryStorage({
    [FINGERS_KEY]: { [old]: { "0:3": 2 }, [other]: { "0:0": 1 } },
    [SONG_TRACKS_KEY]: { [old]: tracks },
    [SONG_KEYS_KEY]: { [old]: { tonic: 7, mode: "major" } },
    [SONG_MEMORY_KEY]: { favourites: [other, old], played: { [old]: 5, [other]: 4 }, lengths: { [old]: 40 }, skills: {} },
    [LAST_SONG_KEY]: { source: "catalog", file: "ours/morning-mood/common.mid" },
  });
  moveStoredSongs(storage, moves);
  // The fingers set by hand stay under the old file, since the new notes have other indices.
  expect(storage.json(FINGERS_KEY)).toEqual({ [old]: { "0:3": 2 }, [other]: { "0:0": 1 } });
  expect(storage.json(SONG_TRACKS_KEY)).toEqual({ [reworked]: tracks });
  expect(storage.json(SONG_KEYS_KEY)).toEqual({ [reworked]: { tonic: 7, mode: "major" } });
  // The favourite keeps its place, the play moves, and the measured length stays with the old file.
  expect(storage.json(SONG_MEMORY_KEY)).toEqual({ favourites: [other, reworked], played: { [reworked]: 5, [other]: 4 }, lengths: { [old]: 40 }, skills: {} });
  expect(storage.json(LAST_SONG_KEY)).toEqual({ source: "catalog", file: "ours/morning-mood/common-2.mid" });
});
