'use client';

import { Button, DropdownMenu } from 'skyroc-ui';
import { menus } from './shared';

const DropdownMenuWithArrow = () => {
  return (
    <DropdownMenu
      contentProps={{ showArrow: true }}
      items={menus}
    >
      <Button variant="pure">Open Dropdown</Button>
    </DropdownMenu>
  );
};

export default DropdownMenuWithArrow;
