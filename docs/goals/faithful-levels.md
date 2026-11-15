---
looper: 1
title: Faithful levels
summary: "The four versions of every song of ours play the source's real phrases instead of bars of our own, and Medium and Hard use its own accompaniment where the limits allow."
context: [docs/decisions/0014.md, docs/our-songs.md, tools/make-our-songs.ts, tools/song-meter.ts, src/library/moved-songs.ts, src/theory/fingering-editor.ts]
stages:
  - id: 1
    title: "The rework's rules, its new files and the audit"
    status: done
  - id: 2
    title: "Batch 1: the songs with an Original of ours"
    status: done
  - id: 3
    title: "Batch 2: the catalog's Originals and the slow classics"
    status: done
  - id: 4
    title: "Batch 3: the orchestral and choral classics"
    status: done
  - id: 5
    title: "Batch 4: the short motifs and the codas"
    status: done
  - id: 6
    title: "Batch 5: the sea songs"
    status: done
  - id: 7
    title: "the goal is verified once, and every failure is fixed"
    status: done
    gate: true
checks:
  - id: rework-keeps-work
    stage: 1
    name: a reworked version's file takes the learner's tracks, keys and last song, and leaves the fingers set by hand under the old file
    run: [bun, test, src/library/moved-songs.test.ts]
    tests: [a_reworked_version_moves_all_but_the_fingers]
  - id: no-bar-of-our-own
    stage: 6
    name: no version of a public domain song plays a bar the module marks as our own
    run: [bun, test, tools/our-songs.test.ts]
    tests: [no_version_plays_a_bar_of_our_own]
---

# Faithful levels

## Why

[Decision 0014](../decisions/0014.md) gives every song an Original that sounds like the piece. The four
versions still sound less like it than they could. Many of them play the tune and then bars of our own.
Each level's accompaniment comes from a list per level, such as an Alberti bass. It does so even where the piece
has its own figure that a level could play. This goal brings the four versions closer to the source,
inside the limits they keep.

## Standing decisions

- **The limits stay.** Every version still fits its own limits, earns its place and plays the hook.
  Only what fills the limits changes.
- **A bar of our own is replaced by the source's next real phrase,** simplified to the version's
  limits. A version too short for the next phrase ends earlier, on the home chord.
- **Medium and Hard take the source's own accompaniment figure** where the limits allow it. They fall
  back to the level's patterns in [docs/our-songs.md](../our-songs.md) only where the limits refuse it.
- **Beginner and Easy keep their patterns,** and change only to drop bars of our own.
- **The keys stay as the rules allow.** Fidelity never moves a version to a key its limits refuse.
- **A reworked version gets a new file:** `<id>-2.mid` beside the old `<id>.mid`. Its catalog row moves
  to the new file, and the old file leaves the catalog and the folder.
- **A learner's work moves to the new file, except the fingers set by hand.** Those are keyed by note
  index, and the new notes differ. They stay under the old file, unused, so no work is overwritten. The
  track settings, the keys, the last song and the favourite move, as `src/library/moved-songs.ts`
  already moves them.
- **A take stays under the old file,** as `moved-songs` already rules.
- **A version that keeps its notes keeps its file.** Only a version whose notes change is reworked.
- **A guide text that still fits keeps its translations.** A text whose meaning changes loses them in
  every locale beyond German. The English then shows until that locale's translation pass.
- **A bar of our own is marked in its module,** so the test can find it. The songs of our own tunes are
  exempt.
- **The songs with an Original go first,** so the writer reads the next phrase from it. Only twelve
  songs have one, and the user stopped the rest for their cost. Every other song is reworked from the
  print its module's `source.edition` names, or from the printed score in its Wikipedia wikitext. The
  writer compares each phrase note for note, as the playbook says. Waiting for the Originals would
  stall the goal on a goal nobody runs.
- **`REWORKED_VERSIONS` in `src/library/moved-songs.ts` is the one home of a version's revision.** The
  app needs the list on start and never loads a module, so the writer reads the file name from it.
- **A last bar that only holds the home chord is not a bar of our own.** It is how a version ends.
- **Where the source has no next phrase, the version plays the tune again in another setting** or ends
  on the home chord. Each still earns its place.
- **A source whose next phrase no public domain print shows counts as having none.** The versions then
  repeat the print's readable bars, as *Nocturne in C sharp minor* repeats its bars 1 to 8.
- **The batch's writer settles the audit's open points:** *William Tell*'s bar edges, *Moonlight
  Sonata*'s last bars and *Yankee Doodle*'s unread versions.
- **A print's chord that clashes with the tune past a version's limit gives way** to the print's next
  chord, a half bar early. *Can-Can*'s bar 4 takes D7 under the tune's C for that reason.
- **Writers, review and commits** work as `original-arrangements` rules: two fresh reviewers of four
  songs each per batch, and one commit per batch. Each writing subagent takes one song, four at a time,
  since a writer reading a print runs out of context before a second song.
- **A folk tune in the form sung today is not a bar of our own.** *Yankee Doodle* and *Twinkle,
  Twinkle* keep that form, though the old prints differ in a few notes. Fixing the `tune` would change
  every version's notes, and a learner's fingers with them.
- **A tune played again keeps the chords its version has under the tune.** Beginner and Easy keep
  their patterns there, as in the tune bars. *Haul Away Joe*'s and *Drunken Sailor*'s Beginner and Easy
  repeat their own chords for that reason.
- **The chain:** this goal runs after `original-arrangements` and before `urdu` and `japanese`.

## Stages

### 1. The rework's rules, its new files and the audit

**Does:** the rules, the move of a learner's work to a reworked file and the test for bars of our own.
It also writes the audit that lists every version to rework.
**Split:** a read-only `reader` subagent audits every song module. It lists each version that plays a bar
of our own, with its bars. It also lists each Medium or Hard whose accompaniment ignores the source's figure.
**Gate:** `original-arrangements` is reached.

- [x] The rules of this goal move into `docs/our-songs.md` § *The tune keeps the song recognisable* and § *Writing for the piano*. `docs/our-songs.md:67`
- [x] `REWORKED_VERSIONS` names each reworked version, and the writer writes `<id>-2.mid` for it. `tools/make-our-songs.ts:200`
- [x] The move of a reworked version's stored work, every key but `FINGERS_KEY`. `src/library/moved-songs.ts:27`
- [x] Test `a_reworked_version_moves_all_but_the_fingers`. `src/library/moved-songs.test.ts:1`
- [x] A module marks each bar of our own, and test `no_version_plays_a_bar_of_our_own` lists them. It stays red until the last batch. `tools/our-songs.test.ts:42`
- [x] The audit's batches, eight songs each, written as stages 2 onward of this goal, before the gate stage. `docs/goals/faithful-levels.md:1`

### What every batch does

Each song of a batch reworks the versions its item names. The bars in brackets are its `ownBars`, from
the audit. A version named for its accompaniment takes the source's figure the item names.

- Each reworked version replaces its marked bars, drops its `ownBars`, and is added to
  `REWORKED_VERSIONS` in `src/library/moved-songs.ts`.
- Its guide follows: tips for the new tricky bars, and German for every changed text. A text whose
  meaning changes loses its other locales.
- Every reference to a reworked file moves to the new file: the lessons, the play modes and the landing
  page. `rg "ours/<slug>/<id>.mid"` finds them.
- `bun tools/make-our-songs.ts` writes the files once the meter accepts every song of the batch.

### 2. Batch 1: the songs with an Original of ours

**Does:** reworks the eight songs whose Original is ours. The writer reads the next phrase from it.
**Split:** four writing subagents of two songs each, then two fresh reviewers of four songs each. Writers
build nothing, and the session runs the writer and the build once all end.
**Gate:** stage 1 is done.

- [x] *Beethoven's Fifth*: all four (c 5-12, r e l 5-16). `tools/our-songs/beethoven-5.ts:1`
- [x] *Boléro*: all four (c 9-11, r e l 9-15). Epic and Legendary keep the snare rhythm throughout. `tools/our-songs/bolero.ts:1`
- [x] *Can-Can*: all four (c r 8-15, e l 8-16). `tools/our-songs/can-can.ts:1`
- [x] *Morning Mood*: all four (9-15). `tools/our-songs/morning-mood.ts:1`
- [x] *Swan Lake*: all four (9-16). Epic and Legendary weigh the Original's tremolo. `tools/our-songs/swan-lake.ts:1`
- [x] *The Sorcerer's Apprentice*: all four (11-15). `tools/our-songs/the-sorcerers-apprentice.ts:1`
- [x] *Vltava*: all four (c r 10-16, e l 10-17). Epic and Legendary weigh the river's eighths. `tools/our-songs/vltava.ts:1`
- [x] *William Tell*: all four (as marked). Epic and Legendary weigh the gallop's repeated chords. `tools/our-songs/william-tell.ts:1`

### 3. Batch 2: the catalog's Originals and the slow classics

**Does:** reworks the songs whose Original is the catalog's, then four slow classics.
**Split:** as stage 2.
**Gate:** stage 2 is done.

- [x] *Clair de Lune*: all four (c 9, r e l 17). `tools/our-songs/clair-de-lune.ts:1`
- [x] *Moonlight Sonata*: all four (c 10-11, r e l 18). Check the closing bars against `piano-midi/mond_1.mid` first. `tools/our-songs/moonlight-sonata.ts:1`
- [x] *Für Elise*: Epic and Legendary take the rising broken chords Rare already plays. No bar is ours. `tools/our-songs/fur-elise.ts:1`
- [x] *Funeral March*: all four (9-16). Epic and Legendary take the rocking chords. `tools/our-songs/funeral-march.ts:1`
- [x] *Eine kleine Nachtmusik*: all four (as marked). `tools/our-songs/eine-kleine-nachtmusik.ts:1`
- [x] *Air on the G String*: all four (c 9-10, r e l 17-18). `tools/our-songs/air-on-the-g-string.ts:1`
- [x] *Ave Maria*: all four (as marked). `tools/our-songs/ave-maria.ts:1`
- [x] *Nocturne in C sharp minor*: all four (as marked). `tools/our-songs/chopin-nocturne-c-sharp-minor.ts:1`

### 4. Batch 3: the orchestral and choral classics

**Does:** reworks eight classics with no Original. The writer reads the print the module's
`source.edition` names, or the song's printed score in its Wikipedia wikitext.
**Split:** as stage 2.
**Gate:** stage 3 is done.

- [x] *Lacrimosa*: all four (as marked). `tools/our-songs/lacrimosa.ts:1`
- [x] *Adagietto*: all four (c 9-11, r e l 9-15). `tools/our-songs/mahler-adagietto.ts:1`
- [x] *Piano Concerto No. 21, Andante*: all four (c 7-8, r e l 13-15). `tools/our-songs/mozart-21-andante.ts:1`
- [x] *Night on Bald Mountain*: all four (as marked). `tools/our-songs/night-on-bald-mountain.ts:1`
- [x] *Seventh Symphony, Allegretto*: all four (c 9-11, r e l 17-19). `tools/our-songs/beethoven-7-allegretto.ts:1`
- [x] *Gymnopédie No. 1*: all four (c 12, r e l 12-14). `tools/our-songs/gymnopedie-1.ts:1`
- [x] *Hungarian Dance No. 5*: all four (as marked). `tools/our-songs/hungarian-dance-5.ts:1`
- [x] *Toccata in D minor*: the versions marked. `tools/our-songs/toccata-in-d-minor.ts:1`

### 5. Batch 4: the short motifs and the codas

**Does:** reworks six classics and two songs with a coda of ours. The source is found as in stage 4.
**Split:** eight writing subagents of one song each, four at a time, then two fresh reviewers of four
songs each. Writers build nothing, and the session runs the writer and the build once all end.
**Gate:** stage 4 is done.

- [x] *Aquarium*: all four (c r 9-15, e l 9-16). `tools/our-songs/aquarium.ts:1`
- [x] *Also sprach Zarathustra*: all four (c 7, r 14, e l 13-15). `tools/our-songs/also-sprach-zarathustra.ts:1`
- [x] *Wedding March*: all four (c r 9-15, e l 9-16). `tools/our-songs/wedding-march.ts:1`
- [x] *In the Hall of the Mountain King*: check Beginner's and Easy's bar 23 against the print. Mark and rework it only if it is ours. `tools/our-songs/hall-of-the-mountain-king.ts:1`
- [x] *Angels We Have Heard on High*: Epic and Legendary (11). `tools/our-songs/angels-we-have-heard-on-high.ts:1`
- [x] *Twinkle, Twinkle, Little Star*: Easy, Medium and Hard (15). `tools/our-songs/twinkle-twinkle-little-star.ts:1`
- [x] *Yankee Doodle*: the versions marked. `tools/our-songs/yankee-doodle.ts:1`
- [x] *Blow the Man Down*: all four (c r 18-20, e l 18-24). `tools/our-songs/blow-the-man-down.ts:1`

### 6. Batch 5: the sea songs

**Does:** reworks four sea songs. Where the print ends with the tune, a version plays the tune again in
another setting or ends on the home chord.
**Split:** four writing subagents of one song each, then one fresh reviewer.
**Gate:** stage 5 is done.

- [x] *Drunken Sailor*: all four (9-16). `tools/our-songs/drunken-sailor.ts:1`
- [x] *Haul Away Joe*: all four (9-16). `tools/our-songs/haul-away-joe.ts:1`
- [x] *Sailor's Hornpipe*: all four (10-16). `tools/our-songs/sailors-hornpipe.ts:1`
- [x] *Spanish Ladies*: all four (c r 10-16, e l 10-17). `tools/our-songs/spanish-ladies.ts:1`
- [x] Test `no_version_plays_a_bar_of_our_own` passes. `tools/our-songs.test.ts:1`

### 7. the goal is verified once, and every failure is fixed

- [x] Run `looper verify` over the whole goal.
- [x] Fix every failure it names in one pass, never deleting or loosening a test.
- [x] Run `looper verify` once more, and it is green.

## Handoff

### State

Every stage is done, and the goal is reached. `looper verify` is green, e2e included, and both
acceptance checks pass. The gate fixed four failures:

- Test `the_files_match_their_source` read `<id>.mid` alone. It now reads each step's file through
  `stepFileName`, which `tools/make-our-songs.ts` exports.
- The `legendary` badge's keys named the old Hard files. `LEGENDARY_KEYS` holds the current files'
  keys, and `FORMER_LEGENDARY_KEYS` keeps the old ones. A badge earned on old notes stays earned.
- Batch 2's writer had turned the narrow no-break spaces of two French guides and one Russian guide
  into plain spaces. Two Arabic guides lost their isolate escapes too. Each line is restored from the
  file before the batches, and the guides are written again.

### Next

The harvest is in `docs/findings.md` § `faithful-levels`. Retiring the goal moves its two checks into
the floor and deletes this file, as the retirement of `song-rows` did. `docs/findings.md:1722`

No test is expected to go red.

Optional from the reviews:

- *Spanish Ladies*' tune bars 4, 5, 8 and 9 and Medium's and Hard's chorus bars 18 to 25 keep our
  chords. The print has B minor, G and D where they have G, C and B major. `tools/our-songs/spanish-ladies.ts:1`
- *Spanish Ladies*' Medium and Hard chorus could take the print's rocking root, fifth and octave.
- *Haul Away Joe*'s Beginner and Easy keep C, G and C under bars 2, 3 and 6. The print has A minor,
  E minor and A minor there. Easy's bar 7 plays G major where the print has G minor over B flat.
- *Drunken Sailor*'s Beginner and Easy keep their own chords under bars 6, 7, 14 and 15. The print
  walks A minor, G, F and D minor there.
- *Sailor's Hornpipe*'s Legendary bar 21 sounds G on top over the left hand's F sharp.


- *Toccata*'s Easy holds C sharp in the left hand under the run in bars 14 and 15. The print rests there.
- *Hungarian Dance No. 5*'s Medium and Hard bar 12 fill the print's single F sharp with a chord.
- *Mozart 21*'s Medium and Hard leave the print's D and F half note of bar 14 to the left hand.
- *Gymnopédie No. 1*'s Beginner and Easy end on C and G, with no third.

- *William Tell*'s `TUNE_CHORDS` puts the dominant under tune bar 4's first half, where the print
  keeps E major. It is inside the tune, so Common and Rare keep it.
- *Air on the G String*'s thirds in bar 14 became C sharp under G, a tritone. A sixth, B under G,
  also avoids the rub. `tools/our-songs/air-on-the-g-string.ts:144`
- *Moonlight Sonata*'s last chord has the third on top, where the print has the root.

- *Wedding March*'s Beginner and Easy keep F and D chords under tune bars 1 to 4. The print has
  F sharp half-diminished, B7, E minor and D minor there. These are tune bars, which Beginner and Easy keep.
- *Aquarium*'s Beginner and Easy keep D minor under bar 6, where the print has G major.
- *Twinkle*'s Legendary bar 15 plays G, B and D on beat 2 with no G in the bass. The print's bass is G.
- *Twinkle*'s versions play F under print bar 21, where the print has D minor, then G7.

### Backlog

- A Beginner or Easy version might take the source's figure too, once the user has listened to the pass.
