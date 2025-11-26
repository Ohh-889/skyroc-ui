import type { ReactNode } from 'react';
import type {
  RadioGroupIndicatorProps as _RadioGroupIndicatorProps,
  RadioGroupItemProps as _RadioGroupItemProps,
  RadioGroupProps as _RadioGroupProps
} from '@radix-ui/react-radio-group';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, ThemeColor } from '@/types/shared';
import type { RadioSlots } from './radio-variants';

export type RadioClassNames = Partial<Record<RadioSlots, ClassValue>>;

export interface RadioProps extends RadioGroupItemProps {
  classNames?: Pick<RadioClassNames, 'control' | 'indicator' | 'label' | 'root'>;
  label?: ReactNode;
}

export interface RadioGroupProps extends StyledComponentProps<_RadioGroupProps> {
  classNames?: RadioClassNames;
  color?: ThemeColor;
  items: Omit<RadioProps, 'classNames' | 'color' | 'size'>[];
}

export interface RadioGroupItemProps extends StyledComponentProps<_RadioGroupItemProps> {
  color?: ThemeColor;
}

export interface RadioIndicatorProps extends StyledComponentProps<_RadioGroupIndicatorProps> {
  color?: ThemeColor;
}

export interface RadioRootProps extends HTMLComponentProps<'div'> {}
