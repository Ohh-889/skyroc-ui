'use client';

import { useState } from 'react';
import { Button, DropdownMenu } from 'skyroc-ui';

const placements = [
  { type: 'label' as const, label: 'Tooltip Placement' },
  { label: 'Top Start', value: 'top-start' },
  { label: 'Top', value: 'top' },
  { label: 'Top End', value: 'top-end' },
  { label: 'Right Start', value: 'right-start' },
  { label: 'Right', value: 'right' },
  { label: 'Right End', value: 'right-end' },
  { label: 'Bottom Start', value: 'bottom-start' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Bottom End', value: 'bottom-end' },
  { label: 'Left Start', value: 'left-start' },
  { label: 'Left', value: 'left' },
  { label: 'Left End', value: 'left-end' }
];

const DropdownMenuRadio = () => {
  const [placement, setPlacement] = useState('top-start');

  const activeLabel = placements.find(item => item.value === placement)?.label;

  return (
    <DropdownMenu
      items={[
        {
          type: 'radio',
          value: placement,
          onValueChange: setPlacement,
          children: placements
        }
      ]}
    >
      <Button
        className="w-30"
        variant="plain"
      >
        {activeLabel}
      </Button>
    </DropdownMenu>
  );
};

export default DropdownMenuRadio;
