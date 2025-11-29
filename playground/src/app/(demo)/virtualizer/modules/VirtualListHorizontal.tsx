'use client';

import { Card, VirtualList } from 'skyroc-ui';

interface CardItem {
  id: number;
  title: string;
  color: string;
}

const colors = [
  'bg-red-500/20',
  'bg-orange-500/20',
  'bg-yellow-500/20',
  'bg-green-500/20',
  'bg-teal-500/20',
  'bg-blue-500/20',
  'bg-indigo-500/20',
  'bg-purple-500/20',
  'bg-pink-500/20'
];

const data: CardItem[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  title: `Card ${i + 1}`,
  color: colors[i % colors.length]
}));

const VirtualListHorizontal = () => {
  return (
    <Card
      split
      title="水平虚拟列表"
    >
      <p className="mb-4 text-muted-foreground text-sm">
        支持水平滚动的虚拟列表，适合横向展示内容
      </p>
      <VirtualList
        horizontal
        classNames={{
          root: 'border rounded-lg'
        }}
        data={data}
        height={120}
        itemSize={150}
        width="100%"
        renderItem={(item, index, style) => (
          <div
            key={item.id}
            className="p-2"
            style={style}
          >
            <div
              className={`flex h-full w-full flex-col items-center justify-center rounded-lg border ${item.color}`}
            >
              <span className="font-medium">{item.title}</span>
              <span className="mt-1 text-muted-foreground text-xs">Index: {index}</span>
            </div>
          </div>
        )}
      />
    </Card>
  );
};

export default VirtualListHorizontal;

