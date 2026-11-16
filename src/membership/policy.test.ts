import { expect, test } from "bun:test";
import { mayUse } from "./policy";
import { pageOf, pageTitle, ROUTES, routeOf } from "../site/routes";
const now = 2_000_000_000_000;
const active = { active: true, current_period_end: now / 1000 + 100, cancel_at_period_end: true };
test("the only locks are later worlds, advanced catalogue and MIDI export", () => {
  for (const feature of ["core", "import"] as const) expect(mayUse({feature}, null, now)).toBe(true);
  for (const world of ["meet-the-piano", "first-melodies"]) expect(mayUse({feature:"world",world}, null, now)).toBe(true);
  for (const world of ["rhythm","reading-music","both-hands","scales-and-keys","chords","expression"]) {
    expect(mayUse({feature:"world",world}, null, now)).toBe(false);
    expect(mayUse({feature:"world",world}, active, now)).toBe(true);
  }
  expect(mayUse({feature:"export"}, null, now)).toBe(false);
  expect(mayUse({feature:"export"}, active, now)).toBe(true);
});
test("expired, absent and unproven paid periods never unlock paid features", () => {
  for (const membership of [null, { ...active, active:false }, {...active,current_period_end:now/1000}, {...active,current_period_end:null}]) expect(mayUse({feature:"export"},membership,now)).toBe(false);
});
test("beginner/intermediate are free and imports bypass catalogue classification", () => {
  for (const difficulty of [1,1.5,2,2.5,3,3.5]) expect(mayUse({feature:"catalogue",source:"catalogue",difficulty},null,now)).toBe(true);
  // Upstream's actual visible Hard band starts at 4, not 7 (tags.ts LEVEL_STARTS).
  for (const difficulty of [4,4.5,5,6,7,8,9,10]) expect(mayUse({feature:"catalogue",source:"catalogue",difficulty},null,now)).toBe(false);
  expect(mayUse({feature:"catalogue",source:"upload",difficulty:10,rarity:"mythic"},null,now)).toBe(true);
  expect(mayUse({feature:"catalogue",source:"catalogue",difficulty:4,rarity:"legendary"},null,now)).toBe(false);
});
test("Keytrail replaces visible page branding and removes the sponsorship route",()=>{
  expect(pageTitle(pageOf(routeOf("play"),"en"))).toContain("Keytrail");
  expect(ROUTES.some(route=>route.path==="sponsor/")).toBe(false);
});
