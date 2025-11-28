import type { HTMLComponentProps, ClassValue, ThemeColor, ThemeSize } from '@/types/shared';
import type { ChipPosition, ChipSlots } from './chip-variants';

/**
 * Props for the chip root container component.
 * Serves as the main wrapper for the chip element.
 */
export type ChipRootProps = HTMLComponentProps<'div'>;

/**
 * Props for the chip content component.
 * Controls the styling and appearance of the chip's displayed content.
 */
export interface ChipContentProps extends HTMLComponentProps<'span'> {
  /**
   * Theme color for the chip.
   * Determines the visual styling and background color.
   */
  color?: ThemeColor;

  /**
   * Position where the chip is placed.
   * Affects the chip's layout and positioning within its container.
   */
  position?: ChipPosition;

  /**
   * Size variant for the chip.
   * Controls the overall dimensions and padding.
   */
  size?: ThemeSize;
}

/**
 * Class names for different slots in the chip component.
 * Allows customizing styles for specific parts of the chip.
 */
export type ChipUi = Partial<Record<ChipSlots, ClassValue>>;

/**
 * Props for the main Chip component.
 * Combines root and content properties with visibility control.
 *
 * @example
 * ```tsx
 * <Chip
 *   color="blue"
 *   size="md"
 *   position="left"
 *   content="Label"
 *   open={true}
 * />
 * ```
 */
export interface ChipProps
  extends Omit<ChipRootProps, 'color' | 'content'>,
  Pick<ChipContentProps, 'color' | 'position' | 'size'> {
  /**
   * Custom class names for different chip UI slots.
   * Allows fine-grained styling of chip components.
   */
  classNames?: ChipUi;

  /**
   * The content to display inside the chip.
   * Can be text, icons, or any React node.
   */
  content?: React.ReactNode;

  /**
   * Controls the visibility/open state of the chip.
   * When true, the chip is displayed; when false, it may be hidden or collapsed.
   */
  open?: boolean;
}

export { ChipPosition };
