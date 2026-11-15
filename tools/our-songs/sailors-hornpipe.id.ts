/** The guide of *The Sailor's Hornpipe* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Sailor's Hornpipe adalah melodi tarian yang riang dan sangat lekat dengan Angkatan Laut Kerajaan Inggris. " +
    "Kumpulan lagu dari masa awal mencetaknya dengan judul The College Hornpipe.",
  funFact: "Kartun Popeye buatan Max Fleischer dibuka dengan hornpipe ini, jadi banyak orang mengenalnya sebagai lagu Popeye.",
  versions: {
    common: {
      tricky: {
        4: "Ibu jari menyusup ke B setelah C. Lalu jari 2 dan 4 naik ke D dan G.",
      },
    },
    rare: {
      tricky: {
        4: "Ibu jari menyusup ke B setelah C. Lalu jari 2 dan 4 naik ke D dan G.",
      },
    },
    epic: {
      tricky: {
        17: "Mainkan akor terakhir dengan kedua tangan sekaligus. Biarkan pedal menahannya sampai akhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: oktaf tepat pada ketukan, lalu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke yang berikutnya.",
        "Biarkan arpeggio mengalun lembut di bawah rentetan not cepat tangan kanan.",
        "Setiap akor dilepas sedikit lebih awal. Pakai jeda itu untuk memindahkan seluruh tangan ke akor berikutnya.",
      ],
    },
  },
};
