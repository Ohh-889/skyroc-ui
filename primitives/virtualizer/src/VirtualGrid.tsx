'use client';

import type { CSSProperties, ReactElement } from 'react';
import { Fragment, useRef } from 'react';
import type { VirtualGridProps } from './types';
import { useVirtualizer } from './useVirtualizer';

/**
 * A headless virtual grid component that efficiently renders large grids
 * by only rendering visible cells.
 *
 * @example
 * ```tsx
 * // Basic usage with fixed cell size
 * <VirtualGrid
 *   data={flatData}
 *   columns={5}
 *   height={400}
 *   width={600}
 *   rowHeight={50}
 *   columnWidth={100}
 *   renderCell={(item, rowIndex, colIndex, style) => (
 *     <div style={style}>
 *       Cell {rowIndex},{colIndex}
 *     </div>
 *   )}
 * />
 *
 * // Variable size cells
 * <VirtualGrid
 *   data={flatData}
 *   columns={5}
 *   height={400}
 *   width={600}
 *   rowHeight={(index) => rowHeights[index]}
 *   columnWidth={(index) => columnWidths[index]}
 *   gap={8}
 *   renderCell={(item, rowIndex, colIndex, style) => (
 *     <div style={style}>
 *       {item.content}
 *     </div>
 *   )}
 * />
 * ```
 */
export function VirtualGrid<T>(props: VirtualGridProps<T>): ReactElement {
  const {
    data,
    columns,
    height,
    width,
    rowHeight,
    columnWidth,
    gap = 0,
    overscan = 5,
    renderCell,
    className,
    style,
    innerClassName
  } = props;

  const parentRef = useRef<HTMLDivElement>(null);

  const rowCount = Math.ceil(data.length / columns);

  const rowVirtualizer = useVirtualizer({
    parentRef,
    count: rowCount,
    estimateSize: rowHeight,
    overscan,
    gap
  });

  const columnVirtualizer = useVirtualizer({
    parentRef,
    count: columns,
    estimateSize: columnWidth,
    overscan,
    horizontal: true,
    gap
  });

  const containerStyle: CSSProperties = {
    height,
    width,
    overflow: 'auto',
    ...style
  };

  const innerStyle: CSSProperties = {
    height: rowVirtualizer.totalSize,
    width: columnVirtualizer.totalSize,
    position: 'relative'
  };

  return (
    <div
      ref={parentRef}
      className={className}
      style={containerStyle}
    >
      <div
        className={innerClassName}
        style={innerStyle}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => (
          <Fragment key={virtualRow.index}>
            {columnVirtualizer.virtualItems.map((virtualColumn) => {
              const dataIndex = virtualRow.index * columns + virtualColumn.index;

              // Skip if beyond data length
              if (dataIndex >= data.length) {
                return null;
              }

              const item = data[dataIndex];

              const cellStyle: CSSProperties = {
                position: 'absolute',
                top: 0,
                left: 0,
                width: virtualColumn.size,
                height: virtualRow.size,
                transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`
              };

              return renderCell(item, virtualRow.index, virtualColumn.index, cellStyle);
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

