'use client';

import { useCallback, useMemo, useState } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import CheckboxControl from './CheckboxControl';
import CheckboxIndicator from './CheckboxIndicator';
import { checkboxVariants } from './checkbox-variants';
import { CheckboxGroupProvider } from './CheckboxGroupContext';
import type { CheckboxGroupCardProps } from './types';

const CheckboxGroupCard = (props: CheckboxGroupCardProps) => {
  const {
    checkboxPosition = 'right',
    className,
    classNames,
    color,
    defaultValue,
    disabled,
    items,
    onValueChange,
    orientation = 'horizontal',
    shape = 'rounded',
    size,
    value: controlledValue,
    ...rest
  } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(defaultValue || []);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const variants = useMemo(() => checkboxVariants({ color, orientation, shape, size }), [color, orientation, shape, size]);

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

  const { card, cardContent, groupRoot } = variants;

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

          const checkboxElement = (
            <CheckboxControl
              checked={isChecked}
              className={classNames?.control}
              color={color}
              disabled={isDisabled}
              id={item.id || item.value}
              shape={shape}
              size={size}
              onCheckedChange={(checked) => {
                if (checked !== 'indeterminate') {
                  handleValueChange(item.value, checked);
                }
              }}
            >
              <CheckboxIndicator className={classNames?.indicator}>
                {isChecked ? <Check className="size-full" /> : <Minus className="size-full" />}
              </CheckboxIndicator>
            </CheckboxControl>
          );

          const contentElement = (
            <div className={cn(cardContent(), classNames?.cardContent)}>
              {item.icon ? <span className="text-lg">{item.icon}</span> : null}

              {item.label
                ? (
                  <span className="text-sm leading-none font-medium">
                    {item.label}
                  </span>
                )
                : null}
            </div>
          );

          return (
            <label
              htmlFor={item.id || item.value}
              key={item.value}
              className={cn(
                card(),
                isChecked && 'border-primary bg-primary/5',
                isDisabled && 'cursor-not-allowed opacity-50',
                classNames?.card
              )}
            >
              {checkboxPosition === 'left' && checkboxElement}
              {contentElement}
              {checkboxPosition === 'right' && checkboxElement}
            </label>
          );
        })}
      </div>
    </CheckboxGroupProvider>
  );
};

CheckboxGroupCard.displayName = 'CheckboxGroupCard';

export default CheckboxGroupCard;
