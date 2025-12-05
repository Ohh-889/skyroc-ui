'use client';

import { Card, Pagination } from 'skyroc-ui';

const ShowFirstLast = () => {
  return (
    <Card
      split
      title="Show First/Last Buttons"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">showFirstLast: true (default)</span>

          <Pagination
            showEdges
            showFirstLast
            itemsPerPage={10}
            siblingCount={1}
            total={200}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">showFirstLast: false</span>

          <Pagination
            showEdges
            itemsPerPage={10}
            showFirstLast={false}
            siblingCount={1}
            total={200}
          />
        </div>
      </div>
    </Card>
  );
};

export default ShowFirstLast;
