/** The Japanese catalog. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.ja";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.ja";
import { learnLesson } from "./learn-lesson.ja";
import { learnMap } from "./learn-map.ja";
import { learnProfile } from "./learn-profile.ja";
import { learnSetup } from "./learn-setup.ja";
import { playerBar } from "./player-bar.ja";
import { playerInput } from "./player-input.ja";
import { playerLibrary } from "./player-library.ja";
import { playerSettings } from "./player-settings.ja";
import { playerShell } from "./player-shell.ja";
import { playModes } from "./play-modes.ja";
import { sponsorPage } from "./sponsor.ja";

const SITE_NAME = en.siteName;

export const ja: Translation<Messages> = {
  noscript: `${SITE_NAME}を使うには、JavaScriptが必要です。`,
  pages: {
    home: {
      description: "弾きながら、ピアノを学べます。レッスンコース、3Dピアノ、そしてMIDIキーボード。無料、オープンソースで、オフラインでも使えます。",
    },
    play: {
      title: "気軽にピアノ",
      description: "MIDIファイルを開くと、音符が3Dピアノへ飛んできます。MIDIキーボードで一緒に弾きましょう。",
    },
    modes: {
      title: "演奏モード",
      description: "すぐに始められる弾き方です。点数と火花が飛ぶゲームや、すべての音に名前がついて弾くまで待ってくれる曲があります。",
    },
    learn: {
      title: "ピアノを学ぶ",
      description: "ゲームのように進むピアノのレッスンコースです。小さな一歩ずつ進めます。",
    },
    profile: {
      title: "進み具合",
      description: "レベル、バッジ、そしてこれまでに弾いた時間です。",
    },
    about: {
      title: "このサイトについて",
      description: "Learn Piano Easyの紹介と、収録しているすべての素材のライセンスです。",
    },
    data: {
      title: "データ",
      description: "このブラウザーにあるすべてを1つのファイルに保存して、どのデバイスでも元に戻せます。",
    },
    sponsor: {
      title: "応援する",
      description: "Learn Piano Easyは無料で、1人で作っています。成長を応援する方法をご紹介します。",
    },
    imprint: {
      title: "運営者情報",
      description: "Learn Piano Easyの運営者と、その住所・連絡先です。",
    },
    privacy: {
      title: "プライバシーポリシー",
      description: "Learn Piano Easyがデバイスに保存するもの、数えるもの、そしてその計測を止める方法です。",
    },
    design: {
      title: "デザインシステム",
      description: "サイトのすべてのコンポーネントを、すべての状態で表示します。",
    },
    lesson: {
      title: "レッスン",
      description: "ピアノを学ぶコースの、短いレッスンです。1ステップずつ進みます。",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) => `${title}。「${world}」の無料ピアノレッスンです。${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}、ホーム`,
    nav: "メイン",
    learn: "ピアノを学ぶ",
    play: "気軽にピアノ",
    modes: "演奏モード",
    github: "GitHubのソースコード",
    menu: "メニュー",
    language: "言語",
    theme: "テーマ",
    themeSystem: "システムに合わせる",
    themeLight: "ライト",
    themeDark: "ダーク",
  },
  landing: {
    hero: {
      eyebrow: "無料・オープンソース",
      lead: "音符が鍵盤に落ちてくるのを見たら、自分で弾いてみましょう。1曲ずつ。",
      start: "学びはじめる",
      play: "気軽に弾く",
      proofs: ["アカウント不要", "オフラインで使える", "広告なし"],
      mascot: "わたしたちのピアノの先生。はちみつ色の毛のサルが、日の差す部屋でアップライトピアノを弾いています",
      greeting: "こんにちは！ピアノの先生です。一緒に弾いてみましょう！",
      demo: {
        eyebrow: "ここで試せます",
        heading: "音符が落ちてきたら、弾く",
        text: "どの曲もこんなふうに見えます。音符がそれぞれの鍵盤に落ちてきて、着いた瞬間にその鍵盤を弾きます。",
      },
      piano: "プレーヤー。「きらきら星」の音符が鍵盤に落ちてきます",
      hint: "再生が始まったら、鍵盤を弾いて一緒に演奏しましょう。",
      playSong: "再生",
      stopSong: "停止",
    },
    twoWays: {
      eyebrow: "2つの楽しみ方",
      heading: "1歩ずつ学ぶか、気軽に弾くか",
      lead: "その日の気分に合わせて選びましょう。いつでも切り替えられます。",
      learn: {
        tag: "レッスンコース",
        title: "ピアノを学ぶ",
        text: "小さなステップでできたレッスンコースです。ステップごとに1つの技を学び、曲で使ってみます。",
        action: "学びはじめる",
        picture: "コースマップ。最初のレッスンがクリア済みで、次のレッスンが開いています",
      },
      play: {
        tag: "どんな曲でも",
        title: "気軽にピアノ",
        text: "好きな曲を開くと、音符が3Dピアノへ飛んできます。一緒に弾きましょう。",
        action: "気軽に弾く",
        picture: "3Dピアノ。音符が鍵盤に落ちてきます",
      },
    },
    howItWorks: {
      eyebrow: "学び方",
      heading: "4つのステップを、くり返し",
      lead: "どのレッスンも同じ短い流れなので、次に何をするかがいつもわかります。",
      steps: [
        { title: "技を学ぶ", text: "短いレッスンで、音、リズム、手の位置など、新しいことを1つ学びます。" },
        { title: "練習する", text: "自分の鍵盤で弾いてみましょう。ピアノは弾くまで待ってくれて、正しく弾けた音に印をつけます。" },
        { title: "本物の曲を弾く", text: "曲ライブラリーの曲で、その技を使ってみましょう。レベルは自分に合わせて選べます。" },
        { title: "バッジを集める", text: "レッスンごとにXPがもらえ、ワールドをクリアするとバッジがもらえます。" },
      ],
    },
    rarities: {
      eyebrow: "1つのメロディー、4つのレベル",
      heading: "曲も一緒にレベルアップ",
      lead: "このサイトの曲には、どれも4つのバージョンがあります。切り替えて、「喜びの歌」が育っていく様子を見てみましょう。",
      control: "バージョン",
      piano: "「喜びの歌」を弾くピアノ",
      names: { common: "入門", rare: "やさしい", epic: "ふつう", legendary: "むずかしい" },
      taglines: {
        common: "はじめの数日に。手の位置は1つ、ゆっくりした音、そして待ってくれる低音。",
        rare: "はじめの数週間に。8分音符、かんたんな和音、そして動く低音。",
        epic: "はじめの数か月に。分散和音と、指くぐり。",
        legendary: "1年ほどたったら。両手が忙しく、速く、別々に動きます。",
      },
    },
    devices: {
      eyebrow: "手元にあるもので弾こう",
      heading: "ピアノがなくても、始められます",
      lead: "どれでも音を鳴らせます。本物の鍵盤がいちばん弾きやすく、ほかのものなら今日から始められます。",
      ways: [
        { title: "MIDIキーボード", text: "USBでつないで、一度だけMIDIを許可します。それからは、サイトが自動で見つけます。" },
        { title: "タッチスクリーン", text: "画面の鍵盤を押します。何本の指で弾いてもかまいません。" },
        { title: "パソコンのキーボード", text: "文字キーと数字キーで2オクターブ弾けます。どの音も、ほかのキーに割り当てられます。" },
      ],
      piano: "試せる小さなピアノ",
      start: "小さなピアノを読み込んで弾く",
      hint: "鍵盤にふれると、音が鳴ります。",
    },
    free: {
      eyebrow: "無料で、自由に",
      heading: "お金も登録もいりません",
      lead: "このサイトは、ピアノが大好きな人からの贈り物です。これからもずっと無料です。",
      promises: [
        { title: "無料、アカウント不要", text: "サイトを開けば、すぐに弾けます。登録も購入もありません。" },
        { title: "オープンソース", text: "すべてのコードがMITライセンスで公開されています。読むのも、変えるのも、共有するのも自由です。" },
        { title: "オフラインで使える", text: "一度読み込めば、ネットワークなしで動きます。開いたことのある曲も、オフラインで再生できます。" },
        {
          title: "広告なし、プロファイリングなし",
          text: "弾いた内容がデバイスの外に出ることはありません。数えるのはページの訪問数だけで、クッキーは使わず、何も売りません。",
        },
      ],
    },
    questions: {
      eyebrow: "よくある質問",
      heading: "最初によく聞かれること",
      items: [
        {
          question: "ピアノは必要ですか？",
          answer: "いいえ。MIDIキーボードがいちばんですが、タッチスクリーンやパソコンのキーボードでも、すべての音を弾けます。",
        },
        {
          question: "どのブラウザーで使えますか？",
          answer: "最新のブラウザーなら、どれでも再生できます。MIDIキーボードにはWeb MIDIが必要です。Chrome、Edge、Firefoxは対応していますが、Safariは対応していません。",
        },
        {
          question: "アカウントは必要ですか？",
          answer: "いいえ。登録するものは何もなく、設定はこのブラウザーに保存されます。",
        },
        {
          question: "オフラインで使えますか？",
          answer: "はい。オンラインのときに一度サイトを開けば、それ以降はオフラインで動きます。曲は一度開けば、オフラインでも再生できます。",
        },
        {
          question: "自分の曲を弾けますか？",
          answer: "はい。気軽にピアノで、MIDIやMusicXMLのファイルを開けます。ファイルはデバイスの中で読み込まれ、アップロードされることはありません。",
        },
        {
          question: "曲ライブラリーには、どんな曲がありますか？",
          answer: "よく知られたメロディーを独自に編曲した曲（それぞれ4つのバージョン）、いくつかのオリジナル曲、そして公開されている曲集のクラシック曲です。",
        },
        {
          question: "本当に無料ですか？",
          answer: "はい。MITライセンスのオープンソースで、広告も有料プランもありません。",
        },
      ],
    },
    lastCall: {
      heading: "いつでも始められます",
      lead: "入り口を選びましょう。いつでも切り替えられます。",
    },
  },
  footer: {
    tagline: "弾きながら、ピアノを学ぼう。無料、オープンソース、オフライン対応。",
    nav: "サイト",
    explore: "ページ",
    about: "このサイトとライセンス",
    legal: "法的情報",
    language: "このページを別の言語で",
    license: "MITライセンスのオープンソースです。",
  },
  counts: {
    badges: (n: number) => `バッジ${formatNumber("ja", n)}個`,
    minutesPlayed: (n: number) => `演奏時間${formatNumber("ja", n)}分`,
    xp: (n: number) => `${formatNumber("ja", n)}XP`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  setup: learnSetup,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl: "このブラウザーでは、ピアノを表示できません。ブラウザーの設定でハードウェアアクセラレーションをオンにするか、MIDIキーボードやパソコンのキーボードで弾きましょう。",
    },
  },
};
