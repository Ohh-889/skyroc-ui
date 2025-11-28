import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { inputVariants } from './input-variants';
import type { InputProps } from './types';

const InputUI = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, disabled, size, ...rest } = props;

  const mergedCls = cn(inputVariants({ size }), className);

  const isDisabled = disabled || rest.readOnly;

  return (
    <input
      className={mergedCls}
      data-slot="input"
      disabled={isDisabled}
      ref={ref}
      {...rest}
    />
  );
});

InputUI.displayName = 'InputUI';

export default InputUI;
