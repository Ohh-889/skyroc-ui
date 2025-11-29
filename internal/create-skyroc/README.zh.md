# create-skyroc

[![npm](https://img.shields.io/npm/v/create-skyroc?color=a1b858&label=)](https://npmjs.com/package/create-skyroc)

[English](./README.md) | [简体中文](./README.zh.md)

Skyroc 的命令行工具，用于创建项目模板。快速搭建预配置最佳实践的新项目。

## 特性

- **交互式 CLI** - 友好的提示引导项目设置
- **多种模板** - 从多种项目模板中选择
- **自动安装** - 可选自动安装依赖
- **包管理器检测** - 自动检测 npm/pnpm/yarn
- **TypeScript 支持** - 所有模板都包含 TypeScript 支持

## 使用

### 使用 npx（推荐）

```bash
npx create-skyroc my-project
```

### 使用 pnpm

```bash
pnpm create skyroc my-project
```

### 使用 yarn

```bash
yarn create skyroc my-project
```

## 交互模式

不带参数运行将启动交互式 CLI：

```bash
npx create-skyroc
```

你将被提示：

1. **项目名称** - 项目目录名称
2. **包名** - 有效的 npm 包名
3. **模板** - 从可用模板中选择
4. **安装依赖** - 使用检测到的包管理器自动安装
5. **运行开发服务器** - 立即启动开发服务器

## 命令行选项

```bash
npx create-skyroc [project-name] [options]
```

### 选项

| 选项 | 别名 | 描述 |
|------|------|------|
| `--template <name>` | `-t` | 使用特定模板 |
| `--overwrite` | | 覆盖现有目录 |
| `--install` | `-i` | 自动安装依赖 |
| `--pm <manager>` | | 指定包管理器（npm/pnpm/yarn） |
| `--run-dev` | | 安装后运行开发服务器 |
| `--help` | `-h` | 显示帮助信息 |

### 示例

```bash
# 使用特定模板创建项目
npx create-skyroc my-app -t ui-primitives

# 创建并自动安装依赖
npx create-skyroc my-app --install

# 使用 pnpm 创建并运行开发服务器
npx create-skyroc my-app --pm pnpm --install --run-dev

# 覆盖现有目录
npx create-skyroc my-app --overwrite
```

## 可用模板

| 模板 | 描述 |
|------|------|
| `ui-primitives` | 带有 Skyroc 配置的 UI 原语项目 |

## 包含内容

每个模板都预配置了：

- **TypeScript** - 完整的 TypeScript 支持
- **ESLint** - 使用 @skyroc/eslint-config 进行代码检查
- **Tailwind CSS** - 工具优先的 CSS 框架
- **Skyroc UI** - 组件库集成
- **开发脚本** - 可直接使用的 npm 脚本

## 项目结构

搭建完成后，你的项目将包含：

```
my-project/
├── src/
│   └── ...
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 创建后

进入项目目录开始开发：

```bash
cd my-project

# 如果没有自动安装
npm install

# 启动开发服务器
npm run dev
```

## 许可证

[MIT](../../LICENSE) 许可证 © 2024-至今 [Ohh](https://github.com/Ohh-889)

