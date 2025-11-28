'use client';

import { useComponentConfig } from '../config-provider/context';
import MenuUI from './MenuUI';
import type { MenuProps } from './types';

const Menu = (props: MenuProps) => {
  const config = useComponentConfig('menu');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <MenuUI
      {...mergedProps}
    />
  );
};

Menu.displayName = 'Menu';

export default Menu;
