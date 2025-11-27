import { Card } from 'skyroc-ui';
import PopoverBasic from './modules/PopoverBasic';
import PopoverControlled from './modules/PopoverControlled';
import PopoverPlacement from './modules/PopoverPlacement';
import PopoverSize from './modules/PopoverSize';
import PopoverWithArrow from './modules/PopoverWithArrow';

const PopoverPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <PopoverBasic />
      </Card>

      <Card
        split
        title="With Arrow"
      >
        <PopoverWithArrow />
      </Card>

      <Card
        split
        title="Placement"
      >
        <PopoverPlacement />
      </Card>

      <Card
        split
        title="Size"
      >
        <PopoverSize />
      </Card>

      <Card
        split
        title="Controlled"
      >
        <PopoverControlled />
      </Card>
    </div>
  );
};

export default PopoverPage;
