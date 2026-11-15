/** The lesson view of *Learn Piano* in Japanese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `全${formatNumber("ja", count)}ステップ中${formatNumber("ja", step)}ステップ目`,
  leave: "レッスンをやめる",
  leaveDialog: {
    title: "このレッスンをやめますか？",
    body: "このレッスンの進み具合は、最後まで終えたときにだけ保存されます。",
    stay: "レッスンを続ける",
    leave: "やめる",
    close: "閉じる",
  },
  lacks: {
    touch: "キーボードで強弱を出せない",
    pedal: "キーボードにペダルがない",
  },
  loading: "レッスンを読み込んでいます…",
  missing: "このレッスンはありません。",
  backToCourse: "コースに戻る",
  band: {
    continue: "続ける",
    right: "せいかい！",
    tryAgain: "おしい！もう一度やってみましょう。",
  },
  demo: {
    play: "聴く",
    playAgain: "もう一度聴く",
    skip: "スキップ",
    piano: "お手本を弾いているピアノ",
    playing: "再生中",
    slow: "ゆっくり",
    side: "横からの視点",
  },
  quiz: {
    answers: "答え",
    wrong: "おしい！ほかの答えを選んでみましょう。",
    hint: "光っている答えが正解です。",
  },
  findKey: {
    piano: "ピアノ。ステップが示す鍵盤を弾きましょう。",
    marks: { next: "この鍵盤", correct: "せいかい", mistake: "これではありません" },
    wrong: "ちがう鍵盤です。もう一度弾いてみましょう。",
    hint: "光っている鍵盤が正解です。",
    timeUp: "時間切れです。",
    secondsLeft: (seconds: number) => `${seconds}秒`,
  },
  playNotes: {
    piano: "ピアノ。フレーズを順番に弾きましょう。",
    marks: { next: "次はここ", correct: "弾いた音", mistake: "これではありません" },
    wrong: "ちがう音です。もう一度弾いてみましょう。",
    hint: (note: string) => `次の音は${note}です。`,
    hintChord: (...notes: string[]) => `次は、${notes.join("・")}を一緒に弾きましょう。`,
    expression: {
      "too-loud": "鍵盤は合っていますが、強すぎます。弱く弾きましょう。",
      "too-soft": "鍵盤は合っていますが、弱すぎます。強く弾きましょう。",
      "pedal-up": "鍵盤は合っています。ペダルを踏んだまま弾きましょう。",
      "pedal-down": "鍵盤は合っています。ペダルを離してから弾きましょう。",
    },
  },
  listen: {
    question: (n: number, count: number) => `全${formatNumber("ja", count)}組中${formatNumber("ja", n)}組目`,
    playAgain: "もう一度聴く",
    group: "2つ目の音は、高い、低い、同じのどれですか？",
    answers: { higher: "高い", lower: "低い", same: "同じ" },
    wrong: "おしい！もう一度聴いて、ほかの答えを選んでみましょう。",
    hint: "光っている答えが正解です。",
    roundAgain: (right: number, asked: number) =>
      `${formatNumber("ja", asked)}問中${formatNumber("ja", right)}問せいかいでした。もう一度やってみましょう。`,
  },
  readNote: {
    staff: { treble: "ト音記号の五線にある音符", bass: "ヘ音記号の五線にある音符" },
    count: (n: number, total: number) => `全${formatNumber("ja", total)}問中${formatNumber("ja", n)}問目`,
    answers: "音名",
    letters: { C: "ド", D: "レ", E: "ミ", F: "ファ", G: "ソ", A: "ラ", B: "シ" },
    piano: "ピアノ。五線の音符を弾きましょう。",
    marks: { next: "この鍵盤", correct: "せいかい", mistake: "これではありません" },
    wrongName: "ちがう音です。もう一度よく見てみましょう。",
    wrongKey: "ちがう鍵盤です。もう一度弾いてみましょう。",
    hintName: "光っている音名が正解です。",
    hintKey: "光っている鍵盤が正解です。",
    again: "まだ少しまちがいがありました。もう一度やってみましょう。",
  },
  rhythmTap: {
    start: "スタート",
    listen: "よく聴きましょう。まず1小節カウントします。",
    tap: "さあ、クリック音のたびに、どれかの鍵盤をたたきましょう。",
    piano: "タップパッド。拍に合わせて、どれかの鍵盤をたたきましょう。",
    marks: { next: "ここをたたく", correct: "拍に合っている", mistake: "拍からずれた" },
    short: (hits: number, beats: number) =>
      `${formatNumber("ja", beats)}拍中${formatNumber("ja", hits)}拍たたけました。もう一度やってみましょう。`,
    hint: "クリック音が聞こえたら、すぐにたたきましょう。点は拍に合わせて光ります。",
    play: "さあ、クリック音ごとに1つずつ音を弾きましょう。",
    phrasePiano: "鍵盤。クリック音に合わせてフレーズを弾きましょう。",
    shortNotes: (hits: number, notes: number) =>
      `${formatNumber("ja", notes)}音中${formatNumber("ja", hits)}音がぴったりでした。もう一度やってみましょう。`,
    restSounded: "休符のところで音が鳴りました。指を上げて、そこでは音を出さないようにしましょう。",
    phraseHint: "クリック音ごとに1つずつ音を弾き、休符の前では鍵盤から指を離しましょう。点は拍に合わせて光ります。",
    pattern: {
      taps: (countIn: number, taps: number) =>
        `${formatNumber("ja", countIn)}拍カウントします。そのあと${formatNumber("ja", taps)}拍たたきます。`,
      phrase: (countIn: number, ...parts: string[]) =>
        `${formatNumber("ja", countIn)}拍カウントします。そのあと次のように弾きます：${parts.join("、")}。`,
      held: (note: string, beats: number) => `${note}を${formatNumber("ja", beats)}拍のばす`,
      rest: (beats: number) => (beats === 1 ? "休み" : `${formatNumber("ja", beats)}拍の休み`),
    },
  },
  song: {
    play: "プレーヤーで弾く",
    goal: (percent: number) => `音の${formatNumber("ja", percent)}%を正しく弾きましょう。`,
    notYet: (percent: number) =>
      `曲はいつでも待っています。好きなときにもう一度弾いて、${formatNumber("ja", percent)}%をめざしましょう。`,
    played: (percent: number) => `音の${formatNumber("ja", percent)}%を正しく弾けました。`,
  },
  recap: {
    heading: "学んだこと",
  },
  end: {
    heading: "レッスンクリア",
    stars: (n: number) => `星${formatNumber("ja", 3)}つ中${formatNumber("ja", n)}つ`,
    again: "もう一度弾く",
    saving: "進み具合を保存しています…",
    saved: "このデバイスに保存しました。",
    unsaved: "このブラウザーにはデータを保存できないため、この結果はタブを閉じるまでしか残りません。",
    failed: "進み具合を保存できませんでした。",
    retry: "もう一度",
    level: (level: number, toNext: number) =>
      `レベル${formatNumber("ja", level)}：レベル${formatNumber("ja", level + 1)}まであと${formatNumber("ja", toNext)}XP`,
    skipOpened: (world: string) => `「${world}」のレッスンがすべて開きました。`,
    skipShort: (stars: number) =>
      `星を${formatNumber("ja", stars)}つ集めると、このワールドが開きます。いつでもまた挑戦できます。`,
  },
  moment: {
    continue: "続ける",
    level: {
      heading: "レベルアップ！",
      name: (level: number) => `レベル${formatNumber("ja", level)}`,
      text: "レッスンを重ねるたびに上達します。この調子でがんばりましょう！",
    },
    badge: { heading: "新しいバッジ！" },
  },
};
