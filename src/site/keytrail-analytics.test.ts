import {expect,test} from "bun:test";
import {countVisit} from "./stats";
test("Keytrail never calls the original visitor analytics provider, even on a legacy hostname",()=>{
 const names=["navigator","location","document","localStorage"] as const;const descriptors=names.map(name=>Object.getOwnPropertyDescriptor(globalThis,name));const original=globalThis.fetch;let requests=0;
 try{Object.defineProperty(globalThis,"navigator",{configurable:true,value:{}});Object.defineProperty(globalThis,"location",{configurable:true,value:{href:"https://learn-piano-easy.app/"}});Object.defineProperty(globalThis,"document",{configurable:true,value:{title:"Keytrail",referrer:""}});Object.defineProperty(globalThis,"localStorage",{configurable:true,value:{getItem:()=>null}});globalThis.fetch=(async()=>{requests++;return new Response()}) as unknown as typeof fetch;countVisit();expect(requests).toBe(0)}finally{globalThis.fetch=original;for(const [index,name]of names.entries()){const descriptor=descriptors[index];if(descriptor)Object.defineProperty(globalThis,name,descriptor);else Reflect.deleteProperty(globalThis,name)}}
});
