import { Card } from 'skyroc-ui';
import Default from './modules/Default';
import ResizableHorizontal from './modules/ResizableHorizontal';
import ResizableVertical from './modules/ResizableVertical';

const ResizablePage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Horizontal"
      >
        <ResizableHorizontal />
      </Card>

      <Card
        split
        title="Vertical"
      >
        <ResizableVertical />
      </Card>

      <Card
        split
        title="Nested"
      >
        <Default />
      </Card>
    </div>
  );
};

export default ResizablePage;
