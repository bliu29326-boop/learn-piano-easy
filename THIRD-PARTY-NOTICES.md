# Third-party notices

Keytrail is an MIT fork of `brainfoolong/learn-piano-easy`, revision `7866e1a0cdc402e1d6d5bd543f71cef4f56ce584`.
Copyright (c) 2026 The learn-piano-easy contributors. Preserve the complete root `LICENSE`.
Asset licenses remain separate. Membership does not make these assets exclusive or revoke recipients' redistribution rights.

## Resource, author, source, license and commercial redistribution

| Resource and current path | Author | Source | License | Commercial redistribution conditions |
|---|---|---|---|---|
| Upstream code, arrangements and guides, `public/songs/ours/` | The learn-piano-easy authors; tune composers credited per file | <https://github.com/brainfoolong/learn-piano-easy/blob/7866e1a0cdc402e1d6d5bd543f71cef4f56ce584/public/songs/ours/LICENSE.md> | MIT | Commercial use, modification and redistribution permitted; preserve upstream MIT copyright and permission notice. No exclusive ownership claim. |
| Original MIDI compositions, `public/songs/originals/` | The learn-piano-easy authors, not Keytrail | <https://github.com/brainfoolong/learn-piano-easy/blob/7866e1a0cdc402e1d6d5bd543f71cef4f56ce584/public/songs/originals/LICENSE.md> | MIT | Commercial use, modification and redistribution permitted; preserve upstream MIT copyright and permission notice. No exclusive ownership claim. |
| 84 individually verified MIDI files, `public/songs/mutopia/` | Individual maintainer/typesetter, The Mutopia Project; composer per file | Individual RDF/source URLs in the folder `LICENSE.md` and exhaustive manifest | Public Domain, per file | Source individually declares Public Domain; commercial copying and redistribution permitted to the extent of that dedication. Preserve maintainer/source credit; no worldwide legal guarantee. |
| Salamander Grand Piano V3 web samples, `public/sounds/salamander/` | Alexander Holm; upstream learn-piano-easy web conversion | <https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html> | CC BY 3.0 Unported | Commercial redistribution permitted with Alexander Holm attribution, source/license links and modification disclosure; no additional restrictions or endorsement. |
| Plus Jakarta Sans variable font, `public/fonts/plus-jakarta-sans/` | The Plus Jakarta Sans Project Authors (Tokotype) | <https://github.com/tokotype/PlusJakartaSans/tree/18d1cd2f7ea10481919d2f05c1f7064b7307fc26> | SIL OFL 1.1 | Commercial embedding and bundled redistribution permitted under SIL OFL 1.1; keep copyright and OFL text; do not sell the font alone; modified fonts retain OFL and respect reserved names. |
| Lucide 1.71.0 subset and Feather-derived paths, `src/ui/icons/` | Lucide Icons and Contributors; Cole Bemis | <https://github.com/lucide-icons/lucide/tree/1.71.0> | ISC and applicable MIT | Commercial redistribution permitted with ISC and applicable Feather MIT notices; preserve copyright and permission texts. Brand marks confer no trademark endorsement. |
| Octicons 19.42.0 `mark-github-24`, `src/ui/icons/` | GitHub Inc. | <https://registry.npmjs.org/@primer/octicons/-/octicons-19.42.0.tgz> | MIT | Preserve GitHub copyright and MIT text. Trademark rights are not granted. |
| Keytrail application artwork and notice, `public/icons/icon.svg`, `icon-192.png`, `icon-512.png`, `favicon.ico`, `LICENSE.md` | Keytrail project contributors | Original geometric SVG in `public/icons/icon.svg`; original raster artwork in `tools/keytrail-brand-assets.py` | MIT | Commercial use, modification, sale and redistribution permitted; preserve the 2026 Keytrail copyright and complete MIT permission notice in `public/icons/LICENSE.md`. These replace only the application icon, not the retained Lucide/Feather/Octicons interface glyphs. No trademark or exclusivity grant. |
| Keytrail product screenshots, `public/images/keytrail-practice.webp`, `keytrail-notation.webp`, `keytrail-course.webp` | Keytrail project contributors (new captures and redesign); learn-piano-easy contributors and credited embedded-resource authors | `tools/keytrail-capture.ts`: real local app at `http://127.0.0.1:4178/play/` and `/learn/`, 1440×900 PNG captures, resized to 1200×750 WebP; original hashes and checks in `docs/keytrail-asset-manifest.json` and `docs/KEYTRAIL-ASSETS.md` | MIT for Keytrail-authored capture/redesign; embedded-resource licenses unchanged | Commercial copying, modification, sale and redistribution permitted with the Keytrail MIT notice below and upstream MIT notice. Preserve applicable notices for separately bundled font/icon/music/model software or data; this capture license does not relicense those resources or imply exclusive music rights. The rendered screenshot is not a redistribution of the font software by itself. |
| Keytrail-modified HTML template and PWA metadata, `public/index.html`, `public/manifest.webmanifest` | The learn-piano-easy contributors; Keytrail project contributors (branding changes) | Pinned upstream files under `public/`; current local files change theme colors and PWA name/description, retaining the upstream structure | MIT | Commercial use, modification and redistribution permitted; preserve the complete upstream MIT notice and the Keytrail MIT notice for new contributions. Referenced font and interface icons keep their separate licenses. |
| Rigged hand model, `public/models/` | MakeHuman Community; adapted by learn-piano-easy authors | <https://static.makehumancommunity.org/about/license.html>; upstream `tools/hand-model.ts` | CC0 1.0 base assets; MIT model edits | MakeHuman base mesh/rig/weights: CC0 1.0 permits commercial redistribution. Upstream model edits: MIT, preserve its notice. MPFB GPL code is not distributed. |
| Inherited app screenshots, `public/images/landing/` | The learn-piano-easy authors | Pinned upstream files and `tools/landing-pictures.ts` | MIT; embedded resources retain their licenses | Preserve upstream MIT notice. These are inherited upstream screenshots, not fresh Keytrail captures or Keytrail compositions. |
| Social images, `public/images/social/` | The learn-piano-easy authors; Tokotype font | Upstream `tools/make-social-image.ts` | MIT; font software OFL 1.1 | MIT image redistribution permitted. Font notices remain with the font software. |
| Mascot clips and posters, `public/images/mascot/` | Upstream maintainer, using Google Gemini | Pinned upstream `public/images/mascot/LICENSE.md` | MIT as distributed by upstream | Preserve upstream MIT notice. Generation-stage account terms and original generation receipt are not independently verified. No exclusive rights warranty. |
| three.js 0.186.0 | Ricardo Cabello (mrdoob) and the three.js authors | <https://github.com/mrdoob/three.js/tree/r186> | MIT | Preserve full upstream copyright and permission notice with bundled runtime code. |

`docs/keytrail-asset-manifest.json` enumerates every current public path, its digest, author, source, license and redistribution conditions.
The manifest also covers bundled icon data and its full license file.
Per-file Mutopia metadata includes the actual retrieved RDF and the matching source MIDI digest.

## Music policy and attribution

All 338 upstream MIT MIDI files remain MIT, with their original upstream arrangement/composition credits.
Keytrail does not claim to have composed or arranged these inherited works.
The 84 retained Mutopia files individually declare Public Domain. Maintainer and composer credits remain visible in the catalogue.
No share-alike repertoire is retained. The entire piano-midi.de batch and its catalogue links are removed.
This is a product policy, not a claim that share-alike licenses prohibit commercial use.
The catalogue has no exclusive-rights or DRM claim over permissively licensed files.

## Salamander attribution and sound changes

**Salamander Grand Piano V3 by Alexander Holm** — <https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html>.
**CC BY 3.0** — <https://creativecommons.org/licenses/by/3.0/>.
The web conversion selects 30 sampled notes from one velocity layer, trims onsets and tails, fades tails, normalizes gain, and encodes MP3.
These changes were made by the upstream learn-piano-easy authors. Keytrail retains their audio bytes unchanged.
The sampled pitches cover the 88 piano keys through the sampler's nearest-note pitch shifting.
The visible footer must keep author, source and license links. A notice file alone does not satisfy that product requirement.

The original archive is <https://freepats.zenvoid.org/Piano/SalamanderGrandPiano/SalamanderGrandPianoV3+20161209_44khz16bit.tar.xz>.
The inherited importer contains a damaged archive URL; the bundled samples do not require re-import.
The complete CC BY 3.0 legal text is in `public/sounds/salamander/LICENSE.md`.
No external soundfont, recorded impulse response, or third-party notation library is required.
The reverb impulse is generated by the upstream engine.

## Complete license text locations

- Upstream code and MIT music: root `LICENSE`, distributed as `licenses/LICENSE.txt` by the build.
- Font: `public/fonts/plus-jakarta-sans/LICENSE.md`, complete SIL OFL 1.1 and copyright.
- Interface icons: `src/ui/icons/LICENSE.md`, complete Lucide ISC, Feather MIT, and Octicons MIT texts.
- Original Keytrail application artwork/favicon: `public/icons/LICENSE.md`, complete Keytrail MIT text.
- Original Keytrail screenshot/redesign and metadata contributions: full Keytrail MIT text below; upstream and embedded-resource notices remain applicable.
- Salamander: `public/sounds/salamander/LICENSE.md`, complete CC BY 3.0 legal code.
- Models: full CC0 1.0 legal code below; root MIT applies to upstream model edits.
- three.js: `node_modules/three/LICENSE`, copied to `licenses/three-LICENSE.txt` by the build.
- Mutopia: `public/songs/mutopia/LICENSE.md`, individual public-domain declarations and source links.

TypeScript, Bun, Playwright and type packages are development tools, not shipped musical assets.
MPFB/Blender are generation tools. Their GPL code is not part of the exported hand model or browser bundle.
Do not describe unverified AI generation rights as an independent legal guarantee.

## Keytrail original contributions (MIT)

Copyright and license below apply to the original Keytrail application artwork (including its favicon and notice), new product screenshot/capture and redesign contributions, and Keytrail branding changes to `public/index.html` and `public/manifest.webmanifest`.
They do not replace the upstream MIT copyright or the distinct third-party resource licenses above. The author/source claim for new artwork is the project contributor declaration, supported by the local SVG and reproducible raster generator, not an independent worldwide originality or trademark clearance.

```text
MIT License

Copyright (c) 2026 Keytrail project contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Full CC0 1.0 legal text

Source: <https://creativecommons.org/publicdomain/zero/1.0/legalcode.txt>.

```text
Creative Commons Legal Code

CC0 1.0 Universal

    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
    INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
    HEREUNDER.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights (defined below) upon the creator
and subsequent owner(s) (each and all, an "owner") of an original work of
authorship and/or a database (each, a "Work").

Certain owners wish to permanently relinquish those rights to a Work for
the purpose of contributing to a commons of creative, cultural and
scientific works ("Commons") that the public can reliably and without fear
of later claims of infringement build upon, modify, incorporate in other
works, reuse and redistribute as freely as possible in any form whatsoever
and for any purposes, including without limitation commercial purposes.
These owners may contribute to the Commons to promote the ideal of a free
culture and the further production of creative, cultural and scientific
works, or to gain reputation or greater distribution for their Work in
part through the use and efforts of others.

For these and/or other purposes and motivations, and without any
expectation of additional consideration or compensation, the person
associating CC0 with a Work (the "Affirmer"), to the extent that he or she
is an owner of Copyright and Related Rights in the Work, voluntarily
elects to apply CC0 to the Work and publicly distribute the Work under its
terms, with knowledge of his or her Copyright and Related Rights in the
Work and the meaning and intended legal effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be
protected by copyright and related or neighboring rights ("Copyright and
Related Rights"). Copyright and Related Rights include, but are not
limited to, the following:

  i. the right to reproduce, adapt, distribute, perform, display,
     communicate, and translate a Work;
 ii. moral rights retained by the original author(s) and/or performer(s);
iii. publicity and privacy rights pertaining to a person's image or
     likeness depicted in a Work;
 iv. rights protecting against unfair competition in regards to a Work,
     subject to the limitations in paragraph 4(a), below;
  v. rights protecting the extraction, dissemination, use and reuse of data
     in a Work;
 vi. database rights (such as those arising under Directive 96/9/EC of the
     European Parliament and of the Council of 11 March 1996 on the legal
     protection of databases, and under any national implementation
     thereof, including any amended or successor version of such
     directive); and
vii. other similar, equivalent or corresponding rights throughout the
     world based on applicable law or treaty, and any national
     implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention
of, applicable law, Affirmer hereby overtly, fully, permanently,
irrevocably and unconditionally waives, abandons, and surrenders all of
Affirmer's Copyright and Related Rights and associated claims and causes
of action, whether now known or unknown (including existing as well as
future claims and causes of action), in the Work (i) in all territories
worldwide, (ii) for the maximum duration provided by applicable law or
treaty (including future time extensions), (iii) in any current or future
medium and for any number of copies, and (iv) for any purpose whatsoever,
including without limitation commercial, advertising or promotional
purposes (the "Waiver"). Affirmer makes the Waiver for the benefit of each
member of the public at large and to the detriment of Affirmer's heirs and
successors, fully intending that such Waiver shall not be subject to
revocation, rescission, cancellation, termination, or any other legal or
equitable action to disrupt the quiet enjoyment of the Work by the public
as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason
be judged legally invalid or ineffective under applicable law, then the
Waiver shall be preserved to the maximum extent permitted taking into
account Affirmer's express Statement of Purpose. In addition, to the
extent the Waiver is so judged Affirmer hereby grants to each affected
person a royalty-free, non transferable, non sublicensable, non exclusive,
irrevocable and unconditional license to exercise Affirmer's Copyright and
Related Rights in the Work (i) in all territories worldwide, (ii) for the
maximum duration provided by applicable law or treaty (including future
time extensions), (iii) in any current or future medium and for any number
of copies, and (iv) for any purpose whatsoever, including without
limitation commercial, advertising or promotional purposes (the
"License"). The License shall be deemed effective as of the date CC0 was
applied by Affirmer to the Work. Should any part of the License for any
reason be judged legally invalid or ineffective under applicable law, such
partial invalidity or ineffectiveness shall not invalidate the remainder
of the License, and in such case Affirmer hereby affirms that he or she
will not (i) exercise any of his or her remaining Copyright and Related
Rights in the Work or (ii) assert any associated claims and causes of
action with respect to the Work, in either case contrary to Affirmer's
express Statement of Purpose.

4. Limitations and Disclaimers.

 a. No trademark or patent rights held by Affirmer are waived, abandoned,
    surrendered, licensed or otherwise affected by this document.
 b. Affirmer offers the Work as-is and makes no representations or
    warranties of any kind concerning the Work, express, implied,
    statutory or otherwise, including without limitation warranties of
    title, merchantability, fitness for a particular purpose, non
    infringement, or the absence of latent or other defects, accuracy, or
    the present or absence of errors, whether or not discoverable, all to
    the greatest extent permissible under applicable law.
 c. Affirmer disclaims responsibility for clearing rights of other persons
    that may apply to the Work or any use thereof, including without
    limitation any person's Copyright and Related Rights in the Work.
    Further, Affirmer disclaims responsibility for obtaining any necessary
    consents, permissions or other rights required for any use of the
    Work.
 d. Affirmer understands and acknowledges that Creative Commons is not a
    party to this document and has no duty or obligation with respect to
    this CC0 or use of the Work.
```
