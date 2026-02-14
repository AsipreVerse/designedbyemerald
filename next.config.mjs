import nextMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin';

// Standard Next.js config
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
}

const withNextIntl = createNextIntlPlugin();

export default async function config() {
  let withMDX = nextMDX({
    extension: /\.mdx$/,
    // No options (plugins) passed to avoid Next.js 16 serialization issues
  })

  return withNextIntl(withMDX(nextConfig))
}
