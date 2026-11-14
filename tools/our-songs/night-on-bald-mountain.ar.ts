/** The guide of *Night on Bald Mountain* in Arabic. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "أنهى موسورسكي لوحته الموسيقية عن حفل الساحرات على الجبل الأجرد ليلة عيد القديس يوحنا، في 23 يونيو 1867. " +
    "وبعد 5 سنوات من وفاته، نشر ريمسكي كورساكوف توزيعه لها عام 1886. " +
    "ثم اشتهرت بفضل فيلم \u2068Fantasia\u2069 (1940) من إنتاج \u2068Walt Disney\u2069، " +
    "بتوزيع \u2068Leopold Stokowski\u2069 المبني على نسخة ريمسكي كورساكوف.",
  funFact:
    "هي ومقطوعة \u2068Sadko\u2069 لريمسكي كورساكوف، من العام نفسه 1867، من أوائل القصائد السيمفونية التي كتبها ملحن روسي.",
  versions: {
    common: {
      tricky: {
        5: "انتقلت اليد إلى الأعلى. يعزف الإصبع 2 نغمة لا، ويعزف الإصبع 3 سي بيمول.",
      },
    },
    rare: {
      tricky: {
        5: "انتقلت اليد إلى الأعلى خلال السكتة. يعزف الإصبع 2 نغمة لا، ويعزف الإصبع 3 سي بيمول.",
      },
    },
  },
};
