/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, "./src"), "node_modules"],
    };
    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
