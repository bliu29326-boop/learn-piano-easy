/**
 * The offline cache manager: a dialog that shows each cache group's size and how much of it is offline,
 * and caches or clears it. It also fetches the chosen groups again after an update.
 *
 * - The page reads `cache-groups.json`, which the core holds, so the sizes show without a network call.
 * - The page writes the caches itself, through the Cache API, under the names `cache-groups.ts` gives.
 *   It fetches with cache mode `reload`, which the service worker passes to the network. A cached file
 *   stays until its fresh copy arrives, so a failed fetch never leaves a group emptier than before.
 * - The core group is precached by every install, so it has no setting.
 * - A part of the shell is saved through `ensureParts` of `parts.ts`, which marks it, so every install
 *   keeps it. Saving a part saves the parts it needs too. Removing a part drops its mark and its files,
 *   and those of every part that needs it, so Learn Piano goes with the player. Each section touched
 *   shows its new status. A part has no setting, since its mark keeps it.
 * - A save shows its bytes in a Loading card of `src/ui/components/loading.ts`, under the status.
 * - `autoCacheSongs` and `autoCacheSounds` keep their group offline: turning one on caches the group.
 * - The last version the page started is kept in `localStorage`. A start on a new version is an update.
 *   An update fetches again only the cached files whose bytes no longer hash to the index's hash, and a
 *   kept group's missing files. Saving a group in the dialog does the same.
 * - Its texts, the groups' labels and descriptions too, come from the live catalog's `player.shell.cache`
 *   when the dialog opens or a toast is said. The core group's texts are its `site` entry.
 *
 * Decisions, and what each costs:
 * - Six fetches run at once. More would hurry a fast link and starve a slow one.
 * - The status counts cached files by URL, with one `keys()` call per group, which stays quick for the
 *   largest group.
 */
import { liveLocale, t } from "../i18n/live";
import type { SettingsStore } from "../settings/store";
import { loading } from "../ui/components/loading";
import { button, el } from "../ui/dom";
import { toggleControl } from "../ui/controls";
import { cacheNameOf, GROUP_IDS, loadGroupIndex, PARTS, withNeeds, type GroupId, type GroupIndex, type PartId } from "./cache-groups";
import { inParallel, isCurrent } from "./current";
import { showProgress } from "./download-progress";
import { ensureParts, unmarkPart } from "./parts";
import "../settings/panel.css";
import "./cache-manager.css";

/** The key under which the last started version is kept. */
const VERSION_KEY = "learn-piano-easy.cache-version";

/** How many files are fetched at once. */
const PARALLEL = 6;

/** The setting that keeps each on-demand group offline. */
const AUTO_CACHE = { songs: "autoCacheSongs", sounds: "autoCacheSounds" } as const;

/** `bytes` as a size a learner reads in the live locale, such as `6.6 MB`. */
export function formatBytes(bytes: number): string {
  const say = t().player.shell.cache;
  if (bytes < 1024) return say.bytes(bytes);
  if (bytes < 1024 * 1024) return say.kilobytes(bytes / 1024);
  return say.megabytes(bytes / 1024 / 1024);
}

/** Whether this page can reach the Cache API. A page served over plain HTTP from another host cannot. */
function cachesAvailable(): boolean {
  return typeof caches !== "undefined";
}

/** Whether a group is a part of the shell. */
function isPart(id: GroupId): id is PartId {
  return (PARTS as readonly GroupId[]).includes(id);
}

/** A group's label and description in the live locale. The core group's are the catalog's `site`. */
function textsOf(id: GroupId): { label: string; description: string } {
  return t().player.shell.cache.groups[id === "app" ? "site" : id];
}

function absolute(file: string): string {
  return new URL(file, document.baseURI).href;
}

/** How many of a group's files are cached. */
export async function cachedCount(index: GroupIndex, group: GroupId): Promise<number> {
  const cache = await caches.open(cacheNameOf(group, index.version));
  const held = new Set((await cache.keys()).map((request) => request.url));
  return index.groups[group].files.filter((file) => held.has(absolute(file))).length;
}

/** How far a fill has come: the files done and in total, and their bytes done and in total. */
type Progress = (done: number, total: number, bytes: number, totalBytes: number) => void;

/**
 * Which of a group's files a fill fetches: `missing` those not cached, and `changed` those cached whose
 * bytes no longer hash to the index's hash. A file cached with current bytes is never fetched.
 */
export interface Fetching {
  missing: boolean;
  changed: boolean;
}

/** The run filling each group, so a second request joins it rather than fetching every file twice. */
const running = new Map<GroupId, { done: Promise<number>; listeners: Set<Progress> }>();

/**
 * Fetches the files `fetching` names of a group from the network into its cache, and returns how many
 * failed. `progress` hears the count done after each file. A call while the group is filling joins
 * that run, whatever its `fetching`.
 */
export function cacheGroup(index: GroupIndex, group: GroupId, fetching: Fetching, progress?: Progress): Promise<number> {
  let run = running.get(group);
  if (run === undefined) {
    const listeners = new Set<Progress>();
    const done = fill(index, group, fetching, (...progress) => listeners.forEach((l) => l(...progress)));
    run = { done, listeners };
    running.set(group, run);
    void done.finally(() => running.delete(group));
  }
  if (progress !== undefined) run.listeners.add(progress);
  return run.done;
}

async function fill(index: GroupIndex, group: GroupId, fetching: Fetching, progress: Progress): Promise<number> {
  const cache = await caches.open(cacheNameOf(group, index.version));
  const held = new Set((await cache.keys()).map((request) => request.url));
  const { files, hashes, sizes } = index.groups[group];
  const entries = files.map((file, i) => ({ url: absolute(file), hash: hashes[i] ?? "", size: sizes[i] ?? 0 }));
  const wanted: typeof entries = [];
  await inParallel(entries, PARALLEL, async (entry) => {
    if (!held.has(entry.url)) {
      if (fetching.missing) wanted.push(entry);
      return;
    }
    if (!fetching.changed) return;
    const hit = await cache.match(entry.url);
    if (hit === undefined || !(await isCurrent(hit, entry.hash))) wanted.push(entry);
  });
  const totalBytes = wanted.reduce((sum, entry) => sum + entry.size, 0);
  let done = 0;
  let bytes = 0;
  let failed = 0;
  await inParallel(wanted, PARALLEL, async ({ url, size }) => {
    try {
      const response = await fetch(url, { cache: "reload" });
      if (response.ok) await cache.put(url, response);
      else failed++;
    } catch {
      failed++;
    }
    bytes += size;
    progress(++done, wanted.length, bytes, totalBytes);
  });
  return failed;
}

/** Removes a group's files from its cache. */
export async function clearGroup(index: GroupIndex, group: GroupId): Promise<void> {
  const cache = await caches.open(cacheNameOf(group, index.version));
  await Promise.all(index.groups[group].files.map((file) => cache.delete(absolute(file))));
}

/** The labels of `ids` in the live locale, joined for a sentence, such as `Songs and Piano sounds`. */
function labelsOf(ids: readonly GroupId[]): string {
  const labels = ids.map((id) => textsOf(id).label);
  return new Intl.ListFormat(liveLocale(), { type: "conjunction" }).format(labels);
}

/**
 * Keeps the chosen groups offline. At start, a new version fetches each chosen group again and says so
 * in `notify`. Turning a group's setting on caches what is missing of it.
 */
export async function keepGroupsOffline(settings: SettingsStore, notify: (message: string) => void): Promise<void> {
  if (!cachesAvailable() || typeof localStorage === "undefined") return;
  const index = await loadGroupIndex();
  if (index === undefined) return;

  settings.subscribe((id, value) => {
    const group = (Object.keys(AUTO_CACHE) as (keyof typeof AUTO_CACHE)[]).find((g) => AUTO_CACHE[g] === id);
    if (group === undefined || value !== true) return;
    void cacheGroup(index, group, { missing: true, changed: false }).then((failed) => {
      if (failed > 0) notify(t().player.shell.cache.groupsFailed(failed, labelsOf([group])));
    });
  });

  const last = localStorage.getItem(VERSION_KEY);
  localStorage.setItem(VERSION_KEY, index.version);
  const update = last !== null && last !== index.version;
  const groups = Object.keys(AUTO_CACHE) as (keyof typeof AUTO_CACHE)[];
  const kept = groups.filter((g) => settings.get(AUTO_CACHE[g]));
  // A start fills what a kept group misses. An update also fetches every cached file that changed, in
  // every group, so a song played once never stays at its old version.
  const run = update ? groups : kept;
  if (run.length === 0) return;
  const failures = await Promise.all(run.map((group) => cacheGroup(index, group, { missing: kept.includes(group), changed: update })));
  const failed = run.filter((_, i) => (failures[i] ?? 0) > 0);
  const count = failures.reduce((sum, n) => sum + n, 0);
  if (count > 0) notify(t().player.shell.cache.groupsFailed(count, labelsOf(failed)));
  else if (update && kept.length > 0) notify(t().player.shell.cache.updated(labelsOf(kept)));
}

/** The dialog's body: one section per group, with its size, its state and its buttons. */
export function createCacheManager(settings: SettingsStore): HTMLElement {
  const say = t().player.shell.cache;
  const body = el("div", { class: "cache-manager" });
  if (!cachesAvailable()) {
    body.append(el("p", { text: say.unavailable }));
    return body;
  }
  body.append(el("p", { text: say.reading }));
  void loadGroupIndex().then((index) => {
    if (index === undefined) {
      body.replaceChildren(el("p", { text: say.unreadable }));
      return;
    }
    // Each section's status, by its group, so a change to one part shows in the parts it touches.
    const shows = new Map<GroupId, () => Promise<void>>();
    body.replaceChildren(el("p", { text: say.intro }), ...GROUP_IDS.map((id) => groupSection(settings, index, id, shows)));
  });
  return body;
}

/** The parts that need `part`, which go when it goes. */
function dependentsOf(part: PartId): PartId[] {
  return PARTS.filter((other) => other !== part && withNeeds([other]).includes(part));
}

function groupSection(settings: SettingsStore, index: GroupIndex, id: GroupId, shows: Map<GroupId, () => Promise<void>>): HTMLElement {
  const say = t().player.shell.cache;
  const { label, description } = textsOf(id);
  const { files, bytes } = index.groups[id];
  const status = el("p", { class: "cache-status", attrs: { role: "status" } });
  const card = loading({ place: "inline", locale: liveLocale() });
  let busy = false;

  const show = async () => {
    const count = await cachedCount(index, id);
    const state = count === files.length ? say.allSaved : count === 0 ? say.noneSaved : say.someSaved(count, files.length);
    status.textContent = say.status(formatBytes(bytes), files.length, state);
    save.textContent = count === files.length ? say.saveAgain : say.save;
  };
  shows.set(id, show);
  /** Shows again the status of each group of `ids`, this one's too. */
  const showAll = (ids: readonly GroupId[]) => Promise.all(ids.map((other) => shows.get(other)?.()));

  const work = async (task: () => Promise<string | undefined>, touched: readonly GroupId[] = [id]) => {
    if (busy) return;
    busy = true;
    save.disabled = remove.disabled = true;
    try {
      const message = await task();
      card.clear();
      await showAll(touched);
      if (message !== undefined) status.textContent += ` ${message}`;
    } finally {
      busy = false;
      save.disabled = remove.disabled = false;
    }
  };

  const saving = say.savingGroup(label);
  const fillAndShow = (fetching: Fetching) =>
    void work(async () => {
      const failed = await cacheGroup(index, id, fetching, (done, total, bytesDone, totalBytes) => {
        status.textContent = say.saving(done, total);
        showProgress(card, saving, { bytes: bytesDone, totalBytes });
      });
      return failed > 0 ? say.failed(failed) : undefined;
    });
  // A part fills whole with the parts it needs and marks each, and a file in a version's shell cache is
  // current already.
  const savePart = (part: PartId) =>
    void work(async () => {
      const result = await ensureParts([part], (progress) => {
        status.textContent = say.saving(progress.files, progress.totalFiles);
        showProgress(card, saving, progress);
      });
      return result === "offline" ? say.partOffline : result === "stale" ? say.partStale : undefined;
    }, withNeeds([part]));
  // A part goes with every part that needs it, since none of those opens without it.
  const removePart = (part: PartId) => {
    const gone = [part, ...dependentsOf(part)];
    void work(async () => {
      for (const other of gone) {
        await unmarkPart(other);
        await clearGroup(index, other);
      }
      return undefined;
    }, gone);
  };
  const save = button(say.save, () => (isPart(id) ? savePart(id) : fillAndShow({ missing: true, changed: true })));
  const remove = button(say.remove, () =>
    isPart(id)
      ? removePart(id)
      : void work(async () => {
          await clearGroup(index, id);
          return undefined;
        }),
  );
  save.setAttribute("aria-label", say.saveGroup(label));
  remove.setAttribute("aria-label", say.removeGroup(label));

  const children: HTMLElement[] = [
    el("h3", { text: label }),
    el("p", { text: description }),
    status,
    card.element,
    el("div", { class: "cache-buttons", children: [save, remove] }),
  ];
  if (id === "songs" || id === "sounds") {
    const setting = AUTO_CACHE[id];
    // Turning the setting on starts a fill in `keepGroupsOffline`. Saving here joins it, to show progress.
    const keep = toggleControl(say.keep, settings.get(setting), (value) => {
      keep.set(settings.set(setting, value));
      if (value) fillAndShow({ missing: true, changed: false });
    });
    children.push(
      el("label", {
        class: "setting-row",
        children: [el("span", { class: "setting-label", text: say.keep }), keep.element],
      }),
    );
  }
  void show();
  return el("section", { class: "cache-group", children });
}
