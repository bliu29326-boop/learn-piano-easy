/** The guide of *William Tell Overture* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Opera Rossini, William Tell, pertama kali dipentaskan pada 1829, dan menjadi yang terakhir dari 39 operanya. " +
    "Overture opera ini ditutup dengan galop yang cepat, yang sering disebut Mars Prajurit Swiss. " +
    "Bagian penutup itu menjadi musik tema The Lone Ranger di radio, televisi, dan film.",
  funFact:
    "Ada penulis yang mendefinisikan seorang intelektual sebagai orang yang bisa mendengarkan William Tell Overture tanpa teringat pada Lone Ranger.",
  versions: {
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 5 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Tangan kiri memainkan satu akor di setiap setengah birama.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh, seperti kuda yang berderap.",
      ],
    },
    epic: {
      tricky: {
        17: "Pakai tanda istirahat setelah A yang panjang untuk menggeser ibu jari naik ke E tinggi.",
      },
    },
    legendary: {
      tricky: {
        13: "Oktaf turun dari F kres ke B. Jaga tanganmu tetap terbuka, dan biarkan tangan memantul di setiap oktaf.",
      },
    },
  },
};
