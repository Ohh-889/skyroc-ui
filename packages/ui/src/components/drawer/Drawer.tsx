'use client';

import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import type { Content } from 'vaul';
import { useComponentConfig } from '../config-provider/context';
import DrawerUI from './DrawerUI';
import type { DrawerProps } from './types';

const Drawer = forwardRef<ComponentRef<typeof Content>, DrawerProps>((props, ref) => {
  const config = useComponentConfig('drawer');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <DrawerUI
      {...mergedProps}
      ref={ref}
    />
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
