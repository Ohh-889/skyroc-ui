import { Card } from 'skyroc-ui';
import ChipBasic from './modules/ChipBasic';
import ChipColor from './modules/ChipColor';
import ChipColorWithContent from './modules/ChipColorWithContent';
import ChipPosition from './modules/ChipPosition';
import ChipSize from './modules/ChipSize';

const ChipPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <ChipBasic />
      </Card>

      <Card
        split
        title="Color"
      >
        <ChipColor />
      </Card>

      <Card
        split
        title="Color With Content"
      >
        <ChipColorWithContent />
      </Card>

      <Card
        split
        title="Position"
      >
        <ChipPosition />
      </Card>

      <Card
        split
        title="Size"
      >
        <ChipSize />
      </Card>
    </div>
  );
};

export default ChipPage;
