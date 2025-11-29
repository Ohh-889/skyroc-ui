import { isValidElement } from 'react';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { withClassName } from '@/lib/compose-props';
import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuChildLinkProps } from './types';

const NavigationMenuChildLink = (props: NavigationMenuChildLinkProps) => {
  const { children, className, classNames, description, leading, size, trailing, ...rest } = props;

  const { childLink, childLinkContent, childLinkDescription, childLinkIcon, childLinkLabel } = navigationMenuVariants({
    size
  });

  const mergedCls = {
    cls: cn(childLink(), className || classNames?.childLink),
    content: cn(childLinkContent(), classNames?.childLinkContent),
    description: cn(childLinkDescription(), classNames?.childLinkDescription),
    icon: cn(childLinkIcon(), classNames?.childLinkIcon),
    label: cn(childLinkLabel(), classNames?.childLinkLabel)
  };

  return (
    <NavigationMenuLink
      {...rest}
      data-slot="navigation-menu-child-link"
    >
      {isValidElement(leading) ? withClassName(leading, mergedCls.icon) : leading}

      <div className={mergedCls.content}>
        <div className={mergedCls.label}>{children}</div>
        {description ? <p className={mergedCls.description}>{description}</p> : null}
      </div>

      {trailing}
    </NavigationMenuLink>
  );
};

export default NavigationMenuChildLink;
