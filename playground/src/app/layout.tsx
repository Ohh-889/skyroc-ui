import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../css/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from 'next-themes';
import { Badge, ButtonIcon, Card, Icon, Popover, Sonner, Tooltip, TooltipProvider } from 'skyroc-ui';
import ThemeCustomize from '../components/ThemeCustomize';
import ThemeSchemaToggler from '../components/ThemeSchemaToggler';
import config from '../config';

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
  'metadataBase': new URL(siteConfig.url),
  'title': {
    default: `${siteConfig.name} - Playground`,
    template: `%s | ${siteConfig.name}`
  },
  'description': siteConfig.description,
  'keywords': siteConfig.keywords,
  // @ts-expect-error - msvalidate.01 is not a valid property in the Metadata type
  'msvalidate.01': '7F89C68ECF79F13249BDC614706F7549',
  'authors': [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  'creator': siteConfig.author.name,
  'publisher': siteConfig.name,
  'robots': {
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
  'openGraph': {
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
  'twitter': {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@skyroc_ui'
  },
  'icons': {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/logo.png'
  },
  'manifest': '/manifest.json',
  'alternates': {
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
      lang="en"
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
                extra={(
                  <div className="flex items-center gap-1">
                    <Tooltip content="文档">
                      <ButtonIcon
                        asChild
                        size="lg"
                        variant="ghost"
                      >
                        <Link
                          href="https://docs.skyroc-ui.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Icon icon="lucide:book-open" />
                        </Link>
                      </ButtonIcon>
                    </Tooltip>

                    <Popover
                      align="end"
                      classNames={{ content: 'z-15' }}
                      side="bottom"
                      trigger={(
                        <ButtonIcon
                          icon="lucide:palette"
                          size="lg"
                          variant="ghost"
                        />
                      )}
                    >
                      <ThemeCustomize />
                    </Popover>

                    <Tooltip content="GitHub">
                      <ButtonIcon
                        asChild
                        size="lg"
                        variant="ghost"
                      >
                        <Link
                          href={config.githubUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Icon icon="lucide:github" />
                        </Link>
                      </ButtonIcon>
                    </Tooltip>

                    <div className="bg-border mx-1 h-5 w-px" />
                    <ThemeSchemaToggler />
                  </div>
                )}
                title={(
                  <div className="flex items-center gap-3">
                    <div className="from-primary/20 to-primary/5 flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br p-1.5 ring-1 ring-black/5 dark:ring-white/10">
                      <Image
                        alt="Skyroc UI"
                        className="h-full w-full"
                        height={28}
                        src="/logo.svg"
                        width={28}
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="from-foreground via-foreground/80 to-foreground bg-linear-to-r bg-clip-text text-base font-bold tracking-tight">
                        Skyroc UI
                      </span>

                      <span className="text-muted-foreground -mt-0.5 text-[10px] font-medium tracking-wide">
                        Playground
                      </span>
                    </div>

                    <Badge
                      className="ml-1"
                      color="success"
                      size="xs"
                    >
                      v1.0
                    </Badge>
                  </div>
                )}
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
