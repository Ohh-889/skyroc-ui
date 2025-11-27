import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import AlertDialogCustomIcon from './modules/AlertDialogCustomIcon';
import AlertDialogDestructive from './modules/AlertDialogDestructive';
import AlertDialogInformation from './modules/AlertDialogInformation';
import AlertDialogSize from './modules/AlertDialogSize';
import AlertDialogSuccess from './modules/AlertDialogSuccess';
import AlertDialogTypes from './modules/AlertDialogTypes';
import AlertDialogWarning from './modules/AlertDialogWarning';
import AlertDialogWithDescription from './modules/AlertDialogWithDescription';

export const metadata: Metadata = generateComponentMetadata('alert-dialog');

const AlertDialogPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Types"
      >
        <AlertDialogTypes />
      </Card>

      <Card
        split
        title="Destructive"
      >
        <AlertDialogDestructive />
      </Card>

      <Card
        split
        title="Success"
      >
        <AlertDialogSuccess />
      </Card>

      <Card
        split
        title="Warning"
      >
        <AlertDialogWarning />
      </Card>

      <Card
        split
        title="Information"
      >
        <AlertDialogInformation />
      </Card>

      <Card
        split
        title="Size"
      >
        <AlertDialogSize />
      </Card>

      <Card
        split
        title="Custom Icon"
      >
        <AlertDialogCustomIcon />
      </Card>

      <Card
        split
        title="With Description"
      >
        <AlertDialogWithDescription />
      </Card>
    </div>
  );
};

export default AlertDialogPage;
