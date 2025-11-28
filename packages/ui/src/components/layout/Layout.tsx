'use client';

import { useComponentConfig } from '../config-provider/context';
import LayoutUI from './LayoutUI';
import type { LayoutProps } from './types';

const Layout = (props: LayoutProps) => {
  const config = useComponentConfig('layout');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <LayoutUI
      {...mergedProps}
    />
  );
};

Layout.displayName = 'Layout';

export default Layout;
