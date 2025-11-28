import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../css/globals.css';
import { ThemeProvider } from 'next-themes';
import { Card, Sonner, TooltipProvider } from 'skyroc-ui';
import config from '../config';
import { BrandLogo, HeaderActions } from './_components';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
});

const siteConfig = {
  name: 'Skyroc UI',
  description: 'Skyroc UI 是一个现代化的 React UI 组件库，提供丰富的可定制组件。支持 CLI 一键复制源码和 NPM 包引入两种使用方式。',
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Playground`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
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
    locale: 'zh_CN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
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
    description: siteConfig.description,
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

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="zh-CN"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        id="app"
      >
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
        >
          <TooltipProvider>
            <div
              data-vaul-drawer-wrapper
              className="h-full"
            >
              <Card
                className="h-full max-sm:h-auto"
                extra={<HeaderActions />}
                title={<BrandLogo />}
              >
                {children}
              </Card>
            </div>

            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
