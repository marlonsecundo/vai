/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/vai",
  assetPrefix: "/vai",
  output: debug ? "standalone" : "export",
};

module.exports = nextConfig;
