# Button Demo 结构说明

## 重构目的

将 `Card` 包装从 modules 组件中提取到 `page.tsx`，使 modules 中的组件更纯粹，方便在 docs 中复用。

## 架构设计

### 之前的结构

```tsx
// modules/ButtonColor.tsx
const ButtonColor = () => {
  return (
    <Card split title="Color">
      <div className="flex flex-wrap gap-[12px]">
        {/* 按钮展示 */}
      </div>
    </Card>
  );
};
```

**问题**：
- Card 和按钮展示耦合在一起
- 在 docs 中使用时，Card 标题和内容无法分离
- 不够灵活，无法单独使用按钮展示部分

### 现在的结构

```tsx
// modules/ButtonColor.tsx
const ButtonColor = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {/* 按钮展示 */}
    </div>
  );
};
```

```tsx
// page.tsx
const ButtonPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card split title="Color">
        <ButtonColor />
      </Card>
      {/* 其他组件... */}
    </div>
  );
};
```

**优势**：
- ✅ **分离关注点**：modules 只关注按钮展示，page.tsx 负责布局
- ✅ **灵活复用**：docs 中可以自由选择是否使用 Card 包装
- ✅ **易于定制**：可以在不同场景使用不同的 Card 标题或样式

## 文件结构

```
button/
├── modules/
│   ├── ButtonColor.tsx          # 纯按钮展示，无 Card 包装
│   ├── ButtonVariant.tsx
│   ├── ButtonSize.tsx
│   ├── ButtonShape.tsx
│   ├── ButtonShadow.tsx
│   ├── ButtonSlot.tsx
│   ├── ButtonDisabled.tsx
│   ├── ButtonLoading.tsx
│   ├── ButtonGroupDemo.tsx      # 导出多个子组件
│   └── ButtonIconDemo.tsx       # 导出多个子组件
└── page.tsx                     # 为每个组件添加 Card 包装
```

## 特殊组件

### ButtonGroupDemo.tsx

导出了多个子组件，供不同场景使用：

```tsx
export const ButtonGroupHorizontal = () => { /* ... */ };
export const ButtonGroupVertical = () => { /* ... */ };

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

**在 docs 中使用**：
```tsx
// 可以单独使用水平或垂直按钮组
import { ButtonGroupHorizontal } from '@playground/button/modules/ButtonGroupDemo';
```

### ButtonIconDemo.tsx

类似地导出了多个子组件：

```tsx
export const ButtonIconBasic = () => { /* ... */ };
export const ButtonIconFitContent = () => { /* ... */ };
```

## 在 Docs 中使用

### 方式1：直接使用组件（无 Card）

```mdx
<Demo src="@/demos/button-color.tsx" title="按钮颜色" />
```

渲染结果：只有按钮展示，无 Card 包装（由 Demo 组件提供外层容器）

### 方式2：自定义 Card（如需要）

在 docs/demos 中创建自定义组件：

```tsx
// docs/demos/button-color-custom.tsx
import { Card } from 'skyroc-ui';
import ButtonColor from '@playground/button/modules/ButtonColor';

const Demo = () => {
  return (
    <Card title="自定义标题" className="custom-class">
      <ButtonColor />
    </Card>
  );
};

export default Demo;
```

### 方式3：使用子组件

```tsx
// docs/demos/button-group-horizontal.tsx
export { ButtonGroupHorizontal as default } from '@playground/button/modules/ButtonGroupDemo';
```

```mdx
<Demo src="@/demos/button-group-horizontal.tsx" title="水平按钮组" />
```

## 优势总结

1. **单一职责**
   - modules：只负责按钮展示
   - page.tsx：负责布局和组织

2. **灵活性**
   - docs 中可以自由选择是否使用 Card
   - 可以自定义 Card 的标题和样式
   - 可以单独使用子组件

3. **可维护性**
   - 组件更纯粹，职责更清晰
   - 修改布局不影响组件逻辑
   - 修改组件不影响布局

4. **可复用性**
   - 同一个组件可以在不同场景使用
   - 可以组合多个组件创建新的展示
   - 便于在其他项目中复用

## 相关文件

- `playground/src/app/(demo)/button/modules/` - 所有纯组件
- `playground/src/app/(demo)/button/page.tsx` - playground 页面（带 Card）
- `docs/demos/button-*.tsx` - docs 中的 re-export
- `DEMO_SYSTEM.md` - 完整的系统架构说明
