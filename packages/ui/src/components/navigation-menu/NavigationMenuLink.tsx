import { isValidElement } from 'react';
import { Link } from '@radix-ui/react-navigation-menu';
import { ArrowUpRight } from 'lucide-react';
import { withClassName } from '@/lib/compose-props';
import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuLinkProps } from './types';

const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
  const { children, disabled, className, classNames, component: Component = 'a', leading, size, trailing, ...rest } = props;

  const { itemIcon, link, linkIcon } = navigationMenuVariants({ size });

  const mergedCls = {
    cls: cn(link(), className || classNames?.link),
    icon: cn(itemIcon(), classNames?.itemIcon),
    linkIcon: cn(linkIcon(), classNames?.linkIcon)
  };

  return (
    <Link
      asChild
      className={mergedCls.cls}
      data-disabled={disabled ? '' : undefined}
      data-slot="navigation-menu-link"
      {...rest}
    >
      <Component>
        {isValidElement(leading) ? withClassName(leading, mergedCls.icon) : leading}

        <span
          data-slot="navigation-menu-link-label"
        >
          {children}
        </span>

        {trailing || <ArrowUpRight className={mergedCls.linkIcon} />}
      </Component>
    </Link>
  );
};

export default NavigationMenuLink;
