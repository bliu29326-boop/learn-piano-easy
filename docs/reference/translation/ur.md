# Urdu: the style guide and glossary

Every writer and reviewer of an Urdu text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Urdu. The machine's half
of these rules is the `ur` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is standard Urdu as written in Pakistan.** Pages carry `lang` `ur` and read from right to
  left. `Intl` formats for `ur-PK`, whose CLDR data writes Western digits. `ur-IN` would write `۱٬۲۳۴٫۵`,
  so the locale table's row stays `ur-PK`.
- **Spelling follows the National Language Authority,** `اردو املا و رموز اوقاف`, which Microsoft's
  guide § 1.1 names as its norm.
- **The register is the everyday one of Pakistani apps.** Microsoft § 2.1 asks for "language that
  resembles conversation observed in everyday settings", never "the formal, technical language".
- **The readers are beginners of every age** in Pakistan and India, children and adults, who learn piano
  alone in a browser. Most know the English words of music better than any Urdu coinage.
- **A common English loanword is written in Urdu script** where Pakistanis say it: `نوٹ`, `کورڈ`,
  `اسکیل`, `فائل`. Microsoft's samples write `ایپ`, `فائل`, `ڈاؤن لوڈ` and `اپ ڈیٹ` the same way.
- **A word found only in Hindi or only in Persian is never used.** `अभ्यास` has the Urdu `مشق`, and a
  Persian phrase such as `بدرجہ اتم` has the plain `بہت زیادہ`.

| Avoid | Write | Why |
|---|---|---|
| کیجیے, فرمائیے | کریں | Microsoft § 2.1.2 lists the `ئیے` forms as classic, and Android has none |
| ملاحظہ فرمائیے | دیکھیں | Microsoft § 2.1.2 |
| گراں قدر | اہم | Microsoft § 2.1.2 |
| بدرجہ اتم | بہت زیادہ | Microsoft § 2.1.2 |
| تنصیب فرمائیں | انسٹال کریں | Microsoft § 2.1.2 asks for the plain verb, and Android writes `انسٹال` |
| سر for a note | نوٹ | `سر` names a svara of Hindustani music to most readers |
| تال for a beat | بیٹ | `تال` names a Hindustani rhythm cycle |
| سپتک for an octave | آکٹیو | `سپتک` names Hindustani music's register of seven svaras |
| بار for a bar | میژر | `بار` also means "time", as in `دو بار`, which every lesson says |
| لے for rhythm | ردھم | `لے` is also the verb "take", and `ردھم` is the word Pakistanis use |

## 2. Address

- **The learner is `آپ`, never `تم` or `تو`.** Every sample of Microsoft's guide uses `آپ`, and Android
  never addresses the reader as `تم`.
- **An instruction is the polite imperative in `یں`:** `منتخب کریں`, `دبائیں`, `بجائیں`, `سنیں`. Android
  uses it 597 times and `کیجیے` never. Microsoft § 2.1.2 lists the `ئیے` forms as classic.
- **A stem in `ا` takes `ئیں`:** `دبائیں`, `بجائیں`, `جائیں`. `دبایں` is a misspelling.
- **A button or a menu item is the same imperative, or a short noun:** `کھولیں`, `جاری رکھیں`, `ترتیبات`.
- **A setting's name is a noun phrase,** and its help text is a plain sentence about what it does.
- **A question to the learner starts with `کیا`:** `کیا آپ یہ سبق چھوڑنا چاہتے ہیں؟` § 4 names its verb.
- **An error is passive and impersonal.** It names what failed, never the learner's mistake: `محفوظ نہیں
  کیا جا سکا۔` Android phrases every failure so, often followed by `دوبارہ کوشش کریں۔`
- **One verb serves a button, a piano key and a computer key: `دبائیں`.** It holds for a tap, a click and
  a press alike. Picking one item from several is `منتخب کریں`.
- **`براہ کرم` is rare.** Microsoft § 2.2.1 drops "please" from "please try again", and Android uses it 9
  times in 2,415 strings. A teacher's warmth sits in the wording, with `چلیں` or `اب` where it fits.
- **"Your" is `اپنا`, `اپنی` or `اپنے` where the subject is `آپ`:** `اپنا ہاتھ رکھیں`. Where the owner is
  plain, it is left out: `دایاں ہاتھ`.

## 3. Voice

Warm, plain and short, as a good teacher speaks. Prefer the everyday word: `کوشش` over `سعی`, `مدد`
over `اعانت`, `شروع کریں` over `آغاز فرمائیں`, `استعمال` over `بروئے کار لانا`.

| English | Urdu | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | السلام علیکم! میں یہاں آپ کو پیانو سکھانے کے لیے ہوں۔ چلیں، شروع کریں؟ | `چلیں` invites, as the English does. `ہوں` and the infinitive carry no gender. |
| Not quite. Try again. | بس تھوڑی سی کسر رہ گئی۔ دوبارہ کوشش کریں۔ | `کسر` is the subject, so no verb agrees with the learner. `دوبارہ کوشش کریں` is Android's own form. |
| Every lesson takes you further. Keep going! | ہر سبق آپ کو ایک قدم آگے لے جاتا ہے۔ یوں ہی جاری رکھیں! | The lesson is the subject, and the imperative has no gender. |

"Well done." is `شاباش!` in every lesson. It is the word a Pakistani teacher says to a learner of any age.

## 4. Gender

Urdu verbs, participles and many adjectives agree with the gender of their subject. The text keeps the
learner's gender out by choosing a form that agrees with something else. Microsoft § 3.1 asks for
gender-neutral wording.

- **First, the imperative or the infinitive:** `دبائیں`, `بجانا سیکھیں`. Neither agrees with anyone.
- **Second, the ergative past with `آپ نے`:** `آپ نے سبق مکمل کیا۔` The verb agrees with `سبق`.
- **Third, a noun or a thing as the subject:** `یہ سبق مکمل ہو گیا!`, not `آپ مکمل کر چکے ہیں۔`
- **Fourth, `سکنا` or the passive on a thing:** `یہاں سے گانا منتخب کیا جا سکتا ہے۔`
- **Where none fits, the honorific plural:** `آپ … رہے ہیں`, `آپ … چاہتے ہیں`, `آپ … گئے`. With `آپ`,
  this masculine plural form is the standard address, and Microsoft's sample `کیا آپ جاری رکھنا چاہیں گے؟`
  uses it.
- **Never a split form** such as `سکتا/سکتی` or `گیا/گئی`. It breaks the reading of a sentence.
- **No word for a person carries an age or a gender:** never `بیٹا`, `بچے` or `دوست` for the learner.
  Microsoft § 3.1 avoids `مرد`, `عورت`, `لڑکا` and `لڑکی`.
- **The teacher has no gender either.** It never says `گا`, `گی`, `گیا` or `گئی` of itself. `میں یہاں ہوں`
  and an infinitive carry none.
- **A composer named in a guide takes the gender of the person,** since a guide states facts.

## 5. Terms

One term per idea, in every file. Sources: WP is Urdu Wikipedia, by article title. RK is the Rekhta
dictionary. MSG is Microsoft's Urdu style guide. AN is Android's `values-ur` framework strings, and FF is Firefox's Urdu strings. A row
marked *unsourced* rests on common usage alone, and *Open* lists the weak rows.

The term list is the English column of [ru.md](ru.md), whose list was made from every English catalog,
lesson and guide. The English that changed since adds these terms: *movement*, *variation* and *part*
of a work, *download*, *loading*, *retry*, *website*, *internet* and *connection*. Each has its row.

### The piano glossary

| English | Urdu | Sources |
|---|---|---|
| piano | پیانو | WP *پیانو*; WP *لڈوگ بیتھوون* |
| key (of the piano) | کلید, plural کلیدیں | WP *پیانو* names the keyboard `کلیدی تختہ`; RK *کلید*. `کی` is avoided, since it is also the postposition |
| white key, black key | سفید کلید, کالی کلید | follows `کلید` |
| keyboard (the piano's, or a MIDI one) | کی بورڈ | AN *فزیکل کی بورڈ*; WP *وولف گینگ موزارٹ* |
| note (a sound, or a written sign) | نوٹ, masculine, plural نوٹ, oblique نوٹوں | unsourced, the word of Western notation. WP *آہنگ* and RK give `سُر`, which names a svara; see *Open* |
| middle C | مڈل C | unsourced, as learners say it |
| octave | آکٹیو | unsourced |
| half step, whole step | سیمی ٹون, ٹون | unsourced, the English terms |
| sharp, flat (the signs) | شارپ, فلیٹ | unsourced, the English terms |
| accidental | شارپ یا فلیٹ کا نشان | the course's own phrase, unsourced |
| staff | اسٹاف | WP *امام الدین شہباز* writes `اسٹاف نوٹیشن` |
| grand staff | گرینڈ اسٹاف | follows `اسٹاف` |
| treble clef, bass clef | ٹریبل کلیف, بیس کلیف | unsourced, the English terms |
| ledger line | لیجر لائن | unsourced, the English term |
| line, space (of the staff) | لائن, feminine; اسپیس, feminine | unsourced, the English terms |
| step, skip (on the staff) | قدم, چھلانگ, as on the keys | follows the nouns' row below |
| landmark (a note read at a glance) | پہچان والا نوٹ | the course's own term, defined where it first appears |
| bar | میژر, masculine: `میژر 3`, `تیسرا میژر` | unsourced. `بار` would read as "time" |
| bar line | میژر لائن | follows `میژر` |
| time signature | ٹائم سگنیچر | unsourced, the English term |
| beat (one count of a bar) | بیٹ, feminine: `ہر میژر میں تین بیٹ`, `آدھی بیٹ` | unsourced, as Hindustani speakers say it |
| hold for two beats; through the next beat | دو بیٹ تک دبائے رکھیں; اگلی بیٹ پوری ہونے تک | the course's own terms. `اگلی بیٹ تک` alone reads as until it starts |
| three-four time | 3/4 ٹائم | follows `ٹائم سگنیچر` |
| count-in | شروع کی گنتی | everyday words, unsourced |
| rhythm | ردھم, masculine | unsourced, the everyday word |
| tempo | ٹیمپو | unsourced, the Italian term |
| metronome | میٹرونوم | unsourced |
| whole, half, quarter note | ہول نوٹ, ہاف نوٹ, کوارٹر نوٹ | unsourced, the English names as learners say them |
| eighth, sixteenth note | ایٹتھ نوٹ, سکسٹینتھ نوٹ | follows the row above |
| dotted | ڈاٹڈ: `ڈاٹڈ ہاف نوٹ` | follows the row above |
| rest; quarter rest | ریسٹ; کوارٹر ریسٹ | unsourced. A hand that rests `آرام کرتا ہے` |
| on the beat | بیٹ پر | everyday words |
| tie | ٹائی | unsourced, the English term |
| slur | سلر | unsourced, the English term |
| repeat sign | ریپیٹ کا نشان | unsourced |
| first, second ending | پہلا اختتام, دوسرا اختتام | unsourced |
| first, second time through | پہلی بار, دوسری بار | everyday words |
| pickup, upbeat | پک اپ: `پک اپ نوٹ` | unsourced, the English term |
| syncopation | سنکوپیشن | unsourced, the English term |
| scale | اسکیل | WP *سمسمیہ* writes `ڈائٹونک سکیل`; the alef follows § 9 |
| major, minor | میجر, مائنر | unsourced, the English terms |
| key (of a song) | اسکیل: `یہ گانا G میجر اسکیل میں ہے` | the everyday use, as Hindi's guide; see *Open* |
| key signature | اسکیل کا نشان | unsourced. `کی سگنیچر` would read as "of signature" |
| scale degree | درجہ: `پانچواں درجہ` | unsourced |
| chord | کورڈ, masculine | unsourced, the everyday word |
| triad; major, minor triad | ٹرائیڈ; میجر ٹرائیڈ, مائنر ٹرائیڈ | follows `کورڈ` |
| root | روٹ نوٹ | unsourced, the English term |
| inversion; root position | انورژن; روٹ پوزیشن | unsourced, the English terms |
| G seventh (chord) | G7 کورڈ | follows `کورڈ` |
| broken chord | بروکن کورڈ | follows `کورڈ` |
| arpeggio | آرپیجیو | unsourced, the Italian term |
| Alberti bass, waltz bass | البرٹی بیس, والز بیس | the course's own terms |
| bass note | بیس نوٹ | follows `بیس کلیف` |
| third, fourth, fifth, sixth, seventh | تھرڈ, فورتھ, ففتھ, سکستھ, سیونتھ | unsourced, the English terms |
| major third, minor third; open fifth | میجر تھرڈ, مائنر تھرڈ; اوپن ففتھ | follows the row above |
| step, skip (between keys) | ساتھ والی کلید پر جانا, ایک کلید چھوڑ کر جانا | everyday words |
| a step, a skip, a leap (nouns) | قدم, چھلانگ, بڑی چھلانگ | everyday words; a lesson defines each by the row above |
| tune, melody | دھن, feminine | WP *وولف گینگ موزارٹ*; RK *دھن* |
| phrase | دھن کا ٹکڑا | everyday words, unsourced |
| call and answer (phrases) | سوال جواب | everyday words, unsourced |
| pattern (of notes) | پیٹرن | everyday word |
| verse, chorus | انترا, مکھڑا | the words of film songs in Pakistan and India, unsourced |
| coda | کوڈا | unsourced, the Italian term |
| dynamics | آواز کا زور | everyday words |
| loud, soft | زور سے, ہلکے سے | everyday words. `آہستہ` means slow, so it never means soft |
| legato | لیگاٹو | unsourced, the Italian term |
| staccato | اسٹیکاٹو | unsourced, the Italian term |
| crescendo, diminuendo | کریشینڈو, ڈمنیوئنڈو | unsourced, the Italian terms |
| hairpin | ہیئر پن کا نشان | unsourced |
| mark (p, f, rit.) | نشان | everyday word |
| fermata | فرماٹا | unsourced, the Italian term |
| hold (a fermata's note) | کھینچنا: `نوٹ کو ذرا دیر تک کھینچیں` | everyday word. `روکنا` reads as stop |
| hold (the pedal holds the notes) | تھامنا: `پیڈل نوٹوں کو تھامے رکھتا ہے` | everyday word |
| fast, slow (tempo); speed up | تیز رفتار سے, آہستہ رفتار سے; رفتار بڑھانا | everyday words. `تیز آواز` means loud, so tempo takes `رفتار` |
| slow down, back in time | رفتار آہستہ آہستہ کم کرنا, پھر پہلی رفتار | everyday words |
| turn (ornament) | ٹرن | unsourced, the English term |
| double notes | ڈبل نوٹ | unsourced |
| stride (the bass style) | اسٹرائیڈ بیس | unsourced, the English term |
| a run (fast notes) | تیز نوٹوں کی لڑی | the guides' own term |
| two quick notes, a group of quick notes | دو چھوٹے نوٹ, چھوٹے نوٹوں کا گروپ | the guides' own term. `تیز نوٹ` alone can read as loud |
| a slow waltz, a fast galop (the dance, not a tempo) | آہستہ والز, تیز گیلپ | everyday words. A dance's kind takes no `رفتار` |
| a stab (a short, hit chord) | چھوٹا کورڈ, or just `کورڈ` | a coinage would read as made up |
| sustain pedal | سسٹین پیڈل; `دایاں پیڈل` in a lesson | unsourced, the English term |
| soft pedal | سافٹ پیڈل; `بایاں پیڈل` in a lesson | follows the row above |
| press a pedal, lift it | پیڈل دبائیں, پیڈل چھوڑیں | the plain verbs of a foot |
| fingering | فنگرنگ | unsourced, the English term |
| finger numbers | 1 انگوٹھا, 2 شہادت کی انگلی, 3 درمیانی انگلی, 4 چوتھی انگلی, 5 چھوٹی انگلی | WP's articles of the fingers. Its `خنصر` is literary, so 5 takes the everyday name |
| right hand, left hand | دایاں ہاتھ, بایاں ہاتھ; `دائیں ہاتھ سے` | everyday words |
| hand position; C position | ہاتھ کی پوزیشن; C پوزیشن | the course's own term, unsourced |
| hand shape | ہاتھ کی شکل | everyday words |
| thumb under, finger over | انگوٹھا نیچے سے لے جانا, انگلی اوپر سے لے جانا | the course's own terms, unsourced |
| lift (a finger, a key) | اٹھانا | everyday word |
| land (on a key, a beat) | پر پہنچنا | everyday word |
| jump, climb, slide | چھلانگ لگانا, اوپر چڑھنا, کھسکنا | everyday words |
| stretch, spread (the hand) | پھیلانا | everyday word |
| roll (a chord) | کورڈ کو نیچے سے اوپر بکھیر کر بجانا | the guides' own term |
| rock (between two keys) | دو کلیدوں کے بیچ آگے پیچھے بجانا | everyday words |
| wrist | کلائی | WP *کلائی* |
| let ring | آواز گونجنے دیں | everyday words |
| fingertips | انگلیوں کے سرے | everyday words |
| by feel | چھو کر | everyday words |
| sight-reading | سائٹ ریڈنگ | unsourced, the English term |
| ear training | سن کر پہچاننے کی مشق | everyday words, unsourced |
| play (the piano, a key, a note) | بجانا | everyday word |
| practise | مشق کرنا | everyday word. WP *یوہن سباستیان باخ* writes `ریاض`, which reads as classical training; see *Open* |
| song; piece | گانا; کمپوزیشن | everyday words |
| sheet music | شیٹ میوزک | unsourced, the English term |
| pitch | پچ | unsourced, the English term |
| transpose | ٹرانسپوز کرنا | unsourced, the English term |
| stem, note head | اسٹیم, نوٹ ہیڈ | unsourced, the English terms |
| piano bench | پیانو کا بینچ | everyday words |
| at full speed; at three-quarter speed | پوری رفتار پر; تین چوتھائی رفتار پر | the guides' own terms |
| waltz | والز | unsourced, the English term |
| carol; sea shanty; jig | کیرل; ملاحوں کا گیت; جگ | unsourced |
| suite, symphony, sonata, concerto | سوئٹ, سمفنی, سوناٹا, کنسرٹو | RK *سمفنی*; WP's titles write `سوناٹا` and `کنسرٹو` |
| movement, overture, variation | موومنٹ, اوورچر, ویری ایشن | WP *سمفونی* writes `موومنٹس`; the rest unsourced |
| a part of a work | حصہ | everyday word |
| march, hymn, lullaby, nocturne | مارچ, کلیسائی گیت, لوری, نوکٹرن | WP *لوری*; RK *لوری*. `حمد` praises God in Islam and `بھجن` names a Hindu song, so neither is a hymn |
| aria, tone poem, hornpipe, galop | آریا, ٹون پوئم, ہارن پائپ, گیلپ | unsourced, the European terms |
| folk tune; counter-melody | لوک دھن; ساتھ چلتی دوسری دھن | WP *لوک موسیقی*; follow `دھن` |
| attack, decay, sustain, release | اٹیک, ڈیکے, سسٹین, ریلیز | the terms of synthesizers |

### The interface glossary

| English | Urdu | Sources |
|---|---|---|
| Settings | ترتیبات | AN; FF |
| Songs (the library's panel); library | گانے; گانوں کی لائبریری | the app's own term |
| Open, Close, Cancel | کھولیں, بند کریں, منسوخ کریں | AN; FF |
| Back, Next, Continue | واپس جائیں, اگلا, جاری رکھیں | FF *واپس جائیں*; AN *اگلا*, *جاری رکھیں* |
| OK, Done | ٹھیک ہے, ہو گیا | AN |
| Skip | چھوڑیں | unsourced |
| Reset | ری سیٹ کریں | AN |
| Save | محفوظ کریں | FF; MSG *محفوظ کرنے* |
| Delete; Remove | حذف کریں; ہٹائیں | AN; MSG *حذف کریں*; FF *ہٹائیں*. The two acts differ here |
| Restore (a backup) | بحال کریں | unsourced |
| Search; find | تلاش کریں; ڈھونڈیں | AN; MSG |
| Play, Pause, Stop (playback) | چلائیں, روکیں, بند کریں | AN *چلائیں*, *روکیں* |
| Loop (button); a loop | لوپ; لوپ میں چلائیں | unsourced |
| Speed | رفتار; `پلے بیک کی رفتار` in help text | unsourced, the everyday word |
| Volume, Mute | والیوم, آواز بند کریں | AN *میڈیا والیوم*. `صوت` of FF reads formal |
| Fullscreen | فل اسکرین | FF writes `پوری سکرین`, which this guide spells by § 9 |
| Theme; Light, Dark, Like the system | تھیم; ہلکی, گہری, سسٹم کے مطابق | FF *تھیم*; the rest unsourced |
| Language | زبان | AN; FF |
| computer keyboard; computer key | کمپیوٹر کی بورڈ; کی بورڈ کا بٹن | AN *کی بورڈ*. MSG's `کلید` is the piano's key here, so the two never blur |
| touch screen | ٹچ اسکرین | unsourced |
| device; connect, disconnect | آلہ; منسلک کریں, منقطع کریں | AN |
| folder; file | فولڈر; فائل | AN *فائل*; MSG |
| browser | براؤزر | AN; FF |
| offline; internet; connection | آف لائن; انٹرنیٹ; کنکشن | FF *آف لائن*; AN *کنکشن* |
| Install, Update | انسٹال کریں, اپ ڈیٹ کریں | AN; FF |
| download; Loading…; Retry | ڈاؤن لوڈ; لوڈ ہو رہا ہے…; دوبارہ کوشش کریں | MSG; AN; FF |
| app; website | ایپ; ویب سائٹ | MSG; AN |
| version; new version; reload | ورژن; نیا ورژن; دوبارہ لوڈ کریں | AN; FF *صفحہ پھر لوڈ کریں* |
| Help, Tip | مدد, مشورہ | FF *مدد*; the rest unsourced |
| Try again | دوبارہ کوشش کریں | AN; FF; MSG § 2.2.1 |
| tap, click or press a control | دبائیں | unsourced. AN's `تھپتھپائیں` names a tap alone |
| press a computer key | دبائیں: `Esc دبائیں` | MSG § 5.4.3 keeps the key's name in Latin letters |
| choose (one of several) | منتخب کریں | MSG § 3.1; AN |
| a page of the site; a printed page | صفحہ; صفحہ | AN; FF |
| lesson, step, world | سبق, plural اسباق; مرحلہ; دنیا: `سبق 3` | the course's own terms |
| quiz; demo | کوئز; ڈیمو | everyday words |
| boss (a world's last lesson) | بڑا چیلنج | the course's own term |
| skip test | آگے بڑھنے کا ٹیسٹ | the course's own term |
| level; Level up! | لیول; لیول اپ! | the word of games |
| XP | XP, a kept word | the word of games |
| badge, achievement | بیج, کامیابی | unsourced |
| streak | لگاتار دن: `لگاتار 3 دن` | everyday words, unsourced |
| daily goal | روزانہ کا ہدف | everyday words, unsourced |
| score; points | اسکور; پوائنٹس | everyday words |
| stars | ستارے | everyday word |
| take (one recorded play) | کوشش | everyday word |
| Favourites | پسندیدہ | unsourced |
| track (of a MIDI file) | ٹریک | AN |
| progress | پیش رفت | everyday word, unsourced |
| backup | بیک اپ | unsourced |
| guide (a song's) | مشق کی گائیڈ | the app's own term, unsourced |
| a setting; options | سیٹنگ; اختیارات | MSG *سیٹنگ*; AN *اختیارات* |
| the player (of songs) | پلیئر | everyday word |
| Beginner, Easy, Medium, Hard | ابتدائی, آسان, درمیانہ, مشکل | the usual ladder of levels |
| Easy, Normal, Hard (a song) | آسان, عام, مشکل | the usual ladder of levels |
| common, rare, epic, legendary (a version) | کامن, ریئر, ایپک, لیجنڈری | the word of games in Pakistan |
| Perfect, Great, Good | پرفیکٹ, زبردست, اچھا | the word of rhythm games |
| Wrong note, Too short, Too long, Late | غلط نوٹ, بہت چھوٹا, بہت لمبا, دیر سے | everyday words |
| free play; pitch practice | کھل کر بجائیں; سر پہچاننے کی مشق | the course's own terms |
| hotkeys | کی بورڈ شارٹ کٹ | AN *شارٹ کٹس* |
| velocity (of a key) | زور | the same idea as dynamics |
| lane; timeline | لین; ٹائم لائن | the player's own terms |
| hit, miss, mistake | صحیح نوٹ, چھوٹا ہوا نوٹ, غلط نوٹ | everyday words |
| colour; glow; particles | رنگ; چمک; ذرات | everyday words |
| equaliser; reverb | ایکولائزر; ریورب | the terms of audio apps |
| camera; zoom; side view | کیمرا; زوم; سائیڈ ویو | FF *زوم* |
| lyrics; bar numbers | بول; میژر نمبر | everyday word; follows `میژر` |
| difficulty; length (of a song) | مشکل کا درجہ; دورانیہ | everyday words |
| record; preview; export | ریکارڈ کریں; جھلک; ایکسپورٹ کریں | AN; FF. FF's `پیش منظر` also means "foreground" in AN |
| filter; tag | فلٹر; ٹیگ | everyday words |
| open source | اوپن سورس | everyday word |
| guided course; play modes | رہنمائی والا کورس; بجانے کے موڈ | the app's own terms |
| scene; top bar; control bar | سین; اوپر کی پٹی; کنٹرول پٹی | the player's own terms |
| combo; multiplier; accuracy | کومبو; ملٹی پلائر; درستی | the word of rhythm games |
| range (of a keyboard) | رینج | everyday word |
| click (of the metronome) | ٹک | everyday word |
| hit line | ہٹ لائن | the player's own term |
| hand crossing | ہاتھ کراس کرنا | everyday words, unsourced |
| low, high band (of the equaliser) | لو, ہائی | the terms of audio apps; never `بیس`, which names a note |
| scoring; a scored take | اسکورنگ; اسکور والی کوشش | the player's own term |
| error (a title) | خرابی | AN. MSG's `نقص` reads formal |
| leave (a lesson, a page); skip | باہر نکلیں; چھوڑیں | everyday words. `چھوڑیں` also releases a key, never leaves a lesson |
| skill (a song's technique tag); a skill in general | تکنیک; ہنر | everyday words |
| size; shape | سائز; شکل | everyday words |
| opacity | گاڑھا پن | everyday word. `چمک` is only *glow* |
| in key widths (a unit); per second | کلید کی چوڑائی کے حساب سے; فی سیکنڈ | the player's own unit |
| the Original (a song's last version) | اوریجنل | the app's own term |
| a section named by an imperative, mid-sentence | `"بس پیانو بجائیں" والے حصے میں` | so the name never reads as a verb |
| a guide's stock practice steps | see *A guide's recurring steps* below | the guides' own forms, one per English step |
| dialog (a window over the page) | ونڈو | everyday word. `ڈائیلاگ` reads as a film's lines |
| About (a page, a heading); About an app | تعارف; `… کے بارے میں` | everyday words, unsourced |
| input, output; MIDI device | ان پٹ, آؤٹ پٹ; `MIDI` آلہ | the terms of audio apps; follows *device* |
| data; account; sync | ڈیٹا; اکاؤنٹ; سنک | everyday words |
| round (of a quiz or a drill) | راؤنڈ | the word of games |
| setup; default | سیٹ اپ; ڈیفالٹ | the terms of apps |
| channel; marker | چینل; مارکر | the terms of MIDI apps |
| expert (the button, the tools) | ماہر; ماہرانہ ٹولز | everyday word |
| recording; background track | ریکارڈنگ; بیک گراؤنڈ ٹریک | everyday words |
| composer; arrangement; collection; style | کمپوزر; ارینجمنٹ; مجموعہ; انداز | everyday words |
| course; map; stats; tab | کورس; نقشہ; اعداد و شمار; ٹیب | the course's own terms |
| On, Off, Auto | آن, آف, خودکار | the terms of apps |
| sponsor; sponsorship | اسپانسر; اسپانسرشپ | everyday words |

### Which "play" is which

- **A key, a note, a song on the piano:** `بجانا`. `C اور E ایک ساتھ بجائیں۔`
- **Starting playback of a song:** `چلانا`. The transport's *Play* is `چلائیں`, as Android labels it.
- **A game or a mode:** `گیم`, and `گیم موڈ` for *Game mode*.
- **A lesson's "Play again" that replays a demo:** `دوبارہ سنیں`, since the learner listens.
- **"Your turn":** `اب آپ کی باری۔`

### A guide's recurring steps

The song guides repeat these steps word for word. Each English step has one Urdu text in every guide.
A step that only differs in its bars or its section follows the nearest row's shape.

| English | Urdu |
|---|---|
| Play the whole song with both hands at three-quarter speed. | پورا گانا دونوں ہاتھوں سے تین چوتھائی رفتار پر بجائیں۔ |
| Join the hands on the whole song at three-quarter speed. | پورا گانا دونوں ہاتھوں سے تین چوتھائی رفتار پر بجائیں۔ |
| Play the whole song with both hands at full speed. | پورا گانا دونوں ہاتھوں سے پوری رفتار پر بجائیں۔ |
| Play the whole song with both hands, a little slower than written. | پورا گانا دونوں ہاتھوں سے، لکھی ہوئی رفتار سے تھوڑا آہستہ بجائیں۔ |
| Now play it at full speed. | اب اسے پوری رفتار پر بجائیں۔ |
| Now play it at full speed, with the pedal. | اب اسے پوری رفتار پر پیڈل کے ساتھ بجائیں۔ |
| Now play it at full speed, and let the last chord ring. | اب اسے پوری رفتار پر بجائیں، اور آخری کورڈ کی آواز گونجنے دیں۔ |
| Join the hands on the first eight bars, slowly. | پہلے آٹھ میژر دونوں ہاتھوں سے آہستہ آہستہ بجائیں۔ |
| Put both hands together on the first eight bars, slowly. | پہلے آٹھ میژر دونوں ہاتھوں سے آہستہ آہستہ بجائیں۔ |
| Put both hands together on the whole song, slowly. | پورا گانا دونوں ہاتھوں سے آہستہ آہستہ بجائیں۔ |
| Put both hands together, slowly. | دونوں ہاتھوں سے آہستہ آہستہ بجائیں۔ |
| Join the hands on the first verse, slowly. | پہلا انترا دونوں ہاتھوں سے آہستہ آہستہ بجائیں۔ |
| Join the hands on the first time through, slowly. | پہلی بار والا حصہ دونوں ہاتھوں سے آہستہ آہستہ بجائیں۔ |
| Join the hands on bars 9 to 16, slowly. | میژر 9 سے 16 تک دونوں ہاتھوں سے آہستہ آہستہ بجائیں۔ |
| Play the first four bars with the right hand alone, and let the song wait for each note. | پہلے چار میژر صرف دائیں ہاتھ سے بجائیں۔ گانا ہر نوٹ پر آپ کا انتظار کرے گا۔ |
| Play the right hand alone on the first eight bars, and let the song wait for each note. | پہلے آٹھ میژر صرف دائیں ہاتھ سے بجائیں۔ گانا ہر نوٹ پر آپ کا انتظار کرے گا۔ |
| Play bars 1 to 4 with the right hand alone, and let the song wait for each note. | میژر 1 سے 4 تک صرف دائیں ہاتھ سے بجائیں۔ گانا ہر نوٹ پر آپ کا انتظار کرے گا۔ |
| Play the right hand alone, slowly, and let the song wait for each note. | صرف دائیں ہاتھ سے آہستہ آہستہ بجائیں۔ گانا ہر نوٹ پر آپ کا انتظار کرے گا۔ |
| Play the left hand alone, and press the notes of each chord together. | صرف بائیں ہاتھ سے بجائیں، اور ہر کورڈ کے نوٹ ایک ساتھ دبائیں۔ |
| Now the left hand alone. It holds one shape for each bar. | اب صرف بایاں ہاتھ۔ یہ ہر میژر میں ایک ہی شکل میں رہتا ہے۔ |
| Play the Alberti bass alone until it rolls by itself: low, high, middle, high. | صرف البرٹی بیس بجائیں، یہاں تک کہ وہ خود بخود رواں ہو جائے: نیچے والا، اوپر والا، بیچ والا، اوپر والا۔ |
| Keep the Alberti bass soft, so the tune sings above it. | البرٹی بیس ہلکے سے بجائیں، تاکہ دھن اس کے اوپر گا سکے۔ |
| Play the right hand's thirds and sixths alone, and press both notes of each pair as one. | صرف دائیں ہاتھ کے تھرڈ اور سکستھ بجائیں، اور ہر جوڑی کے دونوں نوٹ ایک ساتھ دبائیں۔ |
| The tune is the top note of each pair, so let the upper finger lead. | ہر جوڑی کا اوپر والا نوٹ ہی دھن ہے، اس لیے اسے بجانے والی انگلی کو آگے رہنے دیں۔ |
| Play the right hand's chords alone, and let the top finger sing the tune. | صرف دائیں ہاتھ کے کورڈ بجائیں، اور سب سے اوپر والی انگلی کو دھن گانے دیں۔ |
| Play the top note of each chord a little louder than the others. | ہر کورڈ کا سب سے اوپر والا نوٹ باقی نوٹوں سے تھوڑا زور سے بجائیں۔ |
| Play the stride bass alone: jump down for the octave, then back up for the chord. | صرف اسٹرائیڈ بیس بجائیں: آکٹیو کے لیے نیچے چھلانگ لگائیں، پھر کورڈ کے لیے واپس اوپر آئیں۔ |
| Change the pedal on each new bass note, twice in every bar. | ہر نئے بیس نوٹ پر پیڈل بدلیں، یعنی ہر میژر میں دو بار۔ |
| Hold the pedal down for each whole bar, and change it right on the bar line. | ہر میژر میں پورا وقت پیڈل دبائے رکھیں، اور ٹھیک میژر لائن پر اسے بدلیں۔ |
| Up high, the octaves should ring like bells. Keep the wrist loose. | اوپر والے حصے میں آکٹیو گھنٹیوں کی طرح گونجنے چاہئیں۔ کلائی ڈھیلی رکھیں۔ |

More rules the guides settle:

- **"Let the song wait for each note" is its own sentence: `گانا ہر نوٹ پر آپ کا انتظار کرے گا۔`** The
  song is its subject, so no verb agrees with the learner.
- **"Slowly" is `آہستہ آہستہ`, and "soft" is `ہلکے سے`.** `آہستہ` alone stands only on `رفتار`, since
  `آہستہ بولیں` also means "speak softly".
- **The thumb is `انگوٹھا` in every guide,** and the other fingers are numbers: `انگلی 3`. A finger's name
  stands only where the English says it, such as "little finger", which is `چھوٹی انگلی`.
- **A counted beat is a digit in straight quotes,** and "and" is `اینڈ`: `"1 اینڈ 2 اینڈ"`.

### A lesson's recurring lines

The lessons repeat these lines. Each English line has one Urdu text in every world.

| English | Urdu |
|---|---|
| Well done. | شاباش! |
| Your turn. | اب آپ کی باری۔ |
| Your turn, after one bar of count-in. | ایک میژر کی گنتی کے بعد آپ کی باری۔ |
| Watch and listen. | دیکھیں اور سنیں۔ |
| Listen and watch. | سنیں اور دیکھیں۔ |
| Listen. | سنیں۔ |
| Put your right hand in C position. | دایاں ہاتھ C پوزیشن میں رکھیں۔ |
| Put your right thumb on middle C. | دائیں ہاتھ کا انگوٹھا مڈل C پر رکھیں۔ |
| Keep your hand where it is. | ہاتھ وہیں رہنے دیں۔ |
| Press Start and listen to four clicks first. | "شروع کریں" دبائیں، اور پہلے چار ٹک سنیں۔ |

- **A boss's title is `آخری چیلنج: <the song>`,** with `دونوں ہاتھوں سے` where the English says both hands.

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are, in Latin
  letters. Microsoft § 5.2 keeps product names untranslated.
- **A kept word stands where its Urdu noun puts it:** `MIDI کی بورڈ`, `PDF فائل`, `Windows کلید`.
  Microsoft's samples place it so, with no hyphen.
- **Units and formats:** BPM, FPS, PDF, USB, Hz, kHz, dB, ms, KB, MB, px and 3D. Microsoft § 4.1.1 keeps
  units in Latin letters, with a no-break space after the number: `10 KB`.
- **Technical names:** JavaScript, MIT, and a computer key such as Esc, Q or Z. Microsoft § 5.4.3 keeps
  Alt, Esc, Enter and Tab in Latin letters. A Roman numeral of a chord, such as V7, stays too.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari.
- **The printed marks of a score:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `rall.`, `cresc.`,
  `decresc.`, `dim.`, `a tempo` and `Ped.`
- **The Italian word behind a mark stays in Latin letters** where the English names it, such as `piano`,
  `forte`, `mezzo-piano` and `ritardando`. In Urdu letters, `پیانو` would read as the instrument.
- **A technique's name is an Urdu-script loanword,** as § 5 lists: `لیگاٹو`, `اسٹیکاٹو`, `کریشینڈو`.
- **Catalog numbers:** `BWV 1068`, `K. 525`.
- **The note letters and chord symbols,** as § 7 says.
- **A song title stays in Latin letters,** without quotes. A title is data shared by every locale, and
  the library searches it. Pakistani readers meet English titles in Latin letters every day.
- **A composer with an Urdu Wikipedia article takes its spelling:** `بیتھوون`, `موزارٹ`, `باخ`. A Latin
  name in every line reads foreign.
- **Every other person's name stays in Latin letters,** since a guessed spelling would mislead.
- **A city or a country Urdu news names takes its everyday Urdu spelling,** such as `ویانا` or `پیرس`.
  A small town stays in Latin letters, such as Hexham or Olomouc.
- **A generic dance or form is an Urdu-script loanword,** such as `والز`. A piece's title stays in
  Latin letters, such as Sarabande or Allegretto.
- **Every kept word in a sentence is isolated.** A message wraps it in `isolate()` where it is an
  argument. Where the text itself holds it, U+2068 and U+2069 wrap it in the text.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a
  learner does. "Learn Piano" is `پیانو سیکھیں`, and "Just Play Piano" is `بس پیانو بجائیں`.
- **The worlds' titles are** پیانو سے تعارف, پہلی دھنیں, ردھم, نوٹ پڑھنا, دونوں ہاتھ, اسکیل, کورڈ and
  احساس سے بجانا. `src/learn/course.ts` takes them when Urdu ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread.

## 7. Note names

- **Notes are letters:** C D E F G A B, uppercase, in Latin letters. The key labels show them, and Hindi,
  Urdu's sister, names notes the same way.
- **A letter is never spelled out in Urdu script,** as `سی` or `جی`. `جی` is also the honorific, and
  `سی` reads as a sound.
- **Sargam, `سا رے گا ما`, is never used.** It is movable, so it names no fixed key.
- **Each letter inside Urdu text is isolated,** so a following mark keeps its side of the line. A message
  wraps it in `isolate()`, and a fixed text wraps it in U+2068 and U+2069.
- **A sharp or a flat in running text is a word after the letter:** `F شارپ`, `B فلیٹ`, `C شارپ مائنر`.
  This is how a Pakistani learner reads `F♯` aloud.
- **A name the screen shows,** such as `F♯4` on a key, keeps the form of `src/theory/note-names.ts`. A
  text that points at that label writes it the same way.
- **The octave number is scientific:** middle C is `C4`. A lesson names a note by its place, as the
  English does: `مڈل C`.
- **"Low C" is `نیچے والا C`, and "high C" is `اوپر والا C`.** `اونچا` and `نیچا` would read as loud and
  soft. A sound's height is `اونچی پچ` or `نیچی پچ`.
- **A key is its letter and its quality:** `C میجر`, `A مائنر`. A chord adds `کورڈ`: `C کورڈ`,
  `A مائنر کورڈ`.
- **A spelled-out chord lists its letters with `،` and `اور`:** `C، E اور G`.
- **A note letter takes its postposition after a space:** `C پر`, `E سے`, `G تک`.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **`Intl` formats every number for `ur-PK`:** `1,234.5`, in Western digits. No digit or separator is set
  by hand.
- **Digits are Western:** `3`, never `۳`. CLDR's `ur-PK`, Android and Microsoft's examples write them.
  Microsoft § 4.1.9 allows both sets, and the one of CLDR wins.
- **A percent sign follows its number without a space:** `80%`, as `Intl` writes it.
- **Fingers, octaves, bars, beats and lessons keep their digits:** `میژر 3`, `انگلی 3`, `سبق 5`.
- **A small count the English spells out is an Urdu word in prose:** `تین کلیدیں`, `دو ہاتھ`.
- **An ordinal in prose is an Urdu word:** `پہلا میژر`, `تیسری انگلی`. Beside a digit, the number follows
  its noun: `میژر 3`.
- **Urdu has two plural forms, `one` and `other`.** `Intl` puts 1 alone in `one`, and 0 in `other`.
- **A counted noun that keeps its form is preferred,** such as `سبق`, `دن`, `نوٹ` or `میژر`. Then both
  forms read alike: `1 سبق`, `5 سبق`. Microsoft § 4.1.6 notes a noun after a plural number keeps its form.
- **Before a postposition, a counted noun takes its oblique plural:** `40 فائلوں میں سے 12`.
- **"X of Y" is `Y میں سے X`** in every counter, such as `10 میں سے 3`.
- **A time signature is printed as figures:** `3/4`. It stays left to right, so a message isolates it.
- **A range is written with words:** `1 سے 4 تک`. A dash between digits would reorder in a right-to-left
  line. Microsoft § 4.1.9 allows `تا` for the same reason.

## 9. Marks

Each rule has its pattern in the `ur` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A sentence ends with `۔` (U+06D4). An ASCII period stands only inside a number. | `(?<!\d)\.\|\.(?!\d)` |
| A comma is `،`. A Latin comma stands only inside a number. | `(?<!\d),\|,(?!\d)` |
| A semicolon is `؛`. | `;` |
| A question ends with `؟`. | `\?` |
| No space stands before `۔`, `،`, `؛`, `؟`, `!`, `:` or `%`. | `\s[۔،؛؟!:%]` |
| A space follows `۔`, `،`, `؛`, `؟` and `!` before the next word. | `[۔،؛؟!](?=[\p{L}\p{N}])` |
| A quote stands in straight double quotes. Never curly quotes or `« »`. | `[“”„«»]` |
| Digits are Western. | `[٠-٩۰-۹]` |
| No tatweel stretches a word. | `ـ` |
| A letter is Urdu's own: `ک`, `ی`, `ہ`, never Arabic's `ك`, `ي`, `ى`, `ه` or `ة`. | `[كيىهة]` |
| `ھ` only marks an aspirate, so it never starts a word. | `(?<![\p{L}\p{M}])ھ` |
| `ۓ` is written as `ئے`. | `ۓ` |
| A polite imperative of a stem in `ا` takes `ئیں`: `دبائیں`. | `ایں(?![\p{L}\p{M}])` |
| A range between digits takes words, never a dash. | `\d\s?[-–—]\s?\d` |
| The learner is `آپ`, never `تم` or `تو`. | `تم`, `تمہارا`, `تجھے`, `تیرا` and their forms, as whole words |
| An instruction is the polite imperative in `یں`. | `کرو`, `دباؤ`, `بجاؤ`, `کیجیے`, `دبائیے` and their kin, as whole words |

- **`۔` ends every sentence,** in a help text, a lesson and a guide. Microsoft § 4.1.9 says "Urdu does
  not use full stop", and Android uses `۔` 842 times and the Latin period never.
- **A label or a title takes no `۔`,** as Android's labels take none.
- **`؟` and `!` end a question and an exclamation,** with no `۔` after them.
- **Quotes are straight double quotes,** as Microsoft's § *Quotation Marks* and Android write them. They
  look the same from either side, so a right-to-left line never mirrors them wrong.
- **An interface word the learner looks for stands in straight quotes:** `"چلائیں" دبائیں۔`
- **A counted beat or syllable stands in straight quotes:** `"1، 2" گنیں۔`
- **An ellipsis is the one character `…`,** as Android writes `لوڈ ہو رہا ہے…`.
- **An em dash is avoided,** as Microsoft § 4.1.9 says it does not apply to Urdu. A `،`, parentheses or
  a new sentence take its place.
- **No space stands inside parentheses,** as Microsoft § 4.1.9 asks.
- **Initial `s` before `k`, `t` or `p` takes a prothetic alef:** `اسکیل`, `اسٹاف`, `اسکرین`, `اسکور`. Urdu
  Wikipedia prints it about twice as often as the bare form, as § 12 counts. Before `l` or `n` it takes
  none: `سلر`, `سلائیڈ`.
- **Final `ہ` and `ے` are Urdu's own letters,** never Arabic's `ه` and `ي`. A keyboard set for Arabic types
  the wrong ones, and the pattern above catches them.
- **No diacritic is written,** but where a word would be ambiguous without it, such as `بِکھیر` or
  `کُل`. Then it marks only the letter that settles it.
- **Emphasis is bold, never italic.** A Nastaliq font has no true italic, and a slanted one reads badly.
- **No text uses `letter-spacing`,** since it breaks the joined letters. `src/ui/base.css` sets it to zero
  under `:lang(ur)`.

## 10. Length

Urdu runs about as wide as English. A Nastaliq line needs far more height, since its words slope down
from right to left and its dots reach far below the line. `src/ui/tokens.css` sets the Nastaliq font
stack, with Naskh as the fallback, and gives `:lang(ur)` the tallest line height.

| Long | Short, for a label |
|---|---|
| سسٹین پیڈل | پیڈل |
| کمپیوٹر کی بورڈ | کی بورڈ |
| لگاتار مشق کے دن | لگاتار دن |
| پلے بیک کی رفتار | رفتار |
| لوپ میں چلائیں | لوپ |
| سر پہچاننے کی مشق | سر کی مشق |

- **A label stays a phrase, never a clipped word.** `گانا کھولیں` may become `کھولیں`.
- **A button drops `کریں` only where the noun alone is the everyday label,** as `ترتیبات` and `لوپ` are.
- **A word never breaks across a line.** Urdu takes no hyphen, so a text needs no soft hyphen.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Urdu | Why it beat the next best |
|---|---|---|---|
| Button | Continue | جاری رکھیں | Android's verb. `اگلا` is *Next*, so it stays free for that. |
| Transport tooltip | Play or pause | چلائیں یا روکیں | `چلائیں` is the playback verb. `بجائیں` would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | ترتیبات میں منتخب میژر لوپ میں چلائیں | `منتخب` is the word of apps. `متعین کردہ` reads like a manual. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | آپ کے نوٹوں کا انتظار / گانا آپ کے ہر نوٹ پر رکتا ہے، جب تک اس کی ساری کلیدیں دبی نہ ہوں۔ | The song and the keys are the subjects, so no verb agrees with the learner. |
| Error | Your browser refused to save. Nothing changed. | براؤزر میں محفوظ نہیں کیا جا سکا۔ کچھ نہیں بدلا۔ | Passive and impersonal, as Android phrases a failure. `آپ کے براؤزر نے انکار کیا` gives the browser a will. |
| Toast | A new version is ready. | نیا ورژن تیار ہے۔ | `ورژن` is the app word, as Android and Firefox write it. `نسخہ` reads like a manuscript. |
| Dialog | Reset all progress? / Are you sure? | کیا ساری پیش رفت ری سیٹ کریں؟ / کیا آپ واقعی ایسا کرنا چاہتے ہیں؟ | `کیا` asks plainly. The second uses the honorific plural of § 4. |
| Counter | 3 of 8 lessons | 8 میں سے 3 سبق | The order of Urdu counters. `3 / 8` reads like a fraction. |
| Streak | 3-day streak | لگاتار 3 دن | Short and everyday. `3 دن کی اسٹریک` is a calque. |
| Feedback | Right! | صحیح! | A teacher's word. `درست جواب!` reads like an exam sheet. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | السلام علیکم! میں یہاں آپ کو پیانو سکھانے کے لیے ہوں۔ چلیں، شروع کریں؟ | No verb gives the teacher a gender. `سکھاؤں گا` would make the teacher a man. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | رات کا الو / رات 10 بجے یا اس کے بعد کوئی سبق مکمل کریں۔ | `رات کا الو` keeps the joke and names no gender. The condition is an imperative, so it has none. |
| Joke | Quality control is a cat that walks over the keys now and then. | کوالٹی کی جانچ ایک بلی کرتی ہے، جو کبھی کبھی کلیدوں پر چل پڑتی ہے۔ | The cat is the subject, so the verbs agree with it. The deadpan stays. |
| Level up | Level up! / Every lesson takes you further. Keep going! | لیول اپ! / ہر سبق آپ کو ایک قدم آگے لے جاتا ہے۔ یوں ہی جاری رکھیں! | `لیول اپ` is the word of games. `درجہ بلند ہوا` reads like a system log. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | دایاں پیڈل سسٹین پیڈل ہے۔ جب تک یہ دبا رہتا ہے، کلید چھوڑنے کے بعد بھی ہر نوٹ گونجتا رہتا ہے۔ | `کلید چھوڑنے کے بعد` is an infinitive, so the learner has no gender. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | اب آپ کی باری۔ دائیں ہاتھ کا انگوٹھا مڈل C پر رکھیں، اور C اور E ایک ساتھ بجائیں۔ | Two polite imperatives, as a teacher says them. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | چھوٹے گروپ میں کتنی کالی کلیدیں ہیں؟ / ایک، دو، تین، چار | Each answer is a bare number word, as a learner says it aloud. |
| Rhythm | Count "1-2" for each half note. | ہر ہاف نوٹ پر "1، 2" گنیں۔ | `ہاف نوٹ` is what learners say. A coinage such as `نیم سر` reads like a textbook. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | بیتھوون نے یہ دھن اپنی نویں سمفنی کے آخری موومنٹ کے لیے لکھی۔ یہ پہلی بار 1824 میں ویانا میں بجائی گئی۔ | The ergative `نے` lets the verb agree with `دھن`. The composer takes Urdu Wikipedia's spelling. |
| Guide, tricky bar | Look before you jump. | چھلانگ لگانے سے پہلے دیکھ لیں۔ | Short and imperative, as the English is. |
| Mode name | Free jam | کھل کر بجائیں | An invitation, as the course's free play is. `فری جیم` would stay opaque. |

## 12. Sources

- **Microsoft Urdu Localization Style Guide,** `aka.ms/urdu-styleguide`, written for Pakistan. It settled
  the plain register, the `یں` imperative over `کیجیے`, the gender-neutral wording, `۔`, `،`, the straight
  quotes, the units and the kept product names. It lists no interface terms, and it allows both digit sets.
- **Android's framework strings,** `values-ur`. They settled `ترتیبات`, `کھولیں`, `منسوخ کریں`, `حذف کریں`,
  `ہٹائیں`, `ٹھیک ہے`, `ہو گیا`, `اگلا`, `چلائیں`, `روکیں`, `خرابی` and `دوبارہ کوشش کریں`. They confirmed
  `۔`, `؟`, straight quotes, `…`, Western digits, the passive failures and the rarity of `براہ کرم`.
- **Firefox's Urdu strings,** `mozilla-l10n/firefox-l10n`. They confirmed `ترتیبات`, `محفوظ کریں`,
  `واپس جائیں`, `مدد`, `تھیم` and `زوم`. Their quality is uneven, so no term rests on them alone.
- **CLDR,** through `Intl`. It settled the Western digits of `ur-PK`, the percent sign and the plural
  forms `one` and `other`.
- **Urdu Wikipedia's music articles,** each named in the glossary. Western theory has almost no article
  there. They settled `پیانو`, `کلید`, `اسٹاف`, `دھن`, `موومنٹ`, `لوری`, the fingers and the composers'
  spellings.
- **Urdu Wikipedia's full-text search** settled the prothetic alef. `اسٹاف` has 1,199 hits to 621 for
  `سٹاف`, and `اسکیل` 155 to 72. Pakistani newspapers print the bare form more often.
- **The Rekhta dictionary,** `rekhta.org/urdudictionary`. It confirmed `کلید`, `دھن`, `سمفنی` and `لوری`.
  It gives `نوٹ` no musical sense.
- **No Urdu piano method, lesson page or school music book was reached.** No search engine answered a
  script, so most terms of notation rest on no Urdu source.

## Open

- No Urdu piano method was reached. A Pakistani piano teacher's read would confirm the loanwords of
  notation: the note values, `ریسٹ`, `ٹائی`, `سلر`, `ٹائم سگنیچر` and `اسکیل کا نشان`.
- **A note is `نوٹ`,** the word of Western notation. Urdu Wikipedia and Rekhta call a pitch `سُر`, which
  also names a svara of a raga. A teacher may prefer `سُر` for the sound.
- **Practice is `مشق`.** Urdu Wikipedia writes `ریاض`, the word of a musician's daily training, and a
  teacher may prefer it.
- **A bar is `میژر`,** chosen over `بار`, which collides with "time". A teacher may say `بار` and read it
  from context.
- **The key of a song is `اسکیل`,** as Hindustani musicians say it. A teacher may prefer to keep scale and
  key apart.
- **`F شارپ` and `B فلیٹ` have no written source.** They are how the sign is read aloud.
- A read of the course by an Urdu speaker from India would catch words that read as Pakistan's only.
- Many terms rest on one source or none, as the glossary marks them. Each is the everyday word, chosen
  over a coinage no learner says.
