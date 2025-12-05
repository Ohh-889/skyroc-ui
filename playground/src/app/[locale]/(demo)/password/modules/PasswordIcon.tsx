'use client';

import { Lock, LockOpen } from 'lucide-react';
import { Password } from 'skyroc-ui';

const PasswordIcon = () => {
  return (

    <div className="w-80 max-sm:w-auto">
      <Password
        defaultValue="abc123"
        hiddenIcon={<Lock className="size-1em cursor-pointer opacity-50 hover:opacity-100" />}
        placeholder="Please input password"
        visibleIcon={<LockOpen className="size-1em cursor-pointer opacity-50 hover:opacity-100" />}
      />
    </div>

  );
};

export default PasswordIcon;
