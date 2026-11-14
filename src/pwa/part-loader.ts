/**
 * The one way into a part's code: `openPart` makes the part available offline, then imports a root of it.
 * `openLocale` is the same way into a locale: it makes the locale available offline, then loads it.
 *
 * Every `import()` of a root in `PART_ROOTS` is written as `openPart("<part>", () => import("<root>"))`,
 * and `part-loader.test.ts` fails on any other. The build's guard in `tools/build.ts` catches a part's
 * code that reaches the core without a root. This one catches a root imported without its loader.
 *
 * - **It ensures, then imports.** `ensureParts` of `parts.ts` fills the part and every part it needs,
 *   in its `view` scope, and `ensureLocale` fills the locale's subsets. The import then loads from the
 *   cache, or from the network in a development build. Once the view is open, a quiet second call fills
 *   the route pages, its `all` scope. Learn Piano's pages are most of its bytes, and the learner never
 *   waits for them.
 * - **Its host shows the download** in a Loading card of `src/ui/components/loading.ts`. The bar names
 *   the part asked for, or the locale in its own language, and counts the bytes of everything it
 *   fetches. What the cache holds shows none.
 * - **Offline, the card says the part or the locale needs the internet the first time,** with a button
 *   that tries the whole load again. A failed import says the same.
 * - **A stale page updates itself.** The server runs a newer version, so the part's files of this one
 *   are gone. The card shows the newest version's install through `updateToNewest` of `update.ts`, and
 *   the page reloads into it. The mark is written already, so that install fills the part or the locale
 *   too.
 *   When the server has no newer version, the card says the part could not load, with the same button.
 * - **A call without a host** loads quietly and rejects where a host would show a message. It never
 *   updates the page, which only a host the learner looks at may do.
 *
 * The promise resolves once the root is in. With a host it never rejects: a failure waits on the button.
 */
import { t } from "../i18n/live";
import { rowOf, type Locale } from "../i18n/locale-table";
import type { Loading } from "../ui/components/loading";
import type { InstallProgress, PartId } from "./cache-groups";
import { showProgress } from "./download-progress";
import { ensureLocale, ensureParts, type PartsProgress, type PartsResult, type PartsScope } from "./parts";
import { updateToNewest } from "./update";

/** The steps a load takes, which a test replaces. */
export interface PartSteps {
  ensure(ids: readonly PartId[], onProgress: (progress: PartsProgress) => void, scope: PartsScope): Promise<PartsResult>;
  ensureLocale(locale: Locale, onProgress: (progress: PartsProgress) => void, scope: PartsScope): Promise<PartsResult>;
  update(onProgress: (progress: InstallProgress) => void): Promise<"offline" | "none">;
}

/** The page's own steps. */
const PAGE_STEPS: PartSteps = { ensure: ensureParts, ensureLocale, update: updateToNewest };

/** The texts of a download, in the live locale. */
function say() {
  return t().player.shell.download;
}

/** Makes `part` available offline, then runs `load`, showing the download in `shown`, as the head comment says. */
export function openPart<T>(part: PartId, load: () => Promise<T>, shown?: Loading, steps: PartSteps = PAGE_STEPS): Promise<T> {
  const label = () => t().player.shell.cache.groups[part].label;
  return open(`The ${part} part`, label, (onProgress, scope) => steps.ensure([part], onProgress, scope), load, shown, steps);
}

/**
 * Makes `locale` available offline, then runs `load`, such as the load of its catalog, showing the
 * download in `shown`, as the head comment says. The bar names the locale in its own language.
 */
export function openLocale<T>(locale: Locale, load: () => Promise<T>, shown?: Loading, steps: PartSteps = PAGE_STEPS): Promise<T> {
  const label = () => rowOf(locale).endonym;
  return open(`The ${locale} locale`, label, (onProgress, scope) => steps.ensureLocale(locale, onProgress, scope), load, shown, steps);
}

/** The load `openPart` and `openLocale` share, of what `ensure` fills and `label` names. */
function open<T>(
  what: string,
  label: () => string,
  ensure: (onProgress: (progress: PartsProgress) => void, scope: PartsScope) => Promise<PartsResult>,
  load: () => Promise<T>,
  shown: Loading | undefined,
  steps: PartSteps,
): Promise<T> {
  const attempt = async (): Promise<T> => {
    const result = await ensure((progress) => showProgress(shown, say().loading(label()), progress), "view");
    let failure: "offline" | "failed";
    if (result === "ready" || result === "cached") {
      try {
        const module = await load();
        shown?.clear();
        // The route pages fill once the view is open, and a failure waits for the next open.
        if (shown !== undefined) void ensure(() => undefined, "all");
        return module;
      } catch {
        failure = "offline";
      }
    } else if (result === "stale" && shown !== undefined) {
      showProgress(shown, say().newest, { bytes: 0, totalBytes: 0 });
      failure = (await steps.update((progress) => showProgress(shown, say().newest, progress))) === "offline" ? "offline" : "failed";
    } else {
      failure = result === "offline" ? "offline" : "failed";
    }
    if (shown === undefined) throw new Error(`${what} could not load: ${failure}.`);
    return new Promise<T>((resolve) => {
      shown.message(failure === "offline" ? say().offline(label()) : say().failed(label()), {
        label: say().retry,
        run: () => {
          shown.clear();
          void attempt().then(resolve);
        },
      });
    });
  };
  return attempt();
}
