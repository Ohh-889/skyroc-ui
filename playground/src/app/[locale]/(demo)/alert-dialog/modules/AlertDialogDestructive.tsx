import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const AlertDialogDestructive = () => {
  return (
    <AlertDialog
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
    >
      This action will delete all data
    </AlertDialog>
  );
};

export default AlertDialogDestructive;
