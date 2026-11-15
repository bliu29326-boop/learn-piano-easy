/** The guide of *Aquarium* in Hindi. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium, The Carnival of the Animals का सातवाँ मूवमेंट है। " +
    "The Carnival of the Animals एक संगीतमय मज़ाक है, जिसे Saint-Saëns ने 1886 में लिखा था। " +
    "यह सुइट 1922 में छपा, यानी उनकी मृत्यु के एक साल बाद। " +
    "Terrence Malick की 1978 की फ़िल्म Days of Heaven में यह शुरुआती क्रेडिट के दौरान बजता है।",
  funFact:
    "Saint-Saëns ने अपने जीते-जी इस सुइट के सार्वजनिक प्रदर्शन पर रोक लगा दी थी। " +
    "उन्हें डर था कि इसके मज़ाक एक गंभीर संगीतकार के रूप में उनके नाम को नुकसान पहुँचाएँगे।",
  versions: {
    common: {
      tricky: {
        1: "उँगली 5 और 4 से E और D शार्प के बीच आगे-पीछे बजाएँ। फिर उँगली 4 खिसककर सफ़ेद D पर आती है।",
        3: "माप 3 फिर से माप 1 जैसा है। उँगली 4 को काली कुंजी के पास रखें, ताकि D शार्प आसानी से बजे।",
      },
    },
    rare: {
      tricky: {
        1: "उँगली 5 और 4 से E और D शार्प के बीच आगे-पीछे बजाएँ, जबकि बायाँ हाथ A और C के बीच बदलता है।",
        3: "माप 1 की तरह उँगली 5 और 4 E और D शार्प के बीच आगे-पीछे बजती हैं। फिर उँगली 4 सफ़ेद D लेती है।",
      },
    },
    epic: {},
    legendary: {},
  },
};
