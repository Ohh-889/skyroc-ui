'use client';

import { useState } from 'react';
import { RadioGroup } from 'skyroc-ui';
import type { RadioGroupProps } from 'skyroc-ui';

const items: RadioGroupProps['items'] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Banana', value: 'banana' },
  { label: 'Grape', value: 'grape' }
];

const RadioVariant = () => {
  const [value, setValue] = useState<string>('apple');

  return (
    <RadioGroup
      items={items}
      value={value}
      variant="outline"
      onValueChange={setValue}
    />
  );
};

export default RadioVariant;
