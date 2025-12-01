import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import InputBasic from './modules/InputBasic';
import InputDisabled from './modules/InputDisabled';
import InputFile from './modules/InputFileDemo';
import InputSize from './modules/InputSize';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('input');
}

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
