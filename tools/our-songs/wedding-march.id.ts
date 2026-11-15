/** The guide of *Wedding March* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mendelssohn menulis mars ini pada 1842 sebagai bagian dari musiknya untuk A Midsummer Night's Dream karya Shakespeare. " +
    "Mars ini menjadi favorit di pesta pernikahan setelah Victoria, Putri Sulung Kerajaan, memilihnya untuk pernikahannya sendiri pada 1858. " +
    "Film-film masih memutarnya setiap kali sepasang pengantin meninggalkan altar.",
  funFact:
    "Pernikahan pertama yang diketahui memakainya berlangsung di Tiverton, Inggris, pada 2 Juni 1847, dimainkan oleh pemain orgel Samuel Reay.",
  versions: {
    common: {
      tricky: {
        2: "Tahan B dengan jari 4 selama enam ketukan. Lalu ibu jari memainkan F kres.",
        4: "Tanganmu sudah bergeser ke bawah. Jari 4 memainkan F, dan jari 2 memainkan D.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri memainkan satu akor di setiap ketukan, seperti drum band yang berbaris.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tricky: {
        1: "Tahan C tinggi dengan jari 5. Tangan kiri memainkan A, C, dan F di setiap ketukan.",
        2: "Tangan kiri memainkan A dan D. Tahan B di tangan kanan selama akornya berulang.",
        4: "Jari 4 memainkan F, dan jari 2 memainkan D. Tangan kiri tetap di B, D, dan G.",
      },
    },
    epic: {},
    legendary: {},
  },
};
