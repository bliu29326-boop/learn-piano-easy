import { readdir, readFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { expect, test } from "../testing";
import type { Loading, LoadingProgress } from "../ui/components/loading";
import { PART_ROOTS, PARTS, type InstallProgress, type PartId } from "./cache-groups";
import { openPart, type PartSteps } from "./part-loader";
import type { PartsProgress, PartsResult } from "./parts";

/** A loading card that records what it was asked to show. */
function recorder() {
  const shown: (LoadingProgress | { message: string } | "clear")[] = [];
  let retry: (() => void) | undefined;
  const card: Loading = {
    element: undefined as unknown as HTMLElement,
    progress: (progress) => shown.push(progress),
    message: (text, action) => {
      shown.push({ message: text });
      retry = action.run;
    },
    clear: () => shown.push("clear"),
  };
  return { card, shown, retry: () => retry?.() };
}

/** Steps whose ensure answers each of `results` in turn, reporting `progress` first, and whose update answers `update`. */
function steps(results: PartsResult[], progress: PartsProgress[] = [], update: "offline" | "none" = "none"): PartSteps & { asked: string[] } {
  const asked: string[] = [];
  return {
    asked,
    ensure: async (ids, onProgress, scope) => {
      asked.push(`${ids.join()} ${scope}`);
      if (scope === "all") return "ready";
      progress.forEach(onProgress);
      return results.shift() ?? "ready";
    },
    update: async (onProgress: (progress: InstallProgress) => void) => {
      onProgress({ type: "install-progress", files: 1, totalFiles: 2, bytes: 512 * 1024, totalBytes: 1024 * 1024 });
      return update;
    },
  };
}

const MB = 1024 * 1024;

test("a_cached_part_imports_without_showing_a_bar", async () => {
  const { card, shown } = recorder();
  const loaded = await openPart("player", async () => "module", card, steps(["cached"]));
  expect(loaded).toBe("module");
  expect(shown).toEqual(["clear"]);
});

test("a_download_shows_its_label_and_megabytes_then_clears_once_imported", async () => {
  const { card, shown } = recorder();
  const fill = steps(["ready"], [
    { files: 0, totalFiles: 2, bytes: 0, totalBytes: 2 * MB },
    { files: 1, totalFiles: 2, bytes: 0.5 * MB, totalBytes: 2 * MB },
  ]);
  await openPart("learn", async () => "module", card, fill);
  // The view waits for its code alone, and the route pages fill once it is open.
  expect(fill.asked).toEqual(["learn view", "learn all"]);
  expect(shown).toEqual([
    { label: "Loading Learn Piano", amount: "0.0 of 2.0 MB", value: 0 },
    { label: "Loading Learn Piano", amount: "0.5 of 2.0 MB", value: 0.25 },
    "clear",
  ]);
});

test("offline_shows_the_message_and_retry_loads_the_part", async () => {
  const { card, shown, retry } = recorder();
  const fill = steps(["offline", "ready"]);
  const loading = openPart("player", async () => "module", card, fill);
  await Bun.sleep(0);
  expect(shown).toEqual([{ message: "Just Play Piano needs the internet the first time it opens. Connect and try again." }]);
  retry();
  expect(await loading).toBe("module");
  expect(fill.asked).toEqual(["player view", "player view", "player all"]);
});

test("a_failed_import_shows_the_offline_message", async () => {
  const { card, shown } = recorder();
  void openPart("player", () => Promise.reject(new Error("no chunk")), card, steps(["ready"]));
  await Bun.sleep(0);
  expect(shown.at(-1)).toEqual({ message: "Just Play Piano needs the internet the first time it opens. Connect and try again." });
});

test("a_stale_page_shows_the_install_of_the_newest_version", async () => {
  const { card, shown } = recorder();
  void openPart("player", async () => "module", card, steps(["stale"], [], "none"));
  await Bun.sleep(0);
  expect(shown).toEqual([
    { label: "Getting the newest version", amount: "", value: 0 },
    { label: "Getting the newest version", amount: "0.5 of 1.0 MB", value: 0.5 },
    { message: "Just Play Piano could not load. Try again later." },
  ]);
});

test("a_stale_page_whose_update_cannot_reach_the_server_says_it_needs_the_internet", async () => {
  const { card, shown } = recorder();
  void openPart("player", async () => "module", card, steps(["stale"], [], "offline"));
  await Bun.sleep(0);
  expect(shown.at(-1)).toEqual({ message: "Just Play Piano needs the internet the first time it opens. Connect and try again." });
});

test("a_load_without_a_host_rejects_rather_than_updating_the_page", async () => {
  const fill = steps(["stale"]);
  let updated = false;
  fill.update = async () => {
    updated = true;
    return "none";
  };
  expect(openPart("player", async () => "module", undefined, fill)).rejects.toThrow();
  await Bun.sleep(0);
  expect(updated).toBe(false);
});

/** Every source file of `src/`, by its path from the repository's root with forward slashes. */
async function sources(): Promise<string[]> {
  const entries = await readdir("src", { recursive: true, withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ts") && !entry.name.endsWith(".test.ts") && !entry.name.endsWith(".d.ts"))
    .map((entry) => relative(".", join(entry.parentPath, entry.name)).replaceAll("\\", "/"));
}

/** The part whose root `module` is, by `PART_ROOTS`, or `undefined` for a module that starts no part. */
function partOfRoot(module: string): PartId | undefined {
  return PARTS.find((part) => PART_ROOTS[part].some((pattern) => new Bun.Glob(pattern).match(module)));
}

test("every_import_of_a_part_root_goes_through_open_part_of_its_own_part", async () => {
  const bare: string[] = [];
  let roots = 0;
  for (const file of await sources()) {
    const text = await readFile(file, "utf8");
    for (const match of text.matchAll(/import\(\s*["']([^"']+)["']\s*\)/g)) {
      if (!match[1]!.startsWith(".")) continue;
      const module = `${join(dirname(file), match[1]!).replaceAll("\\", "/")}.ts`;
      const part = partOfRoot(module);
      if (part === undefined) continue;
      roots++;
      const before = text.slice(0, match.index);
      if (new RegExp(`openPart\\(\\s*"${part}"\\s*,\\s*\\(\\)\\s*=>\\s*$`).test(before)) continue;
      const line = before.split("\n").length;
      bare.push(`${file}:${line} imports ${module} without openPart("${part}", () => import(...))`);
    }
  }
  expect(roots).toBeGreaterThan(0);
  expect(bare).toEqual([]);
});
