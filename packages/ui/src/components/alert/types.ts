import type { ClassValue, SlotProps, StyledComponentProps, ThemeColor } from '@/types/shared';
import type { AlertSlots, AlertVariant } from './alert-variants';

export type AlertDescriptionProps = StyledComponentProps<React.ComponentProps<'div'>>;

export interface AlertRootProps extends StyledComponentProps<React.ComponentProps<'div'>> {
  color?: ThemeColor;
  variant?: AlertVariant;
}

export type AlertTitleProps = StyledComponentProps<React.ComponentProps<'div'>>;

export type AlertWrapperProps = StyledComponentProps<React.ComponentProps<'div'>>;

export type AlertIconProps = StyledComponentProps<React.ComponentProps<'div'>> & {
  color?: ThemeColor;
};

export type AlertCloseProps = StyledComponentProps<React.ComponentProps<'button'>>;

export type AlertClassNames = Partial<Record<AlertSlots, ClassValue>>;

export interface AlertProps extends Omit<AlertRootProps, 'title'>, SlotProps {
  classNames?: AlertClassNames;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
}

export type { AlertVariant };
