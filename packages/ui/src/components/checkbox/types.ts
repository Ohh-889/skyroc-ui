import type { ReactNode } from 'react';
import type {
  CheckboxIndicatorProps as _CheckboxIndicatorProps,
  CheckboxProps as _CheckboxRootProps,
  CheckedState as _CheckedState
} from '@radix-ui/react-checkbox';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, ThemeColor } from '@/types/shared';
import type { CheckboxSlots, checkboxVariants } from './checkbox-variants';

type CheckboxSize = NonNullable<Parameters<typeof checkboxVariants>[0]>['size'];
type CheckboxOrientation = NonNullable<Parameters<typeof checkboxVariants>[0]>['orientation'];
type CheckboxShape = NonNullable<Parameters<typeof checkboxVariants>[0]>['shape'];

/**
 * Position of the checkbox control relative to the content.
 */
export type CheckboxPosition = 'left' | 'right';

/**
 * Checked state type for checkbox.
 * Can be boolean (checked/unchecked) or 'indeterminate' for partial selection.
 */
export type CheckedState = _CheckedState;

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
  /**
   * Shape of the checkbox control.
   * @default 'square'
   */
  shape?: CheckboxShape;
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
  /**
   * Props for the checkbox root component.
   */
  rootProps?: CheckboxRootProps;
  /**
   * Props for the checkbox control component.
   */
  controlProps?: CheckboxControlProps;
  /**
   * Props for the checkbox indicator component.
   */
  indicatorProps?: CheckboxIndicatorProps;
}

/**
 * Item configuration for CheckboxGroup.
 * Defines the value, label and optional properties for each checkbox in a group.
 */
export interface CheckboxGroupItem {
  /**
   * Unique value identifier for this checkbox item.
   */
  value: string;
  /**
   * Label text or element displayed next to the checkbox.
   */
  label?: ReactNode;
  /**
   * Whether this specific checkbox item is disabled.
   */
  disabled?: boolean;
  /**
   * Optional ID for the checkbox input element.
   */
  id?: string;
}

/**
 * Props for the CheckboxGroup component.
 * Manages a group of related checkboxes with shared state.
 *
 * @example
 * ```tsx
 * <CheckboxGroup
 *   items={[
 *     { value: "option1", label: "Option 1" },
 *     { value: "option2", label: "Option 2" }
 *   ]}
 *   defaultValue={["option1"]}
 *   onValueChange={(values) => console.log(values)}
 * />
 * ```
 */
export interface CheckboxGroupProps extends HTMLComponentProps<'div'> {
  /**
   * Class names for customizing different parts of the checkbox group.
   */
  classNames?: CheckboxUi;
  /**
   * Theme color applied to all checkboxes in the group.
   */
  color?: ThemeColor;
  /**
   * Array of checkbox items to render in the group.
   */
  items: CheckboxGroupItem[];
  /**
   * The controlled selected values.
   */
  value?: string[];
  /**
   * The default selected values (uncontrolled).
   */
  defaultValue?: string[];
  /**
   * Callback fired when the selected values change.
   */
  onValueChange?: (value: string[]) => void;
  /**
   * Whether all checkboxes in the group are disabled.
   */
  disabled?: boolean;
  /**
   * Layout orientation of the checkbox group.
   * @default 'horizontal'
   */
  orientation?: CheckboxOrientation;
  /**
   * Size of all checkboxes in the group.
   */
  size?: CheckboxSize;
}

/**
 * Item configuration for CheckboxGroupCard.
 * Extends CheckboxGroupItem with icon for card display.
 */
export interface CheckboxGroupCardItem extends CheckboxGroupItem {
  /**
   * Icon to display on the card.
   */
  icon?: ReactNode;
}

/**
 * Props for the CheckboxGroupCard component.
 * A card-styled variant of CheckboxGroup with richer content display.
 *
 * @example
 * ```tsx
 * <CheckboxGroupCard
 *   items={[
 *     { value: "apple", label: "Apple", icon: <AppleIcon /> },
 *     { value: "orange", label: "Orange", icon: <OrangeIcon /> }
 *   ]}
 *   shape="rounded"
 *   checkboxPosition="right"
 * />
 * ```
 */
export interface CheckboxGroupCardProps extends Omit<CheckboxGroupProps, 'items'> {
  /**
   * Array of card items to render, with icon support.
   */
  items: CheckboxGroupCardItem[];
  /**
   * Shape of the checkbox control.
   * @default 'rounded'
   */
  shape?: CheckboxShape;
  /**
   * Position of the checkbox relative to the content.
   * @default 'right'
   */
  checkboxPosition?: CheckboxPosition;
}

/**
 * Props for the CheckboxCard component.
 * A single card-styled checkbox with icon, label and description support.
 *
 * @example
 * ```tsx
 * <CheckboxCard
 *   icon="lucide:swatch-book"
 *   label="Label"
 *   description="This is a description"
 *   checkboxPosition="right"
 * />
 * ```
 */
export interface CheckboxCardProps extends CheckboxControlProps {
  /**
   * Custom class names for different checkbox card UI slots.
   */
  classNames?: CheckboxUi;
  /**
   * Icon name or ReactNode to display on the card.
   */
  icon?: ReactNode;
  /**
   * Label text or element displayed on the card.
   */
  label?: ReactNode;
  /**
   * Description text displayed below the label.
   */
  description?: ReactNode;
  /**
   * Forces the indicator to always be mounted in the DOM.
   */
  forceMountIndicator?: true;
  /**
   * Position of the checkbox relative to the content.
   * @default 'left'
   */
  checkboxPosition?: CheckboxPosition;
}
