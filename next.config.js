/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'; // 프로덕션 모드인지
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
  //assetPrefix: isProd ? 'http://localhost:3000' : ''
};

module.exports = nextConfig;
