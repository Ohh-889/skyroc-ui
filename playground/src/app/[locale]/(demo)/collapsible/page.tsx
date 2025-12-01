import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import CollapsibleBasic from './modules/CollapsibleBasic';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('collapsible');
}

const CollapsiblePage = () => {
  return (
    <Card
      split
      title="Collapsible"
    >
      <CollapsibleBasic />
    </Card>
  );
};

export default CollapsiblePage;
