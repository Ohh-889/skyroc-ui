'use client';

import type { PaginationProps } from 'skyroc-ui';
import { Card, Pagination } from 'skyroc-ui';

const shapes: PaginationProps['shape'][] = ['rounded', 'square'];

const Shape = () => {
  return (
    <Card
      split
      title="Shape"
    >
      <div className="flex flex-col gap-4">
        {shapes.map(shape => (
          <div
            className="flex flex-col gap-2"
            key={shape}
          >
            <span className="text-muted-foreground text-sm capitalize">{shape}</span>

            <Pagination
              showEdges
              itemsPerPage={10}
              shape={shape}
              siblingCount={1}
              total={200}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Shape;
