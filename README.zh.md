# Skyroc UI

<div align="center">

![Skyroc UI](https://img.shields.io/badge/Skyroc-UI-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-blue.svg)

一个基于 Radix UI 和 Tailwind CSS 构建的现代化 React UI 组件库 Monorepo。

[English](./README.md) | [简体中文](./README.zh.md)

</div>

## 概述

Skyroc UI 是一个综合性的 **Monorepo**，包含现代化的 React UI 组件库及其配套工具链。Monorepo 架构提供了更好的开发体验、共享配置以及各包之间的无缝集成。

### 为什么选择 Monorepo？

- **统一开发** - 所有包共享相同的开发环境和工具链
- **无缝集成** - 组件、插件和工具开箱即用，完美协作
- **一致的质量** - 共享的 ESLint、TypeScript 和测试配置
- **简化维护** - 单一仓库管理 issues、PRs 和发布
- **更好的开发体验** - 便捷的跨包开发和测试

## 包列表

### 核心包

| 包名 | 描述 | npm |
|------|------|-----|
| [skyroc-ui](./packages/ui) | 核心 UI 组件库，包含 50+ 组件 | [![npm](https://img.shields.io/npm/v/skyroc-ui.svg)](https://npmjs.com/package/skyroc-ui) |
| [@skyroc/tailwind-plugin](./packages/tailwind-plugin) | Tailwind CSS 主题和设计令牌插件 | [![npm](https://img.shields.io/npm/v/@skyroc/tailwind-plugin.svg)](https://npmjs.com/package/@skyroc/tailwind-plugin) |
| [@skyroc/color](./packages/color) | 颜色系统工具库，用于调色板生成 | [![npm](https://img.shields.io/npm/v/@skyroc/color.svg)](https://npmjs.com/package/@skyroc/color) |

### 基础原语

| 包名 | 描述 | npm |
|------|------|-----|
| [@skyroc/form](./primitives/filed-form) | 高级表单处理，类型安全的字段管理 | [![npm](https://img.shields.io/npm/v/@skyroc/form.svg)](https://npmjs.com/package/@skyroc/form) |
| [@skyroc/utils](./primitives/utils) | 工具函数和辅助方法 | [![npm](https://img.shields.io/npm/v/@skyroc/utils.svg)](https://npmjs.com/package/@skyroc/utils) |
| [@skyroc/type-utils](./primitives/type-utils) | 高级 TypeScript 类型工具 | [![npm](https://img.shields.io/npm/v/@skyroc/type-utils.svg)](https://npmjs.com/package/@skyroc/type-utils) |
| [@skyroc/virtualizer](./primitives/virtualizer) | 无头虚拟化组件，用于大型列表和网格 | [![npm](https://img.shields.io/npm/v/@skyroc/virtualizer.svg)](https://npmjs.com/package/@skyroc/virtualizer) |

### 开发工具

| 包名 | 描述 | npm |
|------|------|-----|
| [@skyroc/cli](./internal/cli) | Git 提交、变更日志和版本发布 CLI 工具 | [![npm](https://img.shields.io/npm/v/@skyroc/cli.svg)](https://npmjs.com/package/@skyroc/cli) |
| [create-skyroc](./internal/create-skyroc) | 项目脚手架工具 | [![npm](https://img.shields.io/npm/v/create-skyroc.svg)](https://npmjs.com/package/create-skyroc) |
| [@skyroc/eslint-config](./packages/eslint-config) | React、Vue、Next.js 的 ESLint 扁平配置 | [![npm](https://img.shields.io/npm/v/@skyroc/eslint-config.svg)](https://npmjs.com/package/@skyroc/eslint-config) |

### 文档相关（内部使用）

| 包名 | 描述 |
|------|------|
| [@skyroc/next-docs-plugin](./packages/next-docs-plugin) | 文档 MDX 插件 |
| [@skyroc/next-docs-themes](./packages/next-docs-themes) | 文档主题组件 |

## 特性

- **现代化设计** - 精美简洁的设计，支持亮/暗主题切换
- **50+ 组件** - 全面的高质量 React 组件集合
- **高度可定制** - 基于 Tailwind CSS 构建，支持主题定制
- **响应式设计** - 移动优先设计，适配所有设备
- **无障碍访问** - 基于 Radix UI 构建，遵循 WAI-ARIA 标准
- **TypeScript** - 完整的 TypeScript 支持，提供优秀的开发体验
- **强大的表单** - 内置表单系统，支持验证和状态管理
- **Tree Shaking** - 优化的包体积，支持按需加载
- **SSR 支持** - 完美支持 Next.js 和其他 SSR 框架

## 快速开始

### 使用脚手架工具

```bash
npx create-skyroc my-app
cd my-app
npm run dev
```

### 手动安装

```bash
# 安装 UI 库
npm install skyroc-ui

# 安装 Tailwind 插件
npm install @skyroc/tailwind-plugin
```

配置 Tailwind CSS：

```js
// tailwind.config.js
import { skyrocUIPlugin } from '@skyroc/tailwind-plugin'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/skyroc-ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [skyrocUIPlugin()]
}
```

使用组件：

```tsx
import { Button, Card, Input } from 'skyroc-ui'

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>欢迎使用 Skyroc UI</Card.Title>
      </Card.Header>
      <Card.Content className="space-y-4">
        <Input placeholder="请输入内容" />
        <Button>提交</Button>
      </Card.Content>
    </Card>
  )
}
```

## 项目结构

```
skyroc-ui/
├── packages/                 # 发布的包
│   ├── ui/                  # 核心 UI 组件库
│   ├── tailwind-plugin/     # Tailwind CSS 插件
│   ├── color/               # 颜色系统工具
│   ├── eslint-config/       # ESLint 配置
│   ├── next-docs-plugin/    # 文档 MDX 插件
│   └── next-docs-themes/    # 文档主题
├── primitives/              # 底层原语
│   ├── filed-form/          # 表单处理系统
│   ├── utils/               # 工具函数
│   ├── type-utils/          # TypeScript 工具
│   └── virtualizer/         # 虚拟滚动
├── internal/                # 内部工具
│   ├── cli/                 # CLI 工具
│   └── create-skyroc/       # 项目脚手架
├── playground/              # 组件演示和测试
└── docs/                    # 文档站点
```

## 开发

### 环境要求

- Node.js >= 18
- pnpm >= 9.0.0

### 设置

```bash
# 克隆仓库
git clone https://github.com/Ohh-889/skyroc-ui.git
cd skyroc-ui

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建所有包
pnpm build

# 运行代码检查
pnpm lint
```

### 脚本命令

| 命令 | 描述 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建所有包 |
| `pnpm lint` | 运行 ESLint |
| `pnpm format` | 格式化代码 |
| `pnpm deploy:playground` | 部署演示站点 |

## 贡献

欢迎贡献！请在提交 PR 之前阅读我们的贡献指南。

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 致谢

- [Radix UI](https://www.radix-ui.com/) - 无头 UI 组件
- [Tailwind CSS](https://tailwindcss.com/) - 工具优先的 CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - 设计灵感
- [Lucide React](https://lucide.dev/) - 精美图标

## 联系我们

- 作者: Ohh
- 邮箱: 1509326266@qq.com
- GitHub: [https://github.com/Ohh-889/skyroc-ui](https://github.com/Ohh-889/skyroc-ui)

---

<div align="center">

如果这个项目对你有帮助，请给我们一个 ⭐！

</div>
