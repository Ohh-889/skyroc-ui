'use client';

import { useState } from 'react';
import { Button, DropdownMenuCheckbox } from 'skyroc-ui';
import { menus2 } from './shared';

const DropdownMenuCheckboxDemo = () => {
  const [checks, setChecks] = useState<string[]>([]);

  return (
    <DropdownMenuCheckbox
      checks={checks}
      items={menus2}
      onChecksChange={setChecks}
    >
      <Button variant="pure">Checkbox Dropdown</Button>
    </DropdownMenuCheckbox>
  );
};

export default DropdownMenuCheckboxDemo;
