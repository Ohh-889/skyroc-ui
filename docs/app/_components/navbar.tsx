'use client';

import { useEffect, useState } from 'react';
import { BookOpen, Github, LayoutGrid, Menu, Moon, Search, Sun, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button, KeyboardKey } from 'skyroc-ui';

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderThemeIcon = () => {
    if (theme === 'dark') {
      return <Sun className="size-[18px]" />;
    }
    return <Moon className="size-[18px]" />;
  };

  const renderMenuIcon = () => {
    if (mobileMenuOpen) {
      return <X className="size-5" />;
    }
    return <Menu className="size-5" />;
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-border/50 bg-background/90 border-b shadow-sm backdrop-blur-xl'
          : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 lg:px-6">
        {/* 左侧：Logo + 搜索框 */}
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            href="/"
          >
            <Image
              alt="Skyroc UI"
              className="size-7"
              height={28}
              src="/logo.png"
              width={28}
            />

            <span className="text-foreground text-base font-semibold tracking-tight">
              Skyroc UI
            </span>
          </Link>

          {/* 搜索框 - 桌面端 */}
          <div className="border-border/60 bg-muted/40 hover:bg-muted/60 hidden cursor-pointer items-center gap-2 rounded-lg border px-3 py-1.5 transition-colors md:flex">

            <Search className="text-muted-foreground size-3.5" />
            <span className="text-muted-foreground text-xs">搜索文档</span>

            <KeyboardKey
              value={['meta', 'K']}
              variant="ghost"
            >
              {keys => (
                <span className="ml-4 flex items-center gap-0.5">
                  {keys.map((key, i) => (
                    <span
                      className="border-border/80 bg-background text-muted-foreground rounded px-1 py-0.5 text-[10px] font-medium"
                      key={i}
                    >
                      {key}
                    </span>
                  ))}
                </span>
              )}
            </KeyboardKey>
          </div>
        </div>

        {/* 右侧：导航 + 操作 */}
        <div className="flex items-center gap-1">
          {/* 导航链接 - 桌面端 */}
          <nav className="hidden items-center gap-0.5 md:flex">
            <Button
              asChild
              color="secondary"
              variant="ghost"
            >
              <Link
                className="gap-1.5"
                href="/docs"
              >
                <BookOpen className="size-4" />
                文档
              </Link>
            </Button>

            <Button
              asChild
              color="secondary"
              variant="ghost"
            >
              <Link
                className="gap-1.5"
                href="/docs/components/button"
              >
                <LayoutGrid className="size-4" />
                组件
              </Link>
            </Button>
          </nav>

          {/* 分隔线 */}
          <div className="bg-border/60 mx-2 hidden h-5 w-px md:block" />

          {/* 操作按钮 */}
          <div className="flex items-center gap-0.5">
            {/* 移动端搜索按钮 */}
            <Button
              fitContent
              className="md:hidden"
              color="secondary"
              variant="ghost"
            >
              <Search className="size-[18px]" />
            </Button>

            {/* GitHub 链接 */}
            <Button
              asChild
              fitContent
              color="secondary"
              variant="ghost"
            >
              <Link
                href="https://github.com/skyroc-ui"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="size-[18px]" />
              </Link>
            </Button>

            {/* 主题切换 */}
            {mounted
              ? (
                <Button
                  fitContent
                  color="secondary"
                  variant="ghost"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {renderThemeIcon()}
                </Button>
              )
              : (
                <Button
                  fitContent
                  color="secondary"
                  variant="ghost"
                >
                  <Sun className="size-[18px]" />
                </Button>
              )}

            {/* 移动端菜单按钮 */}
            <Button
              fitContent
              className="md:hidden"
              color="secondary"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {renderMenuIcon()}
            </Button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileMenuOpen
        ? (
          <div className="border-border/40 bg-background/98 animate-in slide-in-from-top-1 border-t backdrop-blur-xl md:hidden">
            <div className="flex flex-col p-3">
              {/* 移动端搜索框 */}
              <div className="border-border/60 bg-muted/40 mb-3 flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5">
                <Search className="text-muted-foreground size-4" />
                <span className="text-muted-foreground text-sm">搜索文档...</span>
              </div>

              {/* 导航链接 */}
              <Button
                asChild
                className="justify-start gap-2"
                color="secondary"
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/docs">
                  <BookOpen className="size-4" />
                  文档
                </Link>
              </Button>

              <Button
                asChild
                className="justify-start gap-2"
                color="secondary"
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/docs/components/button">
                  <LayoutGrid className="size-4" />
                  组件
                </Link>
              </Button>
            </div>
          </div>
        )
        : null}
    </nav>
  );
};

export default Navbar;
