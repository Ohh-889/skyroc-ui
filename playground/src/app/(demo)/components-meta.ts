import type { Metadata } from 'next';

// 组件元信息配置
export const componentsInfo: Record<string, { title: string; description: string; keywords: string[] }> = {
  'accordion': {
    title: 'Accordion 手风琴',
    description: 'Skyroc UI Accordion 组件 - 可折叠面板，支持单选、多选、自定义图标等多种模式。',
    keywords: ['accordion', '手风琴', '折叠面板', 'collapse']
  },
  'alert': {
    title: 'Alert 警告提示',
    description: 'Skyroc UI Alert 组件 - 警告提示组件，支持多种颜色、尺寸和变体。',
    keywords: ['alert', '警告', '提示', 'notification']
  },
  'alert-dialog': {
    title: 'AlertDialog 确认对话框',
    description: 'Skyroc UI AlertDialog 组件 - 确认对话框，用于重要操作的二次确认。',
    keywords: ['alert-dialog', '对话框', '确认框', 'confirm']
  },
  'aspect-ratio': {
    title: 'AspectRatio 宽高比',
    description: 'Skyroc UI AspectRatio 组件 - 保持内容固定宽高比的容器组件。',
    keywords: ['aspect-ratio', '宽高比', '比例容器']
  },
  'avatar': {
    title: 'Avatar 头像',
    description: 'Skyroc UI Avatar 组件 - 头像组件，支持图片、文字回退和头像组。',
    keywords: ['avatar', '头像', 'profile', 'user']
  },
  'badge': {
    title: 'Badge 徽章',
    description: 'Skyroc UI Badge 组件 - 徽章组件，支持多种颜色、形状和变体。',
    keywords: ['badge', '徽章', '标记', 'tag']
  },
  'breadcrumb': {
    title: 'Breadcrumb 面包屑',
    description: 'Skyroc UI Breadcrumb 组件 - 面包屑导航，展示当前页面在系统层级结构中的位置。',
    keywords: ['breadcrumb', '面包屑', '导航', 'navigation']
  },
  'button': {
    title: 'Button 按钮',
    description: 'Skyroc UI Button 组件 - 按钮组件，支持多种颜色、尺寸、形状和加载状态。',
    keywords: ['button', '按钮', 'click', 'action']
  },
  'card': {
    title: 'Card 卡片',
    description: 'Skyroc UI Card 组件 - 卡片容器组件，用于信息展示和分组。',
    keywords: ['card', '卡片', '容器', 'container']
  },
  'carousel': {
    title: 'Carousel 轮播图',
    description: 'Skyroc UI Carousel 组件 - 轮播图组件，支持自动播放、多图和垂直方向。',
    keywords: ['carousel', '轮播图', 'slider', 'swiper']
  },
  'checkbox': {
    title: 'Checkbox 复选框',
    description: 'Skyroc UI Checkbox 组件 - 复选框组件，支持多种颜色和尺寸。',
    keywords: ['checkbox', '复选框', '选择', 'select']
  },
  'chip': {
    title: 'Chip 标签',
    description: 'Skyroc UI Chip 组件 - 标签组件，用于展示状态或标记。',
    keywords: ['chip', '标签', '徽标', 'dot']
  },
  'collapsible': {
    title: 'Collapsible 折叠',
    description: 'Skyroc UI Collapsible 组件 - 可折叠的内容区域。',
    keywords: ['collapsible', '折叠', 'expand', 'collapse']
  },
  'combobox': {
    title: 'Combobox 组合框',
    description: 'Skyroc UI Combobox 组件 - 可搜索的下拉选择组件。',
    keywords: ['combobox', '组合框', '搜索选择', 'autocomplete']
  },
  'command': {
    title: 'Command 命令面板',
    description: 'Skyroc UI Command 组件 - 命令面板，用于快速执行命令和搜索。',
    keywords: ['command', '命令面板', 'cmdk', 'command palette']
  },
  'context-menu': {
    title: 'ContextMenu 右键菜单',
    description: 'Skyroc UI ContextMenu 组件 - 右键上下文菜单。',
    keywords: ['context-menu', '右键菜单', '上下文菜单', 'menu']
  },
  'dialog': {
    title: 'Dialog 对话框',
    description: 'Skyroc UI Dialog 组件 - 模态对话框，用于用户交互和信息展示。',
    keywords: ['dialog', '对话框', 'modal', 'popup']
  },
  'divider': {
    title: 'Divider 分割线',
    description: 'Skyroc UI Divider 组件 - 分割线组件，用于内容分隔。',
    keywords: ['divider', '分割线', 'separator', 'line']
  },
  'drawer': {
    title: 'Drawer 抽屉',
    description: 'Skyroc UI Drawer 组件 - 抽屉组件，从屏幕边缘滑出的面板。',
    keywords: ['drawer', '抽屉', 'slide', 'panel']
  },
  'dropdown-menu': {
    title: 'DropdownMenu 下拉菜单',
    description: 'Skyroc UI DropdownMenu 组件 - 下拉菜单，触发式弹出菜单。',
    keywords: ['dropdown-menu', '下拉菜单', 'menu', 'dropdown']
  },
  'form': {
    title: 'Form 表单',
    description: 'Skyroc UI Form 组件 - 表单组件，支持数据收集、验证和提交。',
    keywords: ['form', '表单', 'input', 'validation']
  },
  'hover-card': {
    title: 'HoverCard 悬停卡片',
    description: 'Skyroc UI HoverCard 组件 - 悬停时显示的预览卡片。',
    keywords: ['hover-card', '悬停卡片', 'preview', 'tooltip']
  },
  'icon': {
    title: 'Icon 图标',
    description: 'Skyroc UI Icon 组件 - 图标组件，集成 Iconify 图标库。',
    keywords: ['icon', '图标', 'iconify', 'svg']
  },
  'input': {
    title: 'Input 输入框',
    description: 'Skyroc UI Input 组件 - 输入框组件，支持多种类型和状态。',
    keywords: ['input', '输入框', 'text', 'field']
  },
  'input-otp': {
    title: 'InputOTP 验证码输入',
    description: 'Skyroc UI InputOTP 组件 - 一次性密码/验证码输入组件。',
    keywords: ['input-otp', '验证码', 'otp', 'code']
  },
  'keyboard-key': {
    title: 'KeyboardKey 键盘键',
    description: 'Skyroc UI KeyboardKey 组件 - 展示键盘按键的组件。',
    keywords: ['keyboard-key', '键盘', 'shortcut', 'hotkey']
  },
  'label': {
    title: 'Label 标签',
    description: 'Skyroc UI Label 组件 - 表单标签组件。',
    keywords: ['label', '标签', 'form', 'text']
  },
  'navigation-menu': {
    title: 'NavigationMenu 导航菜单',
    description: 'Skyroc UI NavigationMenu 组件 - 水平导航菜单组件。',
    keywords: ['navigation-menu', '导航菜单', 'nav', 'menu']
  },
  'popover': {
    title: 'Popover 气泡',
    description: 'Skyroc UI Popover 组件 - 气泡弹出框，用于展示更多内容。',
    keywords: ['popover', '气泡', 'popup', 'overlay']
  },
  'progress': {
    title: 'Progress 进度条',
    description: 'Skyroc UI Progress 组件 - 进度条组件，展示操作进度。',
    keywords: ['progress', '进度条', 'loading', 'bar']
  },
  'radio': {
    title: 'Radio 单选框',
    description: 'Skyroc UI Radio 组件 - 单选框组件，用于单项选择。',
    keywords: ['radio', '单选框', 'select', 'option']
  },
  'resizable': {
    title: 'Resizable 可调整大小',
    description: 'Skyroc UI Resizable 组件 - 可调整大小的面板组件。',
    keywords: ['resizable', '可调整大小', 'resize', 'panel']
  },
  'scroll-area': {
    title: 'ScrollArea 滚动区域',
    description: 'Skyroc UI ScrollArea 组件 - 自定义滚动条的滚动区域。',
    keywords: ['scroll-area', '滚动区域', 'scrollbar', 'overflow']
  },
  'select': {
    title: 'Select 选择器',
    description: 'Skyroc UI Select 组件 - 下拉选择器组件。',
    keywords: ['select', '选择器', 'dropdown', 'option']
  },
  'sheet': {
    title: 'Sheet 侧边栏',
    description: 'Skyroc UI Sheet 组件 - 侧边栏面板组件。',
    keywords: ['sheet', '侧边栏', 'sidebar', 'panel']
  },
  'skeleton': {
    title: 'Skeleton 骨架屏',
    description: 'Skyroc UI Skeleton 组件 - 骨架屏加载占位组件。',
    keywords: ['skeleton', '骨架屏', 'loading', 'placeholder']
  },
  'slider': {
    title: 'Slider 滑块',
    description: 'Skyroc UI Slider 组件 - 滑块组件，用于选择数值范围。',
    keywords: ['slider', '滑块', 'range', 'input']
  },
  'sonner': {
    title: 'Sonner 通知',
    description: 'Skyroc UI Sonner 组件 - Toast 通知组件。',
    keywords: ['sonner', '通知', 'toast', 'notification']
  },
  'tabs': {
    title: 'Tabs 选项卡',
    description: 'Skyroc UI Tabs 组件 - 选项卡组件，用于内容切换。',
    keywords: ['tabs', '选项卡', 'tab', 'panel']
  },
  'textarea': {
    title: 'Textarea 文本域',
    description: 'Skyroc UI Textarea 组件 - 多行文本输入组件。',
    keywords: ['textarea', '文本域', 'text', 'multiline']
  },
  'toggle': {
    title: 'Toggle 切换',
    description: 'Skyroc UI Toggle 组件 - 切换按钮组件。',
    keywords: ['toggle', '切换', 'switch', 'button']
  },
  'toggle-group': {
    title: 'ToggleGroup 切换组',
    description: 'Skyroc UI ToggleGroup 组件 - 切换按钮组组件。',
    keywords: ['toggle-group', '切换组', 'button-group', 'segment']
  },
  'tooltip': {
    title: 'Tooltip 提示',
    description: 'Skyroc UI Tooltip 组件 - 文字提示组件，鼠标悬停时显示。',
    keywords: ['tooltip', '提示', 'hint', 'tip']
  },
  'virtualizer': {
    title: 'Virtualizer 虚拟列表',
    description: 'Skyroc UI Virtualizer 组件 - 高性能虚拟列表和网格组件，支持大数据量渲染。',
    keywords: ['virtualizer', '虚拟列表', 'virtual-list', 'virtual-scroll', '大数据']
  }
};

// 生成组件页面的 metadata
export function generateComponentMetadata(componentName: string): Metadata {
  const info = componentsInfo[componentName];

  if (!info) {
    return {
      title: componentName.charAt(0).toUpperCase() + componentName.slice(1),
      description: `Skyroc UI ${componentName} 组件演示`
    };
  }

  return {
    title: info.title,
    description: info.description,
    keywords: [...info.keywords, 'Skyroc UI', 'React', 'Component'],
    openGraph: {
      title: `${info.title} | Skyroc UI`,
      description: info.description,
      type: 'website'
    },
    twitter: {
      card: 'summary',
      title: `${info.title} | Skyroc UI`,
      description: info.description
    }
  };
}
