'use client';

import { Card, ContextMenu } from 'skyroc-ui';
import { menus } from '../../dropdown-menu/modules/shared';

const WithArrow = () => {
  return (
    <Card
      split
      title="With Arrow"
    >
      <ContextMenu
        contentProps={{ showArrow: true }}
        items={menus}
      >
        <div className="flex h-50 w-80 items-center justify-center rounded-md border border-dashed text-sm max-sm:w-auto">
          Right click here
        </div>
      </ContextMenu>
    </Card>
  );
};

export default WithArrow;
