'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Card } from 'skyroc-ui';
const RowVirtualizerDynamic = dynamic(() => import('./VirtualListDynamic'), {
  ssr: false
});

const LazyModules = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card
        split
        title="虚拟列表"
      >
        <RowVirtualizerDynamic />
      </Card>
    </Suspense>

  );
};

export default LazyModules;
