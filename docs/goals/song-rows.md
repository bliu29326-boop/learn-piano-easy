---
looper: 1
title: Song rows
summary: "The song explorer lists songs as rows that read work, part and composer, and a work's parts open from one row."
context: [public/songs/catalog.json, tools/catalog.ts, src/library/search.ts, src/library/library-panel.ts, src/library/library-panel.css]
stages:
  - id: 1
    title: The catalog names each part of a work
    status: done
  - id: 2
    title: The explorer lists songs as rows
    status: open
  - id: 3
    title: "A work's parts open from its row"
    status: open
  - id: 4
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: parts-named
    stage: 1
    name: every part of a work reads as its own name or as its place in the work
    run: [bun, test, src/library/parts.test.ts]
    tests: [every_part_of_a_work_has_a_name_or_a_place, a_part_reads_its_place_in_the_live_locale]
---

# Song rows

## Why

The explorer's cards put a part's place in the biggest type, such as "3. Movement". The work it belongs
to and its composer shrink to one cut line below. 215 of 385 catalog rows hold such a title, which
means nothing alone. The catalog also writes a place in eight ways, such as "1st Mvmt.", "1. Movement"
and "No. 3, 'La Campanella'", in English only. A card carries no picture, so a list of 700 songs reads
faster as rows, and a work's parts read best together under it.

## Standing decisions

- **A part of a work carries `part`, `kind` and `name` in the catalog.** `part` is its place from 1,
  `kind` says how the place reads, and `name` is its own name, such as "Alla Turca".
- **`kind` is `movement`, `number` or `variation`.** It reads as "Movement 3" or "3. Satz", "No. 3" or
  "Nr. 3", and "Variation 3". A part with neither `part` nor `name` does not exist.
- **A part's `title` is its English label,** such as "Movement 3: Alla Turca". `songTitle` names its
  work first in the live locale, so the player's head reads "Sonata No. 11 · Movement 3".
- **A row is a part when it has `part` or `name` beside a `piece`.** A `piece` that only sorts, such as
  "Rags" or "Modern pieces", gives its songs no part, so they stand alone.
- **A work of one row whose title repeats it** takes the work as its title, and its `piece` becomes
  null. *Ballade G minor, Opus 23* is one.
- **The catalog owns the parts of the piano-midi rows,** and `tools/mutopia-picks.json` owns those of
  the Mutopia rows. A one-off script wrote both and was deleted. The test guards them.
- **Catalogue numbers stay inside the work's name,** such as "Hoboken XVI:7". Splitting them out would
  need a parser per catalogue, and the row has the width to show them.
- **A row reads the work or the song's title first, then the composer.** A part in a list of its own,
  such as the recent songs, reads as its work and its label in one line.
- **The tags leave the row.** The rail filters by them, and the composer is on the row's second line.
  The license moves into the length's tooltip.
- **The class names follow the shape:** `song-card` becomes `song-row`, in the panel, its CSS and the
  e2e tests.
- **A work's row stands where its first matching part would stand** under the sort. Its parts keep
  the work's order inside it.
- **A filter or a query opens every work it matches,** showing only the matching parts. With no filter,
  a work starts closed, and the learner opens it.
- **The arrow keys move between rows,** an open work's parts included. Right opens a work, and Left
  closes it.
- **Trade-offs.** Performance: a row is a smaller tree than a card, and a closed work draws no parts.
  Memory: three optional fields per part row, about 6 KB in the catalog. Usability: about three times
  the songs per screen, and 80 works fold 215 parts. The cost is a click to reach a part, and no tags at
  a glance. Simplicity: one row element replaces the card, and the grouping is one pure function.
- **The goal works in `main`,** in the project's own tree, with no branch and no worktree.
- **Lanes:** the three stages share `src/library/library-panel.ts` and run in order.
- **The chain:** this goal runs after `original-arrangements` and before `faithful-levels`.

## Stages

### 1. The catalog names each part of a work

**Does:** the three fields, their label in English and German, and the migration of every row.

- [x] `CatalogSong` gains `part`, `kind` and `name`, in the app and the tools. `src/library/search.ts:37`, `tools/catalog.ts:29`
- [x] `partLabel(song)` reads a part's place and name in the live locale, and `songTitle` names its work. `src/library/parts.ts:1`
- [x] The texts of the three kinds, in English and German. `src/i18n/messages/player-library.en.ts:23`
- [x] The migration sets the fields and rewrites the titles of 356 part rows. `public/songs/catalog.json:1`
- [x] The pick list carries the Mutopia rows' parts, and the fetch writes them. `tools/fetch-mutopia.ts:44`
- [x] Test `every_part_of_a_work_has_a_name_or_a_place` and `a_part_reads_its_place_in_the_live_locale`. `src/library/parts.test.ts:1`
- [x] The e2e tests name the parts by their new titles. `e2e/library.e2e.ts:116`, `e2e/song-explorer.e2e.ts:199`
- [x] The build is green, and the slice is committed.

### 2. The explorer lists songs as rows

**Does:** the card becomes a row of two lines, with the steps, the length, the preview and the star.

- [ ] `card` becomes `row`, reading the title from `partLabel`. `src/library/library-panel.ts:613`
- [ ] The row's look, on a desktop and a phone. `src/library/library-panel.css:1`
- [ ] The e2e tests follow the new class names. `e2e/library.e2e.ts:1`, `e2e/song-explorer.e2e.ts:1`, `e2e/transport.e2e.ts:1`
- [ ] Look at the list with `bun run shot`, on a phone and a desktop.

### 3. A work's parts open from its row

**Does:** a work with parts is one row that opens to show them.

- [ ] `workEntries` groups the entries of a work's parts, after the sort and the filter. `src/library/search.ts:211`
- [ ] The work's row, its count of parts and its open state. `src/library/library-panel.ts:613`
- [ ] The arrow keys, Right and Left. `src/library/library-panel.ts:900`
- [ ] Test `a_work_opens_to_show_its_parts`. `e2e/song-explorer.e2e.ts:1`
- [ ] The feature list names the rows and the works. `docs/reference/features.md:1`

### 4. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stage 1 is committed on `main`. 356 catalog rows are parts. A card still shows a part's label as its title and its work below.
The player's head reads the work and the part, such as "Sonata No. 14 'Moonlight' · Movement 2".

### Next

**Stage 2: the explorer lists songs as rows.** Files: `src/library/library-panel.ts`,
`src/library/library-panel.css` and the three e2e files. Gate: stage 1 is committed.

1. `card` becomes `row`. Line 1 reads a part's work and label, and any other song's title. Line 2 reads
   the composer. `src/library/library-panel.ts:613`
2. The row's look: steps, length, preview and star on one line, two lines on a phone. `src/library/library-panel.css:1`
3. `song-card` becomes `song-row` in the e2e tests. `e2e/library.e2e.ts:1`, `e2e/song-explorer.e2e.ts:1`, `e2e/transport.e2e.ts:1`
4. Look at the list with `bun run shot`, on a phone and a desktop.

Expected red: the e2e tests that name a part, until the gate stage runs them.

### Backlog

- A work's name keeps its catalogue number, such as "Hoboken XVI:7". A later goal may split it out.
