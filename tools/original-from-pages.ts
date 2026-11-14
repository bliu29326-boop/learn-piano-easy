/**
 * Writes an Original's print table from its transcription pages, so no one copies hundreds of bars by hand.
 *
 * `bun tools/original-from-pages.ts <slug> [--src <dir>]` reads every `page-*.txt` of the folder, which
 * defaults to `.agent-tmp/src-<slug>`, and writes `tools/our-songs/<slug>-print.ts`. That file exports
 * `PRINT`, each bar's right hand, left hand and pedal keyed by its label, for the song module to read.
 * A hidden `--out <path>` writes the table elsewhere, for a try run that leaves the tree alone.
 *
 * A page is read in the order of the number after `n` in its name, then of its system `s<k>`. Each bar
 * is one line in the song notation of `tools/song-notation.ts`:
 * `bar <label>: R: <tokens> | L: <tokens> | P: <tokens or none>  — <remark>`. A line `unit-bar: <n>`
 * sets every following bar's length in units until the next such line, across pages. Every other line
 * is the transcriber's note, and the command skips it.
 *
 * Decisions, and what each costs:
 * - The command refuses rather than guesses. A `?` in a token, a hand or pedal whose units differ from
 *   the right hand's, a bar off its `unit-bar`, a repeated label or a token it cannot parse is a
 *   problem naming its file, line and label. With any problem it writes nothing and exits 1, so a
 *   transcription is fixed at its source and run again.
 * - It keeps each token as written, ties and fingers included, and only drops a printed finger's `(p)`
 *   mark. A pedal line of `none` becomes a rest as long as the bar. Reading the music is the song
 *   module's work, and this command only carries the text across.
 * - Each bar's remark becomes a comment above its row, so a reader of the table sees what the print shows.
 */
import { readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

import { pitchOf } from "./song-notation";

/** One bar of the print: its label, both hands and the pedal in the song notation, and its remark. */
export interface PrintRow {
  label: string;
  right: string;
  left: string;
  pedal: string;
  remark: string;
}

/** One finger, with an optional printed-finger mark. */
const FINGER = /^[1-5](\(p\))?$/;

/** A token's length: a positive whole number of units, tied on when it ends in `~`. */
const UNITS = /^[1-9]\d*~?$/;

/**
 * The units of one hand's token, or a reason it cannot be read. A pedal line takes `P` in place of a
 * pitch, and a hand takes pitches and their fingers.
 */
function tokenUnits(token: string, pedal: boolean): number | string {
  const colon = token.lastIndexOf(":");
  if (colon < 0) return `"${token}" has no length`;
  const head = token.slice(0, colon);
  const units = token.slice(colon + 1);
  if (!UNITS.test(units)) return `"${token}" has no whole length`;
  const length = Number.parseInt(units, 10);
  if (head === "r") return length;
  if (pedal) return head === "P" ? length : `"${token}" is neither P nor r`;
  const [pitches, fingers, ...rest] = head.split("/");
  if (rest.length > 0) return `"${token}" has more than one slash`;
  const names = pitches!.split("+");
  for (const name of names) {
    try {
      pitchOf(name);
    } catch {
      return `"${token}" names "${name}", which is not a note`;
    }
  }
  if (fingers === undefined) return length;
  const each = fingers.split("+");
  if (each.length !== names.length) return `"${token}" has ${each.length} fingers for ${names.length} pitches`;
  if (!each.every((finger) => FINGER.test(finger))) return `"${token}" has a finger that is not 1 to 5`;
  return length;
}

/** A line's tokens and their total units, or the reasons they cannot be read. */
function readLine(text: string, pedal: boolean): { tokens: string[]; units: number; errors: string[] } {
  const tokens = text.split(/\s+/).filter((token) => token !== "");
  const errors: string[] = [];
  let units = 0;
  for (const token of tokens) {
    if (token.includes("?")) {
      errors.push(`"${token}" holds a ?`);
      continue;
    }
    const read = tokenUnits(token, pedal);
    if (typeof read === "string") errors.push(read);
    else units += read;
  }
  if (tokens.length === 0) errors.push("is empty");
  return { tokens: tokens.map((token) => token.replaceAll("(p)", "")), units, errors };
}

const BAR_LINE = /^bar\s+([^\s:]+):\s*(.*)$/;
const HANDS = /^R:\s*(.*?)\s*\|\s*L:\s*(.*?)\s*\|\s*P:\s*(.*?)\s*$/;
const UNIT_BAR = /^unit-bar:\s*(\S+)\s*$/;

/**
 * Every bar of `pages`, in the order given, and every problem that keeps them from the table. A problem
 * names its page, line and label.
 */
export function printFromPages(pages: { name: string; text: string }[]): { bars: PrintRow[]; problems: string[] } {
  const bars: PrintRow[] = [];
  const problems: string[] = [];
  const seen = new Map<string, string>();
  let unitBar: number | undefined;
  for (const page of pages) {
    const lines = page.text.split(/\r?\n/);
    lines.forEach((raw, index) => {
      const line = raw.trim();
      const at = `${page.name}:${index + 1}`;
      const header = UNIT_BAR.exec(line);
      if (header) {
        const value = Number(header[1]);
        if (Number.isInteger(value) && value > 0) unitBar = value;
        else problems.push(`${at}: unit-bar "${header[1]}" is not a whole number of units`);
        return;
      }
      const bar = BAR_LINE.exec(line);
      if (!bar) return;
      const label = bar[1]!;
      const where = `${at} bar ${label}`;
      const dash = bar[2]!.search(/\s—\s*/);
      const body = dash < 0 ? bar[2]! : bar[2]!.slice(0, dash);
      const remark = dash < 0 ? "" : bar[2]!.slice(dash).replace(/^\s—\s*/, "").trim();
      const hands = HANDS.exec(body.trim());
      if (!hands) {
        problems.push(`${where}: the line is not "R: … | L: … | P: …"`);
        return;
      }
      const before = seen.get(label);
      if (before !== undefined) problems.push(`${where}: the label is already used at ${before}`);
      else seen.set(label, at);
      const right = readLine(hands[1]!, false);
      const left = readLine(hands[2]!, false);
      const none = hands[3] === "none";
      const pedal = none ? undefined : readLine(hands[3]!, true);
      const errors = [
        ...right.errors.map((error) => `R ${error}`),
        ...left.errors.map((error) => `L ${error}`),
        ...(pedal?.errors ?? []).map((error) => `P ${error}`),
      ];
      for (const error of errors) problems.push(`${where}: ${error}`);
      if (errors.length > 0) return;
      if (left.units !== right.units) {
        problems.push(`${where}: L holds ${left.units} units and R holds ${right.units}`);
      }
      if (pedal && pedal.units !== right.units) {
        problems.push(`${where}: P holds ${pedal.units} units and R holds ${right.units}`);
      }
      if (unitBar !== undefined && right.units !== unitBar) {
        problems.push(`${where}: R holds ${right.units} units and the bar is ${unitBar}`);
      }
      bars.push({
        label,
        right: right.tokens.join(" "),
        left: left.tokens.join(" "),
        pedal: pedal ? pedal.tokens.join(" ") : `r:${right.units}`,
        remark,
      });
    });
  }
  return { bars, problems };
}

/** The page order of a file name: the number after `n`, then the system after `s`, each 0 when absent. */
function pageKey(name: string): [number, number] {
  return [Number(/n(\d+)/.exec(name)?.[1] ?? 0), Number(/-s(\d+)/.exec(name)?.[1] ?? 0)];
}

/** `names` in page order, natural order breaking a tie. */
export function inPageOrder(names: string[]): string[] {
  return [...names].sort((a, b) => {
    const [pageA, systemA] = pageKey(a);
    const [pageB, systemB] = pageKey(b);
    return pageA - pageB || systemA - systemB || a.localeCompare(b, undefined, { numeric: true });
  });
}

/** The module text of `bars`, written from the folder `from`, for the song `slug`. */
export function printModule(slug: string, from: string, bars: PrintRow[]): string {
  const rows = bars.flatMap((bar) => [
    ...(bar.remark === "" ? [] : [`  // ${bar.remark}`]),
    `  ${JSON.stringify(bar.label)}: [${[bar.right, bar.left, bar.pedal].map((line) => JSON.stringify(line)).join(", ")}],`,
  ]);
  return [
    "/**",
    ` * The print of ${slug}'s Original, bar by bar: the right hand, the left hand and the pedal, keyed by label.`,
    ` * \`bun tools/original-from-pages.ts ${slug}\` wrote it from \`${from}\`. It is never edited by hand:`,
    " * fix the transcription and run the command again.",
    " */",
    "export const PRINT: Record<string, readonly [right: string, left: string, pedal: string]> = {",
    ...rows,
    "};",
    "",
  ].join("\n");
}

/** The value after `flag` in `args`, or `undefined` when the flag is absent. */
function option(args: string[], flag: string): string | undefined {
  const at = args.indexOf(flag);
  return at < 0 ? undefined : args[at + 1];
}

if (import.meta.main) {
  const root = resolve(import.meta.dir, "..");
  const args = process.argv.slice(2);
  const slug = args[0];
  if (slug === undefined || slug.startsWith("--")) {
    console.error("Name a song, such as `bun tools/original-from-pages.ts beethoven-5 [--src <dir>]`.");
    process.exit(1);
  }
  const src = resolve(option(args, "--src") ?? join(root, ".agent-tmp", `src-${slug}`));
  const out = resolve(option(args, "--out") ?? join(root, "tools", "our-songs", `${slug}-print.ts`));
  const names = inPageOrder((await readdir(src)).filter((name) => /^page-.*\.txt$/.test(name)));
  if (names.length === 0) {
    console.error(`No page-*.txt file is in ${src}. Point --src at the transcription folder.`);
    process.exit(1);
  }
  const pages = await Promise.all(names.map(async (name) => ({ name, text: await Bun.file(join(src, name)).text() })));
  const { bars, problems } = printFromPages(pages);
  if (problems.length > 0) {
    for (const problem of problems) console.error(problem);
    const count = problems.length === 1 ? "1 problem" : `${problems.length} problems`;
    console.error(`${count}, so nothing was written. Fix the pages and run the command again.`);
    process.exit(1);
  }
  const from = relative(root, src).replaceAll("\\", "/");
  await Bun.write(out, printModule(slug, from, bars));
  console.log(`Wrote ${bars.length} bars from ${names.length} pages to ${relative(root, out).replaceAll("\\", "/")}.`);
}
