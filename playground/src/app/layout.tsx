import type { Metadata } from 'next';
import '../css/globals.css';
import { getLocale } from 'next-intl/server';
import config from '../config';
import type { Locale } from '../i18n/config';

const siteConfig = {
  name: 'Skyroc UI',
  url: 'https://ui-play.skyroc.me',
  ogImage: '/logo.png',
  author: {
    name: 'Ohh',
    url: 'https://github.com/Ohh-889'
  },
  keywords: [
    'React',
    'UI',
    'Components',
    'Tailwind CSS',
    'TypeScript',
    'Skyroc UI',
    'Component Library',
    'Design System',
    'shadcn',
    'Radix UI'
  ]
};

const descriptions: Record<Locale, string> = {
  en: 'Skyroc UI is a modern React UI component library with rich customizable components. Supports CLI source code copy and NPM package import.',
  zh: 'Skyroc UI 是一个现代化的 React UI 组件库，提供丰富的可定制组件。支持 CLI 一键复制源码和 NPM 包引入两种使用方式。'
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale() as Locale;
  const description = descriptions[locale] || descriptions.en;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} - Playground`,
      template: `%s | ${siteConfig.name}`
    },
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        'index': true,
        'follow': true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description,
      images: [siteConfig.ogImage],
      creator: '@skyroc_ui'
    },
    icons: {
      icon: '/icon.svg',
      shortcut: '/favicon.ico',
      apple: '/logo.png'
    },
    other: {
      'msvalidate.01': '7F89C68ECF79F13249BDC614706F7549'
    },
    manifest: '/manifest.json',
    alternates: {
      canonical: siteConfig.url
    }
  };
}

interface Props {
  children: React.ReactNode;
}

const RootLayout = async ({
  children
}: Props) => {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning={!config.isDev}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${config.META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `
          }}
        />

      </head>

      <body
        id="app"
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
