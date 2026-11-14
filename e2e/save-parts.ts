/**
 * Saves parts of the site for offline use by opening their views, as a learner would. A first visit saves
 * only the site's core, and a part's view saves the part, and every part it needs, as it opens. Learn
 * Piano's route pages follow once its view is open. A test that goes offline into the player or Learn
 * Piano opens those views first, and this waits until every file of theirs is saved.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { expect, type Page } from "@playwright/test";
import { GROUP_INDEX, withNeeds, type GroupIndex, type PartId } from "../src/pwa/cache-groups";

/** Opens the view of each of `parts`, then waits for the worker and for every file of the parts. */
export async function openParts(page: Page, parts: readonly PartId[]): Promise<void> {
  for (const part of parts) {
    if (part === "player") {
      await page.goto("./play/");
      await expect(page.locator(".stage canvas")).toBeVisible();
    } else {
      await page.goto("./learn/");
      await expect(page.locator(".map__node").first()).toBeVisible({ timeout: 30_000 });
    }
  }
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  const index = JSON.parse(await readFile(join(".agent-tmp/e2e/runs", process.env.E2E_RUN!, "dist", GROUP_INDEX), "utf8")) as GroupIndex;
  const paths = withNeeds(parts).flatMap((part) => index.groups[part].files.map((file) => file.slice(1)));
  await expect
    .poll(
      () =>
        page.evaluate(async (wanted) => {
          const shell = (await caches.keys()).filter((name) => name.startsWith("shell-"));
          const held = new Set((await Promise.all(shell.map(async (name) => (await caches.open(name)).keys()))).flat().map((r) => new URL(r.url).pathname));
          return wanted.filter((path) => !held.has(path)).length;
        }, paths),
      { timeout: 90_000 },
    )
    .toBe(0);
}
