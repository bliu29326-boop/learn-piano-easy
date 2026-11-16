/** Public Keytrail SSG. Invoke after upstream pages, BEFORE cache hashing / SW versioning. No full build runs here. */
import { mkdir,readFile,writeFile,readdir,rm } from "node:fs/promises";
import { join,dirname,relative } from "node:path";
import { PUBLIC_PAGES,publicHeader,publicFooter,esc,type PublicPage } from "../src/site/keytrail-content";
export const developmentOrigin=(origin:string):boolean=>{const host=new URL(origin).hostname;return host==="localhost"||host==="127.0.0.1"||host==="keytrail-dev.pages.dev"||host.endsWith(".keytrail-dev.pages.dev")};
export function renderPublicDocument(page:PublicPage,origin:string):string {
  const base=new URL(origin).origin;const canonical=base+page.path;const noindex=developmentOrigin(base)||page.path==="/account/";
  const schema=page.article?{"@context":"https://schema.org","@type":"Article",headline:page.heading,description:page.description,mainEntityOfPage:canonical,author:{"@type":"Organization",name:"Keytrail"},image:base+"/images/keytrail-practice.webp"}:page.path==="/"?{"@context":"https://schema.org","@type":"WebApplication",name:"Keytrail",url:canonical,description:page.description,applicationCategory:"EducationalApplication",operatingSystem:"Web",offers:[{"@type":"Offer",price:"0",priceCurrency:"USD",description:"Free core piano practice and course worlds 1 and 2"},{"@type":"Offer",price:"9.99",priceCurrency:"USD",description:"Keytrail Plus recurring monthly membership; development uses Stripe test mode"}]}:{"@context":"https://schema.org","@type":"WebPage",name:page.title,description:page.description,url:canonical};
  return `<!doctype html>\n<html lang="en" dir="ltr" data-keytrail-page="${esc(page.path)}" data-site-theme="light"><head><meta charset="utf-8"><base href="/"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${esc(page.title)}</title><meta name="description" content="${esc(page.description)}"><meta name="theme-color" content="#f2f5f2">${noindex?'<meta name="robots" content="noindex, nofollow">':""}<link rel="canonical" href="${canonical}"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:type" content="${page.article?"article":"website"}"><meta property="og:site_name" content="Keytrail"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${base}/images/keytrail-practice.webp"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/icons/icon.svg" type="image/svg+xml"><link rel="preload" href="/fonts/plus-jakarta-sans/plus-jakarta-sans.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/keytrail-pages.css"><script type="application/ld+json">${JSON.stringify(schema).replace(/</g,"\\u003c")}</script><script type="module" src="/app.js"></script></head><body class="kt-public"><div id="app">${publicHeader()}<main id="main" class="kt-main${page.article?" kt-article":""}">${page.body}</main>${publicFooter()}</div></body></html>\n`;
}
async function existing(path:string):Promise<string>{try{return await readFile(path,"utf8")}catch{return ""}}
/** Returns relative files written, useful for the parent build's file graph. */
export async function renderKeytrailPages(outDir:string,origin:string):Promise<string[]> {
  const base=new URL(origin).origin;const dev=developmentOrigin(base);const files:string[]=[];
  const put=async(path:string,content:string)=>{const file=join(outDir,path);await mkdir(dirname(file),{recursive:true});await writeFile(file,content);files.push(path)};
  await mkdir(outDir,{recursive:true});
  await put("keytrail-pages.css",await readFile(join(import.meta.dir,"../src/ui/keytrail.css"),"utf8"));
  // Existing app pages keep the real engine bundle, but get useful initial HTML and private dev metadata.
  for(const entry of await readdir(outDir,{recursive:true,withFileTypes:true})){
    if(!entry.isFile()||entry.name!=="index.html")continue;
    const file=join(entry.parentPath,entry.name);const path=relative(outDir,file).replaceAll("\\","/");
    if(path.split("/").includes("sponsor")){await rm(dirname(file),{recursive:true,force:true});continue}
    if(PUBLIC_PAGES.some(page=>path===page.path.slice(1)+"index.html"))continue;
    let html=await readFile(file,"utf8");
    if(dev)html=html.replace(/<meta\s+name="robots"[^>]*>/g,"").replace("</head>",'<meta name="robots" content="noindex, nofollow"></head>');
    html=html.replaceAll("Learn Piano Easy","Keytrail").replace(/(<meta property="og:image" content=")[^"]*(")/g,`$1${base}/images/keytrail-practice.webp$2`);
    const course=/(?:^|\/)learn\/(?:index.html)?$/.test(path);const play=/(?:^|\/)play\/index.html$/.test(path);const mode=/(?:^|\/)modes\/index.html$/.test(path);
    if(course||play||mode){
      const heading=play?"Your Keytrail practice room":course?"A path into piano":"Find your practice mode";
      const body=play?"Play the piano with MIDI, your computer keyboard or touch. Open the song library or import your own MIDI file. Speed, loops, wait mode, notation, labels, hand selection and practice feedback stay free.":course?"Begin with Meet the piano and First melodies, the two free course worlds. Continue with rhythm, reading music, both hands, scales and keys, chords and expression in Keytrail Plus. Your progress stays in this browser.":"Explore how falling notes, sheet view, wait mode, hand practice and a smaller phrase can support your next session.";
      html=html.replace(/(<div id="app">)\s*(?:<noscript>[\s\S]*?<\/noscript>)?/,'$1'+publicHeader()+`<main id="main" class="kt-main"><h1>${heading}</h1><p>${body}</p><p>The interactive piano and lesson controls load with JavaScript. No account is required for free practice.</p><a href="/pricing/">Free and Plus scope</a></main>`);
    }
    await writeFile(file,html);files.push(path);
  }
  for(const page of PUBLIC_PAGES)await put(page.path.slice(1)+"index.html",renderPublicDocument(page,base));
  const notFound:PublicPage={path:"/404.html",title:"Page Not Found | Keytrail",heading:"That note isn't on this page.",description:"This Keytrail page does not exist. Return to the practice room or the home page.",body:`<h1>That note isn't on this page.</h1><p>The page you asked for isn't here. Your next little step can still be a musical one.</p><div class="kt-actions"><a class="kt-button kt-primary" href="/play/">Open practice</a><a class="kt-button" href="/">Back home</a></div>`};
  await put("404.html",renderPublicDocument(notFound,base).replace('<meta name="description"','<meta name="robots" content="noindex, nofollow"><meta name="description"'));
  const publicPaths=[...PUBLIC_PAGES.filter(page=>page.path!=="/account/").map(page=>page.path),"/play/","/learn/","/modes/"];
  await put("sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicPaths.map(path=>`<url><loc>${esc(base+path)}</loc></url>`).join("")}</urlset>\n`);
  await put("robots.txt",`User-agent: *\n${dev?"Disallow: /":"Allow: /\nDisallow: /api/\nDisallow: /account/"}\nSitemap: ${base}/sitemap.xml\n`);
  const redirectsPath=join(outDir,"_redirects");const priorRedirects=(await existing(redirectsPath)).replace(/# Keytrail aliases start[\s\S]*?# Keytrail aliases end\n?/g,"");
  await put("_redirects",priorRedirects+`\n# Keytrail aliases start\n/learn%20piano%20as%20an%20adult /learn-piano-as-an-adult/ 301\n/learn%20piano%20as%20an%20adult/ /learn-piano-as-an-adult/ 301\n/piano%20for%20beginners /piano-for-beginners/ 301\n/piano%20for%20beginners/ /piano-for-beginners/ 301\n/imprint /terms/ 301\n/imprint/ /terms/ 301\n# Keytrail aliases end\n`);
  const priorHeaders=(await existing(join(outDir,"_headers"))).replace(/# Keytrail headers start[\s\S]*?# Keytrail headers end\n?/g,"");
  await put("_headers",priorHeaders+`\n# Keytrail headers start\n${dev?"/*\n  X-Robots-Tag: noindex, nofollow\n":""}/api/*\n  Cache-Control: private, no-store\n  X-Robots-Tag: noindex, nofollow\n/account*\n  Cache-Control: private, no-store\n  X-Robots-Tag: noindex, nofollow\n# Keytrail headers end\n`);
  return [...new Set(files)];
}
/** Alternative explicit write name for build consumers. */
export const writeKeytrailPages=renderKeytrailPages;
