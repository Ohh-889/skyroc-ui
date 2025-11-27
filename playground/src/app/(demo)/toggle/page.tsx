import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import ToggleDemo from './modules/ToggleDemo';
import ToggleDisabled from './modules/ToggleDisabled';
import ToggleSize from './modules/ToggleSize';

export const metadata: Metadata = generateComponentMetadata('toggle');

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
