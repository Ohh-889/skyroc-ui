import type { ComponentProps } from 'react';
import type { PanelGroupProps as _PanelGroupProps, PanelResizeHandle } from 'react-resizable-panels';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { ResizableSlots } from './resizable-variants';

/**
 * Class names for different slots in the resizable component.
 * Allows customizing styles for the resize handle and its visual elements.
 */
export type ResizableClassNames = Partial<Record<ResizableSlots, ClassValue>>;

/**
 * Props for the resizable handle component.
 * Creates a draggable separator between panels that can be resized by the user.
 *
 * @example
 * ```tsx
 * <ResizableHandle
 *   withHandle
 *   classNames={{ handleIcon: "custom-icon-class" }}
 * />
 * ```
 */
export interface ResizableHandleProps extends StyledComponentProps<ComponentProps<typeof PanelResizeHandle>> {
  /**
   * Class names for customizing the handle icon and its root container.
   */
  classNames?: Pick<ResizableClassNames, 'handleIcon' | 'handleIconRoot'>;
  /**
   * Whether to display a visual handle indicator (icon/dots) on the resize separator.
   * When false, only the draggable area is visible.
   */
  withHandle?: boolean;
}

/**
 * Props for the resizable panel group component.
 * Contains multiple panels that can be resized by dragging the handles between them.
 *
 * @example
 * ```tsx
 * <ResizablePanelGroup direction="horizontal">
 *   <Panel defaultSize={50}>Left Panel</Panel>
 *   <ResizableHandle withHandle />
 *   <Panel defaultSize={50}>Right Panel</Panel>
 * </ResizablePanelGroup>
 * ```
 */
export interface ResizablePanelGroupProps extends StyledComponentProps<_PanelGroupProps> {}
