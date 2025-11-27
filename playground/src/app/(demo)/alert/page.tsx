import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';

export const metadata: Metadata = generateComponentMetadata('alert');
import AlertColor from './modules/AlertColor';
import AlertComplete from './modules/AlertComplete';
import AlertWithDescription from './modules/AlertDescription';
import AlertWithIcon from './modules/AlertIcon';
import AlertSizeDemo from './modules/AlertSize';
import AlertVariantDemo from './modules/AlertVariant';

const AlertPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Color"
      >
        <AlertColor />
      </Card>

      <Card
        split
        title="Variant"
      >
        <AlertVariantDemo />
      </Card>

      <Card
        split
        title="With Description"
      >
        <AlertWithDescription />
      </Card>

      <Card
        split
        title="With Icon"
      >
        <AlertWithIcon />
      </Card>

      <Card
        split
        title="Complete Example"
      >
        <AlertComplete />
      </Card>

      <Card
        split
        title="Size"
      >
        <AlertSizeDemo />
      </Card>
    </div>
  );
};

export default AlertPage;
