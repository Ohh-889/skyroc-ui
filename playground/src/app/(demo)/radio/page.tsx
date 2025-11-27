import { Card } from 'skyroc-ui';
import RadioColor from './modules/RadioColor';
import RadioDisabledAll from './modules/RadioDisabledAll';
import RadioDisabledItem from './modules/RadioDisabledItem';
import RadioSize from './modules/RadioSize';
import RadioVertical from './modules/RadioVertical';

const RadioPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Color"
      >
        <RadioColor />
      </Card>

      <Card
        split
        title="Orientation: Vertical"
      >
        <RadioVertical />
      </Card>

      <Card
        split
        title="Disabled Item"
      >
        <RadioDisabledItem />
      </Card>

      <Card
        split
        title="Disabled All"
      >
        <RadioDisabledAll />
      </Card>

      <Card
        split
        title="Size"
      >
        <RadioSize />
      </Card>
    </div>
  );
};

export default RadioPage;
