# Next Docs Plugin

MDX 插件，用于自动处理文档中的 `<Demo>` 组件。

## 功能

自动为 MDX 文档中的 `<Demo>` 标签生成 import 语句，并将导入的组件注入为 children。

支持两种引用方式：
1. **通过 @/demos 中转**（传统方式）
2. **直接引用 @playground**（推荐方式）

## 使用方式

### 方式 1：通过 @/demos（传统）

**MDX 文件**：
```mdx
<Demo src="@/demos/button-color.tsx" title="按钮颜色" />
```

**转换后**：
```tsx
import ButtonColor from '@/demos/button-color.tsx';

<Demo src="@/demos/button-color.tsx" title="按钮颜色">
  <ButtonColor />
</Demo>
```

### 方式 2：直接引用 Playground（推荐）

**默认导出**：
```mdx
<Demo src="@playground/button/modules/ButtonColor" title="按钮颜色" />
```

**转换后**：
```tsx
import ButtonColor from '@playground/button/modules/ButtonColor';

<Demo src="@playground/button/modules/ButtonColor" title="按钮颜色">
  <ButtonColor />
</Demo>
```

**命名导出**（使用 `:` 分隔符）：
```mdx
<Demo src="@playground/button/modules/ButtonGroupDemo:ButtonGroupHorizontal" title="水平按钮组" />
```

**转换后**：
```tsx
import { ButtonGroupHorizontal } from '@playground/button/modules/ButtonGroupDemo';

<Demo src="@playground/button/modules/ButtonGroupDemo:ButtonGroupHorizontal" title="水平按钮组">
  <ButtonGroupHorizontal />
</Demo>
```

## 转换过程

### 1. 扫描 Demo 标签
插件遍历 MDX AST，找到所有 `<Demo>` 标签，提取 `src` 属性。

### 2. 解析路径和导出
- **默认导出**：`@playground/button/modules/ButtonColor`
- **命名导出**：`@playground/button/modules/ButtonGroupDemo:ButtonGroupHorizontal`

使用 `:` 分隔符指定命名导出。

### 3. 生成组件名
从文件路径生成 PascalCase 组件名：
- `button-basic.tsx` → `ButtonBasic`
- `button-color.tsx` → `ButtonColor`
- `ButtonGroupDemo:ButtonGroupHorizontal` → `ButtonGroupHorizontal`

如果组件名重复，会自动添加数字后缀。

### 4. 生成 Import 语句
根据导出类型生成对应的 import 声明：

**默认导出**：
```tsx
import ButtonColor from '@playground/button/modules/ButtonColor';
```

**命名导出**：
```tsx
import { ButtonGroupHorizontal } from '@playground/button/modules/ButtonGroupDemo';
```

### 5. 注入 Children
将导入的组件作为 children 注入到 `<Demo>` 标签中。

### 6. 插入到文档开头
所有 import 语句会被插入到 MDX 文档的最开始。

## Demo 组件如何使用

`Demo` 组件接收两个重要的 props：

1. **src**: 源文件路径，用于读取源代码展示
2. **children**: 实际的 React 组件实例，用于渲染预览

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

## 优势

### 传统方式（@/demos）
- 需要创建中间文件
- 统一管理和导出
- 适合需要自定义的场景

### 直接引用方式（@playground）
- **简洁**：无需创建中间文件
- **直观**：路径清晰，一目了然
- **灵活**：支持默认导出和命名导出
- **维护简单**：单一数据源

## 配置

在 `next.config.mjs` 或 MDX 配置中使用：

```js
import rehypeCodeMeta from '@skyroc/next-docs-plugin';

export default {
  mdxOptions: {
    rehypePlugins: [rehypeCodeMeta]
  }
}
```

## 路径别名

在 `docs/tsconfig.json` 中配置：

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@playground/*": ["../playground/src/app/(demo)/*"]
    }
  }
}
```

## 示例

查看以下文档了解更多：
- `docs/app/docs/components/button/page.mdx` - 完整示例
- `DIRECT_PLAYGROUND_REFERENCE.md` - 直接引用说明
- `DEMO_SYSTEM.md` - 系统架构说明

## 相关文件

- `src/index.ts` - 插件主文件
- `src/components/CodePreview/Demo.tsx` - Demo 组件实现
- `docs/demos/` - Demo 组件存放目录
- `playground/src/app/(demo)/` - Playground 组件目录
