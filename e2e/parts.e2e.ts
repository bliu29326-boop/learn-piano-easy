/**
 * The shell's parts on first use: each view that needs the player or Learn Piano shows a progress bar
 * while the part downloads, then opens, and the part stays saved. Offline, the view says it needs the
 * internet once, and its button tries again.
 *
 * The parts' scripts are held back a moment on their way, so a bar shows long enough to be seen.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { expect, test, type Page } from "@playwright/test";
import { GROUP_INDEX, type GroupIndex, type PartId } from "../src/pwa/cache-groups";

/** How long each file of a part is held back. */
const HOLD = 400;

/** The run's index of the cache groups. */
async function runIndex(): Promise<GroupIndex> {
  return JSON.parse(await readFile(join(".agent-tmp/e2e/runs", process.env.E2E_RUN!, "dist", GROUP_INDEX), "utf8")) as GroupIndex;
}

/** The paths of the files of `parts`, as the server serves them at its root, such as `/parse-worker.js`. */
async function partPaths(parts: readonly PartId[]): Promise<Set<string>> {
  const index = await runIndex();
  return new Set(parts.flatMap((part) => index.groups[part].files.map((file) => file.slice(1))));
}

/**
 * Holds back every request for a script of `parts` by `HOLD` milliseconds. Learn Piano holds a page per
 * lesson and locale, so its other files pass at once, and the hold stays a few seconds.
 */
async function holdParts(page: Page, parts: readonly PartId[]): Promise<void> {
  const paths = await partPaths(parts);
  await page.route(
    (url) => paths.has(url.pathname) && url.pathname.endsWith(".js"),
    async (route) => {
      await new Promise((resolve) => setTimeout(resolve, HOLD));
      await route.continue();
    },
  );
}

/** The paths every shell cache of the page holds. */
function shellPaths(page: Page): Promise<string[]> {
  return page.evaluate(async () => {
    const shell = (await caches.keys()).filter((name) => name.startsWith("shell-"));
    const keys = await Promise.all(shell.map(async (name) => (await caches.open(name)).keys()));
    return keys.flat().map((request) => new URL(request.url).pathname);
  });
}

/** Expects every file of `parts` in a shell cache of the page. */
async function expectSaved(page: Page, parts: readonly PartId[]): Promise<void> {
  const held = new Set(await shellPaths(page));
  expect([...(await partPaths(parts))].filter((path) => !held.has(path))).toEqual([]);
}

test("a_first_open_of_the_player_shows_its_download_then_the_player_and_saves_it", async ({ page }) => {
  await holdParts(page, ["player"]);
  await page.goto("./play/");
  const bar = page.getByRole("progressbar", { name: "Loading Just Play Piano" });
  await expect(bar).toBeVisible();
  await expect(page.locator(".loading__amount")).toContainText(/of \d+\.\d MB/);
  await expect(page.locator(".stage canvas")).toBeVisible({ timeout: 30_000 });
  await expect(bar).toHaveCount(0);
  await expectSaved(page, ["player"]);
});

test("a_first_click_on_a_landing_box_shows_the_download_in_the_box_then_plays", async ({ page }) => {
  await holdParts(page, ["player"]);
  await page.goto("./");
  const hero = page.locator(".landing-hero");
  const box = hero.locator(".player-box");
  await hero.getByRole("button", { name: "Play it" }).click();
  await expect(box.getByRole("progressbar", { name: "Loading Just Play Piano" })).toBeVisible();
  await expect(box).toHaveAttribute("data-state", "loading");
  await expect(hero.getByRole("button", { name: "Stop" })).toHaveAttribute("aria-busy", "true");
  await expect(box.locator("canvas")).toBeVisible({ timeout: 30_000 });
  await expect(box).toHaveAttribute("data-state", "player");
  await expect(box.getByRole("progressbar", { name: "Loading Just Play Piano" })).toHaveCount(0);
});

test("a_first_open_of_the_learn_map_loads_learn_piano_and_the_player", async ({ page }) => {
  await holdParts(page, ["learn"]);
  await page.goto("./learn/");
  await expect(page.getByRole("progressbar", { name: "Loading Learn Piano" })).toBeVisible();
  await expect(page.locator(".map__node").first()).toBeVisible({ timeout: 60_000 });
  await expectSaved(page, ["player", "learn"]);
});

test("offline_a_first_open_says_so_and_retry_loads_the_player_once_online", async ({ page, context }) => {
  await page.goto("./");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await context.setOffline(true);
  await page.locator("[data-top-bar]").getByRole("link", { name: "Just Play Piano" }).click();
  await expect(page.getByText("Just Play Piano needs the internet the first time it opens. Connect and try again.")).toBeVisible();
  await context.setOffline(false);
  await page.getByRole("button", { name: "Retry" }).click();
  await expect(page.locator(".stage canvas")).toBeVisible({ timeout: 30_000 });
  await expectSaved(page, ["player"]);
});

test("the_offline_dialog_saves_learn_piano_with_the_player_and_removes_both_with_the_player", async ({ page }) => {
  await page.goto("./play/");
  await expect(page.locator(".stage canvas")).toBeVisible({ timeout: 30_000 });
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Manage offline files" }).click();
  const dialog = page.getByRole("dialog", { name: "Offline files" });
  const group = (label: string) => dialog.locator(".cache-group").filter({ has: page.getByRole("heading", { name: label, exact: true }) });
  // The player is saved, since it is open. Removing it leaves neither part saved.
  await group("Just Play Piano").getByRole("button", { name: "Remove Just Play Piano" }).click();
  await expect(group("Just Play Piano").getByRole("status")).toContainText("not saved");

  await holdParts(page, ["player", "learn"]);
  await group("Learn Piano").getByRole("button", { name: "Save Learn Piano" }).click();
  await expect(group("Learn Piano").getByRole("progressbar", { name: "Saving Learn Piano" })).toBeVisible();
  await expect(group("Learn Piano").getByRole("status")).toContainText("all saved", { timeout: 60_000 });
  await expect(group("Just Play Piano").getByRole("status")).toContainText("all saved");

  await group("Just Play Piano").getByRole("button", { name: "Remove Just Play Piano" }).click();
  await expect(group("Just Play Piano").getByRole("status")).toContainText("not saved");
  await expect(group("Learn Piano").getByRole("status")).toContainText("not saved");
});
