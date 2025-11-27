import { Card } from 'skyroc-ui';
import IconBasic from './modules/IconBasic';
import IconColor from './modules/IconColor';
import IconSize from './modules/IconSize';

const IconPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <IconBasic />
      </Card>

      <Card
        split
        title="Size"
      >
        <IconSize />
      </Card>

      <Card
        split
        title="Color"
      >
        <IconColor />
      </Card>
    </div>
  );
};

export default IconPage;
