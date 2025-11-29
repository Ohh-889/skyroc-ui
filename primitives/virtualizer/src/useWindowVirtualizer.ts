'use client';

import { useWindowVirtualizer as useTanStackWindowVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useMemo } from 'react';
import type { UseWindowVirtualizerOptions, VirtualizerReturn } from './types';

/**
 * Hook for virtualizing content when the scrollable element is the browser window.
 * Wraps TanStack Virtual's useWindowVirtualizer with a simplified API.
 *
 * @example
 * ```tsx
 * const { virtualItems, totalSize, scrollToIndex } = useWindowVirtualizer({
 *   count: 10000,
 *   estimateSize: 50,
 *   overscan: 5,
 * });
 *
 * return (
 *   <div style={{ height: totalSize, position: 'relative' }}>
 *     {virtualItems.map((item) => (
 *       <div
 *         key={item.index}
 *         style={{
 *           position: 'absolute',
 *           top: 0,
 *           left: 0,
 *           width: '100%',
 *           height: item.size,
 *           transform: `translateY(${item.start}px)`,
 *         }}
 *       >
 *         Row {item.index}
 *       </div>
 *     ))}
 *   </div>
 * );
 * ```
 */
export function useWindowVirtualizer(
  options: UseWindowVirtualizerOptions
): VirtualizerReturn<Window> {
  const {
    count,
    estimateSize,
    overscan = 5,
    horizontal = false,
    gap = 0,
    lanes,
    scrollMargin = 0,
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

  const virtualizer = useTanStackWindowVirtualizer({
    count,
    estimateSize: getEstimateSize,
    overscan,
    horizontal,
    gap,
    lanes,
    scrollMargin,
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
    return typeof window !== 'undefined' ? window : null;
  }, []);

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

