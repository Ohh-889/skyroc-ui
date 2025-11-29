import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuChildListProps } from './types';

const NavigationMenuChildList = (props: NavigationMenuChildListProps) => {
  const { className, ...rest } = props;

  const { childList } = navigationMenuVariants();

  const mergedCls = cn(childList(), className);

  return (
    <ul
      {...rest}
      className={mergedCls}
      data-slot="navigation-menu-child-list"
    />
  );
};

export default NavigationMenuChildList;
