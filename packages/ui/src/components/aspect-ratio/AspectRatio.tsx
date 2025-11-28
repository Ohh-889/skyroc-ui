'use client';

import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import type { Root } from '@radix-ui/react-aspect-ratio';
import { useComponentConfig } from '../config-provider/context';
import AspectRatioUI from './AspectRatioUI';
import type { AspectRatioProps } from './types';

const AspectRatio = forwardRef<ComponentRef<typeof Root>, AspectRatioProps>((props, ref) => {
  const config = useComponentConfig('aspectRatio');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <AspectRatioUI
      {...mergedProps}
      ref={ref}
    />
  );
});

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
