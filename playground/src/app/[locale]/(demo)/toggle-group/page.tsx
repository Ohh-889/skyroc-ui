import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import ToggleGroupMulti from './modules/ToggleGroupMulti';
import ToggleGroupSingle from './modules/ToggleGroupSingle';

export async function generateMetadata(): Promise<Metadata> {
  return generateComponentMetadata('toggle-group');
}

const ToggleGroupPage = () => {
  return (
    <div className="flex-c gap-4">
      <ToggleGroupSingle />
      <ToggleGroupMulti />
    </div>
  );
};

export default ToggleGroupPage;
