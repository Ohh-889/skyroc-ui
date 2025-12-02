import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const AlertDialogInformation = () => {
  return (
    <AlertDialog
      description="Here is some information for you"
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
    />
  );
};

export default AlertDialogInformation;
