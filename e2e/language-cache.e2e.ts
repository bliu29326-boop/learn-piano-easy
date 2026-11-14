/**
 * Only the languages a learner used are cached. A first visit caches its own locale and English, and a
 * language picked later downloads with a progress bar before its first page shows, then works offline.
 *
 * Every test starts past the first-visit setup of *Learn Piano*. A French file is held back a moment on
 * its way where a test looks for the bar, so the bar shows long enough to be seen.
 */
import { expect, test, type Page } from "@playwright/test";
import { pageAt, pageTitle } from "../src/site/routes";
import { loadEveryLocale } from "../src/i18n/all-catalogs";
import { pastSetup } from "./layout-check";
import { runIndex, shellPaths } from "./save-parts";

test.beforeAll(loadEveryLocale);

test.beforeEach(({ page }) => pastSetup(page));

/** How long each French script is held back. */
const HOLD = 600;

/**
 * The locale of each file of the shell groups `ids`, by its path on the server, such as
 * `/de/play/index.html`, `""` for a neutral one.
 */
async function localeByPath(ids: readonly ("app" | "player" | "learn")[] = ["app", "player", "learn"]): Promise<Map<string, string>> {
  const index = await runIndex();
  const locales = new Map<string, string>();
  for (const id of ids) {
    const group = index.groups[id];
    group.files.forEach((file, i) => locales.set(file.slice(1), group.locales[i] ?? ""));
  }
  return locales;
}

/** The paths of the core's files in `locale`. */
async function corePaths(locale: string): Promise<string[]> {
  return [...(await localeByPath(["app"]))].filter(([, of]) => of === locale).map(([path]) => path);
}

/** The locales of the files the page's shell caches hold, neutral ones left out. */
async function cachedLocales(page: Page): Promise<string[]> {
  const of = await localeByPath();
  return [...new Set((await shellPaths(page)).map((path) => of.get(path) ?? ""))].filter((locale) => locale !== "").sort();
}

/** Picks `locale` in the top bar's language switch. */
async function pick(page: Page, label: string, locale: string): Promise<void> {
  await page.locator(".site-bar-host").getByRole("combobox", { name: label }).selectOption(locale);
}

/** Waits until the shell caches hold every file of the core in `locale`. */
async function expectCached(page: Page, locale: string): Promise<void> {
  const wanted = await corePaths(locale);
  expect(wanted.length).toBeGreaterThan(0);
  await expect
    .poll(async () => {
      const held = new Set(await shellPaths(page));
      return wanted.filter((path) => !held.has(path));
    }, { timeout: 30_000 })
    .toEqual([]);
}

test("a_first_visit_to_german_caches_german_and_english_and_no_other_locale", async ({ page }) => {
  await page.goto("./de/");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await expectCached(page, "de");
  expect(await cachedLocales(page)).toEqual(["de", "en"]);
});

test("a_switch_to_french_shows_its_download_then_the_french_page_and_caches_french", async ({ page }) => {
  await page.goto("./about/");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  const french = new Set((await corePaths("fr")).filter((path) => path.endsWith(".js")));
  await page.route(
    (url) => french.has(url.pathname),
    async (route) => {
      await new Promise((resolve) => setTimeout(resolve, HOLD));
      await route.continue();
    },
  );
  await pick(page, "Language", "fr");
  // The page on screen stays English while French arrives.
  await expect(page.getByRole("progressbar", { name: "Loading Français" })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page).toHaveTitle(pageTitle(pageAt("fr/about/")!), { timeout: 30_000 });
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.getByRole("progressbar", { name: "Loading Français" })).toHaveCount(0);
  await expectCached(page, "fr");
});

test("a_language_used_once_works_offline", async ({ page, context }) => {
  await page.goto("./about/");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await pick(page, "Language", "fr");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expectCached(page, "fr");
  await context.setOffline(true);
  for (const path of ["fr/", "fr/about/", "fr/modes/"]) {
    await page.goto(`./${path}`);
    await expect(page).toHaveTitle(pageTitle(pageAt(path)!));
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  }
});

test("offline_a_new_language_says_so_and_the_page_keeps_its_own", async ({ page, context }) => {
  await page.goto("./about/");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await context.setOffline(true);
  await pick(page, "Language", "fr");
  await expect(page.getByText("Français needs the internet the first time it opens. Connect and try again.")).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await context.setOffline(false);
  await page.getByRole("button", { name: "Retry" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "fr", { timeout: 30_000 });
  await expect(page).toHaveTitle(pageTitle(pageAt("fr/about/")!));
});
