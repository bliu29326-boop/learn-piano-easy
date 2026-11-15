/** The player's settings from the notes to the offline files, in Urdu. A text it leaves out shows in English. */
import { isolate } from "../format";
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "بجتے نوٹوں کی چمک",
    help: "نوٹ جب تک بجتا ہے، اپنے رنگ میں چمکتا ہے۔",
  },
  noteWidth: {
    label: "نوٹ کی چوڑائی (کلید کا فیصد)",
    help: "ہر گرتے نوٹ کی چوڑائی، اس کی کلید کے مقابلے میں۔",
  },
  roundedNotes: {
    label: "گول کونوں والے نوٹ",
    help: "گرتے نوٹوں کے کونے گول کرتا ہے۔",
  },
  noteBorderRadius: {
    label: "کونوں کی گولائی (%)",
    help: "نوٹ کے کونے کتنے گول ہیں۔",
  },
  minNoteHeight: {
    label: "نوٹ کی کم سے کم لمبائی",
    help: "کلید کی چوڑائی کے حساب سے، تاکہ بہت چھوٹا نوٹ بھی نظر آئے۔",
  },
  strokeNotes: {
    label: "کناروں کی چمک",
    help: "ہر نوٹ کے گرد اسی کے رنگ میں روشنی کا کنارا۔",
  },
  strokeNotesWidth: {
    label: "کناروں کی چمک کی شدت",
    help: "ہر نوٹ کے گرد روشنی کا کنارا کتنا روشن ہے۔",
  },
  noteEndedShrink: {
    label: "بجے ہوئے نوٹ اپنی کلید میں سمٹ جائیں",
    help: "نوٹ بجتے ہوئے اپنی کلید میں دھنستا جاتا ہے۔ یہ سیٹنگ بند ہو تو نوٹ کلیدوں سے آگے نکل جاتا ہے۔",
  },
  playedNoteFalloffSpeed: {
    label: "بجے ہوئے نوٹ کلیدوں سے کتنا آگے جائیں",
    help: "کلید کی چوڑائی کے حساب سے، جب بجے ہوئے نوٹ نہیں سمٹتے۔",
  },
  showSustainedNotes: {
    label: "دکھائیں کہ پیڈل نوٹ کو کتنی دیر تھامتا ہے",
    help: "پیڈل جس نوٹ کو تھامے رکھے، اس سے ایک پتلی دُم آگے چلتی ہے۔",
  },
  sustainedNotesOpacity: {
    label: "پیڈل کی دُم کی روشنی (%)",
    help: "نوٹوں کے پیچھے پیڈل کی دُمیں کتنی نمایاں نظر آتی ہیں۔",
  },

  // Lanes
  bgCol1: {
    label: "لین کا رنگ",
    help: "سفید کلیدوں کے اوپر لینوں کا رنگ۔",
  },
  bgCol5: {
    label: "کالی کلید کی لین کا رنگ",
    help: "کالی کلیدوں کے اوپر لینوں کا رنگ۔",
  },
  bgCol3: {
    label: "آکٹیو کی حد کا رنگ",
    help: `ہر ${isolate("B")} اور اگلے ${isolate("C")} کے بیچ کی لائن کا رنگ۔`,
  },
  drawMeasureLines: {
    label: "میژر لائنیں",
    help: "ہر میژر کے شروع میں لینوں کے آر پار ایک لائن۔",
  },
  measureLineThickness: {
    label: "میژر لائن کی موٹائی",
    help: "ہر میژر پر لائن کتنی موٹی ہے۔",
  },
  measureLineColor: {
    label: "میژر لائن کا رنگ",
    help: "ہر میژر پر لائن کا رنگ۔",
  },
  enableDrawBeatLines: {
    label: "بیٹ لائنیں",
    help: "ہر بیٹ پر لینوں کے آر پار ایک مدھم لائن۔",
  },
  beatLineThickness: {
    label: "بیٹ لائن کی موٹائی",
    help: "ہر بیٹ پر لائن کتنی موٹی ہے۔",
  },
  beatLineColor: {
    label: "بیٹ لائن کا رنگ",
    help: "ہر بیٹ پر لائن کا رنگ۔",
  },
  enableDrawMeasureNumbers: {
    label: "میژر نمبر",
    help: "ہر میژر کا نمبر، اس کی لائن کے ساتھ۔",
  },
  measureNumbersColor: {
    label: "میژر نمبر کا رنگ",
    help: "میژر نمبروں کا رنگ۔",
  },
  highlightInputLanes: {
    label: "دبی ہوئی کلیدوں کی لینیں روشن ہوں",
    help: "کلید جب تک دبی رہے، اس کے اوپر کی لین روشن رہتی ہے۔",
  },
  inputLaneOpacity: {
    label: "لین کی روشنی کی شدت",
    help: "کلید دبی رہنے پر اس کی لین کتنی روشن ہوتی ہے۔",
  },
  showMarkersSong: {
    label: "مارکر",
    help: "جہاں گانے میں کسی حصے کا نام ہو، جیسے انترا، وہاں ایک لائن اور اس کا متن۔",
  },
  showSustainPeriods: {
    label: "پیڈل کے دورانیے",
    help: "جب تک گانا سسٹین پیڈل دبائے رکھتا ہے، لینوں کے آر پار ایک پٹی۔",
  },
  showSustainOnOffs: {
    label: "پیڈل دبانا اور چھوڑنا",
    help: `جہاں پیڈل دبتا ہے وہاں "${isolate("Ped.")}" والی لائن، اور جہاں چھوٹتا ہے وہاں "✱"۔`,
  },
  showSustainChannels: {
    label: "پیڈل کے چینل",
    help: `ہر پیڈل کے دورانیے کا ${isolate("MIDI")} چینل دکھاتا ہے۔`,
  },

  // Particles
  showParticles: {
    label: "ذرات",
    help: "ہر بجتی کلید سے ایفیکٹس اٹھتے ہیں۔ یہ گرافکس کارڈ پر بوجھ ڈالتے ہیں، اس لیے شروع میں بند ہوتے ہیں۔",
  },
  particlesFlames: {
    label: "شعلے",
    help: "ہر کلید اپنے نوٹ کے ساتھ اس نوٹ کے رنگ میں جلتی ہے۔ شعلے گرافکس کارڈ پر سب سے زیادہ بوجھ ڈالتے ہیں۔",
  },
  particlesSparks: {
    label: "چنگاریاں",
    help: "ہر کلید سے چھوٹی روشن چنگاریاں اوپر اڑتی ہیں۔",
  },
  particlesEmbers: {
    label: "انگارے",
    help: "ہر کلید سے دہکتے انگارے آہستہ آہستہ اوپر تیرتے ہیں۔",
  },
  particlesStars: {
    label: "ستارے",
    help: "ہر کلید سے چھوٹے گھومتے ستارے اور نقطے اٹھتے ہیں اور واپس گرتے ہیں۔",
  },
  particlesCustom: {
    label: "اپنے ذرات",
    help: "نیچے کی سیٹنگز سے بنے ذرات۔",
  },
  particlesTexture: {
    label: "شکل",
    help: "وہ تصویر جو آپ کے اپنے ذرات میں سے ہر ایک دکھاتا ہے۔",
    options: { circle: "چمک", spark: "چنگاری", smoke: "دھواں", star: "ستارہ", ring: "حلقہ" },
  },
  particlesBlending: {
    label: "ملانے کا انداز",
    help: `"روشنی جوڑیں" پیچھے کی چیز کو روشن کرتا ہے، جیسے آگ۔ "ڈھانپیں" اسے چھپا دیتا ہے، جیسے دھواں۔`,
    options: { additive: "روشنی جوڑیں", normal: "ڈھانپیں" },
  },
  particleOverrideColor: {
    label: "اپنا رنگ",
    help: "بند ہونے پر ہر ذرہ اپنی کلید کا رنگ لیتا ہے۔",
  },
  particleColor: {
    label: "رنگ",
    help: "آپ کے ذرات کا رنگ، جب ان کا اپنا رنگ ہو۔",
  },
  particlesOpacity: {
    label: "گاڑھا پن",
    help: "ہر ذرہ کتنا ٹھوس نظر آتا ہے۔ کم ویلیو پر پیچھے کی چیز زیادہ نظر آتی ہے۔",
  },
  particleSize: {
    label: "سائز",
    help: "کلید کی چوڑائی کے حساب سے۔",
  },
  particleAmount: {
    label: "تعداد",
    help: "ہر کلید سے ہر فریم میں ذرات، 60 فریم فی سیکنڈ پر۔",
  },
  particleLife: {
    label: "عمر (سیکنڈ)",
    help: "ہر ذرہ غائب ہونے سے پہلے کتنی دیر رہتا ہے۔",
  },
  particleSpeed: {
    label: "حرکت کی رفتار",
    help: "ذرات کی ہر حرکت کی رفتار تیز یا آہستہ کرتا ہے۔",
  },
  particleFadeOut: {
    label: "مدھم ہونا",
    help: "عمر کا وہ حصہ جس میں ذرہ آخر میں مدھم ہوتا ہے۔",
  },
  particlesShrink: {
    label: "سکڑنا",
    help: "سائز کا وہ حصہ جو ذرہ کھو دیتا ہے۔ 0 سے کم پر وہ بڑا ہوتا ہے۔",
  },
  particleSpeedX: {
    label: "دائیں بائیں رفتار",
    help: "سب سے تیز دائیں بائیں رفتار، کلید کی چوڑائی فی سیکنڈ کے حساب سے۔",
  },
  particleSpeedY: {
    label: "اوپر اٹھنے کی رفتار",
    help: "اوپر اٹھنے کی سب سے تیز رفتار، کلید کی چوڑائی فی سیکنڈ کے حساب سے۔",
  },
  particlesFriction: {
    label: "مزاحمت",
    help: "اڑتے ہوئے ذرات کی رفتار کتنی جلدی کم ہوتی ہے۔",
  },
  particleRising: {
    label: "کشش ثقل",
    help: "0 سے اوپر ذرات واپس گرتے ہیں، اور 0 سے کم پر وہ زیادہ تیزی سے اٹھتے ہیں۔",
  },
  particlesRotation: {
    label: "زاویہ (°)",
    help: "شروع میں ہر ذرہ کتنا گھوما ہوا ہوتا ہے۔",
  },
  particlesRotationRandom: {
    label: "بے ترتیب زاویہ (°)",
    help: "ہر ذرہ اس زاویے تک کسی بے ترتیب مقدار سے گھوما ہوا شروع ہوتا ہے۔",
  },
  particlesRotationSpeed: {
    label: "گھماؤ (° فی سیکنڈ)",
    help: "اڑتے ہوئے ہر ذرہ کتنی تیزی سے گھومتا ہے۔",
  },
  particleNoiseResX: {
    label: "دائیں بائیں بھٹکنے کی تفصیل",
    help: "زیادہ ویلیو پر ساتھ والی کلیدوں کے ذرات ایک دوسرے سے زیادہ مختلف انداز میں دائیں بائیں بھٹکتے ہیں۔",
  },
  particleNoiseStrengthX: {
    label: "دائیں بائیں بھٹکنا",
    help: "ذرات بے ترتیب طور پر دائیں بائیں کتنا بھٹکتے ہیں۔",
  },
  particleNoiseResY: {
    label: "اٹھتے ہوئے بھٹکنے کی تفصیل",
    help: "زیادہ ویلیو پر ساتھ والی کلیدوں کا اٹھتے ہوئے بھٹکنا ایک دوسرے سے زیادہ مختلف ہوتا ہے۔",
  },
  particleNoiseStrengthY: {
    label: "اٹھتے ہوئے بھٹکنا",
    help: "اٹھتے ہوئے ذرات بے ترتیب طور پر اوپر نیچے کتنا بھٹکتے ہیں۔",
  },
  particleNoiseStrengthSize: {
    label: "سائز میں بے ترتیبی",
    help: "ہر ذرہ بے ترتیب طور پر کتنا بڑا اور چھوٹا ہوتا ہے۔",
  },
  turbulenceXAmplitude: {
    label: "دائیں بائیں جھول",
    help: "ذرات ایک طرف سے دوسری طرف کتنا جھولتے ہیں۔",
  },
  turbulenceXFrequency: {
    label: "دائیں بائیں جھول کی رفتار",
    help: "ایک سیکنڈ میں جھولوں کی تعداد۔",
  },
  turbulenceYAmplitude: {
    label: "اٹھتے ہوئے جھول",
    help: "اٹھتے ہوئے ذرات اوپر نیچے کتنا جھولتے ہیں۔",
  },
  turbulenceYFrequency: {
    label: "اٹھتے ہوئے جھول کی رفتار",
    help: "ایک سیکنڈ میں جھولوں کی تعداد۔",
  },
  particleYOffset: {
    label: "شروع کی اونچائی",
    help: "کلید سے اوپر، کلید کی چوڑائی کے حساب سے۔",
  },
  particleDistributionX: {
    label: "کلید کی چوڑائی میں آغاز",
    help: "ہر ذرہ اپنی کلید کی چوڑائی میں کہاں سے شروع ہوتا ہے۔",
    options: { across: "چوڑائی میں کہیں بھی", centre: "بیچ میں" },
  },
  particleDistributionXSpread: {
    label: "آغاز کا پھیلاؤ (%)",
    help: "کلید کی چوڑائی کا وہ حصہ جس میں ذرات شروع ہوتے ہیں۔",
  },
  particleDistributionY: {
    label: "کلید کی لمبائی میں آغاز",
    help: "ہر ذرہ اپنی کلید کی لمبائی میں کہاں سے شروع ہوتا ہے۔",
    options: { hitLine: "ہٹ لائن پر", key: "اوپری حصے پر کہیں بھی" },
  },
  particleDistributionZ: {
    label: "تہہ",
    help: "کلیدیں ذرات کو چھپاتی ہیں یا ذرات پیانو کو ڈھانپتے ہیں۔",
    options: { behind: "کلیدوں کے پیچھے چھپے", front: "پیانو کے سامنے" },
  },

  // Labels
  pitchNotationSystem: {
    label: "نوٹوں کے نام",
    help: `نوٹوں اور کلیدوں پر نام کیسے لکھے جاتے ہیں۔ ${isolate("Do")} ہمیشہ ${isolate("C")} ہے۔`,
    options: {
      auto: "میری زبان کے مطابق",
      letters: `حروف: ${isolate("C D E")}`,
      solfege: `سولفیج: ${isolate("Do Re Mi")}`,
    },
  },
  noteLabel: {
    label: "نوٹ کے لیبل",
    help: "ہر نوٹ پر لکھے متن: ان میں سے جتنے چاہیں منتخب کریں، یا کوئی بھی نہیں۔ انگلی مقرر کرنے کے لیے نوٹ دبائیں، پھر 1 سے 5 تک کوئی نمبر دبائیں۔",
    options: { name: "نوٹ کا نام", keyBinding: "کی بورڈ کا بٹن", fingering: "انگلی" },
  },
  noteLabelColor: {
    label: "نوٹ کے لیبل کا رنگ",
    help: "ہر نوٹ پر متن کا رنگ۔",
  },
  showKeyNamesOnPianoWhite: {
    label: "سفید کلیدوں پر نام",
    help: "ہر سفید کلید اپنے نوٹ کا نام دکھاتی ہے۔",
  },
  showKeyNamesOnPianoBlack: {
    label: "کالی کلیدوں پر نام",
    help: "ہر کالی کلید اپنے نوٹ کا نام دکھاتی ہے۔",
  },
  showPianoKeyNameFlats: {
    label: "کالی کلیدوں کے نام فلیٹ کے ساتھ",
    help: `${isolate("C♯")} کی جگہ ${isolate("D♭")}، صرف کلیدوں پر۔ نوٹ گانے کے اسکیل کے مطابق رہتے ہیں۔`,
  },
  octaveLabel: {
    label: "کلیدوں کے نام میں آکٹیو",
    help: `کلیدوں کے ناموں میں آکٹیو کا نمبر جوڑتا ہے، جیسے ${isolate("C4")}۔`,
    options: { none: "کوئی نہیں", all: "ہر کلید پر", onlyC: `صرف ${isolate("C")} پر` },
  },
  showKeyBindingsOnPiano: {
    label: "پیانو پر کی بورڈ کے بٹن",
    help: "ہر کلید کمپیوٹر کی بورڈ کا وہ بٹن دکھاتی ہے جو اسے بجاتا ہے۔",
  },
  showChords: {
    label: "کورڈ کے نام",
    help: "نوٹوں سے بننے والے ہر کورڈ کا نام دکھاتا ہے، پیڈل سے تھامے نوٹوں سمیت۔",
  },
  chordLabelStyle: {
    label: "کورڈ لیبل کا انداز",
    help: "ہر کورڈ کا نام کیسے دکھایا جاتا ہے۔",
    options: { bar: "کورڈ کی کلیدوں کے اوپر پٹی", ribbon: "لینوں کے آر پار ربن" },
  },
  chordLabelPlacement: {
    label: "کورڈ لیبل کی جگہ",
    help: "اوپری سرے سے مراد کورڈ کا وہ سرا ہے جو پیانو سے دور ہے۔",
    options: {
      above: "کورڈ کے اوپر",
      top: "اس کے اوپری سرے پر",
      middle: "اس کے بیچ میں",
      bottom: "اس کے نچلے سرے پر",
      below: "کورڈ کے نیچے",
    },
  },
  showChordRomanNumerals: {
    label: "رومن ہندسے",
    help: `گانے کے اسکیل میں ہر کورڈ کا درجہ، جیسے ${isolate("V7")}۔`,
  },
  chordBlocks: {
    label: "نوٹ بلاک",
    help: "نام والے کورڈ کے ہر نوٹ کے اوپر ایک بلاک بتاتا ہے کہ وہ نوٹ کیا ہے۔",
    options: { none: "کوئی نہیں", tone: "کورڈ کا نوٹ", degree: "اسکیل کا درجہ" },
  },
  chordToneNotation: {
    label: "نوٹ بلاک لکھنے کا انداز",
    help: "نوٹ بلاک چھوٹے نشان دکھاتے ہیں یا پورے الفاظ۔",
    options: { simple: `مختصر: ${isolate("R ♭3 5")}`, full: "پورا: روٹ، فلیٹ تھرڈ، ففتھ" },
  },
  chordMarkRoot: {
    label: "روٹ نوٹ پر نشان",
    help: "ہر کورڈ کے روٹ نوٹ پر سنہری بلاک ہوتا ہے۔",
  },

  // Lyrics
  lyricsEnabled: {
    label: "بول",
    help: "گانے کے بول ہوں تو انہیں ایک وقت میں ایک سطر دکھاتا ہے۔",
  },
  lyricsBackground: {
    label: "پس منظر کا رنگ",
    help: "بولوں کے پیچھے کی پٹی کا رنگ۔",
  },
  lyricsFontColor: {
    label: "متن کا رنگ",
    help: "آنے والے الفاظ کا رنگ۔",
  },
  lyricsFontColorPlayed: {
    label: "گائے گئے متن کا رنگ",
    help: "پہلے ہی گائے جا چکے الفاظ کا رنگ۔",
  },
  lyricsFontColorActive: {
    label: "ابھی گائے جانے والے ہجے کا رنگ",
    help: "جو ہجا ابھی گایا جا رہا ہے، وہ اس رنگ میں نمایاں ہوتا ہے۔",
  },
  lyricsFontSize: {
    label: `متن کا سائز (${isolate("px")})`,
    help: "بول کتنے بڑے لکھے جاتے ہیں۔",
  },
  lyricsY: {
    label: "اونچائی (%، اوپر سے)",
    help: "بولوں کی سطر کا بیچ سین میں کہاں ہے۔ 0 سب سے اوپر کا کنارا ہے۔",
  },
  lyricsCursorEnabled: {
    label: "کرسر",
    help: "ابھی گائے جانے والے ہجے پر ایک نقطہ۔",
  },
  lyricsBouncingCursor: {
    label: "اچھلتا کرسر",
    help: "نقطہ ہر ہجے سے اگلے ہجے پر اچھلتا ہے۔",
  },

  // Coding
  enableColorCodingNote: {
    label: "پچ کے حساب سے نوٹوں کے رنگ",
    help: "12 پچوں میں سے ہر ایک کا اپنا رنگ ہے۔",
  },
  enableColorCodingNotePiano: {
    label: "پچ کے حساب سے کلیدوں کے رنگ",
    help: "ہر کلید بجتے ہوئے اپنی پچ کے رنگ میں روشن ہوتی ہے۔",
  },
  colorCodeNote0: { help: `ہر ${isolate("C")} کا رنگ۔` },
  colorCodeNote1: {
    label: `${isolate("C♯")} یا ${isolate("D♭")}`,
    help: `ہر ${isolate("C")} شارپ یا ${isolate("D")} فلیٹ کا رنگ۔`,
  },
  colorCodeNote2: { help: `ہر ${isolate("D")} کا رنگ۔` },
  colorCodeNote3: {
    label: `${isolate("D♯")} یا ${isolate("E♭")}`,
    help: `ہر ${isolate("D")} شارپ یا ${isolate("E")} فلیٹ کا رنگ۔`,
  },
  colorCodeNote4: { help: `ہر ${isolate("E")} کا رنگ۔` },
  colorCodeNote5: { help: `ہر ${isolate("F")} کا رنگ۔` },
  colorCodeNote6: {
    label: `${isolate("F♯")} یا ${isolate("G♭")}`,
    help: `ہر ${isolate("F")} شارپ یا ${isolate("G")} فلیٹ کا رنگ۔`,
  },
  colorCodeNote7: { help: `ہر ${isolate("G")} کا رنگ۔` },
  colorCodeNote8: {
    label: `${isolate("G♯")} یا ${isolate("A♭")}`,
    help: `ہر ${isolate("G")} شارپ یا ${isolate("A")} فلیٹ کا رنگ۔`,
  },
  colorCodeNote9: { help: `ہر ${isolate("A")} کا رنگ۔` },
  colorCodeNote10: {
    label: `${isolate("A♯")} یا ${isolate("B♭")}`,
    help: `ہر ${isolate("A")} شارپ یا ${isolate("B")} فلیٹ کا رنگ۔`,
  },
  colorCodeNote11: { help: `ہر ${isolate("B")} کا رنگ۔` },
  enableColorCodingFinger: {
    label: "انگلی کے حساب سے نوٹوں کے رنگ",
    help: "جو نوٹ کوئی ہاتھ نہیں بجاتا، وہ اپنا دوسرا رنگ رکھتا ہے۔",
  },
  enableColorCodingFingerPiano: {
    label: "انگلی کے حساب سے کلیدوں کے رنگ",
    help: "ہر کلید اسے بجانے والی انگلی کے رنگ میں روشن ہوتی ہے۔",
  },
  colorCodeFinger1Right: { label: "دایاں ہاتھ، انگلی 1", help: "دائیں ہاتھ کے انگوٹھے سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFinger2Right: { label: "دایاں ہاتھ، انگلی 2", help: "دائیں ہاتھ کی شہادت کی انگلی سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFinger3Right: { label: "دایاں ہاتھ، انگلی 3", help: "دائیں ہاتھ کی درمیانی انگلی سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFinger4Right: { label: "دایاں ہاتھ، انگلی 4", help: "دائیں ہاتھ کی چوتھی انگلی سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFinger5Right: { label: "دایاں ہاتھ، انگلی 5", help: "دائیں ہاتھ کی چھوٹی انگلی سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFingerDefaultRight: {
    label: "دایاں ہاتھ، کوئی انگلی نہیں",
    help: "دائیں ہاتھ کے ان نوٹوں کا رنگ جن کی انگلی مقرر نہیں۔",
  },
  colorCodeFinger1Left: { label: "بایاں ہاتھ، انگلی 1", help: "بائیں ہاتھ کے انگوٹھے سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFinger2Left: { label: "بایاں ہاتھ، انگلی 2", help: "بائیں ہاتھ کی شہادت کی انگلی سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFinger3Left: { label: "بایاں ہاتھ، انگلی 3", help: "بائیں ہاتھ کی درمیانی انگلی سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFinger4Left: { label: "بایاں ہاتھ، انگلی 4", help: "بائیں ہاتھ کی چوتھی انگلی سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFinger5Left: { label: "بایاں ہاتھ، انگلی 5", help: "بائیں ہاتھ کی چھوٹی انگلی سے بجنے والے نوٹوں کا رنگ۔" },
  colorCodeFingerDefaultLeft: {
    label: "بایاں ہاتھ، کوئی انگلی نہیں",
    help: "بائیں ہاتھ کے ان نوٹوں کا رنگ جن کی انگلی مقرر نہیں۔",
  },

  // Sheet
  enableSheet: {
    label: "شیٹ میوزک دکھائیں",
    help: "گانا شیٹ میوزک کی صورت میں، سین کے اوپر۔",
  },
  enableFullSheet: {
    label: "صرف شیٹ میوزک",
    help: "سین کی جگہ شیٹ پوری اسکرین بھر دیتی ہے۔",
  },
  sheetMeasureScroll: {
    label: "شیٹ گانے کے ساتھ چلے",
    help: "بند ہونے پر میژر سطروں میں رہتے ہیں، اور بجتی سطر نظر میں رہتی ہے۔",
  },
  sheetMeasureNumbers: {
    label: "میژر نمبر",
    help: "شیٹ ہر میژر کا نمبر کہاں دکھاتی ہے۔",
    options: { off: "کوئی نہیں", lineStart: "ہر سطر کے شروع میں", every: "ہر میژر پر" },
  },
  enableGrandStaff: {
    label: "دو اسٹاف بریکٹ سے جوڑیں",
    help: "گرینڈ اسٹاف کا بریکٹ، ہر سطر کے شروع میں۔",
  },
  sheetAutoClef: {
    label: "ہر کلیف نوٹوں کے مطابق منتخب کریں",
    help: "بند ہونے پر پہلے اسٹاف پر ٹریبل کلیف اور باقی سب پر بیس کلیف ہوتا ہے۔",
  },
  overrideTimeSignature: {
    label: "ٹائم سگنیچر",
    help: "وہ ٹائم سگنیچر جس میں شیٹ لکھی جاتی ہے۔ اگر گانے کا اپنا ٹائم سگنیچر غلط ہو تو کوئی اور منتخب کریں۔",
    options: { auto: "گانے سے" },
  },
  sheetMinNoteDenom: {
    label: "سب سے چھوٹا نوٹ",
    help: "سب سے چھوٹا نوٹ جو شیٹ لکھتی ہے۔ اس کے ٹرپلٹ پھر بھی آ جاتے ہیں۔",
    options: { "4": "کوارٹر", "8": "ایٹتھ", "16": "سکسٹینتھ", "32": "تھرٹی سیکنڈ", "64": "سکسٹی فورتھ" },
  },
  hideRestsBelow: {
    label: "اس سے چھوٹے ریسٹ چھپائیں",
    help: "چھوٹے ریسٹ نکال دیتا ہے، تاکہ شیٹ پڑھنا آسان ہو۔",
    options: { none: "کوئی نہیں", "4": "کوارٹر", "8": "ایٹتھ", "16": "سکسٹینتھ", "32": "تھرٹی سیکنڈ" },
  },
  renderSheetCursor: {
    label: "کرسر",
    help: "ایک لائن گانے میں موجودہ جگہ دکھاتی ہے۔",
  },
  sheetColorActiveNotes: {
    label: "بجتے نوٹوں کا رنگ",
    help: "شیٹ پر نوٹ بجتے ہوئے رنگ بدلتے ہیں۔",
  },
  sheetColorByTrack: {
    label: "بجتے نوٹ اپنے ٹریک کا رنگ لیں",
    help: "بند ہونے پر وہ نیچے والا رنگ لیتے ہیں۔",
  },
  sheetActiveNotesColor: {
    label: "بجتے نوٹ کا رنگ",
    help: "شیٹ پر بجتے ہوئے نوٹ کا رنگ۔",
  },
  sheetHighlightActiveNotes: {
    label: "بجتے نوٹوں کے پیچھے چمک",
    help: "شیٹ پر ہر بجتے نوٹ کے پیچھے ہلکی روشنی نظر آتی ہے۔",
  },
  sheetActiveHighlightColor: {
    label: "چمک کا رنگ",
    help: "بجتے نوٹوں کے پیچھے روشنی کا رنگ۔",
  },
  sheetActiveGrowEffect: {
    label: "بجتے نوٹ بڑے ہوں",
    help: "شیٹ پر نوٹ بجتے ہوئے بڑا ہو جاتا ہے۔",
  },
  sheetRenderInputNotes: {
    label: "آپ کے بجائے ہوئے نوٹ دکھائیں",
    help: "ہر دبی ہوئی کلید کرسر پر نوٹ کی صورت میں نظر آتی ہے۔",
  },
  sheetShowHoverInfo: {
    label: "پوائنٹر کے نیچے نوٹوں کے نام",
    help: "شیٹ پر کسی نوٹ یا کورڈ پر پوائنٹر رکھیں تو اس کے نوٹوں کے نام نظر آتے ہیں۔",
  },
  sheetBgColor: {
    label: "کاغذ کا رنگ",
    help: "شیٹ میوزک کے پیچھے کا رنگ۔ گہرے کاغذ پر سیاہی ہلکی ہو جاتی ہے۔",
  },

  // PDF
  pdfExportButtonGroup: {
    label: `نوٹ ${isolate("PDF")} کی صورت میں محفوظ کریں`,
    help: "ایک ونڈو کھولتا ہے، جو کھلے گانے کے گرتے نوٹ صفحوں کی صورت میں محفوظ کرتی ہے۔ صفحوں کی لمبائی مقرر کی جا سکتی ہے۔",
  },
  exportPdfBackground: {
    label: "پس منظر کے رنگ استعمال کریں",
    help: "صفحے لین اور کلید کے رنگ لیتے ہیں۔ بند ہونے پر وہ سفید کاغذ پر چھپتے ہیں۔",
  },

  // Offline
  offlineCache: {
    label: "آف لائن فائلوں کا انتظام",
    help: "ایپ، گانوں اور پیانو کی آوازوں کا سائز دکھاتا ہے، اور ہر ایک کو محفوظ کرتا یا ہٹاتا ہے۔",
  },
  autoCacheSongs: {
    label: "گانے محفوظ رکھیں",
    help: "ایپ میں شامل ہر گانا ابھی محفوظ کرتا ہے، اور ہر اپ ڈیٹ کے بعد دوبارہ۔",
  },
  autoCacheSounds: {
    label: "پیانو کی آوازیں محفوظ رکھیں",
    help: "ہر ساؤنڈ سیٹ ابھی محفوظ کرتا ہے، اور ہر اپ ڈیٹ کے بعد دوبارہ۔",
  },
};
