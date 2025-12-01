import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const AlertDialogSuccess = () => {
  return (
    <AlertDialog
      showCancel={false}
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
      You have successfully completed the task
    </AlertDialog>
  );
};

export default AlertDialogSuccess;
