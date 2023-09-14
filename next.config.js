/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
