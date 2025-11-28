'use client';

import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { useComponentConfig } from '../config-provider/context';
import SliderUI from './SliderUI';
import type SliderRoot from './SliderRoot';
import type { SliderProps } from './types';

const Slider = forwardRef<ComponentRef<typeof SliderRoot>, SliderProps>((props, ref) => {
  const config = useComponentConfig('slider');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <SliderUI
      {...mergedProps}
      ref={ref}
    />
  );
});

Slider.displayName = 'Slider';

export default Slider;
