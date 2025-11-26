import type { ReactNode } from 'react';
import type {
  SelectContentProps as _SelectContentProps,
  SelectItemProps as _SelectItemProps,
  SelectLabelProps as _SelectLabelProps,
  SelectProps as _SelectProps,
  SelectSeparatorProps as _SelectSeparatorProps,
  SelectTriggerProps as _SelectTriggerProps,
  SelectValueProps as _SelectValueProps
} from '@radix-ui/react-select';
import type { StyledComponentProps, ClassValue, SlotProps, ThemeSize } from '@/types/shared';
import type { SelectSlots } from './select-variants';

export type SelectClassNames = Partial<Record<SelectSlots, ClassValue>>;

export interface SelectContentProps extends StyledComponentProps<_SelectContentProps> {
  classNames?: Pick<SelectClassNames, 'content' | 'scrollDownButton' | 'scrollUpButton' | 'viewport'>;
  scrollDownButton?: React.ReactNode;
  scrollUpButton?: React.ReactNode;
}

export interface SelectItemProps extends StyledComponentProps<_SelectItemProps>, SlotProps {
  classNames?: Pick<SelectClassNames, 'item' | 'itemIndicator'>;
  indicatorIcon?: React.ReactNode;
}

export interface SelectLabelProps extends StyledComponentProps<_SelectLabelProps> {}

export interface SelectSeparatorProps extends StyledComponentProps<_SelectSeparatorProps> {}

export interface SelectTriggerProps
  extends StyledComponentProps<_SelectTriggerProps>,
  Pick<_SelectValueProps, 'placeholder'>,
  SlotProps {
  classNames?: Pick<SelectClassNames, 'selectedValue' | 'trigger' | 'triggerIcon'>;
  triggerIcon?: React.ReactNode;
}

export type SelectOptionItemData = Omit<SelectItemProps, 'children'> & {
  label?: ReactNode;
  type?: 'item';
};

export type SelectSeparatorOptionData = SelectSeparatorProps & {
  type: 'separator';
};

export type SelectGroupOptionData = Omit<SelectLabelProps, 'children'> & {
  children: SelectOptionItemData[];
  label?: ReactNode;
  type?: 'group';
};

export type SelectOptionData = SelectOptionItemData | SelectGroupOptionData | SelectSeparatorOptionData;

export interface SelectOptionProps extends Pick<SelectItemProps, 'indicatorIcon'> {
  classNames?: SelectClassNames;
  item: SelectOptionData;
  size?: ThemeSize;
}

export interface SelectProps
  extends StyledComponentProps<Omit<_SelectProps, 'children'>>,
  Pick<SelectItemProps, 'indicatorIcon'> {
  classNames?: SelectClassNames;
  contentProps?: Omit<SelectContentProps, 'children'>;
  items: SelectOptionData[];
  size?: ThemeSize;
  triggerProps?: SelectTriggerProps;
}
