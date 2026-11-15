/** The boss of *Chords* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { CanonInDRareTexts } from "./canon-in-d.en";

export const canonInDRareUr: Translation<CanonInDRareTexts> = {
  title: `آخری چیلنج: ${isolate("Canon in D")} دونوں ہاتھوں سے`,
  steps: {
    intro: {
      text: `${isolate("Canon in D")} ${isolate("D")} میجر میں ہے، اور اس کے اسکیل کے نشان میں ${isolate("F")} شارپ اور ${isolate("C")} شارپ ہیں۔ بیس بار بار انہی آٹھ کورڈ پر چلتا ہے۔ بایاں ہاتھ ہر کورڈ کو ایک نیچے والے اور ایک اوپر والے نوٹ کی صورت میں بجاتا ہے۔`,
    },
    song: {
      text: `${isolate("Canon in D")} دونوں ہاتھوں سے، لکھی ہوئی رفتار سے تھوڑا آہستہ بجائیں۔ آخر کے قریب ہر تھرڈ کی دونوں کلیدیں ایک ساتھ دبائیں۔`,
    },
  },
};
