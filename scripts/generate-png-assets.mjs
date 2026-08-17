import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';

const appPath = new URL('../app.js', import.meta.url);
const root = new URL('../', import.meta.url);
const source = fs.readFileSync(appPath, 'utf8');
const start = source.indexOf('function signGraphic');
const end = source.indexOf('function signPng');
const context = {};
vm.createContext(context);
vm.runInContext(`${source.slice(start, end)};globalThis.renderSign=signGraphic;`, context);

const signs = {
  stop: 'What does an eight-sided sign always mean?',
  yield: 'What does a downward-pointing triangular sign mean?',
  warning: 'A diamond-shaped sign usually does what?',
  school: 'A five-sided sign marks what type of area?',
  'work-zone': 'Orange-and-black signs are used primarily for what?',
  incident: 'Pink-and-black road signs warn about what?',
  prohibited: 'A red circle with a diagonal slash means what?',
  guide: 'What do green road signs generally provide?',
  services: 'Blue-and-white road signs generally identify:',
  recreation: 'Brown-and-white signs generally point to:',
  'speed-limit': 'A vertical rectangular sign usually gives:',
  'do-not-enter': 'A DO NOT ENTER or WRONG WAY sign means:',
  'winding-road': 'A winding-road warning sign means you should:',
  'railroad-crossbuck': 'A railroad crossbuck warns that:'
};

const outputDir = new URL('../assets/signs/', import.meta.url);
fs.mkdirSync(outputDir, { recursive: true });
const tempDir=fs.mkdtempSync(path.join(os.tmpdir(),'permit-signs-'));
let tempIndex=0;

function render(svg, output, width, height) {
  const withNamespace = svg.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
  const tempSvg=path.join(tempDir,`sign-${tempIndex++}.svg`);
  fs.writeFileSync(tempSvg,withNamespace);
  const result = spawnSync('rsvg-convert', ['--width', String(width), '--height', String(height), '--output', output, tempSvg]);
  if (result.status !== 0) throw new Error(result.stderr.toString() || `Failed to render ${output}`);
}

for (const [name, q] of Object.entries(signs)) {
  render(context.renderSign({ q }), new URL(`${name}.png`, outputDir).pathname, 240, 200);
}

const conversions = [
  ['favicon.svg', 'favicon-32.png', 32, 32],
  ['favicon.svg', 'favicon-192.png', 192, 192],
  ['favicon.svg', 'favicon-512.png', 512, 512],
  ['social-preview.svg', 'social-preview.png', 1200, 630]
];
for (const [input, output, width, height] of conversions) {
  const result = spawnSync('rsvg-convert', ['--width', String(width), '--height', String(height), '--output', new URL(output, root).pathname, new URL(input, root).pathname]);
  if (result.status !== 0) throw new Error(result.stderr.toString() || `Failed to render ${output}`);
}

fs.rmSync(tempDir,{recursive:true,force:true});

console.log(`Generated ${Object.keys(signs).length} sign PNGs and ${conversions.length} site PNGs.`);
