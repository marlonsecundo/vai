const debug = process.env.NODE_ENV !== "production";
const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  basePath: "/vai",
  // assetPrefix: "/vai",
  output: debug ? "standalone" : "export",
});

module.exports = nextConfig;
