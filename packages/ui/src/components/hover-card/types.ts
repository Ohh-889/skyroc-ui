import type {
  HoverCardArrowProps as _HoverCardArrowProps,
  HoverCardContentProps as _HoverCardContentProps,
  HoverCardProps as _HoverCardProps
} from '@radix-ui/react-hover-card';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { HoverCardSlots } from './hover-card-variants';

export type HoverCardClassNames = Partial<Record<HoverCardSlots, ClassValue>>;

export type HoverCardProps = StyledComponentProps<_HoverCardProps> & {
  arrowProps?: HoverCardArrowProps;
  classNames?: HoverCardClassNames;
  contentProps?: Omit<HoverCardContentProps, 'children' | 'className'>;
  showArrow?: boolean;
  trigger?: React.ReactNode;
};

export type HoverCardArrowProps = StyledComponentProps<_HoverCardArrowProps>;

export type HoverCardContentProps = StyledComponentProps<_HoverCardContentProps>;
