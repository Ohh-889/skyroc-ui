import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Scrollbar } from '@radix-ui/react-scroll-area';
import { cn } from '@/lib/utils';
import { scrollAreaVariants } from './scroll-area-variants';
import type { ScrollAreaScrollbarProps } from './types';

const ScrollAreaScrollbar = forwardRef<ComponentRef<typeof Scrollbar>, ScrollAreaScrollbarProps>((props, ref) => {
  const { className, orientation, size, ...rest } = props;

  const { scrollbar } = scrollAreaVariants({ orientation, size });

  const mergedCls = cn(scrollbar(), className);

  return (
    <Scrollbar
      className={mergedCls}
      orientation={orientation}
      {...rest}
      ref={ref}
    />
  );
});

ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';

export default ScrollAreaScrollbar;
