'use client';

import { useComponentConfig } from '../config-provider/context';
import ToggleUI from './ToggleUI';
import type { ToggleProps } from './types';

const Toggle = (props: ToggleProps) => {
  const config = useComponentConfig('toggle');

  const mergedProps = {
    ...config,
    ...props
  };

  return <ToggleUI {...mergedProps} />;
};

Toggle.displayName = 'Toggle';

export default Toggle;
