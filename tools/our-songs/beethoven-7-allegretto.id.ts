/** The guide of *Symphony No. 7: Allegretto* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven menulis Simfoni Ketujuh pada tahun 1811 dan 1812. " +
    "Pada pertunjukan perdananya di Wina, Desember 1813, penonton meminta Allegretto dimainkan sekali lagi. " +
    "Film The King's Speech (2010) memutarnya sebagai latar pidato radio Raja pada masa perang.",
  funFact: "Melodinya mula-mula terdengar rendah, dimainkan oleh viola dan selo.",
  versions: {
    common: {
      tips: [
        "Ucapkan “panjang, pendek, pendek” sambil memainkan birama pertama. Ritme itulah seluruh karya ini.",
        "Tanganmu tidak pernah berpindah. Jari 1, 2, dan 3 memainkan E, F kres, dan G.",
        "Mulai dengan sangat lembut, lalu buat setiap birama sedikit lebih keras.",
      ],
    },
    rare: {
      tips: [
        "Di sini tangan kiri bergeser sedikit ke bawah. Jari 5 pindah dari G kres ke G.",
        "Injak pedal selama setiap birama penuh, dan ganti tepat di garis birama.",
        "Sekarang tangan kiri bermain di setiap ketukan. Mainkan dengan rata, seperti mars yang pelan.",
      ],
      tricky: {
        15: "Tangan kiri berayun di antara G dan D dengan jari 5 dan 2.",
        16: "Mainkan E dan G bersamaan dengan jari 1 dan 3. Lalu angkat tangan kanan pada tanda istirahat.",
      },
    },
    epic: {
      tips: [
        "Mainkan akor terurai dengan lembut, agar E yang berulang bernyanyi di atasnya.",
        "Ganti pedal pada ketukan terakhir, saat akornya berubah menjadi D mayor.",
        "Ganti pedal tiga kali di birama ini, sekali untuk setiap akor baru.",
      ],
    },
    legendary: {},
  },
};
