'use client';

import { Card, VirtualGrid } from 'skyroc-ui';

interface GridItem {
  id: number;
  content: string;
}

const data: GridItem[] = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  content: `Cell ${i + 1}`
}));

const VirtualGridBasic = () => {
  return (
    <Card
      split
      title="虚拟网格"
    >
      <p className="text-muted-foreground mb-4 text-sm">
        渲染 10,000 个单元格的虚拟网格，支持行列虚拟化
      </p>

      <VirtualGrid
        columns={10}
        columnWidth={100}
        data={data}
        gap={1}
        height={300}
        rowHeight={60}
        width="100%"
        classNames={{
          root: 'border rounded-lg'
        }}
        renderCell={(item, rowIndex, colIndex, style) => (
          <div
            className="bg-accent/30 hover:bg-accent flex flex-col items-center justify-center border transition-colors"
            key={item.id}
            style={style}
          >
            <span className="text-sm font-medium">{item.content}</span>

            <span className="text-muted-foreground mt-1 text-xs">
              [
              {rowIndex}
              ,
              {' '}
              {colIndex}
              ]
            </span>
          </div>
        )}
      />
    </Card>
  );
};

export default VirtualGridBasic;
