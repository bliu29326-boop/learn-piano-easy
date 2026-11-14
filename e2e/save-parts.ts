/**
 * Saves parts of the site for offline use by opening their views, as a learner would. A first visit saves
 * only the site's core in English, and a part's view saves the part, and every part it needs, as it
 * opens. Learn Piano's route pages follow once its view is open. A first page in another locale saves
 * that locale's files of the core and of every saved part. A test that goes offline into the player,
 * Learn Piano or a locale opens those first, and this waits until every file of theirs is saved.
 *
 * A page saves its route pages quietly, after its view shows, and a navigation cuts that save short.
 * No later page resumes it, so `openParts` waits on each page until its saves end before it opens the next.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { expect, type Page } from "@playwright/test";
import type { Locale } from "../src/i18n/locale";
import { filesIn, GROUP_INDEX, withNeeds, type GroupIndex, type PartId, type ShellGroupId } from "../src/pwa/cache-groups";

/** The run's index of the cache groups. */
export async function runIndex(): Promise<GroupIndex> {
  return JSON.parse(await readFile(join(".agent-tmp/e2e/runs", process.env.E2E_RUN!, "dist", GROUP_INDEX), "utf8")) as GroupIndex;
}

/** The paths the shell caches of the page hold, such as `/app.js`. */
export function shellPaths(page: Page): Promise<string[]> {
  return page.evaluate(async () => {
    const shell = (await caches.keys()).filter((name) => name.startsWith("shell-"));
    const keys = await Promise.all(shell.map(async (name) => (await caches.open(name)).keys()));
    return keys.flat().map((request) => new URL(request.url).pathname);
  });
}

/** Waits until the shell caches of the page hold every file of `groups` in `locales`. */
async function untilSaved(page: Page, index: GroupIndex, groups: readonly ShellGroupId[], locales: readonly Locale[]): Promise<void> {
  const paths = groups.flatMap((id) => filesIn(index.groups[id], locales).files.map((file) => file.slice(1)));
  await expect
    .poll(
      async () => {
        const held = new Set(await shellPaths(page));
        return paths.filter((path) => !held.has(path)).length;
      },
      { timeout: 90_000 },
    )
    .toBe(0);
}

/**
 * Opens the view of each of `parts`, then the landing page of each of `locales` but English, then waits
 * for the worker and for every file of the core and the parts in English and those locales.
 */
export async function openParts(page: Page, parts: readonly PartId[], locales: readonly Locale[] = []): Promise<void> {
  const index = await runIndex();
  for (const part of parts) {
    if (part === "player") {
      await page.goto("./play/");
      await expect(page.locator(".stage canvas")).toBeVisible();
    } else {
      await page.goto("./learn/");
      await expect(page.locator(".map__node").first()).toBeVisible({ timeout: 30_000 });
    }
    await untilSaved(page, index, withNeeds([part]), ["en"]);
  }
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  const saved = ["app", ...withNeeds(parts)] as const;
  for (const locale of locales) {
    await page.goto(`./${locale}/`);
    await expect(page.locator("html")).toHaveAttribute("lang", locale, { timeout: 30_000 });
    await untilSaved(page, index, saved, ["en", locale]);
  }
  await untilSaved(page, index, saved, ["en", ...locales]);
}
