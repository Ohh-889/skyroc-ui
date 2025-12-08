'use client';

import { useState, useMemo } from 'react';
import { TreeRoot, TreeItem, Icon } from 'skyroc-ui';
import type { DemoTreeItem } from './shared';
import { generateLargeTreeData } from './shared';

const TreeVirtualizer = () => {
  const [value, setValue] = useState<string | undefined>();
  const [expanded, setExpanded] = useState<string[]>(['folder-0', 'folder-1']);
  const largeData = useMemo(() => generateLargeTreeData(50), []);

  return (
    <div className="w-full max-w-[360px]">
      <p className="text-muted-foreground mb-2 text-sm">50 folders with nested children</p>

      <div className="border-border h-[300px] overflow-auto rounded-md border">
        <TreeRoot
          expanded={expanded}
          items={largeData}
          value={value}
          onExpandedChange={setExpanded}
          onValueChange={v => setValue(v as string | undefined)}
        >
          {({ flattenItems }) => flattenItems.map((item) => {
            const data = item.data as DemoTreeItem;
            return (
              <TreeItem
                key={item._id}
                level={item.level}
                value={item.value}
              >
                {({ isExpanded, hasChildren }) => (
                  <>
                    {hasChildren
                      ? (
                        <Icon
                          className="size-4 shrink-0 transition-transform"
                          icon={isExpanded ? 'lucide:chevron-down' : 'lucide:chevron-right'}
                        />
                      )
                      : <span className="w-4" />}

                    <Icon
                      className={`size-4 shrink-0 ${hasChildren ? 'text-amber-500' : 'text-blue-500'}`}
                      icon={hasChildren ? (isExpanded ? 'lucide:folder-open' : 'lucide:folder') : 'lucide:file'}
                    />

                    <span className="truncate">{data.label}</span>
                  </>
                )}
              </TreeItem>
            );
          })}
        </TreeRoot>
      </div>
    </div>
  );
};

export default TreeVirtualizer;
