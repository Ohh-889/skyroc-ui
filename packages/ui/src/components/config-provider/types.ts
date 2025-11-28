import type { ThemeOptions } from '@skyroc/tailwind-plugin';
import type { ThemeSize } from '@/types/shared';
import type { AccordionProps } from '../accordion/types';
import type { AlertProps } from '../alert';
import type { IconProps } from '../icon';

/**
 * Props for the ConfigProvider component.
 * Provides global configuration and theming for all child components.
 *
 * @example
 * ```tsx
 * <ConfigProvider
 *   theme={{ primary: 'blue' }}
 *   direction="ltr"
 *   size="md"
 * >
 *   <App />
 * </ConfigProvider>
 * ```
 */
export interface ConfigProviderProps extends ConfigProps {
  /**
   * Child components that will inherit the configuration.
   */
  children: React.ReactNode;
}

/**
 * Configuration options for the config provider.
 * Controls global theme, direction, and default component sizes.
 */
export interface ConfigProps extends ComponentConfig {
  /**
   * Text direction for the entire application.
   * Affects layout and text alignment for RTL languages.
   * @default 'ltr'
   */
  direction?: 'ltr' | 'rtl';

  /**
   * Default size variant for components.
   * Can be overridden on individual components.
   */
  size?: ThemeSize;

  /**
   * Theme configuration object.
   * Defines colors, spacing, typography, and other design tokens.
   */
  theme?: ThemeOptions;
}

/**
 * Component-specific configuration options.
 * Allows setting default props for specific components globally.
 */
export interface ComponentConfig {
  /**
   * Default configuration for accordion components.
   */
  accordion?: AccordionConfig;

  /**
   * Default configuration for alert components.
   */
  alert?: AlertConfig;

  /**
   * Default configuration for icon components.
   */
  icon?: IconConfig;
}

/**
 * Configuration options for accordion components.
 * Selects specific props that can be set globally for all accordions.
 *
 * @example
 * ```tsx
 * accordion: {
 *   size: 'lg',
 *   triggerIcon: <ChevronDown />,
 *   classNames: { trigger: 'custom-trigger' }
 * }
 * ```
 */
export type AccordionConfig = Pick<AccordionProps, 'className' | 'classNames' | 'dir' | 'size' | 'triggerIcon'>;

/**
 * Configuration options for alert components.
 * Selects specific props that can be set globally for all alerts.
 *
 * @example
 * ```tsx
 * alert: {
 *   variant: 'outline',
 *   size: 'md',
 *   color: 'success'
 * }
 * ```
 */
export type AlertConfig = Pick<
  AlertProps,
  'className' | 'classNames' | 'color' | 'icon' | 'leading' | 'size' | 'trailing' | 'variant'
>;

/**
 * Configuration options for icon components.
 * Selects specific props that can be set globally for all icons.
 *
 * @example
 * ```tsx
 * icon: {
 *   width: 24,
 *   height: 24,
 *   color: 'currentColor'
 * }
 * ```
 */
export type IconConfig = Pick<IconProps, 'className' | 'color' | 'height' | 'inline' | 'width'>;
