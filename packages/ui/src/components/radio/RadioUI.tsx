'use client';

import { useId } from 'react';
import RadioLabel from '../label/Label';
import RadioGroupItem from './RadioGroupItem';
import RadioIndicator from './RadioIndicator';
import RadioRoot from './RadioRoot';
import type { RadioProps } from './types';

const Radio = (props: RadioProps) => {
  const { className, classNames, color, id, label, size, value, variant, rootProps, itemProps, indicatorProps, ...rest } = props;

  const internalId = useId();

  const controlId = id || internalId;

  return (
    <RadioRoot
      className={className || classNames?.root}
      size={size}
      {...rootProps}
    >
      <RadioGroupItem
        {...rest}
        {...itemProps}
        color={color}
        id={controlId}
        size={size}
        value={value}
        variant={variant}
      >
        <RadioIndicator
          className={classNames?.indicator}
          color={color}
          variant={variant}
          {...indicatorProps}
        />
      </RadioGroupItem>

      {label
        ? (
          <RadioLabel
            className={classNames?.label}
            htmlFor={controlId}
            size={size}
          >
            {label}
          </RadioLabel>
        )
        : null}
    </RadioRoot>
  );
};

Radio.displayName = 'RadioUI';

export default Radio;
