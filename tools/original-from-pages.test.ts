import { expect, test } from "../src/testing";
import { printFromPages } from "./original-from-pages";

test("original_from_pages_keeps_every_bar_and_refuses_a_short_hand", () => {
  const first = [
    "Piece: an example. A bar is 48.",
    "unit-bar: 48",
    "bar n0.s1.1: R: r:12 G4/2(p):12 G4/2(p):12 G4/2(p):12 | L: r:48 | P: none  — p in the RH",
    "bar n0.s1.2: R: D3+D4/1+5:48~ | L: D1+D2/5+1:48~ | P: P:48~",
  ].join("\n");
  const second = "bar n1.s1.1: R: C5/4:24 r:24 | L: C3+E3/5(p)+3(p):48 | P: P:24 r:24  — the pedal lifts halfway";
  const kept = printFromPages([
    { name: "page-n0-s1-2.txt", text: first },
    { name: "page-n1-s1-2.txt", text: second },
  ]);
  expect(kept.problems).toEqual([]);
  expect(kept.bars).toEqual([
    { label: "n0.s1.1", right: "r:12 G4/2:12 G4/2:12 G4/2:12", left: "r:48", pedal: "r:48", remark: "p in the RH" },
    { label: "n0.s1.2", right: "D3+D4/1+5:48~", left: "D1+D2/5+1:48~", pedal: "P:48~", remark: "" },
    { label: "n1.s1.1", right: "C5/4:24 r:24", left: "C3+E3/5+3:48", pedal: "P:24 r:24", remark: "the pedal lifts halfway" },
  ]);

  const refused = printFromPages([
    {
      name: "page-n2.txt",
      text: [
        "unit-bar: 48",
        "bar n2.s1.1: R: C5/4:48 | L: C3/5:47 | P: none",
        "bar n2.s1.2: R: C5/?:48 | L: C3/5:48 | P: none",
      ].join("\n"),
    },
  ]);
  expect(refused.problems).toEqual([
    "page-n2.txt:2 bar n2.s1.1: L holds 47 units and R holds 48",
    'page-n2.txt:3 bar n2.s1.2: R "C5/?:48" holds a ?',
  ]);
});
