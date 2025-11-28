'use client';

import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { useComponentConfig } from '../config-provider/context';
import ScrollAreaUI from './ScrollAreaUI';
import type ScrollAreaRoot from './ScrollAreaRoot';
import type { ScrollAreaProps } from './types';

const ScrollArea = forwardRef<ComponentRef<typeof ScrollAreaRoot>, ScrollAreaProps>((props, ref) => {
  const config = useComponentConfig('scrollArea');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <ScrollAreaUI
      {...mergedProps}
      ref={ref}
    />
  );
});

ScrollArea.displayName = 'ScrollArea';

export default ScrollArea;
