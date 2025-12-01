import type { RadioGroupProps } from 'skyroc-ui';
import { RadioGroup } from 'skyroc-ui';

const items: RadioGroupProps['items'] = [
  { id: 'r1', label: 'A', value: '1' },
  { id: 'r2', label: 'B', value: '2' },
  { id: 'r3', label: 'C', value: '3' }
];

const RadioVertical = () => {
  return (
    <RadioGroup
      items={items}
      orientation="vertical"
    />
  );
};

export default RadioVertical;
