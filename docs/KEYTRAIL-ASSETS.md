# Keytrail asset audit

## Scope and result

The current repertoire contains **422 MIDI files**: **338 upstream MIT** and **84 individually verified Mutopia Public Domain files**.
The final source inventory contains **560 assets**, **14,694,039 bytes**, including all **80 guides**.
The new Keytrail application artwork and three real product captures are explicitly attributed separately from inherited resources.
All 80 upstream teaching guides remain. Original MIDI bytes and upstream attribution are preserved.
The removed groups contain 237 piano-midi.de MIDI files and 54 Mutopia share-alike MIDI files.
The piano-midi.de folder's license file is removed with its batch.
Three teaching guides and twelve catalogue rows no longer point to prohibited original-score files.

This is a non-share-alike repertoire policy. It is not a claim that commercial use of share-alike music is inherently forbidden.
Permissive music remains permissive when the application offers a paid membership.
Do not describe this library as exclusive or relicense upstream originals as Keytrail compositions.

## Reproducible local checks

```sh
bun tools/keytrail-license-audit.ts --self-test
bun tools/keytrail-license-audit.ts
bun tools/keytrail-license-audit.ts --decode-audio
```

The gate checks exhaustive paths and digests, the 25 MiB per-file limit, playable MIDI content, individual license evidence, and original attribution.
It also checks that original-score links resolve, all 338 MIT MIDI bytes remain unchanged, and every embedded sound is local.
`--verify-sources` re-fetches every retained Mutopia metadata/MIDI source, without importing new repertoire.
`--write-manifest` refreshes inventory sizes and hashes only for already-attributed paths.
New files require explicit provenance entries first. Never use a refresh to excuse unexplained asset changes.
The inherited import scripts/pick lists are not the approved Keytrail repertoire list and can reintroduce removed links.
Run this gate after any generator. Do not run a full build from the asset subtask.

## Network-verified resource provenance

| Resource | Author | Actual source check | License | Commercial redistribution |
|---|---|---|---|---|
| Upstream fork and 338 MIDI originals/arrangements | The learn-piano-easy contributors | Pinned upstream LICENSE matches root LICENSE; MIDI baseline retained | MIT [83] | Preserve original copyright and permission; not Keytrail compositions |
| Plus Jakarta Sans | The Plus Jakarta Sans Project Authors, Tokotype | Exact font bytes match commit `18d1cd2f7ea10481919d2f05c1f7064b7307fc26` | SIL OFL 1.1 [84][85] | Bundle/embed commercially with OFL; do not sell font alone; respect reserved names |
| 48 Lucide paths | Lucide Icons and Contributors; Cole Bemis for Feather-derived icons | Each SVG child/path matched Lucide 1.71.0; `music` aliases `eighth-notes`, `triangle-alert` aliases `triangle-exclamation-point` | ISC and applicable MIT [86] | Keep complete copyright/permission texts |
| GitHub mark | GitHub Inc. | Actual Octicons 19.42.0 release package LICENSE and mark-github-24 SVG matched | MIT [93] | Keep MIT; no trademark or endorsement grant |
| Hand model | MakeHuman Community; upstream adaptations | Core asset licensing and explicit commercial-sale FAQ fetched; model matches pinned upstream | CC0 1.0 plus MIT edits [87][88] | Commercial derivatives allowed; retain MIT on upstream edits; generator GPL code does not ship |
| Salamander Grand Piano V3 | Alexander Holm; upstream web conversion | FreePats authorship/license checked; web JSON byte-matched pinned upstream | CC BY 3.0 [89][90] | Credit, source/license links, changes disclosed; no extra restrictions |
| Inherited screenshots and social images | The learn-piano-easy authors | All inherited image/model paths checked against pinned upstream git objects | MIT; embedded resource licenses remain | Keep MIT. Existing landing images are upstream captures, not newly captured Keytrail images |
| Mascot video/posters | Upstream maintainer, generated using Gemini | Pinned upstream assets and distribution notice checked | MIT as distributed upstream | MIT copying permitted; original generation account/receipt not available for independent verification |

The exhaustive manifest stores resource URL/hash evidence, all 49 icon source checks, and each retained public file.
It records the distinction between verified source distribution and upstream assertions about image generation.

## Keytrail-owned brand and real-capture provenance

The frontend owner supplied the new files; this documentation-only refresh inspected their actual contents and sources before running `--write-manifest`.

- **Author:** Keytrail project contributors for the new geometric application artwork, capture/redesign and branding changes. This is the contributor declaration, not an independent worldwide originality or trademark clearance.
- **Application artwork and favicon:** `public/icons/icon.svg`, `icon-192.png`, `icon-512.png`, `favicon.ico`, plus the original full MIT notice `public/icons/LICENSE.md`. The SVG and raster generator are separate geometric implementations of the piano-key/rising-trail mark; the SVG is not claimed to be the raster generator's exact export. Executing only the drawing statements of `tools/keytrail-brand-assets.py` in memory reproduced both PNG files and the ICO **byte-for-byte**, without writing any icon or preview. PNG sizes are 192×192 and 512×512. The ICO contains 16, 32, 48, 64, 128 and 256 pixel sizes.
- **Screenshots:** `public/images/keytrail-{practice,notation,course}.webp`, from the real local Keytrail app at `http://127.0.0.1:4178/play/` and `/learn/`. The inspected `tools/keytrail-capture.ts` uses Chrome/Playwright with a 1440×900 viewport: it plays/pauses the demo for practice, enables the real sheet-music panel for notation, and opens the course map. Existing original PNGs are 1440×900; distributed WebP images are 1200×750. All files decoded successfully and were visually inspected. This refresh verified the parent's existing captures; it did not rerun the capture browser.
- **Licenses and commerce:** original Keytrail artwork, favicon, notice and new capture/redesign contributions are MIT. Commercial use, modification, sale and redistribution are permitted with the complete 2026 Keytrail copyright/permission notice. `THIRD-PARTY-NOTICES.md` includes the full Keytrail MIT text for screenshot/redesign and metadata contributions, as well as its explicit scope. Preserve upstream MIT and applicable notices for separately bundled third-party font/icon/music/model software or data. A rendered screenshot does not itself relicense those resources or redistribute the font software. No exclusive music or trademark rights are claimed.
- **Modified metadata:** `public/index.html` is the upstream MIT template with Keytrail's theme color change. `public/manifest.webmanifest` retains the upstream MIT structure, local icon definitions and file handlers, with Keytrail name/description and palette changes. Both retain upstream authorship, explicitly credit the Keytrail changes and identify both MIT notice locations in the manifest. The existing template references the SVG and 192-pixel image; merely storing the new ICO is not a production-serving assertion.
- **Unchanged third-party scope:** `src/ui/icons/icons.ts`, `src/ui/icons/LICENSE.md`, all 49 individual primary icon-path checks, the font, music, sound data, models and inherited images keep their existing authors/licenses and source evidence. Only the three replaced application icon records lose the old Lucide/Feather/Octicons attribution; the two genuinely embedded interface-icon records retain it.

Changed or added parent-owned inventory paths (five new paths and five changed existing records):

| Path | Bytes | SHA-256 |
|---|---:|---|
| `public/icons/LICENSE.md` | 1,389 | `3a385a0d9ab98ac04457e8508d8723640126a30b4d627fd845d2705d3d727917` |
| `public/icons/favicon.ico` | 20,784 | `0535640f65eec7e33a79f14402f374413bc23caf1f404a5d27c2b4c3987e2999` |
| `public/icons/icon-192.png` | 7,651 | `07010124a5db53cf1c3ddb4dde859e3344fd70685be4a7386b2bb7e04f163177` |
| `public/icons/icon-512.png` | 18,086 | `5268d527b787590351de4b4149645e2ed8f6804eee060880ecefbc25112a9ce8` |
| `public/icons/icon.svg` | 597 | `f13e8a4de6025dae496029987dd6b514279602f1621da2fc070314788c588c18` |
| `public/images/keytrail-course.webp` | 26,668 | `3f20991ec2bcbc872c8e46a6f72b9665414e7c14765c1fcd456446640190dff2` |
| `public/images/keytrail-notation.webp` | 64,500 | `17ed2e555f7dbd91edc90effe15fc0e1f2081fcc53a2f40242176f6bbaa5bbd4` |
| `public/images/keytrail-practice.webp` | 56,182 | `1b90b1d692b50b9c0435c001be37c6619261b6c8058816b1477c7c8feb1deb07` |
| `public/index.html` | 1,048 | `78d31604e938741d931a1f94151343addc241f504eb0447545d3c26b2ef809e0` |
| `public/manifest.webmanifest` | 1,085 | `b8ca43a571ff1520e613eeb997bd3f1bc98ef8f414274bd58b89518b6f17734e` |

Original capture PNGs and the reproduction receipt are retained under `/root/.hermes/projects/online-piano-practice/evidence/keytrail-marketing-captures/`. The manifest records their original scratch capture location and hashes. Evidence files are not public inventory assets:

| Original PNG | Bytes | SHA-256 | RGB RMS error after resizing |
|---|---:|---|---:|
| `practice.png` | 151,520 | `a7987a26260a1730cd77ec640814dc514d2007bd943fc73919451198a272fffb` | 2.447079 |
| `notation.png` | 151,738 | `a2954dcdb93252c95f2776cd06cdab71926cfa22f918456aec0e1fd2835591e4` | 2.451037 |
| `course.png` | 75,423 | `334d391d05cf9e254a189da6946e2b3fd61205f3da3df12fd3524a82e03388d7` | 2.416889 |

The RMS comparison uses Lanczos resizing and the 0–255 RGB channel scale. The retained reproduction receipt verifies all three distributed WebP files byte-for-byte: Pillow 12.3.0, RGB conversion, Lanczos 1200×750 resize, WebP quality87 and method6. This verification regenerates bytes in memory without changing public assets.
Source script SHA-256 values: `tools/keytrail-brand-assets.py` — `a1e5ec75c106a668f0426bfe837f67f44fc927750920d4e6d8ca366129223e1a`; `tools/keytrail-capture.ts` — `71dc6fffeb965a27c41e073da7e059efcb3224f61c61ed0f933878efce1ee97e`.

## Sound usability

The existing local sound map is 2,291,948 bytes and contains 30 embedded MP3 samples.
It is byte-identical to the pinned upstream conversion.[94]
No substitute samples or fake successful audio files were created.
The valid FreePats archive URL is recorded in the sound license notice.
The inherited importer has a damaged archive URL, but no provisioning is needed for the complete existing sample data.

All 30 embedded MP3s passed real ffmpeg decoding and non-silent PCM checks with `--decode-audio`.
Chromium decoded all 30 through the real Soundfont loader after a user gesture.
The real Sampler produced nonzero analyser output for MIDI notes 21, 60, 61, 69 and 108.
Only three local HTTP requests occurred, including the bundled sound map. No external audio request occurred.
The manifest retains decoded durations, signal measurements and request paths.
A headless Web Audio signal proves decoded playback data, not physical speaker audibility or attached MIDI hardware.
The application footer integration is frontend-owned and must preserve this exact attribution:

> Salamander Grand Piano V3 by Alexander Holm · CC BY 3.0.

Source link: <https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html>.
License link: <https://creativecommons.org/licenses/by/3.0/>.
Changes: upstream one-layer selection, trimming, fade, gain normalization, MP3 conversion; Keytrail audio bytes unchanged.

Full CC BY 3.0 and CC0 legal codes are preserved in the distributed notices.[91][92]

## Earlier targeted test evidence (retained)

- RED: the new asset gate rejected the original tree with 238 prohibited batch paths.
- GREEN: the gate parsed all 422 retained MIDI files and checked complete manifest/license coverage.
- Guard self-tests passed for permitted/rejected licenses, external audio URLs and incomplete sample maps.
- The final standard command passed all 13 song-license, Soundfont and Sampler tests, with 537 assertions and no failures.
- An earlier attempt hit a missing `src/i18n/rebrand` during concurrent frontend editing; the final normal-preload rerun passed.
- The audio-only fallback also passed ten tests from scratch while that unrelated import was incomplete.
- No shared frontend file was modified to hide the temporary harness failure.

## Final Keytrail manifest refresh

Completed at `2026-11-16T17:10:36.828998+00:00` (UTC). Explicit provenance and full license notices were written first, then `bun tools/keytrail-license-audit.ts --write-manifest` refreshed only attributed inventory paths and exited **0**. A final `bun tools/keytrail-license-audit.ts` also exited **0**, with empty stderr. Exact stdout:

```json
{
  "catalog": 422,
  "upstreamMitMidi": 338,
  "verifiedMutopiaMidi": 84,
  "guides": 80,
  "assets": 560,
  "maxAssetBytes": 2291948,
  "sampledPitches": 30,
  "playableKeys": 88
}
```

- Inventory: **560 assets / 14,694,039 bytes**; largest file **2,291,948 bytes**, below the existing 25 MiB per-file bound.
- **550 prior inventory entries are unchanged**; the ten rows above account for every changed/new entry. All 338 upstream MIT baselines, 84 individual Mutopia records (82 distinct sources), prior resource source checks, six prior full-license records and earlier verification results are retained unchanged. Two original Keytrail MIT text checks were added; no upstream text was replaced.
- The stored preservation proof has 21 equality checks and canonical hashes. The audited complete asset-entry array has SHA-256 `3b026e7a78add28e4a7e1887e208c44f1a65ac8b664a763f964d883df14eec1d` using UTF-8 JSON with sorted keys and compact separators.
- Exact stdout SHA-256: `71964026eb451460d382089e4fac473f7bd1daa181d86f4deb15eebaf19fd3ef`. Command, exit code, exact stdout/stderr, script hash, totals and preservation proof are durably recorded at `verification.finalKeytrailAssetRefresh` in `docs/keytrail-asset-manifest.json`. The local raw stdout artifact is `/root/.hermes/cache/scratch/keytrail-final-asset-refresh/final-bounded-audit.stdout`.
- This refresh did **not** re-fetch the 84 sources, decode the 30 MP3s, rerun separate music/audio tests, build, commit, deploy, write to providers or change frontend/server files. Earlier network/audio evidence above is retained, not presented as newly rerun. The bounded gate still validates source hashes, local MIDI parsing, complete asset coverage and embedded sample-map structure. Its nearest-sample coverage check is not a new browser-audio or physical-device test.
- This is the source inventory at the recorded hashes. Subsequent parent changes to public assets or the two bundled icon files require a new bounded refresh; build output and production hosting remain parent-owned verification gates.

## Individual Mutopia verification

Each retained file was checked against its own actual RDF license record and downloaded source MIDI.
Clementi's three movements share one source record and MIDI ZIP. Each local MIDI member was compared separately.
There are **84 verified files** and **82 distinct individual source records**, all declaring `Public Domain`.
The full fetched metadata, SHA-256 hashes, ZIP member where needed, and byte-match result live in the manifest.

| Retained MIDI path | Composer | Maintainer/typesetter | License | Individual fetched source |
|---|---|---|---|---|
| `public/songs/mutopia/anna-magdalena-03.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [1] |
| `public/songs/mutopia/anna-magdalena-04.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [2] |
| `public/songs/mutopia/anna-magdalena-05.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [3] |
| `public/songs/mutopia/anna-magdalena-07.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [4] |
| `public/songs/mutopia/BWV-117b.mid` | Johann S. Bach | Typeset by Steven McDougall, The Mutopia Project | Public Domain | [5] |
| `public/songs/mutopia/BWV-118.mid` | Johann S. Bach | Typeset by Steven McDougall, The Mutopia Project | Public Domain | [6] |
| `public/songs/mutopia/BWV-119.mid` | Johann S. Bach | Typeset by Steven McDougall, The Mutopia Project | Public Domain | [7] |
| `public/songs/mutopia/BWV-120.mid` | Johann S. Bach | Typeset by Steven McDougall, The Mutopia Project | Public Domain | [8] |
| `public/songs/mutopia/BWV-121.mid` | Johann S. Bach | Typeset by Steven McDougall, The Mutopia Project | Public Domain | [9] |
| `public/songs/mutopia/anna-magdalena-22.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [10] |
| `public/songs/mutopia/BWV-127.mid` | Johann S. Bach | Typeset by Steven McDougall, The Mutopia Project | Public Domain | [11] |
| `public/songs/mutopia/BWV-128.mid` | Johann S. Bach | Typeset by Steven McDougall, The Mutopia Project | Public Domain | [12] |
| `public/songs/mutopia/bach-invention-02.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [13] |
| `public/songs/mutopia/bach-invention-03.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [14] |
| `public/songs/mutopia/bach-invention-04.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [15] |
| `public/songs/mutopia/bach-invention-05.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [16] |
| `public/songs/mutopia/bach-invention-07.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [17] |
| `public/songs/mutopia/bach-invention-08.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [18] |
| `public/songs/mutopia/bach-invention-10.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [19] |
| `public/songs/mutopia/bach-invention-11.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [20] |
| `public/songs/mutopia/bach-invention-13.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [21] |
| `public/songs/mutopia/bach-invention-14.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [22] |
| `public/songs/mutopia/bach-invention-15.mid` | Johann S. Bach | Typeset by Allen Garvin, The Mutopia Project | Public Domain | [23] |
| `public/songs/mutopia/bwv848a.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [24] |
| `public/songs/mutopia/bwv848b.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [25] |
| `public/songs/mutopia/bwv849a.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [26] |
| `public/songs/mutopia/bwv849b.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [27] |
| `public/songs/mutopia/bwv851a.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [28] |
| `public/songs/mutopia/bwv851_fugue06.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [29] |
| `public/songs/mutopia/bwv853a.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [30] |
| `public/songs/mutopia/bwv853b.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [31] |
| `public/songs/mutopia/BWV854_Praeludium_IX_rh.mid` | Johann S. Bach | The Mutopia Project | Public Domain | [32] |
| `public/songs/mutopia/bwv855a.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [33] |
| `public/songs/mutopia/bwv855b.mid` | Johann S. Bach | Typeset by Davide Castellone, The Mutopia Project | Public Domain | [34] |
| `public/songs/mutopia/BWV856_Praeludium11.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [35] |
| `public/songs/mutopia/BWV856_Fugue11.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [36] |
| `public/songs/mutopia/BWV860_Praeludium15.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [37] |
| `public/songs/mutopia/BWV860_Fuga15.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [38] |
| `public/songs/mutopia/BWV861_Praeludium16.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [39] |
| `public/songs/mutopia/BWV861_Fuga16.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [40] |
| `public/songs/mutopia/bach-prelude17.mid` | Johann S. Bach | Typeset by Andrew Hawryluk, The Mutopia Project | Public Domain | [41] |
| `public/songs/mutopia/bach-fugue17.mid` | Johann S. Bach | Typeset by Andrew Hawryluk, The Mutopia Project | Public Domain | [42] |
| `public/songs/mutopia/BWV865_Praeludium20.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [43] |
| `public/songs/mutopia/BWV865_Fuga20.mid` | Johann S. Bach | Typeset by Stelios Samelis, The Mutopia Project | Public Domain | [44] |
| `public/songs/mutopia/bwv869b.mid` | Johann S. Bach | Typeset by Itay Perl, The Mutopia Project | Public Domain | [45] |
| `public/songs/mutopia/sonatina-1.mid` | Muzio Clementi | Typeset by Brian D. Rude, The Mutopia Project | Public Domain | [46] |
| `public/songs/mutopia/sonatina-1-1.mid` | Muzio Clementi | Typeset by Brian D. Rude, The Mutopia Project | Public Domain | [46] |
| `public/songs/mutopia/sonatina-1-2.mid` | Muzio Clementi | Typeset by Brian D. Rude, The Mutopia Project | Public Domain | [46] |
| `public/songs/mutopia/25EF-01.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [47] |
| `public/songs/mutopia/25EF-02.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [48] |
| `public/songs/mutopia/25EF-03.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [49] |
| `public/songs/mutopia/25EF-04.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [50] |
| `public/songs/mutopia/25EF-05.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [51] |
| `public/songs/mutopia/25EF-06.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [52] |
| `public/songs/mutopia/25EF-07.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [53] |
| `public/songs/mutopia/25EF-08.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [54] |
| `public/songs/mutopia/25EF-09.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [55] |
| `public/songs/mutopia/25EF-10.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [56] |
| `public/songs/mutopia/25EF-11.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [57] |
| `public/songs/mutopia/25EF-12.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [58] |
| `public/songs/mutopia/25EF-13.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [59] |
| `public/songs/mutopia/25EF-14.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [60] |
| `public/songs/mutopia/25EF-15.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [61] |
| `public/songs/mutopia/25EF-16.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [62] |
| `public/songs/mutopia/25EF-17.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [63] |
| `public/songs/mutopia/25EF-18.mid` | Friedrich Burgmüller | Typeset by Bas Wassink, The Mutopia Project | Public Domain | [64] |
| `public/songs/mutopia/op840-1.mid` | Carl Czerny | Typeset by Manuela, The Mutopia Project | Public Domain | [65] |
| `public/songs/mutopia/op840-2.mid` | Carl Czerny | Typeset by Manuela, The Mutopia Project | Public Domain | [66] |
| `public/songs/mutopia/op840-3.mid` | Carl Czerny | Typeset by Manuela, The Mutopia Project | Public Domain | [67] |
| `public/songs/mutopia/op840-4.mid` | Carl Czerny | Typeset by Manuela, The Mutopia Project | Public Domain | [68] |
| `public/songs/mutopia/op840-5.mid` | Carl Czerny | Typeset by Manuela, The Mutopia Project | Public Domain | [69] |
| `public/songs/mutopia/01MorningPrayer.mid` | Pjotr I. Tschaikowski | Typeset by Rem Zolotykh, The Mutopia Project | Public Domain | [70] |
| `public/songs/mutopia/05MarchOfTheWoodenSoldiers.mid` | Pjotr I. Tschaikowski | Typeset by Anonymous, The Mutopia Project | Public Domain | [71] |
| `public/songs/mutopia/16OldFrenchSong.mid` | Pjotr I. Tschaikowski | Typeset by David McNamara, The Mutopia Project | Public Domain | [72] |
| `public/songs/mutopia/entertainer.mid` | Scott Joplin | Typeset by Chris Sawer, The Mutopia Project | Public Domain | [73] |
| `public/songs/mutopia/maple.mid` | Scott Joplin | Typeset by Chris Sawer, The Mutopia Project | Public Domain | [74] |
| `public/songs/mutopia/winners.mid` | Scott Joplin | Typeset by Tom Harke, The Mutopia Project | Public Domain | [75] |
| `public/songs/mutopia/solace.mid` | Scott Joplin | Typeset by Magnus Lewis-Smith, The Mutopia Project | Public Domain | [76] |
| `public/songs/mutopia/bethena.mid` | Scott Joplin | Typeset by Magnus Lewis-Smith, The Mutopia Project | Public Domain | [77] |
| `public/songs/mutopia/peacherine.mid` | Scott Joplin | Typeset by Antonio Palamà, The Mutopia Project | Public Domain | [78] |
| `public/songs/mutopia/sugar-cane.mid` | Scott Joplin | Typeset by Daniel Škarda, The Mutopia Project | Public Domain | [79] |
| `public/songs/mutopia/search.mid` | Scott Joplin | Typeset by Chris Sawer, The Mutopia Project | Public Domain | [80] |
| `public/songs/mutopia/PineappleRag.mid` | Scott Joplin | Typeset by Coyau, The Mutopia Project | Public Domain | [81] |
| `public/songs/mutopia/EliteSyncopations.mid` | Scott Joplin | Typeset by Benjamin Bloomfield, The Mutopia Project | Public Domain | [82] |

## Acceptance boundary and trade-offs

- No full application build, deployment, commits, paid API calls, or backend changes are performed by this subtask.
- Build output remains parent-owned. This source-asset refresh does not assert the state of any `dist/` tree; the parent must audit its generated output.
- The sound set uses one velocity layer and nearest-note pitch shifting, preserving upstream bandwidth and timbre trade-offs.
- Removing restricted/unverified repertoire reduces selection, but retains every upstream MIT arrangement and verified permitted Mutopia file.
- Font, icon and MakeHuman notices remain separate rather than incorrectly treating all assets as MIT.
- Inherited AI mascot generation terms are not independently proven. Its pinned upstream MIT distribution is verified.
- Manifest refresh is deliberately strict: new screenshot or icon paths need explicit attribution before they can pass.

## Sources

[1] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh113/anna-magdalena-03/anna-magdalena-03.rdf — Menuet — individual Mutopia license metadata
[2] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh114/anna-magdalena-04/anna-magdalena-04.rdf — Menuet — individual Mutopia license metadata
[3] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh115/anna-magdalena-05/anna-magdalena-05.rdf — Menuet — individual Mutopia license metadata
[4] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh116/anna-magdalena-07/anna-magdalena-07.rdf — Menuet — individual Mutopia license metadata
[5] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh117b/BWV-117b/BWV-117b.rdf — Polonaise in F major — individual Mutopia license metadata
[6] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh118/BWV-118/BWV-118.rdf — Minuet in B-flat major — individual Mutopia license metadata
[7] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh119/BWV-119/BWV-119.rdf — Polonaise in G minor — individual Mutopia license metadata
[8] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh120/BWV-120/BWV-120.rdf — Minuet in A minor — individual Mutopia license metadata
[9] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh121/BWV-121/BWV-121.rdf — Minuet in C minor — individual Mutopia license metadata
[10] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh126/anna-magdalena-22/anna-magdalena-22.rdf — Musette — individual Mutopia license metadata
[11] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh127/BWV-127/BWV-127.rdf — March in E-flat major — individual Mutopia license metadata
[12] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWVAnh128/BWV-128/BWV-128.rdf — Polonaise in D minor — individual Mutopia license metadata
[13] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV773/bach-invention-02/bach-invention-02.rdf — Invention 2 — individual Mutopia license metadata
[14] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV774/bach-invention-03/bach-invention-03.rdf — Invention 3 — individual Mutopia license metadata
[15] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV775/bach-invention-04/bach-invention-04.rdf — Invention 4 — individual Mutopia license metadata
[16] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV776/bach-invention-05/bach-invention-05.rdf — Invention 5 — individual Mutopia license metadata
[17] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV778/bach-invention-07/bach-invention-07.rdf — Invention 7 — individual Mutopia license metadata
[18] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV779/bach-invention-08/bach-invention-08.rdf — Invention 8 — individual Mutopia license metadata
[19] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV781/bach-invention-10/bach-invention-10.rdf — Invention 10 — individual Mutopia license metadata
[20] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV782/bach-invention-11/bach-invention-11.rdf — Invention 11 — individual Mutopia license metadata
[21] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV784/bach-invention-13/bach-invention-13.rdf — Invention 13 — individual Mutopia license metadata
[22] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV785/bach-invention-14/bach-invention-14.rdf — Invention 14 — individual Mutopia license metadata
[23] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV786/bach-invention-15/bach-invention-15.rdf — Invention 15 — individual Mutopia license metadata
[24] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV848/bwv848a/bwv848a.rdf — Das Wohltemperierte Clavier I, Praeludium III — individual Mutopia license metadata
[25] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV848/bwv848b/bwv848b.rdf — Das Wohltemperierte Clavier I, Fuga III — individual Mutopia license metadata
[26] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV849/bwv849a/bwv849a.rdf — Das Wohltemperierte Clavier I, Praeludium IV — individual Mutopia license metadata
[27] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV849/bwv849b/bwv849b.rdf — Das Wohltemperierte Clavier I, Fuga IV — individual Mutopia license metadata
[28] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV851/bwv851a/bwv851a.rdf — Das Wohltemperierte Clavier I, Praeludium VI — individual Mutopia license metadata
[29] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV851/bwv851_fugue06/bwv851_fugue06.rdf — Das Wohltemperierte Clavier I, Fuga VI — individual Mutopia license metadata
[30] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV853/bwv853a/bwv853a.rdf — Das Wohltemperierte Clavier I, Praeludium VIII — individual Mutopia license metadata
[31] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV853/bwv853b/bwv853b.rdf — Das Wohltemperierte Clavier I, Fuga VIII — individual Mutopia license metadata
[32] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV854/BWV854_Praeludium_IX_rh/BWV854_Praeludium_IX_rh.rdf — Praeludium IX — individual Mutopia license metadata
[33] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV855/bwv855a/bwv855a.rdf — Das Wohltemperierte Clavier I, Praeludium X — individual Mutopia license metadata
[34] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV855/bwv855b/bwv855b.rdf — Das Wohltemperierte Clavier I, Fuga X — individual Mutopia license metadata
[35] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV856/BWV856_Praeludium11/BWV856_Praeludium11.rdf — Das Wohltemperierte Clavier I, Praeludium XI — individual Mutopia license metadata
[36] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV856/BWV856_Fugue11/BWV856_Fugue11.rdf — Das Wohltemperierte Clavier I, Fuga XI — individual Mutopia license metadata
[37] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV860/BWV860_Praeludium15/BWV860_Praeludium15.rdf — Das Wohltemperierte Clavier I, Praeludium XV — individual Mutopia license metadata
[38] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV860/BWV860_Fuga15/BWV860_Fuga15.rdf — Das Wohltemperierte Clavier I, Fuga XV — individual Mutopia license metadata
[39] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV861/BWV861_Praeludium16/BWV861_Praeludium16.rdf — Das Wohltemperierte Clavier I, Praeludium XVI — individual Mutopia license metadata
[40] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV861/BWV861_Fuga16/BWV861_Fuga16.rdf — Das Wohltemperierte Clavier I, Fuga XVI — individual Mutopia license metadata
[41] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV862/bach-prelude17/bach-prelude17.rdf — Das Wohltemperierte Clavier I, Praeludium XVII — individual Mutopia license metadata
[42] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV862/bach-fugue17/bach-fugue17.rdf — Das Wohltemperierte Clavier I, Fuga XVII — individual Mutopia license metadata
[43] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV865/BWV865_Praeludium20/BWV865_Praeludium20.rdf — Das Wohltemperierte Clavier I, Praeludium XX — individual Mutopia license metadata
[44] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV865/BWV865_Fuga20/BWV865_Fuga20.rdf — Das Wohltemperierte Clavier I, Fuga XX — individual Mutopia license metadata
[45] https://sca.uwaterloo.ca/Mutopia/ftp/BachJS/BWV869/bwv869b/bwv869b.rdf — Das Wohltemperierte Clavier I, Fuga XXIV — individual Mutopia license metadata
[46] https://sca.uwaterloo.ca/Mutopia/ftp/ClementiM/O36/sonatina-1/sonatina-1.rdf — Sonatina — individual Mutopia license metadata
[47] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-01/25EF-01.rdf — La Candeur — individual Mutopia license metadata
[48] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-02/25EF-02.rdf — l'Arabesque — individual Mutopia license metadata
[49] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-03/25EF-03.rdf — La Pastorale — individual Mutopia license metadata
[50] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-04/25EF-04.rdf — La Petite Réunion — individual Mutopia license metadata
[51] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-05/25EF-05.rdf — Innocence — individual Mutopia license metadata
[52] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-06/25EF-06.rdf — Progrès — individual Mutopia license metadata
[53] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-07/25EF-07.rdf — Le Courant Limpide — individual Mutopia license metadata
[54] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-08/25EF-08.rdf — La Gracieuse — individual Mutopia license metadata
[55] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-09/25EF-09.rdf — La Chasse — individual Mutopia license metadata
[56] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-10/25EF-10.rdf — Tendre Fleur — individual Mutopia license metadata
[57] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-11/25EF-11.rdf — La Bergeronnette — individual Mutopia license metadata
[58] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-12/25EF-12.rdf — L'Adieu — individual Mutopia license metadata
[59] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-13/25EF-13.rdf — Consolation — individual Mutopia license metadata
[60] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-14/25EF-14.rdf — La Styrienne — individual Mutopia license metadata
[61] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-15/25EF-15.rdf — Ballade — individual Mutopia license metadata
[62] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-16/25EF-16.rdf — Douce Plainte — individual Mutopia license metadata
[63] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-17/25EF-17.rdf — La Babillarde — individual Mutopia license metadata
[64] https://sca.uwaterloo.ca/Mutopia/ftp/BurgmullerJFF/O100/25EF-18/25EF-18.rdf — Inquiétude — individual Mutopia license metadata
[65] https://sca.uwaterloo.ca/Mutopia/ftp/CzernyC/O840/op840-1/op840-1.rdf — 50 Melodische Übungsstücke, No. 1 — individual Mutopia license metadata
[66] https://sca.uwaterloo.ca/Mutopia/ftp/CzernyC/O840/op840-2/op840-2.rdf — 50 Melodische Übungsstücke, No. 2 — individual Mutopia license metadata
[67] https://sca.uwaterloo.ca/Mutopia/ftp/CzernyC/O840/op840-3/op840-3.rdf — 50 Melodische Übungsstücke, No. 3 — individual Mutopia license metadata
[68] https://sca.uwaterloo.ca/Mutopia/ftp/CzernyC/O840/op840-4/op840-4.rdf — 50 Melodische Übungsstücke, No. 4 — individual Mutopia license metadata
[69] https://sca.uwaterloo.ca/Mutopia/ftp/CzernyC/O840/op840-5/op840-5.rdf — 50 Melodische Übungsstücke, No. 5 — individual Mutopia license metadata
[70] https://sca.uwaterloo.ca/Mutopia/ftp/TchaikovskyPI/O39/01MorningPrayer/01MorningPrayer.rdf — Morning Prayer — individual Mutopia license metadata
[71] https://sca.uwaterloo.ca/Mutopia/ftp/TchaikovskyPI/O39/05MarchOfTheWoodenSoldiers/05MarchOfTheWoodenSoldiers.rdf — March of the Wooden Soldiers — individual Mutopia license metadata
[72] https://sca.uwaterloo.ca/Mutopia/ftp/TchaikovskyPI/O39/16OldFrenchSong/16OldFrenchSong.rdf — Old French Song — individual Mutopia license metadata
[73] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/entertainer/entertainer.rdf — The Entertainer — individual Mutopia license metadata
[74] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/maple/maple.rdf — Maple Leaf Rag — individual Mutopia license metadata
[75] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/winners/winners.rdf — The Easy Winners — individual Mutopia license metadata
[76] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/solace/solace.rdf — Solace — individual Mutopia license metadata
[77] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/bethena/bethena.rdf — Bethena — individual Mutopia license metadata
[78] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/peacherine/peacherine.rdf — Peacherine Rag — individual Mutopia license metadata
[79] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/sugar-cane/sugar-cane.rdf — Sugar Cane — individual Mutopia license metadata
[80] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/search/search.rdf — Search-Light Rag — individual Mutopia license metadata
[81] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/PineappleRag/PineappleRag.rdf — Pineapple Rag — individual Mutopia license metadata
[82] https://sca.uwaterloo.ca/Mutopia/ftp/JoplinS/EliteSyncopations/EliteSyncopations.rdf — Elite Syncopations — individual Mutopia license metadata
[83] https://raw.githubusercontent.com/brainfoolong/learn-piano-easy/7866e1a0cdc402e1d6d5bd543f71cef4f56ce584/LICENSE — upstreamLicense
[84] https://raw.githubusercontent.com/tokotype/PlusJakartaSans/18d1cd2f7ea10481919d2f05c1f7064b7307fc26/fonts/webfonts/PlusJakartaSans%5Bwght%5D.woff2 — font
[85] https://raw.githubusercontent.com/tokotype/PlusJakartaSans/18d1cd2f7ea10481919d2f05c1f7064b7307fc26/OFL.txt — fontLicense
[86] https://raw.githubusercontent.com/lucide-icons/lucide/1.71.0/LICENSE — lucideLicense
[87] https://static.makehumancommunity.org/about/license.html — handLicense
[88] https://static.makehumancommunity.org/mpfb/faq/can_i_sell_models.html — handCommercial
[89] https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html — salamanderSource
[90] https://creativecommons.org/licenses/by/3.0 — salamanderLicense
[91] https://creativecommons.org/licenses/by/3.0/legalcode.txt — salamanderLegalcode
[92] https://creativecommons.org/publicdomain/zero/1.0/legalcode.txt — cc0Legalcode
[93] https://registry.npmjs.org/@primer/octicons/-/octicons-19.42.0.tgz — Octicons 19.42.0 release package, MIT LICENSE and mark-github-24.svg
[94] https://raw.githubusercontent.com/brainfoolong/learn-piano-easy/7866e1a0cdc402e1d6d5bd543f71cef4f56ce584/public/sounds/salamander/acoustic_grand_piano-mp3.json — Upstream Salamander web conversion at pinned MIT fork revision
