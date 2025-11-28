'use client';

import { forwardRef } from 'react';
import { useComponentConfig } from '../config-provider/context';
import ButtonUI from './ButtonUI';
import type { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const config = useComponentConfig('button');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <ButtonUI
      {...mergedProps}
      ref={ref}
    />
  );
});

Button.displayName = 'Button';

export default Button;
