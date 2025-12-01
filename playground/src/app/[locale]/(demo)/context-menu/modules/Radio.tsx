'use client';

import { useState } from 'react';
import { Card, ContextMenuRadio } from 'skyroc-ui';
import { menus3 } from '../../dropdown-menu/modules/shared';

const Radio = () => {
  const [value, setValue] = useState<string>('');

  return (
    <Card
      split
      title="Radio"
    >
      <ContextMenuRadio
        items={menus3}
        value={value}
        onValueChange={setValue}
      >
        <div className="flex h-50 w-80 items-center justify-center rounded-md border border-dashed text-sm max-sm:w-auto">
          Right click here
        </div>
      </ContextMenuRadio>
    </Card>
  );
};

export default Radio;
