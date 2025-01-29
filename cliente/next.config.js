/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // Set as an empty object
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
}

module.exports = nextConfig;
