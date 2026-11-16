import {expect,test} from "bun:test";
import {createSongOpener} from "../library/open-song";
import {readSongFile} from "../midi/parse";
import {songFromMidi} from "../midi/song";
import {SettingsStore} from "../settings/store";
import {readFile} from "node:fs/promises";
import {resolve} from "node:path";
import {advancedCatalogue} from "./policy";
import type {CatalogSong} from "../library/search";
test("real imported MIDI parses and opens free with every network request unavailable",async()=>{
 const catalogue=JSON.parse(await readFile(resolve(import.meta.dir,"../../public/songs/catalog.json"),"utf8")) as CatalogSong[];
 const row=catalogue.find(song=>advancedCatalogue(song))!;
 const bytes=new Uint8Array(await readFile(resolve(import.meta.dir,"../../public/songs",row.file)));
 let loaded=0;let notes=0;let requests=0;
 const original=globalThis.fetch;globalThis.fetch=(async()=>{requests++;throw new Error("Offline test boundary")}) as unknown as typeof fetch;
 try{const opener=createSongOpener({settings:new SettingsStore(null),parser:{parse:async bytes=>songFromMidi(await readSongFile(bytes))},uploads:{get:async()=>undefined},load(song){loaded++;notes=song.notes.length},toast(){},storage:null});expect(await opener.openUpload({id:"upload-boundary",name:"own-file.mid",bytes,added:0})).toBe(true);expect(loaded).toBe(1);expect(notes).toBeGreaterThan(0);expect(requests).toBe(0)}finally{globalThis.fetch=original}
});
test("every retained beginner/intermediate row is free and every displayed hard version is Plus",async()=>{
 const rows=JSON.parse(await readFile(resolve(import.meta.dir,"../../public/songs/catalog.json"),"utf8")) as CatalogSong[];
 expect(rows.length).toBeGreaterThan(0);for(const row of rows){if(row.difficulty<4)expect(advancedCatalogue(row)).toBe(false);else expect(advancedCatalogue(row)).toBe(true)}
});
