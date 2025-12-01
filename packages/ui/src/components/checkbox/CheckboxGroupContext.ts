'use client';

import { createContext, useContext } from 'react';
import type { ThemeColor } from '@/types/shared';
import type { checkboxVariants } from './checkbox-variants';

type CheckboxVariantsReturn = ReturnType<typeof checkboxVariants>;
type CheckboxSize = NonNullable<Parameters<typeof checkboxVariants>[0]>['size'];

export interface CheckboxGroupContextValue {
  /**
   * The current selected values in the group.
   */
  value: string[];
  /**
   * Callback when a checkbox item is toggled.
   */
  onValueChange: (value: string, checked: boolean) => void;
  /**
   * Whether all checkboxes in the group are disabled.
   */
  disabled?: boolean;
  /**
   * Theme color for all checkboxes in the group.
   */
  color?: ThemeColor;
  /**
   * Size for all checkboxes in the group.
   */
  size?: CheckboxSize;
  /**
   * Variant styles from checkboxVariants.
   */
  variants: CheckboxVariantsReturn;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

export const useCheckboxGroup = () => {
  const context = useContext(CheckboxGroupContext);
  return context;
};

export const CheckboxGroupProvider = CheckboxGroupContext.Provider;
