import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    remotePatterns: [
      { protocol: 'https', hostname: '**.example-cdn.com', pathname: '/**' },
      {protocol: 'https', hostname: 'avatars.githubusercontent.com'}
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
