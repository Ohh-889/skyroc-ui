import type { ReactNode } from 'react';
import type {
  DropdownMenuProps as _DropdownMenuProps
} from '@radix-ui/react-dropdown-menu';
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

export type DropdownMenuArrowProps = Omit<MenuArrowProps, 'component'>;

export type DropdownMenuContentProps = Omit<MenuContentProps, 'arrowComponent' | 'component' | 'portalComponent'>;

// Item
export type DropdownMenuItemProps = Omit<MenuItemProps, 'component'>;

// Label
export type DropdownMenuLabelProps = Omit<MenuLabelProps, 'component'>;

export type DropdownMenuOptionProps = Omit<
  MenuOptionProps,
  'component' | 'labelComponent' | 'separatorComponent' | 'subComponent' | 'subContentComponent' | 'subTriggerComponent'
>;

// Indicator
export type DropdownMenuItemIndicatorProps = Omit<MenuItemIndicatorProps, 'component'>;

export type DropdownMenuSeparatorProps = Omit<MenuSeparatorProps, 'component'>;

export type DropdownMenuSubContentProps = Omit<MenuSubContentProps, 'component' | 'groupComponent' | 'portalComponent'>;

export type DropdownMenuSubTriggerProps = Omit<MenuSubTriggerProps, 'component'>;

// Checkbox
export type DropdownMenuCheckboxItemProps = Omit<MenuCheckboxItemProps, 'component' | 'indicatorComponent'>;

export type DropdownMenuCheckboxGroupProps = Omit<
  MenuCheckboxGroupProps,
  'component' | 'groupComponent' | 'labelComponent' | 'separatorComponent'
>;

export interface DropdownMenuCheckboxProps
  extends Omit<DropdownMenuCheckboxGroupProps, 'dir'>,
  StyledComponentProps<_DropdownMenuProps> {
  contentProps?: Omit<DropdownMenuContentProps, 'arrowClass' | 'className'>;
}

// Radio
export type DropdownMenuRadioItemProps = Omit<MenuRadioItemProps, 'component' | 'indicatorComponent'>;

export type DropdownMenuRadioGroupProps = Omit<
  MenuRadioGroupProps,
  'component' | 'groupComponent' | 'labelComponent' | 'separatorComponent'
>;

export interface DropdownMenuRadioProps
  extends Omit<DropdownMenuRadioGroupProps, 'dir'>,
  StyledComponentProps<_DropdownMenuProps> {
  contentProps?: Omit<DropdownMenuContentProps, 'arrowClass' | 'className'>;
}

export interface DropdownMenuProps extends StyledComponentProps<_DropdownMenuProps>, MenuCommonProps {
  children?: ReactNode;
  contentProps?: Omit<DropdownMenuContentProps, 'children'>;
  items: DropdownMenuOptionProps['item'][];
}
