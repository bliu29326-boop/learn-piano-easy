# Keytrail backend handoff

## Scope and status

The implementation follows `docs/KEYTRAIL-SPEC.md` and the current three-lock rule.
Only worlds 3–8, advanced library versions, and MIDI export are membership capabilities.
All core playing, worlds 1–2, intermediate versions, and imported-file practice remain free.

This is a development-only Cloudflare Pages Functions backend with isolated D1 storage.
It uses `fetch`, Web Crypto, and platform APIs without runtime packages.
No deployment, remote migration, full app build, real provider transaction, or commit was performed here.
The reference project was read, never changed.

## Parent integration

The parent owns configuration, secret installation, migration application, full build, deployment, and real-provider verification.

- Pages project: `keytrail-dev`.
- Exact origin: `https://keytrail-dev.pages.dev`.
- D1 binding: `DB`.
- Parent-provisioned D1 name: `keytrail-dev`.
- Parent-provisioned D1 ID: `f2158224-ffd6-46cc-9358-ee2c76f091d5`.
- Apply `migrations/0001_keytrail.sql` to that new database before enabling Functions.
- Include `/api/*`, `/account`, and `/account/` in the Pages Functions routing configuration.
- Exclude these routes from application/service-worker caching and static fallback rewrites.
- Do not let static `/account/index.html` bypass the account Function.
- Configure Google callback exactly as `/api/auth/callback/google` on the approved origin.
- Configure the Stripe endpoint at `/api/stripe/webhook` using its dedicated signing secret.

Both account pathname variants run through the actual Function exports in local workerd tests.
The workerd harness uses an explicit adapter router, not the final generated Pages route manifest.
Final Pages trailing-slash dispatch must therefore be checked after the parent deploys.
The account page links its canonical `/account/` route.

## Environment names

| Name | Required value or role |
| --- | --- |
| `ENVIRONMENT` | Exactly `development`; production is deliberately refused. |
| `APP_ORIGIN` | Exactly `https://keytrail-dev.pages.dev`, without a trailing slash. |
| `DB` | The isolated D1 binding above. |
| `AUTH_SECRET` | Independent random secret, at least 32 UTF-8 bytes. Parent already provisioned this name. |
| `SESSION_SECRET` | Optional compatibility alias only; unnecessary when `AUTH_SECRET` exists. |
| `GOOGLE_CLIENT_ID` | The new Keytrail OAuth Web client. |
| `GOOGLE_CLIENT_SECRET` | Its independent secret. |
| `STRIPE_SECRET_KEY` | Approved sandbox `sk_test_` or `rk_test_` key; live credentials are rejected. |
| `STRIPE_ACCOUNT_ID` | Approved sandbox merchant `acct_1UaHFNCx5ZHdkgDO`. |
| `STRIPE_PROJECT_ID` | Exactly `keytrail-dev`. |
| `STRIPE_PRODUCT_ID` | Dedicated product `prod_VdjtkACXZP1T95`. |
| `STRIPE_PRICE_ID` | Dedicated monthly price `price_1UcSQ4Cx5ZHdkgDOArwgAdH1`. |
| `STRIPE_WEBHOOK_SECRET` | Dedicated Keytrail endpoint signing secret, never the reference endpoint secret. |
| `CONTACT_DATA_KEY` | Independent 32 random bytes, encoded as standard base64 or base64url. Padding is optional. |
| `EMAIL_API_KEY` | Isolated sending-only Resend key supplied by the parent. |
| `EMAIL_FROM` | Parent-approved `Keytrail <notifications@mail.burningbridgesrap.com>`. |
| `SUPPORT_EMAIL` | Parent-approved contact recipient. Never copied from a reference implementation. |

Secret values stay in the parent's private 0600 files and Cloudflare secrets.
This implementation does not read, copy, print, or embed those secret files.
No Stripe API-version environment variable is needed.
Requests explicitly send `Stripe-Version: 2025-06-30.basil`.
The dedicated endpoint ID is `we_1UcSQ5Cx5ZHdkgDOu485GBDY`; the runtime does not require that ID.

## Entry points and exports

- `functions/api/[[path]].ts`: Pages `onRequest`, delegating to `handleRequest`.
- `functions/account.ts`: Pages account `onRequest`, delegating to the same router.
- `server/index.ts`: `handleRequest(request, env)` and a Worker-compatible default `{fetch}`.
- `server/auth.ts`: Google initiation/callback, durable identity/session resolution, and logout.
- `server/billing.ts`: `checkout`, `reconcile`, `reconcileOrder`, `membership`, `cancel`, and `webhook`.
- `server/entitlements.ts`: `requireEntitlement` and the protected `exportMIDI` endpoint.
- `server/contact.ts`: `contact` and owner-tooling-only `recoverContact`.
- `server/account.ts`: request-time personalized account HTML.
- `server/types.ts`: structural D1, Env, User, Order, and Membership contracts.

There is no scheduler, Cron trigger, public admin endpoint, generic queue, or client-trusted entitlement token.

## HTTP contract

Every API response is private/no-store and noindex.
Errors use `{error:{code:string,...}}` with a non-success HTTP status.
Provider errors remain errors, never fabricated successful identities or payments.
Every mutating browser endpoint requires exact `Origin: APP_ORIGIN` and rejects cross-site fetches.
The webhook is the sole exception and instead requires its raw-body Stripe signature.

### Identity

`GET /api/me` and `GET /api/entitlements` return:

```json
{
  "user": null,
  "membership": {
    "active": false,
    "current_period_end": null,
    "cancel_at_period_end": false
  },
  "environment": "development"
}
```

A signed-in `user` contains only `id`, `name`, and `email`.
`current_period_end` is Unix seconds from a verified paid invoice line.
It is not inferred from a URL, browser flag, subscription status, or subscription period alone.
Future paid periods cannot activate membership before their start.
Expiration is enforced on every authoritative read and export request without a scheduled task.

`GET /api/auth/google?return_to=<relative path>` redirects to Google.
Relative path, query, and fragment survive a successful flow.
Encoded protocol-relative paths, backslashes, control characters, and API return paths fall back to `/account/`.
OAuth initiation rejects cross-site requests when browser fetch metadata is present.
Callback cross-site navigation is expected and uses single-use state plus the browser binding.

`GET /api/auth/callback/google` verifies state, browser binding, expiration, and PKCE code exchange.
Google ID tokens require a verified RS256 JWKS signature, issuer, client audience, authorized party, nonce, time claims, subject, and verified email.
Ownership is the verified Google subject under the fixed Google issuer, never email matching.
OAuth access/refresh tokens are not retained.
The PKCE verifier is encrypted at rest.

HTTPS cookies are host-only `__Host-keytrail-dev.session` and `__Host-keytrail-dev.oauth`.
They use Path `/`, HttpOnly, Secure, and SameSite Lax without Domain attributes.
Sessions have a fixed 30-day lifetime; opaque random tokens are stored only as keyed hashes.
Every authenticated request checks D1, without a browser session cache.

`POST /api/auth/logout` accepts `{}` and revokes only the current Keytrail session.
It expires only the two Keytrail cookies and never clears another application's cookies.

### Subscription

`POST /api/checkout` accepts `{}` and requires sign-in.
An optional `Idempotency-Key` header accepts 8–128 letters, digits, underscores, or hyphens.
It returns `{url,order_id}` only for a verified open sandbox Checkout Session.

Price verification requires the exact configured product and price, USD 999 cents, monthly interval, interval_count 1, and licensed recurring quantity 1.
The Checkout mode is `subscription`, not prepaid credits.
There are no trial days, annual price, setup fee, promotions, automatic taxes, adaptive pricing, or live transactions.
The customer, checkout email, origin, order identity, price, merchant, site, environment, and expiry are server snapshots.
Session and subscription metadata contain `project`, `environment`, `account_id`, `order_id`, and `user_id`.

D1 allocates one checkout slot per user.
Competing request keys resolve to that slot's canonical order and provider idempotency key.
An existing open Session is reused.
Existing active, trialing, incomplete, past-due, unpaid, paused, or otherwise unresolved subscriptions block a new purchase.
A local entitlement expiration alone never releases the slot.
A new generation requires provider-terminal evidence with no unpaid invoices, unresolved funds, or future paid coverage.
Invoice/subscription pagination fails closed.
Retirement uses a transactional slot CAS and retains order history and immutable request-key aliases.

Checkout expiry is frozen at one hour after allocation.
Unknown creation results reuse the same frozen provider payload for at most 25 minutes.
After that, the server returns `CHECKOUT_RECONCILIATION_REQUIRED`, not a new order or another subscription.
A signed webhook or owner-scoped reconciliation can bind the exact Session later.
Operators can locate an unknown Session using its immutable order metadata in Stripe.
They must not clear the slot or change order IDs to retry.

`POST /api/billing/reconcile` accepts `{session_id:"cs_test_..."}`.
The requesting user must own the persisted canonical order.
The server re-fetches the exact Session, subscription, latest invoice, invoice lines, Invoice Payments, PaymentIntent, and captured Charge.
An exact invoice ID from a webhook takes precedence over the subscription's latest invoice.

Basil uses `invoice.parent.subscription_details`, line `pricing.price_details`, and `/v1/invoice_payments`.
It does not use removed `invoice.payment_intent`, `invoice.paid`, or `invoice.paid_out_of_band` fields.
Coverage requires one fully allocated, nonzero USD999 captured payment and the exact recurring product/price.
Zero invoices, manual/out-of-band records, unpaid status, wrong customer/project/merchant, uncaptured charges, and price mismatches grant nothing.
Invoice, intent, charge, customer, subscription, and owner bindings are immutable in the coverage ledger.

Responses include `{membership,verified_payment}`.
An unpaid renewal can return `verified_payment:false` while preserving already verified coverage.
`active` or `trialing` alone is never sufficient proof.
D1 proof revisions fence stale concurrent reconciliations, including first coverage insertion.
Full refunds and unresolved disputes revoke only the affected invoice coverage.
Refund amounts are monotonic; dispute-won evidence can restore coverage without decreasing refund history.
Partial refunds retain the remaining paid coverage.

`POST /api/billing/cancel` accepts `{confirm:true}` after explicit UI confirmation.
It sets only `cancel_at_period_end=true`, independently re-fetches that exact subscription, then reconciles the account.
Already verified paid time remains available.
There are no refund, capture, immediate cancellation, plan-change, or resume-renewal endpoints.
This explicit cancellation endpoint replaces the optional billing portal.
`/api/billing/portal` is intentionally absent.

`POST /api/stripe/webhook` requires a valid raw-body HMAC signature within five minutes.
Event IDs are durably deduplicated only after successful transactional reconciliation.
Unrelated merchant events are ignored without binding an owner by email.
For refund/dispute events, exact historic charge coverage is reconciled, not merely the latest renewal.

Subscribe the dedicated endpoint to:

```text
invoice.paid
invoice.payment_succeeded
invoice.payment_failed
checkout.session.completed
checkout.session.expired
checkout.session.async_payment_succeeded
customer.subscription.created
customer.subscription.updated
customer.subscription.deleted
charge.refunded
charge.dispute.created
charge.dispute.updated
charge.dispute.closed
charge.dispute.funds_withdrawn
charge.dispute.funds_reinstated
```

### Protected MIDI export

`POST /api/export/midi` requires an authenticated, currently paid server session.
Input is `{midi_base64:string,filename?:string}`.
It accepts a structurally valid Standard MIDI File up to 1 MiB and returns unchanged `audio/midi` bytes as an attachment.
Default filename is `keytrail-practice.mid`.
The optional filename allows simple ASCII letters, digits, spaces, dots, underscores, and hyphens, ending in `.mid`.

The frontend must send its current edited MIDI bytes here and use the response for its export action.
A client-generated local download must not bypass this intended application gate.
The other server guard capability names are `world3_plus` and `advanced_library`.
Do not invoke these guards for imports, MIDI devices, intermediate versions, or core playing controls.
Public MIT music assets remain redistributable; this is application authorization, not DRM.

### Contact

`POST /api/contact` accepts `{email,topic,message,idempotency_key}` without requiring sign-in.
Limits are email 254 characters, topic 100 characters, and message 6000 characters.
The JSON request body is bounded to 16 KiB.
The idempotency key accepts 8–128 letters, digits, underscores, or hyphens.
New submissions are limited atomically by keyed email/IP hashes and global admission limits.
Accepted duplicate lookups do not consume new admission.

The encrypted contact row is the durable send intent.
AES-GCM ciphertext is bound to the exact reference using additional authenticated data.
Only keyed hashes, reference IDs, delivery state, and timestamps remain outside the encrypted message/payload.
The sender, recipient, subject, reply-to address, and body are encrypted and frozen before the first send attempt.
Retries keep the identical provider payload and `keytrail-contact:<reference>` provider idempotency key.
A fenced D1 lease prevents concurrent senders.

The handler sends immediately through Resend.
It returns `{ok:true,status:"accepted",reference}` only after a nonempty provider message ID is saved and read back.
Same-key/same-content accepted repeats never resend.
Same-key/different-content requests return 409.
Missing sender configuration or network failure returns 503 with the saved `reference`, never false acceptance.
The browser should retain the exact content and idempotency key on failure.

There is no automatic retry or Cron.
An explicit same-key retry observes the persisted backoff and can make up to five attempts within 23 hours.
Outside that window, `reconciliation_required` requires manual provider/DB review without another blind send.
`recoverContact(env,reference)` is available only for trusted owner tooling, not public HTTP access.
Never bulk-send historical rows without explicit authorization.
Provider acceptance does not prove inbox placement, delivery, or reading.

## Schema

All table names are namespaced:

| Table | Durable purpose |
| --- | --- |
| `kt_users` | Verified Google subject and isolated Stripe customer identity. |
| `kt_sessions` | Keyed session token hashes and absolute expiry. |
| `kt_oauth` | Single-use state, browser binding, encrypted PKCE verifier, nonce, and return path. |
| `kt_orders` | Canonical checkout generation, frozen scope, provider bindings, lifecycle, and proof revision. |
| `kt_checkout_slots` | One canonical current order per user. |
| `kt_checkout_keys` | Immutable request-key aliases to their original generations. |
| `kt_coverage` | Independent invoice/captured-funds proof and exact paid coverage. |
| `kt_stripe_events` | Successfully processed signed event IDs. |
| `kt_contacts` | Encrypted contact and mail snapshots, send lease, attempts, and accepted provider ID. |

Practice history, imported MIDI files, keyboard input, and musical progress are not uploaded by this backend.
There is no automatic contact deletion or timed retention purge.
Privacy copy must disclose encrypted persistence and manual support/deletion rather than inventing a deletion deadline.
Expired sessions cannot authorize requests even when their rows remain stored.
Expired OAuth rows are removed on later sign-in initiation.
Account deletion and billing-record deletion are not exposed.

## Verification and evidence

Run only these backend checks from the repository root:

```text
/root/.local/share/keytrail-tools/node_modules/.bin/bun test --config=tests/keytrail-backend.bunfig.toml tests/keytrail-backend.test.ts
/root/.local/share/keytrail-tools/node_modules/.bin/bun tests/keytrail-backend-typecheck.ts
node tests/keytrail-backend-workerd.mjs
```

The explicit Bun config avoids the unrelated app locale preload during parallel frontend work.
The workerd harness uses the already installed reference-project test tools without changing that project.
Set `KEYTRAIL_TEST_TOOLS` to another package.json containing compatible esbuild and Miniflare 5 when needed.
The harness bundles backend Functions only in memory; it never runs the app build or a deployment.

Actual results on the final candidate:

- SQLite/provider-protocol fixtures: **28 passed, 0 failed, 148 assertions**.
- Targeted strict TypeScript: **12 files, 0 diagnostics**.
- Real local workerd/D1 and Function adapters: **7 passed, 0 failed**.
- All three check processes returned exit code 0.

Logs and commands are saved in `tests/keytrail-backend-green.log`, `tests/keytrail-backend-typecheck.log`, `tests/keytrail-backend-workerd.log`, and `tests/keytrail-backend-results.json`.
The candidate source digest manifest is `tests/keytrail-backend-manifest.json`.

Test-first evidence includes the initial route-contract RED, the billing-contract RED, and independently observed payload-freeze, refund-monotonicity, and Checkout-expiry REDs.
The first scaffold run also contained two missing-schema setup failures; those are not claimed as business RED evidence.
Later security/lifecycle tests include supplemental coverage and are not retroactively described as pre-implementation REDs.

Coverage includes RS256 signing/verification, PKCE exchange, state replay/browser isolation, subject separation for equal email addresses, durable sessions/logout, origin/size guards, encrypted contact storage, leases, stable payload retries, provider-ID readback, purchase deduplication, scoped funds proof, recurring/failed renewal, cancellation, refund fencing, automatic expiry, and byte-preserving paid export.
The workerd tests exercise real D1 transaction rollback, AES/HMAC compatibility, persistent sessions, and the actual Pages Function exports.

## Remaining external acceptance and trade-offs

Local provider fixtures are explicitly synthetic transport fixtures, not real Google users, Stripe receipts, or sent emails.
Real Google callback persistence, sandbox monthly payment/webhook delivery/cancellation, and Resend acceptance/idempotency remain parent integration checks.
The final deployed Pages route manifest and trailing-slash behavior also remain parent checks.
No local result substitutes for those external acceptance criteria.

A reconciliation performs bounded sequential provider reads rather than trusting cached lifecycle flags.
That increases billing latency but keeps ordinary `/api/me` and free practice independent of provider availability.
Provider calls have 15-second timeouts and no automatic network retries.
Unknown provider state, pagination, expired idempotency windows, and CAS races fail closed with recoverable errors.
No generic framework, background scheduler, email queue service, or runtime SDK is introduced.

[NEEDS_REVIEW] Parent-only external integration and deployment acceptance remain.
