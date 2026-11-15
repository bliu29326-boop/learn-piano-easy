---
looper: 1
title: Japanese
summary: "Every text of the site, the course and the song guides reads in Japanese as if a native teacher wrote it, and the Japanese site ships."
context: [docs/agent/translation.md, docs/decisions/0012.md, docs/goals/many-locales.md, src/i18n/locale.ts, src/i18n/typography.ts]
stages:
  - id: 1
    title: The Japanese style guide and glossary
    status: done
  - id: 2
    title: The site and the player in Japanese
    status: done
  - id: 3
    title: The course in Japanese
    status: done
  - id: 4
    title: "The song guides in Japanese, from a to m"
    status: done
  - id: 5
    title: "The song guides in Japanese, from n to z"
    status: open
  - id: 6
    title: The Japanese site ships
    status: open
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: japanese-rules
    stage: 2
    name: every Japanese text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [japanese_texts_keep_their_rules]
  - id: japanese-site
    stage: 6
    name: the Japanese site reads in Japanese
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_japanese_site_reads_in_japanese]
---

# Japanese

## Why

About 125 million people read Japanese, nearly all of them in Japan. Most of them read English poorly,
so an English course does not reach them. Japanese writes no space between words, and its Han
characters need Japanese fonts, which draw them differently from Chinese fonts. The method in
[docs/agent/translation.md](../agent/translation.md) already carries what the `spanish` pilot taught.

## Standing decisions

- **The method is [docs/agent/translation.md](../agent/translation.md),** step by step. This goal adds
  only what is Japanese.
- **Each decision below is confirmed by the style guide in stage 1,** against its sources. Or the guide
  changes it, with a recorded reason.
- **The variety is standard Japanese.** `Intl` uses `ja`.
- **A sentence uses です・ます.** A label or a button is a short noun or a plain verb, such as 設定 or 開く.
- **The learner is never named.** あなた is never used, since Japanese leaves the learner out.
- **Notes are ドレミ in katakana:** ド レ ミ ファ ソ ラ シ. A key takes the Japanese letter names, such
  as ハ長調, イ短調 and 嬰ヘ短調, as schools teach them. A chord symbol stays Latin: `Cコード`, `G7`.
- **The marks:** `。`, `、` and `「」` for quotes, all full-width. Latin letters and digits stay
  half-width. No space goes between Japanese characters.
- **A katakana loanword takes the long vowel mark ー,** as Microsoft's Japanese style guide sets it:
  コンピューター.
- **Japanese has no plural forms.** `Intl` names only *other*, so a counted message has one form.
- **Numbers follow `Intl` for `ja`.** No digit or separator is set by hand.
- **The script is kana and Han.** The font stack names Japanese fonts, so a Han character takes its
  Japanese shape. `word-break: auto-phrase` applies, and no text is italic.
- **Japanese runs shorter than English.** The layout risk is a line that breaks inside a word, and the
  look check covers it.
- **The kept words:** *Learn Piano Easy*, *MIDI* and the library's song titles. The style guide changed
  the composers' names to katakana, such as ベートーヴェン, since no Japanese teacher writes them in Latin.
- **A range of numbers takes `～` (U+FF5E),** never the wave dash `〜`, which some Windows fonts draw
  differently. No space stands beside a Latin word or a digit: `MIDIキーボード`, `3曲`.
- **Lanes:** stage 1 comes first. Stages 2 to 5 touch disjoint files, but each follows the glossary
  stage 1 writes, so they run in order. Stage 6 needs all of them.
- **No page loads the Japanese catalog until Japanese ships.** `src/i18n/all-catalogs.ts` holds `ja`
  for the tools and the tests. Stage 6 adds its chunk to `CATALOG_CHUNKS` of `src/i18n/locale.ts`, when
  the site serves it.
- **A lesson quiz whose answers are note names takes them in ドレミ,** as the Spanish and French files
  do. A quiz names its right answer by index, so no code reads the letter. A beginner then sees one
  naming in the prose and in the answers.

## Stages

### 1. The Japanese style guide and glossary

**Does:** writes `docs/reference/translation/ja.md` in the shape the method names, and fills the Japanese
entry of the rule table.
**Split:** a read-only `reader` subagent lists every recurring music term and interface term in the English
catalogs, lessons and guides, with a count. `web-fetch` subagents, sent together, read the sources and
report what each settles.
**Gate:** `tools/i18n.ts` and `src/i18n/typography.ts` exist.

- [x] The term list: every music and interface term the English uses more than once. `docs/reference/translation/ja.md:1`
- [x] Microsoft's Japanese style guide: the address, the marks and the interface terms. `docs/reference/translation/ja.md:1`
- [x] Japanese Wikipedia's music articles and Japanese piano methods: each music term with two sources. `docs/reference/translation/ja.md:1`
- [x] Every section of the style guide, with calibration texts from every kind of text. `docs/reference/translation/ja.md:1`
- [x] The Japanese entry of the rule table: script, kept words and the patterns of the marks. `src/i18n/typography.ts:1`
- [x] The Japanese row of the locale table, confirmed or changed with its reason. `src/i18n/locale.ts:18`

### 2. The site and the player in Japanese

**Does:** every catalog section, translated, reviewed blind and stamped.
**Split:** three writing subagents translate side by side, one per item below. Three fresh reviewers
then review them blind, as the method says.
**Gate:** `docs/reference/translation/ja.md` exists.

- [x] The site, its pages and *Learn Piano*. `src/i18n/messages/ja.ts:1`, `src/i18n/messages/learn-lesson.ja.ts:1`
- [x] The player's shell, bar, library, input and play modes. `src/i18n/messages/player-shell.ja.ts:1`
- [x] The player's settings. `src/i18n/messages/player-settings.ja.ts:1`
- [x] Each batch reviewed blind, every finding settled, and every *wrong* batch reviewed again.
- [x] `bun x tsc` and `japanese_texts_keep_their_rules` pass. `src/i18n/translation-rules.test.ts:1`
- [x] `bun run i18n stamp ja` for each catalog section. `src/i18n/stamps/ja.json:1`

### 3. The course in Japanese

**Does:** every lesson of every world, translated, reviewed blind and stamped.
**Split:** five writing subagents, side by side, in batches sized by the method. *Expression* and *Both
hands* each go alone. *Chords* goes with *Rhythm*, *Reading music* with *Meet the piano*, and *Scales and
keys* with *First melodies*. Five fresh reviewers then review the five batches blind.
**Gate:** stage 2's catalogs are stamped.

- [x] *Meet the piano* and *First melodies*. `src/learn/lessons/meet-the-piano/texts.ja.ts:1`, `src/learn/lessons/first-melodies/texts.ja.ts:1`
- [x] *Rhythm* and *Reading music*. `src/learn/lessons/rhythm/texts.ja.ts:1`, `src/learn/lessons/reading-music/texts.ja.ts:1`
- [x] *Both hands* and *Chords*. `src/learn/lessons/both-hands/texts.ja.ts:1`, `src/learn/lessons/chords/texts.ja.ts:1`
- [x] *Scales and keys* and *Expression*. `src/learn/lessons/scales-and-keys/texts.ja.ts:1`, `src/learn/lessons/expression/texts.ja.ts:1`
- [x] Each world reviewed blind, and every finding settled.
  - [x] Five blind reviews back.
  - [x] Every *wrong* and *unnatural* finding applied or answered.
  - [x] `tsc` and the rules test pass again.
- [x] `bun run i18n stamp ja` for each world. `src/i18n/stamps/ja.json:1`

### 4. The song guides in Japanese, from a to m

**Does:** the guide of every song whose slug starts with a letter from a to m.
**Split:** `bun run i18n status ja` lists those slugs as `guide/<slug>` units. Writing subagents of at
most eight guides each work side by side, and one fresh reviewer per batch reviews it blind.
**Gate:** stage 3's worlds are stamped.

- [x] One `tools/our-songs/<slug>.ja.ts` per slug from `air-on-the-g-string` to `mozart-21-andante`. `tools/our-songs/alle-jahre-wieder.ja.ts:1`
- [x] Each batch reviewed blind, and every finding settled.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ja` stamps them. `public/songs/ours/alle-jahre-wieder/guide.json:1`

### 5. The song guides in Japanese, from n to z

**Does:** the guide of every song whose slug starts with a letter from n to z.
**Split:** as stage 4.
**Gate:** stage 4's guides are stamped.

- [ ] One `tools/our-songs/<slug>.ja.ts` per slug from `neon-chase` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.ja.ts:1`
- [ ] Each batch reviewed blind, and every finding settled.
- [ ] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ja` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`

### 6. The Japanese site ships

**Does:** one read of the whole locale for consistency, then `ja` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Japanese file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status ja` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [ ] `ja` is `shipped`. `src/i18n/locale.ts:18`
- [ ] The Japanese social image. `tools/make-social-image.ts:104`
- [ ] The layout checks run in `ja` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [ ] Test `the_japanese_site_reads_in_japanese`: `lang`, the switch's *日本語*, a lesson step and the player in Japanese. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `ja` with `bun run shot --locale ja-JP`, on a phone and a desktop, in both themes. No line breaks inside a word.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [ ] The feature list and the README name Japanese. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 4 are done. Every catalog section, every lesson and the 51 guides from
`air-on-the-g-string` to `mozart-21-andante` have their `.ja.ts`, reviewed blind and stamped in
`src/i18n/stamps/ja.json`. `public/songs/ours/*/guide.json` carries their `ja` texts.
`src/i18n/translation-rules.test.ts` and `tsc` pass, and the build is green.

The guide review had 7 *wrong* findings, 30 *unnatural* and 27 *nit*, and every one is settled. Each
*wrong* was a name, a stock step or one verb, checked against the English by the session, so no batch
had a second round. Two names were confirmed in Japanese Wikipedia: トワノ・アルボ and 『オルケゾグラフィ』.

The writers drifted on the step "let the song wait for each note" in four wordings. The session settled
it as `…を右手だけで弾きましょう。曲は1音ずつ待ってくれます。` in every file. The glossary's stock-step
row now holds it, with `今度はもとの速さで弾きましょう。`, and a numbered verse is `1番`, `2番`.

`J` joined the kept single letters of `src/i18n/typography.ts`, for a middle initial such as
ウィリアム・J・カークパトリック. Every other Latin title the writers kept was already a kept word.

Titles left in English for want of a settled Japanese name: 「Away in a Manger」 (まぶねのなかに was
unconfirmed), 「God Rest Ye Merry, Gentlemen」, 「Es ist ein Ros entsprungen」. 主和音 stands for "home
chord", and ケーレル・ベーラ for Béla Kéler, both unconfirmed.

The page look waits for stage 6, since no page serves `ja` until it ships.

### Next

**Stage 5: the guides from n to z,** 29 slugs from `neon-chase` to `yankee-doodle`. The item's
"from `o-christmas-tree`" is now fixed to `neon-chase`.

- The briefs that worked are `.agent-tmp/ja-guide-writer-brief.md` and
  `.agent-tmp/ja-guide-reviewer-brief.md`. Add the settled "wait for each note" form to the writer's
  stock steps before sending it.
- Run `bun tools/i18n.ts work ja guide/<slug>` per slug first.
- Four writers of 7 or 8 guides each, side by side. Each `.es.ts` may be partial, so a writer takes the
  shape from the work list, as this stage's writers did.
- Two `reader` reviewers per batch, sent as soon as that batch's writer ends.
- Grep the batch for `曲が1音ずつ\|曲に1音ずつ\|今度はもとの速さで、ペダル` and settle any drift.
- Then `bun test src/i18n/translation-rules.test.ts`, `bun tools/make-our-songs.ts`, and
  `bun tools/i18n.ts stamp ja guide/<slug>` per slug.
- Stage 6's consistency read adds the course's new terms (空虚5度, 第1転回形, 間（かん）, 指越え) and the
  boss form `ボス：「エリーゼのために」を両手で` to the glossary. It also checks the unconfirmed titles and
  names above.

Expected red: `a_page_loads_only_its_own_catalog` in `src/i18n/i18n.test.ts:77`. It expects
`catalogOf("ja").footer` to equal the English, and `ja.ts` now translates the footer. Stage 6 rewrites
that test's unshipped-locale checks, since `ja` is the last locale to ship.

### Backlog

- Furigana over rare kanji, through `<ruby>`, could help a young learner read the course.
