/** The guide of *Aquarium* in Bengali. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium হলো The Carnival of the Animals-এর সপ্তম মুভমেন্ট। Saint-Saëns ১৮৮৬ সালে সংগীতের এই রসিকতাটি লেখেন। " +
    "সুইটটি প্রকাশিত হয় ১৯২২ সালে, তাঁর মৃত্যুর পরের বছর। " +
    "Terrence Malick-এর ১৯৭৮ সালের সিনেমা Days of Heaven-এ শুরুর নামলিপির সময় এটি বাজে।",
  funFact:
    "Saint-Saëns যতদিন বেঁচে ছিলেন, সুইটটি জনসমক্ষে বাজানো নিষেধ করে রেখেছিলেন। তাঁর ভয় ছিল, এর রসিকতাগুলো একজন গুরুগম্ভীর সুরকার হিসেবে তাঁর নাম নষ্ট করবে।",
  versions: {
    common: {
      tricky: {
        1: "5 আর 4 নম্বর আঙুলে E আর D শার্পের মধ্যে দুলুন। তারপর 4 নম্বর আঙুল পিছলে সাদা D-তে যায়।",
        3: "বার 3 আবার বার 1-এর মতো। 4 নম্বর আঙুল কালো চাবির কাছাকাছি রাখুন, যাতে D শার্প সহজে আসে।",
      },
    },
    rare: {
      tricky: {
        1: "5 আর 4 নম্বর আঙুলে E আর D শার্পের মধ্যে দুলুন, আর বাঁ হাত A আর C-এর মধ্যে আসা-যাওয়া করে।",
        3: "বার 1-এর মতো 5 আর 4 নম্বর আঙুল E আর D শার্পের মধ্যে দোলে। তারপর 4 নম্বর আঙুল সাদা D ধরে।",
      },
    },
    epic: {},
    legendary: {},
  },
};
