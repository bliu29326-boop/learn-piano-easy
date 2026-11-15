/** The player's settings up to the notes, in Japanese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsPlay as en } from "./player-settings-play.en";

export const playerSettingsPlay: Translation<typeof en> = {
  // Site
  siteTheme: {
    label: "サイトのテーマ",
    help: "サイトのページの色です。ピアノとレーンの色は、シーンのテーマで決まります。",
    options: { system: "システムに合わせる", light: "ライト", dark: "ダーク" },
  },
  language: {
    label: "言語",
    help: "「ブラウザーに合わせる」では、ブラウザーの言語がサイトにあれば、その言語で開きます。",
    options: { auto: "ブラウザーに合わせる" },
  },
  learnSounds: {
    label: "ごほうびの音",
    help: "ピアノを学ぶで、ステップをクリアしたとき、星やバッジをもらったとき、レベルが上がったときに鳴る音です。ピアノの音はいつも鳴ります。",
  },
  learnDailyGoal: {
    label: "1日の目標",
    help: "連続記録を続けるために、ピアノを学ぶで1日に集めるXPです。",
  },
  learnSetupDone: {
    label: "初回訪問の完了",
    help: "ピアノを学ぶは、初めて開いたときに短い初期設定を表示します。設定が終わるまで表示が続きます。",
  },
  expertControls: {
    label: "エキスパートツール",
    help: "操作バーの「エキスパート」ボタンで、速さ、移調、ループの最初と最後の小節、フィット、視点の左右移動を表示します。",
  },
  // General
  theme: {
    label: "シーンのテーマ",
    help: "ピアノとレーンの色を決めます。プレーヤーのほかの部分は、上部バーのサイトのテーマで決まります。",
    options: { dark: "ダーク", light: "ライト" },
  },
  yourData: {
    label: "データのバックアップと復元",
    help: "設定、進み具合、曲、スコアを1つのファイルに保存し、そこから復元するページを開きます。",
  },
  startWithLastSong: {
    label: "起動時に前回の曲を開く",
    help: "プレーヤーを開くたびに、最後に弾いた曲を開きます。",
  },
  saveIndexedDb: {
    label: "ファイルをこのブラウザーに保存",
    help: "パソコンから開いた曲が、ページを再読み込みしても曲ライブラリーに残ります。",
  },
  disableHotkeys: {
    label: "ショートカットキーをオフにする",
    help: "パソコンのキーで、曲の再生、移動、ループができなくなります。",
  },
  hotKeyBindings: {
    label: "ショートカットキー",
    help: "曲の再生、移動、ループ、ズームに使うキーです。",
  },
  leadIn: {
    label: "最初の音までの時間（秒）",
    help: "どの曲も、最初の音よりこの時間だけ前から始まります。最後まで再生して最初から再生し直すときも、同じだけ待ちます。",
  },
  restartSongOnEnd: {
    label: "曲が終わったら最初から再生",
    help: "最後の音のあと、曲が最初からもう一度再生されます。",
  },
  playNotesOnScrollEnabled: {
    label: "タイムラインのドラッグ中に音を鳴らす",
    help: "曲の中をドラッグすると、通り過ぎる音がひとつずつ聞こえます。",
  },
  fitZoomOnNewSong: {
    label: "新しい曲ごとにズームを合わせる",
    help: "開いた曲の全体が、ピアノの先のレーンに収まります。",
  },
  transposeOffset: {
    label: "移調（半音）",
    help: "曲のすべての音を上げたり下げたりします。",
  },
  reverseNoteDirection: {
    label: "音符の向きを逆にする",
    help: "音符がピアノに向かうのではなく、ピアノから離れるように動きます。",
  },
  renderOffset: {
    label: "映像のずれ（ms）",
    help: "音に対して映像を遅らせます。0より小さくすると、映像が早く表示されます。",
  },
  showBPM: {
    label: "テンポをBPMで表示",
    help: "曲の今の1分あたりの拍数を、シーンの上の1秒あたりのフレーム数の横に表示します。",
  },
  showFps: {
    label: "1秒あたりのフレーム数を表示",
    help: "シーンが1秒間に何枚の画面を描くかを表示します。数が小さいときは、映像の動きが遅くなっています。",
  },
  showNoteDebugInfo: {
    label: "ポインターを重ねて音符の詳細を表示",
    help: "音符を指すと、音の高さ、時間、長さ、ベロシティが表示されます。",
  },
  showMilliseconds: {
    label: "タイムラインにミリ秒を表示",
    help: "タイムラインの時間に、1000分の1秒まで表示します。",
  },
  progressBarMeasures: {
    label: "タイムラインを小節で表示",
    help: "タイムラインが分と秒ではなく、小節を数えます。",
  },
  progressBarMeasureLines: {
    label: "タイムラインに小節線を表示",
    help: "タイムライン上の各小節の始まりに、細い線を引きます。",
  },
  showMarkersTimeline: {
    label: "タイムラインにマーカーを表示",
    help: "Aメロやサビなど、曲に入っているマーカーをタイムラインに表示します。",
  },
  // Loop
  enableLoop: {
    label: "一部分をループ再生",
    help: "下で選んだ小節を何度もくり返すので、その部分を練習できます。",
  },
  loopStart: {
    label: "ループの最初の小節",
    help: "この小節の始まりからループします。",
  },
  loopEnd: {
    label: "ループの最後の小節",
    help: "この小節の終わりでループが終わります。",
  },
  loopDelay: {
    label: "カウント（拍）",
    help: "ループをくり返すたびに、その前に鳴らす拍の数です。",
  },
  enableLoopBeats: {
    label: "カウントでクリック音を鳴らす",
    help: "カウントの拍ごとにクリック音が聞こえます。",
  },
  autoLoop: {
    label: "すぐに次のくり返しを始める",
    help: "オフにすると、くり返しのたびに曲がカウントのところで一時停止します。",
  },
  muteLoop: {
    label: "ループの外では曲を鳴らさない",
    help: "ループする小節の音だけが鳴ります。",
  },
  loopTrainer: {
    label: "ループトレーナー",
    help: "ゆっくり始めて、くり返すたびに速さを5%ずつ上げ、100%まで上げます。",
  },
  loopTrainerSpeed: {
    label: "ループトレーナーの開始速度（%）",
    help: "ループトレーナーの1回目の速さです。",
  },
  // Audio
  volumeMain: {
    label: "音量",
    help: "アプリが鳴らすすべての音の音量です。",
  },
  masterGain: {
    label: "曲の音量",
    help: "曲の音の大きさです。",
  },
  inputGain: {
    label: "自分の演奏の音量",
    help: "鍵盤で弾いた音の大きさです。",
  },
  velocityStrength: {
    label: "ベロシティの強さ",
    help: "音のベロシティによって、音の大きさがどれだけ変わるかです。",
  },
  sustainEnabled: {
    label: "ダンパーペダル",
    help: "曲や演奏でペダルを踏んでいる間、音が鳴り続けます。",
  },
  enableReverb: {
    label: "リバーブ",
    help: "部屋の響きを音に加えます。",
  },
  reverbImpulseResponse: {
    label: "リバーブの部屋",
    help: "リバーブが再現する部屋です。広い部屋ほど長く響きます。",
    options: { room: "部屋", hall: "コンサートホール", church: "教会" },
  },
  detune: {
    label: "デチューン（セント）",
    help: "すべての音を少し高く、または低く調律します。100セントで半音1つ分です。",
  },
  adsrAttack: {
    label: "アタック（秒）",
    help: "音が最大の音量になるまでの時間です。",
  },
  adsrDecay: {
    label: "ディケイ（秒）",
    help: "音がサステインのレベルまで下がるまでの時間です。",
  },
  adsrSustain: {
    label: "サステインのレベル（%）",
    help: "押さえ続けた音が保つ音量です。",
  },
  adsrReleaseKey: {
    label: "鍵盤を離したあとのリリース（秒）",
    help: "鍵盤を離してから音が消えるまでの時間です。",
  },
  adsrReleasePedal: {
    label: "ペダルを離したあとのリリース（秒）",
    help: "ペダルを離してから、のばしていた音が消えるまでの時間です。",
  },
  enableMetronome: {
    label: "メトロノーム",
    help: "曲の拍ごとにクリック音を鳴らします。",
  },
  metronomeMidiOutput: {
    label: "メトロノームの出力",
    help: "メトロノームを鳴らす場所です。",
    options: { both: "スピーカーとMIDIデバイス", midi: "MIDIデバイス", speakers: "スピーカー" },
  },
  metronomeNoteNumber: {
    label: "MIDIデバイスでのメトロノームの音",
    help: "拍ごとにメトロノームがMIDIデバイスに送る音です。",
  },
  metronomeInstrument: {
    label: "MIDIデバイスでのメトロノームの音色",
    help: "ドラムセットでは、音によってドラムが変わります。",
    options: { woodblock: "ウッドブロック", drums: "ドラムセット", piano: "ピアノ" },
  },
  metronomeVolume: {
    label: "メトロノームの音量",
    help: "メトロノームのクリック音の大きさです。",
  },
  synchedMetronome: {
    label: "メトロノームを曲に合わせる",
    help: "オンにすると、メトロノームは曲の拍に合わせて鳴り、テンポの変化や速さに従います。オフにすると、再生を始めた位置の曲のテンポで、一定の拍を刻みます。そのあとのテンポや速さの変化には影響されません。再生と一緒に始まり、一緒に止まります。ループのカウント中は休み、ループの最初の拍からまた鳴ります。",
  },
  enableEqualizer: {
    label: "イコライザー",
    help: "低域、中域、高域を大きくしたり小さくしたりします。",
  },
  equalizerGain0: {
    label: "低域、60Hz（dB）",
    help: "いちばん低い音域を上げ下げします。",
  },
  equalizerGain1: {
    label: "中低域、250Hz（dB）",
    help: "真ん中より少し低い、あたたかい音域を上げ下げします。",
  },
  equalizerGain2: {
    label: "中域、1kHz（dB）",
    help: "真ん中の音域を上げ下げします。",
  },
  equalizerGain3: {
    label: "中高域、4kHz（dB）",
    help: "真ん中より少し高い、明るい音域を上げ下げします。",
  },
  equalizerGain4: {
    label: "高域、12kHz（dB）",
    help: "いちばん高い音域を上げ下げします。",
  },
  scheduleAheadMs: {
    label: "音の先読み（ms）",
    help: "音をどれだけ先まで予約しておくかです。長いほど安定し、短いほど反応が速くなります。",
  },
  scheduleIntervalMs: {
    label: "音の予約の間隔（ms）",
    help: "次の音を予約する間隔です。",
  },
  // Backing track
  bgTrackFile: {
    label: "音声ファイルを選ぶ",
    help: "伴奏バンドなど、一緒に弾くための録音です。ページを再読み込みするまで残ります。",
  },
  bgTrackEnable: {
    label: "伴奏トラックを再生",
    help: "選んだ録音が曲と一緒に流れます。",
  },
  bgTrackVolume: {
    label: "音量（%）",
    help: "伴奏トラックの音の大きさです。",
  },
  bgTrackSpeed: {
    label: "速さ（%）",
    help: "曲に対するトラックの速さです。別のテンポの録音に合わせるときに使います。",
  },
  bgTrackOffset: {
    label: "ずらす時間（秒）",
    help: "トラックの始まりが鳴る、曲の位置を秒で表します。0より小さくすると、トラックの始まりを飛ばします。",
  },
  bgTrackLoop: {
    label: "伴奏トラックをループ再生",
    help: "トラックが終わると、また最初から始まります。",
  },
  // View
  cameraPreset: {
    label: "カメラ",
    help: "フラット以外では、シーンをドラッグして見回せます。ダブルクリックすると、このカメラに戻ります。フラットは、画面のすぐ下に置いた鍵盤と位置がそろいます。",
    options: {
      classic: "クラシック（上から）",
      player: "ピアノ椅子から",
      cinematic: "シネマティック（ゆっくり動く）",
      flat: "フラット（鍵盤が画面の幅いっぱい）",
    },
  },
  resetCamera: {
    label: "カメラを戻す",
    help: "シーンをドラッグしたあと、カメラを元に戻します。",
  },
  glowMode: {
    label: "光",
    help: "「自動」では、省電力のデバイスや、映像の動きが遅いときに光をオフにします。",
    options: { auto: "自動", on: "オン", off: "オフ" },
  },
  glowStrength: {
    label: "光の強さ",
    help: "音符と鍵盤がどれだけ明るく光るかです。",
  },
  zoomByMeasures: {
    label: "小節でズーム",
    help: "レーンに表示する範囲を、秒数ではなく小節数で決めます。",
  },
  noteToHeightConst: {
    label: "先に表示する秒数",
    help: "これから来る音符を、レーンに何秒分表示するかです。秒数を少なくすると、音符が長く、速くなります。",
  },
  measuresShownOnScreen: {
    label: "先に表示する小節数",
    help: "小節でズームするとき、これから来る音符をレーンに何小節分表示するかです。",
  },
  // Keyboard
  keyboardFirstNote: {
    label: "最初の鍵盤",
    help: "手元の鍵盤でいちばん低い鍵盤です。C2や36のように入力します。",
  },
  keyboardLastNote: {
    label: "最後の鍵盤",
    help: "手元の鍵盤でいちばん高い鍵盤です。C7や96のように入力します。",
  },
  foldOutsideNotes: {
    label: "範囲外の音を鍵盤の中に移す",
    help: "手元の鍵盤にない音は、オクターブ単位で鍵盤の範囲内に移ります。移った位置で弾きます。",
  },
  // Input
  playMode: {
    label: "モード",
    help: "「自由に弾いて録音」では、曲を脇に置いて自由に弾き、録音できます。「音当て練習」では、探す音が出題されます。",
    options: { player: "曲を弾く", freePlay: "自由に弾いて録音", pitchPractice: "音当て練習" },
  },
  pitchPracticeKey: {
    label: "音当て練習の調",
    help: "音当て練習では、この調の音だけが出題されます。",
    options: {
      chromatic: "すべての鍵盤（白鍵と黒鍵）",
      C: "ハ長調",
      G: "ト長調",
      D: "ニ長調",
      A: "イ長調",
      E: "ホ長調",
      B: "ロ長調",
      Gb: "変ト長調",
      Db: "変ニ長調",
      Ab: "変イ長調",
      Eb: "変ホ長調",
      Bb: "変ロ長調",
      F: "ヘ長調",
    },
  },
  pitchPracticeFirstNote: {
    label: "音当て練習のいちばん低い音",
    help: "音当て練習で出題するいちばん低い音です。手元の鍵盤の範囲内で選びます。",
  },
  pitchPracticeLastNote: {
    label: "音当て練習のいちばん高い音",
    help: "音当て練習で出題するいちばん高い音です。手元の鍵盤の範囲内で選びます。",
  },
  pitchPracticeCount: {
    label: "音当て練習の1回の問題数",
    help: "結果が表示されるまでに、音当て練習が出題する音の数です。",
  },
  saveMidiDevices: {
    label: "選んだMIDIデバイスを記憶",
    help: "次にプレーヤーを開いたとき、同じMIDIの入力と出力に接続します。",
  },
  keyBindings: {
    label: "パソコンのキーボードのキー",
    help: "音を弾くパソコンのキーです。Z～Mでド3～シ3、Q～Iでド4～ド5を弾きます。",
  },
  waitForNotes: {
    label: "弾くまで待つ",
    help: "弾く音が来るたびに曲が止まり、その鍵盤をすべて押さえると進みます。ゲームモードでは、長く待った音は「遅れた」と判定されます。",
  },
  playHands: {
    label: "弾く手",
    help: "演奏を採点する手です。「弾くまで待つ」がオンのときは、選ばなかった手をアプリが弾きます。",
    options: { both: "両手", right: "右手", left: "左手" },
  },
  playalongSilentNotes: {
    label: "MIDIキーボードで弾く鍵盤を光らせる",
    help: "次の音をとても小さな音でMIDI出力に送ります。キーライトつきの鍵盤なら、その鍵盤が光ります。",
  },
  playalongSilentNotesChannel: {
    label: "キーライトのMIDIチャンネル",
    help: "鍵盤がキーライトの信号を受け取るMIDIチャンネルです。",
  },
  enableScoreMode: {
    label: "音ごとに採点",
    help: "弾いた音を1つずつ曲と比べて判定し、曲ごとに正確さを記録します。",
  },
  scoreHitWindow: {
    label: "ヒットの判定幅（ms）",
    help: "本来のタイミングから、早くても遅くてもこの範囲内で弾いた音がヒットになります。",
  },
  scorePerfectWindow: {
    label: "パーフェクトの判定幅（ms）",
    help: "本来のタイミングからこの範囲内のヒットが、パーフェクトになります。",
  },
  enableGameMode: {
    label: "ゲームモード",
    help: "正確なヒットと押さえ続けた音で点がもらえます。ミスごとに点が引かれ、続けてヒットしたコンボには倍率がかかります。",
  },
  gameDifficulty: {
    label: "ゲームの難易度",
    help: "タイミングの厳しさと、1音でもらえる点やミスで引かれる点の大きさです。",
    options: { easy: "やさしい：演奏経験が数時間", normal: "ふつう：数か月", hard: "むずかしい：約1年" },
  },
  // Piano
  clickablePiano: {
    label: "クリックやタッチでピアノを弾く",
    help: "画面の鍵盤を押すと音が鳴ります。",
  },
  highlightActivePianoKeys: {
    label: "押さえた鍵盤に色をつける",
    help: "押さえている鍵盤に、下の色をつけます。",
  },
  inputNoteColorWhite: {
    label: "押さえた白鍵の色",
    help: "押さえている白鍵の色です。",
  },
  inputNoteColorBlack: {
    label: "押さえた黒鍵の色",
    help: "押さえている黒鍵の色です。",
  },
  pianoWhiteKeyColor: {
    label: "白鍵の色",
    help: "ピアノの白鍵の色です。",
  },
  pianoBlackKeyColor: {
    label: "黒鍵の色",
    help: "ピアノの黒鍵の色です。",
  },
  pianoVelvetColor: {
    label: "フェルトの色",
    help: "鍵盤の奥にあるフェルトの帯の色です。",
  },
  pianoBackgroundColor: {
    label: "背景の色",
    help: "ピアノとレーンの後ろの色です。",
  },
  pianoPosition: {
    label: "画面上のピアノの高さ（%）",
    help: "画面上でピアノを上下に動かします。",
  },
  whiteKeyHeight: {
    label: "白鍵の長さ（%）",
    help: "白鍵を描く長さです。",
  },
  enableKeyFlare: {
    label: "押さえた鍵盤のフレア",
    help: "鳴っている鍵盤の上に、明るい光が輝きます。",
  },
  pianoLineEnabled: {
    label: "鍵盤の上の波線",
    help: "鳴っている鍵盤の上で波打つ線です。",
  },
  pianoLineSpeed: {
    label: "波の速さ",
    help: "線の波が動く速さです。",
  },
  pianoLineResolution: {
    label: "1オクターブあたりの波の数",
    help: "1オクターブの幅に入る波の数です。多いほど細かく見えます。",
  },
  pianoLineAmplitude: {
    label: "波の高さ",
    help: "最大の強さで鳴る鍵盤の上での高さを、鍵盤の幅で表します。",
  },
  pianoLineColor: {
    label: "波線の色",
    help: "波線の色です。",
  },
  pianoLineOpacity: {
    label: "波線の不透明度",
    help: "波線がどれだけはっきり見えるかです。低いほど薄くなります。",
  },
  pianoLineYOffset: {
    label: "波線の高さ",
    help: "鍵盤からの高さを、鍵盤の幅で表します。",
  },
};
