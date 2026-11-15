/** The guide of *Drunken Sailor* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Drunken Sailor adalah lagu pelaut yang dinyanyikan para awak kapal sambil menarik tali atau memutar penggulung jangkar. " +
    "Tidak ada yang tahu siapa penciptanya, dan melodinya memakai modus Doria.",
  funFact: "Catatan tertulis pertama tentang lagu pelaut ini berasal dari pelayaran perburuan paus pada 1839, yang berangkat dari New London, Connecticut.",
  versions: {
    common: {
      tips: [
        "Setiap setengah birama berbunyi panjang, pendek, pendek. Hentakkan seperti pelaut di geladak kapal.",
        "Jari 5 memainkan A, lalu ibu jari meraih ke bawah ke D. Tanganmu tetap di tempatnya.",
        "Mainkan A terakhir di birama 5 dengan jari 2. Lalu jari 3, 4, dan 5 sudah siap untuk B, C, dan D.",
      ],
      tricky: {
        3: "Jari 4 memainkan G enam kali: panjang, pendek, pendek, panjang, pendek, pendek. Mainkan not pendeknya dengan ringan.",
        7: "Jari 5 bergeser turun dari D ke C. Lalu jari 4, 3, dan 2 berjalan turun ke A, G, dan E.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu dua not pada ketukan berikutnya.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tricky: {
        3: "Jari 4 memainkan G enam kali, sementara tangan kiri memainkan C, lalu G. Mainkan kedua tangan dengan rata.",
        7: "Setelah D yang panjang, jari 5 bergeser turun ke C. Tangan kiri memainkan C, lalu F dan A, lalu C dan G.",
      },
    },
    epic: {},
    legendary: {},
  },
};
