'use client';

import { useRef } from 'react';
import { Button, Card, useVirtualizer } from 'skyroc-ui';

interface ListItem {
  id: number;
  name: string;
}

const data: ListItem[] = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item ${i + 1}`
}));

const VirtualizerHook = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const { virtualItems, totalSize, scrollToIndex } = useVirtualizer({
    parentRef,
    count: data.length,
    estimateSize: 40,
    overscan: 5
  });

  return (
    <Card
      split
      title="使用 Hook"
    >
      <p className="text-muted-foreground mb-4 text-sm">
        直接使用 useVirtualizer hook，获得更多控制能力
      </p>

      <div className="mb-4 flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => scrollToIndex(0)}
        >
          滚动到顶部
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={() => scrollToIndex(4999, { align: 'center' })}
        >
          滚动到中间 (5000)
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={() => scrollToIndex(9999, { align: 'end' })}
        >
          滚动到底部
        </Button>
      </div>

      <div
        className="overflow-auto rounded-lg border"
        ref={parentRef}
        style={{ height: 300 }}
      >
        <div
          className="relative w-full"
          style={{ height: totalSize }}
        >
          {virtualItems.map((virtualItem) => {
            const item = data[virtualItem.index];

            return (
              <div
                className="hover:bg-accent absolute top-0 left-0 flex w-full items-center border-b px-4 transition-colors"
                key={item.id}
                style={{
                  height: virtualItem.size,
                  transform: `translateY(${virtualItem.start}px)`
                }}
              >
                <span className="text-muted-foreground font-mono text-xs">
                  {String(virtualItem.index + 1).padStart(5, '0')}
                </span>

                <span className="ml-4">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default VirtualizerHook;
