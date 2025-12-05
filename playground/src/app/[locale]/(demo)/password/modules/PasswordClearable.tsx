'use client';

import { Password } from 'skyroc-ui';

const PasswordClearable = () => {
  return (
    <div className="w-80 max-sm:w-auto">
      <Password
        clearable
        defaultValue="abc123"
        placeholder="Please input password"
      />
    </div>
  );
};

export default PasswordClearable;
