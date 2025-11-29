import type { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import type { CSSProperties, ReactNode, RefObject } from 'react';

/**
 * Base options for virtualizer
 */
export interface VirtualizerBaseOptions {
  /**
   * Total count of items to virtualize
   */
  count: number;
  /**
   * Function to estimate the size of each item
   * Can be a number for fixed size or a function for variable sizes
   */
  estimateSize: number | ((index: number) => number);
  /**
   * Number of items to render outside of the visible area
   * @default 5
   */
  overscan?: number;
  /**
   * Whether to enable horizontal scrolling
   * @default false
   */
  horizontal?: boolean;
  /**
   * Gap between items
   * @default 0
   */
  gap?: number;
  /**
   * Number of lanes for masonry layout
   */
  lanes?: number;
  /**
   * Initial scroll offset
   */
  initialOffset?: number;
  /**
   * Callback when scroll position changes
   */
  onScroll?: (offset: number) => void;
}

/**
 * Options for useVirtualizer hook
 */
export interface UseVirtualizerOptions extends VirtualizerBaseOptions {
  /**
   * Reference to the scroll container element
   */
  parentRef: RefObject<HTMLElement | null>;
}

/**
 * Options for useWindowVirtualizer hook
 */
export interface UseWindowVirtualizerOptions extends VirtualizerBaseOptions {
  /**
   * Scroll margin for window virtualizer
   */
  scrollMargin?: number;
}

/**
 * Return type for virtualizer hooks
 */
export interface VirtualizerReturn<TScrollElement extends Element | Window> {
  /**
   * The virtualizer instance from TanStack Virtual
   */
  virtualizer: Virtualizer<TScrollElement, Element>;
  /**
   * Virtual items to render
   */
  virtualItems: VirtualItem[];
  /**
   * Total size of all items
   */
  totalSize: number;
  /**
   * Scroll to a specific index
   */
  scrollToIndex: (index: number, options?: { align?: 'start' | 'center' | 'end' | 'auto' }) => void;
  /**
   * Scroll to a specific offset
   */
  scrollToOffset: (offset: number) => void;
  /**
   * Measure element at index
   */
  measureElement: (element: Element | null) => void;
  /**
   * Get scroll element
   */
  getScrollElement: () => TScrollElement | null;
}

/**
 * Props for VirtualList component
 */
export interface VirtualListProps<T> extends Omit<VirtualizerBaseOptions, 'count' | 'estimateSize'> {
  /**
   * Data array to virtualize
   */
  data: T[];
  /**
   * Height of the container (for vertical lists)
   */
  height?: number | string;
  /**
   * Width of the container (for horizontal lists)
   */
  width?: number | string;
  /**
   * Estimated item size
   */
  itemSize: number | ((index: number) => number);
  /**
   * Render function for each item
   */
  renderItem: (item: T, index: number, style: CSSProperties) => ReactNode;
  /**
   * Class name for the scroll container
   */
  className?: string;
  /**
   * Style for the scroll container
   */
  style?: CSSProperties;
  /**
   * Class name for the inner container
   */
  innerClassName?: string;
  /**
   * Whether to render as window scroller
   * @default false
   */
  useWindowScroll?: boolean;
  /**
   * Reference to expose virtualizer methods
   */
  virtualizerRef?: RefObject<VirtualizerReturn<Element | Window> | null>;
}

/**
 * Props for VirtualGrid component
 */
export interface VirtualGridProps<T> {
  /**
   * Data array to virtualize (2D array or flat array with columns count)
   */
  data: T[];
  /**
   * Number of columns
   */
  columns: number;
  /**
   * Height of the container
   */
  height: number | string;
  /**
   * Width of the container
   */
  width: number | string;
  /**
   * Row height
   */
  rowHeight: number | ((index: number) => number);
  /**
   * Column width
   */
  columnWidth: number | ((index: number) => number);
  /**
   * Gap between cells
   */
  gap?: number;
  /**
   * Number of rows/columns to render outside visible area
   */
  overscan?: number;
  /**
   * Render function for each cell
   */
  renderCell: (
    item: T,
    rowIndex: number,
    columnIndex: number,
    style: CSSProperties
  ) => ReactNode;
  /**
   * Class name for the scroll container
   */
  className?: string;
  /**
   * Style for the scroll container
   */
  style?: CSSProperties;
  /**
   * Class name for the inner container
   */
  innerClassName?: string;
}

export type { VirtualItem, Virtualizer };

