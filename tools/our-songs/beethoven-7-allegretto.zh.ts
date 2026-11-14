/** The guide of *Symphony No. 7: Allegretto* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "贝多芬在 1811 年和 1812 年写下了他的《第七交响曲》。" +
    "1813 年 12 月在维也纳首演时，听众要求把这个小快板乐章再演奏一遍。" +
    "电影《国王的演讲》（2010 年）里，国王发表战时广播讲话时，背景放的就是它。",
  funFact: "这段旋律第一次出现时在低音区，由中提琴和大提琴奏出。",
  versions: {
    common: {
      tips: [
        "弹第一小节时，嘴里念“长、短、短”。整首曲子就是这个节奏。",
        "手从不移动。1、2、3 指弹 E、升 F、G。",
        "开始时弹得很轻，然后一个小节比一个小节稍响一点。",
      ],
    },
    rare: {
      tips: [
        "这里左手往下移一点。5 指从升 G 移到 G。",
        "每个小节都踩住踏板，正好在小节线上换踏板。",
        "现在左手每拍都弹。要弹得均匀，像一首缓慢的进行曲。",
      ],
      tricky: {
        15: "左手用 5 指和 2 指在 G 和 D 之间来回弹。",
        16: "用 1 指和 3 指同时弹 E 和 G。然后在休止符处把右手抬起。",
      },
    },
    epic: {
      tips: [
        "分解和弦要弹得轻，让反复出现的 E 在上面歌唱。",
        "在最后一拍换踏板，那里和弦变成 D 大三和弦。",
        "这个小节要换三次踏板，每个新和弦换一次。",
      ],
    },
    legendary: {},
  },
};
