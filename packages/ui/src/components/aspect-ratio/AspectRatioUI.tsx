import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-aspect-ratio';
import { cn } from '@/lib/utils';
import type { AspectRatioProps } from './types';

const AspectRatioUI = forwardRef<ComponentRef<typeof Root>, AspectRatioProps>((props, ref) => {
  const { className, ...rest } = props;

  const mergedCls = cn(className);

  return (
    <Root
      className={mergedCls}
      data-slot="aspect-ratio"
      ref={ref}
      {...rest}
    />
  );
});

AspectRatioUI.displayName = 'AspectRatioUI';

export default AspectRatioUI;
