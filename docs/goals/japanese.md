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
    status: done
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
- **A text that is the same in Japanese as in English stays missing,** as in Chinese, Hindi and Urdu.
  These are the languages' own names, the modifier keys and the site's name. The English fallback
  shows the same text, and the rules test refuses a copy. So stage 6's gate reads "only these 18
  deliberate copies are missing".
- **The drifts are settled by the glossary where it has a row.** The reader is a pointer, so each fix
  is checked against `docs/reference/translation/ja.md` first. Where the glossary has no row, the
  majority form wins and the glossary gains the row.

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

- [x] One `tools/our-songs/<slug>.ja.ts` per slug from `neon-chase` to `yankee-doodle`. `tools/our-songs/o-christmas-tree.ja.ts:1`
  - [x] The 29 work lists are written.
  - [x] Four writers have written their batches.
- [x] Each batch reviewed blind, and every finding settled.
  - [x] Two reviewers per batch have reported.
  - [x] Every finding is settled, and the stock-step drift is grepped.
- [x] `bun tools/make-our-songs.ts` writes the guides, and `bun run i18n stamp ja` stamps them. `public/songs/ours/o-christmas-tree/guide.json:1`
  - [x] The rules test and `tsc` pass.
  - [x] The guides are written, and the 29 slugs are stamped.

### 6. The Japanese site ships

**Does:** one read of the whole locale for consistency, then `ja` ships, and every page is looked at.
**Split:** a fresh `reader` subagent reads every Japanese file against the glossary, and lists each term,
address or mark that drifts between files.
**Gate:** `bun run i18n status ja` lists no missing and no stale text outside `legal`.

- [ ] Every drift the reader lists is settled in the files it names.
- [x] `ja` is `shipped`. `src/i18n/locale.ts:18`
- [x] The Japanese social image. `tools/make-social-image.ts:104`
- [x] The layout checks run in `ja` at 360 and 1280 pixels. `e2e/layout-check.ts:43`
- [x] Test `the_japanese_site_reads_in_japanese`: `lang`, the switch's *日本語*, a lesson step and the player in Japanese. `e2e/locales.e2e.ts:1`
- [ ] Look at every route in `ja` with `bun run shot --locale ja-JP`, on a phone and a desktop, in both themes. No line breaks inside a word.
- [ ] Look for any character drawn as a missing-glyph box, in Chrome on Windows and on an Android phone width.
- [x] The feature list and the README name Japanese. `docs/reference/features.md:1`, `README.md:12`

### 7. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stages 1 to 5 are done, and Japanese ships.

- **The gate holds.** `bun tools/i18n.ts status ja` lists 0 stale and 18 missing, which are all
  deliberate copies, as *Standing decisions* says. The daily-goal options and the run's `+NXP` are
  translated and stamped.
- **`ja` is shipped** in `src/i18n/locale-table.ts:61`, with its chunk in `CATALOG_CHUNKS`. Its world
  titles are in `src/learn/course.ts:61`, and 日本語 is in the language switch.
- **`the_japanese_site_reads_in_japanese` passes** at `e2e/locales.e2e.ts:305`. The layout checks take
  `ja` through `PASSED_LOCALES`, which derives from the shipped locales.
- **`src/i18n/i18n.test.ts` is green.** Its load check uses `en-XA`, since `all-catalogs` loads every
  shipped locale. Its "no locale owns it" checks use Korean.
- `public/images/social/ja.png` draws Japanese with no missing glyph. A phone shot of the home page and
  a desktop shot of the learn page read well, with no line break inside a word.
- **The consistency read is done, and no drift is fixed yet.** Four `reader`s read the catalog, the
  course and the guides. Their findings, each with its settled fix, are under *Next*.

### Next

**Stage 6, the rest: settle the drifts, then look at every page.**

Check each fix against the glossary and the English before you make it. Paths are under
`src/i18n/messages/`, `src/learn/lessons/` or `tools/our-songs/`. Restamp every unit you touch. Run
`bun tools/make-our-songs.ts` after a guide edit.

**The catalog:**
- [ ] A falling note in the scene is ノート, as the glossary row says. Change 音符 at `ja.ts:24,92,101,122`,
  `play-modes.ja.ts:53,54,89`, `player-settings.ja.ts:54,73`, `player-settings-play.ja.ts:81,97,320` and
  `player-shell.ja.ts:81`. Keep 音符 where the text means a note on a staff. If the hero lead changes,
  redraw `public/images/social/ja.png` with `bun tools/make-social-image.ts`. Commit only `ja.png`.
- [ ] Use スコア, never 点数: `ja.ts:33`, `play-modes.ja.ts:17,33,40`. Use 編曲, never アレンジ:
  `player-library.ja.ts:16`. Use 第〜音, never 度数: `player-settings-look.ja.ts:339,344`.
- [ ] Write 全体表示 and 表示の左右移動 at `player-settings-play.ja.ts:32`, as the bar says. Write かんたん at
  `player-library.ja.ts:10` and `player-settings-look.ja.ts:349`, since やさしい names a level.
- [ ] Use ボスに勝つ at `learn-badges.ja.ts:28`, 使った at `player-input.ja.ts:117`, and すべての収録曲 at
  `player-settings-look.ja.ts:551`. The label at `player-library.ja.ts:117` becomes 弾かない（アプリが弾く）.
- [ ] Kana for はじめて, つける and いま in every catalog file: `src/i18n/messages/player-shell.ja.ts:120`.
  The child-reader rule asks it, and `src/i18n/messages/player-settings-look.ja.ts:107` is another.

**The course:**
- [ ] Write `Cコード`, `Fコード` and `Gコード` at `chords/c-f-and-g.ja.ts:9` and `chords/major-triads.ja.ts:9`.
- [ ] Use すき間 at `reading-music/the-staff.ja.ts:16,23`, and 1つとばし at
  `reading-music/reading-steps-and-skips.ja.ts:6`. Use 指くぐり at `expression/legato.ja.ts:61`.
- [ ] Write あいだ for "while" and "between", the majority form. The reader named `expression/phrases.ja.ts:9,49`,
  `rhythm/whole-notes.ja.ts:30`, `rhythm/half-notes.ja.ts:19`, `chords/major-triads.ja.ts:12`,
  `chords/the-waltz-bass.ja.ts:44` and `expression/loud-and-soft.ja.ts:46,63`. The staff's 間 stays.
- [ ] A quiz answer takes no 。 inside it. Use 、 at `meet-the-piano/sitting-at-the-piano.ja.ts:42`,
  `both-hands/hands-apart-then-together.ja.ts:16`, `expression/playing-with-feeling.ja.ts:55` and
  `meet-the-piano/octaves.ja.ts:35`.

**The guides:**
- [ ] Use すき間 at `neon-chase.ja.ts:24` and `o-holy-night.ja.ts:85`. Use かえる at `we-three-kings.ja.ts:23`
  and `yankee-doodle.ja.ts:40`. Use 分散オクターブ at `silent-night.ja.ts:73,80` and `william-tell.ja.ts:101`.
- [ ] Use とび at `the-blue-danube.ja.ts:15` and はねる at `the-sorcerers-apprentice.ja.ts:21,59`. Use
  ヴァイオリン at `air-on-the-g-string.ja.ts:8,11,23`. Use ダンパーペダル at `moonlight-sonata.ja.ts:12`.
- [ ] Use 低音 for a bass note at `chopin-nocturne-c-sharp-minor.ja.ts:59`, `clair-de-lune.ja.ts:61`,
  `dies-irae.ja.ts:59,71`, `ding-dong-merrily-on-high.ja.ts:48` and `carol-of-the-bells.ja.ts:60`.
  ストライド奏法のベース stays. Use メロディー at `canon-in-d.ja.ts:7,33` and `mozart-21-andante.ja.ts:55`.
- [ ] Put the counted rhythms in 「」, as `william-tell.ja.ts:21` does: `o-christmas-tree.ja.ts:24`,
  `ode-to-joy.ja.ts:43`, `o-come-all-ye-faithful.ja.ts:25,44`, `o-du-froehliche.ja.ts:25`,
  `haul-away-joe.ja.ts:22`, `jingle-bells.ja.ts:39` and `joy-to-the-world.ja.ts:40`.
- [ ] Write 1つ and 2つ in one phrase that repeats across guides. Fix 低い音ひとつ in `jingle-bells.ja.ts:16`,
  `hall-of-the-mountain-king.ja.ts:20`, `happy-birthday.ja.ts:17`, `it-came-upon-the-midnight-clear.ja.ts:17`
  and `last-horizon.ja.ts:18`. Leave a kana count elsewhere, which §8 allows.
- [ ] Check against the English, then fix: サビ or リフレイン in `o-come-all-ye-faithful.ja.ts:26,38` and
  `o-holy-night.ja.ts:53,61,73`. Check 3拍子 against 3/4 at `dies-irae.ja.ts:41` and `handel-sarabande.ja.ts:8`.
  Check D against Dm at `beethoven-7-allegretto.ja.ts:60` and `handel-sarabande.ja.ts:61`. Use アルペジオ at
  `morning-mood.ja.ts:109`. Write 分散和音 or アルペジオ wherever the English says broken chord or arpeggio.
- [ ] Names and titles: ヨーゼフ・モール at `silent-night.ja.ts:8`, and セントルイス at
  `o-little-town-of-bethlehem.ja.ts:10`, as `the-entertainer.ja.ts:7` writes it. Use 「ゆかいな牧場」 at
  `old-macdonald-had-a-farm.ja.ts:7`, as the course does. Use 「もみの木」 at `o-christmas-tree.ja.ts:7`.
  Every other Latin title and name stays: no reader could confirm a Japanese form offline.

**The glossary** `docs/reference/translation/ja.md` gains rows for 空虚5度 (first use, then 5度),
第1転回形 and 第2転回形, 間（かん）, 指越え and 指くぐり with their verbs, and the boss form
`ボス：「…」を両手で`. It also gains `C、F、Gコード`, 第2線, トリル, トレモロ, モルデント, 3連符, 輪唱 and
リフレイン.

**Then the look:**
- [ ] Every route in `ja` with `tools/shot.ts:1` and `--locale ja-JP`, on a phone and a desktop.
  Shoot both themes. Serve one build as the playbook's `bun run preview` bullet says.
- [ ] A missing-glyph box, in Chrome on Windows and at an Android phone's width. `src/ui/tokens.css:1`

**Split:** the three file groups are disjoint, so three writing subagents may take one each. The
session writes the glossary rows, builds and stamps.

Expected red: none known. Stage 7 runs the layout checks in `ja` for the first time.

### Backlog

- Furigana over rare kanji, through `<ruby>`, could help a young learner read the course.
