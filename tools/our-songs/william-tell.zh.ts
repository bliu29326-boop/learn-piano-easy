/** The guide of *William Tell Overture* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "罗西尼的歌剧《威廉·退尔》在 1829 年首演，这是他 39 部歌剧中的最后一部。" +
    "《威廉·退尔》序曲以一段快速的加洛普舞曲结束，人们常叫它“瑞士士兵进行曲”。" +
    "这段终曲后来成了《独行侠》的主题音乐，从广播一直用到电视和电影。",
  funFact: "有些作家这样定义知识分子：能听完《威廉·退尔》序曲却不想到《独行侠》的人。",
  versions: {
    rare: {
      practice: [
        "只用右手弹前五个小节，让歌曲等你弹每个音。",
        "只用左手弹。每半个小节弹一个和弦。",
        "双手一起慢慢弹前九个小节。",
        "用双手弹完整首歌，比谱上写的稍慢一点。",
        "现在用原速弹，就像一匹飞奔的马。",
      ],
    },
    epic: {
      tricky: {
        17: "利用长音 A 之后的休止符，把拇指往上移到高音 E。",
      },
    },
    legendary: {
      tricky: {
        13: "八度从升 F 往下落到 B。手保持张开，在每个八度上轻轻弹跳。",
      },
    },
  },
};
