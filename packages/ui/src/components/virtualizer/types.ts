import type { ComponentPropsWithoutRef, CSSProperties, ReactNode, Ref } from 'react';
import type { VirtualizerOptions, Virtualizer, PartialKeys, VirtualItem } from '@tanstack/react-virtual';
import type { ClassValue, StyledComponentProps } from '@/types/shared';
import type { VirtualizerSlots } from './virtualizer-variants';

export type VirtualizerClassNames = Partial<Record<VirtualizerSlots, ClassValue>>;

export interface VirtualizerList<TScrollElement extends HTMLDivElement = HTMLDivElement, TItemElement extends Element = Element>extends Virtualizer<TScrollElement, TItemElement> {
  containerRef: TScrollElement;
}

export interface VirtualizerGrid<TScrollElement extends HTMLDivElement = HTMLDivElement, TItemElement extends Element = Element>extends Virtualizer<TScrollElement, TItemElement> {
  containerRef: Ref<TScrollElement>;
  rowVirtualizer: VirtualizerList<TScrollElement, TItemElement>;
  columnVirtualizer: VirtualizerList<TScrollElement, TItemElement>;
}

export type VirtualizerBaseOptions<TScrollElement extends HTMLDivElement = HTMLDivElement, TItemElement extends Element = Element> = PartialKeys<VirtualizerOptions<TScrollElement, TItemElement>, 'observeElementRect' | 'observeElementOffset' | 'scrollToFn'>;

export interface VirtualListItem<T, TScrollElement extends HTMLDivElement = HTMLDivElement, TItemElement extends Element = Element> {
  item: T;
  index: number;
  virtualItem: VirtualItem;
  virtualizer: Virtualizer<TScrollElement, TItemElement>;
}

export interface VirtualizerProps<T, TScrollElement extends HTMLDivElement, TItemElement extends Element> extends Omit<VirtualizerBaseOptions<TScrollElement, TItemElement>, 'count' | 'estimateSize' | 'getScrollElement'> {
  /**
   * Custom class names for component slots
   */
  classNames?: VirtualizerClassNames;
  /**
   * Custom class name for the component
   */
  className?: ClassValue;
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
   * Props for the root <div>
   */
  containerProps?: StyledComponentProps<Omit<ComponentPropsWithoutRef<'div'>, 'style'>>;
  /**
   * Style for the container
   */
  style?: CSSProperties;
  /**
   * Callback when scroll position changes
   */
  onScroll?: (offset: number) => void;
  /**
   * Function to extract the key from the item
   */
  keyExtractor?: keyof T | ((item: T, index: number) => string);
}

export interface VirtualListProps<T, TScrollElement extends HTMLDivElement, TItemElement extends Element> extends VirtualizerProps<T, TScrollElement, TItemElement> {
  /**
   * Whether to use dynamic rendering
   */
  dynamic?: boolean;
  /**
   * Render function for each item
   */
  renderItem: (props: VirtualListItem<T, TScrollElement, TItemElement>) => ReactNode;
  /**
   * Reference to the virtualizer instance
   */
  ref?: Ref<VirtualizerList<TScrollElement, TItemElement> | null>;
  /**
   * Estimated item size
   */
  itemSize: number | ((index: number) => number);
}

export interface VirtualGridProps<T, TScrollElement extends HTMLDivElement, TItemElement extends Element> extends VirtualizerProps<T, TScrollElement, TItemElement> {
  /**
   * Render function for each grid cell
   */
  renderCell: (
    item: T,
    rowIndex: number,
    colIndex: number
  ) => ReactNode;
  /**
   * Number of columns per row
   */
  columns: number;

  /**
   * Row height: fixed value or function that calculates height per row
   */
  rowHeight: number | ((rowIndex: number) => number);

  /**
   * Column width: fixed value or function that calculates width per column
   */
  columnWidth: number | ((colIndex: number) => number);

  /**
   * Additional props for the column virtualizer
   */
  columnProps?: Omit<VirtualizerOptions<TScrollElement, TItemElement>, 'count' | 'estimateSize' | 'getScrollElement' | 'horizontal'>;
  /**
   * Reference to the virtualizer instance
   */
  ref?: Ref<VirtualizerGrid<TScrollElement, TItemElement> | null>;
}
