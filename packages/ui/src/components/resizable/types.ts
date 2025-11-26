import type { ComponentProps } from 'react';
import type { PanelGroupProps as _PanelGroupProps, PanelResizeHandle } from 'react-resizable-panels';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { ResizableSlots } from './resizable-variants';

export type ResizableClassNames = Partial<Record<ResizableSlots, ClassValue>>;

export interface ResizableHandleProps extends StyledComponentProps<ComponentProps<typeof PanelResizeHandle>> {
  classNames?: Pick<ResizableClassNames, 'handleIcon' | 'handleIconRoot'>;
  withHandle?: boolean;
}

export interface ResizablePanelGroupProps extends StyledComponentProps<_PanelGroupProps> {}
