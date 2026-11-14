---
looper: 1
title: Original arrangements
summary: "Every song of ours whose tune is not our own ends on an Original that sounds like the piece: our own setting of its form, key, harmony and accompaniment for two hands."
context: [docs/decisions/0014.md, docs/our-songs.md, tools/make-our-songs.ts, tools/song-meter.ts, tools/our-songs/morning-mood.ts, src/library/guide.ts, src/library/guide-panel.ts]
stages:
  - id: 1
    title: "The Original's plumbing and Morning Mood"
    status: done
  - id: 2
    title: "Originals: the orchestral showpieces"
    status: open
  - id: 3
    title: "Originals: the slow and solemn pieces"
    status: open
  - id: 4
    title: "Originals: the calm classics"
    status: open
  - id: 5
    title: "Originals: dances, waltzes and the first shanties"
    status: open
  - id: 6
    title: "Originals: the last shanties and the grand carols"
    status: open
  - id: 7
    title: "Originals: the English carols, first half"
    status: open
  - id: 8
    title: "Originals: the English carols, second half"
    status: open
  - id: 9
    title: "Originals: the German carols"
    status: open
  - id: 10
    title: "Originals: the last carols and the children's songs"
    status: open
  - id: 11
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: original-keeps-source
    stage: 1
    name: every Original of ours keeps its hook, a finger on every note and a hand's span, and is rated by the meter
    run: [bun, test, tools/our-songs.test.ts]
    tests: [every_original_of_ours_keeps_its_hook_and_a_hand]
  - id: original-guide
    stage: 1
    name: the Original step of a song of ours plays our arrangement and shows its guide
    run: [bun, x, playwright, test, e2e/guide.e2e.ts]
    tests: [the_original_of_ours_shows_its_guide]
  - id: every-song-has-an-original
    stage: 10
    name: every song of ours whose tune is not our own has an Original
    run: [bun, test, tools/our-songs.test.ts]
    tests: [every_song_of_ours_has_an_original]
---

# Original arrangements

## Why

The user found that our songs lose the original's sound. Every version is built from a short tune and
shaped by its level's rules, so its accompaniment comes from a list per level and not from the piece.
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
- **The Original follows its source** in form, key, meter, tempo, harmony, voicing, pedal and its own
  accompaniment figure. A score for more than two hands is reduced to what two hands reach. The tune
  and the bass come first, then the figure that gives the piece its sound.
- **The length is the whole piece when it plays in about four minutes or less.** A longer piece keeps
  its best-known sections in their own order, cut where a section ends. It closes on the home chord.
- **It adds no bar of our own.** The only bars that are not in the source are a cut's last cadence, at
  most two bars, and the module names them.
- **The meter rates it** as the lowest version whose limits it fits, at that version's catalog
  difficulty. Past Hard it rates 5, which is Advanced. The meter's head comment owns this rule.
- **It keeps the meter's checks of a hand:** a finger on every note, the practical span, and the hook
  note for note in the print's key. It keeps no limit of the four versions.
- **An Original keeps its print's key, even where our versions moved the tune.** Its source names the
  move as `keyShift`, in semitones, and `originalTuneProblems` in `tools/song-meter.ts` finds the hook
  there. *Can-Can* follows Heugel's D major against our G, so its `keyShift` is 7. Many carols move too.
- **The Original stays last on the card,** even where it rates below Hard. The level filter files it
  under its own level.
- **Its guide has the same parts as a version's guide,** written in English and German. Its tricky
  spots are the bars the meter names. Every other locale shows the English until a translation pass.
- **Its tagline is a new text,** because "The composer's own notes." is false for our arrangement. It
  says the piece is set for two hands. The catalog originals keep their tagline.
- **A batch's writers are writing subagents on the session's model, two songs each.** Their files are
  disjoint, so four of them run side by side. Each one runs `bun tools/check-our-song.ts <slug>` on its
  own songs and never builds.
- **A fresh reviewer reads every batch against its sources.** It checks the form, the key, the meter,
  the accompaniment figure and that no bar is our own, and lists each drift. The session settles every
  finding before the batch's commit.
- **One commit per batch,** once `bun tools/make-our-songs.ts` and the build are green.
- **The user's listening review is never waited on.** Each batch's handoff names its songs, and a later
  session fixes what the user files.
- **Lanes:** stage 1 comes first, since every batch builds on its plumbing. Stages 2 to 10 touch disjoint
  song modules but share the catalog and the license file that the writer rewrites. They run in order.
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
  stay, and `mythic` stays null. A later goal looks for a print again. Stage 10's test
  `every_song_of_ours_has_an_original` names it as the one song still waiting for a print.
- **Among two-hand reductions, the plainest faithful one wins** over a virtuoso transcription such as
  Liszt's, since a learner plays it. A four-hand print or a score comes only when no two-hand print exists.

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

- [ ] Each piece's print is found and its pages fetched to `.agent-tmp/src-<slug>/`.
  - [x] Six prints are found and fetched, at about 2000 pixels, each named here.
    - *William Tell*: Niedermeyer's two-hand reduction, Troupenas, Paris, 1829 to 1830, Gallica's scan on
      Commons as `Guillaume Tell, ouverture réduite pour le piano … par L. Niedermeyer - btv1b90674594 (<N> of 96).jpg`.
      The finale is images 10 to 14, printed pages 6 to 10, set whole, in 2/4 and E major at 152.
    - *The Sorcerer's Apprentice*: Dukas's own two-piano version, Durand, plate D. & F. 5314, Archive item
      `imslp-sorcier-dukas-paul`. PDF pages 1 to 18 are the first piano and 19 to 35 the second, aligned
      by rehearsal numbers. The cut keeps the start to rehearsal 10, then 31 to the end. Its first end is unchecked.
    - *Vltava*: Eulenburg's 1914 full score, plate E.E. 3642, Archive item `mavlastvltavno20000unse`, where
      printed page p is image n(p+7). The cut is bars 1 to 79, then a closing cadence before the hunt.
      It may add the E major return from bar 237, if a section ends there.
    - *Beethoven's Fifth*: Czerny's four-hand version, Kistner, Archive item `sinfoniano5op6700beet`, with
      Secondo and Primo on facing pages. The cut is bars 1 to 124, then the coda from about bar 374.
      Commons was not searched for a two-hand print.
    - *Boléro*: Durand's 1929 full score, plate D. & F. 11 839, Archive item
      `imslp-104723-pmlp-03667-ravel-bolero-cropped`. The cut is bars 1 to about 40, then about 306 to 340.
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
- [ ] Each fetched page is transcribed to `page-n<N>.txt` beside it.
  - [x] *William Tell*'s finale, pages n10 to n14.
    - [x] Pages n10 and n14 are whole, from the 3840-pixel scans in `full/`.
    - [x] Page n11 from bar p7.42, n12 from p8.13 and n13 from p9.21.
  - [x] *Swan Lake*, pages 64 to 66, and *Can-Can*, pages 287 to 291.
  - [ ] *The Sorcerer's Apprentice*, *Vltava*, *Beethoven's Fifth* and *Boléro*, each in its cut.
- [ ] *Beethoven's Fifth* and *Boléro*. `tools/our-songs/beethoven-5.ts:208`, `tools/our-songs/bolero.ts:229`
- [x] *Can-Can* and *Swan Lake*. `tools/our-songs/can-can.ts:173`, `tools/our-songs/swan-lake.ts:184`
  - [x] *Swan Lake*: 70 bars, set whole, and its review is settled.
  - [x] *Can-Can*: 146 played bars with every repeat, `keyShift` 7, and its review is settled.
- [ ] *William Tell* and *Vltava*. `tools/our-songs/william-tell.ts:210`, `tools/our-songs/vltava.ts:174`
  - [x] *William Tell*: 252 bars, set whole, and its review is settled.
  - [ ] *Vltava*.
- [ ] *The Sorcerer's Apprentice*. *Night on Bald Mountain* waits for a print, by d8. `tools/our-songs/the-sorcerers-apprentice.ts:109`
- [ ] The review's every finding is settled.
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 3. Originals: the slow and solemn pieces

**Does:** the Originals of eight slow pieces.
**Split:** as stage 2.
**Gate:** stage 2 is committed.

- [ ] *Funeral March* and *Wedding March*. `tools/our-songs/funeral-march.ts:188`, `tools/our-songs/wedding-march.ts:183`
- [ ] *Lacrimosa* and *Mahler's Adagietto*. `tools/our-songs/lacrimosa.ts:153`, `tools/our-songs/mahler-adagietto.ts:211`
- [ ] *Mozart's 21st, Andante* and *Toccata in D minor*. `tools/our-songs/mozart-21-andante.ts:100`, `tools/our-songs/toccata-in-d-minor.ts:78`
- [ ] *Chopin's Nocturne in C-sharp minor* and *Aquarium*. `tools/our-songs/chopin-nocturne-c-sharp-minor.ts:179`, `tools/our-songs/aquarium.ts:184`
- [ ] The review's every finding is settled.
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 4. Originals: the calm classics

**Does:** the Originals of eight calm classics.
**Split:** as stage 2.
**Gate:** stage 3 is committed.

- [ ] *Air on the G String* and *Also sprach Zarathustra*. `tools/our-songs/air-on-the-g-string.ts:161`, `tools/our-songs/also-sprach-zarathustra.ts:49`
- [ ] *Ave Maria* and *Beethoven's Seventh, Allegretto*. `tools/our-songs/ave-maria.ts:192`, `tools/our-songs/beethoven-7-allegretto.ts:101`
- [ ] *Canon in D* and *Dies irae*. `tools/our-songs/canon-in-d.ts:96`, `tools/our-songs/dies-irae.ts:89`
- [ ] *Eine kleine Nachtmusik* and *Gymnopédie No. 1*. `tools/our-songs/eine-kleine-nachtmusik.ts:87`, `tools/our-songs/gymnopedie-1.ts:91`
- [ ] The review's every finding is settled.
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 5. Originals: dances, waltzes and the first shanties

**Does:** the Originals of six dances and two shanties.
**Split:** as stage 2.
**Gate:** stage 4 is committed.

- [ ] *Habanera* and *In the Hall of the Mountain King*. `tools/our-songs/habanera.ts:85`, `tools/our-songs/hall-of-the-mountain-king.ts:104`
- [ ] *Handel's Sarabande* and *Hungarian Dance No. 5*. `tools/our-songs/handel-sarabande.ts:118`, `tools/our-songs/hungarian-dance-5.ts:89`
- [ ] *Ode to Joy* and *The Blue Danube*. `tools/our-songs/ode-to-joy.ts:59`, `tools/our-songs/the-blue-danube.ts:325`
- [ ] *Blow the Man Down* and *Drunken Sailor*. `tools/our-songs/blow-the-man-down.ts:175`, `tools/our-songs/drunken-sailor.ts:183`
- [ ] The review's every finding is settled.
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 6. Originals: the last shanties and the grand carols

**Does:** the Originals of three shanties and five carols. A carol's source is its first print with
accompaniment, or a hymnal's setting printed before 1931.
**Split:** as stage 2.
**Gate:** stage 5 is committed.

- [ ] *Haul Away Joe* and *Sailor's Hornpipe*. `tools/our-songs/haul-away-joe.ts:183`, `tools/our-songs/sailors-hornpipe.ts:174`
- [ ] *Spanish Ladies* and *Carol of the Bells*. `tools/our-songs/spanish-ladies.ts:188`, `tools/our-songs/carol-of-the-bells.ts:167`
- [ ] *O Holy Night* and *Joy to the World*. `tools/our-songs/o-holy-night.ts:229`, `tools/our-songs/joy-to-the-world.ts:99`
- [ ] *Hark! The Herald Angels Sing* and *O Come, All Ye Faithful*. `tools/our-songs/hark-the-herald-angels-sing.ts:145`, `tools/our-songs/o-come-all-ye-faithful.ts:113`
- [ ] The review's every finding is settled.
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 7. Originals: the English carols, first half

**Does:** the Originals of eight carols, sourced as stage 6 says.
**Split:** as stage 2.
**Gate:** stage 6 is committed.

- [ ] *Silent Night* and *O Christmas Tree*. `tools/our-songs/silent-night.ts:122`, `tools/our-songs/o-christmas-tree.ts:136`
- [ ] *It Came Upon the Midnight Clear* and *Deck the Halls*. `tools/our-songs/it-came-upon-the-midnight-clear.ts:149`, `tools/our-songs/deck-the-halls.ts:95`
- [ ] *Angels We Have Heard on High* and *Away in a Manger*. `tools/our-songs/angels-we-have-heard-on-high.ts:179`, `tools/our-songs/away-in-a-manger.ts:168`
- [ ] *Ding Dong Merrily on High* and *God Rest Ye Merry, Gentlemen*. `tools/our-songs/ding-dong-merrily-on-high.ts:184`, `tools/our-songs/god-rest-ye-merry-gentlemen.ts:119`
- [ ] The review's every finding is settled.
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 8. Originals: the English carols, second half

**Does:** the Originals of eight carols, sourced as stage 6 says.
**Split:** as stage 2.
**Gate:** stage 7 is committed.

- [ ] *Good King Wenceslas* and *Jingle Bells*. `tools/our-songs/good-king-wenceslas.ts:237`, `tools/our-songs/jingle-bells.ts:83`
- [ ] *Jolly Old Saint Nicholas* and *O Little Town of Bethlehem*. `tools/our-songs/jolly-old-saint-nicholas.ts:166`, `tools/our-songs/o-little-town-of-bethlehem.ts:179`
- [ ] *The First Noel* and *The Twelve Days of Christmas*. `tools/our-songs/the-first-noel.ts:184`, `tools/our-songs/the-twelve-days-of-christmas.ts:202`
- [ ] *Up on the Housetop* and *We Three Kings*. `tools/our-songs/up-on-the-housetop.ts:171`, `tools/our-songs/we-three-kings.ts:173`
- [ ] The review's every finding is settled.
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 9. Originals: the German carols

**Does:** the Originals of eight German carols, sourced as stage 6 says.
**Split:** as stage 2.
**Gate:** stage 8 is committed.

- [ ] *Alle Jahre wieder* and *Es ist ein Ros entsprungen*. `tools/our-songs/alle-jahre-wieder.ts:152`, `tools/our-songs/es-ist-ein-ros-entsprungen.ts:181`
- [ ] *Ihr Kinderlein, kommet* and *Kling, Glöckchen*. `tools/our-songs/ihr-kinderlein-kommet.ts:155`, `tools/our-songs/kling-gloeckchen.ts:145`
- [ ] *Kommet, ihr Hirten* and *Leise rieselt der Schnee*. `tools/our-songs/kommet-ihr-hirten.ts:204`, `tools/our-songs/leise-rieselt-der-schnee.ts:166`
- [ ] *Morgen, Kinder, wird's was geben* and *O du fröhliche*. `tools/our-songs/morgen-kinder.ts:194`, `tools/our-songs/o-du-froehliche.ts:190`
- [ ] The review's every finding is settled.
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 10. Originals: the last carols and the children's songs

**Does:** the last eight Originals, and the test that no song lacks one. A children's song's source is
its first print with accompaniment, or a songbook's setting printed before 1931.
**Split:** as stage 2.
**Gate:** stage 9 is committed.

- [ ] *Süßer die Glocken nie klingen* and *Tochter Zion*. `tools/our-songs/suesser-die-glocken.ts:168`, `tools/our-songs/tochter-zion.ts:199`
- [ ] *Mary Had a Little Lamb* and *Twinkle, Twinkle, Little Star*. `tools/our-songs/mary-had-a-little-lamb.ts:54`, `tools/our-songs/twinkle-twinkle-little-star.ts:71`
- [ ] *Old MacDonald Had a Farm* and *Row, Row, Row Your Boat*. `tools/our-songs/old-macdonald-had-a-farm.ts:62`, `tools/our-songs/row-row-row-your-boat.ts:72`
- [ ] *Happy Birthday* and *Yankee Doodle*. `tools/our-songs/happy-birthday.ts:105`, `tools/our-songs/yankee-doodle.ts:81`
- [ ] The review's every finding is settled.
- [ ] Test `every_song_of_ours_has_an_original`: each song has a catalog original or ours, except the three tunes of our own. `tools/our-songs.test.ts:42`
- [ ] `bun tools/make-our-songs.ts` writes the batch, and the build is green.

### 11. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

Stage 2's first batch is committed: *William Tell*, *Swan Lake* and *Can-Can* hold their Originals,
each reviewed against its print. The user may listen to these three. *Night on Bald Mountain* gets no
Original for now, by the user's answer to d8.

- The notation ties a note across a bar line with `~`, in `tools/song-notation.ts`.
- An Original's `source.keyShift` names a print in another key than the tune, as *Can-Can*'s D does.
- Three prints are left, plus *Vltava*: *The Sorcerer's Apprentice*, *Beethoven's Fifth* and *Boléro*.
  Their pages sit in `.agent-tmp/src-<slug>/` at about 2000 pixels, too small to read.

The briefs are in `.agent-tmp/`: `brief-s2-sources.md`, `brief-s2-transcribe.md` and
`brief-s2-write.md`. The writer's brief now names the tie and the triplet unit, `steps: 24`.

### Next

**Stage 2: the orchestral showpieces.** Files: `tools/our-songs/vltava.ts`, `beethoven-5.ts`,
`bolero.ts` and `the-sorcerers-apprentice.ts`. Gate: met.

1. **Fetch the four prints' cut pages at about 4000 pixels** into `.agent-tmp/src-<slug>/full/`, with one
   source helper. Commons serves 3840 pixels by `iiurlwidth=4000`, and the Archive serves its native size.
2. **Transcribe them, two systems per helper.** Name each helper's systems by number in its prompt. A
   split by halves left page 288 of *Can-Can* to chance. A score or four-hand page is reduced as the brief says.
3. **One writer per song,** from the transcriptions alone, with `brief-s2-write.md`.
4. **One fresh reviewer per song,** given the doubtful readings to settle at a zoom. A misprint the
   harmony proves, such as a missing sharp that clashes, is set right and named in a comment.
5. Run `bun tools/make-our-songs.ts` and the build, then commit the batch, and close stage 2.

Expected red: none.

### Backlog

- The meter rates every Original past Hard as 5. A later goal may give Advanced and Expert measured limits.
