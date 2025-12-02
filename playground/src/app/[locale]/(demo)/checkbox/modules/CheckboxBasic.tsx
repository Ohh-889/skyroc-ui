'use client';

import { useState } from 'react';
import type { CheckedState } from 'skyroc-ui';
import { Checkbox } from 'skyroc-ui';

const CheckboxBasic = () => {
  const [checked, setChecked] = useState<CheckedState>(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
    >
      Accept terms and conditions
    </Checkbox>
  );
};

export default CheckboxBasic;
