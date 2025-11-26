import type {
  AlertDialogContentProps as _AlertDialogContentProps,
  AlertDialogDescriptionProps as _AlertDialogDescriptionProps,
  AlertDialogOverlayProps as _AlertDialogOverlayProps,
  AlertDialogPortalProps as _AlertDialogPortalProps,
  AlertDialogProps as _AlertDialogProps,
  AlertDialogTitleProps as _AlertDialogTitleProps
} from '@radix-ui/react-alert-dialog';
import type { ClassValue, HTMLComponentProps, StyledComponentProps, ThemeColor } from '@/types/shared';
import type { DialogSlots } from './alert-dialog-variants';

export type AlertDialogClassNames = Partial<Record<DialogSlots, ClassValue>> & {
  icon?: string;
};

export type AlertType = Extract<ThemeColor, 'destructive' | 'info' | 'success' | 'warning'>;

export interface AlertDialogContentProps extends StyledComponentProps<_AlertDialogContentProps> {}

export interface AlertDialogDescriptionProps extends StyledComponentProps<_AlertDialogDescriptionProps> {}

export type AlertDialogFooterProps = HTMLComponentProps<'div'>;

export type AlertDialogHeaderProps = HTMLComponentProps<'div'>;

export interface AlertDialogOverlayProps extends StyledComponentProps<_AlertDialogOverlayProps> {}

export interface AlertDialogTitleProps extends StyledComponentProps<_AlertDialogTitleProps> {}

export type AlertDialogProps = StyledComponentProps<_AlertDialogProps>
  & AlertDialogContentProps
  & _AlertDialogPortalProps & {
    classNames?: AlertDialogClassNames;
    description?: string;
    disabledPortal?: boolean;
    footer?: React.ReactNode;
    forceMountOverlay?: true;
    forceMountPortal?: true;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    trigger?: React.ReactNode;
    type?: AlertType;
  };
