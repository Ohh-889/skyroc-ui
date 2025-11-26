import type {
  SliderProps as _SliderProps,
  SliderRangeProps as _SliderRangeProps,
  SliderThumbProps as _SliderThumbProps,
  SliderTrackProps as _SliderTrackProps
} from '@radix-ui/react-slider';
import type { StyledComponentProps, ClassValue, ThemeColor } from '@/types/shared';
import type { SliderSlots } from './slider-variants';

export interface SliderRangeProps extends StyledComponentProps<_SliderRangeProps> {
  color?: ThemeColor;
}

export interface SliderRootProps extends StyledComponentProps<_SliderProps> {}

export interface SliderThumbProps extends StyledComponentProps<_SliderThumbProps> {
  color?: ThemeColor;
}

export interface SliderTrackProps extends StyledComponentProps<_SliderTrackProps> {
  color?: ThemeColor;
}

export type SliderClassNames = Partial<Record<SliderSlots, ClassValue>>;

export interface SliderProps extends Omit<SliderRootProps, 'children'> {
  classNames?: SliderClassNames;
  color?: ThemeColor;
}
