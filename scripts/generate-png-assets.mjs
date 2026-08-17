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
  'railroad-crossbuck': 'A railroad crossbuck warns that:',
  'lane-red-x': { q: 'What does a red X above a lane mean?', visual: 'lane-red-x' },
  'dark-signal': { q: 'What should you do at a traffic signal that is completely dark?', visual: 'dark-signal' },
  'steady-yellow-signal': { q: 'A traffic light turns yellow as you approach.', visual: 'steady-yellow-signal' },
  'broken-yellow-line': { q: 'A broken yellow center line means:', visual: 'broken-yellow-line' },
  'double-yellow-lines': { q: 'Two solid yellow center lines mean:', visual: 'double-yellow-lines' },
  'stop-line': { q: 'Where should you stop when there is a stop line?', visual: 'stop-line' },
  'railroad-flashers': { q: 'At a railroad crossing with flashing red lights, you must:', visual: 'railroad-flashers' },
  'flashing-yellow-signal': { q: 'What does a flashing yellow signal mean?', visual: 'flashing-yellow-signal' },
  'lane-yellow-arrow': { q: 'A yellow diagonal downward arrow over a lane tells you to:', visual: 'lane-yellow-arrow' },
  'mixed-yellow-lines': { q: 'A broken yellow line beside a solid yellow line means:', visual: 'mixed-yellow-lines' },
  'hov-diamond': { q: 'A white diamond painted in a lane usually means:', visual: 'hov-diamond' },
  'yellow-curb': { q: 'What does a yellow-painted curb generally mean?', visual: 'yellow-curb' }
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

for (const [name, entry] of Object.entries(signs)) {
  const question = typeof entry === 'string' ? { q: entry } : entry;
  render(context.renderSign(question), new URL(`${name}.png`, outputDir).pathname, 240, 200);
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
