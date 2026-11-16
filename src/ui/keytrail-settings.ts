import type { SettingsStore } from "../settings/store";
import { applyThemeColours } from "../settings/themes";
/** A first-visit default, not a migration. Retain existing preferences and all engine controls. */
export function initializeKeytrail(settings:SettingsStore,saved:boolean):void {
  if(saved)return;
  settings.set("siteTheme","light");settings.set("language","en");settings.set("theme","light");
  applyThemeColours(settings,"light");
  settings.set("pianoVelvetColor","#245c42ff");
  settings.set("inputNoteColorWhite","#84ba95ff");settings.set("inputNoteColorBlack","#4f8c65ff");
}
