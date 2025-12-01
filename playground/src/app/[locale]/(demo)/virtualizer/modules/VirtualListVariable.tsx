'use client';

import { Card, VirtualList } from 'skyroc-ui';

interface ListItem {
  id: number;
  content: string;
  height: number;
}

const data: ListItem[] = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  content: `这是第 ${i + 1} 条内容，每条内容的高度都不一样`,
  height: 40 + Math.floor(Math.random() * 60) // 40-100px
}));

const VirtualListVariable = () => {
  return (
    <Card
      split
      title="可变高度列表"
    >
      <p className="text-muted-foreground mb-4 text-sm">
        每个项目的高度可以不同，支持动态计算
      </p>

      <VirtualList
        data={data}
        height={300}
        itemSize={index => data[index].height}
        classNames={{
          root: 'border rounded-lg'
        }}
        renderItem={(item, index, style) => (
          <div
            className="hover:bg-accent flex flex-col justify-center border-b px-4 transition-colors"
            key={item.id}
            style={style}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">
                Row
                {index + 1}
              </span>

              <span className="text-muted-foreground font-mono text-xs">
                height:
                {' '}
                {item.height}
                px
              </span>
            </div>

            <p className="text-muted-foreground mt-1 text-sm">{item.content}</p>
          </div>
        )}
      />
    </Card>
  );
};

export default VirtualListVariable;
