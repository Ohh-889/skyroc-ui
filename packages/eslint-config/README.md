# @skyroc/eslint-config

[![npm](https://img.shields.io/npm/v/@skyroc/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@skyroc/eslint-config)

[English](./README.md) | [简体中文](./README.zh.md)

Skyroc's opinionated ESLint flat config preset.

> Forked from [@antfu/eslint-config](https://github.com/antfu/eslint-config) with stronger personal preferences and subjective judgments.

## Features

- ESLint Flat Config with single quotes, no semicolons by default
- Auto-detection of frameworks (React, Vue, Next.js, Tailwind CSS, etc.)
- TypeScript and type-aware rules support
- React, React Native, Next.js, and Vue support
- Tailwind CSS and UnoCSS support
- JSONC, YAML, TOML, Markdown linting
- Prettier integration for formatting
- Reasonable defaults, easily customizable
- [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic) for formatting
- Sorted imports and sorted package.json out of the box

## Installation

```bash
pnpm add -D @skyroc/eslint-config eslint
```

## Usage

### Basic Usage

Create `eslint.config.js` (or `eslint.config.mjs`, `eslint.config.ts`) in your project root:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc()
```

The config will automatically detect your project and enable appropriate rules based on your dependencies.

### TypeScript

TypeScript support is auto-enabled when TypeScript is detected in your project.

For type-aware linting rules:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
})
```

### React

React support is auto-enabled when `react` or `react-dom` is detected:

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

Next.js support is auto-enabled when `next` is detected:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  react: true,
  next: true,
})
```

### Vue

Vue support is auto-enabled when `vue`, `nuxt`, or `vitepress` is detected:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  vue: {
    vueVersion: 3, // or 2
  },
})
```

### Tailwind CSS

Tailwind CSS support is auto-enabled when `tailwindcss` is detected:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  tailwindcss: true,
  // Or with options
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

### Formatter

Formatter is enabled by default for CSS, HTML, and JSON files using Prettier:

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

### Stylistic

[ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic) is enabled by default with the following settings:

- Single quotes
- No semicolons
- 2 spaces indent

You can customize or disable it:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  stylistic: {
    indent: 2, // or 'tab'
    quotes: 'single', // or 'double'
    semi: false, // or true
    jsx: true,
  },
})

// Disable stylistic rules
export default skyroc({
  stylistic: false,
})
```

### Custom Rules Override

You can override rules for specific configurations:

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

### User Configs

You can also pass additional flat config items:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc(
  {
    typescript: true,
  },
  // Additional flat config items
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

### Ignores

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  ignores: [
    'custom-folder/**',
    '*.config.ts',
  ],
})
```

### Editor Integration

Some rules (like `unused-imports/no-unused-imports`) are automatically disabled when running in an editor environment to provide a better developer experience. They will still be applied when running ESLint from the terminal or in CI.

You can override this behavior:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  isInEditor: false, // Always apply all rules
})
```

## Configuration Options

```ts
interface SkryocESLintConfig {
  // Enable TypeScript support (auto-detected)
  typescript?: boolean | OptionsTypeScript

  // Enable React support (auto-detected)
  react?: boolean | OptionsReact

  // Enable React Native support (default: false)
  reactNative?: boolean | OptionsReactNative

  // Enable Next.js support (auto-detected)
  next?: boolean | OptionsNext

  // Enable Vue support (auto-detected)
  vue?: boolean | OptionsVue

  // Enable Tailwind CSS support (auto-detected)
  tailwindcss?: boolean | OptionsTailwindCSS

  // Enable UnoCSS support (default: false)
  unocss?: boolean | OptionsUnocss

  // Enable stylistic rules (default: true)
  stylistic?: boolean | StylisticConfig

  // Enable formatter (default: true)
  formatter?: boolean | OptionsFormatter

  // Enable JSONC support (default: true)
  jsonc?: boolean

  // Enable YAML support (default: true)
  yaml?: boolean

  // Enable TOML support (default: true)
  toml?: boolean

  // Enable Markdown support (default: true)
  markdown?: boolean

  // Enable test support (default: true)
  test?: boolean

  // Enable RegExp rules (default: true)
  regexp?: boolean

  // Enable Unicorn rules (default: true)
  unicorn?: boolean

  // Enable PNPM catalog support (default: false)
  pnpm?: boolean

  // Enable gitignore support (default: true)
  gitignore?: boolean

  // Additional ignores
  ignores?: string[]

  // Whether to run in editor environment
  isInEditor?: boolean

  // Enable auto renaming of plugins (default: true)
  autoRenamePlugins?: boolean

  // Global overrides for configurations
  overrides?: {
    javascript?: Linter.RulesRecord
    typescript?: Linter.RulesRecord
    react?: Linter.RulesRecord
    vue?: Linter.RulesRecord
    // ... and more
  }
}
```

## Plugins Included

This config includes the following plugins:

- [@typescript-eslint](https://typescript-eslint.io/) - TypeScript support
- [@stylistic/eslint-plugin](https://eslint.style/) - Code styling
- [eslint-plugin-import-x](https://github.com/un-es/eslint-plugin-import-x) - Import management
- [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports) - Remove unused imports
- [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist) - Sorting
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - Various awesome rules
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) - React support
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) - React Hooks
- [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) - React Refresh
- [eslint-plugin-vue](https://eslint.vuejs.org/) - Vue support
- [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) - Tailwind CSS
- [@next/eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint) - Next.js
- And many more...

## Lint Staged

If you want to apply lint and auto-fix before every commit:

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

## View Enabled Rules

You can use [@eslint/config-inspector](https://github.com/eslint/config-inspector) to view what rules are enabled in your project:

```bash
npx @eslint/config-inspector
```

## Credits

This project is heavily inspired by and forked from [@antfu/eslint-config](https://github.com/antfu/eslint-config). Many thanks to [Anthony Fu](https://github.com/antfu) for his excellent work.

## License

[MIT](./LICENSE) License © 2024-PRESENT Skyroc Team
