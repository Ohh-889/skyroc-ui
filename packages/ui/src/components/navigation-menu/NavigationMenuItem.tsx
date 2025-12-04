import { Item } from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuItemProps } from './types';

const NavigationMenuItem = (props: NavigationMenuItemProps) => {
  const { className, ...rest } = props;

  const { item } = navigationMenuVariants();

  const mergedCls = cn(item(), className);

  return (
    <Item
      className={mergedCls}
      data-slot="navigation-menu-item"
      {...rest}
    />
  );
};

export default NavigationMenuItem;
