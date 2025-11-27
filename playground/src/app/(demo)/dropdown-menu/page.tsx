import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import DropdownMenuBasic from './modules/DropdownMenuBasic';

export const metadata: Metadata = generateComponentMetadata('dropdown-menu');

const DropdownMenuPage = () => {
  return (
    <Card
      split
      title="Dropdown Menu"
    >
      <DropdownMenuBasic />
    </Card>
  );
};

export default DropdownMenuPage;
