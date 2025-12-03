'use client';

import { useState } from 'react';
import { ContextMenu } from 'skyroc-ui';

const checkboxItems = [
  { type: 'label' as const, label: 'JS Frameworks' },
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
  { label: 'Preact', value: 'preact' }
];

const ContextMenuCheckbox = () => {
  const [checks, setChecks] = useState<string[]>(['vue', 'solid']);

  return (
    <ContextMenu
      items={[
        {
          type: 'checkbox',
          checks,
          onChecksChange: setChecks,
          children: checkboxItems
        }
      ]}
    >
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm max-sm:w-auto">
        Right click here
      </div>
    </ContextMenu>
  );
};

export default ContextMenuCheckbox;
