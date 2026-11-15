/** The player's bar in Japanese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "再生／一時停止",
    stop: "停止して最初に戻る",
    seekBack: "5秒戻る",
    seekForward: "5秒進む",
    toStart: "最初に戻る",
    faster: "速く",
    slower: "遅く",
    transposeUp: "上へ移調",
    transposeDown: "下へ移調",
    loop: "選んだ小節のループ、曲全体のループ、オフを切り替え",
    loopStart: "この小節からループ",
    loopEnd: "この小節までループ",
    zoomIn: "ズームイン",
    zoomOut: "ズームアウト",
    fit: "曲全体を表示",
    viewLeft: "表示を左へ",
    viewRight: "表示を右へ",
    fullscreen: "全画面表示",
  },
  controls: {
    play: "再生",
    pause: "一時停止",
    stop: "停止",
    speed: "速さ",
    speedPercent: (n) => `${formatNumber("ja", n)}%`,
    transpose: "移調",
    loop: "ループ",
    repeatAll: "全体をリピート",
    loopTitles: {
      off: "設定で選んだ小節をループ再生",
      measures: "代わりに曲全体をくり返す",
      song: "くり返しをやめる",
    },
    more: "ほかのツール",
    zoom: "ズーム",
    fit: "全体表示",
    view: "表示",
    leaveFullScreen: "全画面表示を終了",
    expert: "エキスパート",
    expertTitles: {
      off: "すべてのツールを表示",
      on: "主なツールだけを表示",
    },
  },
  hotkeys: {
    none: "なし",
  },
  hotkeyDialog: {
    pressKey: "キーを押してください…",
    keyFor: (label) => `「${label}」のキー`,
    clear: "解除",
    clearTitle: (label) => `「${label}」のキーを解除`,
    resetAll: "すべてのキーをリセット",
    help: "キーの欄を押してから、使いたいキーを押します。Escキーでこのダイアログを閉じます。",
    off: "ショートカットキーは設定でオフになっているため、今はこれらのキーを押しても何も起きません。",
    open: "ショートカットキーを変更",
  },
  timeline: {
    position: "曲の再生位置",
  },
};
