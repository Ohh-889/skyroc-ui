import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import DialogBasic from './modules/DialogBasic';
import DialogWithFooter from './modules/DialogWithFooter';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('dialog');
}

const DialogPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Default"
      >
        <DialogBasic />
      </Card>

      <Card
        split
        title="With Footer"
      >
        <DialogWithFooter />
      </Card>
    </div>
  );
};

export default DialogPage;
