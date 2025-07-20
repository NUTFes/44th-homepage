// 画像の拡張子候補
const IMAGE_EXTENSIONS = ['.png', '.jpeg', '.jpg', '.gif', '.webp'];

// 画像パスのフォールバック生成
export const generateImageFallbacks = (
  imageDir: string,
  imageId: string
): string[] => {
  const basePath = `/images/${imageDir}/${imageId}`;
  return IMAGE_EXTENSIONS.map((ext) => `${basePath}${ext}`);
};

// 最初に試行する画像パス（最も一般的な .png から開始）
export const getInitialImageSrc = (
  imageDir: string,
  imageId: string
): string => {
  return `/images/${imageDir}/${imageId}.png`;
};
