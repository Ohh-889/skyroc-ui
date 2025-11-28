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

/**
 * Class names for different slots in the drawer component.
 * Allows customizing styles for drawer-specific and dialog-shared parts.
 */
export type DrawerClassNames = Partial<Record<DrawerSlots | DialogSlots, ClassValue>>;

/**
 * Props for the drawer content component.
 * Wraps the main content area of the drawer with styling and slot customization.
 *
 * @example
 * ```tsx
 * <Drawer.Content
 *   contentProps={{
 *     classNames: {
 *       content: 'custom-content-class',
 *       knob: 'custom-knob-class'
 *     }
 *   }}
 * >
 *   Content here
 * </Drawer.Content>
 * ```
 */
export type DrawerContentProps = StyledComponentProps<ContentProps> & {
  /**
   * Class names for customizing specific parts of the drawer content area.
   * Includes content, contentBody, knob, and overlay styling slots.
   */
  classNames?: Pick<DrawerClassNames, 'content' | 'contentBody' | 'knob' | 'overlay'>;
};

/**
 * Props for the drawer content body component.
 * Standard div element props for the inner content wrapper.
 */
export type DrawerContentBodyProps = HTMLComponentProps<'div'>;

/**
 * Props for the drawer footer component.
 * Standard div element props for the footer section of the drawer.
 */
export type DrawerFooterProps = HTMLComponentProps<'div'>;

/**
 * Props for the drawer knob component.
 * The draggable indicator typically shown at the top of mobile drawer implementations.
 */
export type DrawerKnobProps = HTMLComponentProps<'div'>;

/**
 * Props for the drawer overlay component.
 * The backdrop that appears behind the drawer when it's open.
 */
export type DrawerOverlayProps = Omit<DialogOverlayProps, 'component'>;

/**
 * Props for the drawer header component.
 * Container for the drawer's header content, typically including title and close button.
 */
export type DrawerHeaderProps = DialogHeaderProps;

/**
 * Props for the drawer description component.
 * Accessible description text for the drawer content.
 */
export type DrawerDescriptionProps = Omit<DialogDescriptionProps, 'component'>;

/**
 * Props for the drawer title component.
 * The main heading/title displayed in the drawer header.
 */
export type DrawerTitleProps = Omit<DialogTitleProps, 'component'>;

/**
 * Props for the drawer close button component.
 * Button trigger to dismiss and close the drawer.
 */
export type DrawerCloseProps = Omit<DialogCloseProps, 'component'>;

/**
 * Props for the main Drawer component.
 * A slide-out panel component with header, content, footer, and overlay.
 *
 * @example
 * ```tsx
 * <Drawer
 *   trigger={<button>Open Drawer</button>}
 *   title="Settings"
 *   description="Manage your preferences"
 *   footer={<button>Save</button>}
 *   showClose
 * >
 *   Drawer content goes here
 * </Drawer>
 * ```
 */
export type DrawerProps = DialogProps & {
  /**
   * Class names for customizing different parts of the drawer component.
   */
  classNames?: DrawerClassNames;
  /**
   * Props to customize the content area of the drawer.
   */
  contentProps?: DrawerContentProps;
  /**
   * Accessible description text for the drawer.
   * Useful for screen readers and accessibility.
   */
  description?: React.ReactNode;
  /**
   * Content to display in the drawer footer section.
   * Typically used for action buttons like Save/Cancel.
   */
  footer?: React.ReactNode;
  /**
   * Whether to show the close button in the drawer header.
   * Defaults to false.
   */
  showClose?: boolean;
  /**
   * Size variant for the drawer (sm, md, lg, etc).
   * Controls the width/dimensions of the drawer panel.
   */
  size?: ThemeSize;
  /**
   * Title text displayed in the drawer header.
   */
  title?: React.ReactNode;
  /**
   * Element that triggers the opening of the drawer.
   * Usually a button or interactive element.
   */
  trigger?: React.ReactNode;
};
