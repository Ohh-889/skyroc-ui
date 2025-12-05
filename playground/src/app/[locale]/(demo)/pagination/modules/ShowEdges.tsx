'use client';

import { Card, Pagination } from 'skyroc-ui';

const ShowEdges = () => {
  return (
    <Card
      split
      title="Show Edges"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">showEdges: true</span>

          <Pagination
            showEdges
            itemsPerPage={10}
            siblingCount={1}
            total={200}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">showEdges: false</span>

          <Pagination
            itemsPerPage={10}
            showEdges={false}
            siblingCount={1}
            total={200}
          />
        </div>
      </div>
    </Card>
  );
};

export default ShowEdges;
