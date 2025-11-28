import { cn } from '@/lib/utils';
import { skeletonVariants } from './skeleton-variants';
import type { SkeletonProps } from './types';

const SkeletonUI = (props: SkeletonProps) => {
  const { className, ...rest } = props;

  const mergedCls = cn(skeletonVariants(), className);

  return (
    <div
      className={mergedCls}
      data-slot="skeleton"
      {...rest}
    />
  );
};

export default SkeletonUI;
