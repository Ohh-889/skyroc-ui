'use client';

import { useComponentConfig } from '../config-provider/context';
import SheetUI from './SheetUI';
import type { SheetProps } from './types';

const Sheet = (props: SheetProps) => {
  const config = useComponentConfig('sheet');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <SheetUI
      {...mergedProps}

    />
  );
};

Sheet.displayName = 'Sheet';

export default Sheet;
