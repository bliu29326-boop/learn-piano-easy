/** Visible presentation rebrand while keeping upstream storage keys, song identifiers and license texts intact. */
import type { Messages } from "./messages/en";
const label=(value:string)=>value.replace(/Learn Piano Easy/gi,"Keytrail").replace(/learn-piano-easy(?!(?:\.|\/))/g,"Keytrail");
function walk(value:unknown):unknown {
  if(typeof value==="string")return label(value);
  if(typeof value==="function")return (...args:unknown[])=>{const result=value(...args);return typeof result==="string"?label(result):result};
  if(Array.isArray(value))return value.map(walk);
  if(value&&typeof value==="object")return Object.fromEntries(Object.entries(value).map(([key,child])=>[key,walk(child)]));
  return value;
}
export function rebrandMessages(source:Messages):Messages {
  const messages=walk(source) as Messages;
  messages.siteName="Keytrail";
  messages.player.shell.about.intro="Keytrail is a personal piano practice room, based on the MIT-licensed Learn Piano Easy engine by brainfoolong. Your practice and progress stay in this browser. See the licenses for original authors and asset credits.";
  messages.footer.tagline="Small steps. Real music.";
  messages.footer.license="Keytrail. Piano engine derived from MIT-licensed upstream work. Piano sound: Salamander Grand Piano V3 by Alexander Holm (CC BY 3.0).";
  messages.pages.home.title="Learn Piano Online Free | Keytrail";
  messages.pages.home.description="Learn piano online free with Keytrail: guided lessons, a playable piano, notation and useful practice tools at your own pace.";
  return messages;
}
