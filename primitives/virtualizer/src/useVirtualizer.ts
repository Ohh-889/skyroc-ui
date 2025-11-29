'use client';

import { useVirtualizer as useTanStackVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useMemo } from 'react';
import type { UseVirtualizerOptions, VirtualizerReturn } from './types';

/**
 * Hook for virtualizing content within a scroll container element.
 * Wraps TanStack Virtual's useVirtualizer with a simplified API.
 *
 * @example
 * ```tsx
 * const parentRef = useRef<HTMLDivElement>(null);
 *
 * const { virtualItems, totalSize, scrollToIndex } = useVirtualizer({
 *   parentRef,
 *   count: 10000,
 *   estimateSize: 50,
 *   overscan: 5,
 * });
 *
 * return (
 *   <div ref={parentRef} style={{ height: 400, overflow: 'auto' }}>
 *     <div style={{ height: totalSize, position: 'relative' }}>
 *       {virtualItems.map((item) => (
 *         <div
 *           key={item.index}
 *           style={{
 *             position: 'absolute',
 *             top: 0,
 *             left: 0,
 *             width: '100%',
 *             height: item.size,
 *             transform: `translateY(${item.start}px)`,
 *           }}
 *         >
 *           Row {item.index}
 *         </div>
 *       ))}
 *     </div>
 *   </div>
 * );
 * ```
 */
export function useVirtualizer(
  options: UseVirtualizerOptions
): VirtualizerReturn<Element> {
  const {
    parentRef,
    count,
    estimateSize,
    overscan = 5,
    horizontal = false,
    gap = 0,
    lanes,
    initialOffset,
    onScroll
  } = options;

  const getEstimateSize = useCallback(
    (index: number) => {
      if (typeof estimateSize === 'function') {
        return estimateSize(index);
      }

      return estimateSize;
    },
    [estimateSize]
  );

  const virtualizer = useTanStackVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: getEstimateSize,
    overscan,
    horizontal,
    gap,
    lanes,
    initialOffset,
    onChange: onScroll
      ? (instance) => {
          onScroll(instance.scrollOffset ?? 0);
        }
      : undefined
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  const scrollToIndex = useCallback(
    (index: number, opts?: { align?: 'start' | 'center' | 'end' | 'auto' }) => {
      virtualizer.scrollToIndex(index, opts);
    },
    [virtualizer]
  );

  const scrollToOffset = useCallback(
    (offset: number) => {
      virtualizer.scrollToOffset(offset);
    },
    [virtualizer]
  );

  const measureElement = useCallback(
    (element: Element | null) => {
      if (element) {
        virtualizer.measureElement(element);
      }
    },
    [virtualizer]
  );

  const getScrollElement = useCallback(() => {
    return parentRef.current;
  }, [parentRef]);

  return useMemo(
    () => ({
      virtualizer,
      virtualItems,
      totalSize,
      scrollToIndex,
      scrollToOffset,
      measureElement,
      getScrollElement
    }),
    [
      virtualizer,
      virtualItems,
      totalSize,
      scrollToIndex,
      scrollToOffset,
      measureElement,
      getScrollElement
    ]
  );
}

