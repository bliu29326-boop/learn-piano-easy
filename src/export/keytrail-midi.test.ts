import {expect,test} from "bun:test";
import {midiExportBytes} from "./keytrail-midi";
import {readMidi} from "../midi/smf-read";
import {songFromMidi} from "../midi/song";
const xml=`<?xml version="1.0"?><score-partwise version="4.0"><part-list><score-part id="P1"><part-name>Piano</part-name></score-part></part-list><part id="P1"><measure number="1"><attributes><divisions>1</divisions><time><beats>4</beats><beat-type>4</beat-type></time></attributes><note><pitch><step>C</step><octave>4</octave></pitch><duration>1</duration><type>quarter</type></note><note><pitch><step>E</step><octave>4</octave></pitch><duration>2</duration><type>half</type></note><note><rest/><duration>1</duration><type>quarter</type></note></measure></part></score-partwise>`;
test("MusicXML imports export actual MIDI with their source notes, not renamed XML",async()=>{const result=await midiExportBytes(new TextEncoder().encode(xml));expect(new TextDecoder().decode(result.slice(0,4))).toBe("MThd");const song=songFromMidi(readMidi(result));expect(song.notes.map(note=>note.pitch)).toEqual([60,64]);expect(song.notes.length).toBe(2)});
