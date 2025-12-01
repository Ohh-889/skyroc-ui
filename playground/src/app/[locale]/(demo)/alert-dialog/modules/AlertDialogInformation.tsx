import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const AlertDialogInformation = () => {
  return (
    <AlertDialog
      showCancel={false}
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
      Here is some information for you
    </AlertDialog>
  );
};

export default AlertDialogInformation;
