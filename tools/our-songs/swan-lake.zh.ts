/** The guide of *Swan Lake* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "柴可夫斯基在 1875 年和 1876 年为芭蕾舞剧《天鹅湖》写了音乐，莫斯科大剧院芭蕾舞团在 1877 年首演了它。" +
    "这个主题是第二幕里双簧管奏出的旋律。" +
    "电影《黑天鹅》（2010 年）里有几段取自《天鹅湖》的片段。",
  funFact: "1875 年 5 月，Vladimir Begichev 委托柴可夫斯基创作这部配乐，柴可夫斯基为此拿到了 800 卢布的酬金。",
  versions: {
    common: {
      tips: [
        "按住第一个 E，同时数到四。然后四个短音从 A 往上走到 D。",
        "这是一段忧伤而骄傲的旋律。让每个长长的高音都歌唱起来。",
        "这个小节用 2 指弹 A，这样拇指就能往下够到 F。",
      ],
      tricky: {
        3: "这里用 2 指弹 A。然后拇指往下够到 F，3 指弹 C。",
        7: "和第 3 小节一样，2 指弹 A，拇指往下够到 F。",
      },
    },
    rare: {
      practice: [
        "只用左手弹。在拍点上先弹一个低音，再用一个双音和弦回应它。",
        "只用右手弹前八个小节，让歌曲等你弹每个音。",
        "双手一起慢慢弹前八个小节。",
        "用双手弹完整首歌，比谱上写的稍慢一点。",
        "现在用原速弹。",
      ],
    },
  },
};
