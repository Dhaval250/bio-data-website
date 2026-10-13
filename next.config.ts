import type { NextConfig } from "next";

const ONE_YEAR = "public, max-age=31536000, immutable";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  // Puppeteer must run as Node external (not bundled by webpack/turbopack)
  serverExternalPackages: ["puppeteer"],
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Static assets: long cache. Rename a file when you change it.
      { source: "/templates/thumb/:path*", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
      { source: "/vendor/:path*", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
      { source: "/logo.webp", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
      { source: "/logo-sm.webp", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
      { source: "/logo-mark.webp", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
    ];
  },
};

export default nextConfig;
