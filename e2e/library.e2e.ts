/** The song library in a real browser: the learner searches the catalog, opens a song, and finds it again on start. */
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { expect, test, type Locator, type Page } from "@playwright/test";

/** The row of the song titled `title` inside `scope`: the row whose main button carries that name. */
function rowOf(scope: Locator, title: string): Locator {
  return scope.locator(".song-row").filter({ has: scope.page().getByRole("button", { name: title, exact: true }) });
}

/**
 * The filter chip named `name` in the group named `group`, in the head or the rail. A row of a song
 * with versions holds a group named "Difficulty" too, so the rows are left out.
 */
function chip(dialog: Locator, group: string, name: string): Locator {
  return dialog.locator(".song-explorer__head, .song-explorer__rail").getByRole("group", { name: group }).getByRole("button", { name, exact: true });
}

test("a_searched_song_opens_and_reopens_on_start", async ({ page }) => {
  await page.goto("./play/");
  const title = page.getByLabel("Open song");
  await expect(title).toHaveText("Demo song");

  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("albeniz tango");
  await expect(dialog.getByText("1 song", { exact: true })).toBeVisible();
  await dialog.getByRole("button", { name: "Opus 165 'España' · Tango" }).click();

  await expect(dialog).toBeHidden();
  await expect(title).toHaveText("Opus 165 'España' · Tango");

  await page.reload();
  await expect(page.getByLabel("Open song")).toHaveText("Opus 165 'España' · Tango");
});

test("a_moved_beginner_tune_reopens_as_its_beginner_version_in_two_hands", async ({ page }) => {
  // A learner last opened the beginner tune's old file, which the library no longer holds.
  await page.addInitScript(() => {
    if (sessionStorage.getItem("seeded") !== null) return;
    sessionStorage.setItem("seeded", "1");
    localStorage.setItem("learn-piano-easy.lastSong", JSON.stringify({ source: "catalog", file: "beginner/mary-had-a-little-lamb.mid" }));
  });
  await page.goto("./play/");
  await expect(page.getByLabel("Open song")).toHaveText("Mary Had a Little Lamb, Beginner");

  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const hands = page.getByRole("dialog", { name: "Tracks" }).getByRole("combobox", { name: /^Hand of / });
  await expect(hands).toHaveCount(2);
  await expect(hands.nth(0)).toHaveValue("right");
  await expect(hands.nth(1)).toHaveValue("left");
});

test("a_mutopia_piece_shows_its_license_and_credit_and_opens", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("maple leaf");
  const row = rowOf(dialog, "Maple Leaf Rag");
  // The length's hover text names the license and who typeset the file.
  const length = row.locator(".song-row__length");
  await expect(length).toHaveAttribute("data-tip", /^Length · Public Domain · .*The Mutopia Project$/);
  await row.getByRole("button", { name: "Maple Leaf Rag", exact: true }).click();
  await expect(page.getByLabel("Open song")).toHaveText("Maple Leaf Rag");
});

test("an_original_piece_comes_first_and_opens_in_two_hands", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  // With no filter on, the catalog starts with our own pieces.
  const first = dialog.locator(".song-section[data-section='all'] .song-row").first();
  await expect(first.locator(".song-row__by")).toContainText("learn-piano-easy");
  // The composers' group shows its eight largest first, so this chip is read where it waits behind "more".
  const composer = dialog.locator(".song-explorer__rail .tag[data-kind='composer']").filter({ hasText: "learn-piano-easy" });
  await expect(composer.locator(".tag__count")).toHaveText("13");

  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("twelve bar walk");
  const row = rowOf(dialog, "Twelve-Bar Walk");
  // A piece with one version is its own Original, so its row's one step names it.
  await expect(row.locator(".song-step")).toHaveCount(1);
  await expect(row.locator(".song-step")).toHaveAccessibleName("Original");
  await expect(row.locator(".song-row__kicker")).toHaveCount(0);
  await expect(row.locator(".song-row__length")).toHaveAttribute("data-tip", "Length · MIT · Composed by the learn-piano-easy authors");
  await row.getByRole("button", { name: "Twelve-Bar Walk", exact: true }).click();
  await expect(page.getByLabel("Open song")).toHaveText("Twelve-Bar Walk");

  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const hands = page.getByRole("dialog", { name: "Tracks" }).getByRole("combobox", { name: /^Hand of / });
  await expect(hands).toHaveCount(2);
});

test("the_beginner_path_comes_first_and_opens_its_steps", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  const count = dialog.locator(".library-count");
  const path = dialog.locator(".song-section[data-section='path']");
  const all = dialog.locator(".song-section[data-section='all']");

  // A learner who played nothing yet finds the path's first step as the first row of the page.
  const first = dialog.locator(".song-row").first();
  await expect(first.locator(".song-row__open")).toHaveAccessibleName("Canon in D, Beginner");
  await expect(first.locator(".song-row__step")).toHaveText("Step 1");
  await expect(path.locator(".song-row").first().locator(".song-row__open")).toHaveAccessibleName("Canon in D, Beginner");
  await expect(path.locator(".song-row")).toHaveCount(6);

  // The whole path is the tag "Beginner path", sorted from its first step on. It counts each song once.
  await path.getByRole("button", { name: "Show all 111 songs" }).click();
  await expect(count).toHaveText("111 songs");
  await expect(dialog.getByRole("combobox", { name: "Sort by" })).toHaveValue("difficulty");
  await expect(all.locator(".song-row__open").first()).toHaveAccessibleName("Canon in D, Beginner");
  // The rows draw a chunk at a time, so the list scrolls down until the step's row is drawn.
  const candeur = all.getByRole("button", { name: "25 Easy Studies, Opus 100 · No. 1: La Candeur", exact: true });
  const scroller = dialog.locator(".song-explorer__results");
  await expect
    .poll(async () => {
      await scroller.evaluate((node) => node.scrollTo(0, node.scrollHeight));
      return candeur.count();
    })
    .toBe(1);
  await expect(candeur).toBeVisible();

  // The level "Easy" keeps the path's steps of that level, so the path starts at the first of them
  // and a song of ours shows its Easy version.
  await chip(dialog, "Difficulty", "Easy").click();
  await expect(count).toHaveText("84 songs");
  await expect(all.locator(".song-row__open").first()).toHaveAccessibleName("Morning Light");
  await expect(rowOf(all, "Canon in D, Easy")).toHaveCount(1);
  await expect(rowOf(all, "Canon in D, Beginner")).toHaveCount(0);
  await expect
    .poll(async () => {
      await scroller.evaluate((node) => node.scrollTo(0, node.scrollHeight));
      return candeur.count();
    })
    .toBe(1);
  await candeur.click();
  await expect(page.getByLabel("Open song")).toHaveText("25 Easy Studies, Opus 100 · No. 1: La Candeur");

  // With no filter on, the path leads the page again. A search hides it.
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  await dialog.getByRole("button", { name: "Clear all" }).click();
  await expect(path).toBeVisible();
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("candeur");
  await expect(count).toHaveText("1 song");
  await expect(path).toHaveCount(0);
});

test("the_library_opens_a_song_at_each_rarity", async ({ page }) => {
  await page.goto("./play/");
  const title = page.getByLabel("Open song");
  const dialog = page.getByRole("dialog", { name: "Songs" });
  const search = dialog.getByRole("searchbox", { name: "Search songs" });
  const count = dialog.locator(".library-count");
  const rows = dialog.locator(".song-row");
  const open = rows.locator(".song-row__open");
  const steps = rows.getByRole("group", { name: "Difficulty" });
  const versions = { Beginner: "common", Easy: "rare", Medium: "epic", Hard: "legendary" };
  for (const [name, id] of Object.entries(versions)) {
    await page.getByRole("button", { name: "Songs", exact: true }).click();
    await search.fill("ode to joy");
    // The song is one row whatever its versions, and a step puts its version on that row.
    await expect(rows).toHaveCount(1);
    await expect(rows).toHaveAttribute("data-song", "ode-to-joy");
    await steps.getByRole("button", { name, exact: true }).click();
    await expect(rows).toHaveAttribute("data-id", `catalog:ours/ode-to-joy/${id}.mid`);
    await expect(open).toHaveAccessibleName(`Ode to Joy, ${name}`);
    await open.click();
    await expect(dialog).toBeHidden();
    await expect(title).toHaveText(`Ode to Joy, ${name}`);
  }

  // A level chip keeps the song by its version of that level, and the row shows that version, not the one last played.
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const medium = chip(dialog, "Difficulty", "Medium");
  const easy = chip(dialog, "Difficulty", "Easy");
  const original = chip(dialog, "Difficulty", "Original");
  await expect(open).toHaveAccessibleName("Ode to Joy, Hard");
  await medium.click();
  await expect(count).toHaveText("1 song");
  await expect(open).toHaveAccessibleName("Ode to Joy, Medium");
  await expect(rows).toHaveAttribute("data-id", "catalog:ours/ode-to-joy/epic.mid");
  await expect(steps.getByRole("button", { name: "Medium", exact: true })).toHaveAttribute("aria-pressed", "true");
  // A level none of its versions has hides the song. Ode to Joy has no Original yet.
  await medium.click();
  await original.click();
  await expect(count).toHaveText("0 songs");
  await expect(rows).toHaveCount(0);
  // An original score is its song's last step, so the Original chip keeps the song and the row shows it.
  await search.fill("für elise");
  await expect(count).toHaveText("1 song");
  await expect(open).toHaveAccessibleName("Für Elise");
  await expect(steps.getByRole("button", { name: "Original", exact: true })).toHaveAttribute("aria-pressed", "true");

  // A second level widens the result, and a song with a version at each still counts once.
  await search.fill("");
  await original.click();
  await medium.click();
  await expect(count).toHaveText("123 songs");
  await easy.click();
  await expect(count).toHaveText("139 songs");
});

test("a_song_is_one_row_and_a_step_picks_its_version", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  // The skills arrive a moment after the first open and draw the rows anew, which would take a step's focus.
  await expect(dialog.locator(".song-explorer__rail").getByRole("group", { name: "Skill" })).toBeVisible({ timeout: 15_000 });
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("für elise");
  await expect(dialog.locator(".library-count")).toHaveText("1 song");
  const row = dialog.locator(".song-row");
  await expect(row).toHaveCount(1);

  // The versions are steps from the easiest, with the composer's own score last. The easiest shows first.
  const open = row.locator(".song-row__open");
  const steps = row.getByRole("group", { name: "Difficulty" }).getByRole("button");
  const names = ["Beginner", "Easy", "Medium", "Hard", "Original"];
  await expect(steps).toHaveCount(names.length);
  for (const [i, name] of names.entries()) {
    await expect(steps.nth(i)).toHaveAccessibleName(name);
    await expect(steps.nth(i)).toHaveAttribute("aria-pressed", String(name === "Beginner"));
  }
  await expect(open).toHaveAccessibleName("Für Elise, Beginner");

  // A step shows its version on the row in place, and the row then opens that version.
  await steps.nth(3).click();
  await expect(open).toHaveAccessibleName("Für Elise, Hard");
  await expect(row).toHaveAttribute("data-id", "catalog:ours/fur-elise/legendary-2.mid");
  for (const [i, name] of names.entries()) await expect(steps.nth(i)).toHaveAttribute("aria-pressed", String(name === "Hard"));
  await expect(steps.nth(3)).toBeFocused();
  await open.click();
  await expect(dialog).toBeHidden();
  await expect(page.getByLabel("Open song")).toHaveText("Für Elise, Hard");

  // Opening a version forgets the pick, so the row now shows Hard as the version last played.
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  await expect(row).toHaveCount(1);
  await expect(open).toHaveAccessibleName("Für Elise, Hard");
  await expect(steps.nth(3)).toHaveAttribute("aria-pressed", "true");
  await expect(steps.nth(0)).toHaveAttribute("aria-pressed", "false");
});

test("the_library_lists_the_christmas_songs", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  // Christmas is the first collection the rail offers, with how many songs it holds.
  const christmas = dialog.locator(".song-explorer__rail").getByRole("group", { name: "Collection" }).getByRole("button").first();
  await expect(christmas).toHaveAccessibleName("Christmas");
  await expect(christmas.locator(".tag__count")).toHaveText(/^\d+$/);
  await christmas.click();
  await expect(christmas).toHaveAttribute("aria-pressed", "true");
  await expect(dialog.locator(".song-row .library-title").first()).toHaveText("Jingle Bells");

  // A song's other title finds it with no tag on, as one row that shows its easiest version.
  await christmas.click();
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("one horse open sleigh");
  await expect(dialog.locator(".library-count")).toHaveText("1 song");
  await expect(dialog.locator(".song-row .library-title")).toHaveText(["Jingle Bells"]);
  await dialog.getByRole("button", { name: "Jingle Bells, Beginner", exact: true }).click();
  await expect(page.getByLabel("Open song")).toHaveText("Jingle Bells, Beginner");
});

test("the_library_lists_the_film_songs", async ({ page }) => {
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  // "At the movies" is the collection after Christmas, and it holds the film songs of ours.
  const collections = dialog.locator(".song-explorer__rail").getByRole("group", { name: "Collection" }).getByRole("button");
  const film = collections.nth(1);
  await expect(film).toHaveAccessibleName("At the movies", { timeout: 15_000 });
  await film.click();
  await expect(film).toHaveAttribute("aria-pressed", "true");
  const titles = dialog.locator(".song-row .library-title");
  await expect(titles.filter({ hasText: /^Canon in D$/ })).toHaveCount(1);
  await expect(titles.filter({ hasText: /^The Entertainer$/ })).toHaveCount(1);
  await expect(titles.filter({ hasText: /^Jingle Bells$/ })).toHaveCount(0);

  // The search finds the collection by the name the learner reads.
  await film.click();
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("at the movies");
  await expect(titles.filter({ hasText: /^Ode to Joy$/ })).toHaveCount(1);
});

test("an_added_file_stays_reopens_and_deletes", async ({ page }) => {
  const bytes = readFileSync(join(import.meta.dirname, "..", "public", "songs", "piano-midi", "alb_esp2.mid"));
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  const chooser = page.waitForEvent("filechooser");
  await dialog.getByRole("button", { name: "Add MIDI or MusicXML files" }).click();
  await (await chooser).setFiles({ name: "my waltz.mid", mimeType: "audio/midi", buffer: bytes });

  await expect(page.getByLabel("Open song")).toHaveText("my waltz");
  await page.reload();
  await expect(page.getByLabel("Open song")).toHaveText("my waltz");

  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const own = dialog.getByRole("region", { name: "Your songs" });
  await expect(own.getByRole("button", { name: "my waltz", exact: true })).toBeVisible();
  await own.getByRole("button", { name: "Delete my waltz" }).click();
  await expect(own.getByRole("button", { name: "my waltz", exact: true })).toBeHidden();
  await expect(own.getByText("drop them anywhere")).toBeVisible();
});

test("an_added_musicxml_score_opens_with_a_track_per_staff", async ({ page }) => {
  const note = (step: string, staff: number) =>
    `<note><pitch><step>${step}</step><octave>${staff === 1 ? 5 : 3}</octave></pitch><duration>4</duration><staff>${staff}</staff></note>`;
  const score = `<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="4.0">
  <part-list><score-part id="P1"><part-name>Piano</part-name></score-part></part-list>
  <part id="P1">
    <measure number="1">
      <attributes><divisions>1</divisions><staves>2</staves></attributes>
      ${note("C", 1)}<backup><duration>4</duration></backup>${note("C", 2)}
    </measure>
    <measure number="2">${note("G", 1)}<backup><duration>4</duration></backup>${note("G", 2)}</measure>
  </part>
</score-partwise>`;
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const chooser = page.waitForEvent("filechooser");
  await page.getByRole("dialog", { name: "Songs" }).getByRole("button", { name: "Add MIDI or MusicXML files" }).click();
  await (await chooser).setFiles({ name: "my minuet.musicxml", mimeType: "application/xml", buffer: Buffer.from(score) });

  await expect(page.getByLabel("Open song")).toHaveText("my minuet");
  await page.getByRole("button", { name: "Tracks", exact: true }).click();
  const hands = page.getByRole("dialog", { name: "Tracks" }).getByRole("combobox", { name: /^Hand of / });
  await expect(hands).toHaveCount(2);
});

test("a_file_the_installed_app_is_launched_with_opens", async ({ page }) => {
  const bytes = [...readFileSync(join(import.meta.dirname, "..", "public", "songs", "piano-midi", "alb_esp2.mid"))];
  // The browser hands an installed app's launch files to `window.launchQueue`, so a stand-in plays that part.
  await page.addInitScript((data) => {
    const file = new File([new Uint8Array(data)], "launched song.mid", { type: "audio/midi" });
    Object.defineProperty(window, "launchQueue", {
      value: { setConsumer: (consume: (params: unknown) => void) => consume({ files: [{ getFile: async () => file }] }) },
    });
  }, bytes);
  await page.goto("./play/");
  await expect(page.getByLabel("Open song")).toHaveText("launched song");
});

test("a_file_launched_on_another_page_opens_in_the_player", async ({ page }) => {
  const bytes = [...readFileSync(join(import.meta.dirname, "..", "public", "songs", "piano-midi", "alb_esp2.mid"))];
  await page.addInitScript((data) => {
    const file = new File([new Uint8Array(data)], "launched song.mid", { type: "audio/midi" });
    Object.defineProperty(window, "launchQueue", {
      value: { setConsumer: (consume: (params: unknown) => void) => consume({ files: [{ getFile: async () => file }] }) },
    });
  }, bytes);
  await page.goto("./about/");
  await expect(page).toHaveURL(/\/play\/$/);
  await expect(page.getByLabel("Open song")).toHaveText("launched song");
});

test("a_file_dropped_on_the_landing_page_opens_in_the_player", async ({ page }) => {
  const bytes = [...readFileSync(join(import.meta.dirname, "..", "public", "songs", "piano-midi", "alb_esp2.mid"))];
  await page.goto("./");
  const drop = await page.evaluateHandle((data) => {
    const transfer = new DataTransfer();
    transfer.items.add(new File([new Uint8Array(data)], "dropped song.mid", { type: "audio/midi" }));
    return transfer;
  }, bytes);
  await page.dispatchEvent("#app", "dragover", { dataTransfer: drop });
  await expect(page.locator("#app")).toHaveClass(/drop-target/);
  await page.dispatchEvent("#app", "drop", { dataTransfer: drop });
  await expect(page).toHaveURL(/\/play\/$/);
  await expect(page.getByLabel("Open song")).toHaveText("dropped song");
});

/** Starts the page with a 61-key keyboard, C2 to C7, which some of the catalog's songs reach past. */
async function sixtyOneKeys(page: Page): Promise<void> {
  await page.addInitScript(() => {
    if (localStorage.getItem("learn-piano-easy.settings") !== null) return;
    const values = { keyboardFirstNote: 36, keyboardLastNote: 96 };
    localStorage.setItem("learn-piano-easy.settings", JSON.stringify({ version: 1, values }));
  });
}

test("a_song_wider_than_the_keyboard_offers_to_fold_its_notes", async ({ page }) => {
  await sixtyOneKeys(page);
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("albeniz tango");
  await dialog.getByRole("button", { name: "Opus 165 'España' · Tango" }).click();

  const toast = page.getByRole("status").filter({ hasText: "notes outside your keyboard" });
  await toast.getByRole("button", { name: "Move them onto your keys" }).click();
  await expect(toast).toBeHidden();
  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.getByRole("switch", { name: "Move notes outside your keys into range" })).toBeChecked();
});

test("fits_my_keyboard_hides_songs_wider_than_the_keys", async ({ page }) => {
  await sixtyOneKeys(page);
  await page.goto("./play/");
  await page.getByRole("button", { name: "Songs", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Songs" });
  const count = dialog.locator(".library-count");
  await expect(count).toHaveText(/^\d+ songs$/);
  const all = Number((await count.textContent())?.split(" ")[0]);

  await dialog.getByRole("switch", { name: "Fits my keyboard" }).check();
  await expect(count).not.toHaveText(`${all} songs`);
  // Albéniz's Tango reaches A1, below C2.
  await dialog.getByRole("searchbox", { name: "Search songs" }).fill("albeniz tango");
  await expect(count).toHaveText("0 songs");

  await dialog.getByRole("switch", { name: "Fits my keyboard" }).uncheck();
  await expect(count).toHaveText("1 song");
});
