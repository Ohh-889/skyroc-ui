import type {
  TooltipArrowProps as _TooltipArrowProps,
  TooltipContentProps as _TooltipContentProps,
  TooltipProps as _TooltipProps
} from '@radix-ui/react-tooltip';
import type { StyledComponentProps, ClassValue, ThemeAlign, ThemeSide } from '@/types/shared';
import type { TooltipSlots } from './tooltip-variants';

export type TooltipClassNames = Partial<Record<TooltipSlots, ClassValue>>;

export interface TooltipContentProps extends StyledComponentProps<_TooltipContentProps> {}

export interface TooltipArrowProps extends StyledComponentProps<_TooltipArrowProps> {}

export interface TooltipProps extends StyledComponentProps<_TooltipProps> {
  classNames?: TooltipClassNames;
  content: React.ReactNode;
  contentProps?: Omit<TooltipContentProps, 'children' | 'className'>;
  showArrow?: boolean;
}

export type TooltipSide = ThemeSide;

export type TooltipAlign = ThemeAlign;
