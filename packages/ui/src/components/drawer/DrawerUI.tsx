'use client';

import { Dialog } from '../dialog';
import DrawerContent from './DrawerContent';
import type { DrawerProps } from './types';

const DrawerUI = (props: DrawerProps) => {
  const { children, ...rest } = props;

  return (
    <Dialog
      contentComponent={DrawerContent}
      {...rest}
    >
      <div className="flex-grow overflow-auto">{children}</div>
    </Dialog>
  );
};

export default DrawerUI;
