# @skyroc/color

[![npm](https://img.shields.io/npm/v/@skyroc/color?color=a1b858&label=)](https://npmjs.com/package/@skyroc/color)

[English](./README.md) | [简体中文](./README.zh.md)

Color system utilities for generating and managing color palettes. Built on [colord](https://github.com/omgovich/colord) for precise color manipulation.

## Features

- **Palette Generation** - Generate full 11-shade color palettes from a single base color
- **Tailwind Presets** - Complete Tailwind CSS color palettes included
- **HSV-based Algorithm** - Perceptually consistent color scales using HSV color space
- **Hue Shifting** - Smart hue adjustments for more natural color gradations
- **TypeScript** - Full type support for all exports

## Installation

```bash
# npm
npm install @skyroc/color

# pnpm
pnpm add @skyroc/color

# yarn
yarn add @skyroc/color
```

## Usage

### Generate Color Palette

Generate a complete color palette from any base color:

```ts
import { generateColorPalette } from '@skyroc/color'

const palette = generateColorPalette('#3b82f6')

console.log(palette)
// {
//   50: '#eff6ff',
//   100: '#dbeafe',
//   200: '#bfdbfe',
//   300: '#93c5fd',
//   400: '#60a5fa',
//   500: '#3b82f6',  // Base color
//   600: '#2563eb',
//   700: '#1d4ed8',
//   800: '#1e40af',
//   900: '#1e3a8a',
//   950: '#172554'
// }
```

### Use Tailwind Color Presets

Access complete Tailwind CSS color palettes:

```ts
import { tailwindColorPalette } from '@skyroc/color'

// Get blue palette
const blue = tailwindColorPalette.blue
console.log(blue[500]) // '#3b82f6'

// Get red palette
const red = tailwindColorPalette.red
console.log(red[500]) // '#ef4444'
```

### Direct colord Access

Use colord directly for advanced color manipulation:

```ts
import { colord } from '@skyroc/color'

const color = colord('#3b82f6')

// Convert to different formats
console.log(color.toHsl())  // { h: 217, s: 91, l: 60, a: 1 }
console.log(color.toRgb())  // { r: 59, g: 130, b: 246, a: 1 }
console.log(color.toHsv())  // { h: 217, s: 76, v: 96, a: 1 }

// Color manipulation
console.log(color.lighten(0.2).toHex()) // Lighter shade
console.log(color.darken(0.2).toHex())  // Darker shade
console.log(color.saturate(0.5).toHex()) // More saturated
```

## Available Color Palettes

The package includes complete Tailwind CSS color palettes:

| Color | Example |
|-------|---------|
| `slate` | Gray-blue tones |
| `gray` | Pure gray |
| `zinc` | Cool gray |
| `neutral` | True neutral |
| `stone` | Warm gray |
| `red` | Red shades |
| `orange` | Orange shades |
| `amber` | Amber/gold |
| `yellow` | Yellow shades |
| `lime` | Yellow-green |
| `green` | Green shades |
| `emerald` | Blue-green |
| `teal` | Teal shades |
| `cyan` | Cyan shades |
| `sky` | Light blue |
| `blue` | Blue shades |
| `indigo` | Indigo shades |
| `violet` | Violet shades |
| `purple` | Purple shades |
| `fuchsia` | Magenta shades |
| `pink` | Pink shades |
| `rose` | Rose shades |

## API Reference

### generateColorPalette

Generate a color palette from a base color:

```ts
function generateColorPalette(baseColor: string): ColorPalette
```

**Parameters:**
- `baseColor` - Any valid CSS color (hex, rgb, hsl, etc.)

**Returns:**
- `ColorPalette` - Object with shades 50-950

### tailwindColorPalette

Pre-defined Tailwind CSS color palettes:

```ts
const tailwindColorPalette: Record<TailwindColorPaletteKey, ColorPalette>
```

### colord

Re-exported colord function for advanced color manipulation:

```ts
import { colord } from '@skyroc/color'
```

## Types

```ts
import type {
  ColorPalette,
  ColorPaletteNumber,
  TailwindColorPaletteKey
} from '@skyroc/color'

// ColorPalette
type ColorPalette = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

// ColorPaletteNumber
type ColorPaletteNumber = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
```

## Algorithm

The palette generation uses an HSV-based algorithm:

1. **Lighten (50-400)**: Increases value, decreases saturation, shifts hue toward CMY
2. **Base (500)**: Original color unchanged
3. **Darken (600-950)**: Decreases value, increases saturation, shifts hue toward RGB

This creates perceptually consistent palettes where lighter shades feel more pastel and darker shades feel more rich.

## License

[MIT](../../LICENSE) License © 2024-PRESENT [Ohh](https://github.com/Ohh-889)

