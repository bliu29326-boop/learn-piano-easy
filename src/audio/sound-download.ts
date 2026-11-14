/**
 * The sound set's download: how far it has come, and the card of each host that waits for it.
 *
 * The engine of `engine.ts` loads the sound set on its first `resume`, and the first notes stay silent
 * until it is in. It reports the bytes here, and each host shows them in its own Loading card.
 *
 * - **Where the card shows:** it floats `over` the view of each host that waits for the first sound,
 *   centred, and lets every click through. The hosts are the play page's stage, a landing box's
 *   player, the devices band's piano and a lesson. The view is up by then, so the card never covers it.
 * - **When:** while the set downloads and the host is active, as its own `active` says. A host that
 *   shows or hides calls `sync`.
 * - **A set the content cache holds shows no card.** The service worker answers it from the cache.
 * - **The total** is the set's bytes in `cache-groups.json`, or the response's `Content-Length` when the
 *   index does not list it.
 */
import { t } from "../i18n/live";
import { CONTENT_CACHE, loadGroupIndex } from "../pwa/cache-groups";
import { showProgress } from "../pwa/download-progress";
import type { Loading } from "../ui/components/loading";
import { signal } from "../ui/signal";

/** How far the sound set's download has come. */
export interface SoundDownload {
  bytes: number;
  /** The bytes of the whole set, or 0 while unknown. */
  totalBytes: number;
}

/** The sound set's download while it runs, and `undefined` otherwise. */
export const soundDownload = signal<SoundDownload | undefined>(undefined);

/** Reports the download of one sound set. */
export interface SoundReporter {
  /** `bytes` have arrived, of `declared` by the response when it says. */
  progress(bytes: number, declared: number | undefined): void;
  /** The download has ended, however it ended. */
  done(): void;
}

/** Whether the content cache holds `url`. A page without the Cache API holds nothing. */
async function cached(url: string): Promise<boolean> {
  try {
    return typeof caches !== "undefined" && (await (await caches.open(CONTENT_CACHE)).match(url)) !== undefined;
  } catch {
    return false;
  }
}

/**
 * A reporter for the sound set at `path`, relative to the site's root, or `undefined` when it is cached
 * or no page holds it.
 */
export async function soundReporter(path: string): Promise<SoundReporter | undefined> {
  if (typeof document === "undefined" || (await cached(new URL(path, document.baseURI).href))) return undefined;
  const sounds = (await loadGroupIndex())?.groups.sounds;
  const at = sounds?.files.indexOf(`./${path}`) ?? -1;
  const size = at >= 0 ? sounds?.sizes[at] : undefined;
  return {
    progress: (bytes, declared) => soundDownload.set({ bytes, totalBytes: size ?? declared ?? 0 }),
    done: () => soundDownload.set(undefined),
  };
}

/** Shows the sound set's download in `card` while `active()` holds, as the head comment says. */
export function followSoundDownload(card: Loading, active: () => boolean): { sync(): void } {
  let showing = false;
  const sync = () => {
    const download = soundDownload.get();
    if (download !== undefined && active()) {
      showing = true;
      showProgress(card, t().player.shell.download.sounds, download);
    } else if (showing) {
      showing = false;
      card.clear();
    }
  };
  soundDownload.subscribe(sync);
  return { sync };
}
