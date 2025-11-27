import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';

export const metadata: Metadata = generateComponentMetadata('input');
import InputBasic from './modules/InputBasic';
import InputDisabled from './modules/InputDisabled';
import InputFile from './modules/InputFile';
import InputSize from './modules/InputSize';

const InputPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <InputBasic />
      </Card>

      <Card
        split
        title="Size"
      >
        <InputSize />
      </Card>

      <Card
        split
        title="Disabled"
      >
        <InputDisabled />
      </Card>

      <Card
        split
        title="File"
      >
        <InputFile />
      </Card>
    </div>
  );
};

export default InputPage;
