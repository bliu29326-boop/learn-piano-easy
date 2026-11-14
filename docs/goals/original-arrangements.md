---
looper: 1
title: Original arrangements
summary: "Every song of ours whose tune is not our own ends on an Original that sounds like the piece: our own setting of its form, key, harmony and accompaniment for two hands."
context: [docs/decisions/0014.md, docs/our-songs.md, tools/make-our-songs.ts, tools/song-meter.ts, tools/our-songs/morning-mood.ts, src/library/guide.ts, src/library/guide-panel.ts]
stages:
  - id: 1
    title: "The Original's plumbing and Morning Mood"
    status: open
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
  note for note in the tune's own key. It keeps no limit of the four versions.
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
- [ ] *Morning Mood*'s Original, from the best source the order above finds, with its guide in English and German. `tools/our-songs/morning-mood.ts:206`
  - [x] The source: Schirmer's 1899 piano edition of Op. 46, scanned as Internet Archive item `31761045200615`.
  - [ ] Four subagents transcribe the print's four pages to files, one page each.
  - [ ] A writing subagent sets the whole piece from those files, with its guide in English and German.
  - [ ] `bun tools/check-our-song.ts` accepts it, and a fresh reviewer reads it against the print.
  - [ ] `bun tools/make-our-songs.ts` writes `mythic.mid`, its row and its guide.
- [ ] Test `every_original_of_ours_keeps_its_hook_and_a_hand`. `tools/our-songs.test.ts:42`
- [ ] Test `the_original_of_ours_shows_its_guide`: *Morning Mood*'s Original step opens our file and its guide. `e2e/guide.e2e.ts:1`
- [x] The rules of decision 0014 move into `docs/our-songs.md`: the Original's row, its rules, its guide and how it is made. `docs/our-songs.md:19`
- [x] The feature list says every song ends on its Original. `docs/reference/features.md:1`
- [ ] Look at *Morning Mood*'s card and the Original's guide with `bun run shot`, on a phone and a desktop.

### 2. Originals: the orchestral showpieces

**Does:** the Originals of eight orchestral pieces, each a reduction of the full score or of a period
piano version.
**Split:** four writing subagents, side by side, two songs each, as one item below each. One fresh
reviewer then reads the batch against its sources.
**Gate:** `tools/our-songs/morning-mood.ts` holds an Original, and `the_original_of_ours_shows_its_guide` passes.

- [ ] *Beethoven's Fifth* and *Boléro*. `tools/our-songs/beethoven-5.ts:208`, `tools/our-songs/bolero.ts:229`
- [ ] *Can-Can* and *Swan Lake*. `tools/our-songs/can-can.ts:173`, `tools/our-songs/swan-lake.ts:184`
- [ ] *William Tell* and *Vltava*. `tools/our-songs/william-tell.ts:210`, `tools/our-songs/vltava.ts:174`
- [ ] *Night on Bald Mountain* and *The Sorcerer's Apprentice*. `tools/our-songs/night-on-bald-mountain.ts:197`, `tools/our-songs/the-sorcerers-apprentice.ts:109`
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

The Original's plumbing has landed. `OurSong.mythic` takes an `OurOriginal`, and `originalProblems` in
`tools/make-our-songs.ts` checks it. The meter's `originalDifficulty` rates it. The guide's `original`,
`stepOf`, the shell and the library show it. The docs and both tests are written.

*Morning Mood* has no Original yet. Its source is Schirmer's piano edition of 1899, edited by Louis
Oesterle, Internet Archive item `31761045200615`. Printed pages 3 to 6 hold the whole piece. They are
`.agent-tmp/src-morning-mood/n6.jpg` to `n9.jpg`, refetched from
`https://archive.org/download/31761045200615/page/n<N>.jpg` if missing.

One writing subagent tried the whole piece and ran out of context before writing a note. Its findings:

- `bpm: 90, numerator: 6, denominator: 8, steps: 4` gives dotted quarter = 60 with a 32nd per unit.
- A hand's line holds one chord at a time, so it carries no second voice. A note held under moving notes
  is cut at the next onset and left to the pedal.
- Page 4 has a left-hand chord with a sharp at the ff bar. Its "molto" crescendo bars give treble
  sixteenths to the left hand.

### Next

**Stage 1, the rest: Morning Mood's Original.** Files: `tools/our-songs/morning-mood.ts`. Gate: none.

1. **Transcribe in four read-only subagents, one per page, side by side.** Each crops its page one system
   at a time with `magick` and writes its bars in the notation to `.agent-tmp/src-morning-mood/page-n<N>.txt`.
   It writes the file after each system, so a full context loses nothing. Each numbers its bars from its
   page's first bar, and the session renumbers them. `page-n9.txt` already holds the last page, bars
   "60" to "87", with its doubtful readings. Its numbers are a guess, and other helpers may still add files.
2. **One writing subagent assembles the module** from the four files: the Original, its fingers, pedal,
   guide and German. It runs `bun tools/check-our-song.ts tools/our-songs/morning-mood.ts` until it passes.
3. **A fresh reviewer reads it against the print,** and the session settles each finding.
4. Run `bun tools/make-our-songs.ts`, the build, and the two tests by name. Then take the shots on a phone and
   a desktop. `tools/shot.ts` has no fill step, so type the search with `--eval`.

Expected red: `every_original_of_ours_keeps_its_hook_and_a_hand` and `the_original_of_ours_shows_its_guide`,
until *Morning Mood* holds an Original.

### Backlog

- The meter rates every Original past Hard as 5. A later goal may give Advanced and Expert measured limits.
