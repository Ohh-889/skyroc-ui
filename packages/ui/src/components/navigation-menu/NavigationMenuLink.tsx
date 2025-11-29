import { isValidElement } from 'react';
import { Link } from '@radix-ui/react-navigation-menu';
import { ArrowUpRight } from 'lucide-react';
import { withClassName } from '@/lib/compose-props';
import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuLinkProps } from './types';

const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
  const { children, className, classNames, leading, size, trailing, ...rest } = props;

  const { itemIcon, link, linkIcon, linkLabel } = navigationMenuVariants({ size });

  const mergedCls = {
    cls: cn(link(), className || classNames?.link),
    icon: cn(itemIcon(), classNames?.itemIcon),
    label: cn(linkLabel(), classNames?.linkLabel),
    linkIcon: cn(linkIcon(), classNames?.linkIcon)
  };

  return (
    <Link
      data-slot="navigation-menu-link"
      {...rest}
      className={mergedCls.cls}
    >
      {isValidElement(leading) ? withClassName(leading, mergedCls.icon) : leading}

      <div
        className={mergedCls.label}
        data-slot="navigation-menu-link-label"
      >
        {children}
      </div>

      {trailing || <ArrowUpRight className={mergedCls.linkIcon} />}
    </Link>
  );
};

export default NavigationMenuLink;
