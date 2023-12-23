const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: debug ? "standalone" : "export",
};

module.exports = nextConfig;
