import { Card } from 'skyroc-ui';
import AspectRatioBasic from './modules/AspectRatioBasic';
import AspectRatioVariants from './modules/AspectRatioVariants';
import AspectRatioVideo from './modules/AspectRatioVideo';

const AspectRatioPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <AspectRatioBasic />
      </Card>

      <Card
        split
        title="Different Ratios"
      >
        <AspectRatioVariants />
      </Card>

      <Card
        split
        title="Video Embed"
      >
        <AspectRatioVideo />
      </Card>
    </div>
  );
};

export default AspectRatioPage;
