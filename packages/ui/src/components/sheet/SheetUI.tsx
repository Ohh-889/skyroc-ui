'use client';

import { Dialog } from '../dialog';
import SheetContent from './SheetContent';
import type { SheetProps } from './types';

const SheetUI = (props: SheetProps) => {
  const { children, ...rest } = props;

  return (
    <Dialog
      contentComponent={SheetContent}
      {...rest}
    >
      <div className="flex-grow overflow-auto">{children}</div>
    </Dialog>
  );
};

export default SheetUI;
