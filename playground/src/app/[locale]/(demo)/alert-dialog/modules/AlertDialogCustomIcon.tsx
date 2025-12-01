'use client';
import { AlertDialog, Button } from 'skyroc-ui';
import { Heart } from 'lucide-react';

const AlertDialogCustomIcon = () => {
  return (
    <AlertDialog
      icon={<Heart className="text-destructive" />}
      title="Custom Icon"
      trigger={(
        <Button
          color="destructive"
          variant="outline"
        >
          Custom Icon
        </Button>
      )}
      onCancel={() => console.log('cancel')}
      onOk={() => console.log('ok')}
    >
      You can customize the icon displayed in the dialog
    </AlertDialog>
  );
};

export default AlertDialogCustomIcon;
