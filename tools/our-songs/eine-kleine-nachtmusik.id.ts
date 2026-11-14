/** The guide of *Eine kleine Nachtmusik* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart menyelesaikan serenade untuk alat musik gesek ini di Wina pada 1787. " +
    "Karya ini baru diterbitkan pada 1827, lebih dari tiga puluh tahun setelah ia wafat. " +
    "Dalam film Amadeus (1984), Salieri tua memainkannya, dan seorang pastor langsung mengenali melodinya.",
  funFact: "Judulnya berarti “sebuah serenade kecil”, dan Mozart sendiri mencatatnya dalam daftar karyanya.",
  versions: {
    common: {
      tips: [
        "Ibu jari di D, jari 2 di G, jari 4 di B, dan jari 5 di D tinggi.",
        "Mainkan G dengan pendek dan cerah, seperti hentakan singkat alat musik gesek.",
        "Pakai tanda istirahat setelah D tinggi untuk memindahkan jari 2, 3, dan 5 ke F kres, A, dan C.",
      ],
      tricky: {
        5: "Tanganmu sudah pindah saat tanda istirahat. Kini jari 5 memainkan C, dan jari 3 memainkan A.",
        7: "Berjalan turun di C, A, dan F kres dengan jari 5, 3, dan 2, lalu naik lagi ke A.",
      },
    },
    rare: {
      tricky: {
        5: "Geser tanganmu saat tanda istirahat di birama 4. Jari 5 mendarat di C, dan jari 3 di A.",
        7: "Berjalan turun di C, A, dan F kres dengan jari 5, 3, dan 2, lalu naik lagi ke A.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
    },
    legendary: {
      tricky: {
        2: "Angkat oktaf G, lalu lompat turun ke oktaf D. Jaga tanganmu tetap terentang.",
        3: "Empat oktaf berturut-turut: G, D, G, dan B. Angkat tanganmu sedikit setelah setiap oktaf.",
      },
    },
  },
};
