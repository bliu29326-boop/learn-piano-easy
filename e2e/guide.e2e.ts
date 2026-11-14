/** The guide of a song of ours in a real browser: the learner reads it and applies a practice step. */
import { expect, test, type Page } from "@playwright/test";

import { CATALOGS } from "../src/i18n/all-catalogs";

/** The settings the page keeps in `localStorage`: only those that differ from their defaults. */
function storedSettings(page: Page): Promise<Record<string, unknown>> {
  return page.evaluate(() => JSON.parse(localStorage.getItem("learn-piano-easy.settings") ?? "{}").values ?? {});
}

/**
 * A point on the first right-hand note of Ode to Joy, Beginner, E4, in the default 1280 by 720 view.
 * With no lead-in the song rests at its first note until Play, so the note stays there.
 */
const FIRST_NOTE = { x: 628, y: 400 };

/** How long the camera takes to settle after a load, with room to spare, in milliseconds. */
const CAMERA_SETTLE_MS = 2000;

/** Opens Ode to Joy, Beginner from the library. The song's card shows that version until another is picked. */
async function openOdeToJoy(page: Page): Promise<void> {
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const songs = page.getByRole("dialog", { name: "Songs" });
  await songs.getByRole("searchbox", { name: "Search songs" }).fill("ode to joy");
  await songs.getByRole("button", { name: "Ode to Joy, Beginner" }).click();
  await expect(page.getByLabel("Open song")).toHaveText("Ode to Joy, Beginner");
}

test("the_song_shows_its_own_fingers_and_start_keys", async ({ page }) => {
  await page.goto("./play/");
  // No lead-in, so the song rests with its first note on the keys.
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("spinbutton", { name: "Time before the first note (s)" }).fill("0");
  await page.keyboard.press("Tab");
  await page.getByRole("button", { name: "Close settings" }).click();
  await openOdeToJoy(page);
  await expect(page.getByRole("button", { name: "Guide", exact: true })).toBeVisible();

  // Before the first note, the hands' start keys light, and the canvas names them.
  const piano = page.locator("canvas");
  await expect(piano).toHaveAttribute("aria-label", /start keys C3 D3 G3 C4 D4 E4 F4 G4/);

  // The tune's first note is E4, which the guide gives finger 3 where the search would give its own.
  const status = page.getByRole("status", { name: "Selected note" });
  await page.waitForTimeout(CAMERA_SETTLE_MS);
  await page.mouse.click(FIRST_NOTE.x, FIRST_NOTE.y);
  await expect(status).toContainText("E4: finger 3, from the guide");
  // A finger the learner sets wins over the guide's.
  await page.keyboard.press("Digit2");
  await expect(status).toContainText("E4: finger 2, set by you");
  await page.keyboard.press("Escape");

  // The start keys go dark once the song moves past its first note.
  await page.mouse.move(640, 680);
  await page.getByRole("button", { name: "Play", exact: true }).click();
  await expect(piano).not.toHaveAttribute("aria-label", /start keys/);
});

test("a_practice_step_sets_hands_speed_and_loop", async ({ page }) => {
  await page.goto("./play/");
  const guide = page.getByRole("button", { name: "Guide", exact: true });
  await expect(guide).toBeHidden();
  await openOdeToJoy(page);

  await guide.click();
  const dialog = page.getByRole("dialog", { name: "Guide to Ode to Joy, Beginner" });
  await expect(dialog.getByRole("heading", { name: "Fun fact" })).toBeVisible();
  await expect(dialog.getByText("Five-finger position")).toBeVisible();
  await expect(dialog.getByText("Right hand, 60%, bars 1–4, waits for you")).toBeVisible();
  await dialog.getByRole("button", { name: "Apply step 1" }).click();
  await expect(dialog).toBeHidden();

  const speed = page.getByRole("group", { name: "Speed" }).locator("output");
  const loop = page.getByRole("button", { name: "Loop", exact: true });
  await expect(speed).toHaveText("60%");
  await expect(loop).toHaveAttribute("aria-pressed", "true");
  const set = await storedSettings(page);
  expect(set).toMatchObject({ playHands: "right", enableLoop: true, loopEnd: 4, waitForNotes: true });
  // The loop's first measure is 1, its default, which the store leaves out.
  expect(set.loopStart ?? 1).toBe(1);

  // The last step plays the whole song with both hands, so it turns the loop and wait mode off.
  await guide.click();
  await dialog.getByRole("button", { name: "Apply step 4" }).click();
  // Back at 100%, the speed leaves the bar with the other expert tools.
  await expect(page.getByRole("group", { name: "Speed" })).toBeHidden();
  await expect(loop).toHaveAttribute("aria-pressed", "false");
  const values = await storedSettings(page);
  expect(values.playHands).toBeUndefined();
  expect(values.enableLoop).toBeUndefined();
  expect(values.waitForNotes).toBeUndefined();
});

test("the_original_of_ours_shows_its_guide", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const songs = page.getByRole("dialog", { name: "Songs" });
  await songs.getByRole("searchbox", { name: "Search songs" }).fill("morning mood");
  // The card's last step is the Original, and its hover text says we set it for two hands. The level
  // filter's Original chip shares the name, so the step is the button that is also a `.song-step`.
  const original = songs.locator(".song-step").and(songs.getByRole("button", { name: "Original", exact: true }));
  await expect(original).toHaveAttribute("data-tip", "Original: The piece as its score has it, set for two hands.");
  await original.click();

  // The Original opens our own file, not a catalog score.
  const file = page.waitForResponse((response) => response.url().endsWith("songs/ours/morning-mood/mythic.mid"));
  await songs.getByRole("button", { name: "Morning Mood, Original" }).click();
  await file;
  await expect(page.getByLabel("Open song")).toHaveText("Morning Mood, Original");

  // Its guide names it, says what it is, and plans its practice like a version's.
  await page.getByRole("button", { name: "Guide", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Guide to Morning Mood, Original" });
  await expect(dialog.locator(".library-rarity[data-rarity='mythic']")).toHaveText("Original");
  await expect(dialog.getByText("The piece as its score has it, set for two hands.", { exact: false })).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "Tricky spots" })).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Apply step 1" })).toBeVisible();
});

test("the_guide_reads_in_the_pages_language", async ({ page }) => {
  const de = CATALOGS.de.player;
  await page.goto("./de/play/");
  await page.getByRole("button", { name: de.shell.topbar.songs, exact: true }).click();
  const songs = page.getByRole("dialog", { name: de.shell.dialog.songs });
  await songs.getByRole("searchbox", { name: de.library.panel.search.label }).fill("silent night");
  const title = `Silent Night, ${de.library.panel.levels.beginner}`;
  await songs.getByRole("button", { name: title }).click();
  await expect(page.getByLabel(de.shell.topbar.openSong)).toHaveText(title);

  // Silent Night carries German text, so its story and its first practice step read in German.
  await page.getByRole("button", { name: de.shell.topbar.guide, exact: true }).click();
  const dialog = page.getByRole("dialog", { name: de.shell.dialog.guide(title) });
  await expect(dialog.getByRole("heading", { name: de.library.guide.headings.about })).toBeVisible();
  await expect(dialog.getByText("Franz Xaver Gruber schrieb diese Melodie", { exact: false })).toBeVisible();
  await expect(dialog.getByText("Spiel die ersten vier Takte nur mit der rechten Hand", { exact: false })).toBeVisible();
});
