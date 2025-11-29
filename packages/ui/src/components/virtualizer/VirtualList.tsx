'use client';

import { useComponentConfig } from '../config-provider/context';
import VirtualListUI from './VirtualListUI';
import type { VirtualListProps } from './types';

/**
 * A virtual list component for efficiently rendering large lists.
 * Only renders visible items, providing excellent performance for lists with thousands of items.
 *
 * @example
 * ```tsx
 * // Basic usage with fixed item height
 * <VirtualList
 *   data={items}
 *   height={400}
 *   itemSize={50}
 *   renderItem={(item, index, style) => (
 *     <div key={item.id} style={style}>
 *       {item.name}
 *     </div>
 *   )}
 * />
 *
 * // Variable height items
 * <VirtualList
 *   data={items}
 *   height={400}
 *   itemSize={(index) => items[index].height}
 *   renderItem={(item, index, style) => (
 *     <div key={item.id} style={style}>
 *       {item.content}
 *     </div>
 *   )}
 * />
 *
 * // Horizontal list
 * <VirtualList
 *   data={items}
 *   width={800}
 *   height={100}
 *   horizontal
 *   itemSize={150}
 *   renderItem={(item, index, style) => (
 *     <div key={item.id} style={style}>
 *       {item.name}
 *     </div>
 *   )}
 * />
 * ```
 */
function VirtualList<T>(props: VirtualListProps<T>) {
  const config = useComponentConfig('virtualList');

  const mergedProps = {
    ...config,
    ...props
  };

  return <VirtualListUI {...mergedProps} />;
}

VirtualList.displayName = 'VirtualList';

export default VirtualList;

