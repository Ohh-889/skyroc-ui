import { ArrowRight, Package, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-6 pt-24 pb-32 sm:pt-32 sm:pb-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-950),var(--color-gray-900))]" />

          <div className="mx-auto max-w-5xl text-center">
            <div className="bg-muted mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <Sparkles className="size-4 text-[hsl(var(--accent))]" />
              <span>现代化 React 组件库</span>
            </div>

            <h1 className="from-foreground to-foreground/70 mb-6 bg-linear-to-r bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
              优雅、简洁
              <br />

              <span className="bg-linear-to-r from-[hsl(237,100%,70%)] to-[hsl(237,100%,85%)] bg-clip-text text-transparent">
                Skyroc UI
              </span>
            </h1>

            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl">
              一套精心设计的 React 组件库，助力你快速构建优雅的现代化 Web 应用。
              <br />
              基于 Tailwind CSS，完全可定制，开箱即用。
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[hsl(237,100%,70%)] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/50 transition-all hover:scale-105 hover:bg-[hsl(237,100%,75%)]"
                href="/docs"
              >
                开始使用
                <ArrowRight className="size-4" />
              </Link>

              <Link
                className="border-border bg-background hover:bg-muted inline-flex items-center justify-center gap-2 rounded-lg border px-8 py-3 text-sm font-semibold transition-colors"
                href="/docs/components/button"
              >
                浏览组件
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="border-border bg-background rounded-2xl border p-8 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-linear-to-br from-[hsl(237,100%,70%)] to-[hsl(237,100%,85%)]">
                  <Zap className="size-6 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">开箱即用</h3>

                <p className="text-muted-foreground leading-relaxed">
                  精心设计的组件，无需额外配置，直接导入即可使用，提升开发效率。
                </p>
              </div>

              <div className="border-border bg-background rounded-2xl border p-8 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-linear-to-br from-[hsl(237,100%,70%)] to-[hsl(237,100%,85%)]">
                  <Package className="size-6 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">完全可定制</h3>

                <p className="text-muted-foreground leading-relaxed">
                  基于 Tailwind CSS 构建，支持主题定制，轻松适配你的设计系统。
                </p>
              </div>

              <div className="border-border bg-background rounded-2xl border p-8 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-linear-to-br from-[hsl(237,100%,70%)] to-[hsl(237,100%,85%)]">
                  <Sparkles className="size-6 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">现代化设计</h3>

                <p className="text-muted-foreground leading-relaxed">
                  遵循最新设计趋势，提供优雅简洁的视觉体验，支持深色模式。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-5xl">开始构建你的应用</h2>
            <p className="text-muted-foreground mb-8 text-lg">阅读文档，了解如何使用 Skyroc UI 构建优雅的用户界面</p>

            <Link
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[hsl(237,100%,70%)] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/50 transition-all hover:scale-105 hover:bg-[hsl(237,100%,75%)]"
              href="/docs"
            >
              查看文档
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-border/40 border-t px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-muted-foreground text-sm">© 2025 Skyroc UI. All rights reserved.</p>

          <div className="flex gap-6">
            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/docs"
            >
              文档
            </Link>

            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/docs/components/button"
            >
              组件
            </Link>

            <a
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="https://github.com"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
