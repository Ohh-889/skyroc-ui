import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Thumb } from '@radix-ui/react-scroll-area';
import { cn } from '@/lib/utils';
import { scrollAreaVariants } from './scroll-area-variants';
import type { ScrollAreaThumbProps } from './types';

const ScrollAreaScrollbar = forwardRef<ComponentRef<typeof Thumb>, ScrollAreaThumbProps>((props, ref) => {
  const { className, ...rest } = props;

  const { thumb } = scrollAreaVariants();

  const mergedCls = cn(thumb(), className);

  return (
    <Thumb
      className={mergedCls}
      {...rest}
      ref={ref}
    />
  );
});

ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';

export default ScrollAreaScrollbar;
