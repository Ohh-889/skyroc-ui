# @skyroc/color

[![npm](https://img.shields.io/npm/v/@skyroc/color?color=a1b858&label=)](https://npmjs.com/package/@skyroc/color)

[English](./README.md) | [简体中文](./README.zh.md)

用于生成和管理颜色调色板的颜色系统工具库。基于 [colord](https://github.com/omgovich/colord) 构建，提供精确的颜色操作。

## 特性

- **调色板生成** - 从单个基础颜色生成完整的 11 级色阶调色板
- **Tailwind 预设** - 包含完整的 Tailwind CSS 颜色调色板
- **HSV 算法** - 使用 HSV 色彩空间实现感知一致的色阶
- **色相偏移** - 智能色相调整，实现更自然的颜色过渡
- **TypeScript** - 完整的类型支持

## 安装

```bash
# npm
npm install @skyroc/color

# pnpm
pnpm add @skyroc/color

# yarn
yarn add @skyroc/color
```

## 使用

### 生成调色板

从任意基础颜色生成完整的调色板：

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
//   500: '#3b82f6',  // 基础颜色
//   600: '#2563eb',
//   700: '#1d4ed8',
//   800: '#1e40af',
//   900: '#1e3a8a',
//   950: '#172554'
// }
```

### 使用 Tailwind 颜色预设

访问完整的 Tailwind CSS 颜色调色板：

```ts
import { tailwindColorPalette } from '@skyroc/color'

// 获取蓝色调色板
const blue = tailwindColorPalette.blue
console.log(blue[500]) // '#3b82f6'

// 获取红色调色板
const red = tailwindColorPalette.red
console.log(red[500]) // '#ef4444'
```

### 直接使用 colord

使用 colord 进行高级颜色操作：

```ts
import { colord } from '@skyroc/color'

const color = colord('#3b82f6')

// 转换为不同格式
console.log(color.toHsl())  // { h: 217, s: 91, l: 60, a: 1 }
console.log(color.toRgb())  // { r: 59, g: 130, b: 246, a: 1 }
console.log(color.toHsv())  // { h: 217, s: 76, v: 96, a: 1 }

// 颜色操作
console.log(color.lighten(0.2).toHex()) // 更亮的色调
console.log(color.darken(0.2).toHex())  // 更暗的色调
console.log(color.saturate(0.5).toHex()) // 更饱和
```

## 可用颜色调色板

包含完整的 Tailwind CSS 颜色调色板：

| 颜色 | 说明 |
|------|------|
| `slate` | 灰蓝色调 |
| `gray` | 纯灰色 |
| `zinc` | 冷灰色 |
| `neutral` | 真中性色 |
| `stone` | 暖灰色 |
| `red` | 红色系 |
| `orange` | 橙色系 |
| `amber` | 琥珀/金色 |
| `yellow` | 黄色系 |
| `lime` | 黄绿色 |
| `green` | 绿色系 |
| `emerald` | 蓝绿色 |
| `teal` | 青色系 |
| `cyan` | 青蓝色 |
| `sky` | 天蓝色 |
| `blue` | 蓝色系 |
| `indigo` | 靛蓝色 |
| `violet` | 紫罗兰 |
| `purple` | 紫色系 |
| `fuchsia` | 洋红色 |
| `pink` | 粉色系 |
| `rose` | 玫瑰色 |

## API 参考

### generateColorPalette

从基础颜色生成调色板：

```ts
function generateColorPalette(baseColor: string): ColorPalette
```

**参数：**
- `baseColor` - 任何有效的 CSS 颜色（hex、rgb、hsl 等）

**返回值：**
- `ColorPalette` - 包含 50-950 色阶的对象

### tailwindColorPalette

预定义的 Tailwind CSS 颜色调色板：

```ts
const tailwindColorPalette: Record<TailwindColorPaletteKey, ColorPalette>
```

### colord

重新导出的 colord 函数，用于高级颜色操作：

```ts
import { colord } from '@skyroc/color'
```

## 类型

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

## 算法

调色板生成使用基于 HSV 的算法：

1. **变亮 (50-400)**：增加明度、降低饱和度、色相向 CMY 偏移
2. **基础 (500)**：原始颜色不变
3. **变暗 (600-950)**：降低明度、增加饱和度、色相向 RGB 偏移

这样可以创建感知一致的调色板，浅色调更柔和，深色调更丰富。

## 许可证

[MIT](../../LICENSE) 许可证 © 2024-至今 [Ohh](https://github.com/Ohh-889)

