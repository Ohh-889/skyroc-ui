import type { ReactNode } from 'react';
import type {
  NavigationMenuContentProps as _NavigationMenuContentProps,
  NavigationMenuIndicatorProps as _NavigationMenuIndicatorProps,
  NavigationMenuItemProps as _NavigationMenuItemProps,
  NavigationMenuLinkProps as _NavigationMenuLinkProps,
  NavigationMenuListProps as _NavigationMenuListProps,
  NavigationMenuProps as _NavigationMenuRootProps,
  NavigationMenuTriggerProps as _NavigationMenuTriggerProps,
  NavigationMenuViewportProps as _NavigationMenuViewportProps
} from '@radix-ui/react-navigation-menu';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, SlotProps } from '@/types/shared';
import type { NavigationMenuSlots } from './navigation-menu';

/**
 * Base options for a navigation menu item.
 * Provides common properties shared by items with different display modes.
 */
export interface NavigationMenuItemBaseOption
  extends Omit<StyledComponentProps<_NavigationMenuItemProps>, 'children'>,
  SlotProps {
  /** Unique identifier for the menu item */
  value?: string;
  /** Description text for the menu item */
  description?: ReactNode;
  /** Label text for the menu item */
  label: ReactNode;
  /** Item type identifier */
  type?: 'item';
}

/**
 * Base options for a navigation menu link.
 * Represents a standalone link item without submenu.
 */
export interface NavigationMenuLinkBaseOption
  extends Omit<StyledComponentProps<_NavigationMenuLinkProps>, 'children'>,
  SlotProps {
  /** Description text for the link */
  description?: ReactNode;
  /** Label text for the link */
  label: ReactNode;
  /** Item type identifier */
  type: 'link';
  /** Unique identifier for the link item */
  value?: string;
}

type NavigationMenuChildLinkSlots = Extract<
  NavigationMenuSlots,
  'childLink' | 'childLinkContent' | 'childLinkDescription' | 'childLinkIcon' | 'childLinkLabel'
>;

/**
 * Class names for different slots in the navigation menu component.
 * Allows customizing styles for specific parts of the navigation menu.
 */
export type NavigationMenuClassNames = Partial<Record<NavigationMenuSlots, ClassValue>>;

/**
 * Class names for child link slots in the navigation menu.
 * Customizes styling for nested navigation links.
 */
export type NavigationMenuChildLinkClassNames = Partial<Record<NavigationMenuChildLinkSlots, ClassValue>>;

/**
 * Props for a child link in the navigation menu.
 * Represents a link item within a navigation menu submenu.
 *
 * @example
 * <NavigationMenuChildLink href="/docs" description="API documentation">
 *   Docs
 * </NavigationMenuChildLink>
 */
export interface NavigationMenuChildLinkProps
  extends StyledComponentProps<_NavigationMenuLinkProps>,
  Pick<NavigationMenuItemBaseOption, 'description' | 'leading' | 'trailing'> {
  /** Class names for customizing child link slots */
  classNames?: NavigationMenuChildLinkClassNames;
}

/**
 * Props for a child list in the navigation menu.
 * Container for navigation menu child items.
 */
export interface NavigationMenuChildListProps extends HTMLComponentProps<'ul'> {}

/**
 * Props for a child list item in the navigation menu.
 * Individual container for child menu items.
 */
export interface NavigationMenuChildListItemProps extends HTMLComponentProps<'li'> {}

/**
 * Props for the NavigationMenuContent component.
 * Container for the expanded content of a navigation menu item.
 */
export interface NavigationMenuContentProps extends StyledComponentProps<_NavigationMenuContentProps> {}

/**
 * Props for the NavigationMenuIndicator component.
 * Renders a visual indicator (arrow) showing the active menu item.
 *
 * @example
 * <NavigationMenuIndicator>
 *   <ChevronDown className="w-4 h-4" />
 * </NavigationMenuIndicator>
 */
export interface NavigationMenuIndicatorProps extends Omit<StyledComponentProps<_NavigationMenuIndicatorProps>, 'children'> {
  /** Class names for customizing indicator slots */
  classNames?: Pick<NavigationMenuClassNames, 'arrow' | 'indicator'>;
}

/**
 * Props for a NavigationMenuItem component.
 * A menu item that can contain a submenu with child links.
 *
 * @example
 * <NavigationMenuItem value="products">
 *   <NavigationMenuTrigger>Products</NavigationMenuTrigger>
 *   <NavigationMenuContent>
 *     <NavigationMenuChildLink href="/pro">Pro</NavigationMenuChildLink>
 *     <NavigationMenuChildLink href="/enterprise">Enterprise</NavigationMenuChildLink>
 *   </NavigationMenuContent>
 * </NavigationMenuItem>
 */
export interface NavigationMenuItemProps extends Omit<NavigationMenuItemBaseOption, 'label'> {
  /** Content to render inside the menu item */
  children?: ReactNode;
}

/**
 * Props for a navigation menu link item.
 * Represents a clickable link in the navigation menu.
 *
 * @example
 * <NavigationMenuLink href="/docs" leading={<BookIcon />}>
 *   Documentation
 * </NavigationMenuLink>
 */
export interface NavigationMenuLinkProps
  extends StyledComponentProps<_NavigationMenuLinkProps>,
  Pick<NavigationMenuItemBaseOption, 'leading' | 'trailing'> {
  /** Class names for customizing link slots */
  classNames?: Pick<NavigationMenuClassNames, 'itemIcon' | 'link' | 'linkIcon' | 'linkLabel'>;
}

/**
 * Props for the NavigationMenuList component.
 * Container for navigation menu items.
 */
export interface NavigationMenuListProps extends StyledComponentProps<_NavigationMenuListProps> {}

/**
 * Props for the NavigationMenu root component.
 * Main container that manages the navigation menu state and structure.
 */
export interface NavigationMenuRootProps extends StyledComponentProps<_NavigationMenuRootProps> {}

/**
 * Props for a NavigationMenuTrigger component.
 * A button that opens/toggles the submenu content.
 *
 * @example
 * <NavigationMenuTrigger leading={<MenuIcon />} triggerIcon={<ChevronDown />}>
 *   Products
 * </NavigationMenuTrigger>
 */
export interface NavigationMenuTriggerProps
  extends StyledComponentProps<_NavigationMenuTriggerProps>,
  Pick<NavigationMenuItemBaseOption, 'leading' | 'trailing'> {
  /** Class names for customizing trigger slots */
  classNames?: Pick<NavigationMenuClassNames, 'itemIcon' | 'trigger' | 'triggerIcon'>;
}

/**
 * Props for the NavigationMenuViewport component.
 * Container that displays the content of the active menu item.
 */
export interface NavigationMenuViewportProps extends StyledComponentProps<_NavigationMenuViewportProps> {
  /** Class names for customizing viewport slots */
  classNames?: Pick<NavigationMenuClassNames, 'viewport' | 'viewportRoot'>;
}

/**
 * Menu item option with optional child items.
 * Used in data-driven navigation menu rendering.
 */
export type NavigationMenuItemOptionProps = NavigationMenuItemBaseOption & {
  /** Nested menu items to display when parent is expanded */
  children?: NavigationMenuItemOption[];
};

/**
 * Union type for navigation menu item options.
 * Can be a menu item with submenu or a standalone link.
 */
export type NavigationMenuItemOption = NavigationMenuItemOptionProps | NavigationMenuLinkBaseOption;

/**
 * Props for the main NavigationMenu component.
 * A complex navigation component for site-wide or application navigation.
 *
 * @example
 * <NavigationMenu
 *   items={[
 *     {
 *       type: 'item',
 *       label: 'Products',
 *       value: 'products',
 *       children: [
 *         {
 *           type: 'link',
 *           label: 'Pro',
 *           href: '/pro'
 *         }
 *       ]
 *     },
 *     {
 *       type: 'link',
 *       label: 'Documentation',
 *       href: '/docs'
 *     }
 *   ]}
 *   showArrow
 * />
 */
export interface NavigationMenuProps extends Omit<StyledComponentProps<_NavigationMenuRootProps>, 'children'> {
  /** Class names for customizing different parts of the navigation menu */
  classNames?: NavigationMenuClassNames;
  /** Array of navigation menu items to render */
  items: NavigationMenuItemOption[];
  /** Whether to display an arrow indicator for active items */
  showArrow?: boolean;
  /** Whether to display the viewport container (default: true) */
  viewport?: boolean;
}
