import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const AlertDialogWarning = () => {
  return (
    <AlertDialog
      title="Warning"
      type="warning"
      trigger={(
        <Button
          color="warning"
          variant="outline"
        >
          Show Dialog
        </Button>
      )}
    >
      Be careful with this action
    </AlertDialog>
  );
};

export default AlertDialogWarning;
