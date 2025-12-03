'use client';

import { useMemo } from 'react';
import { cn } from '@/lib';
import { kbdVariants } from './kbd-variants';
import type { KeyboardKeyProps } from './types';
import { useKeyboardKey } from './use-keyboard-key';

export const KeyboardKeyUI = (props: KeyboardKeyProps) => {
  const {
    children,
    className,
    size,
    symbolize = true,
    value,
    variant,
    ...rest
  } = props;

  const { getKeyboardKey } = useKeyboardKey();

  const formattedValue = useMemo(() => {
    if (!value)
      return '';

    const values = Array.isArray(value) ? value : [value];

    return values
      .map((v) => {
        if (symbolize) {
          return getKeyboardKey(v);
        }
        return v;
      })
      .join('');
  }, [value, symbolize, getKeyboardKey]);

  const mergedCls = cn(kbdVariants({ size, variant }), className);

  const isGroup = Array.isArray(value);

  return (
    <kbd
      className={mergedCls}
      data-group={isGroup ? '' : undefined}
      data-slot="kbd"
      data-variant={variant}
      {...rest}
    >
      {children || formattedValue}
    </kbd>
  );
};

KeyboardKeyUI.displayName = 'KeyboardKeyUI';

export default KeyboardKeyUI;
