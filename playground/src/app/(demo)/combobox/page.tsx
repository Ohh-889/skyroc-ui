import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import ComboboxDemo from './modules/ComboboxDemo';

export const metadata: Metadata = generateComponentMetadata('combobox');

const ComboboxPage = () => {
  return (
    <div className="flex-c gap-4">
      <ComboboxDemo />
    </div>
  );
};

export default ComboboxPage;
