import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Puppeteer must run as Node external (not bundled by webpack/turbopack)
  serverExternalPackages: ["puppeteer"],
};

export default nextConfig;
