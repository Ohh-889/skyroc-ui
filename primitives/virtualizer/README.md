# @skyroc/virtualizer

Headless virtualizer components for efficient rendering of large lists and grids. Built on top of [@tanstack/react-virtual](https://tanstack.com/virtual).

## Installation

```bash
pnpm add @skyroc/virtualizer
```

## Features

- 🚀 **High Performance** - Only renders visible items
- 📦 **Headless** - Full control over styling and rendering
- 🎯 **Flexible** - Supports lists, grids, and masonry layouts
- 📏 **Variable Sizes** - Support for dynamic item sizes
- 🪟 **Window Scroll** - Built-in support for window-based scrolling
- 🔄 **Horizontal/Vertical** - Support for both orientations

## Usage

### Basic Virtual List

```tsx
import { VirtualList } from '@skyroc/virtualizer';

function MyList() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`
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

### Variable Height List

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
          Row {index} (height: {item.height}px)
        </div>
      )}
    />
  );
}
```

### Horizontal List

```tsx
import { VirtualList } from '@skyroc/virtualizer';

function HorizontalList() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Column ${i}`
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

### Virtual Grid

```tsx
import { VirtualGrid } from '@skyroc/virtualizer';

function MyGrid() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    content: `Cell ${i}`
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

### Using the Hook Directly

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
            Row {item.index}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Window Scroll

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
          Row {item.index}
        </div>
      ))}
    </div>
  );
}
```

## API

### useVirtualizer

Hook for virtualizing content within a scroll container element.

```tsx
const {
  virtualizer,    // TanStack Virtual instance
  virtualItems,   // Array of visible virtual items
  totalSize,      // Total size of all items
  scrollToIndex,  // Function to scroll to an index
  scrollToOffset, // Function to scroll to an offset
  measureElement, // Function to measure an element
  getScrollElement // Function to get the scroll element
} = useVirtualizer({
  parentRef,      // Ref to the scroll container
  count,          // Total item count
  estimateSize,   // Estimated item size (number or function)
  overscan,       // Items to render outside visible area
  horizontal,     // Whether to scroll horizontally
  gap,            // Gap between items
  lanes,          // Number of lanes for masonry
  initialOffset,  // Initial scroll offset
  onScroll        // Scroll callback
});
```

### useWindowVirtualizer

Hook for virtualizing content when using window scroll.

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

A ready-to-use virtual list component.

| Prop | Type | Description |
|------|------|-------------|
| `data` | `T[]` | Data array to virtualize |
| `height` | `number \| string` | Container height |
| `width` | `number \| string` | Container width |
| `itemSize` | `number \| ((index) => number)` | Item size |
| `renderItem` | `(item, index, style) => ReactNode` | Item renderer |
| `horizontal` | `boolean` | Horizontal scrolling |
| `overscan` | `number` | Items to render outside visible area |
| `gap` | `number` | Gap between items |
| `useWindowScroll` | `boolean` | Use window as scroll container |

### VirtualGrid

A ready-to-use virtual grid component.

| Prop | Type | Description |
|------|------|-------------|
| `data` | `T[]` | Data array (flat) |
| `columns` | `number` | Number of columns |
| `height` | `number \| string` | Container height |
| `width` | `number \| string` | Container width |
| `rowHeight` | `number \| ((index) => number)` | Row height |
| `columnWidth` | `number \| ((index) => number)` | Column width |
| `renderCell` | `(item, row, col, style) => ReactNode` | Cell renderer |
| `gap` | `number` | Gap between cells |
| `overscan` | `number` | Cells to render outside visible area |

## License

MIT

