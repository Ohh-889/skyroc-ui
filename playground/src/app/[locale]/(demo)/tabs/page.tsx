import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import Custom from './modules/Custom';
import Fill from './modules/Fill';
import Horizontal from './modules/Horizontal';
import Vertical from './modules/Vertical';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('tabs');
}

const TabsPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Horizontal"
      >
        <Horizontal />
      </Card>

      <Card
        split
        title="Vertical"
      >
        <Vertical />
      </Card>

      <Card
        split
        title="Fill: auto"
      >
        <Fill />
      </Card>

      <Card
        split
        title="Custom Style"
      >
        <Custom />
      </Card>
    </div>
  );
};

export default TabsPage;
