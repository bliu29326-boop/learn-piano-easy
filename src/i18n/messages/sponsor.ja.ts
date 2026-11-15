/** The sponsor page in Japanese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { sponsorPage as en } from "./sponsor.en";

export const sponsorPage: Translation<typeof en> = {
  lead: "Learn Piano Easyは無料で、これからもずっと無料です。毎日に少しでも音楽が増えたなら、成長を応援してもらえるとうれしいです。",
  action: "GitHubで応援する",
  note: "金額はいくらでも大丈夫です。1回だけでも、毎月でも。",
  promises: ["広告なし", "アカウント不要", "オフラインで使える", "オープンソース（MITライセンス）"],
  picture: "大きなハートと、そのまわりにふわふわ浮かぶ2つの音符",
  who: {
    heading: "作っている人",
    text: [
      "Learn Piano Easyは、1人が空いた時間に作っています。仕事と暮らしと音階練習の合間に。",
      "品質チェック担当は、ときどき鍵盤の上を歩く猫です。",
    ],
  },
  spend: {
    heading: "応援の使いみち",
    items: [
      { title: "時間", text: "新しいレッスンと新しい曲を作り、バグを減らすための夜の時間に。" },
      { title: "ドメイン", text: "サイトが同じアドレスのままで、いつでも見つけられるように。" },
      { title: "コーヒー", text: "1分間に約120拍の安定したテンポで、ソースコードに変わります。" },
    ],
  },
  help: {
    heading: "ほかの応援のしかた",
    lead: "お金は応援の方法の1つです。こちらも同じくらい力になります：",
    star: {
      text: "GitHubでプロジェクトにスターをつけると、ほかの学習者が見つけやすくなります。",
      action: "GitHubでスターをつける",
    },
    bug: { text: "何かおかしな音がしたら、バグを報告してもらえるとうれしいです。", action: "バグを報告" },
    friend: "ずっとピアノを習いたかった友だちに、このサイトを教えてあげましょう。",
  },
  thanks: "弾いてくれてありがとうございます。このサイトがあるのは、弾いてくれる人がいるからです。",
};
