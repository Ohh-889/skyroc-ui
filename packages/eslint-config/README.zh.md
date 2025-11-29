# @skyroc/eslint-config

[![npm](https://img.shields.io/npm/v/@skyroc/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@skyroc/eslint-config)

[English](./README.md) | [简体中文](./README.zh.md)

Skyroc 团队的 ESLint 扁平配置预设，具有强烈的个人风格和主观判断。

> 基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) fork 而来，包含更强的个人偏好和主观判断。

## 特性

- ESLint 扁平配置，默认使用单引号、无分号
- 自动检测框架（React、Vue、Next.js、Tailwind CSS 等）
- TypeScript 和类型感知规则支持
- React、React Native、Next.js、Vue 支持
- Tailwind CSS 和 UnoCSS 支持
- JSONC、YAML、TOML、Markdown 检查
- Prettier 集成用于格式化
- 合理的默认值，易于自定义
- [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic) 用于代码格式化
- 开箱即用的 import 排序和 package.json 排序

## 安装

```bash
pnpm add -D @skyroc/eslint-config eslint
```

## 使用方法

### 基本使用

在项目根目录创建 `eslint.config.js`（或 `eslint.config.mjs`、`eslint.config.ts`）：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc()
```

配置会自动检测你的项目，并根据依赖启用相应的规则。

### TypeScript

当检测到项目中安装了 TypeScript 时，会自动启用 TypeScript 支持。

如需启用类型感知的 lint 规则：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
})
```

### React

当检测到 `react` 或 `react-dom` 时，会自动启用 React 支持：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  react: true,
})
```

### React Native

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  react: true,
  reactNative: true,
})
```

### Next.js

当检测到 `next` 时，会自动启用 Next.js 支持：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  react: true,
  next: true,
})
```

### Vue

当检测到 `vue`、`nuxt` 或 `vitepress` 时，会自动启用 Vue 支持：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  vue: {
    vueVersion: 3, // 或 2
  },
})
```

### Tailwind CSS

当检测到 `tailwindcss` 时，会自动启用 Tailwind CSS 支持：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  tailwindcss: true,
  // 或者带配置
  tailwindcss: {
    callees: ['classnames', 'clsx', 'cn', 'cva'],
  },
})
```

### UnoCSS

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  unocss: true,
})
```

### 格式化器

默认会为 CSS、HTML 和 JSON 文件启用基于 Prettier 的格式化：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  formatter: {
    css: true,
    html: true,
    json: true,
    markdown: false,
    yaml: false,
    toml: false,
  },
})
```

### 代码风格

默认启用 [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic)，使用以下设置：

- 单引号
- 无分号
- 2 空格缩进

你可以自定义或禁用它：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  stylistic: {
    indent: 2, // 或 'tab'
    quotes: 'single', // 或 'double'
    semi: false, // 或 true
    jsx: true,
  },
})

// 禁用代码风格规则
export default skyroc({
  stylistic: false,
})
```

### 自定义规则覆盖

你可以为特定配置覆盖规则：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc(
  {
    typescript: true,
    react: true,
    overrides: {
      javascript: {
        'no-console': 'off',
      },
      typescript: {
        '@typescript-eslint/no-unused-vars': 'warn',
      },
      react: {
        'react/prop-types': 'off',
      },
    },
  },
)
```

### 用户配置

你也可以传入额外的扁平配置项：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc(
  {
    typescript: true,
  },
  // 额外的扁平配置项
  {
    files: ['**/*.spec.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    ignores: ['**/generated/**'],
  },
)
```

### 忽略文件

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  ignores: [
    'custom-folder/**',
    '*.config.ts',
  ],
})
```

### 编辑器集成

某些规则（如 `unused-imports/no-unused-imports`）在编辑器环境中会自动禁用，以提供更好的开发体验。这些规则在终端运行 ESLint 或在 CI 中仍然会生效。

你可以覆盖此行为：

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  isInEditor: false, // 始终应用所有规则
})
```

## 配置选项

```ts
interface SkryocESLintConfig {
  // 启用 TypeScript 支持（自动检测）
  typescript?: boolean | OptionsTypeScript

  // 启用 React 支持（自动检测）
  react?: boolean | OptionsReact

  // 启用 React Native 支持（默认：false）
  reactNative?: boolean | OptionsReactNative

  // 启用 Next.js 支持（自动检测）
  next?: boolean | OptionsNext

  // 启用 Vue 支持（自动检测）
  vue?: boolean | OptionsVue

  // 启用 Tailwind CSS 支持（自动检测）
  tailwindcss?: boolean | OptionsTailwindCSS

  // 启用 UnoCSS 支持（默认：false）
  unocss?: boolean | OptionsUnocss

  // 启用代码风格规则（默认：true）
  stylistic?: boolean | StylisticConfig

  // 启用格式化器（默认：true）
  formatter?: boolean | OptionsFormatter

  // 启用 JSONC 支持（默认：true）
  jsonc?: boolean

  // 启用 YAML 支持（默认：true）
  yaml?: boolean

  // 启用 TOML 支持（默认：true）
  toml?: boolean

  // 启用 Markdown 支持（默认：true）
  markdown?: boolean

  // 启用测试支持（默认：true）
  test?: boolean

  // 启用正则表达式规则（默认：true）
  regexp?: boolean

  // 启用 Unicorn 规则（默认：true）
  unicorn?: boolean

  // 启用 PNPM catalog 支持（默认：false）
  pnpm?: boolean

  // 启用 gitignore 支持（默认：true）
  gitignore?: boolean

  // 额外的忽略模式
  ignores?: string[]

  // 是否在编辑器环境中运行
  isInEditor?: boolean

  // 启用插件自动重命名（默认：true）
  autoRenamePlugins?: boolean

  // 全局配置覆盖
  overrides?: {
    javascript?: Linter.RulesRecord
    typescript?: Linter.RulesRecord
    react?: Linter.RulesRecord
    vue?: Linter.RulesRecord
    // ... 更多
  }
}
```

## 包含的插件

此配置包含以下插件：

- [@typescript-eslint](https://typescript-eslint.io/) - TypeScript 支持
- [@stylistic/eslint-plugin](https://eslint.style/) - 代码风格
- [eslint-plugin-import-x](https://github.com/un-es/eslint-plugin-import-x) - 导入管理
- [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports) - 移除未使用的导入
- [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist) - 排序
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - 各种实用规则
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) - React 支持
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) - React Hooks
- [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) - React Refresh
- [eslint-plugin-vue](https://eslint.vuejs.org/) - Vue 支持
- [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) - Tailwind CSS
- [@next/eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint) - Next.js
- 还有更多...

## Lint Staged

如果你想在每次提交前应用 lint 和自动修复：

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

```bash
pnpm add -D lint-staged simple-git-hooks
npx simple-git-hooks
```

## 查看启用的规则

你可以使用 [@eslint/config-inspector](https://github.com/eslint/config-inspector) 查看项目中启用了哪些规则：

```bash
npx @eslint/config-inspector
```

## 致谢

本项目深受 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 启发并基于其 fork。非常感谢 [Anthony Fu](https://github.com/antfu) 的出色工作。

## 许可证

[MIT](./LICENSE) 许可证 © 2024-至今 Skyroc 团队
