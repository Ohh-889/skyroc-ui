'use client';

import { useState } from 'react';
import { Apple, Banana, Cherry, Grape } from 'lucide-react';
import { RadioCardGroup } from 'skyroc-ui';
import type { RadioCardGroupProps } from 'skyroc-ui';

const items: RadioCardGroupProps['items'] = [
  { icon: <Apple className="size-5" />, label: 'Apple', value: 'apple', description: 'This is an apple' },
  { icon: <Cherry className="size-5" />, label: 'Cherry', value: 'cherry', description: 'This is a cherry' },
  { icon: <Banana className="size-5" />, label: 'Banana', value: 'banana', description: 'This is a banana' },
  { icon: <Grape className="size-5" />, label: 'Grape', value: 'grape', description: 'This is a grape' }
];

const RadioCardGroupDemo = () => {
  const [value, setValue] = useState<string>('apple');

  return (
    <RadioCardGroup
      color="destructive"
      items={items}
      radioPosition="right"
      value={value}
      onValueChange={setValue}
    />
  );
};

export default RadioCardGroupDemo;
