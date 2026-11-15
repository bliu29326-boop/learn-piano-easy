/** The guide of *Aquarium* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium adalah bagian ketujuh dari Karnaval Hewan, sebuah lelucon musik yang ditulis Saint-Saëns pada 1886. " +
    "Suite ini diterbitkan pada 1922, setahun setelah ia wafat. " +
    "Film Days of Heaven (1978) karya Terrence Malick memutarnya untuk mengiringi judul pembukanya.",
  funFact:
    "Selama hidupnya, Saint-Saëns melarang suite ini dimainkan di depan umum. Ia khawatir leluconnya akan merusak namanya sebagai komponis yang serius.",
  versions: {
    common: {
      tricky: {
        1: "Berayun di antara E dan D kres dengan jari 5 dan 4. Lalu jari 4 bergeser ke tuts putih D.",
        3: "Birama 3 sama dengan birama 1. Jaga jari 4 dekat dengan tuts hitam, agar D kres mudah dijangkau.",
      },
    },
    rare: {
      tricky: {
        1: "Berayun di antara E dan D kres dengan jari 5 dan 4, sementara tangan kiri bergantian antara A dan C.",
        3: "Seperti di birama 1, jari 5 dan 4 berayun di antara E dan D kres. Lalu jari 4 mengambil tuts putih D.",
      },
    },
    epic: {},
    legendary: {},
  },
};
