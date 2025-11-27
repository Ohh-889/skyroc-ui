import { Card } from 'skyroc-ui';
import BadgeColor from './modules/BadgeColor';
import BadgeShape from './modules/BadgeShape';
import BadgeSize from './modules/BadgeSize';
import BadgeVariant from './modules/BadgeVariant';
import BadgeVariantColors from './modules/BadgeVariantColors';

const BadgePage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Color"
      >
        <BadgeColor />
      </Card>

      <Card
        split
        title="Variant"
      >
        <BadgeVariant />
      </Card>

      <Card
        split
        title="Size"
      >
        <BadgeSize />
      </Card>

      <Card
        split
        title="Shape"
      >
        <BadgeShape />
      </Card>

      <Card
        split
        title="Variant x Colors"
      >
        <BadgeVariantColors />
      </Card>
    </div>
  );
};

export default BadgePage;
