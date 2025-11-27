import type { Metadata } from 'next';
import {
  ArrowRight,
  Box,
  Code2,
  Copy,
  Github,
  Layers,
  Palette,
  Sparkles,
  Terminal,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Button } from 'skyroc-ui';
import {
  CodeBlock,
  ComponentShowcase,
  FeatureCard,
  GridBackground,
  Navbar,
  Stats,
  TechBadges
} from './_components';

// SEO Metadata
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://ui.skyroc.me'
  },
  authors: [{ name: 'Skyroc Team', url: 'https://github.com/skyroc-ui' }],
  description: '一套精心设计的现代化 React 组件库，基于 Tailwind CSS 构建，完全可定制，为开发者打造极致体验。支持 CLI 安装，50+ 精选组件开箱即用。',
  keywords: [
    'React',
    'UI 组件库',
    'Tailwind CSS',
    'TypeScript',
    'Next.js',
    '前端组件',
    'shadcn/ui',
    'Radix UI',
    '无障碍',
    'A11y',
    '开源'
  ],
  openGraph: {
    description: '一套精心设计的现代化 React 组件库，基于 Tailwind CSS 构建，完全可定制。',
    images: [{ alt: 'Skyroc UI - Modern React Components', height: 630, url: '/og-image.png', width: 1200 }],
    locale: 'zh_CN',
    siteName: 'Skyroc UI',
    title: 'Skyroc UI - 现代化 React 组件库',
    type: 'website',
    url: 'https://ui.skyroc.me'
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true
    },
    index: true
  },
  title: 'Skyroc UI - 现代化 React 组件库',
  twitter: {
    card: 'summary_large_image',
    description: '一套精心设计的现代化 React 组件库，基于 Tailwind CSS 构建，完全可定制。',
    images: ['/og-image.png'],
    title: 'Skyroc UI - 现代化 React 组件库'
  }
};

// 示例代码
const exampleCode = `import { Button, Alert, Badge } from 'skyroc-ui';

export default function App() {
  return (
    <div className="space-y-4">
      <Alert color="info" title="欢迎使用 Skyroc UI" />

      <div className="flex gap-2">
        <Button color="primary">Primary</Button>
        <Button color="success" variant="soft">Success</Button>
        <Badge color="warning">New</Badge>
      </div>
    </div>
  );
}`;

// 特性数据
const features = [
  {
    description: '通过 CLI 将组件源码直接复制到项目中，无需额外配置，完全可定制。',
    icon: <Zap className="size-6" />,
    title: '开箱即用'
  },
  {
    description: '100% TypeScript 编写，完整的类型定义，智能提示让开发更轻松。',
    icon: <Code2 className="size-6" />,
    title: '类型安全'
  },
  {
    description: '基于 Tailwind CSS 和 tailwind-variants，支持主题定制，轻松适配设计系统。',
    icon: <Palette className="size-6" />,
    title: '完全可定制'
  },
  {
    description: '遵循 WAI-ARIA 标准，基于 Radix UI 构建，确保无障碍访问。',
    icon: <Sparkles className="size-6" />,
    title: '无障碍访问'
  },
  {
    description: '组件经过性能优化，支持 Tree Shaking，按需引入不增加包体积。',
    icon: <Box className="size-6" />,
    title: '轻量高效'
  },
  {
    description: '遵循最新设计趋势，提供优雅简洁的视觉体验，完美支持深色模式。',
    icon: <Layers className="size-6" />,
    title: '现代化设计'
  }
];

const Home = () => {
  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      <GridBackground />
      <Navbar />

      <main className="relative">
        {/* Hero Section - 核心亮点最先展示 */}
        <section className="relative px-6 pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div className="mx-auto max-w-5xl">
            {/* 🌟 核心亮点：CLI 安装 - 最显眼位置 */}
            <div className="mx-auto mb-12 max-w-3xl text-center">
              {/* 大号标语 */}
              <div className="mb-8">
                <Badge
                  className="border-primary/30 bg-primary/10 text-primary mb-4 px-4 py-1.5"
                  variant="outline"
                >
                  <Sparkles className="mr-1.5 size-4" />
                  不同于传统 NPM 包
                </Badge>

                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  组件源码直接复制到项目中
                </h2>

                <p className="text-muted-foreground text-lg">
                  <strong className="text-primary">完全可定制</strong>
                  {' '}
                  · 无黑盒 · 随心修改
                </p>
              </div>

              {/* 超大号安装命令 */}
              <div className="group relative">
                {/* 发光边框 */}
                <div className="from-primary to-primary absolute -inset-1 rounded-2xl bg-linear-to-r via-purple-500 opacity-40 blur-lg transition-all group-hover:opacity-60" />

                <div className="border-primary/50 bg-card shadow-primary/20 relative overflow-hidden rounded-2xl border-2 shadow-2xl">
                  <div className="border-border/50 bg-muted/50 flex items-center justify-between border-b px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-red-500" />
                      <div className="size-3 rounded-full bg-yellow-500" />
                      <div className="size-3 rounded-full bg-green-500" />
                      <span className="text-muted-foreground ml-2 text-xs">Terminal</span>
                    </div>

                    <Button
                      color="primary"
                      shape="circle"
                      variant="ghost"
                    >
                      <Copy className="size-3.5" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 px-6 py-6 sm:px-8 sm:py-8">
                    <div className="bg-primary/10 flex size-14 shrink-0 items-center justify-center rounded-xl">
                      <Terminal className="text-primary size-7" />
                    </div>

                    <code className="flex-1 text-left font-mono text-lg font-semibold sm:text-xl">
                      <span className="text-muted-foreground">$</span>
                      {' '}
                      <span className="text-primary">pnpm dlx</span>
                      {' '}
                      <span className="text-foreground">shadcn@latest add</span>
                      {' '}
                      <span className="text-emerald-500">@sr/button</span>
                    </code>
                  </div>
                </div>
              </div>

              {/* 组件列表 */}
              <p className="text-muted-foreground mt-5 text-sm">
                支持 50+ 组件：
                <span className="text-foreground font-medium">button</span>
                ,
                {' '}
                <span className="text-foreground font-medium">input</span>
                ,
                {' '}
                <span className="text-foreground font-medium">alert</span>
                ,
                {' '}
                <span className="text-foreground font-medium">card</span>
                ,
                {' '}
                <span className="text-foreground font-medium">dialog</span>
                ,
                {' '}
                <span className="text-foreground font-medium">tabs</span>
                {' '}
                ...
              </p>
            </div>

            {/* 分割线 */}
            <div className="mx-auto mb-12 flex max-w-xs items-center gap-4">
              <div className="bg-border h-px flex-1" />
              <span className="text-muted-foreground text-xs">or</span>
              <div className="bg-border h-px flex-1" />
            </div>

            {/* 主标题区域 */}
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="from-foreground via-foreground to-foreground/60 bg-gradient-to-r bg-clip-text text-transparent">
                  构建优雅的
                </span>

                <br />

                <span className="from-primary to-primary bg-gradient-to-r via-purple-500 bg-clip-text text-transparent">
                  React 应用
                </span>
              </h1>

              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
                一套精心设计的现代化 React 组件库，基于 Tailwind CSS 构建，
                为开发者打造极致体验。
              </p>

              {/* CTA 按钮 */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  className="shadow-primary/30 shadow-lg"
                >
                  <Link href="/docs">
                    开始使用
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                >
                  <Link href="/docs/components/button">
                    <Layers className="size-4" />
                    浏览组件
                  </Link>
                </Button>
              </div>

              {/* 技术栈标签 */}
              <div className="mt-10">
                <TechBadges />
              </div>
            </div>
          </div>
        </section>

        {/* 统计数据 */}
        <section className="relative px-6 py-12">
          <Stats />
        </section>

        {/* 代码展示 */}
        <section className="relative px-6 py-12">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">简洁的 API 设计</h2>

            <p className="text-muted-foreground">
              几行代码即可构建精美的用户界面
            </p>
          </div>

          <CodeBlock
            code={exampleCode}
            filename="App.tsx"
          />
        </section>

        {/* 组件预览 */}
        <section className="relative px-6 py-16">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">开箱即用的组件</h2>

            <p className="text-muted-foreground">
              50+ 精心设计的 UI 组件，满足你的所有需求
            </p>
          </div>

          <ComponentShowcase />
        </section>

        {/* Features Section */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">为什么选择 Skyroc UI</h2>

              <p className="text-muted-foreground mx-auto max-w-2xl">
                我们专注于提供最佳的开发体验，让你能够快速构建高质量的用户界面
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  description={feature.description}
                  icon={feature.icon}
                  key={index}
                  title={feature.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="border-border bg-card relative overflow-hidden rounded-3xl border p-12 text-center">
              {/* 背景装饰 */}
              <div className="bg-primary absolute -top-20 -left-20 size-60 rounded-full opacity-10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 size-60 rounded-full bg-purple-500 opacity-10 blur-3xl" />

              <h2 className="relative mb-4 text-3xl font-bold sm:text-4xl">
                准备好开始了吗？
              </h2>

              <p className="text-muted-foreground relative mb-8">
                查阅文档，了解如何使用 Skyroc UI 构建优雅的用户界面
              </p>

              {/* 底部按钮 */}
              <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  className="shadow-primary/30 shadow-lg"
                >
                  <Link href="/docs">
                    查看文档
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                >
                  <Link
                    href="https://github.com/skyroc-ui"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github className="size-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-border/40 relative border-t px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              alt="Skyroc UI"
              className="size-6"
              height={24}
              src="/logo.png"
              width={24}
            />

            <span className="text-muted-foreground text-sm">
              © 2025 Skyroc UI. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
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
              href="https://github.com/skyroc-ui"
              rel="noopener noreferrer"
              target="_blank"
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
