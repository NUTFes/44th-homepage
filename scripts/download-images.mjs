import axios from 'axios';
import { execSync } from 'child_process';
import 'dotenv/config';
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

// URLがGoogle DriveのURLかどうかを判定する
const isGoogleDriveUrl = (url) => {
  if (!url) return false;
  return url.includes('drive.google.com') || url.includes('docs.google.com');
};

// URLから拡張子を取得する（Firebase/Imgur用）
const getFileExtensionFromUrl = (url) => {
  if (!url) return '.png'; // デフォルト

  // URLから拡張子を抽出
  const match = url.match(/\.(png|jpe?g|gif|webp)(\?|$)/i);
  if (match) {
    return `.${match[1].toLowerCase()}`;
  }

  // Firebase URLの場合、altパラメータより前から拡張子を抽出
  const firebaseMatch = url.match(
    /([^\/\?]+)\.(png|jpe?g|gif|webp)(\?alt=media|$)/i
  );
  if (firebaseMatch) {
    return `.${firebaseMatch[2].toLowerCase()}`;
  }

  return '.png'; // デフォルト
};

// Firebase/ImgurのURLから直接画像をダウンロードする関数
const downloadImageDirect = (url, filepath) => {
  try {
    console.log(`  Attempting to download from: ${url}`);
    execSync(`curl -L -s -o "${filepath}" "${url}"`, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`  Error downloading ${url} with curl:`, error.message);
    return false;
  }
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

// カテゴリ別の頭文字マッピング
const CATEGORY_PREFIXES = {
  exh_exp: 'E',
  sale: 'S',
  food: 'F',
  corpolate_booth: 'C',
  plan: 'P',
  sponsoring_corpolate: 'SP',
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

    // カテゴリの頭文字を取得
    const prefix = CATEGORY_PREFIXES[source.name] || 'X';

    for (const [index, item] of items.entries()) {
      const imageUrl = item[source.image_url_column];

      if (!imageUrl) continue; // 画像URLがない場合のみスキップ

      // 新しい命名規則: 頭文字 + 順番（1から開始）
      const sequenceNumber = index + 1;
      const newImageId = `${prefix}${sequenceNumber}`;

      console.log(`  Downloading image ${sequenceNumber} as ${newImageId}...`);

      let success = false;
      let filename;
      let filepath;

      if (isGoogleDriveUrl(imageUrl)) {
        // Google Drive URL の場合（既存の方法）
        const fileId = getFileIdFromUrl(imageUrl);
        if (!fileId) {
          console.warn(`  Could not extract file ID from URL: ${imageUrl}`);
          continue;
        }

        filename = `${newImageId}.png`;
        filepath = path.join(imageDir, filename);
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        success = await downloadImage(downloadUrl, filepath);
      } else {
        // Firebase/Imgur URL の場合（新しい方法）
        const extension = getFileExtensionFromUrl(imageUrl);
        filename = `${newImageId}${extension}`;
        filepath = path.join(imageDir, filename);
        success = await downloadImageDirect(imageUrl, filepath);
      }

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
