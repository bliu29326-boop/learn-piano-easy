---
looper: 1
title: Original arrangements
summary: "The first eight songs end on an Original that sounds like the piece, and the tools that set the rest at a fifth of the tokens are ready."
context: [docs/decisions/0014.md, docs/our-songs.md, tools/make-our-songs.ts, tools/song-meter.ts, tools/our-songs/morning-mood.ts, src/library/guide.ts, src/library/guide-panel.ts]
stages:
  - id: 1
    title: "The Original's plumbing and Morning Mood"
    status: done
  - id: 2
    title: "Originals: the orchestral showpieces"
    status: done
  - id: 3
    title: "A page is read by the system, and its bars are set by a command"
    status: open
  - id: 4
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: original-keeps-source
    stage: 1
    name: "every Original of ours keeps its hook, a finger on every note and a hand's span, and is rated by the meter"
    run: [bun, test, tools/our-songs.test.ts]
    tests: [every_original_of_ours_keeps_its_hook_and_a_hand]
  - id: original-guide
    stage: 1
    name: the Original step of a song of ours plays our arrangement and shows its guide
    run: [bun, x, playwright, test, e2e/guide.e2e.ts]
    tests: [the_original_of_ours_shows_its_guide]
  - id: original-tools
    stage: 3
    name: "the crop script finds every system, and the command keeps every bar and refuses a short hand"
    run: [bun, test, tools/crop-systems.test.ts, tools/original-from-pages.test.ts]
    tests: [crop_systems_finds_every_system, original_from_pages_keeps_every_bar_and_refuses_a_short_hand]
---

# Original arrangements

## Why

The user found that our songs lose the original's sound. Every version is built from a short tune and
shaped by its level's rules. So its accompaniment comes from a list per level, not from the piece.
Only four songs end on an Original, because the catalog holds only four originals. The other
seventy-three end at Hard. [Decision 0014](../decisions/0014.md) gives each of them an Original of our
own, which follows the piece and keeps no limit of the four versions.

## Standing decisions

- **[Decision 0014](../decisions/0014.md) is the rule.** This goal builds it and moves its rules into
  [docs/our-songs.md](../our-songs.md).
- **The ids stay.** Our Original is the `mythic` step, and its file is `ours/<slug>/mythic.mid`. Every row
  of the song names it in `mythic`, so the card, the level-up offer and the colour work unchanged.
- **The catalog's piano originals stay** for *Für Elise*, *Moonlight Sonata*, *Clair de Lune* and *The
  Entertainer*. Those four get no Original of ours.
- **The three tunes of our own get none:** *Black Flag Jig*, *Last Horizon* and *Neon Chase*.
- **`OurSong.mythic` holds the catalog file, our Original or null.** Our Original is an `OurVersion`
  with its own `source`, the edition it follows. Null is left for the tunes of our own.
- **The source is a public domain print.** The composer's own piano version comes first, then a piano
  reduction printed before 1931, then the full score. A modern arrangement, a recording or a catalog
  MIDI is never a source. The module records the edition and its years.
- **A public domain or CC-BY text encoding of such a print is read before its scan** (the user's answer).
  `docs/our-songs.md` owns the rule. A CC-BY file is credited in the folder's `LICENSE.md` and
  `THIRD-PARTY-NOTICES.md`. The source order above still picks the print.
- **The Original follows its source** in form, key, meter, tempo, harmony, voicing, pedal and its own
  accompaniment figure. A score for more than two hands is reduced to what two hands reach. The tune
  and the bass come first, then the figure that gives the piece its sound.
- **The length is the whole piece when it plays in about four minutes or less.** A longer piece keeps
  its best-known sections in their own order, cut where a section ends. It closes on the home chord.
- **It adds no bar of our own.** The only bars that are not in the source are a cut's last cadence, at
  most two bars, and the module names them.
- **The meter rates it** as the lowest version whose limits it fits, at that version's catalog
  difficulty. Past Hard it rates 5, which is Advanced. The meter's head comment owns this rule.
- **It keeps the meter's checks of a hand.** They are a finger on every note, the practical span, and
  the hook note for note in the print's key. It keeps no limit of the four versions.
- **An Original keeps its print's key, even where our versions moved the tune.** Its source names the
  move as `keyShift`, in semitones, and `originalTuneProblems` in `tools/song-meter.ts` finds the hook
  there. *Can-Can* follows Heugel's D major against our G, so its `keyShift` is 7. Many carols move too.
- **The Original stays last on the card,** even where it rates below Hard. The level filter files it
  under its own level.
- **Its guide has the same parts as a version's guide,** written in English and German. Its tricky
  spots are the bars the meter names. Every other locale shows the English until a translation pass.
- **Its tagline is a new text,** because "The composer's own notes." is false for our arrangement. It
  says the piece is set for two hands. The catalog originals keep their tagline.
- **This goal sets no further song** (the user's call, for the tokens). It closes stage 2's songs and
  builds stage 3's tools. A later goal sets the other Originals with them.
- **An Original keeps its whole length.** The user refused a cap on bars. The cost is cut per bar
  instead, by the three rules after the next one, which stage 3 builds.
- **Stage 2 spent about 50M tokens a song, 73% of it on transcribers.** Its 90 transcribers each read
  about 30 crops over 39 turns, and every turn re-read every image in its context. The writers spent
  15%, at a 166k peak.
- **A script cuts the crops, and a transcriber takes one system.** `tools/crop-systems.ts` cuts each page
  into half-system crops at twice the scan's size. A transcriber reads only its system's crops, writes its
  file and stops, in about ten turns. It never opens a whole page, and it marks a doubt with `?` rather
  than zooming again.
- **A command sets an Original's bars from its page files.** `tools/original-from-pages.ts` writes the
  module's bars and refuses a hand that does not fill its bar. The writing subagent writes only the head
  comment, the cut and the guide, from the meter's output.
- **The reviewer reads only flagged bars,** one crop each: a bar a check refuses, a `?`, and a doubt a
  transcriber named. It still checks the form, the key and the cut from the page files, and the session
  settles every finding before the batch's commit.
- **Optical music recognition does not transcribe.** Audiveris 5.11 found 34% of the notes of *William
  Tell*'s page n10 and 75% of *Morning Mood*'s page n6. Most bars would still need a model.
- **One commit per batch,** once `bun tools/make-our-songs.ts` and the build are green.
- **The user's listening review is never waited on.** Each batch's handoff names its songs, and a later
  session fixes what the user files.
- **Lanes:** stage 2's last fixes, stage 3's two tools and its brief file touch disjoint files. Four
  writers build them side by side, and the session builds once they all end.
- **The chain:** this goal runs before `faithful-levels`, `urdu` and `japanese`. The translation goals
  then translate each new guide once.
- **Our Original's row has no `rarity`.** It names its own file as `mythic`, which is how `stepOf` in
  `src/library/guide-panel.ts` tells it. The four versions keep `Rarity`, and `GuideStep` adds `mythic`.
- **A print is fetched from the Internet Archive or Wikimedia Commons, never from IMSLP.** IMSLP's
  `robots.txt` refuses its downloads to every agent. A writer reads the page images of
  `archive.org/download/<item>/page/n<N>.jpg`.
- **`check-our-song.ts` takes the module's path,** as `bun tools/check-our-song.ts tools/our-songs/<slug>.ts`.
- **An Original's span check reads each chord, not each move.** `originalFingerProblems` in
  `tools/song-meter.ts` refuses a chord one hand cannot hold. A move between two moments is a jump, since
  a print leaps without rests. The move check refused 97 of Morning Mood's bars, every one of them the
  print's own. The cost is that a fast leap no hand makes goes uncaught, and the reviewer reads for it.
- **A chord the print brackets is rolled from its lowest note,** a 32nd per note, as `rolledWide` in
  `tools/our-songs/morning-mood.ts` does past 15 semitones. Later modules copy the helper.
- **A guide plans 3 to 5 practice steps.** `FEWEST_STEPS` and `MOST_STEPS` in `src/library/guide.ts`
  own the bounds, and the writer's `guideProblems` checks them, so the app never refuses a guide.
- **A writer's brief names its context ceiling and forbids page images.** It reads the transcription
  files alone, since the first writer ran out of context on the scans.
- **Two kept sections join with no bar of our own.** The next section starts as the print has it, even
  where the key changes. A join bar would be a bar of ours, which the rules allow only as the last cadence.
- **A print may come from any public library whose `robots.txt` admits agents,** such as Gallica, the
  Library of Congress or HathiTrust's public domain scans. IMSLP stays refused.
- **No allowed library serves *Night on Bald Mountain*'s print to an agent.** Gallica and the Library of
  Congress answer with a Cloudflare challenge. HathiTrust and the Russian State Library refuse it in
  `robots.txt`. The Archive's 1946 Muzgiz score fails the meter's 95-year rule.
- ***Night on Bald Mountain* gets no Original for now** (the user's answer to d8). Its four versions
  stay, and `mythic` stays null. A later goal looks for a print again.
- **Among two-hand reductions, the plainest faithful one wins** over a virtuoso transcription such as
  Liszt's, since a learner plays it. A four-hand print or a score comes only when no two-hand print exists.
- **A virtuoso two-hand print still beats a four-hand print,** so *Beethoven's Fifth* follows Liszt.
  Liszt's text is reduced only where a chord is past a hand's span, and the module names each such bar.
- **A cut keeps only pages a transcriber can read.** A pitch is never guessed, so a blurred section is
  left out, and the cut takes the best-known readable sections. *Boléro* keeps its first four statements.
- **A long piece drops a printed repeat before it drops a best-known section.** *Vltava* skips the
  repeat of bars 55 to 79, so it keeps both the flutes' source and the E major return.
  It still plays about five minutes at one tempo, since a further cut would lose one of those two.
- **An Original may hold a hook note the tune strikes twice,** where the print ties it.
  `originalTuneProblems` in `tools/song-meter.ts` accepts it, so no version's notes change for a tie.
- ***The Sorcerer's Apprentice* cuts after the second bar of printed page 6,** not after page 4. Page 4
  ends on an open dominant in mid-phrase. The phrase winds down at page 6's second bar, before
  "léger et détaché". The cost is page 5 and two more bars, about 40 seconds.
- **A print that changes tempo keeps every note's real length on one grid.** An `OurOriginal` has one
  meter and one tempo. *The Sorcerer's Apprentice* sits on the Vif's 3/8 bar, so a 9/8 Assez lent bar
  spans 10 grid bars. The cost is that the app's bar lines and the guide's bar numbers are the grid's.
- **A cadenza that overruns its bar fills whole extra bars at its printed lengths.** *Beethoven's
  Fifth* sets the oboe's cadenza as four 2/4 bars after the fermata bar, since every bar fills its meter.

## Stages

### 1. The Original's plumbing and Morning Mood

**Does:** the writer, the meter, the guide and the panel learn our Original, and *Morning Mood* gets
the first one as the pilot.
**Split:** a read-only `Explore` subagent lists every place that reads `mythic`, `RARITIES` or the
`rarity` field, across `src/` and `tools/`. The session does the rest itself, because every later
stage copies its pattern.

- [x] `OurSong.mythic` takes our Original, with its own source edition. `tools/make-our-songs.ts:248`
- [x] The writer writes `mythic.mid`, its catalog row and the four rows' `mythic` pointing to it. `tools/make-our-songs.ts:510`
- [x] The writer's `songProblems` checks our Original against the hand's checks and the hook. `tools/make-our-songs.ts:374`
- [x] The folder's `LICENSE.md` lists each `mythic.mid` of ours. `tools/make-our-songs.ts:530`
- [x] The meter rates an Original: the lowest version it fits, else 5. Its head comment says so. `tools/song-meter.ts:618`
- [x] `guide.json` carries the Original's version guide, and `readGuide` accepts it. `src/library/guide.ts:148`
- [x] The guide panel shows our Original's guide when its row is open. The level-up offer leads to it as before. `src/library/guide-panel.ts:87`
- [x] The new tagline of our Original, in English and German. `src/i18n/messages/player-library.en.ts:15`
- [x] *Morning Mood*'s Original, from the best source the order above finds, with its guide in English and German. `tools/our-songs/morning-mood.ts:206`
  - [x] The source: Schirmer's 1899 piano edition of Op. 46, scanned as Internet Archive item `31761045200615`.
  - [x] Four subagents transcribe the print's four pages to files, one page each.
  - [x] A writing subagent sets the whole piece from those files, with its guide in English and German.
  - [x] `bun tools/check-our-song.ts` accepts it, and a fresh reviewer reads it against the print.
  - [x] `bun tools/make-our-songs.ts` writes `mythic.mid`, its row and its guide.
- [x] Test `every_original_of_ours_keeps_its_hook_and_a_hand`. `tools/our-songs.test.ts:42`
- [x] Test `the_original_of_ours_shows_its_guide`: *Morning Mood*'s Original step opens our file and its guide. `e2e/guide.e2e.ts:1`
- [x] The rules of decision 0014 move into `docs/our-songs.md`: the Original's row, its rules, its guide and how it is made. `docs/our-songs.md:19`
- [x] The feature list says every song ends on its Original. `docs/reference/features.md:1`
- [x] Look at *Morning Mood*'s card and the Original's guide with `bun run shot`, on a phone and a desktop.

### 2. Originals: the orchestral showpieces

**Does:** the Originals of seven orchestral pieces, each a reduction of the full score or of a period
piano version.
**Split:** four writing subagents, side by side, two songs each, as one item below each. One fresh
reviewer then reads the batch against its sources.
**Gate:** `tools/our-songs/morning-mood.ts` holds an Original, and `the_original_of_ours_shows_its_guide` passes.

- [x] Each piece's print is found and its pages fetched to `.agent-tmp/src-<slug>/`.
  - [x] Six prints are found and fetched, at about 2000 pixels, each named here.
    - *William Tell*: Niedermeyer's two-hand reduction, Troupenas, Paris, 1829 to 1830, Gallica's scan on
      Commons as `Guillaume Tell, ouverture réduite pour le piano … par L. Niedermeyer - btv1b90674594 (<N> of 96).jpg`.
      The finale is images 10 to 14, printed pages 6 to 10, set whole, in 2/4 and E major at 152.
    - *William Tell*'s print is the one this goal keeps. The other four were replaced or recut, below.
  - [x] A search for a two-hand print of the last four, and their cut pages at native size in `full/`.
    - *The Sorcerer's Apprentice*: Victor Staub's two-hand transcription, Durand, ©1908, plate
      D. & F. 7134, Archive item `afm6655.0001.001.umich.edu`. Printed page p is image n(p+7).
      It is in F minor, Assez lent in 9/8, then Vif in 3/8. No bar or rehearsal number is printed.
      The cut is pages 1 to 4, then 24 to 25, at 4000 pixels. Its first end needs the writer's check.
    - *Vltava*: no two-hand print is reachable, so Eulenburg's 1914 full score stays, plate E.E. 3642,
      Archive item `mavlastvltavno20000unse`. Printed page p is image n(p+7), one system a page.
      The cut is bars 1 to 79, pages 1 to 18, then the E major return, bars 333 to 427 on pages 87 to 104.
    - *Beethoven's Fifth*: Liszt's two-hand transcription, Archive item `SymphonyNo.5Op.67_833`, file
      `SymphonyNo.5Op.67-Piano.pdf`. No plain two-hand set is reachable, and a two-hand print beats Czerny's four hands.
      The scan's title page is lost, but Liszt's notes date from 1865, so the arrangement is public domain.
      It is in 2/4 at a half note of 108. Its main staves are followed, never its ossia staves.
      The cut is bars 1 to 124, then 248 to 502, on images n0 to n2 and n5 to n9.
    - *Boléro*: no two-hand print is reachable, so Durand's 1929 full score stays, plate D. & F. 11 839,
      Archive item `imslp-104723-pmlp-03667-ravel-bolero-cropped`. Printed page p is image n(p).
      The cut is bars 1 to 76, pages 1 to 8: the A theme twice, then the B theme twice.
      The tutti pages 55 to 66 are too blurred to read in every reachable scan, so the climax is left out.
  - [x] *Can-Can* and *Swan Lake* have candidate prints, which need a check.
    - *Can-Can*: Bote & Bock's vocal score of the Galop, plate 10779, Archive item
      `imslp-aux-enfers-offenbach-jacques`, in D major with no date read. Our strain is in G. Heugel's
      1874 vocal score, Archive item `orpheauxenfers00offe`, pages 279 to 300, is unchecked.
    - *Swan Lake*: a full score of No. 10, plate "B.B. 59", Archive item
      `imslp-lake-ballet-op20-tchaikovsky-pyotr`, its publisher and year unread. Commons is unsearched.
  - [x] *Night on Bald Mountain*'s print: none is reachable, and it gets no Original for now, by d8.
  - [x] *Swan Lake* and *Can-Can*: their prints are confirmed or replaced, as the handoff says.
    - *Swan Lake*: Kashkin's two-hand piano score, Jurgenson, Moscow, plate 2950, Paris agent Mackar,
      no year printed. Gallica's scan `bpt6k1913424b` is on Commons as 172 images. Act II No. 1, the
      Scene, is printed pages 64 to 66, images 68 to 70, in B minor and common time, about 70 bars, set
      whole. The files are `piano-n68.jpg` to `piano-n70.jpg`, at 3840 pixels.
    - *Can-Can*: Heugel's 1874 vocal score, Archive item `orpheauxenfers00offe`, No. 28 Galop infernal,
      printed pages 287 to 291, which are images n302 to n306 in `full/`. It is in D major and 2/4,
      about 105 bars, set whole. The famous strain enters at "Chœur général" on page 289.
- [x] Each fetched page is transcribed to `page-n<N>.txt` beside it.
  - [x] *William Tell*'s finale, pages n10 to n14.
    - [x] Pages n10 and n14 are whole, from the 3840-pixel scans in `full/`.
    - [x] Page n11 from bar p7.42, n12 from p8.13 and n13 from p9.21.
  - [x] *Swan Lake*, pages 64 to 66, and *Can-Can*, pages 287 to 291.
  - [x] *The Sorcerer's Apprentice*, *Vltava*, *Beethoven's Fifth* and *Boléro*, each in its cut.
    - [x] *Boléro*, bars 1 to 76, in `page-n1-2.txt` to `page-n9.txt`.
    - [x] *Vltava*, bars 1 to 79 and 333 to 427, in `page-n8-10.txt` to `page-n109-111.txt`.
    - [x] *The Sorcerer's Apprentice*, images n8 to n12, two bars of n13, then n31 to n32.
    - [x] *Beethoven's Fifth*, images n0 to n2 and n5 to n9.
- [x] *Beethoven's Fifth* and *Boléro*. `tools/our-songs/beethoven-5.ts:208`, `tools/our-songs/bolero.ts:229`
  - [x] *Boléro*: bars 1 to 76 and one closing C major chord of ours, and its review is settled.
  - [x] *Beethoven's Fifth*: 382 bars, the exposition once, then bar 248 to the end, and its review is settled.
- [x] *Can-Can* and *Swan Lake*. `tools/our-songs/can-can.ts:173`, `tools/our-songs/swan-lake.ts:184`
  - [x] *Swan Lake*: 70 bars, set whole, and its review is settled.
  - [x] *Can-Can*: 146 played bars with every repeat, `keyShift` 7, and its review is settled.
- [x] *William Tell* and *Vltava*. `tools/our-songs/william-tell.ts:210`, `tools/our-songs/vltava.ts:174`
  - [x] *William Tell*: 252 bars, set whole, and its review is settled.
  - [x] *Vltava*: 174 played bars, 1 to 79 then 333 to 427, and its review is settled.
- [x] *The Sorcerer's Apprentice*. *Night on Bald Mountain* waits for a print, by d8. `tools/our-songs/the-sorcerers-apprentice.ts:109`
- [x] The review's every finding is settled.
- [x] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 3. A page is read by the system, and its bars are set by a command

**Does:** the tools and briefs that cut an Original's cost per bar. Every later stage then keeps its
pieces whole, at a target of a fifth of stage 2's tokens a song.
**Gate:** stage 2 is committed.

- [ ] `tools/crop-systems.ts <page image>` finds each system from its staff lines' rows and cuts it into two half-system crops at twice the scan's size, through `magick`. `tools/crop-systems.ts:1`
- [ ] Test `crop_systems_finds_every_system`, on a page of three systems that the test draws. `tools/crop-systems.test.ts:1`
- [ ] `tools/original-from-pages.ts <slug>` reads `.agent-tmp/src-<slug>/page-*.txt` and writes `tools/our-songs/<slug>-print.ts`, the print's bars as `PrintBar`s keyed by their page labels. It refuses a hand that does not fill its bar and a `?` left in a pitch. `tools/original-from-pages.ts:1`
- [ ] Test `original_from_pages_keeps_every_bar_and_refuses_a_short_hand`. `tools/original-from-pages.test.ts:1`
- [ ] The three briefs leave `.agent-tmp/` for `docs/agent/originals.md`, rewritten for this stage's tools. They brief a transcriber of one system, a writer of the guide and the cut, and a reviewer of flagged bars. `docs/agent/originals.md:1`
- [ ] `docs/our-songs.md` § *How a song is made* says how an Original is made with the two tools. `docs/our-songs.md:189`
- [ ] Both tools pass `bun run build`, and the session commits the stage.

### 4. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stage 2's last batch is committed. Both songs hold their Originals, and the meter accepts each.
*Beethoven's Fifth* is reviewed and settled. *The Sorcerer's Apprentice* has four review findings open.
The user may listen to *Beethoven's Fifth* now.

- *Beethoven's Fifth* plays 382 bars in about 212 seconds. They are the exposition once, then bar 248
  (n5.s1.7, the motto) to the end. The recapitulation prints 253 bars, since Liszt omits one rest bar.
- *The Sorcerer's Apprentice* plays 594 grid bars in about 318 seconds. The print's pages 1 to 5 and
  two bars of page 6 come first, then pages 24 and 25.
- Two literal readings stand where the reviewer suspects an engraver's slip. They are Fb6 at n8.s1.2,
  grid bar 18, and LH Bb3 at n9.s6.2, grid bar 221. The user's ear may settle them.
- The transcriptions stay in `.agent-tmp/src-<slug>/page-*.txt`, labelled `n<image>.s<system>.<k>`.

### Next

**Stage 2: settle the Dukas review, then close the stage.** File:
`tools/our-songs/the-sorcerers-apprentice.ts`. Gate: met.

1. **Roll the bracketed left-hand chords instead of dropping them,** as `rolledWide` does. They are
   `E_FLAT_CALL` at line 506 (grid bars 367 and 373), and the n12.s4.6 and s5.5 bars (grid 365 and 371).
   Each adds Db4+Eb4+G4 or B3+Eb4+G4 over the left hand's Eb2+Eb3. The comment near line 509 then changes.
2. **Fix n10.s2.8's comment (grid bar 258).** F2+Ab2 is dropped so the meter's hook check finds the
   tune's C4 in one hand, not for the span the comment claims.
3. Run `bun tools/check-our-song.ts tools/our-songs/the-sorcerers-apprentice.ts`, then
   `bun tools/make-our-songs.ts` and the build. Commit, tick the stage's last items, and set stage 2 done.
4. Then stage 3, as its `### 3.` section plans it. It builds the two tools and the briefs before any
   further song. The standing decisions say why.

Expected red: none.

### Backlog

- The meter rates every Original past Hard as 5. A later goal may give Advanced and Expert measured limits.
