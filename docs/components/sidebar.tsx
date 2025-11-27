'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    items: [
      { href: '/docs', title: '介绍' },
      { href: '/docs/installation', title: '安装' },
      { href: '/docs/quick-start', title: '快速开始' }
    ],
    title: '开始'
  },
  {
    items: [
      { href: '/docs/components/accordion', title: 'Accordion 手风琴' },
      { href: '/docs/components/alert', title: 'Alert 警告' },
      { href: '/docs/components/alert-dialog', title: 'AlertDialog 警告对话框' },
      { href: '/docs/components/aspect-ratio', title: 'AspectRatio 宽高比' },
      { href: '/docs/components/avatar', title: 'Avatar 头像' },
      { href: '/docs/components/badge', title: 'Badge 徽章' },
      { href: '/docs/components/breadcrumb', title: 'Breadcrumb 面包屑' },
      { href: '/docs/components/button', title: 'Button 按钮' },
      { href: '/docs/components/card', title: 'Card 卡片' },
      { href: '/docs/components/carousel', title: 'Carousel 轮播图' },
      { href: '/docs/components/checkbox', title: 'Checkbox 复选框' },
      { href: '/docs/components/chip', title: 'Chip 徽标' },
      { href: '/docs/components/collapsible', title: 'Collapsible 折叠' },
      { href: '/docs/components/command', title: 'Command 命令面板' },
      { href: '/docs/components/context-menu', title: 'ContextMenu 右键菜单' },
      { href: '/docs/components/dialog', title: 'Dialog 对话框' },
      { href: '/docs/components/divider', title: 'Divider 分割线' },
      { href: '/docs/components/drawer', title: 'Drawer 抽屉' },
      { href: '/docs/components/dropdown-menu', title: 'DropdownMenu 下拉菜单' },
      { href: '/docs/components/form', title: 'Form 表单' },
      { href: '/docs/components/hover-card', title: 'HoverCard 悬浮卡片' },
      { href: '/docs/components/icon', title: 'Icon 图标' },
      { href: '/docs/components/input', title: 'Input 输入框' },
      { href: '/docs/components/input-otp', title: 'InputOTP 一次性密码输入框' },
      { href: '/docs/components/keyboard-key', title: 'KeyboardKey 键盘按键' },
      { href: '/docs/components/label', title: 'Label 标签' },
      { href: '/docs/components/popover', title: 'Popover 弹出层' },
      { href: '/docs/components/progress', title: 'Progress 进度条' },
      { href: '/docs/components/radio', title: 'Radio 单选框' },
      { href: '/docs/components/select', title: 'Select 选择器' },
      { href: '/docs/components/switch', title: 'Switch 开关' }
    ],
    title: '组件'
  }
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="border-border/40 bg-background sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r py-8 md:block">
      <nav className="space-y-8 px-6">
        {navigation.map(section => (
          <div key={section.title}>
            <h4 className="text-foreground mb-3 text-sm font-semibold">{section.title}</h4>

            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                        isActive
                          ? 'bg-muted text-foreground font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {isActive ? <ChevronRight className="size-4 text-[hsl(var(--accent))]" /> : null}
                      <span className={isActive ? '' : 'ml-6'}>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
