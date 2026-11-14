/**
 * Applying an update of the service worker: by the learner's accepting the offer of `register.ts`, or by
 * `updateToNewest`, for a page whose version the server no longer has.
 *
 * - `applyUpdate` marks the update accepted and asks the waiting worker to take over. The change of
 *   controller then reloads the page, as `register.ts` listens.
 * - `updateToNewest` asks the server for the newest worker and waits for its install. It tells the caller
 *   the files and bytes the install posts, then applies the update. While it runs, `register.ts` offers
 *   no reload of its own.
 *
 * It holds no reference to the cache manager or the site, so `part-loader.ts` and the course's tests
 * load it alone.
 */
import { INSTALL_PROGRESS, type InstallProgress } from "./cache-groups";

/** Whether an update was accepted, so the change of controller reloads the page. */
let accepted = false;
/** Whether `updateToNewest` runs. */
let running = false;

/** Whether an update was accepted, so the change of controller reloads the page. */
export function updateAccepted(): boolean {
  return accepted;
}

/** Whether `updateToNewest` runs, so the page offers no reload of its own. */
export function updateRunning(): boolean {
  return running;
}

/** Accepts the update `worker` brings: it takes over, and the page then reloads into its version. */
export function applyUpdate(worker: ServiceWorker): void {
  accepted = true;
  worker.postMessage("skip-waiting");
}

/** Resolves once `worker` has installed, `true`, or has failed its install, `false`. */
function installed(worker: ServiceWorker): Promise<boolean> {
  return new Promise((resolve) => {
    const check = () => {
      if (worker.state === "redundant") resolve(false);
      else if (worker.state !== "installing") resolve(true);
      else return;
      worker.removeEventListener("statechange", check);
    };
    worker.addEventListener("statechange", check);
    check();
  });
}

/**
 * Updates the page to the server's newest version. On success the page reloads, and the promise never
 * resolves. It resolves `offline` when the server could not be reached or the install failed, and `none`
 * when the server has no newer version.
 */
export async function updateToNewest(onProgress: (progress: InstallProgress) => void): Promise<"offline" | "none"> {
  const container = navigator.serviceWorker as ServiceWorkerContainer | undefined;
  const registration = await container?.getRegistration();
  if (container === undefined || registration === undefined) return "none";
  const listen = (event: MessageEvent) => {
    const data = event.data as InstallProgress | undefined;
    if (data?.type === INSTALL_PROGRESS) onProgress(data);
  };
  container.addEventListener("message", listen);
  container.startMessages();
  running = true;
  try {
    try {
      await registration.update();
    } catch {
      return "offline";
    }
    const worker = registration.installing ?? registration.waiting;
    if (worker === null) return "none";
    if (!(await installed(worker))) return "offline";
    applyUpdate(worker);
    return await new Promise<never>(() => undefined);
  } finally {
    running = false;
    container.removeEventListener("message", listen);
  }
}
