import { RadioGroup } from 'skyroc-ui';
import type { RadioGroupProps } from 'skyroc-ui';

const items: RadioGroupProps['items'] = [
  { id: 'r1', label: 'A', value: '1' },
  { id: 'r2', label: 'B', value: '2' },
  { id: 'r3', label: 'C', value: '3' }
];

const RadioDisabledAll = () => {
  return (
    <RadioGroup
      disabled
      items={items}
    />
  );
};

export default RadioDisabledAll;
