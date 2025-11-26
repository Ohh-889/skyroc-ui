import type { ProgressProps as _ProgressProps } from '@radix-ui/react-progress';
import type { StyledComponentProps, ClassValue, ThemeColor } from '@/types/shared';
import type { ProgressSlots } from './progress-variants';

export type ProgressClassNames = Partial<Record<ProgressSlots, ClassValue>>;

export interface ProgressProps extends StyledComponentProps<Omit<_ProgressProps, 'children'>> {
  classNames?: ProgressClassNames;
  color?: ThemeColor;
}
