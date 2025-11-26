import type {
  CollapsibleContentProps as _CollapsibleContentProps,
  CollapsibleProps as _CollapsibleRootProps
} from '@radix-ui/react-collapsible';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { CollapsibleSlots } from './collapsible-variants';

export type CollapsibleRootProps = StyledComponentProps<Omit<_CollapsibleRootProps, 'content'>>;

export type CollapsibleContentProps = StyledComponentProps<_CollapsibleContentProps>;

export type CollapsibleClassNames = Partial<Record<CollapsibleSlots, ClassValue>>;

export interface CollapsibleProps extends CollapsibleRootProps {
  classNames?: CollapsibleClassNames;
  content?: React.ReactNode;
  forceMountContent?: true;
}
