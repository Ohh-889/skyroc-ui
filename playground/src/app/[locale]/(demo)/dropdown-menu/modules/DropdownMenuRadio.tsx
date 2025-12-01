'use client';

import { useState } from 'react';
import { Button, DropdownMenuRadio } from 'skyroc-ui';
import { menus3 } from './shared';

const DropdownMenuRadioDemo = () => {
  const [value, setValue] = useState<string>('');

  return (
    <DropdownMenuRadio
      items={menus3}
      value={value}
      onValueChange={setValue}
    >
      <Button variant="pure">Radio Dropdown</Button>
    </DropdownMenuRadio>
  );
};

export default DropdownMenuRadioDemo;
