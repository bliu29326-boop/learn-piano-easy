import type { Env, User } from "./types";
import { membership } from "./billing";
import { exact, fail, PRIVATE } from "./http";
import { unbase64 } from "./crypto";
/** Only these three capabilities are paid. Core playing and imports never call this guard. */
export async function requireEntitlement(env:Env,user:User,capability:"world3_plus"|"advanced_library"|"midi_export") {if(!["world3_plus","advanced_library","midi_export"].includes(capability)||!(await membership(env,user.id)).active)fail(403,"MEMBERSHIP_REQUIRED",{capability});}
export async function exportMIDI(env:Env,user:User,body:Record<string,unknown>) {
 await requireEntitlement(env,user,"midi_export");exact(body,["midi_base64"],["filename"]);
 if(typeof body.midi_base64!=="string"||body.midi_base64.length>1400000||!body.midi_base64.length)fail(400,"INVALID_MIDI");let data:Uint8Array;try{data=unbase64(body.midi_base64);}catch{fail(400,"INVALID_MIDI");}
 const view=new DataView(data.buffer,data.byteOffset,data.byteLength),text=(n:number)=>String.fromCharCode(...data.slice(n,n+4));
 if(data.length<26||data.length>1048576||text(0)!=="MThd"||view.getUint32(4)!==6||view.getUint16(8)>2||view.getUint16(10)<1||view.getUint16(12)===0)fail(400,"INVALID_MIDI");
 let offset=14,count=0;while(offset+8<=data.length){if(text(offset)!=="MTrk")fail(400,"INVALID_MIDI");const length=view.getUint32(offset+4);if(length===0||offset+8+length>data.length)fail(400,"INVALID_MIDI");offset+=8+length;count++;}if(offset!==data.length||count!==view.getUint16(10))fail(400,"INVALID_MIDI");
 const filename=typeof body.filename==="string"?body.filename:"keytrail-practice.mid";if(!/^[A-Za-z0-9][A-Za-z0-9_. -]{0,95}\.mid$/i.test(filename))fail(400,"INVALID_FILENAME");
 return new Response(new Uint8Array(data).buffer,{headers:{...PRIVATE,"Content-Type":"audio/midi","Content-Disposition":`attachment; filename="${filename}"`}});
}
