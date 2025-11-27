import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import DividerAlign from './modules/DividerAlign';
import DividerBasic from './modules/DividerBasic';
import DividerBorder from './modules/DividerBorder';
import DividerVertical from './modules/DividerVertical';

export const metadata: Metadata = generateComponentMetadata('divider');

const DividerPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Horizontal"
      >
        <DividerBasic />
      </Card>

      <Card
        split
        title="Vertical"
      >
        <DividerVertical />
      </Card>

      <Card
        split
        title="Align"
      >
        <DividerAlign />
      </Card>

      <Card
        split
        title="Border"
      >
        <DividerBorder />
      </Card>
    </div>
  );
};

export default DividerPage;
