/** @type {import('next').NextConfig} */
const nextConfig = {
  // もし他に設定があれば、それはそのまま残してください

  // ↓↓↓ この部分を追記 ↓↓↓
  webpack(config) {
    config.cache = false;
    return config;
  },
  // ↑↑↑ この部分を追記 ↑↑↑
};

export default nextConfig;
