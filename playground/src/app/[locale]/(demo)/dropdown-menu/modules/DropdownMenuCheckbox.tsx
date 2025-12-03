'use client';

import { useState } from 'react';
import { Button, DropdownMenu } from 'skyroc-ui';

const checkboxItems = [
  { type: 'label' as const, label: 'JS Frameworks' },
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
  { label: 'Preact', value: 'preact' }
];

const DropdownMenuCheckbox = () => {
  const [checks, setChecks] = useState<string[]>(['vue', 'solid']);

  return (
    <DropdownMenu
      items={[
        {
          type: 'checkbox',
          checks,
          onChecksChange: setChecks,
          children: checkboxItems
        }
      ]}
    >
      <Button variant="plain">Checkbox</Button>
    </DropdownMenu>
  );
};

export default DropdownMenuCheckbox;
