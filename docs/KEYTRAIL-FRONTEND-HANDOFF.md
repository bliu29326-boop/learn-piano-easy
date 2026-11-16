# Frontend integration handoff

Scope: this is the original child implementation handoff, not the current release gate. Parent integration completed its build hook, private-cache bypass, original app icons and real screenshots. Current results and remaining payment boundaries are recorded in KEYTRAIL-ACCEPTANCE.md. The child itself did not build, commit, deploy or perform external provider transactions.

## Parent action needed now

- Export postbuild name is **`renderKeytrailPages(outDir, origin)`** (alias `writeKeytrailPages` exported). Run **before cache-group hashing / SW generation**, after upstream HTML generation. It writes `keytrail-pages.css`, public pages, sitemap, robots, aliases, headers and meaningful app fallback HTML.
- **SW private bypass required:** `src/pwa/sw.ts` currently derives a cache group from any GET path, then uses cache-first `fromShell` with root-page fallback. Parent must explicitly bypass `/api/*` and `/account*` *before* group lookup; exclude those paths from cache groups/precache, including `account/index.html`. Otherwise personalized account SSR can be replaced/cached as shell content. Child has not edited parent-owned cache/build configuration.
- **Brand asset follow-up for parent:** upstream `public/manifest.webmanifest`, app icons and localized social images are outside this child's asset ownership. Ensure manifest short/name and installed-app icons are Keytrail (do not leave old visible brand). Public SSG metadata already uses actual Keytrail screenshot slots; utility now rewrites app `og:image` away from upstream social images too.
- No new analytics. `src/site/site.ts` no longer imports/calls upstream visitor analytics.
- Literal aliases emitted: `/learn%20piano%20as%20an%20adult[ / ]` -> `/learn-piano-as-an-adult/`; `/piano%20for%20beginners[ / ]` -> `/piano-for-beginners/`, 301. Exact lines are in `_redirects`; no literal space in rule syntax.

Ownership: frontend edits `src/membership/`, `src/site/`, `src/ui/`, landing, app hook and course/library UI hooks only. Asset catalogue `src/library/search.ts`, generated catalogue and public songs/notices are not edited.

Parent build call (**before upstream cache-group hashing and service-worker version generation**, after upstream HTML/assets generation):

```ts
import { renderKeytrailPages } from "./keytrail-pages";
await renderKeytrailPages(outDir, siteUrl ?? "https://keytrail-dev.pages.dev");
```

Required API integration now matched to implemented `server/entitlements.ts`: `POST /api/export/midi`, same-origin credentials, `Content-Type: application/json`, `{midi_base64, filename}`. Server checks session/current paid coverage and valid MIDI structure before returning MIDI bytes as `audio/midi`, attachment, private/no-store. Limit 1 MiB; client shows an honest limit error. Frontend never downloads before the protected response succeeds. Current-library export and imported-file re-download both use this route. No DRM claim; import/practice stays free. Cancellation uses implemented `POST /api/billing/cancel {confirm:true}` with a native explicit-confirmation dialog, not an unimplemented portal. Reconciliation success reads exact response `verified_payment===true`, never old membership alone. Structured `{error:{code}}` responses are surfaced as useful text.

Screenshots slots for parent captures: `public/images/keytrail-practice.webp`, `public/images/keytrail-course.webp`, `public/images/keytrail-notation.webp`. Only genuine redesigned Keytrail captures; do not fill with upstream screenshots. Static utility references them. Capture before final build or write captures to output then rebuild/copy as coordinated.

- **Difficulty contract verified against actual upstream UI:** `src/library/tags.ts` labels difficulty >=4 Hard; common/rare/epic span 1–3.5 and remain free. `src/membership/policy.ts` therefore gates >=4 and explicit legendary/hard/advanced catalogue variants, not an assumed 1–10 scale. Current audited catalogue classification: 422 rows, 279 free, 143 Plus. Upload practice is always exempt. No catalogue/assets were edited by this child.
- **Original engine protection:** UI keeps all course step runners, 3D piano/notation/input/feedback and import parsers. Both MIDI and MusicXML/MXL imports practice free. MusicXML-to-MIDI export reuses upstream `readSongFile` + `writeMidi`, then sends the actual MIDI through the protected server endpoint. Raw MIDI is not rewritten.

All other API paths match KEYTRAIL-SPEC.md.

## Verified child result

- `docs/KEYTRAIL-FRONTEND-VERIFICATION.md` contains the exact RED/GREEN evidence, commands, limits and screenshot paths.
- Final targeted Bun run: **22 pass / 0 fail / 594 assertions across 10 files**, exit 0.
- Exact-tsconfig TypeScript compiler API check of frontend/new tools/tests: **0 diagnostics**, exit 0. Direct CLI was blocked by the environment scanner, so no guessed type-check claim.
- Public/prototype browser probe: **50 no-JS route×viewport checks** at 320/375/414/768/1440px, contact retry/idempotency, old-paid-state reconciliation rejection, native cancellation/Plus dialogs and Escape, all passed with no page exceptions. The browser probe uses isolated HTTP boundary fixtures and does not claim actual provider success.
- Copy source counts: landing 642 words, adult guide 530, beginner guide 526.
- Finesse detector: 0 P0 and no remaining findings. Desktop/mobile actual static renders visually inspected; real piano screenshots still await parent capture.

Primary new artifacts: `docs/KEYTRAIL-DESIGN.md`, `design/keytrail-preview.html`, `src/ui/keytrail.css`, `src/ui/keytrail-settings.ts`, `src/i18n/rebrand.ts`, `src/site/keytrail-content.ts`, `src/membership/{policy,client,public}.ts`, `src/export/keytrail-midi.ts`, `tools/keytrail-pages.ts`, targeted tests, and `tools/keytrail-ui-probe.ts`. Upstream hook edits are restricted to site navigation/routing/views, first-visit theme setup, course membership/labels, catalogue opener/library display, protected export actions and inert analytics.
