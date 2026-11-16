/** The three Keytrail locks. This is presentation policy; protected exports are authorized again by the server. */
export interface Membership { active: boolean; current_period_end: number | null; cancel_at_period_end: boolean }
export type Feature = "core" | "import" | "world" | "catalogue" | "export";
export interface FeatureRequest { feature: Feature; world?: string; difficulty?: number; rarity?: string; source?: "catalogue" | "upload" }
export const FREE_WORLDS = ["meet-the-piano", "first-melodies"] as const;
export function isPaid(membership: Membership | null | undefined, now = Date.now()): boolean {
  return membership?.active === true && typeof membership.current_period_end === "number" && Number.isFinite(membership.current_period_end) && membership.current_period_end * 1000 > now;
}
export function advancedCatalogue(song: {difficulty?: number; rarity?: string}): boolean {
  // The retained engine's displayed Hard band begins at 4 (tags.ts); its 3/3.5 intermediate versions stay free.
  return (song.difficulty ?? 0) >= 4 || ["legendary", "mythic", "advanced", "hard"].includes(song.rarity ?? "");
}
export function mayUse(request: FeatureRequest, membership?: Membership | null, now = Date.now()): boolean {
  if (request.feature === "core" || request.feature === "import") return true;
  if (request.feature === "world" && FREE_WORLDS.some(id => id === request.world)) return true;
  if (request.feature === "catalogue" && (request.source === "upload" || !advancedCatalogue(request))) return true;
  return isPaid(membership, now);
}
