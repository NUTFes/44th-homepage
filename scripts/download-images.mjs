import axios from 'axios';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CONFIG_PATH = path.join(process.cwd(), 'config', 'data-sources.json');

// Google Driveの共有リンクからFile IDを抽出する
const getFileIdFromUrl = (url) => {
  if (!url) return null;
  const match =
    url.match(/\/file\/d\/([^\/]+)/) || url.match(/open\?id=([^&]+)/);
  return match ? match[1] : null;
};

// 画像をダウンロードする関数 (curlを使用)
const downloadImage = (url, filepath) => {
  try {
    console.log(`  Attempting to download from: ${url}`);
    execSync(`curl -L -s -o "${filepath}" "${url}"`, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`  Error downloading ${url} with curl:`, error.message);
    return false;
  }
};

// TSVをパースしてJSONオブジェクトの配列に変換する関数
const parseTsvToJSON = (tsvText) => {
  const lines = tsvText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .filter((line) => line.trim() !== '');
  if (lines[0] && lines[0].split('\t').every((cell) => cell.trim() === '')) {
    lines.shift();
  }
  const rows = lines.map((line) => line.split('\t'));
  const headers = rows[0] || [];
  const dataRows = rows.slice(1);

  return dataRows.map((row) => {
    const obj = {};
    headers.forEach((header, i) => {
      obj[header.trim()] = row[i] ? row[i].trim() : '';
    });
    return obj;
  });
};

// メイン処理
async function main() {
  console.log('Starting data synchronization script...');

  const dataSources = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));

  for (const source of dataSources) {
    console.log(`\nProcessing source: ${source.name}`);

    // --- データ取得と保存 ---
    const tsvUrl = process.env[source.tsv_url] || source.tsv_url;
    console.log(`  Fetching TSV data from: ${tsvUrl}`);
    const response = await axios.get(tsvUrl);
    const items = parseTsvToJSON(response.data);

    const dataDir = path.dirname(source.json_path);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(source.json_path, JSON.stringify(items, null, 2));
    console.log(`  Successfully saved data to ${source.json_path}`);

    // --- 画像ダウンロード ---
    const imageDir = path.join(process.cwd(), source.image_dir);
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
      console.log(`  Created directory: ${imageDir}`);
    }

    for (const item of items) {
      const imageUrl = item[source.image_url_column];
      const imageId = item[source.id_column];
      if (!imageUrl || !imageId) continue;

      const fileId = getFileIdFromUrl(imageUrl);
      if (!fileId) {
        console.warn(`  Could not extract file ID from URL: ${imageUrl}`);
        continue;
      }

      const filename = `${imageId}.png`;
      const filepath = path.join(imageDir, filename);

      // 常にダウンロードを実行する
      console.log(`  Downloading image for item ${imageId}...`);
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      const success = await downloadImage(downloadUrl, filepath);
      if (success) {
        console.log(`  Successfully downloaded: ${filename}`);
      } else {
        console.error(`  Failed to download: ${filename}`);
      }
    }
  }

  console.log('\nData synchronization script finished.');
}

main().catch((error) => {
  console.error('An error occurred in the script:', error);
  process.exit(1);
});
