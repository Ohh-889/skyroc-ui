import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import CustomSize from './modules/CustomSize';
import DefaultDemo from './modules/DefaultDemo';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('skeleton');
}

const SkeletonPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Skeleton"
      >
        <DefaultDemo />
      </Card>

      <Card
        split
        title="Skeleton Container"
      >
        <CustomSize />
      </Card>
    </div>
  );
};

export default SkeletonPage;
