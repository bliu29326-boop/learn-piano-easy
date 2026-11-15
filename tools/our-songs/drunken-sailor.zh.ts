/** The guide of *Drunken Sailor* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "《Drunken Sailor》是一首水手号子，船员们拉缆绳或转绞盘时会唱它。" +
    "没人知道它是谁写的，它的旋律用的是多利亚调式。",
  funFact: "关于这首水手号子最早的文字记载，来自 1839 年一次从康涅狄格州新伦敦出发的捕鲸航行。",
  versions: {
    common: {
      tips: [
        "每半小节都是长、短、短。像水手在甲板上跺脚一样弹出来。",
        "5 指弹 A，然后拇指往下够到 D。手留在原地不动。",
        "第 5 小节最后一个 A 用 2 指弹。这样 3、4、5 指就准备好弹 B、C、D 了。",
      ],
      tricky: {
        3: "4 指弹六次 G：长、短、短，长、短、短。短音弹得轻一些。",
        7: "5 指从 D 往下移到 C。然后 4、3、2 指往下走，弹 A、G、E。",
      },
    },
    rare: {
      practice: [
        "只用左手弹：先弹一个低音，下一拍再弹两个音。",
        "只用右手弹前八个小节，让歌曲等你弹每个音。",
        "双手一起慢慢弹第 9～16 小节。",
        "用双手弹完整首歌，比谱上写的稍慢一点。",
        "现在按原速弹。",
      ],
      tricky: {
        3: "4 指弹六次 G，同时左手先弹 C，再弹 G。两只手都要弹得均匀。",
        7: "弹完长音 D 后，5 指往下移到 C。左手先弹 C，再弹 F 和 A，然后弹 C 和 G。",
      },
    },
    epic: {},
    legendary: {},
  },
};
