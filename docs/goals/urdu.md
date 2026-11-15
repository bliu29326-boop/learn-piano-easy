---
looper: 1
title: Urdu
summary: "Every text of the site, the course and the song guides reads in Urdu as if a native teacher wrote it, and the Urdu site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, docs/goals/right-to-left.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Urdu style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Urdu
    status: done
  - id: 3
    title: The course in Urdu
    status: done
  - id: 4
    title: "The song guides in Urdu, from a to m"
    status: done
  - id: 5
    title: "The song guides in Urdu, from n to z"
    status: open
  - id: 6
    title: The Urdu site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: urdu-rules
    stage: 2
    name: every Urdu text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [urdu_texts_keep_their_rules]
  - id: urdu-site
    stage: 6
    name: the Urdu site reads in Urdu
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_urdu_site_reads_in_urdu]
---

# Urdu

## Why

About 245 million people read Urdu, most of them in Pakistan and India. Most of them read English
poorly, so an English course does not reach them. Urdu reads from right to left, which the
`right-to-left` goal built and `arabic` proved. Its script style is Nastaliq, whose sloping lines need a
taller line than Arabic's Naskh. The method in [docs/agent/translation.md](../agent/translation.md)
already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Urdu.
- **Each decision below is confirmed by the style guide in stage 1,** against its sources. Or the guide
  changes it, with a recorded reason.
- **The variety is standard Urdu as written in Pakistan,** in the everyday register of Pakistani apps.
  `Intl` uses `ur-PK`.
- **A common English loanword is written in Urdu script** where Urdu apps use it. The text avoids words
  found only in Hindi or only in Persian.
- **The direction is settled.** `right-to-left` is reached long before this goal, and `arabic` proved it.
  Isolation, `dir` and no `letter-spacing` apply to every Urdu text.
- **The learner is آپ.** An instruction uses the polite form, such as منتخب کریں or دبائیں.
- **The learner's gender stays out of the text where it can.** An Urdu verb agrees with gender, so the
  text prefers constructions that name none. Where that is impossible, it uses the honorific plural with
  آپ, and the guide names that form.
- **Notes are letters:** C D E F G A B, each isolated inside Urdu text.
- **The marks:** `۔` (U+06D4) ends a sentence. The comma is `،` and the question mark is `؟`.
- **Numbers follow `Intl` for `ur-PK`,** which writes Western digits, unless the guide's sources settle
  otherwise. No digit or separator is set by hand.
- **The script style is Nastaliq.** The Nastaliq font stack of `many-locales` applies, with Naskh as the
  fallback. Nastaliq needs a taller line, so the look check covers clipped ascenders and descenders.
- **The style guide confirms every decision above, and adds four.** A quote stands in straight double
  quotes, as Microsoft and Android write it. A bar is `میژر`, since `بار` also means "time". A piano key
  is `کلید`, and a computer key is `کی بورڈ کا بٹن`. Initial `s` before `k`, `t` or `p` takes an alef.
- **The layout checks in `ur` run at every width,** as those in `ar-XB` do.
- **A guide batch's second read covers only the guides a *wrong* finding changed,** each read whole.
  The *wrong* findings of stage 4 each sat in one text, so a whole batch's reread bought little.
- **The kept words:** *Learn Piano Easy*, *MIDI*, the song titles and the composers' names.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.

## Stages

### 1. The Urdu style guide and glossary

**Does:** writes `docs/reference/translation/ur.md` in the shape the method names, and fills the Urdu
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/ur.md:1`
- [x] Microsoft's Urdu style guide: the address, the marks and the interface terms. `docs/reference/translation/ur.md:1`
- [x] Urdu Wikipedia's music articles and Urdu-language piano methods: each music term with two sources. `docs/reference/translation/ur.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/ur.md:1`
- [x] The Urdu entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Urdu row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Urdu

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/ur.md` exists.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/ur.ts:1`, `src/i18n/messages/learn-lesson.ur.ts:1`
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.ur.ts:1`
- [x] The player's settings. `src/i18n/messages/player-settings.ur.ts:1`
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [x] `bun x tsc` and `urdu_texts_keep_their_rules` pass, with every argument isolated. `src/i18n/translation-rules.test.ts:1`
- [x] `bun run i18n stamp ur` for each catalog section. `src/i18n/stamps/ur.json:1`

### 3. The course in Urdu

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** five writing subagents, side by side, in batches sized by the method. *Expression* and *Both
hands* each go alone. *Chords* goes with *Rhythm*, *Reading music* with *Meet the piano*, and *Scales and
keys* with *First melodies*. Five fresh reviewers then review the five batches blind.
**Gate:** stage 2's catalogs are stamped.

- [x] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.ur.ts:1`, `src/learn/lessons/first-melodies/texts.ur.ts:1`
- [x] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.ur.ts:1`, `src/learn/lessons/reading-music/texts.ur.ts:1`
- [x] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.ur.ts:1`, `src/learn/lessons/chords/texts.ur.ts:1`
- [x] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.ur.ts:1`, `src/learn/lessons/expression/texts.ur.ts:1`
- [x] Each world reviewed blind, and every finding settled.
  - [x] `bun x tsc` and `urdu_texts_keep_their_rules` pass on the five batches.
  - [x] Five fresh reviewers read the five batches blind.
  - [x] Settlers apply every finding, and each disputed term is settled in the glossary first.
  - [x] Each batch with a *wrong* finding is reviewed again.
- [x] `bun run i18n stamp ur` for each world. `src/i18n/stamps/ur.json:1`

### 4. The song guides in Urdu, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** `bun run i18n status ur` lists those slugs as `guide/<slug>` units. Writing subagents of at
most eight guides each work side by side, and one fresh reviewer per batch reviews it blind.
**Gate:** stage 3's worlds are stamped.

- [x] One `tools/our-songs/<slug>.ur.ts` per slug from `air-on-the-g-string` to `mozart-21-andante`. `tools/our-songs/air-on-the-g-string.ur.ts:1`
  - [x] Seven writers, side by side, each with an alphabetical run of seven or eight guides.
  - [x] `bun x tsc` and `urdu_texts_keep_their_rules` pass on the 51 files.
- [x] Each batch reviewed blind, and every finding settled.
  - [x] Two fresh reviewers per batch read it blind, four guides each.
  - [x] Settlers apply every finding, and each batch with a *wrong* finding is read again.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ur` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`
  - [x] No missing space before a join, and no raw isolate or no-break space in the files.

### 5. The song guides in Urdu, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.ur.ts` per slug from `neon-chase` to `yankee-doodle`. `tools/our-songs/neon-chase.ur.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ur` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Urdu site ships

**Does:** one read of the whole locale for consistency, then `ur` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Urdu file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status ur` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `ur` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Urdu social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `ur` at every width. `e2e/layout-check.ts:43`
- [ ] Test `the_urdu_site_reads_in_urdu`: `lang`, `dir`, the switch's *اردو*, a lesson step and the player in Urdu. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `ur` with `bun run shot --locale ur-PK`, on a phone and a desktop, in both themes. No ascender or descender is clipped.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [ ] The feature list and the README name Urdu. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 4 are done. Every catalog section, every lesson and the 51 guides from
`air-on-the-g-string` to `mozart-21-andante` have their Urdu files. Each is reviewed blind and stamped
in `src/i18n/stamps/ur.json`. Each guide's Urdu is in its `public/songs/ours/<slug>/guide.json`.

In stage 4, seven writers translated runs of seven or eight guides. Fourteen fresh reviewers then read
at most four guides each, and seven settlers applied every finding. Five batches had a *wrong*
finding, all in single texts. Two fresh readers read again the six whole guides those texts sit in,
and the session settled their 11 findings.

The glossary gained rows for triplet, grace note, trill, the orchestra's strings, a song's home chord
and a quick run. § 6 now spells Chopin `شوپن`, Schubert `شوبرٹ` and Handel `ہینڈل`. The `ur` rules
gained "A space parts an isolated run from the word beside it". A settler's Edit had glued
`کاؤنٹیس` to an isolated name, and no other check saw it.

Status lists 13 lesson texts missing on purpose. They are quiz answers made only of note letters, which
fall back to the catalog's own letters, as the Hindi files do. The glossary gained rows for `سطر`, a
line of music, for `پہلی اور آخری کلید سمیت`, counting an interval's ends, and for `فاصلہ`, a move's
distance. It also gained `پلگ ان کریں`, and § 2 now opens a pick-one question with its question word.

No page was looked at in `ur` yet, since `ur` is not shipped. Stage 6 looks at every route and a lesson.

### Next

**Stage 5: the song guides from n to z.** That is 29 slugs, from `neon-chase` to `yankee-doodle`.
Run `bun tools/i18n.ts work ur guide/<slug>` for each. Four writers go side by side, in alphabetical
runs of eight, seven, seven and seven. Each writes `tools/our-songs/<slug>.ur.ts`, shaped like
`tools/our-songs/air-on-the-g-string.ur.ts`. Each brief points the writer at
`docs/reference/translation/ur.md` to read whole, and names § 5's *A guide's recurring steps* as the
settled wording. Latin runs go through `isolate()` in template literals, never typed isolates. A kept
name missing from `src/i18n/typography.ts` is reported, never added by a writer.

Review with two fresh reviewers per batch, four guides at most each. Each writes
`.agent-tmp/review-urdu-<batch>.md` as `id — kind — weight — problem — Proposed: <text>`, and one
settler per batch applies it. Read again, whole, each guide that holds a text a *wrong* finding
changed. Before stamping, Grep each touched file for ``[^ ]["`] \+$``, and check raw characters with
`LC_ALL=C.UTF-8 grep -lP '[\x{2068}\x{2069}\x{00A0}]'`. Then run `bun tools/make-our-songs.ts` and
`bun tools/i18n.ts stamp ur guide/<slug>`. Gate: stage 4's guides are stamped.

Expected red: none. `urdu_texts_keep_their_rules` passes.

### Backlog

- A read of the course by an Urdu speaker from India would catch words that read as Pakistan's only.
- A Pakistani piano teacher's read would settle `نوٹ` against `سُر`, `میژر` against `بار`, and `مشق`
  against `ریاض`.
