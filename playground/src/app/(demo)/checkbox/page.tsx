import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';

export const metadata: Metadata = generateComponentMetadata('checkbox');
import CheckboxBasic from './modules/CheckboxBasic';
import CheckboxColor from './modules/CheckboxColor';
import CheckboxDisabled from './modules/CheckboxDisabled';
import CheckboxIndeterminate from './modules/CheckboxIndeterminate';
import CheckboxSize from './modules/CheckboxSize';

const CheckboxPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <CheckboxBasic />
      </Card>

      <Card
        split
        title="Color"
      >
        <CheckboxColor />
      </Card>

      <Card
        split
        title="Size"
      >
        <CheckboxSize />
      </Card>

      <Card
        split
        title="States"
      >
        <CheckboxIndeterminate />
      </Card>

      <Card
        split
        title="Disabled"
      >
        <CheckboxDisabled />
      </Card>
    </div>
  );
};

export default CheckboxPage;
