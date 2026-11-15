/** The data page in Japanese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { dataPage as en } from "./data.en";

export const dataPage: Translation<typeof en> = {
  lead: "設定、コースの進み具合、曲、スコアは、すべてこのブラウザーに保存されています。1つのファイルに保存すれば、安全に残しておけるうえ、ほかのデバイスにも移せます。",
  save: {
    heading: "バックアップを保存",
    text: "1つのファイルにすべてが入ります。クラウドのフォルダーなど、安全な場所に保管しましょう。",
    action: "バックアップを保存",
    never: "このブラウザーでは、まだバックアップを保存していません。",
    today: "前回のバックアップは今日保存しました。",
    on: (date: string) => `前回のバックアップは${date}に保存しました。`,
    done: "バックアップファイルを保存しました。",
  },
  restore: {
    heading: "バックアップを復元",
    text: "Learn Piano Easyのバックアップファイルを開きます。古いバージョンの設定ファイルや進み具合のバックアップも使えます。",
    action: "バックアップを復元",
  },
  folder: {
    heading: "フォルダーと同期する",
    text: "クラウドドライブが同期しているフォルダーなどを選びましょう。変更はすべて自動で書き込まれ、過去7日分は日付つきのコピーが1日1つずつ残ります。",
    connect: "フォルダーを接続",
    starting: "フォルダーを探しています…",
    synced: (name: string) => `データはフォルダー「${name}」に保存されています。`,
    waiting: "変更は少しあとに書き込まれます。",
    written: (time: string) => `フォルダーへの最後の書き込みは${time}です。`,
    reconnect: (name: string) => `フォルダー「${name}」に書き込む前に、ブラウザーがもう一度確認します。`,
    reconnectAction: "フォルダーを再接続",
    asking: (name: string) =>
      `フォルダー「${name}」には、このブラウザーが書き込んでいないデータがあります。どうするか選ぶまで、何も書き込みません。`,
    askingFrom: (date: string) => `そのデータは${date}に保存されたものです。`,
    restoreAction: "フォルダーから復元",
    replaceAction: "このブラウザーのデータで置き換える",
    replaced: "フォルダーの中身をこのブラウザーのデータに置き換えました。古いファイルはバックアップ用のフォルダーに残っています。",
    failed: "フォルダーに書き込めませんでした。再接続するか、フォルダーを選び直しましょう。",
    disconnect: "切断",
    gone: "フォルダーのファイルを読み込めませんでした。何も変更されていません。",
  },
  ask: {
    title: "このバックアップを復元しますか？",
    merge: "進み具合、曲、スコアは、ここにあるものとまとめられます。新しいデータが失われることはありません。",
    replace: "設定と曲ごとの設定は、ファイルの値に置き換わります。そのあと、ページを再読み込みします。",
    confirm: "復元",
    cancel: "このままにする",
    close: "閉じる",
  },
  reading: "ファイルを読み込んでいます…",
  restored: "バックアップを復元しました。",
  notOurs: "このファイルはLearn Piano Easyのバックアップではありません。何も変更されていません。",
  failed: "ブラウザーに保存できませんでした。バックアップファイルには、すべてのデータが残っています。",
};
