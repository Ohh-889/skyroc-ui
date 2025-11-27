'use client';

import { useState } from 'react';
import { Input } from 'skyroc-ui';

const InputBasic = () => {
  const [value, setValue] = useState('');

  return (
    <div className="w-80 max-sm:w-auto">
      <Input
        placeholder="Please input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <p className="text-muted-foreground mt-2 text-sm">Value: {value}</p>
    </div>
  );
};

export default InputBasic;

