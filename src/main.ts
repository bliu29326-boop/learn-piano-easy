/** The app's entry point: loads the settings and the scene's themes, starts the site and the floating tip, and in development, live reload. */
import "./ui/styles";
import { SettingsStore, STORAGE_KEY } from "./settings/store";
import { initializeKeytrail } from "./ui/keytrail-settings";
import { applyThemes } from "./settings/themes";
import { startSite } from "./site/site";
import { installTips } from "./ui/components/tooltip";

const root = document.getElementById("app");
if (!root) throw new Error("The page has no #app element.");

import { enhancePublic } from "./membership/public";

const settings = new SettingsStore();
let savedSettings = true;
try { savedSettings = localStorage.getItem(STORAGE_KEY) !== null; } catch { savedSettings = false; }
initializeKeytrail(settings, savedSettings);
applyThemes(settings);
if (document.documentElement.dataset.keytrailPage !== undefined) enhancePublic(root);
else void startSite(root, settings);
installTips();

if (__DEV__) {
  new EventSource("./__reload").addEventListener("message", () => location.reload());
}
