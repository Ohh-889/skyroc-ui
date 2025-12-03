'use client';

import { Icon, Input } from 'skyroc-ui';

const InputSlot = () => {
  return (
    <div className="w-80 max-sm:w-auto">
      <Input
        leading={<Icon icon="lucide:search" />}
        trailing={<Icon icon="lucide:mic" />}
      />
    </div>
  );
};

export default InputSlot;
