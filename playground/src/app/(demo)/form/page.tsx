import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';

export const metadata: Metadata = generateComponentMetadata('form');
import FormBasic from './modules/FormBasic';

const FormPage = () => {
  return (
    <Card
      split
      title="Form"
    >
      <FormBasic />
    </Card>
  );
};

export default FormPage;
