import type { ContentProps, DialogProps } from 'vaul';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, ThemeSize } from '@/types/shared';
import type {
  DialogCloseProps,
  DialogDescriptionProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogTitleProps
} from '../dialog';
import type { DialogSlots } from '../dialog/dialog-variants';
import type { DrawerSlots } from './drawer-variants';

export type DrawerClassNames = Partial<Record<DrawerSlots | DialogSlots, ClassValue>>;

export type DrawerContentProps = StyledComponentProps<ContentProps> & {
  classNames?: Pick<DrawerClassNames, 'content' | 'contentBody' | 'knob' | 'overlay'>;
};

export type DrawerContentBodyProps = HTMLComponentProps<'div'>;

export type DrawerFooterProps = HTMLComponentProps<'div'>;

export type DrawerKnobProps = HTMLComponentProps<'div'>;

export type DrawerOverlayProps = Omit<DialogOverlayProps, 'component'>;

export type DrawerHeaderProps = DialogHeaderProps;

export type DrawerDescriptionProps = Omit<DialogDescriptionProps, 'component'>;

export type DrawerTitleProps = Omit<DialogTitleProps, 'component'>;

export type DrawerCloseProps = Omit<DialogCloseProps, 'component'>;

export type DrawerProps = DialogProps & {
  classNames?: DrawerClassNames;
  contentProps?: DrawerContentProps;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  showClose?: boolean;
  size?: ThemeSize;
  title?: React.ReactNode;
  trigger?: React.ReactNode;
};
