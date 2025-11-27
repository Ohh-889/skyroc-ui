import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import AvatarBasic from './modules/AvatarBasic';
import AvatarGroup from './modules/AvatarGroup';
import AvatarSize from './modules/AvatarSize';

export const metadata: Metadata = generateComponentMetadata('avatar');

const AvatarPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card
        split
        title="Basic"
      >
        <AvatarBasic />
      </Card>

      <Card
        split
        title="Sizes"
      >
        <AvatarSize />
      </Card>

      <Card
        split
        title="Fallback"
      >
        <AvatarFallback />
      </Card>

      <Card
        split
        title="Custom Fallback"
      >
        <AvatarCustomFallback />
      </Card>

      <Card
        split
        title="Avatar Group"
      >
        <AvatarGroup />
      </Card>
    </div>
  );
};

export default AvatarPage;
