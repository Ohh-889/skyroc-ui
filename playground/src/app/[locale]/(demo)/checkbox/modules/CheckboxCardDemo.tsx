'use client';

import { useState } from 'react';
import { Palette, Sparkles, Zap } from 'lucide-react';
import { CheckboxCard } from 'skyroc-ui';
import type { CheckedState } from 'skyroc-ui';

const CheckboxCardDemo = () => {
  const [checked1, setChecked1] = useState<CheckedState>(false);
  const [checked2, setChecked2] = useState<CheckedState>(true);
  const [checked3, setChecked3] = useState<CheckedState>(false);

  return (
    <div className="flex  flex-col gap-4">
      <CheckboxCard
        checked={checked1}
        color="carbon"
        description="Enable color customization for your theme"
        icon={<Palette className="size-5" />}
        label="Color Scheme"
        onCheckedChange={setChecked1}
      />

      <CheckboxCard
        checked={checked2}
        color="primary"
        description="Add beautiful animations and transitions"
        icon={<Sparkles className="size-5" />}
        label="Animations"
        onCheckedChange={setChecked2}
      />

      <CheckboxCard
        checked={checked3}
        color="warning"
        description="Optimize for faster load times"
        icon={<Zap className="size-5" />}
        label="Performance Mode"
        onCheckedChange={setChecked3}
      />
    </div>
  );
};

export default CheckboxCardDemo;
