# Keytrail design source

Status: implementation direction frozen from KEYTRAIL-SPEC.md. This document and the clickable `design/keytrail-preview.html` precede application UI changes. Autonomous execution is authorized; no additional approval gate is introduced.

## Visual Style Rationale

Keytrail is a personal practice workbench, not an analytics dashboard. Reject the obvious neon music app, cartoon mascot hero, rainbow rarity cards, promotional sponsor heart and chart-heavy admin shell. The interface should feel like opening a quiet music room: sage paper, forest ink, generous but functional spacing, and the real piano as the visual center. Marketing uses a split editorial introduction and a wide actual-product screenshot. The workbench has compact navigation and keeps transport and song selection immediately adjacent to the instrument. Existing notation, falling-note, three-dimensional piano, input, import, feedback and course engines are retained, not simulated.

You'll see: a light green-gray canvas, deep green buttons, a compact Keytrail wordmark, a readable lesson path, restrained music-book rows, and a spacious player. No generated or stock imagery. Screenshot slots are reserved for actual Keytrail captures by the parent after integration; prototype illustrations are explicitly design studies, not claimed screenshots. No external font request. Motion is limited to input feedback and short panel transitions; reduced-motion presents the final state immediately.

This is the first Keytrail design direction; no previous Keytrail rotation record exists. The supplied sage/forest palette is a product requirement, not a randomly selected alternative. Soul 7 / spectacle 2 / density 6.

## Tokens and typography

| Role | Value |
|---|---|
| Page | #f2f5f2 |
| Surface | #fcfdf9 |
| Inset | #e7ece7 |
| Ink | #14201a |
| Body | #435046 |
| Muted | #536357 |
| Primary | #245c42 |
| Primary light | #dbeadf |
| On primary | #fcfdf9 |
| Musical detail | #c79343, never small text on light surface |
| Hairline | rgba(20,32,26,.10) |
| Radius | 12px control / 20px panel / 28px product frame |
| Spacing | 4,8,12,16,24,32,48,72 |

Self-hosted Plus Jakarta Sans is retained with system sans fallback. Display 40–68px, section 28–38px, body 16px/1.65, utility 13–14px. Headings use compact negative tracking, never illegible tight all-caps lines. Dark mode uses forest-black page, successively lighter green surfaces, pale text and a lifted green accent; it is not a mechanical inversion. Player scene themes remain separately configurable.

## Navigation and layout

Public header: Keytrail; Practice; Learn; Pricing; Account; language/theme where applicable. All app routes retain the shared header, with a narrow responsive tools popover. A skip link targets the main landmark. Mobile header wraps navigation below the brand only when needed, never hides the sole entry to a task. Native dialogs manage focus, Escape and return focus. Native links navigate to separately rendered public pages; the existing engine router handles app routes.

Player: compact Keytrail top rail, song title/library, existing transport dock, central full-size instrument. Settings, guide, tracks, view modes, feedback and keyboard controls remain accessible. Do not add a marketing hero above it. Library uses compact title/composer rows and native difficulty choices with explicit Plus labels for advanced versions. Import remains a first-class free action. Settings use quieter labeled groups and retain every existing setting. The existing player can use its original fullscreen treatment; bounded keyboard/scene panning is not document overflow.

Course: preserve all eight world contents and existing progress/XP/lesson behavior. First two worlds are labeled Free. World 3–8 present Plus status; entry, direct lesson URLs and skip tests use the same membership predicate. Curriculum progression locks are separate from membership locks, so their explanations cannot be confused. Members still follow the real curriculum and cannot fabricate completion.

## Full route and content-fit matrix

| Route | Content and layout | Rendering / states |
|---|---|---|
| `/` | Exact SEO H1, split introduction, actual screenshot slot, practice benefits, free scope, three Plus benefits, useful practice advice, guide links and FAQ; 300+ English words | Build-time HTML; JS optional |
| `/learn-piano-as-an-adult/` | Original 300+ word adult-learning guide; screenshot, practice links, realistic limits and a short session routine | Build-time HTML; Article schema |
| `/piano-for-beginners/` | Original 300+ word first-session guide; screenshot, input setup, hands/tempo/loop advice | Build-time HTML; Article schema |
| `/play/` | Complete instrument, song library, import, notation, three judgments, feedback, MIDI/touch/computer input, speed/wait/loop/hands | Existing engine enhancement; initial explanatory HTML |
| `/learn/` | Eight-world course with honest Free and Plus labels | Existing full course engine |
| lesson routes | Real lesson step/answer/score lifecycle | Membership guard only for world 3+ |
| `/learn/profile/` | Existing local progress, badges, backup affordance | Local learning data, not cloud claims |
| `/modes/` | Existing mode guide and working launch links | Preserved engine descriptions |
| `/pricing/` | Free vs Keytrail Plus; USD 9.99/month recurring; exactly three paid benefits; cancellation facts; sign-in then checkout | Static HTML + real API enhancement; idle/loading/auth/error/active |
| `/account/` | Identity, paid period, renewal, sign-in/out, portal, checkout reconciliation | Backend private/no-store SSR; static signed-out fallback only |
| `/contact/` | Email, topic, message and submit; clear retention/provider facts | Static form + API; pending/error retains fields and idempotency key; accepted only from persisted provider reference |
| `/privacy/` | Browser storage, Google, Stripe test mode, necessary cookies, encrypted contact retention, no analytics | Build-time readable HTML |
| `/terms/` | Free/paid scope, recurring test subscription, cancellation, user imports and no guaranteed outcomes | Build-time readable HTML |
| `/licenses/` | MIT fork attribution, actual third-party notices, Salamander credit/source/license | Build-time HTML; asset owner supplies authoritative notices |
| `/about/` | Product purpose, upstream fork attribution, local learning model | Build-time HTML |
| `/404.html` | Useful honest not-found, Practice and Home links | Build-time HTML; no obsolete sponsorship view |

Literal space-containing guide aliases are explicit redirects to canonical slugs. Each public page has one H1, unique title/description/canonical, OG, appropriate JSON-LD, and contextual navigation. Development is noindex; account never appears in sitemap. Original sponsor routes/views and links must not be emitted in the deployed output. Existing locale engine remains available; static English marketing is not falsely claimed translated.

## Membership interaction contract

Authority is GET `/api/me`, never localStorage or an OAuth-return query. Unknown/loading/error membership fails closed only on the three paid features. Free input, import, playback controls, settings and worlds 1/2 work without API success. Active status also checks current_period_end against the current clock, and every protected action refreshes authoritative state. Premium catalogue classification lives in a separate predicate and does not modify the asset agent's catalogue. Imported files are unconditionally exempt from catalogue gating.

Export first asks the server-owned protected export endpoint; no client-only unlock. Parent receives the exact endpoint/body handoff. Login uses `/api/auth/google?return_to=` with same-site path/query/hash. Checkout requires server identity and returns an actual provider URL. Checkout return reconciles the exact session with `/api/billing/reconcile`; old active membership is never shown as proof that this checkout succeeded. Failures remain explicit, preserve inputs and provide retry. Cancellation opens the real server-returned billing portal; do not claim cancellation before server confirmation.

## Responsive and accessibility acceptance

Desktop reference 1440px; marketing maximum 1200px. Test 320/375/414/768px. Columns use minmax(0,1fr); controls wrap by group; text has room to grow in retained locales. Header is the only top-sticky region. Touch targets minimum 44px. Focus is visible, links/buttons have meaningful labels, semantic form controls retain native keyboard behavior, all error and success states include text not color alone. No autoplay/decorative animation, no motion dependency, no generated/stock images, no fake proof, no fabricated customers or numbers.

## Prototype and implementation handoff

`design/keytrail-preview.html` is a real clickable representative study: navigation between Home/Practice/Course/Pricing, a native Plus dialog, keyboard-accessible choices and mobile reflow. Its simplified instrument drawing is a design study only, not a replacement engine and not a finished marketing screenshot. Application implementation preserves upstream engines. Actual application screenshots must replace the reserved `/images/keytrail-practice.webp`, `/images/keytrail-course.webp`, `/images/keytrail-notation.webp` slots after parent integration. Static postbuild utility exports `renderKeytrailPages(outputDirectory, origin)` (alias `writeKeytrailPages`) and runs after upstream page generation, **before cache hashes and the SW version are calculated**. Child does not build the whole tree, commit or deploy. Targeted RED/GREEN tests and integration gaps are recorded in the frontend handoff.
