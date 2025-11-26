import type {
  HoverCardArrowProps as _HoverCardArrowProps,
  HoverCardContentProps as _HoverCardContentProps,
  HoverCardProps as _HoverCardProps
} from '@radix-ui/react-hover-card';
import type { BaseNodeProps, ClassValue } from '@/types/shared';
import type { HoverCardSlots } from './hover-card-variants';

export type HoverCardClassNames = Partial<Record<HoverCardSlots, ClassValue>>;

export type HoverCardProps = BaseNodeProps<_HoverCardProps> & {
  arrowProps?: HoverCardArrowProps;
  classNames?: HoverCardClassNames;
  contentProps?: Omit<HoverCardContentProps, 'children' | 'className'>;
  showArrow?: boolean;
  trigger?: React.ReactNode;
};

export type HoverCardArrowProps = BaseNodeProps<_HoverCardArrowProps>;

export type HoverCardContentProps = BaseNodeProps<_HoverCardContentProps>;
