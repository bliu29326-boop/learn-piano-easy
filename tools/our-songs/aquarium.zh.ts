/** The guide of *Aquarium* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "《水族馆》是《动物狂欢节》的第七首。《动物狂欢节》是圣桑在 1886 年写的一个音乐玩笑。" +
    "这部组曲在 1922 年出版，那是他去世的次年。" +
    "特伦斯·马力克 1978 年的电影《天堂之日》，片头字幕下放的就是它。",
  funFact: "圣桑在世时禁止公开演出这部组曲，因为他担心里面的玩笑会损害他作为严肃作曲家的名声。",
  versions: {
    common: {
      tricky: {
        1: "用 5 指和 4 指在 E 和升 D 之间来回弹。然后 4 指滑到白键 D 上。",
        3: "第 3 小节和第 1 小节一样。让 4 指靠近黑键，这样升 D 就容易弹到。",
      },
    },
    rare: {
      tricky: {
        1: "用 5 指和 4 指在 E 和升 D 之间来回弹，同时左手在 A 和 C 之间来回。",
        3: "和第 1 小节一样，5 指和 4 指在 E 和升 D 之间来回弹。然后 4 指弹白键 D。",
      },
    },
    epic: {},
    legendary: {},
  },
};
