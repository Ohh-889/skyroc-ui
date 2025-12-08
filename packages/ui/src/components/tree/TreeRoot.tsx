'use client';

import { useCallback, useMemo, useRef } from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { cn } from '@/lib/utils';
import { TreeRootProvider } from './context';
import { flattenChildren, flattenItems, findParentPath } from './shared';
import type { FlattenedItem, TreeItemData, TreeRootProps } from './types';
import { useAutoAnimate } from './hooks';

const TreeRoot = <T extends TreeItemData = TreeItemData>(props: TreeRootProps<T>) => {
  const {
    items,
    value: controlledValue,
    defaultValue,
    onValueChange,
    expanded: controlledExpanded,
    defaultExpanded = [],
    onExpandedChange,
    multiple,
    selectionBehavior = 'toggle',
    toggleBehavior = 'multiple',
    disabled,
    propagateSelect,
    ref,
    top,
    bottom,
    bubbleSelect,
    allowParentSelect,
    size,
    className,
    children,
    ...rest
  } = props;

  const [animateRef] = useAutoAnimate();

  const firstValue = useRef<string>('');

  const interRef = useComposedRefs(animateRef, ref);

  const [modelValue, setModelValue] = useControllableState({
    caller: 'tree-root',
    defaultProp: defaultValue ?? (multiple ? [] : ''),
    onChange: onValueChange,
    prop: controlledValue
  });

  const [expanded, setExpanded] = useControllableState({
    caller: 'tree-root-expanded',
    defaultProp: defaultExpanded,
    onChange: onExpandedChange,
    prop: controlledExpanded
  });

  const selectedKeys = useMemo(() => {
    if (multiple && Array.isArray(modelValue)) {
      return modelValue;
    }
    return modelValue ? [modelValue] as string[] : [];
  }, [multiple, modelValue]);

  const expandedItems = flattenItems(items, expanded);

  const onSelect = useCallback((value: string) => {
    if (disabled) {
      return;
    }

    const item = expandedItems.find(i => i.value === value);

    if (item?.hasChildren && !allowParentSelect) {
      return;
    }

    let newValue: string | string[];

    if (multiple && Array.isArray(modelValue)) {
      if (selectionBehavior === 'replace') {
        newValue = [value];
        firstValue.current = value;
      }
      else {
        const index = modelValue.findIndex(v => v === value);
        newValue = index !== -1 ? modelValue.filter(v => v !== value) : [...modelValue, value];
      }
    }
    else if (selectionBehavior === 'replace') {
      newValue = value;
    }
    else if (!Array.isArray(modelValue) && modelValue === value) {
      newValue = '';
    }
    else {
      newValue = value;
    }

    if (bubbleSelect && multiple && Array.isArray(newValue) && item) {
      const bubbleUp = (currentItem: FlattenedItem<TreeItemData>) => {
        if (!currentItem.parent) {
          return;
        }
        const parentItem = expandedItems.find(i => i.value === currentItem.parent?.value);
        if (!parentItem) {
          return;
        }
        const isAllSelected = parentItem.data.children?.every(child => (newValue as string[]).includes(child.value));
        if (isAllSelected) {
          newValue = [...newValue as string[], parentItem.data.value];
        }
        else {
          newValue = (newValue as string[]).filter(v => v !== parentItem.data.value);
        }
        bubbleUp(parentItem);
      };
      bubbleUp(item);
    }

    if (propagateSelect && multiple && Array.isArray(newValue) && item) {
      const children = flattenChildren(item.data.children);
      const isSelected = newValue.includes(value);
      if (isSelected) {
        newValue = newValue.filter(v => !children.some(child => child.value === v));
      }
      else {
        newValue = [...newValue, ...children.map(child => child.value)];
      }
    }

    setModelValue(newValue);
  }, [disabled, expandedItems, allowParentSelect, multiple, modelValue, selectionBehavior, bubbleSelect, propagateSelect, setModelValue]);

  const onToggle = useCallback((value: string) => {
    if (disabled) {
      return;
    }
    const item = expandedItems.find(i => i.value === value);
    if (!item?.data?.children) {
      return;
    }
    if (expanded.includes(value)) {
      setExpanded(expanded.filter(v => v !== value));
      return;
    }
    if (toggleBehavior === 'single') {
      const parentPath = findParentPath(value, items);
      setExpanded(parentPath ? [...parentPath, value] : [value]);
    }
    else {
      setExpanded([...expanded, value]);
    }
  }, [disabled, expandedItems, expanded, toggleBehavior, items, setExpanded]);

  const contextValue = useMemo(() => ({
    modelValue,
    expanded,
    selectedKeys,
    expandedItems,
    items,
    multiple,
    disabled,
    selectionBehavior,
    propagateSelect,
    bubbleSelect,
    allowParentSelect,
    isVirtual: false,
    size,
    onSelect,
    onToggle
  }), [modelValue, selectedKeys, expanded, expandedItems, items, multiple, disabled, selectionBehavior, propagateSelect, bubbleSelect, allowParentSelect, size, onSelect, onToggle]);

  return (
    <TreeRootProvider value={contextValue}>
      <ul
        aria-disabled={disabled || undefined}
        aria-multiselectable={multiple || undefined}
        className={cn(className)}
        data-disabled={disabled ? '' : undefined}
        ref={interRef}
        role="tree"
        {...rest}
      >
        {top}

        {
          // eslint-disable-next-line react-hooks/refs
          children({
            flattenItems: expandedItems,
            modelValue,
            expanded,
            select: onSelect,
            toggle: onToggle
          })
        }

        {bottom}
      </ul>
    </TreeRootProvider>
  );
};

export default TreeRoot;
