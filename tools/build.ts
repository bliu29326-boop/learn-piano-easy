/**
 * The build: turns `src/` and `public/` into the static app in `dist/`.
 *
 * It bundles the site of `src/main.ts` through `bundlePage` into `app.js` and `app.css`, whose
 * stylesheet joins the CSS its script imports. It bundles the MIDI parse worker into `parse-worker.js`,
 * copies `public/` as it is, and copies every license text into `licenses/`.
 *
 * It then writes one page for every route in every locale of `src/site/routes.ts`, each from the
 * template `public/index.html` through `renderPage`. Every page boots the same bundle. Its `<base>` is
 * the path back to the site's root, so its own links stay `./`. Last, it writes the index of the cache
 * groups, and bundles the service worker `src/pwa/sw.ts` into `sw.js` with each shell group's files and
 * the version written in.
 *
 * `src/pwa/cache-groups.ts` owns which file joins which group and which locale. The shell is the core
 * and its two parts, the player and learn. The bundle's chunks join them by the bundler's graph of the
 * site, in `chunkParts`, and a locale's subset in `chunkLocales`. Every other file joins by its path. The
 * worker precaches the core, and each part once the page has marked it, each in the marked locales.
 * Every grouped file gets a content hash, and the version hashes each one's path and
 * hash. The version names the worker's cache, so a change to any grouped file makes the next visit
 * install a new shell. That install fetches only the files whose hash changed. The index,
 * `cache-groups.json`, lists the hashes and the locales. It joins the core but not the version, because
 * it holds the version. Its byte counts leave out the index itself.
 *
 * Every page names the site, its locale and the other locales for social sites. A hidden route's page
 * asks search engines not to index it.
 *
 * `bun tools/build.ts [--dev] [--out <dir>] [--site-url <url>] [--pseudo]`. `--dev` skips minifying and
 * turns on live reload. `--pseudo` also writes every page in the pseudo-locales `en-XA` and
 * `ar-XB` of `src/i18n/pseudo.ts`, under `en-XA/` and `ar-XB/`. No sitemap, link or `hreflang` names those pages, and the release
 * build never writes them. `--site-url` names where the site is hosted. Only then does an indexed page carry
 * canonical, `hreflang`, `og:url` and `og:image` links, and a landing page its JSON-LD. A social site
 * reads only an absolute `og:image`, so a local build carries none.
 *
 * Only a build with `--site-url` writes `sitemap.xml` and `robots.txt`, because a sitemap lists absolute
 * URLs. A local build then names no domain, and a crawler that finds no `robots.txt` may read every
 * page, as the hosted one allows. Neither file joins a cache group, since no learner fetches them.
 * The sitemap carries no `lastmod`, because nothing in the build dates a page without the clock.
 */
import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import {
  GROUP_INDEX,
  groupIndex,
  groupOf,
  KEPT_LOCALE,
  LOCALE_ROOTS,
  PART_ANCHORS,
  PART_ROOTS,
  PARTS,
  SHELL_GROUPS,
  type BuiltFile,
  type GroupIndex,
  type PartId,
  type ShellGroupId,
} from "../src/pwa/cache-groups";
import { contentHash } from "../src/pwa/current";
import { renderKeytrailPages } from "./keytrail-pages";
import { loadEveryLocale } from "../src/i18n/all-catalogs";
import { DEFAULT_LOCALE, isLocale, loadLocale, LOCALES, messagesOf, PSEUDO_LOCALES, rowOf, type Locale } from "../src/i18n/locale";
import {
  allPages,
  lessonPages,
  pageDescription,
  pageOf,
  pageTitle,
  REPO_URL,
  SOCIAL_IMAGE_SIZE,
  socialImageOf,
  type Page,
  type Route,
} from "../src/site/routes";

/** The repository root, from which every path of the build is resolved. */
export const root = resolve(import.meta.dir, "..");

export interface BuildOptions {
  /** The folder the app is written to. It is emptied first. */
  outDir: string;
  /** A development build: not minified, with live reload. */
  dev: boolean;
  /** Where the site is hosted, such as `https://example.org/piano/`. Without it, no page names a domain. */
  siteUrl?: string | undefined;
  /** Whether it also writes the pages of the pseudo-locales. The release build never does. */
  pseudo?: boolean;
}

export interface BuildResult {
  /** Every file written, relative to `outDir`, with `/` separators. */
  files: string[];
  /** The index of the cache groups, as `cache-groups.json` holds it. */
  index: GroupIndex;
  /** The hash of every grouped file's path and content hash, which names the worker's cache. */
  version: string;
}

/** Every file under `dir`, relative to it, with `/` separators. */
export async function listFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { recursive: true, withFileTypes: true });
  return entries
    .filter((e) => e.isFile())
    .map((e) => relative(dir, join(e.parentPath, e.name)).split(sep).join("/"))
    .sort();
}

/** Throws with every log line of a failed `Bun.build`. */
function check(result: Awaited<ReturnType<typeof Bun.build>>, what: string): void {
  if (result.success) return;
  const lines = result.logs.map((l) => String(l)).join("\n");
  throw new Error(`The ${what} bundle failed to build:\n${lines}`);
}

/**
 * The URLs a page's stylesheet leaves as they are. They point at files `public/` ships, which the
 * bundler cannot resolve from the CSS's source folder.
 */
export const PAGE_EXTERNAL = ["./fonts/*"];

/** A page's bundle: the paths it wrote, relative to `outDir`, and the bundler's graph of its files. */
export interface PageBundle {
  files: string[];
  meta: Bun.BuildMetafile;
}

/**
 * Bundles a page of the site from its entry script into `<name>.js`, with `<name>.css` beside it.
 *
 * Bun's bundler joins every CSS file the script imports into that one stylesheet, in import order, and
 * keeps the cascade layers. Code splitting is on, so each `import()` of the script becomes a
 * `chunk-<hash>.js` that loads on its first call, with a `chunk-<hash>.css` of its own styles. The player
 * is one, so a page without it loads no three.js and no audio.
 */
export async function bundlePage(entry: string, name: string, outDir: string, dev: boolean): Promise<PageBundle> {
  const result = await Bun.build({
    entrypoints: [join(root, entry)],
    outdir: outDir,
    naming: { entry: `${name}.[ext]`, chunk: "chunk-[hash].[ext]", asset: "asset-[hash].[ext]" },
    target: "browser",
    splitting: true,
    minify: !dev,
    sourcemap: "linked",
    define: { __DEV__: JSON.stringify(dev) },
    external: PAGE_EXTERNAL,
    metafile: true,
  });
  check(result, name);
  if (result.metafile === undefined) throw new Error(`The ${name} bundle wrote no metafile.`);
  return { files: result.outputs.map((o) => relative(outDir, o.path).split(sep).join("/")).sort(), meta: result.metafile };
}

/** An import from one output file of a bundle to another, by their paths relative to the output folder. */
interface ChunkEdge {
  to: string;
  dynamic: boolean;
}

/** `./chunk-a.js` as `chunk-a.js`: a metafile's output path as a path relative to the output folder. */
function outputPath(path: string): string {
  return path.replace(/^\.\//, "");
}

/** Every chunk reachable from `seeds` over `edges`, never entering a chunk `stop` holds. */
function reach(edges: ReadonlyMap<string, readonly ChunkEdge[]>, seeds: Iterable<string>, stop: (chunk: string) => boolean, parent?: Map<string, string>): Set<string> {
  const seen = new Set<string>();
  const queue = [...seeds];
  for (let chunk = queue.shift(); chunk !== undefined; chunk = queue.shift()) {
    if (seen.has(chunk) || stop(chunk)) continue;
    seen.add(chunk);
    for (const edge of edges.get(chunk) ?? []) {
      if (seen.has(edge.to) || stop(edge.to)) continue;
      if (parent !== undefined && !parent.has(edge.to)) parent.set(edge.to, chunk);
      queue.push(edge.to);
    }
  }
  return seen;
}

/**
 * The part of each chunk of the page bundle `meta` whose entry is `entry`, such as `app.js`. A chunk
 * missing from the map is core. It throws, naming the modules, when the split would leave a part's code
 * where the core loads it without a root.
 *
 * - **The core** is every chunk the entry reaches, through static and dynamic imports, without loading a
 *   root of `PART_ROOTS`. The core then loads offline whatever it runs without asking for a part.
 * - **A part** is every other chunk its roots reach. A chunk both parts reach is the player's, which
 *   learn needs. A stylesheet goes with the chunk that loads it.
 * - **The guard** fails when a core chunk imports a part's chunk statically, when an anchor of
 *   `PART_ANCHORS` lands in the core, and when the core loads with `import()` a module a part also
 *   loads, other than a root. Each says to declare a root, so no import skips the part's loader.
 */
export function chunkParts(meta: Bun.BuildMetafile, entry: string): Map<string, PartId> {
  const edges = new Map<string, ChunkEdge[]>();
  const entryOf = new Map<string, string>();
  for (const [path, output] of Object.entries(meta.outputs)) {
    const chunk = outputPath(path);
    if (chunk.endsWith(".map")) continue;
    const list = output.imports.map((i) => ({ to: outputPath(i.path), dynamic: i.kind === "dynamic-import" }));
    if (output.cssBundle !== undefined) list.push({ to: outputPath(output.cssBundle), dynamic: false });
    edges.set(chunk, list);
    if (output.entryPoint !== undefined && chunk.endsWith(".js")) entryOf.set(chunk, output.entryPoint);
  }
  const rootsOf = (part: PartId): string[] => {
    const globs = PART_ROOTS[part].map((pattern) => new Bun.Glob(pattern));
    return [...entryOf].filter(([, module]) => globs.some((glob) => glob.match(module))).map(([chunk]) => chunk);
  };
  const roots = new Map(PARTS.map((part) => [part, rootsOf(part)]));
  const rootChunks = new Set([...roots.values()].flat());
  const parent = new Map<string, string>();
  const core = reach(edges, [entry], (chunk) => rootChunks.has(chunk), parent);
  const parts = new Map<string, PartId>();
  for (const part of PARTS) {
    for (const chunk of reach(edges, roots.get(part) ?? [], (c) => core.has(c) || parts.has(c))) parts.set(chunk, part);
  }

  const problems: string[] = [];
  const moduleOf = (chunk: string) => entryOf.get(chunk) ?? Object.keys(meta.outputs[`./${chunk}`]?.inputs ?? {})[0] ?? chunk;
  /** The module of `from` that loads `to` with `import()`, and the module it loads. */
  const dynamicImport = (from: string, to: string) => {
    const inputs = Object.keys(meta.outputs[`./${from}`]?.inputs ?? {});
    for (const input of inputs) {
      const found = meta.inputs[input]?.imports.find((i) => i.kind === "dynamic-import" && outputPath(i.path) === to);
      if (found !== undefined) return `${input} loads ${found.entryPoint ?? moduleOf(to)} with import()`;
    }
    return `${moduleOf(from)} loads ${moduleOf(to)} with import()`;
  };
  for (const chunk of core) {
    for (const edge of edges.get(chunk) ?? []) {
      if (!edge.dynamic && !core.has(edge.to)) problems.push(`${moduleOf(chunk)} imports ${moduleOf(edge.to)} statically, so the core needs a part's root.`);
    }
  }
  for (const part of PARTS) {
    for (const anchor of PART_ANCHORS[part]) {
      const chunk = [...edges.keys()].find((c) => c.endsWith(".js") && meta.outputs[`./${c}`]?.inputs[anchor] !== undefined);
      if (chunk === undefined || !core.has(chunk)) continue;
      // The last `import()` on the way from the entry is the one that should load a root.
      let at = chunk;
      let through = `${entry} imports it statically`;
      for (let from = parent.get(at); from !== undefined; at = from, from = parent.get(at)) {
        if (edges.get(from)?.some((edge) => edge.to === at && edge.dynamic)) {
          through = dynamicImport(from, at);
          break;
        }
      }
      problems.push(`${anchor} of the ${part} lands in the core: ${through}.`);
    }
  }
  // What the roots reach, short of the entry's static imports, which every page loads anyway.
  const entryStatic = reach(
    new Map([...edges].map(([chunk, list]) => [chunk, list.filter((edge) => !edge.dynamic)])),
    [entry],
    () => false,
  );
  const partsReach = reach(edges, rootChunks, (chunk) => entryStatic.has(chunk));
  for (const chunk of core) {
    for (const edge of edges.get(chunk) ?? []) {
      if (edge.dynamic && !rootChunks.has(edge.to) && partsReach.has(edge.to)) problems.push(`${dynamicImport(chunk, edge.to)}, which a part loads too.`);
    }
  }
  if (problems.length > 0) {
    const fix = `Declare the module that starts a part in PART_ROOTS of src/pwa/cache-groups.ts.`;
    throw new Error(`The split of the shell into its parts fails:\n${[...new Set(problems)].join("\n")}\n${fix}`);
  }
  return parts;
}

/**
 * The locale of each chunk of the page bundle `meta` whose entry is `entry`. A chunk missing from the map
 * is language-neutral. It throws, naming the modules, when a locale's texts would land where another
 * locale loads them.
 *
 * - **Neutral** is every chunk the entry reaches without loading a root of `LOCALE_ROOTS`.
 * - **A locale's chunk** is one only that locale's roots reach. A chunk two locales' roots share is
 *   neutral. A stylesheet goes with the chunk that loads it.
 * - **The guard** fails when a neutral chunk imports a locale's chunk statically, and when a locale's
 *   root lands in a chunk that is not that locale's own. Either way another locale would load its texts.
 */
export function chunkLocales(meta: Bun.BuildMetafile, entry: string): Map<string, Locale> {
  const edges = new Map<string, ChunkEdge[]>();
  for (const [path, output] of Object.entries(meta.outputs)) {
    const chunk = outputPath(path);
    if (chunk.endsWith(".map")) continue;
    const list = output.imports.map((i) => ({ to: outputPath(i.path), dynamic: i.kind === "dynamic-import" }));
    if (output.cssBundle !== undefined) list.push({ to: outputPath(output.cssBundle), dynamic: false });
    edges.set(chunk, list);
  }
  const chunkOf = (module: string) => [...edges.keys()].find((c) => c.endsWith(".js") && meta.outputs[`./${c}`]?.inputs[module] !== undefined);
  /** Each locale's root modules, wherever the bundler put them. */
  const rootModules = new Map<Locale, string[]>(
    LOCALES.filter((locale) => locale !== KEPT_LOCALE).map((locale) => {
      const globs = LOCALE_ROOTS.map((pattern) => new Bun.Glob(pattern.replaceAll("{locale}", locale)));
      return [locale, Object.keys(meta.inputs).filter((module) => globs.some((glob) => glob.match(module)))];
    }),
  );
  const rootChunks = new Map<string, Locale>();
  for (const [locale, modules] of rootModules) {
    for (const module of modules) {
      const chunk = chunkOf(module);
      if (chunk !== undefined && meta.outputs[`./${chunk}`]?.entryPoint === module) rootChunks.set(chunk, locale);
    }
  }
  const neutral = reach(edges, [entry], (chunk) => rootChunks.has(chunk));
  const owner = new Map<string, Locale | null>();
  for (const locale of rootModules.keys()) {
    const seeds = [...rootChunks].filter(([, l]) => l === locale).map(([chunk]) => chunk);
    for (const chunk of reach(edges, seeds, (c) => neutral.has(c))) owner.set(chunk, owner.has(chunk) && owner.get(chunk) !== locale ? null : locale);
  }
  const locales = new Map([...owner].filter((entry): entry is [string, Locale] => entry[1] !== null));

  const problems: string[] = [];
  const moduleOf = (chunk: string) => meta.outputs[`./${chunk}`]?.entryPoint ?? Object.keys(meta.outputs[`./${chunk}`]?.inputs ?? {})[0] ?? chunk;
  for (const chunk of neutral) {
    for (const edge of edges.get(chunk) ?? []) {
      if (!edge.dynamic && locales.has(edge.to)) problems.push(`${moduleOf(chunk)} imports ${moduleOf(edge.to)} statically.`);
    }
  }
  for (const [locale, modules] of rootModules) {
    for (const module of modules) {
      const chunk = chunkOf(module);
      if (chunk !== undefined && locales.get(chunk) !== locale) problems.push(`${module} of ${locale} lands in ${chunk}, which is not ${locale}'s own.`);
    }
  }
  if (problems.length > 0) {
    const fix = `Load a locale's texts only with import() of a module that LOCALE_ROOTS of src/pwa/cache-groups.ts declares.`;
    throw new Error(`The split of the shell into its locales fails:\n${[...new Set(problems)].join("\n")}\n${fix}`);
  }
  return locales;
}

/** `text` safe inside an HTML attribute or element. */
function escapeHtml(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

// Every page of every locale reads its catalog, so the build loads them all before it renders one.
await loadEveryLocale();

/** The license the JSON-LD names: the one in the repository. */
const LICENSE_URL = `${REPO_URL}/blob/main/LICENSE`;

/** `siteUrl` with exactly one trailing `/`, so a page's path joins it. */
function siteRoot(siteUrl: string): string {
  return siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
}

/** The URL of `route` in every locale, then the default locale's as `x-default`: a page's alternates. */
function alternatesOf(route: Route, site: string): { hreflang: string; href: string }[] {
  const each = LOCALES.map((locale) => ({ hreflang: rowOf(locale).lang, href: site + pageOf(route, locale).path }));
  return [...each, { hreflang: "x-default", href: site + pageOf(route, DEFAULT_LOCALE).path }];
}

/**
 * The structured data of `page` at `site`, which a search engine reads: a `WebSite` and a
 * `WebApplication` on a landing page, and nothing elsewhere. It states only what holds for every visit.
 */
export function structuredData(page: Page, site: string): object | undefined {
  if (page.route.id !== "home") return undefined;
  const { siteName, pages } = messagesOf(page.locale);
  const common = { name: siteName, url: site + page.path, description: pages.home.description, inLanguage: rowOf(page.locale).lang };
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", ...common },
      {
        "@type": "WebApplication",
        ...common,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any (web browser)",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        license: LICENSE_URL,
      },
    ],
  };
}

/** The head lines a page adds to the template's: hints for search engines and social sites. */
function headLines(page: Page, siteUrl: string | undefined): string[] {
  const messages = messagesOf(page.locale);
  const lines = [
    `<meta property="og:site_name" content="${escapeHtml(messages.siteName)}" />`,
    `<meta property="og:locale" content="${rowOf(page.locale).ogLocale}" />`,
    ...LOCALES.filter((l) => l !== page.locale).map((l) => `<meta property="og:locale:alternate" content="${rowOf(l).ogLocale}" />`),
  ];
  if (page.route.hidden) lines.push(`<meta name="robots" content="noindex" />`);
  if (siteUrl !== undefined && !page.route.hidden) {
    const site = siteRoot(siteUrl);
    lines.push(`<link rel="canonical" href="${escapeHtml(site + page.path)}" />`);
    lines.push(`<meta property="og:url" content="${escapeHtml(site + page.path)}" />`);
    for (const { hreflang, href } of alternatesOf(page.route, site)) {
      lines.push(`<link rel="alternate" hreflang="${hreflang}" href="${escapeHtml(href)}" />`);
    }
    // The social picture's text is the site's name and the hero's lead, so they are its alt text too.
    lines.push(`<meta property="og:image" content="${escapeHtml(site + socialImageOf(page.locale))}" />`);
    lines.push(`<meta property="og:image:width" content="${SOCIAL_IMAGE_SIZE.width}" />`);
    lines.push(`<meta property="og:image:height" content="${SOCIAL_IMAGE_SIZE.height}" />`);
    lines.push(`<meta property="og:image:alt" content="${escapeHtml(`${messages.siteName}: ${messages.landing.hero.lead}`)}" />`);
    lines.push(`<meta name="twitter:card" content="summary_large_image" />`);
    const data = structuredData(page, site);
    // A `<` in the JSON is escaped, so no text in it can close the script element.
    if (data !== undefined) lines.push(`<script type="application/ld+json">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`);
  }
  return lines;
}

/**
 * The files only a crawler reads, by their paths, for the site at `siteUrl` with `pages`. `sitemap.xml`
 * lists every page search engines may show, each with its alternates. `robots.txt` allows every path and
 * names the sitemap.
 */
export function crawlerFiles(pages: readonly Page[], siteUrl: string): Record<string, string> {
  const site = siteRoot(siteUrl);
  const urls = pages
    .filter((page) => !page.route.hidden)
    .map((page) => {
      const links = alternatesOf(page.route, site).map(
        ({ hreflang, href }) => `\n    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeHtml(href)}" />`,
      );
      return `\n  <url>\n    <loc>${escapeHtml(site + page.path)}</loc>${links.join("")}\n  </url>`;
    });
  return {
    "robots.txt": `User-agent: *\nAllow: /\n\nSitemap: ${site}sitemap.xml\n`,
    "sitemap.xml": [
      `<?xml version="1.0" encoding="UTF-8"?>`,
      `\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
      ...urls,
      `\n</urlset>\n`,
    ].join(""),
  };
}

/** The HTML of `page`, from the page template with its placeholders filled. */
export function renderPage(template: string, page: Page, siteUrl?: string): string {
  const messages = messagesOf(page.locale);
  const values: Record<string, string> = {
    lang: rowOf(page.locale).lang,
    dir: rowOf(page.locale).dir,
    title: escapeHtml(pageTitle(page)),
    description: escapeHtml(pageDescription(page)),
    base: page.base,
    head: headLines(page, siteUrl)
      .map((line) => `\n    ${line}`)
      .join(""),
    noscript: escapeHtml(messages.noscript),
  };
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = values[key];
    if (value === undefined) throw new Error(`The page template names an unknown placeholder {{${key}}}.`);
    return value;
  });
}

/**
 * Writes every route's page in every locale into `outDir` from the template `public/index.html`. With a
 * site URL, it also writes the crawler's files.
 */
async function writePages(outDir: string, siteUrl: string | undefined, pseudo: boolean): Promise<void> {
  const template = await Bun.file(join(root, "public/index.html")).text();
  const locales: Locale[] = [...LOCALES];
  if (pseudo) {
    for (const locale of PSEUDO_LOCALES) await loadLocale(locale);
    locales.push(...PSEUDO_LOCALES);
  }
  const pages = [...allPages(locales), ...(await lessonPages(locales))];
  for (const page of pages) {
    const file = join(outDir, page.file);
    await mkdir(dirname(file), { recursive: true });
    await Bun.write(file, renderPage(template, page, siteUrl));
  }
  if (siteUrl === undefined) return;
  // A crawler never meets the pseudo-locale.
  const shipped = pages.filter((page) => isLocale(page.locale));
  for (const [path, text] of Object.entries(crawlerFiles(shipped, siteUrl))) await Bun.write(join(outDir, path), text);
}

/** Copies our license, the notices, each runtime dependency's license and the icons' into `licenses/`. */
async function copyLicenses(outDir: string): Promise<void> {
  const dir = join(outDir, "licenses");
  await mkdir(dir, { recursive: true });
  await cp(join(root, "LICENSE"), join(dir, "LICENSE.txt"));
  await cp(join(root, "THIRD-PARTY-NOTICES.md"), join(dir, "THIRD-PARTY-NOTICES.md"));
  await cp(join(root, "src/ui/icons/LICENSE.md"), join(dir, "lucide-LICENSE.md"));
  for (const dep of await runtimeDependencies()) {
    const text = join(root, "node_modules", dep, "LICENSE");
    if (!(await Bun.file(text).exists())) throw new Error(`The dependency ${dep} has no LICENSE file to copy.`);
    await cp(text, join(dir, `${dep.replace("/", "-")}-LICENSE.txt`));
  }
}

/** The names of the packages the app ships, from `package.json`'s `dependencies`. */
export async function runtimeDependencies(): Promise<string[]> {
  const pkg = (await Bun.file(join(root, "package.json")).json()) as { dependencies?: Record<string, string> };
  return Object.keys(pkg.dependencies ?? {}).sort();
}

export async function build(options: BuildOptions): Promise<BuildResult> {
  const { outDir, dev } = options;
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const define = { __DEV__: JSON.stringify(dev) };
  // The stylesheet sits at the app's root, because its font URLs are relative to `fonts/`.
  const site = await bundlePage("src/main.ts", "app", outDir, dev);
  const chunks = chunkParts(site.meta, "app.js");
  const locales = chunkLocales(site.meta, "app.js");

  const parser = await Bun.build({
    entrypoints: [join(root, "src/midi/parse-worker.ts")],
    outdir: outDir,
    naming: { entry: "parse-worker.[ext]" },
    target: "browser",
    minify: !dev,
    sourcemap: "linked",
    define,
  });
  check(parser, "parse worker");

  await cp(join(root, "public"), outDir, { recursive: true });
  await writePages(outDir, options.siteUrl, options.pseudo ?? false);
  await copyLicenses(outDir);
  await renderKeytrailPages(outDir, options.siteUrl ?? "https://keytrail-dev.pages.dev");

  const grouped = (await listFiles(outDir)).filter((path) => groupOf(path) !== undefined);
  const files: BuiltFile[] = await Promise.all(
    grouped.map(async (path) => {
      const file = Bun.file(join(outDir, path));
      return { path, bytes: file.size, hash: await contentHash(await file.arrayBuffer()) };
    }),
  );
  const version = await contentHash(new TextEncoder().encode(files.map((f) => `${f.path}\0${f.hash}\0`).join("")));
  const index = groupIndex(version, files, chunks, locales);
  const indexText = JSON.stringify(index);
  await Bun.write(join(outDir, GROUP_INDEX), indexText);
  // The worker's shell groups: each file's URL with its content hash, bytes and locale, the index too in the core.
  const shell = Object.fromEntries(
    SHELL_GROUPS.map((id) => {
      const { files: urls, hashes, sizes, locales: of } = index.groups[id];
      return [id, Object.fromEntries(urls.map((url, i) => [url, [hashes[i] ?? "", sizes[i] ?? 0, of[i] ?? ""]]))];
    }),
  ) as Record<ShellGroupId, Record<string, [string, number, string]>>;
  const indexBytes = new TextEncoder().encode(indexText);
  shell.app[`./${GROUP_INDEX}`] = [await contentHash(indexBytes), indexBytes.length, ""];

  const worker = await Bun.build({
    entrypoints: [join(root, "src/pwa/sw.ts")],
    outdir: outDir,
    naming: { entry: "sw.[ext]" },
    target: "browser",
    minify: !dev,
    define: {
      ...define,
      __SHELL__: JSON.stringify(shell),
      __VERSION__: JSON.stringify(version),
    },
  });
  check(worker, "service worker");

  return { files: await listFiles(outDir), index, version };
}

if (import.meta.main) {
  const args = process.argv.slice(2);
  const outAt = args.indexOf("--out");
  const outDir = resolve(root, outAt >= 0 ? (args[outAt + 1] ?? "dist") : "dist");
  const started = performance.now();
  const siteAt = args.indexOf("--site-url");
  const siteUrl = siteAt >= 0 ? args[siteAt + 1] : undefined;
  const result = await build({ outDir, dev: args.includes("--dev"), siteUrl, pseudo: args.includes("--pseudo") });
  const ms = Math.round(performance.now() - started);
  console.log(`built ${result.files.length} files into ${relative(root, outDir)} in ${ms} ms, shell ${result.version}`);
}
