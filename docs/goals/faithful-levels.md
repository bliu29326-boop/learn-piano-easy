---
looper: 1
title: Faithful levels
summary: "The four versions of every song of ours play the source's real phrases instead of bars of our own, and Medium and Hard use its own accompaniment where the limits allow."
context: [docs/decisions/0014.md, docs/our-songs.md, tools/make-our-songs.ts, tools/song-meter.ts, src/library/moved-songs.ts, src/theory/fingering-editor.ts]
stages:
  - id: 1
    title: "The rework's rules, its new files and the audit"
    status: open
  - id: 2
    title: "the goal is verified once, and every failure is fixed"
    status: open
    gate: true
checks:
  - id: rework-keeps-work
    stage: 1
    name: a reworked version's file takes the learner's tracks, keys and last song, and leaves the fingers set by hand under the old file
    run: [bun, test, src/library/moved-songs.test.ts]
    tests: [a_reworked_version_moves_all_but_the_fingers]
  - id: no-bar-of-our-own
    stage: 1
    name: no version of a public domain song plays a bar the module marks as our own
    run: [bun, test, tools/our-songs.test.ts]
    tests: [no_version_plays_a_bar_of_our_own]
---

# Faithful levels

## Why

[Decision 0014](../decisions/0014.md) gives every song an Original that sounds like the piece. The four
versions still sound less like it than they could. Many of them play the tune and then bars of our own.
Each level's accompaniment comes from a list per level, such as an Alberti bass, even where the piece
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
- **Batches follow the order of `original-arrangements`:** each song's Original exists before its
  versions are reworked, so the writer can read both.
- **Writers, review and commits** work as `original-arrangements` rules: four writing subagents of two
  songs each, one fresh reviewer per batch, one commit per batch.
- **The chain:** this goal runs after `original-arrangements` and before `urdu` and `japanese`.

## Stages

### 1. The rework's rules, its new files and the audit

**Does:** the rules, the move of a learner's work to a reworked file, the test for bars of our own, and
the audit that lists every version to rework.
**Split:** a read-only `reader` subagent audits every song module. It lists each version that plays a bar
of our own, with its bars, and each Medium or Hard whose accompaniment ignores a figure the source has.
**Gate:** `original-arrangements` is reached.

- [ ] The rules of this goal move into `docs/our-songs.md` § *The tune keeps the song recognisable* and § *Writing for the piano*. `docs/our-songs.md:67`
- [ ] A version names its revision, and the writer writes `<id>-2.mid` for a reworked one. `tools/make-our-songs.ts:200`
- [ ] The move of a reworked version's stored work, every key but `FINGERS_KEY`. `src/library/moved-songs.ts:27`
- [ ] Test `a_reworked_version_moves_all_but_the_fingers`. `src/library/moved-songs.test.ts:1`
- [ ] A module marks each bar of our own, and test `no_version_plays_a_bar_of_our_own` lists them. It stays red until the last batch. `tools/our-songs.test.ts:42`
- [ ] The audit's batches, eight songs each, written as stages 2 onward of this goal, before the gate stage. `docs/goals/faithful-levels.md:1`

### 2. the goal is verified once, and every failure is fixed

- [ ] Run `looper verify` over the whole goal.
- [ ] Fix every failure it names in one pass, never deleting or loosening a test.
- [ ] Run `looper verify` once more, and it is green.

## Handoff

### State

The goal is written, behind `original-arrangements` on the chain. No stage has started.
[Decision 0014](../decisions/0014.md) records its reasons.

### Next

**Stage 1: the rework's rules, its new files and the audit.** Files: `docs/our-songs.md`,
`tools/make-our-songs.ts`, `src/library/moved-songs.ts` and `tools/our-songs.test.ts`. Gate:
`original-arrangements` is reached.

Every item of stage 1 above is open.

Expected red: `no_version_plays_a_bar_of_our_own` until the last batch.

### Backlog

- A Beginner or Easy version might take the source's figure too, once the user has listened to the pass.
