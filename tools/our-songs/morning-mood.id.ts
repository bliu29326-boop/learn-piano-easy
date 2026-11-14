/** The guide of *Morning Mood* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg menulis Morning Mood pada 1875 untuk drama Peer Gynt karya Ibsen, dan menerbitkannya dalam Suite Peer Gynt pertamanya pada 1888. " +
    "Melodinya hanya memakai lima not dari tangga nada, dan berpindah-pindah antara flute dan obo. " +
    "Film Soylent Green dari 1973 memutarnya saat seorang yang sekarat mendengarkan musik pilihannya.",
  funFact:
    "Musik ini melukiskan matahari terbit di gurun Maroko, bukan di atas fyord Norwegia seperti yang dibayangkan kebanyakan pendengar.",
  versions: {
    common: {
      tips: [
        "Ibu jari kananmu ada di C tengah, dan jari 5 mulai di G. Jari 2 dan 3 bersiap di D dan E.",
        "Setelah C pertama, empat not pendek bergoyang di antara D dan E. Hitung dengan rata.",
        "Mainkan dengan lembut, seperti matahari yang terbit perlahan. Biarkan setiap not mengalir ke not berikutnya.",
      ],
      tricky: {
        5: "Di sini jari 2 memainkan E, dan jari 4 memainkan G. Dengan begitu, jari 5 bebas untuk A tinggi di birama 6.",
        7: "Jari 5 mundur dari A ke G. Tangan kiri pindah ke D dan G di tengah birama.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu akor dua not dua kali. Tanganmu tetap diam.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri bermain di setiap ketukan. Hitung “1, 2, 3” dua kali di setiap birama.",
        "Mainkan akor tangan kiri dengan lembut, agar melodi melayang di atasnya seperti cahaya pagi.",
        "Akhiri dengan G dan B bersamaan. Jari 1 dan 3 menekan keduanya seperti satu not.",
      ],
      tricky: {
        7: "Jari 5 mundur dari E ke D. Tangan kiri pindah ke A dan D di tengah birama.",
      },
    },
  },
};
