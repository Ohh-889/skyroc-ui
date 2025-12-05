import { isValidElement } from 'react';
import { ChevronsRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { paginationVariants } from './pagination-variants';
import type { PaginationLastProps } from './types';

const PaginationLast = (props: PaginationLastProps) => {
  const {
    className,
    children,
    icon,
    label,
    size,
    variant,
    shape,
    actionAsSelected,
    ...rest
  } = props;

  const { navigationButton } = paginationVariants({ size, variant, shape, actionAsSelected });

  const mergedCls = cn(navigationButton(), className);

  return (
    <button
      aria-label="Go to last page"
      className={mergedCls}
      data-selected={actionAsSelected ? '' : undefined}
      data-slot="pagination-last"
      type="button"
      {...rest}
    >
      {children ?? (
        <>
          {isValidElement(label) ? label : (Boolean(label) && <span className="hidden sm:block">{label}</span>)}
          {icon ?? <ChevronsRightIcon />}
        </>
      )}
    </button>
  );
};

export default PaginationLast;
