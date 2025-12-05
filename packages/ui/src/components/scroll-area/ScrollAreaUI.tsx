import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { ScrollAreaCorner } from '@radix-ui/react-scroll-area';
import { cn } from '@/lib/utils';
import ScrollAreaRoot from './ScrollAreaRoot';
import ScrollAreaScrollbar from './ScrollAreaScrollbar';
import ScrollAreaThumb from './ScrollAreaThumb';
import ScrollAreaViewport from './ScrollAreaViewport';
import type { ScrollAreaProps } from './types';

const ScrollArea = forwardRef<ComponentRef<typeof ScrollAreaRoot>, ScrollAreaProps>((props, ref) => {
  const { children, className, classNames, forceMount, nonce, orientation, size, viewportProps, scrollbarProps, thumbProps, ...rest } = props;

  return (
    <ScrollAreaRoot
      className={className}
      {...rest}
      ref={ref}
    >
      <ScrollAreaViewport
        className={classNames?.viewport}
        nonce={nonce}
        {...viewportProps}
      >
        {children}
      </ScrollAreaViewport>

      <ScrollAreaScrollbar
        className={classNames?.scrollbar}
        forceMount={forceMount}
        orientation={orientation}
        size={size}
        {...scrollbarProps}
      >
        <ScrollAreaThumb
          className={classNames?.thumb}
          {...thumbProps}
        />
      </ScrollAreaScrollbar>

      <ScrollAreaCorner
        className={cn(classNames?.corner)}
        data-slot="scroll-area-corner"
      />
    </ScrollAreaRoot>
  );
});

ScrollArea.displayName = 'ScrollAreaUI';

export default ScrollArea;
