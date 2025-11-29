import { isValidElement } from 'react';
import { Trigger } from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';
import { withClassName } from '@/lib/compose-props';
import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuTriggerProps } from './types';

const NavigationMenuTrigger = (props: NavigationMenuTriggerProps) => {
  const { children, className, classNames, leading, trailing, ...rest } = props;

  const { itemIcon, trigger, triggerIcon } = navigationMenuVariants();

  const mergedCls = {
    cls: cn(trigger(), className || classNames?.trigger),
    icon: cn(itemIcon(), classNames?.itemIcon),
    triggerIcon: cn(triggerIcon(), classNames?.triggerIcon)
  };

  return (
    <Trigger
      {...rest}
      className={mergedCls.cls}
      data-slot="navigation-menu-trigger"
    >
      {isValidElement(leading) ? withClassName(leading, mergedCls.icon) : leading}
      <span data-slot="navigation-menu-trigger-label">{children}</span>

      {trailing || (
        <ChevronDown
          aria-hidden="true"
          className={mergedCls.triggerIcon}
        />
      )}
    </Trigger>
  );
};

export default NavigationMenuTrigger;
