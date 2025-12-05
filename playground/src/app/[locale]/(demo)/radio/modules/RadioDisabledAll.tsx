import { RadioGroup } from 'skyroc-ui';
import type { RadioGroupProps } from 'skyroc-ui';

const items: RadioGroupProps['items'] = [
  { label: 'A', value: '1' },
  { label: 'B', value: '2' },
  { label: 'C', value: '3' }
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
