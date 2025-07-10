// .github/scripts/processCertifications.js
import { existsSync, readFileSync, mkdirSync, createWriteStream, writeFileSync } from 'fs';
import { get } from 'https';
import { join } from 'path';

const [, , inputPath, outputDir] = process.argv;

if (!inputPath || !outputDir) {
    console.error("Usage: node processCertifications.js <inputFile> <outputDir>");
    process.exit(1);
}

if (!existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
}

const data = JSON.parse(readFileSync(inputPath, 'utf-8'));
if (!Array.isArray(data) || data.length === 0) {
    console.log("No data to process.");
    process.exit(0);
}

if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = createWriteStream(dest);
        get(url, (response) => {
            if (response.statusCode !== 200) {
                return reject(`Failed to download ${url}, status code: ${response.statusCode}`);
            }
            response.pipe(file);
            file.on('finish', () => file.close(resolve));
        }).on('error', reject);
    });
}

(async () => {
    for (const cert of data) {
        if (cert.badge_url) {
            const fileName = cert.badge_url.split('/').pop(); // Extracts "AI_Associate.png"
            const localPath = join(outputDir, fileName);
            try {
                await downloadImage(cert.badge_url, localPath);
                cert.badge_url = `/badges/${fileName}`;
                console.log(`Downloaded and updated: ${fileName}`);
            } catch (err) {
                console.error(`Failed to process ${cert.badge_url}: ${err}`);
            }
        }
    }


    writeFileSync(inputPath, JSON.stringify(data, null, 2));
    console.log("Updated certifications JSON file.");
})();
