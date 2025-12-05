'use client';

import { Root } from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';
import { radioVariants } from './radio-variants';
import RadioCard from './RadioCard';
import type { RadioCardGroupProps } from './types';

const RadioCardGroup = (props: RadioCardGroupProps) => {
  const {
    className,
    classNames,
    color,
    disabled,
    items,
    orientation = 'horizontal',
    radioPosition = 'right',
    size,
    value,
    variant,
    ...rest
  } = props;

  const { group } = radioVariants({ orientation, size });

  const mergedCls = cn(group(), className || classNames?.group);

  return (
    <Root
      className={mergedCls}
      disabled={disabled}
      value={value}
      {...rest}
    >
      {items.map((item) => {
        const isChecked = value === item.value;
        const isDisabled = disabled || item.disabled;

        return (
          <RadioCard
            checked={isChecked}
            classNames={classNames}
            color={color}
            disabled={isDisabled}
            key={item.value}
            radioPosition={radioPosition}
            size={size}
            variant={variant}
            {...item}
          />
        );
      })}
    </Root>
  );
};

RadioCardGroup.displayName = 'RadioCardGroup';

export default RadioCardGroup;
