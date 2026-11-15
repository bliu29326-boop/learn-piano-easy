/** The guide of *Haul Away Joe* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "《Haul Away Joe》是一首拉绳子时唱的短小水手号子。" +
    "R. R. Terry 在 1921 年把它作为拉前帆脚索时唱的水手号子刊印出来。",
  funFact: "Terry 刊印的版本里有一段歌词，讲的是在大革命中掉了脑袋的法国国王路易。",
  versions: {
    common: {
      practice: [
        "只用右手弹第 1～4 小节，让歌曲等你弹每个音。",
        "只用右手弹第 5～8 小节，副歌在这里落到低音 D。",
        "现在只用左手弹。它按住两个琴键，每小节最多换两次。",
        "双手一起慢慢弹前八个小节。",
        "双手合奏，用原速弹完整首歌。",
      ],
      tricky: {
        2: "5 指弹三次 C。然后 3 指弹 A，2 指在 G 的上方等着。",
      },
    },
    rare: {
      practice: [
        "只用左手弹：一个长的低音，然后一个短的和弦。",
        "只用右手弹前八个小节，让歌曲等你弹每个音。",
        "双手一起慢慢弹前八个小节。",
        "用双手弹完整首歌，比谱上写的稍慢一点。",
        "现在用原速弹。",
      ],
      tips: [
        "左手每半小节有一个长音和一个短和弦。感受拉绳的那股劲：长、短。",
        "1 指和 5 指同时按下六度。然后 5 指留在上方音上。",
        "最后同时弹 D 和 F。用 1 指和 3 指一起按下。",
      ],
      tricky: {
        5: "1 指和 5 指张开放在 F 和 D 上弹六度。然后 5 指单独再弹一次 D。",
      },
    },
    epic: {},
    legendary: {},
  },
};
