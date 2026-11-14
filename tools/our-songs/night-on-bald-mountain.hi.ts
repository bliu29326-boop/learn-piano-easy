/** The guide of *Night on Bald Mountain* in Hindi. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mussorgsky ने 23 जून 1867 को, सेंट जॉन की पूर्व संध्या पर, Bald Mountain पर चुड़ैलों की सभा का अपना संगीत-चित्र पूरा किया। " +
    "उनकी मौत के पाँच साल बाद, 1886 में, Rimsky-Korsakov ने इसका अपना अरेंजमेंट छापा। " +
    "Walt Disney की फ़िल्म Fantasia (1940) ने इसे मशहूर बनाया। " +
    "उसमें Leopold Stokowski का अरेंजमेंट बजा, जो Rimsky-Korsakov के अरेंजमेंट पर आधारित था।",
  funFact:
    "Rimsky-Korsakov के Sadko के साथ, जो 1867 का ही है, यह रूसी संगीतकारों के सबसे शुरुआती टोन पोएम में से एक है।",
  versions: {
    common: {
      tricky: {
        5: "हाथ ऊपर खिसक चुका है। उँगली 2 A बजाती है, और उँगली 3 B फ़्लैट बजाती है।",
      },
    },
    rare: {
      tricky: {
        5: "रेस्ट में हाथ ऊपर खिसक चुका है। उँगली 2 A बजाती है, और उँगली 3 B फ़्लैट बजाती है।",
      },
    },
  },
};
