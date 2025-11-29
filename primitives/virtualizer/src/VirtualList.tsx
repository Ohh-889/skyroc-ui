'use client';

import type { CSSProperties, ReactElement } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { VirtualizerReturn, VirtualListProps } from './types';
import { useVirtualizer } from './useVirtualizer';
import { useWindowVirtualizer } from './useWindowVirtualizer';

/**
 * A headless virtual list component that efficiently renders large lists
 * by only rendering visible items.
 *
 * @example
 * ```tsx
 * // Basic usage with fixed item height
 * <VirtualList
 *   data={items}
 *   height={400}
 *   itemSize={50}
 *   renderItem={(item, index, style) => (
 *     <div style={style}>
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
 *     <div style={style}>
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
 *     <div style={style}>
 *       {item.name}
 *     </div>
 *   )}
 * />
 * ```
 */
function VirtualListInner<T>(
  props: VirtualListProps<T>,
  ref: React.ForwardedRef<VirtualizerReturn<Element | Window> | null>
): ReactElement {
  const {
    data,
    height,
    width,
    itemSize,
    renderItem,
    className,
    style,
    innerClassName,
    overscan = 5,
    horizontal = false,
    gap = 0,
    lanes,
    useWindowScroll = false
  } = props;

  const parentRef = useRef<HTMLDivElement>(null);

  // Use window virtualizer or element virtualizer based on prop
  const elementVirtualizer = useVirtualizer({
    parentRef,
    count: data.length,
    estimateSize: itemSize,
    overscan,
    horizontal,
    gap,
    lanes
  });

  const windowVirtualizer = useWindowVirtualizer({
    count: data.length,
    estimateSize: itemSize,
    overscan,
    horizontal,
    gap,
    lanes
  });

  const virtualizer = useWindowScroll ? windowVirtualizer : elementVirtualizer;

  // Expose virtualizer methods via ref
  useImperativeHandle(ref, () => virtualizer as VirtualizerReturn<Element | Window>, [virtualizer]);

  const { virtualItems, totalSize } = virtualizer;

  const containerStyle: CSSProperties = {
    height: horizontal ? height : height ?? '100%',
    width: horizontal ? (width ?? '100%') : width,
    overflow: useWindowScroll ? 'visible' : 'auto',
    ...style
  };

  const innerStyle: CSSProperties = horizontal
    ? {
        width: totalSize,
        height: '100%',
        position: 'relative'
      }
    : {
        height: totalSize,
        width: '100%',
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
        {virtualItems.map((virtualItem) => {
          const item = data[virtualItem.index];
          const itemStyle: CSSProperties = horizontal
            ? {
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: virtualItem.size,
                transform: `translateX(${virtualItem.start}px)`
              }
            : {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`
              };

          return renderItem(item, virtualItem.index, itemStyle);
        })}
      </div>
    </div>
  );
}

export const VirtualList = forwardRef(VirtualListInner) as <T>(
  props: VirtualListProps<T> & { ref?: React.ForwardedRef<VirtualizerReturn<Element | Window> | null> }
) => ReactElement;

