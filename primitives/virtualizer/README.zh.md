# @skyroc/virtualizer

用于高效渲染大型列表和网格的无头虚拟化组件。基于 [@tanstack/react-virtual](https://tanstack.com/virtual) 构建。

## 安装

```bash
pnpm add @skyroc/virtualizer
```

## 特性

- 🚀 **高性能** - 仅渲染可见项
- 📦 **无头设计** - 完全控制样式和渲染
- 🎯 **灵活** - 支持列表、网格和瀑布流布局
- 📏 **可变尺寸** - 支持动态项目尺寸
- 🪟 **窗口滚动** - 内置支持基于窗口的滚动
- 🔄 **水平/垂直** - 支持两种方向

## 使用方法

### 基础虚拟列表

```tsx
import { VirtualList } from '@skyroc/virtualizer';

function MyList() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `项目 ${i}`
  }));

  return (
    <VirtualList
      data={items}
      height={400}
      itemSize={50}
      renderItem={(item, index, style) => (
        <div key={item.id} style={style}>
          {item.name}
        </div>
      )}
    />
  );
}
```

### 可变高度列表

```tsx
import { VirtualList } from '@skyroc/virtualizer';

function VariableList() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    height: 25 + Math.round(Math.random() * 100)
  }));

  return (
    <VirtualList
      data={items}
      height={400}
      itemSize={(index) => items[index].height}
      renderItem={(item, index, style) => (
        <div key={item.id} style={style}>
          行 {index} (高度: {item.height}px)
        </div>
      )}
    />
  );
}
```

### 水平列表

```tsx
import { VirtualList } from '@skyroc/virtualizer';

function HorizontalList() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `列 ${i}`
  }));

  return (
    <VirtualList
      data={items}
      width={800}
      height={100}
      horizontal
      itemSize={150}
      renderItem={(item, index, style) => (
        <div key={item.id} style={style}>
          {item.name}
        </div>
      )}
    />
  );
}
```

### 虚拟网格

```tsx
import { VirtualGrid } from '@skyroc/virtualizer';

function MyGrid() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    content: `单元格 ${i}`
  }));

  return (
    <VirtualGrid
      data={items}
      columns={5}
      height={400}
      width={600}
      rowHeight={80}
      columnWidth={120}
      renderCell={(item, rowIndex, colIndex, style) => (
        <div key={item.id} style={style}>
          {item.content}
        </div>
      )}
    />
  );
}
```

### 直接使用 Hook

```tsx
import { useVirtualizer } from '@skyroc/virtualizer';
import { useRef } from 'react';

function CustomVirtualList() {
  const parentRef = useRef<HTMLDivElement>(null);

  const { virtualItems, totalSize, scrollToIndex } = useVirtualizer({
    parentRef,
    count: 10000,
    estimateSize: 50,
    overscan: 5
  });

  return (
    <div ref={parentRef} style={{ height: 400, overflow: 'auto' }}>
      <div style={{ height: totalSize, position: 'relative' }}>
        {virtualItems.map((item) => (
          <div
            key={item.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: item.size,
              transform: `translateY(${item.start}px)`
            }}
          >
            行 {item.index}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 窗口滚动

```tsx
import { useWindowVirtualizer } from '@skyroc/virtualizer';

function WindowScrollList() {
  const { virtualItems, totalSize } = useWindowVirtualizer({
    count: 10000,
    estimateSize: 50,
    overscan: 5
  });

  return (
    <div style={{ height: totalSize, position: 'relative' }}>
      {virtualItems.map((item) => (
        <div
          key={item.index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: item.size,
            transform: `translateY(${item.start}px)`
          }}
        >
          行 {item.index}
        </div>
      ))}
    </div>
  );
}
```

## API

### useVirtualizer

用于在滚动容器元素内虚拟化内容的 Hook。

```tsx
const {
  virtualizer,    // TanStack Virtual 实例
  virtualItems,   // 可见虚拟项数组
  totalSize,      // 所有项的总大小
  scrollToIndex,  // 滚动到指定索引的函数
  scrollToOffset, // 滚动到指定偏移的函数
  measureElement, // 测量元素的函数
  getScrollElement // 获取滚动元素的函数
} = useVirtualizer({
  parentRef,      // 滚动容器的 ref
  count,          // 项目总数
  estimateSize,   // 估计项目大小（数字或函数）
  overscan,       // 可见区域外渲染的项目数
  horizontal,     // 是否水平滚动
  gap,            // 项目间距
  lanes,          // 瀑布流的列数
  initialOffset,  // 初始滚动偏移
  onScroll        // 滚动回调
});
```

### useWindowVirtualizer

使用窗口滚动时虚拟化内容的 Hook。

```tsx
const {
  virtualizer,
  virtualItems,
  totalSize,
  scrollToIndex,
  scrollToOffset,
  measureElement,
  getScrollElement
} = useWindowVirtualizer({
  count,
  estimateSize,
  overscan,
  horizontal,
  gap,
  lanes,
  scrollMargin,
  onScroll
});
```

### VirtualList

即用型虚拟列表组件。

| 属性 | 类型 | 描述 |
|------|------|------|
| `data` | `T[]` | 要虚拟化的数据数组 |
| `height` | `number \| string` | 容器高度 |
| `width` | `number \| string` | 容器宽度 |
| `itemSize` | `number \| ((index) => number)` | 项目大小 |
| `renderItem` | `(item, index, style) => ReactNode` | 项目渲染器 |
| `horizontal` | `boolean` | 水平滚动 |
| `overscan` | `number` | 可见区域外渲染的项目数 |
| `gap` | `number` | 项目间距 |
| `useWindowScroll` | `boolean` | 使用窗口作为滚动容器 |

### VirtualGrid

即用型虚拟网格组件。

| 属性 | 类型 | 描述 |
|------|------|------|
| `data` | `T[]` | 数据数组（扁平） |
| `columns` | `number` | 列数 |
| `height` | `number \| string` | 容器高度 |
| `width` | `number \| string` | 容器宽度 |
| `rowHeight` | `number \| ((index) => number)` | 行高 |
| `columnWidth` | `number \| ((index) => number)` | 列宽 |
| `renderCell` | `(item, row, col, style) => ReactNode` | 单元格渲染器 |
| `gap` | `number` | 单元格间距 |
| `overscan` | `number` | 可见区域外渲染的单元格数 |

## 许可证

MIT
