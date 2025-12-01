import React from 'react';
import { AlertDialog, AlertDialogAction, Button } from 'skyroc-ui';

const AlertDialogSuccess = () => {
  return (
    <AlertDialog
      footer={<AlertDialogAction key="action">Confirm</AlertDialogAction>}
      title="Congratulations"
      type="success"
      trigger={(
        <Button
          color="success"
          variant="outline"
        >
          Show Dialog
        </Button>
      )}
    >
      <p>You have successfully completed the task</p>
    </AlertDialog>
  );
};

export default AlertDialogSuccess;
