/** The guide of *The Sorcerer's Apprentice* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "杜卡在 1897 年完成了这首交响诗《魔法师的学徒》，同年出版。" +
    "它取材于歌德 1797 年的同名诗作。" +
    "在华特·迪士尼的电影《幻想曲》（1940 年）里，米老鼠扮演了那个学徒。",
  funFact: "杜卡给它加了副标题：“根据歌德叙事诗而作的谐谑曲”。它是杜卡被演奏和录制次数最多的作品，远远超过他的其他作品。",
  versions: {
    common: {
      practice: [
        "只用右手弹前三个小节，让歌曲等你弹每个音。",
        "只用右手弹第 4～10 小节。手停在同一个位置。",
        "现在只用左手弹。每小节按住一个或两个低音。",
        "双手一起弹前十个小节。",
        "双手合奏，用原速弹完整首歌。",
      ],
      tricky: {
        7: "2 指弹完升 G 后，4 指弹 A。左手从 E 回到 A 和 E。",
        10: "和第 7 小节一样，升 G 之后 4 指弹 A。然后 5 指往上够到 C。",
      },
    },
    rare: {
      tricky: {
        7: "升 G 之后 4 指弹 A。左手从 E 和弦落回 A。",
        10: "旋律在这里结束。4 指弹 A，左手回到 A。",
      },
    },
    legendary: {
      tricky: {
        6: "右手手指往下走 G、F、E，每个音都要短。左手往上跳到它的和弦。",
      },
    },
  },
};
