const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "frames");
const outputDir = path.join(__dirname, "frames-webp");

if (!fs.existsSync(inputDir)) {
  console.error("❌ frames folder not found:", inputDir);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, async (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  console.log("📂 Files found:", files.length);

  let convertedCount = 0;

  for (const file of files) {
    const lower = file.toLowerCase();

    const isJpg = lower.endsWith(".jpg") || lower.endsWith(".jpeg");
    const isFrame = lower.includes("ezgif-frame");

    if (isJpg && isFrame) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(
        outputDir,
        file.replace(/\.(jpg|jpeg)$/i, ".webp")
      );

      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);

        console.log(`✅ Converted: ${file}`);
        convertedCount++;
      } catch (error) {
        console.error(`❌ Error converting ${file}:`, error);
      }
    }
  }

  console.log(`🎯 Total converted: ${convertedCount}`);

  if (convertedCount === 0) {
    console.log("⚠️ No matching JPG files found.");
  } else {
    console.log("🎉 Conversion complete!");
  }
});