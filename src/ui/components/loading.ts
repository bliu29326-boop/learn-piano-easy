/**
 * Loading: a big download the learner waits on, as a card with a progress bar, or with a message and a
 * button to try again.
 *
 * It follows the button's template. It holds no text of its own: its host passes each text in, already
 * in the live locale. Its state and its place sit in `data-` attributes, which its stylesheet reads.
 *
 * - **Progress:** a bar of the Progress component, labelled with what loads, such as "Loading Just Play
 *   Piano", and a line of how much has arrived, such as "1.2 of 1.5 MB". A new label makes a new bar.
 * - **Message:** a sentence and one button, such as a note that the download needs the internet and a
 *   button that tries again. The sentence is a `status`, so a screen reader says it.
 * - **Idle:** hidden, and it takes no room.
 *
 * Where it shows is its host's call, through its place, by one rule. A download of code covers the
 * place its view will fill, so nothing shifts when the view arrives. The sound set downloads once the
 * view is up, so its card floats over that view and lets every click through.
 * - `cover` lies over its positioned host, on the page's ground.
 * - `fill` stands in the flow and takes the height its parent keeps for the view.
 * - `over` floats its card over its positioned host, with no ground of its own.
 * - `inline` stands in the flow at its content's size, as in a dialog.
 */
import "./loading.css";
import { el } from "../dom";
import { button } from "./button";
import { progressBar } from "./progress";
import { signal } from "../signal";

/** Where a loading card stands, as the head comment says. */
export type LoadingPlace = "cover" | "fill" | "over" | "inline";

export interface LoadingOptions {
  place: LoadingPlace;
  /** The locale that formats the percentage, the page's own when absent. */
  locale?: string;
}

/** What the bar shows: what loads, how much has arrived as text, and how far as a fraction. */
export interface LoadingProgress {
  label: string;
  amount: string;
  value: number;
}

/** A loading card, which its host shows, changes and hides. */
export interface Loading {
  element: HTMLElement;
  /** Shows the bar at `progress`. */
  progress(progress: LoadingProgress): void;
  /** Shows `text` and a button labelled `action.label` that calls `action.run`. */
  message(text: string, action: { label: string; run(): void }): void;
  /** Hides the card. */
  clear(): void;
}

/** A loading card in `place`, hidden until its host shows it. */
export function loading(options: LoadingOptions): Loading {
  const card = el("div", { class: "loading__card" });
  const element = el("div", {
    class: "loading",
    attrs: { "data-place": options.place, "data-state": "idle", hidden: "" },
    children: [card],
  });
  let bar: { label: string; value: ReturnType<typeof signal<number>>; amount: HTMLElement } | undefined;

  const show = (state: "progress" | "message") => {
    element.dataset.state = state;
    element.hidden = false;
  };

  return {
    element,
    progress({ label, amount, value }) {
      if (bar === undefined || bar.label !== label || element.dataset.state !== "progress") {
        const fraction = signal(value);
        const line = el("p", { class: "loading__amount", text: amount });
        card.replaceChildren(progressBar({ label, value: fraction, ...(options.locale === undefined ? {} : { locale: options.locale }) }), line);
        bar = { label, value: fraction, amount: line };
      }
      bar.value.set(value);
      bar.amount.textContent = amount;
      show("progress");
    },
    message(text, action) {
      bar = undefined;
      card.replaceChildren(
        el("p", { class: "loading__message", attrs: { role: "status" }, text }),
        button({ label: action.label, icon: "rotate-ccw", variant: "primary", onClick: action.run }),
      );
      show("message");
    },
    clear() {
      bar = undefined;
      card.replaceChildren();
      element.dataset.state = "idle";
      element.hidden = true;
    },
  };
}
