import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const AlertDialogDestructive = () => {
  return (
    <AlertDialog
      description="This action will delete all data"
      okButtonProps={{ color: 'destructive' }}
      title="Are you sure delete?"
      type="destructive"
      trigger={(
        <Button
          color="destructive"
          variant="outline"
        >
          Show Dialog
        </Button>
      )}
    />
  );
};

export default AlertDialogDestructive;
