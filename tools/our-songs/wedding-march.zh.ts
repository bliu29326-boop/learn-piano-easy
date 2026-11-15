/** The guide of *Wedding March* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "门德尔松在 1842 年写了这首进行曲，它是他为莎士比亚《仲夏夜之梦》所写配乐的一部分。" +
    "1858 年，维多利亚长公主在自己的婚礼上选用了它，从此它成了婚礼上最受欢迎的曲子。" +
    "直到今天，电影里每当一对新人离开圣坛，总会响起这段音乐。",
  funFact: "已知第一场用它的婚礼是 1847 年 6 月 2 日在英格兰的蒂弗顿举行的，由管风琴师 Samuel Reay 演奏。",
  versions: {
    common: {
      tricky: {
        2: "用 4 指按住 B，数六拍。然后拇指弹升 F。",
        4: "手已经往下移了。4 指弹 F，2 指弹 D。",
      },
    },
    rare: {
      practice: [
        "只用左手弹。它每拍弹一个和弦，就像一支行进的乐队。",
        "只用右手弹前八个小节，让歌曲等你弹每个音。",
        "双手一起慢慢弹第 9～16 小节。",
        "用双手弹完整首歌，比谱上写的稍慢一点。",
        "现在用原速弹。",
      ],
      tricky: {
        1: "用 5 指按住高音 C。左手每拍都弹 A、C、F。",
        2: "左手弹 A 和 D。和弦重复时，右手按住 B。",
        4: "4 指弹 F，2 指弹 D。左手留在 B、D、G 上。",
      },
    },
    epic: {},
    legendary: {},
  },
};
