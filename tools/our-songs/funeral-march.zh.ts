/** The guide of *Funeral March* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "这首葬礼进行曲是肖邦《第二钢琴奏鸣曲》的第三乐章，1840 年出版。" +
    "肖邦自己的葬礼上演奏了它，约翰·肯尼迪的国葬上也演奏了它。" +
    "电影和动画片常常引用它的开头来表现葬礼。",
  funFact: "许多学者认为这首进行曲写于 1837 年，比肖邦完成奏鸣曲的其余部分早两年。",
  versions: {
    common: {
      practice: [
        "只用右手弹前四个小节，让歌曲等你弹每个音。",
        "只用右手弹第 5～8 小节。旋律终于离开了 D。",
        "现在只用左手弹。它在 D 和降 B 之间来回弹，就像一口缓缓敲响的钟。",
        "双手一起慢慢弹前八个小节。",
        "双手合奏，用原速弹完整首歌。",
      ],
      tricky: {
        7: "E 按住三拍，然后 D 弹一拍。D 按住三拍，最后拇指弹升 C。",
      },
    },
    rare: {
      practice: [
        "只用左手弹。它每拍敲响一个和弦，就像钟声。",
        "只用右手弹前八个小节，让歌曲等你弹每个音。",
        "双手一起慢慢弹第 9～16 小节。",
        "用双手弹完整首歌，比谱上写的稍慢一点。",
        "现在按原速弹。",
      ],
    },
    epic: {
      tricky: {
        22: "六度里的 C 用 4 指弹，这样 5 指就能空出来往上够到降 E。",
      },
    },
    legendary: {
      tricky: {
        22: "在短暂的休止符处抬起手，然后落在降 E、降 A、C 和降 E 上。",
      },
    },
  },
};
