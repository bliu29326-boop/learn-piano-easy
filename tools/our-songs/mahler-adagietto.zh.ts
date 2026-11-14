/** The guide of *Adagietto* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "《小柔板》是马勒《第五交响曲》缓慢的第四乐章，1904 年在科隆首演。" +
    "1971 年，卢基诺·维斯康蒂的电影《魂断威尼斯》让它闻名于音乐厅之外。",
  funFact: "自从那部电影以后，它成了马勒所有作品中最有名的音乐。",
  versions: {
    common: {
      practice: [
        "只用右手弹前四个小节，让歌曲等你弹每个音。",
        "只用右手弹第 5～8 小节。第 5 小节有一个 B，第 6、7 小节有一个升 F。",
        "现在只用左手弹。每个音按住半个小节或一整个小节。",
        "双手一起慢慢弹前八个小节。",
        "双手合奏，用原速弹完整首歌。",
      ],
      tricky: {
        4: "第一个 C 用 5 指弹，然后用 4 指再弹一次。接着 5 指弹 D。",
        5: "B 是白键，它后面的降 B 是黑键。用 3 指和 2 指弹它们。",
      },
    },
    rare: {
      practice: [
        "只用左手弹。一个低音落在拍点上，一个和弦回应它。",
        "只用右手弹前八个小节，让歌曲等你弹每个音。",
        "双手一起慢慢弹前八个小节。",
        "用双手弹完整首歌，比谱上写的稍慢一点。",
        "现在用原速弹。",
      ],
      tricky: {
        5: "B 是白键，它后面的降 B 是黑键。左手一开始只弹 G 和 D。",
        7: "拇指先弹升 F，最后弹 F。左手在小节中间从降 B 移到 C。",
      },
    },
    epic: {
      tricky: {
        18: "弹六度时，拇指从 C 落到 A。然后往上移到 F，弹单音。",
      },
    },
    legendary: {
    },
  },
};
