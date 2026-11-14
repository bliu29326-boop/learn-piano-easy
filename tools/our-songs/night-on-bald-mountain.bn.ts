/** The guide of *Night on Bald Mountain* in Bengali. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mussorgsky এই রচনাটি শেষ করেন ১৮৬৭ সালের ২৩ জুন, সাধু যোহনের পর্বের আগের রাতে। " +
    "এটি Bald Mountain-এ ডাইনিদের এক রাতের সভার সংগীতে আঁকা ছবি। " +
    "Mussorgsky-র মৃত্যুর পাঁচ বছর পরে, ১৮৮৬ সালে, Rimsky-Korsakov রচনাটির নিজের একটি অ্যারেঞ্জমেন্ট ছাপেন। " +
    "Walt Disney-র সিনেমা Fantasia (১৯৪০) এটিকে বিখ্যাত করে তোলে। " +
    "সেখানে বাজে Leopold Stokowski-র অ্যারেঞ্জমেন্ট, যা Rimsky-Korsakov-এর সংস্করণের উপর গড়া।",
  funFact:
    "এটি কোনো রুশ সুরকারের লেখা প্রথম টোন পোয়েমগুলোর একটি। " +
    "সেই প্রথম দিকের দলে আছে Rimsky-Korsakov-এর Sadko, যেটিও ১৮৬৭ সালের।",
  versions: {
    common: {
      tricky: {
        5: "হাত উপরে সরে গেছে। 2 নম্বর আঙুল A বাজায়, আর 3 নম্বর আঙুল B ফ্ল্যাট বাজায়।",
      },
    },
    rare: {
      tricky: {
        5: "রেস্টের মধ্যে হাত উপরে সরে গেছে। 2 নম্বর আঙুল A বাজায়, আর 3 নম্বর আঙুল B ফ্ল্যাট বাজায়।",
      },
    },
  },
};
