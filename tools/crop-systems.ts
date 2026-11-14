/**
 * The system cropper: cuts a scanned page of sheet music into crops of one system each, ready for a
 * transcriber to read.
 *
 * A transcriber that opens a whole 4000-pixel page, then zooms again and again, fills its context with
 * pixels it never reads. One system per transcriber keeps each context small. Each system becomes two
 * half-system crops at twice the scan's size, so a note head is large enough to read at once.
 *
 * Decisions, and what each costs:
 * - The page is read as 8-bit gray pixels through ImageMagick's `magick`, and the crops are cut by it
 *   too. No image package joins the project, so the tool needs ImageMagick 7 on the path.
 * - A staff line is a row whose dark pixels cover at least half of the darkest row. A beam or a run of
 *   note heads covers far less of the width, so it is never taken for a line.
 * - A slightly skewed scan is straightened first. The tool tries shears up to 2 degrees and keeps the one
 *   whose row profile is sharpest, measured as its sum of squares. A curved page is not straightened.
 * - Five evenly spaced lines make a staff, and a line that fits no staff is dropped. Staves are grouped
 *   into systems in order, so every system on the page must hold the same number of staves. A page that
 *   breaks that is refused, and its systems are cropped by hand.
 * - A system's crop reaches one staff height above and below its staves, for ledger lines. It stops at
 *   the page edge and before the neighbouring system's staves.
 * - The two halves overlap by 3% of the width, so a note on the cut is whole in at least one of them.
 *
 * `bun tools/crop-systems.ts <page image> [--staves <n>] [--out <dir>]`. `--staves` is the staves per
 * system, 2 for a grand staff by default. `--out` is the image's own folder by default. The crops are
 * `<page>-s<system>-a.png` and `-b.png`, systems counted from 1 at the top.
 */
import { mkdir } from "node:fs/promises";
import { basename, dirname, extname, join } from "node:path";

/** A system's rows on the page, both inclusive. */
export interface System {
  top: number;
  bottom: number;
}

/** A gray value below this is dark. */
const DARK = 128;

/** A staff line's row holds at least this share of the darkest row's dark pixels. */
const LINE_SHARE = 0.5;

/** The steepest skew tried, in degrees. */
const MAX_SKEW = 2;

/** The share of the page's width the two halves of a system overlap by. */
const OVERLAP = 0.03;

/** A staff line, as its first and last row in the straightened profile. */
interface Line {
  first: number;
  last: number;
  centre: number;
}

/** A staff, as its five lines. */
type Staff = Line[];

/**
 * The systems of a page of `width` by `height` gray pixels, top to bottom. Each system holds
 * `stavesPerSystem` staves, with a margin of one staff height above and below.
 */
export function findSystems(pixels: Uint8Array, width: number, height: number, stavesPerSystem: number): System[] {
  if (pixels.length !== width * height) {
    throw new Error(`the page holds ${pixels.length} pixels, but ${width} by ${height} needs ${width * height}`);
  }
  const { xs, ys } = darkPixels(pixels, width, height);
  const slope = skew(xs, ys, width, height);
  const pad = Math.ceil(width * Math.tan((MAX_SKEW * Math.PI) / 180)) + 1;
  const profile = rowProfile(xs, ys, width, height, slope, pad);
  const staves = groupStaves(lines(profile));
  if (staves.length === 0) throw new Error("no staff was found on the page; check that the image is a page of sheet music");
  if (staves.length % stavesPerSystem !== 0) {
    throw new Error(
      `found ${staves.length} staves, which do not divide into systems of ${stavesPerSystem}; ` +
        "pass the staves per system with `--staves <n>`",
    );
  }

  const groups: Staff[][] = [];
  for (let at = 0; at < staves.length; at += stavesPerSystem) groups.push(staves.slice(at, at + stavesPerSystem));
  // The rows a straightened row covers on the page, across the whole width.
  const drift = Math.round((width - 1) * slope);
  const up = Math.min(0, drift) - pad;
  const down = Math.max(0, drift) - pad;
  return groups.map((group, i) => {
    const first = group[0]!;
    const last = group[group.length - 1]!;
    const margin = Math.round(first[4]!.centre - first[0]!.centre);
    let top = first[0]!.first - margin;
    let bottom = last[4]!.last + margin;
    const above = groups[i - 1];
    const below = groups[i + 1];
    if (above) top = Math.max(top, above[above.length - 1]![4]!.last + 1);
    if (below) bottom = Math.min(bottom, below[0]![0]!.first - 1);
    return { top: Math.max(0, top + up), bottom: Math.min(height - 1, bottom + down) };
  });
}

/** The column and row of every dark pixel. */
function darkPixels(pixels: Uint8Array, width: number, height: number): { xs: Int32Array; ys: Int32Array } {
  let count = 0;
  for (const value of pixels) if (value < DARK) count++;
  const xs = new Int32Array(count);
  const ys = new Int32Array(count);
  let at = 0;
  for (let y = 0; y < height; y++) {
    const row = y * width;
    for (let x = 0; x < width; x++) {
      if (pixels[row + x]! < DARK) {
        xs[at] = x;
        ys[at++] = y;
      }
    }
  }
  return { xs, ys };
}

/** The rows `y - x * slope` counts the dark pixels of, shifted down by `pad`. */
function rowProfile(xs: Int32Array, ys: Int32Array, width: number, height: number, slope: number, pad: number): Int32Array {
  const shift = new Int32Array(width);
  for (let x = 0; x < width; x++) shift[x] = Math.round(x * slope);
  const profile = new Int32Array(height + 2 * pad);
  for (let i = 0; i < xs.length; i++) profile[ys[i]! - shift[xs[i]!]! + pad]!++;
  return profile;
}

/** The slope whose row profile is sharpest: a coarse search in tenths of a degree, then a fine one. */
function skew(xs: Int32Array, ys: Int32Array, width: number, height: number): number {
  const pad = Math.ceil(width * Math.tan((MAX_SKEW * Math.PI) / 180)) + 1;
  const sharpness = (degrees: number): number => {
    const profile = rowProfile(xs, ys, width, height, Math.tan((degrees * Math.PI) / 180), pad);
    let sum = 0;
    for (const count of profile) sum += count * count;
    return sum;
  };
  let best = 0;
  for (const step of [0.1, 0.01]) {
    const centre = best;
    const reach = step === 0.1 ? MAX_SKEW : 0.1;
    let bestScore = -1;
    for (let degrees = centre - reach; degrees <= centre + reach + step / 2; degrees += step) {
      const score = sharpness(degrees);
      if (score > bestScore) [best, bestScore] = [degrees, score];
    }
  }
  return Math.tan((best * Math.PI) / 180);
}

/** The runs of rows whose dark pixels make a staff line. */
function lines(profile: Int32Array): Line[] {
  let max = 0;
  for (const count of profile) max = Math.max(max, count);
  if (max === 0) return [];
  const floor = max * LINE_SHARE;
  const out: Line[] = [];
  for (let row = 0; row < profile.length; row++) {
    if (profile[row]! < floor) continue;
    const first = row;
    while (row + 1 < profile.length && profile[row + 1]! >= floor) row++;
    out.push({ first, last: row, centre: (first + row) / 2 });
  }
  return out;
}

/** Five lines in a row whose four gaps are within a quarter of their mean make a staff. */
function groupStaves(found: Line[]): Staff[] {
  const staves: Staff[] = [];
  for (let at = 0; at + 5 <= found.length; ) {
    const five = found.slice(at, at + 5);
    const gaps = five.slice(1).map((line, i) => line.centre - five[i]!.centre);
    const mean = gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length;
    const thickest = Math.max(...five.map((line) => line.last - line.first + 1));
    if (mean > 2 * thickest && gaps.every((gap) => Math.abs(gap - mean) <= mean / 4)) {
      staves.push(five);
      at += 5;
    } else {
      at++;
    }
  }
  return staves;
}

/** Runs `magick` with `args`, and returns its output. It throws with ImageMagick's message on a failure. */
async function magick(args: string[]): Promise<Uint8Array> {
  let proc;
  try {
    proc = Bun.spawn(["magick", ...args], { stdout: "pipe", stderr: "pipe" });
  } catch {
    throw new Error("`magick` was not found; install ImageMagick 7 and put it on the path");
  }
  const [out, err, code] = await Promise.all([
    new Response(proc.stdout).arrayBuffer(),
    new Response(proc.stderr).text(),
    proc.exited,
  ]);
  if (code !== 0) throw new Error(`\`magick ${args.join(" ")}\` failed: ${err.trim()}`);
  return new Uint8Array(out);
}

/** Crops each system of the page at `image` into two halves in `outDir`, and prints a line for each. */
async function cropSystems(image: string, stavesPerSystem: number, outDir: string): Promise<void> {
  const size = new TextDecoder().decode(await magick(["identify", "-format", "%w %h", image])).trim().split(/\s+/);
  const width = Number(size[0]);
  const height = Number(size[1]);
  const pixels = await magick([image, "-colorspace", "Gray", "-depth", "8", "gray:-"]);
  const systems = findSystems(pixels, width, height, stavesPerSystem);

  await mkdir(outDir, { recursive: true });
  const name = basename(image, extname(image));
  const half = Math.round(width / 2);
  const overlap = Math.round((width * OVERLAP) / 2);
  const halves = [
    { side: "a", x: 0, w: half + overlap },
    { side: "b", x: half - overlap, w: width - (half - overlap) },
  ];
  for (const [i, system] of systems.entries()) {
    const h = system.bottom - system.top + 1;
    const paths = [];
    for (const { side, x, w } of halves) {
      const path = join(outDir, `${name}-s${i + 1}-${side}.png`);
      await magick([
        image,
        ...["-crop", `${w}x${h}+${x}+${system.top}`, "+repage"],
        ...["-colorspace", "Gray", "-normalize", "-sigmoidal-contrast", "8,50%", "-resize", "200%"],
        path,
      ]);
      paths.push(path);
    }
    console.log(`system ${i + 1}: rows ${system.top}-${system.bottom}  ${paths.join("  ")}`);
  }
}

if (import.meta.main) {
  const args = process.argv.slice(2);
  const flag = (name: string): string | undefined => {
    const at = args.indexOf(name);
    if (at < 0) return undefined;
    const value = args[at + 1];
    args.splice(at, 2);
    if (value === undefined) throw new Error(`\`${name}\` needs a value`);
    return value;
  };
  const staves = Number(flag("--staves") ?? "2");
  const out = flag("--out");
  const image = args[0];
  if (!image || args.length > 1 || !Number.isInteger(staves) || staves < 1) {
    console.error("Usage: `bun tools/crop-systems.ts <page image> [--staves <n>] [--out <dir>]`");
    console.error("`--staves` is a whole number of staves per system, 2 for a grand staff.");
    process.exit(1);
  }
  await cropSystems(image, staves, out ?? dirname(image));
}
