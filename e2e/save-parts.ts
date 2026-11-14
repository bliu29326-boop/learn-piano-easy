/**
 * Saves parts of the site for offline use through the player's *Offline files* dialog, as a learner
 * would. A first visit saves only the site's core, so a test that goes offline into the player or Learn
 * Piano saves those parts first.
 */
import { expect, type Page } from "@playwright/test";

/** The labels of the parts the dialog saves, as its headings name them. */
export type PartLabel = "Just Play Piano" | "Learn Piano";

/** Opens the player, waits for the worker, and saves each of `parts` in the dialog, which it then closes. */
export async function saveParts(page: Page, parts: readonly PartLabel[]): Promise<void> {
  await page.goto("./play/");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Manage offline files" }).click();
  const dialog = page.getByRole("dialog", { name: "Offline files" });
  for (const label of parts) {
    const group = dialog.locator(".cache-group").filter({ has: page.getByRole("heading", { name: label, exact: true }) });
    await group.getByRole("button", { name: `Save ${label}` }).click();
    await expect(group.getByRole("status")).toContainText("all saved", { timeout: 60_000 });
  }
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
}
