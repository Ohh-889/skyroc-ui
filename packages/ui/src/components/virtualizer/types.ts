import type {
  UseVirtualizerOptions as BaseUseVirtualizerOptions,
  UseWindowVirtualizerOptions as BaseUseWindowVirtualizerOptions,
  VirtualGridProps as BaseVirtualGridProps,
  VirtualizerReturn as BaseVirtualizerReturn,
  VirtualItem,
  VirtualListProps as BaseVirtualListProps
} from '@skyroc/virtualizer';
import type { ClassValue } from '@/types/shared';

/**
 * Slot names for the Virtualizer component
 */
export type VirtualizerSlots = 'root' | 'inner' | 'item';

/**
 * Class names for different slots in the virtualizer component
 */
export type VirtualizerClassNames = Partial<Record<VirtualizerSlots, ClassValue>>;

/**
 * Props for the VirtualList UI component
 */
export interface VirtualListProps<T> extends Omit<BaseVirtualListProps<T>, 'className' | 'innerClassName'> {
  /**
   * Custom class names for component slots
   */
  classNames?: VirtualizerClassNames;
}

/**
 * Props for the VirtualGrid UI component
 */
export interface VirtualGridProps<T> extends Omit<BaseVirtualGridProps<T>, 'className' | 'innerClassName'> {
  /**
   * Custom class names for component slots
   */
  classNames?: VirtualizerClassNames;
}

/**
 * Re-export types from @skyroc/virtualizer for convenience
 */
export type {
  BaseUseVirtualizerOptions as UseVirtualizerOptions,
  BaseUseWindowVirtualizerOptions as UseWindowVirtualizerOptions,
  BaseVirtualizerReturn as VirtualizerReturn,
  VirtualItem
};
