import type {
  // eslint-disable-next-line sort/import-members
  PopoverPortalProps,
  PopoverAnchorProps as _PopoverAnchorProps,
  PopoverArrowProps as _PopoverArrowProps,
  PopoverContentProps as _PopoverContentProps,
  PopoverProps as _PopoverProps
} from '@radix-ui/react-popover';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { PopoverSlots } from './popover-varianst';

export type PopoverClassNames = Partial<Record<PopoverSlots, ClassValue>>;

export type PopoverArrowProps = StyledComponentProps<_PopoverArrowProps>;

export type PopoverContentProps = StyledComponentProps<_PopoverContentProps>;

export type PopoverProps = _PopoverProps
  & Pick<PopoverPortalProps, 'container' | 'forceMount'>
  & Omit<PopoverContentProps, 'forceMount'> & {
    arrowHeight?: number;
    arrowWidth?: number;
    classNames?: PopoverClassNames;
    closeIcon?: React.ReactNode;
    disabledPortal?: boolean;
    forceMountPortal?: true;
    showArrow?: boolean;
    trigger?: React.ReactNode;
  };

export type PopoverAnchorProps = StyledComponentProps<_PopoverAnchorProps>;
