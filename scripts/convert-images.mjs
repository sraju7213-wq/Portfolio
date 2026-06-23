import { execSync } from 'child_process';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const IMAGES_DIR = join(process.cwd(), 'public/images');
const QUALITY = 82;

function findPngs(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...findPngs(full));
    } else if (extname(full).toLowerCase() === '.png') {
      results.push(full);
    }
  }
  return results;
}

const pngs = findPngs(IMAGES_DIR);
console.log(`Found ${pngs.length} PNGs to convert.\n`);

for (const png of pngs) {
  const webp = png.replace(/\.png$/i, '.webp');
  const name = basename(png);
  try {
    execSync(`npx -y sharp-cli -i "${png}" -o "${webp}" --format webp --quality ${QUALITY}`, {
      stdio: 'pipe',
    });
    const origSize = (statSync(png).size / 1024 / 1024).toFixed(2);
    const newSize = (statSync(webp).size / 1024 / 1024).toFixed(2);
    const savings = (((1 - statSync(webp).size / statSync(png).size)) * 100).toFixed(0);
    console.log(`✓ ${name} → ${origSize} MB → ${newSize} MB (${savings}% smaller)`);
  } catch (e) {
    console.error(`✗ ${name}: ${e.message}`);
  }
}

console.log('\nDone.');
