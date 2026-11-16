import { chromium, expect } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { COURSE } from '../src/learn/course';
const base=process.env.KEYTRAIL_PROBE_ORIGIN??'http://127.0.0.1:4178';
const out='/root/.hermes/cache/scratch/keytrail-engine-acceptance';
const courseOnly=process.env.KEYTRAIL_PROBE_SECTION==='course';
await mkdir(out,{recursive:true});
const checks:{name:string;details:unknown}[]=[];
const record=async(name:string,details:unknown)=>{checks.push({name,details});await writeFile(out+(courseOnly?'/checks-course.json':'/checks.json'),JSON.stringify(checks,null,2));console.log(JSON.stringify(checks.at(-1)))};
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
const ctx=await browser.newContext({viewport:{width:1440,height:1000},locale:'en-US'});
const page=await ctx.newPage();const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
// The preserved engine intentionally auto-hides controls while idle. Normal pointer movement wakes them.
const wakeControls=async()=>{await page.mouse.move(700,400);await page.mouse.move(300,120);await expect(page.locator('.control-bar')).not.toHaveClass(/\bidle\b/)};
await page.addInitScript(()=>{(window as any).__keytrailAudioStarts=0;const start=AudioBufferSourceNode.prototype.start;AudioBufferSourceNode.prototype.start=function(...args:Parameters<typeof start>){(window as any).__keytrailAudioStarts++;return start.apply(this,args)}});
try {
 if(!courseOnly){
 await page.goto(base+'/play/');await expect(page.locator('.stage canvas')).toBeVisible({timeout:30000});
 await expect(page.getByRole('button',{name:'Songs',exact:true})).toBeVisible();
 await record('actual piano canvas and free library entry',{canvas:await page.locator('.stage canvas').boundingBox()});
 await page.getByRole('button',{name:'Play',exact:true}).click();
 await expect(page.getByRole('button',{name:'Pause',exact:true})).toBeVisible();
 await page.waitForTimeout(1600);
 await expect(page.locator('.control-bar .timeline-time').first()).not.toHaveText('0:00');
 const started=await page.evaluate(()=>(window as any).__keytrailAudioStarts);
 expect(started).toBeGreaterThan(0);
 await wakeControls();await page.getByRole('button',{name:'Pause',exact:true}).click();
 await page.screenshot({path:out+'/practice.png'});
 await record('real playback starts decoded audio and advances timeline',{audioSourceStarts:started,time:await page.locator('.control-bar .timeline-time').first().innerText()});
 const before=await page.evaluate(()=>(window as any).__keytrailAudioStarts);
 await page.keyboard.press('q');
 await expect.poll(()=>page.evaluate(()=>(window as any).__keytrailAudioStarts)).toBeGreaterThan(before);
 const after=await page.evaluate(()=>(window as any).__keytrailAudioStarts);
 expect(after).toBeGreaterThan(before);
 await record('computer letter key plays without membership',{additionalSourceStarts:after-before});
 await page.getByRole('button',{name:'Settings',exact:true}).click();
 const wait=page.getByRole('switch',{name:'Wait for your notes',exact:true});await wait.check();
 await page.getByRole('button',{name:'Settings',exact:true}).click();
 const stopTitle=page.getByRole('button',{name:'Stop',exact:true});
 if(await stopTitle.count())await stopTitle.click();else await page.locator('.control-bar button').nth(1).click();
 await page.getByRole('button',{name:'Play',exact:true}).click();await page.waitForTimeout(1300);
 await expect(page.locator('.control-bar .timeline-time').first()).toHaveText('0:00');
 await page.getByRole('button',{name:'Settings',exact:true}).click();await wait.uncheck();
 await page.getByRole('button',{name:'Settings',exact:true}).click();
 await expect(page.locator('.control-bar .timeline-time').first()).not.toHaveText('0:00',{timeout:5000});
 await wakeControls();await page.getByRole('button',{name:'Pause',exact:true}).click();
 await record('free wait mode holds and releases the actual play clock',true);
 await page.getByRole('button',{name:'Settings',exact:true}).click();
 await page.getByRole('switch',{name:'Show the sheet music',exact:true}).check();
 await page.getByRole('button',{name:'Settings',exact:true}).click();
 await expect(page.getByRole('region',{name:'Sheet music',exact:true})).toBeVisible();
 await expect(page.locator('.sheet g.chord').first()).toBeAttached({timeout:15000});
 await page.screenshot({path:out+'/notation.png'});
 await record('free notation renders actual song notes',{chords:await page.locator('.sheet g.chord').count()});
 const imported=Array.from(new Uint8Array(await Bun.file(new URL('../public/songs/ours/twinkle-twinkle-little-star/common.mid',import.meta.url)).arrayBuffer()));
 await page.evaluate((bytes)=>{const dt=new DataTransfer();dt.items.add(new File([new Uint8Array(bytes)],'keytrail-import-check.mid',{type:'audio/midi'}));document.querySelector('.stage canvas')!.dispatchEvent(new DragEvent('drop',{dataTransfer:dt,bubbles:true,cancelable:true}))},imported);
 await expect(page.getByLabel('Open song',{exact:true})).toHaveText('keytrail-import-check',{timeout:15000});
 await record('real MIDI import and practice remains free',{source:'upstream MIT Twinkle common.mid',bytes:imported.length});
 await page.getByRole('button',{name:'MIDI export · Plus',exact:true}).click();
 await expect(page.locator('#keytrail-plus')).toContainText('Plus');await page.keyboard.press('Escape');
 await record('free user export shows honest membership gate',true);
 } else {
  await page.goto(base+'/play/');await expect(page.locator('.stage canvas')).toBeVisible({timeout:30000});
  await page.waitForFunction(()=>navigator.serviceWorker.controller!==null,{timeout:30000});
 }
 await page.goto(base+'/learn/');
 await expect(page.locator('.map__world').first()).toBeVisible({timeout:30000});
 if(await page.getByRole('dialog').count())await page.keyboard.press('Escape');
 await expect(page.locator('.map__world')).toHaveCount(8);
 await expect(page.locator('.map__world[data-member-locked="true"]')).toHaveCount(6);
 await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:out+'/course.png'});
 await record('course has two free worlds and six Plus worlds',{worlds:8,paidWorlds:6});
 for(const world of COURSE.slice(0,2)){
  const {lessons}=await world.load();const lesson=lessons[0]!;
  await page.goto(base+`/learn/${world.id}/${lesson.id}/`);
  await expect(page.locator('.lesson__title')).toBeVisible({timeout:30000});
  expect(await page.locator('#keytrail-plus').count()).toBe(0);
  await record('free course world '+world.id,{lesson:lesson.id,title:await page.locator('.lesson__title').innerText()});
 }
 const world=COURSE[2]!;const {lessons}=await world.load();await page.goto(base+`/learn/${world.id}/${lessons[0]!.id}/`);
 await expect(page.locator('.kt-lock-page')).toContainText('Plus',{timeout:20000});
 await record('direct world3 lesson URL is member-gated',{world:world.id});
 for(const width of [320,375,414,768]){
  await page.setViewportSize({width,height:850});await page.goto(base+'/play/');await expect(page.locator('.stage canvas')).toBeVisible({timeout:30000});
  const geometry=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth}));expect(geometry.width).toBeLessThanOrEqual(width);
  await page.screenshot({path:out+`/player-${width}.png`});
  await record('real player viewport '+width,geometry);
 }
 expect(errors).toEqual([]);
 await record('no uncaught application errors',errors);
 console.log(JSON.stringify({status:'passed',checks:checks.length,evidence:out}));
} catch(error){await page.screenshot({path:out+'/failure.png'}).catch(()=>{});await writeFile(out+'/failure.txt',String(error)+'\n'+(await page.locator('body').innerText().catch(()=>'')));throw error}
finally{await ctx.close();await browser.close()}
