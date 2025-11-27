import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import CustomSize from './modules/CustomSize';
import DefaultDemo from './modules/DefaultDemo';

export const metadata: Metadata = generateComponentMetadata('skeleton');

const SkeletonPage = () => {
  return (
    <div className="flex-c gap-4">
      <DefaultDemo />
      <CustomSize />
    </div>
  );
};

export default SkeletonPage;
