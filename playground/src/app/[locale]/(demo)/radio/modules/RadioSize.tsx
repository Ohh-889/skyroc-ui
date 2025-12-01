import { RadioGroup } from 'skyroc-ui';
import type { RadioGroupProps, ThemeSize } from 'skyroc-ui';

const sizes: ThemeSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const items: RadioGroupProps['items'] = [
  { id: 'r1', label: 'A', value: '1' },
  { id: 'r2', label: 'B', value: '2' },
  { id: 'r3', label: 'C', value: '3' }
];

const RadioSize = () => {
  return (
    <div className="flex-c gap-[12px]">
      {sizes.map(size => (
        <RadioGroup
          items={items}
          key={size}
          size={size}
        />
      ))}
    </div>
  );
};

export default RadioSize;
