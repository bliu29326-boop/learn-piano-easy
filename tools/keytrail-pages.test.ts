import { expect,test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { renderKeytrailPages } from "./keytrail-pages";
import { PUBLIC_PAGES } from "../src/site/keytrail-content";
test("static Keytrail HTML is readable without JS and has distinct complete metadata",async()=>{
 const dir=await mkdtemp(join(tmpdir(),"keytrail-pages-test-"));try{
 await renderKeytrailPages(dir,"https://keytrail-dev.pages.dev");
 for(const page of PUBLIC_PAGES){const html=await readFile(join(dir,page.path.slice(1),"index.html"),"utf8");expect(html).toContain(`<title>${page.title.replace(/&/g,"&amp;")}</title>`);expect(html.match(/<h1[ >]/g)?.length).toBe(1);expect(html).toContain(page.heading);expect(html).toContain('rel="canonical"');expect(html).toContain('application/ld+json');expect(html).not.toContain("{{");expect(html).toContain('content="noindex, nofollow"');
 if(["/","/learn-piano-as-an-adult/","/piano-for-beginners/"].includes(page.path)){const text=page.body.replace(/<[^>]*>/g," ");expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(300);expect(html).toContain("/images/keytrail-")}}
 const sitemap=await readFile(join(dir,"sitemap.xml"),"utf8");expect(sitemap).toContain("/learn-piano-as-an-adult/");expect(sitemap).not.toContain("/account/");expect(sitemap).not.toContain("sponsor");
 const redirects=await readFile(join(dir,"_redirects"),"utf8");expect(redirects).toContain("/learn%20piano%20as%20an%20adult /learn-piano-as-an-adult/ 301");expect(redirects).toContain("/piano%20for%20beginners /piano-for-beginners/ 301");
 }finally{await rm(dir,{recursive:true,force:true})}
});
test("production origin does not inherit development noindex; private account is always private",async()=>{
 const dir=await mkdtemp(join(tmpdir(),"keytrail-pages-prod-test-"));try{await renderKeytrailPages(dir,"https://keytrail.example");const html=await readFile(join(dir,"index.html"),"utf8");expect(html).not.toContain("noindex");const headers=await readFile(join(dir,"_headers"),"utf8");expect(headers).toContain("Cache-Control: private, no-store");expect(await readFile(join(dir,"account/index.html"),"utf8")).toContain("noindex");}finally{await rm(dir,{recursive:true,force:true})}
});
