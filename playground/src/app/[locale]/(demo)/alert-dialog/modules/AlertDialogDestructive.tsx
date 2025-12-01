import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, Button } from 'skyroc-ui';

const AlertDialogDestructive = () => {
  return (
    <AlertDialog
      title="Are you sure delete?"
      type="destructive"
      footer={[
        <AlertDialogCancel key="cancel">Cancel</AlertDialogCancel>,
        <AlertDialogAction key="action">Confirm</AlertDialogAction>
      ]}
      trigger={(
        <Button
          color="destructive"
          variant="outline"
        >
          Show Dialog
        </Button>
      )}
    >
      <p>This action will delete all data</p>
    </AlertDialog>
  );
};

export default AlertDialogDestructive;
