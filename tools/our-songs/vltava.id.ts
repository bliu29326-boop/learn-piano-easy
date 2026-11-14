/** The guide of *Vltava* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Smetana menulis Vltava pada 1874, sebagai yang kedua dari enam puisi simfonis dalam siklusnya Má vlast, Tanah Airku. " +
    "Musiknya melukiskan sungai yang mengalir melintasi Praha. " +
    "Film Terrence Malick tahun 2011, The Tree of Life, memakai musik ini.",
  funFact:
    "Melodinya yang terkenal adalah gubahan dari La Mantovana, sebuah melodi yang dianggap ciptaan Giuseppe Cenci, tenor Italia dari masa Renaisans.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada birama 1 sampai 5, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 9, tempat melodi berjalan turun ke E.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama satu birama penuh, dan tidak pernah berpindah.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan ibu jari di B. Lalu jari 2 sampai 5 naik dari E ke A.",
        "Lepaskan A sedikit lebih awal. Di jeda singkat itu, geser tanganmu satu tuts ke atas, dengan jari 4 di B.",
        "Hitung enam ketukan dalam satu birama: panjang, pendek, panjang, pendek. Sungai terus mengalir dan tidak pernah terburu-buru.",
      ],
      tricky: {
        3: "Jari 4 memainkan B tiga kali. Tanganmu baru saja bergeser satu tuts ke atas, jadi jari 5 menunggu di atas C.",
        8: "Mainkan dua F kres pertama dengan ibu jari, dan yang ketiga dengan jari 2. Dengan begitu ibu jari bebas untuk E.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah yang panjang, lalu satu not atau akor yang pendek.",
        "Mainkan tangan kanan saja pada 9 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap setengah birama punya satu not panjang dan satu not pendek, di kedua tangan. Rasakan ayunannya: panjang, pendek.",
        "Lepaskan A sedikit lebih awal. Di jeda singkat itu, geser tanganmu satu tuts ke atas, dengan jari 4 di B.",
        "Akhiri dengan E dan G bersamaan. Jari 1 dan 3 menekan keduanya sebagai satu.",
      ],
      tricky: {
        3: "Jari 4 memainkan B tiga kali setelah tangan bergeser ke atas. Tangan kiri memainkan E yang panjang, lalu B yang pendek.",
      },
    },
  },
};
