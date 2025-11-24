'use client';

import { useState } from 'react';
import { Card, ContextMenuCheckbox } from 'skyroc-ui';
import { menus2 } from '../../dropdown-menu/modules/shared';

const Checkbox = () => {
  const [checks, setChecks] = useState<string[]>([]);

  return (
    <Card
      split
      title="Checkbox"
    >
      <ContextMenuCheckbox
        checks={checks}
        items={menus2}
        onChecksChange={setChecks}
      >
        <div className="flex h-50 w-80 items-center justify-center rounded-md border border-dashed text-sm max-sm:w-auto">
          Right click here
        </div>
      </ContextMenuCheckbox>
    </Card>
  );
};

export default Checkbox;
