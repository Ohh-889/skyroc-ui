import type { RadioGroupProps } from 'skyroc-ui';
import { RadioGroup } from 'skyroc-ui';

const items: RadioGroupProps['items'] = [
  { id: 'r1', label: 'A', value: '1' },
  { disabled: true, id: 'r2', label: 'B', value: '2' },
  { id: 'r3', label: 'C', value: '3' }
];

const RadioDisabledItem = () => {
  return <RadioGroup items={items} />;
};

export default RadioDisabledItem;
