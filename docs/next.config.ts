import createMDX from '@next/mdx';
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
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true
  }
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'wrap' }],
      [
        'rehype-pretty-code',
        {
          keepBackground: false,
          theme: {
            dark: 'github-dark',
            light: 'github-light'
          },
          showLineNumbers: true
        }
      ],
      '@skyroc/next-docs-plugin/remark'
    ],
    remarkPlugins: [
      'remark-gfm',
      [
        '@skyroc/next-docs-plugin',
        {
          isRemark: true
        }
      ]
    ]
  }
});

export default withMDX(nextConfig);
