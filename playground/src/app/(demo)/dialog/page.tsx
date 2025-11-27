import { Card } from 'skyroc-ui';
import DialogBasic from './modules/DialogBasic';
import DialogWithFooter from './modules/DialogWithFooter';

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
