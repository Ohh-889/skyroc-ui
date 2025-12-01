import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const AlertDialogSize = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {sizes.map(size => (
        <AlertDialog
          key={size}
          size={size}
          title="Dialog Title"
          type="info"
          trigger={(
            <Button
              color="info"
              variant="outline"
            >
              {size}
            </Button>
          )}
        >
          Dialog content goes here
        </AlertDialog>
      ))}
    </div>
  );
};

export default AlertDialogSize;
