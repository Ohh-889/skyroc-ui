import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const AlertDialogSuccess = () => {
  return (
    <AlertDialog
      description="You have successfully completed the task"
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
    />
  );
};

export default AlertDialogSuccess;
