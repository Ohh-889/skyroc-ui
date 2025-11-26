import { TriangleAlert, X } from 'lucide-react';
import { Alert, ButtonIcon } from 'skyroc-ui';

const AlertComplete = () => {
  return (
    <Alert
      color="destructive"
      description="Your session has expired. Please log in again."
      icon={<TriangleAlert />}
      title="Error"
      variant="ghost"
      trailing={(
        <ButtonIcon
          fitContent={false}
          variant="ghost"
        >
          <X />
        </ButtonIcon>
      )}
    />
  );
};

export default AlertComplete;
