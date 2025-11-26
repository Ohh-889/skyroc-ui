import type { SwitchProps as _SwitchRootProps, SwitchThumbProps as _SwitchThumbProps } from '@radix-ui/react-switch';
import type { StyledComponentProps, ClassValue, ThemeColor } from '@/types/shared';
import type { SwitchSlots } from './switch-varianst';

export interface SwitchRootProps extends StyledComponentProps<_SwitchRootProps> {
  color?: ThemeColor;
}

export type SwitchThumbProps = StyledComponentProps<_SwitchThumbProps>;

export type ClassNames = Partial<Record<SwitchSlots, ClassValue>>;

export interface SwitchProps extends SwitchRootProps {
  classNames?: ClassNames;
}
