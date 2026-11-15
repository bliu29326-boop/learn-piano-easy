/** The player's shell in Japanese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12.50`. */
const seconds = (n: number) => formatNumber("ja", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `6.6`. */
const tenths = (n: number) => formatNumber("ja", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
const files = (n: number) => `ファイル${formatNumber("ja", n)}個`;

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "閉じる",
    hotkeys: "ショートカットキー",
    keyBindings: "パソコンのキーボードのキー",
    pdf: "PDFとして保存",
    offlineFiles: "オフライン用ファイル",
    tracks: "トラック",
    songs: "曲",
    guide: (title) => `「${title}」の練習ガイド`,
    about: "Learn Piano Easyについて",
  },
  toast: {
    dismiss: "閉じる",
  },
  topbar: {
    songs: "曲",
    tracks: "トラック",
    guide: "練習ガイド",
    settings: "設定",
    about: "概要",
    openSong: "開いている曲",
    demoSong: "デモ曲",
    songFallback: "曲",
  },
  songs: {
    noneFound: "曲のファイルが見つかりませんでした。",
    wrongKind: "追加できるのは、MIDIファイルとMusicXMLファイルだけです。",
    added: (n) => `${formatNumber("ja", n)}曲を「自分の曲」に追加しました。`,
    notKept: (reason) => `曲を保存できませんでした：${reason}`,
    soundsFailed: "ピアノの音を読み込めなかったため、曲は音なしで再生されます。",
  },
  guide: {
    step: (n, summary) => `ステップ${formatNumber("ja", n)}：${summary}。`,
    barLoops: (bar) => `第${formatNumber("ja", bar)}小節をループ再生します。`,
    topBeaten: (title) => `この曲の最後のステップ「${title}」をクリアしました。お見事です！`,
    beaten: (title, next) => `「${title}」をクリアしました！次は「${next}」です。`,
    playNext: (next) => `「${next}」を弾く`,
  },
  lesson: {
    label: "レッスン",
    target: (percent) => `採点つきの演奏で、音の${formatNumber("ja", percent)}%を正しく弾きましょう。`,
    back: "レッスンに戻る",
    missing: "このレッスンの曲が、曲ライブラリーにありません。",
  },
  finger: {
    label: "選んだ音",
    setByYou: "自分で設定",
    fromGuide: "練習ガイドから",
    suggested: "おすすめ",
    none: "指の指定なし",
    finger: (finger, source) => `${finger}の指、${source}`,
    line: (note, said) => `${note}：${said}。1～5を押すと設定、0で解除、Escキーで終了します。`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file}は、このブラウザーで再生できる音声ではありません。`,
    playsAlong: (file) => `${file}が曲と一緒に再生されます。`,
  },
  about: {
    license: "ライセンス",
    notices: "サードパーティーの表記",
    packageLicense: (name) => `${name}のライセンス`,
    offline: "このテキストは、まだオフラインでは読めません。",
    intro: "Learn Piano Easyは、ピアノを学ぶための無料のオープンソースアプリです。レッスンコースのほか、手持ちのMIDIファイルでも練習できます。ブラウザーの中で、オフラインで動きます。",
    build: (version) => `ビルド${version}`,
  },
  cache: {
    groups: {
      site: { label: "ウェブサイト", description: "サイトそのものです。ページ、コード、スタイル、画像が入っています。どのページをオフラインで開くにも必要です。" },
      player: { label: "気軽にピアノ", description: "3Dピアノ、プレーヤー、曲リストです。ピアノを学ぶのレッスンでも使われます。" },
      learn: { label: "ピアノを学ぶ", description: "レッスンコースです。ワールド、レッスン、プロフィールが入っています。" },
      songs: { label: "曲", description: "アプリに入っているすべての曲です。どの曲もオフラインで開けます。" },
      sounds: { label: "ピアノの音", description: "すべての音源セットです。どのセットを選んでも、オフラインでピアノが鳴ります。" },
    },
    bytes: (n) => `${formatNumber("ja", n, { useGrouping: false })}バイト`,
    kilobytes: (n) => `${tenths(n)} KB`,
    megabytes: (n) => `${tenths(n)} MB`,
    groupsFailed: (n, labels) => `${labels}の${files(n)}を、オフライン用に保存できませんでした。`,
    updated: (labels) => `更新しました。${labels}を、オフライン用にもう一度保存しました。`,
    unavailable: "このブラウザーは、このページのオフライン用ファイルを保存しません。",
    reading: "保存済みの内容を読み込み中…",
    unreadable: "オフライン用ファイルの一覧を読み込めませんでした。ページを再読み込みして、もう一度試してください。",
    intro: "保存したファイルは、ネットワークがなくても使えます。それぞれの部分を、個別に保存したり削除したりできます。",
    allSaved: "すべて保存済み",
    noneSaved: "未保存",
    someSaved: (count, total) => `${files(total)}中${formatNumber("ja", count)}個を保存済み`,
    status: (size, total, state) => `${size}、${files(total)}、${state}。`,
    saving: (done, total) => `${files(total)}中${formatNumber("ja", done)}個を保存中…`,
    savingGroup: (label) => `${label}を保存中`,
    failed: (n) => `${files(n)}を保存できませんでした。`,
    partOffline: "保存できませんでした。接続を確認して、もう一度試してください。",
    partStale: "サイトの新しいバージョンが出ています。ページを再読み込みしてから、もう一度保存してください。",
    save: "保存",
    saveAgain: "もう一度保存",
    remove: "削除",
    saveGroup: (label) => `${label}を保存`,
    removeGroup: (label) => `${label}を削除`,
    keep: "更新のたびに保存したままにする",
  },
  update: {
    ready: "新しいバージョンを使えます。",
    reload: "再読み込み",
  },
  download: {
    loading: (label) => `${label}を読み込み中`,
    amount: (done, total) => `${tenths(done)} / ${tenths(total)} MB`,
    sounds: "ピアノの音を読み込み中",
    newest: "最新バージョンを取得中",
    offline: (label) => `${label}は、初めて開くときにインターネット接続が必要です。接続してから、もう一度試してください。`,
    failed: (label) => `${label}を読み込めませんでした。しばらくしてから、もう一度試してください。`,
    retry: "再試行",
  },
  scene: {
    piano: "ピアノ",
    pianoRange: (range) => `ピアノ、${range}`,
    startKeys: (keys) => `、最初の鍵盤：${keys}`,
    chord: (chord) => `、コード：${chord}`,
  },
  demo: {
    /** Each "|" parts one sung syllable, and no space stands between them, since Japanese sets none. */
    lyrics: [
      "お|ち|る|光|を|見|つ|め|よ|う",
      "光|に|あ|わ|せ|て|弾|い|て|み|よ|う",
      "は|じ|め|は|ゆっ|く|り|だ|ん|だ|ん|速|く",
      "や|が|て|手|が|道|を|お|ぼ|え|る",
    ],
    part: (n) => `パート${formatNumber("ja", n)}`,
    leftHand: "左手",
    rightHand: "右手",
  },
  chords: {
    root: "根音",
    /** A chord tone, such as `♭3`, written as an interval, such as `♭3度`. */
    ordinal: (tone) => `${tone}度`,
  },
  overlays: {
    fps: "1秒あたりのフレーム数",
    tempo: "テンポ",
    bpmValue: (n) => `${formatNumber("ja", n, { useGrouping: false })} BPM`,
    fpsValue: (n) => `${formatNumber("ja", n, { useGrouping: false })} FPS`,
    fpsNone: "– FPS",
    track: (track, channel) => `トラック${track}、チャンネル${channel}`,
    velocity: (velocity) => `ベロシティ${velocity}`,
    timing: (start, length) => `開始${seconds(start)}秒、長さ${seconds(length)}秒`,
  },
  sheet: {
    label: "楽譜",
    empty: "楽譜に表示されているトラックがありません。「トラック」で1つオンにしましょう。",
  },
};
