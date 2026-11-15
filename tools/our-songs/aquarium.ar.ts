/** The guide of *Aquarium* in Arabic. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "\u2068Aquarium\u2069 هي الحركة السابعة من \u2068The Carnival of the Animals\u2069، وهي دعابة موسيقية كتبها سان صانز عام 1886. " +
    "نُشرت المتتالية عام 1922، بعد عام من وفاته. " +
    "وتُسمع مع شارة البداية في فيلم \u2068Days of Heaven\u2069 (1978) للمخرج \u2068Terrence Malick\u2069.",
  funFact:
    "منع سان صانز عزف المتتالية أمام الجمهور طوال حياته، خوفًا من أن تضر دعاباتها بسمعته ملحنًا جادًا.",
  versions: {
    common: {
      tricky: {
        1: "تأرجح بين مي وري دييز بالإصبعين 5 و4. ثم ينزلق الإصبع 4 إلى ري على المفتاح الأبيض.",
        3: "المازورة 3 هي المازورة 1 من جديد. أبق الإصبع 4 قريبًا من المفتاح الأسود، لتأتي ري دييز بسهولة.",
      },
    },
    rare: {
      tricky: {
        1: "تأرجح بين مي وري دييز بالإصبعين 5 و4، بينما تتنقل اليد اليسرى بين نغمة لا ودو.",
        3: "كما في المازورة 1، يتأرجح الإصبعان 5 و4 بين مي وري دييز. ثم يأخذ الإصبع 4 ري على المفتاح الأبيض.",
      },
    },
    epic: {},
    legendary: {},
  },
};
