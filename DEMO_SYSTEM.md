# Demo 系统架构说明

这个文档说明了如何实现从 playground 到 docs 的组件自动引用系统。

## 系统概览

```
playground/src/app/(demo)/button/
├── modules/
│   ├── ButtonColor.tsx          # 纯组件，无 Card 包装
│   ├── ButtonVariant.tsx
│   ├── ButtonSize.tsx
│   └── ...
└── page.tsx                     # playground 页面，添加 Card 包装

         ↓ (通过路径别名 @playground/* 引用)

docs/demos/
├── button-color.tsx         # re-export: export { default } from '@playground/...'
├── button-variant.tsx
├── button-size.tsx
└── index.ts                 # 统一导出和映射

         ↓ (在 MDX 中使用)

docs/app/docs/components/button/page.mdx
<Demo src="@/demos/button-color.tsx" title="按钮颜色" />

         ↓ (MDX 插件自动转换)

import ButtonColor from '@/demos/button-color.tsx';
<Demo src="@/demos/button-color.tsx" title="按钮颜色">
  <ButtonColor />
</Demo>
```

## 🎯 重要架构决策：Card 包装提取

所有 modules 中的组件都**已移除 Card 包装**，现在只包含纯展示逻辑：

**之前**：
```tsx
// ButtonColor.tsx
const ButtonColor = () => {
  return (
    <Card split title="Color">
      <div>{/* 按钮展示 */}</div>
    </Card>
  );
};
```

**现在**：
```tsx
// modules/ButtonColor.tsx (纯组件)
const ButtonColor = () => {
  return <div>{/* 按钮展示 */}</div>;
};

// page.tsx (playground 页面)
const ButtonPage = () => {
  return (
    <Card split title="Color">
      <ButtonColor />
    </Card>
  );
};
```

**优势**：
- ✅ **灵活性**：docs 中可自由选择是否使用 Card
- ✅ **单一职责**：组件只关注展示，布局由使用方决定
- ✅ **可组合性**：可以组合多个组件创建新的展示
- ✅ **可复用性**：同一组件可在不同场景使用

## 核心组件

### 1. Playground Modules (源组件)

**位置**: `playground/src/app/(demo)/button/modules/`

**作用**: 包含所有实际的演示组件实现

**示例**:
```tsx
// ButtonColor.tsx
import { Button, Card } from 'skyroc-ui';

const colors = ['primary', 'destructive', 'success', ...] as const;

const ButtonColor = () => {
  return (
    <Card split title="Color">
      <div className="flex flex-wrap gap-[12px]">
        {colors.map(color => (
          <Button color={color} key={color}>{color}</Button>
        ))}
      </div>
    </Card>
  );
};

export default ButtonColor;
```

### 2. Docs Demos (Re-export 层)

**位置**: `docs/demos/`

**作用**: 通过路径别名引用 playground 的组件

**示例**:
```tsx
// docs/demos/button-color.tsx
export { default } from '@playground/button/modules/ButtonColor';
```

**index.ts**: 统一导出和映射
```tsx
export { default as buttonColor } from './button-color';

export const demoMap = {
  'button-color': () => import('./button-color'),
  // ...
} as const;
```

### 3. 路径别名配置

**位置**: `docs/tsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@ui/*": ["../packages/ui/src/components/*"],
      "@playground/*": ["../playground/src/app/(demo)/*"]
    }
  }
}
```

### 4. MDX 插件 (自动导入)

**位置**: `packages/next-docs-plugin/src/index.ts`

**作用**:
1. 扫描 MDX 中的所有 `<Demo>` 标签
2. 提取 `src` 属性
3. 生成 import 语句
4. 将导入的组件注入为 children

**转换前**:
```mdx
<Demo src="@/demos/button-color.tsx" title="按钮颜色" />
```

**转换后**:
```jsx
import ButtonColor from '@/demos/button-color.tsx';

<Demo src="@/demos/button-color.tsx" title="按钮颜色">
  <ButtonColor />
</Demo>
```

### 5. Demo 组件 (渲染层)

**位置**: `packages/next-docs-plugin/src/components/CodePreview/Demo.tsx`

**作用**:
1. 接收 `src` 读取源代码
2. 接收 `children` 渲染组件
3. 提供实时预览功能

```tsx
export default async function Demo({ children, src, title }: DemoProps) {
  const code = await readSourceCode(src);

  return (
    <LiveCodePreview code={code} title={title}>
      {children}
    </LiveCodePreview>
  );
}
```

## 数据流

```
1. 用户在 MDX 中写:
   <Demo src="@/demos/button-color.tsx" title="按钮颜色" />

2. MDX 插件处理:
   - 提取 src: "@/demos/button-color.tsx"
   - 生成组件名: "ButtonColor"
   - 生成 import: import ButtonColor from '@/demos/button-color.tsx'
   - 注入 children: <Demo ...><ButtonColor /></Demo>

3. 路径别名解析:
   @/demos/button-color.tsx
   → docs/demos/button-color.tsx
   → export { default } from '@playground/button/modules/ButtonColor'
   → playground/src/app/(demo)/button/modules/ButtonColor.tsx

4. Demo 组件渲染:
   - 读取源代码: readSourceCode(src)
   - 渲染预览: {children} (即 <ButtonColor />)
   - 展示实时编辑器
```

## 优势

### 1. 单一数据源
- playground 是唯一的组件实现
- docs 只是引用，不需要重复代码

### 2. 自动同步
- playground 的修改自动反映到 docs
- 无需手动更新文档

### 3. 类型安全
- TypeScript 路径别名确保引用正确
- 编译时检查组件是否存在

### 4. 开发体验
- 无需手动写 import
- MDX 语法简洁
- 自动化处理

### 5. 代码复用
- playground 的组件可直接在文档中使用
- 避免维护两套代码

## 使用指南

### 在 playground 中创建组件

```bash
playground/src/app/(demo)/button/modules/
└── ButtonNewFeature.tsx
```

### 在 docs/demos 中 re-export

```tsx
// docs/demos/button-new-feature.tsx
export { default } from '@playground/button/modules/ButtonNewFeature';
```

### 在 index.ts 中注册

```tsx
export { default as buttonNewFeature } from './button-new-feature';

export const demoMap = {
  'button-new-feature': () => import('./button-new-feature'),
  // ...
} as const;
```

### 在 MDX 中使用

```mdx
<Demo src="@/demos/button-new-feature.tsx" title="新功能" />
```

就这么简单！MDX 插件会自动处理 import 和组件注入。

## 调试

如果遇到问题，检查以下几点：

1. **路径别名是否正确**: 检查 `tsconfig.json`
2. **组件是否导出**: 确保使用 `export default`
3. **Demo 是否注册**: 检查 `docs/demos/index.ts`
4. **MDX 插件是否启用**: 检查 Next.js 配置

## 相关文件

- `playground/src/app/(demo)/` - Playground 组件
- `docs/demos/` - Demo re-exports
- `docs/tsconfig.json` - 路径别名配置
- `packages/next-docs-plugin/src/index.ts` - MDX 插件
- `packages/next-docs-plugin/src/components/CodePreview/Demo.tsx` - Demo 组件
