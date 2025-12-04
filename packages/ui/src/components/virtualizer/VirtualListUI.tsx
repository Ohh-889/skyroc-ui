'use client';

import { VirtualList as VirtualListPrimitive } from '@skyroc/virtualizer';
import { cn } from '@/lib/utils';
import { virtualizerVariants } from './virtualizer-variants';
import type { VirtualListProps } from './types';

/**
 * A styled virtual list component for efficiently rendering large lists.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <VirtualList
 *   data={items}
 *   height={400}
 *   itemSize={50}
 *   renderItem={(item, index, style) => (
 *     <div key={item.id} style={style} className="flex items-center px-4 border-b">
 *       {item.name}
 *     </div>
 *   )}
 * />
 *
 * // With custom styling
 * <VirtualList
 *   data={items}
 *   height={400}
 *   itemSize={50}
 *   classNames={{
 *     root: 'border rounded-lg',
 *     item: 'hover:bg-accent'
 *   }}
 *   renderItem={(item, index, style) => (
 *     <div key={item.id} style={style}>
 *       {item.name}
 *     </div>
 *   )}
 * />
 * ```
 */
function VirtualListUI<T>(props: VirtualListProps<T>) {
  const { classNames, ...rest } = props;

  const { root, inner, item } = virtualizerVariants();

  return (
    <VirtualListPrimitive
      className={cn(root(), classNames?.root)}
      innerClassName={cn(inner(), classNames?.inner)}
      {...rest}
    />
  );
}

export default VirtualListUI;
