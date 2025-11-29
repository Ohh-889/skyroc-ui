# @skyroc/cli

[![npm](https://img.shields.io/npm/v/@skyroc/cli?color=a1b858&label=)](https://npmjs.com/package/@skyroc/cli)

[English](./README.md) | [简体中文](./README.zh.md)

一个强大的 CLI 工具，用于 git 提交、变更日志生成、版本发布和包管理。

## 特性

- **Git 提交** - 交互式提交消息生成器，遵循 Conventional Commits 规范
- **变更日志** - 从 git 历史自动生成变更日志
- **版本发布** - 版本升级并生成变更日志和 git 标签
- **清理** - 清理 node_modules、dist 和其他构建产物
- **更新依赖** - 将 package.json 依赖更新到最新版本

## 安装

```bash
# npm
npm install -D @skyroc/cli

# pnpm
pnpm add -D @skyroc/cli

# yarn
yarn add -D @skyroc/cli
```

## 使用

### Git 提交

生成符合 [Conventional Commits](https://www.conventionalcommits.org/) 规范的提交消息：

```bash
sr git-commit
```

选项：
- `-l, --lang <lang>` - 显示语言（默认：`en-us`）
- `-m, --gitEmoji <emoji>` - 启用/禁用 git 提交表情（默认：`true`）

### 生成变更日志

从 git 历史生成变更日志：

```bash
sr changelog
```

选项：
- `-t, --total` - 从所有标签生成变更日志
- `-tg, --tag <tag>` - 为特定标签生成变更日志

### 版本发布

升级版本、生成变更日志并创建 git 标签：

```bash
sr release
```

选项：
- `-e, --execute [command]` - 升级后执行命令（默认：`npx soy changelog`）
- `-p, --push` - 推送 git 提交和标签
- `-pn, --packageName <name>` - 要升级的包名
- `-pr, --preid <preid>` - 预发布标识符（如 `alpha`、`beta`）
- `-re, --release <type>` - 发布类型（`conventional`、`npm`、`yarn`、`pnpm`）

### 清理

删除构建产物和依赖：

```bash
sr cleanup
```

选项：
- `-c, --cleanupDir <dir>` - 要清理的目录 glob 模式（逗号分隔）

### 更新依赖

将 package.json 依赖更新到最新版本：

```bash
sr update-pkg
```

## 配置

在项目根目录创建 `skyroc.config.ts`（或 `.js`、`.mjs`）文件：

```ts
import { defineConfig } from '@skyroc/cli'

export default defineConfig({
  // 变更日志选项
  changelogOptions: {
    // 自定义变更日志配置
  },

  // 要清理的目录
  cleanupDirs: [
    '**/node_modules',
    '**/dist',
    '**/.turbo'
  ],

  // Git 提交类型
  gitCommitTypes: [
    { emoji: '✨', name: 'feat', description: '新功能' },
    { emoji: '🐛', name: 'fix', description: '修复 bug' },
    // ... 更多类型
  ],

  // Git 提交范围
  gitCommitScopes: [
    { name: 'ui', description: 'UI 组件' },
    { name: 'cli', description: 'CLI 工具' },
    // ... 更多范围
  ],

  // 发布选项
  releaseOptions: {
    // 自定义发布配置
  },

  // NCU 命令参数
  ncuCommandArgs: [
    '-u',
    '--deep'
  ]
})
```

## 命令参考

| 命令 | 描述 |
|------|------|
| `sr git-commit` | 交互式 git 提交消息生成器 |
| `sr git-commit-verify` | 验证提交消息格式 |
| `sr changelog` | 生成变更日志 |
| `sr release` | 发布新版本 |
| `sr cleanup` | 清理构建产物 |
| `sr update-pkg` | 更新依赖 |

## API

### defineConfig

类型安全配置的辅助函数：

```ts
import { defineConfig } from '@skyroc/cli'

export default defineConfig({
  // 你的配置
})
```

### 类型

```ts
import type { 
  CliOption, 
  GitCommitType, 
  GitCommitScope, 
  GitEmojiItem 
} from '@skyroc/cli'
```

## 与 Git Hooks 集成

配合 `simple-git-hooks` 和 `lint-staged` 使用：

```json
{
  "simple-git-hooks": {
    "commit-msg": "npx sr git-commit-verify"
  }
}
```

## 许可证

[MIT](../../LICENSE) 许可证 © 2024-至今 [Ohh](https://github.com/Ohh-889)

