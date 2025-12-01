import { AlertDialog, AlertDialogAction, AlertDialogCancel, Button } from 'skyroc-ui';

const types = [
  {
    type: 'destructive',
    title: 'Are you sure delete?',
    content: 'This action will delete all data',
    hasCancel: true
  },
  {
    type: 'success',
    title: 'Congratulations',
    content: 'You have successfully completed the task',
    hasCancel: false
  },
  {
    type: 'warning',
    title: 'Warning',
    content: 'Be careful with this action',
    hasCancel: true
  },
  {
    type: 'info',
    title: 'Information',
    content: 'Here is some information for you',
    hasCancel: false
  }
] as const;

const AlertDialogTypes = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {types.map(({ type, title, content, hasCancel }) => (
        <AlertDialog
          key={type}
          title={title}
          type={type}
          footer={[
            hasCancel && <AlertDialogCancel key="cancel">Cancel</AlertDialogCancel>,
            <AlertDialogAction key="action">Confirm</AlertDialogAction>
          ].filter(Boolean)}
          trigger={(
            <Button
              color={type}
              variant="outline"
            >
              {type}
            </Button>
          )}
        >
          <p>{content}</p>
        </AlertDialog>
      ))}
    </div>
  );
};

export default AlertDialogTypes;
