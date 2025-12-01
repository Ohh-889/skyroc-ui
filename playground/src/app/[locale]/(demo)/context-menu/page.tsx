import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import ContextMenuBasic from './modules/ContextMenuBasic';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('context-menu');
}

const ContextMenuPage = () => {
  return (
    <Card
      split
      title="Context Menu"
    >
      <ContextMenuBasic />
    </Card>
  );
};

export default ContextMenuPage;
