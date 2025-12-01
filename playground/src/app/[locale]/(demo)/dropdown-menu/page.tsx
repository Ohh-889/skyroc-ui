import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import DropdownMenuBasic from './modules/DropdownMenuBasic';
import DropdownMenuCheckbox from './modules/DropdownMenuCheckbox';
import DropdownMenuRadio from './modules/DropdownMenuRadio';
import DropdownMenuShortcuts from './modules/DropdownMenuShortcuts';
import DropdownMenuWithArrow from './modules/DropdownMenuWithArrow';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('dropdown-menu');
}

const DropdownMenuPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card
        split
        title="Basic"
      >
        <DropdownMenuBasic />
      </Card>

      <Card
        split
        title="With Arrow"
      >
        <DropdownMenuWithArrow />
      </Card>

      <Card
        split
        title="With Shortcuts"
      >
        <DropdownMenuShortcuts />
      </Card>

      <Card
        split
        title="Checkbox"
      >
        <DropdownMenuCheckbox />
      </Card>

      <Card
        split
        title="Radio"
      >
        <DropdownMenuRadio />
      </Card>
    </div>
  );
};

export default DropdownMenuPage;
