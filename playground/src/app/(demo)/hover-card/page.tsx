import { Card } from 'skyroc-ui';
import HoverCardArrow from './modules/HoverCardArrow';
import HoverCardBasic from './modules/HoverCardBasic';

const HoverCardPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Default"
      >
        <HoverCardBasic />
      </Card>

      <Card
        split
        title="With Arrow"
      >
        <HoverCardArrow />
      </Card>
    </div>
  );
};

export default HoverCardPage;
