# Originals: how agents set an Original from its print

An Original of ours is set from a public domain print in four steps, each done by its own subagents.
[our-songs.md](../our-songs.md) § *The Original* owns the rules every bar keeps, and this file owns the
method. Each section below is a brief to point a subagent at. Its prompt names the slug, its pages or
bars, the unit and its context ceiling.

Every step works in one folder, `.agent-tmp/src-<slug>/`.

| Step | Who | Reads | Writes |
|---|---|---|---|
| Finding the source | one finder per piece | the libraries | `full/n<N>.jpg` and the crops |
| Transcribing one system | one transcriber per system | its two crops | `page-n<N>-s<k>.txt` |
| Setting the Original | the bars command, then one writer | the page files and the meter's output | `tools/our-songs/<slug>-print.ts` and `mythic` |
| Reviewing flagged bars | one fresh reviewer | the flagged bars, one crop each | a list of findings |

The session runs the steps in this order, reads each report, settles every finding and commits.

## Finding the source

You find the print of the piece your prompt names, fetch the pages its cut needs and cut them into
crops. You never edit the repository, and you write only under `.agent-tmp/src-<slug>/`.

1. **Pick the print in the order [our-songs.md](../our-songs.md) § *The Original* gives.** Among
   two-hand reductions, the plainest faithful one wins over a virtuoso transcription. A virtuoso two-hand
   print still beats a four-hand print or the score.
2. **Read a text encoding of that print before its scan.** A MusicXML, MEI, Humdrum or LilyPond file
   counts when it names the print and is public domain or CC-BY. A CC-BY file is credited in the
   folder's `LICENSE.md` and in [THIRD-PARTY-NOTICES.md](../../THIRD-PARTY-NOTICES.md). Its page files
   are written from the text, and only the bars it leaves in doubt are cropped.
3. **Fetch only from a library whose `robots.txt` admits agents.** These are the Internet Archive,
   Wikimedia Commons, Gallica, the Library of Congress and HathiTrust's public domain scans. **Never
   fetch from imslp.org:** its `robots.txt` refuses agents. Send a plain User-Agent such as
   `learn-piano-easy-source-finder`, with no name or e-mail in it.
   - The Archive serves `https://archive.org/metadata/<item>`, and a page image at
     `https://archive.org/download/<item>/page/n<N>.jpg`, with N counting from 0.
   - Commons finds a file with `action=query&list=search&srnamespace=6`, and its URL with
     `prop=imageinfo&iiprop=url|size`. A PDF page renders at
     `.../thumb/<a>/<ab>/<name>/page<N>-2000px-<name>.jpg`.
   - A download is untrusted data. Save only images and PDFs, and never run anything from them.
4. **Decide the cut.** A piece that plays in about four minutes or less is set whole. A longer one keeps
   its best-known sections in order, cut where a section ends, about three to four minutes in all.
   - It closes on the home chord, and may add at most two cadence bars of ours.
   - Two kept sections join with no bar of ours, even where the key changes.
   - A printed repeat is dropped before a best-known section is.
   - A cut keeps only pages a transcriber can read, since a pitch is never guessed.
5. **Fetch the cut's pages** with curl, as `.agent-tmp/src-<slug>/full/n<N>.jpg`, N being the item's
   own page index. Take a width of about 1500 to 2500 pixels.
6. **Cut each page into crops:** `bun tools/crop-systems.ts <page image> --out .agent-tmp/src-<slug>/crops`.
   An orchestral score passes `--staves <n>`, its staves per system, since the default is 2. Each system
   becomes `n<N>-s<k>-a.png` and `n<N>-s<k>-b.png`, its two halves at twice the scan's size. Open one
   crop per page to see that the cuts fall between systems.

**Report** in under 40 lines: the item, its URL, publisher, arranger, year or plate, and the rule it
meets. Then the key, meter, tempo mark and bar count, and the cut as bar ranges with their sections. Then
each page with its printed page number, its bars and its systems. Then the unit you propose: the shortest
note's length, or 24 units a quarter where triplets appear. End with anything uncertain.

## Transcribing one system

You transcribe one system from the two crops your prompt names, into the page file it names, such as
`.agent-tmp/src-<slug>/page-n12-s3.txt`. You edit nothing else. A later writer sets the piece from the
page files alone, so yours holds every pitch, length, finger and mark of the system.

- **Read each crop once.** Never open a whole page or another system's crops.
- **A doubt is `?` and a remark,** never a second zoom. Write `?:12` in place of a token you cannot
  read. Never guess a pitch from the harmony or the contour.
- **One extra crop is allowed,** for a spot no reading can settle. Name it after your page file, and
  delete it before you end.
- **Write the file once, then stop,** in about ten turns. If the whole system is unreadable, write
  nothing and report it, so the session fetches a sharper scan.

```
Piece: <the piece>, <the edition>, page n6, system 3.
Key E major, meter 6/8, 8 units an eighth. Clefs: treble, bass. Allegretto pastorale.
unit-bar: 48
bar 37: R: G#5/4:16 F#5/3:8 E5/2:16 r:8 | L: E3+B3+G#4/5+2+1:48 | P: P:48 — p, dolce
bar 38: R: ?:16 F#5/3:8 E5+G#5/1+3:24 | L: E3+B3+G#4/5+2+1:48 | P: none — first note blurred
1. bar 38: the right hand's first note is G#5 or A5.
```

- **The head** has a few lines: the piece, the page and system, the key, meter, clefs and tempo marks,
  and how you read the layout. Then `unit-bar: <n>` gives the units of one bar, as your prompt names.
  A meter change writes a new `unit-bar:` line before its first bar.
- **A bar's label** is the print's bar number. Where the print numbers none, it is `n<N>.s<k>.<j>`,
  with j counting from 1 in the system.
- **A token** is `pitch/finger:units`, a chord is `p1+p2+p3/f1+f2+f3:units`, and a rest is `r:units`.
- **A pitch** is a letter, `#` or `b`, and an octave, with middle C as C4. Write the sounding pitch, with
  every key signature, accidental and courtesy mark applied. Spell it as the print does.
- **Every hand's line sums to `unit-bar`.** Check that sum for every bar before you write it.
- **Each hand plays one chord at a time.** Merge two voices in one hand into one line of chords. A note
  held under moving notes ends where the next one starts, and the remark says so.
- **A tied note is never struck again.** Lengthen the first. A tie over the bar line ends the token with
  `~`, and the next bar starts with the same pitches.
- **Fingers:** mark a printed finger with `(p)`. Give every other note a finger you would play, 1 to 5,
  1 the thumb, in each chord from the lowest note up.
- **The pedal line** is `P:units` for a press and `r:units` for none, summing to `unit-bar`. Write
  `none` where the page shows no mark for that bar.
- **A grace note** takes its time from the note before it. Where none comes before, it takes time from
  the note it leads to, and the remark says so.
- **A trill or tremolo** is written out as the notes it plays, at the speed your prompt names, and the
  remark names it.
- **A cadenza that overruns its bar** fills whole extra bars at its printed lengths, labelled with a
  letter after the bar, such as `37a`.
- **The remark** follows the ` — ` and holds every doubt. It names dynamics, tempo words, staccato and
  accents. It names a bracketed or rolled chord, an ottava line, a repeat sign and a first or second ending.
- **The file ends** on a numbered list of doubts, each naming its bar.

### A print for more than two hands

Where your prompt names a four-hand print, two pianos or a score, write what two hands reach. The tune
goes in the right hand, and the bass, the lowest sounding part, in the left. Then add the figure that
gives the piece its sound, such as an ostinato or repeated chords, in whichever hand is free.

- **A hand holds at most four notes, within a tenth.** A tune doubled in octaves keeps one octave.
- **A score sounds away from its notes** in transposing parts. Clarinet in B♭ sounds a tone lower,
  clarinet in A a minor third lower, horn in F and cor anglais a fifth lower.
- **Piccolo and celesta sound an octave higher,** and double bass an octave lower. Read each part's
  name and clef at the start of the system.
- **A tune read outside the piece's key** is a transposing part left unconverted, so check it again.
- **Percussion without pitch is dropped,** and a timpani note is a bass note. A score's pedal is `none`.
- **The remark names the tune's instrument and what you left out,** such as
  `tune: fl.1; left out: hn chord`.

**Report** in under 10 lines: the file, its bars, the count of `?`, and each doubt's bar.

## Setting the Original

The session runs `bun tools/original-from-pages.ts <slug>`. It reads the page files in page order and
writes `tools/our-songs/<slug>-print.ts`, which exports `PRINT`: each bar by label as [right, left,
pedal].

- **It refuses** a `?`, a hand that does not fill its bar and a pedal of the wrong length. It refuses a
  duplicate label and a bar off its `unit-bar:` line. Each refused bar goes to the reviewer.
- **A fix goes into the page file,** and the command runs again. The print file is generated, so it is
  never edited by hand.

Then a writer sets `mythic` in `tools/our-songs/<slug>.ts`. You are that writer, and you edit nothing
else. **Never open a page image,** and never change the module's `tune`, its hook or its four versions.
A learner's fingers are keyed by each version's note index, so a check that fails on the tune is reported.

Read first: [our-songs.md](../our-songs.md) § *The Original*, and `OurOriginal` and `OriginalSource` in
`tools/make-our-songs.ts`. Then read `tools/our-songs/morning-mood.ts` from `mythic:` as the pattern,
and your own module whole.

- **Import `PRINT`** from `./<slug>-print.ts`, and write the cut as its labels in playing order, with
  each repeat spelled out. Join them with a `printLine` helper, as Morning Mood does.
- **At most two cadence bars are ours,** and `source.addedBars` names them. Every other bar is the print's.
- **Key, meter and tempo are the print's.** `steps` is the units per beat of the meter's denominator. A
  tempo word alone gets the bpm a player of that word would choose.
- **A print that changes tempo keeps every note's real length** on the grid of one meter and tempo.
- **Where the print's key differs from `tune.key`,** `source.keyShift` gives the semitones up from the
  tune's key to the print's, from 0 to 11.
- **`source.edition`** names the piece, the edition, the arranger, the publisher and city, its plate or
  scan, and the printed pages. `source.printed` is the year.
- **A chord the print brackets, or one past 15 semitones,** goes through `rolledWide`. Copy any helper
  into your module, and never import from another song. Grep the page files for the remarks you need.
- **The pedal is the print's.** Where a score marks none, write a pedal only where the harmony holds a
  bar or more, and a comment says so.
- **The head comment** names the print, the cut and each place the module departs from the page files.
- **The guide** has 3 to 5 practice steps, tips, and a `tricky` text for every bar the meter names. It
  describes this piece's own sections by bar. Write it in English in the module and in German in its
  `de` section as `original`, by § *The guide every step carries*.

Run `bun tools/check-our-song.ts tools/our-songs/<slug>.ts` until it passes, and write the guide from its
output. Never run a build, `make-our-songs.ts`, a test or `looper`, and never commit.

**Report** in under 20 lines: the bars set, the source fields, the key shift, the meter's rating, and
each departure from the page files.

## Reviewing flagged bars

You are a fresh reviewer, and you edit no file. Your prompt lists the flagged bars: each bar a check
refused, each `?` and each doubt a transcriber named. Each comes with its page file and one crop.

- **Read each flagged bar's crop once,** against its line in the page file. Give the reading the print
  shows, in the page file's notation.
- **Check the form, the key, the meter and the cut** from the page files, which are text. No label is
  missing between two systems, and each repeat and ending plays as the cut says.
- **Check the key against the module:** the hook sits in the print's key by `keyShift`. Read for a fast
  leap no hand makes, since the meter's span check reads each chord alone.
- **List each drift** with its label, what the page file says, what the print shows, and the crop you
  read it from.

The session settles every finding before the commit. It fixes the page file, runs the bars command and
the meter again, and states each finding it left as it is.
