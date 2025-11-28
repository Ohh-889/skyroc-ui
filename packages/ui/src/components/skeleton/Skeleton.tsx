'use client';

import { useComponentConfig } from '../config-provider/context';
import SkeletonUI from './SkeletonUI';
import type { SkeletonProps } from './types';

const Skeleton = (props: SkeletonProps) => {
  const config = useComponentConfig('skeleton');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <SkeletonUI
      {...mergedProps}

    />
  );
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;
