import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import ContentScrollable from './modules/ContentScrollable';
import Side from './modules/Side';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('sheet');
}

const SheetPage = () => {
  return (
    <Card title="Sheet">
      <div className="flex-c gap-4">
        <Side />
        <ContentScrollable />
      </div>
    </Card>
  );
};

export default SheetPage;
