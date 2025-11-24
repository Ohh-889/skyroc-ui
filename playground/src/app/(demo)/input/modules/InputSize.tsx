import type { ThemeSize } from 'skyroc-ui';
import { Card, Input } from 'skyroc-ui';

const sizes: ThemeSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const InputSize = () => {
  return (
    <Card
      split
      title="Size"
    >
      <div className="w-320px flex-c-stretch lt-sm:w-auto gap-3">
        {sizes.map(size => (
          <div key={size}>
            <div>{size}</div>

            <Input
              placeholder={`${size} Please input`}
              size={size}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default InputSize;
