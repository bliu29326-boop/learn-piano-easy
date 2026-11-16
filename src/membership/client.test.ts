import {expect,test} from "bun:test";
import {api,exportMidi,signInUrl,requireFeature} from "./client";
test("structured real API errors become useful text, not object coercion",async()=>{
 const original=globalThis.fetch;globalThis.fetch=(async()=>Response.json({error:{code:"MEMBERSHIP_REQUIRED"}},{status:403})) as unknown as typeof fetch;
 try{await expect(api("/api/checkout",{})).rejects.toThrow("MEMBERSHIP_REQUIRED")}finally{globalThis.fetch=original}
});
test("protected MIDI export matches the backend JSON body and never downloads after refusal",async()=>{
 const original=globalThis.fetch;let payload:unknown;let contentType="";
 globalThis.fetch=(async(input:Parameters<typeof fetch>[0],options?:Parameters<typeof fetch>[1])=>{if(String(input)==="/api/me")return Response.json({user:{id:"test-boundary",name:"Boundary",email:"boundary@example.invalid"},membership:{active:true,current_period_end:Math.floor(Date.now()/1000)+60,cancel_at_period_end:false},environment:"development"});contentType=new Headers(options?.headers).get("content-type")??"";payload=options?.body;return Response.json({error:{code:"INVALID_MIDI"}},{status:400})}) as unknown as typeof fetch;
 try{await expect(exportMidi(new Uint8Array([77,84,104,100]),"boundary.mid")).rejects.toThrow();expect(contentType).toBe("application/json");expect(JSON.parse(String(payload))).toEqual({midi_base64:"TVRoZA==",filename:"boundary.mid"})}finally{globalThis.fetch=original}
});
test("free core and import never depend on auth network; login preserves relative path query and hash",async()=>{
 const original=globalThis.fetch;let calls=0;globalThis.fetch=(async()=>{calls++;throw new Error("must not call")}) as unknown as typeof fetch;
 try{expect(await requireFeature({feature:"core"})).toBe(true);expect(await requireFeature({feature:"import"})).toBe(true);expect(calls).toBe(0);expect(decodeURIComponent(signInUrl("/play/?song=one#phrase").split("return_to=")[1]!)).toBe("/play/?song=one#phrase");expect(signInUrl("//outside.invalid")).toContain("%2Faccount%2F")}finally{globalThis.fetch=original}
});
