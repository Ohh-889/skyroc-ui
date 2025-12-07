import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import TreeBasic from './modules/TreeBasic';
import TreeControlled from './modules/TreeControlled';
import TreeCustom from './modules/TreeCustom';
import TreeMultiple from './modules/TreeMultiple';
import TreeSize from './modules/TreeSize';
import TreeVirtualizer from './modules/TreeVirtualizer';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('tree');
}

const TreePage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <TreeBasic />
      </Card>

      <Card
        split
        title="Multiple Selection"
      >
        <TreeMultiple />
      </Card>

      <Card
        split
        title="Controlled"
      >
        <TreeControlled />
      </Card>

      <Card
        split
        title="Custom Render"
      >
        <TreeCustom />
      </Card>

      <Card
        split
        title="Size"
      >
        <TreeSize />
      </Card>

      <Card
        split
        title="Large Data"
      >
        <TreeVirtualizer />
      </Card>
    </div>
  );
};

export default TreePage;
