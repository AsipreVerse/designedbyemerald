import nextMDX from '@next/mdx'
import { recmaImportImages } from 'recma-import-images'
import remarkGfm from 'remark-gfm'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import createNextIntlPlugin from 'next-intl/plugin';

// Import necessary types if we were in TS, but this is MJS.

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
}

const withNextIntl = createNextIntlPlugin();

export default async function config() {
  let withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
      remarkPlugins: [
        remarkGfm,
      ],
      rehypePlugins: [
      ],
      // We are omitting recmaPlugins and complex remark/rehype plugins 
      // to avoid non-serializable options error in Next.js 16.
    },
  })

  return withNextIntl(withMDX(nextConfig))
}
