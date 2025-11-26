import type { ReactNode } from 'react';
import type { StyledComponentProps, ClassValue, ThemeSize } from '@/types/shared';
import type { SheetSide } from '../sheet';
import type { LayoutCollapsible, LayoutSide, LayoutSlots, LayoutVariant } from './layout-variants';

export type LayoutMainProps = Pick<StyledComponentProps<'main'>, 'className'> & {
  children?: ReactNode;
  collapsible?: LayoutCollapsible;
  variant?: LayoutVariant;
};

export type LayoutClassNames = Partial<Record<LayoutSlots, ClassValue>>;

export type LayoutHeaderProps = Pick<StyledComponentProps<'header'>, 'className'> & {
  children?: ReactNode;
};

export type LayoutMobileProps = Pick<StyledComponentProps<'div'>, 'className'> & {
  children?: ReactNode;
  rootClassName?: ClassValue;
  side?: SheetSide;
};

export type LayoutRailProps = Pick<StyledComponentProps<'div'>, 'className'> & {
  collapsible?: LayoutCollapsible;
  side?: LayoutSide;
  variant?: LayoutVariant;
};

type LayoutUi = Partial<Record<LayoutSlots, ClassValue>>;

export interface LayoutSidebarChildrenProps {
  collapsed: boolean;
  collapsedWidth?: number;
  size?: ThemeSize;
}

export type LayoutSidebarProps = Pick<StyledComponentProps<'div'>, 'className'> & {
  children?: ReactNode | ((props: LayoutSidebarChildrenProps) => ReactNode);
  collapsible?: LayoutCollapsible;
  side?: LayoutSide;
  size?: ThemeSize;
  ui?: LayoutUi;
  variant?: LayoutVariant;
};

export type LayoutTriggerProps = Omit<StyledComponentProps<React.ComponentPropsWithRef<'button'>>, 'color' | 'size'> & {
  size?: ThemeSize;
};

export interface LayoutRootChildrenProps {
  open: boolean;
}

export type LayoutRootProps = Pick<StyledComponentProps<'div'>, 'className'> & {
  children?: ReactNode | ((props: LayoutRootChildrenProps) => ReactNode);
  /** The width of the sidebar when it's collapsed. */
  collapsedSidebarWidth?: number;
  /** Whether the sidebar is collapsible. */
  collapsible?: LayoutCollapsible;
  /** The default open state of the sidebar. */
  defaultOpen?: boolean;
  /** Callback when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether the sidebar is open. */
  open?: boolean;
  /** The side of the layout. */
  side?: LayoutSide;
  /** The width of the sidebar. */
  sidebarWidth?: number;
  /** The size of the layout. */
  size?: ThemeSize;
  /** The variant of the layout. */
  variant?: LayoutVariant;
};

export type LayoutProps = Omit<LayoutRootProps, 'children'> & {
  children?: ReactNode;
  /** The header content of the layout. */
  header?: ReactNode;
  /** The sidebar content of the layout. */
  sidebar?: ReactNode | ((props: LayoutSidebarChildrenProps) => ReactNode);
  /** The UI of the layout. */
  ui?: LayoutUi;
};

type SidebarState = 'collapsed' | 'expanded';
export interface LayoutContextType {
  collapsedSidebarWidth?: number;
  isMobile: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenMobileChange: (open: boolean) => void;
  open: boolean;
  openMobile: boolean;
  sidebarWidth?: number;
  state: SidebarState;
  toggleSidebar: () => void;
}
