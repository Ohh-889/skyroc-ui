'use client';

import { useState } from 'react';
import { Password } from 'skyroc-ui';

const PasswordBase = () => {
  const [value, setValue] = useState('abc123');

  return (
    <div className="w-80 max-sm:w-auto">
      <Password
        placeholder="Please input password"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <p className="text-muted-foreground mt-2 text-sm">
        Value:
        {' '}
        {value}
      </p>
    </div>
  );
};

export default PasswordBase;
