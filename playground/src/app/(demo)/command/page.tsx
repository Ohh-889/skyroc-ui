import { Card } from 'skyroc-ui';
import CommandBasic from './modules/CommandBasic';
import CommandDialogDemo from './modules/CommandDialog';

const CommandPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Command"
      >
        <CommandBasic />
      </Card>

      <Card
        split
        title="Command Dialog"
      >
        <CommandDialogDemo />
      </Card>
    </div>
  );
};

export default CommandPage;
