'use client';

import type { PaginationProps } from 'skyroc-ui';
import { Card, Pagination } from 'skyroc-ui';

const variants: PaginationProps['variant'][] = ['pure', 'solid', 'outline', 'soft'];

const Variant = () => {
  return (
    <Card
      split
      title="Variant"
    >
      <div className="flex flex-col gap-4">
        {variants.map(variant => (
          <div
            className="flex flex-col gap-2"
            key={variant}
          >
            <span className="text-muted-foreground text-sm capitalize">{variant}</span>

            <Pagination
              showEdges
              itemsPerPage={10}
              siblingCount={1}
              total={200}
              variant={variant}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Variant;
