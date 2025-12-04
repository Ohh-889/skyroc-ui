'use client';

import { useComponentConfig } from '../config-provider/context';
import VirtualGridUI from './VirtualGridUI';
import type { VirtualGridProps } from './types';

/**
 * A virtual grid component for efficiently rendering large grids.
 * Only renders visible cells, providing excellent performance for grids with thousands of cells.
 *
 * @example
 * ```tsx
 * // Basic usage with fixed cell size
 * <VirtualGrid
 *   data={items}
 *   columns={5}
 *   height={400}
 *   width={600}
 *   rowHeight={80}
 *   columnWidth={120}
 *   renderCell={(item, rowIndex, colIndex, style) => (
 *     <div key={item.id} style={style}>
 *       Cell {rowIndex},{colIndex}
 *     </div>
 *   )}
 * />
 *
 * // Variable size cells
 * <VirtualGrid
 *   data={items}
 *   columns={5}
 *   height={400}
 *   width={600}
 *   rowHeight={(index) => rowHeights[index]}
 *   columnWidth={(index) => columnWidths[index]}
 *   gap={8}
 *   renderCell={(item, rowIndex, colIndex, style) => (
 *     <div key={item.id} style={style}>
 *       {item.content}
 *     </div>
 *   )}
 * />
 * ```
 */
function VirtualGrid<T>(props: VirtualGridProps<T>) {
  const config = useComponentConfig('virtualGrid');

  const mergedProps = {
    ...config,
    ...props
  };

  return <VirtualGridUI {...mergedProps} />;
}

VirtualGrid.displayName = 'VirtualGrid';

export default VirtualGrid;
