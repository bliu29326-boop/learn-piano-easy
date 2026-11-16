/** Keytrail's bounded asset gate. No build, deployment, network write, or repertoire import. */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { noteNumber, Soundfont } from "../src/audio/soundfont";
import { readMidi } from "../src/midi/smf-read";
import { songFromMidi } from "../src/midi/song";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = join(root, "docs/keytrail-asset-manifest.json");
const hash = (bytes: Uint8Array | string) => createHash("sha256").update(bytes).digest("hex");
const forbidden = /piano-midi(?:\.de|\/)|CC BY-SA/i;
const maxBytes = 25 * 1024 * 1024;

export function permittedRepertoire(license: string): boolean {
  return /^(MIT|Public Domain|CC0 1\.0|CC BY (2\.0|2\.5|3\.0|4\.0))$/.test(license);
}

export function embeddedAudio(map: Record<string, string>): [string, Uint8Array][] {
  assert.equal(Object.keys(map).length, 30, "the genuine Salamander conversion has 30 sampled pitches");
  return Object.entries(map).map(([name, uri]) => {
    assert.ok(noteNumber(name) !== undefined, `invalid audio pitch: ${name}`);
    assert.ok(/^data:audio\/mp3;base64,[A-Za-z0-9+/]+=*$/.test(uri), `external or malformed audio: ${name}`);
    const bytes = Buffer.from(uri.slice(uri.indexOf(",") + 1), "base64");
    assert.ok(bytes.byteLength > 1000, `truncated audio: ${name}`);
    return [name, bytes];
  });
}

async function pathsIn(dir: string): Promise<string[]> {
  const files: string[] = [];
  for (const item of await readdir(join(root, dir), { withFileTypes: true })) {
    const path = `${dir}/${item.name}`;
    if (item.isDirectory()) files.push(...await pathsIn(path));
    else if (item.isFile()) files.push(path);
    else throw new Error(`asset is not a regular file: ${path}`);
  }
  return files.sort();
}

async function assetPaths(): Promise<string[]> {
  return [...await pathsIn("public"), "src/ui/icons/icons.ts", "src/ui/icons/LICENSE.md"].sort();
}

async function readJson(path: string): Promise<any> {
  return JSON.parse(await readFile(join(root, path), "utf8"));
}

/** Refresh only inventory bytes; provenance and verified source evidence must already exist. */
async function refreshManifest(): Promise<void> {
  const manifest = await readJson("docs/keytrail-asset-manifest.json");
  const old = new Map(manifest.assets.map((entry: any) => [entry.path, entry]));
  manifest.assets = await Promise.all((await assetPaths()).map(async (path) => {
    const previous = old.get(path) as any;
    assert.ok(previous, `new asset needs explicit provenance before inventory refresh: ${path}`);
    const bytes = await readFile(join(root, path));
    return { ...previous, bytes: bytes.length, sha256: hash(bytes) };
  }));
  manifest.totals = {
    assets: manifest.assets.length,
    bytes: manifest.assets.reduce((total: number, entry: any) => total + entry.bytes, 0),
    midi: manifest.assets.filter((entry: any) => entry.path.endsWith(".mid")).length,
    guides: manifest.assets.filter((entry: any) => entry.path.endsWith("/guide.json")).length,
  };
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

async function decodeAudio(map: Record<string, string>): Promise<any[]> {
  const decoded: any[] = [];
  for (const [name, bytes] of embeddedAudio(map)) {
    const process = Bun.spawn(["ffmpeg", "-v", "error", "-i", "pipe:0", "-f", "f32le", "-ac", "1", "-ar", "22050", "pipe:1"], {
      stdin: "pipe", stdout: "pipe", stderr: "pipe",
    });
    process.stdin.write(bytes);
    process.stdin.end();
    const [pcm, stderr, exit] = await Promise.all([
      new Response(process.stdout).arrayBuffer(), new Response(process.stderr).text(), process.exited,
    ]);
    assert.equal(exit, 0, `${name}: real MP3 decoding failed: ${stderr}`);
    const frames = new Float32Array(pcm);
    let square = 0;
    let peak = 0;
    for (const value of frames) { square += value * value; peak = Math.max(peak, Math.abs(value)); }
    const seconds = frames.length / 22050;
    const rms = Math.sqrt(square / frames.length);
    assert.ok(seconds > 1 && seconds <= 8.1, `${name}: invalid decoded duration: ${seconds}`);
    assert.ok(rms > 0.0001 && peak > 0.005, `${name}: silent audio`);
    decoded.push({ name, seconds, rms, peak, sha256: hash(bytes) });
  }
  return decoded;
}

async function verifySources(manifest: any): Promise<number> {
  let checked = 0;
  for (const piece of manifest.mutopiaVerification) {
    const response = await fetch(piece.metadataUrl);
    assert.ok(response.ok, `${piece.metadataUrl}: HTTP ${response.status}`);
    const rdf = await response.text();
    assert.equal(hash(rdf), piece.metadataSha256, `${piece.path}: source metadata changed; review license again`);
    assert.ok(rdf.includes(`<mp:licence>${piece.sourceLicense}</mp:licence>`));
    const midiResponse = await fetch(piece.midiUrl);
    assert.ok(midiResponse.ok, `${piece.midiUrl}: HTTP ${midiResponse.status}`);
    const bytes = new Uint8Array(await midiResponse.arrayBuffer());
    assert.equal(hash(bytes), piece.downloadSha256, `${piece.path}: source MIDI changed`);
    checked++;
  }
  return checked;
}

export async function audit(): Promise<any> {
  const catalog = await readJson("public/songs/catalog.json");
  const paths = await assetPaths();
  assert.equal(paths.filter((path) => path.includes("/piano-midi/")).length, 0, "remove the entire prohibited MIDI batch");
  assert.ok(!forbidden.test(JSON.stringify(catalog)), "catalogue contains prohibited repertoire or references");
  const midis = paths.filter((path) => path.startsWith("public/songs/") && path.endsWith(".mid"));
  assert.equal(new Set(catalog.map((row: any) => row.file)).size, catalog.length, "duplicate catalogue files");
  assert.deepEqual(catalog.map((row: any) => `public/songs/${row.file}`).sort(), midis.sort(), "every MIDI must be declared exactly once");
  const byFile = new Map(catalog.map((row: any) => [row.file, row]));
  for (const row of catalog) {
    assert.ok(permittedRepertoire(row.license), `${row.file}: restricted repertoire license`);
    assert.ok(row.credit?.length > 0, `${row.file}: missing attribution`);
    if (row.mythic) assert.ok(byFile.has(row.mythic), `${row.file}: dangling original score link`);
    if (/^(ours|originals)\//.test(row.file)) {
      assert.equal(row.license, "MIT", `${row.file}: upstream MIDI rights must stay MIT`);
      assert.match(row.credit, /learn-piano-easy/, `${row.file}: preserve upstream attribution`);
    }
    const bytes = new Uint8Array(await readFile(join(root, "public/songs", row.file)));
    const song = songFromMidi(readMidi(bytes));
    assert.equal(song.problems.length, 0, `${row.file}: MIDI parser problems`);
    assert.ok(song.tracks.some((track) => track.notes.length > 0), `${row.file}: no playable notes`);
  }
  assert.equal(catalog.filter((row: any) => row.license === "MIT").length, 338, "preserve all 338 upstream MIT MIDI files");
  for (const path of paths.filter((path) => path.startsWith("public/songs/") && path.endsWith(".json"))) {
    assert.ok(!forbidden.test(await readFile(join(root, path), "utf8")), `${path}: prohibited source link`);
  }
  const manifest = await readJson("docs/keytrail-asset-manifest.json");
  assert.deepEqual(manifest.assets.map((entry: any) => entry.path).sort(), paths, "manifest must exhaust public files and bundled icon paths");
  assert.equal(manifest.totals.assets, paths.length, "manifest asset total differs");
  assert.equal(manifest.totals.midi, midis.length, "manifest MIDI total differs");
  assert.equal(manifest.totals.guides, paths.filter((path) => path.endsWith("/guide.json")).length, "manifest guide total differs");
  assert.equal(manifest.totals.bytes, manifest.assets.reduce((sum: number, entry: any) => sum + entry.bytes, 0), "manifest byte total differs");
  for (const entry of manifest.assets) {
    const bytes = await readFile(join(root, entry.path));
    assert.equal(entry.sha256, hash(bytes), `${entry.path}: manifest digest differs`);
    assert.equal(entry.bytes, bytes.length, `${entry.path}: manifest size differs`);
    assert.ok(bytes.length < maxBytes, `${entry.path}: exceeds Pages 25 MiB bound`);
    for (const key of ["author", "source", "license", "commercialRedistribution"]) assert.ok(entry[key]?.length > 0, `${entry.path}: missing ${key}`);
  }
  assert.ok(manifest.requiredLicenseTexts.length >= 6, "complete third-party license texts are required");
  for (const required of manifest.requiredLicenseTexts) {
    assert.equal(hash(required.text), required.sourceSha256, `${required.path}: recorded legal text digest differs`);
    const normalized = (text: string) => text.replace(/\s+/g, " ").trim();
    assert.ok(normalized(await readFile(join(root, required.path), "utf8")).includes(normalized(required.text)), `${required.path}: complete license text missing`);
  }
  assert.equal(manifest.upstreamMitFiles.length, 338, "MIT source baseline must remain complete");
  assert.deepEqual(manifest.upstreamMitFiles.map((entry: any) => entry.path).sort(), catalog.filter((row: any) => row.license === "MIT").map((row: any) => `public/songs/${row.file}`).sort());
  for (const original of manifest.upstreamMitFiles) {
    assert.equal(hash(await readFile(join(root, original.path))), original.sha256, `${original.path}: original MIT music was altered`);
  }
  const mutopia = catalog.filter((row: any) => row.file.startsWith("mutopia/"));
  assert.equal(manifest.mutopiaVerification.length, mutopia.length, "one individual source verification per retained Mutopia MIDI");
  for (const row of mutopia) {
    const evidence = manifest.mutopiaVerification.find((item: any) => item.path === `public/songs/${row.file}`);
    assert.ok(evidence, `${row.file}: individual verification missing`);
    assert.equal(evidence.license, row.license);
    assert.equal(evidence.author, row.credit, `${row.file}: source maintainer attribution differs`);
    const declaredLicense = evidence.sourceLicense === "Public Domain" ? "Public Domain" : evidence.sourceLicense.replace(/^Creative Commons Attribution /, "CC BY ");
    assert.equal(declaredLicense, row.license, `${row.file}: source declaration and catalogue license differ`);
    assert.ok(evidence.metadataText.includes(`<mp:licence>${evidence.sourceLicense}</mp:licence>`));
    assert.equal(hash(evidence.metadataText), evidence.metadataSha256);
    assert.equal(hash(await readFile(join(root, evidence.path))), evidence.retainedSha256);
    assert.ok(evidence.midiMatched, `${row.file}: downloaded MIDI differs`);
  }
  const audioPath = "public/sounds/salamander/acoustic_grand_piano-mp3.json";
  const audio = await readJson(audioPath);
  embeddedAudio(audio);
  const sampler = new Soundfont(audio, { decodeAudioData: async (bytes) => bytes.byteLength });
  for (let note = 21; note <= 108; note++) {
    assert.ok(Math.abs(sampler.nearest(note) - note) <= 1, `${note}: missing playable key range`);
    assert.ok(await sampler.sample(note) > 1000);
  }
  assert.deepEqual(paths.filter((path) => path.startsWith("public/sounds/") && !/LICENSE|legalcode/.test(path)), [audioPath], "undeclared audio asset");
  for (const path of await pathsIn("src")) {
    if (!path.endsWith(".ts") || path.endsWith(".test.ts")) continue;
    const text = await readFile(join(root, path), "utf8");
    assert.ok(!/(?:https?:)?\/\/[^\s"'<>]+\.(?:mp3|wav|ogg|sf2|sfz)|https?:\/\/[^\s"'<>]*(?:soundfont|soundfonts)/i.test(text), `${path}: undeclared external audio URL`);
  }
  const summary: any = {
    catalog: catalog.length, upstreamMitMidi: 338, verifiedMutopiaMidi: mutopia.length,
    guides: paths.filter((path) => path.endsWith("/guide.json")).length,
    assets: paths.length, maxAssetBytes: Math.max(...manifest.assets.map((entry: any) => entry.bytes)),
    sampledPitches: Object.keys(audio).length, playableKeys: 88,
  };
  if (process.argv.includes("--decode-audio")) summary.decodedAudio = await decodeAudio(audio);
  if (process.argv.includes("--verify-sources")) summary.networkSourcesRechecked = await verifySources(manifest);
  return summary;
}

function selfTest(): void {
  for (const license of ["MIT", "Public Domain", "CC0 1.0", "CC BY 3.0"]) assert.ok(permittedRepertoire(license));
  for (const license of ["CC BY-SA 3.0", "CC BY-NC 4.0", "CC BY-ND 4.0", "unknown"]) assert.ok(!permittedRepertoire(license));
  const map = Object.fromEntries(Array.from({ length: 30 }, (_, index) => [`C${index}`, `https://example.com/${index}.mp3`]));
  assert.throws(() => embeddedAudio(map), /external or malformed audio/);
  assert.throws(() => embeddedAudio({ A0: "data:audio/mp3;base64,AAAA" }), /30 sampled pitches/);
  console.log("PASS: allowed/rejected license cases, external-audio and empty/truncated-map guards");
}

if (import.meta.main) {
  if (process.argv.includes("--self-test")) selfTest();
  else {
    if (process.argv.includes("--write-manifest")) await refreshManifest();
    console.log(JSON.stringify(await audit(), null, 2));
  }
}
