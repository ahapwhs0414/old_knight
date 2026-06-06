/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/old_knight' : '',
  assetPrefix: isProd ? '/old_knight/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
