import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ui-play.skyroc.me';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
