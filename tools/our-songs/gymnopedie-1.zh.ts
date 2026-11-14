/** The guide of *Gymnopédie No. 1* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "埃里克·萨蒂在 1888 年完成了三首《Gymnopédies》，第一首在那年夏天发表在一本杂志上。" +
    "它的标记是“Lent et douloureux”，意思是“缓慢而哀伤”。" +
    "电影《天才一族》（2001 年）用到了这首曲子。",
  funFact: "萨蒂的朋友克劳德·德彪西后来把第一首和第三首《Gymnopédies》改编成了管弦乐曲。",
  versions: {
    common: {
      practice: [
        "只用左手弹。它每小节按住一个空五度。",
        "只用右手弹第 5～8 小节，让歌曲等你弹每个音。",
        "双手一起慢慢弹第 5～8 小节。",
        "双手合奏，用原速弹完整首歌。",
      ],
      tips: [
        "五度要弹得轻，让声音延续。它们像一条慢慢摇晃的小船。",
        "拇指稍早一点离开 B。这样它就能及时移到下面的 A。",
        "结尾稍微放慢一点，让最后的 C 慢慢消失。",
      ],
      tricky: {
        7: "拇指从 B 往下移到 A。然后 2、3 指往上弹 B 和 C。",
      },
    },
    rare: {
      tips: [
        "每一整小节都踩住踏板，正好在小节线上换踏板。",
        "拇指弹 B，然后往下走到 A。其他手指保持放松。",
        "最后两个小节轻轻地让声音延续，就像摇篮曲的结尾。",
      ],
      tricky: {
        7: "拇指从 B 往下走到 A。手要贴近琴键。",
      },
    },
    epic: {
      tricky: {
        6: "3 指从升 F 抬起时，拇指往下够到升 C。",
      },
    },
    legendary: {
      practice: [
        "只用左手弹。在短暂的休止符处，从低音八度跳到上面的和弦。",
        "双手慢慢弹第 5～8 小节。",
        "只用右手弹和弦，和弦之间把手抬起来。",
        "双手合奏，用四分之三速度弹完整首歌。",
        "现在用原速弹，让最后一个和弦的声音延续。",
      ],
    },
  },
};
