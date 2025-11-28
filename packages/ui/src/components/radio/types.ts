import type { ReactNode } from 'react';
import type {
  RadioGroupIndicatorProps as _RadioGroupIndicatorProps,
  RadioGroupItemProps as _RadioGroupItemProps,
  RadioGroupProps as _RadioGroupProps
} from '@radix-ui/react-radio-group';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, ThemeColor } from '@/types/shared';
import type { RadioSlots } from './radio-variants';

/**
 * Class names for different slots in the radio component.
 * Allows customizing styles for specific parts of the radio button and group.
 */
export type RadioClassNames = Partial<Record<RadioSlots, ClassValue>>;

/**
 * Props for the individual radio button component.
 * Extends the base radio group item with additional styling and label support.
 *
 * @example
 * ```tsx
 * <Radio value="option1" label="Option 1" />
 * ```
 */
export interface RadioProps extends RadioGroupItemProps {
  /**
   * Class names for customizing specific parts of the radio button
   * (control, indicator, label, and root container).
   */
  classNames?: Pick<RadioClassNames, 'control' | 'indicator' | 'label' | 'root'>;
  /**
   * Label text or element displayed next to the radio button.
   */
  label?: ReactNode;
}

/**
 * Props for the radio group component containing multiple radio options.
 * Manages the group selection state and renders multiple radio items.
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   items={[
 *     { value: "option1", label: "Option 1" },
 *     { value: "option2", label: "Option 2" }
 *   ]}
 *   defaultValue="option1"
 * />
 * ```
 */
export interface RadioGroupProps extends StyledComponentProps<_RadioGroupProps> {
  /**
   * Class names for customizing different parts of the radio group and its items.
   */
  classNames?: RadioClassNames;
  /**
   * Theme color applied to all radio buttons in the group.
   * Affects the radio control and indicator colors.
   */
  color?: ThemeColor;
  /**
   * Array of radio items to render in the group.
   * Each item configuration is passed to individual Radio components.
   */
  items: Omit<RadioProps, 'classNames' | 'color' | 'size'>[];
}

/**
 * Props for the radio group item component.
 * Represents a single selectable radio button within a group.
 */
export interface RadioGroupItemProps extends StyledComponentProps<_RadioGroupItemProps> {
  /**
   * Theme color for this specific radio item.
   * Overrides the group-level color if specified.
   */
  color?: ThemeColor;
}

/**
 * Props for the radio indicator component.
 * The visual indicator element shown inside the radio control when selected.
 */
export interface RadioIndicatorProps extends StyledComponentProps<_RadioGroupIndicatorProps> {
  /**
   * Theme color for the radio indicator element.
   * Determines the fill color of the indicator dot.
   */
  color?: ThemeColor;
}

/**
 * Props for the radio root container component.
 * Provides a styled div wrapper for radio buttons with custom HTML attributes.
 */
export interface RadioRootProps extends HTMLComponentProps<'div'> {}
