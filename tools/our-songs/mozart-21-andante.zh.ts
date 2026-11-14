/** The guide of *Piano Concerto No. 21: Andante* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "1785 年 3 月 9 日，莫扎特完成了这部协奏曲，距离上一部只有四个星期。" +
    "它的慢乐章行板，在轻柔重复的和弦上唱出一段长长的旋律。" +
    "电影《Elvira Madigan》（1967 年）用了这段音乐，如今这部协奏曲也常被人用这个名字来称呼。",
  funFact: "莫扎特完成这部协奏曲，距离他的《第 20 号钢琴协奏曲》只有四个星期。",
  versions: {
    common: {
      tips: [
        "第一个 F 按住七拍。短的 C 紧接在下一个长音之前。",
        "4 指按住高音 C。然后 5、4、3、2 指弹四个快音。",
        "弹得轻柔、连贯，就像你在哼一首摇篮曲。",
      ],
      tricky: {
        5: "3 指从 G 往上移到降 B。然后 5、4、3 指弹 D、C、降 B。",
      },
    },
    rare: {
      tricky: {
        5: "3 指从 G 往上移到降 B。然后 5、4、3 指弹 D、C、降 B。",
      },
    },
    epic: {},
    legendary: {},
  },
};
