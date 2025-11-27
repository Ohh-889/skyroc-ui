import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import FormBasic from './modules/FormBasic';

export const metadata: Metadata = generateComponentMetadata('form');

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
