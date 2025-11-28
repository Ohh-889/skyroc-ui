'use client';

import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import type { Content } from '@radix-ui/react-popover';
import { useComponentConfig } from '../config-provider/context';
import PopoverUI from './PopoverUI';
import type { PopoverProps } from './types';

const Popover = forwardRef<ComponentRef<typeof Content>, PopoverProps>((props, ref) => {
  const config = useComponentConfig('popover');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <PopoverUI
      {...mergedProps}
      ref={ref}
    />
  );
});

Popover.displayName = 'Popover';

export default Popover;
