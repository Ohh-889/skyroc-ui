import type { ReactNode } from 'react';
import type { ClassValue } from 'clsx';

// ==================== Theme Types ====================

/** Theme color variants */
export type ThemeColor = 'accent' | 'carbon' | 'destructive' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';

/** Theme size variants */
export type ThemeSize = '2xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs';

/** Theme orientation */
export type ThemeOrientation = 'horizontal' | 'vertical';

/** Theme alignment */
export type ThemeAlign = 'center' | 'end' | 'start';

/** Theme side position */
export type ThemeSide = 'bottom' | 'left' | 'right' | 'top';

// ==================== Component Props ====================

/** Props with className support */
export interface WithClassName {
  /** CSS class name */
  className?: ClassValue;
}

/** HTML element tag types */
export type HTMLTag
  = | 'a'
    | 'button'
    | 'div'
    | 'form'
    | 'h2'
    | 'h3'
    | 'img'
    | 'input'
    | 'label'
    | 'li'
    | 'nav'
    | 'ol'
    | 'p'
    | 'span'
    | 'svg'
    | 'ul'
    | 'template'
    | ({} & string);

/** Props for primitive components with polymorphic rendering */
export interface PrimitiveProps {
  /**
   * The element or component this component should render as. Can be overwritten by `asChild`
   *
   * @defaultValue 'div'
   */
  as?: HTMLTag | ReactNode;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * Read our [Composition](https://www.skyroc-ui.com/docs/guides/composition) guide for more details.
   */
  asChild?: boolean;
}

/** Base props for styled components with className and size support */
export type StyledComponentProps<T> = Omit<T, 'className'> & {
  /** CSS class name */
  className?: ClassValue;
  /** Component size variant */
  size?: ThemeSize;
};

/** Props for components with leading and trailing slots */
export interface SlotProps {
  /** Leading slot content */
  leading?: ReactNode;
  /** Trailing slot content */
  trailing?: ReactNode;
}

/** Props for HTML intrinsic elements with styling support */
export type HTMLComponentProps<T extends keyof React.JSX.IntrinsicElements> = StyledComponentProps<
  React.ComponentPropsWithRef<T>
>;

// ==================== Utility Types ====================

/** Acceptable value types for form inputs and data */
export type AcceptableValue = string | number | bigint | Record<string, any> | null;

/** Re-export ClassValue from clsx */
export type { ClassValue };
