/** The guide of *Night on Bald Mountain* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "1867 年 6 月 23 日，也就是圣约翰节前夜，穆索尔斯基写完了这幅描绘荒山上女巫狂欢夜的音乐画卷。" +
    "他去世五年后，里姆斯基-科萨科夫在 1886 年出版了自己改编的版本。" +
    "华特·迪士尼的电影《幻想曲》（1940 年）让它家喻户晓，片中用的是利奥波德·斯托科夫斯基根据里姆斯基-科萨科夫版本所作的改编。",
  funFact: "它和里姆斯基-科萨科夫同样写于 1867 年的《萨特阔》一起，是俄罗斯作曲家最早的交响诗之一。",
  versions: {
    common: {
      tricky: {
        5: "手已经往上移了。2 指弹 A，3 指弹降 B。",
      },
    },
    rare: {
      tricky: {
        5: "手已经趁休止符往上移了。2 指弹 A，3 指弹降 B。",
      },
    },
  },
};
