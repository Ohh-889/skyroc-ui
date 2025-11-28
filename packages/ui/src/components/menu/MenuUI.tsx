'use client';

import { Root } from '@radix-ui/react-dropdown-menu';
import type { MenuProps } from './types';

const MenuUI = (props: MenuProps) => {
  const { children, ...rest } = props;

  return (
    <Root {...rest}>
      {children}
    </Root>
  );
};

MenuUI.displayName = 'MenuUI';

export default MenuUI;
