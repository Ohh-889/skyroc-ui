import type { HTMLComponentProps, ClassValue, SlotProps } from '@/types/shared';
import type { BreadcrumbSlots } from './breadcrumb-variants';

export type BreadcrumbEllipsisProps = HTMLComponentProps<'span'>;

export type BreadcrumbItemProps = HTMLComponentProps<'li'>;

export type BreadcrumbLinkProps = HTMLComponentProps<'a'> & {
  asChild?: boolean;
};

export type BreadcrumbListProps = HTMLComponentProps<'ol'>;

export type BreadcrumbPageProps = HTMLComponentProps<'span'>;

export type BreadcrumbRootProps = HTMLComponentProps<'nav'>;

export type BreadcrumbSeparatorProps = HTMLComponentProps<'li'>;

export interface BreadcrumbItem extends BreadcrumbLinkProps, SlotProps {
  className?: ClassValue;
  label: React.ReactNode;
  value: string;
}

export type BreadcrumbUi = Partial<Record<BreadcrumbSlots, ClassValue>>;

export type BreadcrumbProps<T extends BreadcrumbItem> = BreadcrumbRootProps & {
  classNames?: Omit<BreadcrumbUi, 'link' | 'page'>;
  /**
   * the range of items to show ellipsis
   *
   * when the item count is greater than 4, we will show ellipsis
   *
   * start: the start index of the ellipsis
   *
   * end: the end index of the ellipsis.
   */
  ellipsis?: true | [number, number] | null;
  ellipsisIcon?: React.ReactNode;
  handleItemClick?: (item: T) => void;
  items: T[];
  renderEllipsis?: (items: T[]) => React.ReactNode;
  renderItem?: (item: T) => React.ReactNode;
  separator?: React.ReactNode;
};
