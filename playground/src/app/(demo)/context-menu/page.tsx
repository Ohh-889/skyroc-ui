import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import ContextMenuBasic from './modules/ContextMenuBasic';

export const metadata: Metadata = generateComponentMetadata('context-menu');

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
