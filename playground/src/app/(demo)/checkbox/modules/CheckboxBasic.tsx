'use client';

import { useState } from 'react';
import { Checkbox } from 'skyroc-ui';

const CheckboxBasic = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      id="basic"
      onCheckedChange={setChecked}
    >
      Accept terms and conditions
    </Checkbox>
  );
};

export default CheckboxBasic;
