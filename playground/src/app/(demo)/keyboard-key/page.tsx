import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import KeyboardKeyDemo from './modules/KeyboardKeyDemo';
import KeyboardKeyGroup from './modules/KeyboardKeyGroup';
import KeyboardKeySize from './modules/KeyboardKeySize';
import KeyboardKeyVariants from './modules/KeyboardKeyVariants';

export const metadata: Metadata = generateComponentMetadata('keyboard-key');

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
