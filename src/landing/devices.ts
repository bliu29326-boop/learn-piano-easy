/**
 * The landing page's band of what you play on: a MIDI keyboard, a touch screen or the computer
 * keyboard, each on a surface with an icon on a tile. A small piano beside them plays once a click
 * loads it.
 *
 * - **The small piano** is a picture of the piano view of `src/render/piano-keys.ts`, from C4 to E5
 *   with the C names, until a click, as decision 0008 says. The picture is a WebP per scheme in
 *   `public/images/landing/`, which `tools/landing-pictures.ts` makes. It loads lazily, in a box of the
 *   view's own shape, so neither its arrival nor the swap moves anything.
 * - **The picture is a button.** Its click loads the view's chunk through `openPart`, so the landing page
 *   loads no three.js before it. The view then takes the picture's place, and focus moves to it.
 * - **A download shows over the picture,** in a Loading card: the player's code, then the sound set, as
 *   `src/audio/sound-download.ts` says. Offline, the card says so, and its button tries again.
 * - **The keys sound** through `src/landing/touch-sound.ts`. The view's arrival wakes the sound, so the
 *   first key pressed sounds once the sound set is in.
 * - **The ways** stand one above another, each a row of its tile and its words. From 1024 pixels the
 *   small piano stands beside them, and below them under that.
 */
import { followSoundDownload } from "../audio/sound-download";
import { messagesOf, type Locale } from "../i18n/locale";
import { openPart } from "../pwa/part-loader";
import type { KeyRange } from "../render/key-layout";
import type { SettingsStore } from "../settings/store";
import { loading } from "../ui/components/loading";
import { section } from "../ui/components/section";
import { el } from "../ui/dom";
import { icon, type IconName } from "../ui/icons/icons";
import { touchSound } from "./touch-sound";

/** The small piano's keys, from C4 to E5. */
const DEVICES_RANGE: KeyRange = { first: 60, last: 76 };

/** The pictures' size in pixels, the view's own shape for `DEVICES_RANGE`, which `tools/landing-pictures.ts` makes them at. */
const PICTURE = { width: 1200, height: 858 };

/** Each way's icon, in the order of the catalog's ways. */
const WAY_ICONS: readonly IconName[] = ["keyboard-music", "pointer", "keyboard"];

/** The band of what you play on in `locale`, whose piano plays on the audio of `settings`. */
export function devices(locale: Locale, settings: SettingsStore): HTMLElement {
  const t = messagesOf(locale).landing.devices;
  const ways = t.ways.map((way, index) =>
    el("li", {
      class: "landing-devices__way",
      children: [
        el("span", { class: "landing-tile", attrs: { "aria-hidden": "true" }, children: [icon(WAY_ICONS[index] ?? "piano")] }),
        el("div", {
          class: "landing-devices__words",
          children: [el("h3", { class: "landing-devices__title", text: way.title }), el("p", { class: "landing-devices__text", text: way.text })],
        }),
      ],
    }),
  );
  return section({
    eyebrow: t.eyebrow,
    heading: t.heading,
    lead: t.lead,
    tone: "band",
    body: [
      el("div", {
        class: "landing-devices__layout",
        children: [
          el("ul", { class: "landing-devices", children: ways }),
          el("div", {
            class: "landing-devices__piano",
            children: [smallPiano(t, settings), el("p", { class: "landing-devices__hint", children: [icon("pointer"), el("span", { text: t.hint })] })],
          }),
        ],
      }),
    ],
  });
}

/** The small piano's picture as a button, which loads the piano view in its place on a click. */
function smallPiano(t: ReturnType<typeof messagesOf>["landing"]["devices"], settings: SettingsStore): HTMLElement {
  const picture = (theme: "light" | "dark") =>
    el("img", {
      class: "landing-devices__picture",
      attrs: {
        src: `images/landing/devices-${theme}.webp`,
        alt: "",
        width: String(PICTURE.width),
        height: String(PICTURE.height),
        loading: "lazy",
        decoding: "async",
        "data-theme": theme,
      },
    });
  const cue = el("span", { class: "landing-devices__cue", attrs: { "aria-hidden": "true" }, children: [icon("pointer")] });
  const start = el("button", {
    class: "landing-devices__start",
    attrs: { type: "button", "aria-label": t.start },
    children: [picture("light"), picture("dark"), cue],
  });
  const card = loading({ place: "over" });
  const soundCard = loading({ place: "over" });
  const stage = el("div", { class: "landing-devices__stage", children: [start, card.element, soundCard.element] });
  const sound = touchSound(settings);
  let shown = false;
  const sounds = followSoundDownload(soundCard, () => shown);
  start.addEventListener("click", () => {
    if (start.getAttribute("aria-busy") === "true") return;
    start.setAttribute("aria-busy", "true");
    void openPart("player", () => import("../render/piano-keys"), card).then(({ pianoKeys }) => {
      // The page has had the click, so the browser lets the sound wake now.
      sound.start().catch(() => undefined);
      const piano = pianoKeys();
      piano.show({ label: t.piano, range: DEVICES_RANGE, names: "c", onPress: sound.press, onRelease: sound.release });
      piano.element.tabIndex = -1;
      start.replaceWith(piano.element);
      piano.element.focus({ preventScroll: true });
      shown = true;
      sounds.sync();
    });
  });
  return stage;
}
