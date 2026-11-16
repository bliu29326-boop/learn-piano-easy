import {expect,test} from "bun:test";
import {SettingsStore} from "../settings/store";
import {initializeKeytrail} from "./keytrail-settings";
test("first visit is the light sage Keytrail room in English",()=>{const settings=new SettingsStore(null);initializeKeytrail(settings,false);expect(settings.get("siteTheme")).toBe("light");expect(settings.get("theme")).toBe("light");expect(settings.get("language")).toBe("en");expect(settings.get("bgCol1")).toBe("#f2f5f2ff")});
test("existing user preferences are never silently reset by rebranding",()=>{const settings=new SettingsStore(null);settings.set("siteTheme","dark");settings.set("language","ja");settings.set("bgCol1","#222222ff");initializeKeytrail(settings,true);expect(settings.get("siteTheme")).toBe("dark");expect(settings.get("language")).toBe("ja");expect(settings.get("bgCol1")).toBe("#222222ff")});
