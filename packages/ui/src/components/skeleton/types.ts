import type { HTMLComponentProps } from '@/types/shared';

/**
 * Props for the Skeleton component.
 * A placeholder component that displays an animated loading skeleton while content is loading.
 * Inherits all standard HTML div attributes and custom component props.
 *
 * @example
 * ```tsx
 * // Simple skeleton placeholder
 * <Skeleton className="h-12 w-12 rounded-full" />
 *
 * // Skeleton lines
 * <div className="space-y-2">
 *   <Skeleton className="h-4 w-full" />
 *   <Skeleton className="h-4 w-3/4" />
 *   <Skeleton className="h-4 w-1/2" />
 * </div>
 *
 * // Skeleton for image placeholder
 * <Skeleton className="h-32 w-32 rounded-lg" />
 * ```
 */
export type SkeletonProps = HTMLComponentProps<'div'>;
