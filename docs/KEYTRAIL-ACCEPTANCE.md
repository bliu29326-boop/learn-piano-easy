# Keytrail development acceptance

Authority: [KEYTRAIL-SPEC.md](KEYTRAIL-SPEC.md).
Evidence is separated into real deployed providers, actual local browser journeys and isolated fixtures.
A green fixture does not prove a Google identity, payment or email delivery.

## Verdict and outstanding boundaries

**CONDITIONAL_GO for development use. Paid Checkout acceptance remains incomplete.**

- Physical MIDI keyboards and physical mobile devices are not claimed as tested.
- A real sandbox Checkout exists, but no paid browser checkout has completed.
- Paid unlock, actual paid export, provider renewal, refund, dispute and cancellation remain externally unverified.
- Local payment-proof and lifecycle regressions pass against explicit provider fixtures.
- No staged database membership is used as evidence of a purchase.
- The approved shared Stripe sandbox displays its existing merchant label. Reference merchant settings are unchanged.
- Development noindex is intentional. There is no production or live-payment claim.

P1-01 independent recheck: GO, 3/3 at 375px, 320px and 414px. The measured header-offset fix preserves visible search, native touch-close and scrollable controls.
Independent before/after source and served-response hashes match. The scoped report and final assertions are retained in `keytrail-mobile-reqa`.

The final Git SHA, Pages deployment ID, online hashes and binding receipt belong to the release record outside the source tree.
They are verified after deployment rather than guessed in this document.

## Actual piano and course journeys

Parent browser evidence lives in `keytrail-engine-acceptance`; independent evidence lives in `keytrail-independent-ui-qa`.
Operational evidence is retained under the project's state directory, not treated as provider responses.

| Requirement | Observed result |
|---|---|
| Retained piano engine | Real canvas, decoded audio source starts and advancing playback clock |
| Computer and touch input | Letter keys and trusted native touch produce real audio nodes |
| MIDI import | Actual permitted upstream MIDI imported through drag/drop and the native file chooser |
| MusicXML import | Existing MIT XML test input imported unchanged, producing two notation chords and audio starts |
| Notation, waiting and speed | Actual chord DOM; clock holds/releases in wait mode; Slower/Faster changes speed |
| Loop, hands and labels | Actual position repeats; Both/Right/Left selections and note/key/finger labels read back |
| Judgment and feedback | Perfect, Hit, Miss and Mistake observed; a completed take appears in local History |
| Free course | Anonymous first lessons in worlds 1 and 2 open; direct world 3 URL is membership-gated |
| Course persistence | Welcome's seven steps completed with three stars; reload preserves 1/9 and unlocks the next lesson |
| Advanced repertoire | Beginner and Medium open; Hard prompts membership without replacing the current free piece |
| Leave protection | Canceling the real leave confirmation preserves the lesson and step |
| Mobile | 320/375/414/768 have no page-level horizontal overflow; settings obstruction tracked separately above |

The Hit observation uses a deliberately changed 500ms window, not a claim about the default timing tolerance.
The XML input is an existing test fixture, not invented engine output or an additional third-party score.
Hand selector checks do not prove every audio-routing or fingering result.

## Actual deployed identity, contact and unpaid billing

- Google account selection and consent reached the real callback.
- `/api/me` returned the verified user; refresh retained the session.
- Actual UI sign-out followed by a fresh reload returned an anonymous user.
- Both account slash variants return private, no-store SSR responses.
- The real contact form returned accepted with a durable reference.
- Repeating its exact idempotency payload returned the same reference.
- Exact remote D1 readback found one row, one attempt and encrypted input/mail data.
- The exact Resend message was independently read and showed Sent and Delivered.
- Delivered is not a claim that the recipient read the message.

The real Stripe session was independently fetched from the provider:
`livemode:false`, `mode:subscription`, `status:open`, `payment_status:unpaid`, USD 999 cents.
Repeated requests reused the same order and Checkout URL.
Real-owner reconciliation returned `verified_payment:false` with inactive membership.
A valid upstream MIDI export request returned 403 for that signed-in unpaid user.
The protected test-card vault is empty; no PAN, CVC or OTP was manually entered.

Receipts: `contact-result.json`, `stripe-unpaid-result.json`, `google-logout-result.json` in the retained integration evidence.

## Safety, runtime and source evidence

- Backend fixture suite: 28 tests and 148 assertions passed, then passed with the real workerd redirect constraint enforced.
- Added provider diagnostics check preserves generic client errors and excludes secrets from logs.
- Added transport regression requires workerd-supported manual redirects and rejects non-2xx redirects.
- Backend strict TypeScript covers 12 files with zero diagnostics.
- Independent backend review found no confirmed P0/P1 within its original source scope.
- Later HTTP/contact redirect changes have their own native failure reproduction and real-provider validation.
- workerd rejects `redirect:error`; manual redirect mode preserves the existing non-2xx rejection.
- Private API/account paths fully bypass Service Worker caches.
- Uncached lessons use their real route rather than the marketing homepage.
- Cached Pages clean-URL responses are normalized before navigation responses.
- SW targeted regression: five tests and 21 assertions passed.
- Shared source and production bundles receive a real-value secret scan before release.

The whole-repository TypeScript CLI was blocked by the local lifecycle scanner's large-file limit and is not claimed as passed.
The supported targeted compiler-API check ran successfully instead.

## Assets, pages and release checks

The final source manifest inventories 560 paths and 14,694,039 bytes.
All 560 current sizes and hashes were independently checked with zero mismatches.
It retains 338 unchanged upstream MIT MIDI files, 84 individually verified Mutopia Public Domain files and 80 guides.
The asset gate passes; all files are below Pages' 25 MiB limit.
Existing Salamander evidence covers 30 genuine decoded samples and the playable 88-key range.
No physical speaker or MIDI-device claim follows from those software checks.

Three marketing images are actual Keytrail screenshots, not inherited screenshots presented as new work.
Their 1440×900 PNG captures were resized to 1200×750 WebP with quality 87 and method 6.
Original icons, screenshots, fonts, embedded icons, models and audio retain their declared provenance and license texts.

Initial HTML for the homepage and two guides has unique metadata, one H1 and more than 300 English words.
The literal-space document aliases redirect to the canonical guide slugs.
Sponsor and unknown routes return 404. Actual application images return image/webp.
Public development responses retain noindex; private account/API responses retain no-store.

Release acceptance requires a frozen Git commit, push to the fork, the same SHA in Pages metadata and external readback.
A successful upload alone is not the release receipt.
