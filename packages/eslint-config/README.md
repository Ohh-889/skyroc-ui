# @skyroc/eslint-config

Skyroc's ESLint flat config for Next.js, React, React Native, and Vue projects.

## Features

- ESLint Flat Config support
- Auto-detection of installed frameworks
- TypeScript support
- React, React Native, Next.js, and Vue support
- Sensible defaults with customization options

## Installation

```bash
pnpm add -D @skyroc/eslint-config eslint
```

## Usage

### Basic Usage

Create `eslint.config.js` in your project root:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc()
```

The config will automatically detect your environment and enable the appropriate rules.

### TypeScript

TypeScript support is auto-enabled when TypeScript is detected. For type-aware linting:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
})
```

### React

React support is auto-enabled when React is detected:

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

Next.js support is auto-enabled when Next.js is detected:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  react: true,
  next: true,
})
```

### Vue

Vue support is auto-enabled when Vue is detected:

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc({
  vue: {
    vueVersion: 3, // or 2
  },
})
```

### Custom Rules

```js
import skyroc from '@skyroc/eslint-config'

export default skyroc(
  {
    typescript: true,
    react: true,
  },
  {
    rules: {
      'no-console': 'off',
    },
  }
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

## Configuration Options

### `SkryocESLintConfig`

```ts
interface SkryocESLintConfig {
  // Enable TypeScript support (auto-detected)
  typescript?: boolean | OptionsTypeScript

  // Enable React support (auto-detected)
  react?: boolean | OptionsReact

  // Enable React Native support
  reactNative?: boolean | OptionsReactNative

  // Enable Next.js support (auto-detected)
  next?: boolean | OptionsNext

  // Enable Vue support (auto-detected)
  vue?: boolean | OptionsVue

  // Additional ignores
  ignores?: string[]

  // Enable gitignore support (default: true)
  gitignore?: boolean
}
```

## License

MIT
