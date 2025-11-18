import type { CSSProperties } from 'react';

import { cn } from '@/lib/utils';

import { DialogOverlay, DialogPortal, DialogRoot } from '../dialog';
import { SheetContent } from '../sheet';

import { useLayoutContext } from './context';
import { layoutVariants } from './layout-variants';
import type { LayoutMobileProps } from './types';

const LayoutMobile = (props: LayoutMobileProps) => {
  const { children, className, rootClassName, side } = props;
  const { mobile, mobileRoot } = layoutVariants();
  const mergedCls = {
    cls: cn(mobile(), className),
    root: cn(mobileRoot(), rootClassName)
  };
  const { onOpenMobileChange, openMobile } = useLayoutContext();

  return (
    <DialogRoot
      open={openMobile}
      onOpenChange={onOpenMobileChange}
    >
      <DialogPortal>
        <DialogOverlay />
        <SheetContent
          className={mergedCls.root}
          side={side}
          style={{ '--sidebar-width': '18rem' } as CSSProperties}
        >
          <div
            className={mergedCls.cls}
            data-mobile="true"
            data-sidebar="sidebar"
          >
            {children}
          </div>
        </SheetContent>
      </DialogPortal>
    </DialogRoot>
  );
};

export default LayoutMobile;
