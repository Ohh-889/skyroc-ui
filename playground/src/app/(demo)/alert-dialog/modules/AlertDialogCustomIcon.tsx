import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, Button } from 'skyroc-ui';
import { Heart } from 'lucide-react';

const AlertDialogCustomIcon = () => {
  return (
    <AlertDialog
      title="Custom Icon"
      icon={<Heart className="text-destructive" />}
      footer={[
        <AlertDialogCancel key="cancel">Cancel</AlertDialogCancel>,
        <AlertDialogAction key="action">Confirm</AlertDialogAction>
      ]}
      trigger={(
        <Button
          color="destructive"
          variant="outline"
        >
          Custom Icon
        </Button>
      )}
    >
      <p>You can customize the icon displayed in the dialog</p>
    </AlertDialog>
  );
};

export default AlertDialogCustomIcon;

