/**
 * Saves parts of the site for offline use by opening their views, as a learner would. A first visit saves
 * only the site's core, and a part's view saves the part, and every part it needs, before it opens. A
 * test that goes offline into the player or Learn Piano opens those views first.
 */
import { expect, type Page } from "@playwright/test";

/** A part of the site, by the view that opens it: the player, or Learn Piano's map. */
export type PartView = "player" | "learn";

/** Opens the view of each of `parts`, and then waits for the worker, so a reload offline finds them. */
export async function openParts(page: Page, parts: readonly PartView[]): Promise<void> {
  for (const part of parts) {
    if (part === "player") {
      await page.goto("./play/");
      await expect(page.locator(".stage canvas")).toBeVisible();
    } else {
      await page.goto("./learn/");
      await expect(page.locator(".map__node").first()).toBeVisible();
    }
  }
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
}
