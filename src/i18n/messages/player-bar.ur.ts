/** The player's bar in Urdu. A text it leaves out shows in English. */
import { formatNumber, isolate } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "چلائیں یا روکیں",
    stop: "بند کریں اور شروع پر جائیں",
    seekBack: "5 سیکنڈ پیچھے جائیں",
    seekForward: "5 سیکنڈ آگے جائیں",
    toStart: "شروع پر جائیں",
    faster: "رفتار بڑھائیں",
    slower: "رفتار کم کریں",
    transposeUp: "اوپر ٹرانسپوز کریں",
    transposeDown: "نیچے ٹرانسپوز کریں",
    loop: "پہلے منتخب میژر، پھر پورا گانا لوپ میں چلائیں، پھر لوپ بند کریں",
    loopStart: "اس میژر سے لوپ",
    loopEnd: "اس میژر تک لوپ",
    zoomIn: "زوم ان کریں",
    zoomOut: "زوم آؤٹ کریں",
    fit: "پورا گانا دکھائیں",
    viewLeft: "ویو بائیں طرف لے جائیں",
    viewRight: "ویو دائیں طرف لے جائیں",
    fullscreen: "فل اسکرین",
  },
  controls: {
    play: "چلائیں",
    pause: "روکیں",
    stop: "بند کریں",
    speed: "رفتار",
    speedPercent: (n: number) => isolate(`${isolate(formatNumber("ur", n))}%`),
    transpose: "ٹرانسپوز",
    loop: "لوپ",
    repeatAll: "سب دہرائیں",
    loopTitles: {
      off: "ترتیبات میں منتخب میژر لوپ میں چلائیں",
      measures: "اس کے بجائے پورا گانا دہرائیں",
      song: "دہرانا بند کریں",
    },
    more: "مزید ٹولز",
    zoom: "زوم",
    fit: "فٹ کریں",
    view: "ویو",
    leaveFullScreen: "فل اسکرین سے باہر نکلیں",
    expert: "ماہر",
    expertTitles: {
      off: "سارے ٹولز دکھائیں",
      on: "صرف اہم ٹولز دکھائیں",
    },
  },
  hotkeys: {
    none: "کوئی نہیں",
  },
  hotkeyDialog: {
    pressKey: "کوئی بٹن دبائیں…",
    keyFor: (label: string) => `${isolate(label)} کا بٹن`,
    clear: "ہٹائیں",
    clearTitle: (label: string) => `${isolate(label)} کا بٹن ہٹائیں`,
    resetAll: "سارے بٹن ری سیٹ کریں",
    help: `کسی شارٹ کٹ کو دبائیں، پھر کی بورڈ کا وہ بٹن دبائیں جو آپ چاہتے ہیں۔ ${isolate("Esc")} دبانے سے یہ ونڈو بند ہو جاتی ہے۔`,
    off: "ترتیبات میں کی بورڈ شارٹ کٹ بند ہیں، اس لیے یہ بٹن ابھی کچھ نہیں کرتے۔",
    open: "شارٹ کٹ بدلیں",
  },
  timeline: {
    position: "گانے میں پوزیشن",
  },
};
