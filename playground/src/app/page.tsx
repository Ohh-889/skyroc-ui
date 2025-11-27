'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Badge,
  Button,
  Card,
  Icon,
  Input
} from 'skyroc-ui';

// 组件列表
const componentList = [
  { description: '可折叠面板', href: '/accordion', icon: 'lucide:chevrons-down-up', name: 'Accordion' },
  { description: '警告提示', href: '/alert', icon: 'lucide:alert-circle', name: 'Alert' },
  { description: '确认对话框', href: '/alert-dialog', icon: 'lucide:message-square-warning', name: 'AlertDialog' },
  { description: '头像', href: '/avatar', icon: 'lucide:user-circle', name: 'Avatar' },
  { description: '徽章', href: '/badge', icon: 'lucide:badge', name: 'Badge' },
  { description: '面包屑', href: '/breadcrumb', icon: 'lucide:chevrons-right', name: 'Breadcrumb' },
  { description: '按钮', href: '/button', icon: 'lucide:mouse-pointer-click', name: 'Button' },
  { description: '卡片', href: '/card', icon: 'lucide:square', name: 'Card' },
  { description: '轮播图', href: '/carousel', icon: 'lucide:gallery-horizontal', name: 'Carousel' },
  { description: '复选框', href: '/checkbox', icon: 'lucide:check-square', name: 'Checkbox' },
  { description: '标签', href: '/chip', icon: 'lucide:circle-dot', name: 'Chip' },
  { description: '折叠', href: '/collapsible', icon: 'lucide:chevrons-up-down', name: 'Collapsible' },
  { description: '命令面板', href: '/command', icon: 'lucide:command', name: 'Command' },
  { description: '右键菜单', href: '/context-menu', icon: 'lucide:menu', name: 'ContextMenu' },
  { description: '对话框', href: '/dialog', icon: 'lucide:panel-top', name: 'Dialog' },
  { description: '分割线', href: '/divider', icon: 'lucide:minus', name: 'Divider' },
  { description: '抽屉', href: '/drawer', icon: 'lucide:panel-left', name: 'Drawer' },
  { description: '下拉菜单', href: '/dropdown-menu', icon: 'lucide:chevron-down', name: 'DropdownMenu' },
  { description: '表单', href: '/form', icon: 'lucide:file-input', name: 'Form' },
  { description: '悬停卡片', href: '/hover-card', icon: 'lucide:mouse-pointer-2', name: 'HoverCard' },
  { description: '图标', href: '/icon', icon: 'lucide:shapes', name: 'Icon' },
  { description: '输入框', href: '/input', icon: 'lucide:text-cursor-input', name: 'Input' },
  { description: 'OTP', href: '/input-otp', icon: 'lucide:lock-keyhole', name: 'InputOTP' },
  { description: '键盘键', href: '/keyboard-key', icon: 'lucide:keyboard', name: 'KeyboardKey' },
  { description: '标签', href: '/label', icon: 'lucide:tag', name: 'Label' },
  { description: '气泡', href: '/popover', icon: 'lucide:message-circle', name: 'Popover' },
  { description: '进度条', href: '/progress', icon: 'lucide:loader', name: 'Progress' },
  { description: '单选框', href: '/radio', icon: 'lucide:circle-check', name: 'Radio' },
  { description: '滚动区域', href: '/scroll-area', icon: 'lucide:scroll', name: 'ScrollArea' },
  { description: '选择器', href: '/select', icon: 'lucide:list', name: 'Select' },
  { description: '侧边栏', href: '/sheet', icon: 'lucide:panel-right', name: 'Sheet' },
  { description: '骨架屏', href: '/skeleton', icon: 'lucide:loader-2', name: 'Skeleton' },
  { description: '滑块', href: '/slider', icon: 'lucide:sliders-horizontal', name: 'Slider' },
  { description: '开关', href: '/switch', icon: 'lucide:toggle-left', name: 'Switch' },
  { description: '选项卡', href: '/tabs', icon: 'lucide:folder-kanban', name: 'Tabs' },
  { description: '文本域', href: '/textarea', icon: 'lucide:align-left', name: 'Textarea' },
  { description: '切换', href: '/toggle', icon: 'lucide:toggle-right', name: 'Toggle' },
  { description: '切换组', href: '/toggle-group', icon: 'lucide:layout-grid', name: 'ToggleGroup' },
  { description: '提示', href: '/tooltip', icon: 'lucide:message-square', name: 'Tooltip' },
  { description: '通知', href: '/sonner', icon: 'lucide:bell', name: 'Sonner' }
];

// 亮点特性
const highlights = [
  { desc: 'CLI 一键复制源码', icon: 'lucide:terminal' },
  { desc: 'NPM 包引入', icon: 'lucide:package' },
  { desc: '组合式 + 封装式', icon: 'lucide:puzzle' },
  { desc: 'TypeScript', icon: 'lucide:file-code' }
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const filteredComponents = componentList.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
      || item.description.includes(searchQuery)
  );

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="relative min-h-full">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <h1 className="text-primary text-3xl font-bold">Skyroc UI</h1>

              <Badge
                color="success"
                variant="soft"
              >
                Playground
              </Badge>
            </div>

            <p className="text-muted-foreground text-sm">
              组件演示与交互测试 · 点击组件查看详情
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              variant="outline"
            >
              <a
                href="https://docs.skyroc-ui.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon
                  className="mr-1.5 h-4 w-4"
                  icon="lucide:book-open"
                />
                文档
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              variant="outline"
            >
              <a
                href="https://github.com/Ohh-889/skyroc-ui"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon
                  className="mr-1.5 h-4 w-4"
                  icon="lucide:github"
                />
                GitHub
              </a>
            </Button>
          </div>
        </header>

        {/* 亮点介绍 */}
        <section className="mb-8">
          <Card className="bg-muted/30">
            <div className="flex flex-col gap-6 p-5 lg:flex-row lg:items-center lg:justify-between">
              {/* 左侧：亮点标签 */}
              <div className="flex flex-wrap items-center gap-3">
                {highlights.map(item => (
                  <div
                    className="bg-background flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm"
                    key={item.desc}
                  >
                    <Icon
                      className="text-primary h-4 w-4"
                      icon={item.icon}
                    />

                    <span>{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* 右侧：安装命令 */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {/* CLI 命令 */}
                <div className="bg-background flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-sm">
                  <span className="text-muted-foreground">$</span>
                  <code>npx skyroc add button</code>

                  <Button
                    aria-label={copiedCmd === 'cli' ? '已复制' : '复制 CLI 命令'}
                    className="ml-1 h-6 w-6 p-0"
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy('npx skyroc add button', 'cli')}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      icon={copiedCmd === 'cli' ? 'lucide:check' : 'lucide:copy'}
                    />
                  </Button>
                </div>

                <span className="text-muted-foreground hidden text-xs sm:block">或</span>

                {/* NPM 命令 */}
                <div className="bg-background flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-sm">
                  <span className="text-muted-foreground">$</span>
                  <code>npm i skyroc-ui</code>

                  <Button
                    aria-label={copiedCmd === 'npm' ? '已复制' : '复制 NPM 命令'}
                    className="ml-1 h-6 w-6 p-0"
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy('npm i skyroc-ui', 'npm')}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      icon={copiedCmd === 'npm' ? 'lucide:check' : 'lucide:copy'}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* 组件列表 */}
        <section>
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">组件</h2>
              <Badge variant="outline">{componentList.length}</Badge>
            </div>

            <Input
              aria-label="搜索组件"
              className="w-full sm:w-60"
              placeholder="搜索组件..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredComponents.map(component => (
              <Link
                className="group"
                href={component.href}
                key={component.name}
              >
                <Card className="hover:border-primary/50 hover:bg-muted/30 h-full transition-all duration-200">
                  <div className="flex items-center gap-3 p-3">
                    <div className="text-muted-foreground group-hover:text-primary bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors">
                      <Icon
                        className="h-4 w-4"
                        icon={component.icon}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="group-hover:text-primary truncate text-sm font-medium transition-colors">
                        {component.name}
                      </h3>

                      <p className="text-muted-foreground truncate text-xs">
                        {component.description}
                      </p>
                    </div>

                    <Icon
                      className="text-muted-foreground group-hover:text-primary h-4 w-4 shrink-0 opacity-0 transition-all group-hover:opacity-100"
                      icon="lucide:chevron-right"
                    />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredComponents.length === 0 && (
            <div className="py-16 text-center">
              <Icon
                className="text-muted-foreground mx-auto mb-3 h-10 w-10"
                icon="lucide:search-x"
              />

              <p className="text-muted-foreground text-sm">没有找到匹配的组件</p>
            </div>
          )}
        </section>

        {/* 底部链接 */}
        <footer className="mt-12 border-t pt-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
              href="https://docs.skyroc-ui.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon
                className="h-4 w-4"
                icon="lucide:book-open"
              />
              完整文档
            </a>

            <a
              className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
              href="https://docs.skyroc-ui.com/docs/installation"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon
                className="h-4 w-4"
                icon="lucide:download"
              />
              安装指南
            </a>

            <a
              className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
              href="https://github.com/Ohh-889/skyroc-ui"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon
                className="h-4 w-4"
                icon="lucide:github"
              />
              GitHub
            </a>

            <a
              className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
              href="https://github.com/Ohh-889/skyroc-ui/issues"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon
                className="h-4 w-4"
                icon="lucide:bug"
              />
              反馈问题
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
