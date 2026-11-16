# Keytrail

**Small steps. Real music.** A piano practice website built from the complete Learn Piano Easy engine.

- Development site: **https://keytrail-dev.pages.dev**
- Practice: https://keytrail-dev.pages.dev/play/
- Course: https://keytrail-dev.pages.dev/learn/
- Account: https://keytrail-dev.pages.dev/account/

This deployment is a development environment. It is deliberately noindex and uses Stripe sandbox payments only.

## What works

The original piano, falling notes, notation, import, input, judgment, practice history and course engines remain intact.
The interface uses the Keytrail brand and a sage/forest visual system.

Free practice includes worlds 1 and 2, beginner/intermediate repertoire, MIDI/MusicXML import and core practice controls.
Computer keys, touch and compatible MIDI devices are not membership features.
Speed, loops, hand selection, labels, waiting and notation remain free.

Keytrail Plus is **USD 9.99/month**, recurring, with no trial or setup fee.
Only worlds 3–8, advanced library versions and MIDI export require membership.
Server sessions and verified captured invoice payments control export authorization.
A Checkout return URL or an unpaid subscription cannot grant membership.

Google sign-in, persistent sessions and sign-out have been verified against the deployed application.
The real contact form persists encrypted messages, sends immediately and deduplicates retries.
A test message was independently confirmed as delivered in Resend.
There is no scheduled contact retry or visitor analytics.

## Explicit acceptance limits

A genuine sandbox Checkout has been created and independently verified as monthly, USD 999 cents and unpaid.
Repeated checkout requests reuse the same order. Unpaid reconciliation and export denial have been tested.
**A paid browser checkout, paid member unlock, real renewal and cancellation have not been completed.**
Protected tooling has no saved test card. No real card, PAN, CVC or OTP is requested through chat.
The approved shared sandbox merchant currently displays its existing merchant name.
Its dedicated Keytrail product, price, webhook, data and sessions remain separate.
Physical MIDI hardware and physical mobile devices are not claimed as tested.

See [the acceptance record](docs/KEYTRAIL-ACCEPTANCE.md) for evidence levels and remaining boundaries.

## Development

Requirements: Bun **1.4.4**, Node.js, and the locked dependencies.

```sh
bun install --frozen-lockfile
bun run build
bun run dev
```

`bun run dev` is frontend development, not a Google/Stripe backend emulator.
The deployed development site has its provider credentials in Cloudflare secrets.

For an isolated local Pages/D1 runtime:

```sh
bun run build
bunx wrangler d1 migrations apply keytrail-dev --local
bunx wrangler pages dev dist --ip 127.0.0.1 --port 4178 --binding APP_ORIGIN=http://127.0.0.1:4178
```

Use `.dev.vars.example` only as a blank local template. Never commit filled secrets.
Local OAuth needs its own correctly configured callback; cloud credentials are not embedded in the browser bundle.
See [backend setup](docs/KEYTRAIL-BACKEND.md) and `wrangler.jsonc` for the isolated development bindings.

Targeted checks:

```sh
bun test --config tests/keytrail-backend.bunfig.toml tests/keytrail-backend.test.ts tools/keytrail-provider-diagnostics.test.ts
bun tests/keytrail-backend-typecheck.ts
bun test tools/keytrail-sw.test.ts src/pwa/cache-groups.test.ts tools/keytrail-pages.test.ts
bun tools/keytrail-license-audit.ts
bun tools/keytrail-mobile-settings-probe.ts
```

Browser probes require a running local Pages service and Chromium.
Provider probes are explicitly separate from local fixtures.
Do not run contact/provisioning/payment probes as generic unit tests: they can affect authorized external resources.

## Design and contracts

- [Product and route contract](docs/KEYTRAIL-SPEC.md)
- [Design source](docs/KEYTRAIL-DESIGN.md)
- [Clickable design prototype](design/keytrail-preview.html)
- [Backend and recovery contract](docs/KEYTRAIL-BACKEND.md)
- [Acceptance and boundaries](docs/KEYTRAIL-ACCEPTANCE.md)
- [Asset audit](docs/KEYTRAIL-ASSETS.md) and [exhaustive inventory](docs/keytrail-asset-manifest.json)

## Attribution and licenses

This is a fork of [brainfoolong/learn-piano-easy](https://github.com/brainfoolong/learn-piano-easy),
starting at commit `7866e1a0cdc402e1d6d5bd543f71cef4f56ce584`.
Original code, arrangements and copyright notices retain their MIT attribution.
Keytrail does not claim authorship of the upstream compositions.

The retained library contains 338 unchanged upstream MIT MIDI files and 84 individually verified Mutopia Public Domain files.
There are 80 teaching guides. The prohibited piano-midi.de batch and disallowed catalogue references are removed.
Salamander Grand Piano V3 is by Alexander Holm, licensed CC BY 3.0.
Original Keytrail application icons and real fork screenshots have separate provenance in the inventory.

The final source inventory contains 560 declared assets.
See [LICENSE](LICENSE), [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) and each resource's license text.

## Layout

| Path | Holds |
|---|---|
| `AGENTS.md` | inherited contributor guidance |
| `README.md` | this guide |
| `LICENSE`, `THIRD-PARTY-NOTICES.md` | code license and resource attribution |
| `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` | inherited contributor guidance |
| `looper.toml` | inherited workflow configuration |
| `docs/` | contracts, design, provenance, acceptance and upstream references |
| `design/` | clickable prototype and original icon preview |
| `tools/` | build tools, audited generators and scoped checks |
| `package.json`, `bun.lock` | package scripts and locked dependencies |
| `tsconfig.json`, `bunfig.toml` | TypeScript and Bun configuration |
| `src/` | browser application and engine |
| `functions/`, `server/` | Pages adapters and private application backend |
| `migrations/` | isolated Keytrail D1 schema |
| `tests/` | backend fixtures, native-runtime checks and evidence |
| `e2e/`, `playwright.config.ts` | inherited browser tests |
| `public/` | audited public assets |
| `wrangler.jsonc`, `.dev.vars.example` | non-secret deployment configuration and blank local template |
