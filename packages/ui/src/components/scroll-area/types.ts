import type {
  ScrollAreaProps as _ScrollAreaProps,
  ScrollAreaScrollbarProps as _ScrollAreaScrollbarProps,
  ScrollAreaThumbProps as _ScrollAreaThumbProps,
  ScrollAreaViewportProps as _ScrollAreaViewportProps
} from '@radix-ui/react-scroll-area';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { ScrollAreaSlots } from './scroll-area-variants';

export type ScrollAreaUi = Partial<Record<ScrollAreaSlots, ClassValue>>;

export interface ScrollAreaRootProps extends StyledComponentProps<_ScrollAreaProps> {}

export interface ScrollAreaScrollbarProps extends StyledComponentProps<_ScrollAreaScrollbarProps> {}

export interface ScrollAreaThumbProps extends StyledComponentProps<_ScrollAreaThumbProps> {}

export interface ScrollAreaViewportProps extends StyledComponentProps<_ScrollAreaViewportProps> {}

export interface ScrollAreaProps
  extends ScrollAreaRootProps,
  Omit<ScrollAreaScrollbarProps, 'dir'>,
  Omit<ScrollAreaViewportProps, 'dir'> {
  classNames?: ScrollAreaUi;
}
