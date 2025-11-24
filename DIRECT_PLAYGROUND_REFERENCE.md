# 直接引用 Playground 组件

本文档说明如何在 MDX 文档中直接引用 playground 的组件，无需通过 `@/demos` 中转。

## 使用方式

### 方式 1：引用默认导出

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

### 方式 2：引用命名导出

使用 `:` 分隔符指定命名导出：

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

## 插件工作原理

MDX 插件会自动处理 `<Demo>` 标签：

1. **解析 src 属性**：
   - 检测是否包含 `:` 分隔符
   - 提取路径和导出名称

2. **生成 import 语句**：
   - 默认导出：`import ComponentName from 'path';`
   - 命名导出：`import { ExportName } from 'path';`

3. **注入 children**：
   - 将导入的组件作为 children 传递给 Demo

4. **插入到文档开头**：
   - 所有 import 语句会被插入到 MDX 文档最开始

## 语法规则

### 默认导出
```mdx
<Demo src="路径" title="标题" />
```

### 命名导出
```mdx
<Demo src="路径:导出名" title="标题" />
```

## 路径别名

需要在 `docs/tsconfig.json` 中配置：

```json
{
  "compilerOptions": {
    "paths": {
      "@playground/*": ["../playground/src/app/(demo)/*"]
    }
  }
}
```

## 示例

### Button 文档示例

```mdx
# Button 按钮

## 颜色
<Demo src="@playground/button/modules/ButtonColor" title="按钮颜色" />

## 尺寸
<Demo src="@playground/button/modules/ButtonSize" title="按钮尺寸" />

## 按钮组
<Demo src="@playground/button/modules/ButtonGroupDemo:ButtonGroupHorizontal" title="水平按钮组" />
<Demo src="@playground/button/modules/ButtonGroupDemo:ButtonGroupVertical" title="垂直按钮组" />
```

**自动生成的 imports**：
```tsx
import ButtonColor from '@playground/button/modules/ButtonColor';
import ButtonSize from '@playground/button/modules/ButtonSize';
import { ButtonGroupHorizontal } from '@playground/button/modules/ButtonGroupDemo';
import { ButtonGroupVertical } from '@playground/button/modules/ButtonGroupDemo';
```

## Playground 组件结构

### 纯组件（无 Card 包装）

```tsx
// playground/src/app/(demo)/button/modules/ButtonColor.tsx
import { Button } from 'skyroc-ui';

const ButtonColor = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {/* 按钮展示 */}
    </div>
  );
};

export default ButtonColor;
```

### 多组件导出

```tsx
// playground/src/app/(demo)/button/modules/ButtonGroupDemo.tsx
import { Button, ButtonGroup } from 'skyroc-ui';

// 导出多个子组件
export const ButtonGroupHorizontal = () => { /* ... */ };
export const ButtonGroupVertical = () => { /* ... */ };

// 默认导出组合组件
const ButtonGroupDemo = () => {
  return (
    <div className="flex gap-4">
      <ButtonGroupHorizontal />
      <ButtonGroupVertical />
    </div>
  );
};

export default ButtonGroupDemo;
```

## 优势

### 1. 简洁直观
- 直接引用，无需创建中间文件
- 路径清晰，一目了然

### 2. 灵活性
- 支持默认导出和命名导出
- 可以选择性引用子组件

### 3. 单一数据源
- playground 是唯一实现
- 避免代码重复

### 4. 自动同步
- playground 的修改自动反映到文档
- 无需手动更新

## 对比：两种引用方式

### 方式 A：通过 @/demos 中转（旧）

```tsx
// docs/demos/button-color.tsx
export { default } from '@playground/button/modules/ButtonColor';
```

```mdx
<Demo src="@/demos/button-color.tsx" title="按钮颜色" />
```

**缺点**：
- 需要创建中间文件
- 维护成本高
- 路径不直观

### 方式 B：直接引用（新）

```mdx
<Demo src="@playground/button/modules/ButtonColor" title="按钮颜色" />
```

**优点**：
- 无需中间文件
- 路径清晰
- 维护简单

## 最佳实践

### 1. 组件命名
- 使用清晰的命名，描述组件功能
- 例如：`ButtonColor`、`ButtonSize`、`ButtonGroupHorizontal`

### 2. 导出方式
- 单一功能组件：使用默认导出
- 相关组件集合：导出多个命名导出 + 默认导出（组合）

### 3. 文件组织
```
playground/src/app/(demo)/button/
├── modules/
│   ├── ButtonColor.tsx        # 默认导出
│   ├── ButtonSize.tsx         # 默认导出
│   └── ButtonGroupDemo.tsx    # 默认导出 + 命名导出
└── page.tsx                   # playground 页面
```

### 4. 文档组织
```mdx
# 基础功能
<Demo src="@playground/component/modules/Basic" title="基础用法" />

# 高级功能
<Demo src="@playground/component/modules/Advanced:Feature1" title="特性1" />
<Demo src="@playground/component/modules/Advanced:Feature2" title="特性2" />
```

## 注意事项

1. **路径别名**：确保 `tsconfig.json` 正确配置 `@playground/*`
2. **导出方式**：命名导出时必须使用 `:` 分隔符
3. **组件纯度**：modules 中的组件应该是纯展示组件，不包含 Card 等布局容器
4. **TypeScript**：确保组件有正确的类型定义

## 相关文件

- `packages/next-docs-plugin/src/index.ts` - MDX 插件实现
- `docs/tsconfig.json` - 路径别名配置
- `playground/src/app/(demo)/button/modules/` - 示例组件
- `docs/app/docs/components/button/page.mdx` - 示例文档
