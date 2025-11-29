# @skyroc/tailwind-plugin

[![npm](https://img.shields.io/npm/v/@skyroc/tailwind-plugin?color=a1b858&label=)](https://npmjs.com/package/@skyroc/tailwind-plugin)

[English](./README.md) | [简体中文](./README.zh.md)

Tailwind CSS plugin for Skyroc UI, providing theming, design tokens, and color system integration.

## Features

- **Theme System** - Built-in light/dark theme support with CSS variables
- **Color Palette** - Multiple built-in color schemes (zinc, slate, stone, gray, neutral, red, rose, orange, green, blue, yellow, violet)
- **Design Tokens** - Semantic color tokens for primary, secondary, destructive, warning, success, info
- **Border Radius** - Configurable border radius system
- **CSS Variables** - Full CSS custom properties support for runtime theming

## Installation

```bash
# npm
npm install @skyroc/tailwind-plugin

# pnpm
pnpm add @skyroc/tailwind-plugin

# yarn
yarn add @skyroc/tailwind-plugin
```

## Usage

### Basic Setup

Add the plugin to your `tailwind.config.js`:

```js
import { skyrocUIPlugin } from '@skyroc/tailwind-plugin'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/skyroc-ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [skyrocUIPlugin()]
}
```

### With Options

```js
import { skyrocUIPlugin } from '@skyroc/tailwind-plugin'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    skyrocUIPlugin({
      color: 'blue',      // Primary color theme
      radius: 0.5         // Border radius scale
    })
  ]
}
```

## Configuration Options

### Color Themes

Available built-in color themes:

| Theme | Primary Color |
|-------|--------------|
| `zinc` | Zinc gray |
| `slate` | Slate gray |
| `stone` | Stone gray |
| `gray` | Neutral gray |
| `neutral` | Pure neutral |
| `red` | Red |
| `rose` | Rose pink |
| `orange` | Orange |
| `green` | Green |
| `blue` | Blue |
| `yellow` | Yellow |
| `violet` | Violet |

### Border Radius

Available radius values: `0`, `0.3`, `0.5`, `0.75`, `1`

## Theme Colors

The plugin provides semantic color tokens:

### Base Colors

| Token | Description |
|-------|-------------|
| `background` | Page background |
| `foreground` | Default text color |
| `card` | Card background |
| `card-foreground` | Card text color |
| `popover` | Popover background |
| `popover-foreground` | Popover text color |
| `muted` | Muted/disabled background |
| `muted-foreground` | Muted text color |
| `accent` | Accent color |
| `accent-foreground` | Accent text color |
| `border` | Border color |
| `input` | Input border color |
| `ring` | Focus ring color |

### Semantic Colors

Each semantic color has a full scale (50-950) plus `DEFAULT` and `foreground`:

| Token | Description |
|-------|-------------|
| `primary` | Primary brand color |
| `secondary` | Secondary color |
| `destructive` | Error/danger color |
| `warning` | Warning color |
| `success` | Success color |
| `info` | Information color |
| `carbon` | Neutral carbon color |

### Sidebar Colors

| Token | Description |
|-------|-------------|
| `sidebar-background` | Sidebar background |
| `sidebar-foreground` | Sidebar text |
| `sidebar-primary` | Sidebar primary color |
| `sidebar-accent` | Sidebar accent |
| `sidebar-border` | Sidebar border |
| `sidebar-ring` | Sidebar focus ring |

## Usage in Components

```tsx
// Using theme colors
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Primary Button
  </button>
  
  <div className="bg-card border-border rounded-lg">
    Card content
  </div>
  
  <span className="text-muted-foreground">
    Muted text
  </span>
</div>

// Using color scales
<div className="bg-primary-100 text-primary-900">
  Light primary background
</div>

<div className="bg-destructive-500 text-white">
  Destructive/Error state
</div>
```

## CSS Variables

The plugin generates CSS variables that you can use directly:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* ... more variables */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode variables */
}
```

## API Reference

### skyrocUIPlugin

Main plugin function:

```ts
import { skyrocUIPlugin } from '@skyroc/tailwind-plugin'

skyrocUIPlugin(options?: SkyrocUIPluginOptions)
```

### Helper Exports

```ts
import {
  skyrocUIPlugin,      // Main plugin
  skyrocUITheme,       // Theme generator function
  presetSkyrocUI,      // Preset utilities
  generateCSSVars,     // CSS variable generator
  builtinColors,       // Array of built-in color names
  builtinColorMap,     // Map of color names to values
  builtinRadiuses      // Available radius values
} from '@skyroc/tailwind-plugin'
```

### Types

```ts
import type {
  SkyrocUIPluginOptions,
  ThemeConfig,
  ThemeConfigColor,
  ThemeColorKey,
  ThemeOptions
} from '@skyroc/tailwind-plugin'
```

## License

[MIT](../../LICENSE) License © 2024-PRESENT [Ohh](https://github.com/Ohh-889)

