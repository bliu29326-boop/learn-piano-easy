/** The guide of *Hungarian Dance No. 5* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "勃拉姆斯为钢琴四手联弹写了《匈牙利舞曲》，第一集在 1869 年出版。" +
    "其中第五首成了最有名的一首。" +
    "在电影《大独裁者》（1940 年）里，查理·卓别林跟着它的节拍给一位顾客刮胡子。",
  funFact: "勃拉姆斯根据 Béla Kéler 的一首查尔达什舞曲写了这首舞曲，但他以为那是一首民间旋律。",
  versions: {
    common: {
      tricky: {
        2: "5 指往上够到 C，然后 3 指回到 A。",
      },
    },
    rare: {
      tricky: {
        5: "右手现在高一个八度弹。拇指落在高音 E 上。",
      },
    },
    epic: {
      tricky: {
        7: "1 指和 4 指弹升 G 和升 E。然后手快速往上走两步。",
        15: "和第 7 小节一样的六度。拇指贴近 A 和 B。",
      },
    },
    legendary: {
      practice: [
        "只用左手弹：往下跳弹八度，再回到上面弹和弦。",
        "只用右手弹八度，拇指和小指保持同一个手型。",
        "只用右手慢慢弹第 5～7 小节的快速音型。",
        "双手合奏，用四分之三速度弹完整首歌。",
        "现在用原速弹，让最后一个和弦的声音延续。",
      ],
      tricky: {
        8: "手张开，用 1、2、3、5 指按住升 F、A、升 C、升 F。",
      },
    },
  },
};
