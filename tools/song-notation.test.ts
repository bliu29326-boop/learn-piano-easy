import { expect, test } from "../src/testing";
import { parseHand, parsePedal } from "./song-notation";

test("a_bar_that_does_not_fill_its_time_throws", () => {
  expect(() => parseHand("C4:1 D4:1 | E4:4", 480, 4, "a song")).toThrow("bar 1 holds 2 units, not 4");
});

test("a_tied_note_sounds_once_across_the_bar_line", () => {
  const notes = parseHand("C4:2 E4+G4/2+4:2~ | E4+G4:3 C4:1", 480, 4, "a song");
  expect(notes.map(({ tick, ticks, pitches, fingers }) => ({ tick, ticks, pitches, fingers }))).toEqual([
    { tick: 0, ticks: 960, pitches: [60], fingers: [undefined] },
    { tick: 960, ticks: 2400, pitches: [64, 67], fingers: [2, 4] },
    { tick: 3360, ticks: 480, pitches: [60], fingers: [undefined] },
  ]);
  expect(parsePedal("P:4~ | P:4", 480, 4, "a pedal")).toEqual([{ down: true, tick: 0, ticks: 3840 }]);
  expect(() => parseHand("C4:4~ | D4:4", 480, 4, "a song")).toThrow("tied from other pitches");
  expect(() => parseHand("C4:4~", 480, 4, "a song")).toThrow("tied to nothing");
});
