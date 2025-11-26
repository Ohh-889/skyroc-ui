import type { SeparatorProps as _SeparatorProps } from '@radix-ui/react-separator';
import type { StyledComponentProps, ClassValue, SlotProps, ThemeAlign, ThemeOrientation } from '@/types/shared';
import type { DividerBorder, DividerSlots } from './divider-variants';

export interface DividerRootProps extends StyledComponentProps<_SeparatorProps> {
  border?: DividerBorder;
}

export type { DividerBorder };

export interface DividerLabelProps extends StyledComponentProps<React.ComponentProps<'span'>> {
  align?: ThemeAlign;
  orientation?: ThemeOrientation;
}

export type DividerUi = Partial<Record<DividerSlots, ClassValue>>;

export interface DividerProps
  extends DividerRootProps,
  Pick<DividerLabelProps, 'align' | 'orientation' | 'size'>,
  SlotProps {
  classNames?: DividerUi;
}
