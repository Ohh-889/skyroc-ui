'use client';

import { useCallback, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import Checkbox from './Checkbox';
import { checkboxVariants } from './checkbox-variants';
import { CheckboxGroupProvider } from './CheckboxGroupContext';
import type { CheckboxGroupProps } from './types';

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    className,
    classNames,
    color,
    defaultValue,
    disabled,
    items,
    onValueChange,
    orientation = 'horizontal',
    size,
    value: controlledValue,
    ...rest
  } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(defaultValue || []);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const variants = useMemo(() => checkboxVariants({ orientation, size }), [orientation, size]);

  const handleValueChange = useCallback(
    (itemValue: string, checked: boolean) => {
      const newValue = checked
        ? [...value, itemValue]
        : value.filter(v => v !== itemValue);

      if (!isControlled) {
        setUncontrolledValue(newValue);
      }

      onValueChange?.(newValue);
    },
    [value, isControlled, onValueChange]
  );

  const contextValue = useMemo(
    () => ({
      color,
      disabled,
      onValueChange: handleValueChange,
      size,
      value,
      variants
    }),
    [color, disabled, handleValueChange, size, value, variants]
  );

  const { groupRoot } = variants;

  return (
    <CheckboxGroupProvider value={contextValue}>
      <div
        className={cn(groupRoot(), className || classNames?.groupRoot)}
        role="group"
        {...rest}
      >
        {items.map((item) => {
          const isChecked = value.includes(item.value);
          const isDisabled = disabled || item.disabled;

          return (
            <Checkbox
              checked={isChecked}
              classNames={classNames}
              color={color}
              disabled={isDisabled}
              id={item.id || item.value}
              key={item.value}
              size={size}
              onCheckedChange={(checked) => {
                if (checked !== 'indeterminate') {
                  handleValueChange(item.value, checked);
                }
              }}
            >
              {item.label}
            </Checkbox>
          );
        })}
      </div>
    </CheckboxGroupProvider>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
