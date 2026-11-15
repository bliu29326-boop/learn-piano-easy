/** The guide of *The Sailor's Hornpipe* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "《The Sailor's Hornpipe》是一首欢快的舞曲，和英国皇家海军有很深的渊源。" +
    "早期的曲集把它印作《The College Hornpipe》。",
  funFact: "马克斯·弗莱舍的《大力水手》动画片用这首角笛舞曲开场，所以很多人把它当作大力水手的曲子。",
  versions: {
    common: {
      tricky: {
        4: "弹完 C，拇指从下面穿指到 B。然后 2 指和 4 指往上走到 D 和 G。",
      },
    },
    rare: {
      tricky: {
        4: "弹完 C，拇指从下面穿指到 B。然后 2 指和 4 指往上走到 D 和 G。",
      },
    },
    epic: {
      tricky: {
        17: "两只手同时弹最后一个和弦。让踏板把它一直保持到结束。",
      },
    },
    legendary: {
      practice: [
        "只用左手弹：在拍点上弹一个八度，然后一个和弦，每个后面都有一个短短的休止符用来跳。",
        "单独弹左手的琶音。拇指从下面穿过，3 指从上面跨过。",
        "单独弹右手的和弦，让最上面的手指唱出旋律。",
        "双手合奏，用四分之三速度弹完整首歌。",
        "现在用原速弹，让最后一个和弦的声音延续。",
      ],
      tips: [
        "利用每个八度和和弦后面短短的休止符，跳到下一个。",
        "让琶音在右手的快速经过句下面轻轻滚动。",
        "每个和弦都稍早一点松开。利用这个空隙把整只手移到下一个和弦。",
      ],
    },
  },
};
