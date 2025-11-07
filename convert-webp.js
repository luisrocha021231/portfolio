import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = 'public'
const files = fs.readdirSync(inputDir)

for (const file of files) {
  const inputPath = path.join(inputDir, file)

  if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp')

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`✅ ${file} → ${path.basename(outputPath)}`))
      .catch(err => console.error(`❌ Error con ${file}:`, err))
  }
}
