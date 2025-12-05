import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-scroll-area';
import { cn } from '@/lib/utils';
import { scrollAreaVariants } from './scroll-area-variants';
import type { ScrollAreaRootProps } from './types';

const ScrollAreaRoot = forwardRef<ComponentRef<typeof Root>, ScrollAreaRootProps>((props, ref) => {
  const { className, ...rest } = props;

  const { root } = scrollAreaVariants();

  const mergedCls = cn(root(), className);

  return (
    <Root
      className={mergedCls}
      data-slot="scroll-area-root"
      {...rest}
      ref={ref}
    />
  );
});

ScrollAreaRoot.displayName = 'ScrollAreaRoot';

export default ScrollAreaRoot;
