'use client';

import { Card, Pagination } from 'skyroc-ui';

const ActionAsSelected = () => {
  return (
    <Card
      split
      title="Action As Selected"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">actionAsSelected: true</span>

          <Pagination
            actionAsSelected
            showEdges
            itemsPerPage={10}
            siblingCount={1}
            total={200}
            variant="solid"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">actionAsSelected: false</span>

          <Pagination
            showEdges
            itemsPerPage={10}
            nextLabel="Next"
            previousLabel="Previous"
            siblingCount={1}
            total={200}
            variant="solid"
          />
        </div>
      </div>
    </Card>
  );
};

export default ActionAsSelected;
