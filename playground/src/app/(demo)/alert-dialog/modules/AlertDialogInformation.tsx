import React from 'react';
import { AlertDialog, AlertDialogAction, Button } from 'skyroc-ui';

const AlertDialogInformation = () => {
  return (
    <AlertDialog
      footer={<AlertDialogAction key="action">Confirm</AlertDialogAction>}
      title="Information"
      type="info"
      trigger={(
        <Button
          color="info"
          variant="outline"
        >
          Show Dialog
        </Button>
      )}
    >
      <p>Here is some information for you</p>
    </AlertDialog>
  );
};

export default AlertDialogInformation;

