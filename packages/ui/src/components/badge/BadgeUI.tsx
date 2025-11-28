import { cn } from '@/lib/utils';
import { badgeVariants } from './badge-variants';
import type { BadgeProps } from './types';

const BadgeUI = (props: BadgeProps) => {
  const { className, color, shape, size, variant, ...rest } = props;

  const mergedCls = cn(badgeVariants({ color, shape, size, variant }), className);

  return (
    <div
      {...rest}
      className={mergedCls}
    />
  );
};

BadgeUI.displayName = 'BadgeUI';

export default BadgeUI;
