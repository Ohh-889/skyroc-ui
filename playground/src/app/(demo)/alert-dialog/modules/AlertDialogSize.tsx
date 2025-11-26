import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, Button } from 'skyroc-ui';

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
          description="This is the dialog description text"
          footer={[
            <AlertDialogCancel key="cancel">Cancel</AlertDialogCancel>,
            <AlertDialogAction key="action">Confirm</AlertDialogAction>
          ]}
          trigger={(
            <Button
              color="info"
              variant="outline"
            >
              {size}
            </Button>
          )}
        >
          <p>Dialog content goes here</p>
        </AlertDialog>
      ))}
    </div>
  );
};

export default AlertDialogSize;

