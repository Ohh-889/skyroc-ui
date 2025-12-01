import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import CheckboxBasic from './modules/CheckboxBasic';
import CheckboxColor from './modules/CheckboxColor';
import CheckboxDisabled from './modules/CheckboxDisabled';
import CheckboxIndeterminate from './modules/CheckboxIndeterminate';
import CheckboxSize from './modules/CheckboxSize';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('checkbox');
}

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
