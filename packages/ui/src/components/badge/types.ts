import type { StyledComponentProps, ThemeColor } from '@/types/shared';
import type { BadgeShape, BadgeVariant } from './badge-variants';

/**
 * Props for the Badge component.
 * A small, styled label component used to highlight, categorize, or mark items.
 *
 * @example
 * ```jsx
 * <Badge color="primary" variant="solid" shape="pill">
 *   New
 * </Badge>
 * ```
 */
export interface BadgeProps extends StyledComponentProps<React.ComponentProps<'div'>> {
  /**
   * The color theme of the badge (e.g., primary, secondary, destructive, success, etc.).
   */
  color?: ThemeColor;
  /**
   * The shape variant of the badge (e.g., square, rounded, pill).
   */
  shape?: BadgeShape;
  /**
   * The visual style variant of the badge (e.g., solid, outline, subtle, ghost).
   */
  variant?: BadgeVariant;
}

export type { BadgeShape, BadgeVariant };
