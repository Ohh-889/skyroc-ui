import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from 'react';
import type { ClassValue, MaybeArray, StyledComponentProps } from '@/types/shared';
import type { TreeSlots } from './tree-variants';

/** Custom class names for tree component slots */
export type TreeClassNames = Partial<Record<TreeSlots, ClassValue>>;

/** Selection behavior when clicking on a tree item: 'toggle' toggles selection, 'replace' replaces current selection */
export type TreeSelectBehavior = 'toggle' | 'replace';

/** Toggle behavior for expanding/collapsing tree nodes: 'single' allows only one expanded node, 'multiple' allows multiple */
export type TreeToggleBehavior = 'single' | 'multiple';

/**
 * Base data structure for a tree item.
 */
export interface TreeItemBaseData {
  /** Unique identifier for this tree item */
  value: string;
  /** Prevents user interaction with the item. Set to `true` to disable. */
  disabled?: boolean;
  /** Display label for the tree item */
  label: ReactNode;
}

/**
 * Data structure for a tree item with optional children.
 * @template T - Type extending TreeItemBaseData
 */
export type TreeItemData<T extends TreeItemBaseData = TreeItemBaseData> = T & {
  /** List of children items */
  children?: TreeItemData<T>[];
};

/**
 * Flattened representation of a tree item for rendering.
 * @template T - Type extending TreeItemData
 */
export interface FlattenedItem<T extends TreeItemData> {
  /** Internal unique identifier */
  _id: string;
  /** Index position in the flattened list */
  index: number;
  /** Item value identifier */
  value: string;
  /** Original tree item data */
  data: T;
  /** Display label for the item */
  label: ReactNode;
  /** Depth level in the tree hierarchy (0-based) */
  level: number;
  /** Indicates if this item has children. Set to `true` when children exist. */
  hasChildren: boolean;
  /** Reference to the parent item data */
  parent?: T;
  /** Binding properties for rendering */
  bind: {
    /** Original tree item data */
    data: T;
    /** Depth level in the tree hierarchy */
    level: number;
    /** Additional custom properties */
    [key: string]: any;
  };
}

/**
 * Context value provided by TreeRoot for child components.
 * @template T - Type extending TreeItemData
 */
export interface TreeRootContextValue<T extends TreeItemData = TreeItemData> {
  /** Current selected value(s) of the tree */
  modelValue?: MaybeArray<string>;
  /** Array of currently selected item keys */
  selectedKeys: string[];
  /** Array of currently expanded item keys */
  expanded: string[];
  /** Flattened list of expanded tree items */
  expandedItems: FlattenedItem<T>[];
  /** Original tree data items */
  items: T[];
  /**
   * Controls the selection mode of the tree.
   * Set to `true` to allow multiple items to be selected.
   */
  multiple: boolean | undefined;
  /**
   * Controls user interaction with the entire tree.
   * Set to `true` to prevent all interactions.
   */
  disabled: boolean | undefined;
  /** How multiple selection should behave in the collection */
  selectionBehavior: TreeSelectBehavior | undefined;
  /**
   * Controls whether selecting a parent automatically selects its children.
   * Set to `true` to enable downward selection propagation.
   */
  propagateSelect: boolean | undefined;
  /**
   * Controls whether selecting all children automatically selects the parent.
   * Set to `true` to enable upward selection propagation.
   */
  bubbleSelect: boolean | undefined;
  /**
   * Controls whether parent nodes with children can be selected.
   * Set to `true` to allow parent selection.
   */
  allowParentSelect: boolean | undefined;
  /** Callback function when an item is selected */
  onSelect: (value: string) => void;
  /** Callback function when an item is toggled (expanded/collapsed) */
  onToggle: (value: string) => void;
}

/**
 * Props passed to the render function of TreeRoot.
 * @template T - Type extending TreeItemData
 */
export interface TreeRootRenderProps<T extends TreeItemData = TreeItemData> {
  /** Flattened list of all tree items for rendering */
  flattenItems: FlattenedItem<T>[];
  /** Current selected value(s) */
  modelValue: string | string[] | undefined;
  /** Array of currently expanded item keys */
  expanded: string[];
  /** Function to select an item by its value */
  select: (value: string) => void;
  /** Function to toggle (expand/collapse) an item by its value */
  toggle: (value: string) => void;
}
/** Custom event type for tree item selection events */
export type TreeSelectEvent = CustomEvent<{
  /** The original browser event that triggered the selection */
  originalEvent: MouseEvent | KeyboardEvent;
  /** Value identifier of the selected item */
  value?: string;
  /** Indicates if the item is expanded. Set to `true` when expanded. */
  isExpanded: boolean;
  /** Indicates if the item is selected. Set to `true` when selected. */
  isSelected: boolean;
}>;

/** Custom event type for tree item toggle (expand/collapse) events */
export type TreeToggleEvent = CustomEvent<{
  /** The original browser event that triggered the toggle */
  originalEvent: MouseEvent | KeyboardEvent;
  /** Value identifier of the toggled item */
  value?: string;
  /** Indicates if the item is expanded. Set to `true` when expanded. */
  isExpanded: boolean;
  /** Indicates if the item is selected. Set to `true` when selected. */
  isSelected: boolean;
}>;

/** Props passed to the render function of a tree item */
export interface TreeItemRenderProps {
  /** Indicates if the item is expanded. Set to `true` when expanded. */
  isExpanded: boolean;
  /** Indicates if the item is selected. Set to `true` when selected. */
  isSelected: boolean;
  /** Indicates if the item is in an indeterminate state (some children selected). Set to `true` for indeterminate state. */
  isIndeterminate: boolean | undefined;
  /** Indicates if the item has children. Set to `true` when children exist. */
  hasChildren: boolean;
}

/** Props for the TreeItem component */
export interface TreeItemProps extends StyledComponentProps<Omit<ComponentPropsWithoutRef<'li'>, 'children' | 'onSelect' | 'onToggle'>> {
  /** Unique identifier for this tree item */
  value: string;
  /** Depth level in the tree hierarchy (0-based) */
  level: number;
  /** Prevents user interaction with the item. Set to `true` to disable. */
  disabled?: boolean;
  /** Content of the tree item, can be a ReactNode or a render function */
  children?: ReactNode | ((props: TreeItemRenderProps) => ReactNode);
  /** Prevents selection of the item. Set to `true` to disable selection only. */
  disabledSelect?: boolean;
  /** Prevents toggling (expand/collapse) of the item. Set to `true` to disable toggle only. */
  disabledToggle?: boolean;
  /** Callback function when the item is selected */
  onSelect?: (event: TreeSelectEvent) => void;
  /** Callback function when the item is toggled (expanded/collapsed) */
  onToggle?: (event: TreeToggleEvent) => void;
  /** Size of the indentation per level in pixels */
  indentSize?: number;
}

/**
 * Props for the TreeRoot component with full control over rendering.
 * @template T - Type extending TreeItemData
 */
export interface TreeRootProps<T extends TreeItemData = TreeItemData>
  extends StyledComponentProps<Omit<ComponentPropsWithRef<'ul'>, 'defaultValue' | 'children'>> {
  /** List of tree items */
  items: T[];
  /** Controlled value of the tree */
  value?: MaybeArray<string>;
  /** Default value of the tree */
  defaultValue?: MaybeArray<string>;
  /** Callback function that is called when the value changes */
  onValueChange?: (value: MaybeArray<string>) => void;
  /** The controlled value of the expanded item. Can be bound-with with `v-model`. */
  expanded?: string[];
  /** The value of the expanded tree when initially rendered. */
  defaultExpanded?: string[];
  /** Callback function that is called when the expanded value changes */
  onExpandedChange?: (expanded: string[]) => void;
  /**
   * Controls the selection mode of the tree.
   * Set to `true` to allow multiple items to be selected.
   */
  multiple?: boolean;
  /** How multiple selection should behave in the collection. */
  selectionBehavior?: TreeSelectBehavior;
  /**
   * Determines whether a "single" or "multiple" items can be toggled at a time.
   *
   * @defaultValue 'multiple'
   */
  toggleBehavior?: TreeToggleBehavior;
  /**
   * Controls user interaction with the entire tree.
   * Set to `true` to prevent all interactions.
   */
  disabled?: boolean;
  /**
   * Controls whether selecting a parent automatically selects its children.
   * Set to `true` to enable downward selection propagation.
   */
  propagateSelect?: boolean;
  /**
   * Controls whether selecting all children automatically selects the parent.
   * Set to `true` to enable upward selection propagation.
   */
  bubbleSelect?: boolean;
  /**
   * Controls whether parent nodes with children can be selected.
   * Set to `true` to allow parent selection.
   */
  allowParentSelect?: boolean;

  /** Render function that receives tree state and utilities for custom rendering */
  children: (props: TreeRootRenderProps<T>) => ReactNode;

  /** Content to display at the top of the tree */
  top?: ReactNode;

  /** Content to display at the bottom of the tree */
  bottom?: ReactNode;
}

/** Props for the Tree component with simplified API */
export interface TreeProps<T extends TreeItemData = TreeItemData> extends Omit<TreeRootProps<T>, 'children' | 'onSelect' | 'onToggle'>, Pick<TreeItemProps, 'onSelect' | 'onToggle' | 'indentSize' | 'disabledToggle' | 'disabledSelect'> {
  /** Custom class names for tree component slots */
  classNames?: TreeClassNames;

  /** Custom render function for tree items, receives item state and tree state */
  renderItem?: (props: TreeItemRenderProps & { item: FlattenedItem<T> } & TreeRootRenderProps<T>) => ReactNode;
}
