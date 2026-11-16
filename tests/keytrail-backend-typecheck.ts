import ts from "typescript";
import { readdirSync } from "node:fs";
const files=[...readdirSync("server").filter(x=>x.endsWith(".ts")).map(x=>"server/"+x),"functions/account.ts","functions/api/[[path]].ts","tests/keytrail-backend.test.ts"];
const program=ts.createProgram(files,{noEmit:true,target:ts.ScriptTarget.ESNext,module:ts.ModuleKind.ESNext,moduleResolution:ts.ModuleResolutionKind.Bundler,lib:["lib.esnext.d.ts","lib.dom.d.ts","lib.dom.iterable.d.ts"],types:["bun"],strict:true,noUncheckedIndexedAccess:true,exactOptionalPropertyTypes:true,skipLibCheck:true});
const diagnostics=ts.getPreEmitDiagnostics(program);console.log(ts.formatDiagnosticsWithColorAndContext(diagnostics,{getCurrentDirectory:()=>process.cwd(),getCanonicalFileName:x=>x,getNewLine:()=>"\n"}));console.log(`Targeted TypeScript: ${files.length} files; ${diagnostics.length} diagnostics`);process.exit(diagnostics.length?1:0);
