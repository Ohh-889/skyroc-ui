import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, Button } from 'skyroc-ui';

const AlertDialogWithDescription = () => {
  return (
    <AlertDialog
      title="Confirm Action"
      description="This is a description for the dialog"
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
          With Description
        </Button>
      )}
    >
      <p>Additional content can be added here</p>
    </AlertDialog>
  );
};

export default AlertDialogWithDescription;

