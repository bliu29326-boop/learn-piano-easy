import { rm } from "node:fs/promises";
import { join } from "node:path";

import { LOCALES, rowOf } from "../src/i18n/locale";
import { LANDING_SONGS } from "../src/landing/songs";
import { groupOf } from "../src/pwa/cache-groups";
import { afterAll, beforeAll, expect, test } from "../src/testing";
import { allPages, lessonPages, pageOf, pageTitle, ROUTES, socialImageOf } from "../src/site/routes";
import { build, chunkLocales, chunkParts, crawlerFiles, renderPage, root, structuredData, type BuildResult } from "./build";

const outDir = join(root, ".agent-tmp", `build-test-${process.pid}`);
let result: BuildResult;

beforeAll(async () => {
  result = await build({ outDir, dev: false });
}, 60_000);

afterAll(async () => {
  await rm(outDir, { recursive: true, force: true });
});

test("build_writes_page_bundle_and_worker", async () => {
  for (const file of ["index.html", "app.js", "parse-worker.js", "sw.js", "manifest.webmanifest", "app.css"]) {
    expect(result.files).toContain(file);
  }
  const worker = await Bun.file(join(outDir, "sw.js")).text();
  expect(worker).toContain(result.version);
  expect(worker).toContain("./app.js");
  expect(worker).toContain("./parse-worker.js");
  const { app, player } = result.index.groups;
  expect(app.files).not.toContain("./app.js.map");
  const assets = (files: string[]) => files.filter((f) => f.startsWith("./songs/") || f.startsWith("./sounds/"));
  // The core holds no song or sound. The player holds the song list and the landing page's songs.
  expect(assets(app.files)).toEqual([]);
  expect(assets(player.files).sort()).toEqual(["./songs/catalog.json", ...LANDING_SONGS.map((song) => `./${song}`)].sort());
});

/** The group of the built file at `path`, as the index lists it. */
function groupOfBuilt(path: string): string | undefined {
  return Object.entries(result.index.groups).find(([, group]) => group.files.includes(`./${path}`))?.[0];
}

test("the_shell_splits_into_the_core_the_player_and_learn", async () => {
  const groups = (paths: string[]) => paths.map((path) => [path, groupOfBuilt(path)]);
  /** The chunk whose source map lists `source`. */
  const chunkHolding = async (source: string) => {
    for (const file of result.files.filter((f) => f.startsWith("chunk-") && f.endsWith(".js"))) {
      const map = (await Bun.file(join(outDir, `${file}.map`)).json()) as { sources: string[] };
      if (map.sources.some((s) => s.endsWith(source))) return file;
    }
    return undefined;
  };
  const three = await chunkHolding("node_modules/three/build/three.core.js");
  const lesson = await chunkHolding("src/learn/lessons/meet-the-piano/index.ts");
  expect(three).toBeDefined();
  expect(lesson).toBeDefined();
  const players = [three!, "parse-worker.js", "models/hand.glb"];
  expect(groups(players)).toEqual(players.map((path) => [path, "player"]));
  expect(groupOfBuilt(lesson!)).toBe("learn");
  expect(groupOfBuilt("de/learn/profile/index.html")).toBe("learn");
  // The landing page's own scripts and styles are the core, so a first visit can show it offline.
  const landing = ["app.js", "app.css", "index.html", ...(await staticScripts("app.js"))];
  expect(groups(landing)).toEqual(landing.map((path) => [path, "app"]));
  // The core is what a first visit fetches, so it stays a small part of the shell.
  const { app, player, learn } = result.index.groups;
  expect(app.bytes).toBeLessThan(4_000_000);
  expect(app.bytes).toBeLessThan(player.bytes + learn.bytes);
});

/** A bundle's metafile that `chunkParts` reads: an entry chunk and its imports, one module per chunk. */
function metafile(chunks: Record<string, { module: string; entry?: boolean; imports?: [string, "static" | "dynamic"][] }>): Bun.BuildMetafile {
  const kind = (how: "static" | "dynamic") => (how === "static" ? "import-statement" : "dynamic-import");
  const outputs = Object.fromEntries(
    Object.entries(chunks).map(([path, chunk]) => [
      `./${path}`,
      {
        bytes: 1,
        inputs: { [chunk.module]: { bytesInOutput: 1 } },
        imports: (chunk.imports ?? []).map(([to, how]) => ({ path: `./${to}`, kind: kind(how) })),
        exports: [],
        ...(chunk.entry === false ? {} : { entryPoint: chunk.module }),
      },
    ]),
  );
  const inputs = Object.fromEntries(
    Object.values(chunks).map((chunk) => [
      chunk.module,
      {
        bytes: 1,
        imports: (chunk.imports ?? []).map(([to, how]) => ({ path: `./${to}`, kind: kind(how), entryPoint: chunks[to]?.module, external: true })),
      },
    ]),
  );
  return { inputs, outputs } as unknown as Bun.BuildMetafile;
}

test("the_split_places_each_chunk_by_the_roots_that_reach_it", () => {
  const parts = chunkParts(
    metafile({
      "app.js": { module: "src/main.ts", imports: [["shared.js", "static"], ["shell.js", "dynamic"], ["lesson.js", "dynamic"], ["legal.js", "dynamic"]] },
      "shared.js": { module: "src/ui/dom.ts", entry: false },
      "shell.js": { module: "src/app/shell.ts", imports: [["three.js", "static"], ["shared.js", "static"]] },
      "three.js": { module: "node_modules/three/build/three.core.js", entry: false },
      "lesson.js": { module: "src/learn/lesson-view.ts", imports: [["three.js", "static"], ["steps.js", "static"]] },
      "steps.js": { module: "src/learn/steps/kinds.ts", entry: false },
      "legal.js": { module: "src/site/legal-view.ts", imports: [["link.js", "static"]] },
      "link.js": { module: "src/ui/link.ts", entry: false },
    }),
    "app.js",
  );
  expect(Object.fromEntries(parts)).toEqual({ "shell.js": "player", "three.js": "player", "lesson.js": "learn", "steps.js": "learn" });
});

test("the_split_fails_naming_the_import_that_carries_a_part_into_the_core", () => {
  const meta = metafile({
    "app.js": { module: "src/main.ts", imports: [["shell.js", "dynamic"], ["odd.js", "dynamic"]] },
    "shell.js": { module: "src/app/shell.ts", imports: [["three.js", "static"]] },
    "three.js": { module: "node_modules/three/build/three.core.js", entry: false },
    "odd.js": { module: "src/site/odd-view.ts", imports: [["three.js", "static"]] },
  });
  expect(() => chunkParts(meta, "app.js")).toThrow("src/main.ts loads src/site/odd-view.ts with import()");
});

/** The locale of the built file at `path`, as the index lists it, `""` for a neutral one. */
function localeOfBuilt(path: string): string | undefined {
  for (const group of Object.values(result.index.groups)) {
    const at = group.files.indexOf(`./${path}`);
    if (at >= 0) return group.locales[at];
  }
  return undefined;
}

test("each_locale_s_texts_and_pages_are_its_own_subset_and_the_code_is_neutral", async () => {
  const chunkHolding = async (source: string) => {
    for (const file of result.files.filter((f) => f.startsWith("chunk-") && f.endsWith(".js"))) {
      const map = (await Bun.file(join(outDir, `${file}.map`)).json()) as { sources: string[] };
      if (map.sources.some((s) => s.endsWith(source))) return file;
    }
    return undefined;
  };
  const catalog = await chunkHolding("src/i18n/messages/de.ts");
  const texts = await chunkHolding("src/learn/lessons/meet-the-piano/texts.de.ts");
  const world = await chunkHolding("src/learn/lessons/meet-the-piano/index.ts");
  expect([catalog, texts, world].every((chunk) => chunk !== undefined)).toBe(true);
  const placed = (path: string) => [groupOfBuilt(path), localeOfBuilt(path)];
  expect(placed(catalog!)).toEqual(["app", "de"]);
  expect(placed(texts!)).toEqual(["learn", "de"]);
  // A world's English texts load with its lessons, since every locale falls back to them.
  expect(placed(world!)).toEqual(["learn", ""]);
  expect(placed("de/learn/meet-the-piano/find-c/index.html")).toEqual(["learn", "de"]);
  expect(placed("de/play/index.html")).toEqual(["app", "de"]);
  expect(placed("app.js")).toEqual(["app", ""]);
  expect(placed("app.css")).toEqual(["app", ""]);
  // English's subset is its route pages alone.
  const english = result.index.groups.app.files.filter((_, i) => result.index.groups.app.locales[i] === "en");
  expect(english.every((file) => file.endsWith("index.html"))).toBe(true);
});

test("the_locale_split_places_each_chunk_by_the_one_locale_that_reaches_it", () => {
  const locales = chunkLocales(
    metafile({
      "app.js": { module: "src/main.ts", imports: [["de.js", "dynamic"], ["fr.js", "dynamic"], ["world.js", "dynamic"]] },
      "de.js": { module: "src/i18n/messages/de.ts", imports: [["plural.js", "static"], ["de-data.js", "static"]] },
      "fr.js": { module: "src/i18n/messages/fr.ts", imports: [["plural.js", "static"]] },
      "plural.js": { module: "src/i18n/plural.ts", entry: false },
      "de-data.js": { module: "src/i18n/messages/data.de.ts", entry: false },
      "world.js": { module: "src/learn/lessons/rhythm/index.ts", imports: [["texts-de.js", "dynamic"]] },
      "texts-de.js": { module: "src/learn/lessons/rhythm/texts.de.ts" },
    }),
    "app.js",
  );
  // A chunk two locales share is neutral.
  expect(Object.fromEntries(locales)).toEqual({ "de.js": "de", "de-data.js": "de", "fr.js": "fr", "texts-de.js": "de" });
});

test("the_locale_split_fails_when_neutral_code_imports_a_locale_s_texts_statically", () => {
  const meta = metafile({
    "app.js": { module: "src/main.ts", imports: [["de.js", "static"]] },
    "de.js": { module: "src/i18n/messages/de.ts", entry: false },
  });
  expect(() => chunkLocales(meta, "app.js")).toThrow("src/i18n/messages/de.ts of de lands in de.js");
});

test("build_writes_a_page_per_route_and_locale", async () => {
  for (const page of allPages()) {
    expect(result.files).toContain(page.file);
    const learn = page.route.id === "learn" || page.route.id === "profile";
    expect([page.file, groupOfBuilt(page.file)]).toEqual([page.file, learn ? "learn" : "app"]);
    const html = await Bun.file(join(outDir, page.file)).text();
    expect(html).toContain(`<html lang="${rowOf(page.locale).lang}" dir="${rowOf(page.locale).dir}">`);
    expect(html).toContain(`<title>${pageTitle(page)}</title>`);
    // The base climbs to the site's root, and every asset resolves from there.
    expect(html).toContain(`<base href="${page.base}" />`);
    expect(html).toContain(`src="./app.js"`);
    expect(html).not.toContain("{{");
    // A local build names no domain.
    expect(html).not.toMatch(/https?:\/\//);
  }
  const template = await Bun.file(join(root, "public/index.html")).text();
  const profile = pageOf(ROUTES.find((r) => r.id === "profile")!, "de");
  const hosted = renderPage(template, profile, "https://example.org/piano");
  expect(hosted).toContain(`<link rel="canonical" href="https://example.org/piano/de/learn/profile/" />`);
  expect(hosted).toContain(`<link rel="alternate" hreflang="en" href="https://example.org/piano/learn/profile/" />`);
  expect(hosted).toContain(`<link rel="alternate" hreflang="x-default" href="https://example.org/piano/learn/profile/" />`);
  // A social site reads only an absolute picture, of the page's own locale.
  expect(hosted).toContain(`<meta property="og:image" content="https://example.org/piano/images/social/de.png" />`);
  expect(hosted).toContain(`<meta name="twitter:card" content="summary_large_image" />`);
  expect(await Bun.file(join(outDir, socialImageOf("de"))).exists()).toBe(true);
  const gallery = renderPage(template, pageOf(ROUTES.find((r) => r.id === "design")!, "en"), "https://example.org/");
  expect(gallery).toContain(`<meta name="robots" content="noindex" />`);
  expect(gallery).not.toContain("canonical");
  // Every page names the site and its locale for social sites, a local one too.
  const local = await Bun.file(join(outDir, "de/play/index.html")).text();
  expect(local).toContain(`<meta property="og:site_name" content="Learn Piano Easy" />`);
  expect(local).toContain(`<meta property="og:locale" content="de_DE" />`);
  expect(local).toContain(`<meta property="og:locale:alternate" content="en_US" />`);
});

test("a_lesson_page_carries_the_lessons_own_title_and_description", async () => {
  const lessons = await lessonPages();
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const page of lessons) {
    const html = await Bun.file(join(outDir, page.file)).text();
    const title = /<title>(.*)<\/title>/.exec(html)![1]!;
    const description = /<meta name="description" content="([^"]*)"/.exec(html)![1]!;
    const meta = page.route.lesson!.meta![page.locale]!;
    expect(title).toBe(pageTitle(page));
    expect(title).toStartWith(meta.title);
    // A right-to-left description wraps the title in an isolate, which a reader never sees.
    const unisolated = (text: string) => text.replace(/[⁦-⁩]/g, "");
    expect(unisolated(description)).toStartWith(unisolated(meta.title));
    titles.add(`${page.locale} ${title}`);
    descriptions.add(`${page.locale} ${description}`);
  }
  // No two lessons of a locale share a title or a description, so no two look alike in a search result.
  expect(titles.size).toBe(lessons.length);
  expect(descriptions.size).toBe(lessons.length);
});

const SITE = "https://example.org/piano/";

test("the_sitemap_lists_every_indexed_page_with_its_alternates", async () => {
  const pages = [...allPages(), ...(await lessonPages())];
  const sitemap = crawlerFiles(pages, "https://example.org/piano")["sitemap.xml"]!;
  const urls = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]!);
  const indexed = pages.filter((page) => !page.route.hidden);
  expect(urls.map((url) => /<loc>(.*)<\/loc>/.exec(url)![1])).toEqual(indexed.map((page) => SITE + page.path));
  for (const [i, page] of indexed.entries()) {
    const links = [...urls[i]!.matchAll(/<xhtml:link rel="alternate" hreflang="([\w-]+)" href="([^"]+)" \/>/g)].map((m) => [m[1], m[2]]);
    expect(links).toEqual([
      ...LOCALES.map((locale) => [rowOf(locale).lang, SITE + pageOf(page.route, locale).path]),
      ["x-default", SITE + pageOf(page.route, "en").path],
    ]);
  }
  expect(sitemap).not.toContain("design/");
  expect(sitemap).toStartWith(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`);
});

test("robots_allow_every_path_and_name_the_sitemap_only_on_a_hosted_build", () => {
  const files = crawlerFiles(allPages(), "https://example.org/piano");
  expect(files["robots.txt"]).toBe(`User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
  for (const path of Object.keys(files)) {
    // A local build writes neither file, and no learner caches one.
    expect(result.files).not.toContain(path);
    expect(groupOf(path)).toBeUndefined();
  }
});

test("a_landing_page_carries_json_ld_with_its_own_url", async () => {
  const template = await Bun.file(join(root, "public/index.html")).text();
  const jsonLd = /<script type="application\/ld\+json">(.*)<\/script>/;
  for (const locale of LOCALES) {
    const home = pageOf(ROUTES[0]!, locale);
    const html = renderPage(template, home, SITE);
    const raw = jsonLd.exec(html)![1]!;
    expect(raw).not.toContain("<");
    const data = JSON.parse(raw) as { "@graph": Record<string, unknown>[] };
    expect(data["@graph"].map((node) => node["@type"])).toEqual(["WebSite", "WebApplication"]);
    for (const node of data["@graph"]) expect(node).toMatchObject({ url: SITE + home.path, inLanguage: rowOf(locale).lang });
    expect(data["@graph"][1]).toMatchObject({ applicationCategory: "EducationalApplication", isAccessibleForFree: true });
    expect(structuredData(home, SITE)).toEqual(data);
  }
  expect(renderPage(template, pageOf(ROUTES.find((r) => r.id === "play")!, "en"), SITE)).not.toContain("ld+json");
  expect(await Bun.file(join(outDir, "index.html")).text()).not.toContain("ld+json");
});

/**
 * The most the landing page may load before its pictures, in bytes over the wire. Its HTML, styles and
 * scripts count gzipped, as a server sends them, and its fonts count as they are, already compressed.
 * The pictures load lazily, so they are left out.
 */
const LANDING_BUDGET_BYTES = 200_000;

/** The scripts that `entry` imports before it runs, itself first, by their paths in the build. */
async function staticScripts(entry: string): Promise<string[]> {
  const seen = new Set<string>();
  const visit = async (file: string) => {
    if (seen.has(file)) return;
    seen.add(file);
    const code = await Bun.file(join(outDir, file)).text();
    // A static import is `from"./x.js"` or `import"./x.js"`. A dynamic `import("./x.js")` loads later.
    for (const match of code.matchAll(/(?:\bfrom|\bimport)\s*["']\.\/([\w.-]+\.js)["']/g)) await visit(match[1]!);
  };
  await visit(entry);
  return [...seen];
}

test("the_landing_page_stays_within_its_byte_budget", async () => {
  const gzipped = async (file: string) => Bun.gzipSync(new Uint8Array(await Bun.file(join(outDir, file)).arrayBuffer())).length;
  const css = await Bun.file(join(outDir, "app.css")).text();
  const fonts = [...new Set([...css.matchAll(/url\(\s*["']?\.\/(fonts\/[^"')]+)/g)].map((m) => m[1]!))];
  const scripts = await staticScripts("app.js");
  for (const page of allPages().filter((p) => p.route.id === "home")) {
    const parts: Record<string, number> = { [page.file]: await gzipped(page.file), "app.css": await gzipped("app.css") };
    for (const script of scripts) parts[script] = await gzipped(script);
    for (const font of fonts) parts[font] = Bun.file(join(outDir, font)).size;
    const total = Object.values(parts).reduce((sum, bytes) => sum + bytes, 0);
    expect({ page: page.file, total, within: total <= LANDING_BUDGET_BYTES, parts }).toMatchObject({ within: true });
  }
});

/**
 * The most a click on a landing piano may add to the landing page's scripts, gzipped. It holds the
 * embed's chunk and every script it imports that the landing page has not loaded already. three.js is
 * one shared chunk, so it carries the classes the lesson hand's glTF loader needs too, about 6 kB.
 */
const LANDING_PLAYER_BUDGET_BYTES = 210_000;

/** The script in `entry`'s graph, static or dynamic, whose source map holds `source` alone. */
async function chunkOf(entry: string, source: string): Promise<string | undefined> {
  const seen = new Set<string>();
  const queue = [entry];
  for (let file = queue.shift(); file !== undefined; file = queue.shift()) {
    if (seen.has(file)) continue;
    seen.add(file);
    const map = (await Bun.file(join(outDir, `${file}.map`)).json()) as { sources: string[] };
    if (map.sources.length === 1 && map.sources[0]!.endsWith(source)) return file;
    const code = await Bun.file(join(outDir, file)).text();
    for (const match of code.matchAll(/(?:\bfrom|\bimport)\s*\(?\s*["']\.\/([\w.-]+\.js)["']/g)) queue.push(match[1]!);
  }
  return undefined;
}

test("the_landing_player_stays_within_its_byte_budget", async () => {
  const embed = await chunkOf("app.js", "src/app/embed.ts");
  expect(embed).toBeDefined();
  const loaded = new Set(await staticScripts("app.js"));
  const parts: Record<string, number> = {};
  for (const script of await staticScripts(embed!)) {
    if (loaded.has(script)) continue;
    parts[script] = Bun.gzipSync(new Uint8Array(await Bun.file(join(outDir, script)).arrayBuffer())).length;
  }
  const total = Object.values(parts).reduce((sum, bytes) => sum + bytes, 0);
  expect({ total, within: total <= LANDING_PLAYER_BUDGET_BYTES, parts }).toMatchObject({ within: true });
});

test("build_uses_only_relative_urls", async () => {
  const rootAbsolute = /(?:src|href)\s*=\s*["']\/(?!\/)|url\(\s*["']?\/(?!\/)/;
  // The pages are read side by side, since one by one they outlast the timeout on a busy machine.
  const files = result.files.filter((f) => /\.(html|css)$/.test(f));
  const texts = await Promise.all(files.map((file) => Bun.file(join(outDir, file)).text()));
  files.forEach((file, i) => {
    expect({ file, rootAbsolute: rootAbsolute.test(texts[i]!) }).toEqual({ file, rootAbsolute: false });
  });
  const manifest = (await Bun.file(join(outDir, "manifest.webmanifest")).json()) as Record<string, unknown>;
  for (const key of ["id", "start_url", "scope"]) expect(String(manifest[key])).toStartWith("./");
  const icons = manifest.icons as { src: string }[];
  for (const icon of icons) expect(icon.src).toStartWith("./");
});
