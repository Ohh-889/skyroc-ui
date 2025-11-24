# Demos 文件夹说明

## 概述

这个文件夹用于存放文档中使用的 Demo 组件。通过配置路径别名，可以直接引用 playground 中的 modules。

## 路径配置

在 `docs/tsconfig.json` 中配置了以下路径别名：

```json
{
  "paths": {
    "@/*": ["./*"],
    "@ui/*": ["../packages/ui/src/components/*"],
    "@playground/*": ["../playground/src/app/(demo)/*"]
  }
}
```

## 使用方式

### 方式1：直接引用 playground 模块

创建一个 re-export 文件，例如 `button-color.tsx`：

```tsx
/**
 * 从 playground 引用 ButtonColor 组件
 */
export { default } from '@playground/button/modules/ButtonColor';
```

### 方式2：创建自定义 Demo

如果需要自定义展示效果，可以直接在这里创建独立的组件：

```tsx
import { Button } from '@ui/button';

const Demo = () => {
  return (
    <div className="flex gap-4">
      <Button color="primary">Primary</Button>
      <Button color="destructive">Destructive</Button>
    </div>
  );
};

export default Demo;
```

## 在文档中使用

在 `.mdx` 文件中使用 `<Demo>` 组件：

```mdx
<Demo src="@/demos/button-color.tsx" title="按钮颜色" />
```

## 注册 Demo

所有 demo 必须在 `index.ts` 中注册：

```ts
// 1. 导出组件
export { default as buttonColor } from './button-color';

// 2. 添加到映射表
export const demoMap = {
  'button-color': () => import('./button-color'),
  // ...
} as const;
```

## 优势

1. **单一数据源**：playground 的 modules 是唯一的实现，避免重复代码
2. **保持同步**：playground 的修改会自动同步到文档
3. **易于维护**：不需要在两个地方维护相同的代码
4. **类型安全**：TypeScript 路径别名确保类型正确

## 文件结构

```
docs/
├── demos/
│   ├── button-color.tsx      # re-export playground 的 ButtonColor
│   ├── button-variant.tsx    # re-export playground 的 ButtonVariant
│   ├── button-basic.tsx      # 自定义的 demo
│   ├── index.ts              # 导出和映射所有 demos
│   └── README.md             # 本说明文件
└── tsconfig.json             # 配置路径别名
```
