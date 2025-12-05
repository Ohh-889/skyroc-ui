import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Viewport } from '@radix-ui/react-scroll-area';
import { cn } from '@/lib/utils';
import { scrollAreaVariants } from './scroll-area-variants';
import type { ScrollAreaViewportProps } from './types';

const ScrollAreaViewport = forwardRef<ComponentRef<typeof Viewport>, ScrollAreaViewportProps>((props, ref) => {
  const { className, ...rest } = props;

  const { viewport } = scrollAreaVariants();

  const mergedCls = cn(viewport(), className);

  return (
    <Viewport
      className={mergedCls}
      data-slot="scroll-area-viewport"
      {...rest}
      ref={ref}
    />
  );
});

ScrollAreaViewport.displayName = 'ScrollAreaViewport';

export default ScrollAreaViewport;
