import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';

// Images to compress with their target settings
const imagesToCompress = [
  // EW_Photos - very large, need aggressive compression
  { pattern: 'EW_Photos/*.jpg', maxWidth: 1920, quality: 75 },
  // SQM photos
  { pattern: 'Fotos_SQM2/*.jpg', maxWidth: 1920, quality: 80 },
  // Potassium photos
  { pattern: 'Potassium_Photos/*.jpg', maxWidth: 1920, quality: 80 },
  { pattern: 'Potassium_Photos/*.jpeg', maxWidth: 1920, quality: 80 },
  // Spence photos
  { pattern: 'fotos_spence/*.jpg', maxWidth: 1920, quality: 80 },
  { pattern: 'fotos_spence/*.jpeg', maxWidth: 1920, quality: 80 },
  // Marcobre photos
  { pattern: 'Fotos_Marccobre/*.jpg', maxWidth: 1920, quality: 80 },
  // Hero/main images
  { file: 'copper_ore.jpg', maxWidth: 1920, quality: 80 },
  { file: 'zinc_ore.jpg', maxWidth: 1920, quality: 80 },
  { file: 'crude_oil.png', maxWidth: 1920, quality: 80, convertToJpg: true },
  { file: 'filtro_prensa_1200_drone_view.png', maxWidth: 1920, quality: 80, convertToJpg: true },
  { file: 'chatbot_avatar.png', maxWidth: 512, quality: 85 },
  { file: 'filtros_acoplados.png', maxWidth: 1920, quality: 80, convertToJpg: true },
  { file: 'potassium_industry.jpg', maxWidth: 1920, quality: 80 },
  { file: 'copper_mine.jpg', maxWidth: 1920, quality: 80 },
  { file: 'copper_concentrate_plant.jpg', maxWidth: 1920, quality: 80 },
  { file: 'corrosive_equipment.png', maxWidth: 1920, quality: 80 },
  { file: 'sx_plant_stock_photo.jpg', maxWidth: 1920, quality: 80 },
  { file: 'lithium_mine.jpg', maxWidth: 1920, quality: 80 },
  { file: 'gold_sediment_pool.jpg', maxWidth: 1920, quality: 80 },
  { file: 'oil_refinery.jpg', maxWidth: 1920, quality: 80 },
  { file: 'earth-land.png', maxWidth: 1024, quality: 85 },
  { file: 'earth-topology.png', maxWidth: 1024, quality: 85 },
];

async function getFilesFromPattern(pattern) {
  const [dir, filePattern] = pattern.split('/');
  const fullDir = path.join(PUBLIC_DIR, dir);

  if (!fs.existsSync(fullDir)) {
    return [];
  }

  const files = fs.readdirSync(fullDir);
  const ext = filePattern.replace('*', '');

  return files
    .filter(f => f.toLowerCase().endsWith(ext.toLowerCase()))
    .map(f => path.join(dir, f));
}

async function compressImage(filePath, options) {
  const fullPath = path.join(PUBLIC_DIR, filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`  Skipping (not found): ${filePath}`);
    return null;
  }

  const stats = fs.statSync(fullPath);
  const originalSize = stats.size;

  // Skip if already small
  if (originalSize < 100 * 1024) {
    console.log(`  Skipping (already small): ${filePath} (${(originalSize / 1024).toFixed(0)}KB)`);
    return null;
  }

  const ext = path.extname(filePath).toLowerCase();
  const isPng = ext === '.png';
  const isJpg = ext === '.jpg' || ext === '.jpeg';

  let outputPath = fullPath;
  let pipeline = sharp(fullPath);

  // Get metadata
  const metadata = await pipeline.metadata();

  // Resize if needed
  if (metadata.width > options.maxWidth) {
    pipeline = pipeline.resize(options.maxWidth, null, {
      withoutEnlargement: true,
      fit: 'inside'
    });
  }

  // Convert PNG to JPG if specified (for photos, not graphics)
  if (isPng && options.convertToJpg) {
    outputPath = fullPath.replace('.png', '.jpg');
    pipeline = pipeline.jpeg({ quality: options.quality, mozjpeg: true });
  } else if (isJpg) {
    pipeline = pipeline.jpeg({ quality: options.quality, mozjpeg: true });
  } else if (isPng) {
    pipeline = pipeline.png({ quality: options.quality, compressionLevel: 9 });
  }

  // Write to temp file first
  const tempPath = fullPath + '.tmp';
  await pipeline.toFile(tempPath);

  // Get new size
  const newStats = fs.statSync(tempPath);
  const newSize = newStats.size;

  // Only keep if smaller
  if (newSize < originalSize) {
    fs.unlinkSync(fullPath);
    fs.renameSync(tempPath, outputPath);

    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`  Compressed: ${filePath}`);
    console.log(`    ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);

    return { original: originalSize, new: newSize, path: filePath };
  } else {
    fs.unlinkSync(tempPath);
    console.log(`  Skipping (no improvement): ${filePath}`);
    return null;
  }
}

async function main() {
  console.log('Starting image compression...\n');

  let totalOriginal = 0;
  let totalNew = 0;
  let filesCompressed = 0;

  for (const config of imagesToCompress) {
    let files = [];

    if (config.pattern) {
      files = await getFilesFromPattern(config.pattern);
      if (files.length > 0) {
        console.log(`\nProcessing ${config.pattern} (${files.length} files):`);
      }
    } else if (config.file) {
      files = [config.file];
      console.log(`\nProcessing ${config.file}:`);
    }

    for (const file of files) {
      try {
        const result = await compressImage(file, {
          maxWidth: config.maxWidth,
          quality: config.quality,
          convertToJpg: config.convertToJpg
        });

        if (result) {
          totalOriginal += result.original;
          totalNew += result.new;
          filesCompressed++;
        }
      } catch (err) {
        console.log(`  Error processing ${file}: ${err.message}`);
      }
    }
  }

  console.log('\n========================================');
  console.log('Compression Complete!');
  console.log(`Files compressed: ${filesCompressed}`);
  console.log(`Total savings: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)}MB`);
  console.log(`  Before: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`  After: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
  console.log('========================================');
}

main().catch(console.error);
