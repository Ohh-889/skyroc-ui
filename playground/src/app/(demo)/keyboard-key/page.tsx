import { Card } from 'skyroc-ui';
import KeyboardKeyDemo from './modules/KeyboardKeyDemo';
import KeyboardKeyGroup from './modules/KeyboardKeyGroup';
import KeyboardKeySize from './modules/KeyboardKeySize';
import KeyboardKeyVariants from './modules/KeyboardKeyVariants';

const KeyboardKeyPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Combination"
      >
        <KeyboardKeyDemo />
      </Card>

      <Card
        split
        title="Group"
      >
        <KeyboardKeyGroup />
      </Card>

      <Card
        split
        title="Variants"
      >
        <KeyboardKeyVariants />
      </Card>

      <Card
        split
        title="Size"
      >
        <KeyboardKeySize />
      </Card>
    </div>
  );
};

export default KeyboardKeyPage;
