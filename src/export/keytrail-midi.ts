/** Retain original MIDI bytes; convert MusicXML through the complete upstream reader/writer, never by renaming it. */
import {readSongFile} from "../midi/parse";
import {writeMidi} from "../midi/smf-write";
export async function midiExportBytes(bytes:Uint8Array):Promise<Uint8Array>{
  if(bytes[0]===0x4d&&bytes[1]===0x54&&bytes[2]===0x68&&bytes[3]===0x64)return bytes;
  return writeMidi(await readSongFile(bytes));
}
