'use client';

import { Card, Pagination } from 'skyroc-ui';

const Default = () => {
  return (
    <Card
      split
      title="Default"
    >
      <Pagination
        showEdges
        itemsPerPage={10}
        siblingCount={1}
        total={200}
      />
    </Card>
  );
};

export default Default;
