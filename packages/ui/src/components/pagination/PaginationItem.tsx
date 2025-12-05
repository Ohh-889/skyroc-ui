import { cn } from '@/lib/utils';
import { paginationVariants } from './pagination-variants';
import type { PaginationItemProps } from './types';

const PaginationItem = (props: PaginationItemProps) => {
  const {
    className,
    children,
    isActive,
    value,
    size,
    variant,
    shape,
    ...rest
  } = props;

  const { button } = paginationVariants({ size, variant, shape });

  const mergedCls = cn(button(), className);

  return (
    <button
      aria-current={isActive ? 'page' : undefined}
      aria-label={`Page ${value}`}
      className={mergedCls}
      data-selected={isActive ? '' : undefined}
      data-slot="pagination-item"
      data-type="page"
      type="button"
      {...rest}
    >
      {children ?? value}
    </button>
  );
};

export default PaginationItem;
