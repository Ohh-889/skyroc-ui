import { Card } from 'skyroc-ui';
import Color from './modules/Color';
import ProgressAnimated from './modules/ProgressAnimated';
import ProgressBasic from './modules/ProgressBasic';
import Size from './modules/Size';

const ProgressPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <ProgressBasic />
      </Card>

      <Card
        split
        title="Color"
      >
        <Color />
      </Card>

      <Card
        split
        title="Size"
      >
        <Size />
      </Card>

      <Card
        split
        title="Animated"
      >
        <ProgressAnimated />
      </Card>
    </div>
  );
};

export default ProgressPage;
