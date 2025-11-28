import type { AspectRatioProps as _AspectRatioProps } from '@radix-ui/react-aspect-ratio';
import type { StyledComponentProps } from '@/types/shared';

/**
 * Props for the AspectRatio component.
 * Maintains a consistent aspect ratio for its content, useful for images, videos, and iframes.
 * Extends Radix UI's AspectRatio with styled component capabilities.
 *
 * @example
 * ```jsx
 * <AspectRatio ratio={16/9}>
 *   <img src="image.jpg" alt="example" className="w-full h-full object-cover" />
 * </AspectRatio>
 * ```
 */
export interface AspectRatioProps extends StyledComponentProps<_AspectRatioProps> {}
