import type { ComponentType, ElementType, ReactNode } from 'react';
import type {
  MenuArrowProps as _MenuArrowProps,
  MenuCheckboxItemProps as _MenuCheckboxItemProps,
  MenuContentProps as _MenuContentProps,
  MenuGroupProps as _MenuGroupProps,
  MenuItemIndicatorProps as _MenuItemIndicatorProps,
  MenuItemProps as _MenuItemProps,
  MenuLabelProps as _MenuLabelProps,
  MenuRadioGroupProps as _MenuRadioGroupProps,
  MenuRadioItemProps as _MenuRadioItemProps,
  MenuSeparatorProps as _MenuSeparatorProps,
  MenuSubContentProps as _MenuSubContentProps,
  MenuSubTriggerProps as _MenuSubTriggerProps
} from '@radix-ui/react-menu';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, ThemeSize } from '@/types/shared';
import type { MenuSlots } from './menu-variants';

export type MenuClassNames = Partial<Record<MenuSlots, ClassValue>>;

// MenuArrow
export type MenuArrowProps = StyledComponentProps<_MenuArrowProps> & {
  component?: ElementType<MenuArrowProps>;
};

export type MenuCheckboxGroupItemProps
  = | MenuLabelOption
    | MenuSeparatorOption
    | (Omit<MenuCheckboxItemProps, 'children'> & {
      label?: ReactNode;
    });

export interface MenuCheckboxGroupProps extends MenuCommonProps, StyledComponentProps<_MenuGroupProps> {
  checks?: string[];
  component?: ElementType<MenuCheckboxItemProps>;
  groupComponent?: ElementType;
  items: MenuCheckboxGroupItemProps[];
  labelComponent?: ElementType<MenuLabelProps>;
  onChecksChange?: (checks: string[]) => void;
  separatorComponent?: ElementType<MenuSeparatorProps>;
}

export interface MenuCheckboxItemProps extends StyledComponentProps<_MenuCheckboxItemProps> {
  classNames?: Pick<MenuClassNames, 'item' | 'itemIndicator' | 'shortcut'>;
  component?: ElementType<_MenuCheckboxItemProps>;
  indicatorComponent?: ElementType<MenuItemIndicatorProps>;
  indicatorIcon?: ReactNode;
  leading?: ReactNode;
  shortcut?: string | string[];
  trailing?: ReactNode;
}

export type MenuContentProps = StyledComponentProps<_MenuContentProps> & {
  arrowClass?: ClassValue;
  arrowComponent?: ElementType<MenuArrowProps>;
  component?: ElementType<MenuContentProps>;
  portalComponent?: ElementType<MenuContentProps>;
  showArrow?: boolean;
};

// MenuItem
export interface MenuItemProps extends StyledComponentProps<_MenuItemProps> {
  classNames?: Pick<MenuClassNames, 'item' | 'shortcut'>;
  component?: ComponentType<_MenuItemProps>;
  leading?: ReactNode;
  shortcut?: string | string[];
  trailing?: ReactNode;
}

export interface MenuItemIndicatorProps extends StyledComponentProps<_MenuItemIndicatorProps> {
  component?: ComponentType<_MenuItemIndicatorProps>;
}

// MenuLabel
export interface MenuLabelProps extends StyledComponentProps<_MenuLabelProps> {
  classNames?: Pick<MenuClassNames, 'itemIcon' | 'label'>;
  component?: ElementType<MenuLabelProps>;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export interface MenuOption extends Omit<MenuItemProps, 'children'> {
  label?: ReactNode;
  type?: 'item';
}

export interface MenuLabelOption extends Omit<MenuLabelProps, 'children'> {
  label?: ReactNode;
  type: 'label';
}

export interface MenuSeparatorOption extends Omit<MenuSeparatorProps, 'children'> {
  type: 'separator';
}

export interface MenuSubOption extends Omit<MenuSubTriggerProps, 'children'> {
  children: MenuOptionData[];
  label?: ReactNode;
  subContentProps?: _MenuSubContentProps;
  subProps?: _MenuSubTriggerProps;
  type: 'sub';
}

// MenuOptionData
export type MenuOptionData = MenuOption | MenuLabelOption | MenuSeparatorOption | MenuSubOption;

export interface MenuCommonProps {
  classNames?: MenuClassNames;
  size?: ThemeSize;
}

export interface MenuOptionProps extends MenuCommonProps {
  component?: ElementType<MenuItemProps>;
  item: MenuOptionData;
  labelComponent?: ElementType<MenuLabelProps>;
  separatorComponent?: ElementType<MenuSeparatorProps>;
  subComponent?: ElementType<MenuSubTriggerProps>;
  subContentComponent?: ElementType<MenuSubContentProps>;
  subTriggerComponent?: ElementType<MenuSubTriggerProps>;
}

// MenuSeparator
export type MenuSeparatorProps = StyledComponentProps<_MenuSeparatorProps> & {
  component?: ElementType<MenuSeparatorProps>;
};

// MenuShortcut
export type MenuShortcutProps = HTMLComponentProps<'div'> & {
  value?: string | string[];
};

// MenuSubContent
export type MenuSubContentProps = StyledComponentProps<_MenuSubContentProps> & {
  component?: ElementType<MenuSubContentProps>;
  groupComponent?: ElementType<MenuSubContentProps>;
  portalComponent?: ElementType<MenuSubContentProps>;
};

// MenuSubTrigger
export interface MenuSubTriggerProps extends StyledComponentProps<_MenuSubTriggerProps> {
  classNames?: Pick<MenuClassNames, 'subTriggerIcon'>;
  component?: ElementType<MenuSubTriggerProps>;
  leading?: ReactNode;
  trailing?: ReactNode;
  triggerIcon?: ReactNode;
}

export interface MenuRadioItemProps extends StyledComponentProps<_MenuRadioItemProps> {
  classNames?: Pick<MenuClassNames, 'item' | 'itemIndicator' | 'radioIndicatorIcon' | 'shortcut'>;
  component?: ElementType<_MenuRadioItemProps>;
  indicatorComponent?: ElementType<MenuItemIndicatorProps>;
  indicatorIcon?: ReactNode;
  leading?: ReactNode;
  shortcut?: string | string[];
  trailing?: ReactNode;
  type?: 'item';
}

export type MenuRadioItemOptionProps
  = | MenuLabelOption
    | MenuSeparatorOption
    | (Omit<MenuRadioItemProps, 'children'> & {
      label?: ReactNode;
    });

export interface MenuRadioGroupProps extends MenuCommonProps, StyledComponentProps<_MenuRadioGroupProps> {
  component?: ElementType<MenuRadioItemProps>;
  groupComponent?: ElementType;
  items: MenuRadioItemOptionProps[];
  labelComponent?: ElementType<MenuLabelProps>;
  separatorComponent?: ElementType<MenuSeparatorProps>;
}
