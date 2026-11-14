import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { expect, test } from "../testing";
import { LANDING_SONGS } from "../landing/songs";
import { allPages } from "../site/routes";
import { groupIndex, groupOf, inShell, partMark, PARTS, withNeeds } from "./cache-groups";
const PUBLIC = join(import.meta.dir, "..", "..", "public");

async function publicFiles(): Promise<string[]> {
  const entries = await readdir(PUBLIC, { recursive: true, withFileTypes: true });
  return entries.filter((e) => e.isFile()).map((e) => relative(PUBLIC, join(e.parentPath, e.name)).split(sep).join("/"));
}

test("every_public_file_is_in_one_group", async () => {
  const files = await publicFiles();
  expect(files.length).toBeGreaterThan(200);
  // Only a search or social site fetches a social picture, so it joins no group.
  const wrong = files.filter((path) => (groupOf(path) === undefined) !== path.startsWith("images/social/"));
  expect(wrong).toEqual([]);
  expect(groupOf("index.html")).toBe("app");
  expect(groupOf("images/landing/hero-dark.webp")).toBe("app");
  expect(groupOf("songs/catalog.json")).toBe("player");
  expect(groupOf("models/hand.glb")).toBe("player");
  expect(groupOf("songs/ours/yankee-doodle/common.mid")).toBe("songs");
  for (const song of LANDING_SONGS) expect(groupOf(song)).toBe("player");
  expect(groupOf("sounds/salamander/acoustic_grand_piano-mp3.json")).toBe("sounds");
});

test("built_files_join_by_their_chunk_or_their_path_except_maps_the_worker_and_the_crawler_files", () => {
  const chunks = new Map([["chunk-p.js", "player" as const]]);
  expect(groupOf("app.js", chunks)).toBe("app");
  expect(groupOf("licenses/LICENSE.txt", chunks)).toBe("app");
  expect(groupOf("chunk-0a1b2c3d.js", chunks)).toBe("app");
  expect(groupOf("chunk-p.js", chunks)).toBe("player");
  // The worker reads no chunk's part: every shell group is served from the same cache.
  expect(groupOf("chunk-p.js")).toBe("app");
  expect(groupOf("parse-worker.js")).toBe("player");
  for (const page of allPages()) {
    const learn = page.route.id === "learn" || page.route.id === "profile";
    expect({ page: page.file, group: groupOf(page.file) }).toEqual({ page: page.file, group: learn ? "learn" : "app" });
  }
  expect(groupOf("learn/meet-the-piano/sitting-at-the-piano/index.html")).toBe("learn");
  expect(groupOf("de/learn/meet-the-piano/sitting-at-the-piano/index.html")).toBe("learn");
  expect(groupOf("app.js.map")).toBeUndefined();
  expect(groupOf("sw.js")).toBeUndefined();
  expect(groupOf("images/social/en.png")).toBeUndefined();
  expect(groupOf("robots.txt")).toBeUndefined();
  expect(groupOf("sitemap.xml")).toBeUndefined();
});

test("the_shell_groups_share_the_versioned_cache_and_learn_needs_the_player", () => {
  expect(PARTS.every(inShell)).toBe(true);
  expect(inShell("app")).toBe(true);
  expect(inShell("songs")).toBe(false);
  expect(withNeeds(["learn"])).toEqual(["player", "learn"]);
  expect(withNeeds(["player"])).toEqual(["player"]);
  expect(partMark("learn", "https://example.org/piano/")).toBe("https://example.org/piano/__parts/learn");
});

test("the_index_lists_each_group_with_its_hashes_and_sizes_and_sums_its_bytes", () => {
  const index = groupIndex(
    "v1",
    [
      { path: "index.html", bytes: 2, hash: "h0" },
      { path: "app.js", bytes: 10, hash: "h1" },
      { path: "app.js.map", bytes: 99, hash: "h2" },
      { path: "songs/catalog.json", bytes: 5, hash: "h3" },
      { path: "songs/a.mid", bytes: 3, hash: "h4" },
      { path: "sounds/x/y.json", bytes: 7, hash: "h5" },
      { path: "chunk-l.js", bytes: 4, hash: "h6" },
      { path: "learn/index.html", bytes: 1, hash: "h7" },
    ],
    new Map([["chunk-l.js", "learn"]]),
  );
  expect(index).toEqual({
    version: "v1",
    groups: {
      app: { files: ["./", "./index.html", "./app.js"], hashes: ["h0", "h0", "h1"], sizes: [2, 2, 10], bytes: 12 },
      player: { files: ["./songs/catalog.json"], hashes: ["h3"], sizes: [5], bytes: 5 },
      learn: { files: ["./chunk-l.js", "./learn/index.html"], hashes: ["h6", "h7"], sizes: [4, 1], bytes: 5 },
      songs: { files: ["./songs/a.mid"], hashes: ["h4"], sizes: [3], bytes: 3 },
      sounds: { files: ["./sounds/x/y.json"], hashes: ["h5"], sizes: [7], bytes: 7 },
    },
  });
});
