import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuChildListItemProps } from './types';

const NavigationMenuChildListItem = (props: NavigationMenuChildListItemProps) => {
  const { className, ...rest } = props;

  const { childListItem } = navigationMenuVariants();

  const mergedCls = cn(childListItem(), className);

  return (
    <li
      {...rest}
      className={mergedCls}
      data-slot="navigation-menu-child-list-item"
    />
  );
};

export default NavigationMenuChildListItem;
