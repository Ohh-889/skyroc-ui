import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import DrawerBasic from './modules/DrawerBasic';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('drawer');
}

const DrawerPage = () => {
  return (
    <Card
      split
      title="Drawer"
    >
      <DrawerBasic />
    </Card>
  );
};

export default DrawerPage;
