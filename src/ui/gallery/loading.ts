/** The gallery's section of the loading card: a download under way, one whose size is not yet known, and its messages. */
import { loading, type LoadingPlace } from "../components/loading";
import { el } from "../dom";
import { group, section, specimen, textFor, type Locale, type CompleteLocale } from "./parts";

const MESSAGES = {
  en: {
    loading: "Loading",
    progress: "Progress",
    messages: "Messages",
    places: "Places",
    part: "Loading Just Play Piano",
    amount: "1.2 of 1.5 MB",
    newest: "Getting the newest version",
    sounds: "Loading the piano sounds",
    soundsAmount: "0.4 of 2.2 MB",
    saving: "Saving Learn Piano",
    savingAmount: "2.5 of 5.5 MB",
    offline: "Just Play Piano needs the internet the first time it opens. Connect and try again.",
    failed: "Just Play Piano could not load. Try again later.",
    retry: "Retry",
  },
  de: {
    loading: "Laden",
    progress: "Fortschritt",
    messages: "Meldungen",
    places: "Orte",
    part: "Just Play Piano wird geladen",
    amount: "1,2 von 1,5 MB",
    newest: "Die neueste Version wird geladen",
    sounds: "Die Klavierklänge werden geladen",
    soundsAmount: "0,4 von 2,2 MB",
    saving: "Learn Piano wird gespeichert",
    savingAmount: "2,5 von 5,5 MB",
    offline: "Just Play Piano braucht beim ersten Öffnen das Internet. Verbinde dich und versuch es noch einmal.",
    failed: "Just Play Piano ließ sich nicht laden. Versuch es später noch einmal.",
    retry: "Erneut versuchen",
  },
} satisfies Record<CompleteLocale, Record<string, string>>;

/** A box of a set size on the sunken ground, as the room a view keeps for the card. */
function room(child: HTMLElement, place: LoadingPlace): HTMLElement {
  const height = place === "inline" ? "auto" : "calc(var(--s-12) * 1.75)";
  return el("div", {
    attrs: {
      style: `position: relative; width: calc(var(--s-12) * 5); max-width: 100%; min-height: ${height}; background: var(--c-sunken); border-radius: var(--r-card)`,
    },
    children: [child],
  });
}

/** A card in `place`, shown by `show`. */
function card(locale: Locale, place: LoadingPlace, show: (card: ReturnType<typeof loading>) => void): HTMLElement {
  const made = loading({ place, locale });
  show(made);
  return room(made.element, place);
}

/** The loading card's section in the gallery. */
export function loadingSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const retry = { label: t.retry, run: () => undefined };
  return section("loading", t.loading, [
    group(t.progress, [
      specimen("part", card(locale, "fill", (c) => c.progress({ label: t.part, amount: t.amount, value: 0.8 }))),
      specimen("unknown", card(locale, "fill", (c) => c.progress({ label: t.newest, amount: "", value: 0 }))),
    ]),
    group(t.messages, [
      specimen("offline", card(locale, "fill", (c) => c.message(t.offline, retry))),
      specimen("failed", card(locale, "fill", (c) => c.message(t.failed, retry))),
    ]),
    group(t.places, [
      specimen("over", card(locale, "over", (c) => c.progress({ label: t.sounds, amount: t.soundsAmount, value: 0.18 }))),
      specimen("inline", card(locale, "inline", (c) => c.progress({ label: t.saving, amount: t.savingAmount, value: 0.45 }))),
    ]),
  ]);
}
