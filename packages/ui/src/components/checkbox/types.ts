import type {
  CheckboxIndicatorProps as _CheckboxIndicatorProps,
  CheckboxProps as _CheckboxRootProps
} from '@radix-ui/react-checkbox';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, ThemeColor } from '@/types/shared';
import type { CheckboxSlots } from './checkbox-variants';

export type CheckboxUi = Partial<Record<CheckboxSlots, ClassValue>>;

export interface CheckboxControlProps extends StyledComponentProps<_CheckboxRootProps> {
  color?: ThemeColor;
}

export interface CheckboxIndicatorProps extends StyledComponentProps<_CheckboxIndicatorProps> {}

export interface CheckboxRootProps extends HTMLComponentProps<'div'> {}

export interface CheckboxProps extends CheckboxControlProps {
  classNames?: CheckboxUi;
  forceMountIndicator?: true;
}
