'use client';

import { Icon } from '../icon';
import TreeItem from './TreeItem';
import TreeRoot from './TreeRoot';
import type { FlattenedItem, TreeItemData, TreeProps } from './types';

const DefaultIndicator = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <span
      className="flex shrink-0 items-center justify-center transition-transform duration-200 data-[expanded]:rotate-90"
      data-expanded={isExpanded ? '' : undefined}
    >
      <Icon
        className="transition-transform duration-200"
        icon="lucide:chevron-right"
        style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
      />
    </span>
  );
};

const TreeUI = <T extends TreeItemData = TreeItemData>(props: TreeProps<T>) => {
  const { items, className, renderItem, classNames, size, onSelect, onToggle, indentSize, disabledToggle, disabledSelect, ref, ...rest } = props;

  const defaultRenderItemContent = (item: FlattenedItem<T>, isExpanded: boolean, hasChildren: boolean, isSelected: boolean) => {
    const indicator = hasChildren
      ? (
        <DefaultIndicator
          isExpanded={isExpanded}
        />
      )
      : <span className="w-4" />;
    const label = 'label' in item.data ? (item.data).label : item.value;
    return (
      <div
        className="hover:bg-muted focus-visible:ring-primary data-[selected]:bg-primary/10 data-[selected]:text-primary flex size-full items-center gap-2 rounded-md py-2 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none data-[disabled]:hover:bg-transparent"
        data-selected={isSelected ? '' : undefined}
      >
        {indicator}
        <span className="flex-1 truncate">{label}</span>
      </div>
    );
  };

  return (
    <TreeRoot
      className={className || classNames?.root}
      items={items}
      ref={ref}
      size={size}
      {...rest}
    >
      {({ flattenItems, modelValue, expanded, select, toggle }) => flattenItems.map(item => (
        <TreeItem
          className={classNames?.item}
          disabled={item.data.disabled}
          disabledSelect={disabledSelect}
          disabledToggle={disabledToggle}
          indentSize={indentSize}
          key={item._id}
          level={item.level}
          value={item.value}
          onSelect={onSelect}
          onToggle={onToggle}
        >
          {({ isExpanded, isSelected, isIndeterminate, hasChildren }) =>
            renderItem ? renderItem({ item, isExpanded, isSelected, isIndeterminate, hasChildren, flattenItems, modelValue, expanded, select, toggle }) : defaultRenderItemContent(item, isExpanded, hasChildren, isSelected)}
        </TreeItem>
      ))}
    </TreeRoot>
  );
};

export default TreeUI;
