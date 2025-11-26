import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

initOpenNextCloudflareForDev();

export default nextConfig;
