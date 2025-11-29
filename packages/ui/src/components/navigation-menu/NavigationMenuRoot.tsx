import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuRootProps } from './types';

interface NavigationMenuRootInternalProps extends NavigationMenuRootProps {
  'data-viewport'?: boolean;
}

const NavigationMenuRoot = forwardRef<ComponentRef<typeof Root>, NavigationMenuRootInternalProps>((props, ref) => {
  const { className, 'data-viewport': dataViewport = true, ...rest } = props;

  const { root } = navigationMenuVariants();

  const mergedCls = cn(root(), className);

  return (
    <Root
      {...rest}
      className={mergedCls}
      data-slot="navigation-menu"
      data-viewport={dataViewport}
      ref={ref}
    />
  );
});

NavigationMenuRoot.displayName = 'NavigationMenuRoot';

export default NavigationMenuRoot;
