import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import VirtualGridBasic from './modules/VirtualGridBasic';
import VirtualizerHook from './modules/VirtualizerHook';
import VirtualListBasic from './modules/VirtualListBasic';
import VirtualListHorizontal from './modules/VirtualListHorizontal';
import VirtualListVariable from './modules/VirtualListVariable';

export const metadata: Metadata = generateComponentMetadata('virtualizer');

const VirtualizerPage = () => {
  return (
    <div className="flex-c gap-4">
      <VirtualListBasic />
      <VirtualListVariable />
      <VirtualListHorizontal />
      <VirtualGridBasic />
      <VirtualizerHook />
    </div>
  );
};

export default VirtualizerPage;
