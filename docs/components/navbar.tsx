'use client';

import { useState } from 'react';
import { Github, Menu, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            href="/"
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(237,100%,70%)] to-[hsl(237,100%,85%)]">
              <span className="text-sm font-bold text-white">S</span>
            </div>

            <span>Skyroc UI</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              href="/docs"
            >
              文档
            </Link>

            <Link
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              href="/docs/components/button"
            >
              组件
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            className="hover:bg-muted hidden size-9 items-center justify-center rounded-lg transition-colors sm:flex"
            href="https://github.com/yourusername/skyroc-ui"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="size-5" />
          </a>

          <button
            className="hover:bg-muted flex size-9 items-center justify-center rounded-lg transition-colors"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </button>

          <button
            className="hover:bg-muted flex size-9 items-center justify-center rounded-lg transition-colors md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {mobileMenuOpen
        ? (
          <div className="border-border/40 bg-background border-t p-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link
                className="hover:bg-muted rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                href="/docs"
                onClick={() => setMobileMenuOpen(false)}
              >
                文档
              </Link>

              <Link
                className="hover:bg-muted rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                href="/docs/components/button"
                onClick={() => setMobileMenuOpen(false)}
              >
                组件
              </Link>
            </div>
          </div>
        )
        : null}
    </nav>
  );
};
