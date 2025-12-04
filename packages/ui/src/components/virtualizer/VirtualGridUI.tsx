'use client';

import { VirtualGrid as VirtualGridPrimitive } from '@skyroc/virtualizer';
import { cn } from '@/lib/utils';
import { virtualizerVariants } from './virtualizer-variants';
import type { VirtualGridProps } from './types';

/**
 * A styled virtual grid component for efficiently rendering large grids.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <VirtualGrid
 *   data={items}
 *   columns={5}
 *   height={400}
 *   width={600}
 *   rowHeight={80}
 *   columnWidth={120}
 *   renderCell={(item, rowIndex, colIndex, style) => (
 *     <div key={item.id} style={style} className="flex items-center justify-center border">
 *       {item.content}
 *     </div>
 *   )}
 * />
 *
 * // With custom styling
 * <VirtualGrid
 *   data={items}
 *   columns={5}
 *   height={400}
 *   width={600}
 *   rowHeight={80}
 *   columnWidth={120}
 *   classNames={{
 *     root: 'border rounded-lg',
 *   }}
 *   renderCell={(item, rowIndex, colIndex, style) => (
 *     <div key={item.id} style={style}>
 *       {item.content}
 *     </div>
 *   )}
 * />
 * ```
 */
function VirtualGridUI<T>(props: VirtualGridProps<T>) {
  const { classNames, ...rest } = props;

  const { root, inner } = virtualizerVariants();

  return (
    <VirtualGridPrimitive
      className={cn(root(), classNames?.root)}
      innerClassName={cn(inner(), classNames?.inner)}
      {...rest}
    />
  );
}

export default VirtualGridUI;
