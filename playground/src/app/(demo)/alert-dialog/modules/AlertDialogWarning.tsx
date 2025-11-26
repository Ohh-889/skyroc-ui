import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, Button } from 'skyroc-ui';

const AlertDialogWarning = () => {
  return (
    <AlertDialog
      title="Warning"
      type="warning"
      footer={[
        <AlertDialogCancel key="cancel">Cancel</AlertDialogCancel>,
        <AlertDialogAction key="action">Confirm</AlertDialogAction>
      ]}
      trigger={(
        <Button
          color="warning"
          variant="outline"
        >
          Show Dialog
        </Button>
      )}
    >
      <p>Be careful with this action</p>
    </AlertDialog>
  );
};

export default AlertDialogWarning;

