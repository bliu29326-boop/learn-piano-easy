/** The player's settings panel in Japanese. A text it leaves out shows in English. */
import type { Mode } from "../../theory/key";
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerSettings as en } from "./player-settings.en";
import { playerSettingsLook } from "./player-settings-look.ja";
import { playerSettingsPlay } from "./player-settings-play.ja";

/** The Japanese letter of each tonic letter, as a key's name takes it. */
const LETTERS: Record<string, string> = { C: "ハ", D: "ニ", E: "ホ", F: "ヘ", G: "ト", A: "イ", B: "ロ" };

/** A key's Japanese name, such as 嬰ヘ短調 for `F♯` minor. A tonic that is not a letter stays as given. */
function keyName(tonic: string, mode: Mode): string {
  const parts = /^([A-G])([♯#♭b]?)$/.exec(`${tonic}`);
  const accidental = parts?.[2] === "" ? "" : parts?.[2] === "♯" || parts?.[2] === "#" ? "嬰" : "変";
  const name = parts === null ? tonic : `${accidental}${LETTERS[parts[1]!]}`;
  return `${name}${{ major: "長調", minor: "短調" }[mode] ?? mode}`;
}

export const playerSettings: Translation<typeof en> = {
  panel: {
    title: "設定",
    close: "設定を閉じる",
    search: "設定を検索",
    clearSearch: "検索をクリア",
    sections: "設定のセクション",
    found: (count) => `${count}件の設定が見つかりました`,
    emptyTitle: "見つかりませんでした",
    empty: (query) => `「${query}」に合う設定はありません。別の言葉で探してみましょう。`,
    showAll: "すべての設定を表示",
    changed: (count) => `${count}件変更`,
    changedTotal: (count) => (count === 0 ? "すべての設定が初期値です。" : `${count}件の設定を変更しました`),
    reset: (label) => `「${label}」を初期値に戻す`,
    resetAll: "すべて初期値に戻す",
    confirmResetAll: "すべての設定を初期値に戻しますか？変更した内容は失われます。",
  },
  groups: {
    basics: "基本",
    audio: "オーディオ",
    instrument: "手元の楽器",
    scene: "シーン",
    reading: "読譜サポート",
    app: "アプリ",
  },
  sections: {
    general: "一般",
    loop: "ループ",
    audio: "サウンド",
    backing: "伴奏トラック",
    view: "表示",
    keyboard: "手元の鍵盤",
    input: "入力",
    piano: "ピアノ",
    notes: "音符",
    lanes: "レーンと線",
    particles: "パーティクル",
    labels: "ラベル",
    lyrics: "歌詞",
    coding: "色分け",
    sheet: "楽譜",
    pdf: "PDFエクスポート",
    offline: "オフライン",
  },
  about: {
    general: "プレーヤーの始まり方、曲の進み方、タイムラインに表示する内容を決めます。",
    loop: "弾けるようになるまで、同じ部分をくり返します。",
    audio: "音量、ピアノの音色、メトロノーム、イコライザーの設定です。",
    backing: "曲に合わせて流れる、自分で用意した音声ファイルです。",
    view: "カメラ、光、そして曲の先をどこまで表示するかの設定です。",
    keyboard: "手元の鍵盤の音域です。画面のピアノをそれに合わせます。",
    input: "弾き方の設定です。モード、使うデバイス、プレーヤーが確かめる内容を選びます。",
    piano: "画面のピアノの鍵盤、色、効果の設定です。",
    notes: "落ちてくる音符の形と光の設定です。",
    lanes: "音符の後ろにあるレーンと、その上の線や印の設定です。",
    particles: "音符が鍵盤に届くところに出る、炎、火花、カスタムパーティクルの設定です。",
    labels: "音符と鍵盤の上の音名と、曲のコードの設定です。",
    lyrics: "曲の歌詞です。シーンの上に1行ずつ表示します。",
    coding: "音の高さごと、または指ごとに色を分けます。",
    sheet: "曲を楽譜で表示します。落ちてくる音符の横に、またはその代わりに表示します。",
    pdf: "落ちてくる音符を、印刷できるページとして保存します。",
    offline: "ネットワークがなくても弾けるように、アプリが保存しておく内容です。",
  },
  subheadings: {
    generalApp: "アプリとデータ",
    generalSong: "曲",
    generalReadouts: "表示とタイムライン",
    audioVolume: "音量とタッチ",
    audioRoom: "リバーブと調律",
    audioEnvelope: "エンベロープ",
    audioMetronome: "メトロノーム",
    audioEqualizer: "イコライザー",
    audioTiming: "タイミング",
    inputMode: "モード",
    inputDevices: "デバイスとキー",
    inputAlong: "一緒に弾く",
    inputScore: "スコアとゲーム",
    pianoPressed: "押さえた鍵盤",
    pianoLook: "色と大きさ",
    pianoFlare: "フレア",
    pianoWave: "波線",
    lanesColours: "レーンの色",
    lanesLines: "小節線と拍の線",
    lanesHeld: "押さえている鍵盤",
    lanesMarkers: "マーカーとペダル",
    particlesEffects: "エフェクト",
    particlesLook: "カスタムパーティクル：見た目",
    particlesLife: "カスタムパーティクル：数と寿命",
    particlesMotion: "カスタムパーティクル：動き",
    particlesWander: "カスタムパーティクル：ただよいと揺れ",
    particlesStart: "カスタムパーティクル：出る位置",
    labelsNotes: "音符の上",
    labelsPiano: "ピアノの上",
    labelsChords: "コード",
    codingPitch: "音の高さで",
    codingFinger: "指で",
    sheetLayout: "レイアウト",
    sheetNotation: "記譜",
    sheetCursor: "カーソルと色",
  },
  settings: { ...playerSettingsPlay, ...playerSettingsLook },
  range: {
    label: "鍵盤の数",
    keys: (count) => `${formatNumber("ja", count)}鍵`,
    custom: "カスタム",
    summary: (keys, first, last) => `${keys}、${first}～${last}`,
    octaveDown: "− オクターブ",
    octaveDownName: "1オクターブ下げる",
    octaveUp: "オクターブ +",
    octaveUpName: "1オクターブ上げる",
  },
  key: (tonic, mode) => keyName(tonic, mode),
};
