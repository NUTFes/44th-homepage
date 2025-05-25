/** @type {import('next').NextConfig} */
const nextConfig = {
  // もし他に設定があれば、それはそのまま残してください
  // ↓↓↓ この部分を追記 ↓↓↓
  images: {
    unoptimized: true, // 画像の最適化を無効化
  },
  webpack(config) {
    config.cache = false;
    return config;
  },
  // ↑↑↑ この部分を追記 ↑↑↑
};

export default nextConfig;
