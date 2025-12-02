'use client';

import { forwardRef, useId } from 'react';
import { Check, Minus } from 'lucide-react';
import CheckboxLabel from '../label/Label';
import CheckboxControl from './CheckboxControl';
import CheckboxIndicator from './CheckboxIndicator';
import CheckboxRoot from './CheckboxRoot';
import type { CheckboxProps } from './types';

const CheckboxUI = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const {
    children,
    className,
    classNames,
    forceMountIndicator,
    size,
    rootProps,
    indicatorProps,
    checkedIcon = <Check className="size-full" />,
    indeterminateIcon = <Minus className="size-full" />,
    ...rest
  } = props;

  const isIndeterminate = rest.checked === 'indeterminate';

  const id = useId();

  const controlId = `${id}-control`;

  return (
    <CheckboxRoot
      className={className || classNames?.root}
      ref={ref}
      {...rootProps}
    >
      <CheckboxControl
        className={classNames?.control}
        id={controlId}
        size={size}
        {...rest}
      >
        <CheckboxIndicator
          className={classNames?.indicator}
          forceMount={forceMountIndicator}
          {...indicatorProps}
        >
          {isIndeterminate
            ? indeterminateIcon
            : checkedIcon}
        </CheckboxIndicator>
      </CheckboxControl>

      {children
        ? (
          <CheckboxLabel
            className={classNames?.label}
            htmlFor={controlId || rest.id}
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
