'use client';

import { useComponentConfig } from '../config-provider/context';
import BadgeUI from './BadgeUI';
import type { BadgeProps } from './types';

const Badge = (props: BadgeProps) => {
  const config = useComponentConfig('badge');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <BadgeUI
      {...mergedProps}
    />
  );
};

Badge.displayName = 'Badge';

export default Badge;
