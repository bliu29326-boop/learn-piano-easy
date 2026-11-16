# Keytrail frontend verification

## Scope

Frontend child only. Design document and clickable representative prototype were written before application UI edits. The complete upstream engine remains in place; no toy replacement, full-tree build, commit, deploy, provider login/payment/email transaction or asset-catalogue edit was performed. No new runtime dependency was added by this child.

## RED evidence actually observed

- Membership baseline (upstream unrestricted access): `bun test src/membership/policy.test.ts` returned 0 pass / 4 fail. Failures showed later course worlds and export improperly open, missing paid-period checks, advanced catalogue unrestricted, and old visible page brand.
- Static renderer baseline: `bun test tools/keytrail-pages.test.ts src/membership/policy.test.ts` returned 4 pass / 2 fail. Original template lacked actual title/content and required headers.
- API integration boundary: `bun test src/membership/client.test.ts` returned 1 pass / 2 fail. Structured backend errors became `[object Object]`; export sent raw `audio/midi` instead of the implemented JSON payload. Both corrected to the actual backend contract.
- First-visit appearance: `bun test src/ui/keytrail-settings.test.ts src/membership/client.test.ts` returned 4 pass / 1 fail: upstream default was system/dark instead of the specified light room.
- Difficulty correction: reading the actual retained `tags.ts` showed Hard starts at 4, despite the generic catalogue type comment suggesting 1–10. The corrected policy oracle first failed at difficulty 4 (3 pass / 1 fail), then the predicate was fixed. Beginner/easy/intermediate versions 1–3.5 remain free; imports bypass catalogue gates.
- MusicXML export: `bun test src/export/keytrail-midi.test.ts src/membership/opener.test.ts` returned 2 pass / 1 fail; XML header `<?xm` was incorrectly retained as MIDI. The upstream reader/writer conversion now produces and independently re-parses the expected C4/E4 notes.
- Analytics removal: `bun test src/site/keytrail-analytics.test.ts` returned 0 pass / 1 fail because the original count function issued a provider request. Its request body was removed, the app caller was removed, and the legacy export is now inert.

## Final targeted tests

Command (Bun executable `/root/.local/share/keytrail-tools/node_modules/.bin/bun`):

```sh
bun test tools/keytrail-pages.test.ts \
  src/membership/policy.test.ts src/membership/client.test.ts \
  src/membership/opener.test.ts src/ui/keytrail-settings.test.ts \
  src/export/keytrail-midi.test.ts src/site/keytrail-analytics.test.ts \
  src/library/guide-panel.test.ts src/learn/song-handoff.test.ts \
  src/learn/lesson-run.test.ts
```

Actual result: **22 pass, 0 fail, 594 expect calls, 10 files, exit 0**.

These include real retained MIDI bytes parsed and opened with all network requests unavailable, all 422 current catalogue rows checked against free/hard classification, actual MusicXML-to-SMF conversion, free core/import network independence, server-export refusal and JSON body, exact return path/query/hash, expiration, free worlds, brand/route removal, static page metadata/no-JS content, and related original lesson/guide/handoff regressions. Boundary identity/error responses are explicit isolated test fixtures, not external account evidence.

## Type checking

The direct TypeScript CLI was blocked by the environment lifecycle scanner's file-size cap, not a code error. The real TypeScript compiler API was then run under Bun using `ts.readConfigFile`, `parseJsonConfigFileContent` and `createProgram` with the repository's exact tsconfig options. Roots included `src/globals.d.ts`, `src/main.ts`, both new tools, and all new test files; imported engine modules were checked transitively.

Final result: **Frontend type diagnostics: 0, exit 0**. The first harness attempt omitted `src/globals.d.ts` and reported missing `__DEV__`; that was corrected rather than changing production types. Test-only Bun fetch typing was also corrected without changing emitted behavior.

`git diff --check` on the owned modified upstream source paths: **exit 0**.

## Browser verification actually run

```sh
bun tools/keytrail-ui-probe.ts
```

Actual result: **exit 0**. It performs a targeted build of the public enhancement module only, not the application/upstream build.

- 10 real generated public HTML pages × 320/375/414/768/1440px: **50 no-JS checks**, each with the correct single H1 and no document overflow.
- Native keyboard skip-link focus.
- Real public enhancement code against an isolated local HTTP test boundary: contact 503 keeps input and idempotency on retry; only explicit accepted/reference shape shows accepted.
- An old active membership plus `verified_payment:false` does not show returned checkout success.
- Native cancellation dialog and Escape; no cancellation request without confirmation.
- Clickable design prototype navigation and native Plus dialog/Escape.
- No browser page exceptions in the tested flows.

Latest evidence directory: `/root/.hermes/cache/scratch/keytrail-ui-probe-F2gOQc/`:

- `keytrail-public-desktop.png`
- `keytrail-public-mobile.png`
- `keytrail-prototype-desktop.png`
- `keytrail-prototype-mobile.png`

The rendered desktop and mobile images were visually inspected. Text/CTAs/navigation remain readable with no observed clipping. Skip link is visibly focused in the public captures because keyboard focus was being tested. Product image slots intentionally show missing-image fallback in this scoped probe: **they are not finished product screenshots and must not be published as proof**. Parent captures genuine Keytrail engine views later as assigned. Prototype keyboard drawings are explicitly design studies, not engine evidence.

Default Playwright launch first failed because its expected 1248 headless-shell binary is absent. The probe uses the actually available `/usr/bin/google-chrome`, launched successfully. No browser download or system install was performed.

Finesse detector:

```sh
node /root/.hermes/skills/creative/finesse-ui/scripts/detect.mjs --json \
  design/keytrail-preview.html src/ui/keytrail.css
```

Final result: **p0 0; no findings for either file; exit 0**. A prototype-only eyebrow-density warning was corrected first. This static detector is not a substitute for the browser evidence above.

## Content and catalogue facts

Programmatic source-body word counts (markup stripped):

| Page | English words |
|---|---:|
| Landing | 642 |
| Adult guide | 530 |
| Beginner guide | 526 |

Current retained catalogue: **422 rows, 279 free, 143 Plus**, using the real displayed Hard boundary and explicit advanced rarity. These are catalogue versions, not a fabricated number of unique compositions or users. Product marketing does not hardcode inflated counts.

## Parent acceptance still required

1. Invoke `renderKeytrailPages(outDir, origin)` after upstream HTML, before cache hashing and SW generation. Alias `writeKeytrailPages` is also exported.
2. Explicitly bypass `/api/*` and `/account*` in SW fetch, precache and cache-group indexing; personalized SSR must not be replaced by cached shell/root HTML. Ensure Pages routes dispatch both account slash forms to the Function.
3. Capture the real redesigned practice, notation and course screenshots into the three documented WebP slots; add actual screenshot provenance through the asset owner/parent workflow.
4. Rebrand manifest/install icons and any remaining upstream social-image assets in parent-owned build/assets scope. App metadata is already rewritten to Keytrail screenshot slots.
5. Run the parent full build, whole-engine desktop/mobile journeys, audio/virtual MIDI checks and permitted external Google/Stripe/contact-provider tests, then deploy/read back the exact candidate. Physical MIDI hardware is not asserted by this child.

[NEEDS_REVIEW] Parent integration/release acceptance only; scoped frontend tests are green.
