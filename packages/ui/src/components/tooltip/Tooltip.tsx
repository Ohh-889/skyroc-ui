'use client';

import { useComponentConfig } from '../config-provider/context';
import TooltipUI from './TooltipUI';
import type { TooltipProps } from './types';

const Tooltip = (props: TooltipProps) => {
  const config = useComponentConfig('tooltip');

  const mergedProps = {
    ...config,
    ...props
  };

  return <TooltipUI {...mergedProps} />;
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
