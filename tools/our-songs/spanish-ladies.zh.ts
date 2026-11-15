/** The guide of *Spanish Ladies* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "《Spanish Ladies》是一首传统的水手歌曲，唱的是一群船员从西班牙驶回英格兰。" +
    "一份 1769 年的版本保存在一本航海日志里，流传至今。",
  funFact: "在 1975 年的电影《大白鲨》里，鲨鱼猎人昆特唱的是这首歌的捕鲸人版本。",
  versions: {
    common: {
      tips: [
        "开始时把拇指放在低音 B 上。然后 3 指弹 E。",
        "第二个 B 稍早一点松开。趁这个空隙把拇指往上移到 E。",
        "每个小节数三个慢拍，像一艘船在波浪上摇晃。",
      ],
      tricky: {
        6: "现在拇指弹两次 E，2 指弹升 F。手已经往上移到了 E。",
      },
    },
    rare: {
      tricky: {
        6: "现在拇指弹两次 E，2 指弹升 F。左手先弹一个低音 E，再弹两次 B。",
      },
    },
    epic: {
      tricky: {
        22: "5 指在上面弹两次 E，下面的音从 G 移到 B。然后拇指够到 A。",
        26: "弹完 B 大三和弦把双手抬起，一起落到最后的 E 小三和弦上。",
      },
    },
    legendary: {
      tricky: {
        21: "整个小节拇指都留在 G 上。只有最高音在动，从 E 到 D 再到 B。",
        26: "趁第 25 小节短短的休止符把双手抬起。然后落到最后一个和弦上，下面是低音 E 的八度。",
      },
    },
  },
};
