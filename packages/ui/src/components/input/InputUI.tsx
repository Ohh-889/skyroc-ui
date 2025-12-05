'use client';

import { forwardRef, useRef } from 'react';
import { X } from 'lucide-react';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { cn } from '@/lib/utils';
import { inputVariants } from './input-variants';
import type { InputProps } from './types';

const InputUI = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, disabled, readOnly, classNames, clearable, size, leading, trailing, ...rest } = props;

  const { root, clearable: clearableCls, control } = inputVariants({ size });

  const mergedCls = cn(root(), className || classNames?.root);

  const interRef = useRef<HTMLInputElement>(null);

  const inputRefs = useComposedRefs(interRef, ref);

  const mergedClearableCls = cn(clearableCls(), className || classNames?.clearable);

  const mergedControlCls = cn(control(), className || classNames?.control);

  const isDisabled = disabled || readOnly;

  function handleClear() {
    if (interRef.current) {
      interRef.current.value = '';
      // Trigger onChange event
      const event = new Event('input', { bubbles: true });
      interRef.current.dispatchEvent(event);
    }
  }

  return (
    <div
      className={mergedCls}
      data-disabled={disabled ? '' : undefined}
      data-readonly={readOnly ? '' : undefined}
      data-slot="input-root"
      role="group"
    >
      {leading}

      <input
        aria-disabled={disabled ? true : undefined}
        aria-roledescription="Input"
        autoCorrect="off"
        className={mergedControlCls}
        data-disabled={disabled ? '' : undefined}
        data-readonly={readOnly ? '' : undefined}
        data-slot="input"
        disabled={isDisabled}
        readOnly={readOnly}
        ref={inputRefs}
        spellCheck="false"
        tabIndex={0}
        {...rest}
      />

      {clearable
        ? (
          <X
            className={mergedClearableCls}
            data-slot="input-clearable"
            onClick={handleClear}
          />
        )
        : null}

      {trailing}
    </div>
  );
});

InputUI.displayName = 'InputUI';

export default InputUI;
