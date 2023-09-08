/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
