# Japanese: the style guide and glossary

Every writer and reviewer of a Japanese text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Japanese. The machine's half
of these rules is the `ja` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is standard Japanese,** as schools, newspapers and the big systems write it. Pages carry
  `lang` `ja`, and `Intl` formats for `ja`. The locale table's row says so, and this guide confirms it.
- **The readers are beginners of every age,** children and adults, who learn piano alone in a browser.
- **A child reads the course too,** so a rare kanji gives way to kana or an everyday word. Write `一緒に`,
  `真ん中`, `弾く`, but `むずかしい` and `やさしい` in kana.
- **The script is kana and Han.** The font stack of `src/ui/tokens.css` names Japanese fonts first, so a
  Han character takes its Japanese shape.

| Avoid | Write | Why |
|---|---|---|
| あなた | leave the learner out | see *Address* |
| 弾いてください in every step | 弾きましょう, 弾いてみましょう | a teacher invites; `ください` on each step reads like a manual |
| プレイヤー, ブラウザ, フォルダ | プレーヤー, ブラウザー, フォルダー | Microsoft's long vowel rule, § 9 |
| 4分の3拍子 in a label | 3/4拍子 | the figure is what the score prints |
| アウフタクト | 弱起 | WP *弱起* says アウフタクト is common, but 弱起 is plain to a child |
| 休止符 | 休符 | WP *音符* gives 休止符 as the rarer form |

## 2. Address

- **The learner is never named.** Japanese leaves the person out, and `あなた` reads cold or distant.
  Write `次は右手で弾きましょう`, never `あなたは右手で弾きます`.
- **Where the learner must be named, the sentence names the act instead:** `自分のペースで` or
  `弾いた音`. A possessive like `あなたの` is never needed.
- **A sentence uses です・ます,** in prose, help texts, errors and guides. Plain `だ` or `である` never
  ends a sentence.
- **An instruction is an invitation:** `〜しましょう` or `〜してみましょう`. A teacher of beginners
  speaks so. `〜してください` serves a safety note or a request the app makes: `ページを再読み込みしてください。`
- **A button, a menu item or a tab is a short noun or a plain verb:** `続ける`, `曲を開く`, `設定`. No
  `ます` goes on a button.
- **A setting's name is a noun phrase,** and its help text is a plain sentence about what it does.
- **A question to the learner is polite:** `このレッスンを終了しますか？`
- **A finished act takes `ました`:** `レッスンをクリアしました！`
- **An error is impersonal and names what failed:** `保存できませんでした。` It never blames the learner.
- **One verb serves a tap and a click: `押す`.** `「再生」を押します` reads right on a phone and a
  computer. Picking one of several is `選ぶ`. A computer key is pressed too: `Escキーを押します`.
- **A piano key is played, never pressed in a lesson:** `ドを弾きます`. A key held down is `押さえる`.

## 3. Voice

Warm, plain and short, as a good teacher speaks. Prefer the everyday word: `使う` over `使用する`,
`もし` over `仮に`, `できる` over `可能である`. A playful text keeps its play.

| English | Japanese | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | こんにちは！ピアノの先生です。一緒に弾いてみましょう！ | `一緒に〜しましょう` invites. `先生` has no gender, and no `あなたの` is needed. |
| Not quite. Try again. | おしい！もう一度弾いてみましょう。 | `おしい` is how a teacher softens a miss. `不正解` would read like a test. |
| Every lesson takes you further. Keep going! | レッスンを重ねるたびに上達します。この調子でがんばりましょう！ | `この調子で` cheers the learner on. `続けてください` reads like a machine. |

## 4. Gender

- **Japanese verbs and adjectives never agree with a person,** so most texts carry no gender.
- **No pronoun names the learner:** never `彼`, `彼女` or `あなた`. Leave the person out.
- **No word for a person carries an age or a gender:** never `くん`, `ちゃん`, `お兄さん` or
  `お姉さん`. A learner may be any age.
- **No sentence ending carries a gender,** such as `〜わ` or `〜ぜ`. です・ます carries none.
- **The teacher has no gender either.** The ape is `ピアノの先生`, and a guide says `先生`.
- **A composer named in a guide keeps the pronoun their sources use,** since a guide states facts. Japanese
  mostly repeats the name instead.

## 5. Terms

One term per idea, in every file. Sources: WP is Japanese Wikipedia, by article title, each read for this
guide. JM is the Japanese piano methods for beginners, as Japanese teachers use them. MS is Microsoft's
Japanese style guide and its terminology. OS is the Japanese interface of Windows, Android and iOS. JM, MS
and OS were not read online for this guide; § 12 says so.

### The piano glossary

| English | Japanese | Sources |
|---|---|---|
| key (of the piano) | 鍵盤: `ドの鍵盤` | WP *鍵盤*; JM |
| white key, black key | 白鍵, 黒鍵 | WP *黒鍵*; JM |
| keyboard (the piano's, or a MIDI one) | 鍵盤; `MIDIキーボード` for the device | WP *鍵盤*; OS |
| note (a sound) | 音 | WP *音高*; JM |
| note (a written sign) | 音符 | WP *音符*; JM |
| middle C | 真ん中のド | WP *中央ハ*, which says Japan calls it so; JM |
| octave | オクターブ | WP *オクターヴ*; JM. The article's ヴ is literary; methods write ブ. |
| half step, whole step | 半音, 全音 | WP *半音*, *全音*; JM |
| sharp, flat, natural (the signs) | シャープ, フラット, ナチュラル | WP *シャープ (記号)*, *フラット (記号)*, *ナチュラル (記号)*; JM |
| accidental | 臨時記号 | WP *臨時記号*; JM |
| staff | 五線; `五線譜` for the notation as a whole | WP *五線譜*; JM |
| grand staff | 大譜表 | WP *大譜表*; JM |
| treble clef, bass clef | ト音記号, ヘ音記号 | WP *音部記号*; JM |
| ledger line | 加線: `下に加線1本` | WP *加線*; JM |
| landmark (a note read at a glance) | 目印の音 | the course's own term, defined where it first appears |
| bar | 小節 | WP *小節*; JM |
| bar line | 小節線 | WP *小節*; JM |
| time signature | 拍子記号 | WP *拍子*; JM |
| beat (one count of a bar) | 拍: `1小節に3拍` | WP *拍子*; JM |
| the beat (the steady pulse) | 拍, `拍を感じる`; `ビート` in the player | WP *拍子*; JM |
| three-four time | 3/4拍子, read 4分の3拍子 | WP *拍子*; JM |
| count-in | カウント | WP *カウント*; JM |
| rhythm | リズム | WP *リズム*; JM |
| tempo | テンポ | WP *テンポ*; JM |
| metronome | メトロノーム | WP *メトロノーム*; JM |
| whole, half, quarter note | 全音符, 2分音符, 4分音符 | WP *音符*, which writes the digits; JM |
| eighth, sixteenth note | 8分音符, 16分音符 | WP *音符*; JM |
| dotted | 付点: `付点2分音符` | WP *音符*; JM |
| rest; quarter rest | 休符; 4分休符 | WP *音符*; JM. A hand that rests `休む` |
| on the beat | 拍に合わせて | everyday word |
| tie | タイ | WP *スラー*, which sets it apart; JM |
| slur | スラー | WP *スラー*; JM |
| repeat sign | 反復記号; `リピート記号` in a lesson | WP *反復記号*; JM |
| first, second ending | 1番カッコ, 2番カッコ | JM, one source |
| first, second time through | 1回目, 2回目 | everyday word |
| pickup, upbeat | 弱起 | WP *弱起*; JM |
| syncopation | シンコペーション | WP *シンコペーション*; JM |
| scale | 音階; `スケール` where a guide speaks of practice | WP *音階*; JM |
| major, minor (a key) | 長調, 短調 | WP *調*; JM |
| key (of a song) | 調 | WP *調*; JM |
| key signature | 調号 | WP *調号*; JM |
| scale degree | 第〜音: `第5音`; the tonic is `主音` | WP *主音*, *音度*; JM |
| chord | 和音; a named chord is `Cコード`, as § 7 says | WP *和音*, *コードネーム*; JM |
| triad; major, minor triad | 三和音; 長三和音, 短三和音 | WP *三和音*, *和音*; JM |
| root | 根音 | WP *和音*; JM |
| inversion; root position | 転回形; 基本形 | JM; WP *和音* names the root position only |
| G seventh (chord) | G7コード | WP *属七の和音*, *コードネーム*; JM |
| broken chord | 分散和音 | WP *分散和音*; JM |
| arpeggio | アルペジオ | WP *アルペッジョ*; JM. Methods write アルペジオ. |
| Alberti bass, waltz bass | アルベルティ・バス, ワルツの伴奏型 | WP *アルベルティ・バス*; the course's own term |
| bass note | 低音, `いちばん下の音` in a lesson | WP *和音*; JM |
| third, fourth, fifth, sixth | 3度, 4度, 5度, 6度 | WP *音程*; JM |
| major third, minor third | 長3度, 短3度 | WP *音程*; JM |
| open fifth | 空虚5度 | WP *空虚五度*, one source |
| step, skip (between keys) | となりの音へ進む, 1つとばす | everyday words; JM |
| tune, melody | メロディー | WP *メロディ*; MS writes the long vowel |
| phrase | フレーズ | WP *フレーズ*; JM |
| call and answer (phrases) | 呼びかけとこたえ | the course's own term, unsourced |
| pattern (of notes) | パターン; 音型 in a guide | WP *オスティナート*, one source |
| verse, chorus | Aメロ, サビ | WP *サビ*, one source |
| a numbered verse (a strophe) | `1番`, `2番` | everyday words |
| coda | コーダ | WP *コーダ*; JM |
| dynamics | 強弱 | WP *強弱法*; JM |
| loud, soft | 強く, 弱く | WP *強弱法*; JM |
| legato | レガート, `なめらかに` in a lesson | WP *レガート*; JM |
| staccato | スタッカート, `短く切って` in a lesson | WP *スタッカート*; JM |
| crescendo, diminuendo | クレッシェンド, ディミヌエンド | WP *クレッシェンド*, *強弱法*; JM |
| hairpin | クレッシェンド記号, ディミヌエンド記号 | WP *強弱法*; JM |
| mark (p, f, rit.) | 記号 | WP *演奏記号*; JM |
| fermata | フェルマータ | WP *フェルマータ*; JM |
| slow down, back in time | だんだん遅く, もとの速さで | WP *リタルダンド*; JM |
| turn (ornament) | ターン | WP *装飾音*; JM |
| double notes | 重音 | JM, one source |
| stride (the bass style) | ストライド奏法 | the guides' own term, unsourced |
| a run (fast notes) | 速いパッセージ | the guides' own term |
| sustain pedal | ダンパーペダル; `右のペダル` in a lesson | WP *ピアノ*; JM |
| soft pedal | ソフトペダル; `左のペダル` in a lesson | WP *ペダル* writes 弱音ペダル; JM writes ソフトペダル |
| press a pedal, lift it | ペダルを踏む, ペダルを離す | WP *ピアノ*; the plain verbs of a foot |
| fingering | 指使い; 運指 in a guide | WP *運指*; JM |
| finger numbers | 1 親指, 2 人差し指, 3 中指, 4 薬指, 5 小指: `3の指` | WP *指番号*; JM |
| right hand, left hand | 右手, 左手 | WP *ピアノ*; JM |
| hand position; C position | 手の位置; ドのポジション | JM; the course's own term |
| hand shape | 手の形 | everyday word |
| thumb under, finger over | 指くぐり, 指越え | JM, one source |
| lift (a finger, a key) | 上げる, 離す | everyday words |
| land (on a key, a beat) | 〜に着く, 〜に乗る | everyday words |
| jump, climb, slide | とぶ, 上がる, すべらせる | everyday words; `上行`, `下行` where a guide speaks of a line |
| stretch, spread (the hand) | 広げる | everyday word |
| roll (a chord) | アルペジオで弾く | the guides' own term |
| rock (between two keys) | 行き来する | everyday word |
| wrist | 手首 | everyday word |
| let ring | 音を響かせる | everyday word |
| fingertips | 指先 | everyday word |
| by feel | 手の感覚で | everyday word |
| sight-reading | 初見 | JM, one source |
| ear training | 聴音 | JM, one source |
| play (the piano, a key, a note) | 弾く | WP *ピアノ*; JM |
| practise | 練習する | everyday word |
| song; piece | 曲 | WP *楽譜*; JM |
| sheet music | 楽譜 | WP *楽譜*; JM |
| pitch | 音の高さ; 音高 in a guide | WP *音高*; JM |
| transpose | 移調 | WP *移調*; JM |
| stem, note head | 符幹, 符頭 | WP *符幹*, *符頭*; JM says `ぼう` and `たま` to a child |
| piano bench | ピアノ椅子 | everyday word |
| at full speed; at three-quarter speed | もとの速さで; 4分の3の速さで | the guides' own terms |
| waltz | ワルツ | WP *ワルツ*, one source |
| carol; sea shanty; jig | キャロル; 船乗りの歌; ジグ | WP *キャロル*, *ジグ*; 船乗りの歌 is unsourced, see *Open* |
| suite, symphony, sonata, concerto | 組曲, 交響曲, ソナタ, 協奏曲 | WP, by each word's article |
| movement, overture, variation | 楽章, 序曲, 変奏曲 | WP, by each word's article |
| march, hymn, lullaby, nocturne | 行進曲, 賛美歌, 子守唄, 夜想曲 | WP, by each word's article |
| aria, tone poem, hornpipe, galop | アリア, 交響詩, ホーンパイプ, ギャロップ | WP, by each word's article |
| attack, decay, sustain, release | アタック, ディケイ, サステイン, リリース | WP *ADSR*, one source |

### The interface glossary

| English | Japanese | Sources |
|---|---|---|
| Settings | 設定 | MS; OS |
| Songs (the library's panel); library | 曲; 曲ライブラリー | MS; the app's own term |
| Open, Close, Cancel | 開く, 閉じる, キャンセル | MS; OS |
| Back, Next, Continue | 戻る, 次へ, 続ける | MS; OS |
| OK, Done | OK, 完了 | MS; OS |
| Skip | スキップ | MS; OS |
| Reset | リセット | MS; OS |
| Save, Delete | 保存, 削除 | MS; OS |
| Restore (a backup) | 復元 | MS; OS |
| Search | 検索 | MS; OS |
| Play, Pause, Stop (playback) | 再生, 一時停止, 停止 | MS; OS |
| Loop (button); a loop | ループ; ループ再生 | MS; OS |
| Speed | 速さ; 再生速度 in help text | MS; OS |
| Volume, Mute | 音量, ミュート | MS; OS |
| Fullscreen | 全画面表示 | MS; OS |
| Theme; Light, Dark, Like the system | テーマ; ライト, ダーク, システムに合わせる | MS; OS |
| Language | 言語 | MS; OS |
| computer keyboard; computer key | パソコンのキーボード; キー | MS; OS. A piano's key is 鍵盤, so the two never blur. |
| touch screen | タッチスクリーン | MS; OS |
| device; connect, disconnect | デバイス; 接続, 切断 | MS; OS |
| folder | フォルダー | MS; OS |
| browser | ブラウザー | MS; OS |
| offline | オフライン | MS; OS |
| Install, Update | インストール, 更新 | MS; OS |
| app | アプリ | MS; OS |
| Help, Tip | ヘルプ, ヒント | MS; OS |
| Try again | もう一度 | MS writes 再試行 for a system retry; a teacher says もう一度 |
| tap or click a control | 押す | MS; OS |
| press a computer key | 押す | MS; OS |
| lesson, step, world | レッスン, ステップ, ワールド: `レッスン3` | the course's own terms |
| quiz; demo | クイズ; お手本 | everyday words |
| boss (a world's last lesson) | ボス; a boss's title is `ボス：「喜びの歌」` | the word of games |
| skip test | とび級テスト | the course's own term |
| level; Level up! | レベル; レベルアップ！ | the word of games |
| XP | XP, a kept word | the word of games |
| badge, achievement | バッジ, 実績 | MS; OS |
| streak | 連続記録; `3日連続` | everyday word, unsourced |
| daily goal | 1日の目標 | everyday word, unsourced |
| score; points | スコア; 点 | MS |
| stars | 星 | everyday word |
| take (one recorded play) | 演奏 | everyday word |
| Favourites | お気に入り | MS; OS |
| track (of a MIDI file) | トラック | MS |
| progress | 進み具合; `進捗` in a setting | MS; OS |
| backup | バックアップ | MS; OS |
| guide (a song's) | 練習ガイド | the app's own term, unsourced |
| a setting; options | 設定; オプション | MS |
| the player (of songs) | プレーヤー | MS |
| Beginner, Easy, Medium, Hard, Advanced, Expert | 入門, やさしい, ふつう, むずかしい, 上級, エキスパート | the usual ladder of levels |
| Easy, Normal, Hard (a song) | やさしい, ふつう, むずかしい | the usual ladder of levels |
| common, rare, epic, legendary (a version) | コモン, レア, エピック, レジェンド | the word of games |
| Perfect, Great, Good | パーフェクト, グレート, グッド | the word of rhythm games |
| Wrong note, Too short, Too long, Late | 違う音, 短すぎ, 長すぎ, 遅れた | everyday words |
| free play; pitch practice | 自由に弾く; 音当て練習 | the course's own terms |
| hotkeys | ショートカットキー | MS; OS |
| velocity (of a key) | ベロシティ | MS; the MIDI word |
| lane; timeline | レーン; タイムライン | the player's own terms |
| hit, miss, mistake | ヒット, ミス, 弾きまちがい | the word of rhythm games |
| colour; glow; particles | 色; 光; パーティクル | MS |
| equaliser; reverb | イコライザー; リバーブ | MS |
| camera; zoom; side view | カメラ; ズーム; 横からの視点 | MS; the player's own terms |
| lyrics; bar numbers | 歌詞; 小節番号 | everyday words |
| difficulty; length (of a song) | 難易度; 長さ | everyday words |
| add; remove | 追加; 削除 | MS; OS |
| open source | オープンソース | MS |
| guided course; play modes | レッスンコース; 演奏モード | the app's own terms |
| scene; top bar; control bar | シーン; 上部バー; 操作バー | the player's own terms |
| combo; multiplier; accuracy | コンボ; 倍率; 正確さ | the word of rhythm games |
| record; preview; export | 録音; 試聴; エクスポート | MS |
| filter; tag | 絞り込み; タグ | MS |
| range (of a keyboard) | 音域 | everyday word |
| click (of the metronome) | クリック音 | everyday word |
| hit line | 判定ライン | the word of rhythm games |
| hand crossing | 手の交差 | everyday word, unsourced |
| low, high band (of the equaliser) | 低域, 高域 | MS; never 低音 or 高音, which name notes |
| scoring; a scored take | 採点; 採点つきの演奏 | the player's own term |
| Retry (a failed download) | 再試行 | MS; a system retry, where a lesson says もう一度 |
| falling note (in the scene); note on a staff | ノート; 音符 | the player's own term; WP *音符* |
| sound set | 音源セット | the player's own term |
| demo song; the Original (a song's last step) | デモ曲; 原曲 | everyday words |
| Your songs (the library's own shelf) | 自分の曲 | keeps the learner unnamed |
| opacity; thickness | 不透明度; 太さ | MS |
| Style (a tag kind); Classical (the period) | ジャンル; 古典派 | WP *古典派音楽*; クラシック names all classical music |
| Sponsor; Legal notice; Your data | 応援する; 運営者情報; データ | everyday words |
| a guide's stock practice steps | `左手だけで弾きましょう。`, `両手でゆっくり弾きましょう。`, `両手で、4分の3の速さで通して弾きましょう。`, `両手で、楽譜より少しゆっくり通して弾きましょう。`, `両手で、もとの速さで通して弾きましょう。`, `今度はもとの速さで弾きましょう。`, `もとの速さで、ペダルもつけて弾きましょう。`, `最初の4小節を右手だけで弾きましょう。曲は1音ずつ待ってくれます。` | the guides' own forms, one per English step |

### Which "play" is which

- **A key, a note, a song on the piano:** `弾く`. `ドとミを一緒に弾きましょう。`
- **Starting playback of a song:** `再生`. The transport's *Play* is `再生`.
- **A game or a mode:** `ゲーム`, and `ゲームモード` for *Game mode*.
- **A lesson's "Play again" that replays a demo:** `もう一度聴く`, since the learner listens.
- **"Your turn":** `弾いてみましょう！`. Japanese names no one whose turn it is, so `あなたの番` never stands.

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **Units and formats:** BPM, FPS, PDF, USB, Hz, kHz, dB, ms, KB, MB, px and 3D.
- **Technical names:** JavaScript, MIT, a computer key such as Esc, Q or Z, and the pedal mark Ped. A
  Roman numeral of a chord, such as V7, stays too.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari.
- **The printed marks of a score:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `rall.`, `cresc.`,
  `decresc.`, `dim.` and `a tempo`. A lesson names each one's meaning once: `f（フォルテ、強く）`.
- **The Italian word behind a mark is written in katakana,** as Japanese methods print it: `ピアノ`,
  `フォルテ`, `メゾピアノ`, `リタルダンド`. Where the English quotes the Italian itself, it stays Latin.
- **Catalog numbers:** `BWV 1068`, `K. 525`.
- **Chord symbols,** as § 7 says.
- **The song titles of the library stay as they are.** A title is data shared by every locale, and the
  library searches it.
- **In prose, a work takes its usual Japanese name,** as Japanese Wikipedia gives it: `「エリーゼのために」`,
  `「喜びの歌」`. A song or a piece stands in `「」`. A film, a book, an opera, a ballet or a collection
  stands in `『』`: `『くるみ割り人形』`, `『シャイニング』`.
- **A work with no settled Japanese name keeps its English title in `「」`.** The writer adds that title to
  the `kept` list.
- **A composer takes the katakana name Japanese Wikipedia gives:** `ベートーヴェン`, `モーツァルト`,
  `バッハ`. This changes the goal's decision to keep the composers' names in Latin letters. A Japanese
  teacher never writes *Beethoven* in a Japanese sentence, and every Japanese method uses katakana.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a
  learner does. "Learn Piano" is `ピアノを学ぶ`, and "Just Play Piano" is `気軽にピアノ`. Neither takes quotes.
  Inside a sentence, "Learn Piano" is `ピアノを学ぶコース`, since a bare `ピアノを学ぶで` reads as a verb.
- **The worlds' titles are** ピアノとなかよし, はじめてのメロディー, リズム, 楽譜を読む, 両手で弾く,
  音階と調, 和音, and 表現. `src/learn/course.ts` takes them when Japanese ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread.

## 7. Note names

- **Notes are ドレミ in katakana, fixed do:** ド レ ミ ファ ソ ラ シ. WP *音名と階名* says modern Japan
  uses these syllables, and Japanese piano methods teach a beginner so. The locale table names `solfege`.
- **A name the code builds keeps the form of `src/theory/note-names.ts`:** `ド4`, `ファ♯4`, `シ♭`. A text
  that points at that label writes it the same way.
- **A sharp or a flat in prose is the sign after the note:** `ファ♯`, `シ♭`. Read aloud, it is
  `ファのシャープ`, and a lesson may write that once.
- **A key takes the Japanese letter names, as schools teach them:** ハ長調, イ短調, ト長調, ヘ長調. WP
  *音名と階名* gives `ハ ニ ホ ヘ ト イ ロ` for `C D E F G A B`. Western letters such as Cメジャー are
  not used, since a school child reads ハ長調.
- **A key with a sharp or a flat takes 嬰 or 変:** 嬰ヘ短調, 変ロ長調. WP *音名と階名* names both.
- **A chord symbol stays in Latin letters:** `C`, `Am`, `G7`. WP *コードネーム* writes them so, and
  Japanese songbooks print them over the staff.
- **In prose, a named chord is its symbol and `コード`:** `Cコード`, `Amコード`, `G7コード`. A lesson
  spells its notes once: `Cコード（ド・ミ・ソ）`.
- **A chord takes its mode only where the song's notes hold that triad.** An open fifth or a seventh
  chord the English calls "the G chord" is named by its root: `ソを根音とする和音`.
- **A spelled-out set of notes joins them with `・`,** from the bottom up: `ド・ミ・ソ`, `ミ・ソ・ド`.
- **Middle C is `真ん中のド` in prose, and no octave number appears there.** WP *中央ハ* says Japan calls it
  so. The label `ド4` stays the code's.
- **"Low C" and "high C" are `低いド` and `高いド`,** where the English means the keys around middle C.
- **The letters `C D E F G A B` never name a note in prose,** apart from chord symbols. A Japanese
  beginner reads ドレミ.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **`Intl` formats every number for `ja`:** `1,234.5`. No separator is set by hand.
- **A percent sign follows its number without a space:** `80%`, as CLDR writes it.
- **Every count takes Western digits,** half width: `3曲`, `レッスン5`, `8つの鍵盤`. Fingers, octaves,
  bars and beats keep them too: `3の指`, `第3小節`.
- **A small count the English spells out may take kana in prose,** where a digit reads stiff:
  `ひとつずつ`, `ふたつの黒鍵`.
- **A count takes its counter word:** `3曲`, `4拍`, `2小節`, `5つ`. No space stands between the digit and
  its counter.
- **An ordinal is `第` and the number, or the number and `番目`:** `第1小節`, `3番目の音`.
- **Japanese has no plural forms.** `Intl` names only `other`, so a counted message has one form.
- **A time signature is printed as figures:** `3/4拍子`, which a lesson may read out as `4分の3拍子` once.

## 9. Marks

Each rule has its pattern in the `ja` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`. `J` below stands for `[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}]`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A comma is `、`. A Latin comma stands only inside a number. | `(?<!\d),\|,(?!\d)` |
| A sentence ends with `。`. An ASCII period stands only inside a number. | `(?<!\d)\.\|\.(?!\d)` |
| A question, an exclamation and a colon are full width: `？！：`. No semicolon is used. | `[?!:;]` |
| A quote stands in `「」`, with `『』` inside. Never straight or curly quotes, or `«»`. | `["“”«»]` |
| Parentheses are full width: `（）`. | `[()]` |
| A range of numbers takes `～` (U+FF5E), never a hyphen or the wave dash `〜`. | `\d\s?[-–]\s?\d\|〜` |
| Latin letters and digits are half width, and katakana is full width. | `[Ａ-Ｚａ-ｚ０-９｡-ﾟ]` |
| No space stands between two Japanese characters, nor between one and a Latin letter or a digit. | `J[ 　]+(?:J\|[A-Za-z0-9])\|[A-Za-z0-9][ 　]+J` |
| No space stands beside a full-width mark. | `\s[、。！？：「」『』（）・～…]\|[、。！？：「」『』（）・～]\s` |
| A percent sign follows its number with no space. | `\d\s%` |
| The learner is never named. | `あなた\|貴方` |
| A sentence is です・ます, never plain `だ` or `である`. | `である\|(?<![また])だ[。！？]` |
| A loanword in -er, -or or -ar ends in `ー`. | `(?:ブラウザ\|フォルダ\|ユーザ\|…)(?!ー)\|プレイヤー` |

- **The marks are full width,** as Japanese print and Microsoft's guide set them.
- **No space stands between Japanese and a Latin word or a digit:** `MIDIキーボード`, `3曲`. Microsoft's
  Japanese guide sets no space, and Windows and iOS write it so.
- **The range mark is `～` (U+FF5E),** which every Japanese font draws alike. The wave dash `〜` (U+301C)
  draws as a different shape in some Windows fonts.
- **`！` and `？` are used sparingly,** as a teacher's cheer or a real question. A label never takes one.
- **An ellipsis is `…` in a label and `……` in prose.** Three ASCII periods never stand.
- **A list of words takes `、`,** and a list of notes takes `・`, as § 7 says.
- **An interface word the learner looks for stands in `「」`:** `「再生」を押します`. Microsoft's guide
  does so.
- **A counted beat stands in `「」`:** `「1、2」と数えます`.
- **The "and" of a count is `と`:** `「1と2と」と数えます`. Japanese teachers count an offbeat so.
- **Emphasis is bold, never italic,** as `src/ui/base.css` sets, since Japanese fonts have no italic.

## 10. Length

Japanese runs about half the width of English, so a label rarely clips. The risk is a line that breaks
inside a word. `src/ui/base.css` sets `line-break: strict` and `word-break: auto-phrase` for `ja`. Strict
keeps a small kana or a closing mark off a line's start. Auto-phrase keeps a phrase whole where Chrome can.

| Long | Short, for a label |
|---|---|
| ダンパーペダル | ペダル |
| パソコンのキーボード | キーボード |
| 再生速度 | 速さ |
| ループ再生 | ループ |
| ショートカットキー | ショートカット |

- **A label stays a phrase, never a clipped word.** `曲を開く` may become `開く`.
- **A long katakana word is the likeliest to break badly,** so a label prefers the Japanese word where
  one is as plain: `速さ` over `スピード`.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Japanese | Why it beat the next best |
|---|---|---|---|
| Button | Continue | 続ける | The plain verb of a button. `続行` is the system's word, and reads stiff to a child. |
| Transport tooltip | Play or pause | 再生／一時停止 | `再生` is the playback verb. `弾く／止める` would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | 設定で選んだ小節をループ再生 | `選んだ` is plainer than `指定された`. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | 弾くまで待つ / 弾く音が来るたびに曲が止まり、その鍵盤をすべて押さえると進みます。 | `弾くまで待つ` is short and warm. `あなたの音符を待つ` names the learner and reads translated. |
| Error | Your browser refused to save. Nothing changed. | ブラウザーに保存できませんでした。何も変更されていません。 | Impersonal and short. `ブラウザーが拒否しました` gives the browser a will. |
| Toast | A new version is ready. | 新しいバージョンを使えます。 | Says what the learner gains. `準備完了` reads like a log. |
| Dialog | Reset all progress? / Are you sure? | 進み具合をすべてリセットしますか？ / よろしいですか？ | `よろしいですか` is the system's polite check. `本当に？` is too casual for a reset. |
| Counter | 3 of 8 lessons | 8レッスン中3レッスン | The order of Japanese counters, total first. `3/8` would hide the noun. |
| Streak | 3-day streak | 3日連続 | Short and everyday. `連続記録3日` puts the noun before the count. |
| Feedback | Right! | せいかい！ | A teacher's cheer in kana. `正解です` reads like a test machine. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | 夜ふかし / 夜10時以降にレッスンをクリアする。 | `夜ふかし` is the everyday word, with no gender. `夜型人間` is a magazine word. |
| Joke | Quality control is a cat that walks over the keys now and then. | 品質チェック担当は、ときどき鍵盤の上を歩く猫です。 | `担当` keeps the deadpan of a job title. `品質管理は猫です` sounds odd. |
| Level up | Level up! / Every lesson takes you further. Keep going! | レベルアップ！ / レッスンを重ねるたびに上達します。この調子でがんばりましょう！ | `レベルアップ` is the word of games. `レベルが上がりました` is long for a banner. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | 右のペダルはダンパーペダルです。踏んでいる間は、鍵盤から指を離しても音が鳴り続けます。 | `踏んでいる間` is the foot's verb. `下にある間` is a calque. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | 弾いてみましょう。右手の親指を真ん中のドに置いて、ドとミを一緒に弾きます。 | `真ん中のド` is what every Japanese teacher says. `中央ハ` is a tuner's word. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | 小さいほうのグループに黒鍵はいくつ？ / 1つ, 2つ, 3つ, 4つ | `つ` counts small things for a child. `1個` sounds like shopping. |
| Rhythm | Count "1-2" for each half note. | 2分音符は「1、2」と数えます。 | `2分音符` is what every Japanese method teaches. `半分の音符` is a calque. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | このメロディーは、ベートーヴェンが交響曲第9番の最終楽章のために書きました。1824年にウィーンで初演されています。 | `初演` is the word for a first performance, and the composer takes his katakana name. |
| Guide, tricky bar | Look before you jump. | とぶ前に、次の鍵盤を見ておきましょう。 | Names what to look at, as a teacher does. `跳躍の前に見る` is stiff. |
| Mode name | Free jam | 自由にセッション | `セッション` is the Japanese word for a jam. `ジャム` names the fruit spread. |

## 12. Sources

- **Japanese Wikipedia's music articles,** each named in the glossary, were read for this guide through
  its API. They settled the music terms, `真ん中のド`, the ドレミ syllables and the key names ハ to ロ with 嬰
  and 変. WP *音符* settled the digits of `4分音符`.
- **WP *音名と階名*** settled the split this guide follows. Modern Japan names notes ドレミ, and keys take
  the Japanese letter names. It also says pop music uses English letters, which settles the chord symbols.
- **Microsoft's Japanese style guide and terminology** set です・ます, the long vowel rule, full-width marks
  and no space beside Latin words. They were not read online for this guide, so each MS row is the
  writer's knowledge of them.
- **The Japanese interface of Windows, Android and iOS** confirms the interface terms. It was not read
  online for this guide either.
- **Japanese piano methods for beginners** set `ドのポジション`, `指くぐり`, `指越え`, `1番カッコ`,
  `ソフトペダル` and the `と` of a count. No method's text was read online.
- **CLDR,** through `Intl`. It settled the separators, the percent sign and the one plural form.

## Open

- MS, OS and JM were not read online. A Japanese teacher's read would confirm `ドのポジション`,
  `指くぐり`, `指越え`, `1番カッコ`, `目印の音` and `呼びかけとこたえ`.
- Several music terms have one source each, as the glossary marks them.
- A sea shanty has no settled Japanese name. `船乗りの歌` is the everyday phrase, and a guide's reviewer
  may propose a better one.
- Furigana over a rare kanji, through `<ruby>`, could help a young learner. The goal's backlog holds it.
