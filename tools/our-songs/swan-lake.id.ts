/** The guide of *Swan Lake* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tchaikovsky menulis musik untuk balet Danau Angsa (Swan Lake) pada 1875 dan 1876, dan Balet Bolshoi pertama kali mementaskannya pada 1877. " +
    "Tema ini adalah melodi obo dari babak kedua. " +
    "Film Black Swan (2010) memuat beberapa adegan dari Danau Angsa.",
  funFact: "Vladimir Begichev memesan musik ini pada Mei 1875, dan Tchaikovsky menerima bayaran 800 rubel untuknya.",
  versions: {
    common: {
      tips: [
        "Tahan E pertama sambil menghitung sampai empat. Lalu empat not pendek naik dari A ke D.",
        "Melodi ini sedih sekaligus gagah. Biarkan setiap not tinggi yang panjang bernyanyi.",
        "Di birama ini jari 2 memainkan A, agar ibu jari bisa menjangkau turun ke F.",
      ],
      tricky: {
        3: "Di sini mainkan A dengan jari 2. Lalu ibu jari menjangkau turun ke F, dan jari 3 mengambil C.",
        7: "Seperti di birama 3, jari 2 memainkan A, dan ibu jari menjangkau turun ke F.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Satu not rendah datang tepat pada ketukan, lalu akor dua not menjawabnya.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
    },
  },
};
