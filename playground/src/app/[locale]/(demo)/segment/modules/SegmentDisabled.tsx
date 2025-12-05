'use client';

import { useState } from 'react';
import type { SegmentProps } from 'skyroc-ui';
import { Card, Segment } from 'skyroc-ui';

const items: SegmentProps['items'] = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week', disabled: true },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year', disabled: true }
];

const SegmentDisabled = () => {
  const [value, setValue] = useState('day');

  return (
    <div className="flex-c gap-3">
      <Card title="Disabled Items">
        <Segment
          items={items}
          value={value}
          onValueChange={setValue}
        />
      </Card>

      <Card title="Disabled All">
        <Segment
          disabled
          items={items}
          value={value}
          onValueChange={setValue}
        />
      </Card>
    </div>
  );
};

export default SegmentDisabled;
