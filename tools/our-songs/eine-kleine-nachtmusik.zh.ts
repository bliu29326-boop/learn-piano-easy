/** The guide of *Eine kleine Nachtmusik* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "1787 年，莫扎特在维也纳完成了这首弦乐小夜曲。" +
    "它直到 1827 年才出版，那时他已去世三十多年。" +
    "在电影《莫扎特传》（1984 年）里，年老的萨列里弹起这段旋律，一位神父立刻就听了出来。",
  funFact: "曲名《Eine kleine Nachtmusik》的意思是“一首小夜曲”，莫扎特亲手把它写进了自己的作品目录。",
  versions: {
    common: {
      tips: [
        "拇指放在 D 上，2 指放在 G 上，4 指放在 B 上，5 指放在高音 D 上。",
        "G 弹得短促、明亮，就像弦乐器干脆利落地奏出它。",
        "趁高音 D 后面的休止符，把 2、3、5 指移到升 F、A、C 上。",
      ],
      tricky: {
        5: "你的手已经在休止符处移好了。现在 5 指弹 C，3 指弹 A。",
        7: "用 5、3、2 指往下走 C、A、升 F，再回到 A。",
      },
    },
    rare: {
      tricky: {
        5: "在第 4 小节的休止符处移动手。5 指落在 C 上，3 指落在 A 上。",
        7: "用 5、3、2 指往下走 C、A、升 F，再回到 A。",
      },
    },
    epic: {
      practice: [
        "单独弹阿尔贝蒂低音，直到它自己滚动起来：低、高、中、高。",
        "单独弹右手的三度和六度，每对音的两个音要像一个音那样同时按下。",
        "双手一起慢慢弹前八个小节。",
        "双手合奏，用四分之三速度弹完整首歌。",
        "现在用原速弹，加上踏板。",
      ],
    },
    legendary: {
      tricky: {
        2: "离开 G 的八度，然后往下跳到 D 的八度。手保持张开。",
        3: "连续四个八度：G、D、G、B。每弹完一个就把手稍微抬起。",
      },
    },
  },
};
