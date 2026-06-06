/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vercel 배포 시 output: 'export' 제거 (API Routes 사용하려면 서버 필요)
  // GitHub Pages 대신 Vercel을 사용합니다
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
