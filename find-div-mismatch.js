const fs = require('fs');

const content = fs.readFileSync('src/components/About.js', 'utf8');
const lines = content.split('\n');

let depth = 0;
let startLine = 136;
let endLine = 250;

for (let i = startLine - 1; i < endLine; i++) {
  const line = lines[i];

  // Count opening divs (excluding self-closing)
  const selfClosing = (line.match(/<div[^>]*\/>/g) || []).length;
  const allOpening = (line.match(/<div/g) || []).length;
  const opening = allOpening - selfClosing;

  // Count closing divs
  const closing = (line.match(/<\/div>/g) || []).length;

  const prevDepth = depth;
  depth += opening - closing;

  if (opening > 0 || closing > 0 || prevDepth !== depth) {
    console.log(`Line ${i + 1}: depth ${prevDepth} -> ${depth} (${opening} open, ${closing} close) | ${line.trim().substring(0, 60)}`);
  }
}

console.log(`\nFinal depth: ${depth} (should be 0)`);
