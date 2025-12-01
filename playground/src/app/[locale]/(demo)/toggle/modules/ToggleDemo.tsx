import type { ToggleProps } from 'skyroc-ui';
import { Card, Toggle } from 'skyroc-ui';

const variants: ToggleProps['variant'][] = ['ghost', 'outline'];

const ToggleDemo = () => {
  return (
    <Card
      split
      title="Variant"
    >
      <div className="gap-12px flex">
        {variants.map(variant => (
          <Toggle
            key={variant}
            variant={variant}
          >
            {variant}
          </Toggle>
        ))}
      </div>
    </Card>
  );
};

export default ToggleDemo;
