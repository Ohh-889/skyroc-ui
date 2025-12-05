import type { RadioGroupProps } from 'skyroc-ui';
import { RadioGroup } from 'skyroc-ui';

const items: RadioGroupProps['items'] = [
  { label: 'A', value: '1' },
  { disabled: true, label: 'B', value: '2' },
  { label: 'C', value: '3' }
];

const RadioDisabledItem = () => {
  return <RadioGroup items={items} />;
};

export default RadioDisabledItem;
