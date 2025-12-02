import React from 'react';
import { AlertDialog, Button } from 'skyroc-ui';

const AlertDialogWarning = () => {
  return (
    <AlertDialog
      description="Be careful with this action"
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
    />
  );
};

export default AlertDialogWarning;
