'use client';

import { forwardRef } from 'react';
import { Check, Minus } from 'lucide-react';
import CheckboxLabel from '../label/Label';
import CheckboxControl from './CheckboxControl';
import CheckboxIndicator from './CheckboxIndicator';
import CheckboxRoot from './CheckboxRoot';
import type { CheckboxProps } from './types';

const CheckboxUI = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const { children, className, classNames, forceMountIndicator, size, ...rest } = props;

  const isIndeterminate = rest.checked === 'indeterminate';

  return (
    <CheckboxRoot
      className={className || classNames?.root}
      ref={ref}
    >
      <CheckboxControl
        className={classNames?.control}
        size={size}
        {...rest}
      >
        <CheckboxIndicator
          className={classNames?.indicator}
          forceMount={forceMountIndicator}
        >
          {isIndeterminate ? <Minus className="size-full" /> : <Check className="size-full" />}
        </CheckboxIndicator>
      </CheckboxControl>

      {children
        ? (
          <CheckboxLabel
            className={classNames?.label}
            htmlFor={rest.id}
          >
            {children}
          </CheckboxLabel>
        )
        : null}
    </CheckboxRoot>
  );
});

CheckboxUI.displayName = 'CheckboxUI';

export default CheckboxUI;
