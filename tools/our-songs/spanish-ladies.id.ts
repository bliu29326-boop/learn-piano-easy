/** The guide of *Spanish Ladies* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Spanish Ladies adalah lagu pelaut tradisional tentang awak kapal yang berlayar pulang dari Spanyol ke Inggris. " +
    "Satu versi dari tahun 1769 masih tersimpan dalam buku log sebuah kapal.",
  funFact: "Dalam film Jaws (1975), pemburu hiu bernama Quint menyanyikan versi lagu ini yang biasa dinyanyikan para pemburu paus.",
  versions: {
    common: {
      tips: [
        "Mulai dengan ibu jari di B rendah. Lalu jari 3 memainkan E.",
        "Lepaskan B kedua sedikit lebih awal. Di jeda itu, geser ibu jari naik ke E.",
        "Hitung tiga ketukan pelan dalam satu birama, seperti kapal yang berayun di atas ombak.",
      ],
      tricky: {
        6: "Sekarang ibu jari memainkan E dua kali, dan jari 2 memainkan F kres. Tanganmu sudah pindah naik ke E.",
      },
    },
    rare: {
      tricky: {
        6: "Sekarang ibu jari memainkan E dua kali, dan jari 2 memainkan F kres. Tangan kiri memainkan E rendah, lalu B dua kali.",
      },
    },
    epic: {
      tricky: {
        22: "Jari 5 memainkan E dua kali di atas, sementara not bawah bergerak dari G ke B. Lalu ibu jari menjangkau A.",
        26: "Angkat kedua tangan setelah akor B mayor, lalu daratkan keduanya bersamaan di akor E minor terakhir.",
      },
    },
    legendary: {
      tricky: {
        21: "Biarkan ibu jari di G sepanjang birama. Hanya not teratas yang bergerak, dari E ke D lalu ke B.",
        26: "Angkat kedua tangan saat tanda istirahat pendek di birama 25. Lalu daratkan keduanya di akor terakhir, di atas oktaf E rendah.",
      },
    },
  },
};
