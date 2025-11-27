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

export const metadata: Metadata = {
  description: 'skyroc-ui playground',
  title: 'Skyroc UI'
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
