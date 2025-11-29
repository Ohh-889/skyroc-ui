# @skyroc/tailwind-plugin

[![npm](https://img.shields.io/npm/v/@skyroc/tailwind-plugin?color=a1b858&label=)](https://npmjs.com/package/@skyroc/tailwind-plugin)

[English](./README.md) | [简体中文](./README.zh.md)

Skyroc UI 的 Tailwind CSS 插件，提供主题系统、设计令牌和颜色系统集成。

## 特性

- **主题系统** - 内置亮/暗主题支持，使用 CSS 变量
- **颜色调色板** - 多种内置配色方案（zinc、slate、stone、gray、neutral、red、rose、orange、green、blue、yellow、violet）
- **设计令牌** - 语义化颜色令牌：primary、secondary、destructive、warning、success、info
- **圆角系统** - 可配置的圆角系统
- **CSS 变量** - 完整的 CSS 自定义属性支持，支持运行时主题切换

## 安装

```bash
# npm
npm install @skyroc/tailwind-plugin

# pnpm
pnpm add @skyroc/tailwind-plugin

# yarn
yarn add @skyroc/tailwind-plugin
```

## 使用

### 基础配置

在 `tailwind.config.js` 中添加插件：

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

### 带选项配置

```js
import { skyrocUIPlugin } from '@skyroc/tailwind-plugin'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    skyrocUIPlugin({
      color: 'blue',      // 主色调主题
      radius: 0.5         // 圆角比例
    })
  ]
}
```

## 配置选项

### 颜色主题

可用的内置颜色主题：

| 主题 | 主色调 |
|------|--------|
| `zinc` | 锌灰色 |
| `slate` | 石板灰 |
| `stone` | 石灰色 |
| `gray` | 中性灰 |
| `neutral` | 纯中性 |
| `red` | 红色 |
| `rose` | 玫瑰粉 |
| `orange` | 橙色 |
| `green` | 绿色 |
| `blue` | 蓝色 |
| `yellow` | 黄色 |
| `violet` | 紫罗兰 |

### 圆角

可用的圆角值：`0`、`0.3`、`0.5`、`0.75`、`1`

## 主题颜色

插件提供语义化颜色令牌：

### 基础颜色

| 令牌 | 描述 |
|------|------|
| `background` | 页面背景 |
| `foreground` | 默认文字颜色 |
| `card` | 卡片背景 |
| `card-foreground` | 卡片文字颜色 |
| `popover` | 弹出框背景 |
| `popover-foreground` | 弹出框文字颜色 |
| `muted` | 禁用/次要背景 |
| `muted-foreground` | 次要文字颜色 |
| `accent` | 强调色 |
| `accent-foreground` | 强调色文字 |
| `border` | 边框颜色 |
| `input` | 输入框边框颜色 |
| `ring` | 聚焦环颜色 |

### 语义颜色

每个语义颜色都有完整的色阶（50-950）以及 `DEFAULT` 和 `foreground`：

| 令牌 | 描述 |
|------|------|
| `primary` | 主品牌色 |
| `secondary` | 次要颜色 |
| `destructive` | 错误/危险颜色 |
| `warning` | 警告颜色 |
| `success` | 成功颜色 |
| `info` | 信息颜色 |
| `carbon` | 中性碳色 |

### 侧边栏颜色

| 令牌 | 描述 |
|------|------|
| `sidebar-background` | 侧边栏背景 |
| `sidebar-foreground` | 侧边栏文字 |
| `sidebar-primary` | 侧边栏主色 |
| `sidebar-accent` | 侧边栏强调色 |
| `sidebar-border` | 侧边栏边框 |
| `sidebar-ring` | 侧边栏聚焦环 |

## 在组件中使用

```tsx
// 使用主题颜色
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    主要按钮
  </button>
  
  <div className="bg-card border-border rounded-lg">
    卡片内容
  </div>
  
  <span className="text-muted-foreground">
    次要文字
  </span>
</div>

// 使用色阶
<div className="bg-primary-100 text-primary-900">
  浅色主背景
</div>

<div className="bg-destructive-500 text-white">
  错误/危险状态
</div>
```

## CSS 变量

插件生成的 CSS 变量可以直接使用：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* ... 更多变量 */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... 暗色模式变量 */
}
```

## API 参考

### skyrocUIPlugin

主插件函数：

```ts
import { skyrocUIPlugin } from '@skyroc/tailwind-plugin'

skyrocUIPlugin(options?: SkyrocUIPluginOptions)
```

### 辅助导出

```ts
import {
  skyrocUIPlugin,      // 主插件
  skyrocUITheme,       // 主题生成函数
  presetSkyrocUI,      // 预设工具类
  generateCSSVars,     // CSS 变量生成器
  builtinColors,       // 内置颜色名称数组
  builtinColorMap,     // 颜色名称到值的映射
  builtinRadiuses      // 可用圆角值
} from '@skyroc/tailwind-plugin'
```

### 类型

```ts
import type {
  SkyrocUIPluginOptions,
  ThemeConfig,
  ThemeConfigColor,
  ThemeColorKey,
  ThemeOptions
} from '@skyroc/tailwind-plugin'
```

## 许可证

[MIT](../../LICENSE) 许可证 © 2024-至今 [Ohh](https://github.com/Ohh-889)

