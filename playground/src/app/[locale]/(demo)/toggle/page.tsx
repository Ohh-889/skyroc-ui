import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import ToggleDemo from './modules/ToggleDemo';
import ToggleDisabled from './modules/ToggleDisabled';
import ToggleSize from './modules/ToggleSize';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('toggle');
}

const TogglePage = () => {
  return (
    <div className="flex-c gap-4">
      <ToggleDemo />
      <ToggleSize />
      <ToggleDisabled />
    </div>
  );
};

export default TogglePage;
