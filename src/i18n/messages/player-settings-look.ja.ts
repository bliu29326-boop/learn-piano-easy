/** The player's settings from the notes to the offline files, in Japanese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "鳴っているノートを光らせる",
    help: "ノートが鳴っている間、そのノート自身の色で光ります。",
  },
  noteWidth: {
    label: "ノートの幅（鍵盤に対する%）",
    help: "落ちてくる各ノートの幅を、その鍵盤の幅を基準に決めます。",
  },
  roundedNotes: {
    label: "角の丸いノート",
    help: "落ちてくるノートの角を丸くします。",
  },
  noteBorderRadius: {
    label: "角の丸み（%）",
    help: "ノートの角をどれだけ丸くするかです。",
  },
  minNoteHeight: {
    label: "ノートの最短の長さ",
    help: "鍵盤の幅を単位にします。とても短いノートも見えるようにするためです。",
  },
  strokeNotes: {
    label: "縁の光",
    help: "各ノートの縁が、そのノート自身の色で光ります。",
  },
  strokeNotesWidth: {
    label: "縁の光の強さ",
    help: "各ノートの縁の光の明るさです。",
  },
  noteEndedShrink: {
    label: "弾いたノートを鍵盤に吸い込ませる",
    help: "ノートは鳴っている間、鍵盤に沈んでいきます。オフにすると、鍵盤を通り過ぎて進みます。",
  },
  playedNoteFalloffSpeed: {
    label: "弾いたノートが鍵盤を通り過ぎる距離",
    help: "鍵盤の幅を単位にします。弾いたノートを吸い込ませないときに使います。",
  },
  showSustainedNotes: {
    label: "ペダルで音が伸びる長さを表示",
    help: "ペダルで伸びる各ノートの後ろに、細い尾が続きます。",
  },
  sustainedNotesOpacity: {
    label: "ペダルの尾の明るさ（%）",
    help: "ノートの後ろのペダルの尾を、どれだけはっきり見せるかです。",
  },

  // Lanes
  bgCol1: {
    label: "レーンの色",
    help: "白鍵の上のレーンの色です。",
  },
  bgCol5: {
    label: "黒鍵のレーンの色",
    help: "黒鍵の上のレーンの色です。",
  },
  bgCol3: {
    label: "オクターブの区切り線の色",
    help: "シと次のドの間の線の色です。",
  },
  drawMeasureLines: {
    label: "小節線",
    help: "各小節の始まりに、レーンを横切る線を引きます。",
  },
  measureLineThickness: {
    label: "小節線の太さ",
    help: "各小節の線の太さです。",
  },
  measureLineColor: {
    label: "小節線の色",
    help: "各小節の線の色です。",
  },
  enableDrawBeatLines: {
    label: "拍の線",
    help: "各拍に、レーンを横切る薄い線を引きます。",
  },
  beatLineThickness: {
    label: "拍の線の太さ",
    help: "各拍の線の太さです。",
  },
  beatLineColor: {
    label: "拍の線の色",
    help: "各拍の線の色です。",
  },
  enableDrawMeasureNumbers: {
    label: "小節番号",
    help: "各小節の番号を、その線の横に表示します。",
  },
  measureNumbersColor: {
    label: "小節番号の色",
    help: "小節番号の色です。",
  },
  highlightInputLanes: {
    label: "押さえている鍵盤のレーンを光らせる",
    help: "鍵盤を押さえている間、その上のレーンが明るくなります。",
  },
  inputLaneOpacity: {
    label: "レーンの光の強さ",
    help: "鍵盤を押さえている間、そのレーンがどれだけ明るくなるかです。",
  },
  showMarkersSong: {
    label: "マーカー",
    help: "Aメロなど、曲が名前を付けた部分に線と文字を表示します。",
  },
  showSustainPeriods: {
    label: "ペダルの区間",
    help: "曲がダンパーペダルを踏んでいる間、レーンを横切る帯を表示します。",
  },
  showSustainOnOffs: {
    label: "ペダルを踏む・離す",
    help: "ペダルを踏む所に「Ped.」、離す所に「✱」の印が付いた線を引きます。",
  },
  showSustainChannels: {
    label: "ペダルのチャンネル",
    help: "各ペダルの区間に、そのMIDIチャンネルを表示します。",
  },

  // Particles
  showParticles: {
    label: "パーティクル",
    help: "鳴っている各鍵盤から効果が立ちのぼります。グラフィックカードに負担がかかるので、最初はオフです。",
  },
  particlesFlames: {
    label: "炎",
    help: "各鍵盤が、鳴っている音の色の炎で燃えます。グラフィックカードへの負担がいちばん大きい効果です。",
  },
  particlesSparks: {
    label: "火花",
    help: "各鍵盤から、小さく明るい火花が飛び上がります。",
  },
  particlesEmbers: {
    label: "火の粉",
    help: "各鍵盤から、光る火の粉がゆっくり舞い上がります。",
  },
  particlesStars: {
    label: "星",
    help: "各鍵盤から、回る小さな星と点が上がって、また落ちてきます。",
  },
  particlesCustom: {
    label: "自分で作るパーティクル",
    help: "下の設定で作るパーティクルです。",
  },
  particlesTexture: {
    label: "形",
    help: "自分で作る各パーティクルが見せる絵です。",
    options: { circle: "光", spark: "火花", smoke: "煙", star: "星", ring: "輪" },
  },
  particlesBlending: {
    label: "重ね方",
    help: "「光を足す」は、炎のように後ろを明るくします。「覆う」は、煙のように後ろを隠します。",
    options: { additive: "光を足す", normal: "覆う" },
  },
  particleOverrideColor: {
    label: "独自の色",
    help: "オフにすると、各パーティクルは鍵盤の色になります。",
  },
  particleColor: {
    label: "色",
    help: "独自の色を使うときの、パーティクルの色です。",
  },
  particlesOpacity: {
    label: "不透明度",
    help: "各パーティクルがどれだけ不透明に見えるかです。値を下げると、後ろが透けて見えます。",
  },
  particleSize: {
    label: "大きさ",
    help: "鍵盤の幅を単位にします。",
  },
  particleAmount: {
    label: "量",
    help: "1秒60フレームのときに、鍵盤1つから1フレームごとに出るパーティクルの数です。",
  },
  particleLife: {
    label: "寿命（秒）",
    help: "各パーティクルが消えるまでの時間です。",
  },
  particleSpeed: {
    label: "動きの速さ",
    help: "パーティクルのすべての動きを速くしたり、遅くしたりします。",
  },
  particleFadeOut: {
    label: "フェードアウト",
    help: "寿命の終わりのうち、パーティクルが薄れていく部分の割合です。",
  },
  particlesShrink: {
    label: "縮み",
    help: "パーティクルが失う大きさの割合です。0より下では大きくなります。",
  },
  particleSpeedX: {
    label: "横の速さ",
    help: "横向きの最高の速さです。単位は1秒あたりの鍵盤の幅です。",
  },
  particleSpeedY: {
    label: "上昇の速さ",
    help: "上昇の最高の速さです。単位は1秒あたりの鍵盤の幅です。",
  },
  particlesFriction: {
    label: "空気抵抗",
    help: "飛んでいるパーティクルが、どれだけ急に遅くなるかです。",
  },
  particleRising: {
    label: "重力",
    help: "0より上ではパーティクルが落ちてきて、0より下ではもっと速く上がります。",
  },
  particlesRotation: {
    label: "角度（°）",
    help: "各パーティクルが出るときに、どれだけ傾いているかです。",
  },
  particlesRotationRandom: {
    label: "ランダムな角度（°）",
    help: "各パーティクルは、この角度までのランダムな傾きで出てきます。",
  },
  particlesRotationSpeed: {
    label: "回転（1秒あたりの°）",
    help: "飛んでいる各パーティクルが回る速さです。",
  },
  particleNoiseResX: {
    label: "横のゆらぎの細かさ",
    help: "値を上げると、となり合う鍵盤のパーティクルが、横にそれぞれ違うようにゆらぎます。",
  },
  particleNoiseStrengthX: {
    label: "横のゆらぎ",
    help: "パーティクルがランダムに横へ流れる距離です。",
  },
  particleNoiseResY: {
    label: "上昇のゆらぎの細かさ",
    help: "値を上げると、となり合う鍵盤の上昇のゆらぎが、より違ってきます。",
  },
  particleNoiseStrengthY: {
    label: "上昇のゆらぎ",
    help: "上がっていくパーティクルが、ランダムに上下へ流れる距離です。",
  },
  particleNoiseStrengthSize: {
    label: "大きさのゆらぎ",
    help: "各パーティクルがランダムに大きくなったり小さくなったりする度合いです。",
  },
  turbulenceXAmplitude: {
    label: "横の揺れ",
    help: "パーティクルが左右に揺れる幅です。",
  },
  turbulenceXFrequency: {
    label: "横の揺れの頻度",
    help: "1秒あたりの揺れの回数です。",
  },
  turbulenceYAmplitude: {
    label: "上昇の揺れ",
    help: "上がっていくパーティクルが上下に揺れる幅です。",
  },
  turbulenceYFrequency: {
    label: "上昇の揺れの頻度",
    help: "1秒あたりの揺れの回数です。",
  },
  particleYOffset: {
    label: "出る高さ",
    help: "鍵盤の上の高さを、鍵盤の幅を単位にして決めます。",
  },
  particleDistributionX: {
    label: "出る位置（鍵盤の横方向）",
    help: "各パーティクルが、鍵盤の横方向のどこから出るかです。",
    options: { across: "横幅のどこでも", centre: "真ん中から" },
  },
  particleDistributionXSpread: {
    label: "出る範囲（%）",
    help: "パーティクルが出る範囲が、鍵盤の幅のどれだけを占めるかです。",
  },
  particleDistributionY: {
    label: "出る位置（鍵盤の縦方向）",
    help: "各パーティクルが、鍵盤の縦方向のどこから出るかです。",
    options: { hitLine: "判定ラインから", key: "鍵盤の上面のどこでも" },
  },
  particleDistributionZ: {
    label: "重なり順",
    help: "鍵盤がパーティクルを隠すか、パーティクルがピアノの手前に出るかを選びます。",
    options: { behind: "鍵盤の後ろ", front: "ピアノの手前" },
  },

  // Labels
  pitchNotationSystem: {
    label: "音名",
    help: "ノートと鍵盤に書く名前の書き方です。ドはいつもCです。",
    options: { auto: "言語に合わせる", letters: "アルファベット：C D E", solfege: "ドレミ：ド・レ・ミ" },
  },
  noteLabel: {
    label: "ノートの表示",
    help: "各ノートに表示する文字です。いくつ選んでも、何も選ばなくてもかまいません。ノートを押してから1～5のキーを押すと、指番号を設定できます。",
    options: { name: "音名", keyBinding: "パソコンのキー", fingering: "指番号" },
  },
  noteLabelColor: {
    label: "ノートの文字の色",
    help: "各ノートに表示する文字の色です。",
  },
  showKeyNamesOnPianoWhite: {
    label: "白鍵に音名を表示",
    help: "各白鍵に、その音名を表示します。",
  },
  showKeyNamesOnPianoBlack: {
    label: "黒鍵に音名を表示",
    help: "各黒鍵に、その音名を表示します。",
  },
  showPianoKeyNameFlats: {
    label: "黒鍵をフラットで表示",
    help: "鍵盤の上だけ、ド♯の代わりにレ♭と表示します。ノートは曲の調に従います。",
  },
  octaveLabel: {
    label: "鍵盤の音名にオクターブを付ける",
    help: "ド4のように、鍵盤の音名にオクターブの番号を付けます。",
    options: { none: "なし", all: "すべての鍵盤", onlyC: "ドだけ" },
  },
  showKeyBindingsOnPiano: {
    label: "ピアノにパソコンのキーを表示",
    help: "各鍵盤に、その鍵盤を弾くパソコンのキーを表示します。",
  },
  showChords: {
    label: "コードネーム",
    help: "ノートが作る各和音に、ペダルで伸びている音も含めて名前を付けます。",
  },
  chordLabelStyle: {
    label: "コードネームの表示形式",
    help: "各コードネームの描き方です。",
    options: { bar: "和音の鍵盤の上のバー", ribbon: "レーンを横切るリボン" },
  },
  chordLabelPlacement: {
    label: "コードネームの位置",
    help: "上端は、和音のピアノから遠いほうの端です。",
    options: {
      above: "和音の上",
      top: "上端",
      middle: "真ん中",
      bottom: "下端",
      below: "和音の下",
    },
  },
  showChordRomanNumerals: {
    label: "ローマ数字",
    help: "曲の調の中での、各和音の度数です。V7などと表示します。",
  },
  chordBlocks: {
    label: "音のブロック",
    help: "名前の付いた和音の各音の上に、その音の役割を示すブロックが出ます。",
    options: { none: "なし", tone: "和音の構成音", degree: "音階の度数" },
  },
  chordToneNotation: {
    label: "音のブロックの書き方",
    help: "音のブロックに、短い記号と言葉のどちらを使うかを選びます。",
    options: { simple: "簡単：R ♭3 5", full: "くわしく：根音、♭3度、5度" },
  },
  chordMarkRoot: {
    label: "根音に印を付ける",
    help: "各和音の根音に、金色のブロックが付きます。",
  },

  // Lyrics
  lyricsEnabled: {
    label: "歌詞",
    help: "曲に歌詞があるときは、1行ずつ表示します。",
  },
  lyricsBackground: {
    label: "背景の色",
    help: "歌詞の後ろの帯の色です。",
  },
  lyricsFontColor: {
    label: "文字の色",
    help: "まだ歌っていない言葉の色です。",
  },
  lyricsFontColorPlayed: {
    label: "歌い終えた文字の色",
    help: "もう歌い終えた言葉の色です。",
  },
  lyricsFontColorActive: {
    label: "いま歌っている音節の色",
    help: "いま歌っている音節が、この色で目立ちます。",
  },
  lyricsFontSize: {
    label: "文字の大きさ（px）",
    help: "歌詞を表示する大きさです。",
  },
  lyricsY: {
    label: "高さ（上から%）",
    help: "シーンの中で、歌詞の行の真ん中が来る位置です。0が上端です。",
  },
  lyricsCursorEnabled: {
    label: "カーソル",
    help: "いま歌っている音節の上に点を表示します。",
  },
  lyricsBouncingCursor: {
    label: "はねるカーソル",
    help: "点が音節から次の音節へはねて進みます。",
  },

  // Coding
  enableColorCodingNote: {
    label: "音の高さでノートを色分け",
    help: "12の音の高さに、それぞれ別の色が付きます。",
  },
  enableColorCodingNotePiano: {
    label: "音の高さで鍵盤を色分け",
    help: "各鍵盤が鳴っている間、その音の高さの色で光ります。",
  },
  colorCodeNote0: { label: "ド", help: "すべてのドの色です。" },
  colorCodeNote1: { label: "ド♯またはレ♭", help: "すべてのド♯またはレ♭の色です。" },
  colorCodeNote2: { label: "レ", help: "すべてのレの色です。" },
  colorCodeNote3: { label: "レ♯またはミ♭", help: "すべてのレ♯またはミ♭の色です。" },
  colorCodeNote4: { label: "ミ", help: "すべてのミの色です。" },
  colorCodeNote5: { label: "ファ", help: "すべてのファの色です。" },
  colorCodeNote6: { label: "ファ♯またはソ♭", help: "すべてのファ♯またはソ♭の色です。" },
  colorCodeNote7: { label: "ソ", help: "すべてのソの色です。" },
  colorCodeNote8: { label: "ソ♯またはラ♭", help: "すべてのソ♯またはラ♭の色です。" },
  colorCodeNote9: { label: "ラ", help: "すべてのラの色です。" },
  colorCodeNote10: { label: "ラ♯またはシ♭", help: "すべてのラ♯またはシ♭の色です。" },
  colorCodeNote11: { label: "シ", help: "すべてのシの色です。" },
  enableColorCodingFinger: {
    label: "指でノートを色分け",
    help: "弾く指が決まっていないノートは、ほかの設定の色のままです。",
  },
  enableColorCodingFingerPiano: {
    label: "指で鍵盤を色分け",
    help: "各鍵盤が、その鍵盤を弾く指の色で光ります。",
  },
  colorCodeFinger1Right: { label: "右手、1の指", help: "右手の親指で弾くノートの色です。" },
  colorCodeFinger2Right: { label: "右手、2の指", help: "右手の人差し指で弾くノートの色です。" },
  colorCodeFinger3Right: { label: "右手、3の指", help: "右手の中指で弾くノートの色です。" },
  colorCodeFinger4Right: { label: "右手、4の指", help: "右手の薬指で弾くノートの色です。" },
  colorCodeFinger5Right: { label: "右手、5の指", help: "右手の小指で弾くノートの色です。" },
  colorCodeFingerDefaultRight: {
    label: "右手、指の指定なし",
    help: "指を設定していない右手のノートの色です。",
  },
  colorCodeFinger1Left: { label: "左手、1の指", help: "左手の親指で弾くノートの色です。" },
  colorCodeFinger2Left: { label: "左手、2の指", help: "左手の人差し指で弾くノートの色です。" },
  colorCodeFinger3Left: { label: "左手、3の指", help: "左手の中指で弾くノートの色です。" },
  colorCodeFinger4Left: { label: "左手、4の指", help: "左手の薬指で弾くノートの色です。" },
  colorCodeFinger5Left: { label: "左手、5の指", help: "左手の小指で弾くノートの色です。" },
  colorCodeFingerDefaultLeft: {
    label: "左手、指の指定なし",
    help: "指を設定していない左手のノートの色です。",
  },

  // Sheet
  enableSheet: {
    label: "楽譜を表示",
    help: "曲を楽譜にして、シーンの上部に重ねて表示します。",
  },
  enableFullSheet: {
    label: "楽譜だけを表示",
    help: "シーンの代わりに、楽譜が画面いっぱいに広がります。",
  },
  sheetMeasureScroll: {
    label: "曲に合わせて楽譜をスクロール",
    help: "オフにすると、小節が段に並び、演奏中の段が見えたままになります。",
  },
  sheetMeasureNumbers: {
    label: "小節番号",
    help: "楽譜のどこに各小節の番号を表示するかです。",
    options: { off: "なし", lineStart: "各段の始め", every: "すべての小節" },
  },
  enableGrandStaff: {
    label: "2段の五線をブレースでつなぐ",
    help: "大譜表のブレースを、各段の始めに付けます。",
  },
  sheetAutoClef: {
    label: "音符から音部記号を選ぶ",
    help: "オフにすると、1段目の五線はト音記号、残りはヘ音記号になります。",
  },
  overrideTimeSignature: {
    label: "拍子記号",
    help: "楽譜を書く拍子です。曲がもつ拍子記号がまちがっているときに選びます。",
    options: {
      auto: "曲に合わせる",
      "2/4": "2/4拍子",
      "3/4": "3/4拍子",
      "4/4": "4/4拍子",
      "5/4": "5/4拍子",
      "2/2": "2/2拍子",
      "6/8": "6/8拍子",
      "9/8": "9/8拍子",
      "12/8": "12/8拍子",
    },
  },
  sheetMinNoteDenom: {
    label: "いちばん短い音符",
    help: "楽譜に書くいちばん短い音符です。その3連符も書けます。",
    options: { "4": "4分音符", "8": "8分音符", "16": "16分音符", "32": "32分音符", "64": "64分音符" },
  },
  hideRestsBelow: {
    label: "これより短い休符を隠す",
    help: "短い休符を省いて、楽譜を読みやすくします。",
    options: { none: "隠さない", "4": "4分休符", "8": "8分休符", "16": "16分休符", "32": "32分休符" },
  },
  renderSheetCursor: {
    label: "カーソル",
    help: "曲のいまの位置に線を引きます。",
  },
  sheetColorActiveNotes: {
    label: "鳴っている音符に色を付ける",
    help: "楽譜の音符が、鳴っている間に色を変えます。",
  },
  sheetColorByTrack: {
    label: "鳴っている音符をトラックの色にする",
    help: "オフにすると、下の色になります。",
  },
  sheetActiveNotesColor: {
    label: "鳴っている音符の色",
    help: "楽譜の音符が鳴っている間の色です。",
  },
  sheetHighlightActiveNotes: {
    label: "鳴っている音符の後ろの光",
    help: "楽譜の各音符が鳴っている間、その後ろにやわらかい光が出ます。",
  },
  sheetActiveHighlightColor: {
    label: "光の色",
    help: "鳴っている音符の後ろの光の色です。",
  },
  sheetActiveGrowEffect: {
    label: "鳴っている音符を大きくする",
    help: "楽譜の音符が、鳴っている間に大きくなります。",
  },
  sheetRenderInputNotes: {
    label: "弾いた音を表示",
    help: "押さえている各鍵盤が、カーソルの位置に音符として表示されます。",
  },
  sheetShowHoverInfo: {
    label: "ポインターの下の音名を表示",
    help: "楽譜の音符や和音にポインターを合わせると、その音名が表示されます。",
  },
  sheetBgColor: {
    label: "紙の色",
    help: "楽譜の後ろの色です。暗い紙では、インクが明るい色になります。",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "ノートをPDFで保存",
    help: "開いている曲の落ちてくるノートを、好きな長さのページに分けてPDFで保存するダイアログを開きます。",
  },
  exportPdfBackground: {
    label: "背景の色を使う",
    help: "ページがレーンと鍵盤の色になります。オフにすると、白い紙に印刷します。",
  },

  // Offline
  offlineCache: {
    label: "オフライン用ファイルの管理",
    help: "アプリ、曲、ピアノの音のサイズを表示し、それぞれを保存または削除します。",
  },
  autoCacheSongs: {
    label: "曲を保存しておく",
    help: "すべてのサンプル曲をいま保存し、更新のたびにもう一度保存します。",
  },
  autoCacheSounds: {
    label: "ピアノの音を保存しておく",
    help: "すべての音源セットをいま保存し、更新のたびにもう一度保存します。",
  },
};
