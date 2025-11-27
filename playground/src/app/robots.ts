import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ui-play.skyroc.me';

  return {
    rules: [
      // 主要搜索引擎 - 完全允许抓取
      {
        userAgent: 'Googlebot',
        allow: '/'
      },
      {
        userAgent: 'Bingbot',
        allow: '/'
      },
      {
        userAgent: 'Baiduspider',
        allow: '/'
      },
      {
        userAgent: 'YandexBot',
        allow: '/'
      },
      // 禁止 AI 训练爬虫
      {
        userAgent: 'GPTBot',
        disallow: '/'
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/'
      },
      {
        userAgent: 'CCBot',
        disallow: '/'
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/'
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/'
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/'
      },
      {
        userAgent: 'FacebookBot',
        disallow: '/'
      },
      {
        userAgent: 'Bytespider',
        disallow: '/'
      },
      // 默认规则 - 允许其他爬虫
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/', '/r/']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
