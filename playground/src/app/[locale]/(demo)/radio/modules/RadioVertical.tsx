import type { RadioGroupProps } from 'skyroc-ui';
import { RadioGroup } from 'skyroc-ui';

const items: RadioGroupProps['items'] = [
  { label: 'A', value: '1' },
  { label: 'B', value: '2' },
  { label: 'C', value: '3' }
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
