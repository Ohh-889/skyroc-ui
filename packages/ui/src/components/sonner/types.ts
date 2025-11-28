/**
 * Action type from the sonner toast library.
 * Represents an action that can be performed from a toast notification.
 * @see https://sonner.emilkowal.ski/
 */
import 'sonner';

export type { Action };

/**
 * External toast configuration type from the sonner library.
 * Used to configure external toast notifications with custom properties.
 */
export type { ExternalToast };

/**
 * Toast classnames type from the sonner library.
 * Allows customizing the styling of toast notifications with CSS class names.
 */
export type { ToastClassnames };

/**
 * Props for the Toaster component from the sonner library.
 * Configures the toast notification container and its behavior.
 */
export type { ToasterProps };

/**
 * Toast notification type from the sonner library.
 * Represents the structure and data of a single toast notification.
 */
export type { ToastT };

/**
 * Toast dismissal type from the sonner library.
 * Represents a toast notification that has been dismissed or is pending dismissal.
 */
export type { ToastToDismiss };
