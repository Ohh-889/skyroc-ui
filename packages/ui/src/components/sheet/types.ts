import type { DialogContentProps } from '@radix-ui/react-dialog';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { DialogSlots as SheetSlots } from '../dialog/dialog-variants';
import type { DialogProps } from '../dialog/types';
import type { SheetSide } from './sheet-variants';

/**
 * Props for the sheet content component.
 * The main container that slides in from a specified side of the screen.
 *
 * @example
 * ```tsx
 * <SheetContent side="right">
 *   <SheetHeader>
 *     <SheetTitle>Sheet Title</SheetTitle>
 *   </SheetHeader>
 *   <div>Sheet content goes here</div>
 * </SheetContent>
 * ```
 */
export interface SheetContentProps extends StyledComponentProps<DialogContentProps> {
  /**
   * The side of the screen from which the sheet slides in.
   * Can be "top", "right", "bottom", or "left".
   */
  side?: SheetSide;
}

/**
 * Class names for different slots in the sheet component.
 * Allows customizing styles for the overlay, content, and other parts.
 */
export type SheetClassNames = Partial<Record<SheetSlots, ClassValue>>;

/**
 * Props for the main Sheet component.
 * A side panel modal that slides in from the edge of the screen.
 *
 * @example
 * ```tsx
 * <Sheet>
 *   <SheetTrigger>Open Sheet</SheetTrigger>
 *   <SheetContent side="left">
 *     <SheetHeader>
 *       <SheetTitle>Navigation</SheetTitle>
 *     </SheetHeader>
 *     <SheetBody>
 *       <nav>Navigation items here</nav>
 *     </SheetBody>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
export interface SheetProps extends Omit<DialogProps<SheetContentProps>, 'contentComponent'> {}

export { SheetSide };
