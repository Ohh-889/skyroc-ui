import type { ReactNode } from 'react';
import type {
  ContextMenuProps as _ContextMenuProps
} from '@radix-ui/react-context-menu';
import type { StyledComponentProps } from '@/types/shared';
import type {
  MenuArrowProps,
  MenuCheckboxGroupProps,
  MenuCheckboxItemProps,
  MenuCommonProps,
  MenuContentProps,
  MenuItemIndicatorProps,
  MenuItemProps,
  MenuLabelProps,
  MenuOptionProps,
  MenuRadioGroupProps,
  MenuRadioItemProps,
  MenuSeparatorProps,
  MenuSubContentProps,
  MenuSubTriggerProps
} from '../menu/types';

export type ContextMenuArrowProps = Omit<MenuArrowProps, 'component'>;

export type ContextMenuContentProps = Omit<MenuContentProps, 'arrowComponent' | 'component' | 'portalComponent'>;

// Item
export type ContextMenuItemProps = Omit<MenuItemProps, 'component'>;

// Label
export type ContextMenuLabelProps = Omit<MenuLabelProps, 'component'>;

export type ContextMenuOptionProps = Omit<
  MenuOptionProps,
  'component' | 'labelComponent' | 'separatorComponent' | 'subComponent' | 'subContentComponent' | 'subTriggerComponent'
>;

// Indicator
export type ContextMenuItemIndicatorProps = Omit<MenuItemIndicatorProps, 'component'>;

export type ContextMenuSeparatorProps = Omit<MenuSeparatorProps, 'component'>;

export type ContextMenuSubContentProps = Omit<MenuSubContentProps, 'component' | 'groupComponent' | 'portalComponent'>;

export type ContextMenuSubTriggerProps = Omit<MenuSubTriggerProps, 'component'>;

// Checkbox
export type ContextMenuCheckboxItemProps = Omit<MenuCheckboxItemProps, 'component' | 'indicatorComponent'>;

export type ContextMenuCheckboxGroupProps = Omit<
  MenuCheckboxGroupProps,
  'component' | 'groupComponent' | 'labelComponent' | 'separatorComponent'
>;

export interface ContextMenuCheckboxProps
  extends Omit<ContextMenuCheckboxGroupProps, 'dir'>,
  StyledComponentProps<_ContextMenuProps> {
  contentProps?: Omit<ContextMenuContentProps, 'arrowClass' | 'className'>;
}

// Radio
export type ContextMenuRadioItemProps = Omit<MenuRadioItemProps, 'component' | 'indicatorComponent'>;

export type ContextMenuRadioGroupProps = Omit<
  MenuRadioGroupProps,
  'component' | 'groupComponent' | 'labelComponent' | 'separatorComponent'
>;

export interface ContextMenuRadioProps
  extends Omit<ContextMenuRadioGroupProps, 'dir'>,
  StyledComponentProps<_ContextMenuProps> {
  contentProps?: Omit<ContextMenuContentProps, 'arrowClass' | 'className'>;
}

export interface ContextMenuProps extends StyledComponentProps<_ContextMenuProps>, MenuCommonProps {
  children?: ReactNode;
  contentProps?: Omit<ContextMenuContentProps, 'children'>;
  items: ContextMenuOptionProps['item'][];
}
