import { expect, test } from "../src/testing";
import { findSystems } from "./crop-systems";

const WIDTH = 1200;
const HEIGHT = 1600;
/** The rows between two lines of a staff. */
const SPACING = 12;
/** The rows a scan drifts down per column, a skew of about a quarter of a degree. */
const SLOPE = 0.004;

/** A blank page of `WIDTH` by `HEIGHT` white pixels, with a painter for dark boxes on it. */
function page(): { pixels: Uint8Array; box: (x0: number, y0: number, x1: number, y1: number) => void } {
  const pixels = new Uint8Array(WIDTH * HEIGHT).fill(255);
  const box = (x0: number, y0: number, x1: number, y1: number): void => {
    for (let y = Math.max(0, y0); y < Math.min(HEIGHT, y1); y++) {
      for (let x = Math.max(0, x0); x < Math.min(WIDTH, x1); x++) pixels[y * WIDTH + x] = 20;
    }
  };
  return { pixels, box };
}

/** Draws a skewed staff whose top line starts at row `top`, and returns its top and bottom rows. */
function staff(box: (x0: number, y0: number, x1: number, y1: number) => void, top: number, left: number): [number, number] {
  for (let line = 0; line < 5; line++) {
    for (let x = left; x < 1100; x++) {
      const y = top + line * SPACING + Math.round(x * SLOPE);
      box(x, y, x + 1, y + 2);
    }
  }
  return [top + Math.round(left * SLOPE), top + 4 * SPACING + Math.round(1099 * SLOPE) + 1];
}

/** Draws note heads, a ledger note, a beam and barlines on the staff whose top line is at row `top`. */
function music(box: (x0: number, y0: number, x1: number, y1: number) => void, top: number, systemBottom: number): void {
  for (let x = 260; x < 1080; x += 37) {
    const y = top + ((x * 7) % 9) * (SPACING / 2) + Math.round(x * SLOPE);
    box(x, y - 5, x + 14, y + 5);
    box(x + 12, y - 40, x + 14, y);
  }
  box(600, top - 3 * SPACING - 5, 614, top - 3 * SPACING + 5);
  box(590, top - 2 * SPACING, 624, top - 2 * SPACING + 2);
  for (let x = 300; x < 520; x++) box(x, top - 40 + Math.round(x * 0.02), x + 1, top - 34 + Math.round(x * 0.02));
  for (const x of [400, 700, 1098]) box(x, top, x + 2, systemBottom);
}

/** A page of three grand-staff systems under a title, with noise, and each system's outer staff rows. */
function threeSystems(): { pixels: Uint8Array; drawn: [number, number][] } {
  const { pixels, box } = page();
  box(400, 40, 800, 80);
  const drawn: [number, number][] = [];
  for (const [i, top] of [200, 700, 1200].entries()) {
    const left = i === 0 ? 220 : 100;
    const upper = staff(box, top, left);
    const lower = staff(box, top + 150, left);
    music(box, top, lower[1]);
    music(box, top + 150, lower[1]);
    drawn.push([upper[0], lower[1]]);
  }
  for (let i = 0; i < 4000; i++) box((i * 7919) % WIDTH, (i * 104729) % HEIGHT, ((i * 7919) % WIDTH) + 2, ((i * 104729) % HEIGHT) + 2);
  return { pixels, drawn };
}

test("crop_systems_finds_every_system", () => {
  const { pixels, drawn } = threeSystems();
  const systems = findSystems(pixels, WIDTH, HEIGHT, 2);
  expect(systems.length).toBe(3);
  for (const [i, system] of systems.entries()) {
    const [top, bottom] = drawn[i]!;
    // Each system covers its staves with room for ledger lines, and stops before its neighbours' staves.
    expect(system.top).toBeLessThanOrEqual(top - 2 * SPACING);
    expect(system.bottom).toBeGreaterThanOrEqual(bottom + 2 * SPACING);
    expect(system.top).toBeGreaterThan(i === 0 ? 0 : drawn[i - 1]![1]);
    expect(system.bottom).toBeLessThan(i === 2 ? HEIGHT - 1 : drawn[i + 1]![0]);
  }
});

test("crop_systems_refuses_staves_that_do_not_fill_whole_systems", () => {
  const { pixels } = threeSystems();
  expect(() => findSystems(pixels, WIDTH, HEIGHT, 4)).toThrow("found 6 staves, which do not divide into systems of 4");
});
