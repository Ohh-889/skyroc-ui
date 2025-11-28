import type {
  CheckboxIndicatorProps as _CheckboxIndicatorProps,
  CheckboxProps as _CheckboxRootProps
} from '@radix-ui/react-checkbox';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, ThemeColor } from '@/types/shared';
import type { CheckboxSlots } from './checkbox-variants';

/**
 * Class names for different slots in the checkbox component.
 * Allows customizing styles for specific parts of the checkbox.
 */
export type CheckboxUi = Partial<Record<CheckboxSlots, ClassValue>>;

/**
 * Props for the checkbox control component (the input element).
 * Extends Radix UI checkbox props with theme color support.
 */
export interface CheckboxControlProps extends StyledComponentProps<_CheckboxRootProps> {
  /**
   * Theme color for the checkbox.
   * Determines the visual appearance and styling of the checkbox when checked.
   */
  color?: ThemeColor;
}

/**
 * Props for the checkbox indicator component.
 * The visual element that appears inside the checkbox when it's checked.
 */
export interface CheckboxIndicatorProps extends StyledComponentProps<_CheckboxIndicatorProps> {}

/**
 * Props for the checkbox root/container component.
 * Wrapper div element that contains the checkbox control and indicator.
 */
export interface CheckboxRootProps extends HTMLComponentProps<'div'> {}

/**
 * Props for the main Checkbox component.
 * Combines control properties with UI customization and mounting options.
 *
 * @example
 * ```tsx
 * <Checkbox
 *   color="blue"
 *   classNames={{ control: 'w-5 h-5' }}
 *   forceMountIndicator
 * />
 * ```
 */
export interface CheckboxProps extends CheckboxControlProps {
  /**
   * Custom class names for different checkbox UI slots.
   * Allows styling individual parts of the checkbox component.
   */
  classNames?: CheckboxUi;

  /**
   * Forces the indicator to always be mounted in the DOM.
   * Useful for controlling animations and visibility states.
   */
  forceMountIndicator?: true;
}
