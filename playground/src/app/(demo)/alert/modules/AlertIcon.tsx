import { Rocket } from 'lucide-react';
import { Alert } from 'skyroc-ui';

const AlertWithIcon = () => {
  return (
    <Alert
      color="success"
      icon={<Rocket />}
      title="Flighting !!!"
      variant="outline"
    />
  );
};

export default AlertWithIcon;
