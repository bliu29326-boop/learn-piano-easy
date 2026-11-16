# Keytrail product and design source

## Authority and scope

This document implements the supplied `Online piano parctice.docx`. The user requests a complete development deployment, not a mockup. Upstream is brainfoolong/learn-piano-easy, commit 7866e1a0cdc402e1d6d5bd543f71cef4f56ce584, MIT. Preserve its working piano engine, learning curriculum, notation, import, practice, feedback, accessibility and settings. Replace the complete visible brand and presentation. Remove original sponsorship routes and calls to action. Preserve all upstream copyright and asset license notices.

The explicit three-lock rule takes priority over the embedded table's conflicting one-world trial. Worlds 1 and 2 are free. Only worlds 3 through 8, advanced library difficulty versions, and MIDI export require membership. Never gate MIDI device input/output, computer or touch input, falling notes, three judgment categories, sheet view, note/finger labels, wait mode, speed, loops, hand selection, local progress or practice feedback. All legal retained beginner pieces remain free. Intermediate versions remain free unless explicitly advanced/hard. Imported user files and their practice remain free; advanced catalogue gates must not block imports. Membership is USD 9.99 per month, recurring subscription, cancel future renewal in account. No live payment, trial, setup fee or annual plan.

## Brand and visual rationale

Brand: Keytrail. Promise: Small steps. Real music. Interface language: English by default, retaining upstream language functionality. Product register: personal practice workbench, not an admin dashboard. Reject a generic neon music landing page and a statistics-heavy dashboard. Use a welcoming light shell with an unmistakable real piano as the central product proof. No purchased or generated stock imagery. Required editorial images are real screenshots captured from this implementation, never fabricated UI.

Tokens: page #f2f5f2; surface #fcfdf9; inset #e7ece7; ink #14201a; body #435046; muted #536357; primary #245c42; primary-light #dbeadf; action ink #fcfdf9; warm accent #c79343 for musical detail only. Hairline rgba(20,32,26,.10). Radius 12px controls, 20px panels, 28px outer product surface. Spacing 4/8/12/16/24/32/48/72. Keep the audited self-hosted Plus Jakarta Sans, with system sans fallback. No external font requests. Functional success/error colors must also use icons or text. Light and dark player modes remain usable and deliberate.

Marketing: max-width 1200px, compact header, split headline and real screenshot, generous section rhythm, clear direct practice CTA. H1 includes learn piano online free. No fabricated students, testimonials or performance claims. Show free scope and exactly three membership benefits. App: compact top navigation, reassuring practice heading, piano/notation central, transport controls close to piano, library accessible without a paywall, no unnecessary marketing above the keyboard. Course: eight-world path with descriptive content, free badge for first two worlds and a membership lock on later worlds. Locked state shows explanation and pricing link; no misleading disabled free controls.

Mobile: test 320/375/414/768px plus desktop 1440px. No document-level horizontal overflow. Keyboard may pan within its own bounded region where needed; touch targets >=44px. Controls wrap semantically. One top sticky header. Dialogs trap focus and close via Escape. Visible focus, labeled controls, skip link, prefers-reduced-motion terminal state. Account/pricing forms retain entered data on failures.

## Route and rendering contract

Public content is server-rendered HTML. SEO pages are specifically build-time generated static HTML and must be complete via curl with no JavaScript. Interactive engine is client enhancement. Personalized account data is request-time SSR through Cloudflare Pages Functions, private/no-store. Deployment target is a standalone Cloudflare Pages development project `keytrail-dev`, default expected origin `https://keytrail-dev.pages.dev`. Development responses are noindex, isolated from a later production launch; SEO content, metadata, schema and sitemap are still implemented and verified.

- `/`: title `Learn Piano Online Free | Keytrail`; H1 `Learn piano online free. One small step at a time.`; unique description; >=300 English words and real app screenshot; CTA `/play/` and `/learn/`.
- `/learn-piano-as-an-adult/`: title/H1 targeting `learn piano as an adult`, unique description, >=300 English words of useful original guidance, at least one real screenshot and contextual links.
- `/piano-for-beginners/`: title/H1 targeting `piano for beginners`, unique description, >=300 English words, at least one real screenshot and contextual links.
- The document's literal space-containing paths `/learn piano as an adult` and `/piano for beginners` are preserved as explicit percent-encoded redirect aliases to the above canonical slugs, not silently discarded.
- `/play/`, `/learn/`, lesson routes, `/learn/profile/`, `/modes/`: preserve the complete playable engine and learning functions; meaningful initial HTML where applicable.
- `/pricing/`: Free and Keytrail Plus $9.99 USD/month, recurring/cancel wording, three gated capabilities only; sign-in before checkout, not before free play.
- `/account/`: SSR current identity, active paid period, renewal status, sign-in/out, checkout return reconciliation and cancellation/portal affordance; no shared cache.
- `/contact/`: real contact form, email, topic, message; accepted only after provider ID persisted; error retains input/idempotency.
- `/privacy/`, `/terms/`, `/licenses/`, `/about/`: accurate data flows, local practice storage, Google identity, Stripe test subscription, encrypted contact retention/manual support, third-party attribution. No invented company address or legal guarantee.
- Original `/sponsor/` must return 404/410 with no sponsor CTA anywhere in deployed UI. Custom 404, sitemap, robots, canonical, OG and basic appropriate JSON-LD are required. Sitemap includes actual public pages, not obsolete sponsor paths.

## Integration contract

Backend owner writes `functions/api/[[path]].ts`, `functions/account.ts` if needed, `server/`, `migrations/`, `tests/keytrail-backend*`, and integration handoff only. Frontend owner writes app styling, site templates/marketing, `src/membership/` client integration and only necessary app hook edits. Asset owner writes library catalogue and asset/license files; coordinate exact shared hooks with parent. Parent owns build/package/deploy configuration and secrets. Do not commit or deploy from child tasks.

Expected API (all errors real, no fixture success in product):
- GET `/api/me`: `{user:null|{id,name,email},membership:{active:boolean,current_period_end:number|null,cancel_at_period_end:boolean},environment:'development'}`. Identity is server authoritative, never localStorage.
- GET `/api/auth/google?return_to=<relative path>` starts Google OAuth; callback `/api/auth/callback/google`; preserve path/query/hash and refuse open redirects. POST `/api/auth/logout`, same-origin, clears only Keytrail sessions.
- POST `/api/checkout` `{}`: authenticated same-origin; returns `{url,order_id}`. New subscription only; dedupe repeated checkout and active subscription. Server locks Price/account/site/mode USD999 monthly; idempotency and pending unknown recovery mandatory. Existing nextActGame test Stripe credentials may be read from its private config and copied privately, explicitly authorized. Never reuse its Product/Price, webhook signing secret, DB or sessions.
- POST `/api/billing/reconcile` `{session_id}`: same owner, server re-fetches exact session/subscription/latest invoice/payment and grants only paid, nonzero USD999 coverage with same price/project/customer/account/environment. URL return or `active` alone is not proof.
- POST `/api/billing/portal` `{}`: authenticated same-origin returns `{url}` for test customer management, or implement safe cancel endpoint with confirmation. No live charges/refunds.
- POST `/api/stripe/webhook`: raw signature-checked body, dedup events, provider re-fetch and scope validation; handle recurring paid, failed, canceled and period expiration. Never grant on unsigned events.
- POST `/api/contact` `{email,topic,message,idempotency_key}`: validate origin/size, persist encrypted message first, send immediately via authorized provider, no Cron; `{ok:true,status:'accepted',reference}` only when exact provider ID is persisted. Idempotent repeats never resend.
- GET `/api/entitlements` optional alias to authoritative membership; server route for protected MIDI export must check session. Client locks alone are insufficient for a protected endpoint. Upstream MIT assets remain redistributable; do not claim DRM or exclusive rights over them.

Secrets are private 600 files outside repo and Cloudflare secrets. Use a new session secret and contact encryption key. Reference nextActGame auth/contact implementation, but isolate client/session/DB and contact credentials unless explicitly authorized reuse. No marketing analytics added. Necessary auth/payment cookies disclosed without a purposeless consent banner.

## License and asset acceptance

Delete the entire piano-midi.de MIDI batch from current tree and built output, remove all catalogue references. Historical MIT fork attribution remains. Retain Salamander Grand Piano V3 by Alexander Holm under CC BY 3.0 with visible footer attribution and license/source links. Verify actual sound files: upstream may use import scripts instead of shipping audio; provision the permitted original samples if needed, never synthesize fake proof of audio.

Audit each retained Mutopia file using its individual source/license page; remove unverifiable or restrictive pieces, preserve legal beginner/advanced repertoire and original upstream MIT arrangements. New third-party music only from per-file verified Mutopia/IMSLP; prefer upstream original MIT material over collecting unnecessary new files. Every font, icon, model, screenshot and audio resource gets author + source + license + commercial redistribution conditions in THIRD-PARTY-NOTICES.md and an asset manifest. Audit no undeclared external audio. Keep complete license texts. Screenshot ownership says captured from Keytrail fork, not original compositions by us. Commit message enumerates asset groups added/removed/retained and points to exact manifest.

## Verification and trade-offs

Test new behavior RED first. Preserve original engines rather than reimplementing them. Native browser audio requires a user gesture; physical MIDI hardware cannot be asserted without a device. Validate virtual Web MIDI handler behavior separately and disclose hardware limit. Verify complete free journey, free worlds 1/2, world3 lock, legal song/difficulty lock, free import/feedback, export lock, real Google callback with session persistence, real Stripe sandbox monthly purchase and webhook/coverage/cancel behavior, real contact provider acceptance/idempotency. No invented receipts or auth users as evidence of external integrations.

Run `bun run build`, relevant unit/browser regressions, static no-JS SEO checks and desktop/mobile screenshots. Deploy the same frozen commit to Cloudflare Pages, externally read exact routes/assets/API and deployed version. Full build/deployment is parent-only after writers finish. Never modify the reference nextActGame website or resources. Preserve scope if integration is blocked; continue unrelated work and report only the exact unresolved requirement.
