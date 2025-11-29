import { Indicator } from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import { navigationMenuVariants } from './navigation-menu';
import type { NavigationMenuIndicatorProps } from './types';

const NavigationMenuIndicator = (props: NavigationMenuIndicatorProps) => {
  const { className, classNames, size, ...rest } = props;

  const { arrow, indicator } = navigationMenuVariants({ size });

  const mergedCls = cn(indicator(), className);

  const mergedArrowCls = cn(arrow(), classNames?.arrow);

  return (
    <Indicator
      {...rest}
      className={mergedCls}
      data-size={size}
      data-slot="navigation-menu-indicator"
    >
      <div
        className={mergedArrowCls}
        data-slot="navigation-menu-indicator-arrow"
      />
    </Indicator>
  );
};

export default NavigationMenuIndicator;
