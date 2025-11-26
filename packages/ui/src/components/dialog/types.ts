import type { ComponentType } from 'react';
import type {
  DialogCloseProps as _DialogCloseProps,
  DialogContentProps as _DialogContentProps,
  DialogDescriptionProps as _DialogDescriptionProps,
  DialogOverlayProps as _DialogOverlayProps,

  DialogPortalProps,
  DialogProps as _DialogProps,
  DialogTitleProps as _DialogTitleProps
} from '@radix-ui/react-dialog';
import type { HTMLComponentProps, StyledComponentProps, ClassValue } from '@/types/shared';
import type { DialogSlots } from './dialog-variants';

export type DialogClassNames = Partial<Record<DialogSlots, ClassValue>>;

export interface DialogCloseProps extends StyledComponentProps<_DialogCloseProps> {
  component?: ComponentType<_DialogCloseProps>;
}

export interface DialogContentProps extends StyledComponentProps<_DialogContentProps> {
  component?: ComponentType<_DialogContentProps>;
}

export interface DialogDescriptionProps extends StyledComponentProps<_DialogDescriptionProps> {
  component?: ComponentType<_DialogDescriptionProps>;
}

export interface DialogFooterProps extends HTMLComponentProps<'footer'> {}

export interface DialogHeaderProps extends HTMLComponentProps<'header'> {}

export interface DialogOverlayProps extends StyledComponentProps<_DialogOverlayProps> {
  component?: ComponentType<_DialogOverlayProps>;
}

export interface DialogTitleProps extends StyledComponentProps<_DialogTitleProps> {
  component?: ComponentType<_DialogTitleProps>;
}

export interface DialogProps<T extends DialogContentProps = DialogContentProps> extends StyledComponentProps<_DialogProps> {
  classNames?: DialogClassNames;
  contentComponent?: ComponentType<T>;
  contentProps?: T;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  title?: React.ReactNode;
  trigger?: React.ReactNode;
}

export { DialogPortalProps };
