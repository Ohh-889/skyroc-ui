'use client';

import { forwardRef } from 'react';
import { useComponentConfig } from '../config-provider/context';
import ChipUI from './ChipUI';
import type { ChipProps } from './types';

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const config = useComponentConfig('chip');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <ChipUI
      {...mergedProps}
      ref={ref}
    />
  );
});

Chip.displayName = 'Chip';

export default Chip;
