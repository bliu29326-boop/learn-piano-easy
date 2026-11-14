/** The guide of *Air on the G String* in Chinese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "巴赫把这首咏叹调写成他《第三号管弦乐组曲》中的慢乐章。" +
    "1871 年，小提琴家 August Wilhelmj 改编了它，让小提琴只用最低的一根弦——G 弦——就能拉完整段旋律。" +
    "电影《七宗罪》（1995 年）里，两名警探翻看犯罪现场照片时，放的就是这首曲子。",
  funFact: "Wilhelmj 在小提琴声部上方写了“auf der G-Saite”，意思是“在 G 弦上”，这首曲子的别名就是这么来的。",
  versions: {
    common: {
      tips: [
        "把第一个 E 按住一整个小节，仔细听。小提琴用一弓长长地唱出这个音。",
        "拇指从 C 上抬起片刻。然后 2 指落在 B 上，手就停在那里。",
        "每个长音都占满一整个小节。慢慢数八拍，再多等一拍，才弹下一个音。",
      ],
      tricky: {
        3: "拇指从 C 上抬起片刻，再用 2 指弹 B。",
        8: "休止符之后，4 指弹 D。然后拇指往下够到 G。",
      },
    },
    rare: {
      practice: [
        "只用右手弹前八个小节，让歌曲等你弹每个音。",
        "只用左手弹。先弹低音，再由双音来回应它。",
        "双手一起慢慢弹前八个小节。",
        "用双手弹完整首歌，比谱上写的稍慢一点。旋律会出现两次。",
        "现在用原速弹。",
      ],
      tricky: {
        6: "休止符之后，5 指弹 E。然后 2 指和 1 指弹降 B 和 A。",
        14: "和第 6 小节一样的动作：5 指弹 E，再用 2 指弹降 B。",
        19: "右手同时弹 C 和 E。左手张开，用 5、3、1 指按住 C、E、G。",
      },
    },
    epic: {
      tricky: {
        14: "每对双音都像一个音那样弹，让上面的手指唱出旋律。下面的音大多由拇指来弹。",
      },
    },
    legendary: {
      tricky: {
        9: "利用开头的休止符，把手往上移一个八度。然后用 1、2、3、5 指抓住四个音。",
      },
    },
  },
};
