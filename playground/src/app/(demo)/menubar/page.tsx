import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import MenubarBasic from './modules/MenubarBasic';

export const metadata: Metadata = generateComponentMetadata('menubar');

const MenubarPage = () => {
  return (
    <Card
      split
      title="Menubar"
    >
      <MenubarBasic />
    </Card>
  );
};

export default MenubarPage;
